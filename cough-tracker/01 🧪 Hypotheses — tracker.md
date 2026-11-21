# Hypotheses — tracker (Cough Tracker)

**Summary:** Hypotheses tested in round-1 conversations, with status updated only after a full round. Rule: a hypothesis earns a slot only if both outcomes change the decision.
**Tags:** #cough-tracker #hypotheses #tracker
**Created:** 2026-11-21
**Last Updated:** 2026-11-21

---

**Rule:** test a hypothesis only if **both outcomes change the decision**. Max 3–5 active per round. Update status after the round (5–10 conversations), never mid-round.

## Interviewee archetype (round 1)

- **Yes:** pulmonology nurses and doctors who follow COPD/asthma patients; chronic-cough trial coordinators or CRO staff; care-home night nurses; parents of children with asthma, as a control group.
- **No:** friends who "think it's a cool idea", and generic "health tech" people. They give opinions, not behaviour.

## Active hypotheses

| # | Hypothesis | What confirmation gives | What refutation gives | Source | Status | Date | Justification |
|---|---|---|---|---|---|---|---|
| H1 | **At least one segment already makes a decision based on how much someone coughs** (dose change, visit, trial endpoint, call to GP) | That segment becomes the beachhead lead, and we build for its decision | No action means the count is a vitamin → yellow, consider pivoting to another signal (breathing, falls) | conversation | to verify | | |
| H2 | **Today they get that number from self-report or recall, and they don't trust it** | Clear status-quo pain, with objectivity as the value | If they already have an objective tool they're happy with, we must beat it on price or ease → see S2 | conversation | to verify | | |
| H3 | **They have already tried a workaround** (cough diary, phone recording, an app like Hyfe, a hospital monitor) | A workaround means the pain is worth money | "Nothing" means the pain isn't paid for, whatever they say | conversation | to verify | | |
| H4 | **Patients accept a microphone in the bedroom if no audio leaves the device** | On-device counting is a real selling point, so put it in the one-liner | If they refuse anyway, home use is dead → only clinical/trial settings | conversation | to verify | | |
| H5 | **Room climate (dry/cold air) is something clinicians would act on** (advice on a humidifier, heating) | Keep temp/humidity in the core loop | Drop it to "not yet". It's a sensor we have, not a need they have | conversation | to verify | | |

## Desk hypotheses (don't spend a conversation slot)

| # | Hypothesis | How to check | Time |
|---|---|---|---|
| S1 | The Atech mic module + ESP32-S3 can capture audio fast enough (≥8–16 kHz) to detect cough events on the device | Atech docs for the mic module; a 1-night test recording | 1–2 h |
| S2 | Validated cough monitors exist and are priced out of reach for clinics and homes | Look up VitaloJAK, Leicester Cough Monitor, Hyfe, consumer sleep apps; note prices and who buys | 1 h |
| S3 | Published evidence that a cough increase precedes COPD exacerbations | PubMed search: "cough frequency COPD exacerbation prediction" | 1 h |
| S4 | Regulatory class: is counting coughs (no diagnosis) a medical device under the EU MDR? | MDR rule 11 for software; how comparable products are classified | 1 h |

## Change log

| Date | What changed | Why |
|---|---|---|
| 2026-11-21 | v0 created | — |

---

## Useful links and references
- [[02 🎤 Interview script]] — blocks map to H1–H5
- [[03 📋 Interviews — tracker]] — data for status updates
- [[04 🎯 Segmentation & Beachhead]] — H1 decides the beachhead
