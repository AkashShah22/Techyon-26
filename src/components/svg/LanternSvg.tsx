import React from "react";

interface LanternSvgProps {
  className?: string;
  isLit?: boolean;
  glowIntensity?: number; // 0 to 1
}

export const LanternSvg: React.FC<LanternSvgProps> = ({
  className = "w-24 h-32",
  isLit = false,
  glowIntensity = 1,
}) => {
  return (
    <svg
      viewBox="0 0 120 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Flame glow */}
        <radialGradient id="flameRadial" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="30%" stopColor="#ffb347" />
          <stop offset="70%" stopColor="#ff6a13" />
          <stop offset="100%" stopColor="transparent" stopOpacity="0" />
        </radialGradient>
        {/* Metal gradient */}
        <linearGradient id="ironGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3d182b" />
          <stop offset="50%" stopColor="#1a0610" />
          <stop offset="100%" stopColor="#0d0208" />
        </linearGradient>
        <linearGradient id="brassGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#b37424" />
          <stop offset="50%" stopColor="#e5a93b" />
          <stop offset="100%" stopColor="#8c5513" />
        </linearGradient>
      </defs>

      {/* Hanging Ring */}
      <circle cx="60" cy="18" r="12" stroke="url(#brassGrad)" strokeWidth="4" fill="none" />
      <rect x="54" y="26" width="12" height="8" rx="2" fill="url(#ironGrad)" />

      {/* Roof / Top Cap */}
      <path
        d="M 60 32 L 95 52 L 25 52 Z"
        fill="url(#ironGrad)"
        stroke="url(#brassGrad)"
        strokeWidth="2"
      />
      <rect x="22" y="52" width="76" height="6" rx="2" fill="url(#brassGrad)" />

      {/* Glass Chamber */}
      <rect
        x="28"
        y="58"
        width="64"
        height="65"
        rx="4"
        fill={isLit ? "rgba(255, 106, 19, 0.22)" : "rgba(25, 10, 20, 0.4)"}
        stroke="#592039"
        strokeWidth="1.5"
      />

      {/* Protective Iron Struts */}
      <line x1="44" y1="58" x2="44" y2="123" stroke="#2a0a1c" strokeWidth="2.5" />
      <line x1="76" y1="58" x2="76" y2="123" stroke="#2a0a1c" strokeWidth="2.5" />
      <line x1="60" y1="58" x2="60" y2="123" stroke="url(#brassGrad)" strokeWidth="1.5" opacity="0.6" />

      {/* Flame when Lit */}
      {isLit && (
        <g opacity={glowIntensity} className="transition-opacity duration-300">
          {/* Outer glow sphere */}
          <circle cx="60" cy="95" r="28" fill="url(#flameRadial)" opacity="0.8" />
          {/* Inner teardrop flame */}
          <path
            d="M 60 74 C 52 86, 48 95, 52 102 C 55 107, 65 107, 68 102 C 72 95, 68 86, 60 74 Z"
            fill="#ffffff"
            className="animate-flicker"
          />
          {/* Amber core */}
          <path
            d="M 60 82 C 55 90, 53 96, 56 100 C 58 104, 62 104, 64 100 C 67 96, 65 90, 60 82 Z"
            fill="#ffaa00"
          />
        </g>
      )}

      {/* Unlit Wick */}
      {!isLit && (
        <rect x="59" y="98" width="2" height="12" fill="#5c203b" rx="1" />
      )}

      {/* Base */}
      <rect x="20" y="123" width="80" height="8" rx="2" fill="url(#brassGrad)" />
      <path
        d="M 26 131 L 94 131 L 86 142 L 34 142 Z"
        fill="url(#ironGrad)"
        stroke="url(#brassGrad)"
        strokeWidth="1.5"
      />
      {/* Base feet */}
      <rect x="32" y="142" width="10" height="4" rx="1" fill="#1a0610" />
      <rect x="78" y="142" width="10" height="4" rx="1" fill="#1a0610" />
    </svg>
  );
};
