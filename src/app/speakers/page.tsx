import React from "react";
import Link from "next/link";
import { SpeakersSection } from "@/components/home/SpeakersSection";
import { ArrowLeft, Sparkles } from "lucide-react";

export default function SpeakersPage() {
  return (
    <div className="bg-tachyon-cream min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-mono text-tachyon-dark/70 hover:text-tachyon-orange transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO HOME</span>
        </Link>
      </div>

      <SpeakersSection />

      {/* 2026 Keynote Callout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-[#240a18] text-tachyon-cream rounded-3xl p-8 sm:p-12 border-2 border-tachyon-orange text-center max-w-3xl mx-auto shadow-2xl">
          <div className="w-12 h-12 rounded-full bg-tachyon-orange/20 border border-tachyon-orange mx-auto flex items-center justify-center mb-4">
            <Sparkles className="w-6 h-6 text-tachyon-orange animate-pulse" />
          </div>
          <span className="font-mono text-xs text-tachyon-teal tracking-widest uppercase font-bold block mb-1">
            OCTOBER 2026 TRANSMISSION
          </span>
          <h2 className="font-display text-3xl sm:text-5xl text-tachyon-cream tracking-wide mb-3">
            2026 KEYNOTE REVEAL COMING SOON
          </h2>
          <p className="font-body text-sm text-tachyon-cream/75 max-w-md mx-auto mb-6">
            Curated guest speakers from India&apos;s leading tech unicorns, AI research laboratories, and hardware engineering collectives are finalizing their schedules.
          </p>
          <div className="inline-block bg-[#12030b] px-4 py-2 rounded-lg border border-[#4d1933] font-mono text-xs text-tachyon-orange">
            Stay tuned to the official Tachyon signal for announcements.
          </div>
        </div>
      </div>
    </div>
  );
}
