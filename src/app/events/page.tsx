"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { eventsData } from "@/data/events";
import { siteConfig } from "@/data/site";
import { CollectibleSoul } from "@/components/game/CollectibleSoul";
import { ArrowUpRight, Search, MapPin, Trophy, Users, ShieldAlert } from "lucide-react";

export default function EventsPage() {
  const [selectedTag, setSelectedTag] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["ALL", "ALGORITHMS", "METAL", "CLUES", "STRATEGY", "FPS"];

  const filteredEvents = eventsData.filter((ev) => {
    const matchesTag =
      selectedTag === "ALL" ||
      ev.tags.some((t) => t.toUpperCase().includes(selectedTag));
    const matchesSearch =
      ev.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ev.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ev.venue.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <div className="bg-tachyon-dark min-h-screen text-tachyon-cream py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Breadcrumb & Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-mono text-tachyon-cream/60 mb-2">
            <Link href="/" className="hover:text-tachyon-orange">
              HOME
            </Link>
            <span>/</span>
            <span className="text-tachyon-orange">EVENTS</span>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="font-display text-4xl sm:text-6xl text-tachyon-cream tracking-tight">
                THE 5 ARENAS OF TACHYON
              </h1>
              <p className="font-body text-sm sm:text-base text-tachyon-cream/70 mt-2 max-w-2xl">
                Five high-stakes competitions across algorithms, robotics, cryptic ciphers, market strategy, and competitive LAN gaming. Select your proving ground.
              </p>
            </div>

            {/* Hidden Soul 07 on Events Hub */}
            <CollectibleSoul
              id="soul-07-events-hub"
              type="bat"
              hint="A bat perches atop the arena tournament roster..."
            />
          </div>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#3d1326]">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedTag(cat)}
                type="button"
                className={`px-4 py-2 rounded-lg font-mono text-xs tracking-wider uppercase transition-colors shrink-0 ${
                  selectedTag === cat
                    ? "bg-tachyon-orange text-tachyon-dark font-bold shadow-glowOrange"
                    : "bg-[#220815] text-tachyon-cream/70 border border-[#3d1326] hover:text-tachyon-cream hover:border-tachyon-orange/60"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-tachyon-cream/50 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search event or venue..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#17050f] border border-[#3d1326] rounded-lg pl-10 pr-4 py-2 text-sm text-tachyon-cream placeholder:text-tachyon-cream/40 focus:border-tachyon-orange focus:outline-none font-body"
            />
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((ev) => (
            <div
              key={ev.id}
              className="bg-[#220815] border border-[#3d1326] rounded-2xl overflow-hidden flex flex-col justify-between hover:border-tachyon-orange transition-all duration-300 group hover:shadow-glowOrange"
            >
              <div className="relative w-full h-64 bg-[#12030b]">
                <Image
                  src={ev.poster}
                  alt={ev.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#220815] via-transparent to-black/30 pointer-events-none" />

                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm px-2.5 py-1 rounded border border-tachyon-orange/60">
                  <span className="font-mono text-xs font-bold text-tachyon-orange">
                    {ev.level}
                  </span>
                </div>

                <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-sm px-2.5 py-1 rounded border border-tachyon-teal/50 flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-tachyon-teal" />
                  <span className="font-mono text-[11px] text-tachyon-cream">
                    {ev.venue}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="font-mono text-[10px] text-tachyon-orange tracking-widest uppercase font-bold mb-1">
                    {ev.tags.join(" · ")}
                  </div>
                  <h2 className="font-display text-3xl text-tachyon-cream tracking-wide group-hover:text-tachyon-orange transition-colors mb-2">
                    {ev.name}
                  </h2>
                  <p className="font-body text-xs text-tachyon-cream/70 line-clamp-3 mb-4">
                    {ev.about[0]}
                  </p>

                  <div className="grid grid-cols-3 gap-2 py-3 border-y border-[#3d1326] bg-[#1a0610]/60 rounded-lg px-2 text-center mb-5">
                    <div>
                      <span className="font-mono text-[9px] text-tachyon-cream/50 uppercase block">
                        DIFF
                      </span>
                      <span className="font-mono text-xs font-bold text-tachyon-teal">
                        {ev.difficulty}
                      </span>
                    </div>
                    <div className="border-x border-[#3d1326]">
                      <span className="font-mono text-[9px] text-tachyon-cream/50 uppercase block">
                        TEAM
                      </span>
                      <span className="font-mono text-xs font-bold text-tachyon-cream">
                        {ev.teamSize}
                      </span>
                    </div>
                    <div>
                      <span className="font-mono text-[9px] text-tachyon-cream/50 uppercase block">
                        PRIZE
                      </span>
                      <span className="font-mono text-xs font-bold text-tachyon-orange">
                        {ev.prizePool}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <Link
                    href={`/events/${ev.slug}`}
                    className="flex-1 py-2.5 text-center rounded-lg border border-[#4d1933] bg-[#1a0610] text-tachyon-cream hover:border-tachyon-orange font-display text-sm tracking-wider transition-colors"
                  >
                    DETAILS & RULES
                  </Link>

                  <a
                    href={siteConfig.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-lg bg-tachyon-orange text-tachyon-dark font-display font-bold text-sm tracking-wider hover:bg-tachyon-orangeHover transition-colors shadow-glowOrange flex items-center gap-1"
                  >
                    <span>REGISTER</span>
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-20 bg-[#220815] rounded-2xl border border-[#3d1326]">
            <p className="font-display text-2xl text-tachyon-cream mb-2">NO ARENAS FOUND</p>
            <p className="font-body text-sm text-tachyon-cream/60">
              Try adjusting your search terms or category filter.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
