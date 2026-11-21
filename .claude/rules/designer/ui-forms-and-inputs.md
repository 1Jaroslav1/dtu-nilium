---
description: Designing or reviewing a form, field, checkbox, radio, chip set, search box, validation message or submit flow in a sketch, a user flow or a Figma design
paths:
  - "docs/ui-design/**/sketch/**"
  - "docs/ui-design/**/flows/**"
  - "docs/ui-design/**/audit/**"
---

# UI forms and inputs

Forms are where users quit. Every field, every unclear question and every error with no fix attached costs completions. ID formats are in [ui-rule-ids.md](ui-rule-ids.md). Component guideline IDs are written in full, for example `UI-Pedia FRM-02`.

Every form control sits in a shadcn `Field`, "Vertical Field - Nova" or "Horizontal Field - Nova" in the kit, per [designer-component-catalog.md](designer-component-catalog.md).

## The four forces

Weigh every form against these before adding a field.

| Force | Question |
|---|---|
| Data gathering | Does each answer solve a known problem? Ambiguous questions corrupt the data |
| Conversion | How many who start will finish? Longer forms finish less often |
| Perception of complexity | How hard does it look in the first seconds? Users abandon before reading |
| Interaction cost | How much hunting, typing, scrolling, waiting and re-entering does it take? |

## Field anatomy

| Part | What it is | Value |
|---|---|---|
| Label | What to enter. Always visible | Above the field, 12 to 14 |
| Placeholder | An example value, never the label | `joe@example.com`. Search is the one exception |
| Mask | The required format, shown in the field | Phone `(___) ____-____`. Date `DD/MM/YYYY` |
| Description | Optional help under the field | Field description slot |
| Error | What is wrong and how to fix it | Directly under the field, 12, `destructive` |

## Field states

Design all five for every field type: Normal, Focus, Valid, Invalid and Disabled.

| State | Shows |
|---|---|
| Normal | `input` border. Label above |
| Focus | `ring` colour border plus a 3 px ring at about 20% opacity. Only on keyboard focus |
| Valid | A check icon and short text, only where confirming helps, such as a new password or username |
| Invalid | `destructive` border, a cross icon and the message. The typed value stays |
| Disabled | Muted fill and text. Used rarely, with the reason visible nearby |

## Validation timing

- Validate a field when the user leaves it, or after typing pauses. Never on every keystroke.
- Show an error only after the field was touched, or after a submit attempt.
- Clear an error as soon as the value becomes valid.
- On submit with errors: keep the button enabled, mark every invalid field, and move focus to the first one.

## Layout and length

| ID | Do | Why | Value |
|---|---|---|---|
| Rule 14 | One field per row. Side by side only for truly paired data, such as city and postcode | Two columns force a choice at every row, and users miss a whole column | Form max width 480. Gap 24 between groups |
| UI-Pedia FRM-04 | Never lay a form out in two columns | The path becomes ambiguous: which column first? | |
| Rule 90 | Group fields under section titles | Sections show how long the form is and what each part is for | Section title small and muted. 32 between sections, 16 inside |
| UI-Pedia FRM-05 | Group questions by topic and order them from easy to complex | Forms work like a conversation: name first, judgement calls later | |
| Rule 59 | Ask only for what is needed now. Defer or derive the rest | Each field is another reason to abandon | Signup at most 3 fields. One "Full name" field. Optional fields are truly optional, or removed |
| UI-Pedia FRM-06 | Split a multi-part answer into separate fields | One box for a date makes the user solve the order and digit count | Day, month and year as separate parts |
| UI-Pedia FRM-07 | Split a long form across steps, with progress, saving each step | Each step gives a sense of progress. A crash does not lose everything | Stepper with "Step n of m". Data saved per step |
| Rule 16 | Put social sign-in above the credential fields | Users take the first workable path they see | Social buttons, then an "or" divider, then fields |

## Fields and labels

| ID | Do | Why | Value |
|---|---|---|---|
| Rule 74 | Put the label above the field. The placeholder shows an example | A placeholder used as a label vanishes on typing, and grey text fails contrast | Label always visible |
| UI-Pedia FRM-01 | Never let a label disappear while typing | Users check the label mid-answer | No floating labels that hide |
| Rule 64 | Give inputs a visible box | An underline-only field reads as text, and its tap area is unclear | 1 px `input` border, kit radius, at least 44 tall on touch |
| Rule 38 | Show the expected format in the field for phones, dates and card numbers | Without a mask users guess the separators and fail on submit | Mask plus the matching mobile keyboard |
| Rule 24 | Name what can be searched in the search placeholder | An empty search box gives no hint of its scope | Name 2 to 3 searchable things. Magnifier icon inside |
| UI-Pedia FRM-10 | Offer autofill | Reusing stored data is free completion | Mark name, email, address and one-time-code fields as autofill |
| UI-Pedia FRM-14 | Word labels and buttons by the user's intent | Precise words prevent wrong answers | "Full name as on card", not "Name" |

## Choice controls

| ID | Do | Why | Value |
|---|---|---|---|
| Rule 18 | Use checkboxes for many answers and radios for exactly one | The control's shape promises how many answers are allowed | Checkbox for any number. Radio Group for one |
| Rule 100 | Keep checkboxes square and radios round | Shape is the only cue for single or multiple choice before interacting | Checkbox radius at most 4 |
| Rule 80 | Replace a long checkbox list with selectable chips | A long column looks like work and wastes height | Chips past about 6 options. Each at least 44 tall. Selected filled, unselected outlined |
| UI-Pedia FRM-09 | Never pre-check a checkbox | A pre-checked box gives no proof the user saw it. Pre-checked consent is unlawful in the EU | Consent uses an explicit Yes and No pair |

Choosing between radio, toggle group and select is in [ui-navigation-and-choice.md](ui-navigation-and-choice.md) under Rule 39.

## Errors and feedback

| ID | Do | Why | Value |
|---|---|---|---|
| Rule 10 | Attach each error to the field that caused it | A summary like "1 error found" makes the user search the whole form | Message directly under its field |
| Rule 60 | Say what is wrong and how to fix it | "Invalid input" says the user failed without saying how to succeed | Icon, problem, fix: "This email is missing an @. Try joe@example.com". Keep the typed value |
| UI-Pedia FRM-03 | Never send an error without the repair | Bad news with no way forward makes users give up | Same shape as Rule 60 |
| UI-Pedia FRM-02 | Validate inline. Never signal validity by colour alone | Colour alone fails users with low vision or colour blindness | Every state has an icon and text |
| Rule 91 | Make the focused field look different from all others | Focus shows where typing will land | Ring on keyboard focus only |
| UI-Pedia FRM-08 | Always show that something is happening after submit | Without it users press again or retype, corrupting the data | `Spinner` in the button, or a progress state |
| UI-Pedia FRM-13 | Acknowledge the press at once | Users who see no response press twice | The button changes state on press, before the server answers |

## Form buttons

| ID | Do | Why | Value |
|---|---|---|---|
| UI-Pedia FRM-11 | Make primary and secondary unmistakable | Users must never hit the secondary by mistake | One primary, per [ui-buttons-and-ctas.md](ui-buttons-and-ctas.md) |
| UI-Pedia FRM-12 | Never add a clear or reset button | One wrong press erases all the user's work | |

## Check

- Every field has a visible label, and no placeholder stands in for one.
- Every field shows its Invalid state with an icon, a message that names the fix, and the typed value kept.
- No form has two columns, a reset button or a pre-checked box.
- Validation runs on leaving the field, and the submit button stays enabled.
