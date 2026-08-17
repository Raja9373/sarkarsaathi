import React, { useState } from 'react';
import { 
  Gift, 
  Search, 
  ExternalLink, 
  CheckCircle2, 
  FileText, 
  Clock, 
  Building2, 
  MapPin,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  Calculator
} from 'lucide-react';
import { getYojanasByState, YOJANA_CATEGORIES, YojanaItem } from '../data/yojanaData';
import { STATES_LIST, getStateInfo } from '../data/statesData';
import { useTranslation } from '../lib/i18nContext';

interface YojanaFinderProps {
  currentStateId?: string;
  onOpenStateSelector?: () => void;
}

export const YojanaFinder: React.FC<YojanaFinderProps> = ({
  currentStateId = 'all',
  onOpenStateSelector
}) => {
  const { t, lang } = useTranslation();
  const [selectedState, setSelectedState] = useState<string>(currentStateId);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedYojanaId, setExpandedYojanaId] = useState<string | null>(null);

  React.useEffect(() => {
    if (currentStateId) {
      setSelectedState(currentStateId);
    }
  }, [currentStateId]);

  const stateInfo = getStateInfo(selectedState);
  const allYojanas = getYojanasByState(selectedState, selectedCategory);

  const filteredYojanas = allYojanas.filter(item => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      item.name.toLowerCase().includes(q) ||
      item.hindiName.includes(q) ||
      item.overview.toLowerCase().includes(q) ||
      item.subsidyAmount.toLowerCase().includes(q) ||
      item.department.toLowerCase().includes(q)
    );
  });

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto text-zinc-100">
      {/* Section Header */}
      <div className="mb-8 border-b border-zinc-800 pb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-950/80 text-rose-400 border border-rose-800/60 text-xs font-bold uppercase mb-2">
              <Gift className="w-3.5 h-3.5" /> {t('yojana_finder_title', 'सरकारी योजना एवं सब्सिडी खोजक')}
            </div>
            <h2 className="text-3xl font-black text-white">
              {t('yojana_finder_title', 'सरकारी योजना एवं सब्सिडी खोजक')}
            </h2>
            <p className="text-sm text-zinc-400 mt-1 max-w-2xl">
              {stateInfo.id === 'delhi'
                ? 'दिल्ली एवं केंद्र सरकार की सभी जन-कल्याणकारी योजनाएं, सब्सिडी, छात्रवृत्ति एवं ऑनलाइन आवेदन लिंक।'
                : stateInfo.id === 'national'
                ? 'भारत सरकार की सभी प्रमुख केंद्रीय कल्याणकारी योजनाएं, सब्सिडी एवं सीधे बैंक ट्रांसफर लाभ।'
                : `${stateInfo.name} (${stateInfo.hindiName}) एवं केंद्र सरकार की सभी जन-कल्याणकारी योजनाएं एवं सब्सिडी।`}
            </p>
          </div>

          {/* State Selector Quick Switcher */}
          <div className="flex items-center gap-2 bg-[#121824] p-1.5 rounded-xl border border-zinc-700">
            <MapPin className="w-4 h-4 text-[#FF6B00] ml-2 flex-shrink-0" />
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="bg-transparent text-xs font-bold text-white pr-4 py-1.5 focus:outline-none cursor-pointer"
            >
              <option value="all" className="bg-zinc-900 text-white">All India (राष्ट्रीय / सभी राज्य)</option>
              {STATES_LIST.map((st) => (
                <option key={st.id} value={st.id} className="bg-zinc-900 text-white">
                  {st.name} ({st.hindiName})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Search & Category Pills */}
        <div className="mt-6 space-y-4">
          {/* Search Box */}
          <div className="relative max-w-2xl">
            <Search className="w-5 h-5 text-[#FF6B00] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="योजना का नाम, ₹ राशि या श्रेणी से खोजें (उदा. PM Kisan, आवास, लाडकी बहीण, सोलर)..."
              className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-[#121824] border border-zinc-700 text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-[#FF6B00] transition"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full scrollbar-thin">
            {YOJANA_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition flex-shrink-0 ${
                  selectedCategory === cat.id
                    ? 'bg-[#FF6B00] text-white shadow-lg'
                    : 'bg-zinc-900/90 text-zinc-400 hover:bg-zinc-800 hover:text-white border border-zinc-800'
                }`}
              >
                {lang === 'hi' ? cat.hindi : cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Yojanas List / Grid */}
      <div className="space-y-4">
        {filteredYojanas.length === 0 ? (
          <div className="text-center py-12 bg-[#121824] rounded-2xl border border-zinc-800">
            <Gift className="w-12 h-12 text-zinc-600 mx-auto mb-3" />
            <p className="text-base font-bold text-zinc-300">
              {t('no_results', 'कोई योजना नहीं मिली। कृपया अलग खोज शब्द या श्रेणी चुनें।')}
            </p>
          </div>
        ) : (
          filteredYojanas.map((yojana) => {
            const isExpanded = expandedYojanaId === yojana.id;
            const displayName = lang === 'hi' ? yojana.hindiName : yojana.name;
            const displayOverview = lang === 'hi' ? yojana.hindiOverview : yojana.overview;
            const displaySubsidy = lang === 'hi' ? yojana.subsidyHindi : yojana.subsidyAmount;

            return (
              <div
                key={yojana.id}
                className="bg-[#111724] border border-zinc-800 hover:border-zinc-700 rounded-2xl p-5 transition-all duration-200 shadow-md"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                  <div className="flex-1">
                    {/* Header Badges */}
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-[#FF6B00]/15 text-[#FF6B00] border border-[#FF6B00]/30">
                        {yojana.categoryLabel}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-zinc-800 text-zinc-300">
                        {yojana.state === 'all' ? 'Pan India (केंद्रीय)' : `${yojana.state.toUpperCase()}`}
                      </span>
                      <span className="text-xs text-zinc-400 flex items-center gap-1">
                        <Building2 className="w-3 h-3 text-zinc-500" />
                        {yojana.department}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-black text-white">
                      {displayName}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-0.5">{yojana.name}</p>

                    {/* Financial Subsidy Highlight Box */}
                    <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/70 border border-emerald-800/80 text-emerald-300 text-xs font-bold">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{t('subsidy_amount', 'वित्तीय लाभ / सब्सिडी')}: {displaySubsidy}</span>
                    </div>

                    <p className="mt-2.5 text-xs text-zinc-300 leading-relaxed max-w-4xl">
                      {displayOverview}
                    </p>
                  </div>

                  {/* Apply Actions */}
                  <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between gap-2.5 flex-shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-zinc-800">
                    <a
                      href={yojana.applyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#FF6B00] hover:bg-[#e05e00] text-white font-bold text-xs shadow-lg transition"
                    >
                      <span>{t('apply_online', 'ऑनलाइन आवेदन करें')}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <button
                      type="button"
                      onClick={() => setExpandedYojanaId(isExpanded ? null : yojana.id)}
                      className="text-xs text-zinc-400 hover:text-white font-semibold transition py-1"
                    >
                      {isExpanded ? 'कम विवरण देखें ▲' : 'पात्रता व दस्तावेज देखें ▼'}
                    </button>
                  </div>
                </div>

                {/* Expanded Details: Eligibility & Documents */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-zinc-800/90 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs animate-in fade-in duration-150">
                    {/* Eligibility */}
                    <div className="p-3.5 rounded-xl bg-[#0b0f17] border border-zinc-800/80">
                      <h4 className="font-bold text-amber-400 mb-2 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        {t('eligibility', 'पात्रता मानदंड')}
                      </h4>
                      <ul className="space-y-1.5 text-zinc-300">
                        {yojana.eligibility.map((el, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-zinc-500">•</span>
                            <span>{el}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Documents */}
                    <div className="p-3.5 rounded-xl bg-[#0b0f17] border border-zinc-800/80">
                      <h4 className="font-bold text-amber-400 mb-2 flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5 text-cyan-400" />
                        {t('documents_required', 'आवश्यक दस्तावेज')}
                      </h4>
                      <ul className="space-y-1.5 text-zinc-300">
                        {yojana.documents.map((doc, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-zinc-500">•</span>
                            <span>{doc}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-2.5 pt-2 border-t border-zinc-800 text-[11px] text-zinc-400 flex items-center justify-between">
                        <span>{t('last_date', 'अंतिम तिथि')}: <strong className="text-white">{yojana.lastDate}</strong></span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* YojnaSaathi Cross-Link Callout */}
      <div className="mt-10 p-5 rounded-2xl bg-gradient-to-r from-amber-950/40 via-orange-950/30 to-[#121824] border border-amber-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/20 border border-[#FF6B00]/40 flex items-center justify-center flex-shrink-0">
            <Calculator className="w-5 h-5 text-[#FF6B00]" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">
              {t('yojnasaathi_link_text', 'अधिक विस्तृत योजना पात्रता जांच एवं कैलकुलेटर के लिए YojnaSaathi.org पर जाएं')}
            </h4>
            <p className="text-xs text-zinc-400 mt-0.5">
              Detailed eligibility calculator, family income checker & step-by-step subsidy guides.
            </p>
          </div>
        </div>
        <a
          href="https://yojnasaathi.org"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs font-bold text-amber-400 transition flex-shrink-0"
        >
          <span>Visit YojnaSaathi.org</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
};
