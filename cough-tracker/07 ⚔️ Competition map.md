# Competition map — Cough Tracker

**Summary:** Competitive position (Aulet step 11) after the desk research of 2026-11-21. **Finding: the idea is not new.** A CE-marked bedside cough monitor (Albus Home) already exists. Wearables (Hyfe, Strados) and the trial gold standard (VitaloJAK) cover the rest.
**Tags:** #cough-tracker #competition #tracker
**Created:** 2026-11-21
**Last Updated:** 2026-11-21

---

**Status: desk round 1 done (S2).** Sources are mostly company press, trial registries and a few peer-reviewed papers. Prices are mostly unknown, so ask in conversations. Nothing has been tested hands-on yet.

## The question this map answers

> Is there an affordable, privacy-preserving, zero-setup way for a COPD/asthma clinic (or trial) to get objective night-time cough counts? If not, is that because nobody needs it?

**Answer so far:** yes, it exists. Albus Home is very close to our exact concept. The gap we assumed is **not empty**.

## Direct and near-direct competitors

| Company / product | Form | What it does | Regulatory / evidence | Who buys | Threat to us |
|---|---|---|---|---|---|
| **Albus Health — Albus Home** (Oxford, UK) | **Bedside, contactless box** | Automated night-time monitoring of cough and breathing. Flagged child asthma attacks up to ~5 days early | CE-marked [DATA]. NHS AI Lab–funded study. Used in a US phase IV pharma trial [DATA] | Pharma trials, NHS pilots | **Very high: same form factor, same night use case, same "no wearable" pitch.** Small company, ~$4–5M raised, last round Dec 2023 [DATA, sources disagree] |
| **Hyfe — CoughPro app + CoughMonitor Suite** | Phone app + smartwatch | On-device cough detection. Stores only timestamps, no audio | App not FDA-evaluated. Watch is investigational. Claims 49 trials and 19 papers [vendor claim]. Partnered with ActiGraph LEAP (Jan 2025) | Consumers (app ~€30/yr, $35/yr) [DATA], pharma trials, RPM | **High:** the same privacy story on hardware people already own, and nearly free for consumers |
| **Strados Labs — RESP Biosensor** | Chest-worn wearable | Cough frequency/bouts plus lung sounds (wheeze, crackles) | FDA 510(k) for the sensor incl. home use (2020, 2022). The cough algorithm itself is marked not cleared [DATA]. COPD post-exacerbation study with Jefferson Health (Jan 2026) | Pharma trials (via Clario), RPM | **High in COPD RPM,** our B2 candidate |
| **Vitalograph — VitaloJAK** | Wearable audio recorder, 24 h | Gold-standard cough frequency for trials | CE + FDA 510(k). Endpoint in 36+ trials [DATA] | Pharma / CROs | **Owns B1** (chronic-cough trials). We can't compete there |
| **Leicester Cough Monitor** | Ambulatory audio + automated counting | Research-grade counting | Strong evidence base alongside VitaloJAK [DATA] | Academic research | Low commercially, but sets the accuracy bar |

## Adjacent players (not the same product)

| Company | What | Relevance |
|---|---|---|
| **ResApp → Pfizer** (acquired 2022, ~US$74–116M; sources differ) | Phone app that *diagnoses* asthma, pneumonia, COPD, COVID from cough sounds | Shows big pharma pays for cough-audio IP. It's diagnosis, not counting |
| **Sonde Health** | Voice-based health biomarkers | Listed in market reports as a cough-monitoring player. **Unverified**: a RespiSense 510(k) claim comes from a market-research report, so check the FDA database |
| **Kivo Health** (Seattle, $10M Series A, Oct 2026) | Virtual COPD pulmonary rehab with a tablet, oximeter and respiratory therapists | **Potential channel or partner, not a competitor.** COPD home programs billed to Medicare/insurers, and they don't measure cough |
| Philips, under-mattress bed sensors | Used in COPD research studies | Hospital/research context, not a product line we saw marketed |

## Status quo: the real competitor

| Solution | Why they stay | What would make them leave |
|---|---|---|
| **Asking the patient + questionnaires** | Free, already in the workflow, and **catches more exacerbations** (88% vs 45% in one COPD study, though with 10× more false alerts) [DATA: Lung 2021] | Fewer false alarms and less nurse time, not "more data" |
| Free phone app (Hyfe CoughPro) | Already on the phone | Phone not in the bedroom, battery, poor accuracy at distance |

## Evidence on the core signal (S3)

A 2021 *Lung* study put a mic on the bedside table for COPD patients. Night-cough alerts caught ~45% of exacerbations with ~1 false alert per 100 days. Questionnaires caught ~88% with ~1 false alert per 10 days [DATA]. **Cough alone is a low-false-alarm but low-sensitivity signal.** It works as a complement to symptom reporting, not a replacement.

## Position map

Axes: **clinical trust** (low → high) × **zero-effort at home** (low → high).

```
clinical trust
   high │ VitaloJAK      Strados RESP        Albus Home ●
        │ Leicester                         (taken corner)
        │
    med │                Hyfe watch
        │
    low │                        Hyfe app / sleep apps
        └──────────────────────────────────────────────
          low (wear/record)                 high (nothing to do)
                    zero-effort at home
```

The high-trust, zero-effort corner we wanted is **occupied by Albus Home.**

