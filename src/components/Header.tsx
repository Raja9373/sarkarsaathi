import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  ShieldAlert, 
  Search, 
  Menu, 
  X, 
  ChevronDown, 
  Sparkles, 
  Sun, 
  Moon, 
  Type, 
  PhoneCall, 
  ExternalLink,
  BookOpen,
  Calculator,
  Compass,
  FileText,
  CreditCard,
  Landmark,
  Layers,
  HeartHandshake,
  Gift,
  Newspaper,
  MessageSquare
} from 'lucide-react';
import { ActiveTab, StateId } from '../types';
import { STATES_LIST, getStateInfo } from '../data/statesData';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useTranslation } from '../lib/i18nContext';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  currentStateId: StateId;
  setCurrentStateId: (id: StateId) => void;
  onOpenEmergency: () => void;
  fontSizeLevel: number;
  setFontSizeLevel: React.Dispatch<React.SetStateAction<number>>;
  highContrast: boolean;
  setHighContrast: (val: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  currentStateId,
  setCurrentStateId,
  onOpenEmergency,
  fontSizeLevel,
  setFontSizeLevel,
  highContrast,
  setHighContrast,
}) => {
  const { t, lang } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [stateDropdownOpen, setStateDropdownOpen] = useState(false);
  const [stateSearchQuery, setStateSearchQuery] = useState('');

  const currentState = STATES_LIST.find(s => s.id === currentStateId) || STATES_LIST[0];

  const handleNavClick = (tab: ActiveTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const filteredStates = STATES_LIST.filter(st => {
    const q = stateSearchQuery.trim().toLowerCase();
    if (!q) return true;
    return (
      st.name.toLowerCase().includes(q) ||
      st.hindiName.includes(stateSearchQuery) ||
      st.code.toLowerCase().includes(q) ||
      st.capital.toLowerCase().includes(q) ||
      (st.popularCities && st.popularCities.some(c => c.toLowerCase().includes(q)))
    );
  });

  const popularQuickSelections = [
    { id: 'national', label: 'All India' },
    { id: 'delhi', label: 'Delhi' },
    { id: 'maharashtra', label: 'Mumbai / Pune' },
    { id: 'karnataka', label: 'Bangalore' },
    { id: 'uttar-pradesh', label: 'UP (Lucknow)' },
    { id: 'bihar', label: 'Bihar (Patna)' },
    { id: 'gujarat', label: 'Gujarat (Ahmedabad)' },
    { id: 'rajasthan', label: 'Rajasthan (Jaipur)' },
    { id: 'telangana', label: 'Hyderabad' },
    { id: 'tamil-nadu', label: 'Chennai' },
    { id: 'west-bengal', label: 'Kolkata' },
    { id: 'madhya-pradesh', label: 'MP (Bhopal)' },
    { id: 'punjab', label: 'Punjab' },
    { id: 'kerala', label: 'Kerala' },
    { id: 'assam', label: 'Assam' },
    { id: 'chandigarh', label: 'Chandigarh' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0B0F17]/95 backdrop-blur-md border-b border-zinc-800 text-zinc-100 transition-colors duration-200">
      {/* Top Utility Ticker Bar */}
      <div className="bg-[#121824] border-b border-zinc-800/80 px-3 py-1.5 text-xs text-zinc-400">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Left: Free & Official Banner */}
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 text-[#FF6B00] font-semibold">
              <Sparkles className="w-3.5 h-3.5" /> {t('free_official_banner', '100% Free & Official Portal • Direct .gov.in Links')}
            </span>
          </div>

          {/* Right: Language Switcher, Emergency & Accessibility */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Multi-Language Switcher (13 Languages) */}
            <LanguageSwitcher />

            <button
              onClick={onOpenEmergency}
              className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-red-950/80 text-red-400 border border-red-800/50 hover:bg-red-900/80 text-xs font-medium transition"
              id="emergency-top-btn"
            >
              <PhoneCall className="w-3 h-3 text-red-400 animate-pulse" />
              <span>{currentState.name} {t('emergency_helpline', 'Emergency (112)')}</span>
            </button>

            {/* Font Adjuster */}
            <div className="hidden md:flex items-center gap-1 bg-zinc-900 border border-zinc-800 rounded px-1.5 py-0.5 text-zinc-300">
              <Type className="w-3 h-3 text-zinc-400" />
              <button 
                onClick={() => setFontSizeLevel(prev => Math.max(-1, prev - 1))}
                className="px-1 hover:text-white font-mono text-xs"
                title="Decrease font size"
              >
                A-
              </button>
              <button 
                onClick={() => setFontSizeLevel(0)}
                className="px-1 hover:text-white font-mono text-xs text-zinc-400"
                title="Reset font size"
              >
                A
              </button>
              <button 
                onClick={() => setFontSizeLevel(prev => Math.min(2, prev + 1))}
                className="px-1 hover:text-white font-mono text-xs"
                title="Increase font size"
              >
                A+
              </button>
            </div>

            {/* High Contrast */}
            <button
              onClick={() => setHighContrast(!highContrast)}
              className="p-1 text-zinc-400 hover:text-white rounded hover:bg-zinc-800 transition"
              title="Toggle High Contrast"
            >
              <Moon className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Header Container */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Brand Logo & Tagline */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick('home')}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF6B00] to-[#CC5200] flex items-center justify-center text-white font-black text-xl shadow-lg shadow-[#FF6B00]/20 border border-[#FF8533]">
            S
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-black tracking-tight text-white">
                SarkarSaathi<span className="text-[#FF6B00]">.org</span>
              </span>
              <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] uppercase font-bold rounded bg-[#FF6B00]/10 text-[#FF6B00] border border-[#FF6B00]/30">
                {currentState.name}
              </span>
            </div>
            <p className="text-xs text-zinc-400 font-medium">
              {t('tagline', 'सभी सरकारी काम एक जगह, बिल्कुल फ्री')}
            </p>
          </div>
        </div>

        {/* State Selector Badge Dropdown */}
        <div className="relative">
          <button
            onClick={() => {
              setStateDropdownOpen(!stateDropdownOpen);
              setStateSearchQuery('');
            }}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-amber-500/40 text-xs font-semibold text-zinc-100 transition shadow-sm hover:border-[#FF6B00]"
            id="state-selector-btn"
            title="Change State or City"
          >
            <MapPin className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span className="max-w-[140px] sm:max-w-none truncate font-bold text-white">
              {currentState.name}
            </span>
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/80">
              {currentState.code}
            </span>
            <ChevronDown className={`w-3.5 h-3.5 text-zinc-400 transition-transform ${stateDropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {stateDropdownOpen && (
            <div className="fixed sm:absolute right-2 sm:right-0 top-16 sm:top-auto sm:mt-2 w-[calc(100vw-1rem)] sm:w-96 max-w-sm bg-[#121824] border border-zinc-700 rounded-2xl shadow-2xl p-3 z-50 text-xs text-zinc-200 animate-in fade-in zoom-in-95 duration-150">
              <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#FF6B00]" />
                  <span className="font-bold text-white text-sm">{t('select_state', 'Select State / City (राज्य चुनें)')}</span>
                </div>
                <button
                  onClick={() => setStateDropdownOpen(false)}
                  className="p-1 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Instant Search Bar */}
              <div className="mt-2.5 mb-2">
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={stateSearchQuery}
                    onChange={(e) => setStateSearchQuery(e.target.value)}
                    placeholder="Search: Punjab, Maharashtra, Bangalore, UP..."
                    className="w-full pl-8 pr-3 py-1.5 bg-zinc-900/90 border border-zinc-700 rounded-lg text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#FF6B00]"
                    autoFocus
                  />
                  {stateSearchQuery && (
                    <button
                      onClick={() => setStateSearchQuery('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>

              {/* Popular Quick Filter Chips */}
              {!stateSearchQuery && (
                <div className="mb-2">
                  <div className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider mb-1 px-1">
                    Popular Quick Select:
                  </div>
                  <div className="flex flex-wrap gap-1 max-h-16 overflow-y-auto scrollbar-thin pr-1">
                    {popularQuickSelections.map((pop) => (
                      <button
                        key={pop.id}
                        onClick={() => {
                          setCurrentStateId(pop.id);
                          setStateDropdownOpen(false);
                        }}
                        className={`px-2 py-0.5 rounded-md text-[11px] font-medium transition ${
                          currentStateId === pop.id
                            ? 'bg-[#FF6B00] text-white font-bold'
                            : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800'
                        }`}
                      >
                        {pop.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* States & UTs Scrollable List (All 28 States + 8 UTs Active) */}
              <div className="max-h-64 overflow-y-auto space-y-1 pr-1 divide-y divide-zinc-800/50">
                {filteredStates.length === 0 ? (
                  <div className="py-6 text-center text-zinc-400">
                    <p className="font-semibold text-zinc-300">No matching state or city found</p>
                    <p className="text-[11px] text-zinc-500 mt-1">Try typing Mumbai, Punjab, Bangalore, Patna, Kerala, etc.</p>
                  </div>
                ) : (
                  filteredStates.map((st) => {
                    const isSelected = st.id === currentStateId;
                    return (
                      <button
                        key={st.id}
                        onClick={() => {
                          setCurrentStateId(st.id);
                          setStateDropdownOpen(false);
                        }}
                        className={`w-full text-left px-2.5 py-2 rounded-xl flex items-center justify-between transition mt-1 ${
                          isSelected
                            ? 'bg-[#FF6B00]/15 text-white font-bold border border-[#FF6B00]/50 shadow-inner'
                            : 'hover:bg-zinc-800/80 text-zinc-200'
                        }`}
                      >
                        <div className="flex-1 min-w-0 pr-2">
                          <div className="flex items-center gap-1.5">
                            <span className="font-semibold text-xs text-white truncate">{st.name}</span>
                            <span className="text-[10px] text-zinc-400 font-normal">({st.hindiName})</span>
                          </div>
                          <div className="text-[10px] text-zinc-400 truncate mt-0.5">
                            Capital: <span className="text-zinc-300">{st.capital}</span>
                            {st.popularCities && st.popularCities.length > 0 && (
                              <span className="text-zinc-500"> • {st.popularCities.slice(0, 3).join(', ')}</span>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 shrink-0">
                          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-800/80">
                            Active ({st.code})
                          </span>
                          {isSelected && (
                            <span className="w-2 h-2 rounded-full bg-[#FF6B00]" />
                          )}
                        </div>
                      </button>
                    );
                  })
                )}
              </div>

              {/* Footer Notice */}
              <div className="mt-2 pt-2 border-t border-zinc-800 text-[10px] text-zinc-400 text-center flex items-center justify-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>All 28 States & 8 UTs Active • 100% Free Access</span>
              </div>
            </div>
          )}
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1 text-xs font-semibold text-zinc-300">
          <button
            onClick={() => handleNavClick('home')}
            className={`px-3 py-2 rounded-lg transition ${activeTab === 'home' ? 'bg-[#FF6B00] text-white font-bold' : 'hover:bg-zinc-800 hover:text-white'}`}
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('schemes')}
            className={`px-3 py-2 rounded-lg transition flex items-center gap-1 ${activeTab === 'schemes' ? 'bg-[#FF6B00] text-white font-bold' : 'hover:bg-zinc-800 hover:text-white'}`}
          >
            <Gift className="w-3.5 h-3.5 text-rose-400" />
            <span>Yojana & Subsidy</span>
          </button>
          <button
            onClick={() => handleNavClick('finders')}
            className={`px-3 py-2 rounded-lg transition flex items-center gap-1 ${activeTab === 'finders' ? 'bg-[#FF6B00] text-white font-bold' : 'hover:bg-zinc-800 hover:text-white'}`}
          >
            <Compass className="w-3.5 h-3.5 text-amber-400" />
            <span>40+ Finders</span>
          </button>
          <button
            onClick={() => handleNavClick('delhi-govt')}
            className={`px-3 py-2 rounded-lg transition flex items-center gap-1 ${activeTab === 'delhi-govt' ? 'bg-[#FF6B00] text-white font-bold' : 'hover:bg-zinc-800 hover:text-white'}`}
          >
            <Building2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>{currentState.name} Portal</span>
          </button>
          <button
            onClick={() => handleNavClick('life-events')}
            className={`px-3 py-2 rounded-lg transition flex items-center gap-1 ${activeTab === 'life-events' ? 'bg-[#FF6B00] text-white font-bold' : 'hover:bg-zinc-800 hover:text-white'}`}
          >
            <HeartHandshake className="w-3.5 h-3.5 text-pink-400" />
            <span>Life Events</span>
          </button>
          <button
            onClick={() => handleNavClick('banking')}
            className={`px-3 py-2 rounded-lg transition flex items-center gap-1 ${activeTab === 'banking' ? 'bg-[#FF6B00] text-white font-bold' : 'hover:bg-zinc-800 hover:text-white'}`}
          >
            <Landmark className="w-3.5 h-3.5 text-blue-400" />
            <span>Banking Hub</span>
          </button>
          <button
            onClick={() => handleNavClick('calculators')}
            className={`px-3 py-2 rounded-lg transition flex items-center gap-1 ${activeTab === 'calculators' ? 'bg-[#FF6B00] text-white font-bold' : 'hover:bg-zinc-800 hover:text-white'}`}
          >
            <Calculator className="w-3.5 h-3.5 text-emerald-400" />
            <span>Calculators</span>
          </button>
          <button
            onClick={() => handleNavClick('blog')}
            className={`px-3 py-2 rounded-lg transition flex items-center gap-1 ${activeTab === 'blog' ? 'bg-[#FF6B00] text-white font-bold' : 'hover:bg-zinc-800 hover:text-white'}`}
          >
            <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
            <span>Guides</span>
          </button>
          <button
            onClick={() => handleNavClick('auto-update')}
            className={`px-3 py-2 rounded-lg transition flex items-center gap-1 text-amber-300 ${activeTab === 'auto-update' ? 'bg-[#FF6B00] text-white font-bold' : 'hover:bg-zinc-800 hover:text-white'}`}
            title="Sarkari Live Updates"
          >
            <Newspaper className="w-3.5 h-3.5 text-amber-400" />
            <span>Sarkari News</span>
          </button>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0D121F] border-b border-zinc-800 px-4 py-4 space-y-3 text-sm text-zinc-200">
          {/* Quick State Switcher in Mobile Drawer */}
          <div className="p-2.5 rounded-xl bg-zinc-900/90 border border-zinc-700/80 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#FF6B00]" />
              <div>
                <div className="text-xs font-bold text-white">Active State: {currentState.name}</div>
                <div className="text-[10px] text-zinc-400">{currentState.hindiName}</div>
              </div>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setStateDropdownOpen(true);
              }}
              className="px-2.5 py-1 rounded-lg bg-[#FF6B00] text-white text-xs font-bold shadow"
            >
              {t('change_state', 'Change State')}
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-zinc-800">
            <button
              onClick={() => handleNavClick('home')}
              className={`p-2.5 rounded-lg text-left font-medium ${activeTab === 'home' ? 'bg-[#FF6B00] text-white font-bold' : 'bg-zinc-900 text-zinc-200'}`}
            >
              🏠 Home
            </button>
            <button
              onClick={() => handleNavClick('schemes')}
              className={`p-2.5 rounded-lg text-left font-medium ${activeTab === 'schemes' ? 'bg-[#FF6B00] text-white font-bold' : 'bg-zinc-900 text-zinc-200'}`}
            >
              🎁 Yojana & Subsidy
            </button>
            <button
              onClick={() => handleNavClick('finders')}
              className={`p-2.5 rounded-lg text-left font-medium ${activeTab === 'finders' ? 'bg-[#FF6B00] text-white font-bold' : 'bg-zinc-900 text-zinc-200'}`}
            >
              🔍 40+ Finders
            </button>
            <button
              onClick={() => handleNavClick('delhi-govt')}
              className={`p-2.5 rounded-lg text-left font-medium ${activeTab === 'delhi-govt' ? 'bg-[#FF6B00] text-white font-bold' : 'bg-zinc-900 text-zinc-200'}`}
            >
              🏛️ {currentState.name} Portal
            </button>
            <button
              onClick={() => handleNavClick('life-events')}
              className={`p-2.5 rounded-lg text-left font-medium ${activeTab === 'life-events' ? 'bg-[#FF6B00] text-white font-bold' : 'bg-zinc-900 text-zinc-200'}`}
            >
              ❤️ Life Events
            </button>
            <button
              onClick={() => handleNavClick('banking')}
              className={`p-2.5 rounded-lg text-left font-medium ${activeTab === 'banking' ? 'bg-[#FF6B00] text-white font-bold' : 'bg-zinc-900 text-zinc-200'}`}
            >
              🏦 Banking Hub
            </button>
            <button
              onClick={() => handleNavClick('status-check')}
              className={`p-2.5 rounded-lg text-left font-medium ${activeTab === 'status-check' ? 'bg-[#FF6B00] text-white font-bold' : 'bg-zinc-900 text-zinc-200'}`}
            >
              📋 Status Check
            </button>
            <button
              onClick={() => handleNavClick('online-apply')}
              className={`p-2.5 rounded-lg text-left font-medium ${activeTab === 'online-apply' ? 'bg-[#FF6B00] text-white font-bold' : 'bg-zinc-900 text-zinc-200'}`}
            >
              ⚡ Online Apply
            </button>
            <button
              onClick={() => handleNavClick('payments')}
              className={`p-2.5 rounded-lg text-left font-medium ${activeTab === 'payments' ? 'bg-[#FF6B00] text-white font-bold' : 'bg-zinc-900 text-zinc-200'}`}
            >
              💳 Payments
            </button>
            <button
              onClick={() => handleNavClick('calculators')}
              className={`p-2.5 rounded-lg text-left font-medium ${activeTab === 'calculators' ? 'bg-[#FF6B00] text-white font-bold' : 'bg-zinc-900 text-zinc-200'}`}
            >
              🧮 Calculators
            </button>
            <button
              onClick={() => handleNavClick('complaints')}
              className={`p-2.5 rounded-lg text-left font-medium ${activeTab === 'complaints' ? 'bg-[#FF6B00] text-white font-bold' : 'bg-zinc-900 text-zinc-200'}`}
            >
              📢 Complaints
            </button>
            <button
              onClick={() => handleNavClick('downloads')}
              className={`p-2.5 rounded-lg text-left font-medium ${activeTab === 'downloads' ? 'bg-[#FF6B00] text-white font-bold' : 'bg-zinc-900 text-zinc-200'}`}
            >
              📄 Downloads
            </button>
            <button
              onClick={() => handleNavClick('auto-update')}
              className={`p-2.5 rounded-lg text-left font-medium col-span-2 ${activeTab === 'auto-update' ? 'bg-[#FF6B00] text-white font-bold' : 'bg-zinc-900 text-amber-300 border border-amber-500/30'}`}
            >
              📰 Sarkari News & PIB Updates
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
