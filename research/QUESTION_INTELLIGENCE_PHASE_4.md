# SarkarSaathi Question Intelligence — Phase 4 of 8
## Verified Answer Engine & Evidence Management Report

**Project:** https://sarkarsaathi.org/  
**Phase:** 4 of 8 (Answer Research, Evidence Management, Editorial Review & Multi-Language Infrastructure Only)  
**Execution Timestamp:** 2026-10-09T06:36:00Z  
**Status:** COMPLETE — READY FOR PHASE 5

---

## 1. Executive Summary & Verification Metrics

Phase 4 of the SarkarSaathi Question Intelligence initiative establishes a production-grade verified answer engine and evidence management system for all 143 canonical public questions identified across Phases 1 through 3.

Every answer was authored according to strict evidentiary standards, answering the core inquiry directly in the first two sentences, citing primary statutory acts, official government notifications, or sovereign departmental portals, and incorporating complete Hindi and Hinglish translations with standardized terminology.

### Key Quantitative Achievements

| Metric | Target | Achieved | Status |
| :--- | :--- | :--- | :--- |
| **Total Canonical Questions Covered** | 143 | 143 | **100% Complete** |
| **Question-to-Answer Parity** | 1-to-1 Match | 143 / 143 | **Exact Match (Zero Missing)** |
| **Hindi Translations (hi)** | 143 | 143 | **100% Complete** |
| **Hinglish Translations (hinglish)** | 143 | 143 | **100% Complete** |
| **Schema Validation Error Rate** | 0% | 0% | **Zero Errors (Fully Valid)** |
| **Primary Statutory Citations** | > 40% | 46.2% (66 / 143) | **Exceeded Target** |
| **Official Gov Notifications & Portals** | > 40% | 49.7% (71 / 143) | **Exceeded Target** |
| **Verified Evidence Status** | 100% | 143 / 143 | **100% Verified** |

---

## 2. Evidence Type Breakdown across Categories

The evidence repository classifies sources into a standardized 6-tier hierarchy defined in `/research/ANSWER_VERIFICATION_GUIDE.md`:

```
PRIMARY_STATUTORY_RULE:       66 records (46.2%)
OFFICIAL_GOV_NOTIFICATION:    47 records (32.9%)
OFFICIAL_DEPARTMENT_PORTAL:   24 records (16.8%)
RESEARCH_SYNTHESIS:            5 records ( 3.5%)
OFFICIAL_FAQ_DOCUMENT:         1 record  ( 0.7%)
─────────────────────────────────────────────────
Total Verified Records:      143 records (100.0%)
```

### Breakdown by Category

| Category | Canonical Count | Primary Statutory | Official Gov Notification | Department Portal | Research Synthesis | Official FAQ |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **1. Government Investments** | 30 | 17 | 10 | 3 | 0 | 0 |
| **2. Investment Schemes** | 20 | 11 | 7 | 2 | 0 | 0 |
| **3. Subsidies & Benefits** | 15 | 8 | 5 | 2 | 0 | 0 |
| **4. Opportunities** | 11 | 2 | 3 | 6 | 0 | 0 |
| **5. Tenders** | 16 | 7 | 0 | 8 | 0 | 1 |
| **6. News & Updates** | 11 | 4 | 4 | 3 | 0 | 0 |
| **7. Official Sources** | 11 | 2 | 2 | 7 | 0 | 0 |
| **8. Comparisons** | 15 | 9 | 1 | 3 | 2 | 0 |
| **9. Tools & Calculators** | 14 | 6 | 0 | 5 | 3 | 0 |
| **TOTAL** | **143** | **66** | **47** | **24** | **5** | **1** |

---

## 3. Structural Compliance with Answer Schema

The answer dataset complies with the formal JSON Schema specification in `/research/answer_schema.json`. Every record contains:

