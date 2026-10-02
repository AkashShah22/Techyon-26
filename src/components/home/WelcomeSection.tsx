"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { CollectibleSoul } from "@/components/game/CollectibleSoul";
import { Sparkles } from "lucide-react";

export const WelcomeSection: React.FC = () => {
  return (
    <section id="about" className="bg-tachyon-cream text-tachyon-dark py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Photo Collage Poster with Ghostly Silhouette */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-[#280a1a] bg-[#1a0610] group">
              
              {/* Photo Collage Image */}
              <Image
                src="/assets/about/about-photo-collage.webp"
                alt="Welcome to Tachyon Techfest Collage"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 450px"
              />

              {/* Spooky Badge Tag on Image */}
              <div className="absolute top-4 left-4 bg-tachyon-orange text-tachyon-dark font-display text-xs tracking-wider px-3 py-1 rounded shadow">
                THE ANNUAL TECHFEST
              </div>

              {/* Tagline footer badge inside card */}
              <div className="absolute bottom-4 left-4 right-4 bg-tachyon-dark/90 backdrop-blur-sm p-3 rounded-lg border border-tachyon-orange/40 text-left">
                <span className="font-mono text-[10px] text-tachyon-orange font-bold uppercase tracking-wider block mb-0.5">
                  WHERE MONSTERS MEET MACHINES
                </span>
                <p className="text-xs text-tachyon-cream/80 font-body line-clamp-2">
                  Central India&apos;s largest technical proving grounds at JUET Guna.
                </p>
              </div>

              {/* Hidden Soul 04 */}
              <div className="absolute top-4 right-4 z-20">
                <CollectibleSoul
                  id="soul-04-about-collage"
                  type="ghost"
                  hint="A tech-loving spirit floats near the VR headset..."
                />
              </div>
            </div>
          </div>

          {/* Right Column: Information, Stats & Callout */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-1 bg-tachyon-orange rounded-full" />
              <span className="font-mono text-xs sm:text-sm font-bold tracking-widest text-[#a63e00] uppercase">
                CENTRAL INDIA · SINCE 2011
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-tachyon-dark tracking-tight leading-none mb-6">
              WELCOME TO TACHYON
            </h2>

            {/* Paragraph */}
            <p className="font-body text-base sm:text-lg text-[#3d182b] leading-relaxed mb-8 max-w-2xl">
              {siteConfig.welcomeCopy}
            </p>

            {/* 3 Stats Row */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 py-6 border-y-2 border-[#280a1a]/15 mb-8">
              {siteConfig.stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-display text-4xl sm:text-5xl lg:text-6xl text-tachyon-dark leading-none">
                    {stat.value}
                  </span>
                  <span className="font-mono text-xs sm:text-sm font-bold tracking-widest text-[#a63e00] uppercase mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Built by students callout banner */}
            <div className="bg-[#f3dbb1] border-2 border-[#d9ba88] rounded-xl p-4 sm:p-5 flex items-start gap-3.5 shadow-sm">
              <Sparkles className="w-5 h-5 text-tachyon-orange shrink-0 mt-0.5" />
              <p className="font-body text-sm sm:text-base text-tachyon-dark font-medium leading-normal">
                Built by students, powered by curiosity, remembered long after the last machine powers down.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
