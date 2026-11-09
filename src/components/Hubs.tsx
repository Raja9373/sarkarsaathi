import React, { useState, useEffect, useMemo } from 'react';
import { Search, ExternalLink, ShieldCheck, ArrowRight, Building2, TrendingUp, Award, FileText, Newspaper, Bookmark, Share2, Lightbulb, Users, Leaf, Megaphone, ChevronLeft, ChevronRight, Filter, X, ArrowUpDown, RotateCcw, Calculator, CheckCircle2, AlertCircle, Info } from 'lucide-react';
import { investmentRepository, investmentSchemeRepository, opportunityRepository, tenderRepository, newsRepository } from '../infrastructure/repositories/InvestmentRepository';
import { subsidyRepository } from '../infrastructure/repositories/SubsidyRepository';
import { useSavedItems, useRecentlyViewed, ShareButton } from './SavedAndRecent';
import { HeroIndiaGateVisual } from './HeroIndiaGateVisual';
import { CatalogQueryOptions, PaginatedResult } from '../ingestion/types';
import { CatalogQueryManager } from '../ingestion/catalogManager';
import { MasterDetailView } from './detail/MasterDetailView';
import { useSEO, updateSEO } from '../utils/seo';
import { getAllOfficialSources, getOfficialSourceSlug, addStateOfficialSources } from '../utils/officialSources';
import { ContextualFAQSection } from './ContextualFAQSection';

export { MasterDetailView };
export const DetailView = MasterDetailView;

interface HubProps {
  onNavigate: (route: string, slug?: string) => void;
}

