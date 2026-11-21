"""Record the Atech microphone continuously and count coughs live.

  python record.py                 # auto-picks /dev/ttyACM*, label with Enter
  python record.py --no-detect     # only record
  python server.py                 # the same, labelled from a web page

Writes data/<session>/: audio-<HHMMSS>.wav (a new file every hour),
session.json, labels.csv (one tap right after each cough) and events.csv
(the coughs detected live). Ctrl+C stops and closes the files cleanly.
"""

from __future__ import annotations

import argparse
import base64
import csv
import glob
import json
import sys
import threading
import time
import wave
from collections import deque
from dataclasses import asdict
from datetime import datetime, timedelta
from pathlib import Path

import numpy as np
import serial

from cough import SR, Cough, CoughDetector, EVENT_FIELDS, PRESETS, DEFAULT_PRESET

CHUNK = 256
WAV_SECONDS = 3600
DATA = Path(__file__).with_name("data")


def find_port() -> str:
    port = next(iter(sorted(glob.glob("/dev/ttyACM*"))), None)
    if not port:
        print("No /dev/ttyACM* yet: waiting for /dev/ttyACM0. Plug the board in with a USB data cable.")
        return "/dev/ttyACM0"
    return port


def audio_chunks(s: serial.Serial, stats: dict, stop: threading.Event):
    """int16 chunks in stream order; lost chunks come back as silence so the
    timeline stays aligned with wall time."""
    s.reset_input_buffer()
    last_seq = last_drop = None
    while not stop.is_set():
        line = s.readline()
        if not line.startswith(b'{"type":"audio"'):
            continue
        try:
            m = json.loads(line)
            x = np.frombuffer(base64.b64decode(m["b64"]), "<i2")
        except (ValueError, KeyError):
            stats["bad"] += 1
            continue
        if last_seq is not None and m["seq"] != last_seq + 1:
            lost = (m["seq"] - last_seq - 1) % 2**32
            stats["lost"] += lost * CHUNK
            yield np.zeros(lost * CHUNK, np.int16)
        if last_drop is not None and m["drop"] > last_drop:
            stats["lost"] += m["drop"] - last_drop
            yield np.zeros(m["drop"] - last_drop, np.int16)
        last_seq, last_drop = m["seq"], m["drop"]
        yield x


class WavWriter:
    def __init__(self, folder: Path, start: datetime):
        self.folder, self.start, self.n, self.w = folder, start, 0, None

    def write(self, x: np.ndarray) -> None:
        while len(x):
            if self.w is None or self.n % (SR * WAV_SECONDS) == 0 and self.n:
                self._open()
            room = SR * WAV_SECONDS - self.n % (SR * WAV_SECONDS)
            self.w.writeframes(x[:room].tobytes())
            self.n += len(x[:room])
            x = x[room:]

    def _open(self) -> None:
        self.close()
        t = self.start + timedelta(seconds=self.n / SR)
        self.w = wave.open(str(self.folder / f"audio-{t:%H%M%S}.wav"), "wb")
        self.w.setnchannels(1)
        self.w.setsampwidth(2)
        self.w.setframerate(SR)

    def close(self) -> None:
        if self.w:
            self.w.close()
            self.w = None


