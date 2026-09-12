import React, { useState, useEffect, useMemo } from 'react';
import { MockTenderRepository } from '../infrastructure/repositories/TenderRepository';
import { TenderRecord } from '../types/tender';
import { Search, Filter, ChevronDown } from 'lucide-react';

export const TendersHub: React.FC = () => {
  const [tenders, setTenders] = useState<TenderRecord[]>([]);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [stateFilter, setStateFilter] = useState('All');

  useEffect(() => {
    const fetchTenders = async () => {
      const repo = new MockTenderRepository();
      const all = await repo.getAll();
      setTenders(all);
    };
    fetchTenders();
  }, []);

  const filtered = useMemo(() => {
    return tenders.filter(t => {
      const matchesSearch = t.title.toLowerCase().includes(search.toLowerCase()) || 
                            t.tenderId.toLowerCase().includes(search.toLowerCase()) ||
                            t.organisation.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = statusFilter === 'All' || t.status === statusFilter;
      const matchesState = stateFilter === 'All' || t.state === stateFilter;
      return matchesSearch && matchesStatus && matchesState;
    });
  }, [tenders, search, statusFilter, stateFilter]);

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Government Tenders in India</h1>
        <p className="text-lg text-zinc-400 max-w-2xl mx-auto">Discover government procurement opportunities from Central and State governments, PSUs and public authorities across India.</p>
        <p className="text-sm text-zinc-500 mt-2">Independent Information Platform • Always verify tender details on the official procurement portal before bidding.</p>
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
        </div>
      </div>

      <div className="text-zinc-400 mb-4 font-medium">Showing {filtered.length} tender{filtered.length !== 1 ? 's' : ''}</div>

      {filtered.length === 0 ? (
        <div className="text-center py-16 bg-zinc-900 rounded-2xl border border-zinc-800 text-zinc-500">
            <p>No tenders found matching your criteria.</p>
            <p className="text-sm mt-2">Official tender-source integration is being expanded. Current listings are limited while source verification is completed.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map(t => (
            <div key={t.tenderId} className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl hover:border-[#FF6B00] transition group flex flex-col">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FF6B00] transition">{t.title}</h3>
              <p className="text-zinc-400 text-sm mb-4">{t.organisation} • {t.department}</p>
              
              <div className="grid grid-cols-2 gap-y-2 text-xs text-zinc-500 mb-6">
                <div><span className="font-bold text-zinc-400">Tender ID:</span> {t.tenderId}</div>
                <div><span className="font-bold text-zinc-400">State:</span> {t.state}</div>
                <div><span className="font-bold text-zinc-400">Category:</span> {t.tenderCategory}</div>
                <div><span className="font-bold text-zinc-400">Status:</span> <span className={`${t.status === 'ACTIVE' ? 'text-emerald-400' : 'text-zinc-400'} font-bold`}>{t.status}</span></div>
              </div>
              
              <div className="mt-auto pt-4 border-t border-zinc-800 flex justify-between items-center">
                <span className="text-xs text-zinc-500">Closing: <strong className="text-zinc-300">{t.submissionDeadline}</strong></span>
                <a href={`/tenders/${t.slug}`} className="text-white bg-[#FF6B00] px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-[#e66000] transition">View Tender</a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
