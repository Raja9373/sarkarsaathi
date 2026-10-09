# SarkarSaathi Answer Engine — Evidence & Verification Standards Guide
**Document Reference:** `/research/ANSWER_VERIFICATION_GUIDE.md`  
**Version:** 1.0.0  
**Phase:** 4 of 8 (Verified Answer Engine & Evidence Management)  
**Applies To:** `/research/answer_bank.json`, `/research/answer_schema.json`, `/research/question_bank.json`

---

## 1. Executive Mission & Verification Principles

The SarkarSaathi Answer Engine is the authoritative knowledge foundation for public welfare schemes, government-backed savings, central procurement tenders, and administrative single-window systems across India. 

Because inaccurate information regarding tax status, penalty rates, subsidy ceilings, or tender qualification can cause direct financial or legal harm to citizens, MSMEs, and investors, every record in the SarkarSaathi answer repository is bound by strict verification protocols.

### Core Principles
1. **Zero Unverified Assertions:** No claim, interest rate, penalty rate, or deadline may be published without direct citation to an authoritative public document or statutory rule.
2. **First-Two-Sentence Direct Answer:** Every answer must directly resolve the user's primary inquiry within the first two sentences before detailing secondary conditions or procedural nuance.
3. **Primary Law Takes Precedence:** Operational FAQs, blog posts, and news reports can never override published Gazette Notifications, Acts of Parliament, or Ministry Office Memorandums.
4. **Temporal Precision:** Every time-sensitive figure (interest rate, tax slab, subsidy percentage, loan limit) must record its effective statutory date and quarterly review cadence.
5. **Harmonized Multi-Language Evidence:** Hindi and Hinglish translations must maintain exact terminological fidelity with the English canonical record, pointing to identical primary sources.

---

## 2. Hierarchy of Acceptable Evidence

Evidence sources are classified into six explicit tiers. Verification audits require citing the highest available tier:

```
┌─────────────────────────────────────────────────────────────┐
│ Tier 1: PRIMARY_STATUTORY_RULE                              │
│ Acts of Parliament, Gazette of India Notifications, GSR/SO  │
├─────────────────────────────────────────────────────────────┤
│ Tier 2: OFFICIAL_GOV_NOTIFICATION                           │
│ Office Memorandums (OM), Department Circulars, Budget Speech│
├─────────────────────────────────────────────────────────────┤
│ Tier 3: OFFICIAL_DEPARTMENT_PORTAL                          │
│ Static scheme manuals on .gov.in/.nic.in, NSWS, GeM, myScheme│
├─────────────────────────────────────────────────────────────┤
│ Tier 4: OFFICIAL_FAQ_DOCUMENT                               │
│ Ministry FAQs, Department of Posts Handbooks, NIC Guides    │
├─────────────────────────────────────────────────────────────┤
│ Tier 5: RESEARCH_SYNTHESIS                                  │
│ Cross-referenced actuarial derivations, mathematical models │
├─────────────────────────────────────────────────────────────┤
│ Tier 6: SECONDARY_VERIFIED                                  │
│ Authoritative legal commentary, PTI/PIB corroborated news   │
└─────────────────────────────────────────────────────────────┘
```

### Detailed Tier Definitions

| Evidence Tier | Permitted Documents & Publishers | Reliability Weight | Permissible Uses |
| :--- | :--- | :--- | :--- |
| **PRIMARY_STATUTORY_RULE** | The Gazette of India, Acts of Parliament (e.g., IT Act 1961, GFR 2017, MSMED Act 2006, Government Savings Promotion Act 1873/2018), RBI Master Directions, CBDT Statutory Orders. | Absolute (100%) | Mandatory for determining legal rights, tax exemptions, deposit ceilings, lock-in rules, and penalty rates. |
| **OFFICIAL_GOV_NOTIFICATION** | Ministry of Finance (DEA) Quarterly Small Savings Orders, Ministry of MSME Notifications, DPIIT Gazette notifications, CCEA decisions published via PIB. | Very High (95%) | Mandatory for dynamic rates, quarterly revisions, budget limit enhancements (e.g., Mudra Tarun Plus ₹20L). |
| **OFFICIAL_DEPARTMENT_PORTAL** | Direct operational documentation on sovereign domains (`indiapost.gov.in`, `nsiindia.gov.in`, `gem.gov.in`, `nsws.gov.in`, `eprocure.gov.in`, `pmsuryaghar.gov.in`). | High (90%) | User onboarding flows, portal feature descriptions, module architecture, system validation checks. |
| **OFFICIAL_FAQ_DOCUMENT** | Frequently Asked Questions published and signed by Joint Secretaries, NIC technical support manuals, GeM Help Desk circulars. | Substantial (85%) | Clarifying operational edge cases, procedural paperwork steps, portal bug workarounds. |
| **RESEARCH_SYNTHESIS** | Formal mathematical modeling of compound interest formulas, annuity projections, reducing balance loan amortization schedules, or multi-scheme trade-off matrices. | Verified Logic (90%) | Calculator logic, mathematical proof of compounding timelines (e.g., KVP 115-month doubling proof). |
| **SECONDARY_VERIFIED** | Press Trust of India (PTI), Press Information Bureau (PIB) press conferences, verified national business daily investigations. | Supporting Only (70%) | Discovery of pending policy shifts, ministerial announcements preceding formal Gazette publication. |

