# Prompt: generate the Pucio pitch deck (HTML)

**Summary:** Regenerate the four-minute HTML pitch in the Pucio storybook style. Use the presenter script and the supplied artwork.
**Based on:** [[11 🧭 Problem statement]] (v2) · `pucio-pitch-deck` skill
**Created:** 2026-11-21

## How to use

1. Attach the reference pictures from `.claude/skills/pucio-pitch-deck/assets/reference/`: at least `01-cover-cast.jpg` (use Pucio and Kasia as references) and `04-user-vs-payer.jpg` (the Boss). Also attach the original PDF if you can.
2. Attach `deck-script.md`, `illustration-prompts.md`, the supplied team photo, and a real prototype dashboard capture. Copy everything below the line into the chat.
3. Save the HTML it gives you as `deck.html`. If the tool also makes the pictures, save them as `img/01.png`, `img/02.png` and so on, next to the HTML.

---- COPY FROM HERE ----

You are a pitch-deck designer and a children's picture-book writer. Make a startup pitch deck as **one self-contained HTML file**. The Problem and Solution slides are told as a picture-book story in the style of the attached example "Pucio robi GTM". The number slides are clean, readable "notebook" pages in the same colours, with no characters.

# 1. The format, learned from the attached example

Use teal headings, short serif copy and one framed illustration per story slide. Set off the takeaway in the footer when the scene needs context. On the opening slide, give the statistic the most visual weight. Use the supplied group photo and the actual prototype dashboard in their own slides.

Pucio hides or guards a tall **polka-dot confetti tube** until the result is real.

# 2. Cast: only these people, keep them identical on every page

Use only the fairy-tale people from the example, matching the attached reference pictures. Don't add any new named characters. Background people may appear only as soft, faceless, out-of-focus extras who never speak.

- **Pucio**, the obvious truth: a toddler about 3, messy dark-brown hair, big round dark eyes, rosy cheeks, a red long-sleeve sweater, dark teal trousers with rolled hems, small brown shoes.
- **Kasia**, the user: a woman about 30, big voluminous dark-brown curly hair, a mustard-yellow button-up shirt with rolled sleeves, wide teal-green trousers, brown loafers, a spiral notepad. **Here she is a PhD student who runs the cough recordings in a chronic-cough study.**
- **The Professor** (the "Boss" from the example), the buyer: a man about 60, swept-back grey hair, a navy blazer, a light-blue shirt, grey trousers, a brown wallet. **Here he is the principal investigator who holds the grant budget.**
- **The patient** is not a named character. Show them only as a soft figure seen from behind, or asleep under a blanket with the face not shown. They never speak.

So the deck has three active characters: Pucio, Kasia and the Professor.

# 3. Content: use exactly these facts, don't invent any numbers

**Pitch in brief:** A short recording can miss day-to-day changes in chronic cough. We’re testing whether academic researchers would use a bedside counter to collect more nights of data at home.

**Situation**
- Chronic cough affects 4–10% of adults (source S13).
- New cough drugs are being developed. The accepted way to judge them is an objective count of coughs per hour.
- Each patient is usually recorded for 24 hours at a few clinic visits (S9).

