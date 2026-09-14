import fs from 'fs';
import path from 'path';
import { MockNewsRepository } from '../infrastructure/repositories/NewsRepository';
import { MockInvestmentRepository } from '../infrastructure/repositories/MockInvestmentRepository';
import { MockOpportunityRepository } from '../infrastructure/repositories/OpportunityRepository';
import { MockTenderRepository } from '../infrastructure/repositories/TenderRepository';
import { MockInvestmentSchemeRepository } from '../infrastructure/repositories/InvestmentSchemeRepository';

export async function exportCataloguesToJSON(outputDir: string = './exports') {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const timestamp = new Date().toISOString();

  const newsRepo = new MockNewsRepository();
  const investmentRepo = new MockInvestmentRepository();
  const opportunityRepo = new MockOpportunityRepository();
  const tenderRepo = new MockTenderRepository();
  const schemeRepo = new MockInvestmentSchemeRepository();

  const exportData = {
    metadata: {
      exportedAt: timestamp,
      generator: 'SarkarSaathi Safe Catalogue Exporter'
    },
    catalogues: {
      investments: await investmentRepo.getAll(),
      opportunities: await opportunityRepo.getAll(),
      tenders: await tenderRepo.getAll(),
      news: await newsRepo.getAll(),
      schemes: await schemeRepo.getAll()
    }
  };

  const outputPath = path.join(outputDir, `catalogues_export_${Date.now()}.json`);
  fs.writeFileSync(outputPath, JSON.stringify(exportData, null, 2), 'utf-8');
  console.log(`Catalogue exported successfully to ${outputPath}`);
  return outputPath;
}
