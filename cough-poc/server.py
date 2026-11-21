"""Record and count coughs, labelled from a web page.

  python server.py            # then open http://localhost:8010

The server is the only program that holds the board's serial port. It records
exactly like record.py; the page's button (or Space) writes a label.
"""

from __future__ import annotations

import argparse
import json
import threading
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

from cough import DEFAULT_PRESET, PRESETS
from record import DATA, Recorder, find_port

PAGE = Path(__file__).with_name("index.html")


def make_handler():
    class Handler(BaseHTTPRequestHandler):
        def _send(self, body: bytes, kind: str, code: int = 200) -> None:
            self.send_response(code)
            self.send_header("Content-Type", kind)
            self.send_header("Cache-Control", "no-store")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)

        def do_GET(self) -> None:
            rec: Recorder = self.server.rec
            if self.path == "/":
                self._send(PAGE.read_bytes(), "text/html; charset=utf-8")
            elif self.path == "/state":
                self._send(json.dumps(rec.snapshot()).encode(), "application/json")
            else:
                self._send(b"not found", "text/plain", 404)

        def do_POST(self) -> None:
            rec: Recorder = self.server.rec
            if self.path == "/tap":
                t = rec.tap()
                self._send(json.dumps({"t": t, "taps": rec.stats["taps"]}).encode(), "application/json")
            else:
                self._send(b"not found", "text/plain", 404)

        def log_message(self, *args) -> None:   # keep the terminal for coughs
            pass

    return Handler


def main() -> None:
    p = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    p.add_argument("--port", default=None, help="serial port (default: first /dev/ttyACM*)")
    p.add_argument("--http", type=int, default=8010)
    p.add_argument("--out", default=str(DATA))
    p.add_argument("--preset", choices=PRESETS, default=DEFAULT_PRESET, help="detector sensitivity")
    args = p.parse_args()

    # Take the web port before creating a session, so a busy port leaves no empty folder.
    try:
        web = ThreadingHTTPServer(("127.0.0.1", args.http), make_handler())
    except OSError as e:
        raise SystemExit(f"Port {args.http} is busy ({e.strerror}). Stop what uses it, or run with --http <other port>.")
    rec = Recorder(args.port or find_port(), Path(args.out), preset=args.preset,
                   on_cough=lambda c, n: print(f"  COUGH #{n} at {c.t:.1f} s  score {c.cough_score:.2f}"))
    web.rec = rec
    threading.Thread(target=web.serve_forever, daemon=True).start()
    print(f"Recording {rec.port} -> {rec.folder}  (preset: {args.preset})\nOpen http://localhost:{args.http}  (Ctrl+C to stop)")
    try:
        rec.run()
    except KeyboardInterrupt:
        rec.stop.set()
    web.shutdown()
    print(f"\nSaved {rec.wav.n / 16000:.1f} s to {rec.folder}")


if __name__ == "__main__":
    main()
