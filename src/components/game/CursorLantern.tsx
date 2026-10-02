"use client";

import React, { useEffect, useState } from "react";
import { useGame } from "@/context/GameContext";

export const CursorLantern: React.FC = () => {
  const { classicMode } = useGame();
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const [isPointerDevice, setIsPointerDevice] = useState(false);

  useEffect(() => {
    // Only enable for fine pointer devices (desktop mouse), not touchscreens
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    setIsPointerDevice(hasFinePointer);

    if (!hasFinePointer) return;

    const handlePointerMove = (e: PointerEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  if (classicMode || !isPointerDevice || !pos) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(255, 106, 19, 0.08) 0%, rgba(25, 195, 164, 0.02) 40%, transparent 80%)`,
      }}
    />
  );
};
