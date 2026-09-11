import React, { useState, useEffect, useMemo } from 'react';
import { MockNewsRepository } from '../infrastructure/repositories/NewsRepository';
import { NewsRecord } from '../types/news';
import { Search } from 'lucide-react';

export const NewsHub: React.FC = () => {
  const [news, setNews] = useState<NewsRecord[]>([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<string>('All');

  useEffect(() => {
    const fetchNews = async () => {
      const repo = new MockNewsRepository();
      const all = await repo.getAll();
      setNews(all);
    };
    fetchNews();
  }, []);

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

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-black text-white mb-8">Government News & Updates</h1>
      
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(n => (
          <div key={n.id} className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl hover:border-[#FF6B00] transition">
            <h3 className="text-lg font-bold text-white mb-1">{n.title}</h3>
            <p className="text-[#FF6B00] text-xs font-semibold uppercase mb-2">{n.category} • {n.publishedAt}</p>
            <p className="text-zinc-300 text-sm mb-4">{n.shortSummary}</p>
            <a href={`/news/${n.slug}`} className="text-white bg-[#FF6B00] px-4 py-2 rounded-lg text-sm font-semibold inline-block">Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
};
