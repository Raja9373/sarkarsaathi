# SarkarSaathi Question Taxonomy & Domain Classification
## Phase 2 Master Reference Guide

**Version:** 1.1.0  
**Status:** Active Canonical Specification  
**Applies To:** `/research/question_bank.json`, `/research/question_schema.json`

---

## 1. Controlled Top-Level Categories

SarkarSaathi organizes all public inquiries, scheme questions, and regulatory interactions into **9 controlled subject categories**:

```
1. Government Investments
2. Investment Schemes
3. Subsidies & Benefits
4. Opportunities
5. Tenders
6. News & Updates
7. Official Sources
8. Comparisons
9. Tools & Calculators
```

---

## 2. Category & Subcategory Taxonomy

### 1. Government Investments
- **Domain Scope:** Sovereign-guaranteed, small savings, capital accumulation, and fixed-income instruments issued by the Ministry of Finance, Reserve Bank of India, or Department of Posts.
- **Allowed Subcategories:**
  - `Public Provident Fund (PPF)`
  - `Sukanya Samriddhi Yojana (SSY)`
  - `Senior Citizen Savings Scheme (SCSS)`
  - `Sovereign Gold Bonds (SGB)`
  - `RBI Floating Rate Savings Bonds (FRSB)`
  - `Mahila Samman Savings Certificate (MSSC)`
  - `Small Savings Certificates (NSC, KVP)`
  - `Post Office Monthly Income Scheme (POMIS)`
  - `Post Office Time & Recurring Deposits`
- **Core User Intents:** Minimum/maximum deposit caps, interest compounding rules, 5th-of-month calculation windows, 80C and EEE tax status, premature exit, and maturity rules.

### 2. Investment Schemes
- **Domain Scope:** Government-sponsored credit, self-employment, enterprise development, and credit-linked financial programs designed to foster entrepreneurship and economic activity.
- **Allowed Subcategories:**
  - `PMEGP (Prime Minister Employment Generation Programme)`
  - `Pradhan Mantri Mudra Yojana (PMMY)`
  - `Stand-Up India Scheme`
  - `PM Vishwakarma Yojana`
  - `Production Linked Incentive (PLI) Schemes`
  - `Startup India Seed Fund & Credit Guarantee`
  - `Atal Pension Yojana & Micro-Pensions`
- **Core User Intents:** Project cost ceilings, margin money subsidy percentages, urban vs. rural differentials, collateral-free thresholds, educational qualifications, and bank sanction procedures.

### 3. Subsidies & Benefits
- **Domain Scope:** Direct financial assistance, Central Financial Assistance (CFA), Direct Benefit Transfer (DBT), capital grants, and social welfare subsidies.
- **Allowed Subcategories:**
  - `PM Surya Ghar Muft Bijli Yojana (Rooftop Solar)`
  - `PM-KISAN Samman Nidhi (Farmer Income Support)`
  - `Pradhan Mantri Awas Yojana (PMAY Urban & Gramin)`
  - `PM Fasal Bima Yojana (Crop Insurance)`
  - `Fertiliser & Agricultural Input Subsidies`
  - `Credit Linked Capital Subsidy Scheme (CLCSS)`
- **Core User Intents:** Subsidy slabs (e.g. ₹30,000–₹78,000), DISCOM net-metering rules, DBT payment status tracking, eKYC verification, and residential vs. commercial eligibility criteria.

### 4. Opportunities
- **Domain Scope:** National and state-level infrastructure pipelines, public investment opportunities, and project monitoring systems.
- **Allowed Subcategories:**
  - `Infrastructure Monitoring (MoSPI PAIMANA)`
  - `Infrastructure Projects vs Procurement`
  - `India Investment Grid (IIG)`
  - `State Industrial Development Corridors`
  - `National Infrastructure Pipeline (NIP)`
- **Core User Intents:** Project stage evaluation (conceptual, under implementation, operational), tracking cost and time overruns, promoter and implementing agency identity, and distinction from open procurement tenders.

### 5. Tenders
- **Domain Scope:** Public procurement, vendor registration, electronic bidding, and contract award mechanisms across central and state government bodies.
- **Allowed Subcategories:**
  - `Government e-Marketplace (GeM)`
  - `Central Public Procurement Portal (CPPP)`
  - `Public Procurement Policy for MSEs`
  - `Tender Process & Compliance`
  - `Railway & Defence Procurement (IREPS, DefProc)`
- **Core User Intents:** Earnest Money Deposit (EMD) exemption via Udyam Registration, Caution Money rules, Class 3 Digital Signature Certificate (DSC) setup, Corrigendum legal compliance, and L1 purchase price matching preference (15% band).

### 6. News & Updates
- **Domain Scope:** Official government policy notifications, statutory orders, interest rate revisions, gazette amendments, and misinformation debunking.
- **Allowed Subcategories:**
  - `Interest Rate Revisions`
  - `Interest Rate Application Rules`
  - `Fact-Checking & Verifications`
  - `Union Budget & Fiscal Policy Announcements`
  - `Department of Economic Affairs Notifications`
