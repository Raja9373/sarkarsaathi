# SarkarSaathi Question Intelligence — Phase 3 of 8
## Large-Scale Question Discovery, Expansion & Deduplication Report

**Project:** https://sarkarsaathi.org/  
**Phase:** 3 of 8 (Research, Discovery, Expansion & Deduplication Only)  
**Execution Date:** October 9, 2026  
**Artifacts Generated & Maintained:**
- `/research/question_bank.json` (Master Question Database expanded to 143 canonical records)
- `/research/question_schema.json` (Machine-readable JSON Schema v1 specification)
- `/research/QUESTION_TAXONOMY.md` (Controlled taxonomy updated to v1.1.0 with 40 active subcategories)
- `/research/QUESTION_INTELLIGENCE_PHASE_3.md` (This comprehensive research & expansion audit report)
- `/research/backup_phase2_question_bank.json` (Immutable backup of Phase 2 dataset)
- `/research/backup_phase2_QUESTION_INTELLIGENCE_PHASE_2.md` (Immutable backup of Phase 2 report)

---

## 1. Executive Summary & Audit Baseline

Phase 3 expanded the SarkarSaathi Master Question Database using targeted Google search research, Google People Also Ask (PAA) observations, and statutory government notifications/portals.

### Growth Summary:
- **Baseline Canonical Questions (Phase 2):** 49
- **Newly Discovered Canonical Questions (Phase 3):** 94
- **Total Canonical Questions in Master Database:** **143** ($+191.8\%$ increase)
- **Baseline Alternate Phrasings (Phase 2):** 147
- **Newly Formulated & Verified Alternate Phrasings (Phase 3):** 282
- **Total Alternate Phrasings in Master Database:** **429** ($+191.8\%$ increase)
- **Total Tracked User Inquiries (Canonical + Alternates):** **572** ($+191.8\%$ increase)
- **Schema Validation Errors:** **0** (100% passed strict schema validation)
- **Exact Canonical Duplicates:** **0** (Strictly deduplicated)

---

## 2. Category Distribution & Expansion Breakdown

All 9 primary SarkarSaathi subject categories were expanded:

| Category | Phase 2 Baseline | Newly Added (Phase 3) | Total Phase 3 Canonical | Total Tracked Inquiries (with Alternates) |
| :--- | :---: | :---: | :---: | :---: |
| **1. Government Investments** | 15 | 15 | **30** | 120 |
| **2. Investment Schemes** | 7 | 13 | **20** | 80 |
| **3. Subsidies & Benefits** | 4 | 11 | **15** | 60 |
| **4. Opportunities** | 3 | 8 | **11** | 44 |
| **5. Tenders** | 5 | 11 | **16** | 64 |
| **6. News & Updates** | 3 | 8 | **11** | 44 |
| **7. Official Sources** | 3 | 8 | **11** | 44 |
| **8. Comparisons** | 5 | 10 | **15** | 60 |
| **9. Tools & Calculators** | 4 | 10 | **14** | 56 |
| **Total** | **49** | **94** | **143** | **572** |

---

## 3. Provenance & Evidence Verification

Provenance rules were strictly maintained with no synthetic query fabrication or unsupported search volumes:

| Evidence Status | Source Type | Phase 2 Baseline | Phase 3 Additions | Current Total | Audit Description |
| :--- | :--- | :---: | :---: | :---: | :--- |
| **DIRECTLY_OBSERVED** | `google_search_observed` | 23 | 51 | **74** | Inquiries retrieved via Google autocomplete, People Also Ask (PAA), and organic search result query titles. `observed_on_google: true`. |
| **OFFICIAL_SOURCE_VERIFIED** | `official_gov_faq` | 23 | 41 | **64** | Grounded in official government portal guidelines, gazettes, rules, and departmental FAQs (RBI, NSI, GeM, KVIC, MoSPI, Income Tax, NSWS, PM-KISAN, PM Surya Ghar). `observed_on_google: false`. |
| **RESEARCH_DERIVED** | `research_derived_suggestion` | 3 | 2 | **5** | Synthesized domain questions to close structural and mathematical gaps (`Q-OPP-002`, `Q-OS-002`, `Q-CALC-004`, `Q-OPP-011`, `Q-CALC-011`). Marked `review_required: true`. |
| **Total** | | **49** | **94** | **143** | |

