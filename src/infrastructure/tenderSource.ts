import { TenderRecord } from '../types/tender';

export interface ITenderSource {
  sourceName: string;
  sourcePortal: string; // Base URL
  
  // Interface for future ingestion
  fetchActiveTenders(): Promise<TenderRecord[]>;
  fetchTenderDetails(tenderId: string): Promise<TenderRecord | null>;
  
  // Metadata for registry
  metadata: {
    sourceType: 'Central' | 'State' | 'PSU' | 'Autonomous';
    coverage: string[]; // List of states or 'National'
    lastChecked: string;
    isActive: boolean;
  };
}
