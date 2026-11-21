---
description: Choosing, binding or reviewing colour, contrast, dark mode, status colour, brand colour or gradients in a Figma design or an inventory
paths:
  - "docs/ui-design/**/inventory.md"
  - "docs/ui-design/**/figma.md"
  - "docs/ui-design/**/audit/**"
---

# UI colour and contrast

Colour carries meaning before any text is read. Restraint is the whole discipline: a palette that says everything says nothing. ID formats are in [ui-rule-ids.md](ui-rule-ids.md). Write gradient IDs in full, for example `UI-Pedia GRA-05`.

Every colour is a `shadcn colors` variable from [designer-ui-kit.md](designer-ui-kit.md), in its `shadcn` (light) and `dark` modes. Never type a hex, and never bind a `tw-raw/*`, `theme/neutrals/*` or `theme/destructive/*` colour on a node.

## Contrast minimums

| Pair | Minimum ratio |
|---|---|
| Body text on its background | 4.5:1 |
| Large text: at least 24 px regular, or 18.7 px bold | 3:1 |
| UI parts against their neighbour: input border, focus ring, a meaningful icon, a selected state | 3:1 |
| Text over an image | 4.5:1 on the lightest pixel behind the text, with a scrim |
| Disabled text and controls | No minimum, but it must stay readable (P06) |

Check every token pair in both modes before using it:

| Background token | Text token |
|---|---|
| `background`, `card`, `popover` | `foreground`, `card foreground`, `popover foreground`, `muted foreground` |
| `primary` | `primary foreground` |
| `secondary` | `secondary foreground` |
| `muted`, `accent` | `muted foreground`, `accent foreground` |
| `destructive` | The text colour the kit's `Variant=Destructive` button uses |
| `sidebar`, `sidebar accent`, `sidebar primary` | `sidebar foreground`, `sidebar accent foreground`, `sidebar primary foreground` |

A pair that fails is a theme-wide token issue. Report it with the two tokens, the mode and the ratio. Never fix it on one node.

## Palette and restraint

| ID | Do | Why | Value |
|---|---|---|---|
| Rule 54 | Build the scheme from one hue family plus one accent | Every unrelated hue is a signal the user must decode | Neutral base plus `primary`. Status colours are separate (P06) |
| P02 | Split the palette 60:30:10 | One colour holds the surface, one structures, one acts | 60% `background` and `card`. 30% `secondary`, `muted`, `sidebar`. 10% `primary` |
| P03 | Pick the scheme by a colour-wheel relationship, not by eye | Hues picked one at a time never form a system | The kit's base is `neutral`, so the scheme is monochromatic plus the brand hue in `primary` and `ring` |
| P10 | Keep the palette simple | Too many colours in too many places confuse the user | Two contrasting hues, or one family. Nothing more without a reason |
| P04 | Choose a hue for the meaning it carries with the audience | A hue whose connotation contradicts the message works against it | Blue reads as trust, green as calm, red as warning |
| P04a | Check colour meaning per market | Colour meaning is cultural | Record the market in the inventory when it matters |
| P08 | Let one saturated colour do the shouting. Mute its neighbours | When everything is saturated, nothing stands out | `primary` is the only saturated token on a screen |
| P09 | Use the sharpest contrast for the one thing that must be seen first | Maximum contrast everywhere makes every element demand attention | The primary action has the highest contrast |
| P01 | Resolve hierarchy in greys before colour | A screen that reads only when coloured has a broken hierarchy | The sketch stage is greyscale. A Figma screen must still read with colour removed |

## Brand and interaction colour

