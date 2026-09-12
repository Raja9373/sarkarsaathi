import React, { useState, useEffect, useMemo } from 'react';
import { MockInvestmentSchemeRepository } from '../infrastructure/repositories/InvestmentSchemeRepository';
import { GovernmentInvestmentSchemeRecord } from '../types/investmentScheme';
import { Search, ChevronDown, ShieldCheck, Filter } from 'lucide-react';

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

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white mb-4">Government Schemes & Incentives</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">Discover government schemes for investments, business, and development — verified with official sources.</p>
        <div className="mt-4 flex items-center justify-center text-sm text-zinc-500 gap-2">
           <ShieldCheck size={16} /> 
           <span>Independent platform • Always verify on official source</span>
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

      <div className="text-zinc-600 dark:text-zinc-400 mb-4 font-medium">Showing {filtered.length} verified scheme{filtered.length !== 1 ? 's' : ''}</div>

      {filtered.length === 0 ? (
        <div className="text-center py-16 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 text-zinc-500">
            <p>No verified schemes match your search or filters.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(s => (
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
      )}
    </div>
  );
};
