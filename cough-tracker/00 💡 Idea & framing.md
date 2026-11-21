# Idea & framing — Cough Tracker

**Summary:** One-line concept, the story (why / why now / why us) and the trap we must avoid: a count with no action attached.
**Tags:** #cough-tracker #idea #framing
**Created:** 2026-11-21
**Last Updated:** 2026-11-21

---

## One-line concept (v0)

> A bedside box that counts coughs overnight, on the device, without storing audio. In the morning it shows the count next to the room's temperature and humidity.

## The story (Fadell: why before what)

- **Problem:** cough frequency is a real clinical signal in chronic cough, COPD and asthma. Today, though, it's measured by **asking the patient**: "how was your cough this week?" Recall is poor, especially for cough during sleep.
- **Why now:** chronic-cough drugs are going through clinical trials that use **objective cough frequency as an endpoint**. Remote patient monitoring is also becoming normal. Cheap microcontrollers can now run small audio classifiers on the device.
- **Why us:** *(to fill. A hackathon team with a kit is not a "why us" yet. What unfair insight or access do we have?)*

## The trap (from our smartwatch discussion)

A cough count is only valuable if **someone acts on it**. "Your cough went up 30%" with no next step is a vitamin, not a painkiller. The single most important question in discovery:

> **Who changes a decision today because of how much someone coughed, and how do they get that number now?**

If nobody does, the product is a curiosity, however well the device works.

> **Current problem statement (v2): see [[11 🧭 Problem statement]].** This file keeps the history (v0 → v1).

## Problem shaping — v1 (after desk research, 2026-11-21)

The v0 problem ("cough is measured by asking the patient") is **true but not painful enough**. Desk evidence reshapes it:

| v0 assumption | What the evidence says | Source |
|---|---|---|
| Nobody can count coughs objectively | Many can: VitaloJAK, Hyfe, Strados, Albus, C-mo | [[07 ⚔️ Competition map]] |
| Clinicians want the number | Counts are rarely used outside research; clinical utility unproven | [[research/H1 — Who acts on a cough count (proxy)]] |
| We can sell to clinics/care homes | That makes it a Class IIa medical device with a notified body | [[research/S4 — EU MDR classification]] |
| A cough count matters in care homes | Pneumonia there is atypical; resp. rate >25/min is the strong marker | [[research/H1 — Who acts on a cough count (proxy)]] |
| One 24 h recording is fine | In chronic cough, day-to-day variation is ~38%, so a 24 h snapshot misleads | [[research/S5 — Nightly vs 24 h snapshot]] |

**Three candidate problem statements to test, in priority order:**

1. **Research tier (measurement quality).** *Chronic-cough researchers need multi-night objective counts, but clinical-grade monitors are costly and 24 h snapshots are noisy, so small studies are underpowered.* → buyer: university/hospital research groups (research use only, no notified body). Open: S1 hands-on test, plus whether researchers say cost blocks them.
2. **Care-home night watch (different signal).** *Night staff in care homes miss early chest infections because residents present atypically and checks are sparse.* → the signal is probably **respiratory rate**, not cough (S6). Open: can the kit measure it, and does staff act on it (H1)?
3. **Partner signal.** *Home-COPD programmes (e.g. Kivo) lack an objective night-time symptom feed.* → offer the sensor, not a certified product. Open: whether they want it at all.

### Update after desk round 3 (S7–S13)

| Statement | What changed | Status |
|---|---|---|
| 1. Research tier | Measurement problem **confirmed** (S5, S9, S11: 24 h snapshots, ~38% daily variation, FDA questioned the counting method). But **Hyfe already serves academics with multi-day monitoring** (S7). The academic user group is ~10 registered studies since 2022 worldwide, **0 in the Nordics** (S10). Legal route open via ethics committee (S12) | **Weakened.** Real problem, but it's already being solved and the users are elsewhere |
| 2. Care-home night watch | Not researched this round. Still blocked by S6 (can the kit measure breathing rate?) and H1 | Open |
| 3. Partner signal | Not researched | Open |

**The sharpest remaining question (S13):** Danish cough researchers (Rigshospitalet, Herlev-Gentofte, Aarhus, SDU) use **registries and questionnaires only**. Is that because objective monitoring is too costly or impractical (a gap), or because they don't need it (no demand)? **Ask 2–3 of them this week.** This one answer decides whether statement 1 lives.

**Dropped for now:** "a bedside cough counter for clinics/patients". It's a me-too of Albus Home, has no proven clinical action, and needs IIa certification.

## What the kit gives us and what it doesn't

| Module | Role | Limit |
|---|---|---|
| Microphone | cough event detection | *(to fill: sample rate and on-device processing. See S1)* |
| Temp/humidity | context: dry or cold air as a trigger | correlation only, not causation |
| Screen | morning summary | the patient sees it, the clinician doesn't (yet) |
| Button / knob | "start night", or a symptom/medication tag | optional |
| Speaker | — | probably unused; don't force it in |

---

## Useful links and references
- [[04 🎯 Segmentation & Beachhead]] — who might act on the count
- [[01 🧪 Hypotheses — tracker]] — H1 tests "who acts"
