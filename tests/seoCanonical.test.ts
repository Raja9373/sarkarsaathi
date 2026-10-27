import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { normalizeCanonicalUrl, getInvestmentBreadcrumbSchema } from '../src/utils/seo';
import { investmentRepository, investmentSchemeRepository } from '../src/infrastructure/repositories/InvestmentRepository';

describe('SEO Canonical & Detail Page Verification Tests', () => {
  it('1. normalizeCanonicalUrl correctly formats homepage canonical', () => {
    assert.equal(normalizeCanonicalUrl('/'), 'https://sarkarsaathi.org/');
    assert.equal(normalizeCanonicalUrl(''), 'https://sarkarsaathi.org/');
  });

  it('2. normalizeCanonicalUrl correctly generates absolute self-referencing canonical for 54EC and other detail routes', () => {
    assert.equal(
      normalizeCanonicalUrl('/investments/54ec-capital-gain-bonds'),
      'https://sarkarsaathi.org/investments/54ec-capital-gain-bonds'
    );
    assert.equal(
      normalizeCanonicalUrl('/investments/public-provident-fund'),
      'https://sarkarsaathi.org/investments/public-provident-fund'
    );
    assert.equal(
      normalizeCanonicalUrl('/tenders'),
      'https://sarkarsaathi.org/tenders'
    );
  });

  it('3. 54EC Capital Gain Bonds record exists in investmentRepository and resolves by slug', () => {
    const item = investmentRepository.getBySlug('54ec-capital-gain-bonds');
    assert.ok(item, 'Expected 54EC Capital Gain Bonds record to exist in repository');
    assert.equal(item?.slug, '54ec-capital-gain-bonds');
    assert.equal(item?.category, 'Tax-Saving Bonds');
  });

  it('4. Confirms 54EC detail page is not assigned homepage canonical', () => {
    const canonical = normalizeCanonicalUrl('/investments/54ec-capital-gain-bonds');
    assert.notEqual(canonical, 'https://sarkarsaathi.org/');
    assert.equal(canonical, 'https://sarkarsaathi.org/investments/54ec-capital-gain-bonds');
  });

  it('5. Generates valid BreadcrumbList schema for Sovereign Investment detail pages', () => {
    const item = investmentRepository.getBySlug('54ec-capital-gain-bonds');
    assert.ok(item);
    const schema = getInvestmentBreadcrumbSchema('investments', item.title, item.slug);
    assert.equal(schema['@context'], 'https://schema.org');
    assert.equal(schema['@type'], 'BreadcrumbList');
    assert.equal(schema.itemListElement.length, 3);

    // Position 1: Home
    assert.equal(schema.itemListElement[0].position, 1);
    assert.equal(schema.itemListElement[0].name, 'Home');
    assert.equal(schema.itemListElement[0].item, 'https://sarkarsaathi.org/');

    // Position 2: Sovereign Investments
    assert.equal(schema.itemListElement[1].position, 2);
    assert.equal(schema.itemListElement[1].name, 'Sovereign Investments');
    assert.equal(schema.itemListElement[1].item, 'https://sarkarsaathi.org/investments');

    // Position 3: Detail Item
    assert.equal(schema.itemListElement[2].position, 3);
    assert.equal(schema.itemListElement[2].name, item.title);
    assert.equal(schema.itemListElement[2].item, 'https://sarkarsaathi.org/investments/54ec-capital-gain-bonds');
  });

  it('6. Generates valid BreadcrumbList schema for Government Investment Scheme detail pages', () => {
    const item = investmentSchemeRepository.getBySlug('pli-large-scale-electronics');
    assert.ok(item, 'Expected pli-large-scale-electronics scheme to exist');
    const schema = getInvestmentBreadcrumbSchema('investment-schemes', item.title, item.slug);
    assert.equal(schema['@context'], 'https://schema.org');
    assert.equal(schema['@type'], 'BreadcrumbList');
    assert.equal(schema.itemListElement.length, 3);

    // Position 1: Home
    assert.equal(schema.itemListElement[0].position, 1);
    assert.equal(schema.itemListElement[0].name, 'Home');
    assert.equal(schema.itemListElement[0].item, 'https://sarkarsaathi.org/');

    // Position 2: Government Investment Schemes
    assert.equal(schema.itemListElement[1].position, 2);
    assert.equal(schema.itemListElement[1].name, 'Government Investment Schemes');
    assert.equal(schema.itemListElement[1].item, 'https://sarkarsaathi.org/investment-schemes');

    // Position 3: Detail Item
    assert.equal(schema.itemListElement[2].position, 3);
    assert.equal(schema.itemListElement[2].name, item.title);
    assert.equal(schema.itemListElement[2].item, `https://sarkarsaathi.org/investment-schemes/${item.slug}`);
  });
});

