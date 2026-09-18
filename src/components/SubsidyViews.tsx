import React, { useState, useMemo } from 'react';
import { Search, ExternalLink, ShieldCheck, ArrowRight, Filter, X, RotateCcw, ChevronLeft, ChevronRight, CheckCircle2, AlertCircle, Info, FileText, Building2, UserCheck, Layers } from 'lucide-react';
import { subsidyRepository } from '../infrastructure/repositories/SubsidyRepository';
import { Subsidy } from '../types';
import { CatalogQueryOptions, PaginatedResult } from '../ingestion/types';

interface SubsidyHubProps {
  onNavigate: (route: string, slug?: string) => void;
}

const TAXONOMY_CATEGORIES = [
  'Agriculture Subsidies',
  'MSME & Business Subsidies',
  'Manufacturing Incentives',
  'Renewable Energy & Solar Subsidies',
  'EV & Mobility Subsidies',
  'Housing Subsidies',
  'Education Benefits',
  'Women & Child Benefits',
  'Export & Trade Incentives',
  'Employment & Skill Benefits',
  'State Subsidies',
  'Other Government Benefits'
];

export function SubsidyHubView({ onNavigate }: SubsidyHubProps) {
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('ALL');
  const [stateFilter, setStateFilter] = useState('ALL');
  const [beneficiaryFilter, setBeneficiaryFilter] = useState('ALL');
  const [benefitTypeFilter, setBenefitTypeFilter] = useState('ALL');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [showFilters, setShowFilters] = useState(false);

  const items = useMemo(() => subsidyRepository.getAll(), []);

  const facets = useMemo(() => {
    const states = new Set<string>();
    const beneficiaries = new Set<string>();
    const benefitTypes = new Set<string>();
    const statuses = new Set<string>();

    for (const item of items) {
      if (item.state) states.add(item.state);
      if (item.beneficiaryType) beneficiaries.add(item.beneficiaryType);
      if (item.benefitType) benefitTypes.add(item.benefitType);
      if (item.status) statuses.add(item.status);
    }

    return {
      states: Array.from(states).sort(),
      beneficiaries: Array.from(beneficiaries).sort(),
      benefitTypes: Array.from(benefitTypes).sort(),
      statuses: Array.from(statuses).sort(),
      categories: TAXONOMY_CATEGORIES
    };
  }, [items]);

  const filteredItems = useMemo(() => {
    return items.filter(item => {
      const matchesSearch = !search || 
        item.title.toLowerCase().includes(search.toLowerCase()) || 
        item.description.toLowerCase().includes(search.toLowerCase()) ||
        (item.ministry && item.ministry.toLowerCase().includes(search.toLowerCase()));

      const matchesCategory = categoryFilter === 'ALL' || item.category === categoryFilter;
      const matchesState = stateFilter === 'ALL' || item.state === stateFilter;
      const matchesBeneficiary = beneficiaryFilter === 'ALL' || item.beneficiaryType === beneficiaryFilter;
      const matchesBenefitType = benefitTypeFilter === 'ALL' || item.benefitType === benefitTypeFilter;
      const matchesStatus = statusFilter === 'ALL' || item.status === statusFilter;

      return matchesSearch && matchesCategory && matchesState && matchesBeneficiary && matchesBenefitType && matchesStatus;
    });
  }, [items, search, categoryFilter, stateFilter, beneficiaryFilter, benefitTypeFilter, statusFilter]);

  const totalPages = Math.ceil(filteredItems.length / pageSize) || 1;
  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return filteredItems.slice(start, start + pageSize);
  }, [filteredItems, currentPage, pageSize]);

  const resetFilters = () => {
    setSearch('');
    setCategoryFilter('ALL');
    setStateFilter('ALL');
    setBeneficiaryFilter('ALL');
    setBenefitTypeFilter('ALL');
    setStatusFilter('ALL');
    setCurrentPage(1);
  };

  const activeCount = (categoryFilter !== 'ALL' ? 1 : 0) +
    (stateFilter !== 'ALL' ? 1 : 0) +
    (beneficiaryFilter !== 'ALL' ? 1 : 0) +
    (benefitTypeFilter !== 'ALL' ? 1 : 0) +
    (statusFilter !== 'ALL' ? 1 : 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-full text-xs font-semibold text-emerald-800 mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Official Government Subsidies & Incentives Catalogue</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Subsidies & Benefits</h1>
          <p className="text-slate-600 text-sm mt-2 max-w-2xl">
            Independent aggregator of verified Indian government subsidies, financial incentives, and citizen/business benefits sourced from official .gov.in portals.
          </p>
        </div>
        <div className="text-xs font-bold px-4 py-2 bg-slate-100 border border-slate-200 text-slate-700 rounded-xl">
          Catalogue Count: {items.length} verified listings
        </div>
      </div>

      {/* Search & Filters */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Search subsidies by name, keyword, ministry, or sector..."
              value={search}
              onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
              className="w-full pl-10 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition"
            />
            {search && (
              <button onClick={() => setSearch('')} className="absolute right-3 top-3 text-slate-400 hover:text-slate-600">
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`px-4 py-2.5 rounded-xl border text-xs font-semibold flex items-center gap-2 transition ${
                showFilters || activeCount > 0
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <Filter className="w-3.5 h-3.5" />
              <span>Filters</span>
              {activeCount > 0 && (
                <span className="w-4 h-4 rounded-full bg-emerald-600 text-white text-[10px] flex items-center justify-center font-bold">
                  {activeCount}
                </span>
              )}
            </button>

            {activeCount > 0 && (
              <button
                onClick={resetFilters}
                className="px-3 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 text-xs font-semibold flex items-center gap-1.5 transition"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Reset</span>
              </button>
            )}
          </div>
        </div>

        {showFilters && (
          <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            <div>
              <label className="block text-slate-500 font-semibold mb-1">Subsidy Category</label>
              <select
                value={categoryFilter}
                onChange={(e) => { setCategoryFilter(e.target.value); setCurrentPage(1); }}
                className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500 font-medium text-slate-800"
              >
                <option value="ALL">All Categories</option>
                {TAXONOMY_CATEGORIES.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-slate-500 font-semibold mb-1">State / Jurisdiction</label>
              <select
                value={stateFilter}
                onChange={(e) => { setStateFilter(e.target.value); setCurrentPage(1); }}
                className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500 font-medium text-slate-800"
              >
                <option value="ALL">All Jurisdictions (Central & States)</option>
                <option value="Central">Central Government</option>
                {facets.states.filter(s => s !== 'Central').map(st => (
                  <option key={st} value={st}>{st}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-slate-500 font-semibold mb-1">Beneficiary Type</label>
              <select
                value={beneficiaryFilter}
                onChange={(e) => { setBeneficiaryFilter(e.target.value); setCurrentPage(1); }}
                className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500 font-medium text-slate-800"
              >
                <option value="ALL">All Beneficiaries</option>
                {facets.beneficiaries.map(b => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-slate-500 font-semibold mb-1">Benefit Type</label>
              <select
                value={benefitTypeFilter}
                onChange={(e) => { setBenefitTypeFilter(e.target.value); setCurrentPage(1); }}
                className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500 font-medium text-slate-800"
              >
                <option value="ALL">All Benefit Types</option>
                {facets.benefitTypes.map(bt => (
                  <option key={bt} value={bt}>{bt}</option>
                ))}
              </select>
            </div>
          </div>
        )}

        {/* Results Info */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <div>
            Showing <span className="font-bold text-slate-800">{filteredItems.length > 0 ? (currentPage - 1) * pageSize + 1 : 0}</span> to{' '}
            <span className="font-bold text-slate-800">{Math.min(currentPage * pageSize, filteredItems.length)}</span> of{' '}
            <span className="font-bold text-slate-800">{filteredItems.length}</span> verified subsidies
          </div>
        </div>
      </div>

      {/* Grid of Subsidy Cards or Empty State */}
      {paginatedItems.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-3">
          <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <Info className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-slate-900">No subsidies currently listed in this view</h3>
          <p className="text-slate-500 text-xs max-w-md mx-auto">
            New official subsidy datasets are staged and verified continuously through SarkarSaathi's ingestion engine. Auto-publish remains disabled until admin review.
          </p>
          <button
            onClick={resetFilters}
            className="px-4 py-2 bg-emerald-50 text-emerald-800 font-semibold text-xs rounded-xl hover:bg-emerald-100 transition"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {paginatedItems.map(item => (
            <div key={item.id} className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition">
              <div>
                <div className="flex items-center justify-between mb-3 gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 truncate max-w-[220px]">
                    {item.category}
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

                {/* Key Benefit Highlights */}
                <div className="mb-4 p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1.5 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-bold uppercase text-[10px]">Subsidy Benefit</span>
                    <span className="font-bold text-slate-800 truncate max-w-[200px]">{item.benefits || item.subsidyAmount || 'Not specified'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-bold uppercase text-[10px]">Beneficiary</span>
                    <span className="font-semibold text-slate-700">{item.beneficiaryType || 'Citizens / Businesses'}</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 mb-4">
                  <span className="font-medium text-slate-700 truncate max-w-[220px]">{item.ministry || item.authority}</span>
                  <span className="bg-slate-100 px-2 py-0.5 rounded text-[11px]">{item.officialSource || 'gov.in'}</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <button
                    onClick={() => onNavigate('/subsidies', item.slug)}
                    className="flex-1 py-2 px-4 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-semibold transition"
                  >
                    View Details & Eligibility
                  </button>
                  {item.applicationUrl && (
                    <a
                      href={item.applicationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold transition flex items-center space-x-1"
                    >
                      <span>Apply Online</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between py-4 px-6 bg-white border border-slate-200 rounded-2xl shadow-xs">
          <div className="text-xs text-slate-600">
            Page <span className="font-bold text-slate-900">{currentPage}</span> of <span className="font-bold text-slate-900">{totalPages}</span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage <= 1}
              className="p-2 rounded-lg border border-slate-200 text-xs font-semibold disabled:opacity-40"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage >= totalPages}
              className="p-2 rounded-lg border border-slate-200 text-xs font-semibold disabled:opacity-40"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

interface SubsidyDetailProps {
  item: Subsidy;
  onBack: () => void;
}

export function SubsidyDetailView({ item, onBack }: SubsidyDetailProps) {
  if (!item) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Subsidy Record Not Found</h2>
        <p className="text-slate-600 text-sm">The requested subsidy or benefit item could not be located in the catalogue.</p>
        <button onClick={onBack} className="px-5 py-2.5 bg-emerald-600 text-white rounded-xl text-xs font-semibold">
          Back to Subsidies & Benefits
        </button>
      </div>
    );
  }

  const getFieldValue = (val?: string) => val && val.trim() ? val : "Not specified in the verified source.";

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <button
        onClick={onBack}
        className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-600 hover:text-emerald-700 transition cursor-pointer bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-2xs"
      >
        <ChevronLeft className="w-4 h-4" />
        <span>Back to Subsidies & Benefits</span>
      </button>

      {/* Main Card */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800">
            {item.category}
          </span>
          <div className="flex items-center gap-2">
            {item.state && (
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">
                {item.state}
              </span>
            )}
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
              {item.status || 'VERIFIED'}
            </span>
          </div>
        </div>

        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">{item.title}</h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{item.description}</p>
        </div>

        {/* Quick Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 text-xs">
          <div>
            <span className="text-slate-400 font-bold uppercase text-[10px] block mb-1">Implementing Ministry</span>
            <span className="font-bold text-slate-800">{getFieldValue(item.ministry || item.authority)}</span>
          </div>
          <div>
            <span className="text-slate-400 font-bold uppercase text-[10px] block mb-1">Beneficiary Type</span>
            <span className="font-bold text-slate-800">{getFieldValue(item.beneficiaryType)}</span>
          </div>
          <div>
            <span className="text-slate-400 font-bold uppercase text-[10px] block mb-1">Benefit Type</span>
            <span className="font-bold text-slate-800">{getFieldValue(item.benefitType)}</span>
          </div>
        </div>

        {/* Detailed Sections */}
        <div className="space-y-6 pt-4 border-t border-slate-100">
          {/* What is this */}
          <div className="space-y-2">
            <h2 className="text-base font-bold text-slate-900 flex items-center space-x-2">
              <FileText className="w-4 h-4 text-emerald-600" />
              <span>What is this?</span>
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">{getFieldValue(item.shortDescription || item.description)}</p>
          </div>

          {/* What benefit is available */}
          <div className="space-y-2">
            <h2 className="text-base font-bold text-slate-900 flex items-center space-x-2">
              <Building2 className="w-4 h-4 text-emerald-600" />
              <span>What benefit is available?</span>
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">{getFieldValue(item.benefits || item.subsidyAmount)}</p>
          </div>

          {/* Eligibility */}
          <div className="space-y-2">
            <h2 className="text-base font-bold text-slate-900 flex items-center space-x-2">
              <UserCheck className="w-4 h-4 text-emerald-600" />
              <span>Who can benefit (Eligibility)?</span>
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">{getFieldValue(item.eligibility)}</p>
          </div>

          {/* Documents required */}
          <div className="space-y-2">
            <h2 className="text-base font-bold text-slate-900 flex items-center space-x-2">
              <Layers className="w-4 h-4 text-emerald-600" />
              <span>Documents Required</span>
            </h2>
            {item.documentsRequired && item.documentsRequired.length > 0 ? (
              <ul className="list-disc pl-5 space-y-1 text-slate-600 text-sm">
                {item.documentsRequired.map((doc, idx) => (
                  <li key={idx}>{doc}</li>
                ))}
              </ul>
            ) : (
              <p className="text-slate-600 text-sm">Not specified in the verified source.</p>
            )}
          </div>

          {/* How to apply */}
          <div className="space-y-2">
            <h2 className="text-base font-bold text-slate-900 flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>How to Apply</span>
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">{getFieldValue(item.applicationProcess)}</p>
            {item.applicationUrl && (
              <div className="pt-2">
                <a
                  href={item.applicationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition shadow-sm"
                >
                  <span>Access Official Application Portal</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Provenance & Disclaimer Footer */}
        <div className="pt-6 border-t border-slate-200 text-xs text-slate-500 space-y-3 bg-slate-50 p-6 rounded-2xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="font-bold text-slate-700">Official Source:</span> {getFieldValue(item.officialSource || item.sourceAuthority)}
            </div>
            <div>
              <span className="font-bold text-slate-700">Last Verified:</span> {getFieldValue(item.lastVerified || item.lastVerifiedDate)}
            </div>
          </div>
          <div className="pt-2 border-t border-slate-200/80 text-[11px] leading-relaxed text-slate-500">
            <span className="font-semibold text-slate-700">Disclaimer:</span> {item.disclaimer || 'SarkarSaathi.org is an independent information platform. Please verify all subsidy terms, eligibility criteria, and deadlines on the official government portal before making any application.'}
          </div>
        </div>
      </div>
    </div>
  );
}
