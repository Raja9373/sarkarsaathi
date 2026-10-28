import React, { useEffect } from 'react';
import { useSavedItems, useRecentlyViewed } from '../SavedAndRecent';
import { InvestmentDetailView } from './InvestmentDetailView';
import { SchemeDetailView } from './SchemeDetailView';
import { OpportunityDetailView } from './OpportunityDetailView';
import { TenderDetailView } from './TenderDetailView';
import { NewsDetailView } from './NewsDetailView';
import { Bookmark, ArrowLeft, ChevronRight } from 'lucide-react';
import { SocialShareBar, WhatsAppShareBanner } from '../SocialShareBar';

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

  const typePath = {
    'Investments': '/investments',
    'Investment Schemes': '/investment-schemes',
    'Opportunities': '/opportunities',
    'Tenders': '/tenders',
    'News': '/news',
  }[type] || `/${type.toLowerCase().replace(/\s+/g, '-')}`;

  const benefitValue = item.benefit || item.interestRate || item.rate || item.tenderValue || item.fundingAmount || item.estimatedValue;

  return (
    <div className="max-w-5xl mx-auto px-3.5 sm:px-6 lg:px-8 py-4 sm:py-8 lg:py-10 space-y-4 sm:space-y-6">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center space-x-1.5 sm:space-x-2 text-xs sm:text-sm text-slate-500 font-medium overflow-x-auto py-1.5 -my-1 scrollbar-none">
        <a href="/" onClick={(e) => { e.preventDefault(); window.location.href = '/'; }} className="hover:text-indigo-600 transition whitespace-nowrap min-h-[36px] px-2 py-1 -mx-1 rounded-md flex items-center">Home</a>
        <ChevronRight className="w-3.5 h-3.5 shrink-0 text-slate-400" />
        <a href={typePath} onClick={(e) => { e.preventDefault(); onBack(); }} className="hover:text-indigo-600 transition whitespace-nowrap min-h-[36px] px-2 py-1 -mx-1 rounded-md flex items-center">{type}</a>
        <ChevronRight className="w-3.5 h-3.5 shrink-0 text-slate-400" />
        <span className="text-slate-900 font-semibold truncate max-w-[180px] sm:max-w-none">{item.title}</span>
      </nav>

      {/* Top Action Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-1 sm:mb-2">
        <a
          href={typePath}
          onClick={(e) => { e.preventDefault(); onBack(); }}
          className="inline-flex items-center space-x-2 text-xs sm:text-sm font-bold text-indigo-600 hover:text-indigo-800 transition min-h-[48px] sm:min-h-[44px] py-2.5 px-3 -mx-3 rounded-xl hover:bg-indigo-50/50"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to {type}</span>
        </a>

        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
          <button
            onClick={() => toggleSave(item.id)}
            className={`min-h-[44px] px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition flex items-center justify-center space-x-2 shadow-xs cursor-pointer ${
              isSaved
                ? 'bg-indigo-600 text-white shadow-indigo-200'
                : 'bg-white border border-slate-200 hover:bg-slate-50 text-slate-700'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
            <span>{isSaved ? 'Saved' : 'Save Record'}</span>
          </button>

          <SocialShareBar
            title={item.title}
            description={item.description}
            authority={item.authority || item.ministry || item.issuingAuthority}
            benefit={benefitValue}
          />
        </div>
      </div>

      {/* Main Detail Content Area */}
      {renderCatalogueDetail()}

      {/* WhatsApp Viral Callout Banner */}
      <WhatsAppShareBanner
        title={item.title}
        authority={item.authority || item.ministry || item.issuingAuthority}
        benefit={benefitValue}
      />
    </div>
  );
};
