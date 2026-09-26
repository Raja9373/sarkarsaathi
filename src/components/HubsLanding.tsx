import React from 'react';
import { GenericHubView } from './Hubs';
import { opportunityRepository } from '../infrastructure/repositories/InvestmentRepository';
import { useSEO } from '../utils/seo';

export function StateLandingView({ state, onNavigate }: { state: string, onNavigate: (route: string, slug?: string) => void }) {
  const formattedState = state.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');

  useSEO({
    title: `${formattedState} Government Opportunities & Grants | SarkarSaathi`,
    description: `Explore verified central and state public opportunities, tenders, schemes, and startup initiatives in ${formattedState}.`,
    canonicalPath: `/opportunities/state/${state}`
  });

  return (
    <GenericHubView
      title={`${formattedState} Government Investment & Development Opportunities`}
      type="opportunities"
      items={opportunityRepository.getAll()}
      repository={opportunityRepository}
      onNavigate={onNavigate}
      initialState={state}
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
