import React, { useState, useEffect, useMemo } from 'react';
import { MockOpportunityRepository } from '../infrastructure/repositories/OpportunityRepository';
import { OpportunityRecord } from '../types/opportunity';
import { Search } from 'lucide-react';

export const OpportunitiesHub: React.FC = () => {
  const [opportunities, setOpportunities] = useState<OpportunityRecord[]>([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<string>('All');

  useEffect(() => {
    const fetchOpportunities = async () => {
      const repo = new MockOpportunityRepository();
      const all = await repo.getAll();
      setOpportunities(all);
    };
    fetchOpportunities();
  }, []);

  const categories = useMemo(() => 
    ['All', ...Array.from(new Set(opportunities.map(i => i.sector)))],
    [opportunities]
  );

  const filtered = useMemo(() => {
    return opportunities.filter(o => {
      const matchesSearch = o.title.toLowerCase().includes(search.toLowerCase()) || 
                            o.authority.toLowerCase().includes(search.toLowerCase());
      const matchesFilter = filter === 'All' || o.sector === filter;
      return matchesSearch && matchesFilter;
    });
  }, [opportunities, search, filter]);

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-black text-white mb-8">Government Opportunities</h1>
      
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
      </div>

      <div className="text-zinc-400 mb-4">Showing {filtered.length} opportunities</div>

      {filtered.length === 0 ? (
        <div className="text-center py-12 text-zinc-500">No opportunities found matching your criteria.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(o => (
            <div key={o.id} className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl hover:border-[#FF6B00] transition">
              <h3 className="text-lg font-bold text-white mb-1">{o.title}</h3>
              <p className="text-[#FF6B00] text-xs font-semibold uppercase mb-2">{o.sector} • {o.opportunityType}</p>
              <p className="text-zinc-400 text-sm mb-4">Authority: {o.authority}</p>
              <a href={`/opportunities/${o.slug}`} className="text-white bg-[#FF6B00] px-4 py-2 rounded-lg text-sm font-semibold inline-block">View Details</a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