---

## 3. Resolving Conflicting Evidence

When two or more public sources present differing statements regarding a government rule:

1. **Hierarchy Rule:** A higher evidence tier always supersedes a lower tier. (A Gazette Notification supersedes a portal FAQ; an Act of Parliament supersedes a press release).
2. **Later in Time Rule:** Within the same tier, the document with the later effective notification date governs. (e.g., G.S.R. 915(E) issued in December 2019 supersedes PPF rules issued in 1968).
3. **Specific Overrides General:** A specialized scheme-specific rule overrides a general rule. (e.g., Senior Citizen Savings Scheme rules override general Post Office savings account rules regarding quarterly interest credits).
4. **Discrepancy Documentation:** If an official department portal publishes outdated figures that conflict with a recent Gazette amendment:
   - Mark the record with `conflicting_evidence` detailing the divergence.
   - Quote the Gazette as the authoritative truth in the answer.
   - Add an explicit note in `reviewer_notes` advising the editorial desk of the portal lag.

---

## 4. Time-Sensitive Data & Review Protocols

Certain categories of government information are subject to regular revision and require active temporal monitoring:

### Quarterly Revision Cycle (Small Savings Schemes)
- **Applicable Schemes:** PPF, SSY, SCSS, NSC, KVP, POMIS, Post Office Time Deposits (POTD), Mahila Samman Savings Certificate (MSSC).
- **Notifying Body:** Budget Division, Department of Economic Affairs, Ministry of Finance.
- **Review Schedule:**
  - **Q1 (April – June):** Notified last week of March. Next Review Due: March 31.
  - **Q2 (July – September):** Notified last week of June. Next Review Due: June 30.
  - **Q3 (October – December):** Notified last week of September. Next Review Due: September 30.
  - **Q4 (January – March):** Notified last week of December. Next Review Due: December 31.
- **Mandate:** All small savings answers carry `next_review_due` set to the upcoming quarterly notification date.

### Annual Fiscal Policy Cycle (Union Budget)
- **Applicable Domains:** Income tax exemption slabs (Section 115BAC, 80C, 80TTB), capital expenditure allocations (NIP), statutory loan limits (Mudra, PMEGP), customs and GST rates.
- **Notifying Body:** Union Budget Address & Finance Act (passed annually in February/March or post-election July).
- **Mandate:** Financial thresholds must explicitly cite the governing Finance Act (e.g., Finance (No. 2) Act 2024 for Section 115BAC and Long-Term Capital Gains rules).

---

## 5. Lifecycle Verification States & Quality Gates

Every answer in `/research/answer_bank.json` is assigned an `answer_status` and an audit `verification_status`:

```
               ┌──────────┐
               │ DRAFTED  │
               └────┬─────┘
                    │ Fact-check against Primary Statutory Rules
                    ▼
           ┌──────────────────┐
           │     VERIFIED     │ ◄── All facts backed by .gov.in Gazette / Acts
           └────────┬─────────┘
                    │
       ┌────────────┼─────────────┐
       ▼            ▼             ▼
┌──────────────┐ ┌─────────────┐ ┌──────────────────────┐
│  PARTIALLY_  │ │   NEEDS_    │ │ CONFLICTING_EVIDENCE │
│   VERIFIED   │ │   REVIEW    │ │                      │
└──────────────┘ └─────────────┘ └──────────────────────┘
       │            │             │
       └────────────┼─────────────┘
                    │ New Gazette / Rate Revision
                    ▼
             ┌──────────────┐
             │   OUTDATED   │
             └──────────────┘
```

