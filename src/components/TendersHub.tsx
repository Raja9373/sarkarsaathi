import React, { useState, useEffect, useMemo } from 'react';
import { MockTenderRepository } from '../infrastructure/repositories/TenderRepository';
import { TenderRecord } from '../types/tender';
import { Search } from 'lucide-react';

export const TendersHub: React.FC = () => {
  const [tenders, setTenders] = useState<TenderRecord[]>([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<string>('All');

  useEffect(() => {
    const fetchTenders = async () => {
      const repo = new MockTenderRepository();
      const all = await repo.getAll();
      setTenders(all);
    };
    fetchTenders();
  }, []);

  const categories = useMemo(() => 
    ['All', ...Array.from(new Set(tenders.map(i => i.tenderCategory)))],
    [tenders]
  );

  const filtered = useMemo(() => {
    return tenders.filter(t => {
      const matchesSearch = t.title.toLowerCase().includes(search.toLowerCase()) || 
                            t.issuingAuthority.toLowerCase().includes(search.toLowerCase());
      const matchesFilter = filter === 'All' || t.tenderCategory === filter;
      return matchesSearch && matchesFilter;
    });
  }, [tenders, search, filter]);

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-black text-white mb-8">Government Tenders</h1>
      
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-3 text-zinc-500" size={20} />
          <input 
            type="text"
            placeholder="Search tenders..."
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

      <div className="text-zinc-400 mb-4">Showing {filtered.length} tenders</div>

      {filtered.length === 0 ? (
        <div className="text-center py-12 text-zinc-500">No tenders found matching your criteria.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(t => (
            <div key={t.id} className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl hover:border-[#FF6B00] transition">
              <h3 className="text-lg font-bold text-white mb-1">{t.title}</h3>
              <p className="text-[#FF6B00] text-xs font-semibold uppercase mb-2">{t.tenderCategory} • {t.status}</p>
              <p className="text-zinc-400 text-sm mb-4">Authority: {t.issuingAuthority}</p>
              <p className="text-zinc-300 text-xs mb-4">Deadline: {t.submissionDeadline}</p>
              <a href={`/tenders/${t.slug}`} className="text-white bg-[#FF6B00] px-4 py-2 rounded-lg text-sm font-semibold inline-block">View Details</a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
