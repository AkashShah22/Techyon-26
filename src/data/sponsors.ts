export interface SponsorItem {
  name: string;
  category: string;
}

export const sponsorsData = {
  heading: "POWERING THE CHAOS",
  eyebrow: "LEGACY / PREVIOUS SPONSORS",
  subheading: "A salute to the brands that have backed previous Tachyon editions. Partnership opportunities for 2026 are now open.",
  poster: "/assets/hero/tachyon-collage-poster.webp",
  contactCta: "Become a 2026 Partner",
  contactEmail: "tachyon@juet.ac.in",
  sponsors: [
    { name: "SBI", category: "Banking Partner" },
    { name: "HDFC BANK", category: "Financial Services" },
    { name: "TITAN", category: "Lifestyle Partner" },
    { name: "AXIS BANK", category: "Banking Partner" },
    { name: "KRAFTON", category: "E-Sports Title Partner" },
    { name: "UNSTOP", category: "Platform Partner" },
    { name: "HERSHEY'S", category: "Refreshment Partner" },
    { name: "AG", category: "Technology Partner" },
  ] as SponsorItem[],
};
