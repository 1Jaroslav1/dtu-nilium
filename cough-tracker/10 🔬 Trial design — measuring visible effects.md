# Trial design — measuring visible effects

**Summary:** How phase-3 trials measure effects you can see or hear (skin, cough), based on 5 registered trials. **Finding:** dermatology relies on investigator scoring at clinic visits, not cameras. Continuous sensors appear only when the symptom is an event in time (cough, scratching). The gefapixant cough trials show both that an objective cough count is an accepted endpoint and where it breaks.
**Tags:** #cough-tracker #research #clinical-trials #endpoints
**Created:** 2026-11-21
**Last Updated:** 2026-11-21

---

**Sources:** design and result numbers come from ClinicalTrials.gov (API v2, protocol + results sections), pulled 2026-11-21. FDA/EMA decisions are from memory and not re-checked [CHECK].

## Short answer

- **No 24/7 cameras in registration trials.** The gold standard is a trained investigator scoring the skin on a standardised scale at a clinic visit, blinded to treatment.
- **Photos** are mostly documentation and a check on consistency between raters. They are the primary measure only where nothing else works, e.g. hair counts from macrophotographs in hair-loss trials.
- **Continuous monitoring** (24 h audio, wrist actigraphy) is used when the symptom is an event in time, not a state of the skin.

## Case 1 — success: dupilumab, atopic dermatitis (SOLO-1, NCT02277743)

- **Design:** 671 patients, phase 3, randomised, triple-blind, placebo, 16 weeks.
- **Primary:** IGA 0/1 (clear or almost clear) plus a drop of ≥2 points. IGA is a 5-point investigator scale of redness and infiltration.
- **Key secondary:** EASI-75. The investigator scores 4 body regions × 4 signs (redness, infiltration, excoriation, lichenification), 0–72 points; ≥75% improvement counts as a response.
- **Patient voice:** daily peak-itch diary on a 0–10 scale; responders improve by ≥4 points.
- **Result:** IGA 0/1 in **37.9% vs 10.3%** on placebo; EASI-75 in **51.3% vs 14.7%**; p<0.0001.
- **Why it worked:** a large effect. Visual scoring is subjective, but with a gap this big rater noise doesn't matter.

## Case 2 — success: ruxolitinib cream, vitiligo (TRuE-V1, NCT04052425)

- **Design:** 330 patients, triple-blind, cream vs vehicle (the cream base alone), 24 weeks.
- **Primary:** F-VASI75, ≥75% improvement of the facial vitiligo index. The investigator measures area in "hand units" (1 patient palm ≈ 1% of body surface) times degree of depigmentation in fixed steps: 0, 10, 25, 50, 75, 90, 100%.
- **Patient-rated:** Vitiligo Noticeability Scale (are the patches still noticeable?).
- **Result:** **29.8% vs 7.4%**, odds ratio 5.3.
- **Design lesson:** a slow change needs a long trial (24 weeks, not 12). Coarse fixed steps keep different raters consistent.

## Case 3 — failure: olumacostat glasaretil, acne (CLAREOS, NCT03028363)

- **Design:** 759 patients, quadruple-blind, gel vs vehicle, 12 weeks.
- **Primary:** investigator **counts lesions by hand** (inflammatory and non-inflammatory separately), plus IGA.
- **Result:** inflammatory −14.5 vs −13.5 (p=0.34); non-inflammatory −14.1 vs −11.8 (p=0.13). **No effect shown.**
- **Why this is a typical dermatology failure:** the vehicle works too (moisturising, patients start caring for their skin), so the control arm improves a lot. Counting by eye is imprecise. A weak drug disappears in that noise.

## Case 4 — success and failure: gefapixant, chronic cough (closest to us)

- **COUGH-1 (NCT03449134, 732 patients)** and **COUGH-2 (NCT03449147, 1,317 patients)**, double-blind, placebo.
- **Primary:** **coughs per hour from a 24-hour audio recording.** The device has a chest contact sensor (lung and tracheal sounds) and a lapel mic (ambient sound). A recording must last ≥20 h. Counting is semi-automatic: an algorithm cuts out candidate sounds and a human verifies them. Recordings are made at set time points (baseline, week 12 or 24), not continuously.
- **Analysis:** geometric means on log-transformed data, because cough frequency is heavily skewed. Reported as a ratio to baseline.
- **Secondary:** awake-only coughs, % of patients with ≥30% drop, Cough Severity Diary (CSD), severity VAS, Leicester Cough Questionnaire (LCQ).
- **Result:** 45 mg lowered cough by only **18.5% vs placebo** (p=0.041) in COUGH-1 and **14.6%** (p=0.031) in COUGH-2. 15 mg was no different from placebo. On placebo, cough fell by more than 50%.
- **Regulatory outcome [CHECK]:** approved in Japan and the EU. **FDA declined twice** (2022, 2023): statistically significant but too small to show a clinically meaningful change. Taste disturbance was common and may have told patients they were on the drug.

## How visible effects are measured

| Method | When | Notes |
|---|---|---|
| Investigator scoring at a visit (IGA, EASI, PASI, VASI, SALT) | Most of dermatology | Regulatory standard; raters are trained and certified on the scale |
| Manual lesion counts | Acne, hidradenitis (HiSCR) | Noisy; high placebo response |
| Standardised photos | Documentation, blinded central review; hair (macrophotography) | Fixed light, distance and pose; primary only in a few indications |
| Patient diary (ePRO) | Itch, pain, cough severity | Daily, usually 0–10, filled in an app |
| Continuous sensor (audio, actigraphy) | Cough, night-time scratching, sleep | The algorithm is validated against a gold standard: infrared video in a sleep lab, or manually counted audio |
| 24/7 cameras | Almost never in registration trials | Only to validate algorithms in a lab; privacy and cost rule them out in the field |

## What this means for Cough Tracker

- **An objective cough count is an accepted primary endpoint** (gefapixant). Its known problems: a huge placebo drop and argument over what change is clinically meaningful.
- **24 h recordings at a few time points are a weakness.** A monitor used every night could reduce day-to-day noise and give a stronger signal with the same number of patients. **This is our hypothesis, not a fact** — add it to [[01 🧪 Hypotheses — tracker]] and ask trial / CRO people about it.
- **For a regulator to accept the measure, the device needs validation:** algorithm vs manual counting, and a link to what the patient feels (CSD, LCQ). See VitaloJAK and the Leicester Cough Monitor in [[07 ⚔️ Competition map]].

---

## Useful links and references
- ClinicalTrials.gov: NCT02277743, NCT04052425, NCT03028363, NCT03449134, NCT03449147
- [[07 ⚔️ Competition map]]
- [[01 🧪 Hypotheses — tracker]]
