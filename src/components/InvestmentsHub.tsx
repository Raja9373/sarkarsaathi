import React, { useState, useEffect, useMemo } from 'react';
import { MockInvestmentRepository } from '../infrastructure/repositories/MockInvestmentRepository';
import { Investment } from '../types/investment';
import { Search, Info, ShieldCheck, HelpCircle } from 'lucide-react';

export const InvestmentsHub: React.FC = () => {
  const [investments, setInvestments] = useState<Investment[]>([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('default');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    const fetchInvestments = async () => {
      const repo = new MockInvestmentRepository();
      const all = await repo.getAll();
      setInvestments(all);
    };
    fetchInvestments();

    const params = new URLSearchParams(window.location.search);
    const q = params.get('search');
    const f = params.get('filter');
    const s = params.get('sort');
    const p = params.get('page');

    if (q) setSearch(q);
    if (f) setFilter(f);
    if (s) setSortBy(s);
    if (p && !isNaN(Number(p))) setCurrentPage(Math.max(1, Number(p)));

    const handlePopState = () => {
      const pParams = new URLSearchParams(window.location.search);
      setSearch(pParams.get('search') || '');
      setFilter(pParams.get('filter') || 'All');
      setSortBy(pParams.get('sort') || 'default');
      const pageNum = Number(pParams.get('page'));
      setCurrentPage(!isNaN(pageNum) && pageNum > 0 ? pageNum : 1);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams();
    if (search) params.set('search', search);
    if (filter && filter !== 'All') params.set('filter', filter);
    if (sortBy && sortBy !== 'default') params.set('sort', sortBy);
    if (currentPage > 1) params.set('page', String(currentPage));

    const newQuery = params.toString() ? `?${params.toString()}` : '';
    const newUrl = `${window.location.pathname}${newQuery}`;
    window.history.replaceState({}, '', newUrl);
  }, [search, filter, sortBy, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, filter, sortBy]);

  const categories = useMemo(() => 
    ['All', ...Array.from(new Set(investments.map(i => i.category)))],
    [investments]
  );

  const filtered = useMemo(() => {
    const list = investments.filter(inv => {
      const matchesSearch = inv.name.toLowerCase().includes(search.toLowerCase()) || 
                            inv.category.toLowerCase().includes(search.toLowerCase()) ||
                            inv.authority.toLowerCase().includes(search.toLowerCase());
      const matchesFilter = filter === 'All' || inv.category === filter;
      return matchesSearch && matchesFilter;
    });

    return list.sort((a, b) => {
      if (sortBy === 'name-asc') {
        return a.name.localeCompare(b.name);
      }
      if (sortBy === 'name-desc') {
        return b.name.localeCompare(a.name);
      }
      if (sortBy === 'status') {
        return a.status.localeCompare(b.status);
      }
      if (sortBy === 'date-desc') {
        return (b.lastVerified || '').localeCompare(a.lastVerified || '');
      }
      if (sortBy === 'date-asc') {
        return (a.lastVerified || '').localeCompare(b.lastVerified || '');
      }
      return 0; // default order
    });
  }, [investments, search, filter, sortBy]);

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filtered.slice(start, start + itemsPerPage);
  }, [filtered, currentPage]);

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      {/* Editorial Header & Introduction */}
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-black text-white mb-4">
          Government Investment Products & Sovereign Instruments
        </h1>
        <p className="text-lg text-zinc-300 max-w-3xl leading-relaxed mb-6">
          An independent reference directory detailing public savings instruments, sovereign bonds, postal schemes, and retirement funds administered by Central ministries, the Reserve Bank of India, and statutory financial institutions.
        </p>

        {/* Editorial Guide Box */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8 space-y-6 text-zinc-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center gap-2 text-white font-bold text-base mb-2">
                <Info size={18} className="text-[#FF6B00]" />
                <span>What You Will Find on This Page</span>
              </div>
              <p className="text-sm leading-relaxed text-zinc-400">
                This directory indexes publicly documented financial instruments backed by sovereign guarantee or statutory government frameworks. Entries include National Savings Certificates, Public Provident Fund, Sovereign Gold Bonds, Treasury bills, and state pension architectures. Each record outlines issuing authorities, core features, and regulatory context.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 text-white font-bold text-base mb-2">
                <ShieldCheck size={18} className="text-emerald-400" />
                <span>How to Interpret & Verify Listings</span>
              </div>
              <p className="text-sm leading-relaxed text-zinc-400">
                Interest yields, deposit thresholds, tax applicability (such as Section 80C deductions), and tenure limits are governed by periodic Ministry of Finance gazette notifications. We provide compiled summaries for comparative evaluation, but terms must always be confirmed directly with designated bank branches, post offices, or official nodal authorities before transacting.
              </p>
            </div>
          </div>

          {/* Contextual Clarification: Products vs Schemes */}
          <div className="pt-6 border-t border-zinc-800/80 bg-zinc-950/40 -mx-6 md:-mx-8 -mb-6 md:-mb-8 p-6 md:p-8 rounded-b-2xl">
            <div className="flex items-start gap-3">
              <HelpCircle size={20} className="text-[#FF6B00] shrink-0 mt-0.5" />
              <div>
                <h2 className="text-sm font-bold text-white uppercase tracking-wider mb-1">
                  Understanding the Difference: Investment Products vs. Investment Schemes
                </h2>
                <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
                  <strong className="text-zinc-200">Investment Products</strong> listed on this page are direct deposit instruments and financial securities where individuals commit personal capital for interest return or capital preservation. In contrast, <strong className="text-zinc-200">Investment Schemes</strong> (available in our Government Schemes section) represent policy incentives, industrial subsidies, and credit guarantee programs designed to foster business growth rather than individual deposit yields.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-3 text-zinc-500" size={20} />
          <input 
            type="text"
            placeholder="Search investments..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-zinc-900 border border-zinc-700 rounded-lg text-white"
          />
        </div>
        <select 
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="bg-zinc-900 border border-zinc-700 rounded-lg text-white px-4 py-2"
        >
          {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
        </select>
        <select 
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-zinc-900 border border-zinc-700 rounded-lg text-white px-4 py-2"
        >
          <option value="default">Default Order</option>
          <option value="name-asc">Name: A to Z</option>
          <option value="name-desc">Name: Z to A</option>
          <option value="status">Status</option>
          <option value="date-desc">Last Verified: Newest</option>
          <option value="date-asc">Last Verified: Oldest</option>
        </select>
      </div>

      <div className="text-zinc-400 mb-4">
        Showing {filtered.length === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1} - {Math.min(currentPage * itemsPerPage, filtered.length)} of {filtered.length} investments
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-12 text-zinc-500">No investments found matching your criteria.</div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {paginatedItems.map(inv => (
              <div key={inv.id} className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl hover:border-[#FF6B00] transition">
                <h3 className="text-lg font-bold text-white mb-1">{inv.name}</h3>
                <p className="text-[#FF6B00] text-xs font-semibold uppercase mb-4">{inv.category}</p>
                <div className="text-zinc-300 text-sm mb-4">Authority: {inv.authority}</div>
                <a href={`/investments/${inv.slug}`} className="text-white bg-[#FF6B00] px-4 py-2 rounded-lg text-sm font-semibold inline-block">View Details</a>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-between items-center bg-zinc-900 border border-zinc-800 p-4 rounded-xl">
              <button 
                onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 disabled:opacity-50 text-white rounded-lg text-sm font-medium transition"
              >
                Previous
              </button>
              <span className="text-zinc-400 text-sm">
                Page {currentPage} of {totalPages}
              </span>
              <button 
                onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 disabled:opacity-50 text-white rounded-lg text-sm font-medium transition"
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
