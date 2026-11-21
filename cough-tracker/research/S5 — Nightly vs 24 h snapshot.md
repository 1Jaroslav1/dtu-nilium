# S5 — Nightly monitoring vs 24 h snapshot

**Summary:** Desk research on S5, a new hypothesis raised in [[../10 🔬 Trial design — measuring visible effects]]. Verdict: **partly**. Day-to-day cough variability is large (median ~38% in chronic cough), so a single 24 h recording misrepresents most people. But in stable COPD, week-to-week repeatability is high, and Hyfe already publishes this argument.
**Tags:** #cough-tracker #hypotheses #research #S5
**Created:** 2026-11-21
**Last Updated:** 2026-11-21

---

## Hypothesis

> A single 24 h cough recording (today's trial standard) misrepresents a person's usual cough frequency because of large night-to-night variability, so repeated nightly measurement gives a materially better estimate.

**Type:** desk (S#)

## Pre-committed criteria (written before searching)

| | Criterion | What it changes |
|---|---|---|
| Confirmation | Peer-reviewed data showing within-person day-to-day variability ≥30% or a single day failing to represent multi-day frequency in most subjects | "Better endpoint through nightly data" becomes a credible value proposition for trials/researchers |
| Refutation | High repeatability (ICC ≥0.8) between single days in the target population | A 24 h snapshot is good enough, and the nightly angle has no value |

## Queries run

| # | Query | Looking for | Mode |
|---|---|---|---|
| 1 | day-to-day variability objective cough frequency 24-hour repeatability multiple days | both sides (repeatability = refutation) | standard |

## Evidence

| Claim | Value | Tier | Label | Source |
|---|---|---|---|---|
| Chronic cough, 2-week automated monitoring, 36 patients | Mean relative SD of daily cough frequency 37.3% ± 15.1%, median 38.1% (range 10–89%) | A | [DATA] | Respiratory Research 2023 (s12931-023-02585-1) |
| Persistent coughers, 30-day monitoring (Hyfe app, 97 users) | Large intra-subject variability; higher cough rates have larger SDs | A | [DATA] | Lung 2024 (PMC11427503) |
| Same dataset, conference abstract | In ⅔ of subjects, 24 h measurements did not reflect longer-term trends | B | [DATA] | ERJ suppl. abstract |
| Stable COPD, week 1 vs week 6 | ICC 0.85 total, 0.84 awake cough frequency | A (table snippet only) | [DATA] | PMC7374441 |

**Conflicts between sources:** chronic cough is highly variable day to day, while stable COPD is fairly repeatable between weeks. The difference is the population and the time scale, so both hold. We plan on the claim holding **for chronic cough only**.

## Verdict

**partly**

**Why:** confirmed for chronic/persistent cough (≥30% day-to-day variation, tier A). Not shown for stable COPD, where repeatability is high (ICC 0.85).

**What it changes:** the strongest problem statement is about **measurement quality in chronic-cough research**, not about clinics lacking data. But Hyfe authored the key 30-day study and already sells this argument, and VitaloJAK owns the endpoint. A wedge here would have to be cost or access (the research tier), not the insight itself.

## For interviews

- Trial / CRO people: "In your last cough study, how many recording days did each patient do, and what happened when a recording failed or the day was unusual?"

## New hypotheses spotted (not researched)

- Placebo responses in cough trials are large (>50% in gefapixant, see file 10). Does nightly data reduce them, or only the noise? Unknown.

## Sources
- [Respiratory Research 2023 — day-to-day variation in chronic cough](https://link.springer.com/article/10.1186/s12931-023-02585-1) — A
- [Lung 2024 — Longitudinal cough frequency monitoring: daily variability and predictability](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11427503/) — A
- [ERJ conference abstract PA787](https://publications.ersnet.org/content/erj/64/suppl68/pa787) — B
- [COPD repeatability table (PMC7374441)](https://pmc.ncbi.nlm.nih.gov/articles/PMC7374441/table/Tab5) — A, snippet only

---

## Useful links and references
- [[../01 🧪 Hypotheses — tracker]] — new row S5
- [[../10 🔬 Trial design — measuring visible effects]] — where S5 came from
