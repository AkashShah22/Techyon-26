import React from "react";

export const PumpkinIconSvg: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Pumpkin stem */}
      <path
        d="M 50 20 C 48 10, 56 6, 60 4 C 57 12, 54 18, 52 22 Z"
        fill="#2e7d32"
      />
      {/* Pumpkin segments */}
      <ellipse cx="50" cy="58" rx="38" ry="32" fill="#ff6a13" />
      <ellipse cx="38" cy="58" rx="26" ry="30" fill="#f4511e" />
      <ellipse cx="62" cy="58" rx="26" ry="30" fill="#f4511e" />
      <ellipse cx="50" cy="58" rx="20" ry="30" fill="#ff7a29" />
      {/* Carved eyes */}
      <polygon points="36,48 44,54 34,58" fill="#1a0610" />
      <polygon points="64,48 56,54 66,58" fill="#1a0610" />
      {/* Carved nose */}
      <polygon points="50,56 46,62 54,62" fill="#1a0610" />
      {/* Carved jagged grin */}
      <path
        d="M 32 70 
           L 40 76 L 44 70 L 50 78 L 56 70 L 60 76 L 68 70 
           L 64 80 L 58 76 L 50 82 L 42 76 L 36 80 Z"
        fill="#1a0610"
      />
    </svg>
  );
};
