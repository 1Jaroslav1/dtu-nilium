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
| H1 | **At least one segment already makes a decision based on how much someone coughs** (dose change, visit, trial endpoint, call to GP) | That segment becomes the beachhead lead, and we build for its decision | No action means the count is a vitamin → yellow, consider pivoting to another signal (breathing, falls) | conversation | to verify | | **Proxy (desk):** literature says cough counts are rarely used outside research; only drug trials act on them. Care homes act on resp. rate/fever, not cough. See [[research/H1 — Who acts on a cough count (proxy)]] |
| H2 | **Today they get that number from self-report or recall, and they don't trust it** | Clear status-quo pain, with objectivity as the value | If they already have an objective tool they're happy with, we must beat it on price or ease → see S2 | conversation | to verify | | |
| H3 | **They have already tried a workaround** (cough diary, phone recording, an app like Hyfe, a hospital monitor) | A workaround means the pain is worth money | "Nothing" means the pain isn't paid for, whatever they say | conversation | to verify | | |
| H4 | **Patients accept a microphone in the bedroom if no audio leaves the device** | On-device counting is a real selling point, so put it in the one-liner | If they refuse anyway, home use is dead → only clinical/trial settings | conversation | to verify | | **Proxy (desk):** >80% acceptability for a privacy-limited wearable (n=54, volunteers). No bedroom-mic attitude study found. "No audio leaves" is table stakes (Hyfe, C-mo). See [[research/H4 — Bedroom mic acceptance (proxy)]] |
| H5 | **Room climate (dry/cold air) is something clinicians would act on** (advice on a humidifier, heating) | Keep temp/humidity in the core loop | Drop it to "not yet". It's a sensor we have, not a need they have | conversation | to verify | | |

## Desk hypotheses (don't spend a conversation slot)

| # | Hypothesis | How to check | Time |
|---|---|---|---|
| S1 | The Atech mic module + ESP32-S3 can capture audio fast enough (≥8–16 kHz) to detect cough events on the device | **Partly (2026-11-21):** mic ICS-43434 does 23–51.6 kHz, and cough models run at 16 kHz on comparable MCUs. Atech firmware rate undocumented, recording capped at 10 s, so use `get_samples`. Needs a 1 h hands-on test. [[research/S1 — Atech mic feasibility]] | done (desk) |
| S2 | Validated cough monitors exist and are priced out of reach for clinics and homes | **Done 2026-11-21.** They exist, including a CE-marked *bedside* one (Albus Home), FDA-cleared wearables (Strados, VitaloJAK) and a ~€30/yr phone app (Hyfe). Clinical prices aren't public. See [[07 ⚔️ Competition map]] | done |
| S3 | Published evidence that a cough increase precedes COPD exacerbations | **Partly confirmed (Lung 2021):** night-cough alerts caught ~45% of exacerbations with ~1 false alert per 100 days, vs questionnaires at ~88% with 1 per 10 days. Low false alarms, low sensitivity | done |
| S4 | Regulatory class: is counting coughs (no diagnosis) a medical device under the EU MDR? | **Confirmed:** Rule 11 puts monitoring of physiological processes in Class IIa, so a notified body is needed. Competitor C-mo is certified IIa. Clinical sales are out of reach for now; prototype/research/partner only. [[research/S4 — EU MDR classification]] | done |
| S5 | A single 24 h recording misrepresents usual cough frequency; nightly data is materially better *(from file 10)* | **Partly:** chronic cough day-to-day variation median ~38%, and in ⅔ of subjects 24 h ≠ long-term trend. Stable COPD repeatable (ICC 0.85). Hyfe already makes this case. [[research/S5 — Nightly vs 24 h snapshot]] | done |
| S6 | The kit can measure respiratory rate during sleep (distance sensor on chest movement, or mic on breath sounds), which is a stronger care-home signal than cough | Hands-on test + literature on ToF/radar breathing detection | 2 h |

## Change log

| Date | What changed | Why |
|---|---|---|
| 2026-11-21 | v0 created | — |
| 2026-11-21 | S2, S3 closed. B1 (trials) deprioritised, B4 (care homes) becomes the main test | Competitors own trials and bedside, see [[07 ⚔️ Competition map]] |
| 2026-11-21 | S1 partly, S4 confirmed, S5 added + partly, S6 added. H1/H4 proxy evidence logged | Desk round 2 (hypothesis-research skill). S4 rules out a quick clinical product; H1 proxy points to research use only |

---

## Useful links and references
- [[02 🎤 Interview script]] — blocks map to H1–H5
- [[03 📋 Interviews — tracker]] — data for status updates
- [[04 🎯 Segmentation & Beachhead]] — H1 decides the beachhead
