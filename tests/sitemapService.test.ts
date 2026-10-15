import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { generateDynamicSitemap, isExcludedSearchOrFilterUrl, escapeXml } from '../src/services/sitemapService';
import { generateSitemapXml, generateSitemap } from '../src/utils/sitemapGenerator';

describe('Dynamic Sitemap Generator Service & Utility', () => {
  it('1. Generates a valid XML sitemap string with XML 0.9 urlset schema header and footer', () => {
    const xml = generateSitemapXml();
    assert.ok(typeof xml === 'string');
    assert.ok(xml.startsWith('<?xml version="1.0" encoding="UTF-8"?>'));
    assert.ok(xml.includes('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'));
    assert.ok(xml.endsWith('</urlset>'));
  });

  it('2. Includes static hubs, state pages, opportunities, tenders, schemes, questions, and official sources', () => {
    const result = generateDynamicSitemap();
    assert.ok(result.totalUrls > 100, `Expected > 100 URLs, got ${result.totalUrls}`);
    assert.ok(result.categoryBreakdown.hubs >= 16);
    assert.ok(result.categoryBreakdown.states >= 30);
    assert.ok(result.categoryBreakdown.sectors >= 10);
    assert.ok(result.categoryBreakdown.opportunities > 0);
    assert.ok(result.categoryBreakdown.tenders > 0);
    assert.ok(result.categoryBreakdown.questions > 0);
    assert.ok(result.categoryBreakdown.officialSources > 0);
  });

  it('3. Strictly enforces Phase 9 subsidy quarantine rules (only 4 verified subsidies in sitemap)', () => {
    const xml = generateSitemapXml();
    assert.ok(!xml.includes('/subsidies/sub-836'));
    assert.ok(!xml.includes('/subsidies/SUB-836'));
  });

  it('4. Excludes search, filter, and query parameter URLs from sitemap', () => {
    assert.equal(isExcludedSearchOrFilterUrl('/opportunities?page=2'), true);
    assert.equal(isExcludedSearchOrFilterUrl('/search'), true);
    assert.equal(isExcludedSearchOrFilterUrl('/filter/all'), true);
    assert.equal(isExcludedSearchOrFilterUrl('/opportunities/haryana-industrial-project'), false);
  });

  it('5. Properly escapes XML characters in URLs', () => {
    assert.equal(escapeXml('https://sarkarsaathi.org/test?a=1&b=2'), 'https://sarkarsaathi.org/test?a=1&amp;b=2');
    assert.equal(escapeXml('https://sarkarsaathi.org/<tag>'), 'https://sarkarsaathi.org/&lt;tag&gt;');
  });

  it('6. generateSitemap returns valid XML sitemap string directly', () => {
    const xml = generateSitemap();
    assert.ok(typeof xml === 'string');
    assert.ok(xml.startsWith('<?xml version="1.0" encoding="UTF-8"?>'));
    assert.ok(xml.includes('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'));
    assert.ok(xml.endsWith('</urlset>'));
  });
});
