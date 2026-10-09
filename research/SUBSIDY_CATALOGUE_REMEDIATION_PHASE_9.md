# SarkarSaathi.org — Phase 9: Safe Subsidy Catalogue Remediation Report

**Execution Document:** `research/SUBSIDY_CATALOGUE_REMEDIATION_PHASE_9.md`  
**Execution Date:** 2026-10-09  
**Status:** Completed & Validated  
**Pre-Remediation Baseline Total Sitemap URLs:** 12,016  
**Post-Remediation Total Sitemap URLs:** 11,020 (Excluding 996 quarantined unverified subsidy records)  
**Total Subsidies in Catalogue:** 1,000 (Preserved 100% without data loss)  
**Published Curated Schemes:** 4 (`SUB-001`, `SUB-002`, `SUB-003`, `SUB-004`)  
**Quarantined Algorithmic Placeholders:** 996 (`SUB-005` to `SUB-1000`)  

---

## 1. Executive Summary & Root Cause Confirmation

The Google Search Console URL inspection issue affecting `/subsidies/gov-subsidy-benefit-scheme-836-housing` (and the wider `/subsidies/` namespace) reported:
- **Status:** *Discovered – currently not indexed*
- **Referring page:** *None detected*
- **Last crawl:** *N/A*

Our targeted authenticity audit confirmed that 996 out of 1,000 subsidy records in SarkarSaathi's repository were programmatically generated placeholder records created across `subsidiesPilotData.ts` (records `SUB-005` to `SUB-050`) and ten batch generator files (`subsidiesBatch1.ts` to `subsidiesBatch10.ts`, records `SUB-051` to `SUB-1000`).

These 996 records exhibited:
1. Formula-derived titles (`Government Subsidy & Incentive Scheme #${index} - ${sector} (${state})`).
2. Formula-derived benefit amounts (`₹${(index * 25000 + 100000)}`).
3. Formulaic benefit percentages and minimum investments.
4. Generic portal links pointing to `dbtbharat.gov.in` or `myscheme.gov.in` root domains without scheme-specific circulars.
5. A hardcoded `VERIFIED` status badge that was factually unsupported by government statutory gazettes.

In accordance with Phase 9 instructions, a **strictly scoped, reversible remediation** has been implemented. No data was deleted. All 1,000 records are preserved in the repository and in an independent research archive.

---

## 2. Baseline & Verification Ledger

| Metric | Pre-Remediation Baseline | Post-Remediation Value | Status / Impact |
| :--- | :--- | :--- | :--- |
| **Sovereign Investments** | 230 | 230 | Preserved Unchanged |
| **Investment Schemes** | 71 | 71 | Preserved Unchanged |
| **Opportunities** | 10,500 | 10,500 | Preserved Unchanged |
| **Tenders** | 30 | 30 | Preserved Unchanged |
| **News & Updates** | 30 | 30 | Preserved Unchanged |
| **Official Sources** | 54 | 54 | Preserved Unchanged |
| **Published Questions** | 143 | 143 | Preserved Unchanged |
| **Total Subsidies Catalogue** | 1,000 | 1,000 | **100% Preserved (0 records deleted)** |
| **Verified Published Subsidies** | 4 | 4 | Curated schemes active and indexed |
| **Quarantined Subsidies** | 0 | 996 | Editorial review status applied |
| **Subsidies in Public Sitemap** | 1,000 | 4 | 996 unverified URLs excluded |
| **Total URLs in Sitemap** | 12,016 | 11,020 | Clean, verified canonical URLs |

---

## 3. Detailed Actions Taken

### A. Pre-Modification Backups
All affected files were backed up with date stamping prior to any code modification:
- `backups/phase9/subsidiesPilotData.ts.bak`
- `backups/phase9/SubsidyRepository.ts.bak`
- `backups/phase9/sitemapGenerator.ts.bak`
- `backups/phase9/sitemap.xml.bak`
- `backups/phase9/App.tsx.bak`
- `backups/phase9/SubsidyViews.tsx.bak`

