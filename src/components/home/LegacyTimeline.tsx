"use client";

import React from "react";
import { timelineData } from "@/data/timeline";
import { CollectibleSoul } from "@/components/game/CollectibleSoul";
import { Sparkles, Radio } from "lucide-react";

export const LegacyTimeline: React.FC = () => {
  return (
    <section className="bg-tachyon-dark text-tachyon-cream py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-[#3d1326]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-tachyon-orange/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-8 h-1 bg-tachyon-orange rounded-full" />
            <span className="font-mono text-xs sm:text-sm font-bold tracking-widest text-tachyon-orange uppercase">
              FIFTEEN YEARS OF BUILDING
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-tachyon-cream tracking-tight leading-none">
            THE TACHYON LEGACY
          </h2>
          <p className="font-body text-sm sm:text-base text-tachyon-cream/70 max-w-xl mt-3">
            From a handful of passionate computer science students in 2011 to Central India&apos;s most formidable Halloween arena.
          </p>
        </div>

        {/* Milestone Cards / Trail */}
        <div className="relative">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-tachyon-teal/30 via-tachyon-orange/60 to-tachyon-orange -translate-y-1/2 z-0" />

          {/* Connecting Line (Mobile) */}
          <div className="lg:hidden absolute top-0 bottom-0 left-6 w-1 bg-gradient-to-b from-tachyon-teal/30 via-tachyon-orange/60 to-tachyon-orange z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
            {timelineData.map((item, idx) => (
              <div
                key={item.year}
                className={`relative flex flex-col pl-14 lg:pl-0 pt-2 lg:pt-8 group transition-transform duration-300 hover:-translate-y-1 ${
                  item.isCurrent ? "lg:pt-0" : ""
                }`}
              >
                {/* Milestone Node Beacon */}
                <div
                  className={`absolute left-4 lg:left-0 lg:top-0 -translate-x-1/2 lg:translate-x-0 w-8 h-8 rounded-full border-4 flex items-center justify-center transition-all ${
                    item.isCurrent
                      ? "bg-tachyon-orange border-white shadow-glowOrange scale-110"
                      : "bg-[#17050f] border-tachyon-teal/80 text-tachyon-teal"
                  }`}
                >
                  <div
                    className={`w-2.5 h-2.5 rounded-full ${
                      item.isCurrent ? "bg-black animate-ping" : "bg-tachyon-teal"
                    }`}
                  />
                </div>

                {/* Milestone Card Body */}
                <div
                  className={`p-6 rounded-2xl border transition-all ${
                    item.isCurrent
                      ? "bg-[#250919] border-tachyon-orange shadow-glowOrange"
                      : "bg-[#1a0610] border-[#3d1326] group-hover:border-[#54213d]"
                  }`}
                >
                  {/* Year Tag */}
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`font-display text-4xl sm:text-5xl leading-none ${
                        item.isCurrent ? "text-tachyon-orange glow-orange" : "text-tachyon-cream"
                      }`}
                    >
                      {item.year}
                    </span>

                    {item.isCurrent && (
                      <span className="bg-tachyon-orange text-tachyon-dark font-mono text-[10px] font-bold px-2 py-0.5 rounded shadow">
                        PRESENT
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-xl text-tachyon-cream tracking-wide mb-2">
                    {item.title}
                  </h3>

                  <p className="font-body text-xs sm:text-sm text-tachyon-cream/70 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Hidden Soul 12 inside the 2026 milestone */}
                  {item.isCurrent && (
                    <div className="mt-4 pt-3 border-t border-[#3d1326] flex items-center justify-between">
                      <span className="font-mono text-[11px] text-tachyon-teal">
                        The Portal Beckons
                      </span>
                      <CollectibleSoul
                        id="soul-12-timeline"
                        type="pumpkin"
                        hint="A spirit of the future watches over the 2026 milestone..."
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
