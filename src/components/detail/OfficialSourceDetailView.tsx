import React, { useMemo } from 'react';
import { OfficialSource, getOfficialSourceSlug } from '../../utils/officialSources';
import { opportunityRepository, tenderRepository } from '../../infrastructure/repositories/InvestmentRepository';
import { subsidyRepository } from '../../infrastructure/repositories/SubsidyRepository';
import { useSEO } from '../../utils/seo';
import {
  ExternalLink,
  ShieldCheck,
  Building2,
  MapPin,
  CheckCircle2,
  ArrowLeft,
  FileText,
  AlertTriangle,
  Globe2,
  Layers,
  Search
} from 'lucide-react';

interface OfficialSourceDetailViewProps {
  item: OfficialSource;
  onNavigate: (route: string, slug?: string) => void;
  onBack: () => void;
}

export function OfficialSourceDetailView({ item, onNavigate, onBack }: OfficialSourceDetailViewProps) {
  const slug = getOfficialSourceSlug(item);

  useSEO({
    title: `${item.name} - Official Government Portal | SarkarSaathi`,
    description: `${item.description} Access verified links, digital services, and related government schemes for ${item.authority}.`,
    canonicalPath: `/official-sources/${slug}`,
    openGraph: {
      title: `${item.name} - Verified Government Source`,
      description: item.description,
      type: 'website'
    }
  });

  // Find related opportunities, subsidies, or tenders
  const relatedSubsidies = useMemo(() => {
    if (!item.state) return [];
    return subsidyRepository.getAll()
      .filter(s => s.state?.toLowerCase() === item.state?.toLowerCase() || s.authority?.toLowerCase().includes(item.state?.toLowerCase() || ''))
      .slice(0, 4);
  }, [item.state]);

  const relatedOpportunities = useMemo(() => {
    if (!item.state) return [];
    return opportunityRepository.getAll()
      .filter(o => o.state?.toLowerCase() === item.state?.toLowerCase() || o.authority?.toLowerCase().includes(item.state?.toLowerCase() || ''))
      .slice(0, 4);
  }, [item.state]);

  const isGovDomain = item.officialUrl.includes('.gov.in') || item.officialUrl.includes('.nic.in');

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'GovernmentOrganization',
            name: item.name,
            alternateName: item.authority,
            url: item.officialUrl,
            description: item.description,
            address: item.state ? {
              '@type': 'PostalAddress',
              addressRegion: item.state,
              addressCountry: 'IN'
            } : undefined
          })
        }}
      />

      {/* Back button & Breadcrumbs */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="inline-flex items-center space-x-2 text-sm font-medium text-slate-600 hover:text-indigo-600 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Official Sources Registry</span>
        </button>

        <div className="text-xs text-slate-500 hidden sm:flex items-center space-x-2">
          <span className="cursor-pointer hover:underline" onClick={() => onNavigate('/')}>Home</span>
          <span>/</span>
          <span className="cursor-pointer hover:underline" onClick={() => onNavigate('/official-sources')}>Official Sources</span>
          <span>/</span>
          <span className="text-slate-800 font-semibold">{item.name}</span>
        </div>
      </div>

      {/* Hero Header Card */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-full border border-indigo-200 uppercase tracking-wider">
            {item.category}
          </span>
          <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full">
            {item.type === 'CENTRAL' ? 'Central Government' : item.type === 'STATE' ? 'State Government' : 'Union Territory'}
          </span>
          {isGovDomain && (
            <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-200 inline-flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              Verified Government Domain
            </span>
          )}
        </div>

        <div className="space-y-3">
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {item.name}
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {item.description}
          </p>
        </div>

        {/* Action Button & Metadata */}
        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-sm text-slate-600">
            <Building2 className="w-5 h-5 text-slate-400 shrink-0" />
            <div>
              <span className="text-xs text-slate-400 block">Operating Authority</span>
              <span className="font-semibold text-slate-800">{item.authority}</span>
            </div>
          </div>

          <a
            href={item.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-2xl shadow-sm transition"
          >
            <span>Visit Official Portal ({new URL(item.officialUrl).hostname})</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Services and Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-5">
          <h2 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
            <Layers className="w-5 h-5 text-indigo-600" />
            <span>Digital Services & Applications Available</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Citizens, businesses, and investors can access the following official digital services and public registries on this portal:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {(item.services && item.services.length > 0 ? item.services : [
              'Online Citizen Service Applications',
              'Direct Welfare Benefit Tracking',
              'Public Procurement & Tender Notices',
              'Revenue & Statutory Registry Search'
            ]).map((service, idx) => (
              <div key={idx} className="p-3.5 bg-slate-50 border border-slate-100 rounded-2xl flex items-start space-x-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-medium text-slate-800">{service}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-50 rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-4">
          <h3 className="text-sm font-bold text-slate-900 flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-indigo-600" />
            <span>Verification & Trust</span>
          </h3>
          <ul className="text-xs text-slate-600 space-y-3">
            <li className="flex items-start space-x-2">
              <span className="font-bold text-indigo-600">•</span>
              <span><strong>Source Type:</strong> {item.sourceType}</span>
            </li>
            {item.state && (
              <li className="flex items-start space-x-2">
                <span className="font-bold text-indigo-600">•</span>
                <span><strong>Jurisdiction:</strong> {item.state}</span>
              </li>
            )}
            <li className="flex items-start space-x-2">
              <span className="font-bold text-indigo-600">•</span>
              <span><strong>Endpoint URL:</strong> <code className="text-[11px] bg-white px-1.5 py-0.5 rounded border">{item.officialUrl}</code></span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-bold text-indigo-600">•</span>
              <span><strong>Last Verification:</strong> {item.lastVerified || 'March 2026'}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Related Content from this State / Authority */}
      {relatedSubsidies.length > 0 && (
        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">
              Government Subsidies & Schemes in {item.state || item.authority}
            </h2>
            <button
              onClick={() => onNavigate('/subsidies')}
              className="text-xs font-semibold text-indigo-600 hover:underline"
            >
              View all subsidies &rarr;
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedSubsidies.map(sub => (
              <div
                key={sub.id}
                onClick={() => onNavigate('/subsidies', sub.slug || sub.id)}
                className="p-4 border border-slate-100 rounded-2xl hover:border-indigo-200 hover:bg-indigo-50/20 cursor-pointer transition flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold text-indigo-600 uppercase">{sub.category || 'Subsidy'}</span>
                  <h3 className="text-sm font-bold text-slate-900 mt-1 line-clamp-1">{sub.title}</h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">{sub.description}</p>
                </div>
                <div className="mt-3 text-[11px] font-medium text-indigo-600 flex items-center justify-between">
                  <span>{sub.benefitType || 'Government Grant'}</span>
                  <span>View Details &rarr;</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {relatedOpportunities.length > 0 && (
        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">
              Investment & Development Opportunities in {item.state || item.authority}
            </h2>
            <button
              onClick={() => item.state ? onNavigate(`/opportunities/state/${item.state.toLowerCase().replace(/\s+/g, '-')}`) : onNavigate('/opportunities')}
              className="text-xs font-semibold text-indigo-600 hover:underline"
            >
              Explore all state opportunities &rarr;
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedOpportunities.map(opp => (
              <div
                key={opp.id}
                onClick={() => onNavigate('/opportunities', opp.slug || opp.id)}
                className="p-4 border border-slate-100 rounded-2xl hover:border-indigo-200 hover:bg-indigo-50/20 cursor-pointer transition flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase">{opp.sector || 'General Opportunity'}</span>
                  <h3 className="text-sm font-bold text-slate-900 mt-1 line-clamp-1">{opp.title}</h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">{opp.description}</p>
                </div>
                <div className="mt-3 text-[11px] font-medium text-indigo-600 flex items-center justify-between">
                  <span>{opp.authority || 'State Authority'}</span>
                  <span>View Project &rarr;</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Non-Affiliation Disclaimer */}
      <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-4 sm:p-5 flex items-start space-x-3 text-xs text-amber-900">
        <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong>Independent Aggregator Notice:</strong> SarkarSaathi is an independent informational platform and is not officially affiliated with or an agency of {item.authority}. All external links point directly to official government web domains. We encourage citizens to verify terms directly on the official portal.
        </p>
      </div>
    </div>
  );
}
