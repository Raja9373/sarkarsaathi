import React, { useMemo } from 'react';
import { GenericHubView } from './Hubs';
import { opportunityRepository } from '../infrastructure/repositories/InvestmentRepository';
import { subsidyRepository } from '../infrastructure/repositories/SubsidyRepository';
import { isIndexableOpportunity } from '../utils/seoQualityGate';
import { useSEO } from '../utils/seo';
import { stateOfficialSources } from '../utils/officialSources';
import { ShieldCheck, ExternalLink, Globe, CheckCircle2, Info, ArrowRight, Award } from 'lucide-react';

export function StateLandingView({ state, onNavigate }: { state: string, onNavigate: (route: string, slug?: string) => void }) {
  const formattedState = state.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');

  // Lookup state official source entry
  const normalizedSlug = state.toLowerCase().replace(/[^a-z0-9]+/g, '');
  const stateSource = stateOfficialSources.find(s => {
    if (!s.state) return false;
    const stNorm = s.state.toLowerCase().replace(/[^a-z0-9]+/g, '');
    return stNorm === normalizedSlug || stNorm.includes(normalizedSlug) || normalizedSlug.includes(stNorm);
  });

  const canonicalState = stateSource?.state || formattedState;

  const curatedOpportunities = useMemo(
    () => opportunityRepository.getAll().filter(isIndexableOpportunity),
    []
  );

  const stateApplicableSubsidies = useMemo(() => {
    const published = subsidyRepository.getPublished();
    const stateLower = canonicalState.toLowerCase();
    const stateSpecific = published.filter((s) => (s.state || '').toLowerCase().includes(stateLower));
    const centralNational = published.filter((s) => {
      const st = (s.state || 'All India').toLowerCase();
      return st === 'all india' || st === 'central' || st === 'pan-india';
    });
    return [...stateSpecific, ...centralNational].slice(0, 6);
  }, [canonicalState]);

  useSEO({
    title: `${canonicalState} Government Opportunities, Schemes & Official Portal | SarkarSaathi`,
    description: `Explore verified state initiatives, subsidies, startup grants, and open central government opportunities applicable to citizens and businesses in ${canonicalState}.`,
    canonicalPath: `/opportunities/state/${state}`
  });

  const stateHeaderCard = (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-slate-900 via-[#0a2347] to-[#0f3460] text-white rounded-2xl p-6 sm:p-8 shadow-md border border-blue-900/60 relative overflow-hidden">
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center space-x-2 bg-blue-800/50 border border-blue-400/30 px-3.5 py-1.5 rounded-full text-xs font-semibold text-blue-200 backdrop-blur-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Verified Official State Governance Directory</span>
            </div>

            {stateSource && (
              <a
                href={stateSource.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-xl text-xs font-bold transition shadow-sm cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>Official {canonicalState} Portal (.gov.in)</span>
                <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
              </a>
            )}
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
              {stateSource ? stateSource.name : `${canonicalState} Government Portal`}
            </h2>
            <p className="text-blue-100/90 text-sm sm:text-base leading-relaxed max-w-3xl">
              {stateSource?.description || `Official state government gateway providing direct access to verified citizen services, state welfare subsidies, and national innovation grants applicable across ${canonicalState}.`}
            </p>
          </div>

          {stateSource?.services && stateSource.services.length > 0 && (
            <div className="pt-2">
              <span className="text-xs font-bold text-blue-200 uppercase tracking-wider block mb-2">
                Verified Digital Citizen &amp; Business Services:
              </span>
              <div className="flex flex-wrap gap-2">
                {stateSource.services.map((srv, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center space-x-1.5 bg-blue-950/80 border border-blue-700/50 text-blue-100 text-xs px-3 py-1 rounded-lg font-medium"
                  >
                    <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span>{srv}</span>
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="bg-blue-950/70 border border-blue-800/60 rounded-xl p-3.5 flex items-start space-x-3 text-xs text-blue-100">
            <Info className="w-4 h-4 text-blue-300 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-white">Curated Verified Programs Only: </span>
              Every national grant and subsidy listed below is verified against official <code>.gov.in</code> guidelines and open to eligible residents, startups, and MSMEs in <span className="font-semibold text-amber-300">{canonicalState}</span>.
            </div>
          </div>
        </div>
      </div>

      {/* Verified Subsidies Applicable in This State */}
      {stateApplicableSubsidies.length > 0 && (
        <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-emerald-600" />
              <h2 className="text-base sm:text-lg font-extrabold text-slate-900">
                Verified Government Subsidies Open in {canonicalState}
              </h2>
            </div>
            <a
              href="/subsidies"
              onClick={(e) => { e.preventDefault(); onNavigate('/subsidies'); }}
              className="text-xs font-bold text-blue-700 hover:underline inline-flex items-center space-x-1"
            >
              <span>All Subsidies</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {stateApplicableSubsidies.map((sub) => (
              <a
                key={sub.id}
                href={`/subsidies/${sub.slug}`}
                onClick={(e) => { e.preventDefault(); onNavigate('/subsidies', sub.slug); }}
                className="p-4 rounded-xl border border-slate-200 hover:border-emerald-400 hover:bg-emerald-50/30 transition flex flex-col justify-between space-y-2"
              >
                <div>
                  <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                    {sub.state || 'All India'}
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 mt-1.5 leading-snug">{sub.title}</h3>
                </div>
                <div className="text-xs font-semibold text-blue-700 flex items-center justify-between pt-2 border-t border-slate-100">
                  <span className="truncate max-w-[180px] text-emerald-700">{sub.maximumBenefit || sub.subsidyAmount || sub.benefitType}</span>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                </div>
              </a>
            ))}
          </div>
        </section>
      )}
    </div>
  );

  return (
    <GenericHubView
      title={`${canonicalState} Government Grants, Subsidies & National Opportunities`}
      type="opportunities"
      items={curatedOpportunities}
      onNavigate={onNavigate}
      initialState={canonicalState}
      headerComponent={stateHeaderCard}
    />
  );
}

export function SectorLandingView({ sector, onNavigate }: { sector: string, onNavigate: (route: string, slug?: string) => void }) {
  let formattedSector = sector.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
  if (sector.toLowerCase() === 'it-ites-technology-parks' || sector.toLowerCase() === 'technology') {
    formattedSector = 'IT, ITeS & Technology Parks';
  } else if (sector.toLowerCase() === 'renewable-energy-solar' || sector.toLowerCase() === 'renewable-energy') {
    formattedSector = 'Renewable Energy & Solar';
  } else if (sector.toLowerCase() === 'quantum-technologies-deep-tech') {
    formattedSector = 'Quantum Technologies & Deep Tech';
  }

  const curatedOpportunities = useMemo(
    () => opportunityRepository.getAll().filter(isIndexableOpportunity),
    []
  );

  useSEO({
    title: `${formattedSector} Sector Government Grants, Fellowships & Opportunities | SarkarSaathi`,
    description: `Browse verified national government grants, research fellowships, and startup innovation calls in the ${formattedSector} sector across India.`,
    canonicalPath: `/opportunities/sector/${sector}`
  });

  return (
    <GenericHubView
      title={`${formattedSector} Grants, Fellowships & Innovation Calls`}
      type="opportunities"
      items={curatedOpportunities}
      onNavigate={onNavigate}
      initialSector={sector}
    />
  );
}
