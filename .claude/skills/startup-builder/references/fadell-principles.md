# Build wisdom — Fadell's "Build" (phase 7 and throughout)

**Fallback + skeleton.** The user keeps a `Build by Tony Fadell` note in
`General Knowledge and Tools/`. Read it first — it's the source of truth and reflects what
*they* took from the book. Use this file to work when the vault is locked, and say so.

Tony Fadell's *Build* is craft wisdom for making products and teams. The pieces most
relevant to taking a product from idea to launch:

## Why before what

Every product must answer **why it exists** before **what it does**. The "why" is the
story that makes the "what" make sense. If you can't tell the product's story in a few
sentences — the problem, why now, why you — the product isn't ready, however many
features it has. This is the same failure the user has already hit: a coherent story is
what separates a product from "a conglomerate of ideas."

## The first version is not the final version — but ship it anyway

- The **v1** exists to prove the core loop works and to learn from real use. It will be
  incomplete. Ship it to learn, not to impress.
- Real learning comes from people using the thing, not from opinions about it ("show the
  dogs will eat the dog food"). Instrument for actual usage.
- Iterate in cycles: each version fixes what real use exposed, not what you imagined.

## Sequence deliberately; kill feature creep

- Every feature you add costs not just its build time but the time to think it through and
  the surface it adds to everything else. A "generic, flexible" version routinely costs
  ~1.5× a focused one and is rarely worth it early.
- Say no to features that don't serve the core loop, even good ones. The discipline of a
  small, coherent v1 beats a broad, incoherent one — always, early on.
- Distinguish **painkillers** from **vitamins**. Build painkillers first; vitamins can
  wait. A painkiller solves a problem someone is actively trying to fix (they have a
  workaround); a vitamin is merely nice.

## Make the whole customer journey, not just the product

The product is only part of what the customer experiences — discovery, purchase,
onboarding, support and the story around it are part of the "product" too. A great core
with a broken onboarding or migration path fails. (This is why the offer's use-cycle map
puts migration and routine-use first.)

## Team & decisions

- Be **data-informed, not data-driven** — data guides, but opinion and judgment still
  decide, especially before you have much data. Don't hide behind numbers you don't have.
- Make decisions to keep moving; a reversible decision made now beats a perfect decision
  made too late.
- Give people the context (the "why") and they'll make better calls than any rigid
  instruction — the same reason this skill explains reasoning rather than issuing rules.

## Applying this in phase 7

When the plan reaches the build, use Fadell as the sanity layer over the sequencing in
`planning-and-gates.md`:

- Can you tell the product's story (why) in three sentences? If not, fix that before
  building.
- Is the v1 the smallest thing that closes one loop for one customer and that someone
  will pay for (the MVBP)? If it's broader, cut.
- Is every item on the backlog a painkiller for the beachhead, or are vitamins sneaking
  in? Move vitamins to "not yet."
- Is the whole journey covered — especially migration and routine use — or just the shiny
  core?
