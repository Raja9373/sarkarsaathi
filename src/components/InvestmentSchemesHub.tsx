import React, { useState, useEffect, useMemo } from 'react';
import { MockInvestmentSchemeRepository } from '../infrastructure/repositories/InvestmentSchemeRepository';
import { GovernmentInvestmentSchemeRecord } from '../types/investmentScheme';
import { Search, ChevronDown, ShieldCheck } from 'lucide-react';

export const InvestmentSchemesHub: React.FC = () => {
  const [schemes, setSchemes] = useState<GovernmentInvestmentSchemeRecord[]>([]);
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');

  useEffect(() => {
    const fetchSchemes = async () => {
      const repo = new MockInvestmentSchemeRepository();
      const all = await repo.getAll();
      setSchemes(all);
    };
    fetchSchemes();
  }, []);

  const filtered = useMemo(() => {
    return schemes.filter(s => {
      const matchesSearch = s.schemeName.toLowerCase().includes(search.toLowerCase()) || 
                            s.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = categoryFilter === 'All' || s.category === categoryFilter;
      const matchesStatus = statusFilter === 'All' || s.status === statusFilter;
      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [schemes, search, categoryFilter, statusFilter]);

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Investment Schemes & Incentives</h1>
        <p className="text-lg text-zinc-400 max-w-2xl mx-auto">सरकारी निवेश, उद्योग और व्यवसायिक विकास से जुड़ी योजनाएं और प्रोत्साहन — आधिकारिक स्रोतों के साथ।</p>
        <p className="text-sm text-zinc-500 mt-2">Independent Information Platform • Verify important information on the official source before acting.</p>
      </div>
      
      <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-3.5 text-zinc-500" size={20} />
            <input 
              type="text"
              placeholder="Search investment schemes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-[#0B0F17] border border-zinc-700 rounded-xl text-white focus:border-[#FF6B00] outline-none"
            />
          </div>
          <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)} className="bg-[#0B0F17] border border-zinc-700 rounded-xl text-zinc-300 px-4 py-3">
            <option value="All">All Categories</option>
            <option value="Industrial Incentives">Industrial Incentives</option>
            <option value="Manufacturing">Manufacturing</option>
          </select>
          <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="bg-[#0B0F17] border border-zinc-700 rounded-xl text-zinc-300 px-4 py-3">
            <option value="All">All Statuses</option>
            <option value="ACTIVE">Active</option>
          </select>
        </div>
      </div>

      <div className="text-zinc-400 mb-4 font-medium">{filtered.length} verified investment-related scheme{filtered.length !== 1 ? 's' : ''}</div>

      {filtered.length === 0 ? (
        <div className="text-center py-16 bg-zinc-900 rounded-2xl border border-zinc-800 text-zinc-500">
            <p>No verified investment-related schemes match your search.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map(s => (
            <div key={s.id} className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl hover:border-[#FF6B00] transition group flex flex-col">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FF6B00] transition">{s.schemeName}</h3>
              <p className="text-zinc-400 text-sm mb-4">{s.category} • {s.level}</p>
              <p className="text-zinc-300 text-sm mb-6 flex-grow">{s.investmentPurpose}</p>
              
              <div className="mt-auto pt-4 border-t border-zinc-800 flex justify-between items-center">
                <span className={`text-xs font-bold ${s.status === 'ACTIVE' ? 'text-emerald-400' : 'text-zinc-400'}`}>{s.status}</span>
                <a href={`/investment-schemes/${s.slug}`} className="text-white bg-[#FF6B00] px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-[#e66000] transition">View Scheme</a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
