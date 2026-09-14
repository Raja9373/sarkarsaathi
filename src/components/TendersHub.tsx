import React, { useState, useEffect, useMemo } from 'react';
import { MockTenderRepository } from '../infrastructure/repositories/TenderRepository';
import { TenderRecord } from '../types/tender';
import { Search, FileCheck, ShieldAlert, GitBranch } from 'lucide-react';

export const TendersHub: React.FC = () => {
  const [tenders, setTenders] = useState<TenderRecord[]>([]);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [stateFilter, setStateFilter] = useState('All');
  const [sortBy, setSortBy] = useState('default');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchTenders = async () => {
      const repo = new MockTenderRepository();
      const all = await repo.getAll();
      setTenders(all);
    };
    fetchTenders();

    const params = new URLSearchParams(window.location.search);
    const q = params.get('search');
    const statusF = params.get('status');
    const stateF = params.get('state');
    const s = params.get('sort');
    const p = params.get('page');

    if (q) setSearch(q);
    if (statusF) setStatusFilter(statusF);
    if (stateF) setStateFilter(stateF);
    if (s) setSortBy(s);
    if (p && !isNaN(Number(p))) setCurrentPage(Math.max(1, Number(p)));

    const handlePopState = () => {
      const pParams = new URLSearchParams(window.location.search);
      setSearch(pParams.get('search') || '');
      setStatusFilter(pParams.get('status') || 'All');
      setStateFilter(pParams.get('state') || 'All');
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
    if (statusFilter && statusFilter !== 'All') params.set('status', statusFilter);
    if (stateFilter && stateFilter !== 'All') params.set('state', stateFilter);
    if (sortBy && sortBy !== 'default') params.set('sort', sortBy);
    if (currentPage > 1) params.set('page', String(currentPage));

    const newQuery = params.toString() ? `?${params.toString()}` : '';
    const newUrl = `${window.location.pathname}${newQuery}`;
    window.history.replaceState({}, '', newUrl);
  }, [search, statusFilter, stateFilter, sortBy, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, statusFilter, stateFilter, sortBy]);

  const filtered = useMemo(() => {
    const list = tenders.filter(t => {
      const matchesSearch = t.title.toLowerCase().includes(search.toLowerCase()) || 
                            t.tenderId.toLowerCase().includes(search.toLowerCase()) ||
                            t.organisation.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = statusFilter === 'All' || t.status === statusFilter;
      const matchesState = stateFilter === 'All' || t.state === stateFilter;
      return matchesSearch && matchesStatus && matchesState;
    });

    return list.sort((a, b) => {
      if (sortBy === 'title-asc') {
        return a.title.localeCompare(b.title);
      }
      if (sortBy === 'title-desc') {
        return b.title.localeCompare(a.title);
      }
      if (sortBy === 'status') {
        return (a.status || '').localeCompare(b.status || '');
      }
      if (sortBy === 'deadline-asc') {
        return (a.submissionDeadline || '9999').localeCompare(b.submissionDeadline || '9999');
      }
      if (sortBy === 'deadline-desc') {
        return (b.submissionDeadline || '').localeCompare(a.submissionDeadline || '');
      }
      return 0; // default order
    });
  }, [tenders, search, statusFilter, stateFilter, sortBy]);

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
          Government Procurement Tenders & Public Notices
        </h1>
        <p className="text-lg text-zinc-300 max-w-3xl leading-relaxed mb-6">
          An independent tracking directory indexing public procurement calls, equipment tenders, civil works notices, and service contracts issued by Central Ministries, State Departments, and Public Sector Undertakings (PSUs).
        </p>

        {/* Editorial Explanatory Box */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8 space-y-6 text-zinc-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center gap-2 text-white font-bold text-base mb-2">
                <FileCheck size={18} className="text-[#FF6B00]" />
                <span>What You Can Find in This Directory</span>
              </div>
              <p className="text-sm leading-relaxed text-zinc-400">
                This section indexes public procurement notices and Request for Proposals (RFPs) across goods, works, and non-consulting services. Each record identifies the procuring organisation, administrative department, unique Tender Reference ID, work classification, and statutory submission deadline.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 text-white font-bold text-base mb-2">
                <ShieldAlert size={18} className="text-amber-400" />
                <span>Critical Verification & Bidding Rules</span>
              </div>
              <p className="text-sm leading-relaxed text-zinc-400">
                Tender schedules and submission dates are strictly time-bound. Important updates — including corrigenda, pre-bid meeting clarifications, eligibility amendments, and deadline extensions — are published exclusively on the procuring authority's official e-procurement portal (such as eprocure.gov.in or state equivalents). Prospective bidders must download formal tender documents from the official source prior to submitting bids.
              </p>
            </div>
          </div>

          {/* Contextual Clarification: Tenders vs Opportunities */}
          <div className="pt-6 border-t border-zinc-800/80 bg-zinc-950/40 -mx-6 md:-mx-8 -mb-6 md:-mb-8 p-6 md:p-8 rounded-b-2xl">
            <div className="flex items-start gap-3">
              <GitBranch size={20} className="text-[#FF6B00] shrink-0 mt-0.5" />
              <div>
                <h2 className="text-sm font-bold text-white uppercase tracking-wider mb-1">
                  Procurement Tenders vs. Investment Opportunities
                </h2>
                <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
                  <strong className="text-zinc-200">Tenders</strong> listed here represent specific commercial procurement contracts where public authorities seek contractors to supply goods, build infrastructure, or render operational services against competitive bidding criteria. In contrast, <strong className="text-zinc-200">Opportunities</strong> represent broader capital projects or public-private partnerships (PPPs) requiring long-term private financing and strategic asset concession.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-3.5 text-zinc-500" size={20} />
            <input 
              type="text"
              placeholder="Search by title, Tender ID, organisation..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-[#0B0F17] border border-zinc-700 rounded-xl text-white focus:border-[#FF6B00] outline-none"
            />
          </div>
          <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="bg-[#0B0F17] border border-zinc-700 rounded-xl text-zinc-300 px-4 py-3">
            <option value="All">All Statuses</option>
            <option value="ACTIVE">Active</option>
            <option value="CLOSING_SOON">Closing Soon</option>
          </select>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="bg-[#0B0F17] border border-zinc-700 rounded-xl text-zinc-300 px-4 py-3">
            <option value="default">Default Order</option>
            <option value="title-asc">Title: A to Z</option>
            <option value="title-desc">Title: Z to A</option>
            <option value="status">Status</option>
            <option value="deadline-asc">Deadline: Soonest</option>
            <option value="deadline-desc">Deadline: Latest</option>
          </select>
        </div>
      </div>

      <div className="text-zinc-400 mb-4 font-medium">
        Showing {filtered.length === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1} - {Math.min(currentPage * itemsPerPage, filtered.length)} of {filtered.length} tenders
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-16 bg-zinc-900 rounded-2xl border border-zinc-800 text-zinc-500">
            <p>No tenders found matching your criteria.</p>
            <p className="text-sm mt-2">Official tender-source integration is being expanded. Current listings are limited while source verification is completed.</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {paginatedItems.map(t => (
              <div key={t.tenderId} className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl hover:border-[#FF6B00] transition group flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FF6B00] transition">{t.title}</h3>
                <p className="text-zinc-400 text-sm mb-4">{t.organisation} • {t.department}</p>
                
                <div className="grid grid-cols-2 gap-y-2 text-xs text-zinc-500 mb-6">
                  <div><span className="font-bold text-zinc-400">Tender ID:</span> {t.tenderId}</div>
                  <div><span className="font-bold text-zinc-400">State:</span> {t.state}</div>
                  <div><span className="font-bold text-zinc-400">Category:</span> {t.tenderCategory}</div>
                  <div>
                    <span className="font-bold text-zinc-400">Status:</span>{' '}
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase 
                      ${t.status === 'ACTIVE' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-zinc-700 text-zinc-300'}`}>
                      {t.status}
                    </span>
                  </div>
                </div>
                
                <div className="mt-auto pt-4 border-t border-zinc-800 flex justify-between items-center">
                  <span className="text-xs text-zinc-500">Closing: <strong className="text-zinc-300">{t.submissionDeadline}</strong></span>
                  <a href={`/tenders/${t.slug}`} className="text-white bg-[#FF6B00] px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-[#e66000] transition">View Tender</a>
                </div>
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
