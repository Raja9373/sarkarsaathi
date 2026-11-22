export interface EditorialGuideSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  table?: {
    headers: string[];
    rows: string[][];
  };
  callout?: {
    title: string;
    body: string;
    tone?: 'info' | 'warning' | 'success';
  };
}

export interface EditorialGuideFaq {
  question: string;
  answer: string;
}

export interface EditorialGuide {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  category: 'Sovereign Investments' | 'Subsidies & Welfare' | 'Public Procurement' | 'Small Savings' | 'MSME & Housing' | 'Citizen Safety';
  summary: string;
  metaDescription: string;
  keywords: string[];
  readTimeMinutes: number;
  publishedDate: string;
  lastUpdated: string;
  authorName: string;
  authorRole: string;
  reviewerName: string;
  primarySources: Array<{ label: string; url: string }>;
  relatedLinks: Array<{ label: string; path: string; slug?: string }>;
  sections: EditorialGuideSection[];
  faqs: EditorialGuideFaq[];
}

export const editorialGuides: EditorialGuide[] = [
  {
    id: 'guide-54ec-bonds',
    slug: 'section-54ec-capital-gain-bonds-complete-guide',
    title: 'Section 54EC Capital Gains Tax Exemption Bonds (2026): Complete Rules, Limits & Worked Calculation',
    shortTitle: 'Section 54EC Capital Gains Bonds Guide',
    category: 'Sovereign Investments',
    summary: 'How Indian property sellers legally exempt up to ₹50 Lakh in Long-Term Capital Gains tax via REC, PFC, and IRFC 54EC bonds — including the 6-month window rule, 5-year lock-in, interest taxation, and worked Rupee math.',
    metaDescription: 'Complete 2026 guide to Section 54EC Capital Gains Bonds (REC, PFC, IRFC): 5.25% interest rate, ₹50 Lakh annual cap, 6-month investment deadline, 5-year lock-in, and worked tax savings example.',
    keywords: ['54ec capital gain bonds', 'rec 54ec bonds', 'pfc 54ec bonds', 'irfc 54ec bonds', 'section 54ec tax exemption limit', 'ltcg property sale tax save india'],
    readTimeMinutes: 8,
    publishedDate: '2026-10-12',
    lastUpdated: '2026-11-20',
    authorName: 'SarkarSaathi Sovereign Finance Desk',
    authorRole: 'Taxation & Fixed-Income Policy Research',
    reviewerName: 'Editorial Verification Committee',
    primarySources: [
      { label: 'Income Tax Act, 1961 — Section 54EC (incometaxindia.gov.in)', url: 'https://incometaxindia.gov.in/' },
      { label: 'REC Limited 54EC Capital Gains Bonds Portal', url: 'https://recindia.nic.in/' },
      { label: 'Power Finance Corporation (PFC) 54EC Bonds', url: 'https://www.pfcindia.com/' }
    ],
    relatedLinks: [
      { label: '54EC Capital Gain Bonds Official Overview', path: '/investments', slug: '54ec-capital-gain-bonds' },
      { label: 'Interactive 54EC Tax Saving Calculator', path: '/tools' },
      { label: 'Compare 54EC vs PPF, SSY, SCSS & RBI FRSB', path: '/comparisons' }
    ],
    sections: [
      {
        heading: 'What Are Section 54EC Bonds and Who Qualifies?',
        paragraphs: [
          'When an individual, Hindu Undivided Family (HUF), or company sells immovable property (land or building, or both) held for more than 24 months, the profit qualifies as Long-Term Capital Gain (LTCG). Under Section 54EC of the Income Tax Act, 1961, taxpayers can claim full exemption on that LTCG by reinvesting the gain portion — not the entire sale price — into notified 5-year capital gain bonds issued by designated Government of India Public Sector Undertakings.',
          'Crucially, Section 54EC applies exclusively to Long-Term Capital Gains arising from the transfer of land or building. Gains from equity shares, equity mutual funds, gold jewellery, debt funds, or short-term property sales (held for 24 months or less) do not qualify for Section 54EC relief. The notified issuers currently accepting retail and institutional subscriptions include REC Limited (Rural Electrification Corporation), PFC (Power Finance Corporation), IRFC (Indian Railway Finance Corporation), and HUDCO when active tranches are notified.'
        ],
        callout: {
          title: 'Key Statutory Rule: Reinvest Only the Capital Gain, Not the Sale Proceeds',
          body: 'If you sell an ancestral flat for ₹1.20 Crore and your computed Long-Term Capital Gain is ₹42 Lakh, you only need to invest ₹42 Lakh in 54EC bonds to save 100% of the LTCG tax. You retain complete freedom to use the remaining ₹78 Lakh principal however you choose.',
          tone: 'info'
        }
      },
      {
        heading: '2026 Financial Terms: Interest Rate, Cap, Lock-In & Denomination',
        paragraphs: [
          'All notified Section 54EC bond series carry uniform statutory terms overseen by the Ministry of Finance. The bonds carry AAA sovereign-adjacent credit ratings from CRISIL, ICRA, and CARE because issuers are Maharatna or Navratna CPSEs backed by the Government of India.'
        ],
        table: {
          headers: ['Parameter', 'Statutory Rule (FY 2026–27)', 'Practical Impact for Investors'],
          rows: [
            ['Notified Coupon Rate', '5.25% p.a. (payable annually)', 'Credited directly to registered bank account via ECS; no TDS deducted on interest, though interest is taxable per slab.'],
            ['Minimum / Maximum Investment', '₹10,000 (1 bond) to ₹50,00,000 (500 bonds)', 'Strictly capped at ₹50 Lakh per assessee across the financial year of sale and the subsequent financial year combined.'],
            ['Investment Window', 'Within 6 months from date of property transfer', 'Measured from the date of execution/registration of the sale deed — NOT from the date of ITR filing.'],
            ['Mandatory Lock-In Tenure', '5 Years (Non-transferable & Non-negotiable)', 'Cannot be sold on stock exchanges, pledged as loan collateral, or redeemed prematurely before 60 months.'],
            ['Holding Mode', 'Demat (NSDL/CDSL) or Physical Certificate', 'Demat mode eliminates physical certificate loss and speeds up automatic maturity redemption.']
          ]
        }
      },
      {
        heading: 'Worked Example: Should You Buy 54EC Bonds or Pay Tax and Invest Elsewhere?',
        paragraphs: [
          'Many property sellers hesitate because 5.25% p.a. taxable interest looks lower than fixed deposits or RBI Floating Rate Savings Bonds (8.05% p.a.). However, evaluating Section 54EC requires comparing the post-tax corpus after 5 years — because paying LTCG tax upfront permanently shrinks your starting capital.',
          'Consider a taxpayer in the 30% income-tax slab who generates a ₹40,00,000 Long-Term Capital Gain on residential land sold in October 2026 (assuming the 12.5% LTCG regime without indexation, plus 4% cess = 13.0% effective tax rate):'
        ],
        bullets: [
          'Option A (Invest ₹40,00,000 in 54EC Bonds): Upfront LTCG tax saved = ₹5,20,000. Full ₹40,00,000 earns 5.25% p.a. = ₹2,10,000 annual gross interest (₹1,44,480 post-tax after 31.2% tax+cess). After 5 years, you receive ₹40,00,000 principal + ₹7,22,400 cumulative post-tax interest = ₹47,22,400 total net wealth.',
          'Option B (Pay 13% LTCG Tax & Invest Balance in a 7.25% Bank FD): Upfront tax paid = ₹5,20,000, leaving only ₹34,80,000 to invest. At 7.25% p.a. (4.99% post-tax compounded annually in the 30% slab), ₹34,80,000 grows to roughly ₹44,40,000 after 5 years.',
          'Net Advantage of 54EC Bonds: Even with a lower 5.25% coupon, preserving the ₹5.20 Lakh upfront tax capital puts the conservative investor roughly ₹2.82 Lakh ahead with sovereign-backed credit safety.'
        ]
      },
      {
        heading: 'Common Mistakes That Trigger Income Tax Disallowance',
        paragraphs: [
          'Taxpayers frequently lose their Section 54EC exemption during CPC processing or scrutiny assessments due to preventable procedural mistakes. Watch out for these four strict rules before subscribing:'
        ],
        bullets: [
          'Splitting ₹1 Crore Across Two Financial Years: Prior to Finance Act 2014, sellers who sold property in November sometimes invested ₹50 Lakh in March and another ₹50 Lakh in April. The amended proviso to Section 54EC(1) explicitly closes this loophole — the combined total investment from a single capital gain transaction cannot exceed ₹50 Lakh across both financial years.',
          'Missing the 6-Month Deadline Waiting for ITR Filing: Unlike Section 54 (residential house reinvestment), Section 54EC does NOT allow parking funds in a Capital Gains Account Scheme (CGAS). Bonds must be allotted/subscribed within 6 months of transfer.',
          'Taking a Loan Against 54EC Bonds: Section 54EC(2) mandates that if you convert the bonds into money or take any loan or advance on their security within 5 years, the entire exempted LTCG becomes taxable in the year of violation.',
          'Joint Ownership Misallocation: If a property was genuinely co-owned 50:50 by husband and wife (evidenced by purchase funding and sale deed), each co-owner is a separate assessee and can claim up to ₹50 Lakh individually (up to ₹1 Crore combined for the couple).'
        ]
      },
      {
        heading: 'Step-by-Step Online Application Process (REC / PFC / IRFC)',
        paragraphs: [
          'You do not need a commission agent to buy 54EC bonds. Both REC and PFC provide direct online portals with zero brokerage charges, allowing direct UPI/NEFT/RTGS transfers from your bank account.'
        ],
        bullets: [
          'Step 1: Verify your exact LTCG figure with your Chartered Accountant after accounting for stamp duty, transfer expenses, and applicable cost basis rules.',
          'Step 2: Visit the official issuer portal (recindia.nic.in or pfcindia.com) and download the active FY 2026–27 54EC Information Memorandum or start the online application.',
          'Step 3: Keep scanned copies of PAN, Aadhaar/address proof, a cancelled cheque of the bank account where you want annual interest credited, and your Demat Client Master Report (CMR).',
          'Step 4: Transfer the exact multiple of ₹10,000 via RTGS/NEFT to the designated issuer collection account and submit the UTR reference number on the portal before the monthly tranche cut-off.',
          'Step 5: Retain the Allotment Advice and Demat credit statement to report the exact ISIN and investment date in Schedule CG of your Income Tax Return (ITR-2 or ITR-3).'
        ]
      }
    ],
    faqs: [
      {
        question: 'Is TDS deducted on Section 54EC bond interest?',
        answer: 'No. Interest paid on REC, PFC, and IRFC 54EC bonds is exempt from Tax Deducted at Source (TDS). However, the interest itself is NOT tax-free — you must report it under "Income from Other Sources" and pay tax at your income-tax slab rate.'
      },
      {
        question: 'Can NRIs invest in Section 54EC bonds after selling property in India?',
        answer: 'Yes. Non-Resident Indians (NRIs) can subscribe to 54EC bonds on a non-repatriable basis to claim LTCG exemption on immovable property sold in India, provided funds are remitted via NRO/NRE accounts in compliance with FEMA guidelines.'
      },
      {
        question: 'What happens if the bondholder passes away during the 5-year lock-in period?',
        answer: 'Transmission of bonds to a legal heir or registered nominee upon the death of the bondholder does not violate the lock-in condition and does not trigger capital gains tax clawback.'
      }
    ]
  },
  {
    id: 'guide-pm-surya-ghar',
    slug: 'pm-surya-ghar-muft-bijli-yojana-rooftop-solar-guide',
    title: 'PM Surya Ghar: Muft Bijli Yojana (2026) — Subsidy Slabs, Cost Breakdown, Net Metering & Payback Math',
    shortTitle: 'PM Surya Ghar Rooftop Solar Guide',
    category: 'Subsidies & Welfare',
    summary: 'Complete homeowner guide to claiming up to ₹78,000 Direct Benefit Transfer subsidy on rooftop solar under PM Surya Ghar — covering exact kW slabs, DCR panel compliance, DISCOM net metering, and realistic electricity bill savings.',
    metaDescription: 'PM Surya Ghar Muft Bijli Yojana 2026 guide: Check ₹30,000 to ₹78,000 solar subsidy slabs, DCR solar panel rule, pmsuryaghar.gov.in online steps, collateral-free 7% bank loan, and ROI calculation.',
    keywords: ['pm surya ghar muft bijli yojana', 'rooftop solar subsidy 78000', 'pmsuryaghar.gov.in apply', 'dcr solar panel rule', 'solar net metering india'],
    readTimeMinutes: 7,
    publishedDate: '2026-10-18',
    lastUpdated: '2026-11-20',
    authorName: 'SarkarSaathi Energy & Welfare Research Team',
    authorRole: 'Central Subsidies & DBT Analysis',
    reviewerName: 'Editorial Verification Committee',
    primarySources: [
      { label: 'National Portal — PM Surya Ghar: Muft Bijli Yojana', url: 'https://pmsuryaghar.gov.in/' },
      { label: 'Ministry of New and Renewable Energy (MNRE)', url: 'https://mnre.gov.in/' }
    ],
    relatedLinks: [
      { label: 'PM Surya Ghar Official Scheme Profile', path: '/subsidies', slug: 'pm-surya-ghar-muft-bijli-yojana' },
      { label: 'Browse All 98+ Verified Government Subsidies', path: '/subsidies' },
      { label: 'Citizen Q&A on Solar & DBT Rules', path: '/questions' }
    ],
    sections: [
      {
        heading: 'How the Central Financial Assistance (CFA) Subsidy Structure Works',
        paragraphs: [
          'Launched by the Ministry of New and Renewable Energy (MNRE), PM Surya Ghar: Muft Bijli Yojana aims to install grid-connected rooftop solar plants across 1 crore Indian residential households. Unlike older state-managed solar schemes where vendors deducted subsidy upfront (often inflating quotes), PM Surya Ghar uses a transparent Direct Benefit Transfer (DBT) model: the homeowner pays the empanelled vendor and receives the Central subsidy directly into their bank account within 30 days of DISCOM commissioning.',
          'The subsidy is strictly capped at 3 kW capacity for individual residential households. Installing a 4 kW, 5 kW, or 10 kW residential system is fully permitted, but the Central subsidy remains fixed at the maximum ₹78,000 ceiling.'
        ],
        table: {
          headers: ['Monthly Electricity Consumption', 'Recommended Plant Size', 'Central Subsidy (DBT)', 'Typical Installed Cost (Before Subsidy)', 'Net Homeowner Cost'],
          rows: [
            ['0 – 150 units/month', '1 kW – 2 kW', '₹30,000 (1 kW) / ₹60,000 (2 kW)', '₹65,000 – ₹1,25,000', '₹35,000 – ₹65,000'],
            ['150 – 300 units/month', '2 kW – 3 kW', '₹60,000 (2 kW) / ₹78,000 (3 kW)', '₹1,25,000 – ₹1,85,000', '₹65,000 – ₹1,07,000'],
            ['Above 300 units/month', '3 kW or higher', '₹78,000 (Fixed Max Cap)', '₹1,85,000+ (3 kW base)', '₹1,07,000+'],
            ['Resident Welfare Associations (RWA / GHS)', 'Up to 500 kW (common facilities/EV)', '₹18,000 per kW', 'Project-specific', 'Varies by sanctioned load']
          ]
        }
      },
      {
        heading: 'The Mandatory DCR (Domestic Content Requirement) Rule',
        paragraphs: [
          'One of the biggest reasons solar subsidy claims get rejected during DISCOM inspection is using non-DCR imported panels. Under MNRE guidelines, to qualify for the ₹30,000–₹78,000 PM Surya Ghar subsidy, BOTH the solar photovoltaic cells AND the assembled modules must be manufactured in India (certified as DCR panels under the Approved List of Models and Manufacturers — ALMM).',
          'Before paying an advance to any solar installer, confirm that the vendor is listed on the National Portal (pmsuryaghar.gov.in) for your specific DISCOM and insist on DCR module serial numbers with verifiable barcode invoices.'
        ],
        callout: {
          title: 'Off-Grid / Battery Systems Are NOT Eligible for PM Surya Ghar Subsidy',
          body: 'Only Grid-Connected (On-Grid) rooftop solar systems with bi-directional net metering qualify for Central subsidy. Standalone off-grid battery systems and hybrid battery banks are excluded from the ₹78,000 DBT grant.',
          tone: 'warning'
        }
      },
      {
        heading: 'Realistic Payback & Electricity Savings Math (3 kW System)',
        paragraphs: [
          'In most Indian cities receiving 4.5 to 5.5 peak sun hours daily, a well-aligned 3 kW rooftop plant generates approximately 11 to 13 units (kWh) per day — or roughly 330 to 390 units per month (around 4,200 units per year).',
          'If your state DISCOM residential tariff averages ₹7.50 per unit, 4,200 annual units save approximately ₹31,500 per year. Against a net post-subsidy cost of ~₹1,07,000 (or even lower in states offering top-up state subsidies such as Uttar Pradesh), the full investment pays for itself in roughly 3.0 to 3.5 years — followed by 20+ years of near-free solar generation (standard Tier-1 solar panels carry a 25-year performance warranty).'
        ]
      },
      {
        heading: 'Step-by-Step Application & Commissioning Workflow',
        paragraphs: [
          'Every step from technical feasibility approval to subsidy bank credit is tracked digitally through a single application ID on the National Portal:'
        ],
        bullets: [
          'Step 1 (Portal Registration): Register at pmsuryaghar.gov.in using your State, Electricity Distribution Company (DISCOM), Electricity Consumer Account Number, mobile OTP, and email.',
          'Step 2 (Technical Feasibility Approval): Submit your rooftop application. For systems up to 10 kW, most DISCOMs now grant auto/deemed technical feasibility approval within 15 days.',
          'Step 3 (Select Registered Vendor & Install): Choose an empanelled vendor from your DISCOM list, sign the standard model agreement, and install ALMM-listed DCR panels plus BIS-certified grid-tie inverter.',
          'Step 4 (Net Meter Installation & Inspection): Upload plant photos and inverter/panel serial numbers on the portal. Your DISCOM inspects the installation, replaces the old meter with a bi-directional net meter, and issues a Commissioning Certificate.',
          'Step 5 (Claim DBT Subsidy): Log back into pmsuryaghar.gov.in, upload a cancelled cheque matching the electricity bill consumer name, and submit the subsidy request. Funds credit directly to your bank account.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Can I get a collateral-free bank loan for PM Surya Ghar installation?',
        answer: 'Yes. Public sector banks (SBI, PNB, Canara Bank, Bank of Baroda, Union Bank, etc.) offer collateral-free rooftop solar loans up to ₹2 Lakh (for systems up to 3 kW) through the JanSamarth portal at concessional interest rates around 7% p.a. (linked to Repo Rate + 0.50%), with up to 10 years tenure.'
      },
      {
        question: 'What if the electricity bill is in my parent’s name?',
        answer: 'The subsidy bank account must match the name of the registered electricity consumer on the DISCOM bill. Either submit the registered consumer’s bank details or update the electricity connection name with your DISCOM before applying.'
      }
    ]
  },
  {
    id: 'guide-gem-procurement',
    slug: 'gem-portal-procurement-rules-direct-purchase-l1-auto-crac',
    title: 'GeM Portal Procurement Rules (2026): Direct Purchase Limits, L1 Comparison, Auto-CRAC & Payment Timelines',
    shortTitle: 'GeM Portal Rules, L1 & Auto-CRAC Guide',
    category: 'Public Procurement',
    summary: 'Authoritative reference for government buyers and MSE sellers on Government e-Marketplace (GeM): Direct Purchase up to ₹50,000, L1 3-OEM comparison up to ₹5 Lakh, Auto-CRAC timelines, 10-day payment mandate, and tender corrigenda.',
    metaDescription: 'Complete GeM Portal procurement rules 2026: Direct purchase limit (₹25,000 vs ₹50,000), L1 upper/lower limits (₹50,000 to ₹5 Lakh), 3-OEM comparison, Auto-CRAC days, and 10-day payment release after CRAC.',
    keywords: ['gem direct purchase limit', 'l1 purchase upper limit gem', 'how many oems compare l1 purchase', 'payment timeline after crac gem', 'auto crac minimum maximum days', 'corrigendum in tender'],
    readTimeMinutes: 9,
    publishedDate: '2026-10-22',
    lastUpdated: '2026-11-20',
    authorName: 'SarkarSaathi Public Procurement Desk',
    authorRole: 'GFR 2017 & GeM Compliance Analysis',
    reviewerName: 'Editorial Verification Committee',
    primarySources: [
      { label: 'Government e-Marketplace (GeM) Terms & General Conditions', url: 'https://gem.gov.in/' },
      { label: 'General Financial Rules (GFR 2017) — Dept. of Expenditure, MoF', url: 'https://doe.gov.in/' }
    ],
    relatedLinks: [
      { label: 'Browse Live Government & PSU Tenders', path: '/tenders' },
      { label: 'GeM & Public Procurement Verified Q&A', path: '/questions' },
      { label: 'Official Procurement Portals Directory', path: '/official-sources' }
    ],
    sections: [
      {
        heading: 'GFR Rule 149 & GeM Procurement Thresholds at a Glance',
        paragraphs: [
          'Procurement by Central Ministries, Departments, and Public Sector Undertakings on the Government e-Marketplace (GeM) is governed by Rule 149 of the General Financial Rules (GFR), 2017, as periodically amended by the Department of Expenditure, Ministry of Finance. Knowing the exact rupee slab determines whether a buyer can order directly, must run an L1 rate comparison across OEMs, or must float an online Bid / Reverse Auction (RA).',
          'Note an important update frequently tested in government procurement exams and vendor compliance audits: the Department of Expenditure revised the Direct Purchase ceiling from the earlier ₹25,000 limit to ₹50,000 (for non-automobile goods/services, with specific higher provisions for automobiles), while retaining the ₹5,00,000 upper benchmark for L1 comparison without floating a formal bid.'
        ],
        table: {
          headers: ['Procurement Mode on GeM', 'Order Value Slab (GFR Rule 149)', 'OEM / Seller Comparison Mandate', 'Competitive Bidding Required?'],
          rows: [
            ['Direct Purchase (L1 Direct)', 'Up to ₹50,000 (previously ₹25,000)', 'Any available seller meeting requisite quality, specification & delivery period', 'No (Direct Order)'],
            ['Direct Online Purchase via L1 Comparison', 'Above ₹50,000 up to ₹5,00,000 (₹5 Lakh)', 'Minimum 3 different manufacturers (OEMs) meeting specifications', 'No (Mandatory system L1 selection among ≥3 OEMs)'],
            ['Online Bid / Reverse Auction (RA)', 'Above ₹5,00,000 (₹5 Lakh)', 'Open competitive bidding / BOQ / Custom Bid on GeM', 'Yes (Mandatory Online Bid / RA)'],
            ['Direct Purchase Orders per FY', 'No fixed numeric cap on GeM', 'Subject to anti-splitting rule (Rule 149 prohibition on splitting demands)', 'Strict audit ban on splitting larger demands']
          ]
        }
      },
      {
        heading: 'Direct Purchase & L1 Comparison: Answering the Most Asked Compliance Questions',
        paragraphs: [
          'Both government purchasing officers and MSE suppliers regularly face confusion around four specific GeM operational controls:'
        ],
        bullets: [
          'Maximum Price Limit for Direct Purchase: Under revised GFR 2017 guidelines, Direct Purchase on GeM is permitted for item total purchase value up to ₹50,000 (earlier exams and legacy manuals often cite the historical ₹25,000 benchmark; always verify whether your organization’s internal Delegation of Financial Powers has adopted the revised ₹50,000 limit).',
          'L1 Purchase Lower & Upper Limit: The L1 comparison bracket starts strictly above the Direct Purchase limit (₹50,000, historically ₹25,000) and extends up to ₹5,00,000 (₹5 Lakh). Beyond ₹5,00,000, buyers cannot use direct L1 comparison and MUST float an online Bid or Reverse Auction.',
          'How Many OEMs Must a Buyer Compare for L1 Purchase? A buyer must compare product offerings from at least three (3) different Original Equipment Manufacturers (OEMs) that satisfy the technical parameters, and GeM automatically forces procurement from the lowest-priced (L1) compliant seller.',
          'How Many Direct Purchase Orders Can a Single Buyer Generate in One Financial Year? GeM does not impose a hardcoded annual count cap (e.g., 10 or 50 orders) on a buyer. However, GFR strictly prohibits "splitting of demand" — breaking a single ₹1,20,000 requirement into three ₹40,000 Direct Purchase orders to bypass L1 comparison or bidding is a serious audit violation.'
        ]
      },
      {
        heading: 'CRAC, Auto-CRAC Window & Mandatory 10-Day Payment Release Rule',
        paragraphs: [
          'Delayed vendor payments used to plague public contracting. GeM solves this through two automated legal milestones: the Provisional Receipt Certificate (PRC) issued upon physical delivery, and the Consignee Receipt and Acceptance Certificate (CRAC) issued after inspection and acceptance.',
          'Default Minimum and Maximum Days for Auto-CRAC: Once goods are delivered and PRC is generated, the consignee has a standard inspection window (default 10 days for general categories, configurable between a minimum of 10 days and a maximum of 15 days — or up to 30 days for complex technical installations requiring testing/commissioning) to accept or reject the consignment. If the consignee takes neither action before the window expires, the GeM system triggers Auto-CRAC automatically to protect the seller from indefinite bureaucratic delay.',
          'Timeline to Release Payment After CRAC: Under GeM General Terms and Conditions (GTC), the paying authority MUST release 100% payment within 10 calendar days of CRAC generation. For payments delayed beyond 10 days after CRAC, GeM mandates penal interest at 1% per month (or prevailing MSMED Act compound interest norms where applicable for registered MSEs).'
        ],
        callout: {
          title: 'What Is a Corrigendum in a Government Tender?',
          body: 'A Corrigendum is an official written amendment published on GeM or CPPP (eprocure.gov.in) BEFORE the bid submission deadline to modify technical specifications, extend the closing date, clarify pre-bid queries, or correct BoQ quantities. Bidders must always check and sign all published corrigenda; submitting an offer based on an outdated NIT version leads to automatic technical disqualification.',
          tone: 'info'
        }
      },
      {
        heading: 'MSE Preferences & EMD Exemptions Every Small Business Should Claim',
        paragraphs: [
          'Under the Public Procurement Policy for Micro and Small Enterprises (MSEs) Order, Central Ministries and PSUs must procure at least 25% of their annual volume from MSEs (including sub-targets of 4% for SC/ST-owned MSEs and 3% for women-owned MSEs). Sellers holding an active Udyam Registration Certificate verified on GeM gain three powerful bidding advantages:'
        ],
        bullets: [
          'Full Earnest Money Deposit (EMD) Exemption on virtually all standard goods and service tenders (note: traders are generally excluded from MSE manufacturing/service EMD benefits unless expressly covered).',
          'Price Preference (L1 + 15% Purchase Preference): If a participating MSE quotes within 15% of a non-MSE L1 bidder’s price, the MSE can match the L1 price and receive at least 25% of the tendered quantity.',
          'Prior Turnover & Prior Experience Relaxation for DPIIT-recognized startups and MSEs on standard quality-verified goods, provided they satisfy technical specifications.'
        ]
      }
    ],
    faqs: [
      {
        question: 'What is the maximum value for procuring goods/services on GeM through rate comparison without floating a tender?',
        answer: '₹5,00,000 (₹5 Lakh). Between the Direct Purchase ceiling and ₹5,00,000, buyers can procure through L1 online rate comparison across at least 3 different OEMs without floating a formal bid.'
      },
      {
        question: 'Within how many days must payment be released after CRAC is generated by the consignee?',
        answer: 'Within 10 calendar days from the date of CRAC (Consignee Receipt and Acceptance Certificate) generation, per GeM General Terms and Conditions.'
      }
    ]
  },
  {
    id: 'guide-small-savings-comparison',
    slug: 'ppf-vs-sukanya-samriddhi-vs-scss-vs-rbi-frsb-comparison',
    title: 'PPF vs Sukanya Samriddhi (SSY) vs SCSS vs RBI Floating Rate Bonds (2026): Tax, Lock-In & Family Rules',
    shortTitle: 'PPF vs SSY vs SCSS vs RBI FRSB Guide',
    category: 'Small Savings',
    summary: 'Complete decision framework comparing India’s four flagship sovereign savings options — plus official rules on opening 2 Sukanya Samriddhi accounts, separate vs joint SCSS for husband and wife, and NRI PPF continuation.',
    metaDescription: 'Compare PPF (7.1%), Sukanya Samriddhi Yojana (8.2%), SCSS (8.2%), and RBI Floating Rate Savings Bonds (8.05%) in 2026: joint SCSS rules, 2 SSY accounts, NRI PPF rules, and post-tax returns.',
    keywords: ['ppf vs ssy vs scss', 'can scss account be opened jointly', 'can husband and wife open scss separately', 'can i open 2 sukanya samriddhi account', 'can nri continue ppf account', 'what is frsb'],
    readTimeMinutes: 8,
    publishedDate: '2026-10-25',
    lastUpdated: '2026-11-20',
    authorName: 'SarkarSaathi Household Finance Desk',
    authorRole: 'Ministry of Finance Small Savings Analysis',
    reviewerName: 'Editorial Verification Committee',
    primarySources: [
      { label: 'National Savings Institute (NSI) — Ministry of Finance', url: 'https://www.nsiindia.gov.in/' },
      { label: 'India Post Small Savings Schemes', url: 'https://www.indiapost.gov.in/' },
      { label: 'Reserve Bank of India — FRSB 2020 (Taxable) Circular', url: 'https://www.rbi.org.in/' }
    ],
    relatedLinks: [
      { label: 'Public Provident Fund (PPF) Complete Rules', path: '/investments', slug: 'public-provident-fund' },
      { label: 'Sukanya Samriddhi Account (SSY) Profile', path: '/investments', slug: 'sukanya-samriddhi-account' },
      { label: 'Senior Citizens Savings Scheme (SCSS) Profile', path: '/investments', slug: 'senior-citizens-savings-scheme' },
      { label: 'RBI Floating Rate Savings Bonds (FRSB)', path: '/investments', slug: 'rbi-floating-rate-savings-bonds-2020' }
    ],
    sections: [
      {
        heading: 'Side-by-Side Comparison of Sovereign Fixed-Income Schemes (2026)',
        paragraphs: [
          'Every quarter, the Department of Economic Affairs (Ministry of Finance) notifies interest rates for India’s Post Office Small Savings Schemes. Meanwhile, the Reserve Bank of India (RBI) resets the Floating Rate Savings Bonds (FRSB 2020 - Taxable) coupon every January 1 and July 1 at a fixed 35 basis points (0.35%) spread above the prevailing National Savings Certificate (NSC) rate.',
          'Choosing the right scheme depends on three factors: your income-tax regime (Old Regime vs New Regime), your liquidity horizon, and your household eligibility.'
        ],
        table: {
          headers: ['Scheme', 'Notified Rate', 'Deposit Cap', 'Lock-In / Tenure', 'Tax Status (Old / New Regime)'],
          rows: [
            ['Public Provident Fund (PPF)', '7.10% p.a.', '₹500 – ₹1.50 Lakh/FY', '15 Years (+5-yr blocks)', 'EEE: Interest & maturity 100% tax-free in BOTH regimes; 80C in Old Regime'],
            ['Sukanya Samriddhi Yojana (SSY)', '8.20% p.a.', '₹250 – ₹1.50 Lakh/FY', '21 Years (15 yrs deposit)', 'EEE: Highest guaranteed tax-free return in India'],
            ['Senior Citizens Savings Scheme (SCSS)', '8.20% p.a. (Quarterly)', '₹1,000 – ₹30 Lakh/person', '5 Years (+3-yr blocks)', 'Interest taxable; up to ₹50,000 deduction u/s 80TTB (Old Regime)'],
            ['RBI Floating Rate Savings Bonds (FRSB)', '8.05% p.a. (Half-Yearly)', '₹1,000 – No Upper Cap', '7 Years (Senior early exit)', 'Interest taxable per slab; no Section 80C benefit; zero cap ceiling']
          ]
        }
      },
      {
        heading: 'Exact Statutory Rules on Joint Accounts, Multiple Accounts & NRIs',
        paragraphs: [
          'Most confusion around small savings schemes comes from household edge cases. Here are the exact rules notified under the Government Savings Promotion General Rules:'
        ],
        bullets: [
          'Can an SCSS Account Be Opened Jointly? Yes — a Senior Citizens Savings Scheme account can be opened jointly ONLY with your spouse (not with children or siblings). Crucially, the entire deposit balance in a joint SCSS account is attributed solely to the FIRST holder for the ₹30 Lakh limit.',
          'Can Husband and Wife Open SCSS Accounts Separately? Yes! If BOTH spouses are aged 60 or above (or meet early-retirement conditions), each spouse can hold an individual SCSS account up to ₹30 Lakh — giving a retired couple a combined ₹60 Lakh sovereign deposit earning 8.20% p.a. quarterly (₹1,23,000 every quarter combined!).',
          'Can I Open 2 Sukanya Samriddhi Accounts? A parent/guardian can open a maximum of TWO Sukanya Samriddhi accounts in a family — one each for two different girl children (below age 10). You cannot open two SSY accounts for the same daughter. The only exception allowing a third account is the birth of twin/triplet girls in the second delivery (or triplets in the first).',
          'Can an NRI Continue an Existing PPF Account? NRIs cannot open a NEW PPF account. However, if a resident Indian opened a PPF account and subsequently became an NRI, they CAN continue that existing PPF account until its original 15-year maturity on a non-repatriation basis (earning the same resident PPF rate). They cannot extend it in 5-year blocks after maturity.',
          'What Is FRSB? FRSB stands for Floating Rate Savings Bonds, 2020 (Taxable), issued by the Government of India through the RBI. Its interest rate floats every 6 months at NSC rate + 0.35% (currently 7.70% + 0.35% = 8.05% p.a.), with no maximum investment ceiling — making it the top sovereign parking option after exhausting SCSS’s ₹30 Lakh cap.'
        ]
      },
      {
        heading: 'How to Allocate Across These Four Instruments',
        paragraphs: [
          'A disciplined Indian household rarely puts 100% of fixed-income savings into one bucket. Instead, sequence contributions by post-tax yield:'
        ],
        bullets: [
          'Priority 1 (Parents of a Girl Child < 10 Years): Maximize SSY up to ₹1.50 Lakh/year first — 8.20% completely tax-free equals an 11.9% pre-tax FD return for someone in the 30% tax bracket.',
          'Priority 2 (Long-Term Wealth & Retirement Savers): Allocate up to ₹1.50 Lakh/year into PPF (7.10% tax-free = ~10.3% pre-tax FD equivalent in the 30% slab), ideally depositing before the 5th of April each year to capture full 12-month interest.',
          'Priority 3 (Retirees Seeking Regular Cash Flow): Fill individual SCSS accounts (₹30 Lakh per spouse = ₹60 Lakh combined) for guaranteed quarterly payouts at 8.20% p.a.',
          'Priority 4 (Surplus Capital Above ₹60 Lakh): Deploy additional conservative funds into RBI Floating Rate Savings Bonds (8.05% p.a., no upper limit) or State Development Loans via RBI Retail Direct.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Does PPF remain tax-free if I opt for the New Tax Regime?',
        answer: 'Yes. While the Section 80C deposit deduction is only available under the Old Tax Regime, the annual interest earned on PPF and the final maturity corpus remain 100% exempt from tax under Section 10(11) even under the New Tax Regime.'
      },
      {
        question: 'Can senior citizens exit RBI Floating Rate Savings Bonds before 7 years?',
        answer: 'Yes. Premature redemption is permitted for senior citizens after a reduced lock-in period: 6 years for ages 60–70, 5 years for ages 70–80, and 4 years for ages 80+, subject to a penalty equal to 50% of the last 6 months’ interest.'
      }
    ]
  },
  {
    id: 'guide-pm-kisan',
    slug: 'pm-kisan-samman-nidhi-troubleshooting-ekyc-land-seeding-npci',
    title: 'PM-KISAN Samman Nidhi (2026) Complete Guide: Fixing e-KYC, Land Seeding “No” & NPCI DBT Failures',
    shortTitle: 'PM-KISAN Status & e-KYC Troubleshooting',
    category: 'Subsidies & Welfare',
    summary: 'Why eligible farmers miss their ₹2,000 PM-KISAN installments — and the exact official steps to resolve e-KYC pending, Land Seeding “No”, Aadhaar-NPCI mapping errors, and exclusion disputes on pmkisan.gov.in.',
    metaDescription: 'PM-KISAN Samman Nidhi 2026 troubleshooting handbook: Check beneficiary status, complete OTP/face e-KYC, fix Land Seeding No, resolve NPCI Aadhaar DBT seeding, and review exclusion criteria.',
    keywords: ['pm kisan status check', 'pm kisan land seeding no fix', 'pm kisan ekyc online', 'pm kisan npci aadhaar seeding', 'pm kisan exclusion list'],
    readTimeMinutes: 7,
    publishedDate: '2026-10-28',
    lastUpdated: '2026-11-20',
    authorName: 'SarkarSaathi Rural & Agriculture Desk',
    authorRole: 'DBT & Agricultural Welfare Policy',
    reviewerName: 'Editorial Verification Committee',
    primarySources: [
      { label: 'PM-KISAN Official Portal (pmkisan.gov.in)', url: 'https://pmkisan.gov.in/' },
      { label: 'DBT Bharat — NPCI Aadhaar Seeding Guidelines', url: 'https://dbtbharat.gov.in/' }
    ],
    relatedLinks: [
      { label: 'PM-KISAN Official Scheme Profile', path: '/subsidies', slug: 'pm-kisan-samman-nidhi' },
      { label: 'Kisan Credit Card (KCC) Interest Subvention', path: '/subsidies', slug: 'kisan-credit-card-interest-subvention-scheme' },
      { label: 'Browse All Agriculture & Farmer Subsidies', path: '/subsidies' }
    ],
    sections: [
      {
        heading: 'How PM-KISAN Works & The Three Mandatory Green-Tick Checks',
        paragraphs: [
          'Under Pradhan Mantri Kisan Samman Nidhi (PM-KISAN), eligible landholding farmer families across India receive ₹6,000 per year in three equal four-monthly installments of ₹2,000 directly into their Aadhaar-seeded bank accounts. Because disbursements now run strictly through the Aadhaar Payment Bridge System (APBS), a single red "No" on your Beneficiary Status dashboard stops future installments automatically.',
          'Before visiting any office, open pmkisan.gov.in → "Know Your Status" and inspect the Eligibility Status panel. All three fields — Land Seeding, e-KYC Status, and Aadhaar Bank Account Seeding Status — MUST show "Yes".'
        ],
        table: {
          headers: ['Status Error Shown on Portal', 'Root Cause', 'Exact Official Fix'],
          rows: [
            ['e-KYC Status: NO', 'Biometric, OTP, or Face e-KYC not completed', 'Complete OTP e-KYC at pmkisan.gov.in, use PM-KISAN Mobile App Face Authentication, or visit nearest CSC for biometric e-KYC.'],
            ['Land Seeding: NO', 'State revenue/Bhulekh Khatauni not mapped to PM-KISAN ID', 'Submit Aadhaar + latest Khatauni/RoR copy to your Block Agriculture Officer / Patwari / Lekhpal for state portal verification.'],
            ['Aadhaar Bank Seeding: NO', 'Bank account has Aadhaar KYC, but NPCI DBT Mapper is inactive', 'Submit an NPCI Aadhaar Seeding Mandate at your bank branch, OR open an India Post Payments Bank (IPPB) DBT account.'],
            ['FTO Processed: NO (Reason: Income Tax Payee)', 'A family member filed/paid Income Tax in last assessment year', 'Excluded under Paragraph 2 guidelines; if flagged in error, submit ITR proof & grievance to District Nodal Officer.']
          ]
        }
      },
      {
        heading: 'Who Is Excluded From PM-KISAN (Official Paragraph 2 Rules)?',
        paragraphs: [
          'Under the operational guidelines of the Ministry of Agriculture & Farmers Welfare, a "family" comprises husband, wife, and minor children. Even if a household owns cultivable agricultural land, the entire family becomes ineligible if ANY member falls under the higher economic status exclusion list:'
        ],
        bullets: [
          'All institutional landholders (trusts, companies, societies).',
          'Current or former holders of constitutional posts, Ministers, MPs, MLAs, MLCs, Mayors, and District Panchayat Chairpersons.',
          'Serving or retired officers and regular employees of Central/State Government Ministries, PSUs, and autonomous bodies (Multi-Tasking Staff / Class IV / Group D staff are EXEMPT from this exclusion and remain eligible).',
          'Superannuated pensioners receiving a monthly pension of ₹10,000 or more (again, excluding Class IV / Group D pensioners).',
          'Any person who paid Income Tax in the preceding assessment year, or registered practising professionals (Doctors, Engineers, Lawyers, Chartered Accountants, Architects).'
        ]
      },
      {
        heading: 'Understanding Bank Account Linking vs. NPCI DBT Mapping',
        paragraphs: [
          'Thousands of farmers tell their bank manager "my Aadhaar is already linked," yet their ₹2,000 installment still bounces. That happens because e-KYC linking inside a bank’s internal software is NOT the same as seeding your account on the National Payments Corporation of India (NPCI) central mapper.',
          'When PM-KISAN releases a tranche, the government does NOT send money to a specific IFSC or account number anymore — it sends money to your 12-digit Aadhaar number. NPCI then routes that ₹2,000 into whichever single bank account is currently marked "Active" on the NPCI Mapper. You can check your active DBT bank on the official UIDAI myAadhaar portal under "Bank Seeding Status".'
        ]
      }
    ],
    faqs: [
      {
        question: 'If my Land Seeding was fixed this month, will I receive missed past installments?',
        answer: 'Once your Land Seeding, e-KYC, and NPCI DBT mapping all turn green ("Yes"), eligible pending installments held solely due to verification delays are generally released in subsequent FTO batches, subject to state verification and budget cycle rules.'
      },
      {
        question: 'Can both husband and wife receive ₹6,000 each under PM-KISAN?',
        answer: 'No. PM-KISAN defines the beneficiary unit as a family (husband, wife, and minor children). Only one ₹6,000 annual benefit is permitted per family unit; duplicate claims by spouses are subject to recovery.'
      }
    ]
  },
  {
    id: 'guide-msme-loans',
    slug: 'pmegp-vs-mudra-vs-cgtmse-msme-subsidy-loan-guide',
    title: 'PMEGP vs PM Mudra Loan (EDP Training) vs CGTMSE (2026): Complete MSME Subsidy & Funding Guide',
    shortTitle: 'PMEGP vs Mudra vs CGTMSE MSME Guide',
    category: 'MSME & Housing',
    summary: 'How small business founders and rural entrepreneurs combine PMEGP 15%–35% margin money subsidy, Mudra collateral-free loans (Tarun Plus up to ₹20 Lakh), EDP training requirements, and CGTMSE credit guarantees.',
    metaDescription: 'Compare PMEGP subsidy (15%-35%), PM Mudra Yojana (Shishu/Kishor/Tarun/Tarun Plus up to ₹20L), EDP training rules, and CGTMSE collateral-free MSME loans in India.',
    keywords: ['what is edp training in mudra loan', 'pmegp subsidy percentage', 'mudra loan limit 20 lakh', 'cgtmse collateral free loan', 'msme subsidy india 2026'],
    readTimeMinutes: 8,
    publishedDate: '2026-10-30',
    lastUpdated: '2026-11-20',
    authorName: 'SarkarSaathi MSME & Enterprise Desk',
    authorRole: 'KVIC, SIDBI & Credit Guarantee Analysis',
    reviewerName: 'Editorial Verification Committee',
    primarySources: [
      { label: 'KVIC PMEGP Online Portal (kviconline.gov.in)', url: 'https://www.kviconline.gov.in/pmegpeportal/' },
      { label: 'Udyam Registration Portal — Ministry of MSME', url: 'https://udyamregistration.gov.in/' },
      { label: 'JanSamarth National Credit-Linked Schemes Portal', url: 'https://www.jansamarth.in/' }
    ],
    relatedLinks: [
      { label: 'PMEGP Credit-Linked Subsidy Official Profile', path: '/subsidies', slug: 'pmegp-credit-linked-subsidy' },
      { label: 'Credit Guarantee Scheme for Startups (CGSS)', path: '/investment-schemes', slug: 'credit-guarantee-scheme-for-startups' },
      { label: 'Browse All MSME & Industrial Subsidies', path: '/subsidies' }
    ],
    sections: [
      {
        heading: 'Comparing India’s Three Core MSME Financing Schemes',
        paragraphs: [
          'First-time entrepreneurs often confuse capital subsidy schemes with collateral-free loan guarantees. Understanding the difference between PMEGP, Pradhan Mantri Mudra Yojana (PMMY), and CGTMSE can save a new manufacturing or service unit up to 35% of its capital cost.'
        ],
        table: {
          headers: ['Scheme', 'Maximum Project / Loan Cap', 'Direct Government Subsidy?', 'Collateral Required?', 'Ideal Business Stage'],
          rows: [
            ['PMEGP (KVIC)', '₹50 Lakh (Manufacturing) / ₹20 Lakh (Service)', 'YES: 15%–25% (General) / 25%–35% (Special Category)', 'Collateral-free up to ₹10L (often covered via CGTMSE above)', 'Brand-new micro enterprises (existing units only for 2nd expansion loan)'],
            ['PM Mudra Yojana (PMMY)', 'Shishu (₹50k), Kishor (₹5L), Tarun (₹10L), Tarun Plus (₹20L)', 'No direct capital subsidy (interest rates per bank)', 'Zero collateral mandatory', 'Micro shops, traders, artisans, small service & food businesses'],
            ['CGTMSE Credit Guarantee', 'Up to ₹5 Crore (expanded limits for eligible MSEs)', 'No capital grant; provides 75%–85% lender guarantee cover', 'Zero third-party collateral / property mortgage', 'Scaling Udyam-registered manufacturing & service SMEs']
          ]
        }
      },
      {
        heading: 'What Is EDP Training in PMEGP & Mudra Loans?',
        paragraphs: [
          'EDP stands for Entrepreneurship Development Programme — a structured practical training course conducted by Rural Self Employment Training Institutes (RSETIs), KVIC training centres, or accredited online portals (such as the official Udyami portal).',
          'Under PMEGP, completing mandatory EDP training (typically 10 days for projects above ₹5 Lakh and 5 days for smaller projects) is compulsory BEFORE the bank releases your loan disbursement and claims the 15%–35% Margin Money Subsidy from KVIC. Under PM Mudra Yojana, EDP training is not legally mandatory for small Shishu loans, but banks and RSETIs actively recommend (and sometimes require for first-generation borrowers) EDP certification because it equips applicants with bookkeeping, GST basics, working capital budgeting, and cash-flow planning — significantly increasing bank sanction rates.'
        ],
        callout: {
          title: 'How PMEGP 3-Year Subsidy Lock-In Works',
          body: 'When your PMEGP loan is sanctioned, KVIC parks your 15%–35% Margin Money Grant in a Term Deposit Receipt (TDR) at your financing bank branch for 3 years. You pay zero interest on the subsidy portion during those 3 years, and after physical verification confirms your business is running smoothly at Year 3, the TDR is permanently credited against your loan principal.',
          tone: 'success'
        }
      },
      {
        heading: 'Why MSME Applications Get Rejected by Banks — And How to Prevent It',
        paragraphs: [
          'Applying online on kviconline.gov.in or jansamarth.in is only Step 1; actual loan sanction rests with your selected public or private sector bank branch. Strengthen your file with four fundamentals:'
        ],
        bullets: [
          'Realistic Detailed Project Report (DPR): Avoid copy-pasted cybercafe project reports with inflated 60% profit margins. Include verifiable supplier quotations for machinery, realistic electricity/rent expenses, and conservative Year-1 utilization.',
          'Clean CIBIL / Credit History: Even collateral-free Mudra and PMEGP loans require a clean personal credit history without active loan defaults or written-off credit cards.',
          'Udyam Registration First: Obtain free Udyam Registration at udyamregistration.gov.in (never pay private websites charging ₹1,500–₹3,000 for Udyam!) before visiting your bank.',
          'Own Contribution Readiness: Under PMEGP, General category applicants must contribute 10% of project cost (5% for SC/ST/OBC/Women/Minorities/Ex-servicemen/PH/North-East/Hill regions).'
        ]
      }
    ],
    faqs: [
      {
        question: 'Can a trading or retail grocery shop get PMEGP subsidy?',
        answer: 'Standard retail trading is generally excluded from PMEGP, which focuses on manufacturing, processing, and eligible service enterprises. Retail shops and traders should apply under PM Mudra Yojana (PMMY) instead.'
      },
      {
        question: 'Who is eligible for the ₹20 Lakh Tarun Plus Mudra loan?',
        answer: 'Entrepreneurs who previously availed and successfully repaid a Tarun category Mudra loan (up to ₹10 Lakh) with a clean repayment track record qualify for the enhanced Tarun Plus limit up to ₹20 Lakh.'
      }
    ]
  },
  {
    id: 'guide-kvp-nsc-post-office',
    slug: 'kvp-nsc-post-office-small-savings-premature-closure-rules',
    title: 'Post Office Small Savings Rules (2026): KVP Premature Closure, NSC Tax Rules & Tax-Saver Bank FDs',
    shortTitle: 'KVP Premature Closure, NSC & Tax-Saver FD Rules',
    category: 'Small Savings',
    summary: 'Exact statutory rules for breaking Kisan Vikas Patra (KVP) before its 115-month maturity, how National Savings Certificate (NSC) accrued interest qualifies for Section 80C, and how PSU Bank Tax Saver FDs compare.',
    metaDescription: 'Can you close Kisan Vikas Patra (KVP) before maturity? Read 2026 rules on KVP 2.5-year premature encashment, NSC 7.7% interest compounding, and Tax Saver FDs in PSU banks like Canara Bank & SBI.',
    keywords: ['can we close kvp before maturity', 'can we break kisan vikas patra before maturity', 'what is tax saver deposit in canara bank', 'nsc interest rate 2026', 'post office small savings rules'],
    readTimeMinutes: 7,
    publishedDate: '2026-11-02',
    lastUpdated: '2026-11-20',
    authorName: 'SarkarSaathi Household Finance Desk',
    authorRole: 'Post Office & Retail Banking Analysis',
    reviewerName: 'Editorial Verification Committee',
    primarySources: [
      { label: 'India Post — KVP & NSC Official Rules', url: 'https://www.indiapost.gov.in/' },
      { label: 'National Savings Institute (NSI)', url: 'https://www.nsiindia.gov.in/' }
    ],
    relatedLinks: [
      { label: 'Explore All Post Office & Small Savings Schemes', path: '/investment-schemes' },
      { label: 'Small Savings Verified Q&A', path: '/questions' },
      { label: 'Interactive Maturity Calculators', path: '/tools' }
    ],
    sections: [
      {
        heading: 'Can You Close or Break Kisan Vikas Patra (KVP) Before Maturity?',
        paragraphs: [
          'Kisan Vikas Patra (KVP) currently offers 7.50% p.a. compounded annually, doubling your principal in exactly 115 months (9 years and 7 months). Unlike Public Provident Fund, KVP does NOT offer Section 80C tax deduction, and the accrued interest is taxable.',
          'Yes — you CAN close KVP prematurely, but ONLY under specific conditions defined in the Kisan Vikas Patra Scheme Rules:'
        ],
        bullets: [
          'After 2 Years and 6 Months (30 Months) from Date of Deposit: Any KVP holder may prematurely encash the certificate at the Post Office by submitting Form-3 along with the passbook/certificate. Interest is paid at the notified premature encashment table (slightly lower than the full 7.50% maturity yield).',
          'Before 2 Years and 6 Months: Premature closure is STRICTLY prohibited except in three statutory emergencies: (1) death of a single holder or any/all holders in a joint account, (2) forfeiture by a pledgee who is a Gazetted Officer, or (3) order by a competent court of law.'
        ]
      },
      {
        heading: 'National Savings Certificate (NSC) vs. Tax Saver Bank FD (Canara Bank, SBI, BoB)',
        paragraphs: [
          'Taxpayers opting for the Old Income Tax Regime often compare 5-year National Savings Certificates (NSC VIII Issue) against 5-year Tax Saver Fixed Deposits offered by public sector banks such as Canara Bank (Canara Tax Saver Deposit), SBI, and Bank of Baroda.'
        ],
        table: {
          headers: ['Feature', 'National Savings Certificate (NSC)', 'PSU Bank Tax Saver FD (e.g., Canara Bank Tax Saver)', 'Key Takeaway'],
          rows: [
            ['Tenure / Lock-In', '5 Years mandatory lock-in', '5 Years mandatory lock-in (zero premature withdrawal)', 'Neither allows liquidity before 5 years except on death.'],
            ['Maximum Deposit Cap', 'No upper investment limit (80C capped at ₹1.50L)', 'Strictly capped at ₹1.50 Lakh per FY under Tax Saver Deposit Scheme', 'NSC allows deploying larger sums; Tax Saver FD stops at ₹1.5L.'],
            ['Interest Reinvestment 80C Benefit', 'Years 1–4 accrued interest automatically qualifies for Sec 80C', 'Interest does NOT qualify for extra 80C deduction', 'NSC provides compounding 80C tax shelter in Years 1–4.'],
            ['TDS on Interest', 'Zero TDS deducted (interest still taxable in ITR)', 'TDS deducted at 10% if annual interest exceeds threshold (Form 15G/15H applicable)', 'NSC simplifies cash-flow tracking without annual TDS leakage.'],
            ['Loan / Pledge Facility', 'Can be pledged as security to banks for loans', 'Cannot be pledged as collateral for any loan or overdraft', 'NSC offers superior emergency collateral flexibility.']
          ]
        }
      },
      {
        heading: 'What Is a Tax Saver Deposit in Canara Bank & Other Public Sector Banks?',
        paragraphs: [
          'A Tax Saver Deposit (such as Canara Bank Tax Saver Deposit Scheme) is a statutory 5-year term deposit notified under the Bank Term Deposit Scheme, 2006. Deposits from ₹100 up to ₹1,50,000 in a financial year qualify for tax deduction under Section 80C of the Income Tax Act (Old Regime) for Resident Individuals and HUFs.',
          'Senior citizens (aged 60+) generally receive an extra 0.50% p.a. interest rate over regular depositors and can claim up to ₹50,000 interest deduction under Section 80TTB. However, remember three strict statutory locks: (1) premature withdrawal is barred before 5 years (except upon depositor death), (2) auto-renewal is not permitted, and (3) no loan or overdraft can be taken against the Tax Saver FD receipt.'
        ]
      }
    ],
    faqs: [
      {
        question: 'What is PORD (Post Office Recurring Deposit)?',
        answer: 'PORD stands for 5-Year Post Office Recurring Deposit Account — a sovereign-backed monthly savings scheme (currently earning 6.70% p.a. compounded quarterly) where citizens deposit as little as ₹100/month for 60 months, with loan facility up to 50% of balance after 1 year.'
      },
      {
        question: 'Does Kisan Vikas Patra (KVP) save Income Tax under Section 80C?',
        answer: 'No. KVP deposits do NOT qualify for Section 80C tax deduction, and the interest earned is taxable at your slab rate. For Section 80C benefits at the Post Office, choose PPF, SSY, SCSS, 5-Year Post Office TD, or NSC.'
      }
    ]
  },
  {
    id: 'guide-pmay-housing',
    slug: 'pmay-urban-gramin-housing-subsidy-woman-co-owner-rules',
    title: 'PM Awas Yojana (PMAY-U 2.0 & PMAY-G) Guide: Why Woman Co-Ownership Is Mandatory, Income Slabs & Verification',
    shortTitle: 'PMAY Housing Subsidy & Woman Co-Owner Rules',
    category: 'MSME & Housing',
    summary: 'Everything homebuyers and rural families need to know about PMAY-Urban 2.0 Interest Subsidy Scheme (ISS), PMAY-Gramin assistance, why a woman co-owner is mandatory on the property title, and how to avoid rejection.',
    metaDescription: 'PM Awas Yojana (PMAY-U 2.0 & PMAY-G) 2026 guide: Why a woman co-owner is required for PMAY subsidy, EWS/LIG/MIG income limits, ₹1.80 Lakh interest subsidy math, and pmaymis.gov.in steps.',
    keywords: ['why is a woman co-owner required for pmay subsidy', 'pmay urban 2.0 interest subsidy', 'pmay gramin eligibility', 'pmay ews lig mig income limit'],
    readTimeMinutes: 7,
    publishedDate: '2026-11-05',
    lastUpdated: '2026-11-20',
    authorName: 'SarkarSaathi Housing & Urban Policy Desk',
    authorRole: 'MoHUA & Rural Development Research',
    reviewerName: 'Editorial Verification Committee',
    primarySources: [
      { label: 'PMAY-Urban 2.0 Official Portal (pmay-urban.gov.in)', url: 'https://pmay-urban.gov.in/' },
      { label: 'PMAY-Gramin Official Portal (pmayg.nic.in)', url: 'https://pmayg.nic.in/' }
    ],
    relatedLinks: [
      { label: 'Pradhan Mantri Awas Yojana — Urban (PMAY-U 2.0)', path: '/subsidies', slug: 'pradhan-mantri-awas-yojana-urban' },
      { label: 'Pradhan Mantri Awas Yojana — Gramin (PMAY-G)', path: '/subsidies', slug: 'pradhan-mantri-awas-yojana-gramin' },
      { label: 'All Housing & Welfare Subsidies', path: '/subsidies' }
    ],
    sections: [
      {
        heading: 'Why Is a Woman Co-Owner Required for PMAY Subsidy?',
        paragraphs: [
          'One of the most frequently searched rules in Indian housing finance is why PMAY mandates female ownership or joint co-ownership on the sale deed. Under Ministry of Housing and Urban Affairs (MoHUA) guidelines for PMAY-Urban (EWS and LIG categories, and promoted across PMAY-U 2.0 and PMAY-Gramin), houses acquired or constructed with Central assistance must be registered in the name of the adult female head of the household or in the joint names of the male head and his wife.',
          'This rule serves three deliberate public policy objectives: (1) strengthening women’s financial security and asset ownership inside the household, (2) preventing unilateral distress sale or eviction, and (3) complementing state-level stamp duty rebates of 1% to 2% offered to female property buyers across major Indian states.'
        ],
        callout: {
          title: 'Statutory Exception to the Woman Ownership Rule',
          body: 'Only when there is NO adult female member in the beneficiary family (for example, an unmarried single male applicant, a widower without adult daughters, or households with no adult female member) can the house be registered solely in the male member’s name — supported by a self-declaration.',
          tone: 'info'
        }
      },
      {
        heading: 'PMAY-Urban 2.0 Verticals & Income Eligibility Slabs',
        paragraphs: [
          'PMAY-Urban 2.0 targets 1 crore urban poor and middle-class families across four operational verticals: Beneficiary Led Construction (BLC), Affordable Housing in Partnership (AHP), Affordable Rental Housing (ARH), and the Interest Subsidy Scheme (ISS) for home-loan buyers.'
        ],
        table: {
          headers: ['Beneficiary Category', 'Annual Household Income Limit', 'PMAY-U 2.0 Interest Subsidy Scheme (ISS) Benefit'],
          rows: [
            ['EWS (Economically Weaker Section)', 'Up to ₹3,00,000', '4% interest subsidy on first ₹8 Lakh of home loan (up to ₹25L loan, property ≤ ₹35L); max ₹1.80 Lakh NPV over 5 annual tranches.'],
            ['LIG (Low Income Group)', '₹3,00,001 – ₹6,00,000', 'Same 4% interest subsidy on first ₹8 Lakh loan component; max ₹1.80 Lakh credited via DBT to loan account.'],
            ['MIG (Middle Income Group)', '₹6,00,001 – ₹9,00,000', 'Eligible under PMAY-U 2.0 ISS for loans up to ₹25 Lakh on homes priced up to ₹35 Lakh (carpet area up to 120 sqm).']
          ]
        }
      },
      {
        heading: 'Mandatory Pucca House & Aadhaar Deduplication Checks',
        paragraphs: [
          'To qualify for PMAY-U 2.0 or PMAY-G, the beneficiary family (husband, wife, and unmarried children) must NOT own a pucca (all-weather) house anywhere in India, and must not have availed benefits under any Central or State housing scheme during the last 20 years. Aadhaar numbers of all adult family members are cross-checked on the PMAY unified portal to eliminate duplicate claims.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Can a single unmarried man apply for PMAY-Urban 2.0?',
        answer: 'Yes, an earning adult member (irrespective of marital status) can be treated as a separate household if they do not own a pucca house anywhere in India and satisfy the income criteria.'
      },
      {
        question: 'How is the ₹1.80 Lakh PMAY-U 2.0 Interest Subsidy credited?',
        answer: 'Unlike older upfront lump-sum CLSS payouts, PMAY-U 2.0 ISS releases the ₹1.80 Lakh subsidy in 5 equal annual installments directly into the borrower’s active home loan account via DBT, provided the loan remains active and >50% principal is unpaid.'
      }
    ]
  },
  {
    id: 'guide-rbi-sovereign-debt',
    slug: 'sovereign-gold-bonds-state-development-loans-cash-management-bills',
    title: 'RBI Retail Direct & Sovereign Markets Guide: State Development Loans (SDLs), Cash Management Bills, Nifty 50 & CPSE ETFs',
    shortTitle: 'SDLs, Cash Management Bills, SGB & CPSE ETF Guide',
    category: 'Sovereign Investments',
    summary: 'Plain-English institutional guide for Indian retail investors explaining State Development Loans (SDLs), Cash Management Bills (CMBs), Sovereign Gold Bonds (SGB), CPSE ETFs, and Nifty 50 Index Funds.',
    metaDescription: 'Understand State Development Loans (SDLs), Cash Management Bills (CMBs), Sovereign Gold Bonds (SGB), CPSE ETFs, and Nifty 50 Index Funds in India — yields, risks, taxation, and RBI Retail Direct access.',
    keywords: ['what is state development loans', 'what are cash management bills', 'what is cpse etf', 'what is nifty 50 index fund', 'rbi retail direct gilt account'],
    readTimeMinutes: 8,
    publishedDate: '2026-11-08',
    lastUpdated: '2026-11-20',
    authorName: 'SarkarSaathi Capital Markets & RBI Research Desk',
    authorRole: 'G-Sec, PSU Debt & Passive Index Analysis',
    reviewerName: 'Editorial Verification Committee',
    primarySources: [
      { label: 'RBI Retail Direct Portal (rbiretaildirect.org.in)', url: 'https://rbiretaildirect.org.in/' },
      { label: 'Reserve Bank of India — Government Securities Market Primer', url: 'https://www.rbi.org.in/' },
      { label: 'SEBI Investor Education Portal', url: 'https://investor.sebi.gov.in/' }
    ],
    relatedLinks: [
      { label: 'Sovereign Gold Bond Scheme (SGB) Details', path: '/investments', slug: 'sovereign-gold-bond-scheme' },
      { label: 'CPSE ETF Disinvestment Profile', path: '/investments', slug: 'cpse-etf-disinvestment' },
      { label: 'Andhra Pradesh State Development Loan (SDL)', path: '/investments', slug: 'andhra-pradesh-state-development-loan' },
      { label: 'Explore All Sovereign Bonds & PSU ETFs', path: '/investments' }
    ],
    sections: [
      {
        heading: 'State Development Loans (SDLs): Higher Yield With Sovereign-Grade Backing',
        paragraphs: [
          'State Development Loans (SDLs) are dated government securities issued by Indian State Governments (such as Maharashtra, Gujarat, Tamil Nadu, Karnataka, or Andhra Pradesh) through Reserve Bank of India auctions to finance state infrastructure and budgetary expenditure.',
          'Because RBI manages SDL auctions and directly services interest and maturity repayments out of state accounts, SDLs enjoy statutory liquidity ratio (SLR) status and near-zero credit default risk — yet typically yield 0.30% to 0.60% higher than Central Government Securities (G-Secs) of identical maturity. Retail investors can buy SDLs commission-free with a minimum lot of ₹10,000 through a free RBI Retail Direct Gilt (RDG) account.'
        ]
      },
      {
        heading: 'What Are Cash Management Bills (CMBs)?',
        paragraphs: [
          'Cash Management Bills (CMBs) are ultra-short-term sovereign money-market instruments issued jointly by the Government of India and the Reserve Bank of India to bridge temporary cash-flow mismatches in the Central Government’s treasury. CMBs share the exact same structure as Treasury Bills (T-Bills) — they are issued at a discount to face value and redeemed at par — with one defining difference: CMBs ALWAYS have a maturity of LESS than 91 days (unlike standard 91-day, 182-day, and 364-day T-Bills).',
          'Because CMBs are issued on an ad-hoc basis whenever the government requires short-term liquidity, they are primarily subscribed by banks, primary dealers, and institutional treasuries, though they are fully backed by the sovereign guarantee of India.'
        ]
      },
      {
        heading: 'Comparing Sovereign Debt vs. PSU ETFs vs. Nifty 50 Index Funds',
        paragraphs: [
          'Modern Indian portfolios combine sovereign debt for capital stability with low-cost passive equity funds for long-term inflation-beating growth:'
        ],
        table: {
          headers: ['Instrument', 'Underlying Assets', 'Risk Profile', 'Primary Role in Portfolio'],
          rows: [
            ['State Development Loans (SDLs)', 'State Govt sovereign bonds (3–30 yr tenures)', 'Very Low (Sovereign-backed)', 'Locking in fixed semi-annual interest via RBI Retail Direct'],
            ['Cash Management Bills (CMBs)', 'Central Govt discounted bills (<91 days)', 'Lowest (Money Market Sovereign)', 'Ultra-short institutional cash management'],
            ['Sovereign Gold Bonds (SGB)', '24K 999 purity gold price + 2.50% p.a. coupon', 'Market-linked (Gold Price)', 'Tax-free capital gains if held to 8-year maturity'],
            ['CPSE ETF', 'Concentrated basket of Maharatna/Navratna PSUs (NTPC, ONGC, Coal India, BEL, Power Grid)', 'High (Sectoral PSU Equity)', 'Government disinvestment vehicle with PSU dividend yield exposure'],
            ['Nifty 50 Index Fund', 'Top 50 largest NSE-listed Indian companies across sectors', 'Moderate-High (Broad Equity)', 'Core long-term diversified wealth creation with ultra-low expense ratio']
          ]
        }
      },
      {
        heading: 'What Is a Nifty 50 Index Fund & What Is CPSE ETF?',
        paragraphs: [
          'A Nifty 50 Index Fund is a passive mutual fund (or Exchange Traded Fund) that mirrors the exact portfolio and weightage of the NSE Nifty 50 benchmark — giving investors instant ownership in India’s 50 largest blue-chip companies across banking, IT, energy, telecom, and FMCG at expense ratios as low as 0.05% to 0.20% p.a., without fund-manager stock-picking risk.',
          'By contrast, the CPSE ETF (Central Public Sector Enterprises Exchange Traded Fund), launched by the Department of Investment and Public Asset Management (DIPAM) and managed by Nippon India Mutual Fund, tracks the Nifty CPSE Index — a concentrated thematic basket of roughly 10–12 major government-owned energy, power, mining, and defence PSUs. Because CPSE ETF is heavily concentrated in power, oil, and coal sectors, investors should treat it as a tactical satellite allocation rather than a substitute for a diversified Nifty 50 Index Fund.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Is interest from State Development Loans (SDLs) subject to TDS?',
        answer: 'No. Under Section 193 of the Income Tax Act, interest on Government Securities (including Central G-Secs and State Development Loans) is exempt from TDS, though investors must declare the interest under "Income from Other Sources" and pay tax per their slab.'
      },
      {
        question: 'Can retail investors open an RBI Retail Direct account for free?',
        answer: 'Yes. Resident Indian individuals (and eligible NRIs under FEMA) can open an RBI Retail Direct Gilt (RDG) account online at rbiretaildirect.org.in with zero account-opening fees and zero annual maintenance charges.'
      }
    ]
  },
  {
    id: 'guide-fake-portal-safety',
    slug: 'verify-official-gov-in-portals-avoid-sarkari-yojana-scams',
    title: 'Citizen Cyber Safety Handbook (2026): How to Verify Authentic .gov.in Portals & Spot Fake Sarkari Loan/Subsidy Scams',
    shortTitle: 'How to Verify .gov.in Portals & Avoid Scams',
    category: 'Citizen Safety',
    summary: 'Practical 5-point domain authentication checklist helping Indian citizens, farmers, and MSMEs identify fake Mudra/PM-KISAN/PMEGP websites, bogus UPI "approval fee" scams, and WhatsApp APK traps.',
    metaDescription: 'Learn how to verify genuine Indian government websites (.gov.in / .nic.in), spot fake PM Mudra, PM-KISAN, and PMEGP loan scams, and report fraud on cybercrime.gov.in (Helpline 1930).',
    keywords: ['how to verify official gov in website', 'fake mudra loan portal scam', 'pm kisan fake apk scam', 'cybercrime helpline 1930 india', 'official government portals india'],
    readTimeMinutes: 6,
    publishedDate: '2026-11-12',
    lastUpdated: '2026-11-20',
    authorName: 'SarkarSaathi Civic Trust & Verification Team',
    authorRole: 'Digital Governance & Domain Auditing',
    reviewerName: 'Editorial Verification Committee',
    primarySources: [
      { label: 'National Cyber Crime Reporting Portal (cybercrime.gov.in)', url: 'https://cybercrime.gov.in/' },
      { label: 'PIB Fact Check Unit (factcheck.pib.gov.in)', url: 'https://factcheck.pib.gov.in/' },
      { label: 'National Portal of India (india.gov.in)', url: 'https://india.gov.in/' }
    ],
    relatedLinks: [
      { label: 'Browse All 54 Verified Official .gov.in Portals', path: '/official-sources' },
      { label: 'Warning Signs of Fraudulent Loan & Tender Portals (Q&A)', path: '/questions', slug: 'q-nw-009' },
      { label: 'About SarkarSaathi Editorial Verification', path: '/about' }
    ],
    sections: [
      {
        heading: 'The 5-Point Domain Authenticity Checklist Before Entering Aadhaar or Bank Details',
        paragraphs: [
          'Every week, thousands of citizens lose hard-earned savings to sophisticated clone websites pretending to sanction PM Mudra loans, PMEGP subsidies, PM Surya Ghar installations, or PM-KISAN e-KYC updates. Scammers purchase lookalike domains such as "pm-mudra-yojana-apply.org", "udyam-registration-online.in", or "pmkisan-ekyc-update.com" and run paid search ads or WhatsApp forwards.',
          'Before typing your Aadhaar, PAN, OTP, or paying even ₹1, run this 10-second verification checklist:'
        ],
        bullets: [
          '1. Check the Exact Domain Ending: Authentic Central and State Government application portals strictly end in .gov.in or .nic.in (with limited statutory exceptions such as rbi.org.in, nabard.org, sidbi.in, and jansamarth.in). A .com, .org, .net, .co.in, or .xyz domain claiming to be an official ministry application form is fake.',
          '2. Never Pay Upfront "File Processing" or "Approval" Fees via Personal UPI: Official government portals (Udyam, PM-KISAN, myScheme, JanSamarth, PM Surya Ghar) charge ZERO registration fees. Even where statutory tender fees apply (e.g., eProcure), payments route exclusively through integrated government treasuries — never to a personal UPI ID or QR code sent on WhatsApp.',
          '3. Never Install ".apk" Files Sent on WhatsApp: A major 2025–2026 cyber scam circulates "PM-KISAN_Beneficiary_List.apk" or "RTO_Challan.apk" files on WhatsApp. Installing an APK grants malware access to your SMS OTPs and banking apps. Download official apps ONLY from Google Play Store / Apple App Store published by NIC eGov Mobile Apps.',
          '4. Verify "Sanction Letters" Against Official Portals: Scammers email forged Ministry of Finance or Mudra "Loan Approval Certificates" demanding ₹2,500–₹15,000 for "GST", "Insurance", or "Agreement Stamp". Genuine bank loans deduct documented processing charges only through your loan sanction ledger — never via upfront personal bank transfers.',
          '5. Cross-Check on India.gov.in or PIB Fact Check: When unsure whether a viral scheme offering "Free Laptop" or "₹5,000 Monthly Allowance" is real, search PIB Fact Check (factcheck.pib.gov.in) or our audited Official Sources directory.'
        ]
      },
      {
        heading: 'What to Do Immediately If You Paid a Fake Portal or Shared an OTP',
        paragraphs: [
          'Speed is critical during financial cyber fraud because banks can freeze fraudulent beneficiary accounts inside the first golden hour:'
        ],
        bullets: [
          'Call National Cyber Crime Helpline 1930 immediately (24×7 toll-free across India) with your UPI/UTR transaction ID, date, time, and debited bank account number.',
          'File an online financial fraud complaint at cybercrime.gov.in and save the acknowledgement number.',
          'Call your bank’s official fraud helpline to freeze compromised cards/UPI handles and request a formal chargeback/lien mark.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Is Udyam MSME Registration free or paid?',
        answer: 'Udyam Registration is 100% FREE on the only official Ministry of MSME portal: udyamregistration.gov.in. Private websites charging ₹1,000–₹3,500 are commercial middlemen, not the government.'
      },
      {
        question: 'Is SarkarSaathi.org a government website?',
        answer: 'No. SarkarSaathi.org is an independent, non-governmental civic research and educational publication. We never collect Aadhaar/PAN numbers, never charge fees, and always direct citizens to the official .gov.in portal to submit applications.'
      }
    ]
  }
];

export function getGuideBySlug(slug: string): EditorialGuide | undefined {
  const clean = slug.toLowerCase().trim();
  return editorialGuides.find((g) => g.slug === clean || g.id === clean);
}
