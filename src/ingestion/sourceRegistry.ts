import { VerifiedSource, SourceCatalogueType } from './types';
export type { VerifiedSource, SourceCatalogueType };

export const INITIAL_VERIFIED_SOURCES: VerifiedSource[] = [
  // Opportunities Sources
  {
    sourceId: 'src-iig-portal',
    sourceName: 'India Investment Grid (IIG)',
    authority: 'Department for Promotion of Industry and Internal Trade (DPIIT) / Invest India',
    catalogueType: 'OPPORTUNITIES',
    officialUrl: 'https://indiainvestmentgrid.gov.in',
    accessType: 'ADMIN_UPLOAD',
    verificationStatus: 'VERIFIED',
    enabled: false,
    updateMethod: 'CSV export/feed / MANUAL EXPORT',
    status: 'MANUAL EXPORT REQUIRED',
    notes: 'Official national investment portal for project pipelines. Intake is supported exclusively via verified administrator-supplied public export files. No public machine-readable unauthenticated API is available.',
    lastVerified: '2026-09-16'
  },
  {
    sourceId: 'src-paimana-mospi',
    sourceName: 'PAIMANA / MoSPI Infrastructure Projects Portal',
    authority: 'Ministry of Statistics and Programme Implementation (MoSPI) / Government of India',
    catalogueType: 'OPPORTUNITIES',
    officialUrl: 'https://mospi.gov.in',
    accessType: 'MANUAL_EXPORT',
    verificationStatus: 'VERIFIED',
    enabled: false,
    updateMethod: 'downloadable official PDF / MANUAL / NOT AUTOMATICALLY CONNECTED',
    status: 'MANUAL / NOT AUTOMATICALLY CONNECTED',
    notes: 'Official MoSPI infrastructure project monitoring. Automated retrieval is NOT CONFIGURED unless an exact verified machine-readable/download endpoint is configured. Classified as INFRASTRUCTURE PROJECT. Never treated automatically as investment products, investment offers, tenders, or funding solicitations.',
    lastVerified: '2026-09-16'
  },
  {
    sourceId: 'src-datagov-opp',
    sourceName: 'Open Government Data (OGD) Platform India - Opportunities',
    authority: 'National Informatics Centre (NIC) / Ministry of Electronics & IT',
    catalogueType: 'OPPORTUNITIES',
    officialUrl: 'https://data.gov.in',
    accessType: 'DOWNLOAD',
    verificationStatus: 'VERIFIED',
    enabled: false,
    updateMethod: 'JSON API / CSV export/feed',
    status: 'REQUIRES AUTHORIZATION',
    notes: 'National open government data platform hosting department-wise public datasets, opportunities, and projects published by ministries.',
    lastVerified: '2026-09-16'
  },
  {
    sourceId: 'src-other-opp',
    sourceName: 'Other Verified Government Source (Opportunities)',
    authority: 'Central / State Ministry or Department',
    catalogueType: 'OPPORTUNITIES',
    officialUrl: 'https://india.gov.in',
    accessType: 'ADMIN_UPLOAD',
    verificationStatus: 'VERIFIED',
    enabled: false,
    updateMethod: 'official webpage/manual source',
    status: 'MANUAL EXPORT REQUIRED',
    notes: 'Official state investment promotion agency or specific ministerial schemes verified by portal administrators.',
    lastVerified: '2026-09-16'
  },

  // Tenders Sources
  {
    sourceId: 'src-cppp-eprocure',
    sourceName: 'Central Public Procurement Portal (CPPP) / eProcure',
    authority: 'National Informatics Centre (NIC) / Ministry of Finance',
    catalogueType: 'TENDERS',
    officialUrl: 'https://eprocure.gov.in',
    accessType: 'ADMIN_UPLOAD',
    verificationStatus: 'VERIFIED',
    enabled: false,
    updateMethod: 'CSV export/feed / official webpage/manual source',
    status: 'MANUAL EXPORT REQUIRED',
    notes: 'Central government procurement portal for e-tendering across central and state authorities. Batch import supported through admin-uploaded official records.',
    lastVerified: '2026-09-16'
  },
  {
    sourceId: 'src-datagov-tenders',
    sourceName: 'Open Government Data (OGD) Platform India - Tenders',
    authority: 'National Informatics Centre (NIC) / Ministry of Electronics & IT',
    catalogueType: 'TENDERS',
    officialUrl: 'https://data.gov.in',
    accessType: 'DOWNLOAD',
    verificationStatus: 'VERIFIED',
    enabled: false,
    updateMethod: 'JSON API / XML feed',
    status: 'REQUIRES AUTHORIZATION',
    notes: 'National open government data repository for public procurement and tender release notices.',
    lastVerified: '2026-09-16'
  },
  {
    sourceId: 'src-other-tenders',
    sourceName: 'Other Verified Government Source (Tenders)',
    authority: 'Public Sector Undertaking / State Procurement Authority',
    catalogueType: 'TENDERS',
    officialUrl: 'https://etenders.gov.in',
    accessType: 'ADMIN_UPLOAD',
    verificationStatus: 'VERIFIED',
    enabled: false,
    updateMethod: 'official webpage/manual source',
    status: 'MANUAL EXPORT REQUIRED',
    notes: 'Authorized state procurement portal or PSU e-tendering system verified by portal administrators.',
    lastVerified: '2026-09-16'
  },

  // Honestly Documented Unavailable Bulk Sources
  {
    sourceId: 'src-iig-automated-api',
    sourceName: 'India Investment Grid (IIG) Automated Bulk API',
    authority: 'Invest India / DPIIT',
    catalogueType: 'OPPORTUNITIES',
    officialUrl: 'https://indiainvestmentgrid.gov.in',
    accessType: 'UNKNOWN',
    verificationStatus: 'NOT_AVAILABLE',
    enabled: false,
    updateMethod: 'MANUAL / NOT AUTOMATICALLY CONNECTED',
    status: 'NOT VERIFIED',
    notes: 'No public machine-readable automated bulk API or unauthenticated feed exists. Scraping and unauthorized intake are prohibited. Direct automated imports are unavailable.',
    lastVerified: '2026-09-16'
  },
  {
    sourceId: 'src-cppp-stream-api',
    sourceName: 'CPPP Real-Time Stream / Direct API',
    authority: 'NIC / Ministry of Finance',
    catalogueType: 'TENDERS',
    officialUrl: 'https://eprocure.gov.in',
    accessType: 'UNKNOWN',
    verificationStatus: 'NOT_AVAILABLE',
    enabled: false,
    updateMethod: 'MANUAL / NOT AUTOMATICALLY CONNECTED',
    status: 'NOT VERIFIED',
    notes: 'Public unauthenticated real-time streaming API is not available. System requires authorized manual export files for procurement intake.',
    lastVerified: '2026-09-16'
  }
];

