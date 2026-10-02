export interface SiteConfig {
  name: string;
  subName: string;
  tagline: string;
  dates: string;
  startDateISO: string;
  endDateISO: string;
  locationName: string;
  coordinatesString: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  address: string;
  contactEmail: string;
  contactPhone: string;
  registrationUrl: string; // One configurable URL
  socials: {
    name: string;
    href: string;
  }[];
  heroCopy: string;
  welcomeCopy: string;
  stats: {
    label: string;
    value: string;
    subtext: string;
  }[];
  cryptReward: {
    badgeTitle: string;
    secretCode: string;
    message: string;
    instructions: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "TACHYON 2026",
  subName: "THE ANNUAL TECHNICAL FEST",
  tagline: "Where monsters meet machines.",
  dates: "October 29-31, 2026",
  startDateISO: "2026-10-29T09:00:00+05:30",
  endDateISO: "2026-10-31T22:00:00+05:30",
  locationName: "JUET Guna",
  coordinatesString: "24.4358° N · 77.1604° E",
  coordinates: {
    lat: 24.4358,
    lng: 77.1604,
  },
  address: "Jaypee University of Engineering and Technology, A-B Road, Raghogarh, Guna, Madhya Pradesh 473226",
  contactEmail: "tachyon@juet.ac.in",
  contactPhone: "+91 7544 267 310",
  registrationUrl: "https://unstop.com", // Configurable registration link (placeholder)
  socials: [
    { name: "Instagram", href: "https://instagram.com" },
    { name: "LinkedIn", href: "https://linkedin.com" },
    { name: "YouTube", href: "https://youtube.com" },
    { name: "Discord", href: "https://discord.com" },
  ],
  heroCopy: "Three nights. Five battles. One campus transformed into a living machine of code, chaos and impossible ideas.",
  welcomeCopy: "JUET Guna's annual technical fest is one of Central India's largest student-led arenas for technology, strategy and fearless experimentation. Across three electric days, builders, coders and creators compete, learn and make the campus their own.",
  stats: [
    { label: "MAJOR EVENTS", value: "5", subtext: "Boss arena competitions" },
    { label: "DAYS", value: "3", subtext: "Non-stop night battles" },
    { label: "GUNA", value: "JUET", subtext: "Central India's powerhouse" },
  ],
  cryptReward: {
    badgeTitle: "SURVIVOR OF THE AFTERDARK",
    secretCode: "PUMPKIN-SOUL-13-2026",
    message: "You have uncovered all 13 lost souls haunting the grounds of JUET Guna.",
    instructions: "Show this badge at the Central Lawn HQ during Tachyon 2026 to claim your limited-edition physical Survivor of the Afterdark enamel pin & fast-track arena pass!",
  },
};