| ID | Do | Why | Value |
|---|---|---|---|
| Rule 55 | Spend `primary` only on what you want clicked | When every card is brand-coloured, the colour stops being a signal | About 10% of the screen. Image overlays are neutral, never `primary` |
| P05 | Keep interactive colour to one hue. States are its shades | Users learn that one colour means "press" | `primary` with the kit's `Hover & Active`, `Focus` and `Disabled` states |
| Rule 88 | Give each category one accent, used once per section | Identical sections make users compare titles word by word | One accent per section, never per element. The kit has no category tokens: propose one as a token gap. `chart 1` to `chart 5` are for charts only |
| Rule 15 | Never use pure black on pure white | 21:1 contrast makes text edges buzz on long reads | Never `#000000`. Text is `foreground` on `background`. If the kit's light `foreground` is darker than `#1A1A1A`, report it as a theme question |

## Status and danger

| ID | Do | Why | Value |
|---|---|---|---|
| Rule 12 | Make destructive actions red, never the brand colour | Users press the brand colour on autopilot | `Variant=Destructive` on the confirming button. The safe option stays neutral |
| P06 | Reserve status colours for status. Never let a brand colour double as one | A brand red used for errors makes every error look like branding, and the reverse | `destructive` for errors. The kit has no success or warning token: propose `success`, `success foreground`, `warning`, `warning foreground` with light and dark values |
| Rule 75 | Show status as a tinted badge with a label | A list can be scanned without reading every row | `Badge` with an icon and text. Never colour alone |
| P07 | Pair every colour cue with a second cue | Colour-blind users cannot use a colour-only distinction | Icon, text, pattern or a light and dark difference |

## Dark mode

| ID | Do | Why | Value |
|---|---|---|---|
| Rule 3 | Give dark mode its own palette. Never invert the light one | The same hex glares on dark and muddies on light | The `dark` mode values in designer-ui-kit.md. Components never change, only the mode |
| Rule 2 | Desaturate accents on dark surfaces | A fully saturated hue vibrates on near-black and its text loses legibility | Brand accents from the 200 to 500 tone range in `dark` |

Every screen is checked in both modes. A frame in `dark` sets the `shadcn colors` collection to the `dark` mode on its root frame.

## Gradients

Gradients appear only on marketing CTAs and hero surfaces. Never on app UI controls.

| ID | Do | Why | Value |
|---|---|---|---|
| Rule 26 | Push the gradient's start and end beyond the element | Close stops compress the transition into a visible band | Adjacent hues about 20 degrees apart. Stops at about -20% and 120% |
| UI-Pedia GRA-01 | Use the transition to direct attention | The eye flows from bright to dark | Bright end at the start of the reading path |
| UI-Pedia GRA-02 | Remember shadows and highlights are gradients | No surface is truly flat | Use the kit effect styles, not drawn gradients |
| UI-Pedia GRA-03 | Choose gradient hues by a colour-wheel relationship | Arbitrary pairs look unprofessional | Complementary, analogous, triadic, or one hue light to dark |
| UI-Pedia GRA-04 | Match the gradient to the emotion you want | Soft green to blue calms. Red to orange urges | |
| UI-Pedia GRA-05 | Stay inside the brand palette | A gradient outside the palette breaks the brand | Built from `primary` and its neighbours only |
| UI-Pedia GRA-06 | Match the gradient to the audience | Vivid gradients suit young audiences, greyscale suits luxury | |
| UI-Pedia GRA-07 | Use gradients sparingly | Overuse complicates the design | At most one gradient surface per screen |
| UI-Pedia GRA-08 | Iterate on stops and steps | The first try rarely works | A three-step gradient suits subdued tones |
| UI-Pedia GRA-09 | Tighten stops only on small shaded parts | Quick transitions show motion in small shapes | Large surfaces keep Rule 26 |
| UI-Pedia GRA-10 | Test a gradient before the final design | | Screenshot it in both modes |

- A gradient needs colour stops that are variables. The kit has no gradient tokens: propose them as a token gap first.

## Check

- No raw hex and no primitive colour variable is bound on any node.
- Every text and background pair passes its minimum in both modes.
- `primary` appears only on interactive elements, and on about 10% of the screen.
- No status is shown by colour alone, and no destructive action uses `primary`.
