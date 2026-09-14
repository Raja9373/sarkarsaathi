import React, { useState, useEffect, useMemo } from 'react';
import { MockNewsRepository } from '../infrastructure/repositories/NewsRepository';
import { NewsRecord } from '../types/news';
import { Search, Newspaper, ShieldCheck, AlertCircle } from 'lucide-react';

export const NewsHub: React.FC = () => {
  const [news, setNews] = useState<NewsRecord[]>([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    const fetchNews = async () => {
      const repo = new MockNewsRepository();
      const all = await repo.getAll();
      setNews(all);
    };
    fetchNews();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, filter]);

  const categories = useMemo(() => 
    ['All', ...Array.from(new Set(news.map(i => i.category)))],
    [news]
  );

  const filtered = useMemo(() => {
    return news.filter(n => {
      const matchesSearch = n.title.toLowerCase().includes(search.toLowerCase()) || 
                            n.shortSummary.toLowerCase().includes(search.toLowerCase());
      const matchesFilter = filter === 'All' || n.category === filter;
      return matchesSearch && matchesFilter;
    });
  }, [news, search, filter]);

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
          Government News, Policy Updates & Gazette Reports
        </h1>
        <p className="text-lg text-zinc-300 max-w-3xl leading-relaxed mb-6">
          An informational reporting hub summarizing major economic policies, ministry gazette notifications, regulatory releases, and programmatic milestones across Indian public governance.
        </p>

        {/* Editorial Explanatory Box */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8 space-y-6 text-zinc-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center gap-2 text-white font-bold text-base mb-2">
                <Newspaper size={18} className="text-[#FF6B00]" />
                <span>Scope of Editorial Coverage</span>
              </div>
              <p className="text-sm leading-relaxed text-zinc-400">
                Articles indexed here provide neutral summaries of policy announcements, infrastructure rollouts, cabinet decisions, and financial regulations released through official public information channels, including the Press Information Bureau (PIB), RBI circulars, and departmental gazettes.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 text-white font-bold text-base mb-2">
                <ShieldCheck size={18} className="text-emerald-400" />
                <span>Interpreting Timelines & Gazette Notices</span>
              </div>
              <p className="text-sm leading-relaxed text-zinc-400">
                Public policy declarations frequently undergo phased implementation, subsequent circular clarifications, or rule-making commentary. While our editorial team summarizes these updates for accessibility, users should consult the primary gazette notification or official ministry circular cited in each article for legal and compliance determinations.
              </p>
            </div>
          </div>

          {/* Contextual Clarification: News vs Actionable Opportunities */}
          <div className="pt-6 border-t border-zinc-800/80 bg-zinc-950/40 -mx-6 md:-mx-8 -mb-6 md:-mb-8 p-6 md:p-8 rounded-b-2xl">
            <div className="flex items-start gap-3">
              <AlertCircle size={20} className="text-[#FF6B00] shrink-0 mt-0.5" />
              <div>
                <h2 className="text-sm font-bold text-white uppercase tracking-wider mb-1">
                  News & Updates vs. Actionable Opportunities
                </h2>
                <p className="text-xs md:text-sm text-zinc-400 leading-relaxed">
                  <strong className="text-zinc-200">News Articles</strong> provide informational context regarding institutional decisions and policy directions. They do not constitute solicitations, active tender packages, or direct commercial application channels. For formal bidding notices or long-term partnership proposals, please navigate to our dedicated <strong className="text-zinc-200">Tenders</strong> and <strong className="text-zinc-200">Opportunities</strong> hubs.
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
            placeholder="Search news..."
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
      </div>

      <div className="text-zinc-400 mb-4">
        Showing {filtered.length === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1} - {Math.min(currentPage * itemsPerPage, filtered.length)} of {filtered.length} articles
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-12 text-zinc-500">No news articles found matching your criteria.</div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {paginatedItems.map(n => (
              <div key={n.id} className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl hover:border-[#FF6B00] transition">
                <h3 className="text-lg font-bold text-white mb-1">{n.title}</h3>
                <p className="text-[#FF6B00] text-xs font-semibold uppercase mb-2">{n.category} • {n.publishedAt}</p>
                <p className="text-zinc-300 text-sm mb-4">{n.shortSummary}</p>
                <a href={`/news/${n.slug}`} className="text-white bg-[#FF6B00] px-4 py-2 rounded-lg text-sm font-semibold inline-block">Read More</a>
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
