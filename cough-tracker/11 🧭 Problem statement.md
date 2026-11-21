# Problem statement — Cough Tracker (v2)

**Summary:** The problem we're solving, written as Situation, Complication and Key solution. It's built from desk research (S5, S9, S10, S11, S13). One causal link is unverified (⚠️) and is tested as H6. The main competitive risk (Hyfe) is tested as H7.
**Tags:** #cough-tracker #problem-statement #framing
**Created:** 2026-11-21
**Last Updated:** 2026-11-21

---

## One sentence

> Cough research relies on 24-hour snapshots that miss a symptom varying ~38% day to day, because accurate monitoring is too expensive to run every night. Our bedside smart-home assistant counts coughs every night and manages the bedroom climate, with nothing to wear.

## Situation

Chronic cough affects **4–10% of adults** [DATA, S13]. New cough drugs are being developed, and the accepted way to judge them is an **objective count of coughs per hour**. Each patient is usually recorded for **24 hours at a few clinic visits** [DATA, S9].

## Complication

- A person's cough varies **~38% from one day to the next**. In **two thirds of people**, a single day doesn't reflect their longer-term pattern, so a one-day recording gives noisy results [DATA, S5].
- The FDA rejected gefapixant twice: in 2022 it **questioned the cough counting system**, and in 2023 found **no substantial evidence that it works** [DATA, S11].
- Gold-standard monitors cost **≈ €11,000 each** plus **~1.5 h of analyst time per recording** [S8: price is a vendor listing, labour is DATA].
- ⚠️ **As a result,** academic groups, including every Danish group we found, measure cough with **questionnaires and registries instead of objective counts** [the fact is DATA (S10, S13); "as a result" is **unverified, see H6**].

## Key solution

A **bedside smart-home assistant** that counts coughs automatically **every night**, with **nothing to wear** and **no audio stored**. It connects to the home's existing smart-home system (e.g. Home Assistant, Google Home or Alexa), logs room temperature and humidity, and can act on them, for example switching on a humidifier when the air gets dry. Researchers get **objective multi-night data from the patient's real home**, and patients get a device that helps their bedroom instead of just watching them.

## Who

- **User:** a PhD student or postdoc running the recordings in a chronic-cough study.
- **Buyer:** the principal investigator who holds the grant budget.
- **First targets:** Danish chronic-cough groups at Rigshospitalet, Herlev-Gentofte, Aarhus and SDU [S13].

## What this is NOT

- Not a diagnosis tool, and not sold to clinics or patients (that needs Class IIa certification, S4).
- Not a replacement for VitaloJAK in large pharma trials.
- Chronic cough research only, not COPD or asthma care for now.
- Used in studies via the ethics-committee route, as an investigational device without CE marking (S12).

## Weak points (must be tested before we trust this)

| # | Weak point | Why it matters | Test |
|---|---|---|---|
| 1 | **The ⚠️ link:** do researchers avoid objective counts *because of* cost and effort, or because they don't need them? | If they don't need them, the problem collapses | **H6**: 2–3 interviews with Danish groups |
| 2 | **Hyfe** already counts coughs over many days for academic studies (S7) | If "nothing to wear, bedside, part of the smart home" doesn't matter to researchers, we have no reason to exist | **H7**: interviews + Hyfe academic quote |
| 3 | **The smart-home angle** is new and untested | If patients don't use smart-home systems, or the climate control doesn't help them, it's a feature nobody needs (and it may raise the device's regulatory class) | **H8**: interviews with patients + check smart-home adoption |

## Expected question: "Why not Hyfe?"

Our current answer is a **hypothesis, not a fact**: no watch or phone to wear and charge, it works for people who won't wear devices in bed, and it fits into the home as a smart-home assistant that also improves the bedroom climate. H7 and H8 test it.

---

## Useful links and references
- [[00 💡 Idea & framing]] — how the problem evolved (v0 → v1 → v2)
- [[01 🧪 Hypotheses — tracker]] — H6, H7 and the evidence behind each claim
- [[09 🚦 Decision gate]] — H6 is now a gate criterion
- [[research/S5 — Nightly vs 24 h snapshot]] · [[research/S9 — Recording days per patient]] · [[research/S11 — Gefapixant FDA rejection]] · [[research/S13 — Danish research groups]]
