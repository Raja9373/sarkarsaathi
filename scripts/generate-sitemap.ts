import fs from 'fs';
import path from 'path';
import { generateSitemap } from '../src/utils/sitemapGenerator';

const xml = generateSitemap();
const targetPath = path.resolve(process.cwd(), 'public/sitemap.xml');
fs.writeFileSync(targetPath, xml, 'utf-8');
console.log('[Auto-Sitemap] Successfully synchronized public/sitemap.xml with live verified catalog.');