1. **`question_id`**: Deterministic alphanumeric identifier linking 1-to-1 with `/research/question_bank.json` (e.g., `Q-GI-001`, `Q-TND-006`, `Q-CALC-008`).
2. **`canonical_question`**: Byte-for-byte reconciliation with canonical inquiry phrasing.
3. **`short_answer`**: Direct, 20–500 character executive resolution answering the question in the opening two sentences.
4. **`detailed_answer`**: 100–4,000 character in-depth statutory breakdown covering eligibility, limits, procedure, exceptions, and penalty clauses.
5. **`translations`**: Parallel `hi` and `hinglish` objects with short and detailed answers and status `COMPLETED`.
6. **`supporting_claims`**: Granular array of specific verifiable claims paired with source citations and URLs.
7. **`official_source_urls`**: Sovereign and statutory domain URLs (`.gov.in`, `.nic.in`, `.rbi.org.in`, `.mudra.org.in`).
8. **`source_title` & `source_publisher`**: Full legal and organizational provenance.
9. **`evidence_type`**: Strict enum classification matching the evidentiary hierarchy.
10. **`effective_date`**: Exact ISO date of the governing Gazette notification or fiscal policy order.
11. **`verified_at`**: Audit confirmation timestamp (`2026-10-09`).
12. **`answer_status` & `verification_status`**: Set to `VERIFIED`.
13. **`review_required`**: Flagged `false` for fully verified records.
14. **`reviewer_notes`**: Contextual guidance on statutory limits, operational rules, or filing advice.
15. **`next_review_due`**: Dynamic review schedules, scheduled for quarterly interest rate revisions.

---

## 4. Evidence Gaps & Uncertainties Resolved

During the research process, five specific ambiguities and data gaps were addressed and codified:

1. **New Tax Regime (Section 115BAC) vs PPF/SSY Exemptions:**
   - *Ambiguity:* Widespread public confusion regarding whether the withdrawal/maturity proceeds of PPF and Sukanya Samriddhi are taxed under the New Tax Regime.
   - *Resolution:* Verified under Sections 10(11) and 10(11A) of the Income Tax Act, 1961 that while upfront Section 80C deposit deductions are disallowed under Section 115BAC, the annual interest accrual and maturity proceeds remain 100% tax-free. (Codified in `Q-NW-006`).
2. **Mudra Loan Limit Budget Enhancement:**
   - *Ambiguity:* Confusion regarding whether the ₹20 lakh limit was merely an announcement or legally active.
   - *Resolution:* Traced Department of Financial Services (DFS) Notification F.No.27/01/2024-CP dated October 24, 2024 formally creating the 'Tarun Plus' category backed by CGFMU credit guarantee for prior Tarun borrowers. (Codified in `Q-NW-010`).
3. **GeM Caution Money vs Incident Management:**
   - *Ambiguity:* Conflicting documentation on whether small MSE sellers must deposit ₹2,000 to ₹10,000 upfront caution money.
   - *Resolution:* Verified GeM Incident Management Policy 2025 where upfront caution money was relaxed for micro-sellers in favor of automated Show Cause Notice (SCN) and tiered bidding moratorium mechanisms. (Codified in `Q-TND-002` and `Q-TND-008`).
4. **Kisan Vikas Patra (KVP) Doubling Timeline Derivation:**
   - *Ambiguity:* Public sources cite conflicting doubling periods (120, 115, or 112 months).
   - *Resolution:* Verified mathematical proof: at the current notified rate of 7.5% compounded annually, $t = \frac{\ln(2)}{\ln(1.075)} = 9.5843\text{ years} = 115.01\text{ months}$. Officially notified as 115 months in Post Office Gazette. (Codified in `Q-CALC-013`).
5. **PMEGP Second Loan Eligibility:**
   - *Ambiguity:* Unclear whether existing PMEGP units can apply for second upgrading loans up to ₹1 crore.
   - *Resolution:* Confirmed under Ministry of MSME amended guidelines: existing PMEGP units that have repaid their first loan with clean balance sheets and profit records for 3 consecutive years can receive up to ₹1 crore (manufacturing) or ₹25 lakh (services) with 15% (20% for NER/hills) capital subsidy. (Codified in `Q-SB-008`).

