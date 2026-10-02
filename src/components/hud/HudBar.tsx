"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useGame, TOTAL_SOULS } from "@/context/GameContext";
import { siteConfig } from "@/data/site";
import { GhostSoulSvg } from "@/components/svg/GhostSoulSvg";
import { PumpkinIconSvg } from "@/components/svg/PumpkinIconSvg";
import { Volume2, VolumeX, Eye, EyeOff, Menu, X, ArrowUpRight } from "lucide-react";

export const HudBar: React.FC = () => {
  const pathname = usePathname();
  const { soulsFound, soundEnabled, toggleSound, classicMode, toggleClassicMode, allSoulsCollected } = useGame();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "EVENTS", href: "/#events" },
    { name: "SCHEDULE", href: "/#schedule" },
    { name: "TACHYON WORLD", href: "/#map" },
    { name: "SPEAKERS", href: "/#speakers" },
    { name: "ABOUT", href: "/#about" },
    { name: "SPONSORS", href: "/#sponsors" },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-tachyon-dark/95 backdrop-blur-md border-b border-[#3d1326] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-4">
          
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-tachyon-orange"
            aria-label="Tachyon 2026 Home"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-tachyon-orange flex items-center justify-center p-1.5 shadow-glowOrange transition-transform group-hover:scale-105">
              <PumpkinIconSvg className="w-full h-full text-tachyon-dark" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-2xl sm:text-3xl text-tachyon-cream tracking-wider leading-none group-hover:text-tachyon-orange transition-colors">
                TACHYON
              </span>
              <span className="font-mono text-[9px] sm:text-[10px] text-tachyon-teal tracking-widest font-semibold uppercase leading-tight">
                TECHFEST 2026
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-display text-sm tracking-widest uppercase transition-colors hover:text-tachyon-orange relative py-1 ${
                    isActive ? "text-tachyon-orange" : "text-tachyon-cream/90"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-tachyon-orange shadow-glowOrange" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Game Layer HUD Controls + Register CTA */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Souls Counter Badge */}
            <Link
              href="/crypt"
              title={
                allSoulsCollected
                  ? "All 13 souls collected! Click to enter The Crypt"
                  : `Collect all 13 lost souls to unlock The Crypt (${soulsFound.length}/${TOTAL_SOULS})`
              }
              className={`flex items-center gap-2 px-2.5 sm:px-3.5 py-1.5 rounded-full border transition-all ${
                allSoulsCollected
                  ? "bg-tachyon-teal/20 border-tachyon-teal text-tachyon-teal shadow-glowTeal animate-pulse"
                  : "bg-tachyon-maroon/60 border-tachyon-orange/40 text-tachyon-cream hover:border-tachyon-orange"
              }`}
            >
              <GhostSoulSvg className="w-4 h-4 sm:w-5 sm:h-5" glow={allSoulsCollected} />
              <span className="font-mono text-xs sm:text-sm font-bold tracking-tight">
                {soulsFound.length}/{TOTAL_SOULS}
              </span>
            </Link>

            {/* Spooky Sound Toggle */}
            <button
              onClick={toggleSound}
              type="button"
              title={soundEnabled ? "Mute Spooky Audio" : "Enable Spooky Audio"}
              aria-label={soundEnabled ? "Mute Spooky Audio" : "Enable Spooky Audio"}
              className="p-2 sm:p-2.5 rounded-full bg-tachyon-maroon/50 border border-[#4d1a33] text-tachyon-cream/80 hover:text-tachyon-orange hover:border-tachyon-orange transition-colors"
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4 text-tachyon-orange" />
              ) : (
                <VolumeX className="w-4 h-4" />
              )}
            </button>

            {/* Classic View Toggle */}
            <button
              onClick={toggleClassicMode}
              type="button"
              title={classicMode ? "Enable Game Effects" : "Switch to Classic Normal Website"}
              aria-label={classicMode ? "Enable Game Effects" : "Switch to Classic Normal Website"}
              className={`hidden md:flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border text-xs font-mono transition-colors ${
                classicMode
                  ? "bg-tachyon-cream text-tachyon-dark border-tachyon-cream font-bold"
                  : "bg-tachyon-maroon/50 border-[#4d1a33] text-tachyon-cream/70 hover:text-tachyon-cream"
              }`}
            >
              {classicMode ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
              <span>{classicMode ? "CLASSIC" : "GAME ON"}</span>
            </button>

            {/* Register CTA Button */}
            <a
              href={siteConfig.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 bg-tachyon-orange hover:bg-tachyon-orangeHover text-tachyon-dark font-display font-bold text-sm tracking-wider px-4 py-2 rounded-md shadow-glowOrange transition-all hover:scale-105 active:scale-95"
            >
              <span>REGISTER NOW</span>
              <ArrowUpRight className="w-4 h-4 stroke-[3]" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
              className="lg:hidden p-2 rounded-md bg-tachyon-maroon border border-[#4d1a33] text-tachyon-cream hover:text-tachyon-orange"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-tachyon-darker border-b border-[#3d1326] px-5 py-6 space-y-4 animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display text-lg tracking-widest uppercase text-tachyon-cream hover:text-tachyon-orange py-1"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="pt-4 border-t border-[#3d1326] flex flex-col gap-3">
              <button
                onClick={toggleClassicMode}
                className="flex items-center justify-between w-full px-4 py-2.5 rounded-lg bg-tachyon-maroon border border-[#4d1a33] text-sm font-mono text-tachyon-cream"
              >
                <span>VISUAL MODE</span>
                <span className="text-tachyon-orange font-bold">
                  {classicMode ? "CLASSIC MODE" : "GAME WORLD"}
                </span>
              </button>

              <a
                href={siteConfig.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 bg-tachyon-orange text-tachyon-dark text-center font-display font-bold text-base tracking-wider rounded-md shadow-glowOrange flex items-center justify-center gap-2"
              >
                <span>REGISTER NOW</span>
                <ArrowUpRight className="w-4 h-4 stroke-[3]" />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
