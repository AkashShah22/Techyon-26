import type { Metadata } from "next";
import { Anton, Inter, Space_Mono } from "next/font/google";
import "@/styles/globals.css";
import { GameProvider } from "@/context/GameContext";
import { HudBar } from "@/components/hud/HudBar";
import { Footer } from "@/components/layout/Footer";
import { LanternIntro } from "@/components/game/LanternIntro";
import { CursorLantern } from "@/components/game/CursorLantern";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tachyon2026.juet.ac.in"),
  title: "TACHYON 2026 | Annual Techfest · JUET Guna",
  description:
    "Official website of TACHYON 2026, the annual technical fest of Jaypee University of Engineering and Technology, Guna. October 29-31, 2026. Where monsters meet machines.",
  keywords: [
    "Tachyon 2026",
    "JUET Guna",
    "Techfest",
    "Code Mania",
    "Robo Wars",
    "Cryptic Hunt",
    "War for Trezor",
    "Glitch E-Sports",
  ],
  authors: [{ name: "JUET Guna Techfest Committee" }],
  openGraph: {
    title: "TACHYON 2026 | Where Monsters Meet Machines",
    description:
      "Three nights. Five battles. One campus transformed into a living machine of code, chaos and impossible ideas. Oct 29-31, 2026 at JUET Guna.",
    images: ["/assets/hero/hero-pumpkin-poster.webp"],
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${anton.variable} ${inter.variable} ${spaceMono.variable}`}>
      <body className="bg-tachyon-dark text-tachyon-cream font-body antialiased selection:bg-tachyon-orange selection:text-tachyon-dark">
        <GameProvider>
          {/* Light the Lantern Entrance Moment */}
          <LanternIntro />

          {/* Desktop Interactive Mouse Lantern Glow */}
          <CursorLantern />

          {/* Sticky Game & Navigation HUD */}
          <HudBar />

          {/* Main Content Area */}
          <main className="min-h-screen relative">{children}</main>

          {/* Site Footer */}
          <Footer />
        </GameProvider>
      </body>
    </html>
  );
}