export class SourceRegistry {
  private sources: Map<string, VerifiedSource> = new Map();

  constructor(initialSources: VerifiedSource[] = INITIAL_VERIFIED_SOURCES) {
    for (const src of initialSources) {
      this.sources.set(src.sourceId, { ...src });
    }
  }

  getAllSources(): VerifiedSource[] {
    return Array.from(this.sources.values());
  }

  getSourceById(sourceId: string): VerifiedSource | undefined {
    if (!sourceId) return undefined;
    return this.sources.get(sourceId.trim());
  }

  getSourcesByCatalogue(catalogueType: 'OPPORTUNITIES' | 'TENDERS'): VerifiedSource[] {
    return Array.from(this.sources.values()).filter(
      s => s.catalogueType === catalogueType || s.catalogueType === 'BOTH'
    );
  }

  registerSource(source: VerifiedSource): { success: boolean; error?: string } {
    if (!source) {
      return { success: false, error: 'Source definition is required.' };
    }
    if (!source.sourceId || !source.sourceId.trim()) {
      return { success: false, error: 'sourceId is required.' };
    }
    const cleanId = source.sourceId.trim();
    if (this.sources.has(cleanId)) {
      return { success: false, error: `Source with ID '${cleanId}' is already registered.` };
    }
    if (!source.sourceName || !source.sourceName.trim()) {
      return { success: false, error: 'sourceName is required.' };
    }
    if (!source.authority || !source.authority.trim()) {
      return { success: false, error: 'authority is required.' };
    }
    if (!source.catalogueType || !['OPPORTUNITIES', 'TENDERS', 'BOTH'].includes(source.catalogueType)) {
      return { success: false, error: 'Valid catalogueType (OPPORTUNITIES, TENDERS, BOTH) is required.' };
    }
    if (!source.officialUrl || !source.officialUrl.trim() || !source.officialUrl.startsWith('http')) {
      return { success: false, error: 'Valid officialUrl starting with http/https is required.' };
    }
    if (!source.accessType || !['API', 'DOWNLOAD', 'MANUAL_EXPORT', 'ADMIN_UPLOAD', 'UNKNOWN'].includes(source.accessType)) {
      return { success: false, error: 'Valid accessType (API, DOWNLOAD, MANUAL_EXPORT, ADMIN_UPLOAD, UNKNOWN) is required.' };
    }
    if (!source.verificationStatus || !['VERIFIED', 'UNVERIFIED', 'NOT_AVAILABLE'].includes(source.verificationStatus)) {
      return { success: false, error: 'Valid verificationStatus (VERIFIED, UNVERIFIED, NOT_AVAILABLE) is required.' };
    }

    const registered: VerifiedSource = {
      sourceId: cleanId,
      sourceName: source.sourceName.trim(),
      authority: source.authority.trim(),
      catalogueType: source.catalogueType,
      officialUrl: source.officialUrl.trim(),
      accessType: source.accessType,
      verificationStatus: source.verificationStatus,
      notes: (source.notes || '').trim(),
      lastVerified: source.lastVerified || new Date().toISOString().split('T')[0]
    };

    this.sources.set(cleanId, registered);
    return { success: true };
  }

  isSourceAvailableForImport(sourceId: string): { available: boolean; reason?: string; source?: VerifiedSource } {
    const source = this.getSourceById(sourceId);
    if (!source) {
      return { available: false, reason: `Unregistered source ID: '${sourceId}'` };
    }
    if (source.verificationStatus === 'NOT_AVAILABLE') {
      return {
        available: false,
        reason: `Source '${source.sourceName}' is marked as NOT_AVAILABLE. ${source.notes}`,
        source
      };
    }
    if (source.accessType === 'UNKNOWN') {
      return {
        available: false,
        reason: `Source '${source.sourceName}' has an UNKNOWN access type. Automated or bulk imports cannot proceed without verified access.`,
        source
      };
    }
    return { available: true, source };
  }
}

export const globalSourceRegistry = new SourceRegistry();
