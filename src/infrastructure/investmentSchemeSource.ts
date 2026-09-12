import { GovernmentInvestmentSchemeRecord } from '../types/investmentScheme';

export interface IGovernmentInvestmentSchemeSource {
  sourceName: string;
  sourceType: 'myScheme' | 'Ministry' | 'Department' | 'StatePortal';
  
  // Interface for future ingestion
  fetchSchemes(): Promise<GovernmentInvestmentSchemeRecord[]>;
  fetchSchemeDetails(slug: string): Promise<GovernmentInvestmentSchemeRecord | null>;
  
  // Metadata for registry
  metadata: {
    coverage: string[]; // List of states or 'National'
    lastChecked: string;
    isActive: boolean;
  };
}
