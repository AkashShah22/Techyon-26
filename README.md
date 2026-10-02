# TACHYON 2026 — Annual Technical Fest Website
> **Jaypee University of Engineering and Technology, Guna (JUET Guna)**  
> **Theme**: Halloween · *Where monsters meet machines*  
> **Dates**: October 29–31, 2026 · Location: 24.4358° N, 77.1604° E  

A production-ready Next.js 15 (App Router) + TypeScript + Tailwind CSS web application featuring an interactive Halloween game world, boss level competition dossiers, dynamic Quest Log schedule with `.ics` calendar sync, illustrated campus map, and 13 collectible souls that unlock the secret Crypt chamber.

---

## 🎃 Features & Visual Fidelity

- **Visual Source of Truth**: Rebuilt from `tachyon_26.pdf` preserving the carved pumpkin hero artwork, deep maroon-black (`#1a0610`), pumpkin orange (`#ff6a13`), cream (`#fdeccd`), and toxic teal (`#19c3a4`) palette with heavy condensed typography (**Anton** headings, **Inter** body, **Space Mono** HUD).
- **Interactive "Light the Lantern" Moment**: Interactive full-screen entrance portal with click/hold to ignite, flame audio synthesis, and skip option (shown once per session).
- **Desktop Lantern Flashlight**: Soft ambient cursor illumination simulating a hand-held lantern.
- **Top Sticky Game HUD**: Logo, live souls counter (`0/13`), sound synthesizer toggle (zero audio lag, Web Audio API), Classic View toggle, and Register button.
- **5 Boss Battle Levels**:
  - `01/05` **Code Mania** (Algorithms, Speed, Logic · CSE Lab 01)
  - `02/05` **Robo Wars** (Metal, Motion, Mayhem · Arena Zero)
  - `03/05` **Cryptic Hunt** (Clues, Campus, Mystery · Tachyon World)
  - `04/05` **War for Trezor** (Strategy, Finance, Power · Management Block)
  - `05/05` **Glitch E-Sports** (FPS, MOBA, Console · E-Sports Crypt)
  - Dedicated pages at `/events/[slug]` with rules scroll, schedule slots, and arena coordinators.
- **Quest Log Schedule**: Day 1, Day 2, and Day 3 cards with "Add to my plan" bookmarking and one-click `.ics` calendar exports.
- **Interactive Campus Map ("Tachyon World")**: 6 tappable arena pins displaying walkway hours (*"Walkways open 08:30 - 22:00"*) and hosted events.
- **The Secret Crypt (`/crypt`)**: Unlocks upon collecting all 13 lost souls (or via test incantation `PUMPKIN-SOUL-13-2026`), awarding an authenticated "Survivor of the Afterdark" badge with download and share actions.
- **Classic View Mode**: Instant toggle in the HUD to disable game animations and flashlight for an ultra-clean, minimal view. Fully adheres to `prefers-reduced-motion` and WCAG AA contrast.

---

## 🛠️ Tech Stack & Directory Structure

- **Framework**: Next.js 15.5.27 (App Router) + React 19
- **Styling**: Tailwind CSS 3.4 + Custom Glow Utilities + PostCSS
- **Animations & Effects**: CSS Keyframes + Web Audio API + Canvas Confetti
- **Icons**: Lucide React + Hand-crafted SVGs (Lantern, Ghost Souls, Bats, Pumpkins)
- **Local Storage**: Strictly located on Local Disk D: at `D:\antigravity project\tachyon-2026`.

