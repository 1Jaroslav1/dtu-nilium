# Pucio Counts Coughs — presenter script

**Pitch 4:00 · Questions 1:00.** Keep the last slide up for questions. Times include slide changes and the live demo.

| Part | Slide | Time on slide | Elapsed |
|---|---|---:|---|
| Problem | 1 · Pucio Counts Coughs | 25 s | 0:00–0:25 |
| Problem | 2 · Who needs more than one day? | 40 s | 0:25–1:05 |
| Solution + demo | 3 · A cough counter by the bed | 30 s | 1:05–1:35 |
| Solution + demo | 4 · Live demo | 55 s | 1:35–2:30 |
| Team + learnings | 5 · Our team | 25 s | 2:30–2:55 |
| Team + learnings | 6 · What we learned today | 30 s | 2:55–3:25 |
| Next step + ask | 7 · Help us reach two study teams | 35 s | 3:25–4:00 |
| Questions | Keep slide 7 up | 60 s | 4:00–5:00 |

## 1 · Pucio Counts Coughs · 25 s

*Point to 38%, then pause after the question.*

> What if the only day you measure is a quiet one? In a study of 36 people with chronic cough, the typical day-to-day variability in cough frequency was about 38 percent. That’s a lot of variation to miss when you only see one day. We’re building Pucio to make it easier to count across nights.

The 38% is the median within-person relative standard deviation of daily cough frequency. [Primary study in ERJ Open Research](https://publications.ersnet.org/content/erjor/11/1/00670-2024)

## 2 · Who needs more than one day? · 40 s

> Our first users are PhD students and postdocs running academic chronic-cough studies. Their principal investigator decides what the grant can pay for. Some drug trials use objective cough counts from 24-hour recordings at a handful of visits. A reference monitor lists at about eleven thousand euros, and there’s analyst time on top of that. The Danish studies we reviewed used questionnaires or registry data. What we want to learn from researchers is whether cost and effort drive that choice, and whether more nights of counts would help them answer a study question.

[Equipment and analyst time](../research/S8%20%E2%80%94%20Cost%20of%20current%20monitoring.md) · [Danish research groups](../research/S13%20%E2%80%94%20Danish%20research%20groups.md)

## 3 · A cough counter by the bed · 30 s

*Point to the nightstand, then advance to the demo slide.*

> Picture a small microphone on the nightstand. The person goes to bed as usual, and the researcher gets a count for each night. They could see whether one quiet night was unusual or part of a longer pattern. Our design goal is to save only the counts. Today we’ll show the first piece of that workflow: a microphone and a detector updating the count in real time.

## 4 · Live demo · 55 s

*Before the pitch, open the [live counter](http://localhost:8010/) in a separate tab and verify that the Atech board is connected, the input meter moves, and a test cough appears. If the server is stopped, use the [prototype setup](../../cough-poc/README.md). Use a team member who has agreed to be recorded. Stay at least half a metre from the microphone.*

**1:35–1:55 · Show the board, switch to the counter, point to the meter and detected count.**

> This is the Atech microphone. It sends audio over USB to the laptop, which runs the detector. The dashboard shows the input level and a running total. Watch the number marked “detected.”

**1:55–2:15 · Cough once, wait for the event, and point to the new time stamp. If needed, retry once, then return to the deck.**

> There’s the new detection and the time it happened. The count updates on its own. That orange button is for manual labels when we evaluate the detector.

**2:15–2:30 · Switch back to the deck and advance to the team slide.**

> We save audio during these prototype tests so we can go back through missed or extra detections. The overnight version would keep the counts alone.

*If the live counter stalls, point to the captured dashboard already on slide 4 and say:*

> Here’s a capture from our prototype. You can see the detected count at the top and the time-stamped events below it. We’ll use these logs to check how the detector performs overnight.

## 5 · Our team · 25 s

*Introduce yourself by name and point to the group photo. Add teammates’ names here if you want to introduce each person. Allow about 8 seconds for names.*

> We’re the four-person team behind Pucio. Today we connected the microphone to a live counter, ran short recording sessions with manual labels, and looked at how academic cough studies collect data. Comparing our taps with what the detector picked up gave us a clear next experiment.

## 6 · What we learned today · 30 s

> In about 16 minutes of early testing, our stricter setting matched nine of fifteen manual taps. A more sensitive setting matched fourteen, with nine extra detections instead of two. One tap can stand for a whole coughing fit, so some of those extras may be real coughs that we didn’t label separately. We learned that we need a clearer reference count before we can say how accurate the counter is overnight.

[Prototype methods and results](../../cough-poc/README.md)

## 7 · Help us reach two study teams · 35 s

*Look up from the slide and give the room a moment after the ask.*

> Can you introduce us to two Danish chronic-cough researchers? We’d like to walk through their last study: how they measured cough, what it took to get a count, and whether several nights at home would have changed anything. In parallel, we’ll run a consented overnight test and compare the device against a manual count. Those two steps will tell us whether the bedside format solves a problem worth pursuing. Thank you. We have a minute for questions.

## Questions · 4:00–5:00

- **How accurate is it?** We have short tests with manual taps. The overnight comparison will give us a better reference for misses and extra detections.
- **What about privacy?** We save audio for consented prototype tests. The planned bedside device would process audio locally and retain only counts.
- **Why use this instead of Hyfe or VitaloJAK?** Hyfe already offers multi-day tracking, and VitaloJAK is established in large trials. We’re testing whether academic teams value a bedside option that patients can use without wearing anything.
