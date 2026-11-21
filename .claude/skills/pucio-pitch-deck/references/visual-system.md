# Visual system

Story pages and notebook pages share the same **paper, palette, fonts and footer position**. They differ only in what fills the middle: an illustration, or data.

## Tokens (sampled from the reference book)

| Token | Hex | Use |
|---|---|---|
| `--paper` | `#FBF3E6` | Page background (warm cream) |
| `--paper-2` | `#F3E7D3` | Illustration band, cards, chart background |
| `--ink` | `#3B2F2A` | Body text (warm dark brown, never pure black) |
| `--ink-soft` | `#6B5A50` | Secondary text, axis labels, page number |
| `--teal` | `#3A6B6B` | Headings, primary data series |
| `--red` | `#C0303A` | Cover title, the one highlighted value in a chart |
| `--mustard` | `#E1A63A` | Secondary series, highlight marker |
| `--brick` | `#B5533C` | Tertiary series, warnings |
| `--sky` | `#8EC5C7` | Cover sky, soft fills |
| `--rule` | `#D9CBB6` | Divider lines, gridlines |

Fonts (Google Fonts): **Lora** for story lines and beats (serif, picture-book feel). **Source Sans 3** for headings, morals, labels and numbers.

## Story page layout

**16:9 (default):** the heading goes top-left. The left column (≈40%) holds 3 story lines + the bold beat. The right column (≈60%) holds the illustration on `--paper-2` with soft edges. The full-width footer has a thin `--rule` divider, the moral centred in Source Sans, and the page number underneath.

**4:5 portrait ("book" mode, same as the reference):** heading → story lines → beat → full-width illustration band → divider → moral → page number.

Type sizes at 1280×720: heading 34px bold teal · story 26px Lora · beat 26px Lora bold · moral 20px Source Sans · page number 13px.

## Notebook page layout (no characters, no story)

They look like the same book, but the page is a clean working notebook.

- Same paper, the heading in the same place and style, and the moral line in the same footer position. The moral carries the "so what" of the number.
- The middle holds **one** thing: a big number with a short label, OR one chart, OR a 2×2 map, OR a 3-step flow, OR a ≤4-row table.
- Optional texture: a very faint ruled line pattern and one small hand-drawn prop (the running gag object) at ≤48px in a corner. Never a face, never a character.
- Charts:
  - Flat fills from the palette. Highlight one value in `--red` and keep everything else `--teal` or muted.
  - Label values directly on the bars or points. No legend if you can avoid it, no 3D, no pie with more than 3 slices.
  - Axis and labels in `--ink-soft`, ≥14px. The highest-contrast text on the page is the number that matters.
  - Use crisp vector shapes for readability. A slight crayon texture is allowed on fills only, never on text or lines that carry values.
- Big-number slide: the number at 96–120px in `--teal` (or `--red` if it's the ask), a 1-line label under it, and a source in 12px `--ink-soft`.
- Competition: a 2×2 map with axes that are real buying criteria. "Do nothing / spreadsheet" is always one of the dots. Your dot is `--red`.
- Tools/Tech: 3–5 boxes connected by arrows (input → your product → output), each box a 2–3-word label plus a small line icon.

## Character sheet (paste into every prompt verbatim)

Use the ready-made sheet for the storybook cast (Pucio, Artur, Kasia, the Boss) in `references/cast.md`. Fill in only `[PRODUCT]` and, if you use them, the optional Boss and cameo lines. Never rewrite the descriptions between pages.

## Illustration prompt template

```
STYLE: warm children's picture-book illustration, coloured-pencil and crayon
texture on cream paper, soft muted palette (cream #FBF3E6, teal #3A6B6B,
mustard #E1A63A, brick red #B5533C, sky #8EC5C7), gentle rosy cheeks, expressive
big eyes, simple interiors with potted plants, soft daylight, no text in the
image, no logos except [allowed small print], landscape 3:2 framing,
plenty of calm negative space at the edges.

[CHARACTER SHEET — pasted verbatim]

SCENE: [one moment that shows the beat line exactly]. In focus: [max 3 characters].
Artur is [action, emotion]. Kasia is [action, emotion]. Pucio is
[small decisive action — pointing / holding / hiding the gag object].
Props: [2–4 concrete props that carry the meaning, e.g. a wall clock showing
2 minutes left, a 40-page binder]. Background: [setting], optional soft faceless
out-of-focus extras.
```

Reference images: if the tool accepts them, attach `assets/reference/01-cover-cast.jpg` for the three main characters, `04-user-vs-payer.jpg` when the Boss is in the scene, and the example page whose scene is closest. Say "match the characters and drawing style of the reference images; create a new scene".

Rules for prompts: one moment per image. The beat line must be readable from the picture alone. Keep the same camera distance across pages (a medium-wide shot, full figures). Never ask the model to write words inside the image; all text lives in the slide.
