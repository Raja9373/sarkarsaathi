# SarkarSaathi.org — Targeted Subsidy Data Authenticity Audit
**Document:** `research/SUBSIDY_DATA_AUTHENTICITY_AUDIT.md`  
**Audit Target:** Subsidy Data Authenticity & Google Search Console Indexing Investigation  
**Representative Page Audited:** `/subsidies/gov-subsidy-benefit-scheme-836-housing`  
**Audit Execution Mode:** Strict Zero-Modification Read-Only Audit  
**Date of Audit:** October 9, 2026  

---

## 1. Executive Summary

This targeted audit investigated the data authenticity, provenance, and Google Search Console (GSC) indexation status of subsidy records on SarkarSaathi.org, focusing on representative URL `/subsidies/gov-subsidy-benefit-scheme-836-housing`.

### Key Findings
1. **Root Cause of GSC "Discovered – currently not indexed":**
   - The representative page is part of a programmatically generated batch of **996 synthetic records** (out of a 1,000-record catalogue).
   - Content on these pages is produced via programmatic loop generation using arithmetic formulae (e.g., `index * 25000 + 100000`), generic titles with `#${index}`, circular eligibility text, invented authorities ("Housing Subsidy Board"), and root-domain links (`https://www.dbtbharat.gov.in` and `https://www.myscheme.gov.in`).
   - The URL was discovered by Google solely via `public/sitemap.xml` (line 34,966) without any strong internal referral path ("referring page: none detected" because it sits at pagination depth page 70).
   - Google's automated quality classifiers detected repetitive, template-generated pages with low information gain and deferred indexing under "Discovered – currently not indexed".
2. **Authenticity Breakdown:**
   - **4 records (0.4%)** (`SUB-001` to `SUB-004`) in `subsidiesPilotData.ts` are authentic, individually curated schemes with real official portals.
   - **996 records (99.6%)** across `additionalPilot` and `subsidiesBatch1.ts` through `subsidiesBatch10.ts` are algorithmically synthesized templates lacking official gazette or deep source URL backing.

---

## 2. Task 1: Complete Ingestion Pipeline & Codebase Trace for SUB-836

### Exact Record Metadata
- **ID:** `SUB-836`
- **Slug:** `gov-subsidy-benefit-scheme-836-housing`
- **Title:** `Government Subsidy & Incentive Scheme #836 - Housing (Karnataka)`
- **Sitemap Position:** `public/sitemap.xml` line 34,966; `dist/sitemap.xml` line 34,966.
- **Catalogue Position:** Index 835 of 1,000 (page 70 of the `/subsidies` catalogue view at 12 records per page).

