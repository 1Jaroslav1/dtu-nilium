---
description: Choosing a shadcn/ui component for a sketch box, a Figma build or a review finding, checking whether the Figma kit has it, or building a missing one as a kit extension
paths:
  - "docs/ui-design/**"
---

# Designer component catalog

Every component a design may use, taken from the shadcn/ui documentation (`ui.shadcn.com/docs/components`, checked 2026-11-01), and where each one comes from in Figma. A design never uses a component that is not in this file.

## Status

The status says whether a design may use the component. It never depends on the Figma kit.

| Status | In a design |
|---|---|
| `available` | Use it anywhere it fits its "Use for" |
| `scoped` | Use it only for the case in "Use for". Any other use is a finding |
| `pattern` | No single component. Compose the parts in Notes |
| `banned` | Never use it. Notes say what to use instead |
| not listed | Not approved. Compose listed components first. If nothing fits, propose a new row to the user before designing it |

## Figma source

The Obra shadcn/ui kit, Community Edition, has editable components for only part of the list. Its pages marked "PRO ONLY" show a locked preview of the paid edition. That is a gap in the free Figma kit, not a limit on use.

| Figma | Meaning |
|---|---|
| a kit component set name | Use instances of that kit component |
| `extension` | The kit has no editable component. Build it once in the project library as a kit extension, then use its instances |

### Building a kit extension

- Build it in the project library file, never in the kit and never in a product file.
- Put it on its own page, named `<Component> (extension)`, next to the kit's pages.
- Name the component set `<Component> - Nova`, like the kit's own sets.
- Build it only from kit instances (Button, Input, Separator, `Lucide / *` icons and so on), kit variables and kit text and effect styles. No raw values.
- Copy anatomy, variants and states from the component's shadcn docs page. Never trace a PRO preview.
- Start the component description with `source: kit extension`, then the shadcn name and the code variant names.
- Build an extension when the first design needs it, not in advance.
- Dark versions of every component, kit or extension, come from the `dark` mode in [designer-ui-kit.md](designer-ui-kit.md).

## Components

