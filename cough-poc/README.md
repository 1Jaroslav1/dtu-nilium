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

The detector has three presets. Pick one with `--preset` on `server.py`,
`record.py` or `cough.py detect`. The default is `max`, which leans hard towards
false coughs: a false cough is better than a missed one.

| Preset | Opens at | Stays open to | Peaks apart | Prominence | Within | Throat clearing | Caught | Extra |
|---|---|---|---|---|---|---|---|---|
| `strict` | 0.5 | 0.2 | 0.6 s | 15 dB | 6 dB | no | 9 of 15 | 2 |
| `sensitive` | 0.1 | 0.05 | 0.35 s | 8 dB | 12 dB | no | 14 of 15 | 9 |
| `max` | 0.03 | 0.01 | 0.3 s | 6 dB | 15 dB | counts as cough | 15 of 15 | 26 |

Measured on sessions `20261121-134804`, `20261121-141627` and `20261121-141747`:
15 taps in about 16 minutes. "Opens at" and "Stays open to" are YAMNet cough
scores. Windows are 0.1 s apart. On the untapped 5-minute session
`20261121-140757`, `max` counts 43 coughs, `sensitive` 17 and `strict` 6.

- Away from taps, YAMNet's cough score stayed at or below 0.05 in normal
  activity. Most extras sit next to a tapped cough: other coughs in a bout that
  got one tap, or one cough split into its loud phases.
- Two coughs right at the mic clipped it (0 dBFS), so YAMNet heard "explosion".
  Stay at least 0.5 m away. The page warns when the input clips, and
  `events.csv` has a `clipped` column.
- Matching is lenient: a tap claims any unmatched cough in the 10 s before it.
  One tap can mean one cough or one bout, so "extra" is an upper bound on false
  alarms.
