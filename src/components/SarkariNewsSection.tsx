import React, { useState } from 'react';
import { Newspaper, ExternalLink, Share2, Calendar, Building, Check, Sparkles, Filter } from 'lucide-react';
import { OFFICIAL_SARKARI_NEWS, SarkariNewsItem } from '../lib/fetchSarkariNews';
import { getStateInfo } from '../data/statesData';
import { useTranslation } from '../lib/i18nContext';

interface SarkariNewsSectionProps {
  currentStateId?: string;
  onViewAllNews?: () => void;
}

export const SarkariNewsSection: React.FC<SarkariNewsSectionProps> = ({
  currentStateId = 'all',
  onViewAllNews
}) => {
  const { t, lang } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const stateInfo = getStateInfo(currentStateId);

  const categories = [
    { id: 'all', label: 'All Updates', hindi: 'सभी समाचार' },
    { id: 'Yojana', label: 'Schemes & Grants', hindi: 'योजना एवं सब्सिडी' },
    { id: 'Citizen Welfare', label: 'Citizen Welfare', hindi: 'नागरिक कल्याण' },
    { id: 'Policy', label: 'Rules & Guidelines', hindi: 'नियम व नीतियां' },
  ];

  const filteredNews = OFFICIAL_SARKARI_NEWS.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesCategory;
  });

  const handleShare = (item: SarkariNewsItem) => {
    const textToShare = `${item.title}\n\nOfficial Source: ${item.sourceUrl}\nRead more on SarkarSaathi.org`;
    if (navigator.share) {
      navigator.share({
        title: item.title,
        text: textToShare,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(`${item.title}\n${item.sourceUrl}`);
      setCopiedId(item.id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto border-t border-zinc-800/80">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/80 text-blue-400 border border-blue-800/60 text-xs font-bold uppercase mb-2">
            <Newspaper className="w-3.5 h-3.5" /> {t('sarkari_news_title', 'ताज़ा सरकारी समाचार')}
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            {t('sarkari_news_title', 'ताज़ा सरकारी समाचार एवं प्रेस विज्ञप्तियां')}
          </h2>
          <p className="text-sm text-zinc-400 mt-1 max-w-2xl">
            {t('sarkari_news_sub', 'प्रेस सूचना ब्यूरो (PIB) एवं भारत सरकार के आधिकारिक स्रोतों से प्रमाणित ताज़ा अपडेट।')}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
                selectedCategory === cat.id
                  ? 'bg-[#FF6B00] text-white shadow-md'
                  : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200 border border-zinc-800'
              }`}
            >
              {lang === 'hi' ? cat.hindi : cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* 6 News Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredNews.slice(0, 6).map((news) => {
          const isUrgent = news.isUrgent;
          const displayTitle = lang === 'hi' ? news.hindiTitle : news.title;
          const displaySummary = lang === 'hi' ? news.hindiSummary : news.summary;

          return (
            <div
              key={news.id}
              className={`flex flex-col justify-between p-5 rounded-2xl bg-[#111724] border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl ${
                isUrgent
                  ? 'border-amber-500/40 bg-gradient-to-b from-[#161f30] to-[#111724]'
                  : 'border-zinc-800 hover:border-zinc-700'
              }`}
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[11px] font-semibold bg-zinc-800 text-[#FF6B00] border border-zinc-700">
                    {news.category}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-zinc-500">
                    <Calendar className="w-3 h-3" />
                    <span>{news.date}</span>
                  </div>
                </div>

                {/* News Title */}
                <h3 className="text-base font-bold text-white leading-snug line-clamp-2 hover:text-[#FF6B00] transition">
                  {displayTitle}
                </h3>

                {/* Ministry info */}
                <div className="flex items-center gap-1.5 mt-2 text-xs text-zinc-400 font-medium">
                  <Building className="w-3.5 h-3.5 text-zinc-500 flex-shrink-0" />
                  <span className="truncate">{news.ministry}</span>
                </div>

                {/* Summary */}
                <p className="mt-3 text-xs text-zinc-300 line-clamp-3 leading-relaxed">
                  {displaySummary}
                </p>
              </div>

              {/* Action Buttons Footer */}
              <div className="pt-4 mt-4 border-t border-zinc-800 flex items-center justify-between gap-2">
                <a
                  href={news.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF6B00] hover:text-orange-400 hover:underline"
                >
                  <span>{t('official_source', 'आधिकारिक स्रोत (PIB)')}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  type="button"
                  onClick={() => handleShare(news)}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 text-xs font-semibold transition"
                  title="Share news"
                >
                  {copiedId === news.id ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400 text-[11px]">{t('copied', 'कॉपी हो गया!')}</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3 h-3 text-zinc-400" />
                      <span className="text-[11px]">{t('share', 'शेयर')}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom View All Link */}
      <div className="mt-8 text-center">
        <a
          href="https://pib.gov.in"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs font-bold text-zinc-200 hover:text-white transition"
        >
          <Newspaper className="w-4 h-4 text-[#FF6B00]" />
          <span>{t('view_all_news', 'प्रेस सूचना ब्यूरो (PIB) के सभी सरकारी समाचार देखें')}</span>
          <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
        </a>
      </div>
    </section>
  );
};
