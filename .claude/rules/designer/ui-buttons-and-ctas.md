---
description: Placing, sizing, labelling or reviewing buttons, links and calls to action in a sketch or a Figma design
paths:
  - "docs/ui-design/**/sketch/**"
  - "docs/ui-design/**/audit/**"
---

# UI buttons and CTAs

A button has one job: be obviously pressable, obviously the next step and obviously worth pressing. Hierarchy is what makes "the next step" clear. ID formats are in [ui-rule-ids.md](ui-rule-ids.md).

The button component is the shadcn `Button`, "Button - Nova" in the kit. Kit variant names are mapped in [designer-ui-kit.md](designer-ui-kit.md).

## Anatomy

| Part | What it is | Value |
|---|---|---|
| Label | The text | One text style. Verb first |
| Icon | Optional, leading or trailing | Lucide, sized to the label's cap height |
| Fill | Solid colour | A `shadcn colors` variable. Gradients only on marketing CTAs |
| Inner padding | Space between edge and label | Horizontal 2× vertical |
| Border | Outline variants only | `border` variable |
| Corner radius | One radius for every button | A `border radii` variable |
| Safe area | Space that belongs to this button only | Never shared or overlapped by a neighbour |

## Hierarchy and emphasis

| ID | Do | Why | Value |
|---|---|---|---|
| Rule 30 | Show exactly one primary button per view. The rest are secondary or tertiary | Two equal filled buttons make the user compare labels before acting | Primary `Variant=Primary`. Secondary `Outline` or `Secondary`. Tertiary `Ghost` or `Link` |
| Rule 28 | Give the primary CTA the primary colour | A grey CTA reads as disabled, and momentum is lost at the last step | `primary` fill, `primary foreground` text |
| Rule 83 | When two buttons sit together, only one has strong contrast | Equal contrast means equal weight, and the user has to decide which matters | Primary contrast at least 4.5:1. The other is `Outline` or `Ghost`. Check dark mode too |
| BTN-10 | Contrast the button against its background. No other element on the view uses that emphasis | Emphasis shared with a non-action element dilutes the CTA | |
| Default action | Make the most-used action the primary. When the choices are equal or risky, offer no primary | A highlighted default steers the user. That is wrong when both answers are valid | Equal or risky: two `Outline` buttons |
| BTN-02 | Never give interactive and static elements the same colour | Users cannot tell where to tap | |
| Rule 65 | Mark inline actions as clickable | A link styled like body text is invisible as an action. Users do not hover-hunt | Link colour plus underline or an arrow. Never hover only |
| Rule 33 | Put a visible action inside a clickable card | A card with no button looks like a static tile, and the button names what happens next | One action per card. The whole card stays clickable, with a hover state |
| Destructive | Give every destructive action, such as "Delete draft", `Variant=Destructive`. Never `Variant=Primary` | A destructive action in the primary style is pressed on autopilot. The colour rule is Rule 12 in [ui-color-and-contrast.md](ui-color-and-contrast.md) | The kit's Destructive is a tinted red fill. The kit has no outline destructive variant |

## Size and touch target

| ID | Do | Why | Value |
|---|---|---|---|
| Rule 11 | Make the primary action large and near the thumb | Time to hit a target grows with distance and shrinks with size | Bottom third of the screen on mobile |
| BTN-03, Rule 48 | Make the hit area larger than the visible button. Use padding, never margin | A small icon has a small hit box unless it is given one | At least 44 × 44 pt on touch, 48 × 48 dp on Android, 32 × 32 on cursor-only screens. Height sweet spot about 50 pt |
| CTA height | Give the main CTA room | | 40 to 60 pt tall, with clear space on both sides |
| Rule 51 | Make horizontal padding twice the vertical padding | A 1:1 ratio squeezes the label, and the button reads as a boxed word | 12 / 24. Large: 16 / 32. Keep the ratio when scaling |
| Width | Make a button at least as wide as it is tall | | Plus at least one capital "W" of space each side of the label |
| BTN-06 | Give each button its own safe area | Shared margins make adjacent targets easy to mis-hit | Gap at least 8 |
| Rule 98 | On mobile, stretch the primary button to the content width | A small centred button wastes the easiest target on the screen | Full width inside the 16 to 24 gutter. Stack primary above secondary on narrow screens |
| Radius | Use one button radius across the product | Mixed radii look inconsistent unless done on purpose | The kit's radius. Slightly rounded is the safe default. Pill only for CTAs |

## Labels

| ID | Do | Why | Value |
|---|---|---|---|
| BTN-04 | Label with a verb that names the action | The label should finish "Would you like to …?" | "Add to basket", never "Yes", "OK" or "Submit" alone |
| Rule 82 | Keep the label on one line. Shorten it instead of wrapping | A wrapped label breaks the button's shape, and its height changes per language | 1 to 3 words. Check the longest translation |
| BTN-11 | Keep button copy short enough to read at a glance | | Capitals optional on a label this short |
| BTN-05 | Centre the label on both axes. Check optically when an icon is present | Misaligned labels are one of the most common button faults | Auto layout, centre and centre |
| Icon-only | Give every icon-only button a visible label or a Tooltip that names its action | An icon alone has no fixed meaning. Two unlabelled icons side by side look interchangeable | "Icon Button - Nova" plus a Tooltip with verb + object, such as "Remove language". The instance name carries the same words |

## States and behaviour

Every button has six states. Each state looks distinct from the others, without changing the button's shape or adding visual noise.

| State | Means |
|---|---|
| Normal | Active and interactive |
| Hover | A cursor is over it |
| Focus | Highlighted from the keyboard or another input device. A visible ring |
| Active | Being pressed |
| Loading | The action has started and is not finished |
| Disabled | Not usable now, but may become usable |

| ID | Do | Why | Value |
|---|---|---|---|
| BTN-01 | Prefer validation to a disabled submit button | A disabled button gives no reason and no way forward | Keep it enabled. On press, mark what is missing next to each field |
| Disabled reason | Give a disabled primary a reason line only when nothing else on the screen says why. Never repeat a heading, an Alert, a status or the button label in a footer line | A repeated reason says the same thing twice and pushes the actions down | An Alert "Could not check" already explains it: no footer line. A form with no visible cause: one short line next to the button |
| BTN-07 | Offer a gesture only as a shortcut. A visible control is always there too | Swipe, double-tap and long-press are not obvious to most users | |
| BTN-08 | Make every button a real button for screen readers | A clickable box that is not a button is not announced | Name the instance after its action |
| BTN-09 | Place buttons where the platform puts them | Conventional placement is found without searching | |
| BTN-12 | Pick one OK and Cancel order and use it everywhere | Both orders work. Mixing them causes mis-taps | Cancel left, primary right, as in the shadcn dialog footer |

- The kit's `State` values are `Default`, `Hover & Active`, `Focus` and `Disabled`. Loading has no kit state, and active shares one with hover.
- Show loading as a `Button` instance with a `Spinner` in its leading icon slot.

## Check

- Each view has one primary button, or none on purpose.
- Every touch target is at least 44 × 44 pt, and no label wraps.
- No label is a bare "Yes", "No", "OK" or "Submit".
- No submit button is disabled to signal missing input.
- No footer or reason line repeats a heading, an Alert, a status or the button label.
- Every destructive action uses `Variant=Destructive`, never `Variant=Primary`.
- Every icon-only button has a visible label or a Tooltip.
