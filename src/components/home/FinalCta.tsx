"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { ArrowUpRight, Flame } from "lucide-react";

export const FinalCta: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-[#1a0610] via-[#240816] to-[#0a0206] text-tachyon-cream py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-center border-t border-[#3d1326]">
      
      {/* Glowing Moon Radial Glow behind text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-gradient-to-tr from-tachyon-orange/20 to-tachyon-gold/15 blur-[90px] pointer-events-none" />

      {/* Decorative Moon Orb Visual in background */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gradient-to-b from-[#e5a93b]/40 to-transparent blur-2xl pointer-events-none opacity-40" />

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* Portal Eyebrow */}
        <div className="flex items-center gap-2 mb-4">
          <Flame className="w-4 h-4 text-tachyon-orange animate-bounce" />
          <span className="font-mono text-xs sm:text-sm font-bold tracking-widest text-tachyon-orange uppercase">
            THE PORTAL IS OPEN
          </span>
          <Flame className="w-4 h-4 text-tachyon-orange animate-bounce" />
        </div>

        {/* Big Headline */}
        <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl text-tachyon-cream tracking-tight leading-[0.95] mb-6 drop-shadow-2xl">
          READY TO ENTER?
        </h2>

        {/* Subtitle */}
        <p className="font-body text-base sm:text-xl text-tachyon-cream/80 max-w-xl mb-10 leading-relaxed">
          Build your team. Choose your battle. Claim your place inside Central India&apos;s most spirited technical fest.
        </p>

        {/* Register Button */}
        <a
          href={siteConfig.registrationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-tachyon-orange hover:bg-tachyon-orangeHover text-tachyon-dark font-display font-bold text-xl sm:text-2xl tracking-wider px-10 py-5 rounded-2xl shadow-glowOrange transition-all hover:scale-105 active:scale-95"
        >
          <span>REGISTER NOW</span>
          <ArrowUpRight className="w-6 h-6 stroke-[3]" />
        </a>

        {/* Security / Notice tag */}
        <div className="mt-8 flex items-center gap-4 text-xs font-mono text-tachyon-cream/50">
          <span>OCTOBER 29-31, 2026</span>
          <span>·</span>
          <span>JUET GUNA</span>
          <span>·</span>
          <span>ALL CAMPUS ARENAS</span>
        </div>

      </div>
    </section>
  );
};
