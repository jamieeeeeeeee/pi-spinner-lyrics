# pi-spinner-lyrics

A [pi](https://pi.dev) extension that retires the agent's beige, focus-grouped spinner verbs and replaces them with rotating phrases drawn from the catalog of Phish — cycled every ~2.5s, shimmered Claude-style, and crowned with a waxing-and-waning moon in place of the default braille spinner.

## Tired of boooooring corpo spinner verbs?

Let's be honest: "Thinking…", "Working…", "Processing…" — the stock spinner verbs of every LLM tool are not Fun. They do not let you show off your discerning personality from within your LLM configuration.

Lucky for you there is always Phish: a polarizing four-piece from Vermont who, across forty years and a catalog north of three hundred originals, have built a body of work that polite music critics have variously described as *eccentric*, *labyrinthine*, and — in one infamous 1997 review of their August 10 show at Deer Creek Music Center — a band that "could urinate in its fans' ears and tell them it's music," with said fans dutifully "there with tape recorders to capture the moment." Detractors call the lyrics nonsense. Phans are there for something that feels slightly akin to summer camp songs — the lyrics are always a little weird, but at this point, its tradition and adds to the lore. Either way, the material is uncommonly rich in vivid, oddly-specific gerunds — the exact grammatical shape a spinner verb wants to be — and there is, mercifully, a *lot* of it.

This extension mines that repertoire for inline-verb gold. Whether you are a hater who thinks it all sounds like bee-bee-beep-boop-beee-bee-boop-doop-a-loo, or someone with 300 shows under your belt, you will find these prompts measurably more entertaining than the standard corpo verbs. The catalog is deep enough that you will not see the same phrase twice in a working session, and weird enough that you may briefly forget you were waiting on a model at all.

Is it useful? Define "useful". Is it better than the OEM spinner? Unambiguously yes.

## What you actually get

- A rotating list of short verb-phrases inspired by the Phish songbook, refreshed every ~2.5 seconds while the agent is working.
- A Claude-style shimmer that sweeps a bright highlight left-to-right across each phrase using your active pi theme's color ramp.
- A moon-phase emoji indicator (🌑🌒🌓🌔🌕🌖🌗🌘) cycling every 120ms in place of the default braille spinner.
- Phrases grouped in source comments by song so you can blame, credit, or argue with the curator.
- Zero runtime dependencies beyond pi itself.

## Install

```bash
pi install git:github.com/jamieeeeeeeee/pi-spinner-lyrics
```

Or try it without installing:

```bash
pi -e git:github.com/jamieeeeeeeee/pi-spinner-lyrics
```

## What it does

Listens for `agent_start` / `turn_start` and cycles `ui.setWorkingMessage(...)` with a random verb from a hand-curated list of Phish lyrics. Restores the default message on `agent_end` / `session_shutdown`.

## License

MIT
