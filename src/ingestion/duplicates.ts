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
      if (opp.projectId) this.opportunityProjectIds.add(opp.projectId.trim());
      if (opp.id) this.opportunityIds.add(opp.id);
      if (opp.slug) this.opportunitySlugs.add(opp.slug);
      if (opp.title && opp.sourceUrl) {
        this.opportunityFingerprints.add(`${opp.title.toLowerCase().trim()}|${opp.sourceUrl.toLowerCase().trim()}`);
      }
    }

    for (const tender of existingTenders) {
      if (tender.id) this.tenderIds.add(tender.id);
      if (tender.slug) this.tenderSlugs.add(tender.slug);
      if (tender.title && tender.sourceUrl) {
        this.tenderFingerprints.add(`${tender.title.toLowerCase().trim()}|${tender.sourceUrl.toLowerCase().trim()}`);
      }
    }
  }

  isOpportunityDuplicate(record: Partial<Opportunity>): { isDuplicate: boolean; reason?: string } {
    if (record.projectId && this.opportunityProjectIds.has(record.projectId.trim())) {
      return { isDuplicate: true, reason: `Duplicate Opportunity Project ID: ${record.projectId}` };
    }
    if (record.id && this.opportunityIds.has(record.id)) {
      return { isDuplicate: true, reason: `Duplicate Opportunity ID: ${record.id}` };
    }
    if (record.slug && this.opportunitySlugs.has(record.slug)) {
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
    if (record.id && this.tenderIds.has(record.id)) {
      return { isDuplicate: true, reason: `Duplicate Tender ID: ${record.id}` };
    }
    if (record.slug && this.tenderSlugs.has(record.slug)) {
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

  registerOpportunity(record: Opportunity) {
    if (record.projectId) this.opportunityProjectIds.add(record.projectId.trim());
    if (record.id) this.opportunityIds.add(record.id);
    if (record.slug) this.opportunitySlugs.add(record.slug);
    if (record.title && record.sourceUrl) {
      this.opportunityFingerprints.add(`${record.title.toLowerCase().trim()}|${record.sourceUrl.toLowerCase().trim()}`);
    }
  }

  registerTender(record: Tender) {
    if (record.id) this.tenderIds.add(record.id);
    if (record.slug) this.tenderSlugs.add(record.slug);
    if (record.title && record.sourceUrl) {
      this.tenderFingerprints.add(`${record.title.toLowerCase().trim()}|${record.sourceUrl.toLowerCase().trim()}`);
    }
  }
}
