"use client";

import React, { useState, useEffect, useRef } from "react";
import { useGame } from "@/context/GameContext";
import { LanternSvg } from "@/components/svg/LanternSvg";
import { soundEngine } from "@/utils/audio";
import { Flame } from "lucide-react";

export const LanternIntro: React.FC = () => {
  const { introCompleted, completeIntro, soundEnabled, classicMode } = useGame();
  const [holding, setHolding] = useState(false);
  const [progress, setProgress] = useState(0); // 0 to 100
  const [isIgnited, setIsIgnited] = useState(false);
  const [portalExpanding, setPortalExpanding] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleStartHold = () => {
    if (isIgnited) return;
    setHolding(true);
  };

  const handleEndHold = () => {
    if (isIgnited) return;
    setHolding(false);
  };

  // Animate progress on hold or quick tap
  useEffect(() => {
    if (holding && !isIgnited) {
      timerRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timerRef.current!);
            triggerIgnite();
            return 100;
          }
          return prev + 5;
        });
      }, 35);
    } else if (!holding && progress < 100 && !isIgnited) {
      // Decay back if released early
      timerRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev <= 0) {
            clearInterval(timerRef.current!);
            return 0;
          }
          return prev - 8;
        });
      }, 25);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [holding, isIgnited, progress]);

  const triggerIgnite = () => {
    setIsIgnited(true);
    if (soundEnabled) {
      soundEngine.playLanternIgnite();
    }
    // Expand portal and finish intro
    setTimeout(() => {
      setPortalExpanding(true);
    }, 400);

    setTimeout(() => {
      completeIntro();
    }, 1200);
  };

  const handleSkip = () => {
    completeIntro();
  };

  // If user prefers classic mode or already completed, don't show
  if (introCompleted || classicMode) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0206] select-none transition-opacity duration-700 ${
        portalExpanding ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Background vignette & fog */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,106,19,0.12)_0%,rgba(10,2,6,0.98)_70%)] pointer-events-none" />

      {/* Skip button in top right */}
      <button
        onClick={handleSkip}
        type="button"
        className="absolute top-6 right-6 z-50 px-4 py-2 rounded-full border border-tachyon-cream/20 bg-tachyon-dark/70 text-tachyon-cream/70 hover:text-tachyon-orange hover:border-tachyon-orange text-xs font-mono tracking-widest uppercase transition-colors"
      >
        SKIP INTRO ↗
      </button>

      <div className="relative z-10 flex flex-col items-center max-w-md px-6 text-center">
        {/* Fest Identification */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-8 h-px bg-tachyon-orange" />
          <span className="text-tachyon-orange font-mono text-xs tracking-widest uppercase">
            TACHYON 2026 · JUET GUNA
          </span>
          <span className="w-8 h-px bg-tachyon-orange" />
        </div>

        <h1 className="font-display text-4xl sm:text-5xl text-tachyon-cream mb-2 tracking-wider">
          THE AFTERDARK CALLS
        </h1>
        <p className="text-sm font-body text-tachyon-cream/70 mb-8 max-w-sm">
          Where monsters meet machines. Awaken the ceremonial lantern to open the portal.
        </p>

        {/* Interactive Lantern Button */}
        <div
          onMouseDown={handleStartHold}
          onMouseUp={handleEndHold}
          onTouchStart={handleStartHold}
          onTouchEnd={handleEndHold}
          onClick={() => {
            // Support single click too for convenience
            if (!isIgnited && progress < 40) {
              setProgress(100);
              triggerIgnite();
            }
          }}
          className="relative cursor-pointer group flex flex-col items-center p-6 rounded-2xl transition-transform active:scale-95"
          role="button"
          tabIndex={0}
          aria-label="Tap and hold to light the lantern"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              triggerIgnite();
            }
          }}
        >
          {/* Light radial pulse behind lantern */}
          <div
            className="absolute inset-0 rounded-full bg-tachyon-orange/20 blur-3xl transition-all duration-300 pointer-events-none"
            style={{
              transform: `scale(${1 + (progress / 100) * 1.5})`,
              opacity: isIgnited ? 0.9 : 0.15 + (progress / 100) * 0.7,
            }}
          />

          <LanternSvg
            className="w-28 h-40 sm:w-36 sm:h-48 drop-shadow-2xl transition-transform duration-300 group-hover:scale-105"
            isLit={isIgnited || progress > 50}
            glowIntensity={isIgnited ? 1 : progress / 100}
          />

          {/* Circular Progress Ring */}
          <div className="mt-6 flex flex-col items-center gap-2">
            <div className="w-48 h-2 bg-tachyon-maroon rounded-full overflow-hidden border border-[#4d1a33]">
              <div
                className="h-full bg-gradient-to-r from-tachyon-orange to-tachyon-teal transition-all duration-75"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-tachyon-cream/80 tracking-widest mt-1">
              <Flame className="w-3.5 h-3.5 text-tachyon-orange animate-pulse" />
              <span>{isIgnited ? "PORTAL OPENING..." : "PRESS & HOLD TO IGNITE"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
