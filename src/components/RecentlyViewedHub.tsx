import React, { useState, useEffect } from 'react';
import { getRecentlyViewed, clearRecentlyViewed, ViewedItemRef } from '../lib/recentlyViewed';
import { Clock, Trash2, ArrowRight, Landmark, Briefcase, FileText, History } from 'lucide-react';

interface RecentlyViewedHubProps {
  onNavigate: (tab: string, slug?: string) => void;
}

export const RecentlyViewedHub: React.FC<RecentlyViewedHubProps> = ({ onNavigate }) => {
  const [items, setItems] = useState<ViewedItemRef[]>([]);

  useEffect(() => {
    setItems(getRecentlyViewed());
  }, []);

  const handleClear = () => {
    clearRecentlyViewed();
    setItems([]);
  };

  const handleItemClick = (item: ViewedItemRef) => {
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
      default: return History;
    }
  };

  return (
    <div className="py-12 px-4 max-w-7xl mx-auto text-zinc-100">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B00]/10 text-[#FF6B00] text-xs font-bold uppercase tracking-wider mb-2">
            <Clock className="w-4 h-4" /> Browsing History
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white">Recently Viewed</h1>
          <p className="text-zinc-400 text-sm mt-1">Quickly resume browsing your recently inspected investments, opportunities, and tenders.</p>
        </div>
        {items.length > 0 && (
          <button
            onClick={handleClear}
            className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-xl text-xs font-bold transition inline-flex items-center gap-2"
          >
            <Trash2 className="w-4 h-4" /> Clear History
          </button>
        )}
      </div>

      {items.length === 0 ? (
        <div className="text-center py-20 bg-zinc-900 border border-zinc-800 rounded-3xl max-w-xl mx-auto px-6">
          <div className="w-16 h-16 bg-zinc-800 text-zinc-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <History className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-bold text-white mb-2">No Recently Viewed Items</h2>
          <p className="text-zinc-400 text-sm mb-6">
            You haven't viewed any investment schemes, job opportunities, or tenders yet. Your browsing history will automatically appear here as you explore the platform.
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
                    <span className="text-[11px] text-zinc-500 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {new Date(item.viewedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                  <div>
                    <span className="text-xs text-zinc-400 block mb-1">{item.category}</span>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#FF6B00] transition leading-snug">{item.title}</h3>
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-800 flex justify-between items-center text-xs text-zinc-500">
                  <span>Viewed on {new Date(item.viewedAt).toLocaleDateString()}</span>
                  <span className="text-[#FF6B00] font-bold inline-flex items-center gap-1 group-hover:translate-x-1 transition">
                    View Again <ArrowRight className="w-3.5 h-3.5" />
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
