"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { PumpkinIconSvg } from "@/components/svg/PumpkinIconSvg";
import { CollectibleSoul } from "@/components/game/CollectibleSoul";
import { MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-tachyon-darker text-tachyon-cream border-t border-[#3d1326] pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#2d0e1c]">
          
          {/* Brand & Address Column */}
          <div className="lg:col-span-6 flex flex-col space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-tachyon-orange flex items-center justify-center p-1.5 shadow-glowOrange">
                <PumpkinIconSvg className="w-full h-full text-tachyon-dark" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl text-tachyon-cream tracking-wider leading-none">
                  TACHYON
                </span>
                <span className="font-mono text-[9px] text-tachyon-teal tracking-widest uppercase font-semibold">
                  TECHFEST 2026
                </span>
              </div>
            </div>

            <p className="font-body text-sm text-tachyon-cream/70 max-w-md leading-relaxed mt-2">
              The premier annual technical festival of Jaypee University of Engineering and Technology, Guna. Three nights of code, robotics, strategy and fearless experimentation.
            </p>

            <div className="pt-2 space-y-2 text-xs font-mono text-tachyon-cream/75">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-tachyon-orange shrink-0 mt-0.5" />
                <span>{siteConfig.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-tachyon-teal shrink-0" />
                <a href={`mailto:${siteConfig.contactEmail}`} className="hover:text-tachyon-orange transition-colors">
                  {siteConfig.contactEmail}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-tachyon-teal shrink-0" />
                <a href={`tel:${siteConfig.contactPhone}`} className="hover:text-tachyon-orange transition-colors">
                  {siteConfig.contactPhone}
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="lg:col-span-3 flex flex-col space-y-3">
            <span className="font-mono text-xs font-bold text-tachyon-orange uppercase tracking-widest mb-1">
              EXPLORE
            </span>
            <Link href="/#events" className="text-sm font-body text-tachyon-cream/80 hover:text-tachyon-orange transition-colors">
              Five Boss Events
            </Link>
            <Link href="/#schedule" className="text-sm font-body text-tachyon-cream/80 hover:text-tachyon-orange transition-colors">
              Schedule & Quest Log
            </Link>
            <Link href="/#map" className="text-sm font-body text-tachyon-cream/80 hover:text-tachyon-orange transition-colors">
              Tachyon World Campus Map
            </Link>
            <Link href="/#speakers" className="text-sm font-body text-tachyon-cream/80 hover:text-tachyon-orange transition-colors">
              Speakers Archive
            </Link>
            <Link href="/#sponsors" className="text-sm font-body text-tachyon-cream/80 hover:text-tachyon-orange transition-colors">
              Partners & Sponsors
            </Link>
            <Link href="/crypt" className="text-sm font-mono text-tachyon-teal hover:underline flex items-center gap-1.5 pt-1">
              <span>Enter The Crypt (Secret)</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Social Links Column */}
          <div className="lg:col-span-3 flex flex-col space-y-3">
            <span className="font-mono text-xs font-bold text-tachyon-orange uppercase tracking-widest mb-1">
              FOLLOW THE SIGNAL
            </span>
            {siteConfig.socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-body text-tachyon-cream/80 hover:text-tachyon-orange transition-colors flex items-center gap-1.5"
              >
                <span>{s.name}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
            ))}

            {/* Hidden Soul 05 inside footer */}
            <div className="pt-4 flex items-center gap-2">
              <CollectibleSoul
                id="soul-05-footer-tomb"
                type="ghost"
                hint="A solitary phantom guards the university archives..."
              />
              <span className="text-[11px] font-mono text-tachyon-cream/40">
                Lurking in the archives...
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-tachyon-cream/60">
          <div>
            © 2026 TACHYON · JUET GUNA. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-2 text-tachyon-orange font-bold tracking-widest uppercase">
            <span>MADE IN THE AFTERDARK</span>
            <span className="text-tachyon-teal">✦</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
