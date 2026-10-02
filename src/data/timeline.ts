export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  isCurrent?: boolean;
}

export const timelineData: TimelineItem[] = [
  {
    year: "2011",
    title: "THE FIRST SIGNAL",
    description: "Tachyon launches as JUET's student-built technical gathering, igniting a culture of collegiate innovation.",
  },
  {
    year: "2016",
    title: "THE ARENA GROWS",
    description: "Robotics combat, e-sports gaming and strategic simulations join the core algorithmic contests.",
  },
  {
    year: "2022",
    title: "BACK IN THE LIGHT",
    description: "The campus returns with bigger stages, regional delegations, and an unstoppable new generation of makers.",
  },
  {
    year: "2026",
    title: "ENTER THE AFTERDARK",
    description: "Five battles. Three days. One living world where monsters meet machines. The boldest edition yet.",
    isCurrent: true,
  },
];
