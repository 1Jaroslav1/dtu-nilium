# Offer & use cycle — Cough Tracker

**Summary:** What we offer, the full use cycle, quantified value and our "core" (Aulet steps 6–10). Drafted for the B2 lead and not final until round 1. One loop closed end to end, not a list of modules.
**Tags:** #cough-tracker #offer #value-proposition #tracker
**Created:** 2026-11-21
**Last Updated:** 2026-11-21

---

> **Top rule:** one loop closed end to end. If this file turns into "cough + snoring + sleep score + air quality + app + dashboard", we're building a conglomerate of ideas.

## 1. Which loop

| Loop | Scope | What closing it means | Avg pain | Ready today |
|---|---|---|---|---|
| L1: Night count → morning number | Detect and count coughs on the device, show the count | The patient/parent sees an objective number | ? | prototype-able on the kit |
| L2: Trend → alert → action | Count over nights, flag a rise, someone acts | A clinician calls before an admission | ? | needs connectivity + a clinical partner |
| L3: Climate correlation | Link cough to humidity/temp | Advice on room conditions | ? | easy, but is it wanted? (H5) |

**Chosen loop:** *(after round 1)* **Leaning:** L1 is the MVBP, because it's buildable and testable. L2 is where the money is, so L1 must be designed to lead into it.

## 2. What exactly we offer

**One sentence (v0):** *"It counts your coughs every night, without recording you, so your doctor gets a real number instead of a guess."*

**What it explicitly does NOT do:**
- No diagnosis. It doesn't say "you have asthma/COPD/pneumonia".
- No audio storage or upload.
- No sleep scoring, snoring analysis or app ecosystem in v1.
- No speaker alarms at night.

## 3. Full use cycle

| Stage | What happens | Who (customer side) | What must work for us | Risk |
|---|---|---|---|---|
| 1. Discovers | Clinician recommends it, or a trial issues it | clinician | Clinician trusts the number | No validation data |
| 2. Evaluates | Compares to diary/recall | clinician | Accuracy vs. manual count shown | *(to fill)* |
| 3. Decides | Program buys N units | program lead | Price under the budget line | Procurement / device certification |
| 4. Onboarding | Patient plugs in by the bed | patient | **Zero setup**: no Wi-Fi pairing, no app | Elderly users and tech |
| 5. First value | Morning screen shows the night's count | patient | Count feels plausible | False counts from TV, a partner, a dog |
| 6. Routine use | Runs every night unattended | patient | **Always on, auto night detection** | Unplugged or forgotten, so no data |
| 7. Pays / renews | Per-device or per-patient-month | program | Renewal tied to fewer admissions | Effect is hard to prove |
| 8. Refers | Clinician to clinician | clinician | A visible outcome | — |

**Riskiest two:** stage 5 (false positives destroy trust) and stage 6 (an unmotivated patient). **Build and test those first.**

## 4. Quantified value

Numbers only from conversations, each tagged with the conversation number.

| Metric | Before | After | Value/year | Source |
|---|---|---|---|---|
| Admissions avoided per 100 patients | *(to fill)* | *(to fill)* | *(to fill)* | conv. # |
| Nurse phone-check time | *(to fill)* | *(to fill)* | *(to fill)* | conv. # |

**Sanity check:** value must be **5–10× the price**.

## 5. Pricing

*(to fill after the competition map and conversations. Reference point: what clinics pay today for RPM devices per patient-month.)*

## 6. Our core

*(to fill)* Candidates to test: on-device privacy, which is a story more than a moat; a dataset of labelled bedroom cough sounds; a clinical partnership. **"Cheap hardware" and "AI" are features, not moats.** Honestly, nothing defensible yet.

---

## Useful links and references
- [[03 📋 Interviews — tracker]] — source for §4
- [[07 ⚔️ Competition map]] — input to §5–6
- [[09 🚦 Decision gate]] — what this must prove
