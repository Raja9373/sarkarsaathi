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
  Download,
  ExternalLink,
  HelpCircle,
  Briefcase,
  DollarSign,
  Layers,
  ChevronRight,
  Landmark
} from 'lucide-react';

interface TenderDetailViewProps {
  item: Tender;
}

export const TenderDetailView: React.FC<TenderDetailViewProps> = ({ item }) => {
  return (
    <div className="space-y-8">
      {/* Header Card */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            {(item.tenderId || item.referenceNumber) && (
              <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-800 border border-slate-200">
                Ref: {item.tenderId || item.referenceNumber}
              </span>
            )}
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-100">
              {item.tenderType || item.category || 'Open Public Tender'}
            </span>
            <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              {item.status || 'OPEN'}
            </span>
            <CompletenessBadge level={item.completenessLevel || 'COMPLETE'} type="Tender" />
          </div>
          {(item.lastVerifiedDate || item.sourceVerificationDate) && (
            <span className="text-xs text-slate-500 font-mono">
              Verified: {item.lastVerifiedDate || item.sourceVerificationDate}
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

        {/* Procuring Entity & Authority Hierarchy */}
        {(item.procuringAuthority || item.department || item.ministry || item.authority) && (
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-700">
            <div className="flex items-center space-x-2">
              <Landmark className="w-4 h-4 text-indigo-600 shrink-0" />
              <span className="font-semibold text-slate-900">
                {item.procuringAuthority || item.authority}
              </span>
            </div>
            {item.procuringEntity && item.procuringEntity !== item.procuringAuthority && (
              <div className="flex items-center space-x-1.5 text-slate-600">
                <span className="text-slate-400">•</span>
                <span>Entity: <strong>{item.procuringEntity}</strong></span>
              </div>
            )}
            {item.ministry && (
              <div className="flex items-center space-x-1.5 text-slate-600">
                <span className="text-slate-400">•</span>
                <span>Ministry: <strong>{item.ministry}</strong></span>
              </div>
            )}
            {item.department && item.department !== item.ministry && (
              <div className="flex items-center space-x-1.5 text-slate-600">
                <span className="text-slate-400">•</span>
                <span>Dept: <strong>{item.department}</strong></span>
              </div>
            )}
          </div>
        )}

        {/* Core Procurement Financial & Timeline Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Estimated Tender Value
            </span>
            <span className="text-base sm:text-lg font-bold text-slate-900">
              {item.tenderValue || item.estimatedValue || 'Refer Tender Document'}
            </span>
          </div>

          <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Submission Deadline
            </span>
            <span className="text-base sm:text-lg font-bold text-red-700 flex items-center space-x-1">
              <Clock className="w-4 h-4 inline shrink-0" />
              <span>{item.submissionDeadline || 'Check Portal'}</span>
            </span>
          </div>

          <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              EMD / Bid Security
            </span>
            <span className="text-base sm:text-lg font-bold text-slate-900">
              {item.emdAmount || 'As per NIT'}
            </span>
          </div>

          <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Work Location / State
            </span>
            <span className="text-base sm:text-lg font-bold text-slate-900 truncate block">
              {item.location || item.state || 'India'}
            </span>
          </div>
        </div>

        {/* Secondary Parameters: Category, Fee, Work Period */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {item.tenderFee && (
            <div className="p-3 bg-slate-50/70 rounded-xl border border-slate-100 text-xs">
              <span className="text-slate-400 block text-[10px] font-bold uppercase">Tender Document Fee</span>
              <span className="font-semibold text-slate-800">{item.tenderFee}</span>
            </div>
          )}
          {(item.contractPeriod || item.workPeriod) && (
            <div className="p-3 bg-slate-50/70 rounded-xl border border-slate-100 text-xs">
              <span className="text-slate-400 block text-[10px] font-bold uppercase">Contract / Execution Period</span>
              <span className="font-semibold text-slate-800">{item.contractPeriod || item.workPeriod}</span>
            </div>
          )}
          {(item.workCategory || item.tenderCategory) && (
            <div className="p-3 bg-slate-50/70 rounded-xl border border-slate-100 text-xs col-span-2">
              <span className="text-slate-400 block text-[10px] font-bold uppercase">Work Classification</span>
              <span className="font-semibold text-slate-800 truncate block">{item.workCategory || item.tenderCategory}</span>
            </div>
          )}
        </div>
      </div>

      {/* Structured Content Architecture */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-8">
        {/* SECTION 1: How to read this tender */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
            <Lightbulb className="w-5 h-5 text-amber-500" />
            <span>How to Read and Respond to this Tender</span>
          </h2>
          <div className="p-4 bg-amber-50/50 border border-amber-200/70 rounded-2xl text-xs text-amber-950 leading-relaxed space-y-2">
            <p>
              {item.howToRead || (
                `This tender is an official public procurement Notice Inviting Tender (NIT). Bidders must register on the designated Central/State e-Procurement portal (eProcure / GeM / State NIC Portal), verify technical pre-qualification criteria, furnish Earnest Money Deposit (EMD) or statutory MSME exemption certificates, and submit encrypted bids before the published submission deadline.`
              )}
            </p>
            {item.howToRespond && (
              <div className="pt-2 border-t border-amber-200/60 font-medium text-amber-900">
                <strong>Submission Advisory: </strong>{item.howToRespond}
              </div>
            )}
          </div>
        </section>

        {/* SECTION 2: Detailed Project / Procurement Description */}
        {item.detailedDescription && (
          <section className="space-y-3 pt-6 border-t border-slate-100">
            <h2 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
              <FileText className="w-5 h-5 text-indigo-600" />
              <span>Comprehensive Procurement Background</span>
            </h2>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-xs text-slate-700 leading-relaxed space-y-2">
              <p>{item.detailedDescription}</p>
            </div>
          </section>
        )}

        {/* SECTION 3: Key Milestone Timeline */}
        {item.importantDates && item.importantDates.length > 0 && (
          <section className="space-y-4 pt-6 border-t border-slate-100">
            <h2 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-indigo-600" />
              <span>Procurement Schedule &amp; Critical Milestones</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {item.importantDates.map((dt, idx) => (
                <div key={idx} className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 space-y-1 text-xs">
                  <span className="text-[10px] font-bold uppercase text-slate-400 block">
                    {dt.event}
                  </span>
                  <span className="font-bold text-slate-900 block">
                    {dt.date}
                  </span>
                </div>
              ))}
            </div>
            {item.preBidMeeting && (
              <div className="p-3 bg-blue-50/70 border border-blue-100 rounded-xl text-xs text-blue-900 flex items-start space-x-2">
                <AlertCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Pre-Bid Conference Details: </strong>{item.preBidMeeting}
                </div>
              </div>
            )}
          </section>
        )}

        {/* SECTION 4: Scope of Work & Eligibility Criteria */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
            <Briefcase className="w-5 h-5 text-indigo-600" />
            <span>Scope of Work &amp; Pre-Qualification Framework</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
              <span className="font-bold text-slate-900 block">Scope of Deliverables &amp; Execution</span>
              <p className="text-slate-700 leading-relaxed">
                {item.scopeOfWork || item.description || 'Execution of supply, works, or service contract as specified in the Detailed Notice Inviting Tender (DNIT).'}
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
              <span className="font-bold text-slate-900 block">Bidder Eligibility Baseline</span>
              <p className="text-slate-700 leading-relaxed">
                {item.eligibilityCriteria || item.eligibility || 'Bidders must possess valid GSTIN, PAN, relevant statutory certifications, and audited financial credentials.'}
              </p>
            </div>
          </div>

          {/* Detailed Technical & Financial Qualifications */}
          {(item.technicalQualification || item.financialQualification || item.experienceRequirements) && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs">
              {item.technicalQualification && item.technicalQualification.length > 0 && (
                <div className="p-4 bg-indigo-50/40 rounded-2xl border border-indigo-100/60 space-y-2">
                  <span className="font-bold text-indigo-950 block">Technical Qualifications</span>
                  <ul className="text-slate-700 space-y-1.5 list-disc list-inside">
                    {item.technicalQualification.map((tq, idx) => (
                      <li key={idx} className="leading-snug">{tq}</li>
                    ))}
                  </ul>
                </div>
              )}

              {item.financialQualification && item.financialQualification.length > 0 && (
                <div className="p-4 bg-emerald-50/40 rounded-2xl border border-emerald-100/60 space-y-2">
                  <span className="font-bold text-emerald-950 block">Financial Qualifications</span>
                  <ul className="text-slate-700 space-y-1.5 list-disc list-inside">
                    {item.financialQualification.map((fq, idx) => (
                      <li key={idx} className="leading-snug">{fq}</li>
                    ))}
                  </ul>
                </div>
              )}

              {item.experienceRequirements && item.experienceRequirements.length > 0 && (
                <div className="p-4 bg-amber-50/40 rounded-2xl border border-amber-100/60 space-y-2">
                  <span className="font-bold text-amber-950 block">Track Record &amp; Experience</span>
                  <ul className="text-slate-700 space-y-1.5 list-disc list-inside">
                    {item.experienceRequirements.map((er, idx) => (
                      <li key={idx} className="leading-snug">{er}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </section>

        {/* SECTION 5: Commercial Terms & Payment Milestones */}
        {(item.paymentTerms || item.commercialTerms || item.importantConditions) && (
          <section className="space-y-4 pt-6 border-t border-slate-100 text-xs">
            <h2 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
              <DollarSign className="w-5 h-5 text-indigo-600" />
              <span>Commercial Terms, Payments &amp; Statutory Conditions</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {item.paymentTerms && (
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-1.5">
                  <span className="font-bold text-slate-900 block">Payment Milestones &amp; Billing</span>
                  <p className="text-slate-700 leading-relaxed">{item.paymentTerms}</p>
                </div>
              )}
              {item.commercialTerms && (
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-1.5">
                  <span className="font-bold text-slate-900 block">Performance Guarantee &amp; Security</span>
                  <p className="text-slate-700 leading-relaxed">{item.commercialTerms}</p>
                </div>
              )}
            </div>

            {item.importantConditions && item.importantConditions.length > 0 && (
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
                <span className="font-bold text-slate-900 block">Key Contractual Conditions</span>
                <ul className="text-slate-700 space-y-1 list-disc list-inside">
                  {item.importantConditions.map((cond, idx) => (
                    <li key={idx}>{cond}</li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        )}

        {/* SECTION 6: Bid Submission & Required Documents */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
            <ShieldCheck className="w-5 h-5 text-indigo-600" />
            <span>Mandatory Bid Submission Checklist &amp; Enclosures</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {(item.requiredDocuments || item.documentsRequired || [
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

          {(item.bidSubmissionProcess || item.evaluationProcess) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 text-xs">
              {item.bidSubmissionProcess && (
                <div className="p-3.5 bg-slate-50/80 rounded-xl border border-slate-100 text-slate-700">
                  <span className="font-bold text-slate-900 block mb-1">E-Tendering Submission Process</span>
                  <span>{item.bidSubmissionProcess}</span>
                </div>
              )}
              {item.evaluationProcess && (
                <div className="p-3.5 bg-slate-50/80 rounded-xl border border-slate-100 text-slate-700">
                  <span className="font-bold text-slate-900 block mb-1">Evaluation &amp; Selection Protocol</span>
                  <span>{item.evaluationProcess}</span>
                </div>
              )}
            </div>
          )}
        </section>

        {/* SECTION 7: Frequently Asked Questions */}
        {item.faqs && item.faqs.length > 0 && (
          <section className="space-y-4 pt-6 border-t border-slate-100">
            <h2 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
              <HelpCircle className="w-5 h-5 text-indigo-600" />
              <span>Procurement Clarifications &amp; FAQs</span>
            </h2>
            <div className="space-y-3">
              {item.faqs.map((faq, idx) => (
                <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-xs space-y-1.5">
                  <span className="font-bold text-slate-900 block flex items-center space-x-1.5">
                    <span className="text-indigo-600 font-extrabold">Q:</span>
                    <span>{faq.question}</span>
                  </span>
                  <p className="text-slate-700 pl-4 leading-relaxed">
                    <span className="font-semibold text-slate-900">A: </span>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* SECTION 8: Where to Find / Submit Government Tenders Guidance */}
        <section className="space-y-5 pt-6 border-t border-slate-100">
          <div>
            <h2 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
              <Landmark className="w-5 h-5 text-indigo-600" />
              <span>Where to Find / Submit Government Tenders</span>
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Verified official channels for discovering and bidding on public procurement notices across India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            {/* 1. Goods / Products / Services (GeM) */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2.5 flex flex-col justify-between">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900">1. Goods / Products / Services</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-full">Zero Reg Fee</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  For government buying of products and services, users can check the Government e-Marketplace (GeM).
                </p>
                <p className="text-emerald-700 text-[11px] font-medium">
                  Official GeM material states seller registration has <strong>ZERO REGISTRATION FEES</strong>.
                </p>
              </div>
              <a
                href="https://gem.gov.in/"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-between w-full px-3 py-2 bg-white hover:bg-slate-100 text-indigo-600 font-bold rounded-xl border border-slate-200 transition-colors"
              >
                <span>Visit GeM Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* 2. Central Government Tenders (CPPP) */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2.5 flex flex-col justify-between">
              <div className="space-y-1.5">
                <span className="font-bold text-slate-900 block">2. Central Government Tenders</span>
                <p className="text-slate-600 leading-relaxed">
                  For Central Government procurement, users can check the Central Public Procurement Portal (CPPP/eProcure).
                </p>
                <p className="text-slate-500 text-[11px] leading-snug">
                  CPPP publishes tender enquiries, corrigenda and award information from Central Government organisations and related public authorities.
                </p>
              </div>
              <a
                href="https://eprocure.gov.in/eprocure/app"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-between w-full px-3 py-2 bg-white hover:bg-slate-100 text-indigo-600 font-bold rounded-xl border border-slate-200 transition-colors"
              >
                <span>Visit CPPP Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* 3. State Government Tenders */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2.5 flex flex-col justify-between">
              <div className="space-y-1.5">
                <span className="font-bold text-slate-900 block">3. State Government Tenders</span>
                <p className="text-slate-600 leading-relaxed">
                  State governments generally use their own e-procurement portals.
                </p>
                <div className="space-y-1 pt-0.5">
                  <span className="text-[10px] font-bold uppercase text-slate-400 block">Official Examples:</span>
                  <div className="flex flex-col space-y-1">
                    <a
                      href="https://etender.up.nic.in/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-indigo-600 hover:underline flex items-center space-x-1"
                    >
                      <span>• Uttar Pradesh e-Tender</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <a
                      href="https://govtprocurement.delhi.gov.in/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-indigo-600 hover:underline flex items-center space-x-1"
                    >
                      <span>• Delhi e-Procurement</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
              <p className="text-[10px] text-slate-400 italic">
                Note: Not every tender in a state is necessarily available on only one portal.
              </p>
            </div>
          </div>

          {/* Decision Quick Guide */}
          <div className="p-4 bg-indigo-50/50 rounded-2xl border border-indigo-100/70 text-xs space-y-2">
            <span className="font-bold text-indigo-950 block">Which portal should I check?</span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-slate-700">
              <div className="p-2.5 bg-white/80 rounded-xl border border-indigo-100/50">
                <span className="text-slate-500 block text-[10px] uppercase font-bold">Products / Services</span>
                <strong className="text-indigo-900">→ Government e-Marketplace (GeM)</strong>
              </div>
              <div className="p-2.5 bg-white/80 rounded-xl border border-indigo-100/50">
                <span className="text-slate-500 block text-[10px] uppercase font-bold">Central Government</span>
                <strong className="text-indigo-900">→ CPPP / eProcure Portal</strong>
              </div>
              <div className="p-2.5 bg-white/80 rounded-xl border border-indigo-100/50">
                <span className="text-slate-500 block text-[10px] uppercase font-bold">State Government</span>
                <strong className="text-indigo-900">→ Relevant State e-Procurement Portal</strong>
              </div>
            </div>
          </div>

          {/* Advisory Notice */}
          <div className="p-3.5 bg-amber-50/70 border border-amber-200/70 rounded-xl text-xs text-amber-950 flex items-center space-x-2.5">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
            <span className="font-medium">
              Always open the original tender notice and official tender document before submitting a bid.
            </span>
          </div>
        </section>

        {/* Official Portal Actions */}
        <section className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-slate-500">
            Official Procurement Notice &amp; Technical Specifications provided by {item.sourceAuthority || item.authority}.
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {item.officialPortalUrl && (
              <a
                href={item.officialPortalUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors"
              >
                <span>Official Procurement Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {item.sourceUrl && (
              <a
                href={item.sourceUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold transition-colors shadow-sm"
              >
                <span>View on Central eProcure (CPPP)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </section>
      </div>

      {/* Official Source Transparency */}
      <SourceTransparencyCard
        authority={item.authority}
        sourceAuthority={item.sourceAuthority || item.sourceName || 'Central Public Procurement Portal (CPPP)'}
        sourceUrl={item.sourceUrl}
        verificationStatus={item.verificationStatus}
        lastVerifiedDate={item.lastVerifiedDate || item.sourceVerificationDate || '2026-09-16'}
      />
    </div>
  );
};