class Recorder:
    """One recording session: audio to WAV, coughs to events.csv, taps to labels.csv."""

    def __init__(self, port: str, out: Path = DATA, detect: bool = True, on_cough=None,
                 preset: str = DEFAULT_PRESET):
        self.port = port
        self.start = datetime.now().astimezone()
        self.folder = Path(out) / f"{self.start:%Y%m%d-%H%M%S}"
        self.folder.mkdir(parents=True)
        (self.folder / "session.json").write_text(
            json.dumps({"start": self.start.isoformat(), "port": port, "sample_rate": SR, "preset": preset}))
        self.wav = WavWriter(self.folder, self.start)
        self._labels = csv.writer(open(self.folder / "labels.csv", "w", newline="", buffering=1))
        self._labels.writerow(["t", "wall_time"])
        self._events = csv.DictWriter(open(self.folder / "events.csv", "w", newline="", buffering=1), EVENT_FIELDS)
        self._events.writeheader()
        self.det = CoughDetector(preset) if detect else None
        self.on_cough = on_cough
        self.stats = {"lost": 0, "bad": 0, "taps": 0, "coughs": 0}
        self.level_dbfs = -120.0
        self.recent: deque[dict] = deque(maxlen=20)
        self.stop = threading.Event()
        self.lock = threading.Lock()
        self.serial: serial.Serial | None = None
        self.board = "connecting"

    def show_count(self) -> None:
        """Board screen shows the count and flashes when it goes up."""
        if self.serial:   # best effort: the board may have just gone away
            line = json.dumps({"action": "cough_count", "value": str(self.stats["coughs"])})
            self.serial.write((line + "\n").encode())

    def wall(self, t: float) -> str:
        return (self.start + timedelta(seconds=t)).isoformat(timespec="milliseconds")

    def tap(self) -> float:
        with self.lock:
            t = self.wav.n / SR
            self._labels.writerow([round(t, 3), self.wall(t)])
            self.stats["taps"] += 1
            return t

    def _cough(self, c: Cough) -> None:
        row = {"wall_time": self.wall(c.t), **asdict(c)}
        with self.lock:
            self._events.writerow(row)
            self.stats["coughs"] += 1
            self.recent.appendleft(row)
        self.show_count()
        if self.on_cough:
            self.on_cough(c, self.stats["coughs"])

    def run(self) -> None:
        """Blocks until stop is set; closes the files on the way out. Survives the
        board dropping off USB: waits for it, pads the gap with silence so the
        timeline stays aligned with wall time, and carries on in the same session."""
        peak, last = 0, time.time()
        lost_at = None
        try:
            while not self.stop.is_set():
                try:
                    self.serial = serial.Serial(self.port, 115200, timeout=1)
                except (serial.SerialException, OSError):
                    self.board = "disconnected: plug the board back in"
                    if lost_at is None:
                        lost_at = time.time()
                    self.stop.wait(0.5)
                    continue
                if lost_at is not None:   # silence for the time the board was away
                    gap = np.zeros(int((time.time() - lost_at) * SR), np.int16)
                    with self.lock:
                        self.wav.write(gap)
                    self.stats["lost"] += len(gap)
                    lost_at = None
                    print(f"  board back after {len(gap) / SR:.1f} s")
                self.board = "connected"
                self.show_count()   # new session: 0; after a reconnect: the current count
                try:
                    for x in audio_chunks(self.serial, self.stats, self.stop):
                        with self.lock:
                            self.wav.write(x)
                        peak = max(peak, int(np.abs(x).max()) if len(x) else 0)
                        if time.time() - last >= 0.25:
                            self.level_dbfs = round(20 * np.log10(max(peak, 1) / 32768), 1)
                            peak, last = 0, time.time()
                        for c in self.det.feed(x) if self.det else []:
                            self._cough(c)
                except (serial.SerialException, OSError):
                    print("  board disconnected, waiting for it")
                    self.board = "disconnected: plug the board back in"
                    lost_at = time.time()
                finally:
                    self.serial.close()
                    self.serial = None
        finally:
            for c in self.det.flush() if self.det else []:
                self._cough(c)
            with self.lock:
                self.wav.close()

    def snapshot(self) -> dict:
        with self.lock:
            return {
                "folder": str(self.folder), "seconds": round(self.wav.n / SR, 1),
                "level_dbfs": self.level_dbfs, "board": self.board, **self.stats, "recent": list(self.recent),
            }


def main() -> None:
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("--port", default=None)
    p.add_argument("--out", default=str(DATA))
    p.add_argument("--no-detect", action="store_true")
    p.add_argument("--preset", choices=PRESETS, default=DEFAULT_PRESET, help="detector sensitivity")
    args = p.parse_args()

    rec = Recorder(args.port or find_port(), Path(args.out), not args.no_detect, preset=args.preset,
                   on_cough=lambda c, n: print(f"  COUGH #{n} at {c.t:.1f} s  score {c.cough_score:.2f}  peak {c.peak_dbfs:.0f} dBFS"))

    def on_enter() -> None:   # one Enter per cough, right after it
        for _ in sys.stdin:
            print(f"  tap #{rec.stats['taps'] + 1} at {rec.tap():.1f} s")

    def status() -> None:
        while not rec.stop.wait(5):
            s = rec.snapshot()
            print(f"[{s['seconds']:7.1f} s] peak {s['level_dbfs']:5.1f} dBFS  lost {s['lost']} samples  "
                  f"taps {s['taps']}  coughs {s['coughs']}")

    threading.Thread(target=on_enter, daemon=True).start()
    threading.Thread(target=status, daemon=True).start()
    print(f"Recording {rec.port} -> {rec.folder}\nPress Enter right after each cough. Ctrl+C to stop.")
    try:
        rec.run()
    except KeyboardInterrupt:
        rec.stop.set()
    print(f"\nSaved {rec.wav.n / SR:.1f} s to {rec.folder}")


if __name__ == "__main__":
    main()
