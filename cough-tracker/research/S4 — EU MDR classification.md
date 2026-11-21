# S4 — EU MDR classification

**Summary:** Desk research on S4. Verdict: **confirmed**. A cough monitor sold for patients or clinicians is a medical device under the EU MDR, most likely **Class IIa** (Rule 11: software that monitors physiological processes). It needs a notified body. A competitor (C-mo) holds exactly that class.
**Tags:** #cough-tracker #hypotheses #research #S4
**Created:** 2026-11-21
**Last Updated:** 2026-11-21

---

## Hypothesis

> A device that counts coughs (no diagnosis) and is offered to patients, clinics or care homes qualifies as a medical device under the EU MDR, at a class requiring a notified body (IIa or higher).

**Type:** desk (S#)

## Pre-committed criteria (written before searching)

| | Criterion | What it changes |
|---|---|---|
| Confirmation | MDR text or official guidance places monitoring software in IIa, **and** at least one comparable cough monitor is certified at IIa+ | Any clinical/care sale needs a notified body: years and real money. Prototype/research/wellness only for now |
| Refutation | Comparable cough monitors sold as Class I (self-certified) or as non-medical wellness devices in clinical settings | A cheap, fast route to clinics exists, which strengthens B2/B4 |

## Queries run

| # | Query | Looking for | Mode |
|---|---|---|---|
| 1 | cough monitor EU MDR Rule 11 class IIa CE mark | confirmation | standard |
| 2 | MDCG 2019-11 wellness lifestyle monitoring not a medical device | **refutation** (wellness escape route) | standard |

## Evidence

| Claim | Value | Tier | Label | Source |
|---|---|---|---|---|
| MDR Rule 11 | Software intended to monitor physiological processes → **Class IIa**; vital parameters where variation could cause immediate danger → IIb; otherwise Class I | A (regulation, quoted in guidance) | [DATA] | NAMSA summary of MDR; MDCG 2019-11 |
| Qualification depends on intended purpose | The same software can be a medical device or not, depending on what the manufacturer claims | A | [DATA] | MDCG 2019-11; OpenRegulatory explainer |
| C-mo System (cough monitor) | CE-marked under MDR as **Class IIa**, covering biosensor, cough algorithm and software, for patients >5 years | C (vendor press via investor HTGF) | vendor claim | HTGF press release |
| Albus Home | CE-marked | C | vendor claim | see [[../07 ⚔️ Competition map]] |
| MDCG 2019-11 Rev.1 (June 2025) | Did not change the qualification logic or Rule 11 structure | B | [DATA] | OpenRegulatory |

**Conflicts between sources:** none found. No example turned up of a cough monitor sold into clinical use as a Class I or wellness product.

## Verdict

**confirmed**

**Why:** Rule 11 puts monitoring of physiological processes in IIa [DATA, tier A]. The closest certified competitor sits in exactly that class (vendor claim, consistent with the rule).

**What it changes:**
- **Selling to clinics or care homes (B2, B4) means a IIa product:** a quality system (ISO 13485), clinical evaluation and a notified body. That's multi-year and well beyond a hackathon team [ESTIMATE].
- **Three legal paths for now:** (1) a **prototype / investigational device** inside a research study with ethics approval; (2) a **wellness framing** ("track your night sounds"), which forbids clinical claims and therefore loses the clinical buyer; (3) **partnering** with a company that already has the certification.
- This strengthens the "research tier" and "partner" options in [[../07 ⚔️ Competition map]] and weakens a direct B4 product.

## For interviews

- Care homes: "When did you last bring in a new monitoring device? Who had to approve it?" This finds out whether CE class even comes up in their buying.

## New hypotheses spotted (not researched)

- University research groups may buy non-certified "research use only" monitors, which would be a legal market without a notified body.

## Sources
- [HTGF — C-mo receives CE mark (Class IIa)](https://www.htgf.de/en/c-mo-medical-solutions-receives-ce-mark-for-its-novel-ai-powered-cough-monitoring-solution/) — C, competitor class
- [NAMSA — stricter rules for software under the MDR](https://namsa.com/resources/blog/mdr-stricter-rules-medical-device-software/) — B, Rule 11 text
- [MDCG 2019-11 (European Commission)](https://ec.europa.eu/docsroom/documents/37581/attachments/1/translations/en/renditions/native) — A, qualification/classification guidance
- [OpenRegulatory — MDCG 2019-11 explained](https://openregulatory.com/mdcg/mdcg-2019-11) — B, intended purpose and Rev.1
- [arXiv — When is software a medical device?](https://arxiv.org/pdf/2202.12049) — B, intended-purpose analysis

---

## Useful links and references
- [[../01 🧪 Hypotheses — tracker]] — row updated from this note
