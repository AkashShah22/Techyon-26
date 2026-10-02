export interface EventItem {
  id: string;
  slug: string;
  level: string; // e.g. "01/05"
  name: string;
  tagline: string;
  tags: string[];
  venue: string;
  venueKey: string; // references venues.ts
  poster: string;
  fallbackPoster?: string;
  accentColor: string;
  difficulty: string; // "TBA" or rating
  teamSize: string; // "TBA"
  prizePool: string; // "TBA"
  registrationFee: string; // "TBA"
  about: string[];
  rules: string[];
  scheduleSlots: {
    day: string;
    date: string;
    time: string;
    stage: string;
    description: string;
  }[];
  coordinators: {
    name: string;
    role: string;
    contact: string;
  }[];
}

export const eventsData: EventItem[] = [
  {
    id: "01",
    slug: "code-mania",
    level: "01/05",
    name: "CODE MANIA",
    tagline: "Algorithms, Speed, Logic",
    tags: ["ALGORITHMS", "SPEED", "LOGIC"],
    venue: "CSE Lab 01",
    venueKey: "cse-lab-01",
    poster: "/assets/about/about-photo-collage.webp",
    accentColor: "#ff6a13",
    difficulty: "TBA",
    teamSize: "TBA",
    prizePool: "TBA",
    registrationFee: "TBA",
    about: [
      "Code Mania is the flagship competitive programming battleground of Tachyon 2026. Coders plunge into extreme algorithmic trials where only the fastest mathematical minds survive.",
      "Face off against Central India's finest programmers across qualifiers and head-to-head live finals in CSE Lab 01."
    ],
    rules: [
      "Rule 01: TBA (Eligibility criteria and allowed programming languages)",
      "Rule 02: TBA (Plagiarism and IDE guidelines)",
      "Rule 03: TBA (Tie-breaking algorithm and penalty timing)",
      "Rule 04: Decisions of the presiding judges are final and binding."
    ],
    scheduleSlots: [
      {
        day: "Day 1",
        date: "Oct 29",
        time: "12:00",
        stage: "Qualifier Round",
        description: "Speed algorithm contest to determine the top finalist bracket."
      },
      {
        day: "Day 3",
        date: "Oct 31",
        time: "10:00",
        stage: "Grand Finale",
        description: "The ultimate live algorithmic showdown under pressure."
      }
    ],
    coordinators: [
      { name: "TBA", role: "Lead Student Coordinator", contact: "TBA" },
      { name: "TBA", role: "Technical Head", contact: "TBA" }
    ]
  },
  {
    id: "02",
    slug: "robo-wars",
    level: "02/05",
    name: "ROBO WARS",
    tagline: "Metal, Motion, Mayhem",
    tags: ["METAL", "MOTION", "MAYHEM"],
    venue: "Arena Zero",
    venueKey: "arena-zero",
    poster: "/assets/events/robo-wars-poster.webp",
    fallbackPoster: "/assets/events/battle-of-pumpkin-bot-poster.webp",
    accentColor: "#19c3a4",
    difficulty: "TBA",
    teamSize: "TBA",
    prizePool: "TBA",
    registrationFee: "TBA",
    about: [
      "The caged arena ignites. Custom-engineered combat robots built by collegiate teams across the nation battle in Arena Zero for total supremacy.",
      "Sparks, pneumatic hammers, high-torque flippers, and indestructible armor plate collide in an elimination bracket that tests engineering resilience."
    ],
    rules: [
      "Rule 01: TBA (Weight category specifications and weapon safety limits)",
      "Rule 02: TBA (Battery chemistry & remote kill switch compliance)",
      "Rule 03: TBA (Scoring criteria: damage, control, aggression)",
      "Rule 04: Inspection mandatory before entering the combat cage."
    ],
    scheduleSlots: [
      {
        day: "Day 1",
        date: "Oct 29",
        time: "15:30",
        stage: "Tech Inspection & Weigh-In",
        description: "Safety checks, weapon verification, and test runs."
      },
      {
        day: "Day 3",
        date: "Oct 31",
        time: "13:00",
        stage: "Final Collision & Arena Knockouts",
        description: "Championship combat rounds until only one bot remains functional."
      }
    ],
    coordinators: [
      { name: "TBA", role: "Arena Marshals", contact: "TBA" },
      { name: "TBA", role: "Robotics Society Lead", contact: "TBA" }
    ]
  },
  {
    id: "03",
    slug: "cryptic-hunt",
    level: "03/05",
    name: "CRYPTIC HUNT",
    tagline: "Clues, Campus, Mystery",
    tags: ["CLUES", "CAMPUS", "MYSTERY"],
    venue: "Campus-wide (Tachyon World)",
    venueKey: "tachyon-world",
    poster: "/assets/events/cryptic-hunt-poster.webp",
    accentColor: "#ff6a13",
    difficulty: "TBA",
    teamSize: "TBA",
    prizePool: "TBA",
    registrationFee: "TBA",
    about: [
      "When night descends upon JUET Guna, the campus transforms into an open enigma. Encrypted signals, hidden physical geocaches, cryptic ciphers, and digital riddles await.",
      "Squads must navigate the shadows between Tagore Hall, the Lawns, and hidden corners of the campus to unravel the grand puzzle of the Afterdark."
    ],
    rules: [
      "Rule 01: TBA (Squad composition and device policy)",
      "Rule 02: TBA (Leaderboard submission portal rules)",
      "Rule 03: TBA (Boundary limits & out-of-bounds safety zones)",
      "Rule 04: Tampering with physical clue markers is strictly disqualified."
    ],
    scheduleSlots: [
      {
        day: "Day 2",
        date: "Oct 30",
        time: "09:30",
        stage: "The First Clue Drops",
        description: "The cipher portal activates across campus and the hunt begins."
      }
    ],
    coordinators: [
      { name: "TBA", role: "Crypt Master", contact: "TBA" },
      { name: "TBA", role: "Field Navigator", contact: "TBA" }
    ]
  },
  {
    id: "04",
    slug: "war-for-trezor",
    level: "04/05",
    name: "WAR FOR TREZOR",
    tagline: "Strategy, Finance, Power",
    tags: ["STRATEGY", "FINANCE", "POWER"],
    venue: "Management Block",
    venueKey: "management-block",
    poster: "/assets/events/war-for-trezor-poster.webp",
    accentColor: "#e5a93b",
    difficulty: "TBA",
    teamSize: "TBA",
    prizePool: "TBA",
    registrationFee: "TBA",
    about: [
      "A high-stakes simulation of corporate warfare, market crashes, resource auctions, and calculated hostile takeovers.",
      "Step into the boardroom arena where tactical negotiations, financial leverage, and quick crisis management decide who controls the kingdom's vaults."
    ],
    rules: [
      "Rule 01: TBA (Portfolio allocation rules and trading limits)",
      "Rule 02: TBA (Crisis event card mechanics)",
      "Rule 03: TBA (Auction bidding protocol)",
      "Rule 04: Unethical collusion will trigger instant regulatory liquidation."
    ],
    scheduleSlots: [
      {
        day: "Day 2",
        date: "Oct 30",
        time: "14:00",
        stage: "Strategy Rounds & Market Crisis",
        description: "Live bidding, portfolio defense, and sudden market disruption."
      }
    ],
    coordinators: [
      { name: "TBA", role: "Portfolio Master", contact: "TBA" },
      { name: "TBA", role: "Floor Arbiter", contact: "TBA" }
    ]
  },
  {
    id: "05",
    slug: "glitch-esports",
    level: "05/05",
    name: "GLITCH E-SPORTS",
    tagline: "FPS, MOBA, Console",
    tags: ["FPS", "MOBA", "CONSOLE"],
    venue: "E-Sports Crypt",
    venueKey: "esports-crypt",
    poster: "/assets/sponsors/previous-sponsors-bats-poster.webp",
    fallbackPoster: "/assets/events/crypt-vault-poster.webp",
    accentColor: "#19c3a4",
    difficulty: "TBA",
    teamSize: "TBA",
    prizePool: "TBA",
    registrationFee: "TBA",
    about: [
      "The digital colosseum opens in the E-Sports Crypt. Competitive gamers clash across premiere FPS, MOBA, and tactical titles in front of screaming spectators.",
      "Low ping, high adrenaline, and split-second clutches define this premier LAN tournament."
    ],
    rules: [
      "Rule 01: TBA (Official game titles & roster locks)",
      "Rule 02: TBA (Peripheral equipment & config regulations)",
      "Rule 03: TBA (Bracket formats: best-of-1 qualifiers, best-of-3 finals)",
      "Rule 04: Zero tolerance for third-party exploits or unsportsmanlike conduct."
    ],
    scheduleSlots: [
      {
        day: "Day 2",
        date: "Oct 30",
        time: "18:00",
        stage: "Knockout Rounds",
        description: "Intense evening LAN bracket play in the Crypt."
      }
    ],
    coordinators: [
      { name: "TBA", role: "Tournament Admin", contact: "TBA" },
      { name: "TBA", role: "Network Marshal", contact: "TBA" }
    ]
  }
];
