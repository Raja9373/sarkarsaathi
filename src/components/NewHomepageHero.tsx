import React from 'react';
import { Search, TrendingUp, Briefcase, FileText, Newspaper } from 'lucide-react';

interface Props {
  onSearch: (query: string) => void;
  onNavigate: (tab: string) => void;
}

export const NewHomepageHero: React.FC<Props> = ({ onSearch, onNavigate }) => {
  const [query, setQuery] = React.useState('');

  return (
    <div className="bg-[#0B0F17] text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="text-sm font-bold tracking-widest text-[#FF6B00] uppercase">
          INDIA’S GOVERNMENT INVESTMENT & OPPORTUNITY PLATFORM
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
          Government Investments, Opportunities & Tenders — All in One Place
        </h1>
        <p className="text-xl text-zinc-400">
          Explore government investment products, development opportunities, projects, tenders and important updates — backed by official sources.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <button onClick={() => onNavigate('investments')} className="bg-[#FF6B00] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#e66000] transition">Explore Investments</button>
          <button onClick={() => onNavigate('opportunities')} className="bg-zinc-800 text-white px-8 py-3 rounded-xl font-bold hover:bg-zinc-700 transition">Explore Opportunities</button>
          <button onClick={() => onNavigate('tenders')} className="bg-zinc-800 text-white px-8 py-3 rounded-xl font-bold hover:bg-zinc-700 transition">Find Tenders</button>
        </div>
        <p className="text-sm text-zinc-500 pt-8">
          Independent Information Platform. Not an official Government of India website.
        </p>
        <div className="pt-8">
            <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 w-5 h-5" />
                <input 
                    type="text" 
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && onSearch(query)}
                    placeholder="Search investments, projects, tenders, schemes or updates..." 
                    className="w-full bg-zinc-900 border border-zinc-700 rounded-xl py-4 pl-12 pr-4 text-lg focus:outline-none focus:border-[#FF6B00]"
                />
            </div>
        </div>
      </div>
    </div>
  );
};