### Original Source File & Generation Code
- **Source File:** `/src/infrastructure/repositories/subsidiesBatch9.ts` (lines 3–45)
- **Data-Generation Code:**
```typescript
export const SUBSIDIES_BATCH_9: Subsidy[] = Array.from({ length: 100 }, (_, i) => {
  const index = i + 801; // When i = 35, index = 836
  const id = `SUB-${String(index).padStart(3, '0')}`;
  const sector = 'Housing';
  const state = 'Karnataka';
  
  return {
    id,
    slug: `gov-subsidy-benefit-scheme-${index}-${sector.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
    title: `Government Subsidy & Incentive Scheme #${index} - ${sector} (${state})`,
    shortDescription: `Verified government financial assistance and subsidy scheme under ${sector} for eligible beneficiaries in ${state}.`,
    description: `Official state government subsidy program designed to provide direct financial support, capital subsidy, or interest subvention for participants in the ${sector} sector.`,
    category: `${sector} Subsidies`,
    subcategory: 'Financial Assistance',
    benefitType: 'Financial Assistance',
    beneficiaryType: 'Economically Weaker Sections',
    state,
    ministry: `Ministry of ${sector}`,
    department: 'Department of Urban Development',
    authority: `${sector} Subsidy Board`,
    eligibility: `Residents meeting scheme criteria under ${sector} guidelines in ${state}.`,
    benefits: `Financial subsidy coverage ranging from 15% to 50% of eligible project cost or direct benefit disbursement up to ₹${(index * 25000 + 100000).toLocaleString('en-IN')}.`,
    subsidyAmount: `Up to ₹${(index * 25000 + 100000).toLocaleString('en-IN')}`,
    subsidyPercentage: '50% of eligible project cost',
    maximumBenefit: `₹${(index * 50000 + 200000).toLocaleString('en-IN')}`,
    minimumInvestment: `₹${(index * 10000 + 50000).toLocaleString('en-IN')}`,
    documentsRequired: ['Aadhaar Card', 'Income Certificate', 'Land Proof'],
    applicationProcess: 'Apply online through the state portal.',
    applicationMode: 'Online Portal',
    applicationUrl: 'https://www.dbtbharat.gov.in',
    startDate: '2026-01-01',
    endDate: '2028-12-31',
    status: 'ACTIVE',
    officialSource: `State Ministry of ${sector}`,
    officialSourceUrl: 'https://www.dbtbharat.gov.in',
    lastVerified: '2026-09-18',
    sourceNotes: 'Verified official record.',
    disclaimer: 'Subject to scheme guidelines.',
    sourceUrl: 'https://www.myscheme.gov.in',
    sourceAuthority: `${sector} Portal`,
    verificationStatus: 'VERIFIED'
  };
});
```

### Ingestion Pipeline & Execution Flow
1. **Module Assembly:** `src/infrastructure/repositories/subsidiesPilotData.ts` (lines 10, 241) imports `SUBSIDIES_BATCH_9` and appends it to `VERIFIED_SUBSIDIES_PILOT`.
2. **Repository Instantiation:** `src/infrastructure/repositories/SubsidyRepository.ts` instantiates `SubsidyRepository` with `items = [...VERIFIED_SUBSIDIES_PILOT]` (total count 1,000) and indexes it in `IndexedCatalogStore<Subsidy>`.
3. **Application Routing:** `src/App.tsx` routes `/subsidies/:slug` by querying `subsidyRepository.getBySlug(slug)` and rendering `SubsidyDetailView`.
4. **Sitemap Generation:** Static sitemap generator iterated over `subsidyRepository.getAll()`, generating 1,000 URLs under `/subsidies/`, including `/subsidies/gov-subsidy-benefit-scheme-836-housing`.

---

## 3. Task 2: Official Source Verification for Record #836

| Dimension | Value in Record #836 | Real Official Governance Reality | Supported by Identifiable Source? |
|---|---|---|---|
| **Official Scheme Name** | `Government Subsidy & Incentive Scheme #836 - Housing (Karnataka)` | No scheme exists with numbering `#836`. Real Karnataka housing schemes include *Dr. B.R. Ambedkar Nivas Yojana*, *Basava Vasathi Yojana*, and *Devaraj Urs Housing Scheme*. | **NO** (Fabricated programmatic label) |
| **Karnataka Applicability** | `Karnataka` | Assigned merely because `state = 'Karnataka'` was fixed for all 100 records in Batch 9. | **NO** (Not linked to any Karnataka gazette) |
| **Ministry / Department** | `Ministry of Housing` / `Department of Urban Development` | In reality, the Union ministry is Ministry of Housing and Urban Affairs (MoHUA). Karnataka state housing is governed by Department of Housing / Rajiv Gandhi Housing Corporation Limited (RGHCL). | **NO** (Synthetic nomenclature) |
| **Implementing Authority** | `Housing Subsidy Board` | No such statutory body exists in Karnataka or Government of India. | **NO** (Fictional entity) |
| **Eligibility Criteria** | `"Residents meeting scheme criteria under Housing guidelines in Karnataka."` | Pure tautology; provides zero verifiable criteria (income limits, BPL/EWS thresholds, land ownership rules). | **NO** (Generic placeholder) |
| **Claimed Benefit Amount** | Subsidy: Up to `₹2,10,00,000` (₹2.1 Crore)<br>Max benefit: `₹4,20,00,000` (₹4.2 Crore)<br>Min investment: `₹84,10,000` | Calculated programmatically: `836 * 25000 + 100000 = 2,10,00,000`. Claiming ₹2.1 Cr assistance with an ₹84.1 Lakh required investment for Economically Weaker Sections (EWS) is completely implausible (real EWS housing subsidies range between ₹1.2 Lakh and ₹2.5 Lakh). | **NO** (Synthetic arithmetic artefact) |
| **Status & Dates** | `ACTIVE` (2026-01-01 to 2028-12-31) | Arbitrary static string dates. | **NO** (No operational notification) |
| **Authoritative Source URLs** | `https://www.dbtbharat.gov.in` and `https://www.myscheme.gov.in` | Both point to national portal root domain homepages. Neither references scheme #836. | **NO** (Root domain placeholders) |
| **Verification Status** | `"VERIFIED"` / `"Verified official record."` | Hardcoded mock strings; zero verification was ever performed. | **FALSE CLAIM** in codebase |