**Complication**
- Among 36 people with chronic cough, the median within-person relative standard deviation in daily cough frequency was 38.1% ([ERJ Open Research, 2025](https://publications.ersnet.org/content/erjor/11/1/00670-2024)).
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

Use **Pucio Counts Coughs** as the pitch title.

# 4. Pitch structure (16:9, 7 slides)

Use `deck-script.md` for the spoken transcript and demo cues. The pitch runs 4:00, followed by 1:00 of questions. Keep slide 7 up during questions.

| Part | Slide | Seconds |
|---|---|---:|
| Problem | 1 · Pucio Counts Coughs. Open with 38% median day-to-day variability in cough frequency among 36 people with chronic cough. Use `img/04.png`. | 25 |
| Problem | 2 · Who needs more than one day? Introduce the academic user, grant holder, monitor cost and Danish studies reviewed. Use `img/05.png`. | 40 |
| Solution + demo | 3 · A cough counter by the bed. Show the proposed overnight workflow with `img/01.png`. | 30 |
| Solution + demo | 4 · Live demo. Show a real dashboard capture and link to `http://localhost:8010/`. The live prototype records test audio on a laptop. | 55 |
| Team + learnings | 5 · Our team. Show the supplied `../../our team.jpg` group photo in full. | 25 |
| Team + learnings | 6 · What we learned today. Compare actual manual-tap matches and extra detections for the stricter and more sensitive settings. | 30 |
| Next step + ask | 7 · Help us reach two study teams. Ask for two introductions, and describe the interviews and the consented overnight comparison. Use `img/11.png`. | 35 |

# 5. Visual system (put these on :root as CSS custom properties)

- Colours: paper #FBF3E6 · card/illustration background #F3E7D3 · text #3B2F2A (never pure black) · soft text #6B5A50 · teal headings and data #3A6B6B · red (the opening statistic) #C0303A · mustard #E1A63A · brick #B5533C · sky #8EC5C7 · rules and dividers #D9CBB6.
- Fonts (Google Fonts): **Lora** for story lines and beats; **Source Sans 3** for headings, morals, labels and numbers.
- **Story slide, 1280×720:** heading at the top left (34px bold teal). Left column ~40%: story 26px Lora, beat bold. Right column ~60%: the illustration in a rounded #F3E7D3 frame. Full-width footer: thin divider, the moral centred at 20px, page number at 13px.
- **Notebook slide:** same paper, the same heading and footer positions, a very faint ruled-line background. The middle holds ONE thing: big numbers (96–120px teal, label 24px, source 12px), OR up to 3 cards, OR a 2-lane flow of boxes with arrows. No characters, no faces. Allowed: one tiny (≤44px) inline-SVG confetti tube in the top-right corner. Highlight only one value per slide in red. Every number shows its source (S5, S8, …) in small soft text.
- Readability: each notebook slide must be understandable in under 10 seconds. Text ≥ 14px everywhere.

# 6. Illustrations

- Style: a warm children's picture-book illustration, coloured-pencil and crayon texture on cream paper, a soft muted palette (the colours above), rosy cheeks, big expressive eyes, simple interiors with potted plants, soft light, a medium-wide shot with full figures, **no text or letters inside the image**, landscape 3:2.
- Match the characters and drawing style of the attached reference pictures, but draw **new scenes**. Never copy an illustration from the example.
- **If you can generate images:** use the cast and scenes in `illustration-prompts.md`. Keep the supplied asset names from the pitch structure above.
- **In the HTML**, reference each picture as `<img src="img/NN.png" alt="…" onerror="this.remove()">`, followed by a dashed placeholder box that shows the short scene description. The placeholder is visible only when the image is missing (CSS: `img + .ph{display:none}`).

# 7. HTML requirements

- Use one HTML file, with CSS, JS and image data embedded. Google Fonts may load over the network. The live demo link opens a separate local page.
- Each slide is a `<section class="slide story|notebook|team">`, 1280×720, stacked vertically and centred on a dark background (#2b2522).
- Scale the slides to fit the window width. Arrow keys / space move to the next slide.
- `@media print`: one slide per page, no margins, so Ctrl+P makes a clean PDF.
- Keep the presenter transcript, timing and demo cues in `deck-script.md`.
- Don't use any external JS libraries.

# 8. Check before you answer

- Every number comes from section 3 and shows its source; there are no invented numbers.
- No "so", "therefore" or "as a result" links the €11,000 cost to the questionnaires.
- Notebook slides focus on one claim. Use the supplied team photo for slide 5.
- Then output the complete HTML file in one code block, followed by the list of illustration file names and their scenes.

---- COPY UNTIL HERE ----
