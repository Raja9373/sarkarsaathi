# SarkarSaathi Question Intelligence — Phase 7 of 8
## Controlled Question Discovery, Evidence Freshness & Safe Update Pipeline

**Project:** https://sarkarsaathi.org/  
**Phase:** 7 of 8 (Controlled Question Discovery, Evidence Freshness & Safe Update Pipeline)  
**Execution Timestamp:** 2026-10-09T07:28:00Z  
**Status:** COMPLETE — READY FOR PHASE 8  

---

## 1. Executive Summary & Core Objectives

Phase 7 establishes a reliable, ₹0-cost workflow to discover new user questions, import available Search Console query data, audit evidence freshness across all existing question records, and triage evidence-backed updates for human review—without publishing unverified information or modifying production datasets.

### Key Deliverables Completed
1. **Intake Validation Schema:** `/research/question_intake_schema.json`
2. **Standard Question Intake Template:** `/research/question_intake_template.csv`
3. **Deterministic Intake Validation Engine:** `/scripts/validate_question_intake.ts`
4. **Evidence Freshness Audit Engine:** `/scripts/audit_question_freshness.ts`
5. **Phase 7 Test Suite (10 Deterministic Unit Tests):** `/tests/questionIntakeFreshness.test.ts`
6. **Detailed Phase 7 Report:** `/research/QUESTION_INTELLIGENCE_PHASE_7.md`

---

## 2. Mandatory Preservation & Catalogue Baseline Metrics

Every existing catalogue collection, route, navigation link, canonical strategy, and published question record was preserved with zero mutations:

| Catalogue Collection | Pre-Phase 7 Baseline | Post-Phase 7 Count | Status |
| :--- | :---: | :---: | :--- |
| **Sovereign Investments** | 230 | 230 | **Preserved Unchanged** |
| **Investment Schemes** | 71 | 71 | **Preserved Unchanged** |
| **Opportunities & Grants** | 10,500 | 10,500 | **Preserved Unchanged** |
| **Tenders & Procurements** | 30 | 30 | **Preserved Unchanged** |
| **News & Official Releases** | 30 | 30 | **Preserved Unchanged** |
| **Subsidies & Benefits** | 1,000 | 1,000 | **Preserved Unchanged** |
| **Official Sources Directory** | 54 | 54 | **Preserved Unchanged** |
| **Verified Published Questions** | 143 | 143 | **Preserved Unchanged** |
| **Production Sitemap URLs** | 12,016 | 12,016 | **Preserved Unchanged** |

---

## 3. Question Intake & Quality Controls Architecture

The intake pipeline operates under the strict constraint that **passing technical validation never equals factual verification**.

### Intake Schema Features (`/research/question_intake_schema.json`)
- Strict candidate ID convention: `^CAND-[A-Z0-9_-]{3,32}$`.
- Full provenance tracking: `discovery_source` (`MANUAL_RESEARCH`, `GSC_QUERY_EXPORT`, `OFFICIAL_GOV_CIRCULAR`, `SITE_SEARCH_LOG`, `USER_FEEDBACK`, `STATUTORY_FAQ_IMPORT`), `discovery_date`, `source_url`, and `source_type`.
- Mandatory evidence excerpt: Minimum 20 characters of statutory clause text.
- Review stage lifecycle: `PENDING_TRIAGE`, `NEEDS_RESEARCH`, `NEEDS_HUMAN_REVIEW`, `READY_FOR_EDITORIAL_VERIFICATION`, `DUPLICATE_FLAGGED`, `REJECTED`.
- **Publication Boundary Enforcement:** The values `VERIFIED`, `PUBLISHED`, `LIVE`, and `APPROVED_FOR_PRODUCTION` are strictly forbidden in the intake schema. Any candidate attempting to claim publication status is rejected immediately as a publication contamination attempt.

### Deterministic Deduplication & Triage Logic (`/scripts/validate_question_intake.ts`)
- **Exact Duplicate Detection:** Normalized text matching across the current batch and all 143 published questions detects exact semantic duplicates deterministically without human confusion.
- **High Intent Similarity Flagging:** Candidates exhibiting >65% token similarity (Jaccard token metric) with existing questions are flagged as `NEEDS_HUMAN_REVIEW`. Non-identical questions are never merged automatically, preventing loss of intent or distortion of specific eligibility rules.
- **Provenance & Source Validation:** Rejects candidates lacking ISO dates, valid HTTP/HTTPS URLs, recognized categories, or adequate statutory excerpts.