---

## 4. Tasks 3, 4 & 5: Detailed Audit of 10 Representative Subsidy Records

| Record ID | Title | Source File | Source URLs Present | Evidence Fields / Formula Checked | Classification | Detailed Audit Reason |
|---|---|---|---|---|---|---|
| **SUB-836** | Government Subsidy & Incentive Scheme #836 - Housing (Karnataka) | `src/infrastructure/repositories/subsidiesBatch9.ts` | `https://www.myscheme.gov.in`<br>`https://www.dbtbharat.gov.in` | Index 836 formula: benefit ₹2,10,00,000 (`836*25000+100000`). Beneficiary: EWS. | **GENERIC_OR_SYNTHETIC_SUSPECTED** | Target audit record. Programmatically generated title with `#836`, formulaic benefit calculation, invented authority, and root portal URLs. |
| **SUB-835** | Government Subsidy & Incentive Scheme #835 - Housing (Karnataka) | `src/infrastructure/repositories/subsidiesBatch9.ts` | `https://www.myscheme.gov.in`<br>`https://www.dbtbharat.gov.in` | Index 835 formula: benefit ₹2,09,75,000 (`835*25000+100000`). | **GENERIC_OR_SYNTHETIC_SUSPECTED** | Adjacent record in Batch 9. Identical synthetic template; linear step of ₹25,000 from index 834; no statutory source. |
| **SUB-837** | Government Subsidy & Incentive Scheme #837 - Housing (Karnataka) | `src/infrastructure/repositories/subsidiesBatch9.ts` | `https://www.myscheme.gov.in`<br>`https://www.dbtbharat.gov.in` | Index 837 formula: benefit ₹2,10,25,000 (`837*25000+100000`). | **GENERIC_OR_SYNTHETIC_SUSPECTED** | Adjacent record in Batch 9. Identical synthetic template; formulaic benefit; no statutory source. |
| **SUB-801** | Government Subsidy & Incentive Scheme #801 - Housing (Karnataka) | `src/infrastructure/repositories/subsidiesBatch9.ts` | `https://www.myscheme.gov.in`<br>`https://www.dbtbharat.gov.in` | Index 801 formula: benefit ₹2,01,25,000 (`801*25000+100000`). | **GENERIC_OR_SYNTHETIC_SUSPECTED** | Start of Batch 9. First of 100 identical Karnataka housing items; all fields derived from template loop. |
| **SUB-900** | Government Subsidy & Incentive Scheme #900 - Housing (Karnataka) | `src/infrastructure/repositories/subsidiesBatch9.ts` | `https://www.myscheme.gov.in`<br>`https://www.dbtbharat.gov.in` | Index 900 formula: benefit ₹2,26,00,000 (`900*25000+100000`). | **GENERIC_OR_SYNTHETIC_SUSPECTED** | Terminal item of Batch 9. 100th consecutive synthetic record in the batch with identical placeholder text. |
| **SUB-016** | Verified Government Subsidy & Assistance Scheme #16 | `src/infrastructure/repositories/subsidiesPilotData.ts` (lines 181–228) | `https://www.dbtbharat.gov.in` | Index 16 formula: benefit ₹2,10,000 (`16*10000+50000`). State: Maharashtra. | **GENERIC_OR_SYNTHETIC_SUSPECTED** | Programmatically synthesized pilot record in `additionalPilot`. Category cycling (`categories[i % 5]`); generic title `#16`; generic ministry. |
| **SUB-060** | Government Subsidy & Incentive Scheme #60 - Housing & Urban Development (West Bengal) | `src/infrastructure/repositories/subsidiesBatch1.ts` (lines 3–63) | `https://www.myscheme.gov.in`<br>`https://www.dbtbharat.gov.in` | Index 60 formula: benefit ₹16,00,000 (`60*25000+100000`). State: West Bengal. | **GENERIC_OR_SYNTHETIC_SUSPECTED** | Batch 1 cyclic generation. Housing sector paired with West Bengal via modulo; formulaic financial values; root portal URLs. |
| **SUB-501** | Government Subsidy & Incentive Scheme #501 - MSME & Rural Industries (Central) | `src/infrastructure/repositories/subsidiesBatch6.ts` (lines 3–45) | `https://www.myscheme.gov.in`<br>`https://www.dbtbharat.gov.in` | Index 501 formula: benefit ₹1,26,25,000 (`501*25000+100000`). | **GENERIC_OR_SYNTHETIC_SUSPECTED** | Batch 6 start record. Synthesized MSME entity with formulaic subsidy amount and generic portal link. |
| **SUB-001** | PM Surya Ghar: Muft Bijli Yojana (Rooftop Solar Subsidy) | `src/infrastructure/repositories/subsidiesPilotData.ts` (lines 13–54) | `https://pmsuryaghar.gov.in` | Exact solar capacity slabs: ₹30,000/kW up to 2kW, max ₹78,000. Real portal: `pmsuryaghar.gov.in`. | **PARTIALLY_SUPPORTED** | Real, authentic central government scheme. Ministry is MNRE, eligibility and benefit rules match official cabinet approval. Marked PARTIALLY_SUPPORTED because live external HTTP fetch was not run in this offline audit. |
| **SUB-003** | PM Street Vendor AtmaNirbhar Nidhi (PM SVANidhi) | `src/infrastructure/repositories/subsidiesPilotData.ts` (lines 97–136) | `https://pmsvanidhi.mohua.gov.in` | Working capital loan ₹50,000 with 7% interest subvention. Real portal: `pmsvanidhi.mohua.gov.in`. | **PARTIALLY_SUPPORTED** | Real, authentic scheme under Ministry of Housing and Urban Affairs (MoHUA) & SIDBI. Real eligibility and dedicated application portal. Marked PARTIALLY_SUPPORTED due to offline audit constraint. |

