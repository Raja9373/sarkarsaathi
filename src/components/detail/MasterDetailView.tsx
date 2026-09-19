import React, { useEffect } from 'react';
import { useSavedItems, useRecentlyViewed } from '../SavedAndRecent';
import { InvestmentDetailView } from './InvestmentDetailView';
import { SchemeDetailView } from './SchemeDetailView';
import { OpportunityDetailView } from './OpportunityDetailView';
import { TenderDetailView } from './TenderDetailView';
import { NewsDetailView } from './NewsDetailView';
import { Bookmark, Share2, ArrowLeft, ChevronRight } from 'lucide-react';

interface MasterDetailViewProps {
  item: any;
  type: 'Investments' | 'Investment Schemes' | 'Opportunities' | 'Tenders' | 'News' | string;
  onBack: () => void;
  onNavigateComparison?: (slug: string) => void;
}

export const MasterDetailView: React.FC<MasterDetailViewProps> = ({
  item,
  type,
  onBack,
  onNavigateComparison
}) => {
  const { savedIds, toggleSave } = useSavedItems();
  const { addRecent } = useRecentlyViewed();

  useEffect(() => {
    if (item?.id) {
      addRecent(item.id);
    }
  }, [item?.id, addRecent]);

  if (!item) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Record Not Found</h2>
        <p className="text-sm text-slate-500 mb-6">The requested {type} record could not be found or has been relocated.</p>
        <button
          onClick={onBack}
          className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl text-sm font-semibold hover:bg-indigo-700 transition"
        >
          Return to {type} Catalogue
        </button>
      </div>
    );
  }

  const isSaved = savedIds.includes(item.id);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: item.title,
          text: `Check out ${item.title} on SarkarSaathi: ${item.description}`,
          url: window.location.href,
        });
      } catch {
        // User cancelled
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const renderCatalogueDetail = () => {
    switch (type) {
      case 'Investments':
        return <InvestmentDetailView item={item} onNavigateComparison={onNavigateComparison} />;
      case 'Investment Schemes':
        return <SchemeDetailView item={item} />;
      case 'Opportunities':
        return <OpportunityDetailView item={item} />;
      case 'Tenders':
        return <TenderDetailView item={item} />;
      case 'News':
        return <NewsDetailView item={item} />;
      default:
        return <InvestmentDetailView item={item} onNavigateComparison={onNavigateComparison} />;
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-6">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center space-x-2 text-xs text-slate-500 font-medium">
        <button onClick={() => window.location.href = '/'} className="hover:text-indigo-600 transition">Home</button>
        <ChevronRight className="w-3.5 h-3.5" />
        <button onClick={onBack} className="hover:text-indigo-600 transition">{type}</button>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-slate-900 font-semibold truncate">{item.title}</span>
      </nav>

      {/* Top Action Bar */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="inline-flex items-center space-x-1.5 text-xs sm:text-sm font-bold text-indigo-600 hover:text-indigo-800 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to {type}</span>
        </button>

        <div className="flex items-center space-x-2 sm:space-x-3">
          <button
            onClick={() => toggleSave(item.id)}
            className={`px-3 py-2 rounded-xl text-xs font-semibold transition flex items-center space-x-1.5 shadow-xs ${
              isSaved
                ? 'bg-indigo-600 text-white'
                : 'bg-white border border-slate-200 hover:bg-slate-50 text-slate-700'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
            <span>{isSaved ? 'Saved' : 'Save Record'}</span>
          </button>

          <button
            onClick={handleShare}
            className="px-3 py-2 rounded-xl text-xs font-semibold bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 transition flex items-center space-x-1.5 shadow-xs"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Share</span>
          </button>
        </div>
      </div>

      {/* Main Detail Content Area */}
      {renderCatalogueDetail()}
    </div>
  );
};