### Initial Intake Template Validation Results
- Total intake candidates tested: **4**
- Valid intake records: **4** (CAND-GSC-001, CAND-MAN-002, CAND-GOV-003, CAND-FDB-004)
- Exact duplicates detected: **0**
- Missing provenance: **0**
- Missing evidence: **0**
- Invalid source URLs: **0**
- Published contamination detected: **False** (0 violations)

---

## 4. Evidence Freshness Audit Behavior & Limitations

The freshness audit script (`/scripts/audit_question_freshness.ts`) systematically audits all 143 published questions against statutory time-sensitivity criteria.

### Audit Design & Safety Rules
1. **Zero Fictitious Fetches:** Under the ₹0-cost principle, automated live scraping of government portals without authenticated APIs is prohibited. The audit marks all external sources as `NOT_CHECKED` (Manual Review Queue) rather than inventing fetch responses.
2. **Zero Fictitious Dates:** If a record lacks date metadata, the audit explicitly reports `FRESHNESS_METADATA_MISSING` and sets `verified_at: null`.
3. **Zero Answer Rewrites:** Outdated or time-sensitive flags serve purely as editorial triage signals. They never alter published answer text or change verification badges in `verifiedQuestionsData.json`.

### Freshness Audit Results (143 Published Questions)
- **Total Questions Audited:** 143
- **Freshness Metadata Present:** 143 (100%)
- **Freshness Metadata Missing:** 0 (0%)
- **Review Recommended (Age > 180 days):** 0
- **Time-Sensitive Priority Review:** 45 (Government Investments: 30, Subsidies & Benefits: 15)
- **Sources Genuinely Checked Live:** 0
- **Sources Marked NOT CHECKED (Queued for Manual Verification):** 286

---

## 5. Executable Validation & Test Suite

A comprehensive test suite was implemented in `/tests/questionIntakeFreshness.test.ts` using Node.js built-in test runner:

| Test ID | Test Description | Command / Runner | Result |
| :---: | :--- | :--- | :---: |
| **Test 1** | Valid candidate passes schema validation | `npx tsx --test tests/questionIntakeFreshness.test.ts` | **PASS** |
| **Test 2** | Malformed candidate is rejected | `npx tsx --test tests/questionIntakeFreshness.test.ts` | **PASS** |
| **Test 3** | Exact duplicate detected deterministically | `npx tsx --test tests/questionIntakeFreshness.test.ts` | **PASS** |
| **Test 4** | Similar questions flagged without auto-merging | `npx tsx --test tests/questionIntakeFreshness.test.ts` | **PASS** |
| **Test 5** | Missing provenance is detected | `npx tsx --test tests/questionIntakeFreshness.test.ts` | **PASS** |
| **Test 6** | Freshness audit does not invent dates | `npx tsx --test tests/questionIntakeFreshness.test.ts` | **PASS** |
| **Test 7** | Unchecked source marked NOT CHECKED | `npx tsx --test tests/questionIntakeFreshness.test.ts` | **PASS** |
| **Test 8** | Candidate cannot enter production dataset | `npx tsx --test tests/questionIntakeFreshness.test.ts` | **PASS** |
| **Test 9** | Outdated flag does not overwrite published text | `npx tsx --test tests/questionIntakeFreshness.test.ts` | **PASS** |
| **Test 10** | Repeated audit produces deterministic results | `npx tsx --test tests/questionIntakeFreshness.test.ts` | **PASS** |
| **Build Check** | Production application build & compilation | `compile_applet` | **PASS** |
| **Source Check** | Auto-update engine and source registry test | `npx tsx scripts/check-sources.ts` | **PASS** |

---

## 6. Publication Safety & Integrity Confirmation

- **Zero Unverified Candidates Published:** Intake files remain strictly isolated within `/research/` and `/scripts/`.
- **Zero Catalogue Alterations:** Investments (230), Schemes (71), Opportunities (10,500), Tenders (30), News (30), Subsidies (1,000), Sources (54), and Published Questions (143) remain identical to baseline.
- **Sitemap Stability:** `public/sitemap.xml` contains exactly 12,016 canonical URLs (144 questions URLs: 1 hub + 143 detail pages).

---

## 7. Recommendation

Phase 7 is complete and verified. The repository is ready to proceed to Phase 8 upon user confirmation.