---

## 5. Task 6: Repository-Wide Template Reuse Analysis

A full programmatic audit of all 1,000 records in `subsidyRepository` was executed:

| Catalogue Partition | Record IDs | Count | Generation Method | Content Reality |
|---|---|---|---|---|
| **`initialPilot`** | `SUB-001` – `SUB-004` | **4** | Manually written objects | Genuine central schemes (PM Surya Ghar, PM-KISAN, PM SVANidhi, PMEGP) with dedicated portals. |
| **`additionalPilot`** | `SUB-005` – `SUB-050` | **46** | `Array.from({ length: 46 })` | Synthetic template `#5` through `#50` with cyclic sectors and formulaic amounts (`index*10000+50000`). |
| **`SUBSIDIES_BATCH_1`** to **`5`** | `SUB-051` – `SUB-500` | **450** | 5 batches × 90 via `Array.from` | Synthetic template with cyclic sectors and states, formulaic amounts (`index*25000+100000`). |
| **`SUBSIDIES_BATCH_6`** to **`10`** | `SUB-501` – `SUB-1000` | **500** | 5 batches × 100 via `Array.from` | Synthetic template with fixed sectors/states per batch (e.g., Batch 9: 100 Karnataka Housing schemes). |
| **TOTAL CATALOGUE** | `SUB-001` – `SUB-1000` | **1,000** | Mixed (4 manual, 996 generated) | **99.6% Synthetic Template Reuse** |

### Verified Uniformity Indicators Across the 996 Synthetic Records:
1. **Title Pattern:** Exactly 996 records (99.6%) include `#` in their title (`Scheme #${index}`).
2. **Benefit Wording:** Exactly 996 records share identical boilerplate text: `"Financial subsidy coverage ranging from 15% to 50% of eligible project cost or direct benefit disbursement up to ₹..."` or `"Direct financial assistance and subsidy transfer."`.
3. **Application URL Diversity:** Across all 1,000 records, there are **only 5 distinct application URLs**:
   - `https://pmsuryaghar.gov.in` (1 record)
   - `https://pmkisan.gov.in` (1 record)
   - `https://pmsvanidhi.mohua.gov.in` (1 record)
   - `https://www.kviconline.gov.in` (1 record)
   - `https://www.dbtbharat.gov.in` (**996 records**)

---

## 6. Task 7: Completeness of Practical Scheme Information

An inspection of the 996 synthetic records against requirements for citizen utility showed complete absence of practical, actionable content:

1. **Application Instructions:**
   - Instead of step-by-step guidance (registration, form number, verification officer, processing timeline), records contain a single generic sentence: `"Apply online through the state portal."` or `"Apply online through the respective official ministry portal or DBT portal..."`.
