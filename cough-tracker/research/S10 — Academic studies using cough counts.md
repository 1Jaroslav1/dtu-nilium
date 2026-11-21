# S10 — Academic studies using objective cough counts

**Summary:** Desk research on S10. Verdict: **partly**. Academic studies with objective cough monitoring exist but are few: about 10 non-industry studies registered worldwide since 2022 (UK, Canada, US, Spain, Switzerland), and **none in the Nordics**. That's a tiny user group.
**Tags:** #cough-tracker #hypotheses #research #S10
**Created:** 2026-11-21
**Last Updated:** 2026-11-21

---

## Hypothesis

> Enough academic (non-pharma) studies use objective cough frequency to form a user group, including some in DK/Nordics/EU.

## Pre-committed criteria

| | Criterion | What it changes |
|---|---|---|
| Confirmation | ≥10 academic studies/year registered worldwide **and** ≥1 recent in DK/Nordics | The research tier has a reachable user group |
| Refutation | Only a handful per year and none in the Nordics | The research tier is too small to start with from Copenhagen |

## Method

ClinicalTrials.gov API v2 (2026-11-21). Query: `VitaloJAK OR "Leicester Cough Monitor" OR Hyfe OR "cough monitor" OR "coughs per hour"`, funder type "other", start date ≥ 2022. I then removed company sponsors (Hyfe, C-mo, Cellular Sciences) by hand.

## Evidence

| Claim | Value | Tier | Label | Source |
|---|---|---|---|---|
| Studies naming a cough monitor, any time | 27 industry / 21 other ("cough monitor"); 12 / 24 (VitaloJAK, LCM, Hyfe) | A | [DATA] | ClinicalTrials.gov API |
| Non-industry studies started since 2022 | 15 listed, of which **~10 truly academic**: Colorado, UHN Toronto, McMaster, Hull, Montana, Navarra, Leeds, Geneva, Imperial, one Saudi | A | [DATA] | ClinicalTrials.gov API |
| Nordic studies among them | **0** | A | [DATA] | ClinicalTrials.gov API |
| Pan-European NEuroCOUGH registry | Uses **self-reported** cough frequency, not objective | A | [DATA] | ERS publication |
| Academic example | PROCOUGH (McMaster), investigator-initiated, VitaloJAK 24 h | A | [DATA] | ERJ Open Research 2025 |

**Caveat:** registries undercount small observational studies, so the real number is higher [ESTIMATE]. Even doubled, it's ~4 per year.

## Verdict

**partly**

**Why:** academic users exist [DATA], but at roughly 2–4 registered studies per year worldwide and none in the Nordics.

**What it changes:** the research tier is **too small and too far away** to be the beachhead for a Copenhagen team. One notable point: the large European registry (NEuroCOUGH) relies on self-report, which may be because objective monitoring is costly or impractical at scale. That's a new hypothesis, logged below and not researched.

## New hypotheses spotted (not researched)

- **S14:** large observational cohorts (e.g. NEuroCOUGH) use self-report because objective monitoring is too costly per participant. If true, that's a cohort-scale opportunity.

## Sources
- [ClinicalTrials.gov API v2](https://clinicaltrials.gov/data-api/api) — A, queries run 2026-11-21
- [NEuroCOUGH / ERS](https://publications.ersnet.org/highwire_display/entity_view/node/699138/full) — A
- [PROCOUGH protocol (ERJ Open Research 2025)](https://publications.ersnet.org/content/erjor/11/5/00289-2025) — A

---

## Useful links and references
- [[../01 🧪 Hypotheses — tracker]]
- [[S13 — Danish research groups]]
