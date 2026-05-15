// Spinner Lyrics: replaces pi's spinner verb with rotating Phish-lyric verbs.
//
// Behavior:
// - While the agent is streaming/working, cycles a random verb every ~2.5s
//   into the working message (Claude-style "Doing the thing...").
// - Verbs are hard-coded below (Phish lyrics).

import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

const TICK_MS = 2500;

const VERBS: string[] = [
  "Taking a piece of tinsel",
  "Putting it on the tree",
  "Cutting a slice of melon",
  "Carving out a pumpkin",
  "Relying on your destiny",
  "Getting in your car and cruising the land of the brave and free",
  "Understanding exactly what you put on the tree",
  "Disbelieving the florist when he tells you that the roses are free",
  "Taking a wrinkled raisin",
  "Pushing it into third",
  "Eating plenty of lasagna",
  "Resisting all the urges that make you wanna go out and kill",
  "Throwing that pumpkin at the tree",
  "Believing that pumpkin holds your destiny",
  "Casting it off into the sea",
  "Baking that pie and eating it with me",
  "Setting the gearshift for the high gear of your soul",
  "Running like an antelope out of control",
  "Sinking a boulder in the water",
  "Tying a cable to a tree",
  "Stirring it with the ladle that Grandmother bought her",
  "Bagging it, tagging it, selling it to the butcher in the store",
  "Dipping the ladle for a taste of her creation",
  "Bouncing around the room",
  "Hearing the never-ending coral maze",
  "Wiping primal soup from my shoes",
  "Stuffing a newt into my sack",
  "Scraping musty grime off with Rick's fork",
  "Taking care of my shoes",
  "Feeling good about Hood",
  "Thanking Mr. Miner",
  "Wandering soaking, secretly afraid",
  "Dancing with Elihu up on Leemor's bed",
  "Floating in the blimp a lot",
  "Swimming weightless in the womb",
  "Splashing in the sea",
  "Looking into the finance box",
  "Looking into the microscope",
  "Running like a junkyard dog with a brain of brass",
  "Sharing in a Weekapaug groove",
  "Trying to make a woman that you move",
  "Walking through the hallways inside my mind",
  "Chasing the backbeat falling behind",
  "Wading in the velvet sea",
  "Wrapping a moment in things you say",
  "Mailing it off to your address",
  "Stopping demons dancing in my head",
  "Climbing up my waterfalls and swinging on my vines",
  "Stealing all my lines",
  "Collecting chalk dust on my tongue",
  "Plugging the distress tube up tight",
  "Slaving to the traffic light",
  "Coming unglued while in mid-air",
  "Landing to reform limb by limb",
  "Peeling my fingers off the rim",
  "Pooling like water that drips from above",
  "Being trampled by lambs and pecked by the dove",
  "Welcoming you to the farmhouse",
  "Swatting cluster-flies",
  "Fussing and quaking and cavitating",
  "Probing and tearing my ventricles",
  "Stumbling as I fall from Grace",
  "Hunting a few steps away",
  "Taking a wrong turn on the wrong path",
  "Sweeping into the cavern of shame and the hall of dismay",
  "Making soup for the ambassadors",
  "Singing to the troubadours",
  "Making bathtub gin",
  "Taking a bath, because we're all in this together",
  "Pulling the pavement from under my nails",
  "Brushing past a garden, dependent on whales",
  "Zipping through the forest with the curdling fleas",
  "Watching the solar garlic start to rot",
  "Poking a double decker on a llama, taboot",
  "Triggering a blastoplast",
  "Calling the ghost instead",
  "Waiting in the wind and rain",
  "Flocking outside like birds of a feather",
  "Pecking at the ground and strutting out of stride",
  "Stepping into the freezer",
  "Teasing her with a tweezer",
  "Asking the banker for some powerful pills",
  "Coming from atop the mountain where the people come to pray",
  "Engraving words on the walls of the cave",
  "Paddling 'til I could take no more",
  "Punching Wilson in the eye",
  "Chafing a bone out near Gamehendge",
  "Laying this hate on you, King of Prussia",
  "Bouncing like a new born elf",
  "Sleeping the sleep of death",
  "Floating higher over hills and valleys and treetops",
  "Tumbling and diving through the clouds",
  "Plummeting earthward",
  "Trying to catch a ray on the beach",
  "Licking the coil some day",
  "Forging the coin and licking the stamp",
  "Putting your money where your mouth is",
  "Running so fast my feet don't touch the ground",
  "Falling into a deep well through the foam",
  "Blowing out candles once again",
  "Whispering it into his ear",
  "Waiting 46 days for the coal to run out",
  "Tasting the fear, for the devil's drawing near",
  "Wondering if tigers sleep in lily patches",
  "Living in this tube, so stupendous",
  "Biding my time and taking it slow",
  "Watching the sky divide",
  "Hearing the high-pitched cavitation of propellers from afar",
  "Washing the Uffizi, driving me to Firenze",
  "Splitting open and melting",
  "Coming apart at the seams",
  "Watching the big core crack and glow",
  "Using a bamboo cane to help keep the pace",
  "Racing with the wind",
  "Flirting with death",
  "Hopping and jumping in wooden shoes",
  "Finding Fee and Millie on a lover's trek",
  "Trying to stay with Millie",
  "Getting bottled upside the head",
  "Slamming him in a face with a nectarine",
  "Coming to your town",
  "Helping you party down",
];

export default function (pi: ExtensionAPI) {
  let timer: NodeJS.Timeout | undefined;
  let lastUi: { setWorkingMessage(msg?: string): void } | undefined;
  let lastIdx = -1;

  function pickVerb(): string {
    if (VERBS.length === 0) return "Working";
    if (VERBS.length === 1) return VERBS[0]!;
    let i = Math.floor(Math.random() * VERBS.length);
    if (i === lastIdx) i = (i + 1) % VERBS.length;
    lastIdx = i;
    return VERBS[i]!;
  }

  function tick() {
    if (!lastUi) return;
    lastUi.setWorkingMessage(`${pickVerb()}…`);
  }

  function start(ui: { setWorkingMessage(msg?: string): void }) {
    lastUi = ui;
    if (timer) return;
    tick();
    timer = setInterval(tick, TICK_MS);
  }

  function stop() {
    if (timer) {
      clearInterval(timer);
      timer = undefined;
    }
    if (lastUi) {
      lastUi.setWorkingMessage(); // restore default
      lastUi = undefined;
    }
  }

  pi.on("agent_start", async (_event, ctx) => {
    if (!ctx.hasUI) return;
    start(ctx.ui);
  });

  pi.on("turn_start", async (_event, ctx) => {
    if (!ctx.hasUI) return;
    // Re-arm in case the previous turn's tool execution cleared it.
    start(ctx.ui);
  });

  pi.on("agent_end", async () => {
    stop();
  });

  pi.on("session_shutdown", async () => {
    stop();
  });
}
