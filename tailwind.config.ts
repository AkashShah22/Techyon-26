import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        tachyon: {
          dark: "#1a0610",
          darker: "#0d0208",
          maroon: "#280a1a",
          card: "#220815",
          orange: "#ff6a13",
          orangeHover: "#ff8238",
          cream: "#fdeccd",
          creamLight: "#fff6e5",
          teal: "#19c3a4",
          tealGlow: "rgba(25, 195, 164, 0.4)",
          blood: "#8b1523",
          gold: "#e5a93b",
        },
      },
      fontFamily: {
        display: ["var(--font-anton)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-space-mono)", "monospace"],
      },
      boxShadow: {
        glowOrange: "0 0 25px rgba(255, 106, 19, 0.45)",
        glowTeal: "0 0 25px rgba(25, 195, 164, 0.45)",
        lanternGlow: "0 0 60px rgba(255, 106, 19, 0.35)",
      },
      animation: {
        flicker: "flicker 3s infinite alternate",
        float: "float 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 2.5s infinite ease-in-out",
        drift: "drift 20s linear infinite",
      },
      keyframes: {
        flicker: {
          "0%, 100%": { opacity: "1", filter: "brightness(1)" },
          "25%": { opacity: "0.92", filter: "brightness(0.95)" },
          "50%": { opacity: "0.98", filter: "brightness(1.05)" },
          "70%": { opacity: "0.88", filter: "brightness(0.9)" },
          "85%": { opacity: "1", filter: "brightness(1.1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        drift: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
