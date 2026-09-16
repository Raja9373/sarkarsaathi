import React from 'react';
import { ShieldCheck, Menu, X } from 'lucide-react';
import { SarkarSaathiLogo } from './SarkarSaathiLogo';

interface NavbarProps {
  currentRoute: string;
  onNavigate: (route: string) => void;
}

export function Navbar({ currentRoute, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Investments', path: '/investments' },
    { label: 'Schemes', path: '/investment-schemes' },
    { label: 'Opportunities', path: '/opportunities' },
    { label: 'Tenders', path: '/tenders' },
    { label: 'News', path: '/news' },
    { label: 'Saved', path: '/saved' },
    { label: 'Recent', path: '/recently-viewed' },
    { label: 'Comparisons', path: '/comparisons' },
    { label: 'Tools', path: '/tools' },
    { label: 'Official Sources', path: '/official-sources' },
  ];

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3 cursor-pointer select-none" onClick={() => onNavigate('/')}>
          <SarkarSaathiLogo className="w-10 h-10" />
          <div className="flex flex-col justify-center">
            <span className="text-lg sm:text-xl font-bold tracking-tight text-indigo-950 leading-tight">
              SarkarSaathi
            </span>
            <span className="text-[11px] sm:text-xs text-slate-500 font-medium whitespace-nowrap leading-tight">
              Independent information platform
            </span>
          </div>
        </div>

        <nav className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => onNavigate(item.path)}
              className={`text-sm font-medium transition ${
                currentRoute === item.path ? 'text-indigo-600 font-semibold' : 'text-slate-600 hover:text-indigo-600'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center space-x-3">
          <div className="hidden sm:flex items-center space-x-1.5 text-xs bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-lg border border-indigo-100 font-medium whitespace-nowrap">
            <ShieldCheck className="w-4 h-4 text-indigo-600 flex-shrink-0" />
            <span>Curated from Verified .gov.in Sources</span>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => {
                onNavigate(item.path);
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left py-2 px-3 rounded-lg text-sm font-medium ${
                currentRoute === item.path ? 'bg-indigo-50 text-indigo-700' : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

export function Footer({ onNavigate }: { onNavigate: (route: string) => void }) {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <div className="flex items-center justify-center sm:justify-start space-x-2.5 mb-2">
              <SarkarSaathiLogo className="w-7 h-7" />
              <span className="text-lg font-bold text-white">SarkarSaathi.org</span>
              <span className="text-xs bg-indigo-900 text-indigo-300 px-2 py-0.5 rounded font-mono">v3.0</span>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              India's Private Aggregator for Government Schemes & Tenders. Information curated from verified .gov.in sources.
            </p>
          </div>
          <div className="flex space-x-6 text-xs">
            <button onClick={() => onNavigate('/')} className="hover:text-white transition">Privacy Policy</button>
            <button onClick={() => onNavigate('/')} className="hover:text-white transition">Terms of Service</button>
            <button onClick={() => onNavigate('/official-sources')} className="hover:text-white transition">Government Sources Directory</button>
          </div>
        </div>

        {/* Legal Compliance Disclaimer */}
        <div className="pt-6 border-t border-slate-800/80">
          <p className="text-xs leading-relaxed text-slate-400 text-center sm:text-left">
            <span className="font-semibold text-slate-300">Disclaimer:</span> SarkarSaathi.org is a private, independent information portal. We are NOT affiliated with any government body. All data is sourced from official .gov.in portals. Please always verify information on the respective official government website before taking any action.
          </p>
        </div>
      </div>
    </footer>
  );
}