```
tachyon-2026/
├── public/
│   └── assets/
│       ├── hero/        # hero-pumpkin-poster.webp, tachyon-collage-poster.webp
│       ├── about/       # about-photo-collage.webp
│       ├── events/      # robo-wars, cryptic-hunt, war-for-trezor, etc.
│       ├── maps/        # campus-halloween-map.webp, octobertech-illustrated-map.webp
│       ├── sponsors/    # previous-sponsors-bats-poster.webp
│       └── speakers/    # archive-*.webp
├── src/
│   ├── app/
│   │   ├── layout.tsx             # Root layout with fonts, GameProvider, HUD, CursorLantern
│   │   ├── page.tsx               # Homepage with all 10 visual sections in exact PDF order
│   │   ├── events/page.tsx        # Searchable and filterable events hub
│   │   ├── events/[slug]/page.tsx # Boss level detail with rules scroll and schedule
│   │   ├── schedule/page.tsx      # Full Quest Log schedule with .ics export
│   │   ├── map/page.tsx           # Full interactive campus map
│   │   ├── speakers/page.tsx      # Speakers archive hub
│   │   ├── sponsors/page.tsx      # Sponsorship tiers and prospectus deck request
│   │   ├── register/page.tsx      # Official registration portal gateway
│   │   └── crypt/page.tsx         # The Secret Crypt chamber and Survivor badge
│   ├── components/
│   │   ├── hud/HudBar.tsx         # Top sticky navigation and game HUD
│   │   ├── home/                  # Hero, Countdown, Welcome, Battles, Map, Ritual, Speakers, Timeline, Sponsors, Final CTA
│   │   ├── game/                  # LanternIntro, CursorLantern, CollectibleSoul
│   │   ├── map/CampusMap.tsx      # Illustrated SVG map with 6 interactive arena pins
│   │   └── svg/                   # Custom SVG components (GhostSoul, Lantern, Bat, Pumpkin)
│   ├── context/GameContext.tsx    # Soul tracking, sound state, classic mode, my-plan
│   ├── data/                      # Non-developer editable data files
│   │   ├── site.ts                # Register URL, dates, coordinates, crypt reward
│   │   ├── events.ts              # 5 boss events, stats, rules, coordinators
│   │   ├── schedule.ts            # Day 1/2/3 items, timings, badges
│   │   ├── venues.ts              # Campus arenas, walkway hours, map coordinates
│   │   ├── speakers.ts            # Archive speaker details
│   │   ├── sponsors.ts            # Previous sponsors list
│   │   └── timeline.ts            # 2011 to 2026 legacy milestones
│   ├── utils/
│   │   ├── audio.ts               # Web Audio API sound synthesizer
│   │   └── calendar.ts            # iCalendar (.ics) generator and downloader
│   └── styles/globals.css         # Design tokens, typography, and glow classes
```

---

## ✏️ How to Edit Content (For Non-Developers)

All website content is strictly isolated inside `src/data/` so anyone can edit text without touching React components:

### 1. Change the Registration URL
Open [`src/data/site.ts`](file:///D:/antigravity%20project/tachyon-2026/src/data/site.ts) and modify `registrationUrl`:
```typescript
export const siteConfig: SiteConfig = {
  // Replace with your Google Form, Unstop, or portal link:
  registrationUrl: "https://unstop.com/o/tachyon-2026",
  // ...
};
```
Every "Register Now" button across the entire site automatically redirects to this URL.

### 2. Update Event Rules, Prizes, and Team Sizes
Open [`src/data/events.ts`](file:///D:/antigravity%20project/tachyon-2026/src/data/events.ts):
- Replace `"TBA"` with your real numbers (e.g. `prizePool: "₹50,000"`, `teamSize: "2 - 4 Members"`, `difficulty: "HARD"`).
- Edit rules under the `rules` array.
- Update coordinator names, emails, and phone numbers under `coordinators`.

### 3. Add or Swap Event Posters & Photos
1. Place your new WebP or PNG image inside `public/assets/events/` (or `hero/`, `speakers/`).
2. Update the `poster` path in `src/data/events.ts` (e.g. `poster: "/assets/events/my-new-poster.webp"`).

### 4. Update the Schedule Timings
Open [`src/data/schedule.ts`](file:///D:/antigravity%20project/tachyon-2026/src/data/schedule.ts) and edit timestamps, titles, descriptions, or badges (`COMPETE`, `ARENA`, `MAIN STAGE`, etc.). The `.ics` calendar generator will automatically export the updated times.

---

## 🚀 Running Locally & Deploying to Vercel

### Run Development Server
```bash
cd "D:\antigravity project\tachyon-2026"
npm run dev
```
Open [http://localhost:3000](http://localhost:3000).

### Run Production Build
```bash
npm run build
npm run start
```

### Deploy to Vercel
1. Push this repository to GitHub or GitLab.
2. Visit [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import this repository.
4. Framework Preset will be automatically detected as **Next.js**.
5. Click **Deploy**. Vercel will build and host it on global edge servers with automatic SSL and image optimization!

---

*© 2026 TACHYON · JUET Guna. Made in the Afterdark.*