### Flagged Records Pending Review (`review_required: true`):
1. `Q-OPP-002`: PAIMANA pipeline vs active tender bidding distinction.
2. `Q-OS-002`: JanSamarth digital eligibility assessment limits.
3. `Q-CALC-004`: Compounding frequency vs simple interest mathematical modeling.
4. `Q-OPP-011`: Public-Private Partnership (PPP) Model Concession Agreement risk frameworks.
5. `Q-CALC-011`: Reducing balance EMI and amortization formula for ₹20 lakh Tarun Plus Mudra loans.

---

## 4. Audience and Geographic Demographics

### Audience Segmentation:
- **citizens:** 46 records (general public savings, tax rules, subsidies, portal verifications)
- **investors:** 25 records (sovereign bonds, NIP infrastructure pipeline, PAIMANA monitoring, G-Sec spreads)
- **msmes:** 22 records (PMEGP loans/subsidies, Mudra ₹20 lakh Tarun Plus, Udyam registration, MSE tender quotas)
- **women:** 14 records (Sukanya Samriddhi, Mahila Samman Savings Certificate, Stand-Up India, PMAY co-ownership)
- **contractors_bidders:** 14 records (GeM procurement, CPPP two-cover bidding, Class 3 DSC, CRAC payment protections, PBG)
- **senior_citizens:** 10 records (SCSS ₹30 lakh limit, quarterly interest math, premature closure penalties, Section 80TTB)
- **farmers:** 7 records (PM-KISAN eKYC, land seeding corrections, PM Fasal Bima Yojana crop damage reporting)
- **startups:** 5 records (Startup India Seed Fund grants vs debt, DPIIT Section 80-IAC tax holiday)

### Geographic Scope:
- **India (All):** 143 records ($100\%$ nationwide statutory validity with Central Ministry jurisdiction).

---

## 5. Deduplication & Data Integrity Protocols

### Deduplication Standards Enforced:
1. **Zero Exact Canonical Duplicates:** Every single record in `question_bank.json` possesses a distinct `normalized_question` text string.
2. **Intent-Level Clustering:** Near-duplicates and linguistic colloquialisms were consolidated into the `alternate_phrasings` array of the respective canonical record rather than creating redundant canonical records.
3. **Distinct Statutory Entities Kept Separate:** Questions whose legal conditions, eligibility thresholds, or financial formulas differ were preserved as separate canonical records:
   - *Example:* `Q-GI-016` (PPF loan limits: 25% of balance 2 years prior) vs. `Q-GI-004` (PPF premature closure rules) vs. `Q-GI-017` (PPF loan interest rate: 1% normal vs. 6% penalty).
   - *Example:* `Q-IS-001` (PMEGP first loan up to ₹50 lakh) vs. `Q-IS-008` (PMEGP second loan up to ₹1 crore for expansion).
   - *Example:* `Q-IS-004` (Mudra general categories up to ₹10 lakh) vs. `Q-IS-011` (Mudra Tarun Plus up to ₹20 lakh for repeat borrowers under Budget 2024).
   - *Example:* `Q-SB-001` (PM Surya Ghar residential rooftop solar up to 3 kW) vs. `Q-SB-005` (PM Surya Ghar group housing societies up to 500 kW).

---

## 6. Relationship Graph & Taxonomy Architecture

Every canonical record is interconnected within a bidirectional typed relationship network (`relationships` and `related_question_ids`):

1. **Hierarchical Parents & Children:**
   - Parent: `Q-GI-001` (PPF Annual Limit) $\rightarrow$ Children: `Q-GI-016` (Loan Eligibility), `Q-GI-018` (15-Year Maturity Options).
   - Parent: `Q-GI-005` (SSY Age Limit) $\rightarrow$ Children: `Q-GI-020` (Premature Closure), `Q-GI-021` (Higher Education 50% Withdrawal).
   - Parent: `Q-IS-001` (PMEGP Ceilings) $\rightarrow$ Children: `Q-IS-008` (Second Upgradation Loan), `Q-IS-009` (Second Loan Subsidy).
   - Parent: `Q-TND-006` (GeM Direct Purchase Limits) $\rightarrow$ Children: `Q-TND-007` (CRAC Invoice Protection), `Q-TND-008` (Incident Management 2025).
