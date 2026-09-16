import { Investment } from '../../types';

export const batch3InvestmentsData: Investment[] = [
  {
    id: 'inv-powergrid-invit',
    title: 'POWERGRID Infrastructure Investment Trust (PGInvIT)',
    slug: 'powergrid-invit',
    description: 'SEBI-registered Infrastructure Investment Trust sponsored by Power Grid Corporation of India Limited (Maharatna PSU) owning operational inter-state power transmission assets with long-term 35-year Transmission Service Agreements (TSAs).',
    authority: 'Securities and Exchange Board of India (SEBI) / Power Grid Corporation of India',
    category: 'InvITs',
    status: 'ACTIVE',
    sourceUrl: 'https://www.pginvit.in',
    sourceAuthority: 'POWERGRID Infrastructure Investment Trust / SEBI',
    verificationStatus: 'VERIFIED',
    minInvestment: 100,
    maxInvestment: 'No Upper Limit (Exchange Traded in Lot Size of 1 Unit)',
    expectedReturn: 'Quarterly Cash Distribution Yield (Dividend, Interest, and Return of Capital) ~9.5% to 11.5% annualized',
    notifiedRate: 'Variable NDCF Distribution',
    rateEffectivePeriod: 'Quarterly Distribution Cycles',
    tenure: 'Perpetual Trust Structure (Concession/TSA periods up to 35+ years)',
    lockInPeriod: 'None (Freely tradable on NSE and BSE in lot size of 1 unit)',
    riskLevel: 'Medium',
    returnMechanism: 'Under SEBI InvIT Regulations, at least 90% of Net Distributable Cash Flows (NDCF) generated from SPV transmission tariffs must be distributed to unit-holders at least semi-annually (PGInvIT distributes quarterly).',
    depositRules: 'Purchased directly via any SEBI-registered broker on NSE/BSE secondary debt/equity segments in minimum trading lot size of 1 unit.',
    maturityRules: 'No fixed maturity date; cash flows distributed continuously as operational yields from long-term power grid concessions.',
    extensionRules: 'Trust can acquire additional operational transmission assets from Sponsor to expand asset base.',
    withdrawalRules: 'Units can be sold anytime during standard stock exchange trading hours (9:15 AM to 3:30 PM).',
    prematureClosureRules: 'Secondary market sale on NSE/BSE.',
    loanFacilityRules: 'Eligible for loan against securities (LAS) with participating banks and NBFCs.',
    taxTreatment: 'Taxation of InvIT distributions follows the three-component pass-through model: (1) Dividend is tax-exempt if the SPV did not opt for Section 115BAA concessional tax, or taxable at slab rates if SPV opted for 115BAA; (2) Interest component is taxable at investor slab rate; (3) Capital repayment/other distributions taxed under Section 56(2)(xii). Capital gains on transfer of units: STCG (holding ≤12 months) at 20%, LTCG (holding >12 months) at 12.5% above ₹1.25 Lakh exemption under Section 112A (STT paid).',
    nominationRules: 'Nomination registered with Depository Participant (NSDL/CDSL).',
    accountOpeningProcess: [
      'Open a trading and demat account with a SEBI-registered stockbroker.',
      'Search for ticker symbol "PGINVIT" on NSE or BSE.',
      'Place buy order for desired number of units (lot size 1 unit).',
      'Units are credited on T+1 settlement cycle.'
    ],
    whereToInvest: 'National Stock Exchange (NSE), Bombay Stock Exchange (BSE), and SEBI-registered Online Bond/Securities Platforms.',
    requiredDocuments: ['Demat Account', 'PAN Card', 'Bank Account linked with Demat'],
    importantRules: [
      'Sponsor is Power Grid Corporation of India Limited (Government of India enterprise).',
      'Revenue is availability-based under central transmission pooling mechanism (CERC tariff guidelines), insulating it from volume/demand risks.'
    ],
    risksAndLimitations: [
      'Interest rate risk: rising bond yields may compress InvIT yield spreads.',
      'Asset concentration in Indian power transmission infrastructure.'
    ],
    faqs: [
      {
        question: 'How often does POWERGRID InvIT distribute cash flows to investors?',
        answer: 'PGInvIT distributes cash payouts on a quarterly basis, comprising dividends, interest, and repayment of SPV capital.'
      },
      {
        question: 'What is the minimum trading lot size for PGInvIT?',
        answer: 'Following SEBI rationalization, the trading lot size on stock exchanges is 1 unit.'
      }
    ],
    comparisonSlugs: ['indigrid-invit', 'national-highways-infra-trust'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-indigrid-invit',
    title: 'IndiGrid InvIT (India Grid Trust)',
    slug: 'indigrid-invit',
    description: 'India’s first publicly traded power transmission Infrastructure Investment Trust (InvIT), managing inter-state and intra-state transmission lines and solar power generation assets with long-term contracts.',
    authority: 'Securities and Exchange Board of India (SEBI)',
    category: 'InvITs',
    status: 'ACTIVE',
    sourceUrl: 'https://www.indigrid.co.in',
    sourceAuthority: 'India Grid Trust / SEBI',
    verificationStatus: 'VERIFIED',
    minInvestment: 140,
    maxInvestment: 'No Upper Limit (Lot Size 1 Unit)',
    expectedReturn: 'Quarterly Distribution Yield ~9.0% to 11.0% p.a.',
    notifiedRate: 'NDCF Quarterly Payout',
    rateEffectivePeriod: 'Quarterly',
    tenure: 'Perpetual InvIT Structure',
    lockInPeriod: 'None (Exchange Traded)',
    riskLevel: 'Medium',
    returnMechanism: 'Mandatory distribution of ≥90% of Net Distributable Cash Flows quarterly to unitholders derived from contracted availability-based transmission service agreements and long-term solar Power Purchase Agreements (PPAs).',
    depositRules: 'Traded on NSE and BSE in minimum lot size of 1 unit.',
    maturityRules: 'Perpetual trust; assets have concession agreements of 30-35 years with perpetual renewal rights.',
    extensionRules: 'Regularly acquires operational power transmission and renewable assets via institutional placement (QIP) and preferential rights issues.',
    withdrawalRules: 'Freely tradable on NSE and BSE during debt/equity market hours.',
    prematureClosureRules: 'Secondary market trade via stockbroker.',
    loanFacilityRules: 'Eligible for loan against units with scheduled banks and financial institutions.',
    taxTreatment: 'Distributed income components (interest, dividend, capital reduction) taxed as per SEBI/Income Tax Act guidelines. LTCG on units held for over 12 months taxed at 12.5% above ₹1.25 Lakh (Section 112A); STCG (≤12 months) taxed at 20% (Section 111A).',
    nominationRules: 'Registered via Depository Participant.',
    accountOpeningProcess: [
      'Log into your brokerage demat platform.',
      'Search for "INDIGRID" on NSE or BSE.',
      'Enter order quantity (minimum 1 unit) and execute.',
      'Settled into demat on T+1 basis.'
    ],
    whereToInvest: 'NSE, BSE, and SEBI-registered brokers.',
    requiredDocuments: ['Demat Account', 'PAN Card', 'Bank Account'],
    importantRules: [
      'Regulated under SEBI (Infrastructure Investment Trusts) Regulations, 2014.',
      'AAA rated by CRISIL, ICRA, and India Ratings.'
    ],
    risksAndLimitations: [
      'Refinancing interest rate risks on trust-level borrowings.',
      'Execution risks on newly acquired transmission assets.'
    ],
    faqs: [
      {
        question: 'Is IndiGrid InvIT AAA rated?',
        answer: 'Yes, IndiGrid holds AAA credit ratings with a stable outlook from CRISIL, ICRA, and India Ratings.'
      }
    ],
    comparisonSlugs: ['powergrid-invit', 'national-highways-infra-trust'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-nhai-invit',
    title: 'National Highways Infra Trust (NHAI InvIT)',
    slug: 'national-highways-infra-trust',
    description: 'Infrastructure Investment Trust sponsored by the National Highways Authority of India (Ministry of Road Transport and Highways) to monetize operational national highway toll road stretches under the National Monetisation Pipeline.',
    authority: 'NHAI / Ministry of Road Transport and Highways / SEBI',
    category: 'InvITs',
    status: 'ACTIVE',
    sourceUrl: 'https://www.nhit.co.in',
    sourceAuthority: 'National Highways Infra Trust / NHAI',
    verificationStatus: 'VERIFIED',
    minInvestment: 100,
    maxInvestment: 'No Upper Limit (Lot Size 1 Unit / Listed NCDs)',
    expectedReturn: 'Semi-Annual & Annual Toll-Backed Distribution Yield ~8.0% to 9.5% p.a.',
    notifiedRate: 'Toll Revenue Backed Distribution',
    rateEffectivePeriod: 'Bi-Annual / Annual Distribution',
    tenure: 'Long-term Concession Period (20 to 30 Years per Toll Stretches)',
    lockInPeriod: 'None (Tradable on NSE/BSE)',
    riskLevel: 'Low',
    returnMechanism: 'Toll revenue collected across operational national highway corridors is pooled, expenses and debt service deducted, and ≥90% of NDCF distributed to unit and bondholders.',
    depositRules: 'Units and public NCD tranches are traded on NSE and BSE.',
    maturityRules: 'Concession assets operate under predefined long-term Toll-Operate-Transfer (TOT) concessions awarded by NHAI.',
    extensionRules: 'NHAI regularly injects new operational road stretches into NHIT in phased monetization rounds.',
    withdrawalRules: 'Liquid on secondary market of stock exchanges.',
    prematureClosureRules: 'Secondary market sale.',
    loanFacilityRules: 'Accepted as collateral by financial institutions.',
    taxTreatment: 'Standard InvIT tax regime: Interest component taxable at slab rate; dividend taxed based on SPV tax regime; capital repayment taxed under Section 56(2)(xii). Capital gains taxed at 20% (STCG) and 12.5% (LTCG > 12 months under Sec 112A).',
    nominationRules: 'Registered with Demat account.',
    accountOpeningProcess: [
      'Log into registered demat brokerage.',
      'Search for NHIT units or listed NHAI InvIT NCDs on NSE/BSE.',
      'Place buy order at prevailing market price.'
    ],
    whereToInvest: 'NSE, BSE, and public tranche subscription windows.',
    requiredDocuments: ['Demat Account', 'PAN Card', 'Bank details'],
    importantRules: [
      'Direct sponsorship by NHAI ensures high sovereign institutional alignment and project governance.',
      'Toll rates on underlying concessions are revised annually indexed to WPI/CPI inflation.'
    ],
    risksAndLimitations: [
      'Toll traffic volume risk from economic slowdowns or alternate competing route developments.'
    ],
    faqs: [
      {
        question: 'Who sponsors the National Highways Infra Trust?',
        answer: 'NHIT is sponsored by the National Highways Authority of India (NHAI), an autonomous agency of the Government of India.'
      }
    ],
    comparisonSlugs: ['powergrid-invit', 'indigrid-invit'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-embassy-reit',
    title: 'Embassy Office Parks REIT',
    slug: 'embassy-office-parks-reit',
    description: 'India’s first publicly listed Real Estate Investment Trust (REIT) and the largest in Asia by area, owning a portfolio of 45+ million sq ft of Grade-A office parks and tech campuses across Bengaluru, Mumbai, Pune, and NCR.',
    authority: 'Securities and Exchange Board of India (SEBI)',
    category: 'REITs',
    status: 'ACTIVE',
    sourceUrl: 'https://www.embassyofficeparks.com',
    sourceAuthority: 'Embassy Office Parks REIT / SEBI',
    verificationStatus: 'VERIFIED',
    minInvestment: 350,
    maxInvestment: 'No Upper Limit (Lot Size 1 Unit)',
    expectedReturn: 'Quarterly Distribution Yield (~6.5% to 8.0% p.a.) + Capital Appreciation of Prime Commercial Real Estate',
    notifiedRate: 'Quarterly NDCF Distribution',
    rateEffectivePeriod: 'Quarterly',
    tenure: 'Perpetual Commercial Real Estate REIT',
    lockInPeriod: 'None (Tradable on NSE/BSE)',
    riskLevel: 'Medium',
    returnMechanism: 'Collects rental income from Fortune 500 tech and multinational tenants, pays property management and debt costs, and distributes ≥90% of NDCF quarterly to unitholders.',
    depositRules: 'Traded on NSE and BSE in minimum lot size of 1 unit.',
    maturityRules: 'Perpetual trust owning freehold and long-lease commercial real estate.',
    extensionRules: 'Grows portfolio through on-campus development and strategic third-party/sponsor asset acquisitions.',
    withdrawalRules: 'Sold instantly on NSE/BSE during equity market hours.',
    prematureClosureRules: 'Secondary market exit via stock exchange.',
    loanFacilityRules: 'Eligible for loan against shares/units with commercial banks.',
    taxTreatment: 'Quarterly distributions comprise dividend, interest, and capital repayment. Dividends from SPVs that have not opted for lower corporate tax rate are tax-free in unitholder hands; interest is taxed at slab rates. Capital gains on unit sales: STCG (≤12 months) at 20%, LTCG (>12 months) at 12.5% above ₹1.25 Lakh (Section 112A).',
    nominationRules: 'Managed via Depository Participant.',
    accountOpeningProcess: [
      'Open demat and trading account with any SEBI broker.',
      'Search for "EMBASSY" ticker on NSE or BSE.',
      'Place buy order for 1 or more units.',
      'Quarterly payouts are directly credited into your linked bank account.'
    ],
    whereToInvest: 'NSE, BSE, and stockbroker trading portals.',
    requiredDocuments: ['Demat Account', 'PAN Card', 'Bank Account'],
    importantRules: [
      'SEBI mandates that at least 80% of REIT asset value must be invested in operational, rent-yielding real estate assets.',
      'High occupancy rates backed by top global corporate clients (Google, Microsoft, IBM, JP Morgan, etc.).'
    ],
    risksAndLimitations: [
      'Commercial real estate occupancy cycles and corporate work-from-home policy changes.'
    ],
    faqs: [
      {
        question: 'What is the minimum amount required to invest in Embassy REIT?',
        answer: 'You can invest by purchasing just 1 unit on the stock exchange (typically ₹350–₹400 per unit).'
      },
      {
        question: 'How often does Embassy REIT pay distributions?',
        answer: 'Embassy REIT makes cash distributions to investors every quarter.'
      }
    ],
    comparisonSlugs: ['mindspace-business-parks-reit', 'brookfield-india-real-estate-trust'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-mindspace-reit',
    title: 'Mindspace Business Parks REIT',
    slug: 'mindspace-business-parks-reit',
    description: 'SEBI-registered Real Estate Investment Trust sponsored by K Raheja Corp group, comprising Grade-A office ecosystems and SEZ tech campuses in Mumbai Region, Pune, Hyderabad, and Chennai.',
    authority: 'Securities and Exchange Board of India (SEBI)',
    category: 'REITs',
    status: 'ACTIVE',
    sourceUrl: 'https://www.mindspacereit.com',
    sourceAuthority: 'Mindspace Business Parks REIT / SEBI',
    verificationStatus: 'VERIFIED',
    minInvestment: 320,
    maxInvestment: 'No Upper Limit (Lot Size 1 Unit)',
    expectedReturn: 'Quarterly Cash Distribution Yield (~6.5% to 7.8% p.a.) + Property Value Appreciation',
    notifiedRate: 'Quarterly NDCF Distribution',
    rateEffectivePeriod: 'Quarterly',
    tenure: 'Perpetual REIT Structure',
    lockInPeriod: 'None (Exchange Traded)',
    riskLevel: 'Medium',
    returnMechanism: 'Generates rental revenues from premium multinational corporate leases with built-in 10-15% escalation clauses every 3 years; distributes ≥90% of net distributable cash flows quarterly.',
    depositRules: 'Traded on NSE and BSE in units of 1.',
    maturityRules: 'Perpetual commercial real estate holding trust.',
    extensionRules: 'Expands through brownfield commercial development and acquisitions.',
    withdrawalRules: 'Freely tradable during exchange hours.',
    prematureClosureRules: 'Secondary market trade.',
    loanFacilityRules: 'Eligible for loan against securities.',
    taxTreatment: 'Distributed income follows the statutory pass-through framework (dividend, interest, capital reduction). Unit transfers taxed at 20% STCG (≤12 months) and 12.5% LTCG (>12 months under Sec 112A).',
    nominationRules: 'Registered with Demat account.',
    accountOpeningProcess: [
      'Log in to your demat trading account.',
      'Search for "MINDSPACE" on NSE or BSE.',
      'Execute buy order for the desired number of units.'
    ],
    whereToInvest: 'NSE, BSE, registered stockbrokers.',
    requiredDocuments: ['Demat Account', 'PAN Card', 'Bank details'],
    importantRules: ['Over 30+ million sq ft portfolio with high institutional tenancy.'],
    risksAndLimitations: ['Tenant renewal risk and geographic concentration in 4 major metro hubs.'],
    faqs: [
      {
        question: 'What is the dividend taxability for Mindspace REIT?',
        answer: 'Since its Special Purpose Vehicles (SPVs) generally do not opt for the concessional tax regime, dividend income received by unitholders is largely exempt from income tax.'
      }
    ],
    comparisonSlugs: ['embassy-office-parks-reit', 'nexus-select-trust-reit'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-brookfield-reit',
    title: 'Brookfield India Real Estate Trust',
    slug: 'brookfield-india-real-estate-trust',
    description: 'Pure-play Grade-A commercial office real estate investment trust sponsored by an affiliate of Brookfield Asset Management, owning prime campus office parks in Mumbai, Gurugram, Noida, and Kolkata.',
    authority: 'Securities and Exchange Board of India (SEBI)',
    category: 'REITs',
    status: 'ACTIVE',
    sourceUrl: 'https://www.brookfieldindiamt.in',
    sourceAuthority: 'Brookfield India Real Estate Trust / SEBI',
    verificationStatus: 'VERIFIED',
    minInvestment: 260,
    maxInvestment: 'No Upper Limit (Lot Size 1 Unit)',
    expectedReturn: 'Quarterly Distribution Yield (~7.5% to 8.5% p.a.) + Asset Value Growth',
    notifiedRate: 'Quarterly NDCF Distribution',
    rateEffectivePeriod: 'Quarterly',
    tenure: 'Perpetual Commercial Real Estate Trust',
    lockInPeriod: 'None (Exchange Traded)',
    riskLevel: 'Medium',
    returnMechanism: 'Distributes ≥90% of Net Distributable Cash Flows on a quarterly basis derived from multi-year commercial office leases with built-in contractual rental escalations.',
    depositRules: 'Traded on NSE and BSE in minimum lot size of 1 unit.',
    maturityRules: 'Perpetual trust holding high-quality commercial assets.',
    extensionRules: 'Regularly adds Grade-A institutional office parks to its asset pool.',
    withdrawalRules: 'Tradable on stock exchanges during market hours.',
    prematureClosureRules: 'Secondary market trade.',
    loanFacilityRules: 'Eligible for loan against securities.',
    taxTreatment: 'Pass-through tax framework applies. STCG taxed at 20% (≤12 months) and LTCG at 12.5% (>12 months above ₹1.25L under Sec 112A).',
    nominationRules: 'Nomination via Demat provider.',
    accountOpeningProcess: [
      'Search for "BIRET" on NSE or BSE using your broker app.',
      'Place order for desired units and submit.',
      'Units credit on T+1 settlement.'
    ],
    whereToInvest: 'NSE, BSE, licensed brokers.',
    requiredDocuments: ['Demat Account', 'PAN Card', 'Bank details'],
    importantRules: ['Global institutional asset management backing by Brookfield.'],
    risksAndLimitations: ['Occupancy fluctuations and macroeconomic tech sector hiring slowdowns.'],
    faqs: [
      {
        question: 'What is the asset focus of Brookfield India REIT?',
        answer: 'Brookfield India REIT focuses on Grade-A institutional commercial office parks and dynamic campus ecosystems in top Indian tech corridors.'
      }
    ],
    comparisonSlugs: ['embassy-office-parks-reit', 'mindspace-business-parks-reit'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-nexus-reit',
    title: 'Nexus Select Trust REIT',
    slug: 'nexus-select-trust-reit',
    description: 'India’s first publicly listed pure-play Retail Real Estate Investment Trust (REIT) sponsored by Blackstone, owning 17 Grade-A shopping consumption malls across 14 major Indian cities.',
    authority: 'Securities and Exchange Board of India (SEBI)',
    category: 'REITs',
    status: 'ACTIVE',
    sourceUrl: 'https://www.nexusselecttrust.com',
    sourceAuthority: 'Nexus Select Trust / SEBI',
    verificationStatus: 'VERIFIED',
    minInvestment: 135,
    maxInvestment: 'No Upper Limit (Lot Size 1 Unit)',
    expectedReturn: 'Quarterly Cash Distribution Yield (~7.0% to 8.2% p.a.) + Consumption Footfall Growth',
    notifiedRate: 'Quarterly Distribution',
    rateEffectivePeriod: 'Quarterly',
    tenure: 'Perpetual Retail Real Estate Trust',
    lockInPeriod: 'None (Exchange Traded)',
    riskLevel: 'Medium',
    returnMechanism: 'Generates revenues from retail tenant base rentals and turnover-linked percentage rental share from marquee brands, distributing ≥90% of NDCF quarterly to unitholders.',
    depositRules: 'Traded on NSE and BSE in minimum lot size of 1 unit.',
    maturityRules: 'Perpetual holding of consumption centers and shopping malls.',
    extensionRules: 'Acquires dominant retail malls across growing Tier-1 and Tier-2 Indian consumption hubs.',
    withdrawalRules: 'Sold on stock exchanges during trading hours.',
    prematureClosureRules: 'Secondary market sale.',
    loanFacilityRules: 'Eligible for loan against securities.',
    taxTreatment: 'Taxation follows standard REIT regulations: pass-through components for distributions; STCG 20% and LTCG 12.5% (>12 months under Sec 112A) on unit sales.',
    nominationRules: 'Managed via Demat account.',
    accountOpeningProcess: [
      'Log into broker trading portal.',
      'Search for "NXST" on NSE or BSE.',
      'Place buy order at market price.'
    ],
    whereToInvest: 'NSE, BSE, all SEBI brokers.',
    requiredDocuments: ['Demat Account', 'PAN Card', 'Bank details'],
    importantRules: [
      'High retail brand retention with lease contracts containing minimum guaranteed rent plus turnover share.',
      '95%+ occupancy rate across premier consumption centers like Select CITYWALK (Delhi), Elante (Chandigarh), Nexus Koramangala (Bengaluru).'
    ],
    risksAndLimitations: ['Discretionary retail spending cycles and e-commerce competition.'],
    faqs: [
      {
        question: 'How is Nexus Select Trust different from other Indian REITs?',
        answer: 'Nexus Select Trust is a pure-play retail REIT focused on shopping malls and consumption centers, whereas other Indian REITs primarily own commercial office parks.'
      }
    ],
    comparisonSlugs: ['embassy-office-parks-reit', 'mindspace-business-parks-reit'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-rt-invit',
    title: 'Roads & Tolls Infrastructure InvIT',
    slug: 'roads-tolls-infrastructure-invit',
    description: 'Generic regulatory category of Infrastructure Investment Trusts holding operational highway, tollway, and Annuity/Hybrid Annuity Model (HAM) road concessions in India.',
    authority: 'Securities and Exchange Board of India (SEBI) / NHAI',
    category: 'InvITs',
    status: 'ACTIVE',
    sourceUrl: 'https://www.sebi.gov.in',
    sourceAuthority: 'SEBI (InvIT Regulations 2014)',
    verificationStatus: 'VERIFIED',
    minInvestment: 100,
    maxInvestment: 'No Upper Limit (Exchange Traded in Lot of 1)',
    expectedReturn: 'Toll Collection & Annuity Distribution Yield ~8.5% to 10.5% p.a.',
    notifiedRate: 'NDCF Bi-Annual/Quarterly Payout',
    rateEffectivePeriod: 'Periodic Distribution',
    tenure: 'Concession Life of Toll Assets (15 to 30 Years)',
    lockInPeriod: 'None (Exchange Traded)',
    riskLevel: 'Medium',
    returnMechanism: 'Pooled cash collections from toll booths and government annuity payments are distributed (minimum 90% of NDCF) to investors after maintaining mandatory debt service reserves (DSRA).',
    depositRules: 'Listed units traded on NSE/BSE secondary markets.',
    maturityRules: 'Concession contracts terminate at the end of the concession period unless extended or refreshed with new asset acquisitions.',
    extensionRules: 'Trusts acquire new TOT/HAM road assets through right issues or debt financing.',
    withdrawalRules: 'Secondary market exit via stockbroker.',
    prematureClosureRules: 'Secondary market sale.',
    loanFacilityRules: 'Eligible for loan pledging.',
    taxTreatment: 'Pass-through distribution taxation: Interest taxable at slab rate; dividend exempt if SPV did not opt for 115BAA; capital gains on sale: STCG 20%, LTCG 12.5% (>12 months under Sec 112A).',
    nominationRules: 'Handled by Depository Participant.',
    accountOpeningProcess: [
      'Open demat trading account.',
      'Select listed road InvIT (e.g. NHIT, IRB InvIT, Oriental Infra).',
      'Execute buy order on exchange.'
    ],
    whereToInvest: 'NSE, BSE, stockbrokers.',
    requiredDocuments: ['Demat Account', 'PAN Card', 'Bank details'],
    importantRules: ['SEBI mandates at least 80% investment in completed and revenue-generating infrastructure assets.'],
    risksAndLimitations: ['Traffic leakage, toll rate disputes, and monsoon highway damage repair outlays.'],
    faqs: [
      {
        question: 'What is the main driver of returns in a road InvIT?',
        answer: 'Returns are driven by daily vehicular toll collections and inflation-linked annual toll tariff increases.'
      }
    ],
    comparisonSlugs: ['national-highways-infra-trust', 'powergrid-invit'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-data-invit',
    title: 'Digital Fiber & Data Centre InvIT',
    slug: 'digital-fiber-data-centre-invit',
    description: 'Specialized infrastructure investment trusts owning optic fiber networks, telecom passive infrastructure towers, and hyperscale data center facilities leased to telecom operators.',
    authority: 'Securities and Exchange Board of India (SEBI) / DoT',
    category: 'InvITs',
    status: 'ACTIVE',
    sourceUrl: 'https://www.sebi.gov.in',
    sourceAuthority: 'SEBI (Infrastructure Investment Trusts Framework)',
    verificationStatus: 'VERIFIED',
    minInvestment: 100,
    maxInvestment: 'No Upper Limit',
    expectedReturn: 'Long-term Telecom Infrastructure Rental Yield ~8.0% to 10.0% p.a.',
    notifiedRate: 'Variable NDCF Distribution',
    rateEffectivePeriod: 'Semi-Annual / Annual',
    tenure: 'Long-term Master Service Agreements (15 to 25 Years)',
    lockInPeriod: 'None for publicly listed units',
    riskLevel: 'Medium',
    returnMechanism: 'Fixed monthly lease rentals collected from telecom service providers (e.g. Jio, Airtel) for dark fiber and tower capacity are distributed (≥90% of NDCF) to unitholders.',
    depositRules: 'Traded on exchange or available via private placement for institutional InvITs.',
    maturityRules: 'Continuous operational concession contracts.',
    extensionRules: 'Expanding fiber route kilometers and server capacity.',
    withdrawalRules: 'Secondary market trade for listed units.',
    prematureClosureRules: 'Secondary market sale.',
    loanFacilityRules: 'Eligible for loan pledging.',
    taxTreatment: 'Pass-through InvIT tax regime under the Income Tax Act. STCG 20%, LTCG 12.5% (>12 months).',
    nominationRules: 'Nomination via Demat.',
    accountOpeningProcess: [
      'Trade listed digital infrastructure trust units on stock exchanges through a demat account.'
    ],
    whereToInvest: 'NSE, BSE, Institutional Placement.',
    requiredDocuments: ['Demat Account', 'PAN Card', 'Bank details'],
    importantRules: ['Long-term contracts backed by leading telecom operators.'],
    risksAndLimitations: ['Tenant concentration risk in the Indian telecom operator sector.'],
    faqs: [
      {
        question: 'What assets do Digital Fiber InvITs hold?',
        answer: 'They hold critical digital communications infrastructure including nationwide fiber optic cables, telecom towers, and data center facilities.'
      }
    ],
    comparisonSlugs: ['powergrid-invit', 'renewable-energy-infrastructure-trust'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-renew-invit',
    title: 'Renewable Energy Infrastructure Trust',
    slug: 'renewable-energy-infrastructure-trust',
    description: 'Infrastructure investment trusts holding operational utility-scale solar, wind, and hybrid green energy generation plants with long-term sovereign Power Purchase Agreements (PPAs) signed with SECI, NTPC, or state discoms.',
    authority: 'Securities and Exchange Board of India (SEBI) / MNRE',
    category: 'InvITs',
    status: 'ACTIVE',
    sourceUrl: 'https://www.sebi.gov.in',
    sourceAuthority: 'SEBI / Ministry of New and Renewable Energy',
    verificationStatus: 'VERIFIED',
    minInvestment: 100,
    maxInvestment: 'No Upper Limit',
    expectedReturn: 'Green Energy PPA Cash Flow Yield ~9.0% to 11.0% p.a.',
    notifiedRate: 'Quarterly / Semi-Annual NDCF',
    rateEffectivePeriod: 'Quarterly',
    tenure: '25-Year PPA Operational Life',
    lockInPeriod: 'None for listed units',
    riskLevel: 'Medium',
    returnMechanism: 'Clean power generated is sold at fixed tariffs to sovereign off-takers (like SECI) under 25-year PPAs; ≥90% of NDCF is paid to unitholders.',
    depositRules: 'Purchased on stock exchanges or public issues.',
    maturityRules: 'Solar and wind plants operate over 25-year design lifetimes with scheduled maintenance.',
    extensionRules: 'Trusts acquire new green energy assets via capital raising.',
    withdrawalRules: 'Tradable on stock exchange platforms.',
    prematureClosureRules: 'Secondary market trade.',
    loanFacilityRules: 'Eligible for loan against securities.',
    taxTreatment: 'InvIT pass-through taxation applies. Capital gains on transfer: STCG 20%, LTCG 12.5% (>12 months under Sec 112A).',
    nominationRules: 'Managed via Demat.',
    accountOpeningProcess: [
      'Invest in listed renewable energy trusts via registered stockbroker demat accounts.'
    ],
    whereToInvest: 'NSE, BSE, primary issues.',
    requiredDocuments: ['Demat Account', 'PAN Card', 'Bank details'],
    importantRules: ['Long-term fixed-tariff PPAs insulate revenues from fuel price shocks.'],
    risksAndLimitations: ['Solar radiation / wind resource seasonality and state discom payment delays.'],
    faqs: [
      {
        question: 'Who buys the electricity produced by Renewable Energy InvITs?',
        answer: 'Power is predominantly purchased by central government nodal agencies like SECI and NTPC under 25-year fixed-price contracts.'
      }
    ],
    comparisonSlugs: ['powergrid-invit', 'sovereign-green-bonds'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-sgb',
    title: 'Sovereign Gold Bonds (SGB)',
    slug: 'sovereign-gold-bonds',
    description: 'Government securities denominated in grams of 999 purity gold issued by the Reserve Bank of India on behalf of the Government of India, offering 2.50% p.a. guaranteed interest and 100% tax-free capital gains upon maturity.',
    authority: 'Reserve Bank of India (RBI) / Ministry of Finance',
    category: 'Gold & Precious Metals',
    status: 'TRADED / SECONDARY MARKET',
    sourceUrl: 'https://rbi.org.in',
    sourceAuthority: 'Reserve Bank of India, Government of India',
    verificationStatus: 'VERIFIED',
    minInvestment: 1,
    maxInvestment: 4000,
    expectedReturn: '2.50% p.a. Guaranteed Simple Interest + 100% Capital Appreciation of Gold Price',
    notifiedRate: '2.50% per annum (Paid Semi-Annually)',
    rateEffectivePeriod: '8-Year Bond Tenure',
    tenure: '8 Years from Issue Date',
    lockInPeriod: '5 Years (Early redemption window with RBI from 5th year on coupon dates; freely tradable on NSE/BSE)',
    riskLevel: 'Medium',
    returnMechanism: 'Semi-annual interest at 2.50% p.a. on the initial issue nominal price paid directly to bank account. At redemption/maturity, investor receives the simple average closing price of 999 purity gold published by IBJA for the preceding 3 business days.',
    depositRules: 'Minimum subscription: 1 gram of gold; Maximum subscription: 4 kg per fiscal year for individuals/HUFs (20 kg for trusts). Traded on secondary stock exchange markets in 1-gram increments.',
    maturityRules: 'Matures after 8 years. Redemption proceeds calculated based on prevailing gold market price credited directly to bank account without deducting storage or making charges.',
    extensionRules: 'No statutory extension; proceeds are disbursed at the end of the 8th year.',
    withdrawalRules: 'Premature redemption directly through RBI/Bank/Post Office permitted on coupon payment dates starting from the 5th year. Additionally, bonds are tradable on NSE and BSE debt segments anytime.',
    prematureClosureRules: 'Submit premature encashment request to the depository/bank at least 10 days prior to the coupon date after completion of 5 years.',
    loanFacilityRules: 'Eligible as collateral for bank loans (loan-to-value ratio is equivalent to standard gold loan norms prescribed by RBI).',
    taxTreatment: '100% Tax-Free Capital Gains: Long-term capital gains arising to an individual on final maturity redemption with RBI are completely EXEMPT from income tax under Section 47(viic) of the Income Tax Act. Annual 2.5% interest is taxable at slab rates (no TDS). Secondary market transfer before maturity attracts LTCG of 12.5% without indexation if held >12 months.',
    nominationRules: 'Nomination facility available for up to two nominees in prescribed Form D/E.',
    accountOpeningProcess: [
      'For existing tranches, open broker demat account and search for SGB series ticker on NSE/BSE (e.g. SGBDE31, SGBNV31).',
      'Check market price vs fair gold value and place buy order.',
      'Units are credited into Demat portfolio on T+1 settlement.'
    ],
    whereToInvest: 'Secondary market of NSE and BSE, RBI Retail Direct portal, scheduled commercial banks, and post offices.',
    requiredDocuments: [
      'PAN Card (mandatory for all SGB subscriptions)',
      'Aadhaar / Passport for KYC',
      'Bank Account details with cancelled cheque'
    ],
    importantRules: [
      'Sovereign backing ensures zero counterparty or default risk on gold weight and interest.',
      'Eliminates physical gold risks: zero making charges, zero purity loss, zero theft risk, zero locker fees.'
    ],
    risksAndLimitations: [
      'Gold price fluctuation risk: capital return depends on market price of gold.',
      'Secondary market liquidity for certain tranches on stock exchanges can trade at minor discounts to physical spot gold.'
    ],
    faqs: [
      {
        question: 'Is capital gain on Sovereign Gold Bonds completely tax-free?',
        answer: 'Yes, if you hold SGB until maturity or redeem through the RBI window after 5 years, the entire capital gain is 100% tax-free under Section 47(viic) of the Income Tax Act.'
      },
      {
        question: 'How is the semi-annual interest calculated on SGB?',
        answer: 'Interest is paid at 2.50% per annum on the original issue price (nominal value) of the bond and credited semi-annually directly into your registered bank account.'
      }
    ],
    comparisonSlugs: ['gold-exchange-traded-funds', 'electronic-gold-receipts'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-gold-etf',
    title: 'Gold Exchange Traded Funds (Gold ETFs)',
    slug: 'gold-exchange-traded-funds',
    description: 'SEBI-regulated open-ended mutual fund units listed on stock exchanges, backed by physical gold of 99.5% purity vaulted with institutional custodians, tracking domestic spot gold prices.',
    authority: 'Securities and Exchange Board of India (SEBI)',
    category: 'Gold & Precious Metals',
    status: 'ACTIVE',
    sourceUrl: 'https://www.amfiindia.com',
    sourceAuthority: 'Association of Mutual Funds in India (AMFI) / SEBI',
    verificationStatus: 'VERIFIED',
    minInvestment: 50,
    maxInvestment: 'No Upper Limit (Traded in 0.01 to 1 gram unit equivalents)',
    expectedReturn: 'Domestic Physical Spot Gold Price Return (Minus AMC Expense Ratio ~0.2% to 0.5%)',
    notifiedRate: 'Market Spot Gold Price Linked',
    rateEffectivePeriod: 'Continuous Daily NAV',
    tenure: 'Open-ended (No fixed maturity)',
    lockInPeriod: 'None (Liquid trading on NSE and BSE)',
    riskLevel: 'Medium',
    returnMechanism: 'Each ETF unit represents physical gold bullion. As the domestic price of spot gold fluctuates, the Net Asset Value (NAV) and market price of the Gold ETF unit adjust proportionally.',
    depositRules: 'Purchased through any demat/trading account in units starting as low as 0.01 gram equivalent (₹50 to ₹100).',
    maturityRules: 'No maturity; hold indefinitely or redeem by selling units on exchange or converting large lots (typically 1 kg) into physical gold with AMC.',
    extensionRules: 'Open-ended fund structure; no renewal required.',
    withdrawalRules: 'Sell orders can be placed during regular trading hours on NSE/BSE with T+1 fund settlement.',
    prematureClosureRules: 'Sold on stock exchange through your broker app.',
    loanFacilityRules: 'Eligible for loan against mutual funds/securities.',
    taxTreatment: 'Following Finance Act 2024 amendments: If Gold ETF units are held for more than 12 months, gains are classified as Long-Term Capital Gains (LTCG) and taxed at 12.5% without indexation. If held for 12 months or less, gains are treated as Short-Term Capital Gains (STCG) and taxed at applicable income tax slab rates.',
    nominationRules: 'Registered via Demat depository participant.',
    accountOpeningProcess: [
      'Log into broker trading app (Zerodha, Groww, AngelOne, Upstox, etc.).',
      'Search for gold ETF schemes (e.g. NIPPONINDIA GOLD BEES, HDFC GOLD ETF, SBI GOLD ETF).',
      'Enter unit quantity and execute market or limit buy order.',
      'Units are credited to demat on T+1.'
    ],
    whereToInvest: 'National Stock Exchange (NSE), Bombay Stock Exchange (BSE), and mutual fund SIP portals.',
    requiredDocuments: ['Demat Account', 'PAN Card', 'Bank Account'],
    importantRules: [
      'SEBI mandates that 95%+ of scheme assets must be invested in physical gold bullion of 99.5% purity.',
      'Physical gold is vaulted with independent third-party custodians (e.g. Brink’s, Sequel) and audited regularly.'
    ],
    risksAndLimitations: [
      'Gold price market volatility.',
      'Expense ratio drag (0.2% to 0.5% p.a.) deducted by asset management company.'
    ],
    faqs: [
      {
        question: 'Do Gold ETFs pay annual interest like Sovereign Gold Bonds?',
        answer: 'No, Gold ETFs do not pay periodic interest. Returns are generated purely through capital appreciation in the domestic price of physical gold.'
      },
      {
        question: 'Can I start a monthly SIP in Gold ETFs?',
        answer: 'Yes, you can set up stock SIPs in Gold ETFs through your broker or invest via Gold Mutual Funds (Fund of Funds) without needing a demat account.'
      }
    ],
    comparisonSlugs: ['sovereign-gold-bonds', 'silver-exchange-traded-funds'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-silver-etf',
    title: 'Silver Exchange Traded Funds (Silver ETFs)',
    slug: 'silver-exchange-traded-funds',
    description: 'SEBI-regulated exchange-traded mutual fund schemes investing in physical silver bars of 99.9% purity held in institutional vaults, providing transparent and liquid exposure to silver prices.',
    authority: 'Securities and Exchange Board of India (SEBI)',
    category: 'Gold & Precious Metals',
    status: 'ACTIVE',
    sourceUrl: 'https://www.amfiindia.com',
    sourceAuthority: 'Association of Mutual Funds in India (AMFI) / SEBI',
    verificationStatus: 'VERIFIED',
    minInvestment: 50,
    maxInvestment: 'No Upper Limit (Traded on NSE/BSE)',
    expectedReturn: 'Domestic Spot Silver Price Return (Minus AMC Expense Ratio ~0.3% to 0.6%)',
    notifiedRate: 'Market Silver Price Linked',
    rateEffectivePeriod: 'Continuous Trading NAV',
    tenure: 'Open-ended',
    lockInPeriod: 'None (Liquid)',
    riskLevel: 'High',
    returnMechanism: 'Tracks the market price of 30 kg silver bars of 99.9% fineness conforming to London Bullion Market Association (LBMA) standards.',
    depositRules: 'Traded in units on stock exchanges in amounts starting from ₹50.',
    maturityRules: 'No maturity date.',
    extensionRules: 'Open-ended fund.',
    withdrawalRules: 'Sold instantly on NSE/BSE during equity trading hours.',
    prematureClosureRules: 'Secondary market trade.',
    loanFacilityRules: 'Eligible for loan against mutual funds.',
    taxTreatment: 'Taxed under precious metal mutual fund rules: LTCG at 12.5% without indexation if held for >12 months; STCG taxed at marginal income slab rates if held for ≤12 months.',
    nominationRules: 'Nomination via Demat.',
    accountOpeningProcess: [
      'Search for silver ETF tickers on your broker platform (e.g. SILVIETF, HDFCSILVER, ICICISILV).',
      'Place buy order for desired quantity.',
      'Settles on T+1 into demat.'
    ],
    whereToInvest: 'NSE, BSE, and Mutual Fund AMCs.',
    requiredDocuments: ['Demat Account', 'PAN Card', 'Bank details'],
    importantRules: ['SEBI requires 95%+ allocation to physical silver bars stored in accredited vaults.'],
    risksAndLimitations: [
      'Silver exhibits higher industrial volatility and larger price swings than gold.',
      'Tracking error and expense ratio deductions.'
    ],
    faqs: [
      {
        question: 'What purity of silver is held in Silver ETFs?',
        answer: 'Silver ETFs are backed by physical silver bars of at least 99.9% purity (999 fineness) accredited by LBMA/BIS.'
      }
    ],
    comparisonSlugs: ['gold-exchange-traded-funds', 'electronic-gold-receipts'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-e-gold',
    title: 'Electronic Gold Receipts (EGRs)',
    slug: 'electronic-gold-receipts',
    description: 'SEBI-notified electronic security issued by accredited Vault Managers against deposited physical gold of 99.5%+ purity, traded seamlessly on stock exchange spot gold segments with physical delivery conversion.',
    authority: 'Securities and Exchange Board of India (SEBI) / BSE / NSE',
    category: 'Gold & Precious Metals',
    status: 'ACTIVE',
    sourceUrl: 'https://www.bseindia.com',
    sourceAuthority: 'SEBI (Vault Managers and EGR Framework) / BSE',
    verificationStatus: 'VERIFIED',
    minInvestment: 100,
    maxInvestment: 'No Upper Limit (Trading denomination as low as 1 gram)',
    expectedReturn: 'Spot Physical Gold Price Return',
    notifiedRate: 'Spot Market Price',
    rateEffectivePeriod: 'Continuous Exchange Trading',
    tenure: 'Perpetual Electronic Receipt',
    lockInPeriod: 'None (Liquid exchange trading)',
    riskLevel: 'Medium',
    returnMechanism: 'Physical gold deposited in SEBI-registered vaults is dematerialized into EGRs. Investors can trade EGRs on the exchange or surrender EGRs to take physical delivery of gold bars/coins.',
    depositRules: 'Traded on BSE/NSE EGR segment in units starting from 1 gram (or specified fractional denominations).',
    maturityRules: 'Can be held in electronic form in demat indefinitely or converted into physical gold at accredited vault delivery centers.',
    extensionRules: 'Perpetual receipt.',
    withdrawalRules: 'Sold on stock exchange or withdrawn as physical gold from registered vault managers upon surrender of EGR units.',
    prematureClosureRules: 'Trade on exchange or request vault delivery.',
    loanFacilityRules: 'Eligible as collateral for commodity and capital market financing.',
    taxTreatment: 'Conversion of physical gold into EGR and vice versa is NOT treated as a transfer under Section 47(viid) of Income Tax Act, attracting ZERO capital gains tax at conversion. Subsequent transfer of EGRs held for >12 months is taxed as LTCG at 12.5% without indexation; ≤12 months taxed as STCG at slab rates.',
    nominationRules: 'Managed via Demat depository.',
    accountOpeningProcess: [
      'Log into trading account configured for BSE/NSE EGR commodity/debt segment.',
      'Place order for Electronic Gold Receipts.',
      'Units are held directly in standard demat account (NSDL/CDSL).'
    ],
    whereToInvest: 'BSE and NSE EGR trading platforms.',
    requiredDocuments: ['Demat Account', 'PAN Card', 'Bank details'],
    importantRules: [
      'Vault managers are regulated directly by SEBI with strict net worth and insurance criteria.',
      'Allows seamless physical redemption unlike traditional digital gold platforms.'
    ],
    risksAndLimitations: ['Delivery and handling charges apply upon physical vault withdrawal.'],
    faqs: [
      {
        question: 'What is the main advantage of EGRs over digital gold?',
        answer: 'EGRs are regulated directly by SEBI, held in your official Demat account, and can be converted into physical gold with zero capital gains tax triggered at the time of conversion.'
      }
    ],
    comparisonSlugs: ['gold-exchange-traded-funds', 'sovereign-gold-bonds'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-mmc-gold',
    title: 'MMTC-PAMP Digital Gold Savings Plan',
    slug: 'mmtc-pamp-digital-gold',
    description: 'Digital gold accumulation platform operated by MMTC-PAMP India (a joint venture between Government of India enterprise MMTC Ltd and Swiss bullion brand MKS PAMP), backed 1:1 by 999.9 pure (24K) physical gold stored in certified vaults.',
    authority: 'MMTC-PAMP India Pvt. Ltd. (MMTC Ltd Govt JV & MKS PAMP)',
    category: 'Gold & Precious Metals',
    status: 'ACTIVE',
    sourceUrl: 'https://www.mmtc-pamp.com',
    sourceAuthority: 'MMTC-PAMP India',
    verificationStatus: 'VERIFIED',
    minInvestment: 1,
    maxInvestment: 'No Upper Limit (Buy in fractions starting from ₹1)',
    expectedReturn: '24K (999.9 Purity) Physical Gold Price Movement',
    notifiedRate: 'Live 24K Spot Gold Price (with 3% GST)',
    rateEffectivePeriod: 'Live 5-Minute Price Lock',
    tenure: 'Free Custodial Vaulting for up to 5 Years',
    lockInPeriod: 'None (Instant sellback available 24/7)',
    riskLevel: 'Medium',
    returnMechanism: 'Investors accumulate digital gold in rupee or gram increments. Each unit is allocated to 999.9 purity physical bullion vaulted in an insured facility. Users can sell back at live buyback prices or order doorstep delivery of minted coins/bars.',
    depositRules: 'Purchase online via partner fintech apps (Paytm, Google Pay, PhonePe) or directly on MMTC-PAMP from ₹1 upwards.',
    maturityRules: 'No statutory maturity; stored free for up to 5 years (extendable or converted to delivery).',
    extensionRules: 'Storage can be extended or physical delivery ordered.',
    withdrawalRules: 'Sell back digitally 24/7 for instant bank account credit, or request insured doorstep delivery of physical minted gold (0.5g to 100g).',
    prematureClosureRules: 'Sell anytime via application interface.',
    loanFacilityRules: 'Eligible for instant digital gold-backed loans on select partner fintech platforms.',
    taxTreatment: 'Purchases attract 3% Goods and Services Tax (GST). Sale of digital gold held for >12 months is treated as Long-Term Capital Gains (LTCG) taxed at 12.5% without indexation; sale within 12 months is taxed as STCG at slab rates.',
    nominationRules: 'Nominee registration available on MMTC-PAMP user profile.',
    accountOpeningProcess: [
      'Download MMTC-PAMP app or use authorized partner platform (GPay/PhonePe).',
      'Complete mobile and PAN KYC verification.',
      'Enter rupee amount (e.g. ₹500) or gram weight and complete UPI payment.',
      'Physical 999.9 gold is vaulted with allocated serial number.'
    ],
    whereToInvest: 'MMTC-PAMP official portal and integrated payment apps.',
    requiredDocuments: ['PAN Card for transactions >₹2,000', 'Mobile verification', 'Bank account'],
    importantRules: [
      'Only LBMA-accredited gold refinery in India producing 999.9 purest gold.',
      'Vaults are independently audited by an institutional security trustee (e.g. Vistra ITCL).'
    ],
    risksAndLimitations: [
      'Buy-sell spread (approx. 2.5% to 3.5%) plus 3% GST on purchase.',
      'Making and delivery charges apply on physical coin delivery.'
    ],
    faqs: [
      {
        question: 'How pure is the gold purchased through MMTC-PAMP?',
        answer: 'MMTC-PAMP gold is 999.9+ purest 24 Karat gold, exceeding standard 995 purity.'
      }
    ],
    comparisonSlugs: ['gold-exchange-traded-funds', 'electronic-gold-receipts'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-nifty50-index',
    title: 'Nifty 50 Index Fund / ETF',
    slug: 'nifty-50-index-fund',
    description: 'SEBI-categorized passive open-ended index mutual fund or exchange-traded fund replicating the composition and weightages of the 50 largest and most liquid Indian blue-chip stocks on the National Stock Exchange.',
    authority: 'Securities and Exchange Board of India (SEBI)',
    category: 'Index Mutual Funds',
    status: 'ACTIVE',
    sourceUrl: 'https://www.amfiindia.com',
    sourceAuthority: 'AMFI / SEBI Mutual Fund Categorization Guidelines',
    verificationStatus: 'VERIFIED',
    minInvestment: 100,
    maxInvestment: 'No Upper Limit',
    expectedReturn: 'Tracks Nifty 50 Total Returns Index (TRI) ~11.5% to 13.5% historic long-term CAGR (minus low expense ratio ~0.05% to 0.20%)',
    notifiedRate: 'Nifty 50 TRI Benchmark Return',
    rateEffectivePeriod: 'Daily NAV Calculation',
    tenure: 'Open-ended (Ideal for 5+ year wealth compounding)',
    lockInPeriod: 'None (Zero lock-in)',
    riskLevel: 'Medium',
    returnMechanism: 'Fund passively holds all 50 underlying Nifty companies in identical proportion to their free-float market capitalization. Dividends received from portfolio companies are reinvested automatically in the Total Return Index (TRI) variant.',
    depositRules: 'Lump-sum investment from ₹100 or Monthly Systematic Investment Plan (SIP) from ₹100 upwards via any AMC or mutual fund distributor/platform.',
    maturityRules: 'No maturity; redeem partial or full units at prevailing end-of-day NAV.',
    extensionRules: 'Open-ended fund structure; runs perpetually.',
    withdrawalRules: 'Redeem anytime on business days. Proceeds are credited to investor bank account within T+2 working days (T+1 for ETFs). Zero exit load in index funds (or nil after 7 days in select AMCs).',
    prematureClosureRules: 'Full redemption available online without penalty.',
    loanFacilityRules: 'Eligible for loan against mutual funds (up to 50% of equity fund value) with scheduled commercial banks and NBFCs.',
    taxTreatment: 'Equity Mutual Fund Tax Rules (Finance Act 2024): Long-Term Capital Gains (LTCG) on units held for more than 12 months are taxed at 12.5% on gains exceeding the statutory ₹1.25 Lakh exemption limit per financial year. Short-Term Capital Gains (STCG) on units held for 12 months or less are taxed at 20%. No indexation benefit.',
    nominationRules: 'Nomination facility mandatory (up to 3 nominees with percentage allocation) as per SEBI guidelines.',
    accountOpeningProcess: [
      'Complete online mutual fund e-KYC using PAN and Aadhaar on any SEBI-registered platform (CAMS, KFintech, Groww, Zerodha Coin, MF Central).',
      'Select any low-tracking-error Nifty 50 Index Fund Direct Growth plan.',
      'Set up monthly auto-debit (e-Mandate / UPI Autopay) for SIP or make initial lump sum.',
      'Units are allocated at prevailing cut-off NAV.'
    ],
    whereToInvest: 'Mutual Fund AMC websites, MF Central, CAMS, KFintech, registered mutual fund distributors, and stock exchange trading portals.',
    requiredDocuments: [
      'PAN Card',
      'Aadhaar Card (linked with mobile for OTP KYC)',
      'Bank Account verification (cancelled cheque/penny drop)'
    ],
    importantRules: [
      'SEBI mandates that at least 95% of total assets must be invested in the underlying securities of the benchmark index.',
      'Direct Plan options eliminate distributor commissions, reducing expense ratios to 0.05%–0.20% p.a.'
    ],
    risksAndLimitations: [
      'Subject to equity market volatility and economic business cycles.',
      'Tracking error between fund performance and actual Nifty 50 TRI benchmark.'
    ],
    faqs: [
      {
        question: 'Why choose a Nifty 50 Index Fund over active large-cap mutual funds?',
        answer: 'Nifty 50 Index Funds offer ultra-low expense ratios (as low as 0.05%), zero fund-manager bias, and historically outperform the majority of actively managed large-cap funds over 10+ year horizons.'
      },
      {
        question: 'What is the tax rate on Nifty 50 Index Fund gains?',
        answer: 'LTCG (held >12 months) is taxed at 12.5% for gains above ₹1.25 Lakh/year. STCG (held ≤12 months) is taxed at 20%.'
      }
    ],
    comparisonSlugs: ['bse-sensex-index-fund', 'flexi-cap-equity-mutual-fund', 'large-cap-equity-mutual-fund'],
    calculatorType: 'compound',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-sensex-index',
    title: 'BSE Sensex Index Fund / ETF',
    slug: 'bse-sensex-index-fund',
    description: 'Passive open-ended index mutual fund replicating the benchmark S&P BSE Sensex index, comprising the 30 largest, most established, and financially sound companies listed on the Bombay Stock Exchange.',
    authority: 'Securities and Exchange Board of India (SEBI)',
    category: 'Index Mutual Funds',
    status: 'ACTIVE',
    sourceUrl: 'https://www.amfiindia.com',
    sourceAuthority: 'AMFI / SEBI Mutual Fund Regulations',
    verificationStatus: 'VERIFIED',
    minInvestment: 100,
    maxInvestment: 'No Upper Limit',
    expectedReturn: 'Tracks BSE Sensex Total Returns Index (TRI) ~11.5% to 13.0% historic long-term CAGR (minus low expense ratio)',
    notifiedRate: 'BSE Sensex TRI Return',
    rateEffectivePeriod: 'Daily NAV',
    tenure: 'Open-ended',
    lockInPeriod: 'None (Liquid)',
    riskLevel: 'Medium',
    returnMechanism: 'Holds all 30 Sensex constituent companies in exact weightages determined by free-float market capitalization. All corporate dividends are reinvested into the fund corpus.',
    depositRules: 'Lump-sum from ₹100 or Monthly SIP starting from ₹100 via Direct Growth plans.',
    maturityRules: 'Open-ended; redeem at will on any standard business day.',
    extensionRules: 'Perpetual fund scheme.',
    withdrawalRules: 'Funds credited to investor bank account within T+2 business days upon redemption. No exit loads after initial 7 days.',
    prematureClosureRules: 'Instant online redemption.',
    loanFacilityRules: 'Eligible for loan against mutual funds up to 50% LTV.',
    taxTreatment: 'Standard Equity Mutual Fund taxation: STCG (≤12 months) taxed at 20%; LTCG (>12 months) taxed at 12.5% on annual gains above ₹1.25 Lakh (Section 112A).',
    nominationRules: 'Nomination facility mandatory.',
    accountOpeningProcess: [
      'Complete online KYC on any mutual fund platform.',
      'Select BSE Sensex Index Fund Direct-Growth.',
      'Authorize payment through Net Banking or UPI Autopay.'
    ],
    whereToInvest: 'Mutual fund portals (Groww, Zerodha, Kuvera, MF Central) and AMC portals.',
    requiredDocuments: ['PAN Card', 'Aadhaar Card', 'Bank details'],
    importantRules: ['Passive rule-based investing eliminates key-person fund manager risk.'],
    risksAndLimitations: ['Higher stock concentration (30 stocks) compared to Nifty 50 (50 stocks).'],
    faqs: [
      {
        question: 'How many companies are included in the Sensex Index Fund?',
        answer: 'The Sensex Index Fund invests strictly in the 30 mega-cap blue-chip companies that comprise the BSE Sensex index.'
      }
    ],
    comparisonSlugs: ['nifty-50-index-fund', 'large-cap-equity-mutual-fund'],
    calculatorType: 'compound',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-elss-tax',
    title: 'Equity Linked Savings Scheme (ELSS) Tax Saver Fund',
    slug: 'elss-tax-saver-fund',
    description: 'SEBI-categorized open-ended equity mutual fund offering income tax deduction up to ₹1,50,000 per financial year under Section 80C of the Income Tax Act, featuring the shortest mandatory lock-in period (3 years) among all 80C instruments.',
    authority: 'Securities and Exchange Board of India (SEBI) / Central Board of Direct Taxes (CBDT)',
    category: 'Tax Saving Equity',
    status: 'ACTIVE',
    sourceUrl: 'https://www.amfiindia.com',
    sourceAuthority: 'AMFI / SEBI Mutual Fund Categorization Guidelines',
    verificationStatus: 'VERIFIED',
    minInvestment: 500,
    maxInvestment: 'No Upper Limit (Tax deduction capped at ₹1,50,000/year under Sec 80C)',
    expectedReturn: 'Long-term Equity Growth ~12.0% to 15.0% CAGR',
    notifiedRate: 'Market-Linked Equity Performance',
    rateEffectivePeriod: 'Daily NAV',
    tenure: 'Minimum 3 Years (Can be held indefinitely for long-term compounding)',
    lockInPeriod: '3 Years (Each SIP installment has an independent 36-month lock-in)',
    riskLevel: 'High',
    returnMechanism: 'Actively managed diversified portfolio investing minimum 80% of total assets in equity and equity-related instruments across large, mid, and small-cap companies to generate long-term capital appreciation.',
    depositRules: 'Minimum ₹500 and in multiples of ₹500 thereafter. Can invest lump sum or through monthly SIP.',
    maturityRules: 'Units are unlocked exactly upon completion of 3 full years from their specific allotment date. Once unlocked, units can remain invested or be redeemed at prevailing NAV.',
    extensionRules: 'No need to renew; funds continue to compound at market returns post the 3-year lock-in.',
    withdrawalRules: 'Redemption is prohibited during the 3-year statutory lock-in period. After 3 years, redemptions are processed without any exit load with T+2 payout.',
    prematureClosureRules: 'Premature redemption before 3 years is strictly prohibited under CBDT ELSS guidelines.',
    loanFacilityRules: 'Cannot be pledged as collateral during the active 3-year lock-in period.',
    taxTreatment: 'Deduction: Investment up to ₹1,50,000 is eligible for tax deduction under Section 80C under the Old Tax Regime. Capital Gains: LTCG on redemption after the 3-year lock-in is taxed at 12.5% on gains exceeding ₹1.25 Lakh per financial year under Section 112A. STCG does not apply due to mandatory 3-year holding.',
    nominationRules: 'Nomination facility available and registered on folio.',
    accountOpeningProcess: [
      'Complete KYC on mutual fund investment platform.',
      'Search for ELSS Tax Saver Fund (Direct Growth plan).',
      'Select Lump sum or Monthly SIP and submit bank auto-debit mandate.',
      'Download 80C Tax Exemption Investment Statement (Form 16 supporting document) from AMC/CAMS portal.'
    ],
    whereToInvest: 'Mutual Fund AMC websites, CAMS, KFintech, MF Central, and all registered fintech platforms.',
    requiredDocuments: ['PAN Card', 'Aadhaar Card', 'Bank Account Verification'],
    importantRules: [
      'SEBI mandates minimum 80% investment in equity securities.',
      'Has the shortest lock-in period (3 years) among all Section 80C options (compared to PPF 15 years, NSC 5 years, SCSS 5 years, Tax-Saving FD 5 years).',
      'In a SIP, every monthly installment has its own separate 3-year lock-in period.'
    ],
    risksAndLimitations: [
      'Subject to equity market volatility during the 3-year lock-in.',
      'Section 80C tax deduction benefit is only available under the Old Tax Regime (not under New Tax Regime).'
    ],
    faqs: [
      {
        question: 'How does the 3-year lock-in work for ELSS SIP investments?',
        answer: 'Each monthly SIP installment is locked for exactly 36 months from its individual date of purchase. For example, an installment invested in January 2026 can be redeemed in January 2029.'
      },
      {
        question: 'Can I continue holding my ELSS investment after 3 years?',
        answer: 'Yes, after 3 years the lock-in expires, but you are not forced to redeem. You can hold it for 5, 10, or more years to maximize equity compounding.'
      }
    ],
    comparisonSlugs: ['public-provident-fund', 'national-savings-certificate', 'flexi-cap-equity-mutual-fund'],
    calculatorType: 'compound',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-liquid-fund',
    title: 'Overnight & Liquid Mutual Funds',
    slug: 'overnight-liquid-mutual-funds',
    description: 'SEBI-categorized open-ended debt mutual funds investing in ultra-short money market instruments, Tri-Party Repos (TREPS), commercial papers, and Treasury Bills with residual maturities up to 91 days, designed for capital preservation and surplus cash parking.',
    authority: 'Securities and Exchange Board of India (SEBI)',
    category: 'Debt Mutual Funds',
    status: 'ACTIVE',
    sourceUrl: 'https://www.amfiindia.com',
    sourceAuthority: 'AMFI / SEBI Debt Mutual Fund Categorization',
    verificationStatus: 'VERIFIED',
    minInvestment: 500,
    maxInvestment: 'No Upper Limit',
    expectedReturn: 'Prevailing Short-Term Money Market / Repo Yield ~6.5% to 7.2% p.a.',
    notifiedRate: 'Accrual Yield to Maturity (YTM)',
    rateEffectivePeriod: 'Daily Accrual',
    tenure: 'Any duration (From 1 day to several months)',
    lockInPeriod: 'None (Liquid Funds have a graded exit load for the first 6 days; Overnight Funds have 0% exit load)',
    riskLevel: 'Low',
    returnMechanism: 'Generates returns primarily through interest accrual on very short maturity sovereign and AAA-rated corporate money market debt instruments with near-zero mark-to-market volatility.',
    depositRules: 'Invest online with instant execution; cut-off time for same-day historic NAV is 1:30 PM.',
    maturityRules: 'Underlying portfolio securities mature in ≤91 days (1 day for Overnight funds). Fund runs perpetually.',
    extensionRules: 'Open-ended fund.',
    withdrawalRules: 'Standard redemption funds are paid out on T+1 working day morning (by 10:00 AM). Instant redemption facility allows immediate transfer up to ₹50,000 (or 90% of folio value) within seconds 24x7.',
    prematureClosureRules: 'Instant online redemption.',
    loanFacilityRules: 'Eligible for loan against mutual funds (up to 85% LTV).',
    taxTreatment: 'Taxation of Debt Mutual Funds (Post April 1, 2023): All capital gains (regardless of holding duration) are treated as Short-Term Capital Gains and added to investor gross taxable income, taxed at applicable individual income tax slab rates. No indexation benefit.',
    nominationRules: 'Nomination facility available on folio.',
    accountOpeningProcess: [
      'Log into mutual fund platform or AMC app.',
      'Select Liquid Fund Direct Growth plan.',
      'Transfer funds via Net Banking/UPI before cut-off time.'
    ],
    whereToInvest: 'AMC direct portals, MF Central, CAMS, KFintech, all broker platforms.',
    requiredDocuments: ['PAN Card', 'Aadhaar Card', 'Bank details'],
    importantRules: [
      'SEBI mandates a graded exit load on Liquid Funds for redemptions within 7 days: Day 1 (0.0070%), Day 2 (0.0065%), Day 3 (0.0060%), Day 4 (0.0055%), Day 5 (0.0050%), Day 6 (0.0045%), Day 7 onwards (0.0000%).',
      'Overnight Funds have ZERO exit load from day one.'
    ],
    risksAndLimitations: ['Low reinvestment yield during central bank interest rate easing cycles.'],
    faqs: [
      {
        question: 'What is the instant redemption feature in Liquid Funds?',
        answer: 'SEBI permits AMCs to offer an instant withdrawal facility of up to ₹50,000 or 90% of folio value per day, crediting funds to your bank account within minutes 24/7.'
      }
    ],
    comparisonSlugs: ['91-day-treasury-bills', 'banking-psu-debt-fund', 'arbitrage-mutual-fund'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-banking-psu-debt',
    title: 'Banking & PSU Debt Mutual Fund',
    slug: 'banking-psu-debt-fund',
    description: 'SEBI-categorized open-ended debt mutual fund investing at least 80% of its total corpus in high-credit-quality debt instruments issued by Public Sector Banks, Scheduled Commercial Banks, Public Sector Undertakings (PSUs), and Public Financial Institutions (PFIs).',
    authority: 'Securities and Exchange Board of India (SEBI)',
    category: 'Debt Mutual Funds',
    status: 'ACTIVE',
    sourceUrl: 'https://www.amfiindia.com',
    sourceAuthority: 'AMFI / SEBI Debt Mutual Fund Categorization Guidelines',
    verificationStatus: 'VERIFIED',
    minInvestment: 500,
    maxInvestment: 'No Upper Limit',
    expectedReturn: 'High Credit Quality Accrual Yield ~7.0% to 7.8% p.a.',
    notifiedRate: 'Portfolio Yield to Maturity (YTM)',
    rateEffectivePeriod: 'Daily NAV',
    tenure: 'Recommended 1 to 3+ Year Horizon',
    lockInPeriod: 'None (Generally zero exit load)',
    riskLevel: 'Low',
    returnMechanism: 'Generates returns from regular coupon accruals and capital appreciation across AAA-rated bonds, certificates of deposit (CDs), and debentures issued by state-owned and leading banking institutions.',
    depositRules: 'Lump-sum or monthly SIP starting from ₹500.',
    maturityRules: 'Average portfolio maturity typically maintained between 1.5 to 3.5 years. Fund operates perpetually.',
    extensionRules: 'Open-ended fund structure.',
    withdrawalRules: 'Redemption proceeds paid out on T+1 working day. Nil exit load in most schemes.',
    prematureClosureRules: 'Instant online redemption.',
    loanFacilityRules: 'Eligible for loan against mutual funds (up to 80-85% LTV).',
    taxTreatment: 'Debt Mutual Fund Taxation: All gains are added to total taxable income and taxed at marginal income slab rates as per Finance Act provisions.',
    nominationRules: 'Nomination mandatory on folio.',
    accountOpeningProcess: [
      'Log into mutual fund platform or AMC portal.',
      'Select Banking & PSU Debt Fund Direct-Growth plan.',
      'Fund purchase via Net Banking or UPI.'
    ],
    whereToInvest: 'Mutual Fund AMCs, MF Central, CAMS, KFintech, and stockbrokers.',
    requiredDocuments: ['PAN Card', 'Aadhaar Card', 'Bank details'],
    importantRules: [
      'SEBI mandates minimum 80% investment in debt securities of Banks, PSUs, and PFIs.',
      'Virtually zero credit default risk due to PSU and top-tier bank issuer profiles.'
    ],
    risksAndLimitations: [
      'Moderate interest rate duration risk: fund NAV can fluctuate slightly when RBI policy rates change.'
    ],
    faqs: [
      {
        question: 'Why invest in a Banking & PSU Debt Fund?',
        answer: 'It offers the highest credit safety among corporate debt funds because at least 80% of the portfolio is invested in government-owned PSUs and major banking institutions.'
      }
    ],
    comparisonSlugs: ['corporate-bond-mutual-fund', 'overnight-liquid-mutual-funds', '5-year-central-gsec'],
    calculatorType: 'compound',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  }
];
