import fs from 'fs';
import path from 'path';
import { InvestmentRepository, InvestmentSchemeRepository, OpportunityRepository, TenderRepository } from '../infrastructure/repositories/InvestmentRepository';
import { NewsRepository } from '../infrastructure/repositories/NewsRepository';
import { SubsidyRepository } from '../infrastructure/repositories/SubsidyRepository';
import { addStateOfficialSources } from './officialSources';

const baseUrl = 'https://sarkarsaathi.org';

const hubs = [
  '/',
  '/investments',
  '/investment-schemes',
  '/opportunities',
  '/tenders',
  '/news',
  '/subsidies',
  '/official-sources',
  '/comparisons',
  '/tools',
  '/about',
  '/contact',
  '/privacy-policy',
  '/disclaimer',
  '/terms'
];

const repoMap = [
  { repo: new InvestmentRepository(), path: '/investments' },
  { repo: new InvestmentSchemeRepository(), path: '/investment-schemes' },
  { repo: new OpportunityRepository(), path: '/opportunities' },
  { repo: new TenderRepository(), path: '/tenders' },
  { repo: new NewsRepository(), path: '/news' },
  { repo: new SubsidyRepository(), path: '/subsidies' }
];

export const generateSitemap = () => {
  let urls = hubs.map(h => `  <url>\n    <loc>${baseUrl}${h}</loc>\n  </url>`).join('\n');

  repoMap.forEach(({ repo, path }) => {
    const items = repo.getAll();
    urls += '\n' + items.map(i => `  <url>\n    <loc>${baseUrl}${path}/${(i as any).slug}</loc>\n  </url>`).join('\n');
  });

  const officialSources = addStateOfficialSources([]);
  urls += '\n' + officialSources.map(s => `  <url>\n    <loc>${baseUrl}/official-sources/${s.name.toLowerCase().replace(/ /g, '-')}</loc>\n  </url>`).join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully in public/sitemap.xml');
};
