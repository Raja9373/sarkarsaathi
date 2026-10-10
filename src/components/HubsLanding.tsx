import React from 'react';
import { GenericHubView } from './Hubs';
import { opportunityRepository } from '../infrastructure/repositories/InvestmentRepository';
import { useSEO } from '../utils/seo';
import { stateOfficialSources } from '../utils/officialSources';
import { ShieldCheck, ExternalLink, Globe, CheckCircle2, Building2, Info } from 'lucide-react';

export function StateLandingView({ state, onNavigate }: { state: string, onNavigate: (route: string, slug?: string) => void }) {
  const formattedState = state.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');

  // Lookup state official source entry
  const normalizedSlug = state.toLowerCase().replace(/[^a-z0-9]+/g, '');
  const stateSource = stateOfficialSources.find(s => {
    if (!s.state) return false;
    const stNorm = s.state.toLowerCase().replace(/[^a-z0-9]+/g, '');
    return stNorm === normalizedSlug || stNorm.includes(normalizedSlug) || normalizedSlug.includes(stNorm);
  });

  useSEO({
    title: `${formattedState} Government Opportunities, Schemes & Official Portal | SarkarSaathi`,
    description: `Explore verified state initiatives, tenders, startup grants, and open central government opportunities applicable to citizens and businesses in ${formattedState}.`,
    canonicalPath: `/opportunities/state/${state}`
  });

  const stateHeaderCard = (
    <div className="bg-gradient-to-br from-slate-900 via-[#0a2347] to-[#0f3460] text-white rounded-2xl p-6 sm:p-8 shadow-md border border-blue-900/60 relative overflow-hidden">
      {/* Background glow */}
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
              <span>Official {formattedState} Portal (.gov.in)</span>
              <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
            </a>
          )}
        </div>

        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
            {stateSource ? stateSource.name : `${formattedState} Government Portal`}
          </h2>
          <p className="text-blue-100/90 text-sm sm:text-base leading-relaxed max-w-3xl">
            {stateSource?.description || `Official state government gateway providing direct access to verified citizen services, state development projects, and public procurement opportunities across ${formattedState}.`}
          </p>
        </div>

        {/* Key State Services */}
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

        {/* Explanatory Coverage Banner */}
        <div className="bg-blue-950/70 border border-blue-800/60 rounded-xl p-3.5 flex items-start space-x-3 text-xs text-blue-100">
          <Info className="w-4 h-4 text-blue-300 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-white">Full State &amp; National Coverage: </span>
            This hub displays state-specific initiatives alongside verified central government opportunities (e.g. BIRAC BIG, MeitY TIDE 2.0, DST NIDHI PRAYAS, ANRF Research Grants) fully open to applicants in <span className="font-semibold text-amber-300">{formattedState}</span>.
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <GenericHubView
      title={`${formattedState} Government Investment & Development Opportunities`}
      type="opportunities"
      items={opportunityRepository.getAll()}
      repository={opportunityRepository}
      onNavigate={onNavigate}
      initialState={state}
      headerComponent={stateHeaderCard}
    />
  );
}

export function SectorLandingView({ sector, onNavigate }: { sector: string, onNavigate: (route: string, slug?: string) => void }) {
  const formattedSector = sector.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');

  useSEO({
    title: `${formattedSector} Sector Investment Opportunities & Fellowships | SarkarSaathi`,
    description: `Browse verified government opportunities, tenders, fellowships, and startup grants in the ${formattedSector} sector across India.`,
    canonicalPath: `/opportunities/sector/${sector}`
  });

  return (
    <GenericHubView
      title={`${formattedSector} Investment & Development Opportunities`}
      type="opportunities"
      items={opportunityRepository.getAll()}
      repository={opportunityRepository}
      onNavigate={onNavigate}
      initialSector={sector}
    />
  );
}
