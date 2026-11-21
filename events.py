"""Talk to a running Atech board: print its events and send it actions.

Protocol (https://atech.dev/docs, "Events & actions"):
  Board -> host (event):  {"event_type": "sensor|button|state|log", "key": "...", "value": ...}
  Host -> board (action): {"action": "...", "value": ...}
Which keys/actions exist depends on the modules in your build and its firmware.

USB:  115200 baud, one JSON object per line. Board sends {"type": "event", "payload": {...}}.
WiFi: wss://gateway.atech.dev/ws/live/<project id>. Board sends
      {"type": "device_event", "payload": {...}}; you send
      {"type": "send_to_device", "device_id": "<project id>", "payload": {...}}.

Usage:
  python events.py usb                       # auto-picks the serial port
  python events.py usb --port COM5
  python events.py wifi --project <project id>
  ...then type an action as JSON and press Enter, e.g.
  {"action": "set_color", "value": {"r": 255, "g": 0, "b": 0}}
"""

from __future__ import annotations

import argparse
import asyncio
import json
import sys
import threading

GATEWAY = "wss://gateway.atech.dev/ws/live/{project}"


def show_event(payload: dict) -> None:
    kind = payload.get("event_type", "?")
    print(f"[{kind}] {payload.get('key')} = {payload.get('value')!r}", flush=True)


def parse_action(line: str) -> dict | None:
    line = line.strip()
    if not line:
        return None
    try:
        action = json.loads(line)
    except json.JSONDecodeError as e:
        print(f"! not JSON: {e}", file=sys.stderr)
        return None
    if not isinstance(action, dict) or "action" not in action:
        print('! expected {"action": "...", "value": ...}', file=sys.stderr)
        return None
    return action


# ---------------------------------------------------------------- USB
def run_usb(port: str | None, baud: int) -> None:
    import serial
    from serial.tools import list_ports

    if port is None:
        ports = list(list_ports.comports())
        if not ports:
            sys.exit("No serial ports found. Plug the board in with a USB-C *data* cable.")
        port = ports[0].device
        print(f"Using {port} ({ports[0].description})")

    ser = serial.Serial(port, baud, timeout=1)

    def reader() -> None:
        while True:
            raw = ser.readline()
            if not raw:
                continue
            text = raw.decode("utf-8", errors="replace").strip()
            try:
                msg = json.loads(text)
            except json.JSONDecodeError:
                print(f"  {text}")  # plain firmware log line
                continue
            if isinstance(msg, dict) and msg.get("type") == "event":
                show_event(msg.get("payload", {}))
            else:
                print(f"  {msg}")

    threading.Thread(target=reader, daemon=True).start()
    print("Listening. Type an action as JSON, Ctrl+C to quit.")
    try:
        for line in sys.stdin:
            if (action := parse_action(line)) is not None:
                ser.write((json.dumps(action) + "\n").encode())
    except KeyboardInterrupt:
        pass
    finally:
        ser.close()


# ---------------------------------------------------------------- WiFi
async def run_wifi(project: str) -> None:
    import websockets

    async with websockets.connect(GATEWAY.format(project=project)) as ws:
        print("Connected. Type an action as JSON, Ctrl+C to quit.")

        async def receive() -> None:
            async for raw in ws:
                msg = json.loads(raw)
                if msg.get("type") == "device_event":
                    show_event(msg.get("payload", {}))
                else:
                    print(f"  {msg}")

        async def send() -> None:
            loop = asyncio.get_running_loop()
            while True:
                line = await loop.run_in_executor(None, sys.stdin.readline)
                if not line:
                    return
                if (action := parse_action(line)) is not None:
                    await ws.send(json.dumps(
                        {"type": "send_to_device", "device_id": project, "payload": action}
                    ))

        await asyncio.gather(receive(), send())


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = ap.add_subparsers(dest="mode", required=True)
    usb = sub.add_parser("usb")
    usb.add_argument("--port", help="e.g. COM5 (default: first port found)")
    usb.add_argument("--baud", type=int, default=115200)
    wifi = sub.add_parser("wifi")
    wifi.add_argument("--project", required=True, help="project id from the editor's Docs tab")
    args = ap.parse_args()

    if args.mode == "usb":
        run_usb(args.port, args.baud)
    else:
        try:
            asyncio.run(run_wifi(args.project))
        except KeyboardInterrupt:
            pass


if __name__ == "__main__":
    main()
