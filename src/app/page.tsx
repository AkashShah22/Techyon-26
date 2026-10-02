import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { CountdownBar } from "@/components/home/CountdownBar";
import { WelcomeSection } from "@/components/home/WelcomeSection";
import { BattlesSection } from "@/components/home/BattlesSection";
import { MapTeaser } from "@/components/home/MapTeaser";
import { RitualSection } from "@/components/home/RitualSection";
import { SpeakersSection } from "@/components/home/SpeakersSection";
import { LegacyTimeline } from "@/components/home/LegacyTimeline";
import { SponsorsSection } from "@/components/home/SponsorsSection";
import { FinalCta } from "@/components/home/FinalCta";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section with Pumpkin Artwork & Coordinates */}
      <HeroSection />

      {/* 2. Solid Orange Countdown Bar */}
      <CountdownBar />

      {/* 3. Welcome to Tachyon Section with Stats & Photo Collage */}
      <WelcomeSection />

      {/* 4. Choose Your Battle Section (5 Boss Levels) */}
      <BattlesSection />

      {/* 5. Tachyon World (Interactive Campus Map) */}
      <MapTeaser />

      {/* 6. The Ritual, Hour by Hour (3-Day Schedule & Quest Log) */}
      <RitualSection />

      {/* 7. The Minds Behind the Machine (Speakers Archive) */}
      <SpeakersSection />

      {/* 8. The Tachyon Legacy (2011 to 2026 Milestones) */}
      <LegacyTimeline />

      {/* 9. Powering the Chaos (Sponsors & Partners) */}
      <SponsorsSection />

      {/* 10. The Portal is Open: Ready to Enter? (Final CTA) */}
      <FinalCta />
    </div>
  );
}
