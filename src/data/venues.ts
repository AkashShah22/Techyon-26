export interface VenueItem {
  id: string;
  name: string;
  code: string; // e.g. "01", "02"
  shortDesc: string;
  locationDetails: string;
  walkwaysHours: string;
  eventsHosted: {
    name: string;
    slug?: string;
    time: string;
  }[];
  mapCoordinates: {
    x: number; // percentage on map (0-100)
    y: number; // percentage on map (0-100)
  };
  accentColor: string;
}

export const venuesData: VenueItem[] = [
  {
    id: "central-lawn",
    name: "Central Lawn",
    code: "01",
    shortDesc: "Main campus green, registration portals & Afterdark social zone.",
    locationDetails: "Adjacent to Academic Block A & Main Gate walkways.",
    walkwaysHours: "08:30 - 22:00",
    eventsHosted: [
      { name: "Portal Opens + Registration", time: "Oct 29, 09:00" },
      { name: "The Afterdark Social", time: "Oct 31, 19:00" },
    ],
    mapCoordinates: { x: 50, y: 55 },
    accentColor: "#ff6a13",
  },
  {
    id: "tagore-hall",
    name: "Tagore Hall",
    code: "02",
    shortDesc: "Grand indoor auditorium, ceremonial stage & keynote presentations.",
    locationDetails: "Central University Complex, Ground Floor.",
    walkwaysHours: "08:30 - 22:00",
    eventsHosted: [
      { name: "Opening Ceremony", time: "Oct 29, 10:30" },
      { name: "Guest Session: Building What Matters", time: "Oct 30, 11:00" },
      { name: "Awards + Closing Ritual", time: "Oct 31, 16:30" },
    ],
    mapCoordinates: { x: 38, y: 38 },
    accentColor: "#e5a93b",
  },
  {
    id: "cse-lab-01",
    name: "CSE Lab 01",
    code: "03",
    shortDesc: "High-spec algorithmic battleground & competitive coding lab.",
    locationDetails: "Computer Science Building, Wing B, 1st Floor.",
    walkwaysHours: "08:30 - 22:00",
    eventsHosted: [
      { name: "Code Mania: Qualifier", slug: "code-mania", time: "Oct 29, 12:00" },
      { name: "Code Mania: Grand Finale", slug: "code-mania", time: "Oct 31, 10:00" },
    ],
    mapCoordinates: { x: 22, y: 26 },
    accentColor: "#19c3a4",
  },
  {
    id: "arena-zero",
    name: "Arena Zero",
    code: "04",
    shortDesc: "Reinforced steel-caged colosseum for combat robotics.",
    locationDetails: "Open Arena Grounds, Workshop Complex.",
    walkwaysHours: "08:30 - 22:00",
    eventsHosted: [
      { name: "Robo Wars: Tech Inspection", slug: "robo-wars", time: "Oct 29, 15:30" },
      { name: "Robo Wars: Final Collision", slug: "robo-wars", time: "Oct 31, 13:00" },
    ],
    mapCoordinates: { x: 74, y: 28 },
    accentColor: "#ff6a13",
  },
  {
    id: "management-block",
    name: "Management Block",
    code: "05",
    shortDesc: "Tactical strategy boardrooms & corporate simulation suites.",
    locationDetails: "Management Studies Pavilion, 2nd Floor Conference Hall.",
    walkwaysHours: "08:30 - 22:00",
    eventsHosted: [
      { name: "War for Trezor: Strategy Rounds", slug: "war-for-trezor", time: "Oct 30, 14:00" },
    ],
    mapCoordinates: { x: 24, y: 72 },
    accentColor: "#e5a93b",
  },
  {
    id: "esports-crypt",
    name: "E-Sports Crypt",
    code: "06",
    shortDesc: "Atmospheric gaming dungeon with low ping and tournament staging.",
    locationDetails: "Sub-level Media Hall, Student Activity Center.",
    walkwaysHours: "08:30 - 22:00",
    eventsHosted: [
      { name: "Glitch E-Sports: Knockouts", slug: "glitch-esports", time: "Oct 30, 18:00" },
    ],
    mapCoordinates: { x: 78, y: 68 },
    accentColor: "#19c3a4",
  },
  {
    id: "tachyon-world",
    name: "Tachyon World",
    code: "07",
    shortDesc: "Campus-wide cryptic quest route spanning all secret locations.",
    locationDetails: "Open across JUET Guna campus boundaries.",
    walkwaysHours: "08:30 - 22:00",
    eventsHosted: [
      { name: "Cryptic Hunt: The First Clue", slug: "cryptic-hunt", time: "Oct 30, 09:30" },
    ],
    mapCoordinates: { x: 48, y: 44 },
    accentColor: "#ff6a13",
  },
];
