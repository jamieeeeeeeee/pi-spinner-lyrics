// Tunables and Phish-lyric verbs used by the spinner-lyrics extension.
// Adjust the constants below to tune timing, spinner glyphs, and the
// shimmer highlight without touching the extension logic.

// How often to swap to a new random verb, in milliseconds.
export const VERB_INTERVAL_MS = 9500;

// How often to repaint the shimmer highlight, in milliseconds.
export const SHIMMER_INTERVAL_MS = 200;

// Moon-phase frames replace pi's default braille spinner.
export const MOON_FRAMES = ["🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘"];
export const MOON_INTERVAL_MS = 300;

// How far the bright "head" travels per shimmer tick, in characters.
export const SHIMMER_STEP = 1;

// Width of the falloff on each side of the head (in characters).
// Beyond this distance the character renders as "dim".
export const FALLOFF = 3;

export type ThemeColor = "accent" | "text" | "muted" | "dim";

// Map distance-from-head → theme color name. Index 0 = head.
export const RAMP: ThemeColor[] = ["accent", "text", "muted", "dim"];

// Phish-lyric verbs used by the spinner-lyrics extension.
// Grouped by song where known; some are unattributed.
export const VERBS: string[] = [
  // "Roses Are Free" (Ween cover, frequently played by Phish)
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

  // "Run Like an Antelope"
  "Setting the gearshift",
  "Running like an antelope out of control",

  // "Reba"
  "Sinking a boulder in the water",
  "Tying a cable to a tree",
  "Stirring it with the ladle that Grandmother bought her",
  "Bagging it, tagging it, selling it to the butcher in the store",
  "Dipping the ladle for a taste of her creation",
  "Hearing the never-ending coral maze",
  "Wiping primal soup from my shoes",
  "Stuffing a newt into my sack",
  "Scraping musty grime off with Rick's fork",

  // "Bouncing Around the Room"
  "Bouncing around the room",

  // "Harry Hood"
  "Taking care of my shoes",
  "Feeling good about Hood",
  "Thanking Mr. Miner",
  "Wandering soaking, secretly afraid",

  // "Sample in a Jar"
  "Wheeling around because I didn't hear",
  "Helping you to your car",
  "Letting the binding belt enclose me",
  "Dancing with Elihu up on Leemor's bed",
  "Letting the market stands unfold",
  "Unheeding all the times I raise my cup",

  // "Free"
  "Floating in the blimp a lot",
  "Swimming weightless in the womb",
  "Splashing in the sea",

  // "Golgi Apparatus"
  "Looking into the finance box",
  "Looking into the microscope",
  "Seeing the Golgi Apparatus",
  "Running like a junkyard dog with a brain of brass",
  "Seeing you with a ticket stub in your hand",

  // "Mike's Song" / "Weekapaug Groove"
  "Sharing in the groove",
  "Trying to make a woman that you move",
  "Walking through the hallways inside my mind",
  "Chasing the backbeat from behind",

  // "Wading in the Velvet Sea"
  "Taking a moment from my day",
  "Wrapping it up in things you say",
  "Mailing it off to your address",
  "Wading in the velvet sea",

  // "Chalk Dust Torture"
  "Climbing up my waterfalls and swinging on my vines",
  "Stealing all my lines",
  "Collecting chalk dust on my tongue",

  // "Slave to the Traffic Light"
  "Plugging the distress tube up tight",
  "Slaving to the traffic light",

  // "Limb by Limb"
  "Leaning on a shoulder carved out of stone",
  "Coming unglued while in mid-air",
  "Never wanting my hand cut off",
  "Never wanting a hacking cough",
  "Taking the best parts back",
  "Landing to reform limb by limb",
  "Peeling my fingers off the rim",
  "Turning left",
  "Pooling like water that drips from above",
  "Being trampled by lambs",
  "Tossing with the salad",

  // "Maze"
  "Stumbling as I fall from Grace",
  "Seeing what I'm hunting a few steps away",
  "Taking a wrong turn on the wrong path",
  "Sweeping into the cavern of shame and the hall of dismay",
  "Never getting out of this maze",

  // "Bathtub Gin"
  "Making soup for the ambassadors",
  "Singing to the troubadours",
  "Carrying a martini, made of bathtub gin",
  "Taking a bath",

  // "Stash"
  "Pulling the pavement from under my nails",
  "Brushing past a garden, dependent on whales",
  "Yanking on my tunic",
  "Dangling my stash",
  "Zipping through the forest with the curdling fleas",
  "Seizing the mutant",
  "Crying to my cohorts",
  "Bed-heating the apple toast",
  "Watching the solar garlic start to rot",
  "Poking a double decker on a llama, taboot",

  // "Ghost"
  "Telling you the story of the ghost",
  "Feeling forsaken",
  "Leaving the latch left unhooked",
  "Waiting in the wind and rain",
  "Calling the ghost instead",

  // "Birds of a Feather"
  "Flocking outside like birds of a feather",
  "Pecking at the ground and strutting out of stride",

  // "Tweezer"
  "Stepping into the freezer",
  "Teasing her with a tweezer",

  // "Fluffhead"
  "Asking the banker for some powerful pills",

  // "Possum"
  "Coming from atop the mountain where the people come to pray",
  "Engraving words on the walls of the cave",

  // "Punch You in the Eye"
  "Paddling 'til I could take no more",
  "Punching you in the eye",
  "Tying you to a chair with a giant clip",
  "Laying this hate on you",

  // "I Didn't Know"
  "Disliking cheeseburger alleycats",
  "Inquiring about the picture of Otis Redding taken just before he died",
  "Breaking my sunny shoe shine",
  "Greeting mustard pies and carrot eyes",

  // "The Lizards"
  "Meeting an aging knight in the corridor",
  "Surrendering to the flow",
  "Remembering all the thoughts that he had thunk",
  "Realizing the lizards, they have died",

  // (Phish — source unconfirmed)
  "Bouncing like a newborn elf",
  "Sleeping the sleep of death",

  // "Esther" (the doll's flight) (?)
  "Floating higher over hills and valleys and treetops",
  "Tumbling and diving through the clouds",
  "Plummeting earthward",

  // "The Squirming Coil"
  "Watching Satan catch a ray on the beach",
  "Licking the coil some day",
  "Stunning the puppy",
  "Burning the whale",

  // "Cavern"
  "Forging the coin and licking the stamp",
  "Putting your money where your mouth is",

  // (Phish — source unconfirmed; possibly "Foam")
  "Running so fast my feet don't touch the ground",
  "Falling into a deep well through the foam",

  // "Backwards Down the Number Line"
  "Blowing out candles once again",
  "Whispering it into his ear",

  // "46 Days"
  "Waiting 46 days for the coal to run out",
  "Tasting the fear, for the devil's drawing near",

  // "The Lizards"
  "Wondering if tigers sleep in lily patches",

  // "Tube"
  "Living in this tube, so stupendous",
  "Biding my time and taking it slow",

  // "The Divided Sky"
  "Watching the sky divide",

  // "You Enjoy Myself"
  "Washing Uffizi",
  "Driving me to Firenze",

  // "Split Open and Melt"
  "Tossing it in my carryall",
  "Running the wide load to the lip",
  "Watching the big core crack and glow",
  "Splitting open and melting",
  "Bumping my head and raising a welt",
  "Coming apart at the seams",
  "Breathing in a steam dream",
  "Plunging below the water line",

  // "Fee"
  "Using a bamboo cane to help keep the pace",
  "Racing with the wind",
  "Flirting with death",
  "Hopping and jumping in wooden shoes",
  "Finding Fee and Millie on a lover's trek",
  "Trying to stay with Millie",
  "Getting bottled upside the head",
  "Slamming him in a face with a nectarine",
  "Slicing him on the nipple",

  // "Harpua"
  "Coming to your town",
  "Helping you party down",
  "Mourning Poster Nutbag",

  // "Cities" (Talking Heads cover, frequently played by Phish)
  "Finding myself a city to live in",
  "Looking over at the dry ice factory",

  // "It's Ice"
  "Mimicking the image",
  "Pressing on the elastic sheet",
  "Breathing through a slice",

  // Dog-Faced Boy
  "Sparing a moment for the dog-faced boy",
  "Lending another hand to the worm girl",
  "Depleting your oxygen",

  // Piper
  "Waking up Piper, the red, red worm",

  // Dirt
  "Living beneath the dirt",
  "Being free from push and shove",

  // My Friend, My Friend
  "Affixing my gaze",
  "Grasping the handle, clipping the cable",
  "Thinking about my friend with the knife",
  "Moving closer to the flame",
  "Feeling it ticking like a bomb",
];
