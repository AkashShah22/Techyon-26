import React from "react";
import Link from "next/link";
import { SponsorsSection } from "@/components/home/SponsorsSection";
import { sponsorsData } from "@/data/sponsors";
import { ArrowLeft, Download, Mail, CheckCircle2 } from "lucide-react";

export default function SponsorsPage() {
  const tiers = [
    {
      name: "TITLE SPONSOR",
      accent: "border-tachyon-orange bg-[#ff6a13]/10",
      perks: [
        "Exclusive naming rights: '[Your Brand] Presents Tachyon 2026'",
        "Prominent logo placement on main stage, live streams & passes",
        "Keynote address opportunity during Opening Ceremony in Tagore Hall",
        "VIP judging panel seat at Robo Wars and Code Mania Grand Finale",
        "Dedicated exhibition pavilion on Central Lawn (prime traffic)",
      ],
    },
    {
      name: "ARENA POWER SPONSOR",
      accent: "border-tachyon-teal bg-[#19c3a4]/10",
      perks: [
        "Arena naming rights for Robo Wars / Glitch E-Sports / Code Mania",
        "Branding on tournament brackets, stream overlays & field maps",
        "Company workshop / recruitment slot in Tagore Hall",
        "Recruitment booth on campus walkways",
        "Access to verified student participant resume pool",
      ],
    },
    {
      name: "COMMUNITY / EVENT PARTNER",
      accent: "border-[#e5a93b] bg-[#e5a93b]/10",
      perks: [
        "Logo on official website, schedule booklets & posters",
        "Swag bag distribution to 2,500+ attendees",
        "Social media spotlights across Instagram & LinkedIn",
        "Certificate branding & official partnership felicitation",
      ],
    },
  ];

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

      <SponsorsSection />

      {/* Partnership Tiers & Prospectus */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-mono text-xs font-bold text-[#a63e00] uppercase tracking-widest block mb-1">
            TACHYON 2026 OPPORTUNITIES
          </span>
          <h2 className="font-display text-4xl sm:text-5xl text-tachyon-dark tracking-tight">
            PARTNERSHIP TIERS
          </h2>
          <p className="font-body text-sm sm:text-base text-[#3d182b] mt-2">
            Engage with 3,000+ top engineering, computer science, and robotics talents from Central India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {tiers.map((t, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 sm:p-8 border-2 ${t.accent} bg-white shadow-lg flex flex-col justify-between`}
            >
              <div>
                <span className="font-mono text-xs font-bold tracking-widest text-[#a63e00] uppercase block mb-1">
                  TIER 0{idx + 1}
                </span>
                <h3 className="font-display text-2xl text-tachyon-dark tracking-wide mb-6">
                  {t.name}
                </h3>

                <ul className="space-y-3 font-body text-xs sm:text-sm text-[#3d182b] mb-8">
                  {t.perks.map((p, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-tachyon-orange shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={`mailto:${sponsorsData.contactEmail}?subject=Interest%20in%20${encodeURIComponent(t.name)}`}
                className="w-full py-3 text-center bg-[#280a1a] hover:bg-tachyon-orange hover:text-tachyon-dark text-tachyon-cream font-display text-sm tracking-wider uppercase rounded-xl transition-colors shadow"
              >
                REQUEST PROSPECTUS
              </a>
            </div>
          ))}
        </div>

        {/* Contact Banner */}
        <div className="bg-[#280a1a] text-tachyon-cream rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="font-display text-3xl text-white tracking-wide leading-none mb-2">
              HAVE CUSTOM ACTIVATION IDEAS?
            </h3>
            <p className="font-body text-sm text-tachyon-cream/70 max-w-xl">
              We design custom hackathons, branded boss levels, VR lounges, and hardware challenges tailored to your company&apos;s goals.
            </p>
          </div>

          <a
            href={`mailto:${sponsorsData.contactEmail}?subject=Custom%20Partnership%20Proposal`}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-tachyon-orange text-tachyon-dark font-display font-bold text-base tracking-wider rounded-xl shadow-glowOrange hover:bg-tachyon-orangeHover transition-colors shrink-0"
          >
            <Mail className="w-5 h-5" />
            <span>TALK TO SPONSORSHIP TEAM</span>
          </a>
        </div>
      </div>
    </div>
  );
}