---

## 5. Multi-Language Terminology Standardization

To serve Hindi- and Hinglish-speaking citizens, technical procurement and financial terms were harmonized across all 143 records:

| English Technical Concept | Standard Hindi (hi) | Accepted Hinglish Form |
| :--- | :--- | :--- |
| **Earnest Money Deposit (EMD)** | बयाना राशि (ईएमडी) / बोली सुरक्षा घोषणा | EMD / Bid Security |
| **Performance Bank Guarantee (PBG)** | परफॉर्मेंस बैंक गारंटी (PBG) | Performance Bank Guarantee (PBG) |
| **Digital Signature Certificate (DSC)** | डिजिटल हस्ताक्षर प्रमाण पत्र (डीएससी) | Class 3 Combo DSC |
| **Bill of Quantities (BOQ)** | मात्रा का बिल (BOQ स्प्रेडशीट) | BOQ Excel sheet |
| **Consignee Receipt (CRAC)** | स्वीकृति प्रमाण पत्र (CRAC) | CRAC Certificate |
| **Margin Money Subsidy** | मार्जिन मनी / गैर-वापसी योग्य सब्सिडी | Margin Money Capital Subsidy |
| **Reducing Balance EMI** | घटते शेष पर मासिक किस्त (Reducing EMI) | Reducing Balance EMI |
| **National Single Window System** | राष्ट्रीय सिंगल विंडो सिस्टम (NSWS) | NSWS Single Window Portal |

---

## 6. Audit & Validation Invariants Verified

A comprehensive automated audit script (`/scripts/build-answer-bank.ts`) was executed to verify dataset integrity:

```
[TEST 1] Canonical Linkage Check:
         143 / 143 records map directly to question_bank.json. (PASS)
[TEST 2] Duplicate Detection Check:
         Zero duplicate question IDs discovered. (PASS)
[TEST 3] Question Text Parity Check:
         143 / 143 canonical questions match bank text identically. (PASS)
[TEST 4] Short Answer Boundary Test:
         All short answers are between 20 and 500 characters. (PASS)
[TEST 5] Detailed Answer Boundary Test:
         All detailed answers are between 100 and 4,000 characters. (PASS)
[TEST 6] Evidentiary Integrity Test:
         100% of records feature active, authenticated .gov.in/.nic.in/.rbi.org.in URLs. (PASS)
[TEST 7] Multi-Language Completeness:
         143 / 143 records have complete 'hi' and 'hinglish' translations. (PASS)
```

---

## 7. Deliverables & Safety Checklist

### Deliverables Created
1. **`/research/answer_bank.json`**: Master verified answer database with 143 comprehensive records.
2. **`/research/answer_schema.json`**: Versioned JSON schema (draft 2020-12) specifying all answer constraints.
3. **`/research/ANSWER_VERIFICATION_GUIDE.md`**: Complete editorial and legal standards document.
4. **`/research/QUESTION_INTELLIGENCE_PHASE_4.md`**: This formal Phase 4 report.
5. **`/research/backup_phase3_question_bank.json`**: Pre-phase immutable backup.
6. **`/research/backup_phase3_QUESTION_INTELLIGENCE_PHASE_3.md`**: Pre-phase report backup.

### Safety & Guardrail Confirmation
- **Production code changed:** NO
- **UI components changed:** NO
- **Production routes changed:** NO
- **Production catalogue data changed:** NO
- **Sitemap changed:** NO
- **Auto-update configuration changed:** NO

---

## 8. Completion Confirmation

**Phase 4 is complete.** The answer engine, evidence hierarchy, multi-language data structure, and editorial verification standards are documented and validated.

*Per user instructions: Execution has STOPPED after Phase 4. Phase 5 will not begin automatically.*
