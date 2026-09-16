import { Opportunity, Tender } from '../types';

function normalizeUrl(url?: string): string {
  if (!url) return '';
  return url.trim().toLowerCase().replace(/^https?:\/\//, '').replace(/\/+$/, '');
}

function normalizeText(text?: string): string {
  if (!text) return '';
  return text.toLowerCase().trim().replace(/[^a-z0-9]/g, '');
}

export class DuplicateDetector {
  private opportunityProjectIds = new Set<string>();
  private opportunityIds = new Set<string>();
  private opportunitySlugs = new Set<string>();
  private opportunitySourceUrls = new Set<string>();
  private opportunityFingerprints = new Set<string>();
  private opportunityAuthorityLocationTitleFp = new Set<string>();

  private tenderIds = new Set<string>();
  private tenderSlugs = new Set<string>();
  private tenderSourceUrls = new Set<string>();
  private tenderFingerprints = new Set<string>();

  constructor(existingOpportunities: Opportunity[], existingTenders: Tender[]) {
    for (const opp of existingOpportunities) {
      this.registerOpportunity(opp);
    }

    for (const tender of existingTenders) {
      this.registerTender(tender);
    }
  }

  isOpportunityDuplicate(record: Partial<Opportunity>): { isDuplicate: boolean; reason?: string } {
    // 1. Check Project ID
    if (record.projectId) {
      const pid = record.projectId.trim().toLowerCase();
      if (this.opportunityProjectIds.has(pid)) {
        return { isDuplicate: true, reason: `Duplicate Opportunity Project ID: ${record.projectId}` };
      }
    }

    // 2. Check System ID
    if (record.id) {
      const id = record.id.trim().toLowerCase();
      if (this.opportunityIds.has(id)) {
        return { isDuplicate: true, reason: `Duplicate Opportunity ID: ${record.id}` };
      }
    }

    // 3. Check Slug
    if (record.slug) {
      const slug = record.slug.trim().toLowerCase();
      if (this.opportunitySlugs.has(slug)) {
        return { isDuplicate: true, reason: `Duplicate Opportunity Slug: ${record.slug}` };
      }
    }

    // 4. Check Normalized Source URL
    const normUrl = normalizeUrl(record.sourceUrl);
    if (normUrl && normUrl !== 'india-investment-grid.gov.in' && normUrl !== 'investindia.gov.in') {
      if (this.opportunitySourceUrls.has(normUrl)) {
        return { isDuplicate: true, reason: `Duplicate Opportunity Official Source URL: ${record.sourceUrl}` };
      }
    }

    // 5. Check Title + Source URL Fingerprint
    if (record.title && record.sourceUrl) {
      const fp = `${normalizeText(record.title)}|${normUrl}`;
      if (this.opportunityFingerprints.has(fp)) {
        return { isDuplicate: true, reason: `Duplicate Opportunity Title & Source URL Fingerprint` };
      }
    }

    // 6. Check Authority + Location + Normalized Title Fingerprint
    if (record.title && (record.authority || record.sourceAuthority)) {
      const authNorm = normalizeText(record.authority || record.sourceAuthority);
      const locNorm = normalizeText(record.state || record.location || record.district || '');
      const titleNorm = normalizeText(record.title);
      const altFp = `${authNorm}|${locNorm}|${titleNorm}`;
      if (this.opportunityAuthorityLocationTitleFp.has(altFp)) {
        return { isDuplicate: true, reason: `Duplicate Opportunity Authority, Location & Title match` };
      }
    }

    return { isDuplicate: false };
  }

  isTenderDuplicate(record: Partial<Tender>): { isDuplicate: boolean; reason?: string } {
    const refId = (record.id || (record as any).tenderId || (record as any).referenceId || (record as any).tenderRefNumber)?.toString().trim().toLowerCase();
    if (refId && this.tenderIds.has(refId)) {
      return { isDuplicate: true, reason: `Duplicate Tender ID / Reference ID: ${refId}` };
    }
    if (record.slug) {
      const slug = record.slug.trim().toLowerCase();
      if (this.tenderSlugs.has(slug)) {
        return { isDuplicate: true, reason: `Duplicate Tender Slug: ${record.slug}` };
      }
    }
    const normUrl = normalizeUrl(record.sourceUrl);
    if (normUrl && this.tenderSourceUrls.has(normUrl)) {
      return { isDuplicate: true, reason: `Duplicate Tender Source URL: ${record.sourceUrl}` };
    }
    if (record.title && record.sourceUrl) {
      const fp = `${normalizeText(record.title)}|${normUrl}`;
      if (this.tenderFingerprints.has(fp)) {
        return { isDuplicate: true, reason: `Duplicate Tender Title & Source URL Fingerprint` };
      }
    }
    return { isDuplicate: false };
  }

  registerOpportunity(record: Partial<Opportunity>) {
    if (record.projectId) this.opportunityProjectIds.add(record.projectId.trim().toLowerCase());
    if (record.id) this.opportunityIds.add(record.id.trim().toLowerCase());
    if (record.slug) this.opportunitySlugs.add(record.slug.trim().toLowerCase());
    const normUrl = normalizeUrl(record.sourceUrl);
    if (normUrl && normUrl !== 'india-investment-grid.gov.in' && normUrl !== 'investindia.gov.in') {
      this.opportunitySourceUrls.add(normUrl);
    }
    if (record.title && record.sourceUrl) {
      this.opportunityFingerprints.add(`${normalizeText(record.title)}|${normUrl}`);
    }
    if (record.title && (record.authority || record.sourceAuthority)) {
      const authNorm = normalizeText(record.authority || record.sourceAuthority);
      const locNorm = normalizeText(record.state || record.location || record.district || '');
      const titleNorm = normalizeText(record.title);
      this.opportunityAuthorityLocationTitleFp.add(`${authNorm}|${locNorm}|${titleNorm}`);
    }
  }

  registerTender(record: Partial<Tender>) {
    const refId = (record.id || (record as any).tenderId || (record as any).referenceId || (record as any).tenderRefNumber)?.toString().trim().toLowerCase();
    if (refId) this.tenderIds.add(refId);
    if (record.slug) this.tenderSlugs.add(record.slug.trim().toLowerCase());
    const normUrl = normalizeUrl(record.sourceUrl);
    if (normUrl) this.tenderSourceUrls.add(normUrl);
    if (record.title && record.sourceUrl) {
      this.tenderFingerprints.add(`${normalizeText(record.title)}|${normUrl}`);
    }
  }
}