export function HomeView({ onNavigate }: HubProps) {
  const [selectedProfile, setSelectedProfile] = useState<string>('ALL');
  const [selectedState, setSelectedState] = useState<string>('All India');
  const [quickQuery, setQuickQuery] = useState<string>('');

  const publishedSubsidies = useMemo(() => subsidyRepository.getPublished(), []);

  const matchedSubsidies = useMemo(() => {
    return publishedSubsidies.filter((sub) => {
      const text = `${sub.title} ${sub.category} ${sub.beneficiaryType || ''} ${sub.description || ''}`.toLowerCase();
      if (selectedProfile === 'FARMER' && !/farmer|kisan|agri|crop|krishi|dairy|fisheries|kusum/.test(text)) return false;
      if (selectedProfile === 'MSME' && !/msme|entrepreneur|business|startup|udyam|pmegp|mudra|cgtmse|industrial|manufacturing|food processing/.test(text)) return false;
      if (selectedProfile === 'SOLAR_HOUSING' && !/solar|surya|rooftop|housing|awas|home|urban|rural|energy/.test(text)) return false;
      if (selectedProfile === 'WOMEN_CHILD' && !/women|mahila|girl|sukanya|maternity|ladli|shakti|self help|lakhpati/.test(text)) return false;
      if (selectedProfile === 'EDUCATION' && !/student|scholarship|education|skill|fellowship|youth|apprentice/.test(text)) return false;

      if (selectedState !== 'All India') {
        const subState = (sub.state || 'All India').toLowerCase();
        if (subState !== 'all india' && subState !== 'central' && !subState.includes(selectedState.toLowerCase())) {
          return false;
        }
      }

      if (quickQuery.trim()) {
        const q = quickQuery.trim().toLowerCase();
        if (!text.includes(q)) return false;
      }

      return true;
    });
  }, [publishedSubsidies, selectedProfile, selectedState, quickQuery]);

  const handleShareMatchesWhatsApp = () => {
    const topMatches = matchedSubsidies.slice(0, 4);
    const listText = topMatches
      .map((s, idx) => `${idx + 1}. *${s.title}* (${s.maximumBenefit || s.subsidyAmount || 'Govt Benefit'})\n   https://sarkarsaathi.org/subsidies/${s.slug}`)
      .join('\n\n');
    const message = `*SarkarSaathi Verified Sarkari Yojana Matches (${selectedState})*\n\n${listText}\n\nCheck all ${publishedSubsidies.length}+ verified schemes & 54EC/PPF tax calculators at: https://sarkarsaathi.org/subsidies`;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappUrl;
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0a3f74] via-[#093563] to-[#0a2347] text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-blue-950/60 shadow-inner">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

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
          <div className="absolute inset-0 bg-gradient-to-r from-[#093563] via-[#093563]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a2347] via-transparent to-[#0a3f74]/30" />
        </div>

        <div className="absolute right-8 top-1/4 w-72 h-72 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute right-40 top-8 w-80 h-80 bg-sky-400/12 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            <div className="lg:col-span-7 text-left">
              <div className="inline-flex items-center space-x-2 bg-blue-800/40 border border-blue-400/30 px-3.5 py-1.5 rounded-full text-xs font-medium text-blue-100 mb-5 backdrop-blur-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-300" />
                <span>Independent Information Platform · सरकारी योजना एवं निवेश पोर्टल</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight mb-4 text-white leading-[1.18]">
                India’s Government<br />
                <span className="text-[#f59e0b]">Schemes, Subsidies</span> <span className="text-[#818cf8]">&amp; Investments</span>
              </h1>

              <p className="text-blue-100/90 text-sm sm:text-base mb-8 max-w-xl font-normal leading-relaxed">
                Check eligibility for {publishedSubsidies.length}+ verified Central &amp; State Sarkari Yojanas (PM-KISAN, PM Surya Ghar Solar, PMEGP MSME Grants), 54EC Tax-Saving Bonds, PPF/SSY calculators, and live GeM/CPPP public tenders.
              </p>

              {/* Crawlable CTA Links Row */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-8">
                <a
                  href="/subsidies"
                  onClick={(e) => { e.preventDefault(); onNavigate('/subsidies'); }}
                  className="px-4.5 py-2.5 sm:px-5 sm:py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold rounded-xl flex items-center space-x-2 shadow-lg shadow-amber-950/20 transition cursor-pointer text-sm"
                >
                  <Award className="w-4 h-4 text-slate-950" />
                  <span>Subsidies &amp; Sarkari Yojana ({publishedSubsidies.length})</span>
                  <ArrowRight className="w-4 h-4 ml-0.5" />
                </a>

                <a
                  href="/investments"
                  onClick={(e) => { e.preventDefault(); onNavigate('/investments'); }}
                  className="px-4.5 py-2.5 sm:px-5 sm:py-3 bg-[#2563eb] hover:bg-blue-600 text-white font-semibold rounded-xl flex items-center space-x-2 shadow-lg shadow-blue-950/40 transition cursor-pointer text-sm"
                >
                  <TrendingUp className="w-4 h-4" />
                  <span>54EC &amp; Sovereign Bonds</span>
                  <ArrowRight className="w-4 h-4 ml-0.5" />
                </a>

                <a
                  href="/tools"
                  onClick={(e) => { e.preventDefault(); onNavigate('/tools'); }}
                  className="px-4.5 py-2.5 sm:px-5 sm:py-3 bg-[#0b2447]/60 hover:bg-[#0b2447]/90 text-white font-medium rounded-xl border border-blue-400/30 flex items-center space-x-2 transition cursor-pointer text-sm"
                >
                  <Calculator className="w-4 h-4 text-blue-200" />
                  <span>Subsidy &amp; Return Calculators</span>
                  <ArrowRight className="w-4 h-4 ml-0.5 text-blue-300" />
                </a>

                <a
                  href="/questions"
                  onClick={(e) => { e.preventDefault(); onNavigate('/questions'); }}
                  className="px-4.5 py-2.5 sm:px-5 sm:py-3 bg-[#0b2447]/60 hover:bg-[#0b2447]/90 text-white font-medium rounded-xl border border-blue-400/30 flex items-center space-x-2 transition cursor-pointer text-sm"
                >
                  <FileText className="w-4 h-4 text-blue-200" />
                  <span>Hindi / Hinglish Q&amp;A Hub</span>
                  <ArrowRight className="w-4 h-4 ml-0.5 text-blue-300" />
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2.5 text-xs sm:text-sm text-slate-200 font-medium">
                <div className="flex items-center space-x-1.5">
                  <span className="w-4.5 h-4.5 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0 shadow-xs">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  <span>Verified .gov.in Sources</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Users className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>28 States &amp; 8 UTs Covered</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <span className="w-4.5 h-4.5 rounded-full bg-blue-500/80 flex items-center justify-center text-white shrink-0 shadow-xs">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  <span>100% Free Citizen Portal</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Leaf className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>No Registration Required</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end mt-4 lg:mt-0">
              <HeroIndiaGateVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive MeriPatrata — 30-Second Sarkari Yojana Eligibility & Benefit Finder */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2">
        <div className="bg-gradient-to-br from-amber-50/90 via-white to-blue-50/60 border-2 border-amber-200/80 rounded-3xl p-5 sm:p-8 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
            <div>
              <div className="inline-flex items-center space-x-1.5 bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full mb-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-700" />
                <span>Instant Eligibility Matcher · अपनी सरकारी योजना पात्रता जांचें</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Find Government Subsidies &amp; Benefits You Qualify For in 30 Seconds
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Select your category and state to filter verified Central and State subsidies with exact grant amounts, required documents, and direct <code>.gov.in</code> application links.
              </p>
            </div>
            <button
              onClick={handleShareMatchesWhatsApp}
              className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold rounded-xl flex items-center space-x-2 shadow-xs transition cursor-pointer shrink-0 self-start lg:self-auto"
            >
              <Share2 className="w-4 h-4" />
              <span>Share Eligible Schemes on WhatsApp</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-6">
            <div className="lg:col-span-7 flex flex-wrap gap-2">
              {[
                { id: 'ALL', label: 'All Citizens (सभी योजनाएं)' },
                { id: 'FARMER', label: 'Farmer / किसान (PM-KISAN, Kusum)' },
                { id: 'MSME', label: 'MSME / Business (PMEGP, Mudra)' },
                { id: 'SOLAR_HOUSING', label: 'Solar & Housing (Surya Ghar, Awas)' },
                { id: 'WOMEN_CHILD', label: 'Women & Girl Child (महिला योजना)' },
                { id: 'EDUCATION', label: 'Students & Youth (Scholarship/Skill)' },
              ].map((prof) => (
                <button
                  key={prof.id}
                  onClick={() => setSelectedProfile(prof.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition cursor-pointer border ${
                    selectedProfile === prof.id
                      ? 'bg-blue-900 text-white border-blue-900 shadow-xs'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-blue-400'
                  }`}
                >
                  {prof.label}
                </button>
              ))}
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <select
                aria-label="Select State or Union Territory"
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="px-3.5 py-2 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:border-blue-600"
              >
                <option value="All India">All India + Central Schemes</option>
                <option value="Uttar Pradesh">Uttar Pradesh (उत्तर प्रदेश)</option>
                <option value="Maharashtra">Maharashtra (महाराष्ट्र)</option>
                <option value="Madhya Pradesh">Madhya Pradesh (मध्य प्रदेश)</option>
                <option value="Rajasthan">Rajasthan (राजस्थान)</option>
                <option value="Bihar">Bihar (बिहार)</option>
                <option value="Gujarat">Gujarat (गुजरात)</option>
                <option value="Haryana">Haryana (हरियाणा)</option>
                <option value="Delhi">Delhi (दिल्ली)</option>
                <option value="Karnataka">Karnataka (कर्नाटक)</option>
                <option value="Tamil Nadu">Tamil Nadu (तमिलनाडु)</option>
                <option value="West Bengal">West Bengal (पश्चिम बंगाल)</option>
                <option value="Punjab">Punjab (पंजाब)</option>
              </select>

              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={quickQuery}
                  onChange={(e) => setQuickQuery(e.target.value)}
                  placeholder="Search e.g. Solar, Kisan, PMEGP..."
                  className="w-full pl-9 pr-3 py-2 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-blue-600"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {matchedSubsidies.slice(0, 6).map((sub) => (
              <a
                key={sub.id}
                href={`/subsidies/${sub.slug}`}
                onClick={(e) => { e.preventDefault(); onNavigate('/subsidies', sub.slug); }}
                className="bg-white rounded-2xl border border-slate-200/90 p-4 hover:border-blue-500 hover:shadow-md transition flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                      {sub.category}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500">
                      {sub.state || 'All India'}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-blue-700 transition leading-snug mb-1.5">
                    {sub.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {sub.description}
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-bold text-emerald-700 truncate max-w-[200px]">
                    {sub.maximumBenefit || sub.subsidyAmount || sub.benefitType}
                  </span>
                  <span className="font-bold text-blue-600 flex items-center">
                    Apply Guide <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-0.5 transition" />
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-5 pt-4 border-t border-amber-200/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-600">
            <span>
              Showing <strong>{Math.min(6, matchedSubsidies.length)}</strong> of <strong>{matchedSubsidies.length}</strong> matching verified government schemes.
            </span>
            <a
              href="/subsidies"
              onClick={(e) => { e.preventDefault(); onNavigate('/subsidies'); }}
              className="font-bold text-blue-700 hover:text-blue-900 flex items-center space-x-1"
            >
              <span>View All {matchedSubsidies.length} Matching Schemes in Full Directory</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Explore Core Pillars Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">Explore Core Pillars</h2>
          <a
            href="/investments"
            onClick={(e) => { e.preventDefault(); onNavigate('/investments'); }}
            className="text-blue-600 hover:text-blue-700 font-semibold text-xs sm:text-sm flex items-center space-x-1 cursor-pointer transition"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-5">
          <a
            href="/investments"
            onClick={(e) => { e.preventDefault(); onNavigate('/investments'); }}
            className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs hover:shadow-md transition cursor-pointer group flex flex-col justify-between h-full"
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
              <h3 className="text-base font-bold text-slate-900 mb-1">54EC Capital Gain &amp; Sovereign Bonds</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-3">
                REC, PFC, IRFC Section 54EC Tax-Exemption Bonds, RBI Floating Rate Bonds, and Sovereign Gold Bonds.
              </p>
            </div>
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600 group-hover:text-blue-700">
              <span>Explore Investments</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
            </div>
          </a>

          <a
            href="/investment-schemes"
            onClick={(e) => { e.preventDefault(); onNavigate('/investment-schemes'); }}
            className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs hover:shadow-md transition cursor-pointer group flex flex-col justify-between h-full"
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
              <h3 className="text-base font-bold text-slate-900 mb-1">Small Savings &amp; Post Office Schemes</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-3">
                PPF (7.1%), Sukanya Samriddhi Yojana (8.2%), Senior Citizens Savings Scheme (SCSS), NSC, and KVP guides.
              </p>
            </div>
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600 group-hover:text-blue-700">
              <span>Explore Savings Schemes</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
            </div>
          </a>

          <a
            href="/subsidies"
            onClick={(e) => { e.preventDefault(); onNavigate('/subsidies'); }}
            className="bg-white rounded-2xl border border-blue-200/80 p-5 shadow-xs hover:shadow-md transition cursor-pointer group flex flex-col justify-between h-full relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-bl-full pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <div className="w-11 h-11 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <div className="w-7 h-7 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">Subsidies &amp; Benefits (सरकारी सब्सिडी)</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-3">
                Discover {publishedSubsidies.length}+ verified Central and State subsidies with eligibility, documents, and official portal links.
              </p>
            </div>
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600 group-hover:text-blue-700">
              <span>Explore Subsidies &amp; Benefits</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
            </div>
          </a>

          <a
            href="/opportunities"
            onClick={(e) => { e.preventDefault(); onNavigate('/opportunities'); }}
            className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs hover:shadow-md transition cursor-pointer group flex flex-col justify-between h-full"
          >
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <div className="w-11 h-11 bg-sky-50 text-sky-600 rounded-xl flex items-center justify-center">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <div className="w-7 h-7 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">Infrastructure &amp; Industrial Opportunities</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-3">
                State-wise industrial parks, PLI manufacturing corridors, and PAIMANA infrastructure projects across India.
              </p>
            </div>
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600 group-hover:text-blue-700">
              <span>Explore Opportunities</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
            </div>
          </a>

          <a
            href="/tenders"
            onClick={(e) => { e.preventDefault(); onNavigate('/tenders'); }}
            className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs hover:shadow-md transition cursor-pointer group flex flex-col justify-between h-full"
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
              <h3 className="text-base font-bold text-slate-900 mb-1">GeM &amp; CPPP Public Tenders</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-3">
                Verified Government and PSU procurement notices with EMD rules, MSE 25% reservation, and bid deadlines.
              </p>
            </div>
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600 group-hover:text-blue-700">
              <span>Explore Tenders</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
            </div>
          </a>

          <a
            href="/questions"
            onClick={(e) => { e.preventDefault(); onNavigate('/questions'); }}
            className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-xs hover:shadow-md transition cursor-pointer group flex flex-col justify-between h-full"
          >
            <div>
              <div className="flex items-center justify-between mb-3.5">
                <div className="w-11 h-11 bg-indigo-50 text-indigo-700 rounded-xl flex items-center justify-center">
                  <Newspaper className="w-5 h-5" />
                </div>
                <div className="w-7 h-7 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">Citizen Q&amp;A Knowledge Base (प्रश्नोत्तर)</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-3">
                143+ verified answers in English, Hindi (हिंदी), and Hinglish on tax rules, subsidies, and official procedures.
              </p>
            </div>
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600 group-hover:text-blue-700">
              <span>Browse Verified Q&amp;A</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
            </div>
          </a>
        </div>
      </section>

      {/* Featured Verified Government Subsidies & Direct Benefit Schemes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full inline-block mb-2">
              Statutory &amp; Ministry Verified
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Flagship Central &amp; State Government Subsidies
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              Direct Benefit Transfer (DBT) programmes, capital investment subsidies, and interest subvention schemes audited against official ministry guidelines.
            </p>
          </div>
          <a
            href="/subsidies"
            onClick={(e) => { e.preventDefault(); onNavigate('/subsidies'); }}
            className="text-emerald-700 hover:text-emerald-800 font-bold text-xs sm:text-sm flex items-center space-x-1.5 cursor-pointer transition shrink-0"
          >
            <span>Browse All {publishedSubsidies.length} Verified Subsidies</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {publishedSubsidies.slice(0, 6).map((sub) => (
            <a
              key={sub.id}
              href={`/subsidies/${sub.slug}`}
              onClick={(e) => { e.preventDefault(); onNavigate('/subsidies', sub.slug); }}
              className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:shadow-md hover:border-emerald-300 transition cursor-pointer flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800">
                    {sub.category}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-500">
                    {sub.state || 'All India'}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition leading-snug">
                  {sub.title}
                </h3>
                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {sub.description}
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-semibold">Key Benefit:</span>
                  <span className="font-bold text-emerald-700 truncate max-w-[190px]">
                    {sub.maximumBenefit || sub.subsidyAmount || sub.benefitType}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs font-bold text-indigo-600 pt-1">
                  <span>Check Eligibility &amp; Documents</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Sovereign Savings & Tax-Exemption Comparison Matrix (Editorial Analysis) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xs space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-100 pb-5">
            <div className="space-y-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full inline-block">
                2026 Financial Research &amp; Comparison Guide
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Sovereign Savings &amp; Capital Gains Tax-Exemption Matrix
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">
                Side-by-side comparison of Government of India backed small savings schemes and statutory tax-saving bonds. All interest rates reflect official Ministry of Finance and RBI notifications.
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5 shrink-0">
              <button
                onClick={() => onNavigate('/comparisons')}
                className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition cursor-pointer flex items-center space-x-1.5"
              >
                <span>Interactive Comparison Tool</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onNavigate('/tools')}
                className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold transition cursor-pointer flex items-center space-x-1.5"
              >
                <Calculator className="w-3.5 h-3.5 text-indigo-600" />
                <span>Maturity Calculators</span>
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 uppercase text-[11px] font-bold bg-slate-50/80">
                  <th className="py-3.5 px-4 rounded-tl-xl">Instrument / Scheme</th>
                  <th className="py-3.5 px-4">Issuing Authority</th>
                  <th className="py-3.5 px-4">Indicative Return / Rate</th>
                  <th className="py-3.5 px-4">Lock-In / Tenure</th>
                  <th className="py-3.5 px-4">Income Tax Treatment</th>
                  <th className="py-3.5 px-4 rounded-tr-xl">Ideal Citizen Profile</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/70 text-slate-700">
                <tr className="hover:bg-slate-50/80 transition cursor-pointer" onClick={() => onNavigate('/investments', '54ec-capital-gain-bonds')}>
                  <td className="py-3.5 px-4 font-bold text-indigo-700">54EC Capital Gain Bonds (REC / PFC / IRFC)</td>
                  <td className="py-3.5 px-4">Central Power &amp; Rail PSUs</td>
                  <td className="py-3.5 px-4 font-semibold text-emerald-700">5.25% p.a. (Annual Payout)</td>
                  <td className="py-3.5 px-4">5 Years (Mandatory Lock-in)</td>
                  <td className="py-3.5 px-4">LTCG Tax Exempt up to ₹50 Lakh u/s 54EC</td>
                  <td className="py-3.5 px-4">Property sellers offsetting Long-Term Capital Gains</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition cursor-pointer" onClick={() => onNavigate('/investments', 'public-provident-fund')}>
                  <td className="py-3.5 px-4 font-bold text-indigo-700">Public Provident Fund (PPF)</td>
                  <td className="py-3.5 px-4">Ministry of Finance / Post Office</td>
                  <td className="py-3.5 px-4 font-semibold text-emerald-700">7.10% p.a. (Compounded Yearly)</td>
                  <td className="py-3.5 px-4">15 Years (Partial withdrawal Yr 7)</td>
                  <td className="py-3.5 px-4">EEE Status (80C + Tax-Free Interest &amp; Maturity)</td>
                  <td className="py-3.5 px-4">Salaried &amp; self-employed long-term retirement savers</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition cursor-pointer" onClick={() => onNavigate('/subsidies', 'sukanya-samriddhi-yojana')}>
                  <td className="py-3.5 px-4 font-bold text-indigo-700">Sukanya Samriddhi Yojana (SSY)</td>
                  <td className="py-3.5 px-4">Ministry of Finance / India Post</td>
                  <td className="py-3.5 px-4 font-semibold text-emerald-700">8.20% p.a. (Highest Tax-Free)</td>
                  <td className="py-3.5 px-4">21 Years from account opening</td>
                  <td className="py-3.5 px-4">EEE Status (Full 80C + Tax-Free Maturity)</td>
                  <td className="py-3.5 px-4">Parents/guardians of girl child below 10 years of age</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition cursor-pointer" onClick={() => onNavigate('/investments', 'senior-citizen-savings-scheme')}>
                  <td className="py-3.5 px-4 font-bold text-indigo-700">Senior Citizen Savings Scheme (SCSS)</td>
                  <td className="py-3.5 px-4">Ministry of Finance / Banks</td>
                  <td className="py-3.5 px-4 font-semibold text-emerald-700">8.20% p.a. (Quarterly Payout)</td>
                  <td className="py-3.5 px-4">5 Years (Extendable by 3 Years)</td>
                  <td className="py-3.5 px-4">80C Deduction up to ₹1.5L (Interest taxable, 80TTB applies)</td>
                  <td className="py-3.5 px-4">Retirees aged 60+ seeking guaranteed quarterly income</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition cursor-pointer" onClick={() => onNavigate('/investments', 'rbi-floating-rate-savings-bonds')}>
                  <td className="py-3.5 px-4 font-bold text-indigo-700">RBI Floating Rate Savings Bonds</td>
                  <td className="py-3.5 px-4">Reserve Bank of India (RBI)</td>
                  <td className="py-3.5 px-4 font-semibold text-emerald-700">8.05% p.a. (NSC + 0.35% spread)</td>
                  <td className="py-3.5 px-4">7 Years (Premature exit for Seniors)</td>
                  <td className="py-3.5 px-4">Semi-annual interest taxable as per slab</td>
                  <td className="py-3.5 px-4">Conservative investors seeking inflation-linked sovereign yield</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Citizen Handbook: How to Verify Eligibility & Apply Safely */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full inline-block mb-2">
            Citizen Awareness &amp; Application Handbook
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            How to Navigate Government Schemes, DBT Subsidies &amp; Public Tenders Safely
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl">
            Essential domain knowledge compiled by our editorial team to help citizens avoid common application rejections and fraudulent intermediaries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-3">
            <div className="flex items-center space-x-2.5 text-indigo-700 font-bold text-sm">
              <CheckCircle2 className="w-5 h-5 shrink-0" />
              <h3>1. Aadhaar Seeding vs. Bank Linking for DBT Transfers</h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Over 300 Central and State welfare schemes—including <strong>PM-Kisan Samman Nidhi</strong>, <strong>LPG PAHAL Subsidy</strong>, <strong>National Scholarship Portal (NSP)</strong>, and <strong>State Mahila Samman DBT programmes</strong>—disburse funds exclusively through the National Payments Corporation of India (NPCI) Aadhaar Payment Bridge (APB). Simply giving a bank account with an Aadhaar photocopy is not sufficient; citizens must verify that their bank account has active <strong>NPCI DBT Mapping</strong> enabled at their bank branch or via the official UIDAI/NPCI status checker.
            </p>
          </article>

          <article className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-3">
            <div className="flex items-center space-x-2.5 text-emerald-700 font-bold text-sm">
              <Award className="w-5 h-5 shrink-0" />
              <h3>2. Understanding Margin Money Subsidy vs. Interest Subvention</h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              When applying for entrepreneurship and agriculture schemes such as <strong>PMEGP (Prime Minister's Employment Generation Programme)</strong>, <strong>PMFME (Micro Food Processing)</strong>, or <strong>Agriculture Infrastructure Fund (AIF)</strong>, applicants should distinguish between two distinct benefit structures: <em>Margin Money / Capital Subsidy</em> (a one-time grant of 15% to 35% of project cost kept in a Term Deposit Receipt and adjusted after 3 years of successful operation) and <em>Interest Subvention</em> (an annual reduction of 2% to 3% on bank loan interest rates).
            </p>
          </article>

          <article className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-3">
            <div className="flex items-center space-x-2.5 text-blue-700 font-bold text-sm">
              <FileText className="w-5 h-5 shrink-0" />
              <h3>3. How MSMEs Can Participate in GeM &amp; CPPP Public Procurement</h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Under the Public Procurement Policy for Micro and Small Enterprises (MSEs), central ministries and PSUs are mandated to procure at least <strong>25% of their annual requirements from MSEs</strong>, including 4% from SC/ST-owned and 3% from women-owned MSEs. Registered Udyam MSMEs typically qualify for <strong>Earnest Money Deposit (EMD) exemption</strong> and prior turnover relaxation on both the Government e-Marketplace (<code>gem.gov.in</code>) and Central Public Procurement Portal (<code>eprocure.gov.in</code>).
            </p>
          </article>

          <article className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-3">
            <div className="flex items-center space-x-2.5 text-amber-700 font-bold text-sm">
              <ShieldCheck className="w-5 h-5 shrink-0" />
              <h3>4. Verifying Authentic .gov.in Portals &amp; Avoiding Cyber Fraud</h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Before uploading identity documents or paying any application fee, always verify that the destination domain ends with <strong><code>.gov.in</code></strong> or <strong><code>.nic.in</code></strong> (or recognized statutory institutions like <code>rbi.org.in</code>, <code>nabard.org</code>, or <code>sidbi.in</code>). Official government welfare schemes never ask citizens to share UPI PINs, credit card CVVs, or WhatsApp APK files to claim a subsidy. Use our <button onClick={() => onNavigate('/official-sources')} className="text-indigo-600 font-bold underline cursor-pointer">Official Government Sources Directory</button> to cross-check portal authenticity.
            </p>
          </article>
        </div>
      </section>

      {/* Trending Searches & State-Wise Internal Linking Hub (SEO Crawl Mesh) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 border border-amber-400/30 px-3 py-1 rounded-full inline-block mb-2">
              Pan-India Scheme &amp; State Directory · लोकप्रिय सरकारी योजनाएं
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight">
              Trending Sarkari Yojana Searches &amp; State Portals (2026)
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Direct access to high-demand Central subsidies, sovereign tax-saving instruments, and state-level industrial &amp; welfare directories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {/* Column 1: High-Volume Subsidies */}
            <div className="space-y-2.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 border-b border-slate-800 pb-2">
                Popular Government Subsidies
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm">
                {publishedSubsidies.slice(0, 8).map((s) => (
                  <li key={s.id}>
                    <a
                      href={`/subsidies/${s.slug}`}
                      onClick={(e) => { e.preventDefault(); onNavigate('/subsidies', s.slug); }}
                      className="text-slate-300 hover:text-amber-300 transition flex items-center justify-between gap-2"
                    >
                      <span className="truncate">{s.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 shrink-0 text-slate-500" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: State-Wise Portals */}
            <div className="space-y-2.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-sky-400 border-b border-slate-800 pb-2">
                State-Wise Schemes &amp; Projects (राज्यवार योजनाएं)
              </h3>
              <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
                {[
                  { name: 'Uttar Pradesh', slug: 'uttar-pradesh' },
                  { name: 'Maharashtra', slug: 'maharashtra' },
                  { name: 'Madhya Pradesh', slug: 'madhya-pradesh' },
                  { name: 'Rajasthan', slug: 'rajasthan' },
                  { name: 'Bihar', slug: 'bihar' },
                  { name: 'Gujarat', slug: 'gujarat' },
                  { name: 'Haryana', slug: 'haryana' },
                  { name: 'Karnataka', slug: 'karnataka' },
                  { name: 'Tamil Nadu', slug: 'tamil-nadu' },
                  { name: 'West Bengal', slug: 'west-bengal' },
                  { name: 'Delhi', slug: 'delhi' },
                  { name: 'Punjab', slug: 'punjab' },
                  { name: 'Telangana', slug: 'telangana' },
                  { name: 'Andhra Pradesh', slug: 'andhra-pradesh' },
                  { name: 'Odisha', slug: 'odisha' },
                  { name: 'Assam', slug: 'assam' },
                ].map((st) => (
                  <a
                    key={st.slug}
                    href={`/opportunities/state/${st.slug}`}
                    onClick={(e) => { e.preventDefault(); onNavigate('/opportunities', `state/${st.slug}`); }}
                    className="text-slate-300 hover:text-sky-300 transition truncate"
                  >
                    • {st.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 3: Sectors & Financial Tools */}
            <div className="space-y-2.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400 border-b border-slate-800 pb-2">
                Key Sectors &amp; Financial Calculators
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm">
                {[
                  { label: 'Agriculture & Kisan Subsidies', path: '/opportunities', slug: 'sector/agriculture', href: '/opportunities/sector/agriculture' },
                  { label: 'MSME & Startup Grants', path: '/opportunities', slug: 'sector/msme', href: '/opportunities/sector/msme' },
                  { label: 'Renewable Energy & Solar Rooftop', path: '/opportunities', slug: 'sector/renewable-energy', href: '/opportunities/sector/renewable-energy' },
                  { label: 'Manufacturing & PLI Incentives', path: '/opportunities', slug: 'sector/manufacturing', href: '/opportunities/sector/manufacturing' },
                  { label: 'PPF, SSY & 54EC Tax Calculators', path: '/tools', slug: undefined, href: '/tools' },
                  { label: 'Scheme Side-by-Side Comparison', path: '/comparisons', slug: undefined, href: '/comparisons' },
                  { label: 'Hindi & Hinglish Citizen Q&A', path: '/questions', slug: undefined, href: '/questions' },
                  { label: 'Verified .gov.in Portal Directory', path: '/official-sources', slug: undefined, href: '/official-sources' },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); onNavigate(link.path, link.slug); }}
                      className="text-slate-300 hover:text-emerald-300 transition flex items-center justify-between gap-2"
                    >
                      <span className="truncate">{link.label}</span>
                      <ArrowRight className="w-3.5 h-3.5 shrink-0 text-slate-500" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contextual FAQ Section on Homepage */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <ContextualFAQSection
          category="Government Investments"
          onNavigate={onNavigate}
          maxItems={6}
        />
      </section>
    </div>
  );
}

export function GenericHubView({
  title,
  type,
  items,
  repository,
  onNavigate,
  initialState = 'ALL',
  initialSector = 'ALL',
  headerComponent
}: {
  title: string;
  type: string;
  items: any[];
  repository?: any;
  onNavigate: (route: string, slug?: string) => void;
  initialState?: string;
  initialSector?: string;
  headerComponent?: React.ReactNode;
}) {
  const [search, setSearch] = useState('');
  const [stateFilter, setStateFilter] = useState(initialState);
  const [sectorFilter, setSectorFilter] = useState(initialSector);
  const [typeFilter, setTypeFilter] = useState('ALL');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [sourceFilter, setSourceFilter] = useState('ALL');
  const [sortBy, setSortBy] = useState<'default' | 'date' | 'title' | 'value'>('default');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    setStateFilter(initialState);
  }, [initialState]);

  useEffect(() => {
    setSectorFilter(initialSector);
  }, [initialSector]);

  // Facet options extraction (from repository if available, or extracted from items)
  const facets = useMemo(() => {
    if (repository && typeof repository.getFacets === 'function') {
      return repository.getFacets();
    }
    const states = new Set<string>();
    const sectors = new Set<string>();
    const types = new Set<string>();
    const statuses = new Set<string>();
    const sources = new Set<string>();
    const categories = new Set<string>();

    for (const item of items) {
      if (item.state) states.add(item.state);
      else if (item.location && !item.location.includes('/')) states.add(item.location);
      if (item.sector) sectors.add(item.sector);
      if (item.category) categories.add(item.category);
      if (item.opportunityType) types.add(item.opportunityType);
      if (item.tenderType) types.add(item.tenderType);
      if (item.status) statuses.add(item.status);
      if (item.sourceAuthority) sources.add(item.sourceAuthority);
      else if (item.authority) sources.add(item.authority);
    }
    return {
      states: Array.from(states).sort(),
      sectors: Array.from(sectors).sort(),
      types: Array.from(types).sort(),
      statuses: Array.from(statuses).sort(),
      sources: Array.from(sources).sort(),
      categories: Array.from(categories).sort()
    };
  }, [items, repository]);

  const queryOptions: CatalogQueryOptions = useMemo(() => ({
    page: currentPage,
    limit: pageSize,
    search: search.trim() || undefined,
    state: stateFilter !== 'ALL' ? stateFilter : undefined,
    sector: sectorFilter !== 'ALL' ? sectorFilter : undefined,
    type: typeFilter !== 'ALL' ? typeFilter : undefined,
    status: statusFilter !== 'ALL' ? statusFilter : undefined,
    source: sourceFilter !== 'ALL' ? sourceFilter : undefined,
    sortBy: sortBy !== 'default' ? sortBy : undefined,
    sortOrder
  }), [currentPage, pageSize, search, stateFilter, sectorFilter, typeFilter, statusFilter, sourceFilter, sortBy, sortOrder]);

  const paginatedResult: PaginatedResult<any> = useMemo(() => {
    if (repository && typeof repository.getPaginated === 'function') {
      return repository.getPaginated(queryOptions);
    }
    if (type === 'opportunities') {
      return CatalogQueryManager.paginateOpportunities(items, queryOptions);
    }
    if (type === 'tenders') {
      return CatalogQueryManager.paginateTenders(items, queryOptions);
    }
    return CatalogQueryManager.paginateOpportunities(items, queryOptions);
  }, [repository, type, items, queryOptions]);

  useEffect(() => {
    if (search.trim()) {
      updateSEO({
        title: `Search: ${search.trim()} - SarkarSaathi`,
        description: `Search results for ${search.trim()} across verified government records on SarkarSaathi.`,
        noIndex: true
      });
    } else if (paginatedResult.total === 0) {
      updateSEO({
        title: `${title} - SarkarSaathi`,
        description: `Browse verified government opportunities and public services on SarkarSaathi.`,
        noIndex: true
      });
    }
  }, [search, paginatedResult.total, title]);

  const handleSearchChange = (val: string) => {
    setSearch(val);
    setCurrentPage(1);
  };

  const handleStateChange = (val: string) => {
    setStateFilter(val);
    setCurrentPage(1);
  };

  const handleSectorChange = (val: string) => {
    setSectorFilter(val);
    setCurrentPage(1);
  };

  const handleTypeChange = (val: string) => {
    setTypeFilter(val);
    setCurrentPage(1);
  };

  const handleStatusChange = (val: string) => {
    setStatusFilter(val);
    setCurrentPage(1);
  };

  const handleSourceChange = (val: string) => {
    setSourceFilter(val);
    setCurrentPage(1);
  };

  const handleSortChange = (newSort: 'default' | 'date' | 'title' | 'value') => {
    setSortBy(newSort);
    if (newSort === 'title') {
      setSortOrder('asc');
    } else {
      setSortOrder('desc');
    }
    setCurrentPage(1);
  };

  const resetAllFilters = () => {
    setSearch('');
    setStateFilter('ALL');
    setSectorFilter('ALL');
    setTypeFilter('ALL');
    setStatusFilter('ALL');
    setSourceFilter('ALL');
    setSortBy('default');
    setSortOrder('desc');
    setCurrentPage(1);
  };

  const activeFilterCount = (stateFilter !== 'ALL' ? 1 : 0) +
    (sectorFilter !== 'ALL' ? 1 : 0) +
    (typeFilter !== 'ALL' ? 1 : 0) +
    (statusFilter !== 'ALL' ? 1 : 0) +
    (sourceFilter !== 'ALL' ? 1 : 0) +
    (sortBy !== 'default' ? 1 : 0);

  const startRecord = paginatedResult.total > 0 ? (currentPage - 1) * pageSize + 1 : 0;
  const endRecord = Math.min(currentPage * pageSize, paginatedResult.total);

  return (
    <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 py-5 sm:py-8 lg:py-10">
      <div className="mb-5 sm:mb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-3.5 sm:gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2 leading-tight sm:leading-snug">{title}</h1>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl">
            High-performance paginated catalogue with official verified records from .gov.in sources.
          </p>
        </div>
        <div className="text-xs font-semibold px-3.5 py-2 min-h-[36px] flex items-center bg-slate-100 border border-slate-200 text-slate-700 rounded-full w-fit self-start md:self-auto shadow-2xs">
          Total Catalogue: {paginatedResult.total.toLocaleString('en-IN')} records
        </div>
      </div>

      {headerComponent && (
        <div className="mb-5 sm:mb-8">
          {headerComponent}
        </div>
      )}

      {/* Search & Filter Bar */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-4">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder={`Search ${title.toLowerCase()} by title, sector, authority, location...`}
              value={search}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full pl-11 pr-11 py-3 sm:py-2.5 min-h-[48px] sm:min-h-[44px] bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition"
            />
            {search && (
              <button
                onClick={() => handleSearchChange('')}
                className="absolute right-1 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-slate-400 hover:text-slate-600 rounded-lg transition"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex-1 sm:flex-initial min-h-[48px] sm:min-h-[44px] px-4 py-2.5 rounded-xl border text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition ${
                showFilters || activeFilterCount > 0
                  ? 'bg-indigo-50 border-indigo-200 text-indigo-700'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <Filter className="w-3.5 h-3.5" />
              <span>Filters</span>
              {activeFilterCount > 0 && (
                <span className="w-4 h-4 rounded-full bg-indigo-600 text-white text-[10px] flex items-center justify-center font-bold">
                  {activeFilterCount}
                </span>
              )}
            </button>

            {activeFilterCount > 0 && (
              <button
                onClick={resetAllFilters}
                className="min-h-[48px] sm:min-h-[44px] px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 transition"
                title="Reset filters"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Reset</span>
              </button>
            )}
          </div>
        </div>

        {/* Expandable Filter & Sort Controls */}
        {showFilters && (
          <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 text-xs sm:text-sm">
            {/* State Filter */}
            <div>
              <label className="block text-slate-600 font-semibold mb-1.5 text-xs">State / Region</label>
              <select
                value={stateFilter}
                onChange={(e) => handleStateChange(e.target.value)}
                className="w-full min-h-[48px] sm:min-h-[44px] py-2.5 px-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 font-medium text-slate-800 text-xs sm:text-sm cursor-pointer"
              >
                <option value="ALL">All States / Central</option>
                {facets.states.map((st: string) => (
                  <option key={st} value={st}>{st}</option>
                ))}
              </select>
            </div>

            {/* Sector Filter */}
            <div>
              <label className="block text-slate-600 font-semibold mb-1.5 text-xs">Sector / Category</label>
              <select
                value={sectorFilter}
                onChange={(e) => handleSectorChange(e.target.value)}
                className="w-full min-h-[48px] sm:min-h-[44px] py-2.5 px-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 font-medium text-slate-800 text-xs sm:text-sm cursor-pointer"
              >
                <option value="ALL">All Sectors</option>
                {facets.sectors.map((sec: string) => (
                  <option key={sec} value={sec}>{sec}</option>
                ))}
              </select>
            </div>

            {/* Status Filter */}
            <div>
              <label className="block text-slate-600 font-semibold mb-1.5 text-xs">Status</label>
              <select
                value={statusFilter}
                onChange={(e) => handleStatusChange(e.target.value)}
                className="w-full min-h-[48px] sm:min-h-[44px] py-2.5 px-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 font-medium text-slate-800 text-xs sm:text-sm cursor-pointer"
              >
                <option value="ALL">All Statuses</option>
                {facets.statuses.map((st: string) => (
                  <option key={st} value={st}>{st}</option>
                ))}
              </select>
            </div>

            {/* Sort Control */}
            <div>
              <label className="block text-slate-600 font-semibold mb-1.5 text-xs">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => handleSortChange(e.target.value as any)}
                className="w-full min-h-[48px] sm:min-h-[44px] py-2.5 px-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 font-medium text-slate-800 text-xs sm:text-sm cursor-pointer"
              >
                <option value="default">Default Catalogue Order</option>
                <option value="date">Date / Deadline (Soonest first)</option>
                <option value="value">Financial Value (Highest first)</option>
                <option value="title">Title (Alphabetical A–Z)</option>
              </select>
            </div>
          </div>
        )}

        {/* Active Results Summary and Page Sizing */}
        <div className="pt-3.5 mt-3.5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <div className="text-center sm:text-left leading-relaxed">
            Showing <span className="font-bold text-slate-800">{startRecord}</span> to{' '}
            <span className="font-bold text-slate-800">{endRecord}</span> of{' '}
            <span className="font-bold text-slate-800">{paginatedResult.total.toLocaleString('en-IN')}</span> verified records
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium text-slate-600">Per page:</span>
            {[10, 20, 50].map((size) => (
              <button
                key={size}
                onClick={() => { setPageSize(size); setCurrentPage(1); }}
                className={`min-h-[40px] min-w-[40px] sm:min-h-[36px] sm:min-w-[36px] px-3.5 py-2 rounded-lg text-xs font-semibold flex items-center justify-center transition cursor-pointer ${
                  pageSize === size
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Catalogue Cards Grid - Renders ONLY paginated items */}
      {paginatedResult.items.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 text-center">
          <p className="text-slate-500 text-base font-medium mb-3">No matching records found.</p>
          <button
            onClick={resetAllFilters}
            className="min-h-[48px] sm:min-h-[44px] px-5 py-3 bg-indigo-50 text-indigo-700 font-semibold text-xs sm:text-sm rounded-xl hover:bg-indigo-100 transition inline-flex items-center justify-center"
          >
            Clear all filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8">
          {paginatedResult.items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200 p-4.5 sm:p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition space-y-4"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between mb-3 gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 truncate max-w-[200px]">
                    {item.category || item.sector || 'Government'}
                  </span>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    {item.state && (
                      <span className="px-2.5 py-1 rounded text-[11px] font-medium bg-slate-100 text-slate-700">
                        {item.state}
                      </span>
                    )}
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60">
                      {item.status || 'VERIFIED'}
                    </span>
                  </div>
                </div>

                <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-2 leading-snug sm:leading-normal">{item.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm mb-4 line-clamp-3 leading-relaxed">{item.description}</p>

                {/* Additional Key Metrics if available */}
                {(item.fundingAmount || item.tenderValue || item.totalProjectCost || item.deadline || item.submissionDeadline) && (
                  <div className="mb-4 p-3.5 sm:p-4 bg-slate-50 rounded-xl border border-slate-100 grid grid-cols-1 xs:grid-cols-2 gap-2.5 sm:gap-3 text-xs sm:text-sm">
                    {(item.fundingAmount || item.tenderValue || item.totalProjectCost) && (
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">Value / Budget</span>
                        <span className="font-bold text-slate-800 text-xs sm:text-sm">
                          {item.fundingAmount || item.tenderValue || item.totalProjectCost}
                        </span>
                      </div>
                    )}
                    {(item.deadline || item.submissionDeadline) && (
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">Deadline</span>
                        <span className="font-semibold text-slate-700 text-xs sm:text-sm">
                          {item.deadline || item.submissionDeadline}
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div>
                <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 mb-4 gap-2">
                  <span className="font-medium text-slate-700 truncate max-w-[200px] sm:max-w-[240px]">{item.authority}</span>
                  <span className="bg-slate-100 px-2 py-0.5 rounded text-[11px] shrink-0 font-mono">{item.sourceAuthority}</span>
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-3">
                  <button
                    onClick={() => onNavigate(`/${type}/${item.slug}`)}
                    className="w-full sm:flex-1 min-h-[48px] sm:min-h-[44px] py-3 sm:py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs sm:text-sm font-semibold transition flex items-center justify-center cursor-pointer shadow-2xs"
                  >
                    View Details
                  </button>
                  <a
                    href={item.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto min-h-[48px] sm:min-h-[44px] py-3 sm:py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs sm:text-sm font-semibold transition flex items-center justify-center space-x-1.5 shadow-2xs"
                  >
                    <span>Official Source</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination Controls */}
      {paginatedResult.totalPages > 1 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3.5 sm:gap-4 p-4 sm:py-4 sm:px-6 bg-white border border-slate-200 rounded-2xl shadow-xs">
          <div className="text-xs sm:text-sm text-slate-600">
            Page <span className="font-bold text-slate-900">{currentPage}</span> of{' '}
            <span className="font-bold text-slate-900">{paginatedResult.totalPages}</span>
          </div>

          <div className="flex items-center space-x-1.5 sm:space-x-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage <= 1}
              className={`min-h-[48px] sm:min-h-[44px] px-4 py-2.5 rounded-xl border text-xs sm:text-sm font-semibold flex items-center justify-center transition ${
                currentPage <= 1
                  ? 'border-slate-200 text-slate-300 cursor-not-allowed'
                  : 'border-slate-200 text-slate-700 hover:bg-slate-50 cursor-pointer'
              }`}
              title="Previous Page"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              <span>Prev</span>
            </button>

            {/* Quick Page Jump Buttons */}
            {Array.from({ length: paginatedResult.totalPages }, (_, i) => i + 1)
              .filter(
                (p) =>
                  p === 1 ||
                  p === paginatedResult.totalPages ||
                  Math.abs(p - currentPage) <= 1
              )
              .map((p, idx, arr) => {
                const prev = arr[idx - 1];
                const showEllipsis = prev && p - prev > 1;
                return (
                  <React.Fragment key={p}>
                    {showEllipsis && <span className="px-1 text-slate-400 text-xs">...</span>}
                    <button
                      onClick={() => setCurrentPage(p)}
                      className={`min-w-[44px] h-11 sm:min-w-[38px] sm:h-9 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center transition cursor-pointer ${
                        currentPage === p
                          ? 'bg-indigo-600 text-white shadow-xs'
                          : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {p}
                    </button>
                  </React.Fragment>
                );
              })}

            <button
              onClick={() => setCurrentPage((p) => Math.min(paginatedResult.totalPages, p + 1))}
              disabled={currentPage >= paginatedResult.totalPages}
              className={`min-h-[48px] sm:min-h-[44px] px-4 py-2.5 rounded-xl border text-xs sm:text-sm font-semibold flex items-center justify-center transition ${
                currentPage >= paginatedResult.totalPages
                  ? 'border-slate-200 text-slate-300 cursor-not-allowed'
                  : 'border-slate-200 text-slate-700 hover:bg-slate-50 cursor-pointer'
              }`}
              title="Next Page"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      )}

      {/* Verified Contextual FAQ Section */}
      {(() => {
        let faqCat = '';
        if (type === 'investments') faqCat = 'Government Investments';
        else if (type === 'investment-schemes') faqCat = 'Investment Schemes';
        else if (type === 'opportunities') faqCat = 'Opportunities';
        else if (type === 'tenders') faqCat = 'Tenders';
        else if (type === 'news') faqCat = 'News & Updates';
        
        return faqCat ? <ContextualFAQSection category={faqCat} onNavigate={onNavigate} /> : null;
      })()}
    </div>
  );
}

export function ComparisonsView({ onNavigate }: { onNavigate?: (route: string, slug?: string) => void } = {}) {
  const [comparisonTab, setComparisonTab] = useState<'investments' | 'schemes' | 'opportunities'>('investments');
  
  const allInvestments = useMemo(() => investmentRepository.getAll(), []);
  const allSchemes = useMemo(() => investmentSchemeRepository.getAll(), []);
  const allOpportunities = useMemo(() => opportunityRepository.getAll(), []);

  // Selected IDs for comparison
  const [selectedInvestments, setSelectedInvestments] = useState<string[]>([
    allInvestments[0]?.id || '',
    allInvestments[1]?.id || '',
    allInvestments[2]?.id || ''
  ].filter(Boolean));

  const [selectedSchemes, setSelectedSchemes] = useState<string[]>([
    allSchemes[0]?.id || '',
    allSchemes[1]?.id || ''
  ].filter(Boolean));

  const [selectedOpportunities, setSelectedOpportunities] = useState<string[]>([
    allOpportunities[0]?.id || '',
    allOpportunities[1]?.id || ''
  ].filter(Boolean));

  const missingValText = "Current value not available from the verified source.";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div>
        <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full text-xs font-semibold text-indigo-700 mb-3">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Verified Government Data Comparison Engine</span>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">Side-by-Side Comparison Matrix</h1>
        <p className="text-slate-600 text-sm max-w-2xl">
          Compare sovereign investments, government schemes, and development opportunities side-by-side using official verified records with zero fabricated values.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 space-x-6 text-sm font-bold">
        <button
          onClick={() => setComparisonTab('investments')}
          className={`pb-3 border-b-2 transition cursor-pointer flex items-center space-x-2 ${
            comparisonTab === 'investments'
              ? 'border-indigo-600 text-indigo-600'
              : 'border-transparent text-slate-500 hover:text-slate-700'
          }`}
        >
          <TrendingUp className="w-4 h-4" />
          <span>Investments Comparison ({allInvestments.length})</span>
        </button>
        <button
          onClick={() => setComparisonTab('schemes')}
          className={`pb-3 border-b-2 transition cursor-pointer flex items-center space-x-2 ${
            comparisonTab === 'schemes'
              ? 'border-indigo-600 text-indigo-600'
              : 'border-transparent text-slate-500 hover:text-slate-700'
          }`}
        >
          <Building2 className="w-4 h-4" />
          <span>Investment Schemes ({allSchemes.length})</span>
        </button>
        <button
          onClick={() => setComparisonTab('opportunities')}
          className={`pb-3 border-b-2 transition cursor-pointer flex items-center space-x-2 ${
            comparisonTab === 'opportunities'
              ? 'border-indigo-600 text-indigo-600'
              : 'border-transparent text-slate-500 hover:text-slate-700'
          }`}
        >
          <Lightbulb className="w-4 h-4" />
          <span>Opportunities ({allOpportunities.length})</span>
        </button>
      </div>

      {/* INVESTMENT COMPARISON */}
      {comparisonTab === 'investments' && (
        <div className="space-y-6">
          {/* Selector Bar */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs grid grid-cols-1 md:grid-cols-3 gap-4">
            {[0, 1, 2].map((idx) => (
              <div key={idx}>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Comparison Column {idx + 1}
                </label>
                <select
                  value={selectedInvestments[idx] || ''}
                  onChange={(e) => {
                    const next = [...selectedInvestments];
                    next[idx] = e.target.value;
                    setSelectedInvestments(next);
                  }}
                  className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-800 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                >
                  <option value="">-- Select Investment --</option>
                  {allInvestments.map((inv) => (
                    <option key={inv.id} value={inv.id}>{inv.title}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>

          {/* Side-by-side Table */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-700">
                  <th className="p-4 font-bold w-48 sticky left-0 bg-slate-50 z-10">Parameter</th>
                  {selectedInvestments.map((id, i) => {
                    const item = allInvestments.find(x => x.id === id);
                    return (
                      <th key={i} className="p-4 font-extrabold text-slate-900 min-w-[240px]">
                        {item ? item.title : `Select Instrument ${i + 1}`}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {[
                  { label: 'Investment Name', getVal: (i: any) => i?.title },
                  { label: 'Category', getVal: (i: any) => i?.category },
                  { label: 'Issuer / Authority', getVal: (i: any) => i?.authority || i?.sourceAuthority },
                  { label: 'Risk Information', getVal: (i: any) => i?.riskLevel ? `Risk Level: ${i.riskLevel}` : null, getSub: (i: any) => i?.risksAndLimitations?.join(', ') },
                  { label: 'Tenure', getVal: (i: any) => i?.tenure || i?.lockInPeriod },
                  { label: 'Interest / Return Structure', getVal: (i: any) => i?.expectedReturn || i?.notifiedRate || i?.returnMechanism },
                  { label: 'Tax Treatment', getVal: (i: any) => i?.taxTreatment },
                  { label: 'Minimum Investment', getVal: (i: any) => i?.minInvestment ? `₹${Number(i.minInvestment).toLocaleString('en-IN')}` : null },
                  { label: 'Maximum Investment', getVal: (i: any) => i?.maxInvestment ? (typeof i.maxInvestment === 'number' ? `₹${i.maxInvestment.toLocaleString('en-IN')}` : i.maxInvestment) : null },
                  { label: 'Liquidity & Withdrawal', getVal: (i: any) => i?.withdrawalRules || i?.prematureClosureRules },
                  { label: 'Eligibility', getVal: (i: any) => i?.accountOpeningProcess?.join('; ') || (i?.depositRules) },
                  { label: 'Government Status', getVal: (i: any) => i?.status || i?.verificationStatus },
                  { label: 'Suitable Use Case', getVal: (i: any) => i?.description },
                  { label: 'Official Source', getVal: (i: any) => i?.sourceAuthority, getLink: (i: any) => i?.sourceUrl }
                ].map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-slate-50/80 transition">
                    <td className="p-4 font-bold text-slate-900 bg-slate-50/50 sticky left-0 z-10 border-r border-slate-100">
                      {row.label}
                    </td>
                    {selectedInvestments.map((id, colIdx) => {
                      const item = allInvestments.find(x => x.id === id);
                      const val = item ? row.getVal(item) : null;
                      const sub = item && row.getSub ? row.getSub(item) : null;
                      const link = item && row.getLink ? row.getLink(item) : null;

                      return (
                        <td key={colIdx} className="p-4 align-top">
                          {item ? (
                            val ? (
                              <div className="space-y-1">
                                <div className="font-medium text-slate-800">{val}</div>
                                {sub && <div className="text-[11px] text-slate-500">{sub}</div>}
                                {link && (
                                  <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-1 text-indigo-600 hover:text-indigo-800 font-semibold pt-1">
                                    <span>Official Portal</span>
                                    <ExternalLink className="w-3 h-3" />
                                  </a>
                                )}
                              </div>
                            ) : (
                              <span className="text-amber-700/80 italic text-[11px] bg-amber-50 px-2 py-1 rounded block">
                                {missingValText}
                              </span>
                            )
                          ) : (
                            <span className="text-slate-400 italic">No selection</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* SCHEME COMPARISON */}
      {comparisonTab === 'schemes' && (
        <div className="space-y-6">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs grid grid-cols-1 md:grid-cols-2 gap-4">
            {[0, 1].map((idx) => (
              <div key={idx}>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Comparison Column {idx + 1}
                </label>
                <select
                  value={selectedSchemes[idx] || ''}
                  onChange={(e) => {
                    const next = [...selectedSchemes];
                    next[idx] = e.target.value;
                    setSelectedSchemes(next);
                  }}
                  className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-800 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                >
                  <option value="">-- Select Investment Scheme --</option>
                  {allSchemes.map((sch) => (
                    <option key={sch.id} value={sch.id}>{sch.title}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-700">
                  <th className="p-4 font-bold w-48 sticky left-0 bg-slate-50 z-10">Parameter</th>
                  {selectedSchemes.map((id, i) => {
                    const item = allSchemes.find(x => x.id === id);
                    return (
                      <th key={i} className="p-4 font-extrabold text-slate-900 min-w-[280px]">
                        {item ? item.title : `Select Scheme ${i + 1}`}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {[
                  { label: 'Scheme Name', getVal: (i: any) => i?.title },
                  { label: 'Sector', getVal: (i: any) => i?.sector || i?.category },
                  { label: 'Ministry / Authority', getVal: (i: any) => i?.authority || i?.implementingAuthority },
                  { label: 'Implementing Agency', getVal: (i: any) => i?.implementingAuthority },
                  { label: 'Target Beneficiary', getVal: (i: any) => i?.targetBeneficiaries || i?.eligibility },
                  { label: 'Eligibility', getVal: (i: any) => i?.eligibility },
                  { label: 'Geographic Scope', getVal: (i: any) => i?.coverage },
                  { label: 'Financial Support / Benefits', getVal: (i: any) => i?.benefits || i?.financialParameters },
                  { label: 'Application Process', getVal: (i: any) => i?.applicationProcess },
                  { label: 'Current Status', getVal: (i: any) => i?.status },
                  { label: 'Official Source', getVal: (i: any) => i?.sourceAuthority, getLink: (i: any) => i?.sourceUrl }
                ].map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-slate-50/80 transition">
                    <td className="p-4 font-bold text-slate-900 bg-slate-50/50 sticky left-0 z-10 border-r border-slate-100">
                      {row.label}
                    </td>
                    {selectedSchemes.map((id, colIdx) => {
                      const item = allSchemes.find(x => x.id === id);
                      const val = item ? row.getVal(item) : null;
                      const link = item && row.getLink ? row.getLink(item) : null;

                      return (
                        <td key={colIdx} className="p-4 align-top">
                          {item ? (
                            val ? (
                              <div className="space-y-1">
                                <div className="font-medium text-slate-800">{val}</div>
                                {link && (
                                  <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-1 text-indigo-600 hover:text-indigo-800 font-semibold pt-1">
                                    <span>Official Portal</span>
                                    <ExternalLink className="w-3 h-3" />
                                  </a>
                                )}
                              </div>
                            ) : (
                              <span className="text-amber-700/80 italic text-[11px] bg-amber-50 px-2 py-1 rounded block">
                                {missingValText}
                              </span>
                            )
                          ) : (
                            <span className="text-slate-400 italic">No selection</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* OPPORTUNITY COMPARISON */}
      {comparisonTab === 'opportunities' && (
        <div className="space-y-6">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs grid grid-cols-1 md:grid-cols-2 gap-4">
            {[0, 1].map((idx) => (
              <div key={idx}>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Comparison Column {idx + 1}
                </label>
                <select
                  value={selectedOpportunities[idx] || ''}
                  onChange={(e) => {
                    const next = [...selectedOpportunities];
                    next[idx] = e.target.value;
                    setSelectedOpportunities(next);
                  }}
                  className="w-full text-xs p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-800 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                >
                  <option value="">-- Select Opportunity --</option>
                  {allOpportunities.map((opp) => (
                    <option key={opp.id} value={opp.id}>{opp.title}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-700">
                  <th className="p-4 font-bold w-48 sticky left-0 bg-slate-50 z-10">Parameter</th>
                  {selectedOpportunities.map((id, i) => {
                    const item = allOpportunities.find(x => x.id === id);
                    return (
                      <th key={i} className="p-4 font-extrabold text-slate-900 min-w-[280px]">
                        {item ? item.title : `Select Opportunity ${i + 1}`}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {[
                  { label: 'Project Name', getVal: (i: any) => i?.title },
                  { label: 'Sector', getVal: (i: any) => i?.sector },
                  { label: 'Location / State', getVal: (i: any) => i?.location || i?.state },
                  { label: 'Authority', getVal: (i: any) => i?.authority },
                  { label: 'Project Cost / Funding', getVal: (i: any) => i?.totalProjectCost || i?.fundingAmount },
                  { label: 'Project Status', getVal: (i: any) => i?.status || i?.projectStatus },
                  { label: 'Investor / Developer Relevance', getVal: (i: any) => i?.investorProfile },
                  { label: 'Eligibility', getVal: (i: any) => i?.eligibility },
                  { label: 'Participation Process', getVal: (i: any) => i?.participationProcess?.join('; ') || i?.applicationProcess },
                  { label: 'Deadline', getVal: (i: any) => i?.deadline },
                  { label: 'Official Source', getVal: (i: any) => i?.sourceAuthority, getLink: (i: any) => i?.sourceUrl }
                ].map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-slate-50/80 transition">
                    <td className="p-4 font-bold text-slate-900 bg-slate-50/50 sticky left-0 z-10 border-r border-slate-100">
                      {row.label}
                    </td>
                    {selectedOpportunities.map((id, colIdx) => {
                      const item = allOpportunities.find(x => x.id === id);
                      const val = item ? row.getVal(item) : null;
                      const link = item && row.getLink ? row.getLink(item) : null;

                      return (
                        <td key={colIdx} className="p-4 align-top">
                          {item ? (
                            val ? (
                              <div className="space-y-1">
                                <div className="font-medium text-slate-800">{val}</div>
                                {link && (
                                  <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-1 text-indigo-600 hover:text-indigo-800 font-semibold pt-1">
                                    <span>Official Portal</span>
                                    <ExternalLink className="w-3 h-3" />
                                  </a>
                                )}
                              </div>
                            ) : (
                              <span className="text-amber-700/80 italic text-[11px] bg-amber-50 px-2 py-1 rounded block">
                                {missingValText}
                              </span>
                            )
                          ) : (
                            <span className="text-slate-400 italic">No selection</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Verified Comparisons FAQs */}
      {onNavigate && <ContextualFAQSection category="Comparisons" onNavigate={onNavigate} />}
    </div>
  );
}

export function ToolsView({ onNavigate }: { onNavigate?: (route: string, slug?: string) => void } = {}) {
  const [activeTool, setActiveTool] = useState<'ppf' | 'tax80c' | 'compound' | 'capitalGains' | 'screener'>('ppf');

  // Tool 1: PPF Calculator State
  const [ppfDeposit, setPpfDeposit] = useState<number>(100000);
  const [ppfTenure, setPpfTenure] = useState<number>(15);
  const ppfRate = 7.1; // Notified Ministry of Finance rate

  const ppfCalc = useMemo(() => {
    const r = ppfRate / 100;
    let balance = 0;
    let invested = 0;
    const schedule = [];
    for (let y = 1; y <= ppfTenure; y++) {
      invested += ppfDeposit;
      const interest = (balance + ppfDeposit) * r;
      balance = balance + ppfDeposit + interest;
      schedule.push({ year: y, invested: Math.round(invested), interest: Math.round(interest), balance: Math.round(balance) });
    }
    return {
      totalInvested: Math.round(invested),
      totalInterest: Math.round(balance - invested),
      maturityValue: Math.round(balance),
      schedule
    };
  }, [ppfDeposit, ppfTenure]);

  // Tool 2: Tax 80C Comparison Calculator
  const [annualIncome, setAnnualIncome] = useState<number>(1200000);
  const [taxSlab, setTaxSlab] = useState<number>(20); // 10%, 20%, 30%
  const [section80CAmount, setSection80CAmount] = useState<number>(150000);

  const taxSavings = useMemo(() => {
    const valid80C = Math.min(section80CAmount, 150000);
    const taxSaved = valid80C * (taxSlab / 100);
    return {
      valid80C,
      taxSaved: Math.round(taxSaved)
    };
  }, [section80CAmount, taxSlab]);

  // Tool 3: Compound Interest Calculator
  const [principal, setPrincipal] = useState<number>(50000);
  const [compoundRate, setCompoundRate] = useState<number>(7.5);
  const [compoundYears, setCompoundYears] = useState<number>(10);
  const [frequency, setFrequency] = useState<number>(1); // Annual

  const compoundCalc = useMemo(() => {
    const p = principal;
    const r = compoundRate / 100;
    const n = frequency;
    const t = compoundYears;
    const amount = p * Math.pow(1 + r / n, n * t);
    const interest = amount - p;
    return {
      amount: Math.round(amount),
      interest: Math.round(interest),
      invested: p
    };
  }, [principal, compoundRate, compoundYears, frequency]);

  // Tool 4: Capital Gains 54EC Calculator
  const [capitalGainsAmount, setCapitalGainsAmount] = useState<number>(2500000);
  const bondLimit = 5000000; // ₹50 Lakh limit under Section 54EC

  const section54ECCalc = useMemo(() => {
    const eligibleBondInvest = Math.min(capitalGainsAmount, bondLimit);
    // Assumed LTCG tax rate without exemption: 20% with indexation or 12.5% without depending on asset class
    const savedTaxAt20 = eligibleBondInvest * 0.20;
    return {
      eligibleBondInvest,
      savedTaxAt20: Math.round(savedTaxAt20)
    };
  }, [capitalGainsAmount]);

  // Tool 5: Scheme & Investment Eligibility Screener
  const [screenerCategory, setScreenerCategory] = useState<string>('ALL');
  const [screenerState, setScreenerState] = useState<string>('ALL');
  
  const allSchemes = useMemo(() => investmentSchemeRepository.getAll(), []);
  const filteredSchemes = useMemo(() => {
    return allSchemes.filter(s => {
      const matchCat = screenerCategory === 'ALL' || (s as any).sector === screenerCategory || s.category === screenerCategory;
      const matchState = screenerState === 'ALL' || s.coverage?.toLowerCase().includes(screenerState.toLowerCase()) || s.description.toLowerCase().includes(screenerState.toLowerCase());
      return matchCat && matchState;
    }).slice(0, 5);
  }, [allSchemes, screenerCategory, screenerState]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div>
        <div className="inline-flex items-center space-x-2 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full text-xs font-semibold text-indigo-700 mb-3">
          <Calculator className="w-3.5 h-3.5" />
          <span>Verified Financial Calculators & Decision Tools</span>
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">Citizen Financial & Investment Tools</h1>
        <p className="text-slate-600 text-sm max-w-2xl">
          Practical calculators and evaluators using verified government rates and statutory limits. For informational purposes only.
        </p>
      </div>

      {/* Tool Navigation Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {[
          { id: 'ppf', title: 'PPF Growth Calculator', icon: TrendingUp },
          { id: 'tax80c', title: 'Section 80C Tax Tool', icon: Award },
          { id: 'compound', title: 'Compound Interest', icon: Calculator },
          { id: 'capitalGains', title: 'Capital Gains 54EC', icon: ShieldCheck },
          { id: 'screener', title: 'Scheme Screener', icon: Users }
        ].map((tool) => {
          const Icon = tool.icon;
          const isActive = activeTool === tool.id;
          return (
            <button
              key={tool.id}
              onClick={() => setActiveTool(tool.id as any)}
              className={`p-4 rounded-2xl border text-left transition cursor-pointer flex flex-col justify-between ${
                isActive
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-md'
                  : 'bg-white text-slate-800 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center mb-3 ${isActive ? 'bg-white/20 text-white' : 'bg-indigo-50 text-indigo-600'}`}>
                <Icon className="w-4 h-4" />
              </div>
              <span className="font-bold text-xs leading-snug">{tool.title}</span>
            </button>
          );
        })}
      </div>

      {/* TOOL 1: PPF CALCULATOR */}
      {activeTool === 'ppf' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-2">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Public Provident Fund (PPF) Sovereign Growth Calculator</h2>
              <p className="text-xs text-slate-500">Calculates compounding corpus based on Ministry of Finance notified benchmark rate.</p>
            </div>
            <div className="bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-xl text-xs font-semibold text-emerald-800">
              Notified Rate: 7.1% p.a. (Compounded Annually)
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-bold text-slate-700">Annual Deposit (₹)</label>
                <span className="text-xs font-mono font-bold text-indigo-600">₹{ppfDeposit.toLocaleString('en-IN')}</span>
              </div>
              <input
                type="range"
                min={500}
                max={150000}
                step={500}
                value={ppfDeposit}
                onChange={(e) => setPpfDeposit(Number(e.target.value))}
                className="w-full accent-indigo-600"
              />
              <span className="text-[10px] text-slate-400">Statutory limit: Min ₹500, Max ₹1,50,000 per financial year.</span>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-bold text-slate-700">Tenure (Years)</label>
                <span className="text-xs font-mono font-bold text-indigo-600">{ppfTenure} Years</span>
              </div>
              <select
                value={ppfTenure}
                onChange={(e) => setPpfTenure(Number(e.target.value))}
                className="w-full p-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-800 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              >
                <option value={15}>15 Years (Standard Statutory Maturity)</option>
                <option value={20}>20 Years (1 Block Extension)</option>
                <option value={25}>25 Years (2 Block Extensions)</option>
                <option value={30}>30 Years (3 Block Extensions)</option>
              </select>
              <span className="text-[10px] text-slate-400">Lock-in period is 15 years with 5-year block extensions.</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-slate-50 p-5 rounded-2xl border border-slate-200">
            <div>
              <span className="text-xs font-semibold text-slate-500 block uppercase">Total Principal Invested</span>
              <span className="text-xl font-bold text-slate-900">₹{ppfCalc.totalInvested.toLocaleString('en-IN')}</span>
            </div>
            <div>
              <span className="text-xs font-semibold text-emerald-700 block uppercase">Total Interest Earned</span>
              <span className="text-xl font-bold text-emerald-700">+₹{ppfCalc.totalInterest.toLocaleString('en-IN')}</span>
            </div>
            <div>
              <span className="text-xs font-semibold text-indigo-700 block uppercase">Maturity Corpus (Tax-Free EEE)</span>
              <span className="text-2xl font-black text-indigo-900">₹{ppfCalc.maturityValue.toLocaleString('en-IN')}</span>
            </div>
          </div>

          <div className="p-4 bg-blue-50/60 border border-blue-100 rounded-xl text-xs text-slate-600 space-y-1">
            <div className="font-bold text-blue-900 flex items-center space-x-1">
              <Info className="w-3.5 h-3.5 text-indigo-600" />
              <span>Assumptions & Disclosures:</span>
            </div>
            <p className="text-[11px] leading-relaxed">
              • Formula: Compounded annually on balance at financial year end.<br />
              • Tax Treatment: Exempt-Exempt-Exempt (EEE) under Income Tax Act Section 80C &amp; Section 10(11).<br />
              • <strong>For informational purposes only.</strong> Notified interest rates are subject to quarterly government revisions.
            </p>
          </div>
        </div>
      )}

      {/* TOOL 2: SECTION 80C TAX TOOL */}
      {activeTool === 'tax80c' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs">
          <div className="pb-4 border-b border-slate-100">
            <h2 className="text-lg font-bold text-slate-900">Section 80C Tax Savings & Instrument Comparison</h2>
            <p className="text-xs text-slate-500">Calculate tax savings under Section 80C across verified sovereign tax-saving instruments (PPF, SSY, NSC, Tax Saver FD).</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Annual Taxable Income (₹)</label>
              <input
                type="number"
                value={annualIncome}
                onChange={(e) => setAnnualIncome(Number(e.target.value))}
                className="w-full p-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-800"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Applicable Tax Slab</label>
              <select
                value={taxSlab}
                onChange={(e) => setTaxSlab(Number(e.target.value))}
                className="w-full p-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-800"
              >
                <option value={10}>10% Tax Slab</option>
                <option value={20}>20% Tax Slab</option>
                <option value={30}>30% Tax Slab</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Section 80C Investment (₹)</label>
              <input
                type="number"
                max={150000}
                value={section80CAmount}
                onChange={(e) => setSection80CAmount(Number(e.target.value))}
                className="w-full p-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-800"
              />
              <span className="text-[10px] text-slate-400 mt-1 block">Maximum statutory deduction limit is ₹1,50,000.</span>
            </div>
          </div>

          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <span className="text-xs font-semibold text-slate-500 block uppercase">Eligible Deduction Considered</span>
              <span className="text-xl font-bold text-slate-900">₹{taxSavings.valid80C.toLocaleString('en-IN')}</span>
            </div>
            <div>
              <span className="text-xs font-semibold text-emerald-700 block uppercase">Estimated Direct Tax Saved</span>
              <span className="text-2xl font-black text-emerald-700">₹{taxSavings.taxSaved.toLocaleString('en-IN')}</span>
            </div>
          </div>

          <div className="p-4 bg-blue-50/60 border border-blue-100 rounded-xl text-xs text-slate-600 space-y-1">
            <div className="font-bold text-blue-900 flex items-center space-x-1">
              <Info className="w-3.5 h-3.5 text-indigo-600" />
              <span>Statutory Note:</span>
            </div>
            <p className="text-[11px] leading-relaxed">
              Applicable under old tax regime limits. Surcharge and cess extra as per Income Tax Act provisions. <strong>For informational purposes only.</strong>
            </p>
          </div>
        </div>
      )}

      {/* TOOL 3: COMPOUND INTEREST CALCULATOR */}
      {activeTool === 'compound' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs">
          <div className="pb-4 border-b border-slate-100">
            <h2 className="text-lg font-bold text-slate-900">Compound Growth & Return Calculator</h2>
            <p className="text-xs text-slate-500">Calculate investment appreciation using standard compound interest formula.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Principal Amount (₹)</label>
              <input
                type="number"
                value={principal}
                onChange={(e) => setPrincipal(Number(e.target.value))}
                className="w-full p-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-800"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Annual Interest Rate (%)</label>
              <input
                type="number"
                step="0.1"
                value={compoundRate}
                onChange={(e) => setCompoundRate(Number(e.target.value))}
                className="w-full p-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-800"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Tenure (Years)</label>
              <input
                type="number"
                value={compoundYears}
                onChange={(e) => setCompoundYears(Number(e.target.value))}
                className="w-full p-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-800"
              />
            </div>
          </div>

          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <span className="text-xs font-semibold text-slate-500 block uppercase">Principal Invested</span>
              <span className="text-xl font-bold text-slate-900">₹{compoundCalc.invested.toLocaleString('en-IN')}</span>
            </div>
            <div>
              <span className="text-xs font-semibold text-emerald-700 block uppercase">Interest Earned</span>
              <span className="text-xl font-bold text-emerald-700">+₹{compoundCalc.interest.toLocaleString('en-IN')}</span>
            </div>
            <div>
              <span className="text-xs font-semibold text-indigo-700 block uppercase">Total Maturity Value</span>
              <span className="text-2xl font-black text-indigo-900">₹{compoundCalc.amount.toLocaleString('en-IN')}</span>
            </div>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600">
            <span className="font-bold text-slate-800 block mb-1">Formula Used:</span>
            <code className="bg-white p-2 rounded border border-slate-200 block font-mono text-[11px] text-indigo-700">
              A = P × (1 + r/n)^(nt)
            </code>
          </div>
        </div>
      )}

      {/* TOOL 4: CAPITAL GAINS 54EC */}
      {activeTool === 'capitalGains' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs">
          <div className="pb-4 border-b border-slate-100">
            <h2 className="text-lg font-bold text-slate-900">Section 54EC Capital Gains Tax Exemption Calculator</h2>
            <p className="text-xs text-slate-500">Calculate long-term capital gains (LTCG) tax exemption by investing in notified NHAI / REC capital gains bonds.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Long-Term Capital Gains (₹)</label>
              <input
                type="number"
                value={capitalGainsAmount}
                onChange={(e) => setCapitalGainsAmount(Number(e.target.value))}
                className="w-full p-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-800"
              />
              <span className="text-[10px] text-slate-400 mt-1 block">Maximum statutory investment limit per financial year under Section 54EC is ₹50,00,000.</span>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-col justify-center">
              <span className="text-xs text-slate-500 font-semibold uppercase">Eligible Bond Investment</span>
              <span className="text-lg font-bold text-slate-900">₹{section54ECCalc.eligibleBondInvest.toLocaleString('en-IN')}</span>
              <span className="text-xs text-emerald-700 font-semibold mt-1">Estimated Tax Saved (at 20% LTCG): ₹{section54ECCalc.savedTaxAt20.toLocaleString('en-IN')}</span>
            </div>
          </div>

          <div className="p-4 bg-blue-50/60 border border-blue-100 rounded-xl text-xs text-slate-600">
            <span className="font-bold text-blue-900 block mb-1">Statutory Condition:</span>
            Bonds must be invested within 6 months of capital asset transfer with a mandatory 5-year lock-in period. <strong>For informational purposes only.</strong>
          </div>
        </div>
      )}

      {/* TOOL 5: SCHEME SCREENER */}
      {activeTool === 'screener' && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs">
          <div className="pb-4 border-b border-slate-100">
            <h2 className="text-lg font-bold text-slate-900">Government Scheme & Investment Eligibility Screener</h2>
            <p className="text-xs text-slate-500">Filter verified government schemes matching your sector and region.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Sector / Category</label>
              <select
                value={screenerCategory}
                onChange={(e) => setScreenerCategory(e.target.value)}
                className="w-full p-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-800"
              >
                <option value="ALL">All Sectors</option>
                <option value="Agriculture">Agriculture</option>
                <option value="MSME">MSME & Industry</option>
                <option value="Social Welfare">Social Welfare</option>
                <option value="Infrastructure">Infrastructure</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">State / Region</label>
              <select
                value={screenerState}
                onChange={(e) => setScreenerState(e.target.value)}
                className="w-full p-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-800"
              >
                <option value="ALL">Pan-India / Central</option>
                <option value="Delhi">Delhi</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
              </select>
            </div>
          </div>

          <div className="space-y-3 pt-4 border-t border-slate-100">
            <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Matching Verified Schemes ({filteredSchemes.length})</h3>
            {filteredSchemes.length === 0 ? (
              <p className="text-xs text-slate-500 italic">No exact schemes match the selected filters. Try broadening your criteria.</p>
            ) : (
              <div className="space-y-3">
                {filteredSchemes.map((sch) => (
                  <div key={sch.id} className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between gap-4">
                    <div>
                      <h4 className="font-bold text-sm text-slate-900">{sch.title}</h4>
                      <p className="text-xs text-slate-600 line-clamp-1">{sch.description}</p>
                    </div>
                    <a
                      href={sch.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg shrink-0 flex items-center space-x-1"
                    >
                      <span>Official Source</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Verified Tools & Calculators FAQs */}
      {onNavigate && <ContextualFAQSection category="Tools & Calculators" onNavigate={onNavigate} />}
    </div>
  );
}

export function OfficialSourcesView({ onNavigate }: { onNavigate?: (route: string, slug?: string) => void }) {
  useSEO({
    title: 'Official Government Sources Registry | SarkarSaathi',
    description: 'Find verified official Indian government websites, ministries, regulators, procurement portals, investment authorities and public information sources.',
    canonicalPath: '/official-sources'
  });

  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('ALL');
  const [typeFilter, setTypeFilter] = useState<'ALL' | 'CENTRAL' | 'STATE' | 'UT'>('ALL');
  
  const sources = getAllOfficialSources();
  const categories = ['ALL', ...Array.from(new Set(sources.map(s => s.category)))];

  const filteredSources = sources.filter(s => 
    (categoryFilter === 'ALL' || s.category === categoryFilter) &&
    (typeFilter === 'ALL' || s.type === typeFilter) &&
    (s.name.toLowerCase().includes(search.toLowerCase()) || s.description.toLowerCase().includes(search.toLowerCase()) || (s.state && s.state.toLowerCase().includes(search.toLowerCase())))
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Official Government Sources Registry</h1>
      <p className="text-slate-600 text-sm mb-8">
        SarkarSaathi is an independent information platform. The websites listed here are official external sources operated by their respective government departments, ministries, regulators or authorities.
      </p>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs mb-8 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <input 
            type="text" 
            placeholder="Search sources by name, department, or state..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm"
          />
          <select 
            value={categoryFilter} 
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm"
          >
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
          <select 
            value={typeFilter} 
            onChange={(e) => setTypeFilter(e.target.value as any)}
            className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm"
          >
            <option value="ALL">All Types</option>
            <option value="CENTRAL">Central</option>
            <option value="STATE">State</option>
            <option value="UT">Union Territory</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSources.map(s => {
          const slug = getOfficialSourceSlug(s);
          return (
            <div key={s.officialUrl} className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between shadow-xs hover:border-slate-300 transition">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider">{s.category}</span>
                  <span className="text-[10px] px-2 py-0.5 bg-slate-100 text-slate-600 rounded-full font-medium">
                    {s.type === 'CENTRAL' ? 'Central' : s.type === 'STATE' ? 'State' : 'UT'}
                  </span>
                </div>
                <h4 
                  onClick={() => onNavigate && onNavigate('/official-sources', slug)}
                  className="font-bold text-slate-900 mt-1 mb-2 hover:text-indigo-600 cursor-pointer"
                >
                  {s.name}
                </h4>
                <p className="text-xs text-slate-500 mb-4 line-clamp-3">{s.description}</p>
                <div className="text-[11px] text-slate-400">Authority: {s.authority}</div>
              </div>
              
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2">
                {onNavigate && (
                  <button
                    onClick={() => onNavigate('/official-sources', slug)}
                    className="flex-1 py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl text-center transition"
                  >
                    View Details
                  </button>
                )}
                <a 
                  href={s.officialUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="py-2 px-3 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-xl flex items-center justify-center space-x-1.5 transition"
                  title="Visit official website"
                >
                  <span>Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Verified Official Sources FAQs */}
      {onNavigate && <ContextualFAQSection category="Official Sources" onNavigate={onNavigate} />}
    </div>
  );
}

