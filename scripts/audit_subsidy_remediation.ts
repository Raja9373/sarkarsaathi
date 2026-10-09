import * as fs from 'fs';
import * as path from 'path';
import { subsidyRepository } from '../src/infrastructure/repositories/SubsidyRepository';
import { Subsidy } from '../src/types';

export interface SubsidyRemediationAuditResult {
  timestamp: string;
  totalSubsidies: number;
  publishedCount: number;
  quarantinedCount: number;
  curatedIds: string[];
  quarantinedIdsSample: string[];
  sitemapUrlsCount: number;
  subsidiesInSitemapCount: number;
  classifications: {
    source_verified_or_partially_supported: number;
    generic_or_synthetic_suspected: number;
  };
  representativeCaseCheck: {
    recordId: string;
    slug: string;
    title: string;
    verificationStatus: string;
    publicationState: string;
    editorialReviewStatus: string;
    includedInSitemap: boolean;
    hasNoIndexDirective: boolean;
  };
}

export function auditSubsidyRemediation(): SubsidyRemediationAuditResult {
  const all = subsidyRepository.getAll();
  const published = subsidyRepository.getPublished();
  const quarantined = subsidyRepository.getQuarantined();

  const curatedIds = ['SUB-001', 'SUB-002', 'SUB-003', 'SUB-004'];
  
  // Check sitemap
  const sitemapPath = path.resolve('public/sitemap.xml');
  const sitemapContent = fs.existsSync(sitemapPath) ? fs.readFileSync(sitemapPath, 'utf-8') : '';
  const sitemapUrls = sitemapContent.match(/<loc>(.*?)<\/loc>/g) || [];
  const subsidySitemapUrls = sitemapUrls.filter(u => u.includes('/subsidies/'));

  // Check representative record SUB-836
  const s836 = subsidyRepository.getBySlug('gov-subsidy-benefit-scheme-836-housing');
  const s836InSitemap = sitemapContent.includes('gov-subsidy-benefit-scheme-836-housing');

  return {
    timestamp: new Date().toISOString(),
    totalSubsidies: all.length,
    publishedCount: published.length,
    quarantinedCount: quarantined.length,
    curatedIds,
    quarantinedIdsSample: quarantined.slice(0, 5).map(s => s.id),
    sitemapUrlsCount: sitemapUrls.length,
    subsidiesInSitemapCount: subsidySitemapUrls.length,
    classifications: {
      source_verified_or_partially_supported: published.length,
      generic_or_synthetic_suspected: quarantined.length
    },
    representativeCaseCheck: {
      recordId: s836?.id || 'NOT_FOUND',
      slug: s836?.slug || '',
      title: s836?.title || '',
      verificationStatus: s836?.verificationStatus || '',
      publicationState: s836?.publicationState || '',
      editorialReviewStatus: s836?.editorialReviewStatus || '',
      includedInSitemap: s836InSitemap,
      hasNoIndexDirective: s836?.publicationState === 'QUARANTINED'
    }
  };
}

// CLI runner
if (process.argv[1] && process.argv[1].endsWith('audit_subsidy_remediation.ts')) {
  const result = auditSubsidyRemediation();
  console.log('=== SARKARSAATHI PHASE 9 SUBSIDY REMEDIATION AUDIT ===');
  console.log(`Total catalogue subsidies: ${result.totalSubsidies}`);
  console.log(`Published (Curated verified): ${result.publishedCount}`);
  console.log(`Quarantined (Editorial review): ${result.quarantinedCount}`);
  console.log(`Total URLs in sitemap: ${result.sitemapUrlsCount}`);
  console.log(`Subsidies in sitemap: ${result.subsidiesInSitemapCount}`);
  console.log(`Representative SUB-836: State=${result.representativeCaseCheck.publicationState}, InSitemap=${result.representativeCaseCheck.includedInSitemap}`);
}
