# Prompt: generate the Pucio pitch deck (HTML)

**Summary:** one self-contained prompt that makes the cough-tracker pitch deck in the Pucio storybook format as a single HTML file, based on Problem statement v2. Paste it into ChatGPT, Claude.ai or Gemini.
**Based on:** [[11 🧭 Problem statement]] (v2) · `pucio-pitch-deck` skill
**Created:** 2026-11-21

## How to use

1. Attach the reference pictures from `.claude/skills/pucio-pitch-deck/assets/reference/`: at least `01-cover-cast.jpg` (Pucio, Artur, Kasia) and `04-user-vs-payer.jpg` (the Boss). Also attach the original PDF if you can.
2. Copy everything below the line into the chat.
3. Save the HTML it gives you as `deck.html`. If the tool also makes the pictures, save them as `img/01.png`, `img/02.png` and so on, next to the HTML.

---- COPY FROM HERE ----

You are a pitch-deck designer and a children's picture-book writer. Make a startup pitch deck as **one self-contained HTML file**. The Problem and Solution slides are told as a picture-book story in the style of the attached example "Pucio robi GTM". The number slides are clean, readable "notebook" pages in the same colours, with no characters.

# 1. The format, learned from the attached example

Every story page has the same anatomy:
- A **heading**: 2–4 words, a plain business term, in teal.
- **Story**: 3 short sentences, present tense, one fact each, at most ~10 words each, in a serif font.
- A **beat**: 1 bold line, the twist. Usually Pucio's naive question or small action, or the founder overdoing it.
- An **illustration**: one moment that shows exactly the beat.
- A thin divider, then the **moral**: 1–2 plain lines in a sans font that state the business claim. It must make sense on its own.
- The page number.

The humour comes from the gap between what the adults believe and what little Pucio sees. Pucio never explains or lectures: he points, asks one naive question, or does one small thing. Someone who reads only the headings and morals must get the whole argument.

Running gag: Artur's tall **polka-dot confetti tube**. He wants to celebrate too early, and Pucio hides or guards it until the result is real.

# 2. Cast: only these people, keep them identical on every page

Use only the fairy-tale people from the example, matching the attached reference pictures. Don't add any new named characters. Background people may appear only as soft, faceless, out-of-focus extras who never speak.

- **Pucio**, the obvious truth: a toddler about 3, messy dark-brown hair, big round dark eyes, rosy cheeks, a red long-sleeve sweater, dark teal trousers with rolled hems, small brown shoes.
- **Artur**, the founder: a man in his mid-30s, tousled sandy-blond curly hair, round thick black-rimmed glasses, a light moustache and stubble, a huge eager grin, a white T-shirt with a tiny print on the chest, a forearm tattoo, a black smartwatch, baggy beige chinos, white sneakers. Flaw: over-engineering (he loves 37-sensor gadgets).
- **Kasia**, the user: a woman about 30, big voluminous dark-brown curly hair, a mustard-yellow button-up shirt with rolled sleeves, wide teal-green trousers, brown loafers, a spiral notepad. **Here she is a PhD student who runs the cough recordings in a chronic-cough study.**
- **The Professor** (the "Boss" from the example), the buyer: a man about 60, swept-back grey hair, a navy blazer, a light-blue shirt, grey trousers, a brown wallet. **Here he is the principal investigator who holds the grant budget.**
- **The patient** is not a named character. Show them only as a soft figure seen from behind, or asleep under a blanket with the face not shown. They never speak.

So the deck has 4 active characters: Pucio, Artur, Kasia and the Professor.

# 3. Content: use exactly these facts, don't invent any numbers

**One sentence:** Cough research relies on 24-hour snapshots that miss a symptom varying ~38% day to day, because accurate monitoring is too expensive to run every night. Our bedside smart-home assistant counts coughs every night and manages the bedroom climate, with nothing to wear.

**Situation**
- Chronic cough affects 4–10% of adults (source S13).
- New cough drugs are being developed. The accepted way to judge them is an objective count of coughs per hour.
- Each patient is usually recorded for 24 hours at a few clinic visits (S9).

