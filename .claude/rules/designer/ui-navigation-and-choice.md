---
description: Designing or reviewing navigation, menus, tabs, steppers, section navigation and section status, option sets or scroll cues in a sketch, a user flow or a Figma screen
paths:
  - "docs/ui-design/**/sketch/**"
  - "docs/ui-design/**/flows/**"
---

# UI navigation and choice

Navigation is the least frustrating route from one place to the next. It also tells users where they are, and it shapes how far they trust the product. ID formats are in [ui-rule-ids.md](ui-rule-ids.md).

## Patterns

No pattern is better than another (NAV-01). Pick each one on purpose. Most products combine several.

| Pattern | Use when | Catalog component |
|---|---|---|
| Horizontal bar | Site navigation. Users scan across the top first and expect it there | Navigation Menu |
| Vertical (left) | App navigation with several levels, or long linear content | Sidebar |
| Tabs | Views of one page. On mobile, bottom tabs for the few most important areas | Tabs |
| Menu button (hamburger) | Single-goal funnel pages only, per Rule 81 | Sheet or Drawer |
| Breadcrumbs | Nested pages. Many users arrive deep, not on the home page | Breadcrumb |
| Mega menu | Many destinations. Preferred over dropdowns | Navigation Menu |
| Dropdown | Avoid for navigation, per NAV-05 | none |

## Choice count

| ID | Do | Why | Value |
|---|---|---|---|
| Rule 36 | Cut the visible options (Hick's law) | Decision time grows with every option. Users compare all of them | At most 5 visible options. Add an "Other" option with a text input instead of dropping the rest silently |
| Rule 39 | Show 2 to 4 options side by side, not in a dropdown | A dropdown costs a tap just to see what exists | 2 to 4: Radio Group or Toggle Group. 5 or more: Select. Past about 6 tags: checkable tokens |
| NAV-05 | Avoid dropdown menus for navigation | Users skip key pages hidden in dropdowns | Expose the pages, or use a mega menu |
| Rule 37 | Put the most important destinations first and last | Items at the ends of a list are remembered far better than the middle | At most 5 tabs. Home first. Primary account or action last. Never the key task in slot 3 |

## Placement

| ID | Do | Why | Value |
|---|---|---|---|
| NAV-02 | Put the menu across the top or down the left | Users read in an F shape: a few scans across the top, then down the left | Vertical nav also suits long linear content |
| Bottom navigation | On phones, anchor the main menu at the bottom, per the thumb zone rule (SCR-04 in ui-layout-and-spacing.md) | The top-left corner is the hardest spot for a right thumb | Bottom tab bar on mobile app screens |
| Rule 81 | Collapse the nav into a menu button only on single-goal pages | On a checkout page, every visible link is an exit. On app and content screens, hidden nav is found far less | Funnel pages (landing, checkout, signup): logo, menu button, one CTA. App and content screens: visible nav |
| NAV-03 | Define the content before the navigation | Navigation should follow the content, not shape it | The screen list and each screen's job come before the menu |
| One navigation | Give one set of destinations exactly one navigation control | Two controls for the same items, such as tabs plus a progress card, make the user ask which one is real | Status and progress show inside that control. Never in a second list of the same items |
| Section layout | Put a multi-section form's section navigation on the left and the content on the right | The eye reads the left column as the map and the right as the work, per NAV-02 | Desktop: a vertical section list on the left, the active section's form on the right |

## Labels

| ID | Do | Why | Value |
|---|---|---|---|
| NAV-04 | Label with specific, familiar words | Broad words like "Products" tell the user nothing | "Smart watches", not "Products" |
| Rule 5 | Pair every menu label with an icon | Icons are found by shape in peripheral vision. The label still carries the meaning | Icon 20 to 24. Gap to label 12. Lucide only |
| Rule 29 | Drop the verb from navigation labels | Navigation names places, not actions | Full rule in [ui-copy-and-language.md](ui-copy-and-language.md) |

## Orientation

| ID | Do | Why | Value |
|---|---|---|---|
| Rule 92 | Mute the inactive items so the active one stands out | Contrast is relative. Bolding one item among full-strength items barely shows | Inactive in `muted foreground` or 55 to 65% opacity. Active in `foreground`, weight 600 |
| NAV-06 | Design every orientation cue on purpose | The back button is the second most used navigation tool | Back, breadcrumbs, page title, browser tab title, URL, visual change between sections |
| Rule 9 | In a multi-step flow, show the current step and the steps left | Not knowing how many steps remain is where checkouts are abandoned | 5 steps or fewer: show every step. More: "Step 2 of 7". Completed steps stay clickable |
| Section status | In a form split across sections, show each section's status in its navigation item | Without it the user opens every section to find the one with a problem | Three states, each icon plus text: "Complete", "Has an issue", "Not started". Never colour alone |

## Scroll cues

| ID | Do | Why | Value |
|---|---|---|---|
| Rule 50 | Let the next section show above the fold | A section that ends at the fold reads as the end of the page | Show 40 to 80 of the next section |
| Rule 97 | Let the next card show at the edge of a horizontal scroller | Dots say more exists. A visible sliver shows it, and which way to swipe | Show 16 to 32 of the next item. Snap on scroll |

## Process

| ID | Do | Why | Value |
|---|---|---|---|
| NAV-07 | Build navigation around what each persona is trying to do | Users come with questions: how do I find this fast, is it current, how do I contact someone | |
| NAV-08 | Prototype and test the navigation | A navigation choice is a guess until it is tested | 3 to 5 people per round |

## Check

- No screen offers more than 5 equal-weight choices without an "Other" or a search.
- No 2 to 4 option choice sits in a dropdown.
- Every screen marks the current location, and every multi-step flow shows its step count.
- No app or content screen hides its main navigation behind a menu button.
- No set of destinations has two navigation controls.
- Every section of a multi-section form shows its status as icon plus text, inside the one navigation.
- A multi-section form has its section navigation on the left and its content on the right.