2. **Comparison Bridges:**
   - `Q-CMP-006` interconnects `Q-GI-001` (PPF) and National Pension System (NPS).
   - `Q-CMP-007` interconnects `Q-GI-005` (SSY) and Children Mutual Funds.
   - `Q-CMP-008` interconnects `Q-IS-001` (PMEGP) and `Q-IS-006` (Stand-Up India).
   - `Q-CMP-012` interconnects `Q-TND-006` (GeM) and `Q-TND-011` (CPPP).
   - `Q-CMP-013` interconnects `Q-GI-014` (NSC) and `Q-GI-027` (KVP).
3. **Calculation & Math Model Bridges:**
   - `Q-CALC-005` (PPF 25% Loan Math) links to `Q-GI-016`.
   - `Q-CALC-008` (SCSS Quarterly Math: ₹61,500 payout) links to `Q-GI-008` and `Q-GI-023`.
   - `Q-CALC-010` (PMEGP Margin Money Matrix) links to `Q-IS-001` and `Q-CMP-004`.
   - `Q-CALC-012` (PM Surya Ghar Slabs Math) links to `Q-SB-001` and `Q-SB-005`.

---

## 7. Newly Researched Official Portals & Authoritative Sources

All source URLs added in Phase 3 are authoritative, official government domains or documented search observations:

1. **National Savings Institute & Department of Posts:** `https://www.nsiindia.gov.in/`, `https://www.indiapost.gov.in/`
2. **Income Tax Department of India:** `https://www.incometax.gov.in/`
3. **Ministry of Micro, Small and Medium Enterprises & KVIC:** `https://msme.gov.in/`, `https://www.kviconline.gov.in/pmegp/`, `https://udyamregistration.gov.in/`, `https://sambandh.msme.gov.in/`
4. **MUDRA & Financial Services:** `https://www.mudra.org.in/`, `https://financialservices.gov.in/`, `https://pib.gov.in/PressReleasePage.aspx?PRID=2067713`
5. **Stand-Up India Mitra:** `https://www.standupmitra.in/`
6. **PM Vishwakarma Portal:** `https://pmvishwakarma.gov.in/`
7. **PM Surya Ghar National Rooftop Solar Portal:** `https://pmsuryaghar.gov.in/`, `https://mnre.gov.in/`
8. **PM-KISAN Samman Nidhi Portal:** `https://pmkisan.gov.in/`, `https://agricoop.nic.in/`
9. **Pradhan Mantri Awas Yojana Urban 2.0:** `https://pmay-urban.gov.in/`, `https://mohua.gov.in/`
10. **PM Fasal Bima Yojana Portal:** `https://pmfby.gov.in/`
11. **India Investment Grid & Invest India:** `https://indiainvestmentgrid.gov.in/`, `https://www.investindia.gov.in/`
12. **Ministry of Statistics and Programme Implementation (MoSPI PAIMANA):** `https://www.mospi.gov.in/`
13. **Government e-Marketplace (GeM):** `https://gem.gov.in/`
14. **Central Public Procurement Portal (CPPP):** `https://eprocure.gov.in/eprocure/app`
15. **Indian Railways E-Procurement System (IREPS):** `https://www.ireps.gov.in/`
16. **Defence Public Procurement Portal (DefProc):** `https://defproc.gov.in/`
17. **Department of Economic Affairs (DEA):** `https://dea.gov.in/`
18. **PIB Fact Check:** `https://factcheck.pib.gov.in/`
19. **National Single Window System (NSWS):** `https://www.nsws.gov.in/`
20. **National Portal of India:** `https://www.india.gov.in/`
21. **Open Government Data Platform:** `https://data.gov.in/`

---

## 8. Backup Confirmation

- Pre-expansion Phase 2 dataset successfully archived at `/research/backup_phase2_question_bank.json` (49 records).
- Pre-expansion Phase 2 report successfully preserved at `/research/backup_phase2_QUESTION_INTELLIGENCE_PHASE_2.md`.
- Active database `/research/question_bank.json` contains the verified 143 records.

---

## 9. Next Steps for Phase 4 (Answering & Content Architecture)

1. **Answer Status Initialization:** All 143 records remain in `"answer_status": "UNANSWERED"`.
2. **Phase 4 Authoring Roadmap:**
   - Author authoritative, multi-paragraph factual answers for high-priority canonical questions based strictly on statutory guidelines.
   - Formulate structured tables (e.g., PMEGP margin money matrix, SCSS quarterly payout calendar, PM Surya Ghar subsidy slabs, Mudra categories).
   - Implement citation cross-references linking to the exact government notifications and circulars.
   - Integrate structured FAQ schema (`FAQPage` JSON-LD) architecture for organic Google search eligibility.
