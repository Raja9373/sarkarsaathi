import React, { useState, useEffect, useMemo } from 'react';
import { MockOpportunityRepository } from '../infrastructure/repositories/OpportunityRepository';
import { OpportunityRecord } from '../types/opportunity';
import { Search, Briefcase, ShieldCheck, GitCompare } from 'lucide-react';

export const OpportunitiesHub: React.FC = () => {
  const [opportunities, setOpportunities] = useState<OpportunityRecord[]>([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('default');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    const fetchOpportunities = async () => {
      const repo = new MockOpportunityRepository();
      const all = await repo.getAll();
      setOpportunities(all);
    };
    fetchOpportunities();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, filter, sortBy]);

  const categories = useMemo(() => 
    ['All', ...Array.from(new Set(opportunities.map(i => i.sector)))],
    [opportunities]
  );

  const filtered = useMemo(() => {
    const list = opportunities.filter(o => {
      const matchesSearch = o.title.toLowerCase().includes(search.toLowerCase()) || 
                            o.authority.toLowerCase().includes(search.toLowerCase());
      const matchesFilter = filter === 'All' || o.sector === filter;
      return matchesSearch && matchesFilter;
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
      if (sortBy === 'date-desc') {
        return (b.verificationStatus || '').localeCompare(a.verificationStatus || '');
      }
      return 0; // default order
    });
  }, [opportunities, search, filter, sortBy]);

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
          Government Development & PPP Opportunities
        </h1>
        <p className="text-lg text-zinc-300 max-w-3xl leading-relaxed mb-6">
          An informational index of public-private partnerships (PPP), industrial corridor developments, infrastructure concessions, and capital project opportunities across India.
        </p>

        {/* Editorial Explanatory Section */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8 space-y-6 text-zinc-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center gap-2 text-white font-bold text-base mb-2">
                <Briefcase size={18} className="text-[#FF6B00]" />
                <span>What These Project Listings Represent</span>
              </div>
              <p className="text-sm leading-relaxed text-zinc-400">
                This hub features public-sector development projects, infrastructure concessions, and industrial initiatives sponsored by Central agencies, state development boards, and public authorities. Each record synthesizes project objectives, estimated capital outlay, nodal authority oversight, and delivery frameworks (such as BOT, HAM, or EPC).
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 text-white font-bold text-base mb-2">
                <ShieldCheck size={18} className="text-emerald-400" />
                <span>How to Interpret & Verify Opportunities</span>
              </div>
              <p className="text-sm leading-relaxed text-zinc-400">
                Projects progress through stages from feasibility study and planning to formal bidding and concession award. A listing in this directory does not automatically mean an open bidding window is active. Always cross-reference listed project IDs directly on the sponsoring authority's portal or the DEA PPP India database to obtain current RFP packages and formal eligibility criteria.
              </p>
            </div>
          </div>

          {/* Contextual Clarification: Opportunities vs Tenders */}
          <div className="pt-6 border-t border-zinc-800/80 bg-zinc-950/40 -mx-6 md:-mx-8 -mb-6 md:-mb-8 p-6 md:p-8 rounded-b-2xl">
            <div className="flex items-start gap-3">
              <GitCompare size={20} className="text-[#FF6B00] shrink-0 mt-0.5" />
              <div>
                <h2 className="text-sm font-bold text-white uppercase tracking-wider mb-1">
                  Key Distinction: Strategic Opportunities vs. Public Tenders
                </h2>
                <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
                  <strong className="text-zinc-200">Opportunities</strong> refer to overarching capital initiatives, long-term concession models, or equity partnerships where private entities partner with public authorities over extensive lifecycle horizons. In contrast, <strong className="text-zinc-200">Tenders</strong> (accessible via our Tenders hub) are discrete, time-sensitive procurement solicitations with fixed submission deadlines for specific goods, civil contracts, or services.
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
            placeholder="Search opportunities..."
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
          <option value="title-asc">Title: A to Z</option>
          <option value="title-desc">Title: Z to A</option>
          <option value="status">Status</option>
          <option value="date-desc">Verification Status</option>
        </select>
      </div>

      <div className="text-zinc-400 mb-4">
        Showing {filtered.length === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1} - {Math.min(currentPage * itemsPerPage, filtered.length)} of {filtered.length} opportunities
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-12 text-zinc-500">No opportunities found matching your criteria.</div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {paginatedItems.map(o => (
              <div key={o.id} className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl hover:border-[#FF6B00] transition">
                <h3 className="text-lg font-bold text-white mb-1">{o.title}</h3>
                <p className="text-[#FF6B00] text-xs font-semibold uppercase mb-2">{o.sector} • {o.opportunityType}</p>
                <p className="text-zinc-400 text-sm mb-4">Authority: {o.authority}</p>
                <a href={`/opportunities/${o.slug}`} className="text-white bg-[#FF6B00] px-4 py-2 rounded-lg text-sm font-semibold inline-block">View Details</a>
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
