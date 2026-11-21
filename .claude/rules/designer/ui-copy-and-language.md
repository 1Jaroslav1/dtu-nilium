---
description: Writing or reviewing interface copy, labels, button text, dialog options, menu items, hints, status lines, empty-frame placeholders or the term list in a sketch, a user flow or a Figma design
paths:
  - "docs/ui-design/**/sketch/**"
  - "docs/ui-design/**/flows/**"
  - "docs/ui-design/**/audit/**"
---

# UI copy and language

Interface copy is interface design. Every label is a small decision the user has to make. A vague word costs a hesitation, and a wrong word costs a completion. ID formats are in [ui-rule-ids.md](ui-rule-ids.md).

Button label length and wording are also in [ui-buttons-and-ctas.md](ui-buttons-and-ctas.md). Field labels, hints and error messages are also in [ui-forms-and-inputs.md](ui-forms-and-inputs.md).

## Labels and values

| ID | Do | Why | Value |
|---|---|---|---|
| Rule 1 | Write labels as a person would say them. Never show raw `label: value` pairs | `In stock: 7` makes the user translate. `Only 7 left` carries the meaning | Status and stock lines read as a sentence. Button = verb + object: "Add to cart", not "Cart" |
| Rule 29 | Drop the verb from navigation and settings labels when the destination implies it | A column of "Edit my…", "View my…" starts every row with noise | Menu rows are noun phrases: "Order history". Keep the verb only when the action is destructive or not obvious: "Delete account" |
| Rule 47 | Name what the user gets, not what the system does | "Subscribe" describes a mailing list. "Join the club" describes the benefit | Headings name the benefit. Product screens stay plain and literal |

## Actions and dialogs

| ID | Do | Why | Value |
|---|---|---|---|
| Rule 57 | Make the submit button say what will happen | "Next" makes the user remember which form this is. "Create account" confirms it | The button label mirrors the form heading. Never "OK", "Next" or "Submit" alone |
| Rule 8 | Label each dialog option with its outcome | In "Cancel your upload?", a button called "Cancel" is ambiguous, and one guess is destructive | "Yes, cancel upload" and "Keep uploading". The destructive option never gets the primary's weight unless it is the action asked for |

## Help and guidance

| ID | Do | Why | Value |
|---|---|---|---|
| Rule 63 | Keep the requirements a user must meet visible. Never hide them in a tooltip | A rule discovered after a rejected submit is a wasted round trip | Requirements as a list under the field, each updating live as the user types |
| Rule 99 | Do not explain obvious fields. When a field needs help, put it directly below | A tooltip saying "Enter your email" on an Email field is noise, and trains users to ignore help | No hint on self-evident fields. Help text in the field's description slot, `muted foreground`, no hover needed |

## Empty, create and filled states

| Name | Do | Why | Value |
|---|---|---|---|
| Empty frame | Show every input of an empty or create frame in its placeholder state. Never fill it with a sample value | A sample value reads as a choice nobody made. The user cannot tell it from a default | The field's placeholder per [ui-forms-and-inputs.md](ui-forms-and-inputs.md). A select reads "Choose a module", not "Employee" |
| Prefilled value | Prefill a value only when it comes from context. Say where it came from | A silent prefill looks like a sample, or like a value the user set earlier | The field description names the source: "From the module you opened". No source, no prefill |
| Filled frame | Use real copy in every text property of a filled, error or success frame, including the text inside each component | Sample copy hides wrapping, length and tone problems | Real names, real numbers, the longest likely value. The long-content frame follows "Long content" in [ui-components-and-states.md](ui-components-and-states.md) |

## Terms

| Name | Do | Why | Value |
|---|---|---|---|
| Term list | Agree a term list with the owner before building. Use only its words | Two words for one thing make the user ask whether they are two things | One row per concept: the approved word, the words it replaces, an Approved mark |
| Internal words | Never show a domain-model or code word unless the owner uses it in the term list | A model word means something to the developer and nothing to the user | Banned by default: `subject`, `entity`, `key`. "Module", not "Subject" |
| Leftover terms | Search every text node for the replaced and banned words before hand-off | Old words survive in states nobody looked at again | 0 matches, in every frame and every state |

## Writing in Figma

- Never use "Lorem ipsum" or "Button" as copy, in any state.
- Keep the same word for the same thing on every screen, per the term list.
- Name every text layer by its role, such as `Title` or `Description`, not by its content.

## Check

- No button, dialog option or menu item reads "OK", "Yes", "No", "Submit" or "Next" alone.
- No status or value is shown as a bare `label: value` pair.
- No requirement the user must meet lives only in a tooltip.
- No obvious field carries a hint.
- No empty or create frame shows a sample value. Every prefilled value names its source.
- No filled frame shows placeholder copy.
- No text node holds a replaced term or a banned internal word.
