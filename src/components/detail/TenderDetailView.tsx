import React from 'react';
import { Tender } from '../../types';
import { CompletenessBadge } from './CompletenessBadge';
import { SourceTransparencyCard } from './SourceTransparencyCard';
import {
  FileText,
  Calendar,
  Clock,
  Building2,
  MapPin,
  Tag,
  AlertCircle,
  Lightbulb,
  CheckCircle2,
  ShieldCheck,
  BadgePercent,
  Download
} from 'lucide-react';

interface TenderDetailViewProps {
  item: Tender;
}

export const TenderDetailView: React.FC<TenderDetailViewProps> = ({ item }) => {
  return (
    <div className="space-y-8">
      {/* Header Badge & Title */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            {item.tenderId && (
              <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-800 border border-slate-200">
                Ref: {item.tenderId}
              </span>
            )}
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-100">
              {item.category || item.tenderType || 'Public Procurement'}
            </span>
            <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              {item.status || 'ACTIVE'}
            </span>
            <CompletenessBadge level={item.completenessLevel || 'MOSTLY_COMPLETE'} type="Tender" />
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

        {/* Core Procurement Financial & Timeline Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Estimated Tender Value
            </span>
            <span className="text-base sm:text-lg font-bold text-slate-900">
              {item.tenderValue || 'Refer Tender Document'}
            </span>
          </div>

          <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Submission Deadline
            </span>
            <span className="text-base sm:text-lg font-bold text-red-700 flex items-center space-x-1">
              <Clock className="w-4 h-4 inline shrink-0" />
              <span>{item.submissionDeadline}</span>
            </span>
          </div>

          <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              EMD / Tender Fee
            </span>
            <span className="text-base sm:text-lg font-bold text-slate-900">
              {item.emdAmount || 'As per NIT'}
            </span>
          </div>

          <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Work Location
            </span>
            <span className="text-base sm:text-lg font-bold text-slate-900 truncate block">
              {item.location || item.state || 'India'}
            </span>
          </div>
        </div>
      </div>

      {/* Structured Content Architecture */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-8">
        {/* SECTION 1: How to read this tender */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
            <Lightbulb className="w-5 h-5 text-amber-500" />
            <span>How to Read this Tender</span>
          </h2>
          <div className="p-4 bg-amber-50/50 border border-amber-200/70 rounded-2xl text-xs text-amber-950 leading-relaxed space-y-2">
            <p>
              {item.howToRead || (
                `This tender is an official public procurement Notice Inviting Tender (NIT). Bidders must register on the designated Central/State e-Procurement portal (eProcure / GeM / State NIC Portal), verify technical pre-qualification criteria, furnish Earnest Money Deposit (EMD) or statutory MSME exemption certificates, and submit encrypted bids before the published submission deadline.`
              )}
            </p>
          </div>
        </section>

        {/* SECTION 2: Scope of Work & Eligibility */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
            <FileText className="w-5 h-5 text-indigo-600" />
            <span>Scope of Work &amp; Bidder Pre-Qualification</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
              <span className="font-bold text-slate-900 block">Scope of Deliverables</span>
              <p className="text-slate-700 leading-relaxed">
                {item.scopeOfWork || item.description || 'Execution of supply, works, or service contract as specified in the Detailed Notice Inviting Tender (DNIT).'}
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
              <span className="font-bold text-slate-900 block">Key Eligibility Criteria</span>
              <ul className="text-slate-700 space-y-1 list-disc list-inside">
                {(item.qualificationRequirements || [
                  'Active GSTIN and PAN registration in India.',
                  'Prior experience executing similar value government/corporate contracts.',
                  'Valid Class-3 Digital Signature Certificate (DSC) for e-tendering portal submission.',
                  'Solvency and minimum annual financial turnover compliance.'
                ]).map((req, idx) => (
                  <li key={idx}>{req}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 3: Bid Submission & Required Documents */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
            <ShieldCheck className="w-5 h-5 text-indigo-600" />
            <span>Mandatory Bid Submission Checklist</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {(item.documentsRequired || [
              'Technical Bid document with authorized signature and company seal',
              'Commercial / Financial BoQ bid in encrypted Excel/PDF format',
              'Proof of EMD deposit or valid Udyam / MSME Exemption Certificate',
              'Past Performance & Work Completion Certificates',
              'Non-Blacklisting Undertaking on stamp paper',
              'Audited Financial Statements for past 3 consecutive years'
            ]).map((doc, idx) => (
              <div key={idx} className="flex items-center space-x-2.5 p-3 bg-slate-50 rounded-xl border border-slate-100 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{doc}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Official Source Transparency */}
      <SourceTransparencyCard
        authority={item.authority}
        sourceAuthority={item.sourceAuthority || item.sourceName || 'Central Public Procurement Portal (CPPP)'}
        sourceUrl={item.sourceUrl}
        verificationStatus={item.verificationStatus}
        lastVerifiedDate={item.lastVerifiedDate || '2026-03-16'}
      />
    </div>
  );
};
