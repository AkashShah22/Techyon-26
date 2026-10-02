"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { CollectibleSoul } from "@/components/game/CollectibleSoul";
import { ArrowUpRight, Compass, Radio } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 border-b border-[#3d1326]">
      {/* Background subtle radial glow */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-tachyon-orange/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -top-20 left-10 w-[350px] h-[350px] bg-tachyon-teal/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Heading and CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Top Date Eyebrow */}
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-1 bg-tachyon-orange rounded-full" />
              <span className="font-mono text-xs sm:text-sm font-bold tracking-widest text-tachyon-orange uppercase">
                {siteConfig.dates.toUpperCase()}
              </span>
            </div>

            {/* Giant Condensed Headline */}
            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-tachyon-cream leading-[0.9] tracking-tight drop-shadow-lg">
              TACHYON
              <br />
              <span className="text-white">2026</span>
            </h1>

            {/* Sub-headline */}
            <h2 className="font-display text-xl sm:text-2xl md:text-3xl text-tachyon-orange tracking-widest uppercase mt-4 mb-6">
              {siteConfig.subName}
            </h2>

            {/* Hero Copy */}
            <p className="font-body text-base sm:text-lg md:text-xl text-tachyon-cream/80 max-w-xl leading-relaxed mb-8">
              {siteConfig.heroCopy}
            </p>

            {/* Dual CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={siteConfig.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-tachyon-orange hover:bg-tachyon-orangeHover text-tachyon-dark font-display font-bold text-base sm:text-lg tracking-wider px-7 py-3.5 rounded-md shadow-glowOrange transition-all hover:scale-105 active:scale-95"
              >
                <span>ENTER TACHYON</span>
                <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
              </a>

              <Link
                href="/#events"
                className="inline-flex items-center gap-2 bg-tachyon-maroon/70 hover:bg-tachyon-maroon text-tachyon-cream border border-[#5d1c3c] font-display text-base sm:text-lg tracking-wider px-7 py-3.5 rounded-md transition-all hover:border-tachyon-orange"
              >
                <span>EXPLORE EVENTS</span>
                <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
              </Link>
            </div>

            {/* Hidden Soul 01 in Hero Left corner */}
            <div className="mt-8 flex items-center gap-2 text-xs font-mono text-tachyon-cream/50">
              <CollectibleSoul id="soul-01-hero-left" type="ghost" hint="A lost soul hovers beside the grand portal entrance..." />
              <span className="italic">Whispers echo in the fog...</span>
            </div>
          </div>

          {/* Right Column: Carved Pumpkin Hero Poster & Coordinates HUD */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            
            {/* Live Signal Coordinates HUD Badge */}
            <div className="w-full max-w-sm mb-4 bg-tachyon-darker/90 border border-[#3d1326] rounded-lg p-3.5 flex items-center justify-between shadow-lg">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tachyon-teal opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-tachyon-teal" />
                </span>
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] text-tachyon-teal font-bold tracking-widest uppercase">
                    SIGNAL DETECTED
                  </span>
                  <span className="font-mono text-xs text-tachyon-cream/90 font-medium">
                    {siteConfig.coordinatesString}
                  </span>
                </div>
              </div>

              <div className="text-right">
                <span className="font-mono text-[10px] text-tachyon-cream/60 uppercase block">
                  CAMPUS SECTOR
                </span>
                <span className="font-mono text-xs text-tachyon-orange font-bold uppercase">
                  JUET GUNA · MP
                </span>
              </div>
            </div>

            {/* Glowing Pumpkin Hero Artwork Frame */}
            <div className="relative group w-full max-w-md aspect-square rounded-2xl overflow-hidden border-2 border-[#4d1933] shadow-lanternGlow bg-tachyon-darker flex items-center justify-center p-3">
              
              {/* Outer decorative corners */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-tachyon-orange pointer-events-none" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-tachyon-orange pointer-events-none" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-tachyon-orange pointer-events-none" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-tachyon-orange pointer-events-none" />

              {/* The Hero Pumpkin Image */}
              <div className="relative w-full h-full rounded-xl overflow-hidden flex items-center justify-center">
                <Image
                  src="/assets/hero/hero-pumpkin-poster.webp"
                  alt="Tachyon 2026 Carved Pumpkin Hero Art"
                  fill
                  priority
                  className="object-contain transition-transform duration-700 group-hover:scale-105 animate-flicker"
                  sizes="(max-width: 768px) 100vw, 500px"
                />

                {/* Hidden Soul 02 inside pumpkin frame corner */}
                <div className="absolute top-4 right-4 z-20">
                  <CollectibleSoul
                    id="soul-02-pumpkin-crown"
                    type="pumpkin"
                    hint="A mischievous spirit rests on the pumpkin's crown..."
                  />
                </div>
              </div>

              {/* Live Status Pill at bottom of artwork */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-tachyon-teal/50 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-tachyon-teal animate-pulse" />
                <span className="font-mono text-[11px] font-bold text-tachyon-teal tracking-widest uppercase">
                  LIVE AT JUET GUNA
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
