import React, { useState, useEffect } from 'react';
import { Radio, ChevronRight, ExternalLink, Sparkles } from 'lucide-react';
import { OFFICIAL_SARKARI_NEWS, SarkariNewsItem } from '../lib/fetchSarkariNews';
import { useTranslation } from '../lib/i18nContext';

interface NewsTickerProps {
  currentStateId?: string;
  onSelectNewsItem?: (item: SarkariNewsItem) => void;
}

export const NewsTicker: React.FC<NewsTickerProps> = ({ currentStateId = 'all', onSelectNewsItem }) => {
  const { t, lang } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const newsList = OFFICIAL_SARKARI_NEWS.slice(0, 6);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % newsList.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [newsList.length]);

  if (newsList.length === 0) return null;

  const currentNews = newsList[currentIndex];

  return (
    <div className="bg-[#0e1422] border-b border-zinc-800 text-xs py-2 px-3 sm:px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        {/* Ticker Badge */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#FF6B00]/20 text-[#FF6B00] border border-[#FF6B00]/40 font-bold text-[11px] uppercase tracking-wider">
            <Radio className="w-3 h-3 animate-pulse text-[#FF6B00]" />
            PIB Live
          </span>
          <span className="hidden sm:inline-block text-zinc-500 font-semibold">|</span>
        </div>

        {/* Scrolling News Headline */}
        <div className="flex-1 overflow-hidden">
          <a
            href={currentNews.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-zinc-200 hover:text-white hover:underline transition-all group truncate"
            title={lang === 'hi' ? currentNews.hindiTitle : currentNews.title}
          >
            <span className="inline-block px-1.5 py-0.2 text-[10px] rounded bg-zinc-800 text-amber-400 font-medium flex-shrink-0">
              {currentNews.category}
            </span>
            <span className="font-medium truncate">
              {lang === 'hi' ? currentNews.hindiTitle : currentNews.title}
            </span>
            <ExternalLink className="w-3 h-3 text-zinc-500 group-hover:text-[#FF6B00] flex-shrink-0 hidden md:inline" />
          </a>
        </div>

        {/* Date and Navigation indicators */}
        <div className="hidden lg:flex items-center gap-2 flex-shrink-0 text-[11px] text-zinc-400">
          <span>{currentNews.date}</span>
          <div className="flex items-center gap-1 ml-1">
            {newsList.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  idx === currentIndex ? 'w-4 bg-[#FF6B00]' : 'bg-zinc-700 hover:bg-zinc-500'
                }`}
                title={`Go to item ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
