"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { sponsorsData } from "@/data/sponsors";
import { CollectibleSoul } from "@/components/game/CollectibleSoul";
import { ArrowUpRight, Handshake, Mail } from "lucide-react";

export const SponsorsSection: React.FC = () => {
  return (
    <section id="sponsors" className="bg-tachyon-cream text-tachyon-dark py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-[#280a1a]/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Tachyon Spooky Collage Poster */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-[#280a1a] bg-[#1a0610] group">
              <Image
                src={sponsorsData.poster}
                alt="Tachyon 2026 Halloween Collage Poster"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 450px"
              />

              {/* Spooky Frame corner badges */}
              <div className="absolute top-3 left-3 bg-tachyon-orange text-tachyon-dark font-display text-xs tracking-wider px-3 py-1 rounded shadow">
                TACHYON 2026
              </div>

              {/* Hidden Soul 13 inside the sponsors poster */}
              <div className="absolute top-3 right-3 z-20">
                <CollectibleSoul
                  id="soul-13-sponsors"
                  type="bat"
                  hint="The final phantom hides within the Halloween chaos collage..."
                />
              </div>

              <div className="absolute bottom-3 left-3 right-3 bg-black/85 backdrop-blur-sm p-3 rounded-lg border border-tachyon-orange/40 text-center">
                <span className="font-mono text-xs text-tachyon-orange font-bold uppercase tracking-wider">
                  POWERING CENTRAL INDIA&apos;S POWERHOUSE FEST
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Title, Subtitle & Sponsor Badges Grid */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-1 bg-tachyon-orange rounded-full" />
              <span className="font-mono text-xs sm:text-sm font-bold tracking-widest text-[#a63e00] uppercase">
                {sponsorsData.eyebrow}
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-tachyon-dark tracking-tight leading-none mb-4">
              {sponsorsData.heading}
            </h2>

            {/* Subheading */}
            <p className="font-body text-base text-[#3d182b] max-w-xl mb-8 leading-relaxed">
              {sponsorsData.subheading}
            </p>

            {/* 8 Sponsor Badges Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
              {sponsorsData.sponsors.map((brand, idx) => (
                <div
                  key={idx}
                  className="bg-white border-2 border-[#d9ba88] rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-sm hover:border-tachyon-orange hover:shadow-md transition-all group min-h-[70px]"
                >
                  <span className="font-display text-lg sm:text-xl text-tachyon-dark tracking-wide group-hover:text-tachyon-orange transition-colors">
                    {brand.name}
                  </span>
                  <span className="font-mono text-[9px] text-[#805030] tracking-wider uppercase mt-0.5">
                    {brand.category}
                  </span>
                </div>
              ))}
            </div>

            {/* 2026 Partnership Callout */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/sponsors"
                className="inline-flex items-center justify-center gap-2 bg-[#280a1a] hover:bg-[#3d1326] text-tachyon-cream font-display text-base tracking-wider px-6 py-3.5 rounded-xl transition-all shadow-md text-center"
              >
                <Handshake className="w-5 h-5 text-tachyon-orange" />
                <span>PARTNER WITH TACHYON 2026</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <a
                href={`mailto:${sponsorsData.contactEmail}?subject=Sponsorship%20Inquiry%20-%20Tachyon%202026`}
                className="inline-flex items-center justify-center gap-2 border-2 border-[#280a1a] bg-transparent hover:bg-[#280a1a]/10 text-tachyon-dark font-mono text-xs font-bold px-6 py-3.5 rounded-xl transition-colors text-center"
              >
                <Mail className="w-4 h-4 text-tachyon-orange" />
                <span>EMAIL PARTNERSHIP DECK</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
