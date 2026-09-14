import { MockInvestmentRepository } from '../infrastructure/repositories/MockInvestmentRepository';
import { MockOpportunityRepository } from '../infrastructure/repositories/OpportunityRepository';
import { MockTenderRepository } from '../infrastructure/repositories/TenderRepository';
import { MockNewsRepository } from '../infrastructure/repositories/NewsRepository';
import { MockInvestmentSchemeRepository } from '../infrastructure/repositories/InvestmentSchemeRepository';

export async function verifyProductionDataIntegrity() {
  console.log('Running production data integrity guard...');

  const investmentRepo = new MockInvestmentRepository();
  const opportunityRepo = new MockOpportunityRepository();
  const tenderRepo = new MockTenderRepository();
  const newsRepo = new MockNewsRepository();
  const schemeRepo = new MockInvestmentSchemeRepository();

  const [investments, opportunities, tenders, news, schemes] = await Promise.all([
    investmentRepo.getAll(),
    opportunityRepo.getAll(),
    tenderRepo.getAll(),
    newsRepo.getAll(),
    schemeRepo.getAll()
  ]);

  const allDatasets = [
    { name: 'Investments', items: investments },
    { name: 'Opportunities', items: opportunities },
    { name: 'Tenders', items: tenders },
    { name: 'News', items: news },
    { name: 'Schemes', items: schemes }
  ];

  for (const dataset of allDatasets) {
    const ids = new Set<string>();
    const slugs = new Set<string>();

    for (const item of dataset.items) {
      // 1. Unique ID check
      if (!item.id) {
        throw new Error(`Data Integrity Error [${dataset.name}]: Record is missing an ID.`);
      }
      if (ids.has(item.id)) {
        throw new Error(`Data Integrity Error [${dataset.name}]: Duplicate ID detected: "${item.id}"`);
      }
      ids.add(item.id);

      // 2. Unique Slug check (where applicable)
      if ('slug' in item && typeof item.slug === 'string') {
        const slugVal = item.slug.trim();
        if (!slugVal) {
          throw new Error(`Data Integrity Error [${dataset.name}]: Record ${item.id} has an empty slug.`);
        }
        const uniqueSlugKey = `${dataset.name}:${slugVal}`;
        if (slugs.has(uniqueSlugKey)) {
          throw new Error(`Data Integrity Error [${dataset.name}]: Duplicate slug detected: "${slugVal}"`);
        }
        slugs.add(uniqueSlugKey);
      }

      // 4. Required fields check
      const itemTitle = item.title || ('name' in item ? (item as any).name : undefined) || ('schemeName' in item ? (item as any).schemeName : undefined);
      if (!itemTitle || typeof itemTitle !== 'string' || !itemTitle.trim()) {
        throw new Error(`Data Integrity Error [${dataset.name}]: Record ${item.id} is missing a valid title.`);
      }

      // 5. Official URL check (where applicable)
      if ('sourceUrl' in item && item.sourceUrl) {
        if (typeof item.sourceUrl !== 'string' || !item.sourceUrl.startsWith('http')) {
          throw new Error(`Data Integrity Error [${dataset.name}]: Record ${item.id} has an invalid sourceUrl.`);
        }
      }

      // 8. No sample/demo records in production datasets
      const titleToCheck = item.title || ('name' in item ? (item as any).name : '');
      if (item.id.toUpperCase().includes('SAMPLE') || (titleToCheck && typeof titleToCheck === 'string' && titleToCheck.toUpperCase().includes('[SAMPLE]'))) {
        throw new Error(`Data Integrity Error [${dataset.name}]: Sample/Demo record detected in production repository: "${item.id}"`);
      }
    }
  }

  console.log('Production data integrity verification PASSED successfully.');
  return true;
}
