# Cough PoC

Counts one person's coughs from the Atech microphone. The board streams raw
16 kHz audio over USB, the laptop records it continuously and runs
[YAMNet](https://www.kaggle.com/models/google/yamnet) (the AudioSet `Cough` class).
Coughs in one bout are split into separate coughs by loudness peaks.

## Setup (once)

```sh
cd cough-poc
uv venv -p 3.12 .venv && uv pip install -p .venv/bin/python -r requirements.txt
mkdir -p models && curl -fL -o models/yamnet.tflite \
  https://storage.googleapis.com/mediapipe-models/audio_classifier/yamnet/float32/1/yamnet.tflite
```

Linux: your user needs the serial port (`/dev/ttyACM0` is group `uucp` on Arch):
`sudo usermod -aG uucp $USER`, then log in again.

## Flash the board

The microphone sits across ports 1 and 2 of the 14-port board, and the Color
Display (`st7735_tft`) across ports 3 and 4. The screen shows the session's cough
count and flashes orange on each new cough. The laptop detects the coughs and
sends the board the count as the `cough_count` action. From the repo
root, with the repo's `.venv` (Atech SDK) active:

```sh
atech upload cough-poc
```

## Record and count

```sh
.venv/bin/python server.py      # open http://localhost:8010
```

Cough now and then while doing other things, and tap **I just coughed** (or
press Space) right after each cough, once per cough. The page shows the live
count, your taps, the input level and the latest coughs. Ctrl+C stops.
`record.py` does the same in the terminal, with Enter as the tap.

A session lands in `data/<YYYYmmdd-HHMMSS>/`:

| File | Content |
|---|---|
| `audio-HHMMSS.wav` | continuous 16 kHz mono audio, a new file every hour |
| `labels.csv` | your Enter presses (seconds since start, wall time) |
| `events.csv` | detected coughs: time, cough score, peak dBFS, energy dB |
| `session.json` | start time, port |

Peak dBFS and energy are relative strength. They depend on distance to the mic.

## Re-run and score

```sh
.venv/bin/python cough.py detect data/<session> --threshold 0.5   # rewrites events.csv, adds frames.csv
.venv/bin/python cough.py evaluate data/<session>                 # taps vs detections
```

`frames.csv` has YAMNet's cough, throat-clearing, sneeze, speech and laughter
scores for every 0.25 s window, for tuning the threshold. `evaluate` matches
each tap to the latest unmatched cough in the 10 s before it. A cough with no
tap is a false alarm. A tap with no cough is a miss.

## Results so far

The detector leans towards false positives: a false cough is better than a missed one.

- A cough region opens at a YAMNet cough score of 0.1 and stays open down to 0.05.
- Windows are 0.1 s apart.
- Inside a region, loudness peaks count as separate coughs if they are at least
  0.35 s apart, stand out by 8 dB, and are within 12 dB of the loudest peak.

| Session | Length | Taps | Matched | Missed | Extra |
|---|---|---|---|---|---|
| `20261121-134804` | 11.7 min | 8 | 8 | 0 | 8 |
| `20261121-141627` | 1 min | 2 | 1 | 1 | 1 |
| `20261121-141747` | 3 min | 5 | 5 | 0 | 0 |

The earlier strict settings (open at 0.5, keep at 0.2, peaks 0.6 s apart, 15 dB
prominence, within 6 dB) matched 9 of 15 taps with 2 extras.

- Away from taps, YAMNet's cough score stayed at or below 0.05 in about 16 minutes
  of normal activity. Most extras sit next to a tapped cough: they are other
  coughs in a bout that got one tap, or one cough split into its loud phases.
- Two coughs right at the mic clipped it (0 dBFS), so YAMNet heard "explosion".
  Stay at least 0.5 m away. The page warns when the input clips, and
  `events.csv` has a `clipped` column.
- Matching is lenient: a tap claims any unmatched cough in the 10 s before it.
- Labels are the weak spot. One tap can mean one cough or one bout, so "extra"
  is an upper bound on false alarms.
