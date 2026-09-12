import React, { useState } from 'react';
import { SearchResult } from '../lib/globalSearch';

interface Props {
  results: SearchResult[];
  onNavigate: (type: string, slug: string) => void;
}

export const SearchResults: React.FC<Props> = ({ results, onNavigate }) => {
  const [filter, setFilter] = useState<string>('all');
  const types = ['all', 'Investment', 'Scheme', 'Opportunity', 'Tender', 'News'];
  const filtered = filter === 'all' ? results : results.filter(r => r.type === filter);

  if (results.length === 0) return null;

  return (
    <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-4 mt-4 max-w-2xl mx-auto">
      <h2 className="text-lg font-bold mb-4">Search Results ({filtered.length})</h2>
      <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
        {types.map(t => (
            <button 
                key={t}
                onClick={() => setFilter(t)}
                className={`px-3 py-1 rounded-full text-xs font-bold ${filter === t ? 'bg-[#FF6B00] text-white' : 'bg-zinc-800 text-zinc-400'}`}
            >
                {t}
            </button>
        ))}
      </div>
      <div className="space-y-4">
        {filtered.map((res) => (
          <div key={res.id} className="p-4 border border-zinc-800 rounded-lg hover:border-[#FF6B00] transition">
            <div className="text-xs font-bold uppercase text-[#FF6B00]">{res.type}</div>
            <div className="text-lg font-bold">{res.title}</div>
            <div className="text-sm text-zinc-400">Authority: {res.authority}</div>
            {res.status && <div className="text-sm text-zinc-500">Status: {res.status}</div>}
            <button 
              onClick={() => onNavigate(res.type, res.slug)}
              className="mt-2 text-sm text-white bg-[#FF6B00] px-4 py-1 rounded"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