**Complication**
- A person's cough varies ~38% from one day to the next. In two thirds of people, one day doesn't reflect their longer-term pattern, so a one-day recording gives noisy results (S5).
- The FDA rejected gefapixant twice: in 2022 it questioned the cough counting system, and in 2023 it found no substantial evidence that the drug works (S11).
- Gold-standard monitors cost ≈ €11,000 each, plus ~1.5 h of analyst time per recording (S8: the price is a vendor listing, the labour is data).
- Academic groups, including every Danish group we found, measure cough with questionnaires and registries instead of objective counts (S10, S13).
- ⚠️ IMPORTANT: it is **not proven** that they do this *because of* the cost. Never write "so", "therefore" or "as a result" between the cost and the questionnaires. Put the two facts side by side, and add a speaker note: "We believe cost is a big reason; we're testing it in interviews (H6)."

**Key solution**
- A bedside smart-home assistant that counts coughs automatically every night, with nothing to wear and no audio stored.
- It connects to the home's existing smart-home system (Home Assistant, Google Home, Alexa), logs room temperature and humidity, and can act on them, e.g. switch on a humidifier when the air gets dry.
- Researchers get objective multi-night data from the patient's real home. Patients get a device that helps their bedroom instead of just watching them.

**Who**
- User: a PhD student or postdoc running the recordings in a chronic-cough study.
- Buyer: the principal investigator with the grant budget.
- First targets: Danish chronic-cough groups at Rigshospitalet, Herlev-Gentofte, Aarhus and SDU (S13).

**What it is NOT**
- Not a diagnosis tool, and not sold to clinics or patients.
- Not a replacement for VitaloJAK in large pharma trials.
- Chronic cough research only (not COPD or asthma care, for now).
- Used in studies via the ethics-committee route, as an investigational device.

Product name: not decided yet. Write `[PRODUCT]` wherever a name is needed.

# 4. Slides (16:9, 11 slides)

1. **Cover (story):** big red title "PUCIO", subtitle "COUNTS COUGHS", tagline "Pucio and Artur listen to the night". Illustration: a bedroom at night, the patient asleep under a blanket (face not shown), a small glowing device on the nightstand, Artur peeking in at the door with the confetti tube, Pucio with a finger on his lips: "shh". No moral.
2. **Story · "One day at the clinic"** (Situation): Kasia straps a recorder on a patient for a single day at a clinic visit. That day the patient hardly coughs. The Professor waits with a clipboard. Pucio looks at the clock. Moral: new cough drugs are judged by an objective count of coughs per hour, usually from 24 hours at a few clinic visits.
3. **Notebook · Situation in numbers:** two big numbers, "4–10%" (adults with chronic cough, S13) and "24 h" (recording at a few visits, S9). Moral: "The endpoint is objective, but it's a snapshot."
4. **Story · "Which day is real?"** (Complication A): Kasia's chart for Monday is full of coughs, Tuesday's is almost empty. The Professor only has Tuesday. Beat: Pucio holds up a calendar: "Which day is the real one?" Moral: about 38% day-to-day change; one day misleads in 2 of 3 people.
5. **Story · "The expensive box"** (Complication B): the Professor wants many more nights. Artur unpacks a €11,000 monitor; each recording needs 1.5 h of listening. The Professor looks into his wallet. Beat: Kasia hands Pucio a questionnaire: "Cough: a little or a lot?" Moral: the two facts side by side (cost, and Danish groups using questionnaires), **with no causal word**.
6. **Notebook · "One day is noisy, the FDA noticed, and counting is expensive":** three cards: "~38%" (S5), "2×" FDA rejections of gefapixant 2022/2023 (S11, highlighted in red), "€11,000" + 1.5 h per recording (S8). Moral: "Better drugs need better measurement: more nights, at a lower cost."
7. **Story · "Nothing to wear"** (Solution A): Artur draws a vest with 37 sensors. Kasia: "No patient will sleep in that." Beat: Pucio puts a small round box on the nightstand. Moral: a bedside smart-home assistant that counts coughs automatically every night, nothing to wear, no audio stored.
8. **Story · "Every night, at home"** (Solution B): the box counts every cough at night and switches on the humidifier when the air gets dry. In the morning Kasia and the Professor see every night, not just one day. Beat: Artur reaches for the confetti; Pucio hides it: "First, the trial." Moral: researchers get objective multi-night home data; patients get a device that helps their bedroom.
9. **Notebook · How it works:** two lanes of 3 boxes with arrows. Research team: bedside microphone → on-device counting (no audio stored, highlighted) → nightly counts. Patient: room sensors (temperature, humidity) → smart-home link (Home Assistant, Google Home, Alexa) → actions (humidifier on). Moral: "Nothing to wear, nothing recorded."
10. **Notebook · Who it's for, and what it's not:** left: user (PhD student/postdoc), buyer (principal investigator, grant budget), first targets (4 Danish groups, S13). Right, in muted text: the 4 "what it's NOT" lines. Moral: "We start where objective counts are wanted but not affordable: academic chronic-cough studies."
11. **Story · Closing "What's next?"**: everyone around a table with a notebook; Kasia lists questions, the Professor nods, Artur holds the confetti, and Pucio holds up a sign with a question mark. Story lines: "First, we ask the Danish groups." / "Do they skip counts because of the cost?" (H6) / "And would they choose a box by the bed?" (H7, H8). Beat: "Pucio still guards the confetti." Moral: "Next step: 2–3 interviews with Danish cough groups to test the cost link and the bedside advantage." Call to action: "Shall we keep going?"

