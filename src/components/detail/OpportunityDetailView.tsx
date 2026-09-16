import React from 'react';
import { Opportunity } from '../../types';
import { CompletenessBadge } from './CompletenessBadge';
import { SourceTransparencyCard } from './SourceTransparencyCard';
import {
  Building2,
  MapPin,
  Tag,
  Briefcase,
  TrendingUp,
  Calendar,
  Layers,
  FileText,
  Lightbulb,
  Phone,
  Mail,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

interface OpportunityDetailViewProps {
  item: Opportunity;
}

export const OpportunityDetailView: React.FC<OpportunityDetailViewProps> = ({ item }) => {
  return (
    <div className="space-y-8">
      {/* Header Badge & Title */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            {item.projectId && (
              <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-blue-100 text-blue-800 border border-blue-200">
                {item.projectId}
              </span>
            )}
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-100">
              {item.sector || item.category || 'Infrastructure'}
            </span>
            <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              {item.projectStatus || item.status || 'Active'}
            </span>
            <CompletenessBadge level={item.completenessLevel || 'MOSTLY_COMPLETE'} type="Opportunity" />
          </div>
          {item.lastVerifiedDate && (
            <span className="text-xs text-slate-500 font-mono">
              Verified: {item.lastVerifiedDate}
            </span>
          )}
        </div>

        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-3">
            {item.title}
          </h1>
          <p className="text-base text-slate-600 leading-relaxed max-w-4xl">
            {item.description}
          </p>
        </div>

        {/* Project Key Financial & Geographical Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Project Value / Cost
            </span>
            <span className="text-base sm:text-lg font-bold text-slate-900">
              {item.totalProjectCost || item.fundingAmount || 'As per DPR'}
            </span>
          </div>

          <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Location / State
            </span>
            <span className="text-base sm:text-lg font-bold text-slate-900 flex items-center space-x-1">
              <MapPin className="w-4 h-4 text-indigo-600 shrink-0 inline" />
              <span className="truncate">{item.state ? `${item.district ? `${item.district}, ` : ''}${item.state}` : item.location || 'India'}</span>
            </span>
          </div>

          <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Project Stage
            </span>
            <span className="text-base sm:text-lg font-bold text-indigo-700">
              {item.projectStage || 'Implementation Ready'}
            </span>
          </div>

          <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Target Deadline / Window
            </span>
            <span className="text-base sm:text-lg font-bold text-slate-900">
              {item.deadline || 'Ongoing'}
            </span>
          </div>
        </div>
      </div>

      {/* Structured Content Architecture */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-8">
        {/* SECTION 1: How to evaluate this opportunity */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
            <Lightbulb className="w-5 h-5 text-amber-500" />
            <span>How to Evaluate this Investment Opportunity</span>
          </h2>
          <div className="p-4 bg-amber-50/50 border border-amber-200/70 rounded-2xl text-xs text-amber-950 leading-relaxed space-y-2">
            <p>
              {item.howToEvaluate || (
                `This project represents an official public/PPP development initiative listed under national/state capital investment frameworks. Prospective investors and contractors should examine the Detailed Project Report (DPR), utility clearances, environmental impact approvals, and land-lease concessions on the official portal before initiating formal bids or expressions of interest.`
              )}
            </p>
          </div>
        </section>

        {/* SECTION 2: Project Scope & Infrastructure Details */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
            <Layers className="w-5 h-5 text-indigo-600" />
            <span>Project Scope &amp; Infrastructure Readiness</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
              <span className="font-bold text-slate-900 block">Sector &amp; Classification</span>
              <p className="text-slate-700">
                <strong>Sector:</strong> {item.sector || 'Infrastructure'}<br />
                {item.subSector && <span><strong>Sub-Sector:</strong> {item.subSector}<br /></span>}
                <strong>Opportunity Type:</strong> {item.opportunityType || 'Public Investment / PPP'}<br />
                {item.employmentPotential && <span><strong>Employment Potential:</strong> {item.employmentPotential} jobs</span>}
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
              <span className="font-bold text-slate-900 block">Land &amp; Location Infrastructure</span>
              <p className="text-slate-700">
                {item.landLocationDetails || item.infrastructureDetails || (
                  `Located in ${item.district ? `${item.district}, ` : ''}${item.state || 'India'}, with multimodal connectivity via state/national highways, dedicated industrial power feeder lines, and municipal infrastructure access.`
                )}
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: Implementing Authority & Participation Process */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
            <Briefcase className="w-5 h-5 text-indigo-600" />
            <span>Implementing Authority &amp; Investor Participation</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 bg-indigo-50/50 rounded-2xl border border-indigo-100 space-y-2">
              <span className="font-bold text-indigo-950 block">Government Nodal Authority</span>
              <p className="text-slate-700">
                <strong>Administering Body:</strong> {item.authority}<br />
                {item.implementingAgency && <span><strong>Implementing Agency:</strong> {item.implementingAgency}<br /></span>}
                {item.department && <span><strong>Department:</strong> {item.department}</span>}
              </p>
              {item.contactInformation && (
                <div className="pt-2 border-t border-indigo-100 text-slate-600">
                  <span className="font-semibold block text-slate-800">Public Contact:</span>
                  <span>{item.contactInformation}</span>
                </div>
              )}
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
              <span className="font-bold text-slate-900 block">Participation Process</span>
              <ul className="text-slate-700 space-y-1 list-disc list-inside">
                {(item.participationProcess || [
                  'Review official project prospectus on the portal.',
                  'Submit Expression of Interest (EoI) or formal bid via nodal authority.',
                  'Conduct site verification and technical appraisal.',
                  'Execute concession agreement / statutory land allotment.'
                ]).map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* Official Source Transparency */}
      <SourceTransparencyCard
        authority={item.authority}
        sourceAuthority={item.sourceAuthority || item.sourceName || 'India Investment Grid'}
        sourceUrl={item.sourceUrl}
        verificationStatus={item.verificationStatus}
        lastVerifiedDate={item.lastVerifiedDate || '2026-03-16'}
      />
    </div>
  );
};
