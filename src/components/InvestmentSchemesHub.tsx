import React, { useState, useEffect, useMemo } from 'react';
import { MockInvestmentSchemeRepository } from '../infrastructure/repositories/InvestmentSchemeRepository';
import { GovernmentInvestmentSchemeRecord } from '../types/investmentScheme';
import { Search, ChevronDown, ShieldCheck, Filter, Layers, HelpCircle } from 'lucide-react';

export const InvestmentSchemesHub: React.FC = () => {
  const [schemes, setSchemes] = useState<GovernmentInvestmentSchemeRecord[]>([]);
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    const fetchSchemes = async () => {
      const repo = new MockInvestmentSchemeRepository();
      const all = await repo.getAll();
      setSchemes(all);
    };
    fetchSchemes();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, categoryFilter, statusFilter]);

  const categories = useMemo(() => Array.from(new Set(schemes.map(s => s.category))), [schemes]);

  const filtered = useMemo(() => {
    return schemes.filter(s => {
      const matchesSearch = s.schemeName.toLowerCase().includes(search.toLowerCase()) || 
                            s.shortDescription.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = categoryFilter === 'All' || s.category === categoryFilter;
      const matchesStatus = statusFilter === 'All' || s.status === statusFilter;
      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [schemes, search, categoryFilter, statusFilter]);

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filtered.slice(start, start + itemsPerPage);
  }, [filtered, currentPage]);

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      {/* Editorial Header & Introduction */}
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-black text-zinc-900 dark:text-white mb-4">
          Government Investment Schemes & Business Incentives
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-300 max-w-3xl leading-relaxed mb-6">
          An independent reference directory detailing industrial incentive programs, credit guarantee frameworks, capital subsidies, and enterprise support initiatives across India.
        </p>

        {/* Editorial Explanatory Box */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 md:p-8 space-y-6 text-zinc-700 dark:text-zinc-300 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center gap-2 text-zinc-900 dark:text-white font-bold text-base mb-2">
                <Layers size={18} className="text-[#FF6B00]" />
                <span>Scope of Government Schemes</span>
              </div>
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                This index profiles financial and regulatory incentives created by Central Ministries (such as MSME, Commerce & Industry, MeitY) and state-level industrial promotion bodies. Records detail support categories including Production Linked Incentives (PLI), interest subvention, infrastructure development support, and credit guarantees.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 text-zinc-900 dark:text-white font-bold text-base mb-2">
                <ShieldCheck size={18} className="text-emerald-500 dark:text-emerald-400" />
                <span>Interpreting Eligibility & Verification</span>
              </div>
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                Schemes feature precise eligibility conditions, budget caps, and designated application windows. An active status indicates that the policy is currently in force, but individual application rounds may have specific open and close cycles. Applicants must verify official nodal guidelines and submit claims through designated official ministerial portals.
              </p>
            </div>
          </div>

          {/* Contextual Clarification: Schemes vs Products */}
          <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/40 -mx-6 md:-mx-8 -mb-6 md:-mb-8 p-6 md:p-8 rounded-b-2xl">
            <div className="flex items-start gap-3">
              <HelpCircle size={20} className="text-[#FF6B00] shrink-0 mt-0.5" />
              <div>
                <h2 className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider mb-1">
                  Understanding the Difference: Investment Schemes vs. Investment Products
                </h2>
                <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  <strong className="text-zinc-900 dark:text-zinc-200">Investment Schemes</strong> provide targeted government backing, capital subsidies, and regulatory incentives to businesses and entrepreneurs to spur commercial investment and industrial growth. By contrast, <strong className="text-zinc-900 dark:text-zinc-200">Investment Products</strong> (such as sovereign bonds, PPF, and postal savings certificates) are direct financial deposit instruments where individuals invest personal funds for interest yields and capital security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 mb-8 shadow-sm">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-3.5 text-zinc-400" size={20} />
            <input 
              type="text"
              placeholder="Search scheme name, ministry, or beneficiary..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-zinc-50 dark:bg-[#0B0F17] border border-zinc-200 dark:border-zinc-700 rounded-xl dark:text-white focus:border-[#FF6B00] outline-none"
            />
          </div>
          <div className="flex gap-4">
            <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)} className="bg-zinc-50 dark:bg-[#0B0F17] border border-zinc-200 dark:border-zinc-700 rounded-xl dark:text-zinc-300 px-4 py-3">
              <option value="All">All Categories</option>
              {categories.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
            <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="bg-zinc-50 dark:bg-[#0B0F17] border border-zinc-200 dark:border-zinc-700 rounded-xl dark:text-zinc-300 px-4 py-3">
              <option value="All">All Statuses</option>
              <option value="ACTIVE">Active</option>
              <option value="CLOSED">Closed</option>
            </select>
          </div>
        </div>
      </div>

      <div className="text-zinc-600 dark:text-zinc-400 mb-4 font-medium">
        Showing {filtered.length === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1} - {Math.min(currentPage * itemsPerPage, filtered.length)} of {filtered.length} verified schemes
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-16 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 text-zinc-500">
            <p>No verified schemes match your search or filters.</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {paginatedItems.map(s => (
              <div key={s.id} className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-2xl hover:border-[#FF6B00] transition group flex flex-col shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-semibold text-[#FF6B00] uppercase tracking-wider">{s.category}</span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${s.status === 'ACTIVE' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200' : 'bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200'}`}>{s.status}</span>
                </div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-[#FF6B00] transition">{s.schemeName}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 flex-grow">{s.shortDescription}</p>
                
                <div className="mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex justify-between items-center text-xs text-zinc-500">
                  <span>{s.level}</span>
                  <a href={`/investment-schemes/${s.slug}`} className="text-[#FF6B00] font-bold hover:underline">View Full Details</a>
                </div>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-between items-center bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-4 rounded-xl shadow-sm">
              <button 
                onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 disabled:opacity-50 text-zinc-800 dark:text-white rounded-lg text-sm font-medium transition"
              >
                Previous
              </button>
              <span className="text-zinc-600 dark:text-zinc-400 text-sm">
                Page {currentPage} of {totalPages}
              </span>
              <button 
                onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 disabled:opacity-50 text-zinc-800 dark:text-white rounded-lg text-sm font-medium transition"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};
