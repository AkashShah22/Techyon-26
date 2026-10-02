import React from "react";

interface GhostSoulSvgProps {
  className?: string;
  glow?: boolean;
}

export const GhostSoulSvg: React.FC<GhostSoulSvgProps> = ({ className = "w-8 h-8", glow = true }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${glow ? "drop-shadow-[0_0_8px_rgba(25,195,164,0.8)]" : ""}`}
    >
      <defs>
        <radialGradient id="ghostGlow" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#c5faf0" stopOpacity="0.95" />
          <stop offset="60%" stopColor="#19c3a4" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#0d5246" stopOpacity="0.2" />
        </radialGradient>
      </defs>
      {/* Ghost body */}
      <path
        d="M 50 15 
           C 25 15, 20 40, 20 65 
           C 20 80, 26 85, 32 78 
           C 38 72, 44 85, 50 78 
           C 56 72, 62 85, 68 78 
           C 74 85, 80 80, 80 65 
           C 80 40, 75 15, 50 15 Z"
        fill="url(#ghostGlow)"
      />
      {/* Eyes */}
      <ellipse cx="40" cy="42" rx="4.5" ry="6" fill="#0d0208" />
      <ellipse cx="60" cy="42" rx="4.5" ry="6" fill="#0d0208" />
      {/* Eye glint */}
      <circle cx="39" cy="40" r="1.5" fill="#fdeccd" />
      <circle cx="59" cy="40" r="1.5" fill="#fdeccd" />
      {/* O-mouth */}
      <ellipse cx="50" cy="54" rx="3.5" ry="5" fill="#0d0208" />
      {/* Cheek blush */}
      <circle cx="32" cy="50" r="3" fill="#ff6a13" opacity="0.4" />
      <circle cx="68" cy="50" r="3" fill="#ff6a13" opacity="0.4" />
    </svg>
  );
};
