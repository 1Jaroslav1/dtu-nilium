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

Detector settings now:
- cough score threshold 0.5 to open a cough region, 0.2 to keep it open;
- windows every 0.1 s;
- loudness peaks at least 0.6 s apart, 15 dB prominence, within 6 dB of the loudest peak.

| Session | Length | Taps | Matched | Missed | Extra |
|---|---|---|---|---|---|
| `20261121-134804` | 11.7 min | 8 | 7 | 1 | 2 |
| `20261121-141627` | 1 min | 2 | 1 | 1 | 0 |
| `20261121-141747` | 3 min | 5 | 1 | 4 | 0 |

- Away from taps, YAMNet's cough score never went above 0.05 in about 16 minutes
  of normal activity. Nothing that isn't a cough is being counted.
- The 2 extras in the first session are strong second coughs (0.74 and 0.94)
  about 1 s after a tapped one. They look like bouts that got one tap.
- Two of the misses clipped the mic (0 dBFS), so YAMNet heard "explosion" or
  "gunshot". These were coughs right at the mic. Stay at least 0.5 m away. The
  page now warns when the input clips, and `events.csv` has a `clipped` column.
- The other misses have only speech or quiet sounds before the tap. They are
  either very weak coughs or taps with nothing to match.
- Moving from windows every 0.25 s to every 0.1 s raised one real cough from
  0.59 to 0.89. Scores depend on where the cough falls in the window.
- Labels are the weak spot. One tap can mean one cough or one bout, and a tap
  can come up to 10 s late.