2. **Eligibility Criteria:**
   - Contains circular tautologies: `"Residents meeting scheme criteria under Housing guidelines in Karnataka."` or `"Applicants meeting official scheme criteria and verified documentation standards."` Zero specific income, landholding, age, caste, or enterprise turnover criteria are provided.
3. **Official Contacts:**
   - Completely omitted. No helpline numbers, nodal officer designations, department addresses, or helpdesk email contacts exist.
4. **Authoritative Deep Links:**
   - 100% of synthetic records point only to root homepages (`https://www.dbtbharat.gov.in` and `https://www.myscheme.gov.in`). No specific scheme page, PDF notification, government order (GO), or circular is linked.

---

## 7. Task 8: Actionable Recommendations & Safe Corrections

### Decision Framework

```
                       ┌──────────────────────────────┐
                       │  1,000 Subsidy URLs Audited   │
                       └──────────────┬───────────────┘
                                      │
            ┌─────────────────────────┴─────────────────────────┐
            ▼                                                   ▼
┌───────────────────────────────┐               ┌──────────────────────────────┐
│  4 Genuine Schemes (0.4%)     │               │  996 Synthetic Schemes (99.6%)│
│  (SUB-001 to SUB-004)         │               │  (SUB-005 to SUB-1000)       │
└──────────────┬────────────────┘               └──────────────┬───────────────┘
               │                                               │
               ▼                                               ▼
┌───────────────────────────────┐               ┌──────────────────────────────┐
│ ACTION: KEEP & ENRICH         │               │ IMMEDIATE SAFETY ACTIONS:    │
│ • Retain in sitemap & index   │               │ 1. Remove from XML sitemap   │
│ • Add official helpline & deep│               │ 2. Set 'noindex, follow'     │
│   circular citations          │               │ 3. Quarantine in editorial   │
│                               │               │    backlog for replacement   │
└───────────────────────────────┘               └──────────────────────────────┘
```

### Recommended Minimal Next Actions:

1. **Preserve Catalogue Integrity in Dev (Zero-Destruction Principle):**
   - In accordance with the strict safety rules of this audit, **no production code, catalogues, routes, or sitemaps were modified during this turn**.
   - Do not delete records outright, as internal components, search views, and tests rely on catalogue size stability.

2. **Phase A: SEO Indexation De-Escalation (Safe Index Hygiene):**
   - **Remove Synthetic URLs from `public/sitemap.xml`:** Remove the 996 synthetic `/subsidies/gov-subsidy-benefit-scheme-*` and `/subsidies/verified-government-subsidy-scheme-*` URLs from the XML sitemap. Keep only verified subsidy pages (`/subsidies/pm-surya-ghar-muft-bijli-yojana`, etc.) and category hub pages. This immediately stops Google from crawling synthetic URLs.
   - **Inject `noindex, follow` Robots Meta Tag:** For any subsidy record where `id` matches `SUB-005` to `SUB-1000` (or `title` contains `#`), render `<meta name="robots" content="noindex, follow" />`. This cleanly instructs Google not to index the thin pages without creating 404 errors for existing visitors.

3. **Phase B: Editorial Quarantine & Progressive Replacement:**
   - **Quarantine:** Flag the 996 records internally as `editorialReviewStatus: 'QUARANTINED_SYNTHETIC'`.
   - **Progressive Replacement:** Replace synthetic records in batches with verified statutory schemes from official central and state portals:
     - Karnataka Housing: Replace with *Dr. B.R. Ambedkar Nivas Yojana*, *Basava Vasathi Yojana*, *Vajpayee Urban Housing Scheme* (with real RGHCL source links).
     - National Housing: Add *Pradhan Mantri Awas Yojana - Urban (PMAY-U 2.0)* and *PMAY-Gramin* with real MoHUA / MoRD circulars.
     - Agriculture: Add *PM-KUSUM Component A/B/C*, *Sub-Mission on Agricultural Mechanization (SMAM)*.

---

## 8. Limitations

1. **Offline Environment:** In compliance with zero-cost and offline safety policies, live HTTP network requests were not sent to `dbtbharat.gov.in` or `myscheme.gov.in`. All analyses were derived deterministically from the codebase repositories, ingestion pipelines, static XML sitemaps, and official statutory knowledge.
2. **Strict Non-Destructive Mode:** As mandated by the audit instructions, all catalogues, production code, sitemaps, and configurations remain 100% untouched.
