import React from 'react';
import { SearchResult } from '../lib/globalSearch';

interface Props {
  relatedIds: string[];
  allResults: SearchResult[]; // A way to get all items
  onNavigate: (type: string, slug: string) => void;
}

export const RelatedContent: React.FC<Props> = ({ relatedIds, allResults, onNavigate }) => {
  const related = allResults.filter(r => relatedIds.includes(r.id));
  if (related.length === 0) return null;

  return (
    <div className="mt-12 bg-zinc-900 border border-zinc-700 rounded-xl p-6">
      <h3 className="font-bold text-xl mb-4">Related Content</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {related.map(res => (
          <div key={res.id} className="p-4 border border-zinc-800 rounded-lg">
             <div className="text-xs text-[#FF6B00]">{res.type}</div>
             <div className="font-bold">{res.title}</div>
             <button onClick={() => onNavigate(res.type, res.slug)} className="text-sm text-[#FF6B00] underline">View</button>
          </div>
        ))}
      </div>
    </div>
  );
};
