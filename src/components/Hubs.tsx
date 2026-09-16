import React, { useState, useEffect } from 'react';
import { Search, ExternalLink, ShieldCheck, ArrowRight, Building2, TrendingUp, Award, FileText, Newspaper, Bookmark, Share2 } from 'lucide-react';
import { investmentRepository, investmentSchemeRepository, opportunityRepository, tenderRepository, newsRepository } from '../infrastructure/repositories/InvestmentRepository';
import { useSavedItems, useRecentlyViewed, ShareButton } from './SavedAndRecent';

interface HubProps {
  onNavigate: (route: string, slug?: string) => void;
}

export function HomeView({ onNavigate }: HubProps) {
  return (
    <div className="space-y-12 pb-16">
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-900 via-slate-900 to-indigo-950 text-white py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center space-x-2 bg-indigo-800/60 border border-indigo-700/50 px-3 py-1 rounded-full text-xs font-medium text-indigo-200 mb-6">
            <ShieldCheck className="w-3.5 h-3.5 text-indigo-300" />
            <span>Independent Information Platform</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Discover Verified Government <span className="text-indigo-400">Opportunities & Schemes</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
            India's Private Aggregator for Government Schemes & Tenders
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => onNavigate('/opportunities')} className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-lg transition">
              Explore Opportunities
            </button>
            <button onClick={() => onNavigate('/investments')} className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl border border-slate-700 transition">
              View Investments
            </button>
          </div>
        </div>
      </section>

      {/* Pillars Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Explore Core Pillars</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div onClick={() => onNavigate('/investments')} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition cursor-pointer">
            <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Investments</h3>
            <p className="text-slate-600 text-sm mb-4">Sovereign gold bonds, government securities, and high-yield public savings instruments.</p>
            <span className="text-indigo-600 text-xs font-semibold flex items-center space-x-1"><span>Browse Investments</span> <ArrowRight className="w-3.5 h-3.5" /></span>
          </div>

          <div onClick={() => onNavigate('/investment-schemes')} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition cursor-pointer">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Investment Schemes</h3>
            <p className="text-slate-600 text-sm mb-4">PPF, National Savings Certificates, and central welfare deposit schemes.</p>
            <span className="text-emerald-600 text-xs font-semibold flex items-center space-x-1"><span>Browse Schemes</span> <ArrowRight className="w-3.5 h-3.5" /></span>
          </div>

          <div onClick={() => onNavigate('/opportunities')} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition cursor-pointer">
            <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-4">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Opportunities</h3>
            <p className="text-slate-600 text-sm mb-4">Grants, research fellowships, startup seed funding, and innovation challenges.</p>
            <span className="text-amber-600 text-xs font-semibold flex items-center space-x-1"><span>Browse Opportunities</span> <ArrowRight className="w-3.5 h-3.5" /></span>
          </div>

          <div onClick={() => onNavigate('/tenders')} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition cursor-pointer">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Tenders</h3>
            <p className="text-slate-600 text-sm mb-4">Central and state procurement notices, e-procurement links, and RFPs.</p>
            <span className="text-blue-600 text-xs font-semibold flex items-center space-x-1"><span>Browse Tenders</span> <ArrowRight className="w-3.5 h-3.5" /></span>
          </div>

          <div onClick={() => onNavigate('/news')} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition cursor-pointer">
            <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-4">
              <Newspaper className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">News & Updates</h3>
            <p className="text-slate-600 text-sm mb-4">PIB releases, policy circulars, and official notifications.</p>
            <span className="text-purple-600 text-xs font-semibold flex items-center space-x-1"><span>Browse News</span> <ArrowRight className="w-3.5 h-3.5" /></span>
          </div>

          <div onClick={() => onNavigate('/tools')} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition cursor-pointer">
            <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center mb-4">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Calculators & Tools</h3>
            <p className="text-slate-600 text-sm mb-4">Financial calculators, scheme eligibility checkers, and comparison engines.</p>
            <span className="text-rose-600 text-xs font-semibold flex items-center space-x-1"><span>Open Tools</span> <ArrowRight className="w-3.5 h-3.5" /></span>
          </div>
        </div>
      </section>
    </div>
  );
}

export function GenericHubView({ title, type, items, onNavigate }: { title: string; type: string; items: any[]; onNavigate: (route: string, slug?: string) => void }) {
  const [search, setSearch] = useState('');

  const filtered = items.filter(i => i.title.toLowerCase().includes(search.toLowerCase()) || i.description.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">{title}</h1>
        <p className="text-slate-600 text-sm">Verified government records from official .gov.in sources.</p>
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder={`Search ${title.toLowerCase()}...`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:max-w-md px-4 py-3 bg-white border border-slate-300 rounded-xl shadow-xs text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700">{item.category}</span>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">{item.status}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm mb-4 line-clamp-3">{item.description}</p>
            </div>
            <div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 mb-4">
                <span className="font-medium text-slate-700">{item.authority}</span>
                <span className="bg-slate-100 px-2 py-0.5 rounded">{item.sourceAuthority}</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <button
                  onClick={() => onNavigate(`/${type}/${item.slug}`)}
                  className="flex-1 py-2 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-semibold transition"
                >
                  View Details
                </button>
                <a
                  href={item.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold transition flex items-center space-x-1"
                >
                  <span>Official Source</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DetailView({ item, type, onBack }: { item: any; type: string; onBack: () => void }) {
  const { savedIds, toggleSave } = useSavedItems();
  const { addRecent } = useRecentlyViewed();

  useEffect(() => {
    if (item?.id) {
      addRecent(item.id);
    }
  }, [item?.id]);

  if (!item) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Item Not Found</h2>
        <button onClick={onBack} className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl text-sm font-semibold">Back to List</button>
      </div>
    );
  }

  const isSaved = savedIds.includes(item.id);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-center justify-between mb-6">
        <button onClick={onBack} className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 flex items-center space-x-1">
          <span>← Back to {type}</span>
        </button>
        <div className="flex items-center space-x-3">
          <button
            onClick={() => toggleSave(item.id)}
            className={`px-3 py-2 rounded-xl text-xs font-semibold transition flex items-center space-x-1.5 ${
              isSaved ? 'bg-indigo-600 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
            <span>{isSaved ? 'Saved' : 'Save Item'}</span>
          </button>
          <ShareButton title={item.title} />
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
        <div className="flex items-center space-x-2 mb-4">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700">{item.category}</span>
          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">{item.status}</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">{item.title}</h1>

        <div className="text-sm font-medium text-indigo-900 bg-indigo-50/70 p-3 rounded-xl mb-6 border border-indigo-100 flex items-center space-x-2">
          <Building2 className="w-4 h-4 text-indigo-600 shrink-0" />
          <span>Authority: {item.authority}</span>
        </div>

        <div className="space-y-6 mb-8 text-slate-700 text-sm leading-relaxed">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Description</h3>
            <p>{item.description}</p>
          </div>

          {item.minInvestment && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">Minimum Investment</span>
                <span className="text-slate-900 font-semibold">₹{item.minInvestment}</span>
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">Expected Return</span>
                <span className="text-slate-900 font-semibold">{item.expectedReturn}</span>
              </div>
            </div>
          )}

          {item.deadline && (
            <div className="bg-amber-50 p-4 rounded-xl border border-amber-100 text-amber-900">
              <span className="text-xs font-bold uppercase tracking-wider block mb-1">Application Deadline</span>
              <span className="font-bold text-base">{item.deadline}</span>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between pt-6 border-t border-slate-100">
          <span className="text-xs text-slate-500">Source: <strong className="text-slate-700">{item.sourceAuthority}</strong></span>
          <a
            href={item.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-semibold transition flex items-center space-x-2 shadow-sm"
          >
            <span>Visit Official Source</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

export function ComparisonsView() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Scheme & Investment Comparison Engine</h1>
      <p className="text-slate-600 text-sm mb-8">Compare multiple sovereign instruments, tax benefits, lock-in periods, and returns side-by-side.</p>
      <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center text-slate-500">
        Comparison matrix initialized. Select instruments to compare.
      </div>
    </div>
  );
}

export function ToolsView() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Citizen Financial Tools & Calculators</h1>
      <p className="text-slate-600 text-sm mb-8">PPF, SIP, Tax Calculator, and Scheme Eligibility Checkers.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl border border-slate-200 p-6">
          <h3 className="font-bold text-lg mb-2">PPF Compound Calculator</h3>
          <p className="text-slate-600 text-sm mb-4">Calculate long-term sovereign compounding returns.</p>
          <div className="p-4 bg-slate-50 rounded-xl text-xs font-mono text-slate-700">Tool interface ready.</div>
        </div>
        <div className="bg-white rounded-2xl border border-slate-200 p-6">
          <h3 className="font-bold text-lg mb-2">Scheme Eligibility Screener</h3>
          <p className="text-slate-600 text-sm mb-4">Find central and state schemes matching your profile.</p>
          <div className="p-4 bg-slate-50 rounded-xl text-xs font-mono text-slate-700">Screener interface ready.</div>
        </div>
      </div>
    </div>
  );
}

export function OfficialSourcesView() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Official Government Sources Registry</h1>
      <p className="text-slate-600 text-sm mb-8">Direct directory of verified .gov.in and .nic.in portals.</p>
      <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
          <div>
            <h4 className="font-bold text-slate-900">Reserve Bank of India (RBI)</h4>
            <p className="text-xs text-slate-500">Sovereign gold bonds & monetary policy</p>
          </div>
          <a href="https://rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-indigo-600 text-xs font-semibold flex items-center space-x-1"><span>rbi.org.in</span> <ExternalLink className="w-3.5 h-3.5" /></a>
        </div>
        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
          <div>
            <h4 className="font-bold text-slate-900">National Portal of India</h4>
            <p className="text-xs text-slate-500">Centralized gateway to all Indian government services</p>
          </div>
          <a href="https://india.gov.in" target="_blank" rel="noopener noreferrer" className="text-indigo-600 text-xs font-semibold flex items-center space-x-1"><span>india.gov.in</span> <ExternalLink className="w-3.5 h-3.5" /></a>
        </div>
      </div>
    </div>
  );
}
