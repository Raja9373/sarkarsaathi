import React from 'react';

export function SarkarSaathiLogo({ className = 'w-10 h-10' }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={`${className} shrink-0`}
      aria-label="SarkarSaathi Logo"
      role="img"
    >
      <defs>
        <linearGradient id="ssBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e40af" />
          <stop offset="60%" stopColor="#1e3a8a" />
          <stop offset="100%" stopColor="#172554" />
        </linearGradient>
        <filter id="ssBuildingShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="1" stdDeviation="1" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* Blue Circular Base */}
      <circle cx="50" cy="50" r="48" fill="url(#ssBlueGrad)" stroke="#3b82f6" strokeWidth="1.5" />

      {/* Inner accent ring */}
      <circle cx="50" cy="50" r="44" fill="none" stroke="#60a5fa" strokeWidth="0.75" strokeDasharray="3 2" opacity="0.4" />

      {/* Neoclassical Government Architecture / Columns */}
      <g fill="#ffffff" filter="url(#ssBuildingShadow)">
        {/* Pediment / Triangular Roof */}
        <path d="M24 37 L50 19 L76 37 Z" />
        {/* Entablature / Capital Beam */}
        <rect x="22" y="38" width="56" height="4.5" rx="1" />
        {/* 4 Pillars */}
        <rect x="27" y="45" width="6.5" height="19" rx="1.2" />
        <rect x="39" y="45" width="6.5" height="19" rx="1.2" />
        <rect x="54.5" y="45" width="6.5" height="19" rx="1.2" />
        <rect x="66.5" y="45" width="6.5" height="19" rx="1.2" />
        {/* Plinth / Stepped Base */}
        <rect x="22" y="65" width="56" height="3.5" rx="0.8" />
        <rect x="18" y="69.5" width="64" height="4" rx="1.2" />
      </g>

      {/* Subtle Indian Tricolor Swoosh across lower base */}
      <g strokeLinecap="round">
        {/* Saffron Curve */}
        <path d="M 14 62 C 22 84, 52 92, 86 76" fill="none" stroke="#FF9933" strokeWidth="3" />
        {/* White Curve */}
        <path d="M 17 66 C 25 87, 54 94, 85 80" fill="none" stroke="#FFFFFF" strokeWidth="2.5" />
        {/* Green Curve */}
        <path d="M 20 70 C 28 90, 56 96, 84 84" fill="none" stroke="#138808" strokeWidth="3" />
      </g>
    </svg>
  );
}
