import React, { useState, useRef, useEffect } from 'react';
import { Languages, ChevronDown, Check } from 'lucide-react';
import { useTranslation, SUPPORTED_LANGUAGES, LanguageCode } from '../lib/i18nContext';

export const LanguageSwitcher: React.FC = () => {
  const { lang, setLang } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLangObj = SUPPORTED_LANGUAGES.find(l => l.code === lang) || SUPPORTED_LANGUAGES[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (code: LanguageCode) => {
    setLang(code);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/90 text-xs font-bold text-zinc-100 transition shadow-sm hover:border-[#FF6B00]"
        title="Select Language (भाषा बदलें)"
        id="language-switcher-btn"
      >
        <Languages className="w-3.5 h-3.5 text-[#FF6B00]" />
        <span className="font-semibold text-white">{currentLangObj.nativeName}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-zinc-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-2xl bg-[#121824] border border-zinc-700 shadow-2xl z-50 p-1.5 animate-in fade-in zoom-in-95 duration-100 max-h-72 overflow-y-auto scrollbar-thin">
          <div className="px-2.5 py-1.5 text-[10px] uppercase font-bold text-zinc-400 border-b border-zinc-800 mb-1 flex items-center justify-between">
            <span>Select Language (13)</span>
            <span className="text-[#FF6B00]">भारतीय भाषाएं</span>
          </div>

          <div className="space-y-0.5">
            {SUPPORTED_LANGUAGES.map((item) => {
              const isSelected = item.code === lang;
              return (
                <button
                  key={item.code}
                  onClick={() => handleSelect(item.code)}
                  className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs transition ${
                    isSelected
                      ? 'bg-[#FF6B00]/15 text-[#FF6B00] font-bold'
                      : 'text-zinc-300 hover:bg-zinc-800/80 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-white">{item.nativeName}</span>
                    <span className="text-[10px] text-zinc-500">({item.name})</span>
                  </div>
                  {isSelected && <Check className="w-3.5 h-3.5 text-[#FF6B00]" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