# 5. Visual system (put these on :root as CSS custom properties)

- Colours: paper #FBF3E6 · card/illustration background #F3E7D3 · text #3B2F2A (never pure black) · soft text #6B5A50 · teal headings and data #3A6B6B · red (cover title, the one highlighted value) #C0303A · mustard #E1A63A · brick #B5533C · sky #8EC5C7 · rules and dividers #D9CBB6.
- Fonts (Google Fonts): **Lora** for story lines and beats; **Source Sans 3** for headings, morals, labels and numbers.
- **Story slide, 1280×720:** heading at the top left (34px bold teal). Left column ~40%: story 26px Lora, beat bold. Right column ~60%: the illustration in a rounded #F3E7D3 frame. Full-width footer: thin divider, the moral centred at 20px, page number at 13px.
- **Cover:** sky gradient at the top, title "PUCIO" ~110px heavy red caps, subtitle ~40px, tagline ~22px, illustration below.
- **Notebook slide:** same paper, the same heading and footer positions, a very faint ruled-line background. The middle holds ONE thing: big numbers (96–120px teal, label 24px, source 12px), OR up to 3 cards, OR a 2-lane flow of boxes with arrows. No characters, no faces. Allowed: one tiny (≤44px) inline-SVG confetti tube in the top-right corner. Highlight only one value per slide in red. Every number shows its source (S5, S8, …) in small soft text.
- Readability: each notebook slide must be understandable in under 10 seconds. Text ≥ 14px everywhere.

# 6. Illustrations

- Style: a warm children's picture-book illustration, coloured-pencil and crayon texture on cream paper, a soft muted palette (the colours above), rosy cheeks, big expressive eyes, simple interiors with potted plants, soft light, a medium-wide shot with full figures, **no text or letters inside the image**, landscape 3:2.
- Match the characters and drawing style of the attached reference pictures, but draw **new scenes**. Never copy an illustration from the example.
- **If you can generate images:** make one image per story slide (slides 1, 2, 4, 5, 7, 8, 11), each showing exactly that slide's beat, and give their file names (`img/01.png`, `img/02.png` …).
- **In the HTML**, reference each picture as `<img src="img/NN.png" alt="…" onerror="this.remove()">`, followed by a dashed placeholder box that shows the short scene description. The placeholder is visible only when the image is missing (CSS: `img + .ph{display:none}`).

# 7. HTML requirements

- One file, all CSS and JS inline. External resources allowed: only Google Fonts.
- Each slide is a `<section class="slide story|notebook|cover">`, 1280×720, stacked vertically and centred on a dark background (#2b2522).
- Scale the slides to fit the window width. Arrow keys / space move to the next slide.
- `@media print`: one slide per page, no margins, so Ctrl+P makes a clean PDF.
- Add each slide's speaker note as an HTML comment inside that slide.
- Don't use any external JS libraries.

# 8. Check before you answer

- Only Pucio, Artur, Kasia and the Professor are named; the patient is faceless; Pucio is on every story page.
- Every story page has 3 story lines + 1 bold beat + 1 moral.
- Every number comes from section 3 and shows its source; there are no invented numbers.
- No "so", "therefore" or "as a result" links the €11,000 cost to the questionnaires.
- Notebook slides have no characters, and one claim each.
- Then output the complete HTML file in one code block, followed by the list of illustration file names and their scenes.

---- COPY UNTIL HERE ----
