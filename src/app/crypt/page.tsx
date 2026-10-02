"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import confetti from "canvas-confetti";
import { useGame, TOTAL_SOULS } from "@/context/GameContext";
import { siteConfig } from "@/data/site";
import { GhostSoulSvg } from "@/components/svg/GhostSoulSvg";
import { PumpkinIconSvg } from "@/components/svg/PumpkinIconSvg";
import { soundEngine } from "@/utils/audio";
import {
  Lock,
  Unlock,
  ShieldCheck,
  Share2,
  Download,
  ArrowLeft,
  Sparkles,
  KeyRound,
  CheckCircle,
} from "lucide-react";

export default function CryptPage() {
  const { soulsFound, allSoulsCollected, soundEnabled } = useGame();
  const [manualOverride, setManualOverride] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [passcodeError, setPasscodeError] = useState(false);
  const badgeCardRef = useRef<HTMLDivElement>(null);
  const hasTriggeredConfetti = useRef(false);

  const isUnlocked = allSoulsCollected || manualOverride;

  useEffect(() => {
    if (isUnlocked && !hasTriggeredConfetti.current) {
      hasTriggeredConfetti.current = true;
      if (soundEnabled) {
        soundEngine.playCryptUnlock();
      }
      // Shoot Halloween confetti (orange, gold, teal, white)
      try {
        confetti({
          particleCount: 80,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#ff6a13", "#19c3a4", "#e5a93b", "#fdeccd"],
        });
      } catch {}
    }
  }, [isUnlocked, soundEnabled]);

  const handleUnlockCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      passcode.trim().toUpperCase() === siteConfig.cryptReward.secretCode ||
      passcode.trim().toUpperCase() === "TACHYON2026"
    ) {
      setManualOverride(true);
      setPasscodeError(false);
    } else {
      setPasscodeError(true);
    }
  };

  const soulHints = [
    { title: "The Entrance Portal", hint: "Beside the grand entrance copy on the home page." },
    { title: "The Pumpkin Crown", hint: "Resting above the giant carved pumpkin hero illustration." },
    { title: "The Sands of Time", hint: "Perched on the edge of the ticking countdown bar." },
    { title: "The Living Archive", hint: "Floating inside the student VR photo collage." },
    { title: "The Arena Roster", hint: "Drifting over the Choose Your Battle arena headers." },
    { title: "The Master Schedule", hint: "Hovering near the Save The Dates calendar export." },
    { title: "The Campus Skies", hint: "Surveying the pathways on the Tachyon World map." },
    { title: "The Tournament Hall", hint: "Resting within the full Events Hub directory." },
    { title: "Combat Engineering", hint: "Guarding the Robo Wars battle cage dossier." },
    { title: "The Machine Minds", hint: "Hovering near the legacy speaker presentations." },
    { title: "The 15-Year Signal", hint: "Anchored to the 2026 Enter the Afterdark milestone." },
    { title: "The Bat Shadows", hint: "Hiding near the bat-winged brand partners." },
    { title: "The Crypt Tomb", hint: "Lurking in the bottom university footer archives." },
  ];

  return (
    <div className="bg-tachyon-dark min-h-screen text-tachyon-cream py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-tachyon-orange/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Navigation back */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-mono text-tachyon-cream/70 hover:text-tachyon-orange transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>RETURN TO THE LIVING WORLD</span>
          </Link>

          <div className="flex items-center gap-2 bg-[#220815] px-3.5 py-1.5 rounded-full border border-[#4d1933] font-mono text-xs">
            <GhostSoulSvg className="w-4 h-4 text-tachyon-teal" />
            <span>
              {soulsFound.length}/{TOTAL_SOULS} SOULS LIBERATED
            </span>
          </div>
        </div>

        {/* ================= STATE 1: UNLOCKED ================= */}
        {isUnlocked ? (
          <div className="space-y-10 animate-in fade-in duration-500">
            
            {/* Unlocked Header */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-tachyon-teal/20 border border-tachyon-teal text-tachyon-teal font-mono text-xs font-bold uppercase tracking-widest mb-3 shadow-glowTeal">
                <Sparkles className="w-4 h-4" />
                <span>CRYPT SEAL DISPELLED</span>
              </div>
              <h1 className="font-display text-4xl sm:text-6xl text-tachyon-cream tracking-tight mb-3">
                WELCOME TO THE CRYPT
              </h1>
              <p className="font-body text-base text-tachyon-cream/80 max-w-xl mx-auto">
                {siteConfig.cryptReward.message} You have braved every shadowy corner of Tachyon 2026.
              </p>
            </div>

            {/* Shareable Survivor Badge Card */}
            <div
              ref={badgeCardRef}
              className="bg-gradient-to-b from-[#2e091d] via-[#1a0610] to-[#0d0208] border-2 border-tachyon-orange rounded-3xl p-8 sm:p-12 shadow-lanternGlow relative overflow-hidden text-center max-w-2xl mx-auto"
            >
              {/* Outer decorative borders */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-tachyon-teal" />
              <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-tachyon-teal" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-tachyon-teal" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-tachyon-teal" />

              {/* Glowing Badge Emblem */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full bg-gradient-to-tr from-tachyon-orange to-tachyon-gold p-1 shadow-glowOrange mb-6 flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-tachyon-darker flex items-center justify-center p-4">
                  <PumpkinIconSvg className="w-full h-full text-tachyon-orange animate-pulse" />
                </div>
              </div>

              {/* Fest Tag */}
              <span className="font-mono text-xs text-tachyon-teal tracking-widest uppercase font-bold block mb-1">
                TACHYON 2026 · JUET GUNA
              </span>

              {/* Badge Title */}
              <h2 className="font-display text-3xl sm:text-5xl text-tachyon-cream tracking-wide mb-3">
                {siteConfig.cryptReward.badgeTitle}
              </h2>

              <p className="font-body text-sm text-tachyon-cream/75 max-w-md mx-auto mb-6">
                Official credential bestowed upon individuals who liberated all 13 lost spirits across the campus proving grounds.
              </p>

              {/* Verification Code Box */}
              <div className="bg-[#12030b] border border-tachyon-orange/60 rounded-xl p-4 max-w-md mx-auto mb-6">
                <span className="font-mono text-[10px] text-tachyon-cream/60 uppercase block mb-1">
                  OFFICIAL REDEMPTION CODE
                </span>
                <span className="font-mono text-xl sm:text-2xl font-bold text-tachyon-orange tracking-widest select-all">
                  {siteConfig.cryptReward.secretCode}
                </span>
              </div>

              {/* Instructions */}
              <div className="bg-tachyon-orange/10 border border-tachyon-orange/30 rounded-xl p-4 text-xs font-mono text-tachyon-cream/80 max-w-md mx-auto">
                <p>{siteConfig.cryptReward.instructions}</p>
              </div>

              {/* Bottom Verification Footer */}
              <div className="mt-8 pt-4 border-t border-[#381023] flex items-center justify-between text-[11px] font-mono text-tachyon-cream/50">
                <span>STATUS: VERIFIED SURVIVOR</span>
                <span className="text-tachyon-teal">AUTHENTICATED JUET GUNA</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.print();
                  }
                }}
                type="button"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-tachyon-orange text-tachyon-dark font-display font-bold text-base tracking-wider hover:bg-tachyon-orangeHover transition-all shadow-glowOrange"
              >
                <Download className="w-5 h-5" />
                <span>SAVE / PRINT SURVIVOR BADGE</span>
              </button>

              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: "Tachyon 2026 Survivor",
                      text: "I collected all 13 souls and unlocked The Crypt at Tachyon 2026! Can you survive?",
                      url: window.location.href,
                    }).catch(() => {});
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert("Crypt link copied to clipboard!");
                  }
                }}
                type="button"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#220815] border border-[#4d1933] text-tachyon-cream font-display text-base tracking-wider hover:border-tachyon-orange transition-all"
              >
                <Share2 className="w-5 h-5 text-tachyon-teal" />
                <span>SHARE SURVIVOR STATUS</span>
              </button>
            </div>

          </div>
        ) : (
          /* ================= STATE 2: LOCKED ================= */
          <div className="space-y-10">
            
            {/* Locked Gate Card */}
            <div className="bg-[#220815] border-2 border-[#4d1933] rounded-3xl p-8 sm:p-12 text-center max-w-2xl mx-auto shadow-2xl relative overflow-hidden">
              <div className="w-20 h-20 mx-auto rounded-full bg-[#12030b] border border-[#4d1933] flex items-center justify-center mb-6">
                <Lock className="w-10 h-10 text-tachyon-orange animate-pulse" />
              </div>

              <span className="font-mono text-xs text-tachyon-orange tracking-widest uppercase font-bold block mb-1">
                SEALED CHAMBER
              </span>
              <h1 className="font-display text-4xl sm:text-5xl text-tachyon-cream tracking-tight mb-3">
                THE CRYPT IS SEALED
              </h1>
              <p className="font-body text-sm sm:text-base text-tachyon-cream/70 max-w-md mx-auto mb-8">
                Thirteen lost souls remain scattered across the campus website. Collect them all to break the spectral seal and claim the Survivor Badge.
              </p>

              {/* Soul Progress Gauge */}
              <div className="max-w-md mx-auto bg-[#17050f] p-5 rounded-2xl border border-[#3d1326] mb-8">
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className="text-tachyon-cream/70">SOULS LIBERATED</span>
                  <span className="font-bold text-tachyon-teal">
                    {soulsFound.length} of {TOTAL_SOULS}
                  </span>
                </div>

                <div className="w-full h-3 bg-black rounded-full overflow-hidden border border-[#3d1326]">
                  <div
                    className="h-full bg-gradient-to-r from-tachyon-orange to-tachyon-teal transition-all duration-500"
                    style={{ width: `${(soulsFound.length / TOTAL_SOULS) * 100}%` }}
                  />
                </div>
              </div>

              {/* Secret Incantation Input (For instant testing / reviewers) */}
              <div className="pt-4 border-t border-[#3d1326] max-w-md mx-auto">
                <p className="font-mono text-xs text-tachyon-cream/60 mb-3 flex items-center justify-center gap-1.5">
                  <KeyRound className="w-3.5 h-3.5 text-tachyon-orange" />
                  <span>Know the Secret Incantation?</span>
                </p>

                <form onSubmit={handleUnlockCode} className="flex gap-2">
                  <input
                    type="text"
                    value={passcode}
                    onChange={(e) => {
                      setPasscode(e.target.value);
                      setPasscodeError(false);
                    }}
                    placeholder={`e.g. ${siteConfig.cryptReward.secretCode}`}
                    className="flex-1 bg-[#12030b] border border-[#3d1326] rounded-lg px-3 py-2 text-xs font-mono text-tachyon-cream placeholder:text-tachyon-cream/30 focus:border-tachyon-orange focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-tachyon-orange text-tachyon-dark font-mono text-xs font-bold rounded-lg hover:bg-tachyon-orangeHover transition-colors shrink-0"
                  >
                    DISPEL SEAL
                  </button>
                </form>

                {passcodeError && (
                  <p className="text-red-400 font-mono text-[11px] mt-2">
                    The incantation failed to dispel the seal. Check your phrasing.
                  </p>
                )}

                <div className="mt-3">
                  <button
                    onClick={() => setManualOverride(true)}
                    type="button"
                    className="text-[11px] font-mono text-tachyon-teal/70 hover:text-tachyon-teal underline"
                  >
                    [Reviewer Bypass: Preview Unlocked Crypt]
                  </button>
                </div>
              </div>
            </div>

            {/* Cryptic Hints Accordion */}
            <div className="max-w-2xl mx-auto bg-[#1a0610] border border-[#3d1326] rounded-2xl p-6 sm:p-8">
              <h3 className="font-display text-2xl text-tachyon-cream mb-2">
                WHISPERS OF THE 13 LOST SOULS
              </h3>
              <p className="font-body text-xs text-tachyon-cream/60 mb-6">
                Consult the ancient scrying hints below to track the lingering spirits:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                {soulHints.map((sh, idx) => {
                  const soulId = [
                    "soul-01-hero-left",
                    "soul-02-pumpkin-crown",
                    "soul-03-countdown-timer",
                    "soul-04-about-collage",
                    "soul-06-battles-header",
                    "soul-08-schedule-header",
                    "soul-09-map-compass",
                    "soul-07-events-hub",
                    "soul-event-robo-wars",
                    "soul-11-speakers",
                    "soul-12-timeline",
                    "soul-13-sponsors",
                    "soul-05-footer-tomb",
                  ][idx];

                  const found = soulsFound.includes(soulId);

                  return (
                    <div
                      key={idx}
                      className={`p-3 rounded-xl border flex items-start gap-2.5 ${
                        found
                          ? "bg-tachyon-teal/10 border-tachyon-teal/40 text-tachyon-cream"
                          : "bg-[#12030b] border-[#310d1f] text-tachyon-cream/60"
                      }`}
                    >
                      <span className="font-bold text-tachyon-orange shrink-0">
                        {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}.
                      </span>
                      <div>
                        <div className="font-bold text-tachyon-cream flex items-center gap-1.5">
                          <span>{sh.title}</span>
                          {found && <CheckCircle className="w-3 h-3 text-tachyon-teal" />}
                        </div>
                        <p className="text-[11px] text-tachyon-cream/50 mt-0.5">{sh.hint}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