## Conclusions

**Where is the gap, and why has nobody taken it?** The bedside, contactless, private gap *was* taken, by a small, CE-marked, pharma-connected company. It's still small after ~8 years and modest funding [ESTIMATE from public profiles]. That suggests **the market for night cough counting is real but narrow and slow**: mostly pharma trials and pilots, not a broad clinic or consumer pull.

**What's left for us (hypotheses, not conclusions):**
1. **Price / DIY tier:** a sub-€50 kit-based monitor for research groups, universities and low-resource clinics, where Albus and Strados are too expensive. *Test: do researchers struggle with monitor cost today?*
2. **Different setting:** care homes, with one unit per room and night staff alerts (B4). None of the players above target this explicitly. *Test: do night nurses act on cough at all?*
3. **Different signal, same kit:** pivot from cough to something the incumbents don't own, for example night-time getting up and falls (orientation + distance) in care homes.
4. **Partner, not compete:** offer a cough signal to a COPD home-program company like Kivo.

**Price ranges:** consumer app ~€30–35/yr [DATA]. Clinical-grade device prices are not public. *(Ask in conversations.)*

**Implication for the gate:** on desk evidence alone this leans **yellow**. The pitch "bedside cough counter" is a me-too. Round-1 conversations should focus on care homes (B4) and the cost of the research tier, not on COPD clinics, where Strados and Albus are already in studies.

## Sources
- Albus Home validation: [typeset.io PDF](https://typeset.io/pdf/performance-of-cough-monitoring-by-albus-home-a-contactless-1uuj14qk.pdf) · [Oxford AHSN evaluation](https://www.oxfordahsn.org/our-work/our-programmes/strategic-and-industry-partnerships-2/economic-growth-case-studies/evaluation-assesses-home-monitoring-device-which-uses-ai-to-predict-and-prevent-asthma-attacks-in-children-2/) · [santelog](https://www.santelog.com/actualites-sante-nasdaq/albus-health-device-detects-early-warning-signs-child-asthma-attacks-five) · [VCBacked](https://www.vcbacked.co/company/albus-health) · [AstraZeneca BioVentureHub](https://www.astrazeneca.com/content/bioventurehub/news/2022/Albushealth.html)
- Hyfe: [NCT06775301](https://clinicaltrials.gov/study/NCT06775301) · [ActiGraph partnership](https://hitconsultant.net/2025/01/29/actigraph-and-hyfe-launch-ai-powered-cough-detection-for-clinical-trials) · [CoughPro App Store (DK)](https://apps.apple.com/dk/app/coughpro/id1505735530?l=da) · [MedTech Dive interview](https://www.medtechdive.com/news/Hyfe-Joe-Brew-why-we-cough-technology/645162/) · [Hyfe regulatory overview](https://www.hyfe.ai/insights/overview-of-regulatory-status-for-current-cough-counting-devices-on-the-market)
- Strados: [Healio home-use clearance](https://cm.healio.com/news/pulmonology/20220504/smart-sensor-platform-for-respiratory-health-receives-fda-clearance-for-home-use) · [Clario brochure 2024](https://clario.com/la-00206-resp-clinical-trial-brochure-may-2024-resize) · [COPD exacerbation study](https://medtechinnovator.org/strados-labs-announces-study-evaluating-remote-lung-sound-monitoring-to-predict-copd-exacerbations/)
- VitaloJAK: [UK REF impact case](https://results2021.ref.ac.uk/impact/4402a817-0236-48f4-b595-fca79d56f7a5/pdf) · [GDC-6599 protocol](https://cdn.clinicaltrials.gov/large-docs/50/NCT05660850/Prot_SAP_000.pdf) · [systematic review (PMC4222923)](https://pmc.ncbi.nlm.nih.gov/articles/PMC4222923)
- COPD night-cough evidence: [Lung 2021 (PMC8053154)](https://pmc.ncbi.nlm.nih.gov/articles/PMC8053154)
- ResApp/Pfizer: [UQ news](https://news.uq.edu.au/2022-09-27-uq-startup-acquired-pfizer) · [Fierce Biotech](https://www.fiercebiotech.com/medtech/pfizer-drop-74m-covid-cough-screening-smartphone-app-developer)
- Kivo Health: [GeekWire](https://geekwire.com/2026/seattles-kivo-health-raises-10m-to-bring-lung-disease-rehab-into-patients-homes/) · [Axios](https://www.axios.com/pro/health-tech-deals/2026/10/23/kivo-health-10m-lung-disease-copd)
- Landscape: [continuous cough monitoring review (JTD)](https://jtd.amegroups.org/article/view/108532/html) · [ERS 2025 highlights](https://www.emjreviews.com/respiratory/congress-review/counting-coughs-ers-2025-highlights-on-objective-cough-monitoring-j160123/) · [Medical Futurist landscape](https://medicalfuturist.com/cough-monitoring-solutions-the-current-digital-health-landscape)

---

## Useful links and references
- [[01 🧪 Hypotheses — tracker]] — S2 and S3 updated from this
- [[04 🎯 Segmentation & Beachhead]] — B1 closed, B4 now the lead to test
- [[06 📦 Offer & use cycle]] — §6 "core" is still empty, and Albus makes it harder
- [[09 🚦 Decision gate]] — desk evidence leans yellow
