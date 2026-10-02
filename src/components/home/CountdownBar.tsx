"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/data/site";
import { CollectibleSoul } from "@/components/game/CollectibleSoul";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

export const CountdownBar: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 27,
    hours: 13,
    minutes: 46,
    seconds: 9,
    isExpired: false,
  });

  useEffect(() => {
    const targetDate = new Date(siteConfig.startDateISO).getTime();

    const calculate = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isExpired: false });
    };

    calculate();
    const interval = setInterval(calculate, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatNum = (n: number, minDigits = 2) => {
    return n.toString().padStart(minDigits, "0");
  };

  return (
    <section className="bg-tachyon-orange text-tachyon-darker py-6 sm:py-8 px-4 sm:px-6 lg:px-8 border-y-2 border-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Title Label */}
        <div className="flex flex-col text-center md:text-left">
          <span className="font-mono text-xs sm:text-sm font-bold tracking-widest uppercase text-black/80">
            THE PORTAL OPENS SOON
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-black tracking-tight leading-none">
            TACHYON BEGINS IN
          </h2>
        </div>

        {/* Right Time Units: 4 Black Cards */}
        <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 relative">
          
          {/* Days */}
          <div className="w-18 sm:w-24 md:w-28 bg-black rounded-lg p-2 sm:p-3 text-center shadow-lg border border-black/30 flex flex-col justify-center">
            <span className="font-display text-3xl sm:text-4xl md:text-5xl text-tachyon-cream leading-none tracking-tight">
              {formatNum(timeLeft.days, 3)}
            </span>
            <span className="font-mono text-[9px] sm:text-[11px] font-bold tracking-widest text-tachyon-cream/70 uppercase mt-1">
              DAYS
            </span>
          </div>

          {/* Hours */}
          <div className="w-18 sm:w-24 md:w-28 bg-black rounded-lg p-2 sm:p-3 text-center shadow-lg border border-black/30 flex flex-col justify-center">
            <span className="font-display text-3xl sm:text-4xl md:text-5xl text-tachyon-cream leading-none tracking-tight">
              {formatNum(timeLeft.hours, 2)}
            </span>
            <span className="font-mono text-[9px] sm:text-[11px] font-bold tracking-widest text-tachyon-cream/70 uppercase mt-1">
              HOURS
            </span>
          </div>

          {/* Minutes */}
          <div className="w-18 sm:w-24 md:w-28 bg-black rounded-lg p-2 sm:p-3 text-center shadow-lg border border-black/30 flex flex-col justify-center">
            <span className="font-display text-3xl sm:text-4xl md:text-5xl text-tachyon-cream leading-none tracking-tight">
              {formatNum(timeLeft.minutes, 2)}
            </span>
            <span className="font-mono text-[9px] sm:text-[11px] font-bold tracking-widest text-tachyon-cream/70 uppercase mt-1">
              MINUTES
            </span>
          </div>

          {/* Seconds */}
          <div className="w-18 sm:w-24 md:w-28 bg-black rounded-lg p-2 sm:p-3 text-center shadow-lg border border-black/30 flex flex-col justify-center">
            <span className="font-display text-3xl sm:text-4xl md:text-5xl text-tachyon-orange leading-none tracking-tight">
              {formatNum(timeLeft.seconds, 2)}
            </span>
            <span className="font-mono text-[9px] sm:text-[11px] font-bold tracking-widest text-tachyon-cream/70 uppercase mt-1">
              SECONDS
            </span>
          </div>

          {/* Hidden Soul 03 tucked near seconds counter */}
          <div className="hidden sm:block absolute -right-8 -top-3">
            <CollectibleSoul
              id="soul-03-countdown-timer"
              type="bat"
              hint="A bat rests upon the ticking sands of time..."
            />
          </div>

        </div>

      </div>
    </section>
  );
};
