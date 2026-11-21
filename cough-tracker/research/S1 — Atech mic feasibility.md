# S1 — Atech mic feasibility

**Summary:** Desk research on S1. Verdict: **partly**. The mic hardware is capable (≥23 kHz in high-performance mode), and similar microcontrollers run cough classifiers at 16 kHz. But the Atech firmware's sample rate isn't documented, and no ESP32 cough benchmark exists, so a hands-on test decides it.
**Tags:** #cough-tracker #hypotheses #research #S1
**Created:** 2026-11-21
**Last Updated:** 2026-11-21

---

## Hypothesis

> The Atech microphone module + ESP32-S3 can capture audio at ≥8–16 kHz continuously and run a cough detector on the device, overnight.

**Type:** desk (S#)

## Pre-committed criteria (written before searching)

| | Criterion | What it changes |
|---|---|---|
| Confirmation | Mic supports ≥16 kHz **and** the Atech API allows continuous sampling **and** a published cough model runs on a comparable MCU | We can build the prototype on the kit as planned |
| Refutation | Mic/API limited to levels or short clips only, or cough models need far more compute than an ESP32-S3 has | Prototype must stream audio to a laptop/phone, so "no audio leaves the device" isn't demonstrable on the kit |

## Queries run

| # | Query | Looking for | Mode |
|---|---|---|---|
| 1 | Atech docs: microphone module, board, llms.txt | API and sample rate | Atech MCP |
| 2 | ICS-43434 datasheet sample rate | confirmation | standard |
| 3 | on-device cough detection ESP32 TinyML 16 kHz | confirmation **and refutation** (no ESP32 results) | standard |

## Evidence

| Claim | Value | Tier | Label | Source |
|---|---|---|---|---|
| Mic chip | TDK ICS-43434, I2S digital, ~5 mA | A (vendor doc) | [DATA] | Atech llms.txt |
| Mic sample rate | 23–51.6 kHz high-performance; 6.25–18.75 kHz low-power | A | [DATA] | ICS-43434 datasheet |
| Mic frequency response | 60 Hz–20 kHz | A | [DATA] | ICS-43434 datasheet |
| API | `get_samples` (raw buffer), `get_sound_level`, `start_recording` (**max 10 s** in RAM) | A | [DATA] | Atech llms.txt |
| Firmware sample rate | **not documented** (speaker path uses 16 kHz) | — | gap | Atech llms.txt |
| Storage for evidence | microSD module exists (log, write_file) | A | [DATA] | Atech llms.txt |
| Cough model on MCU | 16 kHz, 0.5 s clips, <100 ms inference, ~91% sens / 99.7% spec on Cortex-M33 @128 MHz | B (Edge Impulse paper) | [DATA] | Edge Impulse PDF |
| Model size | <16k-parameter nets designed for embedded use | B | [DATA] | EPFL report |
| ICS-43434 lifecycle | Marked EOL by TDK | A | [DATA] | TDK product page |

**Conflicts between sources:** none. The gap is the firmware sample rate and continuous-capture behaviour, which no source covers.

## Verdict

**partly**

**Why:** the mic hardware and `get_samples` API meet the bar [DATA], and an ESP32-S3 (dual core, 240 MHz, vector instructions) is at least comparable to the Cortex-M33 used in the published cough model [ESTIMATE]. Not confirmed: the Atech firmware's actual sample rate, and whether continuous capture + inference runs all night without dropouts.

**What it changes:** the prototype path stays on the kit. The 10 s recording limit means we build on `get_samples` in a loop, not `start_recording`. Plan B (stream to a laptop) only if the hands-on test fails.

**Cheapest next step to decide it:** 1 hour with the Atech Python SDK. Read `atech info microphone` for the rate, capture 10 s of coughs + speech, save via microSD, and check the spectrum. Then a 1-night soak test logging `get_sound_level` peaks.

## For interviews

None. This is a build question.

## New hypotheses spotted (not researched)

- The mic part is end-of-life at TDK, which is a supply risk only if this ever goes to production.

## Sources
- [Atech llms.txt](https://atech.dev/llms.txt) — A, module API
- [ICS-43434 datasheet v1.2 (SparkFun mirror)](https://cdn.sparkfun.com/assets/a/9/c/9/1/DS-000069-ICS-43434-v1.2.pdf) — A, sample rate and response
- [TDK ICS-43434 product page](https://invensense.tdk.com/products/ics-43434/) — A, EOL status
- [Edge Impulse — Towards a neural cough classifier for edge devices](https://www.edgeimpulse.com/blog/content/files/601331581ba868154325e525/6509bff988b8dffade126faa_towards-20a-20neural-20cough-20classifier-20for-20edge-20devices.pdf) — B, on-MCU performance
- [EPFL edge cough detector report](https://sid030sid.github.io/assets/files/report_edge_cough_detector.pdf) — B, model size

---

## Useful links and references
- [[../01 🧪 Hypotheses — tracker]] — row updated from this note