| Component | Status | Figma | Use for | Notes |
|---|---|---|---|---|
| Accordion | available | Line / Bordered Accordion Trigger and Content - Nova | Stacked sections that expand one at a time | |
| Alert | available | Alert - Nova | A persistent message inside a page | Not for feedback after an action. Use Toast |
| Alert Dialog | available | Alert Dialog - Nova | Confirming a destructive or irreversible action | Prefer undo when the action can be delayed |
| Aspect Ratio | available | Aspect Ratio | Media with a fixed ratio | |
| Attachment | available | extension | A file or image with its name, size, upload state and actions | Upload lists, message threads, chat composers |
| Avatar | available | Avatar Placeholder, With Image, With Icon, With Status Badge | A user picture with an initials fallback | Ring it with a stroke |
| Badge | available | Badge | Status and short labels | Status is icon plus text, never colour alone |
| Breadcrumb | available | .Breadcrumb item, .Breadcrumb separator | Location in nested pages | |
| Bubble | available | extension | Framed conversational content: chat text, quoted replies, suggestions, reactions | Comments and chat between people too |
| Button | available | Button - Nova, Icon Button - Nova | Every action | The only button. The kit's `Destructive` is a tinted red fill. There is no outline destructive variant |
| Button Group | available | extension | Related buttons joined together | |
| Calendar | available | extension | Picking dates in a visible month grid | Built as the extension `Calendar - Nova` |
| Card | available | Card - Nova | A bordered content block | One primary action per card. No scrolling inside a card |
| Carousel | scoped | extension | Image galleries only | Never for data |
| Chart | scoped | extension | Dashboards only | `chart 1…5` colours only |
| Checkbox | available | Checkbox - Nova, Checkbox Group - Nova, Rich Checkbox Container - Nova | Boolean fields and picking many options | Square. Never for one-of-many |
| Code Block | available | extension | Code, terminal output, logs, diffs and config, with copy and line numbers | API keys, settings, docs, chat |
| Collapsible | available | extension | One section that expands | |
| Combobox | available | Select & Combobox - Nova, Multi Combobox - Nova | A searchable select, single or multiple | |
| Command | available | extension | Command palette and searchable lists | |
| Context Menu | available | extension | Right-click menus | Every action must also be reachable without a right-click |
| Data Table | pattern | Basic Table Header / Cell - Nova as parts | Sortable, filterable data grids | Table plus sort, filter and Pagination |
| Date Picker | pattern | extension | A date field | Popover plus Calendar. Built as the extension `Date Picker - Nova` from `Popover - Nova` and `Calendar - Nova`. Single date and date range. The trigger is `Input - Nova` |
| Dialog | available | Dialog - Nova | Modal forms and details | |
| Drawer | scoped | extension | Bottom sheets on mobile only | Desktop uses Sheet or Dialog |
| Dropdown Menu | available | Dropdown Menu - Nova, Dropdown Menu Item - Nova | Action menus behind a button | Never for site navigation |
| Empty | available | extension | Empty states of lists and tables | Every list and table draws one |
| Expression Editor | scoped | extension | A short expression or condition that refers to other fields, in admin tools only | Monospace text style, success colour for quoted codes. State Default, Focus, Error. Content as a text property. The error line is a Field message under it. It never nests a chooser: the page opens the chooser beside it |
| Field | available | Vertical Field - Nova, Horizontal Field - Nova | Label, control, description and error of one form field | Every form control sits in a Field |
| Header | available | extension | The app top bar: sidebar trigger, page context and account menu | Compose `Breadcrumb`, `Avatar`, `Dropdown Menu - Nova` and `Button - Nova`. Domain titles are text, never part of the component. Not the page heading |
| Hover Card | available | extension | A preview on hover | The content must also be reachable by keyboard |
| Input | available | Input - Nova | Single-line text fields | |
| Input Group | available | Input - Nova with .Input Decoration - Nova | An input with icons, buttons or addons | |
| Input OTP | scoped | extension | One-time codes in sign-in and verification flows | |
| Item | available | extension | A row of icon, text and actions in a list | Homogeneous lists use Item, not cards |
| Kbd | available | kbd - Nova | Keyboard shortcut hints | |
| Label | available | Label | Field labels | Usually inside Field |
| Marker | available | extension | Inline status notes, bordered rows and labelled separators in a thread | Announced as a status update |
| Menubar | available | extension | Desktop-style top menus | |
| Message | available | extension | One message in a conversation: avatar, alignment, header, footer | Human chat or AI replies |
| Message Scroller | available | extension | The scroll container of a conversation | Group chat or AI chat |
| Native Select | available | extension | Short option lists where the device picker is better | Mainly mobile |
| Navigation Menu | available | extension | Top-level site navigation with panels | |
| Pagination | available | Pagination Number Button - Nova | Paged tables | Feeds load on scroll instead |
| Popover | available | extension | Floating content opened by a click | Built as the extension `Popover - Nova` |
| Progress | available | extension | Determinate progress | Indeterminate loading uses Spinner or Skeleton |
| Questionnaire | available | extension | A multi-step set of single-choice, multiple-choice, free-text and skippable questions | Surveys, onboarding, agent questions |
| Radio Group | available | Radio - Nova, Radio Group - Nova, Rich Radio Container - Nova | One choice from a short list | Round. 2 to 4 options side by side |
| Resizable | available | extension | Split panes | |
| Scroll Area | available | Scrollbar | Styled scroll containers | Never inside a card |
| Section Navigation | available | extension | The section list of a multi-section form, each section with a status: Complete, Has an issue, Not started | Compose Item - Nova plus a Lucide status icon and a text status. Properties Name, Status, Current. Rows as a slot. Sidebar is for app navigation, not for this. Section names are text, never part of the component |
| Section Heading | available | extension | The heading of a card or form section: a title and an optional description | Properties Title, Description, Show Description. Title `heading 4`, description `paragraph small` on `muted foreground`. Use it where `Card - Nova` has no title or description. Section names are text, never part of the component. Not the page heading |
| Select | available | Select & Combobox - Nova | One choice from 5 or more options | 2 to 4 options use Radio Group or Toggle Group |
| Separator | available | Separator | Dividers | Last resort. Separate groups with space first |
| Sheet | available | extension | Side panels | |
| Sidebar | available | extension | The app navigation sidebar | App screens keep navigation visible |
| Skeleton | available | extension | Loading placeholders for content | Prefer to a spinner over content |
| Slider | available | extension | Numeric ranges | |
| Sortable Item | available | extension | A list item the user can drag to a new position | A drag handle, plus a keyboard alternative: Move up and Move down. Built as a kit extension |
| Spinner | available | Spinner | Indeterminate actions, such as a button that is saving | |
| Switch | available | Switch - Nova, Switch Group - Nova, Rich Switch Container - Nova | On and off settings that apply at once | |
| Table | available | Basic Table Header - Nova, Basic Table Cell - Nova | Static tables | Right-align numbers |
| Tabs | available | Tabs (segmented) - Nova, Tab (segmented) - Nova | Switching views on one page | |
| Textarea | available | Textarea - Nova | Multi-line text | |
| Toast | available | extension | Feedback after an action, including Undo | The only notification mechanism. The kit calls it Sonner |
| Toggle | available | extension | A two-state button | |
| Toggle Group | available | extension | A set of 2 to 4 options side by side | |
| Tooltip | available | Tooltip - Nova | Short hints on hover and focus | Never the only place information lives |
| Trace | available | extension | A list of steps with icon, title, description and status | Agent steps, job and import progress |
| Tree Select | pattern | extension | Picking one node from a nested list, up to 3 levels | Compose Popover, Command search and Collapsible nodes. One node selectable. The value shows the full path. Built as the extension `Tree Select - Nova`: single select, up to 3 levels, retired nodes are not offered. The trigger is `Input - Nova` |
| Direction | banned | none | RTL support | No RTL requirement |
| Typography | banned | none | Styled text examples | Apply text styles directly |

## Proposed rows

Needs found in a design that no component covers yet. Each one is `not listed` until the owner approves a status. A design never uses one before then.

None open.

## AI Elements

Patterns for agent and assistant screens, composed from the components above. They are copied into the code, not installed as a package. Status `scoped`: use them only on AI assistant screens. Every one is a kit extension, built from the components it composes.

| Element | Use for |
|---|---|
| Chat | The conversation thread, keeping its place while a reply streams |
| Message | One turn: the user's message and the agent's reply |
| Prompt Input | A message field with attachments and a send button |
| Suggestion | A short prompt the user sends in one click |
| Model Selector | Choosing the model and its reasoning effort |
| Context | How much of the context window the conversation has used |
| Reasoning | The agent's thinking as it streams |
| Chain of Thought | A summary that expands to the steps the agent took |
| Plan | The agent's planned steps and their progress |
| Task | The steps the agent takes as it works |
| Queue | A todo list split into remaining and completed items |
| Tool | A tool call, from its input to its output |
| Confirmation | Approving or denying a tool before it runs |
| Subagent | A subagent run, with its tool calls and result |
| Terminal | A command the agent runs, with streaming output |
| Test Results | A test run, with its suites and failures |
| Stack Trace | A failed tool call and its stack frames |
| File Tree | The files the agent changed, as a folder tree |
| Sources | The links the agent used for a reply |
| Inline Citation | A source inside a sentence, opened on hover |
| Checkpoint | A point in the conversation the user can return to |
