"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { soundEngine } from "@/utils/audio";

export const TOTAL_SOULS = 13;

interface GameContextType {
  soulsFound: string[];
  totalSouls: number;
  collectSoul: (id: string) => boolean;
  isSoulCollected: (id: string) => boolean;
  allSoulsCollected: boolean;
  soundEnabled: boolean;
  toggleSound: () => void;
  classicMode: boolean;
  toggleClassicMode: () => void;
  introCompleted: boolean;
  completeIntro: () => void;
  myPlan: string[];
  togglePlanItem: (id: string) => void;
  isInPlan: (id: string) => boolean;
  activeNotification: string | null;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [soulsFound, setSoulsFound] = useState<string[]>([]);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false);
  const [classicMode, setClassicMode] = useState<boolean>(false);
  const [introCompleted, setIntroCompleted] = useState<boolean>(true); // default true for SSR, hydrated in useEffect
  const [myPlan, setMyPlan] = useState<string[]>([]);
  const [activeNotification, setActiveNotification] = useState<string | null>(null);

  // Hydrate from storage on client mount
  useEffect(() => {
    try {
      const storedSouls = localStorage.getItem("tachyon_souls");
      if (storedSouls) {
        setSoulsFound(JSON.parse(storedSouls));
      }

      const storedSound = localStorage.getItem("tachyon_sound");
      if (storedSound !== null) {
        setSoundEnabled(JSON.parse(storedSound));
      }

      const storedClassic = localStorage.getItem("tachyon_classic");
      if (storedClassic !== null) {
        const isClassic = JSON.parse(storedClassic);
        setClassicMode(isClassic);
        if (isClassic) {
          document.documentElement.classList.add("classic-view");
        }
      }

      const storedPlan = localStorage.getItem("tachyon_my_plan");
      if (storedPlan) {
        setMyPlan(JSON.parse(storedPlan));
      }

      const sessionIntro = sessionStorage.getItem("tachyon_intro_done");
      if (!sessionIntro) {
        setIntroCompleted(false);
      } else {
        setIntroCompleted(true);
      }
    } catch {
      // Fallback for private browsing
    }
  }, []);

  const collectSoul = (id: string): boolean => {
    if (soulsFound.includes(id)) return false;

    const newSouls = [...soulsFound, id];
    setSoulsFound(newSouls);
    try {
      localStorage.setItem("tachyon_souls", JSON.stringify(newSouls));
    } catch {}

    if (soundEnabled) {
      soundEngine.playSoulCollect();
    }

    // Show quick notification
    setActiveNotification(`Soul Captured! (${newSouls.length}/${TOTAL_SOULS})`);
    setTimeout(() => {
      setActiveNotification(null);
    }, 3000);

    return true;
  };

  const isSoulCollected = (id: string) => soulsFound.includes(id);

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    try {
      localStorage.setItem("tachyon_sound", JSON.stringify(next));
    } catch {}
    if (next) {
      soundEngine.playClick();
    }
  };

  const toggleClassicMode = () => {
    const next = !classicMode;
    setClassicMode(next);
    try {
      localStorage.setItem("tachyon_classic", JSON.stringify(next));
    } catch {}
    if (next) {
      document.documentElement.classList.add("classic-view");
    } else {
      document.documentElement.classList.remove("classic-view");
    }
  };

  const completeIntro = () => {
    setIntroCompleted(true);
    try {
      sessionStorage.setItem("tachyon_intro_done", "true");
    } catch {}
  };

  const togglePlanItem = (id: string) => {
    let updated: string[];
    if (myPlan.includes(id)) {
      updated = myPlan.filter((itemId) => itemId !== id);
    } else {
      updated = [...myPlan, id];
      if (soundEnabled) {
        soundEngine.playClick();
      }
    }
    setMyPlan(updated);
    try {
      localStorage.setItem("tachyon_my_plan", JSON.stringify(updated));
    } catch {}
  };

  const isInPlan = (id: string) => myPlan.includes(id);

  const allSoulsCollected = soulsFound.length >= TOTAL_SOULS;

  return (
    <GameContext.Provider
      value={{
        soulsFound,
        totalSouls: TOTAL_SOULS,
        collectSoul,
        isSoulCollected,
        allSoulsCollected,
        soundEnabled,
        toggleSound,
        classicMode,
        toggleClassicMode,
        introCompleted,
        completeIntro,
        myPlan,
        togglePlanItem,
        isInPlan,
        activeNotification,
      }}
    >
      {children}
      {/* Toast Notification for Game Actions */}
      {activeNotification && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-tachyon-darker border-2 border-tachyon-orange text-tachyon-cream px-5 py-3 rounded-lg shadow-glowOrange animate-bounce font-mono text-sm tracking-wide"
        >
          <span className="text-xl">👻</span>
          <span>{activeNotification}</span>
        </div>
      )}
    </GameContext.Provider>
  );
};

export const useGame = (): GameContextType => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
};
