import React, { useState } from 'react';
import { InvestmentScheme } from '../../types';
import { CompletenessBadge } from './CompletenessBadge';
import { SourceTransparencyCard } from './SourceTransparencyCard';
import {
  Building2,
  CheckCircle2,
  FileText,
  HelpCircle,
  Award,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  Lightbulb,
  Layers,
  MapPin,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

interface SchemeDetailViewProps {
  item: InvestmentScheme;
}

export const SchemeDetailView: React.FC<SchemeDetailViewProps> = ({ item }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-8">
      {/* Header Badge & Title */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-100">
              {item.category || 'Government Investment Scheme'}
            </span>
            <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              {item.status || 'ACTIVE'}
            </span>
            <CompletenessBadge level={item.completenessLevel || 'MOSTLY_COMPLETE'} type="Scheme" />
          </div>
          {item.lastVerifiedDate && (
            <span className="text-xs text-slate-500 font-mono">
              Last Verified: {item.lastVerifiedDate}
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

        {/* Core Scheme Parameter Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
          <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Administering Authority
            </span>
            <span className="text-xs sm:text-sm font-bold text-slate-900 line-clamp-2" title={item.authority}>
              {item.authority}
            </span>
          </div>

          <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Target Beneficiaries
            </span>
            <span className="text-xs sm:text-sm font-bold text-slate-900 line-clamp-2">
              {item.targetBeneficiaries || 'Enterprises, Investors & Industrial Units'}
            </span>
          </div>

          <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Incentive / Financial Benefit
            </span>
            <span className="text-xs sm:text-sm font-bold text-emerald-700 line-clamp-2">
              {item.financialParameters || 'Direct Financial Subsidy / Capital Assistance'}
            </span>
          </div>

          <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Application Route
            </span>
            <span className="text-xs sm:text-sm font-bold text-indigo-700">
              Official Ministry Portal
            </span>
          </div>
        </div>
      </div>

      {/* Structured Content Architecture */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-8">
        {/* SECTION 1: How to understand this scheme */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
            <Lightbulb className="w-5 h-5 text-amber-500" />
            <span>How to Understand this Scheme</span>
          </h2>
          <div className="p-4 bg-amber-50/50 border border-amber-200/70 rounded-2xl text-xs text-amber-950 leading-relaxed space-y-2">
            <p>
              {item.howToUnderstand || (
                `This scheme is an official government investment promotion initiative designed to stimulate capital formation, industrial capacity, and technological modernization in targeted sectors across India. Beneficiaries must satisfy notified eligibility milestones and submit verifiable audit accounts through the designated nodal agency.`
              )}
            </p>
          </div>
        </section>

        {/* SECTION 2: Benefits & Incentives */}
        <section className="space-y-3 pt-6 border-t border-slate-100">
          <h2 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
            <Award className="w-5 h-5 text-indigo-600" />
            <span>Key Benefits, Subsidies &amp; Incentives</span>
          </h2>
          <div className="p-5 bg-emerald-50/60 border border-emerald-200/80 rounded-2xl text-xs text-emerald-950 leading-relaxed space-y-2">
            <p className="font-semibold text-emerald-900">{item.benefits}</p>
            {item.incentives && (
              <p className="text-emerald-800">{item.incentives}</p>
            )}
          </div>
        </section>

        {/* SECTION 3: Eligibility Criteria */}
        <section className="space-y-3 pt-6 border-t border-slate-100">
          <h2 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
            <ShieldCheck className="w-5 h-5 text-indigo-600" />
            <span>Eligibility &amp; Qualification Parameters</span>
          </h2>
          <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl text-xs text-slate-800 leading-relaxed space-y-2">
            <p className="font-semibold">{item.eligibility}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Valid corporate/enterprise registration in India</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Compliance with notified sectoral investment thresholds</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Audit-compliant accounting and tax filings</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Nodal department pre-approval where mandated</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: Application & Registration Process */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
            <FileText className="w-5 h-5 text-indigo-600" />
            <span>Step-by-Step Application &amp; Registration Process</span>
          </h2>
          <div className="space-y-2">
            {(item.registrationProcess || [
              'Visit the designated Ministry / Nodal Agency online application portal.',
              'Register your business entity using PAN, GSTIN, and authorized signatory credentials.',
              'Prepare and upload the Detailed Project Report (DPR) along with cost estimates and capex schedules.',
              'Submit statutory compliance certificates, chartered accountant net worth certificates, and bank statements.',
              'Track application approval through the Project Management Agency (PMA) dashboard.'
            ]).map((step, idx) => (
              <div key={idx} className="flex items-start space-x-3 p-3.5 bg-slate-50 rounded-2xl border border-slate-100 text-xs">
                <span className="w-5 h-5 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center shrink-0 text-[10px]">
                  {idx + 1}
                </span>
                <span className="text-slate-700 leading-relaxed">{step}</span>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5: Required Documentation */}
        <section className="space-y-3 pt-6 border-t border-slate-100">
          <h2 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
            <Layers className="w-5 h-5 text-indigo-600" />
            <span>Mandatory Application Documentation</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {(item.requiredDocuments || [
              'Certificate of Incorporation / Registration',
              'GSTIN & PAN Certificates',
              'Detailed Project Report (DPR) with Technical Feasibility',
              'Audited Balance Sheets for past 3 financial years',
              'Bank Appraisal / Sanction Letter for term loan',
              'Land Title / Lease Agreement / Industrial Plot Allotment'
            ]).map((doc, idx) => (
              <div key={idx} className="flex items-center space-x-2.5 p-3 bg-slate-50 rounded-xl border border-slate-100 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{doc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs if present */}
        {item.faqs && item.faqs.length > 0 && (
          <section className="space-y-4 pt-6 border-t border-slate-100">
            <h2 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
              <HelpCircle className="w-5 h-5 text-indigo-600" />
              <span>Frequently Asked Questions</span>
            </h2>
            <div className="space-y-2">
              {item.faqs.map((faq, idx) => (
                <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 text-left flex items-center justify-between text-xs font-bold text-slate-800 hover:bg-slate-50 transition"
                  >
                    <span>{faq.question}</span>
                    {openFaqIndex === idx ? <ChevronUp className="w-4 h-4 text-indigo-600" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                  </button>
                  {openFaqIndex === idx && (
                    <div className="p-4 pt-0 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Official Source Transparency */}
      <SourceTransparencyCard
        authority={item.authority}
        sourceAuthority={item.sourceAuthority}
        sourceUrl={item.sourceUrl}
        verificationStatus={item.verificationStatus}
        lastVerifiedDate={item.lastVerifiedDate || '2026-03-16'}
      />
    </div>
  );
};
