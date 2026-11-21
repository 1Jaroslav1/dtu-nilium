---
description: Designing, building or reviewing UI for this product in a sketch or in Figma, and mapping a Figma component, variable or style to its shadcn/ui code name
paths:
  - "docs/ui-design/**"
---

# Designer UI kit

The design system is shadcn/ui. Its setup is fixed:

| Setting | Value | What it means for a design |
|---|---|---|
| Base | Radix | Overlays, focus and keyboard behaviour come from the code. Design the visible states only |
| Style | `new-york` | Compact, slightly rounded components. The kit's "Nova" style matches it |
| Base colour | `neutral` | Greys with no tint. Brand colour lives only in `primary` and `ring` |
| Colours | CSS variables | Every colour is a semantic token, never a literal |
| Icons | Lucide | One icon family, one stroke width |

Which components may be used, and the kit page for each, is in [designer-component-catalog.md](designer-component-catalog.md).

## Figma files

| File | Key | Use |
|---|---|---|
| Obra shadcn/ui kit, Community Edition | `dPOs4YrkDCnVAVSMRgn3Qx` ([link](https://www.figma.com/design/dPOs4YrkDCnVAVSMRgn3Qx/shadcn-ui-kit-community-edition--Community-)) | The public source of the kit. Read-only, unless the user names it as their project library |
| Project library (the user's own copy of the kit) | An input, per [design-artifacts.md](design-artifacts.md). Never stored in a rule. It may be the kit key above when the user says that file is in their space | The only file where `shared/ui` components, variables and styles are created or changed |
| Product file | per feature, recorded in `figma.md` per [design-artifacts.md](design-artifacts.md) | Instances of library components only |

- The kit has one Figma page per shadcn component, for example "Button & Icon Button", "Input & Input Group", "Select & Combobox", "Field", "Card", "Dialog", "Alert Dialog".
- Kit component sets are named `<Component> - Nova`: "Button - Nova", "Icon Button - Nova", "Vertical Field - Nova", "Horizontal Field - Nova".

## Variant names: kit vs code

Kit properties are Figma-style and capitalised. Code uses the shadcn `cva` names.

| Kit property | Kit value | Code (`cva`) |
|---|---|---|
| `Variant` | `Primary` | `variant=default` |
| `Variant` | `Secondary`, `Outline`, `Ghost`, `Destructive`, `Link` | `variant=secondary`, `outline`, `ghost`, `destructive`, `link` |
| `Size` | `Default` | `size=default` |
| `Size` | other values | Unknown. Do not map. Report it as an open item |
| component set "Icon Button - Nova" | any | `size=icon` on `Button` |
| `State` | `Default`, `Hover & Active`, `Focus`, `Disabled` | no prop. CSS states (`hover:`, `focus-visible:`, `disabled`) |

- Kit components keep the kit's names. Never rename a kit property or value.
- New components in the project library use the kit's convention: capitalised property names (`Variant`, `Size`, `State`) and capitalised values.
- Every component description carries its code names, for example `cva: variant=default|outline; size=default|sm`.

## Variables

Every kit collection has one mode named `shadcn`. That mode is light. The Community Edition has no dark mode.

| Collection | Variables | Bind on nodes |
|---|---|---|
| `shadcn colors` | `general/{background, foreground, primary, primary foreground, secondary, secondary foreground, accent, accent foreground, muted, muted foreground, destructive, border, input, card, card foreground, popover, popover foreground}`, `focus/{ring, ring error}`, `sidebar/{sidebar, sidebar foreground, sidebar accent, sidebar accent foreground, sidebar primary, sidebar primary foreground, sidebar border, sidebar ring}`, `alpha/white\|black/switch\|no-switch/alpha-N` | Yes. The only colours bound on components and screens |
| `theme` | `neutrals/0…1000`, `destructive/200\|400\|600\|900`, `chart colors/chart 1…5` | `chart colors` only, on charts. The rest are primitives that `shadcn colors` alias |
| `raw tailwind colors` | `tw-raw/<hue>/50…950` | Never. Primitives only |
| `spacing` | `3xs, 2xs, xs, sm, md, lg, xl, 2xl … 10xl` | Yes, for gap and padding |
| `border radii` | `radius-none, radius-sm, radius-md, radius-lg, radius-xl, radius-2xl, radius-3xl, radius-4xl, radius-full` | Yes |
| `typography` | `font-family`, `-headings`, `-body`, `-monospace`, plus size, line-height and weight per style | Through text styles only |
| `shadows` | `2xs … 2xl` | Through effect styles only |

- Never bind an `out-of-scale/*` variable from `spacing` or `border radii`. Using one is an audit finding.
- Never bind a raw hex, a `tw-raw/*` colour, a `theme/neutrals/*` colour or a `theme/destructive/*` colour directly on a node.

### Kit name to code name

Drop the group prefix. Replace spaces with hyphens. The result is the CSS variable, and the Tailwind utility follows from it.

| Kit variable | CSS variable | Tailwind |
|---|---|---|
| `shadcn colors/general/primary foreground` | `--primary-foreground` | `bg-primary-foreground`, `text-primary-foreground` |
| `shadcn colors/sidebar/sidebar accent` | `--sidebar-accent` | `bg-sidebar-accent` |
| `shadcn colors/focus/ring` | `--ring` | `ring-ring` |
| `shadcn colors/focus/ring error` | none in shadcn | Uses `--destructive` in code. Report it as a token gap |
| `theme/chart colors/chart 1` | `--chart-1` | `bg-chart-1` |
| `border radii/radius-lg` | `--radius` (the base radius) | `rounded-lg` |
| `border radii/radius-<x>` | `--radius-<x>` | `rounded-<x>` |
| `spacing/<t-shirt>` | none. Tailwind spacing is numeric | `p-<n>`, where `n` = px ÷ 4 |

- Spacing map from t-shirt name to px and Tailwind `n`: unknown. Do not map. Report it as an open item.
- Set WEB code syntax on a variable (for example `var(--primary-foreground)`) only in the project library.

### Dark mode

Add a second mode `dark` to `shadcn colors` in the project library. Dark is its own palette, not an inversion: surfaces get lighter as they rise, and accents are desaturated. Use the shadcn `neutral` dark values:

| Token | Dark value | Token | Dark value |
|---|---|---|---|
| `background` | `oklch(0.145 0 0)` | `foreground` | `oklch(0.985 0 0)` |
| `card`, `popover` | `oklch(0.205 0 0)` | `card foreground`, `popover foreground` | `oklch(0.985 0 0)` |
| `primary` | `oklch(0.922 0 0)` | `primary foreground` | `oklch(0.205 0 0)` |
| `secondary`, `muted`, `accent` | `oklch(0.269 0 0)` | `secondary foreground`, `accent foreground` | `oklch(0.985 0 0)` |
| `muted foreground` | `oklch(0.708 0 0)` | `destructive` | `oklch(0.704 0.191 22.216)` |
| `border` | `oklch(1 0 0 / 10%)` | `input` | `oklch(1 0 0 / 15%)` |
| `ring` | `oklch(0.556 0 0)` | `sidebar` | `oklch(0.205 0 0)` |
| `sidebar primary` | `oklch(0.488 0.243 264.376)` | `sidebar accent` | `oklch(0.269 0 0)` |
| `sidebar border` | `oklch(1 0 0 / 10%)` | `sidebar ring` | `oklch(0.556 0 0)` |
| `sidebar foreground`, `sidebar accent foreground` | `oklch(0.985 0 0)` | `sidebar primary foreground` | `oklch(0.985 0 0)` |
| `focus/ring error` | the dark `destructive` value | | |

The chart colours live in the `theme` collection. Add a `dark` mode there too, with these values. Every other `theme` variable copies its light value into `dark`.

| Token | Dark value | Token | Dark value |
|---|---|---|---|
| `chart colors/chart 1` | `oklch(0.488 0.243 264.376)` | `chart colors/chart 2` | `oklch(0.696 0.17 162.48)` |
| `chart colors/chart 3` | `oklch(0.769 0.188 70.08)` | `chart colors/chart 4` | `oklch(0.627 0.265 303.9)` |
| `chart colors/chart 5` | `oklch(0.645 0.246 16.439)` | | |

Check every background and `foreground` pair in both modes: at least 4.5:1 for text, 3:1 for large text and UI parts.

## Styles

| Kind | Names | Code |
|---|---|---|
| Text styles | `heading 1` to `heading 4`, `caption`, `paragraph large\|paragraph\|paragraph small\|paragraph mini` × `normal\|medium\|bold`, monospace variants | Tailwind `text-*` and `font-*` utilities. The utility per style is unknown. Do not map. Report it as an open item |
| Effect styles | `shadow-2xs`, `xs`, `sm`, `md`, `lg`, `xl`, `2xl` | `shadow-2xs` … `shadow-2xl` |
| Effect styles | `focus ring`, `focus ring sidebar`, `focus ring error` | The component's own `focus-visible:ring-*` classes. No extra token |
| Paint styles | none | Colour comes from variables only |

Every text node uses a text style. Every shadow uses an effect style.

## Icons

- Icons are Lucide components named `Lucide / <lucide-name>`, about 1,700 of them.
- Swap an instance to another `Lucide / *` component. Never draw an icon and never import a different icon set.
- The name after `Lucide / ` is the `lucide-react` export in kebab-case.

## Open items

These values are unknown. Never guess them. A design or report that needs one names it as an open item.

| Item | Status |
|---|---|
| Spacing px and Tailwind `n` per t-shirt name | Unknown. Do not map |
| Kit `Size` value names other than `Default` | Unknown. Do not map |
| Text style to Tailwind utility map | Unknown. Do not map |
