"use client";

import React, { useState } from "react";
import { useGame } from "@/context/GameContext";
import { GhostSoulSvg } from "@/components/svg/GhostSoulSvg";
import { BatSvg, PumpkinIconSvg } from "@/components/svg/BatSvg";

interface CollectibleSoulProps {
  id: string;
  type?: "ghost" | "bat" | "pumpkin";
  className?: string;
  hint?: string;
}

export const CollectibleSoul: React.FC<CollectibleSoulProps> = ({
  id,
  type = "ghost",
  className = "",
  hint = "A whispering soul wanders in the shadows...",
}) => {
  const { isSoulCollected, collectSoul, classicMode } = useGame();
  const [popping, setPopping] = useState(false);
  const collected = isSoulCollected(id);

  if (classicMode) return null;

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (collected) return;
    setPopping(true);
    collectSoul(id);
    setTimeout(() => {
      setPopping(false);
    }, 1200);
  };

  if (collected && !popping) {
    // Ethereal subtle mark showing a soul was freed here
    return (
      <div
        className={`inline-flex items-center justify-center opacity-30 pointer-events-none select-none ${className}`}
        title="Soul freed!"
      >
        <span className="text-tachyon-teal font-mono text-[10px]">✦</span>
      </div>
    );
  }

  return (
    <div className={`relative inline-block ${className}`}>
      <button
        onClick={handleClick}
        type="button"
        title={hint}
        aria-label="Collect hidden soul"
        className={`soul-collectible relative cursor-pointer group transition-all duration-300 hover:scale-125 focus:outline-none ${
          popping ? "scale-150 opacity-0 transition-all duration-700" : "animate-float"
        }`}
      >
        {type === "ghost" && (
          <GhostSoulSvg className="w-5 h-5 sm:w-6 sm:h-6 text-tachyon-teal drop-shadow-[0_0_8px_rgba(25,195,164,0.7)] group-hover:drop-shadow-[0_0_12px_rgba(25,195,164,1)]" />
        )}
        {type === "bat" && (
          <BatSvg className="w-5 h-5 sm:w-6 sm:h-6 text-tachyon-orange drop-shadow-[0_0_8px_rgba(255,106,19,0.7)]" />
        )}
        {type === "pumpkin" && (
          <PumpkinIconSvg className="w-5 h-5 sm:w-6 sm:h-6 drop-shadow-[0_0_8px_rgba(255,106,19,0.8)]" />
        )}

        {/* Floating "+1 Soul" popup upon clicking */}
        {popping && (
          <span className="absolute -top-6 left-1/2 -translate-x-1/2 font-mono text-xs font-bold text-tachyon-teal whitespace-nowrap animate-bounce drop-shadow">
            +1 SOUL!
          </span>
        )}
      </button>
    </div>
  );
};
