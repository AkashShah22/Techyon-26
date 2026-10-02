import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { eventsData } from "@/data/events";
import { ArrowLeft, ArrowUpRight, ShieldCheck, Ticket, Users, AlertCircle } from "lucide-react";

export default function RegisterPage() {
  return (
    <div className="bg-tachyon-dark min-h-screen text-tachyon-cream py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Navigation */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-mono text-tachyon-cream/70 hover:text-tachyon-orange transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO HOME</span>
          </Link>
        </div>

        {/* Header */}
        <div className="bg-[#220815] border border-[#3d1326] rounded-3xl p-8 sm:p-12 mb-10 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-tachyon-orange/10 rounded-full blur-[100px] pointer-events-none" />

          <span className="font-mono text-xs text-tachyon-orange tracking-widest uppercase font-bold block mb-2">
            OFFICIAL REGISTRATION PORTAL
          </span>
          <h1 className="font-display text-4xl sm:text-6xl text-tachyon-cream tracking-tight mb-4">
            ENTER TACHYON 2026
          </h1>
          <p className="font-body text-base text-tachyon-cream/75 max-w-xl mx-auto mb-8">
            Select your battles, configure your squad roster, and reserve your place across the 5 arenas of JUET Guna.
          </p>

          <a
            href={siteConfig.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-tachyon-orange hover:bg-tachyon-orangeHover text-tachyon-dark font-display font-bold text-lg sm:text-xl tracking-wider px-8 py-4 rounded-xl shadow-glowOrange transition-all hover:scale-105 active:scale-95"
          >
            <span>PROCEED TO REGISTRATION PORTAL</span>
            <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
          </a>

          <div className="mt-6 flex items-center justify-center gap-4 text-xs font-mono text-tachyon-cream/50">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-tachyon-teal" />
              Official JUET Guna Platform
            </span>
            <span>·</span>
            <span>Fee details: TBA</span>
          </div>
        </div>

        {/* 5 Events quick reference */}
        <div className="bg-[#1a0610] border border-[#3d1326] rounded-2xl p-6 sm:p-8">
          <h2 className="font-display text-2xl text-tachyon-cream tracking-wide mb-4">
            AVAILABLE ARENAS FOR REGISTRATION
          </h2>

          <div className="space-y-3">
            {eventsData.map((ev) => (
              <div
                key={ev.id}
                className="p-4 rounded-xl bg-[#220815] border border-[#3d1326] flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-tachyon-orange transition-colors"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs font-bold text-tachyon-orange">
                      {ev.level}
                    </span>
                    <span className="font-display text-xl text-tachyon-cream">
                      {ev.name}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-tachyon-cream/60">
                    Venue: {ev.venue} · Tags: {ev.tags.join(", ")}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-tachyon-teal bg-[#12030b] px-3 py-1 rounded border border-[#3d1326]">
                    Fee: {ev.registrationFee}
                  </span>
                  <Link
                    href={`/events/${ev.slug}`}
                    className="text-xs font-mono text-tachyon-orange hover:underline flex items-center gap-1"
                  >
                    <span>View Rules</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
