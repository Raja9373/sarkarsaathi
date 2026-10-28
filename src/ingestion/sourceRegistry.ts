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
    syncFrequency: 'DAILY',
    scheduledSyncTime: '05:00 AM IST',
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
    syncFrequency: 'DAILY',
    scheduledSyncTime: '05:00 AM IST',
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
    syncFrequency: 'DAILY',
    scheduledSyncTime: '05:00 AM IST',
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
    syncFrequency: 'DAILY',
    scheduledSyncTime: '05:00 AM IST',
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
    syncFrequency: 'DAILY',
    scheduledSyncTime: '05:00 AM IST',
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
    syncFrequency: 'DAILY',
    scheduledSyncTime: '05:00 AM IST',
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
    syncFrequency: 'DAILY',
    scheduledSyncTime: '05:00 AM IST',
    status: 'MANUAL EXPORT REQUIRED',
    notes: 'Authorized state procurement portal or PSU e-tendering system verified by portal administrators.',
    lastVerified: '2026-09-16'
  },

  // Subsidies & Benefits Sources
  {
    sourceId: 'src-dbt-bharat',
    sourceName: 'Direct Benefit Transfer (DBT) Bharat National Portal',
    authority: 'Cabinet Secretariat / Ministry of Finance / Government of India',
    catalogueType: 'SUBSIDIES',
    officialUrl: 'https://www.dbtbharat.gov.in',
    accessType: 'DOWNLOAD',
    verificationStatus: 'VERIFIED',
    enabled: true,
    updateMethod: 'official scheme gazette & DBT portal public records',
    syncFrequency: 'DAILY',
    scheduledSyncTime: '05:00 AM IST',
    status: 'CONNECTED & FRESH',
    notes: 'National portal mapping all central and centrally sponsored DBT welfare schemes, cash subsidies, and in-kind benefits across 54+ ministries.',
    lastVerified: '2026-09-18'
  },
  {
    sourceId: 'src-myscheme-gov',
    sourceName: 'myScheme National Government Schemes Portal',
    authority: 'National e-Governance Division (NeGD) / Ministry of Electronics & IT (MeitY)',
    catalogueType: 'SUBSIDIES',
    officialUrl: 'https://www.myscheme.gov.in',
    accessType: 'DOWNLOAD',
    verificationStatus: 'VERIFIED',
    enabled: true,
    updateMethod: 'official public scheme catalog feed',
    syncFrequency: 'DAILY',
    scheduledSyncTime: '05:00 AM IST',
    status: 'CONNECTED & FRESH',
    notes: 'Centralized citizen and enterprise portal cataloguing central, state, and union territory government schemes, subsidies, and scholarships.',
    lastVerified: '2026-09-18'
  },
  {
    sourceId: 'src-pm-suryaghar',
    sourceName: 'PM Surya Ghar National Portal for Rooftop Solar',
    authority: 'Ministry of New and Renewable Energy (MNRE) / Government of India',
    catalogueType: 'SUBSIDIES',
    officialUrl: 'https://pmsuryaghar.gov.in',
    accessType: 'DOWNLOAD',
    verificationStatus: 'VERIFIED',
    enabled: true,
    updateMethod: 'official ministerial circular & portal guidelines',
    syncFrequency: 'DAILY',
    scheduledSyncTime: '05:00 AM IST',
    status: 'CONNECTED & FRESH',
    notes: 'National rooftop solar capital subsidy portal for residential consumers providing direct financial assistance up to ₹78,000.',
    lastVerified: '2026-09-18'
  },
  {
    sourceId: 'src-pm-kisan',
    sourceName: 'PM-KISAN Samman Nidhi Portal',
    authority: 'Ministry of Agriculture and Farmers Welfare / Government of India',
    catalogueType: 'SUBSIDIES',
    officialUrl: 'https://pmkisan.gov.in',
    accessType: 'DOWNLOAD',
    verificationStatus: 'VERIFIED',
    enabled: true,
    updateMethod: 'official DBT scheme circular & portal feed',
    syncFrequency: 'DAILY',
    scheduledSyncTime: '05:00 AM IST',
    status: 'CONNECTED & FRESH',
    notes: 'Central sector scheme income support portal disbursing ₹6,000 per year directly to eligible farmer families across India.',
    lastVerified: '2026-09-18'
  },
  {
    sourceId: 'src-pm-svanidhi',
    sourceName: 'PM SVANidhi Micro-Credit & Interest Subsidy Portal',
    authority: 'Ministry of Housing and Urban Affairs (MoHUA) / SIDBI',
    catalogueType: 'SUBSIDIES',
    officialUrl: 'https://pmsvanidhi.mohua.gov.in',
    accessType: 'DOWNLOAD',
    verificationStatus: 'VERIFIED',
    enabled: true,
    updateMethod: 'official portal guidelines & interest subvention notifications',
    syncFrequency: 'DAILY',
    scheduledSyncTime: '05:00 AM IST',
    status: 'CONNECTED & FRESH',
    notes: 'Affordable working capital credit and 7% interest subvention facility for urban street vendors.',
    lastVerified: '2026-09-18'
  },
  {
    sourceId: 'src-pmegp-kvic',
    sourceName: 'Prime Minister’s Employment Generation Programme (PMEGP) e-Portal',
    authority: 'Khadi and Village Industries Commission (KVIC) / Ministry of MSME',
    catalogueType: 'SUBSIDIES',
    officialUrl: 'https://www.kviconline.gov.in',
    accessType: 'DOWNLOAD',
    verificationStatus: 'VERIFIED',
    enabled: true,
    updateMethod: 'official credit-linked margin subsidy guidelines',
    syncFrequency: 'DAILY',
    scheduledSyncTime: '05:00 AM IST',
    status: 'CONNECTED & FRESH',
    notes: 'Credit-linked margin money subsidy scheme up to 35% for establishing micro manufacturing and service enterprises.',
    lastVerified: '2026-09-18'
  },
  {
    sourceId: 'src-standup-mitra',
    sourceName: 'Stand-Up India Portal',
    authority: 'Small Industries Development Bank of India (SIDBI) / Ministry of Finance',
    catalogueType: 'SUBSIDIES',
    officialUrl: 'https://www.standupmitra.in',
    accessType: 'DOWNLOAD',
    verificationStatus: 'VERIFIED',
    enabled: true,
    updateMethod: 'official portal circulars',
    syncFrequency: 'DAILY',
    scheduledSyncTime: '05:00 AM IST',
    status: 'CONNECTED & FRESH',
    notes: 'Bank financing, credit guarantee, and margin subsidy facilitation for SC/ST and Women entrepreneurs setting up greenfield enterprises.',
    lastVerified: '2026-09-18'
  },
  {
    sourceId: 'src-pm-vishwakarma',
    sourceName: 'PM Vishwakarma Scheme Portal',
    authority: 'Ministry of Micro, Small and Medium Enterprises / MoSD&E',
    catalogueType: 'SUBSIDIES',
    officialUrl: 'https://pmvishwakarma.gov.in',
    accessType: 'DOWNLOAD',
    verificationStatus: 'VERIFIED',
    enabled: true,
    updateMethod: 'official scheme gazette notification & portal circulars',
    syncFrequency: 'DAILY',
    scheduledSyncTime: '05:00 AM IST',
    status: 'CONNECTED & FRESH',
    notes: 'Comprehensive support including ₹15,000 toolkit incentive, skill training stipends, and collateral-free enterprise loans with 5% concessional interest.',
    lastVerified: '2026-09-18'
  },
  {
    sourceId: 'src-nsp-scholarships',
    sourceName: 'National Scholarship Portal (NSP)',
    authority: 'Ministry of Electronics & IT / Ministry of Education / MoSJE',
    catalogueType: 'SUBSIDIES',
    officialUrl: 'https://scholarships.gov.in',
    accessType: 'DOWNLOAD',
    verificationStatus: 'VERIFIED',
    enabled: true,
    updateMethod: 'official national scholarship guidelines & notifications',
    syncFrequency: 'DAILY',
    scheduledSyncTime: '05:00 AM IST',
    status: 'CONNECTED & FRESH',
    notes: 'One-stop solution for central and state scholarship disbursements under Direct Benefit Transfer (DBT).',
    lastVerified: '2026-09-18'
  },
  {
    sourceId: 'src-pmfme-mofpi',
    sourceName: 'PM Formalisation of Micro Food Processing Enterprises (PMFME)',
    authority: 'Ministry of Food Processing Industries (MoFPI) / Government of India',
    catalogueType: 'SUBSIDIES',
    officialUrl: 'https://pmfme.mofpi.gov.in',
    accessType: 'DOWNLOAD',
    verificationStatus: 'VERIFIED',
    enabled: true,
    updateMethod: 'official ODOP scheme guidelines',
    syncFrequency: 'DAILY',
    scheduledSyncTime: '05:00 AM IST',
    status: 'CONNECTED & FRESH',
    notes: 'Credit-linked capital subsidy at 35% of eligible project cost up to ₹10 Lakh for individual food processing units.',
    lastVerified: '2026-09-18'
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
    syncFrequency: 'DAILY',
    scheduledSyncTime: '05:00 AM IST',
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
    syncFrequency: 'DAILY',
    scheduledSyncTime: '05:00 AM IST',
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

  getSourcesByCatalogue(catalogueType: 'OPPORTUNITIES' | 'TENDERS' | 'SUBSIDIES' | 'ALL'): VerifiedSource[] {
    return Array.from(this.sources.values()).filter(
      s => catalogueType === 'ALL' || s.catalogueType === catalogueType || s.catalogueType === 'BOTH' || s.catalogueType === 'ALL'
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
    if (!source.catalogueType || !['OPPORTUNITIES', 'TENDERS', 'SUBSIDIES', 'BOTH', 'ALL'].includes(source.catalogueType)) {
      return { success: false, error: 'Valid catalogueType (OPPORTUNITIES, TENDERS, SUBSIDIES, BOTH, ALL) is required.' };
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