- **Core User Intents:** Quarterly revision timelines, applicability to existing vs. new accounts, official source identification, and PIB Fact Check verification against viral social media hoaxes.

### 7. Official Sources
- **Domain Scope:** Digital infrastructure, unified portals, government domains, authority registries, and verification standards.
- **Allowed Subcategories:**
  - `myScheme National Platform`
  - `JanSamarth Unified Credit Portal`
  - `National Single Window System (NSWS)`
  - `Portal Hierarchy & Single Window Systems`
  - `National Portal of India (india.gov.in)`
  - `Open Government Data (Data.gov.in)`
- **Core User Intents:** Central vs. State Single Window distinction, domain verification (.gov.in / .nic.in security), eligibility engine navigation, and safe unauthenticated exploration.

### 8. Comparisons
- **Domain Scope:** Direct head-to-head structural and financial comparisons between alternative schemes, products, or channels.
- **Allowed Subcategories:**
  - `PPF vs Sukanya Samriddhi Yojana`
  - `PPF vs National Pension System (NPS)`
  - `SCSS vs POMIS`
  - `SGB vs Physical Gold`
  - `PMEGP vs Mudra Loan`
  - `PMEGP vs Stand-Up India`
  - `Udyam Registration vs Startup India Recognition`
  - `GeM vs CPPP eProcure`
  - `NSC vs KVP`
  - `PM Surya Ghar vs PM KUSUM`
- **Core User Intents:** Relative yield, lock-in duration, tax implications, target beneficiary alignment, liquidity differences, and selecting the optimal scheme for specific life goals.

### 9. Tools & Calculators
- **Domain Scope:** Mathematical models, computation formulas, interest calculators, and projection tools.
- **Allowed Subcategories:**
  - `PPF Calculator`
  - `PPF Loan & Withdrawal Calculator`
  - `Sukanya Samriddhi Calculator`
  - `Monthly Income Scheme Calculator`
  - `Senior Citizen Quarterly Interest Calculator`
  - `Solar Subsidy Estimator`
  - `Compound vs Simple Interest Tools`
  - `Mudra EMI & PMEGP Margin Money Estimator`
- **Core User Intents:** Exact maturity formulas, non-deposit interest gap calculation (e.g. SSY years 16–21), monthly payout math ($P \times R / 12$), and compound vs. simple interest compounding frequencies.

---

## 3. Controlled Enums

### A. Search Intent
- `informational`: Seeking factual rules, guidelines, or definitions.
- `navigational`: Seeking the direct official portal or authentic login entry point.
- `transactional`: Seeking procedure to open an account, apply, or execute a withdrawal.
- `comparison`: Evaluating two or more schemes side by side.
- `eligibility_check`: Evaluating criteria (age, income, gender, geography, caste, business type).
- `document_check`: Inquiring about required identity, income, or technical certificates.
- `calculation`: Inquiring about mathematical formulas, returns, maturity, or EMI payouts.
- `status_tracking`: Checking application processing status, sanction, or DBT credits.
- `deadline_check`: Inquiring about cut-off dates, fiscal year deadlines, or extension notices.

### B. Target Audience
- `citizens`: General resident population.
- `senior_citizens`: Retirees, pensioners, and citizens aged 55+.
- `investors`: Individuals seeking sovereign capital preservation and returns.
- `women`: Targeted beneficiaries (e.g. SSY, MSSC, Stand-Up India, Mudra).
- `msmes`: Micro, Small, and Medium Enterprises.
- `startups`: DPIIT-recognized early-stage ventures.
- `contractors_bidders`: Vendors, suppliers, and procurement contractors.
- `students`: Educational aspirants.
- `farmers`: Agricultural landholders and cultivators.

### C. Language & Phrasing
- `en`: Standard English.
- `hi`: Standard Devanagari Hindi.
- `hinglish`: Romanized conversational Hindi / Hinglish.

### D. Evidence Status
- `DIRECTLY_OBSERVED`: Explicitly retrieved from live search engine autocomplete, PAA, or search result listings.
- `OFFICIAL_SOURCE_VERIFIED`: Retrieved from published government gazettes, ministry portals, or official FAQ documents.
- `RESEARCH_DERIVED`: Synthesized by domain research to close structural clarity gaps; marked for explicit human review.
- `USER_QUERY_RECORDED`: Inbound search queries from Search Console or platform query logs.

---

## 4. Extensibility Framework

The taxonomy is designed to support multi-dimensional tagging in future phases without altering top-level categories:

```json
{
  "jurisdiction_type": "CENTRAL" | "STATE" | "UT",
  "ministry_id": "MIN-FIN" | "MIN-MSME" | "MIN-MOSPI" | "MIN-COMMERCE",
  "product_code": "SEC-PPF" | "SEC-SGB" | "SCH-PMEGP",
  "sector": "INFRASTRUCTURE" | "MANUFACTURING" | "RENEWABLE_ENERGY" | "FINANCIAL_SERVICES"
}
```
