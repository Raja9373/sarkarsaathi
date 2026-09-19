import React, { useEffect } from 'react';
import { GenericHubView } from './Hubs';
import { opportunityRepository } from '../infrastructure/repositories/InvestmentRepository';

export function StateLandingView({ state, onNavigate }: { state: string, onNavigate: (route: string, slug?: string) => void }) {
  const formattedState = state.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');

  useEffect(() => {
    document.title = `${formattedState} Government Investment & Development Opportunities | SarkarSaathi`;
  }, [formattedState]);

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

  useEffect(() => {
    document.title = `${formattedSector} Investment & Development Opportunities | SarkarSaathi`;
  }, [formattedSector]);

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
