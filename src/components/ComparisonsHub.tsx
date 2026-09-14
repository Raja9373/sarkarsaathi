import React, { useState, useEffect, useMemo } from 'react';
import { MockInvestmentRepository } from '../infrastructure/repositories/MockInvestmentRepository';
import { MockInvestmentSchemeRepository } from '../infrastructure/repositories/InvestmentSchemeRepository';
import { ComparisonEngine } from './ComparisonEngine';
import { Investment } from '../types/investment';
import { GovernmentInvestmentSchemeRecord } from '../types/investmentScheme';

export interface ComparableItem {
  id: string;
  type: 'investment' | 'scheme';
  name: string;
  category: string;
  authority: string;
  status: string;
  returnOrBenefit: string;
  tenure: string;
  lockIn: string;
  minInvestment: string;
  eligibility: string;
  taxOrSubsidy: string;
  officialSource: string;
  verificationStatus: string;
  lastVerified: string;
  officialUrl: string;
}

export const ComparisonsHub: React.FC = () => {
  const [investments, setInvestments] = useState<Investment[]>([]);
  const [schemes, setSchemes] = useState<GovernmentInvestmentSchemeRecord[]>([]);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useEffect(() => {
    const loadData = async () => {
      const invRepo = new MockInvestmentRepository();
      const allInv = await invRepo.getAll();
      const schemeRepo = new MockInvestmentSchemeRepository();
      const allScheme = schemeRepo.getAll();
      
      setInvestments(allInv);
      setSchemes(allScheme);

      const allValidIds = new Set([...allInv.map(i => i.id), ...allScheme.map(s => s.id)]);

      // Check URL params first
      const params = new URLSearchParams(window.location.search);
      const compareParam = params.get('compare') || params.get('ids');
      
      if (compareParam) {
        const rawIds = compareParam.split(',').map(s => s.trim()).filter(Boolean);
        const validIds = Array.from(new Set(rawIds)).filter(id => allValidIds.has(id));
        if (validIds.length > 0) {
          setSelectedIds(validIds);
          return;
        }
      }

      // Default selection: PPF and NPS if available
      if (allInv.length >= 2) {
        const ppf = allInv.find(i => i.id === 'ppf');
        const nps = allInv.find(i => i.id === 'nps');
        if (ppf && nps) {
          setSelectedIds([ppf.id, nps.id]);
        } else {
          setSelectedIds([allInv[0].id, allInv[1].id]);
        }
      }
    };
    loadData();

    const handlePopState = () => {
      const pParams = new URLSearchParams(window.location.search);
      const pCompare = pParams.get('compare') || pParams.get('ids');
      if (pCompare) {
        const pIds = Array.from(new Set(pCompare.split(',').map(s => s.trim()).filter(Boolean)));
        setSelectedIds(pIds);
      } else {
        setSelectedIds([]);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (selectedIds.length > 0) {
      params.set('compare', selectedIds.join(','));
    } else {
      params.delete('compare');
      params.delete('ids');
    }

    const newQuery = params.toString() ? `?${params.toString()}` : '';
    const newUrl = `${window.location.pathname}${newQuery}`;
    window.history.replaceState({}, '', newUrl);
  }, [selectedIds]);

  const allItems: ComparableItem[] = useMemo(() => {
    const invItems: ComparableItem[] = investments.map(inv => ({
      id: inv.id,
      type: 'investment',
      name: inv.name,
      category: inv.category,
      authority: inv.authority || inv.administeringBody || 'Government of India',
      status: inv.status,
      returnOrBenefit: inv.interestRate || 'Not specified',
      tenure: inv.tenure || 'Not specified',
      lockIn: inv.lockIn || 'Not specified',
      minInvestment: inv.minimumInvestment || 'Not specified',
      eligibility: inv.eligibility || 'Not specified',
      taxOrSubsidy: inv.taxBenefits || inv.taxation || 'Not specified',
      officialSource: inv.officialSource || 'Official Source',
      verificationStatus: inv.verificationStatus || 'VERIFIED',
      lastVerified: inv.lastVerified || '-',
      officialUrl: inv.officialInformationUrl || '#'
    }));

    const schemeItems: ComparableItem[] = schemes.map(sch => ({
      id: sch.id,
      type: 'scheme',
      name: sch.schemeName,
      category: sch.category,
      authority: sch.ministry || sch.department || 'Government of India',
      status: sch.status,
      returnOrBenefit: sch.benefitAmount || sch.benefits || 'Not specified',
      tenure: sch.tenure || 'Not specified',
      lockIn: sch.lockIn || 'Not specified',
      minInvestment: sch.minimumInvestment || 'Not specified',
      eligibility: sch.eligibility || 'Not specified',
      taxOrSubsidy: sch.subsidy || sch.incentive || 'Not specified',
      officialSource: sch.sourceType || 'Ministry',
      verificationStatus: sch.verificationStatus || 'VERIFIED',
      lastVerified: sch.lastVerifiedAt || '-',
      officialUrl: sch.officialSourceUrl || '#'
    }));

    return [...invItems, ...schemeItems];
  }, [investments, schemes]);

  const categories = useMemo(() => {
    return ['All', ...Array.from(new Set(allItems.map(i => i.category)))];
  }, [allItems]);

  const filteredItemsForPicker = useMemo(() => {
    return allItems.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.authority.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
      const notSelected = !selectedIds.includes(item.id);
      return matchesSearch && matchesCat && notSelected;
    });
  }, [allItems, searchQuery, selectedCategory, selectedIds]);

  const selectedItems = useMemo(() => {
    return selectedIds.map(id => allItems.find(i => i.id === id)).filter(Boolean) as ComparableItem[];
  }, [selectedIds, allItems]);

  const handleAddItem = (id: string) => {
    if (!selectedIds.includes(id) && selectedIds.length < 4) {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const handleRemoveItem = (id: string) => {
    setSelectedIds(selectedIds.filter(i => i.id !== id));
  };

  const handleClearAll = () => {
    setSelectedIds([]);
  };

  const handlePreset = (ids: string[]) => {
    setSelectedIds(Array.from(new Set(ids)));
  };

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-black text-white mb-2">Government Investment & Scheme Comparisons</h1>
        <p className="text-zinc-400 text-sm">Select up to 4 items side-by-side to compare returns, lock-ins, eligibility, tax benefits, and official verification.</p>
      </div>

      {/* Quick Presets */}
      <div className="flex flex-wrap gap-2 mb-6 items-center">
        <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mr-2">Quick Presets:</span>
        <button onClick={() => handlePreset(['ppf', 'nps'])} className="px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg text-xs font-medium transition">
          PPF vs NPS
        </button>
        <button onClick={() => handlePreset(['scss', 'ssa'])} className="px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg text-xs font-medium transition">
          SCSS vs SSA (Sukanya)
        </button>
        <button onClick={() => handlePreset(['nsc', 'kvp'])} className="px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg text-xs font-medium transition">
          NSC vs KVP
        </button>
        {selectedIds.length > 0 && (
          <button onClick={handleClearAll} className="ml-auto px-3 py-1.5 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg text-xs font-medium transition">
            Clear All ({selectedIds.length})
          </button>
        )}
      </div>

      {/* Add Item Controls */}
      <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl mb-8">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-4">
          <input 
            type="text" 
            placeholder="Search investments or schemes to add..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:w-96 bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-[#FF6B00]"
          />
          <div className="flex items-center gap-3 w-full md:w-auto">
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-white text-sm"
            >
              {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
            <span className="text-xs text-zinc-400 whitespace-nowrap">{selectedIds.length}/4 selected</span>
          </div>
        </div>

        {filteredItemsForPicker.length > 0 && selectedIds.length < 4 && (
          <div className="max-h-48 overflow-y-auto divide-y divide-zinc-800 border-t border-zinc-800 pt-2">
            {filteredItemsForPicker.slice(0, 10).map(item => (
              <div key={item.id} className="py-2 px-3 flex items-center justify-between hover:bg-zinc-800/50 rounded-lg transition">
                <div>
                  <span className="text-white font-medium text-sm">{item.name}</span>
                  <span className="ml-2 text-xs text-[#FF6B00] uppercase">[{item.type}] • {item.category}</span>
                </div>
                <button 
                  onClick={() => handleAddItem(item.id)}
                  className="px-3 py-1 bg-[#FF6B00] hover:bg-[#e66000] text-white rounded text-xs font-bold transition"
                >
                  + Add
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Comparison Engine / State Display */}
      {selectedItems.length === 0 ? (
        <div className="text-center py-16 bg-zinc-900 border border-zinc-800 rounded-2xl text-zinc-500">
          <p className="text-lg font-bold text-zinc-300 mb-2">No items selected for comparison</p>
          <p className="text-sm">Select at least one investment or scheme above using the search or quick presets.</p>
        </div>
      ) : (
        <ComparisonEngine items={selectedItems} onRemove={handleRemoveItem} />
      )}
    </div>
  );
};
