// Tunables and Phish-lyric verbs used by the spinner-lyrics extension.
// Adjust the constants below to tune timing, spinner glyphs, and the
// shimmer highlight without touching the extension logic.

// How often to swap to a new random verb, in milliseconds.
export const VERB_INTERVAL_MS = 12000;

// How often to repaint the shimmer highlight, in milliseconds.
export const SHIMMER_INTERVAL_MS = 140;

// Moon-phase frames replace pi's default braille spinner.
export const MOON_FRAMES = ["🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘"];
export const MOON_INTERVAL_MS = 280;

// How far the bright "head" travels per shimmer tick, in characters.
export const SHIMMER_STEP = 1;

// Width of the falloff on each side of the head (in characters).
// Beyond this distance the character renders as the tail color.
export const FALLOFF = 3;

// Shimmer color ramp — shades of #fec76f from brightest (at the head) to
// dimmest (beyond the falloff). Index 0 = head, last entry = tail / out-of-range.
export const RAMP: string[] = [
  "#fff1cf", // head: near-white highlight
  "#fec76f", // base gold
  "#d9a558", // mid
  "#a07a3e", // dim
  "#5a4624", // tail / out-of-range
];

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

  // Cavern
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
  "Breaking the packaging",
  "Making the points", 
  "Tossing with thoughts into a bin",
  "Time leaks out, my life leaks in",
  "Setting your clocks",
  "Finding moments in a box",
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
  "Lining up all the kings",
  "Ringing the autumn bells",
  "Wearing a three coned cap",
  "Looking at your stiped stockings",
  "Listening to a sad tale about the kids under the carpet",
  "Tasting all the soup to see if it is done",
  "Storming the hallway",
  "Letting Wendy on the windowsill in",
  "Carrying a martini, made of bathtub gin",
  "Taking a bath",

  // "Stash"
  "Pulling the pavement from under my nails",
  "Brushing past a garden, dependent on whales",
  "Zipping through the forest with the curdling fleas",
  "Growing with them spindles",
  "Casting down the ash",
  "Yanking on my tunic",
  "Dangling my stash",
  "Seizing the mutant",
  "Crying to my cohorts",
  "Bed-heating the apple toast",
  "Watching the solar garlic start to rot",
  "Poking a double decker on a llama, taboot",
  "Was it for this my life I sought?",

  // "Ghost"
  "Telling you the story of the ghost",
  "Feeling forsaken",
  "Leaving the latch unhooked",
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
  "Passing through the corridor",
  "Meeting an aging knight on the way to see the king",
  "Leading the way through the streets of Prussia",
  "Lifting up my visor",
  "Doing things that smart people don't do",
  "Explainingthat I was once a lizard too",
  "Surrendering to the flow",
  "Realizing the lizards, they have died",
  "Coming from the land of the big baboon",
  "Coming from the land of lizards",
  "Enlightening you with the writings of the Helping, Phriendly Book",
  "Possessing the secrets of eternal joy and never-ending splendor",
  "Bowing my head in silence",
  "Remembering all the thoughts that he had thunk",

  // Colonel Forbin's Ascent
  "Staring up at the mountain",
  "Wiping away the beads of sweat from brow",
  "Burying my feet in the quagmire",
  "Wrapping my fingers around a knotted root",
  "Climbing, so slowly, ahead",
  "Suddenly hearing the crack of thunder",
  "Standing amidst a sea of dust",
  "Shuddering in the puddles and the muck",
  "Waiting 'til tomorrow for the sacred creed",
  "Bowing in reverence to the shadow of the mighty legends formed",
  "Standing before the prophet",
  "Speaking so slowly",
  "Helping you with your quest to gain the knowledge that you lack",
  "Calling upon my faithful friend the mockingbird",
  "Warning you that all knowledge seeming innocent and pure becoes a deadly weapon in the hands of avarice and greed",

  // Heavy Things
  "Tearing my ventricles",


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
  "Slipping into the night",
  "Stealing away before the dawn",
  "Bringing back good news",
  "Scourging the evening with my cry",
  "Making the rudiments of gruel from the flesh from Satan's dogs",
  "Deducting the carrots from your pay",
  "Swimming in the mire",
  "Forging the coin and licking the stamp",
  "Putting your money where your mouth is",
  "Stuffing it in my sack",
  "Feeling a bubble form somewhere below my skin",
  "Giving the director a serpent deflector",
  "Giving the director a musrat detector",
  "Giving the director a ribbon reflector",
  "Giving the director a a cushion convector",
  "Giving the director a picture of nectar",
  "Giving the director a virile disector",
  "Giving the director a hormone collector",
  "Whatever you do, take care of your shoes",

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

  // Steam
  "Walking off the ledge of the solitary tower",
  "Throwing bread crusts off the ledge",
  "Singing in a voice so clear",
  "Disappearing as steam",
  "Standing far below the wolves you seem to know",
  "Meling my bones into oil",
  "Hissing liquid in the snow",
  "Drawing near to your tower",
  "Approaching the sound of hooves",
  "Scattering all the wolves",
  "Briefly watching the horseman ride",
  "Watching the horses nostrils steam",
  "Hearing a fateful scream",
  "Singing in the steam",

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
  "Needing a space to move and breathe",
  "Spending time beneath your heels",
  "Shouting your name into the wind",

  // My Friend, My Friend
  "Making a statement about my former life",
  "Grasping a silver silken blade",
  "Affixing my gaze",
  "Grasping the handle, clipping the cable",
  "Thinking about my friend with the knife",
  "Thinking about my friend with the wife",
  "Moving closer to the flame",
  "Feeling it ticking like a bomb",
  "Thinking about my friend the clever ruse",

  // Back on the Train
  "Jumping off with a bucket full of thoughts",
  "Holding that bucket in my hand",
  "Watching the smoke behind the mountain curl",
  "Never looking back again",
  "Turning my face into the howlin' wind",
  "Seeing my face in a town that's flashing by",

  // Gumbo
  "Planning a family vacation",
  "Passing by a gunslinging parrot",
  "Stashing the gumbo",
  "Rattling around in a cage",
  "Writing notes on sandpaper",
  "Remembering to check on the sausage",
  "Carving up a good hunk of wood",

  // Sand 
  "Healing the symptoms but not affecting the cause",
  "Equating my life with sand",
  "Healing the gunshot wound with gauze",
  "Dropping a forgotten god",
  "Flowing through the hourglass",
  "Pushing through the funnel",
  "Turning once more",
  "Racing all your siblings through the tunnel",
  "Sliding and letting the silicone embrace me",
  "Letting my brothers crush me to the wall",
  "Chosing my own religion",
  "Worshipping my own spirit",
  "Languishing in shame",
  "Blaming myself",

  // Twist 
  "Speaking your name for many days",
  "Prouncing it in several ways",
  "Moving letters all around",
  "Substituting every sound",
  "Hearing the end result",
  "Telling you it's not my fault",
  "Twisting it around that way",

  // Fuego 
  "Rolling in my fuego",
  "Doing my own stunts",
  "Seeing guilty people",
  "Gnawing through the straps",
  "Freaking out and throwing stuff",
  "Asking Diego if it was stolen",
];
