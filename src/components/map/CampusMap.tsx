"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { venuesData, VenueItem } from "@/data/venues";
import { CollectibleSoul } from "@/components/game/CollectibleSoul";
import { useGame } from "@/context/GameContext";
import { soundEngine } from "@/utils/audio";
import {
  MapPin,
  Clock,
  Compass,
  ArrowUpRight,
  Info,
  Calendar,
  X,
  Navigation,
} from "lucide-react";

interface CampusMapProps {
  standalone?: boolean;
}

export const CampusMap: React.FC<CampusMapProps> = ({ standalone = false }) => {
  const { soundEnabled } = useGame();
  const [selectedVenue, setSelectedVenue] = useState<VenueItem>(venuesData[0]);
  const [activePinId, setActivePinId] = useState<string>("central-lawn");

  const handleSelectVenue = (venue: VenueItem) => {
    setSelectedVenue(venue);
    setActivePinId(venue.id);
    if (soundEnabled) {
      soundEngine.playClick();
    }
  };

  return (
    <div className="w-full flex flex-col space-y-6">
      
      {/* Interactive Map Visual Area */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden border-2 border-[#4d1933] shadow-2xl bg-[#0b0307] group">
        
        {/* Map Illustrated Artwork Background */}
        <Image
          src="/assets/maps/campus-halloween-map.webp"
          alt="Tachyon World Illustrated Campus Map"
          fill
          priority
          className="object-cover object-center filter brightness-95 contrast-105 transition-transform duration-700 group-hover:scale-[1.02]"
          sizes="(max-width: 1200px) 100vw, 1200px"
        />

        {/* Ambient Darkened Overlay for Pin Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 pointer-events-none" />

        {/* Map Top HUD Bar */}
        <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
          <div className="bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-[#4d1933] flex items-center gap-2 pointer-events-auto">
            <Compass className="w-4 h-4 text-tachyon-teal animate-spin-slow" />
            <span className="font-mono text-xs text-tachyon-cream font-bold tracking-wider">
              TACHYON FIELD MAP · 2026
            </span>
          </div>

          <div className="bg-tachyon-orange/90 backdrop-blur-md text-tachyon-dark font-mono text-xs font-bold px-3 py-1.5 rounded-lg border border-black/30 pointer-events-auto shadow-md">
            Walkways open 08:30 - 22:00
          </div>
        </div>

        {/* Hidden Soul 09 in map top-right compass corner */}
        <div className="absolute top-16 right-6 z-20">
          <CollectibleSoul
            id="soul-09-map-compass"
            type="bat"
            hint="A scout bat surveys the campus pathways from above..."
          />
        </div>

        {/* SVG Path Connections Between Arenas */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="50%"
            y1="55%"
            x2="38%"
            y2="38%"
            stroke="#ff6a13"
            strokeWidth="2"
            strokeDasharray="4 4"
            opacity="0.6"
          />
          <line
            x1="38%"
            y1="38%"
            x2="22%"
            y2="26%"
            stroke="#ff6a13"
            strokeWidth="2"
            strokeDasharray="4 4"
            opacity="0.6"
          />
          <line
            x1="38%"
            y1="38%"
            x2="74%"
            y2="28%"
            stroke="#19c3a4"
            strokeWidth="2"
            strokeDasharray="4 4"
            opacity="0.6"
          />
          <line
            x1="50%"
            y1="55%"
            x2="24%"
            y2="72%"
            stroke="#e5a93b"
            strokeWidth="2"
            strokeDasharray="4 4"
            opacity="0.6"
          />
          <line
            x1="50%"
            y1="55%"
            x2="78%"
            y2="68%"
            stroke="#19c3a4"
            strokeWidth="2"
            strokeDasharray="4 4"
            opacity="0.6"
          />
        </svg>

        {/* Interactive Glowing Arena Pins */}
        {venuesData.map((venue) => {
          const isSelected = activePinId === venue.id;

          return (
            <button
              key={venue.id}
              onClick={() => handleSelectVenue(venue)}
              type="button"
              style={{
                left: `${venue.mapCoordinates.x}%`,
                top: `${venue.mapCoordinates.y}%`,
              }}
              title={`Click to view events at ${venue.name}`}
              className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 focus:outline-none transition-all duration-300 ${
                isSelected ? "scale-125 z-30" : "scale-100 hover:scale-110 opacity-90"
              }`}
            >
              {/* Outer pulsing beacon ring */}
              <span
                className={`absolute -inset-2 rounded-full opacity-60 animate-ping pointer-events-none ${
                  isSelected ? "bg-tachyon-orange" : "bg-tachyon-teal"
                }`}
              />

              {/* Pin container */}
              <div
                className={`relative px-2.5 py-1 rounded-full border flex items-center gap-1.5 shadow-xl font-mono text-[11px] font-bold ${
                  isSelected
                    ? "bg-tachyon-orange text-tachyon-dark border-white shadow-glowOrange"
                    : "bg-black/85 text-tachyon-cream border-tachyon-teal/70 hover:border-tachyon-orange"
                }`}
              >
                <MapPin className={`w-3 h-3 ${isSelected ? "text-tachyon-dark" : "text-tachyon-orange"}`} />
                <span className="hidden sm:inline whitespace-nowrap">{venue.name}</span>
                <span className="sm:hidden">{venue.code}</span>
              </div>
            </button>
          );
        })}

        {/* Bottom Hint Banner */}
        <div className="absolute bottom-4 left-4 z-20 bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-[#4d1933] text-[11px] font-mono text-tachyon-cream/70 flex items-center gap-2 pointer-events-none">
          <Navigation className="w-3.5 h-3.5 text-tachyon-teal" />
          <span>Tap any arena pin to inspect events & walkways</span>
        </div>
      </div>

      {/* Quick Venue Selector Pills (Mobile Friendly) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {venuesData.map((v) => (
          <button
            key={v.id}
            onClick={() => handleSelectVenue(v)}
            type="button"
            className={`px-3.5 py-2 rounded-xl font-mono text-xs whitespace-nowrap transition-colors border ${
              activePinId === v.id
                ? "bg-tachyon-orange text-tachyon-dark border-tachyon-orange font-bold shadow-glowOrange"
                : "bg-[#220815] text-tachyon-cream/80 border-[#3d1326] hover:border-tachyon-orange/50"
            }`}
          >
            {v.code}. {v.name}
          </button>
        ))}
      </div>

      {/* Active Venue Details Drawer / Panel */}
      {selectedVenue && (
        <div className="bg-[#220815] border-2 border-[#4d1933] rounded-2xl p-6 sm:p-8 relative shadow-xl animate-in fade-in duration-200">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#3d1326]">
            <div>
              <div className="flex items-center gap-2.5 mb-1">
                <span className="bg-tachyon-orange text-tachyon-dark font-mono text-xs font-bold px-2 py-0.5 rounded">
                  ZONE {selectedVenue.code}
                </span>
                <span className="font-mono text-xs text-tachyon-teal tracking-widest uppercase">
                  JUET GUNA CAMPUS
                </span>
              </div>
              <h3 className="font-display text-3xl sm:text-4xl text-tachyon-cream tracking-wide">
                {selectedVenue.name}
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-[#17050f] px-3.5 py-2 rounded-xl border border-[#3d1326] flex items-center gap-2 text-xs font-mono text-tachyon-cream">
                <Clock className="w-4 h-4 text-tachyon-orange" />
                <span>Walkways open: {selectedVenue.walkwaysHours}</span>
              </div>
            </div>
          </div>

          <p className="font-body text-sm sm:text-base text-tachyon-cream/80 mt-4 max-w-3xl">
            {selectedVenue.shortDesc} <span className="text-tachyon-teal/90">{selectedVenue.locationDetails}</span>
          </p>

          {/* Events Hosted At This Venue */}
          <div className="mt-6 pt-4 border-t border-[#3d1326]">
            <h4 className="font-mono text-xs font-bold text-tachyon-orange tracking-widest uppercase mb-3 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-tachyon-orange" />
              <span>EVENTS & SESSIONS HELD HERE ({selectedVenue.eventsHosted.length})</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {selectedVenue.eventsHosted.map((ev, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#17050f] border border-[#3d1326] flex items-center justify-between gap-3 hover:border-tachyon-orange/60 transition-colors"
                >
                  <div>
                    <span className="font-display text-lg text-tachyon-cream block">
                      {ev.name}
                    </span>
                    <span className="font-mono text-xs text-tachyon-teal">{ev.time} IST</span>
                  </div>

                  {ev.slug && (
                    <Link
                      href={`/events/${ev.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-mono text-tachyon-orange hover:underline shrink-0"
                    >
                      <span>Arena Info</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

    </div>
  );
};
