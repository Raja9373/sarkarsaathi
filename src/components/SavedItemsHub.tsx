import React, { useState, useEffect } from 'react';
import { getSavedItems, unsaveItem, SavedItemRef } from '../lib/savedItems';
import { Bookmark, Trash2, ArrowRight, Landmark, Briefcase, FileText } from 'lucide-react';

interface SavedItemsHubProps {
  onNavigate: (tab: string, slug?: string) => void;
}

export const SavedItemsHub: React.FC<SavedItemsHubProps> = ({ onNavigate }) => {
  const [items, setItems] = useState<SavedItemRef[]>([]);

  useEffect(() => {
    setItems(getSavedItems());
  }, []);

  const handleRemove = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    unsaveItem(id);
    setItems(getSavedItems());
  };

  const handleClearAll = () => {
    localStorage.removeItem('sarkarsaathi_saved_items_v1');
    setItems([]);
  };

  const handleItemClick = (item: SavedItemRef) => {
    if (item.type === 'investment') {
      onNavigate('investment-detail', item.slug);
    } else if (item.type === 'opportunity') {
      onNavigate('opportunities-detail', item.slug);
    } else if (item.type === 'tender') {
      onNavigate('tenders-detail', item.slug);
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'investment': return Landmark;
      case 'opportunity': return Briefcase;
      case 'tender': return FileText;
      default: return Bookmark;
    }
  };

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto text-zinc-100">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B00]/10 text-[#FF6B00] text-xs font-bold uppercase tracking-wider mb-2">
            <Bookmark className="w-4 h-4" /> Personal Bookmark Collection
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white">Saved Items</h1>
          <p className="text-zinc-400 text-sm mt-1">Access your bookmarked investments, opportunities, and government tenders in one place.</p>
        </div>
        {items.length > 0 && (
          <button
            onClick={handleClearAll}
            className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-xl text-xs font-bold transition inline-flex items-center gap-2"
          >
            <Trash2 className="w-4 h-4" /> Clear All Saved Items
          </button>
        )}
      </div>

      {items.length === 0 ? (
        <div className="text-center py-20 bg-zinc-900 border border-zinc-800 rounded-3xl max-w-xl mx-auto px-6">
          <div className="w-16 h-16 bg-zinc-800 text-zinc-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Bookmark className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-bold text-white mb-2">No Saved Items Yet</h2>
          <p className="text-zinc-400 text-sm mb-6">
            You haven't saved any investments, opportunities, or tenders yet. Browse the platform hubs and click the "Save" button on any item to bookmark it here for quick access.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button onClick={() => onNavigate('investments')} className="px-4 py-2 bg-[#FF6B00] hover:bg-[#e66000] text-white rounded-xl text-xs font-bold transition">
              Explore Investments
            </button>
            <button onClick={() => onNavigate('opportunities')} className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl text-xs font-bold transition">
              Explore Opportunities
            </button>
            <button onClick={() => onNavigate('tenders')} className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-xl text-xs font-bold transition">
              Explore Tenders
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(item => {
            const Icon = getIcon(item.type);
            return (
              <div
                key={item.id}
                onClick={() => handleItemClick(item)}
                className="bg-zinc-900 hover:bg-zinc-800/80 border border-zinc-800 hover:border-zinc-700 p-6 rounded-2xl cursor-pointer transition flex flex-col justify-between space-y-4 group shadow-lg"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-start gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#FF6B00]/10 text-[#FF6B00] text-[10px] font-bold uppercase tracking-wider">
                      <Icon className="w-3.5 h-3.5" /> {item.type}
                    </span>
                    <button
                      onClick={(e) => handleRemove(item.id, e)}
                      className="text-zinc-500 hover:text-red-400 p-1.5 transition rounded-lg hover:bg-zinc-800"
                      title="Remove from saved"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div>
                    <span className="text-xs text-zinc-400 block mb-1">{item.category}</span>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#FF6B00] transition leading-snug">{item.title}</h3>
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-800 flex justify-between items-center text-xs text-zinc-500">
                  <span>Saved on {new Date(item.savedAt).toLocaleDateString()}</span>
                  <span className="text-[#FF6B00] font-bold inline-flex items-center gap-1 group-hover:translate-x-1 transition">
                    View Detail <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
