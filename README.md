# pi-spinner-lyrics

A [pi](https://pi.dev) extension that retires the agent's beige, focus-grouped spinner verbs and replaces them with rotating phrases drawn from the catalog of Phish — cycled every ~2.5s, shimmered Claude-style, and crowned with a waxing-and-waning moon in place of the default braille spinner.

## Tired of your agent thinking like an intern?

Let's be honest: "Thinking…", "Working…", "Processing…" — the stock spinner verbs of every LLM tool on earth read like the loading screen of a tax-prep app. You deserve better. Your idle seconds deserve better.

Enter Phish: a four-piece from Vermont who, across forty years and a catalog north of three hundred originals, have built a body of work that polite music critics have variously described as *eccentric*, *labyrinthine*, and *what on earth is happening here*. Detractors call the lyrics nonsense. Phans call them scripture. Either way, the material is uncommonly rich in vivid, oddly-specific gerunds — the exact grammatical shape a spinner verb wants to be — and there is, mercifully, a *lot* of it.

This extension mines that repertoire for inline-verb gold. Whether you are a lifelong Phan who can tell a 1995 "Tweezer" from a 2023 one by the third bar, or a hater who thinks the whole enterprise should have ended after the first set of the second night, you will find these prompts measurably more entertaining than "Loading…". The catalog is deep enough that you will not see the same phrase twice in a working session, and weird enough that you may briefly forget you were waiting on a model at all.

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
