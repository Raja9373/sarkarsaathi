import React, { useMemo } from 'react';
import { investmentRepository, investmentSchemeRepository, opportunityRepository, tenderRepository, newsRepository } from '../infrastructure/repositories/InvestmentRepository';
import { subsidyRepository } from '../infrastructure/repositories/SubsidyRepository';
import { getAllOfficialSources, getOfficialSourceSlug } from '../utils/officialSources';

export function SearchView({ query, onNavigate }: { query: string; onNavigate: (route: string, slug?: string) => void }) {
  const allItems = useMemo(() => {
    return [
      ...investmentRepository.getAll().map(i => ({ ...i, itemType: 'Investments', searchTitle: i.title, searchSlug: i.slug || i.id, routeBase: '/investments' })),
      ...investmentSchemeRepository.getAll().map(i => ({ ...i, itemType: 'Investment Schemes', searchTitle: i.title, searchSlug: i.slug || i.id, routeBase: '/investment-schemes' })),
      ...opportunityRepository.getAll().map(i => ({ ...i, itemType: 'Opportunities', searchTitle: i.title, searchSlug: i.slug || i.id, routeBase: '/opportunities' })),
      ...tenderRepository.getAll().map(i => ({ ...i, itemType: 'Tenders', searchTitle: i.title, searchSlug: i.slug || i.id, routeBase: '/tenders' })),
      ...newsRepository.getAll().map(i => ({ ...i, itemType: 'News & Updates', searchTitle: i.title, searchSlug: i.slug || i.id, routeBase: '/news' })),
      ...subsidyRepository.getAll().map(i => ({ ...i, itemType: 'Subsidies & Benefits', searchTitle: i.title, searchSlug: i.slug || i.id, routeBase: '/subsidies' })),
      ...getAllOfficialSources().map(s => ({ ...s, itemType: 'Official Sources', searchTitle: s.name, searchSlug: getOfficialSourceSlug(s), routeBase: '/official-sources' })),
    ];
  }, []);

  const searchResults = useMemo(() => {
    const q = query.toLowerCase();
    if (!q) return [];
    
    const filtered = allItems.filter(item => 
      (item.searchTitle || '').toLowerCase().includes(q) || 
      (item.description || '').toLowerCase().includes(q)
    );
    
    const groups = filtered.reduce((acc, item) => {
      if (!acc[item.itemType]) acc[item.itemType] = [];
      acc[item.itemType].push(item);
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
                {group.items.slice(0, 5).map((item: any, index: number) => (
                  <div key={index} className="p-4 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-slate-300 transition">
                    <h3 className="font-bold text-slate-900">{item.searchTitle}</h3>
                    <p className="text-sm text-slate-600 mt-1 line-clamp-2">{item.description}</p>
                    <button 
                      onClick={() => onNavigate(item.routeBase, item.searchSlug)}
                      className="mt-3 text-sm text-indigo-600 font-medium hover:underline inline-flex items-center space-x-1"
                    >
                      <span>View Details →</span>
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