### Criteria for States

| Status | Mandatory Criteria | Action Required |
| :--- | :--- | :--- |
| **VERIFIED** | 100% of factual assertions (rates, limits, formulas, dates) are cited directly to primary statutory rules or official government portals. Zero unconfirmed claims. `review_required = false`. | Approved for publishing to production. |
| **PARTIALLY_VERIFIED** | Core rule is confirmed, but operational implementation details in certain states or subordinate rules are not yet published in full. | Flag for state-level empirical verification. |
| **NEEDS_REVIEW** | Information source is undergoing active parliamentary or ministry revision, or recent judicial rulings have stayed an administrative clause. | Exclude from automated publishing until editorial sign-off. |
| **UNVERIFIED** | Answer contains claims derived solely from secondary media reporting without corresponding government circulars. | Prohibited from publication; undergo immediate re-research. |
| **CONFLICTING_EVIDENCE** | Legitimate government publications state contradictory provisions (e.g., state single window portal vs central portal). | Document both positions in `conflicting_evidence` field. |
| **OUTDATED** | An announced government order or budget revision has superseded previously verified numbers. | Trigger priority re-authoring workflow. |

---

## 6. Multi-Language Quality & Terminology Standards

To ensure equity of access across English, Hindi, and Hinglish users, translations must satisfy structural consistency:

### 1. Unified Fact Core
Every translation (Hindi or Hinglish) must reflect identical numerical quantities, statutory deadlines, and legal obligations as the English canonical record. No language version may promise a benefit or claim a waiver absent in the English source.

### 2. Standardized Hindi/Hinglish Technical Glossary
Technical, financial, and legal terms must be rendered using standardized transliteration and recognized official Hindi terminology:

| English Term | Standard Hindi Term | Accepted Hinglish Form | Usage Rule |
| :--- | :--- | :--- | :--- |
| **Earnest Money Deposit (EMD)** | बयाना राशि / ईएमडी | EMD / Bid Security | Keep "EMD" in parentheses for search discovery. |
| **Digital Signature Certificate (DSC)** | डिजिटल हस्ताक्षर प्रमाण पत्र (डीएससी) | DSC / Digital Signature | Mandatory to specify "Class 3 Combo". |
| **Public Provident Fund (PPF)** | पब्लिक प्रोविडेंट फंड (पीपीएफ) | PPF Account | Standard abbreviation recognized pan-India. |
| **Sukanya Samriddhi Yojana (SSY)** | सुकन्या समृद्धि योजना (एसएसवाई) | Sukanya Samriddhi Yojana | Use full name with standard Hindi title. |
| **Tax Deducted at Source (TDS)** | स्रोत पर कर कटौती (टीडीएस) | TDS deduction | Cite Section 194A across all languages. |
| **Bill of Quantities (BOQ)** | मात्रा का बिल (BOQ) | BOQ Excel sheet | Mention template protection rules. |
| **Margin Money Subsidy** | मार्जिन मनी / पूंजीगत सब्सिडी | Margin Money Subsidy | Clarify non-repayable nature in all versions. |
| **Consignee Receipt (CRAC)** | स्वीकृति प्रमाण पत्र (सीआरएसी) | CRAC certificate | Reference 10-day payment timeline. |

---

## 7. Audit Checklist & Automated Test Invariants

Before any batch update to `/research/answer_bank.json` is accepted:

- [x] **1-to-1 Mapping:** The count of records in `answer_bank.json` exactly matches `question_bank.json`.
- [x] **Key Parity:** Every `question_id` in `answer_bank.json` exists in `question_bank.json`.
- [x] **Text Integrity:** `canonical_question` matches byte-for-byte between both files.
- [x] **Directness:** Short answers answer the query within 20 to 500 characters, resolving the core question in the first two sentences.
- [x] **Substantive Depth:** Detailed answers provide between 100 and 4,000 characters of statutory context, eligibility rules, and exceptions.
- [x] **Evidence Citation:** Every record contains at least one verifiable official government URL (`.gov.in`, `.nic.in`, `.rbi.org.in`, `.mudra.org.in`).
- [x] **No Phantom URLs:** All source links point to active, authentic sovereign or statutory bodies.
- [x] **Exhaustive Translations:** Hindi and Hinglish counterparts are complete with `status: "COMPLETED"`.
- [x] **Zero Production Leakage:** All changes are strictly confined to the `/research` directory.
