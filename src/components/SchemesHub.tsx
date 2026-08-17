import React, { useState } from 'react';
import { Search, Mic, Sparkles, Filter, ShieldCheck, ArrowRight, CheckCircle2, Award, Heart, BookOpen, Building2, ExternalLink, MapPin, RefreshCw } from 'lucide-react';
import { ServiceItem, StateId } from '../types';
import { getStateInfo } from '../data/statesData';

interface SchemesHubProps {
  allServices: ServiceItem[];
  onSelectScheme: (scheme: ServiceItem) => void;
  onOpenVoiceSearch: () => void;
  currentStateId?: StateId;
}

export const SchemesHub: React.FC<SchemesHubProps> = ({
  allServices,
  onSelectScheme,
  onOpenVoiceSearch,
  currentStateId = 'delhi'
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const stateInfo = getStateInfo(currentStateId);

  // Filter only items that are categorized as Government Schemes or have scheme tags
  const allSchemes = allServices.filter(s =>
    s.category === 'Government Schemes' ||
    (s.secondaryCategories && s.secondaryCategories.includes('Government Schemes')) ||
    s.schemeType !== undefined ||
    s.tags.some(t => t.toLowerCase().includes('yojana') || t.toLowerCase().includes('scheme'))
  );

  const filterTabs = [
    { id: 'all', label: 'All Schemes (सभी योजनाएं)' },
    { 
      id: 'state-local', 
      label: currentStateId === 'delhi' 
        ? 'Delhi Schemes (दिल्ली सरकार)' 
        : currentStateId === 'national' 
        ? 'Central Schemes (केंद्र सरकार)' 
        : `${stateInfo.name} Schemes (${stateInfo.hindiName})` 
    },
    { id: 'women', label: 'Women Schemes (महिला योजनाएं)' },
    { id: 'farmer', label: 'Farmer Schemes (किसान योजनाएं)' },
    { id: 'student', label: 'Student Schemes (छात्रवृत्ति)' },
    { id: 'subsidy', label: 'Subsidies (सब्सिडी)' },
    { id: 'pension', label: 'Pensions (पेंशन)' },
    { id: 'healthcare', label: 'Healthcare (स्वास्थ्य)' }
  ];

  const filteredSchemes = allSchemes.filter(sch => {
    // Filter match
    let matchesFilter = true;
    if (selectedFilter === 'state-local') {
      if (currentStateId === 'delhi') {
        matchesFilter = sch.state === 'delhi';
      } else if (currentStateId === 'national') {
        matchesFilter = sch.state === 'national';
      } else {
        matchesFilter = sch.state === currentStateId || sch.state === 'all' || sch.state === 'national';
      }
    } else if (selectedFilter === 'women') {
      matchesFilter = sch.schemeType === 'Women Scheme' || (sch.secondaryCategories && sch.secondaryCategories.includes('Women Scheme'));
    } else if (selectedFilter === 'farmer') {
      matchesFilter = sch.schemeType === 'Farmer Scheme' || (sch.secondaryCategories && sch.secondaryCategories.includes('Farmer Scheme'));
    } else if (selectedFilter === 'student') {
      matchesFilter = sch.schemeType === 'Student Scheme' || (sch.secondaryCategories && sch.secondaryCategories.includes('Student Scheme'));
    } else if (selectedFilter === 'subsidy') {
      matchesFilter = sch.schemeType === 'Subsidy' || (sch.secondaryCategories && sch.secondaryCategories.includes('Subsidy'));
    } else if (selectedFilter === 'pension') {
      matchesFilter = sch.schemeType === 'Pension' || (sch.secondaryCategories && sch.secondaryCategories.includes('Pension'));
    } else if (selectedFilter === 'healthcare') {
      matchesFilter = sch.schemeType === 'Healthcare Scheme' || (sch.secondaryCategories && sch.secondaryCategories.includes('Healthcare Scheme'));
    }

    // Search match
    const q = searchQuery.toLowerCase();
    const matchesSearch = searchQuery === '' ||
      sch.title.toLowerCase().includes(q) ||
      sch.hindiTitle.includes(searchQuery) ||
      sch.department.toLowerCase().includes(q) ||
      sch.tags.some(t => t.toLowerCase().includes(q));

    return matchesFilter && matchesSearch;
  });

  // Specifically locate Delhi Lakshmi Yojana for top feature card if in Delhi
  const featuredScheme = currentStateId === 'delhi'
    ? allSchemes.find(s => s.id === 'delhi-lakshmi-yojana') || allSchemes[0]
    : allSchemes.find(s => s.state === 'national' && (s.schemeType === 'Women Scheme' || s.id.includes('pm') || s.id.includes('ayushman'))) || allSchemes[0];

  return (
    <section className="py-10 px-4 max-w-7xl mx-auto space-y-8 animate-fadeIn">
      {/* Top Banner Header */}
      <div className="border-b border-zinc-800 pb-6">
        <span className="text-xs font-bold text-[#FF6B00] uppercase tracking-wider flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5" /> Official Government Schemes Portal
        </span>
        <h2 className="text-3xl sm:text-5xl font-black text-white mt-1">
          Government Schemes & Subsidies (सरकारी योजनाएं)
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-3xl">
          Authentic information on Delhi Government and Central Welfare Schemes based strictly on official portals (<span className="text-amber-300">dly.delhi.gov.in</span>, <span className="text-amber-300">myscheme.gov.in</span>). 100% Free & Direct Official Links.
        </p>
      </div>

      {/* Featured Spotlight Hero Card */}
      {featuredScheme && (
        <div
          onClick={() => onSelectScheme(featuredScheme)}
          className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#181109] via-[#2A180B] to-[#121824] border-2 border-[#FF6B00]/70 hover:border-[#FF6B00] transition cursor-pointer shadow-2xl relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 px-4 py-1.5 rounded-bl-2xl bg-[#FF6B00] text-white text-xs font-extrabold uppercase tracking-wider flex items-center gap-1 shadow-md">
            <Sparkles className="w-3.5 h-3.5" /> {currentStateId === 'delhi' ? 'Featured Delhi Scheme' : `Featured Scheme • ${stateInfo.name}`}
          </div>

          <div className="space-y-4 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#FF6B00]/20 text-[#FF6B00] text-xs font-bold border border-[#FF6B00]/40">
                {featuredScheme.isNew ? 'NEW • ' : ''}{featuredScheme.department}
              </span>
              <span className="text-xs text-zinc-300 font-medium">
                {featuredScheme.state === 'national' ? 'Central Welfare Portal (All India)' : `${stateInfo.name} Portal`}
              </span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-black text-white group-hover:text-[#FF6B00] transition">
              {featuredScheme.title}
            </h3>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {featuredScheme.shortDesc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
              {featuredScheme.incomeCriteria && (
                <div className="p-3 rounded-xl bg-black/40 border border-zinc-800 text-zinc-300">
                  <span className="text-zinc-500 block font-semibold">Income Limit:</span>
                  <span className="font-bold text-amber-300">{featuredScheme.incomeCriteria}</span>
                </div>
              )}
              <div className="p-3 rounded-xl bg-black/40 border border-zinc-800 text-zinc-300">
                <span className="text-zinc-500 block font-semibold">Official Verification:</span>
                <span className="font-bold text-emerald-400">100% Free & Verified .gov.in</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2 text-sm font-bold text-[#FF6B00] group-hover:translate-x-1 transition">
              <span>View Eligibility, Required Documents & Apply Online</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      )}

      {/* Search & Filter Control Bar */}
      <div className="flex flex-col md:flex-row gap-3 items-stretch">
        <div className="relative flex-1">
          <Search className="w-5 h-5 text-zinc-500 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={`Search schemes for ${stateInfo.name}: Ayushman, PM Kisan, Pension, Subsidy, Education...`}
            className="w-full bg-[#121824] border border-zinc-800 rounded-2xl pl-12 pr-12 py-3.5 text-sm text-white focus:outline-none focus:border-[#FF6B00]"
          />
          <button
            onClick={onOpenVoiceSearch}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-zinc-800 text-[#FF6B00] hover:bg-zinc-700 transition"
            title="Voice Search"
          >
            <Mic className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {filterTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedFilter(tab.id)}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition ${
              selectedFilter === tab.id
                ? 'bg-[#FF6B00] text-white shadow-lg'
                : 'bg-[#121824] text-zinc-400 hover:text-white border border-zinc-800'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Scheme Cards Grid */}
      {filteredSchemes.length === 0 ? (
        <div className="p-8 rounded-2xl bg-[#121824] border border-zinc-800 text-center space-y-4 max-w-2xl mx-auto">
          <div className="w-12 h-12 rounded-full bg-amber-500/10 text-[#FF6B00] flex items-center justify-center mx-auto">
            <RefreshCw className="w-6 h-6 animate-spin" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-white">
              Coming Soon - Data Updating (डेटा अपडेट जारी है)
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              State-level specific dataset for <strong className="text-white">{stateInfo.name} ({stateInfo.hindiName})</strong> under this category is currently updating. You can explore all Central Government Schemes & Services active in your state.
            </p>
          </div>
          <button
            onClick={() => setSelectedFilter('all')}
            className="px-4 py-2 rounded-xl bg-[#FF6B00] text-white text-xs font-bold shadow hover:bg-[#E65100] transition"
          >
            Show All Central & State Schemes
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSchemes.map((sch) => (
            <div
              key={sch.id}
              onClick={() => onSelectScheme(sch)}
              className="p-6 rounded-2xl bg-[#121824] border border-zinc-800 hover:border-[#FF6B00]/60 transition cursor-pointer flex flex-col justify-between space-y-4 group shadow-lg"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  {sch.isNew && (
                    <span className="px-2.5 py-0.5 rounded-full bg-[#FF6B00]/20 text-[#FF6B00] border border-[#FF6B00]/40 text-[10px] font-extrabold uppercase">
                      NEW BADGE
                    </span>
                  )}
                  <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded-full">
                    Official .gov.in
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-[#FF6B00] transition leading-snug">
                  {sch.title}
                </h3>
                <p className="text-xs text-[#FF6B00] font-medium">{sch.hindiTitle}</p>

                <p className="text-xs text-zinc-400 line-clamp-3 leading-relaxed">
                  {sch.shortDesc}
                </p>

                {sch.incomeCriteria && (
                  <div className="p-2.5 rounded-xl bg-[#0B0F17] border border-zinc-800 text-xs text-zinc-300">
                    <span className="text-zinc-500 font-semibold block">Income Criteria:</span>
                    <span className="font-bold text-amber-300">{sch.incomeCriteria}</span>
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs font-bold text-[#FF6B00]">
                <span>View Details & Official Link</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
