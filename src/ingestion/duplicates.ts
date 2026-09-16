import { Opportunity, Tender } from '../types';

export class DuplicateDetector {
  private opportunityProjectIds = new Set<string>();
  private opportunityIds = new Set<string>();
  private opportunitySlugs = new Set<string>();
  private opportunityFingerprints = new Set<string>();

  private tenderIds = new Set<string>();
  private tenderSlugs = new Set<string>();
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
    if (record.projectId && this.opportunityProjectIds.has(record.projectId.trim())) {
      return { isDuplicate: true, reason: `Duplicate Opportunity Project ID: ${record.projectId}` };
    }
    if (record.id && this.opportunityIds.has(record.id.trim())) {
      return { isDuplicate: true, reason: `Duplicate Opportunity ID: ${record.id}` };
    }
    if (record.slug && this.opportunitySlugs.has(record.slug.trim())) {
      return { isDuplicate: true, reason: `Duplicate Opportunity Slug: ${record.slug}` };
    }
    if (record.title && record.sourceUrl) {
      const fp = `${record.title.toLowerCase().trim()}|${record.sourceUrl.toLowerCase().trim()}`;
      if (this.opportunityFingerprints.has(fp)) {
        return { isDuplicate: true, reason: `Duplicate Opportunity title & sourceUrl fingerprint` };
      }
    }
    return { isDuplicate: false };
  }

  isTenderDuplicate(record: Partial<Tender>): { isDuplicate: boolean; reason?: string } {
    const refId = (record.id || (record as any).tenderId || (record as any).referenceId || (record as any).tenderRefNumber)?.toString().trim();
    if (refId && this.tenderIds.has(refId)) {
      return { isDuplicate: true, reason: `Duplicate Tender ID / Reference ID: ${refId}` };
    }
    if (record.slug && this.tenderSlugs.has(record.slug.trim())) {
      return { isDuplicate: true, reason: `Duplicate Tender Slug: ${record.slug}` };
    }
    if (record.title && record.sourceUrl) {
      const fp = `${record.title.toLowerCase().trim()}|${record.sourceUrl.toLowerCase().trim()}`;
      if (this.tenderFingerprints.has(fp)) {
        return { isDuplicate: true, reason: `Duplicate Tender title & sourceUrl fingerprint` };
      }
    }
    return { isDuplicate: false };
  }

  registerOpportunity(record: Partial<Opportunity>) {
    if (record.projectId) this.opportunityProjectIds.add(record.projectId.trim());
    if (record.id) this.opportunityIds.add(record.id.trim());
    if (record.slug) this.opportunitySlugs.add(record.slug.trim());
    if (record.title && record.sourceUrl) {
      this.opportunityFingerprints.add(`${record.title.toLowerCase().trim()}|${record.sourceUrl.toLowerCase().trim()}`);
    }
  }

  registerTender(record: Partial<Tender>) {
    const refId = (record.id || (record as any).tenderId || (record as any).referenceId || (record as any).tenderRefNumber)?.toString().trim();
    if (refId) this.tenderIds.add(refId);
    if (record.slug) this.tenderSlugs.add(record.slug.trim());
    if (record.title && record.sourceUrl) {
      this.tenderFingerprints.add(`${record.title.toLowerCase().trim()}|${record.sourceUrl.toLowerCase().trim()}`);
    }
  }
}
