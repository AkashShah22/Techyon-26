import React from "react";
import Link from "next/link";
import { CampusMap } from "@/components/map/CampusMap";
import { ArrowLeft, Compass } from "lucide-react";

export default function MapPage() {
  return (
    <div className="bg-tachyon-dark min-h-screen text-tachyon-cream py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Breadcrumb & Navigation */}
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-mono text-tachyon-cream/70 hover:text-tachyon-orange transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO HOME</span>
          </Link>

          <div className="flex items-center gap-2 text-xs font-mono text-tachyon-teal">
            <Compass className="w-4 h-4 animate-spin-slow" />
            <span>JUET GUNA COORDINATES · 24.4358° N, 77.1604° E</span>
          </div>
        </div>

        <div className="mb-8">
          <h1 className="font-display text-4xl sm:text-6xl text-tachyon-cream tracking-tight mb-2">
            TACHYON WORLD CAMPUS MAP
          </h1>
          <p className="font-body text-sm sm:text-base text-tachyon-cream/70 max-w-2xl">
            Interactive navigation grid for all 6 arena zones at JUET Guna. Explore competition locations, walkway operating windows, and active tournament hubs.
          </p>
        </div>

        {/* Map View */}
        <CampusMap standalone={true} />

      </div>
    </div>
  );
}
