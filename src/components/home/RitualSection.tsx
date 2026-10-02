"use client";

import React, { useState } from "react";
import Link from "next/link";
import { scheduleData, ScheduleItem } from "@/data/schedule";
import { useGame } from "@/context/GameContext";
import { generateIcsForItems, downloadIcsFile } from "@/utils/calendar";
import { CollectibleSoul } from "@/components/game/CollectibleSoul";
import {
  Calendar,
  Bookmark,
  BookmarkCheck,
  MapPin,
  Clock,
  Download,
  Filter,
  CheckCircle2,
} from "lucide-react";

export const RitualSection: React.FC = () => {
  const { isInPlan, togglePlanItem, myPlan } = useGame();
  const [filterMyPlan, setFilterMyPlan] = useState(false);
  const [activeDayTab, setActiveDayTab] = useState<1 | 2 | 3>(1);

  const handleExportAll = () => {
    const allItems = scheduleData.flatMap((d) => d.items);
    const ics = generateIcsForItems(allItems, "Tachyon 2026 Schedule");
    downloadIcsFile("tachyon-2026-schedule.ics", ics);
  };

  const handleExportItem = (item: ScheduleItem) => {
    const ics = generateIcsForItems([item], item.title);
    downloadIcsFile(`${item.id}-tachyon2026.ics`, ics);
  };

  const renderScheduleItem = (item: ScheduleItem) => {
    const inPlan = isInPlan(item.id);

    return (
      <div
        key={item.id}
        className={`p-4 rounded-xl border transition-all duration-200 flex flex-col justify-between gap-3 ${
          inPlan
            ? "bg-[#280c1d] border-tachyon-orange/80 shadow-[0_0_12px_rgba(255,106,19,0.2)]"
            : "bg-[#17050f] border-[#381023] hover:border-tachyon-orange/40"
        }`}
      >
        <div className="flex items-start justify-between gap-2">
          {/* Time & Title */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-display text-xl text-tachyon-cream tracking-wider">
                {item.time}
              </span>
              <span className="font-mono text-[10px] text-tachyon-teal uppercase">
                IST
              </span>
            </div>

            <h4 className="font-display text-lg text-white leading-tight">
              {item.eventSlug ? (
                <Link
                  href={`/events/${item.eventSlug}`}
                  className="hover:text-tachyon-orange transition-colors"
                >
                  {item.title}
                </Link>
              ) : (
                item.title
              )}
            </h4>

            {/* Venue */}
            <div className="flex items-center gap-1.5 text-xs font-mono text-tachyon-cream/70 mt-1.5">
              <MapPin className="w-3.5 h-3.5 text-tachyon-orange shrink-0" />
              <span>{item.venue}</span>
            </div>
          </div>

          {/* Badge */}
          <div className="flex flex-col items-end gap-2">
            <span className="bg-black/60 border border-[#4d1933] px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-widest text-tachyon-orange uppercase">
              {item.badge}
            </span>
          </div>
        </div>

        {/* Action Row: Add to Plan & .ICS single export */}
        <div className="pt-2 border-t border-[#310c1f] flex items-center justify-between text-xs font-mono">
          <button
            onClick={() => togglePlanItem(item.id)}
            type="button"
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded transition-colors ${
              inPlan
                ? "bg-tachyon-orange text-tachyon-dark font-bold"
                : "text-tachyon-cream/70 hover:text-tachyon-cream hover:bg-black/40"
            }`}
          >
            {inPlan ? (
              <>
                <BookmarkCheck className="w-3.5 h-3.5" />
                <span>IN PLAN</span>
              </>
            ) : (
              <>
                <Bookmark className="w-3.5 h-3.5" />
                <span>ADD TO PLAN</span>
              </>
            )}
          </button>

          <button
            onClick={() => handleExportItem(item)}
            type="button"
            title="Download .ics for this session"
            className="text-tachyon-cream/40 hover:text-tachyon-teal transition-colors p-1"
          >
            <Download className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <section id="schedule" className="bg-tachyon-dark text-tachyon-cream py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-[#3d1326]">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-1 bg-tachyon-orange rounded-full" />
              <span className="font-mono text-xs sm:text-sm font-bold tracking-widest text-tachyon-orange uppercase">
                THREE DAYS · ZERO DOWNTIME
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-tachyon-cream tracking-tight leading-none">
              THE RITUAL, HOUR BY HOUR
            </h2>
            <p className="font-body text-sm sm:text-base text-tachyon-cream/70 max-w-xl mt-3">
              A scannable field guide to the main stage, competition arenas and after-dark moments.
            </p>
          </div>

          {/* Action buttons: Save the Dates & My Plan Filter */}
          <div className="flex items-center flex-wrap gap-3">
            <button
              onClick={() => setFilterMyPlan(!filterMyPlan)}
              type="button"
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border text-xs sm:text-sm font-mono tracking-wider uppercase transition-colors ${
                filterMyPlan
                  ? "bg-tachyon-teal text-tachyon-dark border-tachyon-teal font-bold shadow-glowTeal"
                  : "bg-[#220815] border-[#4d1933] text-tachyon-cream hover:border-tachyon-teal"
              }`}
            >
              <Bookmark className="w-4 h-4" />
              <span>MY QUEST PLAN ({myPlan.length})</span>
            </button>

            <button
              onClick={handleExportAll}
              type="button"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-tachyon-maroon hover:bg-tachyon-maroon/80 border border-[#5d1c3c] text-tachyon-cream font-display text-sm tracking-wider uppercase transition-colors hover:border-tachyon-orange"
            >
              <Calendar className="w-4 h-4 text-tachyon-orange" />
              <span>SAVE THE DATES</span>
            </button>

            {/* Hidden Soul 08 */}
            <CollectibleSoul
              id="soul-08-schedule-header"
              type="ghost"
              hint="An ancient temporal spirit tracks the rituals..."
            />
          </div>
        </div>

        {/* Mobile Day Tabs */}
        <div className="flex lg:hidden items-center gap-2 mb-6 border-b border-[#3d1326] pb-3 overflow-x-auto">
          {scheduleData.map((day) => (
            <button
              key={day.dayNumber}
              onClick={() => setActiveDayTab(day.dayNumber)}
              type="button"
              className={`px-4 py-2 rounded-lg font-mono text-xs uppercase tracking-wider whitespace-nowrap transition-colors ${
                activeDayTab === day.dayNumber
                  ? "bg-tachyon-orange text-tachyon-dark font-bold"
                  : "bg-[#1f0613] text-tachyon-cream/70 border border-[#3d1326]"
              }`}
            >
              DAY {day.dayNumber} · {day.dateFormatted}
            </button>
          ))}
        </div>

        {/* Desktop 3-Column Grid / Mobile Active Tab View */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {scheduleData.map((day) => {
            const itemsToDisplay = filterMyPlan
              ? day.items.filter((item) => isInPlan(item.id))
              : day.items;

            return (
              <div
                key={day.dayNumber}
                className={`bg-[#220815] border border-[#3d1326] rounded-2xl overflow-hidden flex flex-col ${
                  activeDayTab === day.dayNumber ? "block" : "hidden lg:flex"
                }`}
              >
                {/* Orange Banner Header */}
                <div className="bg-tachyon-orange text-tachyon-dark p-5 sm:p-6 flex items-center justify-between">
                  <div>
                    <span className="font-mono text-xs font-bold uppercase tracking-widest block opacity-80">
                      DAY {day.dayNumber === 1 ? "ONE" : day.dayNumber === 2 ? "TWO" : "THREE"}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl text-black tracking-wide leading-none mt-1">
                      {day.themeTitle}
                    </h3>
                  </div>

                  <div className="text-right">
                    <span className="font-display text-2xl sm:text-3xl text-black font-bold leading-none block">
                      {day.dateFormatted}
                    </span>
                    <span className="font-mono text-[10px] text-black/75 uppercase tracking-widest">
                      2026
                    </span>
                  </div>
                </div>

                {/* Day Items List */}
                <div className="p-4 sm:p-5 space-y-4 flex-1">
                  {itemsToDisplay.length > 0 ? (
                    itemsToDisplay.map((item) => renderScheduleItem(item))
                  ) : (
                    <div className="text-center py-12 px-4 text-xs font-mono text-tachyon-cream/50 bg-[#17050f] rounded-xl border border-dashed border-[#381023]">
                      No events added to your Quest Plan for this day yet.
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
