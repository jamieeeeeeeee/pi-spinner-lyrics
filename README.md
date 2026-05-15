# pi-spinner-lyrics

A [pi](https://pi.dev) extension that replaces the agent's spinner verb with a rotating selection of Phish lyrics. While the agent is working, the message cycles to a new lyric verb roughly every 2.5 seconds (Claude-style "Doing the thing…").

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
