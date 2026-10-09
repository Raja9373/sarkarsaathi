import React, { useEffect, useMemo } from 'react';
import { Opportunity } from '../../types';
import { CompletenessBadge } from './CompletenessBadge';
import { SourceTransparencyCard } from './SourceTransparencyCard';
import { opportunityRepository } from '../../infrastructure/repositories/InvestmentRepository';
import {
  MapPin,
  Briefcase,
  Calendar,
  Layers,
  Lightbulb,
  ShieldCheck,
  AlertCircle,
  Landmark,
  FileCheck2,
  Compass,
} from 'lucide-react';

interface OpportunityDetailViewProps {
  item: Opportunity;
}

const Disclaimer: React.FC<{ item: Opportunity }> = ({ item }) => {
  const isPaimana = item.implementingAgency?.includes('PAIMANA') || item.authority?.includes('PAIMANA') || item.sourceAuthority?.includes('PAIMANA');
  const text = isPaimana
    ? "This is a government-monitored infrastructure project. This record does not by itself represent an open tender, investment offer or funding solicitation."
    : "This is an informational listing based on the cited official source. Users should verify the latest project status, eligibility, requirements and participation process with the responsible authority before taking any action.";

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs sm:text-sm text-slate-600 flex items-start gap-3">
      <AlertCircle className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
      <p>{text}</p>
    </div>
  );
};

const RelatedOpportunities: React.FC<{ item: Opportunity }> = ({ item }) => {
  const allOpportunities = useMemo(() => opportunityRepository.getAll(), []);
  const related = useMemo(() => {
    return allOpportunities
      .filter(o => o.id !== item.id && (o.sector === item.sector || o.state === item.state))
      .slice(0, 5);
  }, [allOpportunities, item]);

  if (related.length === 0) return null;

  return (
    <section className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-xs space-y-4">
      <h2 className="text-base font-bold text-slate-900">Related Opportunities</h2>
      <div className="grid grid-cols-1 gap-3">
        {related.map(rel => (
          <div key={rel.id} className="p-4 border border-slate-100 rounded-xl hover:bg-slate-50 transition">
            <h3 className="text-sm font-semibold text-slate-900 mb-1">{rel.title}</h3>
            <p className="text-xs text-slate-500 line-clamp-1">{rel.authority}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export const OpportunityDetailView: React.FC<OpportunityDetailViewProps> = ({ item }) => {
  useEffect(() => {
    if (!item) return;
    document.title = `${item.title} | Government Opportunity | SarkarSaathi`;
  }, [item]);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-5">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{item.title}</h1>
        <Disclaimer item={item} />
        {item.description && <p className="text-sm sm:text-base text-slate-700">{item.description}</p>}
      </div>
      
      {item.authority && (
        <section className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-xs space-y-4">
          <h2 className="text-base font-bold text-slate-900 flex items-center space-x-2">
            <Landmark className="w-4 h-4 text-indigo-600" />
            <span>Project Authority</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-700">{item.authority}</p>
        </section>
      )}

      <RelatedOpportunities item={item} />
      
      <SourceTransparencyCard
        authority={item.authority}
        sourceAuthority={item.sourceAuthority || item.sourceName || 'Government Portal'}
        sourceUrl={item.sourceUrl}
        verificationStatus={item.verificationStatus}
        lastVerifiedDate={item.lastVerifiedDate}
      />
    </div>
  );
};
