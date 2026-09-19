import React from 'react';
import { NewsItem } from '../../types';
import { CompletenessBadge } from './CompletenessBadge';
import { SourceTransparencyCard } from './SourceTransparencyCard';
import {
  Newspaper,
  Calendar,
  Building2,
  CheckCircle2,
  HelpCircle,
  FileCheck,
  Scale,
  Sparkles,
  Info
} from 'lucide-react';
import { useSEO } from '../../utils/seo';

interface NewsDetailViewProps {
  item: NewsItem;
}

export const NewsDetailView: React.FC<NewsDetailViewProps> = ({ item }) => {
  useSEO({
    title: `${item.title} | ${item.category || 'Government News'} | SarkarSaathi`,
    description: item.description?.substring(0, 155) || 'Official government news and policy update verified by SarkarSaathi.',
    canonicalPath: `/news/${item.slug || item.id}`
  });

  if (!item) return null;

  return (
    <div className="space-y-8">
      {/* Header Badge & Title */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-100">
              {item.category || 'Official Government Notification'}
            </span>
            <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              {item.status || 'PUBLISHED'}
            </span>
            <CompletenessBadge level={item.completenessLevel || 'MOSTLY_COMPLETE'} type="Policy Update" />
          </div>
          <div className="flex items-center space-x-1.5 text-xs text-slate-500 font-mono">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            <span>Published: {item.publishedDate}</span>
          </div>
        </div>

        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-3">
            {item.title}
          </h1>
          <p className="text-base text-slate-600 leading-relaxed max-w-4xl">
            {item.description}
          </p>
        </div>

        {/* Issuing Authority & Context */}
        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
          <div className="flex items-center space-x-2">
            <Building2 className="w-4 h-4 text-indigo-600 shrink-0" />
            <span className="font-semibold text-slate-700">Issuing Authority:</span>
            <span className="font-bold text-slate-900">{item.authorityIssued || item.authority}</span>
          </div>
          {item.effectiveDate && (
            <div className="text-slate-600">
              <span className="font-semibold">Effective Date:</span> <span className="font-mono text-slate-900">{item.effectiveDate}</span>
            </div>
          )}
        </div>
      </div>

      {/* FACT vs SOURCE vs EXPLANATION Triad */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <h2 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
          <Scale className="w-5 h-5 text-indigo-600" />
          <span>Factual Analysis &amp; Statutory Breakdown</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 bg-blue-50/60 border border-blue-200/80 rounded-2xl space-y-2">
            <span className="text-xs font-bold text-blue-900 uppercase tracking-wider block">
              1. Official Fact
            </span>
            <p className="text-xs text-blue-950 leading-relaxed">
              {item.factBreakdown?.fact || item.whatChanged || item.description}
            </p>
          </div>

          <div className="p-5 bg-emerald-50/60 border border-emerald-200/80 rounded-2xl space-y-2">
            <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider block">
              2. Authoritative Source
            </span>
            <p className="text-xs text-emerald-950 leading-relaxed">
              {item.factBreakdown?.source || `${item.sourceAuthority} official gazette notification & portal circular.`}
            </p>
          </div>

          <div className="p-5 bg-indigo-50/60 border border-indigo-200/80 rounded-2xl space-y-2">
            <span className="text-xs font-bold text-indigo-900 uppercase tracking-wider block">
              3. Citizen / Investor Impact
            </span>
            <p className="text-xs text-indigo-950 leading-relaxed">
              {item.factBreakdown?.explanation || item.practicalSignificance || 'Updates official rules, timelines, or interest rates applicable to citizens and businesses across India.'}
            </p>
          </div>
        </div>

        {/* Detailed Notification Body */}
        {item.content && (
          <div className="pt-6 border-t border-slate-100 space-y-3">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider">
              Notification Details &amp; Background
            </h3>
            <div className="prose prose-slate text-xs text-slate-700 leading-relaxed space-y-2 whitespace-pre-line">
              {item.content}
            </div>
          </div>
        )}
      </div>

      {/* Official Source Transparency */}
      <SourceTransparencyCard
        authority={item.authority}
        sourceAuthority={item.sourceAuthority}
        sourceUrl={item.sourceUrl}
        verificationStatus={item.verificationStatus}
        lastVerifiedDate={item.lastVerifiedDate || item.publishedDate}
      />
    </div>
  );
};
