export interface SpeakerItem {
  id: string;
  tag: string; // e.g. "ARCHIVE 01"
  name: string;
  category: string;
  role: string;
  image: string;
  isArchive: boolean;
  topic?: string;
}

export const speakersData = {
  archiveNotice: "Archive context only · Featured cards do not represent confirmed TACHYON 2026 bookings. Reveal for 2026 coming soon.",
  upcomingNotice: "The 2026 speaker lineup is currently locked in the vault. Transmissions will be broadcast once confirmed.",
  speakers: [
    {
      id: "archive-01",
      tag: "ARCHIVE 01",
      name: "FOUNDER'S FIRESIDE",
      category: "LEGACY GUEST SESSION",
      role: "Tech Founders & Scale-up Architects",
      image: "/assets/speakers/archive-founders-fireside.webp",
      isArchive: true,
      topic: "Bootstrapping deep tech hardware & enduring the early zero-to-one winter.",
    },
    {
      id: "archive-02",
      tag: "ARCHIVE 02",
      name: "BUILDING IN PUBLIC",
      category: "CREATOR · PREVIOUS EDITION",
      role: "Open Source Engineers & Community Builders",
      image: "/assets/speakers/archive-building-in-public.webp",
      isArchive: true,
      topic: "How building transparent dev tools commands global viral developer adoption.",
    },
    {
      id: "archive-03",
      tag: "ARCHIVE 03",
      name: "AI BEYOND HYPE",
      category: "ENGINEERING LEADER · ARCHIVE",
      role: "Principal AI Research & Production Engineers",
      image: "/assets/speakers/archive-ai-beyond-hype.webp",
      isArchive: true,
      topic: "Deploying high-throughput reasoning models to real-world edge hardware.",
    },
  ] as SpeakerItem[],
};
