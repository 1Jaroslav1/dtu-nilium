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