### B. Research Archive Preservation
All 996 unverified records were serialized into a permanent, version-controlled research archive:
- **File:** `research/quarantined_subsidies_archive.json`
- **Count:** Exactly 996 records with their complete schema metadata, formulas, and sector mappings.

### C. Factual Correction of Misrepresentation
1. **Misleading Badges Removed:** Quarantined items no longer present the `VERIFIED` green badge. Instead, they display an amber `EDITORIAL REVIEW` badge with an alert indicator.
2. **Provenance Field Updates:**
   - `verificationStatus`: Changed from `'VERIFIED'` to `'UNVERIFIED'`.
   - `publicationState`: Set to `'QUARANTINED'` (published only for the 4 curated schemes).
   - `authenticityClassification`: Set to `'GENERIC_OR_SYNTHETIC_SUSPECTED'`.
   - `editorialReviewStatus`: Set to `'REQUIRES_OFFICIAL_EVIDENCE'`.
3. **Detail View Warning:** When an accessible quarantined page (e.g. `gov-subsidy-benefit-scheme-836-housing`) is viewed by a user, an explicit **Editorial Review & Data Authenticity Notice** is displayed:
   > *"This entry is a provisional record currently in quarantine for editorial review. Scheme parameters, benefit ceilings, and official guidelines are pending confirmation against statutory gazette notifications or ministry portals. Do not rely on these figures for financial planning."*

### D. Public Indexing & Sitemap Remediation
1. **Sitemap Generation:** `src/utils/sitemapGenerator.ts` was updated so that only verified, published subsidy records (`publicationState === 'PUBLISHED' || verificationStatus === 'VERIFIED'`) are included in `public/sitemap.xml`.
   - Total sitemap URLs reduced from 12,016 to 11,020 (exactly 996 URLs excluded).
   - Sitemap XML validation: PASS (zero duplicate URLs, zero unescaped ampersands).
2. **Search Engine Directives (`noindex`):**
   - For all 996 quarantined subsidy pages, `src/App.tsx` dynamically sets `noIndex: true` (`<meta name="robots" content="noindex, nofollow" />`).
   - Browser title for quarantined items reflects `(Under Review) - SarkarSaathi` to prevent snippet deception.
   - The pages remain accessible without 404 breaks for existing users, but search engines are instructed not to index them.

### E. Curated Records Maintained
The 4 individually curated, real statutory schemes remain fully published with active sitemap inclusion and green verification badges:
1. `SUB-001` — **PM Surya Ghar: Muft Bijli Yojana (Rooftop Solar Subsidy)** (`pmsuryaghar.gov.in`)
2. `SUB-002` — **Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)** (`pmkisan.gov.in`)
3. `SUB-003` — **PM Street Vendor AtmaNirbhar Nidhi (PM SVANidhi)** (`pmsvanidhi.mohua.gov.in`)
4. `SUB-004` — **Prime Minister’s Employment Generation Programme (PMEGP)** (`kviconline.gov.in`)

---

## 4. Remediation Verification & Test Results

Three comprehensive test suites were executed with 100% pass rates:

1. **`tests/subsidyRemediation.test.ts` (6/6 tests passing):**
   - Catalogue count preservation: exactly 1,000 records.
   - Partition check: exactly 4 published, 996 quarantined.
   - Public sitemap count: exactly 4 subsidies, 11,020 total URLs.
   - Representative case `SUB-836`: verified as `UNVERIFIED`/`QUARANTINED`, excluded from sitemap.
   - Research archive check: `quarantined_subsidies_archive.json` verified with 996 records.
   - Remediation audit script: deterministic values matching production state.

2. **`tests/questionIntakeFreshness.test.ts` (10/10 tests passing):**
   - Complete intake validation, duplicate detection, and review gating preserved.

3. **`tests/questionPerformancePrioritization.test.ts` (10/10 tests passing):**
   - Performance prioritization and SEO boundary preserved.

4. **Technical SEO Audit (`scripts/audit-phase6-seo.ts`):**
   - All 17 checks passed with zero errors.

5. **Application Build (`npm run build`):**
   - TypeScript compilation: SUCCESS (0 errors).
   - Vite bundle creation: SUCCESS.
