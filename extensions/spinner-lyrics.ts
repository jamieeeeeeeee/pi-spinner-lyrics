// Spinner Lyrics: replaces pi's spinner verb with rotating Phish-lyric verbs,
// rendered with a Claude-style shimmer (a moving bright highlight sweeping
// left→right across the text).
//
// Behavior:
// - While the agent is streaming/working, cycles a random verb every ~2.5s.
// - Between verb changes, repaints the working message every ~80ms with a
//   shimmer highlight that travels across the text, then wraps and repeats.

import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";
import { VERBS } from "./constants";

const VERB_INTERVAL_MS = 2500;
const SHIMMER_INTERVAL_MS = 80;

// Moon-phase frames replace pi's default braille spinner.
const MOON_FRAMES = ["🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘"];
const MOON_INTERVAL_MS = 120;

// How far the bright "head" travels per shimmer tick, in characters.
const SHIMMER_STEP = 1;

// Width of the falloff on each side of the head (in characters).
// Beyond this distance the character renders as "dim".
const FALLOFF = 3;

type ThemeColor = "accent" | "text" | "muted" | "dim";

// Map distance-from-head → theme color name. Index 0 = head.
const RAMP: ThemeColor[] = ["accent", "text", "muted", "dim"];

type Theme = { fg(color: string, text: string): string };
type WorkingIndicator = { frames: string[]; intervalMs?: number };
type WorkingUi = {
  setWorkingMessage(msg?: string): void;
  setWorkingIndicator?(spec?: WorkingIndicator): void;
  theme?: Theme;
};

function colorAt(distance: number): ThemeColor {
  if (distance < 0) distance = -distance;
  if (distance >= RAMP.length) return "dim";
  return RAMP[distance]!;
}

function shimmer(text: string, head: number, theme: Theme | undefined): string {
  if (!theme) return text;
  let out = "";
  for (let i = 0; i < text.length; i++) {
    const ch = text[i]!;
    if (ch === " ") {
      // Spaces have no visible glyph; skip styling to avoid pointless escapes.
      out += ch;
      continue;
    }
    const d = Math.abs(i - head);
    out += theme.fg(colorAt(d), ch);
  }
  return out;
}

export default function (pi: ExtensionAPI) {
  let verbTimer: NodeJS.Timeout | undefined;
  let shimmerTimer: NodeJS.Timeout | undefined;
  let lastUi: WorkingUi | undefined;
  let lastIdx = -1;
  let currentVerb = "";
  let head = -FALLOFF; // start off-screen left so the highlight glides in

  function pickVerb(): string {
    if (VERBS.length === 0) return "Working";
    if (VERBS.length === 1) return VERBS[0]!;
    let i = Math.floor(Math.random() * VERBS.length);
    if (i === lastIdx) i = (i + 1) % VERBS.length;
    lastIdx = i;
    return VERBS[i]!;
  }

  function paint() {
    if (!lastUi) return;
    const text = `${currentVerb}…`;
    lastUi.setWorkingMessage(shimmer(text, head, lastUi.theme));
    head += SHIMMER_STEP;
    // Reset once the head has fully traversed the text plus its trailing falloff.
    if (head > text.length + FALLOFF) head = -FALLOFF;
  }

  function rotate() {
    currentVerb = pickVerb();
    head = -FALLOFF;
    paint();
  }

  function start(ui: WorkingUi) {
    lastUi = ui;
    ui.setWorkingIndicator?.({ frames: MOON_FRAMES, intervalMs: MOON_INTERVAL_MS });
    if (!verbTimer) {
      rotate();
      verbTimer = setInterval(rotate, VERB_INTERVAL_MS);
    }
    if (!shimmerTimer) {
      shimmerTimer = setInterval(paint, SHIMMER_INTERVAL_MS);
    }
  }

  function stop() {
    if (verbTimer) {
      clearInterval(verbTimer);
      verbTimer = undefined;
    }
    if (shimmerTimer) {
      clearInterval(shimmerTimer);
      shimmerTimer = undefined;
    }
    if (lastUi) {
      lastUi.setWorkingMessage(); // restore default
      lastUi.setWorkingIndicator?.(); // restore default spinner
      lastUi = undefined;
    }
  }

  pi.on("agent_start", async (_event, ctx) => {
    if (!ctx.hasUI) return;
    start(ctx.ui as unknown as WorkingUi);
  });

  pi.on("turn_start", async (_event, ctx) => {
    if (!ctx.hasUI) return;
    // Re-arm in case the previous turn's tool execution cleared it.
    start(ctx.ui as unknown as WorkingUi);
  });

  pi.on("agent_end", async () => {
    stop();
  });

  pi.on("session_shutdown", async () => {
    stop();
  });
}
