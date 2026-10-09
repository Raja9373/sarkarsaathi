# SarkarSaathi Question Intelligence — Phase 2 of 8
## Master Question Database & Taxonomy Reconciliation Report

**Project:** https://sarkarsaathi.org/  
**Phase:** 2 of 8 (Master Question Database & Taxonomy Only)  
**Execution Date:** October 9, 2026  
**Artifacts Generated & Preserved:**
- `/research/question_bank.json` (Enriched Master Question Database conforming to v1 schema)
- `/research/question_schema.json` (Machine-readable JSON Schema specification)
- `/research/QUESTION_TAXONOMY.md` (Controlled taxonomy & domain classification)
- `/research/QUESTION_INTELLIGENCE_PHASE_2.md` (This data quality & reconciliation report)
- `/research/backup_phase1_question_bank.json` (Immutable backup of Phase 1 raw dataset)
- `/research/backup_phase1_QUESTION_INTELLIGENCE_PHASE_1.md` (Immutable backup of Phase 1 report)

---

## 1. Phase 1 vs. Phase 2 Reconciliation

During Step 1 of Phase 2, a complete line-by-line inspection and script audit of the raw Phase 1 dataset (`research/question_bank.json`) was conducted. 

### Critical Reconciliation Findings:
1. **Actual Database Size:** The Phase 1 dataset contained **49 distinct question objects**, not 40. 
   - Breakdown by category in the actual JSON:
     - Government Investments: 15 records (`Q-GI-001` through `Q-GI-015`)
     - Investment Schemes: 7 records (`Q-IS-001` through `Q-IS-007`)
     - Subsidies & Benefits: 4 records (`Q-SB-001` through `Q-SB-004`)
     - Opportunities: 3 records (`Q-OPP-001` through `Q-OPP-003`)
     - Tenders: 5 records (`Q-TND-001` through `Q-TND-005`)
     - News & Updates: 3 records (`Q-NW-001` through `Q-NW-003`)
     - Official Sources: 3 records (`Q-OS-001` through `Q-OS-003`)
     - Comparisons: 5 records (`Q-CMP-001` through `Q-CMP-005`)
     - Tools & Calculators: 4 records (`Q-CALC-001` through `Q-CALC-004`)
   - Sum: $15 + 7 + 4 + 3 + 5 + 3 + 3 + 5 + 4 = 49$ records.
   - The Phase 1 text report contained a typographical arithmetic undercount stating "40 unique normalized question intents". The actual persisted database contained all 49 verified records. Every single record was preserved without omission.
2. **Provenance Distribution:**
   - Directly Google-Observed: **23 records**
   - Official Government FAQ Verified: **23 records**
   - Research-Derived Suggestions: **3 records**
   - Total: $23 + 23 + 3 = 49$ records.
3. **Alternate Phrasings & Raw Inquiry Volume:**
   - Each of the 49 canonical questions contains 3 curated multilingual alternate phrasings (English, Hindi, and Hinglish).
   - $49 \times 3 = 147$ alternate phrasings.
   - Total distinct user question phrasings tracked: $49 \text{ canonical} + 147 \text{ alternates} = 196$ distinct question strings.

---

## 2. Data Quality & Audit Metrics (Verified Exact Counts)

| Metric | Verified Count | Notes |
| :--- | :--- | :--- |
| **Actual Number of JSON Records** | **49** | All 49 records structured and preserved |
| **Unique Canonical Question Intents** | **49** | Zero duplicate canonical intents in database |
| **Google-Observed Records (`observed_on_google: true`)** | **23** | Verified via search snippets & PAA queries |
| **Official-Source-Derived Records (`official_gov_faq`)** | **23** | Verified via RBI, KVIC, GeM, myScheme, MoSPI, PIB, India Post |
| **Research-Derived Records (`research_derived_suggestion`)** | **3** | `Q-OPP-002`, `Q-OS-002`, `Q-CALC-004` |
| **Records Flagged for Editorial Review (`review_required: true`)** | **3** | All 3 research-derived records explicitly flagged |
| **Records Missing Source URLs** | **0** | 100% of records have valid, verified HTTP/S URLs |
| **Records Missing Language / Category / Intent** | **0** | 100% compliant with controlled vocabulary |
| **Exact Duplicates in Canonical Set** | **0** | Deduplicated at canonical intent level |
| **Near-Duplicates Grouped as Alternate Phrasings** | **147** | Phrasing variations stored in `alternate_phrasings` |
| **Records with Conflicting Provenance** | **0** | Provenance strictly separated |
| **Records Successfully Normalized** | **49** | Validated against `question_schema.json` |
| **Records Rejected** | **0** | No invalid or corrupt records encountered |

---

## 3. Canonical Schema Implementation

The dataset was updated to conform to the machine-readable schema defined in `/research/question_schema.json` ($id: `https://sarkarsaathi.org/schemas/question_schema.v1.json`).

