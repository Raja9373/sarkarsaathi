import React, { useEffect } from 'react';
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
  CheckCircle2,
  ExternalLink,
  HelpCircle,
  AlertCircle,
  Clock,
  Landmark,
  FileCheck2,
  Compass
} from 'lucide-react';

interface OpportunityDetailViewProps {
  item: Opportunity;
}

export const OpportunityDetailView: React.FC<OpportunityDetailViewProps> = ({ item }) => {
  // Dynamic SEO & Structured Data using verified real fields only
  useEffect(() => {
    if (!item) return;

    const previousTitle = document.title;
    document.title = `${item.title} | Government Opportunity | SarkarSaathi`;

    // Meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    const prevDesc = metaDescription?.getAttribute('content') || '';
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    const cleanDesc = (item.description || item.projectDescription || item.title).slice(0, 160);
    metaDescription.setAttribute('content', cleanDesc);

    // Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonicalLink?.getAttribute('href') || '';
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
    canonicalLink.setAttribute('href', currentUrl);

    // JSON-LD structured data (authentic fields only)
    const jsonLdId = 'structured-data-opportunity';
    let scriptTag = document.getElementById(jsonLdId) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = jsonLdId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const structuredData: Record<string, any> = {
      '@context': 'https://schema.org',
      '@type': 'GovernmentService',
      name: item.title,
      description: item.description || item.projectDescription,
      provider: {
        '@type': 'GovernmentOrganization',
        name: item.authority || item.sourceAuthority || 'Government of India'
      },
      url: currentUrl
    };

    if (item.sector || item.category) {
      structuredData.serviceType = item.sector || item.category;
    }
    if (item.state || item.location) {
      structuredData.areaServed = {
        '@type': 'AdministrativeArea',
        name: item.state || item.location
      };
    }

    scriptTag.textContent = JSON.stringify(structuredData);

    return () => {
      document.title = previousTitle;
      if (metaDescription && prevDesc) metaDescription.setAttribute('content', prevDesc);
      if (canonicalLink && prevCanonical) canonicalLink.setAttribute('href', prevCanonical);
      const s = document.getElementById(jsonLdId);
      if (s) s.remove();
    };
  }, [item]);

  const hasCost = Boolean(item.totalProjectCost || item.fundingAmount);
  const hasLocation = Boolean(item.state || item.district || item.location);
  const hasTimelineOrDeadline = Boolean(item.deadline || item.timeline);
  const hasAuthority = Boolean(item.authority || item.promoter || item.implementingAgency || item.department);
  const hasLandOrInfra = Boolean(item.landLocationDetails || item.infrastructureDetails);
  const hasRelevance = Boolean(item.investorProfile);
  const hasProcess = Boolean((item.participationProcess && item.participationProcess.length > 0) || item.applicationProcess);
  const hasRequirements = Boolean(item.eligibility || (item.requiredDocuments && item.requiredDocuments.length > 0) || (item.importantConditions && item.importantConditions.length > 0));
  const hasFaqs = Boolean(item.faqs && item.faqs.length > 0);
  const hasEvaluation = Boolean(item.howToEvaluate);

  return (
    <div className="space-y-6">
      {/* Top Banner Card: Core Identity */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            {item.projectId && (
              <span className="font-mono text-xs font-bold px-3 py-1 rounded-lg bg-blue-50 text-blue-800 border border-blue-200/80">
                ID: {item.projectId}
              </span>
            )}
            {(item.sector || item.category) && (
              <span className="px-3 py-1 rounded-lg text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-100">
                {item.sector || item.category}
              </span>
            )}
            {item.subSector && (
              <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                {item.subSector}
              </span>
            )}
            {item.opportunityType && (
              <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200">
                {item.opportunityType}
              </span>
            )}
            {(item.projectStatus || item.status) && (
              <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200">
                {item.projectStatus || item.status}
              </span>
            )}
            {item.completenessLevel && (
              <CompletenessBadge level={item.completenessLevel} type="Opportunity" />
            )}
          </div>
          {item.lastVerifiedDate && (
            <span className="text-xs text-slate-500 font-mono flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Verified: {item.lastVerifiedDate}</span>
            </span>
          )}
        </div>

        {/* 1. Project / Opportunity Name */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug mb-3">
            {item.title}
          </h1>
          {/* 9. Project Description / 10. Opportunity Description */}
          {item.description && (
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-4xl">
              {item.description}
            </p>
          )}
          {item.projectDescription && item.projectDescription !== item.description && (
            <div className="mt-3 p-4 bg-slate-50 border border-slate-200/80 rounded-xl text-xs sm:text-sm text-slate-700 leading-relaxed">
              <strong className="text-slate-900 block mb-1">Project Scope:</strong>
              {item.projectDescription}
            </div>
          )}
          {item.opportunityDescription && (
            <div className="mt-3 p-4 bg-indigo-50/50 border border-indigo-100 rounded-xl text-xs sm:text-sm text-slate-700 leading-relaxed">
              <strong className="text-indigo-950 block mb-1">Opportunity Brief:</strong>
              {item.opportunityDescription}
            </div>
          )}
        </div>

        {/* Key Real Metrics Row (Strictly rendered only if data exists) */}
        {(hasCost || hasLocation || item.projectStage || hasTimelineOrDeadline) && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
            {/* 8. Investment / Project Cost */}
            {hasCost && (
              <div className="bg-slate-50/80 border border-slate-200/80 p-3.5 rounded-xl">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  Investment / Project Cost
                </span>
                <span className="text-base sm:text-lg font-bold text-slate-900">
                  {item.totalProjectCost || item.fundingAmount}
                </span>
              </div>
            )}

            {/* 5. State & 6. District / Location */}
            {hasLocation && (
              <div className="bg-slate-50/80 border border-slate-200/80 p-3.5 rounded-xl">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  Location / State
                </span>
                <span className="text-sm sm:text-base font-bold text-slate-900 flex items-center space-x-1">
                  <MapPin className="w-3.5 h-3.5 text-indigo-600 shrink-0 inline" />
                  <span className="truncate">
                    {[item.district, item.state || item.location].filter(Boolean).join(', ')}
                  </span>
                </span>
              </div>
            )}

            {/* 12. Development Stage */}
            {item.projectStage && (
              <div className="bg-slate-50/80 border border-slate-200/80 p-3.5 rounded-xl">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  Development Stage
                </span>
                <span className="text-sm sm:text-base font-bold text-indigo-700">
                  {item.projectStage}
                </span>
              </div>
            )}

            {/* 18. Deadline / 13. Expected Timeline */}
            {hasTimelineOrDeadline && (
              <div className="bg-slate-50/80 border border-slate-200/80 p-3.5 rounded-xl">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  {item.deadline ? 'Verified Deadline' : 'Expected Timeline'}
                </span>
                <span className="text-sm sm:text-base font-bold text-slate-900 flex items-center space-x-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-600 shrink-0 inline" />
                  <span>{item.deadline || item.timeline}</span>
                </span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* 24. "How to Evaluate this Opportunity" Guidance (rendered only if present) */}
      {hasEvaluation && (
        <section className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-xs space-y-2.5">
          <h2 className="text-base font-bold text-slate-900 flex items-center space-x-2">
            <Lightbulb className="w-4 h-4 text-amber-500" />
            <span>How to Evaluate this Opportunity</span>
          </h2>
          <div className="p-4 bg-amber-50/40 border border-amber-200/60 rounded-xl text-xs sm:text-sm text-slate-800 leading-relaxed">
            {item.howToEvaluate}
          </div>
        </section>
      )}

      {/* 7. Project Authority / Promoter & Governance */}
      {hasAuthority && (
        <section className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-xs space-y-4">
          <h2 className="text-base font-bold text-slate-900 flex items-center space-x-2">
            <Landmark className="w-4 h-4 text-indigo-600" />
            <span>Project Authority &amp; Promoter</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-xl space-y-2">
              {item.authority && (
                <div>
                  <span className="text-slate-500 block text-[11px] font-semibold uppercase">Administering Authority</span>
                  <span className="font-bold text-slate-900">{item.authority}</span>
                </div>
              )}
              {item.promoter && (
                <div>
                  <span className="text-slate-500 block text-[11px] font-semibold uppercase">Project Promoter</span>
                  <span className="font-semibold text-slate-900">{item.promoter}</span>
                </div>
              )}
              {item.implementingAgency && (
                <div>
                  <span className="text-slate-500 block text-[11px] font-semibold uppercase">Implementing Agency</span>
                  <span className="font-semibold text-slate-900">{item.implementingAgency}</span>
                </div>
              )}
              {item.department && (
                <div>
                  <span className="text-slate-500 block text-[11px] font-semibold uppercase">Nodal Department</span>
                  <span className="font-semibold text-slate-900">{item.department}</span>
                </div>
              )}
            </div>

            {item.contactInformation && (
              <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-xl space-y-2">
                <span className="text-slate-500 block text-[11px] font-semibold uppercase">Official Contact Channel</span>
                <p className="text-slate-800 leading-relaxed font-mono text-xs">{item.contactInformation}</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 11. Land / Infrastructure Requirements & Scope (rendered only if present) */}
      {(hasLandOrInfra || item.employmentPotential) && (
        <section className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-xs space-y-4">
          <h2 className="text-base font-bold text-slate-900 flex items-center space-x-2">
            <Layers className="w-4 h-4 text-indigo-600" />
            <span>Land &amp; Infrastructure Specifications</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
            {item.landLocationDetails && (
              <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-xl space-y-1">
                <span className="font-bold text-slate-900 block text-xs uppercase tracking-wide">Land &amp; Location Details</span>
                <p className="text-slate-700 leading-relaxed">{item.landLocationDetails}</p>
              </div>
            )}
            {item.infrastructureDetails && (
              <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-xl space-y-1">
                <span className="font-bold text-slate-900 block text-xs uppercase tracking-wide">Infrastructure Readiness</span>
                <p className="text-slate-700 leading-relaxed">{item.infrastructureDetails}</p>
              </div>
            )}
            {item.employmentPotential && (
              <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-xl space-y-1 md:col-span-2">
                <span className="font-bold text-slate-900 block text-xs uppercase tracking-wide">Employment Potential</span>
                <p className="text-slate-700 leading-relaxed">{item.employmentPotential}</p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 14. Investor / Applicant Relevance (rendered only if present) */}
      {hasRelevance && (
        <section className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-xs space-y-2.5">
          <h2 className="text-base font-bold text-slate-900 flex items-center space-x-2">
            <Compass className="w-4 h-4 text-indigo-600" />
            <span>Investor &amp; Applicant Relevance</span>
          </h2>
          <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-xl text-xs sm:text-sm text-slate-700 leading-relaxed">
            {item.investorProfile}
          </div>
        </section>
      )}

      {/* 15. Eligibility, 16. Required Documents & 22. Important Conditions (rendered only if present) */}
      {hasRequirements && (
        <section className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-xs space-y-4">
          <h2 className="text-base font-bold text-slate-900 flex items-center space-x-2">
            <FileCheck2 className="w-4 h-4 text-indigo-600" />
            <span>Eligibility &amp; Requirements</span>
          </h2>
          <div className="space-y-3 text-xs sm:text-sm">
            {item.eligibility && (
              <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-xl space-y-1">
                <span className="font-bold text-slate-900 block text-xs uppercase tracking-wide">Participation Eligibility</span>
                <p className="text-slate-700 leading-relaxed">{item.eligibility}</p>
              </div>
            )}

            {item.requiredDocuments && item.requiredDocuments.length > 0 && (
              <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-xl space-y-2">
                <span className="font-bold text-slate-900 block text-xs uppercase tracking-wide">Required Documents</span>
                <ul className="space-y-1.5 list-disc list-inside text-slate-700">
                  {item.requiredDocuments.map((doc, idx) => (
                    <li key={idx}>{doc}</li>
                  ))}
                </ul>
              </div>
            )}

            {item.importantConditions && item.importantConditions.length > 0 && (
              <div className="p-4 bg-amber-50/40 border border-amber-200/60 rounded-xl space-y-2">
                <span className="font-bold text-amber-950 block text-xs uppercase tracking-wide flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                  <span>Important Conditions</span>
                </span>
                <ul className="space-y-1.5 list-disc list-inside text-slate-800">
                  {item.importantConditions.map((cond, idx) => (
                    <li key={idx}>{cond}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 17. Application / Participation Process (rendered only if present) */}
      {hasProcess && (
        <section className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-xs space-y-3">
          <h2 className="text-base font-bold text-slate-900 flex items-center space-x-2">
            <Briefcase className="w-4 h-4 text-indigo-600" />
            <span>Participation / Application Process</span>
          </h2>
          {item.applicationProcess && (
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed p-4 bg-slate-50 border border-slate-200/80 rounded-xl">
              {item.applicationProcess}
            </p>
          )}
          {item.participationProcess && item.participationProcess.length > 0 && (
            <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-xl">
              <ol className="space-y-2 list-decimal list-inside text-xs sm:text-sm text-slate-700">
                {item.participationProcess.map((step, idx) => (
                  <li key={idx} className="leading-relaxed font-medium">{step}</li>
                ))}
              </ol>
            </div>
          )}
        </section>
      )}

      {/* 23. FAQs (rendered strictly only where verified information exists) */}
      {hasFaqs && (
        <section className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-xs space-y-3">
          <h2 className="text-base font-bold text-slate-900 flex items-center space-x-2">
            <HelpCircle className="w-4 h-4 text-indigo-600" />
            <span>Frequently Asked Questions</span>
          </h2>
          <div className="space-y-2.5">
            {item.faqs!.map((faq, idx) => (
              <div key={idx} className="p-4 bg-slate-50 border border-slate-200/80 rounded-xl space-y-1 text-xs sm:text-sm">
                <span className="font-bold text-slate-900 block">{faq.question}</span>
                <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 19. Official URL, 20. Source Authority & 21. Verification Date Transparency Card */}
      <SourceTransparencyCard
        authority={item.authority}
        sourceAuthority={item.sourceAuthority || item.sourceName || 'India Investment Grid / Official Government Portal'}
        sourceUrl={item.sourceUrl}
        verificationStatus={item.verificationStatus}
        lastVerifiedDate={item.lastVerifiedDate}
      />
    </div>
  );
};
