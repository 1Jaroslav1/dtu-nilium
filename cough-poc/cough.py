"""Cough detection on 16 kHz mono audio with YAMNet, one event per cough.

YAMNet scores ~1 s windows every 0.25 s. Consecutive windows whose Cough score
reaches the threshold form a region; inside a region, loudness peaks at least
MIN_GAP_S apart are counted as individual coughs.

  python cough.py detect SESSION_DIR_OR_WAV   # writes events.csv (+ frames.csv)
  python cough.py evaluate SESSION_DIR        # compares events.csv with labels.csv
"""

from __future__ import annotations

import argparse
import csv
import json
import wave
import zipfile
from dataclasses import dataclass, asdict
from datetime import datetime, timedelta
from pathlib import Path

import numpy as np
from scipy.signal import find_peaks

SR = 16000
WIN = 15600          # YAMNet input: 0.975 s
HOP = 1600           # 0.1 s between windows: 0.25 s missed coughs that fell between windows
MODEL = Path(__file__).with_name("models") / "yamnet.tflite"
CLASSES = {"cough": 42, "throat_clearing": 43, "sneeze": 44, "speech": 0, "laughter": 13}

THRESHOLD = 0.1      # sensitive: a false cough is better than a missed one
KEEP = 0.05          # an open region stays open while the score is at least this
MIN_GAP_S = 0.35     # two coughs closer than this count as one
PEAK_WITHIN_DB = 12  # a peak must be within this many dB of the region's loudest
PROMINENCE_DB = 8    # and stand out this much from its surroundings
ENV_S = 0.01         # loudness envelope resolution


@dataclass
class Cough:
    t: float            # seconds since stream start
    cough_score: float  # best YAMNet cough score in its region
    peak_dbfs: float    # relative strength: depends on distance to the mic
    energy_db: float    # energy in +-150 ms around the peak, dB re full scale
    region_start: float
    region_end: float
    clipped: int        # samples at full scale within +-150 ms: coughing too close to the mic


class Yamnet:
    def __init__(self, path: Path = MODEL):
        from ai_edge_litert.interpreter import Interpreter

        self.it = Interpreter(str(path))
        self.it.allocate_tensors()
        self.inp = self.it.get_input_details()[0]["index"]
        self.out = self.it.get_output_details()[0]["index"]
        self.labels = zipfile.ZipFile(path).read("yamnet_label_list.txt").decode().splitlines()

    def scores(self, window: np.ndarray) -> np.ndarray:
        self.it.set_tensor(self.inp, window.astype(np.float32))
        self.it.invoke()
        return self.it.get_tensor(self.out)[0]


def _db(x: float) -> float:
    return 20 * np.log10(max(x, 1e-9))


def split_coughs(x: np.ndarray, start: float, score: float) -> list[Cough]:
    """Individual coughs in one cough region (float samples in [-1, 1])."""
    hop = int(ENV_S * SR)
    n = len(x) // hop
    if n == 0:
        return []
    env = np.sqrt((x[: n * hop].reshape(n, hop) ** 2).mean(axis=1) + 1e-12)
    env_db = 20 * np.log10(env)
    peaks, _ = find_peaks(
        env_db,
        height=env_db.max() - PEAK_WITHIN_DB,
        prominence=PROMINENCE_DB,
        distance=max(1, int(MIN_GAP_S / ENV_S)),
    )
    if len(peaks) == 0:
        peaks = np.array([int(env_db.argmax())])
    out = []
    end = start + len(x) / SR
    for p in peaks:
        c = p * hop + hop // 2
        near = x[max(0, c - int(0.05 * SR)) : c + int(0.05 * SR)]
        around = x[max(0, c - int(0.15 * SR)) : c + int(0.15 * SR)]
        out.append(
            Cough(
                # plain floats: numpy scalars break json.dumps in the server
                t=round(float(start + c / SR), 3),
                cough_score=round(float(score), 3),
                peak_dbfs=round(float(_db(np.abs(near).max())), 1),
                energy_db=round(float(10 * np.log10((around**2).sum() + 1e-12)), 1),
                region_start=round(float(start), 3),
                region_end=round(float(end), 3),
                clipped=int((np.abs(around) >= 0.999).sum()),
            )
        )
    return out


