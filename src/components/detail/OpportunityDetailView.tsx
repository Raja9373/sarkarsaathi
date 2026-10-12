import React, { useEffect, useMemo, useState } from 'react';
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
  DollarSign,
  Clock,
  CheckCircle2,
  Building,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  ArrowRight
} from 'lucide-react';

interface OpportunityDetailViewProps {
  item: Opportunity;
}

const isValidField = (val?: string): boolean => {
  if (!val) return false;
  const trimmed = val.trim();
  if (trimmed === '' || trimmed.toLowerCase().includes('not specified in the verified source')) {
    return false;
  }
  return true;
};

const PaimanaBanner: React.FC = () => {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 text-amber-900 space-y-2">
      <div className="flex items-center gap-2 font-bold text-sm">
        <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
        <span>Government Infrastructure Monitoring Record — Not an Open Application</span>
      </div>
      <p className="text-xs sm:text-sm text-amber-800 leading-relaxed">
        This record describes a government-monitored infrastructure project. It does not, by itself, establish that applications, tenders, investment participation, or funding are currently open. Consult the linked official source for the applicable status.
      </p>
    </div>
  );
};

const Disclaimer: React.FC<{ item: Opportunity }> = ({ item }) => {
  const isPaimana = item.implementingAgency?.includes('PAIMANA') || item.authority?.includes('PAIMANA') || item.sourceAuthority?.includes('PAIMANA') || item.id?.startsWith('paimana-');
  const text = isPaimana
    ? "This is a government-monitored infrastructure project tracked via official ministry flash reports."
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
      .slice(0, 4);
  }, [allOpportunities, item]);

  if (related.length === 0) return null;

  const stateSlug = item.state ? item.state.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') : null;

  return (
    <section className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-xs space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-bold text-slate-900">Related Government Opportunities</h2>
        {stateSlug && (
          <a
            href={`/opportunities/state/${stateSlug}`}
            className="text-xs font-bold text-indigo-600 hover:text-indigo-800 transition flex items-center gap-1"
          >
            <span>All {item.state} Opportunities</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {related.map(rel => (
          <a
            key={rel.id}
            href={`/opportunities/${rel.slug || rel.id}`}
            className="p-4 border border-slate-100 rounded-xl hover:bg-slate-50 hover:border-indigo-200 transition group block"
          >
            <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
              <span className="font-semibold text-slate-500">{rel.sector || 'Public Project'}</span>
              {rel.state && <span className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-600">{rel.state}</span>}
            </div>
            <h3 className="text-sm font-semibold text-slate-900 group-hover:text-indigo-600 transition mb-1 line-clamp-2">
              {rel.title}
            </h3>
            <p className="text-xs text-slate-500 line-clamp-1">{rel.authority || rel.sourceAuthority}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export const OpportunityDetailView: React.FC<OpportunityDetailViewProps> = ({ item }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const anyItem = item as any;

  const stateSlug = item.state ? item.state.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') : null;
  const sectorSlug = item.sector ? item.sector.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') : null;

  // Generate contextual FAQs for deep SEO and indexing signals
  const faqs = useMemo(() => {
    const list = [
      {
        question: `What is ${item.title}?`,
        answer: anyItem.opportunityDescription || item.description || `${item.title} is a verified government-promoted initiative under ${item.authority || 'the Government of India'}, categorized within the ${item.sector || 'public development'} sector.`
      },
      {
        question: `Which authority or ministry oversees this project?`,
        answer: `This project is administered and promoted by ${item.authority || anyItem.projectAuthority || 'the competent government authority'}. ${anyItem.implementingAgency ? `The implementing agency is ${anyItem.implementingAgency}.` : ''} Verification and official status can be tracked via ${item.sourceAuthority || 'official government registries'}.`
      },
      {
        question: `Where is this project located and what is its geographical scope?`,
        answer: `The initiative is situated in ${item.state || 'India'}${anyItem.district ? `, specifically in the ${anyItem.district} district` : ''}${anyItem.city ? ` (${anyItem.city})` : ''}. It contributes to regional development and industrial capacity within the ${item.sector || 'designated'} domain.`
      },
      {
        question: `What are the eligibility and application guidelines?`,
        answer: item.eligibility
          ? `Eligibility criteria: ${item.eligibility}. ${item.applicationProcess ? `Application process: ${item.applicationProcess}` : 'Applications and proposals must be submitted through the nodal single-window clearance or departmental portal.'}`
          : `Interested participants and investors should consult the official nodal portal (${item.sourceUrl || 'official website'}) for current eligibility guidelines, document requirements, and allotment rules.`
      }
    ];

    if (item.totalProjectCost || anyItem.investmentRequired) {
      list.push({
        question: `What is the financial scale and investment required?`,
        answer: `The total estimated project cost is ${item.totalProjectCost || 'as designated in project reports'}${anyItem.investmentRequired ? `, with an investment requirement of ${anyItem.investmentRequired}` : ''}${anyItem.fundingRequirement ? ` (${anyItem.fundingRequirement})` : ''}.`
      });
    }

    return list;
  }, [item, anyItem]);

  useEffect(() => {
    if (!item) return;
    document.title = `${item.title} | Government Opportunity | SarkarSaathi`;

    const canonicalUrl = `https://sarkarsaathi.org/opportunities/${item.slug || item.id}`;

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'GovernmentService',
      'name': item.title,
      'description': item.description || `Official government opportunity: ${item.title}`,
      'serviceType': item.opportunityType || item.category || 'Government Opportunity',
      'provider': {
        '@type': 'GovernmentOrganization',
        'name': item.authority || item.sourceAuthority || 'Government of India',
        'url': item.sourceUrl || 'https://sarkarsaathi.org'
      },
      'areaServed': {
        '@type': 'AdministrativeArea',
        'name': item.state || 'India'
      },
      'url': canonicalUrl
    };

    const breadcrumbLd = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': 'https://sarkarsaathi.org/'
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Opportunities',
          'item': 'https://sarkarsaathi.org/opportunities'
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': item.title,
          'item': canonicalUrl
        }
      ]
    };

    const faqLd = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': faqs.map(f => ({
        '@type': 'Question',
        'name': f.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': f.answer
        }
      }))
    };

    const scriptId = 'opportunity-jsonld';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify([jsonLd, breadcrumbLd, faqLd]);

    return () => {
      if (script) script.remove();
    };
  }, [item, faqs]);

  const isPaimana = item.implementingAgency?.includes('PAIMANA') || item.authority?.includes('PAIMANA') || item.sourceAuthority?.includes('PAIMANA') || item.id?.startsWith('paimana-');

  const unverifiedDeadlineRecords = ['opp-birac-big-29', 'opp-meity-tide-2-0', 'opp-dst-nidhi-prayas', 'opp-aim-atal-new-india'];
  const isUnverifiedDeadline = unverifiedDeadlineRecords.includes(item.id);

  // Check available structured fields
  const hasFinancials = isValidField(item.totalProjectCost) || isValidField(anyItem.investmentRequired) || isValidField(anyItem.fundingRequirement);
  const hasTimeline = isValidField(item.deadline) || isValidField(item.timeline);
  const hasLocation = isValidField(item.state) || isValidField(item.district) || isValidField(anyItem.city) || isValidField(item.sector);
  const hasEligibility = isValidField(item.eligibility);
  const hasApplicationProcess = isValidField(item.applicationProcess);
  const hasRequiredDocs = item.requiredDocuments && item.requiredDocuments.length > 0;

  return (
    <div className="space-y-6">
      {/* 1. Header Card */}
      <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-5">
        <div className="flex flex-wrap items-center gap-2">
          {item.opportunityType && (
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700">
              {item.opportunityType}
            </span>
          )}
          {item.state && stateSlug && (
            <a
              href={`/opportunities/state/${stateSlug}`}
              className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center gap-1 transition"
              title={`Browse all opportunities in ${item.state}`}
            >
              <MapPin className="w-3 h-3 text-slate-500" />
              <span>{item.state}</span>
              {anyItem.district && <span className="text-slate-500 font-normal">({anyItem.district})</span>}
            </a>
          )}
          {item.sector && sectorSlug && (
            <a
              href={`/opportunities/sector/${sectorSlug}`}
              className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 hover:bg-blue-100 text-blue-700 flex items-center gap-1 transition"
              title={`Browse all ${item.sector} sector opportunities`}
            >
              <Briefcase className="w-3 h-3 text-blue-500" />
              <span>{item.sector}</span>
            </a>
          )}
          {anyItem.projectId && (
            <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-100 text-slate-600">
              ID: {anyItem.projectId}
            </span>
          )}
          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
            {item.status || 'VERIFIED'}
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">{item.title}</h1>

        {isPaimana && <PaimanaBanner />}

        <Disclaimer item={item} />

        {/* Full Strategic Scope / Opportunity Description */}
        <div className="space-y-3 pt-2">
          {item.description && (
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              {item.description}
            </p>
          )}
          {anyItem.opportunityDescription && anyItem.opportunityDescription !== item.description && (
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed">
              <span className="font-bold text-slate-900 block mb-1">Strategic Scope &amp; Project Overview:</span>
              {anyItem.opportunityDescription}
            </div>
          )}
        </div>
      </div>

      {/* 2. Key Project Parameters Grid */}
      {(hasFinancials || hasTimeline || hasLocation) && (
        <section className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs space-y-4">
          <h2 className="text-base font-bold text-slate-900 flex items-center space-x-2">
            <Compass className="w-4 h-4 text-indigo-600" />
            <span>Key Project Parameters</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            {isValidField(item.totalProjectCost) && (
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-slate-400 font-bold uppercase text-[10px] block mb-1">Total Project Cost</span>
                <span className="font-bold text-slate-800">{item.totalProjectCost}</span>
              </div>
            )}
            {isValidField(anyItem.investmentRequired) && (
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-slate-400 font-bold uppercase text-[10px] block mb-1">Investment Required</span>
                <span className="font-bold text-slate-800">{anyItem.investmentRequired}</span>
              </div>
            )}
            {isValidField(anyItem.fundingRequirement) && (
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-slate-400 font-bold uppercase text-[10px] block mb-1">Funding Requirement</span>
                <span className="font-semibold text-slate-800">{anyItem.fundingRequirement}</span>
              </div>
            )}
            {isValidField(item.deadline) && (
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1.5">
                <span className="text-slate-400 font-bold uppercase text-[10px] block">Target Deadline</span>
                <span className="font-semibold text-slate-800 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                  {item.deadline}
                </span>
                {isUnverifiedDeadline && (
                  <p className="text-[11px] text-amber-800 bg-amber-50 border border-amber-200 p-2 rounded-lg leading-snug">
                    Deadline not independently verified. Please confirm the current application window on the official organizer’s website.
                  </p>
                )}
              </div>
            )}
            {isValidField(item.timeline) && (
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-slate-400 font-bold uppercase text-[10px] block mb-1">Implementation Timeline</span>
                <span className="font-semibold text-slate-800 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-indigo-600" />
                  {item.timeline}
                </span>
              </div>
            )}
            {isValidField(item.sector) && (
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-slate-400 font-bold uppercase text-[10px] block mb-1">Sector &amp; Domain</span>
                <span className="font-semibold text-slate-800">{item.sector} {item.subSector ? `(${item.subSector})` : ''}</span>
              </div>
            )}
            {(anyItem.district || anyItem.city) && (
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-slate-400 font-bold uppercase text-[10px] block mb-1">Location Details</span>
                <span className="font-semibold text-slate-800">
                  {[anyItem.city, anyItem.district, item.state].filter(Boolean).join(', ')}
                </span>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 3. Project Governance & Administration */}
      {(item.authority || anyItem.implementingAgency || anyItem.contactInformation || anyItem.projectStage) && (
        <section className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs space-y-4">
          <h2 className="text-base font-bold text-slate-900 flex items-center space-x-2">
            <Landmark className="w-4 h-4 text-indigo-600" />
            <span>Project Governance &amp; Administration</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            {item.authority && (
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-slate-400 font-bold uppercase text-[10px] block mb-1">Promoting Authority</span>
                <span className="font-semibold text-slate-800">{item.authority}</span>
              </div>
            )}
            {anyItem.implementingAgency && (
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-slate-400 font-bold uppercase text-[10px] block mb-1">Implementing Agency</span>
                <span className="font-semibold text-slate-800">{anyItem.implementingAgency}</span>
              </div>
            )}
            {anyItem.projectStage && (
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-slate-400 font-bold uppercase text-[10px] block mb-1">Project Status / Stage</span>
                <span className="font-semibold text-emerald-700">{anyItem.projectStage}</span>
              </div>
            )}
            {anyItem.contactInformation && (
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-slate-400 font-bold uppercase text-[10px] block mb-1">Nodal Contact &amp; Office</span>
                <span className="font-semibold text-slate-800">{anyItem.contactInformation}</span>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 4. Eligibility & Participation Guidelines */}
      {(hasEligibility || hasApplicationProcess || hasRequiredDocs) && (
        <section className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs space-y-4">
          <h2 className="text-base font-bold text-slate-900 flex items-center space-x-2">
            <FileCheck2 className="w-4 h-4 text-indigo-600" />
            <span>Eligibility &amp; Participation Guidelines</span>
          </h2>
          <div className="space-y-4 text-xs sm:text-sm text-slate-700">
            {hasEligibility && (
              <div className="space-y-1">
                <h3 className="font-bold text-slate-900">Eligibility Criteria</h3>
                <p className="leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">{item.eligibility}</p>
              </div>
            )}
            {hasApplicationProcess && (
              <div className="space-y-1">
                <h3 className="font-bold text-slate-900">Application / Participation Process</h3>
                <p className="leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">{item.applicationProcess}</p>
              </div>
            )}
            {hasRequiredDocs && item.requiredDocuments && (
              <div className="space-y-2">
                <h3 className="font-bold text-slate-900">Required Documents &amp; Submissions</h3>
                <ul className="list-disc pl-5 space-y-1 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  {item.requiredDocuments.map((doc, idx) => (
                    <li key={idx} className="text-slate-700">{doc}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 5. Opportunity Q&A / FAQs (Indexed for Google Search Snippets) */}
      <section className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs space-y-4">
        <h2 className="text-base font-bold text-slate-900 flex items-center space-x-2">
          <HelpCircle className="w-4 h-4 text-indigo-600" />
          <span>Frequently Asked Questions</span>
        </h2>
        <div className="space-y-2">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-slate-200/80 rounded-xl overflow-hidden">
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-4 text-left flex items-center justify-between text-xs sm:text-sm font-bold text-slate-800 hover:bg-slate-50 transition"
              >
                <span>{faq.question}</span>
                {openFaq === idx ? (
                  <ChevronUp className="w-4 h-4 text-indigo-600 shrink-0 ml-2" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-slate-400 shrink-0 ml-2" />
                )}
              </button>
              {openFaq === idx && (
                <div className="p-4 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 6. Related Opportunities (Interconnected Link Mesh) */}
      <RelatedOpportunities item={item} />
      
      {/* 7. Source Transparency Card */}
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
