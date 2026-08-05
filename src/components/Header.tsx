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
  HelpCircle,
  MessageSquare
} from 'lucide-react';
import { ActiveTab, StateId } from '../types';
import { STATES_LIST } from '../data/statesData';

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [stateDropdownOpen, setStateDropdownOpen] = useState(false);

  const currentState = STATES_LIST.find(s => s.id === currentStateId) || STATES_LIST[0];

  const handleNavClick = (tab: ActiveTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0B0F17]/95 backdrop-blur-md border-b border-zinc-800 text-zinc-100 transition-colors duration-200">
      {/* Top Utility Ticker Bar */}
      <div className="bg-[#121824] border-b border-zinc-800/80 px-3 py-1.5 text-xs text-zinc-400">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Left: Free & Official Banner */}
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 text-[#FF6B00] font-semibold">
              <Sparkles className="w-3.5 h-3.5" /> 100% Free & Official Portal
            </span>
            <span className="hidden sm:inline text-zinc-600">|</span>
            <span className="hidden sm:inline text-zinc-400">
              No Login Required • No Personal Data Collected • .gov.in Links
            </span>
          </div>

          {/* Right: Emergency & Accessibility */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenEmergency}
              className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-red-950/80 text-red-400 border border-red-800/50 hover:bg-red-900/80 text-xs font-medium transition"
              id="emergency-top-btn"
            >
              <PhoneCall className="w-3 h-3 text-red-400 animate-pulse" />
              <span>Delhi Emergency Numbers (112)</span>
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
                Delhi
              </span>
            </div>
            <p className="text-xs text-zinc-400 font-medium">
              सभी सरकारी काम एक जगह, बिल्कुल फ्री
            </p>
          </div>
        </div>

        {/* State Selector Badge Dropdown */}
        <div className="relative">
          <button
            onClick={() => setStateDropdownOpen(!stateDropdownOpen)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-xs font-semibold text-zinc-200 transition"
            id="state-selector-btn"
          >
            <MapPin className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span>State: {currentState.name}</span>
            <ChevronDown className="w-3.5 h-3.5 text-zinc-400" />
          </button>

          {stateDropdownOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-[#121824] border border-zinc-700 rounded-xl shadow-2xl p-2 z-50 text-xs">
              <div className="px-2 py-1.5 text-[11px] font-bold text-zinc-400 uppercase tracking-wider border-b border-zinc-800 mb-1">
                Select State Architecture (Phase 1 Focus)
              </div>
              {STATES_LIST.map((st) => (
                <button
                  key={st.id}
                  onClick={() => {
                    if (st.isAvailable) {
                      setCurrentStateId(st.id);
                    }
                    setStateDropdownOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-lg flex items-center justify-between transition ${
                    st.id === currentStateId 
                      ? 'bg-[#FF6B00]/20 text-[#FF6B00] font-bold border border-[#FF6B00]/40' 
                      : st.isAvailable 
                        ? 'hover:bg-zinc-800 text-zinc-200' 
                        : 'opacity-50 cursor-not-allowed text-zinc-500'
                  }`}
                >
                  <div>
                    <span className="font-medium">{st.name}</span>
                    <span className="block text-[10px] text-zinc-400">{st.hindiName}</span>
                  </div>
                  {st.isAvailable ? (
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                      Active
                    </span>
                  ) : (
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400">
                      Phase 2
                    </span>
                  )}
                </button>
              ))}
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
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Schemes & Subsidies</span>
          </button>
          <button
            onClick={() => handleNavClick('delhi-govt')}
            className={`px-3 py-2 rounded-lg transition ${activeTab === 'delhi-govt' ? 'bg-[#FF6B00] text-white font-bold' : 'hover:bg-zinc-800 hover:text-white'}`}
          >
            Delhi Govt
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
            <span>Banking</span>
          </button>
          <button
            onClick={() => handleNavClick('finders')}
            className={`px-3 py-2 rounded-lg transition flex items-center gap-1 ${activeTab === 'finders' ? 'bg-[#FF6B00] text-white font-bold' : 'hover:bg-zinc-800 hover:text-white'}`}
          >
            <Compass className="w-3.5 h-3.5 text-amber-400" />
            <span>Finders</span>
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
            <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
            <span>Blog</span>
          </button>
          <button
            onClick={() => handleNavClick('faqs')}
            className={`px-3 py-2 rounded-lg transition flex items-center gap-1 ${activeTab === 'faqs' ? 'bg-[#FF6B00] text-white font-bold' : 'hover:bg-zinc-800 hover:text-white'}`}
          >
            <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>1000+ FAQs</span>
          </button>
          <button
            onClick={() => handleNavClick('auto-update')}
            className={`px-3 py-2 rounded-lg transition flex items-center gap-1 text-amber-300 ${activeTab === 'auto-update' ? 'bg-[#FF6B00] text-white font-bold' : 'hover:bg-zinc-800 hover:text-white'}`}
            title="Auto Update Engine"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>Auto Updates</span>
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
        <div className="xl:hidden bg-[#0D121F] border-b border-zinc-800 px-4 py-4 space-y-2 text-sm text-zinc-200">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-zinc-800">
            <button
              onClick={() => handleNavClick('home')}
              className={`p-2.5 rounded-lg text-left font-medium ${activeTab === 'home' ? 'bg-[#FF6B00] text-white font-bold' : 'bg-zinc-900 text-zinc-200'}`}
            >
              🏠 Home
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
              onClick={() => handleNavClick('finders')}
              className={`p-2.5 rounded-lg text-left font-medium ${activeTab === 'finders' ? 'bg-[#FF6B00] text-white font-bold' : 'bg-zinc-900 text-zinc-200'}`}
            >
              🔍 Finders Hub
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
              onClick={() => handleNavClick('delhi-govt')}
              className={`p-2.5 rounded-lg text-left font-medium ${activeTab === 'delhi-govt' ? 'bg-[#FF6B00] text-white font-bold' : 'bg-zinc-900 text-zinc-200'}`}
            >
              🏛️ Delhi Govt
            </button>
            <button
              onClick={() => handleNavClick('complaints')}
              className={`p-2.5 rounded-lg text-left font-medium ${activeTab === 'complaints' ? 'bg-[#FF6B00] text-white font-bold' : 'bg-zinc-900 text-zinc-200'}`}
            >
              📢 Complaints & Grievances
            </button>
            <button
              onClick={() => handleNavClick('downloads')}
              className={`p-2.5 rounded-lg text-left font-medium ${activeTab === 'downloads' ? 'bg-[#FF6B00] text-white font-bold' : 'bg-zinc-900 text-zinc-200'}`}
            >
              📄 Downloads
            </button>
            <button
              onClick={() => handleNavClick('blog')}
              className={`p-2.5 rounded-lg text-left font-medium ${activeTab === 'blog' ? 'bg-[#FF6B00] text-white font-bold' : 'bg-zinc-900 text-zinc-200'}`}
            >
              📚 Knowledge Base
            </button>
            <button
              onClick={() => handleNavClick('faqs')}
              className={`p-2.5 rounded-lg text-left font-medium col-span-2 ${activeTab === 'faqs' ? 'bg-[#FF6B00] text-white font-bold' : 'bg-zinc-900 text-amber-300 border border-amber-500/30'}`}
            >
              ❓ 1000+ Sarkari Seva FAQs Hub
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
