import React, { useState } from 'react';
import { Search, ShieldCheck, Lock, CheckCircle2, FileText, ArrowRight, Sparkles, MapPin } from 'lucide-react';
import { ServiceItem, StateId } from '../types';
import { getStateInfo } from '../data/statesData';

interface HeroSectionProps {
  allServices: ServiceItem[];
  onSelectService: (service: ServiceItem) => void;
  onSearchQuery: (query: string) => void;
  currentStateId?: StateId;
  onOpenStateSelector?: () => void;
  onNavigateToFinder?: (finderId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  allServices,
  onSelectService,
  onSearchQuery,
  currentStateId = 'delhi',
  onOpenStateSelector,
  onNavigateToFinder
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const stateInfo = getStateInfo(currentStateId);

  const sampleKeywords = [
    'Aadhaar', 'PAN', 'Passport', 'Driving Licence', 'Birth Certificate',
    'Marriage Certificate', 'Income Certificate', 'Current Account', 'Saving Account',
    'SWIFT Code', 'IFSC Code', 'Property Tax', 'Water Bill', 'Electricity Bill', 'Traffic Challan'
  ];

  const quickFinders = [
    { id: 'pincode', label: '📍 Find Pincode', hindi: 'पिनकोड खोजें' },
    { id: 'ifsc', label: '🏦 Find IFSC Code', hindi: 'IFSC बैंक कोड' },
    { id: 'hospital', label: '🏥 Find Hospital', hindi: 'सरकारी अस्पताल' },
    { id: 'police-station', label: '👮 Find Police Station', hindi: 'थाना खोजें' },
    { id: 'rto-office', label: '🚗 Find RTO Office', hindi: 'RTO कार्यालय' },
    { id: 'govt-offices', label: '🏛️ Find Govt Office / Court', hindi: 'SDM व कचहरी' },
    { id: 'aadhaar-centre', label: '🆔 Aadhaar Seva Kendra', hindi: 'आधार सेवा केंद्र' },
    { id: 'jan-aushadhi', label: '💊 Jan Aushadhi Kendra', hindi: 'जन औषधि केंद्र' },
  ];

  // Matching services for auto-suggestions
  const filteredSuggestions = searchTerm.trim() === ''
    ? []
    : allServices.filter(s =>
        s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.hindiTitle.includes(searchTerm) ||
        s.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()))
      ).slice(0, 6);

  const handleQuickKeywordClick = (kw: string) => {
    setSearchTerm(kw);
    onSearchQuery(kw);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0B0F17] via-[#101726] to-[#0D121D] pt-10 pb-16 px-4 text-center border-b border-zinc-800">
      {/* Background Accent Mesh Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-r from-[#FF6B00]/10 via-amber-500/5 to-orange-600/10 blur-3xl pointer-events-none rounded-full" />

      <div className="relative max-w-5xl mx-auto space-y-6">
        {/* Dynamic Official State / India Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-700/80 text-xs font-semibold text-zinc-300 shadow-md">
          <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-ping" />
          <span>
            {currentStateId === 'delhi'
              ? 'SarkarSaathi.org • Delhi Government Citizen Portal'
              : currentStateId === 'national'
              ? 'SarkarSaathi.org • All India Central Services Portal'
              : `SarkarSaathi.org • ${stateInfo.name} (${stateInfo.hindiName}) Citizen Portal`}
          </span>
          {onOpenStateSelector && (
            <button
              onClick={onOpenStateSelector}
              className="ml-1 text-[11px] text-[#FF6B00] hover:underline font-bold"
            >
              (Change)
            </button>
          )}
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
          सभी सरकारी काम एक जगह, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-orange-400 to-amber-300">बिल्कुल फ्री</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed font-normal">
          {currentStateId === 'delhi'
            ? 'Delhi Government Services, Government Guides, Banking Guides, Official Links, Government Tools, Finders, Calculators and Step-by-Step Help.'
            : `${stateInfo.name} & Central Government Services, Official Portals, Banking Guides, Finders, Calculators and 100% Verified Step-by-Step Help.`}
        </p>

        {/* Large Smart Search Bar */}
        <div className="relative max-w-3xl mx-auto pt-2">
          <div className={`relative flex items-center bg-[#141C2C] border-2 rounded-2xl shadow-2xl transition-all duration-200 ${isFocused ? 'border-[#FF6B00] shadow-[#FF6B00]/20' : 'border-zinc-700'}`}>
            <Search className="w-6 h-6 text-[#FF6B00] ml-4 flex-shrink-0" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                onSearchQuery(e.target.value);
              }}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setTimeout(() => setIsFocused(false), 200)}
              placeholder="खोजें: Aadhaar, PAN, Passport, Driving Licence, Property Tax, Water Bill..."
              className="w-full bg-transparent px-4 py-4 sm:py-5 text-white text-base sm:text-lg placeholder-zinc-500 focus:outline-none"
              id="main-hero-search-input"
            />
            {searchTerm && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  onSearchQuery('');
                }}
                className="mr-3 px-2 py-1 text-xs bg-zinc-800 text-zinc-400 hover:text-white rounded"
              >
                Clear
              </button>
            )}
            <button
              onClick={() => onSearchQuery(searchTerm)}
              className="mr-2 px-5 py-3 sm:py-3.5 bg-gradient-to-r from-[#FF6B00] to-[#E65100] text-white font-bold rounded-xl shadow-lg hover:brightness-110 transition flex items-center gap-1 text-sm sm:text-base"
            >
              <span>Search</span>
            </button>
          </div>

          {/* Autocomplete Dropdown */}
          {isFocused && filteredSuggestions.length > 0 && (
            <div className="absolute left-0 right-0 mt-2 bg-[#121824] border border-zinc-700 rounded-2xl shadow-2xl p-2 z-50 text-left divide-y divide-zinc-800">
              {filteredSuggestions.map((srv) => (
                <div
                  key={srv.id}
                  onClick={() => {
                    onSelectService(srv);
                    setIsFocused(false);
                  }}
                  className="p-3 hover:bg-[#FF6B00]/15 rounded-xl cursor-pointer transition flex items-center justify-between group"
                >
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-[#FF6B00]">{srv.title}</h4>
                    <p className="text-xs text-zinc-400">{srv.hindiTitle} • <span className="text-zinc-500">{srv.department}</span></p>
                  </div>
                  <span className="text-xs font-semibold px-2 py-1 rounded bg-zinc-800 text-[#FF6B00] border border-zinc-700">
                    Official .gov.in
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Search Example Chips */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 mt-4 text-xs text-zinc-400">
            <span className="text-zinc-500 font-semibold">Popular Searches:</span>
            {sampleKeywords.map((kw) => (
              <button
                key={kw}
                onClick={() => handleQuickKeywordClick(kw)}
                className="px-2.5 py-1 rounded-lg bg-zinc-900/90 border border-zinc-800 hover:border-[#FF6B00]/50 hover:text-[#FF6B00] transition text-zinc-300 font-medium"
              >
                {kw}
              </button>
            ))}
          </div>

          {/* Quick Government Finders Bar */}
          <div className="mt-6 pt-5 border-t border-zinc-800/60">
            <div className="flex items-center justify-between mb-3 px-1">
              <span className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#FF6B00]" />
                Direct Government Finders for <strong className="text-white underline decoration-[#FF6B00]">{stateInfo.name}</strong>:
              </span>
              <span className="text-[11px] text-zinc-400 font-medium hidden sm:inline">
                Click any tool to locate in {stateInfo.name}
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {quickFinders.map((f) => (
                <button
                  key={f.id}
                  onClick={() => {
                    if (onNavigateToFinder) {
                      onNavigateToFinder(f.id);
                    }
                  }}
                  className="p-2.5 rounded-xl bg-[#141D2E] hover:bg-[#FF6B00]/15 border border-zinc-800 hover:border-[#FF6B00] transition text-left flex flex-col justify-between group shadow-sm"
                >
                  <span className="text-xs font-bold text-zinc-200 group-hover:text-[#FF6B00] flex items-center justify-between">
                    {f.label}
                    <ArrowRight className="w-3 h-3 text-zinc-500 group-hover:text-[#FF6B00] group-hover:translate-x-0.5 transition-transform" />
                  </span>
                  <span className="text-[10px] text-zinc-400 group-hover:text-zinc-300 mt-1">{f.hindi}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* TRUST BADGES SECTION */}
        <div className="pt-8 border-t border-zinc-800/80 max-w-4xl mx-auto">
          <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">
            Our Citizen Commitment & Guarantee
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-center">
            <div className="p-3 rounded-xl bg-[#121824] border border-zinc-800 flex flex-col items-center justify-center gap-1 text-zinc-200 hover:border-emerald-500/50 transition">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span className="text-xs font-bold">100% Official Links</span>
            </div>
            <div className="p-3 rounded-xl bg-[#121824] border border-zinc-800 flex flex-col items-center justify-center gap-1 text-zinc-200 hover:border-[#FF6B00]/50 transition">
              <ShieldCheck className="w-5 h-5 text-[#FF6B00]" />
              <span className="text-xs font-bold">No Fees</span>
            </div>
            <div className="p-3 rounded-xl bg-[#121824] border border-zinc-800 flex flex-col items-center justify-center gap-1 text-zinc-200 hover:border-blue-500/50 transition">
              <Lock className="w-5 h-5 text-blue-400" />
              <span className="text-xs font-bold">No Login</span>
            </div>
            <div className="p-3 rounded-xl bg-[#121824] border border-zinc-800 flex flex-col items-center justify-center gap-1 text-zinc-200 hover:border-purple-500/50 transition">
              <Lock className="w-5 h-5 text-purple-400" />
              <span className="text-xs font-bold">No Data Stored</span>
            </div>
            <div className="p-3 rounded-xl bg-[#121824] border border-zinc-800 flex flex-col items-center justify-center gap-1 text-zinc-200 hover:border-amber-500/50 transition">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span className="text-xs font-bold">Free Forever</span>
            </div>
            <div className="p-3 rounded-xl bg-[#121824] border border-zinc-800 flex flex-col items-center justify-center gap-1 text-zinc-200 hover:border-cyan-500/50 transition">
              <FileText className="w-5 h-5 text-cyan-400" />
              <span className="text-xs font-bold">Step-by-Step Guides</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
