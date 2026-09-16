import React, { useState, useEffect } from 'react';
import { Search, ExternalLink, ShieldCheck, ArrowRight, Building2, TrendingUp, Award, FileText, Newspaper, Bookmark, Share2, Lightbulb, Users, Leaf, Megaphone } from 'lucide-react';
import { investmentRepository, investmentSchemeRepository, opportunityRepository, tenderRepository, newsRepository } from '../infrastructure/repositories/InvestmentRepository';
import { useSavedItems, useRecentlyViewed, ShareButton } from './SavedAndRecent';
import { HeroIndiaGateVisual } from './HeroIndiaGateVisual';

interface HubProps {
  onNavigate: (route: string, slug?: string) => void;
}

export function HomeView({ onNavigate }: HubProps) {
  return (
    <div className="space-y-8 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0a3f74] via-[#093563] to-[#0a2347] text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-blue-950/60 shadow-inner">
        {/* Subtle atmospheric ambient glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* 
          India Gate Landmark Photo Background
          Feather-blended seamlessly with zero hard borders or cut lines
        */}
        <div
          className="absolute right-0 top-0 bottom-0 w-full sm:w-[68%] lg:w-[48%] pointer-events-none z-0 select-none overflow-hidden"
          style={{
            WebkitMaskImage:
              'radial-gradient(ellipse 90% 90% at 75% 50%, black 20%, rgba(0,0,0,0.65) 55%, transparent 88%), linear-gradient(to right, transparent 0%, rgba(0,0,0,0.15) 15%, black 65%)',
            maskImage:
              'radial-gradient(ellipse 90% 90% at 75% 50%, black 20%, rgba(0,0,0,0.65) 55%, transparent 88%), linear-gradient(to right, transparent 0%, rgba(0,0,0,0.15) 15%, black 65%)',
          }}
        >
          <img
            src="/india-gate.jpg"
            alt="India Gate sunset landscape"
            className="w-full h-full object-cover object-right sm:object-[82%_center]"
            referrerPolicy="no-referrer"
          />
          {/* Deep ambient tint overlay to melt naturally into the deep ocean blue sky */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#093563] via-[#093563]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a2347] via-transparent to-[#0a3f74]/30" />
        </div>

        {/* Ambient warm twilight lights */}
        <div className="absolute right-8 top-1/4 w-72 h-72 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute right-40 top-8 w-80 h-80 bg-sky-400/12 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 text-left">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-blue-800/40 border border-blue-400/30 px-3.5 py-1.5 rounded-full text-xs font-medium text-blue-100 mb-5 backdrop-blur-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-300" />
                <span>Independent Information Platform</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight mb-4 text-white leading-[1.18]">
                India’s Government<br />
                <span className="text-[#f59e0b]">Investment</span> <span className="text-[#818cf8]">&amp; Opportunity</span> Platform
              </h1>

              {/* Subheadline */}
              <p className="text-blue-100/90 text-sm sm:text-base mb-8 max-w-xl font-normal leading-relaxed">
                Explore government investment products, development opportunities, projects, tenders and important updates from official sources across India.
              </p>

              {/* 4 CTA Buttons Row */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-8">
                {/* Primary Button */}
                <button
                  onClick={() => onNavigate('/investments')}
                  className="px-4.5 py-2.5 sm:px-5 sm:py-3 bg-[#2563eb] hover:bg-blue-600 text-white font-semibold rounded-xl flex items-center space-x-2 shadow-lg shadow-blue-950/40 transition cursor-pointer text-sm"
                >
                  <TrendingUp className="w-4 h-4" />
                  <span>Explore Investments</span>
                  <ArrowRight className="w-4 h-4 ml-0.5" />
                </button>

                {/* Secondary Button 1 */}
                <button
                  onClick={() => onNavigate('/opportunities')}
                  className="px-4.5 py-2.5 sm:px-5 sm:py-3 bg-[#0b2447]/60 hover:bg-[#0b2447]/90 text-white font-medium rounded-xl border border-blue-400/30 flex items-center space-x-2 transition cursor-pointer text-sm"
                >
                  <Lightbulb className="w-4 h-4 text-blue-200" />
                  <span>Explore Opportunities</span>
                  <ArrowRight className="w-4 h-4 ml-0.5 text-blue-300" />
                </button>

                {/* Secondary Button 2 */}
                <button
                  onClick={() => onNavigate('/tenders')}
                  className="px-4.5 py-2.5 sm:px-5 sm:py-3 bg-[#0b2447]/60 hover:bg-[#0b2447]/90 text-white font-medium rounded-xl border border-blue-400/30 flex items-center space-x-2 transition cursor-pointer text-sm"
                >
                  <FileText className="w-4 h-4 text-blue-200" />
                  <span>Find Tenders</span>
                  <ArrowRight className="w-4 h-4 ml-0.5 text-blue-300" />
                </button>

                {/* Secondary Button 3 */}
                <button
                  onClick={() => onNavigate('/news')}
                  className="px-4.5 py-2.5 sm:px-5 sm:py-3 bg-[#0b2447]/60 hover:bg-[#0b2447]/90 text-white font-medium rounded-xl border border-blue-400/30 flex items-center space-x-2 transition cursor-pointer text-sm"
                >
                  <Newspaper className="w-4 h-4 text-blue-200" />
                  <span>View Updates</span>
                  <ArrowRight className="w-4 h-4 ml-0.5 text-blue-300" />
                </button>
              </div>

              {/* Trust Bar Row */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2.5 text-xs sm:text-sm text-slate-200 font-medium">
                <div className="flex items-center space-x-1.5">
                  <span className="w-4.5 h-4.5 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0 shadow-xs">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  <span>Verified .gov.in Sources</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Users className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Pan-India Coverage</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <span className="w-4.5 h-4.5 rounded-full bg-blue-500/80 flex items-center justify-center text-white shrink-0 shadow-xs">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  <span>100% Free Access</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Leaf className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>No Registration Required</span>
                </div>
              </div>
            </div>

            {/* Right Side: India Map + Viksit Bharat Together */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end mt-4 lg:mt-0">
              <HeroIndiaGateVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Explore Core Pillars Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">Explore Core Pillars</h2>
          <button
            onClick={() => onNavigate('/investments')}
            className="text-blue-600 hover:text-blue-700 font-semibold text-xs sm:text-sm flex items-center space-x-1 cursor-pointer transition"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-5">
          {/* Card 1: Investments */}
          <div
            onClick={() => onNavigate('/investments')}
            className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs hover:shadow-md transition cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <div className="w-11 h-11 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div className="w-7 h-7 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">Investments</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Government investment products and public savings instruments.
              </p>
            </div>
          </div>

          {/* Card 2: Investment Schemes */}
          <div
            onClick={() => onNavigate('/investment-schemes')}
            className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs hover:shadow-md transition cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <div className="w-11 h-11 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center">
                  <Building2 className="w-5 h-5" />
                </div>
                <div className="w-7 h-7 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">Investment Schemes</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Government schemes and incentives relevant to investment and development.
              </p>
            </div>
          </div>

          {/* Card 3: Opportunities */}
          <div
            onClick={() => onNavigate('/opportunities')}
            className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs hover:shadow-md transition cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <div className="w-11 h-11 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <div className="w-7 h-7 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">Opportunities</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Development projects and investment opportunities from official sources.
              </p>
            </div>
          </div>

          {/* Card 4: Tenders */}
          <div
            onClick={() => onNavigate('/tenders')}
            className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs hover:shadow-md transition cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <div className="w-11 h-11 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="w-7 h-7 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">Tenders</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Government and PSU tenders from official procurement sources.
              </p>
            </div>
          </div>
        </div>

        {/* Update Banner */}
        <div className="bg-blue-50/70 border border-blue-100/90 rounded-2xl p-4 sm:px-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs">
          <div className="flex items-center space-x-3.5">
            <div className="w-9 h-9 rounded-xl bg-blue-100/80 text-blue-600 flex items-center justify-center shrink-0">
              <Megaphone className="w-5 h-5 text-blue-600" />
            </div>
            <div className="text-xs sm:text-sm text-slate-600 leading-normal">
              <span className="font-bold text-blue-900 mr-1.5">Stay Updated:</span>
              Latest government opportunities, tenders and investment-related news from trusted official sources.
            </div>
          </div>
          <button
            onClick={() => onNavigate('/news')}
            className="text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center space-x-1.5 shrink-0 whitespace-nowrap cursor-pointer transition self-end sm:self-auto"
          >
            <span>View Latest Updates</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
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
