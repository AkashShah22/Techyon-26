"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { speakersData } from "@/data/speakers";
import { CollectibleSoul } from "@/components/game/CollectibleSoul";
import { AlertCircle, ArrowUpRight, Sparkles } from "lucide-react";

export const SpeakersSection: React.FC = () => {
  return (
    <section id="speakers" className="bg-tachyon-cream text-tachyon-dark py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-[#280a1a]/20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-1 bg-tachyon-orange rounded-full" />
              <span className="font-mono text-xs sm:text-sm font-bold tracking-widest text-[#a63e00] uppercase">
                FEATURED / LEGACY SPEAKERS
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-tachyon-dark tracking-tight leading-none">
              THE MINDS BEHIND THE MACHINE
            </h2>
            <p className="font-body text-sm sm:text-base text-[#3d182b] max-w-2xl mt-3">
              A look back at the kind of founders, engineering leaders and creators who have shaped Tachyon guest sessions. The 2026 speaker reveal is coming soon.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/speakers"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#280a1a] bg-[#f5e2bf] text-tachyon-dark font-display text-sm tracking-wider uppercase hover:bg-tachyon-orange hover:text-white transition-colors"
            >
              <span>SPEAKERS HUB</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            {/* Hidden Soul 11 in Speakers header */}
            <CollectibleSoul
              id="soul-11-speakers"
              type="ghost"
              hint="An intellectual phantom hovers near the guest stage..."
            />
          </div>
        </div>

        {/* 3 Archive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {speakersData.speakers.map((sp) => (
            <div
              key={sp.id}
              className="bg-[#240a18] text-tachyon-cream rounded-2xl overflow-hidden border-2 border-[#3d1326] shadow-xl flex flex-col justify-between group hover:border-tachyon-orange transition-all duration-300"
            >
              {/* Speaker Photo */}
              <div className="relative w-full h-72 sm:h-80 bg-black overflow-hidden">
                <Image
                  src={sp.image}
                  alt={sp.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#240a18] via-transparent to-black/30 pointer-events-none" />

                {/* Archive Tag */}
                <div className="absolute top-3 left-3 bg-tachyon-orange text-tachyon-dark font-mono text-[11px] font-bold px-2.5 py-0.5 rounded shadow">
                  {sp.tag}
                </div>
              </div>

              {/* Information */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <span className="font-mono text-[10px] text-tachyon-teal tracking-widest uppercase font-bold block mb-1">
                    {sp.category}
                  </span>
                  <h3 className="font-display text-2xl text-tachyon-cream tracking-wide group-hover:text-tachyon-orange transition-colors mb-2">
                    {sp.name}
                  </h3>
                  <p className="font-body text-xs text-tachyon-cream/70 line-clamp-2 mb-4">
                    {sp.topic}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#3d1326] flex items-center justify-between text-xs font-mono text-tachyon-cream/50">
                  <span>{sp.role}</span>
                  <span className="text-tachyon-orange font-bold">ARCHIVE</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 2026 Reveal Notice Card */}
        <div className="bg-[#f0d4a5] border-2 border-[#d6b47c] rounded-xl p-4 sm:p-5 flex items-center gap-3.5 shadow-sm text-xs sm:text-sm font-mono text-[#401a05]">
          <AlertCircle className="w-5 h-5 text-tachyon-orange shrink-0" />
          <p>{speakersData.archiveNotice}</p>
        </div>

      </div>
    </section>
  );
};
