import React, { useState, useEffect, useCallback } from 'react';
import { Bookmark, Clock, Share2, Scale, Trash2, Check, ExternalLink, ArrowRight, Building2 } from 'lucide-react';
import { investmentRepository, opportunityRepository, tenderRepository, investmentSchemeRepository, newsRepository } from '../infrastructure/repositories/InvestmentRepository';

export function useSavedItems() {
  const [savedIds, setSavedIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('sarkarsaathi_saved');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('sarkarsaathi_saved', JSON.stringify(savedIds));
    } catch {}
  }, [savedIds]);

  const toggleSave = useCallback((id: string) => {
    setSavedIds(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  }, []);

  const clearSaved = useCallback(() => setSavedIds([]), []);

  return { savedIds, toggleSave, clearSaved };
}

export function useRecentlyViewed() {
  const [recentIds, setRecentIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('sarkarsaathi_recent');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const addRecent = useCallback((id: string) => {
    if (!id) return;
    setRecentIds(prev => {
      if (prev.length > 0 && prev[0] === id) {
        return prev;
      }
      const filtered = prev.filter(i => i !== id);
      const updated = [id, ...filtered].slice(0, 10);
      try {
        localStorage.setItem('sarkarsaathi_recent', JSON.stringify(updated));
      } catch {}
      return updated;
    });
  }, []);

  const clearRecent = useCallback(() => {
    setRecentIds([]);
    try {
      localStorage.removeItem('sarkarsaathi_recent');
    } catch {}
  }, []);

  return { recentIds, addRecent, clearRecent };
}

export function ShareButton({ title, url }: { title: string; url?: string }) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareUrl = url || window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title, url: shareUrl });
        return;
      } catch {}
    }
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <button
      onClick={handleShare}
      className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold transition flex items-center space-x-1.5"
      title="Share page"
    >
      {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
      <span>{copied ? 'Copied Link!' : 'Share'}</span>
    </button>
  );
}

export function SavedView({ onNavigate }: { onNavigate: (route: string, slug?: string) => void }) {
  const { savedIds, toggleSave, clearSaved } = useSavedItems();

  const allItems = [
    ...investmentRepository.getAll(),
    ...investmentSchemeRepository.getAll(),
    ...opportunityRepository.getAll(),
    ...tenderRepository.getAll(),
    ...newsRepository.getAll(),
  ];

  const savedItems = allItems.filter(item => savedIds.includes(item.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 mb-2 flex items-center space-x-2">
            <Bookmark className="w-8 h-8 text-indigo-600" />
            <span>Saved Items</span>
          </h1>
          <p className="text-slate-600 text-sm">Your bookmarked investments, schemes, and tenders.</p>
        </div>
        {savedItems.length > 0 && (
          <button
            onClick={clearSaved}
            className="px-4 py-2 bg-rose-50 hover:bg-rose-100 text-rose-700 rounded-xl text-xs font-semibold transition flex items-center space-x-1"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Clear All</span>
          </button>
        )}
      </div>

      {savedItems.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center text-slate-500">
          <Bookmark className="w-12 h-12 text-slate-300 mx-auto mb-4" />
          <p className="font-semibold text-slate-700">No saved items yet.</p>
          <p className="text-xs text-slate-400 mt-1">Click the bookmark icon on any item detail page to save it for quick access.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {savedItems.map(item => (
            <div key={item.id} className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-xs">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700">{item.category}</span>
                  <button onClick={() => toggleSave(item.id)} className="text-indigo-600 hover:text-indigo-800">
                    <Bookmark className="w-4 h-4 fill-current" />
                  </button>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-2">{item.description}</p>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <span className="text-xs text-slate-500">{item.authority}</span>
                <button
                  onClick={() => {
                    const routeMap: Record<string, string> = {
                      'investments': '/investments',
                      'investment-schemes': '/investment-schemes',
                      'opportunities': '/opportunities',
                      'tenders': '/tenders',
                      'news': '/news',
                    };
                    // determine type
                    let r = '/investments';
                    if (investmentSchemeRepository.getById(item.id)) r = '/investment-schemes';
                    else if (opportunityRepository.getById(item.id)) r = '/opportunities';
                    else if (tenderRepository.getById(item.id)) r = '/tenders';
                    else if (newsRepository.getById(item.id)) r = '/news';
                    onNavigate(r, item.slug);
                  }}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold transition"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function RecentlyViewedView({ onNavigate }: { onNavigate: (route: string, slug?: string) => void }) {
  const { recentIds, clearRecent } = useRecentlyViewed();

  const allItems = [
    ...investmentRepository.getAll(),
    ...investmentSchemeRepository.getAll(),
    ...opportunityRepository.getAll(),
    ...tenderRepository.getAll(),
    ...newsRepository.getAll(),
  ];

  const recentItems = recentIds.map(id => allItems.find(i => i.id === id)).filter(Boolean);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 mb-2 flex items-center space-x-2">
            <Clock className="w-8 h-8 text-indigo-600" />
            <span>Recently Viewed History</span>
          </h1>
          <p className="text-slate-600 text-sm">Your last 10 viewed items across the platform.</p>
        </div>
        {recentItems.length > 0 && (
          <button
            onClick={clearRecent}
            className="px-4 py-2 bg-rose-50 hover:bg-rose-100 text-rose-700 rounded-xl text-xs font-semibold transition flex items-center space-x-1"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Clear History</span>
          </button>
        )}
      </div>

      {recentItems.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center text-slate-500">
          <Clock className="w-12 h-12 text-slate-300 mx-auto mb-4" />
          <p className="font-semibold text-slate-700">No recently viewed items.</p>
          <p className="text-xs text-slate-400 mt-1">Browse investments or schemes to build your history.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recentItems.map((item: any) => (
            <div key={item.id} className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-xs">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 mb-3 inline-block">{item.category}</span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-2">{item.description}</p>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <span className="text-xs text-slate-500">{item.authority}</span>
                <button
                  onClick={() => {
                    let r = '/investments';
                    if (investmentSchemeRepository.getById(item.id)) r = '/investment-schemes';
                    else if (opportunityRepository.getById(item.id)) r = '/opportunities';
                    else if (tenderRepository.getById(item.id)) r = '/tenders';
                    else if (newsRepository.getById(item.id)) r = '/news';
                    onNavigate(r, item.slug);
                  }}
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold transition"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
