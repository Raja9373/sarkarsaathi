import React, { useState, useEffect, useMemo } from 'react';
import { MockInvestmentRepository } from '../infrastructure/repositories/MockInvestmentRepository';
import { Investment } from '../types/investment';
import { Search } from 'lucide-react';

export const InvestmentsHub: React.FC = () => {
  const [investments, setInvestments] = useState<Investment[]>([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<string>('All');

  useEffect(() => {
    const fetchInvestments = async () => {
      const repo = new MockInvestmentRepository();
      const all = await repo.getAll();
      setInvestments(all);
    };
    fetchInvestments();
  }, []);

  const categories = useMemo(() => 
    ['All', ...Array.from(new Set(investments.map(i => i.category)))],
    [investments]
  );

  const filtered = useMemo(() => {
    return investments.filter(inv => {
      const matchesSearch = inv.name.toLowerCase().includes(search.toLowerCase()) || 
                            inv.category.toLowerCase().includes(search.toLowerCase()) ||
                            inv.authority.toLowerCase().includes(search.toLowerCase());
      const matchesFilter = filter === 'All' || inv.category === filter;
      return matchesSearch && matchesFilter;
    });
  }, [investments, search, filter]);

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-black text-white mb-8">Government Investments</h1>
      
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
      </div>

      <div className="text-zinc-400 mb-4">Showing {filtered.length} investments</div>

      {filtered.length === 0 ? (
        <div className="text-center py-12 text-zinc-500">No investments found matching your criteria.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(inv => (
            <div key={inv.id} className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl hover:border-[#FF6B00] transition">
              <h3 className="text-lg font-bold text-white mb-1">{inv.name}</h3>
              <p className="text-[#FF6B00] text-xs font-semibold uppercase mb-4">{inv.category}</p>
              <div className="text-zinc-300 text-sm mb-4">Authority: {inv.authority}</div>
              <a href={`/investments/${inv.slug}`} className="text-white bg-[#FF6B00] px-4 py-2 rounded-lg text-sm font-semibold inline-block">View Details</a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