class CoughDetector:
    """Streaming: feed int16 chunks, get finished coughs back."""

    def __init__(self, threshold: float = THRESHOLD, frames_csv: Path | None = None):
        self.model = Yamnet()
        self.threshold = threshold
        self.buf = np.zeros(0, dtype=np.float32)
        self.buf_start = 0       # absolute sample index of buf[0]
        self.next_frame = 0      # absolute start sample of the next window
        self.region: list[int] | None = None   # [start, end, ] absolute samples
        self.region_score = 0.0
        self.last_t = -1e9       # time of the last cough emitted
        self.frames = None
        if frames_csv:
            self.frames = csv.writer(open(frames_csv, "w", newline=""))
            self.frames.writerow(["t", *CLASSES])

    def feed(self, chunk: np.ndarray) -> list[Cough]:
        self.buf = np.concatenate([self.buf, chunk.astype(np.float32) / 32768])
        found: list[Cough] = []
        while self.next_frame + WIN <= self.buf_start + len(self.buf):
            i = self.next_frame - self.buf_start
            s = self.model.scores(self.buf[i : i + WIN])
            cough = float(s[CLASSES["cough"]])
            if self.frames:
                self.frames.writerow([round(self.next_frame / SR, 3), *(round(float(s[k]), 4) for k in CLASSES.values())])
            # sneezes are out of scope: a window that sounds more like a sneeze is not a cough
            coughy = cough > s[CLASSES["sneeze"]]
            if self.region is None and coughy and cough >= self.threshold:
                self.region = [self.next_frame, self.next_frame + WIN]
                self.region_score = cough
            elif self.region is not None and coughy and cough >= KEEP:
                self.region[1] = self.next_frame + WIN
                self.region_score = max(self.region_score, cough)
            elif self.region is not None:
                found += self._close()
            self.next_frame += HOP
            self._trim()
        return found

    def flush(self) -> list[Cough]:
        return self._close() if self.region is not None else []

    def _close(self) -> list[Cough]:
        a, b = self.region
        self.region = None
        x = self.buf[a - self.buf_start : b - self.buf_start]
        out = []
        for c in split_coughs(x, a / SR, self.region_score):
            if c.t - self.last_t >= MIN_GAP_S:   # neighbouring regions can share a cough
                out.append(c)
                self.last_t = c.t
        return out

    def _trim(self) -> None:
        keep_from = self.region[0] if self.region else self.next_frame
        drop = keep_from - self.buf_start
        if drop > SR * 5:
            self.buf = self.buf[drop:]
            self.buf_start += drop


# ---------------------------------------------------------------- files
def read_wav(path: Path) -> np.ndarray:
    with wave.open(str(path)) as w:
        assert w.getframerate() == SR and w.getnchannels() == 1 and w.getsampwidth() == 2, path
        return np.frombuffer(w.readframes(w.getnframes()), "<i2")


def session_audio(target: Path) -> tuple[list[Path], datetime | None, Path]:
    """WAV files in order, the session's start time, and where to write results."""
    if target.is_file():
        return [target], None, target.parent
    meta = json.loads((target / "session.json").read_text()) if (target / "session.json").exists() else {}
    start = datetime.fromisoformat(meta["start"]) if "start" in meta else None
    return sorted(target.glob("audio-*.wav")), start, target


EVENT_FIELDS = ["wall_time", *Cough.__dataclass_fields__]


def write_events(path: Path, coughs: list[Cough], start: datetime | None) -> None:
    with open(path, "w", newline="") as f:
        w = csv.DictWriter(f, EVENT_FIELDS)
        w.writeheader()
        for c in coughs:
            wall = (start + timedelta(seconds=c.t)).isoformat(timespec="milliseconds") if start else ""
            w.writerow({"wall_time": wall, **asdict(c)})


def cmd_detect(args) -> None:
    wavs, start, out = session_audio(Path(args.target))
    det = CoughDetector(args.threshold, out / "frames.csv")
    coughs: list[Cough] = []
    for wav in wavs:   # hourly files are one continuous stream
        x = read_wav(wav)
        for i in range(0, len(x), SR):
            coughs += det.feed(x[i : i + SR])
    coughs += det.flush()
    write_events(out / "events.csv", coughs, start)
    print(f"{len(coughs)} coughs -> {out / 'events.csv'} (window scores in frames.csv)")


def cmd_evaluate(args) -> None:
    """Each label (tap right after a cough) claims the nearest unclaimed cough
    detected in the WINDOW seconds before it."""
    d = Path(args.target)
    events = [float(r["t"]) for r in csv.DictReader(open(d / "events.csv"))]
    labels = [float(r["t"]) for r in csv.DictReader(open(d / "labels.csv"))]
    claimed: set[int] = set()
    hits = 0
    for lt in labels:
        cands = [i for i, et in enumerate(events) if i not in claimed and lt - args.window <= et <= lt + 0.5]
        if cands:
            claimed.add(max(cands, key=lambda i: events[i]))
            hits += 1
    misses = len(labels) - hits
    false = len(events) - len(claimed)
    print(f"labels (taps): {len(labels)}  detected: {len(events)}")
    print(f"matched: {hits}  missed: {misses}  false alarms: {false}")
    if labels:
        print(f"recall: {hits / len(labels):.0%}", end="  ")
    if events:
        print(f"precision: {len(claimed) / len(events):.0%}")


def main() -> None:
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = p.add_subparsers(dest="cmd", required=True)
    d = sub.add_parser("detect", help="find coughs in a session folder or one WAV")
    d.add_argument("target")
    d.add_argument("--threshold", type=float, default=THRESHOLD)
    d.set_defaults(fn=cmd_detect)
    e = sub.add_parser("evaluate", help="compare events.csv with labels.csv")
    e.add_argument("target")
    e.add_argument("--window", type=float, default=10.0, help="seconds before a tap to look for its cough")
    e.set_defaults(fn=cmd_evaluate)
    args = p.parse_args()
    args.fn(args)


if __name__ == "__main__":
    main()
