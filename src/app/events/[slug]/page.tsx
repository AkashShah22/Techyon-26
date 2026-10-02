import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { eventsData, EventItem } from "@/data/events";
import { siteConfig } from "@/data/site";
import { CollectibleSoul } from "@/components/game/CollectibleSoul";
import {
  ArrowLeft,
  ArrowUpRight,
  MapPin,
  Calendar,
  Clock,
  Scroll,
  ShieldAlert,
  Users,
  Trophy,
  Ticket,
  Mail,
  UserCheck,
} from "lucide-react";

interface EventPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return eventsData.map((ev) => ({
    slug: ev.slug,
  }));
}

export default async function EventDetailPage({ params }: EventPageProps) {
  const { slug } = await params;
  const event = eventsData.find((e) => e.slug === slug);

  if (!event) {
    notFound();
  }

  return (
    <div className="bg-tachyon-dark min-h-screen text-tachyon-cream py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Back Link & Breadcrumb */}
        <div className="flex items-center justify-between mb-6">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-sm font-mono text-tachyon-cream/70 hover:text-tachyon-orange transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>BACK TO ALL ARENAS</span>
          </Link>

          <div className="flex items-center gap-2 text-xs font-mono text-tachyon-cream/50">
            <span className="text-tachyon-orange">{event.level}</span>
            <span>·</span>
            <span>JUET GUNA</span>
          </div>
        </div>

        {/* Title Header */}
        <div className="bg-[#220815] border border-[#3d1326] rounded-3xl p-6 sm:p-10 mb-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-tachyon-orange/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-tachyon-orange text-tachyon-dark font-mono text-xs font-bold px-2.5 py-0.5 rounded">
                  BOSS LEVEL {event.level}
                </span>
                <span className="text-xs font-mono text-tachyon-teal tracking-widest uppercase">
                  {event.tags.join(" · ")}
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-6xl text-tachyon-cream tracking-wide mb-2">
                {event.name}
              </h1>

              <p className="font-display text-lg sm:text-xl text-tachyon-orange tracking-widest uppercase">
                {event.tagline}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={siteConfig.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-tachyon-orange hover:bg-tachyon-orangeHover text-tachyon-dark font-display font-bold text-lg tracking-wider px-8 py-3.5 rounded-xl shadow-glowOrange transition-all hover:scale-105 active:scale-95 text-center"
              >
                <span>REGISTER NOW</span>
                <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
              </a>
            </div>
          </div>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Artwork, Quick Stats & Coordinators */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Poster Card */}
            <div className="bg-[#220815] border border-[#3d1326] rounded-2xl overflow-hidden shadow-2xl relative group">
              <div className="relative w-full aspect-[4/5] bg-black">
                <Image
                  src={event.poster}
                  alt={`${event.name} Official Poster`}
                  fill
                  priority
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 450px"
                />

                {/* Hidden Soul tucked inside event poster */}
                <div className="absolute top-4 right-4 z-20">
                  <CollectibleSoul
                    id={`soul-event-${event.slug}`}
                    type="ghost"
                    hint={`A wandering specter watches over ${event.name}...`}
                  />
                </div>
              </div>

              <div className="p-4 bg-[#1a0610] border-t border-[#3d1326] flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2 text-tachyon-cream/70">
                  <MapPin className="w-4 h-4 text-tachyon-teal" />
                  <span>{event.venue}</span>
                </div>
                <Link
                  href="/#map"
                  className="text-tachyon-orange hover:underline flex items-center gap-1"
                >
                  <span>Locate on Map</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Quick Stat Matrix (Difficulty, Team, Prize, Fee) */}
            <div className="bg-[#220815] border border-[#3d1326] rounded-2xl p-6 space-y-4">
              <h3 className="font-mono text-xs font-bold text-tachyon-orange tracking-widest uppercase">
                ARENA SPECIFICATIONS
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#17050f] p-3.5 rounded-xl border border-[#3d1326]">
                  <div className="flex items-center gap-2 text-tachyon-cream/60 text-xs font-mono mb-1">
                    <ShieldAlert className="w-3.5 h-3.5 text-tachyon-teal" />
                    <span>DIFFICULTY</span>
                  </div>
                  <span className="font-mono text-base font-bold text-tachyon-cream">
                    {event.difficulty}
                  </span>
                </div>

                <div className="bg-[#17050f] p-3.5 rounded-xl border border-[#3d1326]">
                  <div className="flex items-center gap-2 text-tachyon-cream/60 text-xs font-mono mb-1">
                    <Users className="w-3.5 h-3.5 text-tachyon-orange" />
                    <span>TEAM SIZE</span>
                  </div>
                  <span className="font-mono text-base font-bold text-tachyon-cream">
                    {event.teamSize}
                  </span>
                </div>

                <div className="bg-[#17050f] p-3.5 rounded-xl border border-[#3d1326]">
                  <div className="flex items-center gap-2 text-tachyon-cream/60 text-xs font-mono mb-1">
                    <Trophy className="w-3.5 h-3.5 text-tachyon-gold" />
                    <span>PRIZE POOL</span>
                  </div>
                  <span className="font-mono text-base font-bold text-tachyon-orange">
                    {event.prizePool}
                  </span>
                </div>

                <div className="bg-[#17050f] p-3.5 rounded-xl border border-[#3d1326]">
                  <div className="flex items-center gap-2 text-tachyon-cream/60 text-xs font-mono mb-1">
                    <Ticket className="w-3.5 h-3.5 text-tachyon-teal" />
                    <span>ENTRY FEE</span>
                  </div>
                  <span className="font-mono text-base font-bold text-tachyon-cream">
                    {event.registrationFee}
                  </span>
                </div>
              </div>
            </div>

            {/* Coordinators Contact Card */}
            <div className="bg-[#220815] border border-[#3d1326] rounded-2xl p-6">
              <h3 className="font-mono text-xs font-bold text-tachyon-orange tracking-widest uppercase mb-4 flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-tachyon-orange" />
                <span>ARENA COORDINATORS</span>
              </h3>

              <div className="space-y-3">
                {event.coordinators.map((c, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3 rounded-lg bg-[#17050f] border border-[#3d1326]"
                  >
                    <div>
                      <span className="font-mono text-xs font-bold text-tachyon-cream block">
                        {c.name}
                      </span>
                      <span className="font-body text-[11px] text-tachyon-cream/60">
                        {c.role}
                      </span>
                    </div>
                    <span className="font-mono text-xs text-tachyon-teal">{c.contact}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: About, Rules Scroll & Battle Schedule Slots */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* About Section */}
            <div className="bg-[#220815] border border-[#3d1326] rounded-2xl p-6 sm:p-8">
              <h2 className="font-display text-2xl text-tachyon-cream tracking-wide mb-4">
                ABOUT THE BATTLE
              </h2>
              <div className="space-y-4 font-body text-sm sm:text-base text-tachyon-cream/80 leading-relaxed">
                {event.about.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            {/* Rules of Engagement Scroll */}
            <div className="bg-[#220815] border-2 border-[#54213d] rounded-2xl p-6 sm:p-8 relative overflow-hidden">
              <div className="flex items-center gap-2.5 mb-4 text-tachyon-orange">
                <Scroll className="w-5 h-5" />
                <h2 className="font-display text-2xl tracking-wide text-tachyon-cream">
                  RULES OF ENGAGEMENT
                </h2>
              </div>

              <div className="space-y-3 font-mono text-xs sm:text-sm text-tachyon-cream/85">
                {event.rules.map((rule, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-lg bg-[#17050f]/80 border border-[#3d1326] flex items-start gap-3"
                  >
                    <span className="text-tachyon-teal font-bold">{idx + 1}.</span>
                    <span>{rule}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-3 bg-black/40 rounded-lg border border-tachyon-orange/30 text-xs font-mono text-tachyon-cream/60">
                Official detailed rulebook and scoring criteria are subject to committee announcement (TBA).
              </div>
            </div>

            {/* Schedule Slots for this Event */}
            <div className="bg-[#220815] border border-[#3d1326] rounded-2xl p-6 sm:p-8">
              <h2 className="font-display text-2xl text-tachyon-cream tracking-wide mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-tachyon-teal" />
                <span>ARENA SCHEDULE & ROUNDS</span>
              </h2>

              <div className="space-y-4">
                {event.scheduleSlots.map((slot, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#17050f] border border-[#3d1326] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="bg-tachyon-orange/20 text-tachyon-orange font-mono text-[11px] font-bold px-2 py-0.5 rounded">
                          {slot.day} · {slot.date}
                        </span>
                        <span className="font-display text-lg text-tachyon-cream">
                          {slot.stage}
                        </span>
                      </div>
                      <p className="font-body text-xs text-tachyon-cream/70">
                        {slot.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 text-tachyon-teal font-mono text-xs font-bold shrink-0 bg-[#220815] px-3 py-1.5 rounded-lg border border-[#3d1326]">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{slot.time} IST</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Final Registration Banner */}
            <div className="bg-gradient-to-r from-tachyon-orange to-[#b34204] text-tachyon-darker p-8 rounded-2xl shadow-glowOrange flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="font-display text-3xl text-black leading-none mb-1">
                  CLAIM YOUR PLACE IN {event.name}
                </h3>
                <p className="font-body text-sm text-black/80 font-medium">
                  Entry passes are strictly allocated on a first-registered basis.
                </p>
              </div>

              <a
                href={siteConfig.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black hover:bg-black/90 text-tachyon-cream font-display font-bold text-base tracking-wider px-6 py-3 rounded-lg transition-transform hover:scale-105 active:scale-95 shrink-0 flex items-center gap-2"
              >
                <span>REGISTER NOW</span>
                <ArrowUpRight className="w-4 h-4 stroke-[3]" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
