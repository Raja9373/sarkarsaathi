import React from 'react';

export function HeroIndiaGateVisual() {
  return (
    <div className="relative select-none flex items-center justify-center pointer-events-none">
      <div className="relative w-[340px] sm:w-[400px] lg:w-[450px] h-[370px] sm:h-[430px] lg:h-[470px] flex items-center justify-center">
        
        {/* 
          1. Authentic Indian Map Outline (Uske piche India ka map ka outline)
          Transparent background with glowing cyan and sky-blue illuminated contour lines
        */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="/india-map-outline.svg"
            alt="Authentic India Map Outline"
            className="w-full h-full object-contain filter drop-shadow-[0_0_24px_rgba(56,189,248,0.6)] opacity-80 pointer-events-none"
          />
        </div>

        {/* 
          2. "Viksit Bharat Together" Typography
          Positioned directly in the optical center / heart of the mainland India map outline
        */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 -translate-x-10 sm:-translate-x-14 lg:-translate-x-16 -translate-y-1 sm:-translate-y-2">
          <span
            className="block text-white text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-wide select-none drop-shadow-[0_4px_18px_rgba(0,0,0,0.98)]"
            style={{
              fontFamily: "'Caveat', 'Dancing Script', cursive",
              lineHeight: '1.05',
            }}
          >
            Viksit
            <br />
            Bharat
            <br />
            Together
          </span>

          {/* Indian Tricolor Ribbon Underline */}
          <div className="mt-1.5 flex justify-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            <svg viewBox="0 0 130 26" className="w-28 sm:w-36 h-5 sm:h-6">
              <path d="M 8,6 Q 68,1 122,12" stroke="#FF9933" strokeWidth="3.2" fill="none" strokeLinecap="round" />
              <path d="M 14,12 Q 72,6 124,17" stroke="#FFFFFF" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              <path d="M 20,18 Q 76,12 126,23" stroke="#138808" strokeWidth="3.2" fill="none" strokeLinecap="round" />
            </svg>
          </div>
        </div>

      </div>
    </div>
  );
}

