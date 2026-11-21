---
description: Applying or reviewing shadows, elevation, layering, overlaps, blurs or dark-mode surface levels in a Figma design
paths:
  - "docs/ui-design/**/inventory.md"
  - "docs/ui-design/**/figma.md"
  - "docs/ui-design/**/audit/**"
---

# UI depth and elevation

Elevation answers one question: what is on top of what. Light comes from one place, shadows stay soft, and in dark mode lightness does the lifting, not shadow. ID formats are in [ui-rule-ids.md](ui-rule-ids.md). Always write shadow IDs in full, for example `UI-Pedia SHD-03`: other rule sets use `SHD-` for different rules.

## Kit effect styles

Every shadow is a kit effect style from [designer-ui-kit.md](designer-ui-kit.md). Never add a drop shadow by hand, and never use Figma's default shadow.

| Layer | Effect style |
|---|---|
| Page and flat content | none |
| Buttons, inputs | `shadow-xs` |
| Cards | `shadow-sm` |
| Popovers, dropdown menus, select lists, tooltips | `shadow-md` |
| Dialogs, sheets, drawers | `shadow-lg` |
| Toasts and other floating elements above dialogs | `shadow-xl` |
| Keyboard focus | `focus ring`, `focus ring sidebar`, `focus ring error` |

- `shadow-2xs` and `shadow-2xl` are for rare in-between and top levels. Name the reason in the description.
- If a kit effect style breaks Rule 84 or UI-Pedia SHD-02, report it as a theme-wide question. Never change it on one node.

## Layers and light

| ID | Do | Why | Value |
|---|---|---|---|
| Rule 21 | Keep each stacked layer at least two tonal steps from the surface below it | A dropdown one step off its background has no readable edge. A shadow alone will not rescue it | `popover` on `background` in light. In dark, see Rule 77. Plus a soft effect style |
| Rule 61 | Use one light source per screen. Every shadow falls the same way | Mixed offsets make cards look tilted at different angles | Offset x 0, y positive, from the kit effect styles only |
| Rule 84 | Never use a tool's default shadow | A hard dark smudge reads as dirt, not light | Default `y 2, blur 4, black 50%` is wrong. Soft is about `y 8, blur 24, 15%` |
| UI-Pedia SHD-01 | Never ship a default shadow | Same as Rule 84 | |
| UI-Pedia SHD-02 | Tint the shadow with the UI's neutral. Never pure grey | Real shadows always carry a faint colour | A theme question if a kit style is pure black |
| UI-Pedia SHD-03 | Stack shadows for richer depth | Several soft layers look more natural than one | Kit effect styles that hold several shadows |
| UI-Pedia SHD-04 | For full control, use a blurred layer instead of a shadow | A separate layer can be sized and placed freely | Marketing surfaces only |
| UI-Pedia SHD-05 | Use inner shadows sparingly | An inner shadow reads as a hole | Only on form inputs, if the kit uses one |
| UI-Pedia SHD-07 | Use the z-axis to keep stacked layers distinct | Dropdowns and dialogs sit above the page | Order: background, content card, floating button, system navigation |
| UI-Pedia SHD-08 | Use elevation to set attention order | The highest layer is seen first | Only what must be seen first gets the highest level |

## Dark mode

| ID | Do | Why | Value |
|---|---|---|---|
| Rule 77 | In dark mode, raise elevation with lighter surfaces, not shadows | A dark shadow on a dark background is invisible | `background` 0.145, then `card` and `popover` 0.205, then `secondary`, `muted`, `accent` 0.269, in oklch lightness. Higher is lighter |

- Keep the effect style in dark mode as an ambient hint only. The surface step does the work.

## Overlap and interaction

| ID | Do | Why | Value |
|---|---|---|---|
| Rule 79 | Overlap elements on purpose to show they belong together | Overlap is the cheapest depth cue and binds an avatar to its card | Overlap by 25 to 50% of the smaller element. Ring the top element per Rule 68 |
| UI-Pedia SHD-06 | Raise an element on hover and lower it on press | A smaller shadow on press mimics a pressed object | Hover one effect style up. Pressed one down. Only where the kit state allows |

## Blurs

| Type | What it blurs |
|---|---|
| Background blur | Only what is behind the element. Its edge stays sharp |
| Layer blur | The whole element, edges included |

| ID | Do | Why | Value |
|---|---|---|---|
| UI-Pedia SHD-09 | Blur the background to focus attention on an opened overlay | The blurred page recedes behind the dialog or menu | The kit dialog scrim first. A background blur only if the kit uses one |
| UI-Pedia SHD-10 | Blur behind overlaid text, and control the image palette | A blur keeps text readable only if every image behind it has a similar palette | Check 4.5:1 on the lightest image |
| UI-Pedia SHD-11 | Use decorative blur where it helps focus | A blurred hero image keeps foreground graphics in focus | Marketing surfaces only |

Neumorphism, where elements match the background colour, conflicts with Rule 21 and with contrast minimums. Never use it on app screens.

## Check

- Every shadow is a kit effect style. No node has a local shadow.
- Every shadow falls the same way, with x at 0.
- Every stacked layer is at least two tonal steps from what lies under it, in both modes.
- In dark mode, raised surfaces are lighter than the surface below them.