### Key Schema Fields Added:
1. `canonical_question`: The preferred, formal phrasing for publication.
2. `normalized_question`: Lowercase, normalized query representation for deduplication.
3. `alternate_phrasings`: Array of validated variations (including regional, colloquial, and Hindi/Hinglish phrasing).
4. `source_urls`: Array of live, verified source URLs replacing the singular string.
5. `observed_on_google`: Strict boolean indicating whether the query was directly observed in search results (`true` for 23 Google records, `false` for official gov FAQs and research suggestions).
6. `answer_status`: Initialized to `"UNANSWERED"` across all records (answering will occur in subsequent phases).
7. `verification_status`: `"GOV_VERIFIED"` for statutory government rules; `"NEEDS_REVIEW"` for research-derived suggestions.
8. `last_verified_at`: Tagged with ISO date `"2026-10-09"`.
9. `priority`: Assigned deterministic tiers (`CRITICAL`, `HIGH`, `MEDIUM`).
   - **CRITICAL (13 records):** PPF annual limit, PPF monthly 5th calculation, SSY age limit, SSY maturity tenure, SCSS ₹30 lakh limit, PMEGP cost/subsidy, Mudra loan categories, PM Surya Ghar subsidy slabs, PM-KISAN eKYC, GeM EMD exemption via Udyam, PPF vs SSY comparison, PMEGP vs Mudra comparison, PPF Calculator math.
   - **HIGH (32 records):** NRI PPF rules, PPF premature exit, SSY account count, SCSS VRS eligibility, SGB taxation, SGB premature exit, FRSB spread formula, MSSC, NSC vs KVP, PMEGP education criteria, PMEGP new units, Mudra collateral rules, Stand-Up India eligibility, PM Vishwakarma, PM Surya Ghar residential criteria, PMAY Urban, PAIMANA monitoring, IIG project stages, GeM caution money removal, CPPP Class 3 DSC, Corrigendum legal effect, MSE 15% price band, Rate revision schedule, Rate application to existing accounts, PIB Fact Check, myScheme engine, JanSamarth integration, SCSS vs POMIS comparison, SGB vs Gold comparison, GeM vs CPPP comparison, SSY calculator gap interest, POMIS monthly income math.
   - **MEDIUM (4 records):** FRSB transferability/collateral, PAIMANA pipeline vs tender bidding distinction, Central vs State Single Window portals distinction, Compounding vs simple interest principles.
10. `record_created_at` and `record_updated_at`: Explicit ISO timestamps for incremental auditing.

---

## 4. Question Relationship Network (Step 5)

Every record is now connected within a typed relationship graph via the `relationships` object and flat `related_question_ids` list. This enables graph traversal between:

1. **Broader / Narrower Clusters:**
   - `Q-GI-001` (PPF Deposit Ceilings) $\rightarrow$ Narrower: `Q-GI-002` (5th-of-Month Calculation) & `Q-GI-004` (Premature Exit).
   - `Q-GI-005` (SSY Age Limit) $\rightarrow$ Narrower: `Q-GI-006` (Twin / Account Limits) & `Q-GI-007` (21-Year Maturity).
   - `Q-IS-001` (PMEGP Ceilings) $\rightarrow$ Narrower: `Q-IS-002` (Education) & `Q-IS-003` (New vs Existing).
   - `Q-TND-001` (GeM EMD Exemption) $\rightarrow$ Narrower: `Q-TND-002` (Caution Money Removal).
2. **Comparison Bridges:**
   - `Q-CMP-001` connects `Q-GI-001` (PPF) and `Q-GI-005` (SSY).
   - `Q-CMP-002` connects `Q-GI-008` (SCSS) and `Q-CALC-003` (POMIS).
   - `Q-CMP-003` connects `Q-GI-010` (SGB Tax) and `Q-GI-011` (SGB Redemption).
   - `Q-CMP-004` connects `Q-IS-001` (PMEGP) and `Q-IS-004` (Mudra).
   - `Q-CMP-005` connects `Q-TND-001` (GeM) and `Q-TND-003` (CPPP).
3. **Tool & Calculator Bindings:**
   - `Q-CALC-001` bound to `/tools` and related to `Q-GI-001` & `Q-GI-002`.
   - `Q-CALC-002` bound to `/tools` and related to `Q-GI-005` & `Q-GI-007`.
   - `Q-CALC-003` bound to `/tools` and related to `Q-CMP-002`.
   - `Q-CALC-004` bound to `/tools` and related to `Q-CALC-001` & `Q-CALC-003`.
4. **Official Source Bindings:**
   - Schemes explicitly link their primary implementing portal (e.g., `https://www.rbi.org.in`, `https://www.kviconline.gov.in`, `https://gem.gov.in`, `https://ipm.mospi.gov.in`, `https://www.myscheme.gov.in`).

---

## 5. Controlled Taxonomy Summary

Documented in `/research/QUESTION_TAXONOMY.md`:
- **9 Core Categories:** Government Investments, Investment Schemes, Subsidies & Benefits, Opportunities, Tenders, News & Updates, Official Sources, Comparisons, Tools & Calculators.
- **32 Controlled Subcategories** across central savings schemes, MSME credit, infrastructure pipelines, e-procurement, and calculations.
- **9 Target Audiences:** citizens, senior_citizens, investors, women, msmes, startups, contractors_bidders, students, farmers.
- **9 Search Intents:** informational, navigational, transactional, comparison, eligibility_check, document_check, calculation, status_tracking, deadline_check.
- **Extensible Schema:** Ready for future dimensions (`jurisdiction_type`, `ministry_id`, `product_code`, `sector`).

---

## 6. Verification & System Health

1. **Schema Validation:** Executed schema validation script against all 49 JSON objects in `/research/question_bank.json` using `/research/question_schema.json`. Zero errors detected.
2. **Production Code Safeguard:**
   - Production application code modified: **NO**
   - UI / components modified: **NO**
   - Routes or router logic modified: **NO**
   - Catalogues or repositories modified: **NO**
   - Sitemaps modified: **NO**
   - Auto-update / ingestion settings modified: **NO**
   - Compilation status: Applet compiles cleanly with zero errors.
