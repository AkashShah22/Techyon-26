import React from "react";
import Link from "next/link";
import { RitualSection } from "@/components/home/RitualSection";
import { ArrowLeft } from "lucide-react";

export default function SchedulePage() {
  return (
    <div className="bg-tachyon-dark min-h-screen text-tachyon-cream py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-mono text-tachyon-cream/70 hover:text-tachyon-orange transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO HOME</span>
        </Link>
      </div>

      <RitualSection />
    </div>
  );
}
