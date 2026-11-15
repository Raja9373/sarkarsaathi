import { Opportunity } from '../types';

/**
 * Programmatic SEO Quality Gate (Phase 6 & Phase 9)
 *
 * Ensures public XML sitemaps and indexation tags include only genuinely unique,
 * high-utility editorial pages and exclude mass-templated / numbered records
 * that cause soft-404, doorway, or duplicate-content penalties in Google Search.
 *
 * Note: All records remain accessible to users inside the application repository,
 * state/sector filters, and site search. Only search-engine indexation signals
 * (sitemap inclusion and robots meta) are filtered.
 */

const BULK_ID_PREFIXES = ['paimana-proj-', 'OPP-P1-'];
const BULK_TITLE_PATTERN =
  /#\d+\b|^(?:MoSPI PAIMANA Monitored Infrastructure Project|Strategic .+ Investment Project|Haryana Industrial Investment Project|GIDC Infrastructure Project|Delhi Urban Tech.+Project|DFCCIL Freight Project|PM MITRA Textile Park)\s+#?\d+/i;

export function isIndexableOpportunity(opp: Partial<Opportunity> | null | undefined): boolean {
  if (!opp) return false;
  const id = String(opp.id || '');
  const title = String(opp.title || '').trim();
  const desc = String(opp.description || '').trim();

  if (!title || desc.length < 80) {
    return false;
  }

  // Exclude bulk generated / numbered infrastructure or investment entries
  if (BULK_ID_PREFIXES.some((prefix) => id.startsWith(prefix))) {
    return false;
  }

  if (BULK_TITLE_PATTERN.test(title)) {
    return false;
  }

  // Require numbered suffix check for templated entries ending in digits unless curated call (e.g. BIG Call 29)
  if (/\bProject\s+\d+$/i.test(title) || /\bPark\s+\d+$/i.test(title)) {
    return false;
  }

  return true;
}

export function getOpportunityIndexSummary(opportunities: Opportunity[]): {
  total: number;
  indexable: number;
  noindexExcluded: number;
} {
  let indexable = 0;
  for (const opp of opportunities) {
    if (isIndexableOpportunity(opp)) {
      indexable++;
    }
  }
  return {
    total: opportunities.length,
    indexable,
    noindexExcluded: opportunities.length - indexable,
  };
}
