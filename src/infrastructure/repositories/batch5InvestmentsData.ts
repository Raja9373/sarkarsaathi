import { Investment } from '../../types';

export const batch5InvestmentsData: Investment[] = [
  {
    id: 'inv-sidbi-bonds',
    title: 'SIDBI Regular & Tax-Saving Bonds',
    slug: 'sidbi-regular-tax-saving-bonds',
    description: 'Senior unsecured taxable and capital gain debentures/bonds issued by the Small Industries Development Bank of India (SIDBI) under RBI statutory developmental mandate to refinance and support Micro, Small, and Medium Enterprises (MSMEs).',
    authority: 'Small Industries Development Bank of India (SIDBI) / Reserve Bank of India (RBI)',
    category: 'Development Bank Bonds',
    status: 'ACTIVE / TRADED',
    sourceUrl: 'https://www.sidbi.in',
    sourceAuthority: 'Small Industries Development Bank of India (SIDBI) / SEBI',
    verificationStatus: 'VERIFIED',
    minInvestment: 10000,
    maxInvestment: 'No Upper Limit (Retail/OBPP traded lots typically ₹10,000 to ₹1,00,000)',
    expectedReturn: 'Fixed Annual / Semi-Annual Coupon ~7.40% to 7.85% p.a.',
    notifiedRate: '7.40% - 7.85% p.a. (Tranche & Series Dependent)',
    rateEffectivePeriod: '3 to 5 Year Bond Tenure',
    tenure: '3 to 5 Years',
    lockInPeriod: 'None for standard regular bonds (Tradable on NSE/BSE debt segment); 5 Years for 54EC capital gains series',
    riskLevel: 'Low',
    returnMechanism: 'Regular periodic coupon payments disbursed directly to the bondholder bank account, with bullet redemption of face value at maturity backed by SIDBI statutory balance sheet and sovereign ownership structure.',
    depositRules: 'Subscribed during primary institutional private placement tranches or purchased in secondary retail debt markets via SEBI-registered Online Bond Platform Providers (OBPP) or stockbrokers.',
    maturityRules: 'Full redemption of principal at face value upon maturity date credited directly to investor registered bank account via RTGS/NEFT.',
    extensionRules: 'No auto-extension; principal is redeemed at maturity.',
    withdrawalRules: 'Tradable on NSE and BSE debt segments; can be liquidated prior to maturity on secondary debt platforms at prevailing market yield prices.',
    prematureClosureRules: 'Secondary market sale through demat trading accounts or OBPP portals.',
    loanFacilityRules: 'Eligible for loan pledging and bank collateral as premier AAA-rated quasi-sovereign debt securities.',
    taxTreatment: 'Interest income is fully taxable in the hands of the investor under "Income from Other Sources" at applicable marginal income tax slab rates. TDS applies under Section 193 of the Income Tax Act if applicable. Capital gains on listed bonds: LTCG (>12 months) taxed at 12.5% without indexation; STCG (≤12 months) taxed at regular slab rates.',
    nominationRules: 'Nomination facility available through the bondholder Depository Participant (DP) account (NSDL/CDSL).',
    accountOpeningProcess: [
      'Open a Demat and Trading account with a SEBI-registered broker or register on a SEBI-regulated Online Bond Platform Provider (OBPP).',
      'Complete KYC verification with PAN, Aadhaar, and bank account linking.',
      'Search for SIDBI listed bond ISINs and place purchase orders on the exchange debt segment.'
    ],
    whereToInvest: 'NSE/BSE Wholesale & Retail Debt Segments, SEBI-registered Online Bond Platforms (e.g., Wint Wealth, GoldenPi, Grip Invest), and primary issue syndicates.',
    requiredDocuments: ['PAN Card', 'Aadhaar Card', 'Demat Account (Client Master Report / CMR)', 'Bank Account details'],
    importantRules: [
      'Credit Rating: CRISIL AAA / ICRA AAA / CARE AAA denoting highest degree of safety regarding timely servicing of financial obligations.',
      'Bonds are held strictly in electronic (demat) format.'
    ],
    risksAndLimitations: [
      'Interest rate risk: secondary bond prices fluctuate inversely with benchmark RBI repo rate cycles.',
      'Secondary market liquidity may vary depending on trading volume.'
    ],
    faqs: [
      {
        question: 'What is the credit quality of SIDBI bonds?',
        answer: 'SIDBI is an apex statutory financial institution set up under an Act of Parliament with majority ownership held by the Government of India, SBI, and other public institutions, carrying top-tier AAA credit ratings.'
      }
    ],
    comparisonSlugs: ['exim-bank-india-senior-bonds', 'nabard-54ec-capital-gains-bonds'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-exim-bonds',
    title: 'EXIM Bank India Senior Bonds',
    slug: 'exim-bank-india-senior-bonds',
    description: 'AAA-rated senior secured and unsecured institutional debt securities issued by the Export-Import Bank of India (EXIM Bank) to finance, facilitate, and promote India international foreign trade and export projects.',
    authority: 'Export-Import Bank of India (EXIM Bank) / Ministry of Finance',
    category: 'Development Bank Bonds',
    status: 'ACTIVE / TRADED',
    sourceUrl: 'https://www.eximbankindia.in',
    sourceAuthority: 'Export-Import Bank of India (EXIM Bank) / SEBI',
    verificationStatus: 'VERIFIED',
    minInvestment: 10000,
    maxInvestment: 'No Upper Limit',
    expectedReturn: 'Fixed Semi-Annual / Annual Coupon ~7.35% to 7.75% p.a.',
    notifiedRate: '7.35% - 7.75% p.a. (Series Specific)',
    rateEffectivePeriod: '3 to 10 Year Tenure',
    tenure: '3 to 10 Years',
    lockInPeriod: 'None (Tradable on National Stock Exchange debt market)',
    riskLevel: 'Low',
    returnMechanism: 'Regular fixed interest coupons distributed on specified scheduled dates directly to the investor bank account, with par repayment of principal at maturity backed by 100% Government of India statutory ownership.',
    depositRules: 'Issued via primary private placement book building on exchange electronic bidding platforms (EBP) and available for secondary purchase on NSE/BSE.',
    maturityRules: 'Redeemed at face value on maturity date with automatic electronic credit to registered bank accounts.',
    extensionRules: 'No rollover; bullet redemption at maturity.',
    withdrawalRules: 'Secondary market trading on BSE and NSE.',
    prematureClosureRules: 'Sellable on secondary exchange debt markets via registered broker or OBPP platform.',
    loanFacilityRules: 'Eligible for loan against securities and repo transactions.',
    taxTreatment: 'Interest received is fully taxable at the investor applicable income tax slab rates. Capital gains on transfer: LTCG (>12 months) taxed at 12.5%; STCG (≤12 months) at slab rates.',
    nominationRules: 'Nomination managed through investor demat account with NSDL or CDSL.',
    accountOpeningProcess: [
      'Log into an OBPP bond platform or brokerage trading portal.',
      'Locate EXIM Bank listed bond series by ISIN.',
      'Place order on debt segment using linked funds.'
    ],
    whereToInvest: 'NSE Debt Segment, BSE, SEBI-regulated OBPP portals, and institutional primary syndicates.',
    requiredDocuments: ['PAN Card', 'Aadhaar Card', 'Demat Account CMR', 'Bank Mandate'],
    importantRules: [
      'Carries AAA rating by CRISIL, ICRA, and India Ratings reflecting pristine sovereign-backed credit profile.',
      'Issued under the Export-Import Bank of India Act, 1981.'
    ],
    risksAndLimitations: [
      'Subject to duration and interest rate risk in secondary trading.'
    ],
    faqs: [
      {
        question: 'Who owns EXIM Bank of India?',
        answer: 'EXIM Bank is 100% wholly owned by the Government of India, operating under the administrative purview of the Ministry of Finance.'
      }
    ],
    comparisonSlugs: ['sidbi-regular-tax-saving-bonds', 'pfc-institutional-bonds'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-pfc-bonds',
    title: 'Power Finance Corporation Institutional Bonds',
    slug: 'pfc-institutional-bonds',
    description: 'AAA-rated secured and unsecured taxable Non-Convertible Debentures (NCDs) issued by Power Finance Corporation (PFC), a Maharatna Central Public Sector Enterprise providing vital infrastructure financing across India power generation, transmission, and green energy projects.',
    authority: 'Power Finance Corporation Limited (PFC) / Ministry of Power',
    category: 'PSU Bonds',
    status: 'ACTIVE / TRADED',
    sourceUrl: 'https://pfcindia.com',
    sourceAuthority: 'Power Finance Corporation (PFC) / SEBI',
    verificationStatus: 'VERIFIED',
    minInvestment: 10000,
    maxInvestment: 'No Upper Limit',
    expectedReturn: 'Fixed Annual / Semi-Annual Coupon ~7.45% to 7.85% p.a.',
    notifiedRate: '7.45% - 7.85% p.a. (Tranche Dependent)',
    rateEffectivePeriod: '3 to 10 Year Maturity Series',
    tenure: '3 to 10 Years',
    lockInPeriod: 'None (Liquidly traded on NSE and BSE debt segments)',
    riskLevel: 'Low',
    returnMechanism: 'Annual or semi-annual fixed coupon payments credited to bondholders, backed by PFC robust loan book and Maharatna sovereign corporate balance sheet.',
    depositRules: 'Subscribed through public issue tranches or bought on secondary debt markets in multiples of face value (₹10,000 / ₹1,00,000).',
    maturityRules: 'Bullet redemption of principal at face value on maturity date.',
    extensionRules: 'No auto-renewal; redeemed on specified maturity date.',
    withdrawalRules: 'Freely tradable on NSE/BSE capital debt markets.',
    prematureClosureRules: 'Secondary market exit through registered stockbrokers or OBPP portals.',
    loanFacilityRules: 'Eligible for loan pledging with commercial banks and NBFCs.',
    taxTreatment: 'Interest is added to total income and taxed at marginal income tax slab rates. Capital gains on listed debentures held >12 months taxed at 12.5% without indexation; STCG at slab rates.',
    nominationRules: 'Nomination recorded via Demat DP account.',
    accountOpeningProcess: [
      'Register on a SEBI-licensed Online Bond Platform or use stockbroking terminal.',
      'Search for PFC NCD series / ISIN.',
      'Place limit or market order on the exchange debt segment.'
    ],
    whereToInvest: 'NSE, BSE, SEBI-registered Online Bond Platforms (GoldenPi, Wint Wealth, Aspero), and direct broker terminals.',
    requiredDocuments: ['PAN Card', 'Aadhaar Card', 'Demat Account', 'Bank Details'],
    importantRules: [
      'Highest safety rating: CRISIL AAA, ICRA AAA, and CARE AAA.',
      'PFC is a Maharatna CPSE under the administrative control of the Ministry of Power.'
    ],
    risksAndLimitations: [
      'Price volatility if interest rate yields rise across the macro environment.'
    ],
    faqs: [
      {
        question: 'Are PFC bonds secured?',
        answer: 'PFC issues both secured NCDs (backed by a charge on specific company assets/receivables) and senior unsecured institutional debentures.'
      }
    ],
    comparisonSlugs: ['rec-limited-institutional-bonds', 'irfc-institutional-bonds'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-rec-bonds',
    title: 'REC Limited Institutional Bonds',
    slug: 'rec-limited-institutional-bonds',
    description: 'AAA-rated secured and unsecured taxable Non-Convertible Debentures (NCDs) issued by REC Limited (formerly Rural Electrification Corporation), a Maharatna CPSE financing power infrastructure, distribution upgrades, and massive renewable energy capacities across India.',
    authority: 'REC Limited / Ministry of Power',
    category: 'PSU Bonds',
    status: 'ACTIVE / TRADED',
    sourceUrl: 'https://recindia.nic.in',
    sourceAuthority: 'REC Limited / SEBI',
    verificationStatus: 'VERIFIED',
    minInvestment: 10000,
    maxInvestment: 'No Upper Limit',
    expectedReturn: 'Fixed Annual / Semi-Annual Coupon ~7.45% to 7.85% p.a.',
    notifiedRate: '7.45% - 7.85% p.a. (Series Dependent)',
    rateEffectivePeriod: '3 to 10 Year Maturity Series',
    tenure: '3 to 10 Years',
    lockInPeriod: 'None (Tradable on NSE/BSE debt market)',
    riskLevel: 'Low',
    returnMechanism: 'Regular fixed interest coupons distributed on specified record dates, with full principal repayment on maturity date.',
    depositRules: 'Subscribed during primary issue tranches or bought on secondary debt markets through demat accounts.',
    maturityRules: 'Full par value redemption upon maturity date.',
    extensionRules: 'No rollover; bullet repayment.',
    withdrawalRules: 'Tradable on NSE and BSE debt segments on all market trading days.',
    prematureClosureRules: 'Sellable on secondary debt markets via brokers or OBPP portals.',
    loanFacilityRules: 'Eligible for loan pledging with institutional lenders.',
    taxTreatment: 'Interest income is fully taxable at the investor marginal slab rate. Capital gains on listed bonds: LTCG (>12 months) at 12.5%; STCG (≤12 months) at slab rates.',
    nominationRules: 'Nomination recorded through the investor Demat account.',
    accountOpeningProcess: [
      'Log into an OBPP portal or trading account.',
      'Search for REC Limited bond series by ISIN.',
      'Place buy order on exchange debt segment.'
    ],
    whereToInvest: 'NSE/BSE Debt Segments, SEBI-regulated OBPP portals, and broker platforms.',
    requiredDocuments: ['PAN Card', 'Aadhaar Card', 'Demat Account CMR', 'Bank Details'],
    importantRules: [
      'Credit ratings: CRISIL AAA, ICRA AAA, and CARE AAA denoting pristine safety.',
      'Subsidiary of Power Finance Corporation and Maharatna CPSE.'
    ],
    risksAndLimitations: [
      'Secondary market price sensitivity to benchmark sovereign yield shifts.'
    ],
    faqs: [
      {
        question: 'What is the role of REC Limited?',
        answer: 'REC Limited is a premier infrastructure finance company designated as the nodal agency for major national power sector schemes including Revamped Distribution Sector Scheme (RDSS).'
      }
    ],
    comparisonSlugs: ['pfc-institutional-bonds', 'irfc-institutional-bonds'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-irfc-bonds',
    title: 'Indian Railway Finance Corporation Bonds',
    slug: 'irfc-institutional-bonds',
    description: 'AAA-rated taxable and infrastructure debt securities issued by the Indian Railway Finance Corporation (IRFC), the dedicated market borrowing arm of the Ministry of Railways, to finance rolling stock procurement and railway infrastructure creation.',
    authority: 'Indian Railway Finance Corporation (IRFC) / Ministry of Railways',
    category: 'PSU Bonds',
    status: 'ACTIVE / TRADED',
    sourceUrl: 'https://irfc.nic.in',
    sourceAuthority: 'Indian Railway Finance Corporation (IRFC) / SEBI',
    verificationStatus: 'VERIFIED',
    minInvestment: 10000,
    maxInvestment: 'No Upper Limit',
    expectedReturn: 'Fixed Annual / Semi-Annual Coupon ~7.30% to 7.75% p.a.',
    notifiedRate: '7.30% - 7.75% p.a. (Tranche Specific)',
    rateEffectivePeriod: '3 to 15 Year Maturity Series',
    tenure: '3 to 15 Years',
    lockInPeriod: 'None (Actively traded on NSE/BSE debt market)',
    riskLevel: 'Low',
    returnMechanism: 'Regular fixed interest coupons backed by guaranteed lease rental inflows from the Ministry of Railways, Government of India.',
    depositRules: 'Subscribed in primary issues or purchased on secondary exchange debt markets in standard market lots.',
    maturityRules: 'Principal redeemed at par on maturity date directly to investor bank account.',
    extensionRules: 'No rollover; bullet repayment at maturity.',
    withdrawalRules: 'Tradable on NSE and BSE debt segments.',
    prematureClosureRules: 'Sellable on secondary exchange debt platforms at prevailing market yield.',
    loanFacilityRules: 'Eligible for loan pledging and credit facility collateral.',
    taxTreatment: 'Interest received on taxable IRFC bonds is subject to normal slab rate taxation under Income from Other Sources. Capital gains on listed bonds: LTCG (>12 months) at 12.5%; STCG (≤12 months) at slab rates.',
    nominationRules: 'Nomination recorded via depository participant account.',
    accountOpeningProcess: [
      'Log into an OBPP bond platform or brokerage app.',
      'Locate IRFC bond series by ISIN.',
      'Execute buy order on exchange debt segment.'
    ],
    whereToInvest: 'NSE Wholesale & Retail Debt Market, BSE, SEBI-registered OBPP platforms.',
    requiredDocuments: ['PAN Card', 'Aadhaar Card', 'Demat Account', 'Bank Mandate'],
    importantRules: [
      'Credit ratings: CRISIL AAA / ICRA AAA / CARE AAA.',
      'Zero non-performing assets (NPA) track record due to sovereign lease model with Ministry of Railways.'
    ],
    risksAndLimitations: [
      'Duration risk during interest rate hiking cycles.'
    ],
    faqs: [
      {
        question: 'How safe are IRFC bonds?',
        answer: 'IRFC bonds carry the highest credit safety ratings (AAA) because their primary cash flows originate from statutory lease payments made directly by the Ministry of Railways.'
      }
    ],
    comparisonSlugs: ['pfc-institutional-bonds', 'rec-limited-institutional-bonds'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-iocl-bonds',
    title: 'IOCL Corporate Bonds',
    slug: 'iocl-corporate-bonds',
    description: 'AAA-rated unsecured/secured Non-Convertible Debentures (NCDs) issued by Indian Oil Corporation Limited (IOCL), India largest Maharatna state-owned downstream oil and gas refining and marketing enterprise.',
    authority: 'Indian Oil Corporation Limited (IOCL) / Ministry of Petroleum and Natural Gas',
    category: 'PSU Bonds',
    status: 'ACTIVE / TRADED',
    sourceUrl: 'https://iocl.com',
    sourceAuthority: 'Indian Oil Corporation Limited (IOCL) / SEBI',
    verificationStatus: 'VERIFIED',
    minInvestment: 10000,
    maxInvestment: 'No Upper Limit',
    expectedReturn: 'Fixed Annual / Semi-Annual Coupon ~7.40% to 7.80% p.a.',
    notifiedRate: '7.40% - 7.80% p.a. (Series Specific)',
    rateEffectivePeriod: '3 to 10 Year Maturity Series',
    tenure: '3 to 10 Years',
    lockInPeriod: 'None (Tradable on NSE/BSE debt market)',
    riskLevel: 'Low',
    returnMechanism: 'Regular fixed interest coupons backed by IOCL refining cash flows and Maharatna balance sheet, with principal redemption at maturity.',
    depositRules: 'Issued through electronic bidding platform private placements and available on exchange secondary markets.',
    maturityRules: 'Redeemed at par value on maturity date.',
    extensionRules: 'No extension; bullet redemption.',
    withdrawalRules: 'Tradable on NSE and BSE debt segments.',
    prematureClosureRules: 'Sellable on secondary exchange debt markets via registered stockbrokers or OBPP portals.',
    loanFacilityRules: 'Eligible for loan pledging with institutional lenders.',
    taxTreatment: 'Interest income is fully taxable at investor applicable marginal slab rate. Capital gains: LTCG (>12 months) at 12.5%; STCG (≤12 months) at slab rates.',
    nominationRules: 'Nomination recorded via Demat DP account.',
    accountOpeningProcess: [
      'Access an OBPP portal or trading account.',
      'Search for IOCL listed bond series by ISIN.',
      'Place order on the exchange debt segment.'
    ],
    whereToInvest: 'NSE/BSE Debt Segments, SEBI-regulated OBPP portals, and broker platforms.',
    requiredDocuments: ['PAN Card', 'Aadhaar Card', 'Demat Account CMR', 'Bank Details'],
    importantRules: [
      'Credit ratings: CRISIL AAA / ICRA AAA denoting highest safety.',
      'Maharatna CPSE with dominant market share in domestic fuel marketing.'
    ],
    risksAndLimitations: [
      'Interest rate duration risk in secondary trading.'
    ],
    faqs: [
      {
        question: 'What is the credit rating of IOCL bonds?',
        answer: 'IOCL bonds consistently hold top-tier AAA credit ratings from CRISIL and ICRA reflecting sovereign ownership and market leadership.'
      }
    ],
    comparisonSlugs: ['bpcl-corporate-bonds', 'ntpc-corporate-bonds'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-ntpc-bonds',
    title: 'NTPC Limited Corporate Bonds',
    slug: 'ntpc-corporate-bonds',
    description: 'AAA-rated secured and unsecured Non-Convertible Debentures (NCDs) issued by NTPC Limited, India largest Maharatna power generation utility, to fund thermal plant efficiency and massive solar/wind renewable capacities.',
    authority: 'NTPC Limited / Ministry of Power',
    category: 'PSU Bonds',
    status: 'ACTIVE / TRADED',
    sourceUrl: 'https://ntpc.co.in',
    sourceAuthority: 'NTPC Limited / SEBI',
    verificationStatus: 'VERIFIED',
    minInvestment: 10000,
    maxInvestment: 'No Upper Limit',
    expectedReturn: 'Fixed Annual / Semi-Annual Coupon ~7.40% to 7.85% p.a.',
    notifiedRate: '7.40% - 7.85% p.a. (Series Specific)',
    rateEffectivePeriod: '3 to 10 Year Maturity Series',
    tenure: '3 to 10 Years',
    lockInPeriod: 'None (Tradable on NSE/BSE debt market)',
    riskLevel: 'Low',
    returnMechanism: 'Regular annual fixed interest coupon payments backed by long-term Power Purchase Agreements (PPAs) and Maharatna cash flows.',
    depositRules: 'Subscribed through primary institutional private placement tranches or purchased in secondary retail debt markets.',
    maturityRules: 'Bullet redemption of principal at face value on maturity date.',
    extensionRules: 'No rollover; redeemed on specified maturity date.',
    withdrawalRules: 'Tradable on NSE and BSE debt segments on all business days.',
    prematureClosureRules: 'Sellable on secondary debt platforms via registered stockbrokers or OBPP portals.',
    loanFacilityRules: 'Eligible for loan pledging with commercial banks.',
    taxTreatment: 'Interest income is fully taxable in the hands of the investor under Income from Other Sources at applicable slab rates. Capital gains: LTCG (>12 months) at 12.5%; STCG (≤12 months) at slab rates.',
    nominationRules: 'Nomination recorded via Demat DP account.',
    accountOpeningProcess: [
      'Register on a SEBI-regulated Online Bond Platform Provider (OBPP) or use broker terminal.',
      'Search for NTPC listed bond series by ISIN.',
      'Execute buy order on exchange debt segment.'
    ],
    whereToInvest: 'NSE/BSE Debt Segments, SEBI-regulated OBPP portals, and broker platforms.',
    requiredDocuments: ['PAN Card', 'Aadhaar Card', 'Demat Account CMR', 'Bank Details'],
    importantRules: [
      'Credit ratings: CRISIL AAA / ICRA AAA / CARE AAA.',
      'Power generation backed by tripartite payment security agreements with State Governments and RBI.'
    ],
    risksAndLimitations: [
      'Macro interest rate sensitivity.'
    ],
    faqs: [
      {
        question: 'Why are NTPC bonds considered quasi-sovereign in safety?',
        answer: 'NTPC is majority-owned by the Government of India and operates with statutory payment security mechanisms ensuring near-zero default probability.'
      }
    ],
    comparisonSlugs: ['pfc-institutional-bonds', 'iocl-corporate-bonds'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-ongc-bonds',
    title: 'ONGC Videsh & Corporate Bonds',
    slug: 'ongc-corporate-bonds',
    description: 'AAA-rated senior unsecured Non-Convertible Debentures (NCDs) and notes issued by Oil and Natural Gas Corporation (ONGC) and ONGC Videsh to finance domestic upstream hydrocarbon exploration and international energy asset acquisitions.',
    authority: 'Oil and Natural Gas Corporation (ONGC) / Ministry of Petroleum and Natural Gas',
    category: 'PSU Bonds',
    status: 'ACTIVE / TRADED',
    sourceUrl: 'https://ongcindia.com',
    sourceAuthority: 'Oil and Natural Gas Corporation (ONGC) / SEBI',
    verificationStatus: 'VERIFIED',
    minInvestment: 10000,
    maxInvestment: 'No Upper Limit',
    expectedReturn: 'Fixed Annual / Semi-Annual Coupon ~7.40% to 7.80% p.a.',
    notifiedRate: '7.40% - 7.80% p.a. (Tranche Specific)',
    rateEffectivePeriod: '3 to 10 Year Maturity Series',
    tenure: '3 to 10 Years',
    lockInPeriod: 'None (Tradable on NSE/BSE debt market)',
    riskLevel: 'Low',
    returnMechanism: 'Regular fixed interest coupons backed by ONGC upstream crude oil and natural gas production cash flows.',
    depositRules: 'Subscribed through private placement tranches or purchased in secondary exchange debt markets.',
    maturityRules: 'Redeemed at face value upon maturity date.',
    extensionRules: 'No extension; bullet redemption.',
    withdrawalRules: 'Tradable on NSE and BSE debt segments.',
    prematureClosureRules: 'Sellable on secondary exchange debt markets via registered stockbrokers or OBPP portals.',
    loanFacilityRules: 'Eligible for loan pledging with institutional lenders.',
    taxTreatment: 'Interest income is fully taxable at investor applicable marginal slab rate. Capital gains: LTCG (>12 months) at 12.5%; STCG (≤12 months) at slab rates.',
    nominationRules: 'Nomination recorded via Demat DP account.',
    accountOpeningProcess: [
      'Access an OBPP portal or trading account.',
      'Search for ONGC listed bond series by ISIN.',
      'Place order on the exchange debt segment.'
    ],
    whereToInvest: 'NSE/BSE Debt Segments, SEBI-regulated OBPP portals, and broker platforms.',
    requiredDocuments: ['PAN Card', 'Aadhaar Card', 'Demat Account CMR', 'Bank Details'],
    importantRules: [
      'Credit ratings: CRISIL AAA / ICRA AAA / CARE AAA.',
      'India largest crude oil and natural gas producer contributing ~70% of domestic production.'
    ],
    risksAndLimitations: [
      'Duration risk during interest rate hiking cycles.'
    ],
    faqs: [
      {
        question: 'What is the credit standing of ONGC bonds?',
        answer: 'ONGC is a debt-disciplined Maharatna CPSE holding top-tier AAA credit ratings from all major domestic rating agencies.'
      }
    ],
    comparisonSlugs: ['iocl-corporate-bonds', 'gail-india-corporate-bonds'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-bpcl-bonds',
    title: 'BPCL Corporate Bonds',
    slug: 'bpcl-corporate-bonds',
    description: 'AAA-rated Non-Convertible Debentures (NCDs) issued by Bharat Petroleum Corporation Limited (BPCL), a Maharatna CPSE, to fund refinery upgrades, petrochemical diversification, and marketing infrastructure expansion.',
    authority: 'Bharat Petroleum Corporation Limited (BPCL) / Ministry of Petroleum and Natural Gas',
    category: 'PSU Bonds',
    status: 'ACTIVE / TRADED',
    sourceUrl: 'https://bharatpetroleum.in',
    sourceAuthority: 'Bharat Petroleum Corporation Limited (BPCL) / SEBI',
    verificationStatus: 'VERIFIED',
    minInvestment: 10000,
    maxInvestment: 'No Upper Limit',
    expectedReturn: 'Fixed Annual / Semi-Annual Coupon ~7.40% to 7.80% p.a.',
    notifiedRate: '7.40% - 7.80% p.a. (Tranche Dependent)',
    rateEffectivePeriod: '3 to 10 Year Maturity Series',
    tenure: '3 to 10 Years',
    lockInPeriod: 'None (Tradable on NSE/BSE debt market)',
    riskLevel: 'Low',
    returnMechanism: 'Regular fixed interest coupon payments backed by extensive refining and nationwide fuel retailing cash flows.',
    depositRules: 'Subscribed through primary private placement tranches or purchased in secondary retail debt markets.',
    maturityRules: 'Redeemed at par value on maturity date.',
    extensionRules: 'No rollover; bullet redemption.',
    withdrawalRules: 'Tradable on NSE and BSE debt segments.',
    prematureClosureRules: 'Sellable on secondary exchange debt markets via registered stockbrokers or OBPP portals.',
    loanFacilityRules: 'Eligible for loan pledging with institutional lenders.',
    taxTreatment: 'Interest income is fully taxable at investor applicable marginal slab rate. Capital gains: LTCG (>12 months) at 12.5%; STCG (≤12 months) at slab rates.',
    nominationRules: 'Nomination recorded via Demat DP account.',
    accountOpeningProcess: [
      'Access an OBPP portal or trading account.',
      'Search for BPCL listed bond series by ISIN.',
      'Place order on the exchange debt segment.'
    ],
    whereToInvest: 'NSE/BSE Debt Segments, SEBI-regulated OBPP portals, and broker platforms.',
    requiredDocuments: ['PAN Card', 'Aadhaar Card', 'Demat Account CMR', 'Bank Details'],
    importantRules: [
      'Credit ratings: CRISIL AAA / ICRA AAA denoting highest degree of safety.',
      'Maharatna enterprise operating major refineries in Mumbai and Kochi.'
    ],
    risksAndLimitations: [
      'Secondary market interest rate sensitivity.'
    ],
    faqs: [
      {
        question: 'Who regulates BPCL bond issuances?',
        answer: 'BPCL debentures are issued under SEBI (Issue and Listing of Non-Convertible Securities) Regulations and listed on recognized stock exchanges.'
      }
    ],
    comparisonSlugs: ['iocl-corporate-bonds', 'ongc-corporate-bonds'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-gail-bonds',
    title: 'GAIL India Corporate Bonds',
    slug: 'gail-india-corporate-bonds',
    description: 'AAA-rated Non-Convertible Debentures (NCDs) issued by GAIL (India) Limited, the nation flagship natural gas transmission, processing, and distribution Maharatna enterprise, to finance national gas grid pipeline expansion.',
    authority: 'GAIL (India) Limited / Ministry of Petroleum and Natural Gas',
    category: 'PSU Bonds',
    status: 'ACTIVE / TRADED',
    sourceUrl: 'https://gailonline.com',
    sourceAuthority: 'GAIL (India) Limited / SEBI',
    verificationStatus: 'VERIFIED',
    minInvestment: 10000,
    maxInvestment: 'No Upper Limit',
    expectedReturn: 'Fixed Annual / Semi-Annual Coupon ~7.40% to 7.80% p.a.',
    notifiedRate: '7.40% - 7.80% p.a. (Series Dependent)',
    rateEffectivePeriod: '3 to 10 Year Maturity Series',
    tenure: '3 to 10 Years',
    lockInPeriod: 'None (Tradable on NSE/BSE debt market)',
    riskLevel: 'Low',
    returnMechanism: 'Regular fixed interest coupons backed by regulated gas transmission tariffs and petrochemical business cash flows.',
    depositRules: 'Subscribed through primary private placement tranches or purchased in secondary retail debt markets.',
    maturityRules: 'Redeemed at par value on maturity date.',
    extensionRules: 'No rollover; bullet redemption.',
    withdrawalRules: 'Tradable on NSE and BSE debt segments.',
    prematureClosureRules: 'Sellable on secondary exchange debt markets via registered stockbrokers or OBPP portals.',
    loanFacilityRules: 'Eligible for loan pledging with institutional lenders.',
    taxTreatment: 'Interest income is fully taxable at investor applicable marginal slab rate. Capital gains: LTCG (>12 months) at 12.5%; STCG (≤12 months) at slab rates.',
    nominationRules: 'Nomination recorded via Demat DP account.',
    accountOpeningProcess: [
      'Access an OBPP portal or trading account.',
      'Search for GAIL listed bond series by ISIN.',
      'Place order on the exchange debt segment.'
    ],
    whereToInvest: 'NSE/BSE Debt Segments, SEBI-regulated OBPP portals, and broker platforms.',
    requiredDocuments: ['PAN Card', 'Aadhaar Card', 'Demat Account CMR', 'Bank Details'],
    importantRules: [
      'Credit ratings: CRISIL AAA / ICRA AAA / CARE AAA.',
      'Owns and operates over 70% of India national natural gas transmission pipeline network.'
    ],
    risksAndLimitations: [
      'Interest rate risk in secondary trading.'
    ],
    faqs: [
      {
        question: 'What is the credit rating of GAIL bonds?',
        answer: 'GAIL bonds hold AAA ratings with stable outlook from all domestic credit rating agencies.'
      }
    ],
    comparisonSlugs: ['ongc-corporate-bonds', 'iocl-corporate-bonds'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-coal-india-bonds',
    title: 'Coal India Corporate Bonds',
    slug: 'coal-india-corporate-bonds',
    description: 'AAA-rated corporate debt securities issued by Coal India Limited (CIL) / its subsidiaries under SEBI regulations to finance mechanized surface coal evacuation infrastructure, solar parks, and railway connectivity sidings.',
    authority: 'Coal India Limited (CIL) / Ministry of Coal',
    category: 'PSU Bonds',
    status: 'ACTIVE / TRADED',
    sourceUrl: 'https://coalindia.in',
    sourceAuthority: 'Coal India Limited (CIL) / SEBI',
    verificationStatus: 'VERIFIED',
    minInvestment: 10000,
    maxInvestment: 'No Upper Limit',
    expectedReturn: 'Fixed Annual / Semi-Annual Coupon ~7.35% to 7.75% p.a.',
    notifiedRate: '7.35% - 7.75% p.a. (Tranche Specific)',
    rateEffectivePeriod: '3 to 7 Year Maturity Series',
    tenure: '3 to 7 Years',
    lockInPeriod: 'None (Tradable on NSE/BSE debt market)',
    riskLevel: 'Low',
    returnMechanism: 'Regular fixed interest coupons backed by Coal India monopolistic production cash flows and virtually zero net debt balance sheet.',
    depositRules: 'Subscribed through primary private placement tranches or purchased in secondary retail debt markets.',
    maturityRules: 'Redeemed at par value on maturity date.',
    extensionRules: 'No rollover; bullet redemption.',
    withdrawalRules: 'Tradable on NSE and BSE debt segments.',
    prematureClosureRules: 'Sellable on secondary exchange debt markets via registered stockbrokers or OBPP portals.',
    loanFacilityRules: 'Eligible for loan pledging with institutional lenders.',
    taxTreatment: 'Interest income is fully taxable at investor applicable marginal slab rate. Capital gains: LTCG (>12 months) at 12.5%; STCG (≤12 months) at slab rates.',
    nominationRules: 'Nomination recorded via Demat DP account.',
    accountOpeningProcess: [
      'Access an OBPP portal or trading account.',
      'Search for Coal India listed bond series by ISIN.',
      'Place order on the exchange debt segment.'
    ],
    whereToInvest: 'NSE/BSE Debt Segments, SEBI-regulated OBPP portals, and broker platforms.',
    requiredDocuments: ['PAN Card', 'Aadhaar Card', 'Demat Account CMR', 'Bank Details'],
    importantRules: [
      'Credit ratings: CRISIL AAA / ICRA AAA.',
      'World largest coal producer accounting for ~80% of total domestic coal output in India.'
    ],
    risksAndLimitations: [
      'Secondary market interest rate sensitivity.'
    ],
    faqs: [
      {
        question: 'What is the financial strength of Coal India?',
        answer: 'Coal India operates as a cash-rich Maharatna CPSE with virtually zero net corporate debt and massive annual operating cash flows.'
      }
    ],
    comparisonSlugs: ['ntpc-corporate-bonds', 'nalco-corporate-bonds'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-nalco-bonds',
    title: 'NALCO Corporate Bonds',
    slug: 'nalco-corporate-bonds',
    description: 'AAA/AA+ rated corporate debentures issued by National Aluminium Company Limited (NALCO), a Navratna CPSE under the Ministry of Mines, to finance alumina refinery expansions, captive bauxite mining, and smelter modernization.',
    authority: 'National Aluminium Company Limited (NALCO) / Ministry of Mines',
    category: 'PSU Bonds',
    status: 'ACTIVE / TRADED',
    sourceUrl: 'https://nalcoindia.com',
    sourceAuthority: 'National Aluminium Company Limited (NALCO) / SEBI',
    verificationStatus: 'VERIFIED',
    minInvestment: 10000,
    maxInvestment: 'No Upper Limit',
    expectedReturn: 'Fixed Annual / Semi-Annual Coupon ~7.45% to 7.85% p.a.',
    notifiedRate: '7.45% - 7.85% p.a. (Series Specific)',
    rateEffectivePeriod: '3 to 7 Year Maturity Series',
    tenure: '3 to 7 Years',
    lockInPeriod: 'None (Tradable on NSE/BSE debt market)',
    riskLevel: 'Low',
    returnMechanism: 'Regular fixed interest coupons backed by integrated bauxite-alumina-aluminium low-cost production operations.',
    depositRules: 'Subscribed through primary private placement tranches or purchased in secondary retail debt markets.',
    maturityRules: 'Redeemed at par value on maturity date.',
    extensionRules: 'No rollover; bullet redemption.',
    withdrawalRules: 'Tradable on NSE and BSE debt segments.',
    prematureClosureRules: 'Sellable on secondary exchange debt markets via registered stockbrokers or OBPP portals.',
    loanFacilityRules: 'Eligible for loan pledging with institutional lenders.',
    taxTreatment: 'Interest income is fully taxable at investor applicable marginal slab rate. Capital gains: LTCG (>12 months) at 12.5%; STCG (≤12 months) at slab rates.',
    nominationRules: 'Nomination recorded via Demat DP account.',
    accountOpeningProcess: [
      'Access an OBPP portal or trading account.',
      'Search for NALCO listed bond series by ISIN.',
      'Place order on the exchange debt segment.'
    ],
    whereToInvest: 'NSE/BSE Debt Segments, SEBI-regulated OBPP portals, and broker platforms.',
    requiredDocuments: ['PAN Card', 'Aadhaar Card', 'Demat Account CMR', 'Bank Details'],
    importantRules: [
      'Credit ratings: CRISIL AAA / ICRA AAA.',
      'Operates one of the world lowest cost bauxite mining and alumina refining complexes in Odisha.'
    ],
    risksAndLimitations: [
      'Secondary market liquidity and global aluminium commodity price cycles.'
    ],
    faqs: [
      {
        question: 'Who owns NALCO?',
        answer: 'The Government of India holds majority ownership in NALCO, which operates under the administrative control of the Ministry of Mines.'
      }
    ],
    comparisonSlugs: ['coal-india-corporate-bonds', 'ntpc-corporate-bonds'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-sbi-tier2',
    title: 'State Bank of India Tier-2 Bonds',
    slug: 'sbi-tier-2-bonds',
    description: 'Basel-III compliant subordinate taxable debt instruments issued by State Bank of India (SBI) to bolster Tier-2 regulatory capital adequacy under RBI guidelines, offering attractive fixed coupon yields with call options.',
    authority: 'State Bank of India (SBI) / Reserve Bank of India (RBI)',
    category: 'Banking Tier Bonds',
    status: 'ACTIVE / TRADED',
    sourceUrl: 'https://sbi.co.in',
    sourceAuthority: 'State Bank of India (SBI) / RBI / SEBI',
    verificationStatus: 'VERIFIED',
    minInvestment: 10000,
    maxInvestment: 'No Upper Limit (Exchange retail lots from ₹10,000 to ₹1,00,000 / ₹10 Lakh for wholesale primary)',
    expectedReturn: 'Fixed Annual Coupon ~7.30% to 7.65% p.a.',
    notifiedRate: '7.30% - 7.65% p.a. (Tranche Specific)',
    rateEffectivePeriod: '10 to 15 Year Tenure with 5/10 Year Call Option',
    tenure: '10 to 15 Years (typically with 5th or 10th year issuer call option)',
    lockInPeriod: 'None (Tradable on National Stock Exchange debt segment)',
    riskLevel: 'Low',
    returnMechanism: 'Annual fixed interest coupon payments credited directly to the bondholder, with bullet redemption at par on the call option exercise date or maturity date.',
    depositRules: 'Subscribed through institutional private placements or acquired on secondary debt exchange markets via SEBI-registered OBPP platforms or brokers.',
    maturityRules: 'Redemption of principal at face value upon exercise of issuer call option (subject to prior RBI approval) or at statutory final maturity.',
    extensionRules: 'Issuer holds call option to redeem on 5th or 10th anniversary; no investor put option.',
    withdrawalRules: 'Tradable on NSE and BSE debt segments on all trading days.',
    prematureClosureRules: 'Secondary market sale through demat trading accounts.',
    loanFacilityRules: 'Eligible for loan against securities with select financial institutions.',
    taxTreatment: 'Interest received is fully taxable in the hands of the investor under Income from Other Sources at applicable slab rates. Capital gains on listed debentures held >12 months: LTCG taxed at 12.5% without indexation; STCG (≤12 months) at slab rates.',
    nominationRules: 'Nomination recorded via Demat DP account (NSDL/CDSL).',
    accountOpeningProcess: [
      'Log into an OBPP portal (e.g., Wint Wealth, GoldenPi) or brokerage terminal.',
      'Search for SBI Tier-2 bond ISINs.',
      'Place order on the exchange debt segment.'
    ],
    whereToInvest: 'NSE Wholesale & Retail Debt Segments, BSE, SEBI-registered OBPP platforms.',
    requiredDocuments: ['PAN Card', 'Aadhaar Card', 'Demat Account CMR', 'Bank Details'],
    importantRules: [
      'Credit Rating: CRISIL AAA / ICRA AAA / India Ratings AAA denoting highest safety.',
      'Basel-III Subordination: Subordinate to senior depositors and general creditors, but senior to AT-1 perpetual bonds and equity capital. Subject to Point of Non-Viability (PONV) statutory clauses governed by RBI.'
    ],
    risksAndLimitations: [
      'Subordinated ranking relative to regular bank depositors and senior secured debt in theoretical liquidation scenarios.',
      'Call option risk: issuer may redeem early if market interest rates decline.'
    ],
    faqs: [
      {
        question: 'How are SBI Tier-2 bonds different from Additional Tier-1 (AT-1) bonds?',
        answer: 'Tier-2 bonds have a fixed maturity tenure (e.g., 10 years), mandatory coupon payments (cannot be arbitrarily skipped like AT-1), and rank strictly senior to AT-1 bonds and common equity.'
      }
    ],
    comparisonSlugs: ['bank-of-baroda-tier-2-bonds', 'hdfc-bank-tier-2-bonds'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-bob-tier2',
    title: 'Bank of Baroda Tier-2 Bonds',
    slug: 'bank-of-baroda-tier-2-bonds',
    description: 'AAA-rated Basel-III compliant subordinated debt bonds issued by Bank of Baroda (BOB), one of India premier public sector scheduled commercial banks, to augment Tier-2 regulatory capital adequacy.',
    authority: 'Bank of Baroda / Reserve Bank of India (RBI)',
    category: 'Banking Tier Bonds',
    status: 'ACTIVE / TRADED',
    sourceUrl: 'https://bankofbaroda.in',
    sourceAuthority: 'Bank of Baroda / RBI / SEBI',
    verificationStatus: 'VERIFIED',
    minInvestment: 10000,
    maxInvestment: 'No Upper Limit',
    expectedReturn: 'Fixed Annual Coupon ~7.45% to 7.75% p.a.',
    notifiedRate: '7.45% - 7.75% p.a. (Series Specific)',
    rateEffectivePeriod: '10 Year Tenure with 5-Year Call Option',
    tenure: '10 Years (typically with 5-year issuer call option)',
    lockInPeriod: 'None (Tradable on NSE/BSE debt market)',
    riskLevel: 'Low',
    returnMechanism: 'Annual coupon payments disbursed directly to registered bank accounts with full principal return upon call date or maturity.',
    depositRules: 'Subscribed through private placement tranches or purchased on secondary exchange debt markets in demat form.',
    maturityRules: 'Principal repayment at face value on call option date or maturity.',
    extensionRules: 'Issuer call option subject to RBI approval.',
    withdrawalRules: 'Tradable on NSE and BSE debt segments.',
    prematureClosureRules: 'Secondary market liquidation via registered stockbrokers or OBPP portals.',
    loanFacilityRules: 'Eligible for loan pledging with financial institutions.',
    taxTreatment: 'Interest income is added to gross total income and taxed at marginal slab rates. Capital gains: LTCG (>12 months) at 12.5%; STCG (≤12 months) at slab rates.',
    nominationRules: 'Nomination recorded via Demat DP account.',
    accountOpeningProcess: [
      'Access an OBPP portal or broker terminal.',
      'Search for Bank of Baroda Tier-2 listed bond ISIN.',
      'Place purchase order on exchange debt segment.'
    ],
    whereToInvest: 'NSE/BSE Debt Segments, SEBI-regulated OBPP portals, and broker platforms.',
    requiredDocuments: ['PAN Card', 'Aadhaar Card', 'Demat Account CMR', 'Bank Details'],
    importantRules: [
      'Credit Rating: CRISIL AAA / India Ratings AAA.',
      'Basel-III compliant subordinated debt ranking senior to equity and AT-1 bonds.'
    ],
    risksAndLimitations: [
      'Subordinated status relative to senior deposits; secondary market yield fluctuations.'
    ],
    faqs: [
      {
        question: 'What is the credit rating of Bank of Baroda Tier-2 bonds?',
        answer: 'Bank of Baroda Tier-2 capital bonds carry pristine AAA ratings from major domestic rating agencies, reflecting robust government backing and capital adequacy.'
      }
    ],
    comparisonSlugs: ['sbi-tier-2-bonds', 'canara-bank-tier-2-bonds'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-pnb-tier2',
    title: 'Punjab National Bank Tier-2 Bonds',
    slug: 'pnb-tier-2-bonds',
    description: 'AAA/AA+ rated Basel-III compliant subordinated debt bonds issued by Punjab National Bank (PNB), India second-largest public sector bank, to reinforce capital adequacy and support ongoing credit expansion.',
    authority: 'Punjab National Bank (PNB) / Reserve Bank of India (RBI)',
    category: 'Banking Tier Bonds',
    status: 'ACTIVE / TRADED',
    sourceUrl: 'https://pnbindia.in',
    sourceAuthority: 'Punjab National Bank (PNB) / RBI / SEBI',
    verificationStatus: 'VERIFIED',
    minInvestment: 10000,
    maxInvestment: 'No Upper Limit',
    expectedReturn: 'Fixed Annual Coupon ~7.50% to 7.85% p.a.',
    notifiedRate: '7.50% - 7.85% p.a. (Tranche Specific)',
    rateEffectivePeriod: '10 Year Tenure with 5-Year Call Option',
    tenure: '10 Years (typically with 5-year issuer call option)',
    lockInPeriod: 'None (Tradable on NSE/BSE debt market)',
    riskLevel: 'Low',
    returnMechanism: 'Annual coupon payments disbursed directly to registered bank accounts with full principal return upon call date or maturity.',
    depositRules: 'Subscribed through private placement tranches or purchased on secondary exchange debt markets in demat form.',
    maturityRules: 'Principal repayment at face value on call option date or maturity.',
    extensionRules: 'Issuer call option subject to RBI approval.',
    withdrawalRules: 'Tradable on NSE and BSE debt segments.',
    prematureClosureRules: 'Secondary market liquidation via registered stockbrokers or OBPP portals.',
    loanFacilityRules: 'Eligible for loan pledging with financial institutions.',
    taxTreatment: 'Interest income is added to gross total income and taxed at marginal slab rates. Capital gains: LTCG (>12 months) at 12.5%; STCG (≤12 months) at slab rates.',
    nominationRules: 'Nomination recorded via Demat DP account.',
    accountOpeningProcess: [
      'Access an OBPP portal or broker terminal.',
      'Search for PNB Tier-2 listed bond ISIN.',
      'Place purchase order on exchange debt segment.'
    ],
    whereToInvest: 'NSE/BSE Debt Segments, SEBI-regulated OBPP portals, and broker platforms.',
    requiredDocuments: ['PAN Card', 'Aadhaar Card', 'Demat Account CMR', 'Bank Details'],
    importantRules: [
      'Credit Rating: CRISIL AAA / CARE AAA / India Ratings AAA.',
      'Basel-III compliant subordinated debt with PONV provisions.'
    ],
    risksAndLimitations: [
      'Subordinated ranking relative to depositors in liquidation scenarios.'
    ],
    faqs: [
      {
        question: 'Who issues PNB Tier-2 bonds?',
        answer: 'Punjab National Bank issues Tier-2 bonds under RBI Basel-III capital framework guidelines.'
      }
    ],
    comparisonSlugs: ['sbi-tier-2-bonds', 'union-bank-tier-2-bonds'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-canara-tier2',
    title: 'Canara Bank Tier-2 Bonds',
    slug: 'canara-bank-tier-2-bonds',
    description: 'AAA-rated Basel-III compliant subordinated debt securities issued by Canara Bank, a leading public sector commercial bank, to strengthen regulatory capital and support lending growth.',
    authority: 'Canara Bank / Reserve Bank of India (RBI)',
    category: 'Banking Tier Bonds',
    status: 'ACTIVE / TRADED',
    sourceUrl: 'https://canarabank.com',
    sourceAuthority: 'Canara Bank / RBI / SEBI',
    verificationStatus: 'VERIFIED',
    minInvestment: 10000,
    maxInvestment: 'No Upper Limit',
    expectedReturn: 'Fixed Annual Coupon ~7.45% to 7.75% p.a.',
    notifiedRate: '7.45% - 7.75% p.a. (Series Specific)',
    rateEffectivePeriod: '10 Year Tenure with 5-Year Call Option',
    tenure: '10 Years (typically with 5-year issuer call option)',
    lockInPeriod: 'None (Tradable on NSE/BSE debt market)',
    riskLevel: 'Low',
    returnMechanism: 'Annual fixed coupon payments credited to registered bank accounts with par redemption at maturity or call date.',
    depositRules: 'Subscribed through private placement tranches or purchased on secondary exchange debt markets in demat form.',
    maturityRules: 'Principal repayment at face value on call option date or maturity.',
    extensionRules: 'Issuer call option subject to RBI approval.',
    withdrawalRules: 'Tradable on NSE and BSE debt segments.',
    prematureClosureRules: 'Secondary market liquidation via registered stockbrokers or OBPP portals.',
    loanFacilityRules: 'Eligible for loan pledging with financial institutions.',
    taxTreatment: 'Interest income is added to gross total income and taxed at marginal slab rates. Capital gains: LTCG (>12 months) at 12.5%; STCG (≤12 months) at slab rates.',
    nominationRules: 'Nomination recorded via Demat DP account.',
    accountOpeningProcess: [
      'Access an OBPP portal or broker terminal.',
      'Search for Canara Bank Tier-2 listed bond ISIN.',
      'Place purchase order on exchange debt segment.'
    ],
    whereToInvest: 'NSE/BSE Debt Segments, SEBI-regulated OBPP portals, and broker platforms.',
    requiredDocuments: ['PAN Card', 'Aadhaar Card', 'Demat Account CMR', 'Bank Details'],
    importantRules: [
      'Credit Rating: CRISIL AAA / ICRA AAA denoting highest degree of safety.',
      'Basel-III compliant subordinated capital instrument.'
    ],
    risksAndLimitations: [
      'Subordinated ranking relative to senior depositors.'
    ],
    faqs: [
      {
        question: 'What is the credit safety of Canara Bank Tier-2 bonds?',
        answer: 'They carry AAA ratings from CRISIL and ICRA reflecting Canara Bank systemic importance and strong government backing.'
      }
    ],
    comparisonSlugs: ['bank-of-baroda-tier-2-bonds', 'union-bank-tier-2-bonds'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-union-tier2',
    title: 'Union Bank of India Tier-2 Bonds',
    slug: 'union-bank-tier-2-bonds',
    description: 'AAA-rated Basel-III compliant subordinated debt securities issued by Union Bank of India, a major public sector scheduled commercial bank, to enhance Tier-2 regulatory capital adequacy.',
    authority: 'Union Bank of India / Reserve Bank of India (RBI)',
    category: 'Banking Tier Bonds',
    status: 'ACTIVE / TRADED',
    sourceUrl: 'https://unionbankofindia.co.in',
    sourceAuthority: 'Union Bank of India / RBI / SEBI',
    verificationStatus: 'VERIFIED',
    minInvestment: 10000,
    maxInvestment: 'No Upper Limit',
    expectedReturn: 'Fixed Annual Coupon ~7.45% to 7.80% p.a.',
    notifiedRate: '7.45% - 7.80% p.a. (Tranche Specific)',
    rateEffectivePeriod: '10 Year Tenure with 5-Year Call Option',
    tenure: '10 Years (typically with 5-year issuer call option)',
    lockInPeriod: 'None (Tradable on NSE/BSE debt market)',
    riskLevel: 'Low',
    returnMechanism: 'Annual fixed coupon payments credited directly to bondholder accounts, with principal redemption upon call date or maturity.',
    depositRules: 'Subscribed through private placement tranches or purchased on secondary exchange debt markets in demat form.',
    maturityRules: 'Principal repayment at face value on call option date or maturity.',
    extensionRules: 'Issuer call option subject to RBI approval.',
    withdrawalRules: 'Tradable on NSE and BSE debt segments.',
    prematureClosureRules: 'Secondary market liquidation via registered stockbrokers or OBPP portals.',
    loanFacilityRules: 'Eligible for loan pledging with financial institutions.',
    taxTreatment: 'Interest income is added to gross total income and taxed at marginal slab rates. Capital gains: LTCG (>12 months) at 12.5%; STCG (≤12 months) at slab rates.',
    nominationRules: 'Nomination recorded via Demat DP account.',
    accountOpeningProcess: [
      'Access an OBPP portal or broker terminal.',
      'Search for Union Bank Tier-2 listed bond ISIN.',
      'Place purchase order on exchange debt segment.'
    ],
    whereToInvest: 'NSE/BSE Debt Segments, SEBI-regulated OBPP portals, and broker platforms.',
    requiredDocuments: ['PAN Card', 'Aadhaar Card', 'Demat Account CMR', 'Bank Details'],
    importantRules: [
      'Credit Rating: CRISIL AAA / CARE AAA / India Ratings AAA.',
      'Basel-III compliant subordinated debt with PONV provisions.'
    ],
    risksAndLimitations: [
      'Subordinated ranking relative to depositors in liquidation scenarios.'
    ],
    faqs: [
      {
        question: 'What is the tenure of Union Bank Tier-2 bonds?',
        answer: 'Typically issued for a 10-year term with an issuer call option exercisable at the end of the 5th year subject to RBI concurrence.'
      }
    ],
    comparisonSlugs: ['canara-bank-tier-2-bonds', 'pnb-tier-2-bonds'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-hdfc-tier2',
    title: 'HDFC Bank Tier-2 Bonds',
    slug: 'hdfc-bank-tier-2-bonds',
    description: 'AAA-rated Basel-III compliant subordinated Non-Convertible Debentures (NCDs) issued by HDFC Bank, India largest private sector bank, to augment Tier-2 regulatory capital and support multi-sector lending.',
    authority: 'HDFC Bank Limited / Reserve Bank of India (RBI)',
    category: 'Banking Tier Bonds',
    status: 'ACTIVE / TRADED',
    sourceUrl: 'https://hdfcbank.com',
    sourceAuthority: 'HDFC Bank Limited / RBI / SEBI',
    verificationStatus: 'VERIFIED',
    minInvestment: 10000,
    maxInvestment: 'No Upper Limit',
    expectedReturn: 'Fixed Annual Coupon ~7.35% to 7.70% p.a.',
    notifiedRate: '7.35% - 7.70% p.a. (Series Specific)',
    rateEffectivePeriod: '10 Year Tenure with 5/10 Year Call Option',
    tenure: '10 Years (typically with 5-year or 10-year issuer call option)',
    lockInPeriod: 'None (Tradable on NSE/BSE debt market)',
    riskLevel: 'Low',
    returnMechanism: 'Annual fixed coupon payments credited to bondholder accounts, with principal redemption upon call date or maturity backed by HDFC Bank pristine balance sheet.',
    depositRules: 'Subscribed through institutional private placements or acquired on secondary debt exchange markets via SEBI-registered OBPP platforms or brokers.',
    maturityRules: 'Principal repayment at face value on call option date or maturity.',
    extensionRules: 'Issuer call option subject to RBI approval.',
    withdrawalRules: 'Tradable on NSE and BSE debt segments on all trading days.',
    prematureClosureRules: 'Secondary market sale through demat trading accounts.',
    loanFacilityRules: 'Eligible for loan against securities with select financial institutions.',
    taxTreatment: 'Interest received is fully taxable in the hands of the investor under Income from Other Sources at applicable slab rates. Capital gains on listed debentures: LTCG (>12 months) taxed at 12.5%; STCG (≤12 months) at slab rates.',
    nominationRules: 'Nomination recorded via Demat DP account.',
    accountOpeningProcess: [
      'Access an OBPP portal or broker terminal.',
      'Search for HDFC Bank Tier-2 listed bond ISIN.',
      'Place purchase order on exchange debt segment.'
    ],
    whereToInvest: 'NSE Wholesale & Retail Debt Segments, BSE, SEBI-registered OBPP platforms.',
    requiredDocuments: ['PAN Card', 'Aadhaar Card', 'Demat Account CMR', 'Bank Details'],
    importantRules: [
      'Credit Rating: CRISIL AAA / CARE AAA / India Ratings AAA denoting highest credit safety.',
      'Domestic Systemically Important Bank (D-SIB) designation by RBI.'
    ],
    risksAndLimitations: [
      'Subordinated ranking relative to depositors in statutory liquidation hierarchy.'
    ],
    faqs: [
      {
        question: 'Why are HDFC Bank Tier-2 bonds considered premier private debt?',
        answer: 'HDFC Bank is designated as a Domestic Systemically Important Bank (D-SIB) by the RBI with unparalleled asset quality, robust profitability, and AAA ratings.'
      }
    ],
    comparisonSlugs: ['icici-bank-tier-2-bonds', 'sbi-tier-2-bonds'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-icici-tier2',
    title: 'ICICI Bank Tier-2 Bonds',
    slug: 'icici-bank-tier-2-bonds',
    description: 'AAA-rated Basel-III compliant subordinated debt instruments issued by ICICI Bank, a leading Domestic Systemically Important Bank (D-SIB), to strengthen Tier-2 capital adequacy and finance corporate/retail credit growth.',
    authority: 'ICICI Bank Limited / Reserve Bank of India (RBI)',
    category: 'Banking Tier Bonds',
    status: 'ACTIVE / TRADED',
    sourceUrl: 'https://icicibank.com',
    sourceAuthority: 'ICICI Bank Limited / RBI / SEBI',
    verificationStatus: 'VERIFIED',
    minInvestment: 10000,
    maxInvestment: 'No Upper Limit',
    expectedReturn: 'Fixed Annual Coupon ~7.40% to 7.75% p.a.',
    notifiedRate: '7.40% - 7.75% p.a. (Tranche Specific)',
    rateEffectivePeriod: '10 Year Tenure with 5-Year Call Option',
    tenure: '10 Years (typically with 5-year issuer call option)',
    lockInPeriod: 'None (Tradable on NSE/BSE debt market)',
    riskLevel: 'Low',
    returnMechanism: 'Annual coupon payments disbursed directly to registered bank accounts with full principal return upon call date or maturity.',
    depositRules: 'Subscribed through private placement tranches or purchased on secondary exchange debt markets in demat form.',
    maturityRules: 'Principal repayment at face value on call option date or maturity.',
    extensionRules: 'Issuer call option subject to RBI approval.',
    withdrawalRules: 'Tradable on NSE and BSE debt segments on all trading days.',
    prematureClosureRules: 'Secondary market liquidation via registered stockbrokers or OBPP portals.',
    loanFacilityRules: 'Eligible for loan pledging with financial institutions.',
    taxTreatment: 'Interest income is added to gross total income and taxed at marginal slab rates. Capital gains: LTCG (>12 months) at 12.5%; STCG (≤12 months) at slab rates.',
    nominationRules: 'Nomination recorded via Demat DP account.',
    accountOpeningProcess: [
      'Access an OBPP portal or broker terminal.',
      'Search for ICICI Bank Tier-2 listed bond ISIN.',
      'Place purchase order on exchange debt segment.'
    ],
    whereToInvest: 'NSE/BSE Debt Segments, SEBI-regulated OBPP portals, and broker platforms.',
    requiredDocuments: ['PAN Card', 'Aadhaar Card', 'Demat Account CMR', 'Bank Details'],
    importantRules: [
      'Credit Rating: CRISIL AAA / ICRA AAA / CARE AAA denoting highest safety.',
      'Designated D-SIB by RBI with market-leading capital adequacy ratios.'
    ],
    risksAndLimitations: [
      'Subordinated ranking relative to depositors in liquidation hierarchy.'
    ],
    faqs: [
      {
        question: 'What is the credit standing of ICICI Bank Tier-2 bonds?',
        answer: 'ICICI Bank Tier-2 bonds hold highest AAA credit ratings from CRISIL, ICRA, and CARE.'
      }
    ],
    comparisonSlugs: ['hdfc-bank-tier-2-bonds', 'axis-bank-tier-2-bonds'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-axis-tier2',
    title: 'Axis Bank Tier-2 Bonds',
    slug: 'axis-bank-tier-2-bonds',
    description: 'AAA-rated Basel-III compliant subordinated debt securities issued by Axis Bank, one of India largest private sector commercial banks, to augment Tier-2 capital adequacy and finance expanding retail and corporate loan portfolios.',
    authority: 'Axis Bank Limited / Reserve Bank of India (RBI)',
    category: 'Banking Tier Bonds',
    status: 'ACTIVE / TRADED',
    sourceUrl: 'https://axisbank.com',
    sourceAuthority: 'Axis Bank Limited / RBI / SEBI',
    verificationStatus: 'VERIFIED',
    minInvestment: 10000,
    maxInvestment: 'No Upper Limit',
    expectedReturn: 'Fixed Annual Coupon ~7.45% to 7.80% p.a.',
    notifiedRate: '7.45% - 7.80% p.a. (Tranche Specific)',
    rateEffectivePeriod: '10 Year Tenure with 5-Year Call Option',
    tenure: '10 Years (typically with 5-year issuer call option)',
    lockInPeriod: 'None (Tradable on NSE/BSE debt market)',
    riskLevel: 'Low',
    returnMechanism: 'Annual coupon payments disbursed directly to registered bank accounts with full principal return upon call date or maturity.',
    depositRules: 'Subscribed through private placement tranches or purchased on secondary exchange debt markets in demat form.',
    maturityRules: 'Principal repayment at face value on call option date or maturity.',
    extensionRules: 'Issuer call option subject to RBI approval.',
    withdrawalRules: 'Tradable on NSE and BSE debt segments on all trading days.',
    prematureClosureRules: 'Secondary market liquidation via registered stockbrokers or OBPP portals.',
    loanFacilityRules: 'Eligible for loan pledging with financial institutions.',
    taxTreatment: 'Interest income is added to gross total income and taxed at marginal slab rates. Capital gains: LTCG (>12 months) at 12.5%; STCG (≤12 months) at slab rates.',
    nominationRules: 'Nomination recorded via Demat DP account.',
    accountOpeningProcess: [
      'Access an OBPP portal or broker terminal.',
      'Search for Axis Bank Tier-2 listed bond ISIN.',
      'Place purchase order on exchange debt segment.'
    ],
    whereToInvest: 'NSE/BSE Debt Segments, SEBI-regulated OBPP portals, and broker platforms.',
    requiredDocuments: ['PAN Card', 'Aadhaar Card', 'Demat Account CMR', 'Bank Details'],
    importantRules: [
      'Credit Rating: CRISIL AAA / ICRA AAA / India Ratings AAA.',
      'Basel-III compliant subordinated debt with PONV provisions.'
    ],
    risksAndLimitations: [
      'Subordinated ranking relative to depositors in liquidation scenarios.'
    ],
    faqs: [
      {
        question: 'What is the credit rating of Axis Bank Tier-2 bonds?',
        answer: 'Axis Bank Tier-2 capital bonds hold top-tier AAA credit ratings from CRISIL, ICRA, and India Ratings.'
      }
    ],
    comparisonSlugs: ['icici-bank-tier-2-bonds', 'hdfc-bank-tier-2-bonds'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  }
];
