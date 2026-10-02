"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { eventsData, EventItem } from "@/data/events";
import { CollectibleSoul } from "@/components/game/CollectibleSoul";
import { ArrowUpRight, MapPin, ShieldAlert, Users, Trophy } from "lucide-react";

export const BattlesSection: React.FC = () => {
  const topEvents = eventsData.slice(0, 2);
  const bottomEvents = eventsData.slice(2, 5);

  const renderEventCard = (ev: EventItem, isLarge = false) => {
    return (
      <div
        key={ev.id}
        className="group relative bg-[#220815] border border-[#3d1326] rounded-2xl overflow-hidden hover:border-tachyon-orange transition-all duration-300 hover:shadow-glowOrange flex flex-col justify-between"
      >
        {/* Top Image Container */}
        <div className={`relative w-full ${isLarge ? "h-64 sm:h-72" : "h-56 sm:h-64"} bg-[#12030b] overflow-hidden`}>
          <Image
            src={ev.poster}
            alt={ev.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Dark gradient fade for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#220815] via-transparent to-black/30 pointer-events-none" />

          {/* Level Badge in top left */}
          <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm px-2.5 py-1 rounded border border-tachyon-orange/60">
            <span className="font-mono text-xs font-bold text-tachyon-orange tracking-widest">
              {ev.level}
            </span>
          </div>

          {/* Venue badge in top right */}
          <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-sm px-2.5 py-1 rounded border border-tachyon-teal/50 flex items-center gap-1.5">
            <MapPin className="w-3 h-3 text-tachyon-teal" />
            <span className="font-mono text-[11px] text-tachyon-cream font-medium">
              {ev.venue}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
          <div>
            {/* Tags Line */}
            <div className="font-mono text-[10px] sm:text-xs text-tachyon-orange tracking-widest uppercase font-bold mb-1.5 flex flex-wrap gap-1.5">
              {ev.tags.join(" · ")}
            </div>

            {/* Event Name */}
            <h3 className="font-display text-2xl sm:text-3xl text-tachyon-cream tracking-wide group-hover:text-tachyon-orange transition-colors mb-2">
              {ev.name}
            </h3>

            {/* Short Tagline / Teaser */}
            <p className="font-body text-xs sm:text-sm text-tachyon-cream/70 line-clamp-2 mb-4">
              {ev.about[0]}
            </p>

            {/* Stat Bars (TBA) */}
            <div className="grid grid-cols-3 gap-2 py-3 border-y border-[#3d1326] bg-[#1a0610]/50 rounded-lg px-2.5 mb-4 text-center">
              <div>
                <span className="font-mono text-[9px] text-tachyon-cream/60 uppercase block">
                  DIFFICULTY
                </span>
                <span className="font-mono text-xs font-bold text-tachyon-teal">
                  {ev.difficulty}
                </span>
              </div>
              <div className="border-x border-[#3d1326]">
                <span className="font-mono text-[9px] text-tachyon-cream/60 uppercase block">
                  TEAM SIZE
                </span>
                <span className="font-mono text-xs font-bold text-tachyon-cream">
                  {ev.teamSize}
                </span>
              </div>
              <div>
                <span className="font-mono text-[9px] text-tachyon-cream/60 uppercase block">
                  PRIZE POOL
                </span>
                <span className="font-mono text-xs font-bold text-tachyon-orange">
                  {ev.prizePool}
                </span>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-2 flex items-center justify-between">
            <Link
              href={`/events/${ev.slug}`}
              className="inline-flex items-center gap-1.5 text-tachyon-cream group-hover:text-tachyon-orange font-display text-sm tracking-wider uppercase transition-colors"
            >
              <span>VIEW EVENT</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <span className="font-mono text-[10px] text-tachyon-cream/40 uppercase">
              BOSS ARENA
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="events" className="bg-tachyon-dark text-tachyon-cream py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-[#3d1326]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-tachyon-orange/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-tachyon-teal/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-1 bg-tachyon-orange rounded-full" />
              <span className="font-mono text-xs sm:text-sm font-bold tracking-widest text-tachyon-orange uppercase">
                05 MAJOR EVENTS · ONE CAMPUS
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-tachyon-cream tracking-tight leading-none">
              CHOOSE YOUR BATTLE
            </h2>
            <p className="font-body text-sm sm:text-base text-tachyon-cream/70 max-w-xl mt-3">
              Every arena has its own rules. Bring a team, pick your weapon and follow the orange glow.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/events"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#4d1933] bg-[#220815] text-tachyon-cream hover:border-tachyon-orange font-display text-sm tracking-wider transition-colors"
            >
              <span>ALL 5 BATTLES</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            {/* Hidden Soul 06 near section heading */}
            <CollectibleSoul
              id="soul-06-battles-header"
              type="ghost"
              hint="A combat spirit circles the battle chambers..."
            />
          </div>
        </div>

        {/* Top Grid: 2 Big Cards (Code Mania + Robo Wars) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-6 lg:mb-8">
          {topEvents.map((ev) => renderEventCard(ev, true))}
        </div>

        {/* Bottom Grid: 3 Cards (Cryptic Hunt + War for Trezor + Glitch E-Sports) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {bottomEvents.map((ev) => renderEventCard(ev, false))}
        </div>

      </div>
    </section>
  );
};
