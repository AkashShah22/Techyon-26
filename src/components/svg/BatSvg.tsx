import React from "react";

interface BatSvgProps {
  className?: string;
}

export const BatSvg: React.FC<BatSvgProps> = ({ className = "w-8 h-6" }) => {
  return (
    <svg
      viewBox="0 0 100 60"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M 50 25 
               C 42 12, 28 6, 10 14 
               C 18 26, 26 34, 30 46 
               C 36 38, 44 42, 48 35 
               C 47 30, 48 27, 50 27 
               C 52 27, 53 30, 52 35 
               C 56 42, 64 38, 70 46 
               C 74 34, 82 26, 90 14 
               C 72 6, 58 12, 50 25 Z" 
      />
      {/* Tiny red glowing eyes */}
      <circle cx="48" cy="22" r="1.5" fill="#ff6a13" />
      <circle cx="52" cy="22" r="1.5" fill="#ff6a13" />
    </svg>
  );
};

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
