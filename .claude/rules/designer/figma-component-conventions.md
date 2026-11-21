---
description: Building, extending or reviewing one Figma component or component set, its auto layout, bound values, layer names, variants, properties, slots, states and description, or overriding an instance
paths:
  - "docs/ui-design/**/inventory.md"
  - "docs/ui-design/**/figma.md"
  - "docs/ui-design/**/audit/**"
---

# Figma component conventions

One component, built so a designer can keep editing it and a developer can read its code shape from it. Where it goes is in [figma-fsd-structure.md](figma-fsd-structure.md). Kit names and variables are in [designer-ui-kit.md](designer-ui-kit.md). The states each component type needs are in [ui-components-and-states.md](ui-components-and-states.md).

## Structure

| Do | Why | Value |
|---|---|---|
| Use auto layout on every frame | A frame without it breaks on the first text change and has no code equivalent | `layoutMode` horizontal or vertical. Absolute position only for a deliberate overlay: a badge on an avatar, a dialog scrim |
| Set resizing on purpose | Wrong resizing makes instances grow or clip when text changes | Buttons hug. Inputs, fields, items and cards fill. Icons fixed. A mobile footer button fills |
| Use frames, never groups | A group has no auto layout, no padding and no code equivalent | No group, no flattened text, no outlined text, no hidden leftover layer |
| Bind every value | A raw value drifts from the theme and breaks dark mode | Fill and stroke: a `shadcn colors` variable. Gap and padding: a `spacing` variable. Radius: a `border radii` variable. Text: a text style. Shadow: an effect style |
| Name every layer by its role | A developer finds each layer in the code by its name | shadcn part names where they exist: `CardHeader`, `Label`, `Leading icon`, `Actions`. Never `Frame 12` or `Rectangle 3` |
| Build from kit instances | A redrawn kit part forks the design system | Nest `Button - Nova`, `Input - Nova`, `Lucide / *` instances. Never redraw them |

- A value with no matching variable or style is a token gap. Report it with a proposed name and light and dark values. Never type the raw value.
- Never bind an `out-of-scale/*`, `tw-raw/*`, `theme/neutrals/*` or `theme/destructive/*` variable on a node.

## Variant, property, slot or separate component

| The difference between two elements | Model it as | Becomes in code |
|---|---|---|
| Same anatomy, a finite set of looks | Variants in one component set: `Variant`, `Size` | `cva` variant groups |
| Interaction state: Default, Hover, Focus, Disabled, and Invalid or Open where the component has them | The variant property `State` | CSS states: `hover:`, `focus-visible:`, `disabled:`, `aria-invalid:`, `data-[state=open]:`. Not a `cva` group |
| Content or screen state: Empty, Filled, Error, Loading, Long content, Overflow, Blocked | The variant property `Content` | Data the component renders, such as an empty list or a failed load. Not a `cva` group |
| Text content only | A `TEXT` property: `Label`, `Title` | `children` or a string prop |
| An optional or swappable part: icon, avatar, actions area | A slot: an `INSTANCE_SWAP` property with preferred values. Add a `BOOLEAN` named `Show <slot>` only when the part can be absent | A slot prop or `children`. Never `withIcon` or `hasHeader` |
| A part of a compound shadcn component: `CardHeader`, `DialogFooter` | Its own component, nested by instance in the parent | An exported part of the same file |
| A purely visual on or off with no structure: a divider, a dot | A `BOOLEAN` property | A `cva` variant |
| A change of structure, not of look | A separate component | A new component |
| A different anatomy and purpose: button vs link vs chip | Separate components | Separate components |

## Property names

- Kit names, the kit to `cva` map and the naming of new components follow "Variant names: kit vs code" in [designer-ui-kit.md](designer-ui-kit.md).
- Add `State=Invalid` and `State=Open` only where the component has them.
- `State` holds interaction states only. `Content` holds content and screen states. A set that needs both has both properties.
- `State` describes the set's own interaction. A nested kit control, such as an Input, Button or Select instance, keeps its states in its own set. A set that only holds such controls needs no `State` of its own.
- A field's validation error is `State=Invalid`. A failed load or a blocked screen is `Content=Error` or `Content=Blocked`.
- Use the same property name for the same idea on every component: `Variant`, `Size`, `State`, `Content`, `Selected`.
- Slot properties are named after the part: `Leading icon`, `Actions`, `Avatar`.

## States

- Build the full state set for the component type, per [ui-components-and-states.md](ui-components-and-states.md). A default-only component is unfinished.
- Every interactive component has a visible `Focus` state. It uses the `focus ring` effect style.
- Loading is a composition, not a state: a `Spinner` instance in the leading icon slot.
- `Selected` changes at least two properties, such as fill and text weight.

## Avoid variant explosion

- Count the combinations: the product of the value counts of every variant property.
- Past about 50, move structure into slots and content into `TEXT` properties.
- Leave out combinations that never happen, such as `State=Hover & Active` on a disabled-only variant. Never fill the grid with them.

## Exposed properties

- Expose every part a designer will change: each text, each slot, each optional part.
- A designer should never need to detach an instance. A detached instance on a screen is an audit finding.

## Description

Every component set carries one description line, in this order:

```
source: kit | kit extension | product · shadcn: <name> · FSD: <path> · cva: <group>=<values>; <group>=<values> · slots: <names>
```

| Field | Value |
|---|---|
| `source` | `kit` for a kit set, `kit extension` for one built in the library, `product` for an entity, feature, widget or page part |
| `shadcn` | The shadcn component it is or wraps: `button`, `card`. `none` for a pure layout part |
| `FSD` | The future file: `shared/ui/button/Button.tsx`, `entities/timesheet/ui/TimesheetRow.tsx` |
| `cva` | The code variant names, lowercase: `variant=default\|outline; size=default\|sm`. Write `none` when there are none |
| `slots` | The slot property names, or `none` |

- Add `custom: <reason>` when a variant has no shadcn equivalent.
- Add the main rule ID when one decides the design: `Rule 30: one primary per view`.

## Instance overrides

An instance may override only these:

- Layout: position, width, height, fill or hug.
- Text: the value of a `TEXT` property.
- Slots: the value of an `INSTANCE_SWAP` or `BOOLEAN` property, and the variant property values.

Never override fill, stroke, text style, effect, padding, gap or radius on an instance. A different look is a new variant on the main component.

One exception: inside a kit `Vertical Field - Nova` or `Horizontal Field - Nova` instance, the fill and stroke of the Label, Value and input layers may change. That is how the kit shows the Field's Error and Disabled look. Radius and padding on a nested control stay forbidden.

## Check

- No frame without auto layout, no group, no default layer name.
- No raw colour, spacing, radius, text or shadow value on any node.
- No `out-of-scale/*`, `tw-raw/*`, `theme/neutrals/*` or `theme/destructive/*` variable bound on any node.
- No component set has variant errors.
- No drawn icon: every icon is a `Lucide / *` instance. No hidden layer that no `BOOLEAN` property controls.
- Every component set has the full state set and a description in the format above. No `State` property holds a content state.
- Property names and values are capitalised, per "Property names". A set has about 50 variant combinations or fewer.
- No instance carries a style override, and no screen holds a detached copy of a component.
