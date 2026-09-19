import React, { useMemo } from 'react';
import { investmentRepository, investmentSchemeRepository, opportunityRepository, tenderRepository, newsRepository } from '../infrastructure/repositories/InvestmentRepository';
import { subsidyRepository } from '../infrastructure/repositories/SubsidyRepository';
import { addStateOfficialSources } from '../utils/officialSources';

export function SearchView({ query, onNavigate }: { query: string; onNavigate: (route: string, slug?: string) => void }) {
  const allItems = useMemo(() => {
    return [
      ...investmentRepository.getAll().map(i => ({ ...i, type: 'Investments', id: i.id || '' })),
      ...investmentSchemeRepository.getAll().map(i => ({ ...i, type: 'Investment Schemes', id: i.id || '' })),
      ...opportunityRepository.getAll().map(i => ({ ...i, type: 'Opportunities', id: i.id || '' })),
      ...tenderRepository.getAll().map(i => ({ ...i, type: 'Tenders', id: i.id || '' })),
      ...newsRepository.getAll().map(i => ({ ...i, type: 'News & Updates', id: i.id || '' })),
      ...subsidyRepository.getAll().map(i => ({ ...i, type: 'Subsidies & Benefits', id: i.id || '' })),
      ...addStateOfficialSources([]).map(s => ({ ...s, type: 'Official Sources', id: s.name })),
    ];
  }, []);

  const searchResults = useMemo(() => {
    const q = query.toLowerCase();
    if (!q) return [];
    
    const filtered = allItems.filter(item => 
      (item.title || item.name || '').toLowerCase().includes(q) || 
      (item.description || '').toLowerCase().includes(q)
    );
    
    const groups = filtered.reduce((acc, item) => {
      if (!acc[item.type]) acc[item.type] = [];
      acc[item.type].push(item);
      return acc;
    }, {} as Record<string, any[]>);
    
    return Object.entries(groups).map(([type, items]) => ({ type, items })) as { type: string; items: any[] }[];
  }, [query, allItems]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-extrabold text-slate-900 mb-6">Search Results for "{query}"</h1>
      {searchResults.length === 0 ? (
        <p className="text-slate-600">No results found for "{query}". Try checking your spelling or broadening your search.</p>
      ) : (
        <div className="space-y-8">
          {searchResults.map((group) => (
            <div key={group.type}>
              <h2 className="text-xl font-bold text-slate-900 mb-4">{group.type} ({group.items.length})</h2>
              <div className="grid gap-4">
                {group.items.slice(0, 5).map((item: any, index) => (
                  <div key={index} className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm">
                    <h3 className="font-bold text-slate-900">{item.title || item.name}</h3>
                    <p className="text-sm text-slate-600 mt-1">{item.description}</p>
                    <button 
                        onClick={() => {
                            if (group.type === 'Official Sources') window.open(item.officialUrl, '_blank');
                            else onNavigate(`/${group.type.toLowerCase().replace(' ', '-')}`, item.slug);
                        }}
                        className="mt-3 text-sm text-blue-600 font-medium hover:underline"
                    >
                      View Details →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
