---
description: Choosing, placing or reviewing icons, avatars, images, photos, illustrations or image overlays in a sketch or a Figma design
paths:
  - "docs/ui-design/**/sketch/**"
  - "docs/ui-design/**/inventory.md"
  - "docs/ui-design/**/audit/**"
---

# UI iconography and imagery

Icons and images are read faster than text, so an inconsistent set teaches the wrong thing faster too. ID formats are in [ui-rule-ids.md](ui-rule-ids.md). Write component guideline IDs in full, for example `UI-Pedia ICN-03`.

## Icons are Lucide only

- Every icon is a `Lucide / <lucide-name>` instance from the kit, per [designer-ui-kit.md](designer-ui-kit.md).
- Swap an icon by swapping the instance. Never draw an icon, never import another set, never flatten or recolour an icon's vectors.
- An icon's colour comes from its parent's text colour variable, such as `foreground` or `muted foreground`.
- Lucide is one outline family with one stroke width. Keep the kit's stroke. Never change it per icon.

| ID | Do | Why | Value |
|---|---|---|---|
| Rule 7 | Use one icon set, one style | Mixed filled and outlined icons look like different states of one control | Lucide outline only |
| Rule 71 | Use one stroke width across the set | Stroke weight reads as emphasis | The kit's Lucide stroke. Scale the icon, never the stroke |
| UI-Pedia ICN-09 | Keep visual weight constant across a set | Fill, stroke, size and shape together make weight. Squint: no icon should look stronger | Same as Rule 71 |
| Rule 46 | Choose simple, flat, recognisable icons | At 24 px, detail turns to noise | The plainest Lucide match. No decorative icon |
| Rule 70 | Use front-facing icons. Never 3D perspective | Perspective must be resolved before the shape is recognised | No rotation or skew on icons |
| UI-Pedia ICN-02 | Use the universal symbol for a universal action | A new metaphor for a known action confuses | `search` for search, `house` for home, `printer` for print |
| UI-Pedia ICN-03 | Label any icon that is not universal | Unique icons are hard to understand on first use | Icon plus a visible text label |
| UI-Pedia ICN-04 | Give a conflicting icon one meaning and keep it | Heart, star and thumbs-up compete for the same job | One icon per meaning, listed in the inventory |
| UI-Pedia ICN-01 | Match an icon's ambiguity to the cost of a mistake | A wrong guess costs more in some contexts than others | High stakes or rare use: the literal icon plus a label |
| UI-Pedia ICN-05 | Make icons equal in at least one dimension | Otherwise they look like different sizes | One icon size per context: 16 in dense UI, 20 or 24 elsewhere |
| UI-Pedia ICN-06 | Trust the eye over the measurement | Metric centre is not optical centre | Nudge optically inside the icon frame, never the frame itself |
| UI-Pedia ICN-07 | Treat icon grids as guidance, not law | | |
| UI-Pedia ICN-08 | Leave space between an icon's shapes | Thin, crowded strokes turn into a blob | Prefer the simpler Lucide variant |
| UI-Pedia ICN-10 | Check icons in context, not in isolation | An icon that reads on its own can fail beside its siblings | Screenshot the screen, not the icon |
| UI-Pedia ICN-11 | Keep the set's personality deliberate | The icon style says something about the product | Lucide is the decided set |

## Avatars

| ID | Do | Why | Value |
|---|---|---|---|
| Rule 68 | Ring avatars with a stroke | A light photo dissolves into a light card | A 2 to 3 px stroke in the surface colour (`background` or `card`). Overlapping stacks keep the ring |

## Images

| ID | Do | Why | Value |
|---|---|---|---|
| Rule 78 | Use images that carry the message | Generic stock costs load time and says nothing | Show the product, the outcome, or the person using it |
| Rule 72 | Let one image lead and the rest support it | Equal thumbnails give the eye no entry point | Lead image about 2 × the others. One lead per viewport |
| Rule 69 | Use images at 2 × their display size. Never upscale | Blur reads as broken and spoils overlaid text | Image fills at 2 × the frame size |
| Rule 96 | Scale images to fill the frame without stretching | Stretching distorts faces and logos differently on every device | Figma image fill set to `Fill`, never `Stretch`. Fixed aspect ratio on the frame |
| P23 | Place the subject where the golden spiral tightens | A centred subject is static | Crop with the focal point off-centre, near a third of the frame |
| Rule 25 | Put a scrim between a photo and text on it | You cannot control which photo a user uploads | A gradient scrim from transparent to dark behind the text. 4.5:1 on the lightest pixel |

- A placeholder image is a neutral frame filled with `muted`. Name it `Image placeholder`. List every placeholder under open questions.

## Illustrations

| ID | Do | Why | Value |
|---|---|---|---|
| Rule 66 | Keep every illustration in one style, palette and level of detail | Mixed styles look like stock art and erase the brand | 2 to 3 hues from the brand family. One line weight. One perspective |
| UI-Pedia ILL-03 | Match the art style to the brand | Same as Rule 66 | |
| UI-Pedia ILL-01 | Treat illustration as functional, not decoration | It must help users navigate, understand tone or reach a goal | Empty states, onboarding, explaining the abstract |
| UI-Pedia ILL-02 | Check every detail of an illustration | An ambiguous picture misleads | |
| UI-Pedia ILL-04 | Pair an illustration with microcopy in the same voice | Picture and text tell one story | |
| UI-Pedia ILL-05 | Never use a mascot as the logo | A mascot gives contextual help. It is not the brand mark | |
| UI-Pedia ILL-06 | Use small animation on illustrations | A small effect makes a moment memorable | Within the motion rules in [ui-tables-cards-motion.md](ui-tables-cards-motion.md) |
| UI-Pedia ILL-07 | Use illustration to lead the user to the next step | It steers the narrative | |

- The project has no illustration set yet. An illustration in a design is a placeholder frame named `Illustration placeholder`, listed under open questions.

## Check

- Every icon is a `Lucide / *` instance with the kit's stroke, and no icon is drawn or detached.
- Every non-universal icon has a visible label.
- Every avatar has a ring, and every text on an image has a scrim.
- No image fill is stretched, and every placeholder is listed as an open question.
