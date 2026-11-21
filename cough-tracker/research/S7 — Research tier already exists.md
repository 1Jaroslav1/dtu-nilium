# S7 — Does a research tier already exist?

**Summary:** Desk research on S7. Verdict: **partly — the "no research option exists" part is refuted.** Hyfe already serves academic studies (50+ IRB-approved studies, a research dashboard, multi-day monitoring, on-device processing). Whether it's *cheap* is unknown because prices aren't public.
**Tags:** #cough-tracker #hypotheses #research #S7
**Created:** 2026-11-21
**Last Updated:** 2026-11-21

---

## Hypothesis

> No vendor offers academic groups multi-night cough monitoring at low cost with access to the data.

**Type:** desk (S#)

## Pre-committed criteria

| | Criterion | What it changes |
|---|---|---|
| Confirmation | No vendor shows an academic/research offering with multi-day monitoring, or the offerings are clearly expensive | The research tier is an open gap |
| Refutation | A vendor already supplies multi-day monitoring to academic studies with data access | The research-tier problem is mostly solved; our angle must be price or openness, or we drop it |

## Queries run

| # | Query | Looking for |
|---|---|---|
| 1 | Hyfe research academic program, data access | **refutation** |
| 2 | Hyfe vs VitaloJAK cost, low-cost academic monitor | both |

## Evidence

| Claim | Value | Tier | Label | Source |
|---|---|---|---|---|
| Hyfe in academic studies | IRB-approved in >50 studies worldwide | A (trial registry text, vendor-written) | [DATA] (vendor-stated in registry) | NCT05042063 consent form |
| Data flow | Cough timestamps reach investigators through a research dashboard in near real time; no audio leaves the device | A | [DATA] | NCT05042063 protocol |
| Data sharing | Pseudonymised data shared with researchers under data-sharing agreements | A | [DATA] | NCT05042063 consent form |
| Multi-day | 30-day monitoring datasets published; VitaloJAK's 24 h limit pitched as its weakness | A / C | [DATA] / vendor claim | Lung 2024; hyfe.ai comparison |
| ActiGraph partnership | Cough + sleep/activity for researchers (Jan 2025) | C | vendor claim | PharmaVoice |
| Academic price list | **not public** (Hyfe, VitaloJAK, C-mo) | — | gap | — |
| Academic studies using Hyfe since 2022 | Several in the registry, plus Hyfe's own validation studies | A | [DATA] | ClinicalTrials.gov, see [[S10 — Academic studies using cough counts]] |

## Verdict

**partly**

**Why:** availability is refuted. Multi-day, privacy-preserving monitoring with researcher dashboards already exists and is used in academic studies [DATA]. Cost is unknown, so "cheap" can't be judged.

**What it changes:** the research-tier problem statement **can't be "researchers lack multi-night monitoring".** It survives only as "researchers can't *afford* it or can't get *raw/open* data", and nothing yet shows either. That's a weaker problem. Push the gate further toward yellow.

**Cheapest next step:** email Hyfe (and Vitalograph) for an academic quote for 20 patients × 14 nights. That takes 15 minutes to write.

## For interviews

- "How did you choose the cough monitor for your last study? What did the quote look like?"

## Sources
- [NCT05042063 consent form](https://cdn.clinicaltrials.gov/large-docs/63/NCT05042063/ICF_003.pdf) — A
- [NCT05042063 protocol](https://cdn.clinicaltrials.gov/large-docs/63/NCT05042063/Prot_SAP_002.pdf) — A
- [Hyfe — VitaloJAK vs Hyfe comparison](https://hyfe.ai/comparisons/vitalojak-vs-hyfe-coughmonitor-suite) — C
- [PharmaVoice — ActiGraph and Hyfe](https://www.pharmavoice.com/press-release/20250128-actigraph-and-hyfe-announce-availability-of-new-digital-health-tool-for-cou/) — C
- [Lung 2024 — 30-day monitoring](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11427503/) — A

---

## Useful links and references
- [[../01 🧪 Hypotheses — tracker]]
- [[../07 ⚔️ Competition map]] — Hyfe row updated
