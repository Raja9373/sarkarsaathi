import React, { useState, useEffect, useMemo } from 'react';
import { Search, ExternalLink, ShieldCheck, ArrowRight, Building2, TrendingUp, Award, FileText, Newspaper, Bookmark, Share2, Lightbulb, Users, Leaf, Megaphone, ChevronLeft, ChevronRight, Filter, X, ArrowUpDown, RotateCcw } from 'lucide-react';
import { investmentRepository, investmentSchemeRepository, opportunityRepository, tenderRepository, newsRepository } from '../infrastructure/repositories/InvestmentRepository';
import { useSavedItems, useRecentlyViewed, ShareButton } from './SavedAndRecent';
import { HeroIndiaGateVisual } from './HeroIndiaGateVisual';
import { CatalogQueryOptions, PaginatedResult } from '../ingestion/types';
import { CatalogQueryManager } from '../ingestion/catalogManager';
import { MasterDetailView } from './detail/MasterDetailView';

export { MasterDetailView };
export const DetailView = MasterDetailView;

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

export function GenericHubView({
  title,
  type,
  items,
  repository,
  onNavigate
}: {
  title: string;
  type: string;
  items: any[];
  repository?: any;
  onNavigate: (route: string, slug?: string) => void;
}) {
  const [search, setSearch] = useState('');
  const [stateFilter, setStateFilter] = useState('ALL');
  const [sectorFilter, setSectorFilter] = useState('ALL');
  const [typeFilter, setTypeFilter] = useState('ALL');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [sourceFilter, setSourceFilter] = useState('ALL');
  const [sortBy, setSortBy] = useState<'default' | 'date' | 'title' | 'value'>('default');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [showFilters, setShowFilters] = useState(false);

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">{title}</h1>
          <p className="text-slate-600 text-sm">
            High-performance paginated catalogue with official verified records from .gov.in sources.
          </p>
        </div>
        <div className="text-xs font-semibold px-3.5 py-1.5 bg-slate-100 border border-slate-200 text-slate-700 rounded-full w-fit">
          Total Catalogue: {paginatedResult.total.toLocaleString('en-IN')} records
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs mb-8">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-4">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder={`Search ${title.toLowerCase()} by title, sector, authority, location...`}
              value={search}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full pl-10 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition"
            />
            {search && (
              <button
                onClick={() => handleSearchChange('')}
                className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`px-4 py-2.5 rounded-xl border text-xs font-semibold flex items-center gap-2 transition ${
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
                className="px-3 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 text-xs font-semibold flex items-center gap-1.5 transition"
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
          <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            {/* State Filter */}
            <div>
              <label className="block text-slate-500 font-semibold mb-1">State / Region</label>
              <select
                value={stateFilter}
                onChange={(e) => handleStateChange(e.target.value)}
                className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500 font-medium text-slate-800"
              >
                <option value="ALL">All States / Central</option>
                {facets.states.map((st: string) => (
                  <option key={st} value={st}>{st}</option>
                ))}
              </select>
            </div>

            {/* Sector Filter */}
            <div>
              <label className="block text-slate-500 font-semibold mb-1">Sector / Category</label>
              <select
                value={sectorFilter}
                onChange={(e) => handleSectorChange(e.target.value)}
                className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500 font-medium text-slate-800"
              >
                <option value="ALL">All Sectors</option>
                {facets.sectors.map((sec: string) => (
                  <option key={sec} value={sec}>{sec}</option>
                ))}
              </select>
            </div>

            {/* Status Filter */}
            <div>
              <label className="block text-slate-500 font-semibold mb-1">Status</label>
              <select
                value={statusFilter}
                onChange={(e) => handleStatusChange(e.target.value)}
                className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500 font-medium text-slate-800"
              >
                <option value="ALL">All Statuses</option>
                {facets.statuses.map((st: string) => (
                  <option key={st} value={st}>{st}</option>
                ))}
              </select>
            </div>

            {/* Sort Control */}
            <div>
              <label className="block text-slate-500 font-semibold mb-1">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => handleSortChange(e.target.value as any)}
                className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500 font-medium text-slate-800"
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
        <div className="pt-3 mt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
          <div>
            Showing <span className="font-bold text-slate-800">{startRecord}</span> to{' '}
            <span className="font-bold text-slate-800">{endRecord}</span> of{' '}
            <span className="font-bold text-slate-800">{paginatedResult.total.toLocaleString('en-IN')}</span> verified records
          </div>
          <div className="flex items-center gap-2">
            <span>Per page:</span>
            {[10, 20, 50].map((size) => (
              <button
                key={size}
                onClick={() => { setPageSize(size); setCurrentPage(1); }}
                className={`px-2 py-1 rounded text-xs font-semibold ${
                  pageSize === size
                    ? 'bg-indigo-600 text-white'
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
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
          <p className="text-slate-500 text-base font-medium mb-3">No matching records found.</p>
          <button
            onClick={resetAllFilters}
            className="px-4 py-2 bg-indigo-50 text-indigo-700 font-semibold text-xs rounded-xl hover:bg-indigo-100 transition"
          >
            Clear all filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {paginatedResult.items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition"
            >
              <div>
                <div className="flex items-center justify-between mb-3 gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 truncate max-w-[200px]">
                    {item.category || item.sector || 'Government'}
                  </span>
                  <div className="flex items-center gap-2">
                    {item.state && (
                      <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-700">
                        {item.state}
                      </span>
                    )}
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                      {item.status || 'VERIFIED'}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-3">{item.description}</p>

                {/* Additional Key Metrics if available */}
                {(item.fundingAmount || item.tenderValue || item.totalProjectCost || item.deadline || item.submissionDeadline) && (
                  <div className="mb-4 p-3 bg-slate-50 rounded-xl border border-slate-100 grid grid-cols-2 gap-2 text-xs">
                    {(item.fundingAmount || item.tenderValue || item.totalProjectCost) && (
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase font-bold">Value / Budget</span>
                        <span className="font-bold text-slate-800">
                          {item.fundingAmount || item.tenderValue || item.totalProjectCost}
                        </span>
                      </div>
                    )}
                    {(item.deadline || item.submissionDeadline) && (
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase font-bold">Deadline</span>
                        <span className="font-semibold text-slate-700">
                          {item.deadline || item.submissionDeadline}
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 mb-4">
                  <span className="font-medium text-slate-700 truncate max-w-[220px]">{item.authority}</span>
                  <span className="bg-slate-100 px-2 py-0.5 rounded text-[11px]">{item.sourceAuthority}</span>
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
      )}

      {/* Pagination Controls */}
      {paginatedResult.totalPages > 1 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4 px-6 bg-white border border-slate-200 rounded-2xl shadow-xs">
          <div className="text-xs text-slate-600">
            Page <span className="font-bold text-slate-900">{currentPage}</span> of{' '}
            <span className="font-bold text-slate-900">{paginatedResult.totalPages}</span>
          </div>

          <div className="flex items-center space-x-1.5">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage <= 1}
              className={`p-2 rounded-lg border text-xs font-semibold flex items-center transition ${
                currentPage <= 1
                  ? 'border-slate-200 text-slate-300 cursor-not-allowed'
                  : 'border-slate-200 text-slate-700 hover:bg-slate-50'
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
                      className={`min-w-[32px] h-8 rounded-lg text-xs font-bold transition ${
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
              className={`p-2 rounded-lg border text-xs font-semibold flex items-center transition ${
                currentPage >= paginatedResult.totalPages
                  ? 'border-slate-200 text-slate-300 cursor-not-allowed'
                  : 'border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
              title="Next Page"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      )}
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
