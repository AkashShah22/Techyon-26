"use client";

import React from "react";
import Link from "next/link";
import { CampusMap } from "@/components/map/CampusMap";
import { ArrowUpRight } from "lucide-react";

export const MapTeaser: React.FC = () => {
  return (
    <section id="map" className="bg-[#12030b] text-tachyon-cream py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-[#3d1326]">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-tachyon-teal/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-1 bg-tachyon-teal rounded-full" />
              <span className="font-mono text-xs sm:text-sm font-bold tracking-widest text-tachyon-teal uppercase">
                FIND YOUR WAY THROUGH THE FOG
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-tachyon-cream tracking-tight leading-none">
              TACHYON WORLD
            </h2>
            <p className="font-body text-sm sm:text-base text-tachyon-cream/70 max-w-xl mt-3">
              The JUET campus becomes a living game board. Follow the marked paths between arenas, labs, stages and hidden clues.
            </p>
          </div>

          <Link
            href="/map"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#4d1933] bg-[#220815] text-tachyon-cream hover:border-tachyon-teal font-display text-sm tracking-wider uppercase transition-colors shrink-0"
          >
            <span>FULL EXPANDED MAP</span>
            <ArrowUpRight className="w-4 h-4 text-tachyon-teal" />
          </Link>
        </div>

        {/* The Interactive Map Component */}
        <CampusMap />

      </div>
    </section>
  );
};
