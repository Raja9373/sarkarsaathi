import { Investment } from '../../types';

export const batch4InvestmentsData: Investment[] = [
  {
    id: 'inv-corporate-bond-mf',
    title: 'Corporate Bond Mutual Fund',
    slug: 'corporate-bond-mutual-fund',
    description: 'SEBI-mandated open-ended debt mutual fund scheme investing at least 80% of total assets in highest-rated corporate bonds (rated AA+ and AAA by accredited credit rating agencies).',
    authority: 'Securities and Exchange Board of India (SEBI)',
    category: 'Debt Mutual Funds',
    status: 'ACTIVE',
    sourceUrl: 'https://www.amfiindia.com',
    sourceAuthority: 'Association of Mutual Funds in India (AMFI) / SEBI',
    verificationStatus: 'VERIFIED',
    minInvestment: 500,
    maxInvestment: 'No Upper Limit',
    expectedReturn: 'High-Grade Corporate Debt Yield ~7.0% to 8.2% p.a.',
    notifiedRate: 'Market Bond Yield Accrual (NAV Linked)',
    rateEffectivePeriod: 'Daily NAV Calculation',
    tenure: 'Open-ended (Recommended holding horizon: 2 to 3+ years)',
    lockInPeriod: 'None (Liquid redemption on business days)',
    riskLevel: 'Low',
    returnMechanism: 'Returns are generated through regular coupon accruals from high-grade corporate debentures/bonds along with potential mark-to-market capital gains as market interest rate yields decline.',
    depositRules: 'Lump sum investment from ₹500/₹5,000 or Systematic Investment Plan (SIP) starting from ₹500 per month.',
    maturityRules: 'Open-ended fund; no fixed maturity. Investors can redeem units on any business day.',
    extensionRules: 'Continuous open-ended scheme.',
    withdrawalRules: 'Redemption requests processed on T+1 or T+2 business days directly to the investor bank account.',
    prematureClosureRules: 'Redeemable anytime via mutual fund AMC portal, MF Central, CAMS, or stockbroker apps. Most schemes have zero exit load or minimal exit load (e.g. 0.25% if exited within 30 days).',
    loanFacilityRules: 'Eligible for loan against mutual funds (LAMF) with banks and NBFCs up to 80-85% of NAV.',
    taxTreatment: 'Taxation of Debt Mutual Funds (specified mutual funds where equity exposure ≤35%): Under Section 50AA of the Income Tax Act, all capital gains are treated as short-term capital gains (STCG) and taxed at the investor applicable income tax slab rates regardless of holding period.',
    nominationRules: 'Up to three nominees can be registered in the folio via AMFI/AMC portal or depository participant.',
    accountOpeningProcess: [
      'Complete one-time SEBI KYC (Aadhaar & PAN).',
      'Select a SEBI-registered Corporate Bond Fund via AMC direct portal, MF Central, or broker.',
      'Choose Direct-Growth plan and submit initial lump sum or SIP mandate via Net Banking/UPI.'
    ],
    whereToInvest: 'Mutual Fund AMC websites, MF Central, CAMS/KFintech portals, and SEBI-registered brokers.',
    requiredDocuments: ['PAN Card', 'Aadhaar Card', 'Cancelled Cheque / Bank Account Details'],
    importantRules: [
      'SEBI mandates minimum 80% investment in AA+ and AAA rated corporate debt instruments.',
      'Portfolio Macaulay duration typically maintained between 2 to 4 years.'
    ],
    risksAndLimitations: [
      'Moderate interest rate duration risk if benchmark yields surge.',
      'Credit spread widening risk.'
    ],
    faqs: [
      {
        question: 'What is the credit safety of Corporate Bond Funds?',
        answer: 'Corporate Bond Funds are among the safest corporate debt funds because SEBI strictly mandates that at least 80% of assets must be invested in top-rated AA+ and AAA bonds.'
      }
    ],
    comparisonSlugs: ['dynamic-bond-mutual-fund', 'banking-psu-debt-fund'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-dynamic-bond',
    title: 'Dynamic Bond Mutual Fund',
    slug: 'dynamic-bond-mutual-fund',
    description: 'SEBI-categorized open-ended debt mutual fund that dynamically manages portfolio maturity and duration across government securities, state development loans, and corporate debt across interest rate cycles.',
    authority: 'Securities and Exchange Board of India (SEBI)',
    category: 'Debt Mutual Funds',
    status: 'ACTIVE',
    sourceUrl: 'https://www.amfiindia.com',
    sourceAuthority: 'Association of Mutual Funds in India (AMFI) / SEBI',
    verificationStatus: 'VERIFIED',
    minInvestment: 500,
    maxInvestment: 'No Upper Limit',
    expectedReturn: 'Duration Management & Yield Accrual ~7.0% to 8.5% p.a.',
    notifiedRate: 'Daily NAV Dependent',
    rateEffectivePeriod: 'Daily NAV',
    tenure: 'Open-ended (Ideal holding period: 3 to 5 years)',
    lockInPeriod: 'None',
    riskLevel: 'Medium',
    returnMechanism: 'Fund manager actively lengthens portfolio duration (buying long-term G-Secs) when interest rates are expected to fall to capture capital appreciation, and shortens duration (holding short-term T-bills/CPs) when rates are expected to rise.',
    depositRules: 'Minimum lump sum ₹500/₹5,000 or monthly SIP from ₹500.',
    maturityRules: 'Open-ended scheme with no maturity date.',
    extensionRules: 'Perpetual fund scheme.',
    withdrawalRules: 'Redeemable on all market business days with T+1 settlement.',
    prematureClosureRules: 'Exit anytime. Some schemes charge 0.5% exit load if redeemed within 1 to 3 months.',
    loanFacilityRules: 'Eligible for loan against mutual funds.',
    taxTreatment: 'Taxed under Section 50AA: Capital gains are added to taxable income and taxed at the investor applicable marginal slab rate.',
    nominationRules: 'Nomination facility available for folios and demat accounts.',
    accountOpeningProcess: [
      'Log into AMC direct portal, MF Central, or broker app.',
      'Search for Dynamic Bond Fund.',
      'Invest in Direct-Growth option via UPI or Net Banking.'
    ],
    whereToInvest: 'Mutual Fund AMC direct portals, MF Central, CAMS, BSE StAR MF, NSE NMF.',
    requiredDocuments: ['PAN Card', 'Aadhaar Card', 'Bank Account'],
    importantRules: [
      'Fund manager possesses complete flexibility to vary Macaulay duration from zero to over 10+ years depending on macroeconomic cycle.'
    ],
    risksAndLimitations: [
      'Duration risk: fund NAV can experience short-term volatility if interest rate calls by the fund manager mismatch RBI monetary policy direction.'
    ],
    faqs: [
      {
        question: 'When is the best time to invest in Dynamic Bond Funds?',
        answer: 'Dynamic Bond Funds are ideal for investors seeking debt returns across complete interest rate cycles without needing to time duration shifts themselves.'
      }
    ],
    comparisonSlugs: ['corporate-bond-mutual-fund', 'banking-psu-debt-fund'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-arbitrage-fund',
    title: 'Arbitrage Mutual Fund',
    slug: 'arbitrage-mutual-fund',
    description: 'SEBI-categorized hybrid mutual fund scheme investing at least 65% of assets in equity and equity derivatives by simultaneously buying in the cash spot market and selling in the futures market to capture risk-free price differentials.',
    authority: 'Securities and Exchange Board of India (SEBI)',
    category: 'Hybrid Mutual Funds',
    status: 'ACTIVE',
    sourceUrl: 'https://www.amfiindia.com',
    sourceAuthority: 'Association of Mutual Funds in India (AMFI) / SEBI',
    verificationStatus: 'VERIFIED',
    minInvestment: 500,
    maxInvestment: 'No Upper Limit',
    expectedReturn: 'Spread Arbitrage Return ~6.5% to 7.8% p.a. (Equity Tax Advantage)',
    notifiedRate: 'Market Arbitrage Spread Linked',
    rateEffectivePeriod: 'Daily NAV Calculation',
    tenure: 'Open-ended (Recommended holding: 3 to 12 months)',
    lockInPeriod: 'None (Liquid with 15 to 30 day exit load window)',
    riskLevel: 'Low',
    returnMechanism: 'Exploits mispricing between stock cash spot prices and futures settlement prices. The spread locked in at inception converges to zero on monthly F&O expiry day, locking in a predictable gain regardless of market direction.',
    depositRules: 'Minimum ₹500 lump sum or SIP.',
    maturityRules: 'Open-ended fund with continuous redemption.',
    extensionRules: 'Not applicable (Continuous).',
    withdrawalRules: 'Units can be redeemed on any trading day with T+1 payout.',
    prematureClosureRules: 'Exit load of 0.25% to 0.50% generally applies if redeemed within 15 to 30 days; 0% thereafter.',
    loanFacilityRules: 'Eligible for loan against mutual funds.',
    taxTreatment: 'Taxed as Equity Mutual Fund: Under the Income Tax Act, maintaining ≥65% gross equity exposure qualifies the fund for equity taxation. Following Finance Act 2024: Short-Term Capital Gains (STCG held ≤12 months) are taxed at a concessional rate of 20% (Section 111A); Long-Term Capital Gains (LTCG held >12 months) are taxed at 12.5% above ₹1.25 Lakh exemption (Section 112A). This offers substantial tax savings over debt funds and fixed deposits for higher-bracket taxpayers.',
    nominationRules: 'Nomination registered via AMC folio or Depository.',
    accountOpeningProcess: [
      'Verify KYC with PAN & Aadhaar.',
      'Log into AMC portal or investment platform.',
      'Select Arbitrage Fund Direct-Growth option and invest.'
    ],
    whereToInvest: 'AMC direct platforms, MF Central, CAMS, and SEBI-registered brokers.',
    requiredDocuments: ['PAN Card', 'Aadhaar Card', 'Bank details'],
    importantRules: [
      'SEBI mandates minimum 65% investment in equity and equity-related derivative instruments.',
      'Zero directional equity market risk as long equity positions are 100% hedged via short futures.'
    ],
    risksAndLimitations: [
      'Arbitrage spreads may compress during low-volatility or sluggish market environments.'
    ],
    faqs: [
      {
        question: 'Why are Arbitrage Funds popular for short-term parking?',
        answer: 'They offer low-risk debt-like stability with the significant tax advantages of equity funds (20% STCG vs up to 30%+ slab rates for FDs).'
      }
    ],
    comparisonSlugs: ['overnight-liquid-mutual-funds', 'balanced-advantage-fund'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-balanced-advantage',
    title: 'Balanced Advantage / Dynamic Asset Allocation Fund',
    slug: 'balanced-advantage-fund',
    description: 'SEBI-categorized open-ended hybrid fund that dynamically manages asset allocation between equities (unhedged and hedged) and debt securities (0% to 100%) using rule-based algorithmic valuation models.',
    authority: 'Securities and Exchange Board of India (SEBI)',
    category: 'Hybrid Mutual Funds',
    status: 'ACTIVE',
    sourceUrl: 'https://www.amfiindia.com',
    sourceAuthority: 'Association of Mutual Funds in India (AMFI) / SEBI',
    verificationStatus: 'VERIFIED',
    minInvestment: 500,
    maxInvestment: 'No Upper Limit',
    expectedReturn: 'Dynamic Hybrid Growth & Downside Protection ~9.5% to 12.5% p.a.',
    notifiedRate: 'Dynamic Market Valuation Model',
    rateEffectivePeriod: 'Daily NAV Calculation',
    tenure: 'Open-ended (Recommended horizon: 3 to 5+ years)',
    lockInPeriod: 'None',
    riskLevel: 'Medium',
    returnMechanism: 'Model-driven allocation increases net equity exposure when equity markets become cheap (low P/E or P/B) and reduces net equity exposure (shifting to debt and arbitrage) when markets become expensive, automatically buying low and selling high.',
    depositRules: 'Minimum ₹500 via SIP or lump sum.',
    maturityRules: 'Continuous open-ended scheme.',
    extensionRules: 'Open-ended fund.',
    withdrawalRules: 'Redemption on business days on T+2 cycle.',
    prematureClosureRules: 'Most schemes allow 10% to 12% redemption free of exit load per year; 1% exit load for excess units redeemed within 12 months.',
    loanFacilityRules: 'Eligible for loan against mutual funds.',
    taxTreatment: 'Taxed as Equity Scheme: Gross equity exposure (unhedged equity + hedged arbitrage) is systematically maintained above 65%, preserving equity tax status. LTCG (>12 months) is taxed at 12.5% above ₹1.25 Lakh; STCG (≤12 months) is taxed at 20%.',
    nominationRules: 'Nomination registered via AMC folio.',
    accountOpeningProcess: [
      'Select Balanced Advantage Fund scheme on AMC direct portal or investment app.',
      'Choose Direct-Growth plan and complete online payment.'
    ],
    whereToInvest: 'AMC direct portals, MF Central, CAMS, Zerodha, Groww, Kuvera, Upstox.',
    requiredDocuments: ['PAN Card', 'Aadhaar Card', 'Bank details'],
    importantRules: [
      'Eliminates emotional market timing through algorithmic rebalancing formulas.'
    ],
    risksAndLimitations: [
      'May deliver lower returns than pure equity funds during runaway bull markets due to proactive hedging.'
    ],
    faqs: [
      {
        question: 'How do Balanced Advantage Funds protect downside in a market crash?',
        answer: 'When market valuations are stretched, the fund automatically reduces net equity exposure to 30-40% and shifts capital into fixed income and arbitrage hedges, dampening drawdown.'
      }
    ],
    comparisonSlugs: ['flexi-cap-equity-mutual-fund', 'multi-asset-allocation-fund'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-multi-asset-allocation',
    title: 'Multi Asset Allocation Fund',
    slug: 'multi-asset-allocation-fund',
    description: 'SEBI-mandated hybrid mutual fund scheme that invests in at least three distinct asset classes with a minimum allocation of at least 10% in each asset class (typically Equity, Debt, and Gold/Commodities/REITs).',
    authority: 'Securities and Exchange Board of India (SEBI)',
    category: 'Hybrid Mutual Funds',
    status: 'ACTIVE',
    sourceUrl: 'https://www.amfiindia.com',
    sourceAuthority: 'Association of Mutual Funds in India (AMFI) / SEBI',
    verificationStatus: 'VERIFIED',
    minInvestment: 500,
    maxInvestment: 'No Upper Limit',
    expectedReturn: 'All-Weather Diversified Return ~10.0% to 13.0% p.a.',
    notifiedRate: 'Multi-Asset NAV Dependent',
    rateEffectivePeriod: 'Daily NAV',
    tenure: 'Open-ended (Recommended horizon: 3 to 5+ years)',
    lockInPeriod: 'None',
    riskLevel: 'Medium',
    returnMechanism: 'Generates returns by harnessing non-correlated asset class performance: equities for capital growth, debt for income stability, and gold/commodities for inflation and geopolitical hedging.',
    depositRules: 'Minimum ₹500 lump sum or SIP.',
    maturityRules: 'Open-ended fund structure.',
    extensionRules: 'Perpetual fund.',
    withdrawalRules: 'Processed on business days with T+2 payout.',
    prematureClosureRules: 'Exit load of 1% if redeemed within 1 year; 0% thereafter.',
    loanFacilityRules: 'Eligible for loan against mutual funds.',
    taxTreatment: 'Taxation depends on portfolio equity allocation: If average equity exposure is ≥65%, it is taxed as an equity fund (20% STCG, 12.5% LTCG > ₹1.25L). If equity is between 35% and 65%, taxed under specified hybrid rules (LTCG at 12.5% for holding >24 months; STCG at slab rates).',
    nominationRules: 'Nomination available via folio or demat.',
    accountOpeningProcess: [
      'Choose a Multi Asset Allocation Fund on AMC platform or broker.',
      'Invest through SIP or lump sum under Direct-Growth.'
    ],
    whereToInvest: 'Mutual Fund AMC websites, MF Central, licensed brokers.',
    requiredDocuments: ['PAN Card', 'Aadhaar Card', 'Bank details'],
    importantRules: [
      'SEBI mandates minimum 10% statutory exposure in at least 3 distinct asset classes at all times.'
    ],
    risksAndLimitations: [
      'Returns can be muted if multiple asset classes face simultaneous cyclical headwinds.'
    ],
    faqs: [
      {
        question: 'What are the three asset classes in Multi Asset Funds?',
        answer: 'Typically Indian/Global Equities, Fixed Income/Debt Securities, and Physical Gold/Silver/Commodities or REITs/InvITs.'
      }
    ],
    comparisonSlugs: ['balanced-advantage-fund', 'flexi-cap-equity-mutual-fund'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-flexi-cap-fund',
    title: 'Flexi Cap Equity Mutual Fund',
    slug: 'flexi-cap-equity-mutual-fund',
    description: 'SEBI-categorized dynamic equity mutual fund scheme mandated to invest a minimum of 65% of total assets in equity and equity-related instruments across large-cap, mid-cap, and small-cap companies without market cap restrictions.',
    authority: 'Securities and Exchange Board of India (SEBI)',
    category: 'Equity Mutual Funds',
    status: 'ACTIVE',
    sourceUrl: 'https://www.amfiindia.com',
    sourceAuthority: 'Association of Mutual Funds in India (AMFI) / SEBI',
    verificationStatus: 'VERIFIED',
    minInvestment: 500,
    maxInvestment: 'No Upper Limit',
    expectedReturn: 'Long-term Compounded Equity Growth ~12.0% to 15.0% p.a.',
    notifiedRate: 'Market Equity Performance Linked',
    rateEffectivePeriod: 'Daily NAV Calculation',
    tenure: 'Open-ended (Recommended holding horizon: 5+ years)',
    lockInPeriod: 'None',
    riskLevel: 'High',
    returnMechanism: 'Fund manager has unconstrained freedom to allocate capital across large-cap stability, mid-cap compounding, and small-cap alpha opportunities based on evolving economic cycles and corporate fundamentals.',
    depositRules: 'Minimum ₹500 via monthly/quarterly SIP or lump sum.',
    maturityRules: 'Continuous open-ended scheme.',
    extensionRules: 'Perpetual fund scheme.',
    withdrawalRules: 'Liquid redemption on business days with T+2 fund settlement.',
    prematureClosureRules: 'Exit load of 1% generally applies if redeemed within 1 year; 0% thereafter.',
    loanFacilityRules: 'Eligible for loan against mutual funds (up to 50% of NAV).',
    taxTreatment: 'Equity Mutual Fund Taxation (Finance Act 2024): Long-Term Capital Gains (LTCG held >12 months) taxed at 12.5% on gains exceeding ₹1.25 Lakh per financial year (Section 112A). Short-Term Capital Gains (STCG held ≤12 months) taxed at 20% (Section 111A). Dividends taxed at investor slab rate.',
    nominationRules: 'Nomination registered with AMC or depository.',
    accountOpeningProcess: [
      'Log into any mutual fund app (MF Central, Groww, Zerodha Coin, AMC portal).',
      'Search for top Flexi Cap Fund direct-growth schemes.',
      'Set up monthly SIP via e-NACH/UPI mandate.'
    ],
    whereToInvest: 'Mutual Fund AMC direct portals, MF Central, CAMS, and SEBI-registered brokers.',
    requiredDocuments: ['PAN Card', 'Aadhaar Card', 'Bank details'],
    importantRules: [
      'SEBI mandates minimum 65% investment in Indian equities across any market capitalization range.'
    ],
    risksAndLimitations: [
      'Equity market volatility, economic cycles, and fund manager stock selection risk.'
    ],
    faqs: [
      {
        question: 'What is the difference between Flexi Cap and Multi Cap funds?',
        answer: 'Multi Cap funds are legally forced to hold at least 25% each in Large, Mid, and Small caps at all times. Flexi Cap funds have complete flexibility with zero minimum sub-cap restrictions.'
      }
    ],
    comparisonSlugs: ['large-cap-equity-mutual-fund', 'mid-cap-equity-mutual-fund'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-large-cap-fund',
    title: 'Large Cap Equity Mutual Fund',
    slug: 'large-cap-equity-mutual-fund',
    description: 'SEBI-categorized open-ended equity mutual fund scheme mandated to invest at least 80% of total assets in large-cap stocks (the top 100 companies listed on Indian stock exchanges by full market capitalization).',
    authority: 'Securities and Exchange Board of India (SEBI)',
    category: 'Equity Mutual Funds',
    status: 'ACTIVE',
    sourceUrl: 'https://www.amfiindia.com',
    sourceAuthority: 'Association of Mutual Funds in India (AMFI) / SEBI',
    verificationStatus: 'VERIFIED',
    minInvestment: 500,
    maxInvestment: 'No Upper Limit',
    expectedReturn: 'Blue-Chip Equity Compounding ~10.5% to 13.0% p.a.',
    notifiedRate: 'Blue-Chip Market Return Linked',
    rateEffectivePeriod: 'Daily NAV',
    tenure: 'Open-ended (Recommended horizon: 3 to 5+ years)',
    lockInPeriod: 'None',
    riskLevel: 'Medium',
    returnMechanism: 'Invests in proven industry leaders with robust balance sheets, dominant market shares, and institutional governance, generating returns through long-term capital appreciation and dividend yields.',
    depositRules: 'Minimum ₹500 via SIP or lump sum.',
    maturityRules: 'Open-ended scheme.',
    extensionRules: 'Perpetual fund scheme.',
    withdrawalRules: 'Redeemable on all business days (T+2 payout).',
    prematureClosureRules: 'Exit load of 1% if redeemed within 1 year; 0% thereafter.',
    loanFacilityRules: 'Eligible for loan against mutual funds.',
    taxTreatment: 'Equity Mutual Fund Tax Regime: LTCG (>12 months) at 12.5% above ₹1.25 Lakh; STCG (≤12 months) at 20%.',
    nominationRules: 'Nomination via Demat or AMC folio.',
    accountOpeningProcess: [
      'Select a Large Cap Fund on AMC portal or broker app.',
      'Invest under Direct-Growth option.'
    ],
    whereToInvest: 'AMC direct portals, MF Central, CAMS, and SEBI-registered brokers.',
    requiredDocuments: ['PAN Card', 'Aadhaar Card', 'Bank details'],
    importantRules: [
      'SEBI mandates minimum 80% investment in top 100 companies as defined by AMFI semi-annual market cap categorization.'
    ],
    risksAndLimitations: [
      'General equity market corrections and macroeconomic slowdowns.'
    ],
    faqs: [
      {
        question: 'Which companies are classified as Large Cap by SEBI?',
        answer: 'SEBI and AMFI define Large Cap companies as the 1st to 100th companies listed on Indian exchanges ranked by total market capitalization.'
      }
    ],
    comparisonSlugs: ['nifty-50-index-fund', 'flexi-cap-equity-mutual-fund'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-mid-cap-fund',
    title: 'Mid Cap Equity Mutual Fund',
    slug: 'mid-cap-equity-mutual-fund',
    description: 'SEBI-categorized equity mutual fund scheme mandated to invest at least 65% of total assets in mid-cap stocks (companies ranked 101st to 250th by market capitalization).',
    authority: 'Securities and Exchange Board of India (SEBI)',
    category: 'Equity Mutual Funds',
    status: 'ACTIVE',
    sourceUrl: 'https://www.amfiindia.com',
    sourceAuthority: 'Association of Mutual Funds in India (AMFI) / SEBI',
    verificationStatus: 'VERIFIED',
    minInvestment: 500,
    maxInvestment: 'No Upper Limit',
    expectedReturn: 'High-Growth Equity Compounding ~13.0% to 17.0% p.a.',
    notifiedRate: 'Mid-Cap Market Performance Linked',
    rateEffectivePeriod: 'Daily NAV Calculation',
    tenure: 'Open-ended (Recommended horizon: 5 to 7+ years)',
    lockInPeriod: 'None',
    riskLevel: 'High',
    returnMechanism: 'Targets fast-growing emerging leaders transitioning into large enterprises, capturing high earnings growth rates and valuation expansion.',
    depositRules: 'Minimum ₹500 via monthly SIP or lump sum.',
    maturityRules: 'Continuous open-ended scheme.',
    extensionRules: 'Perpetual fund scheme.',
    withdrawalRules: 'T+2 settlement on business days.',
    prematureClosureRules: 'Exit load of 1% if redeemed within 1 year; 0% thereafter.',
    loanFacilityRules: 'Eligible for loan against mutual funds.',
    taxTreatment: 'Equity Taxation: LTCG (>12 months) taxed at 12.5% on gains exceeding ₹1.25 Lakh; STCG (≤12 months) taxed at 20%.',
    nominationRules: 'Nomination registered via folio/demat.',
    accountOpeningProcess: [
      'Choose a Mid Cap Fund on AMC portal or broker.',
      'Start monthly SIP under Direct-Growth plan.'
    ],
    whereToInvest: 'AMC direct portals, MF Central, CAMS, and SEBI brokers.',
    requiredDocuments: ['PAN Card', 'Aadhaar Card', 'Bank details'],
    importantRules: [
      'SEBI mandates minimum 65% investment in 101st to 250th listed companies by market cap.'
    ],
    risksAndLimitations: [
      'Higher volatility and deeper cyclical drawdowns than large cap funds during market downturns.'
    ],
    faqs: [
      {
        question: 'What is the risk-return profile of Mid Cap Funds?',
        answer: 'Mid Cap funds offer higher long-term compounding growth potential than large-cap funds but carry higher short-term price volatility.'
      }
    ],
    comparisonSlugs: ['small-cap-equity-mutual-fund', 'large-cap-equity-mutual-fund'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-small-cap-fund',
    title: 'Small Cap Equity Mutual Fund',
    slug: 'small-cap-equity-mutual-fund',
    description: 'SEBI-categorized high-growth equity mutual fund scheme mandated to invest at least 65% of total assets in small-cap stocks (companies ranked 251st and beyond by full market capitalization).',
    authority: 'Securities and Exchange Board of India (SEBI)',
    category: 'Equity Mutual Funds',
    status: 'ACTIVE',
    sourceUrl: 'https://www.amfiindia.com',
    sourceAuthority: 'Association of Mutual Funds in India (AMFI) / SEBI',
    verificationStatus: 'VERIFIED',
    minInvestment: 500,
    maxInvestment: 'No Upper Limit (Select AMCs may cap lump sum inflows to manage liquidity)',
    expectedReturn: 'High Multi-Cap Alpha Compounding ~14.0% to 19.0% p.a.',
    notifiedRate: 'Small-Cap Market Performance Linked',
    rateEffectivePeriod: 'Daily NAV Calculation',
    tenure: 'Open-ended (Recommended horizon: 7+ years)',
    lockInPeriod: 'None',
    riskLevel: 'High',
    returnMechanism: 'Invests in early-stage industry challengers, niche market innovators, and emerging companies benefiting from India domestic economic growth.',
    depositRules: 'Minimum ₹500 via SIP or lump sum.',
    maturityRules: 'Continuous open-ended scheme.',
    extensionRules: 'Perpetual fund scheme.',
    withdrawalRules: 'T+2 settlement on business days.',
    prematureClosureRules: 'Exit load of 1% if redeemed within 1 year; 0% thereafter.',
    loanFacilityRules: 'Eligible for loan against mutual funds.',
    taxTreatment: 'Standard Equity Mutual Fund Tax: LTCG (>12 months) at 12.5% above ₹1.25 Lakh; STCG (≤12 months) at 20%.',
    nominationRules: 'Nomination registered via AMC folio or Demat.',
    accountOpeningProcess: [
      'Select Small Cap Fund on AMC portal or broker.',
      'Set up long-term SIP via UPI mandate.'
    ],
    whereToInvest: 'AMC direct portals, MF Central, CAMS, all registered brokers.',
    requiredDocuments: ['PAN Card', 'Aadhaar Card', 'Bank details'],
    importantRules: [
      'SEBI mandates minimum 65% investment in 251st and below ranked companies by market capitalization.'
    ],
    risksAndLimitations: [
      'High price volatility, extended drawdown cycles, and lower stock liquidity in bear markets.'
    ],
    faqs: [
      {
        question: 'Why should Small Cap investments be made via SIP for 7+ years?',
        answer: 'Small caps experience sharp multi-year cycles; long-term SIPs average out market volatility and harness superior compounding over complete business cycles.'
      }
    ],
    comparisonSlugs: ['mid-cap-equity-mutual-fund', 'flexi-cap-equity-mutual-fund'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-sectoral-tech',
    title: 'Technology & Innovation Sector Fund',
    slug: 'technology-innovation-sector-fund',
    description: 'SEBI-categorized thematic/sectoral equity mutual fund mandated to invest at least 80% of total assets in software, IT services, cloud, AI, electronic hardware, and semiconductor companies.',
    authority: 'Securities and Exchange Board of India (SEBI)',
    category: 'Sectoral Mutual Funds',
    status: 'ACTIVE',
    sourceUrl: 'https://www.amfiindia.com',
    sourceAuthority: 'Association of Mutual Funds in India (AMFI) / SEBI',
    verificationStatus: 'VERIFIED',
    minInvestment: 500,
    maxInvestment: 'No Upper Limit',
    expectedReturn: 'Global & Domestic Tech Sector Growth ~12.0% to 16.5% p.a.',
    notifiedRate: 'Technology Sector Performance Linked',
    rateEffectivePeriod: 'Daily NAV Calculation',
    tenure: 'Open-ended (Recommended horizon: 5+ years)',
    lockInPeriod: 'None',
    riskLevel: 'High',
    returnMechanism: 'Captures global digital transformation, generative AI adoption, enterprise software spending, and semiconductor localization.',
    depositRules: 'Minimum ₹500 via SIP or lump sum.',
    maturityRules: 'Continuous open-ended scheme.',
    extensionRules: 'Perpetual fund scheme.',
    withdrawalRules: 'T+2 settlement on business days.',
    prematureClosureRules: 'Exit load of 1% if redeemed within 1 year; 0% thereafter.',
    loanFacilityRules: 'Eligible for loan against mutual funds.',
    taxTreatment: 'Equity Taxation: LTCG (>12 months) at 12.5% above ₹1.25 Lakh; STCG (≤12 months) at 20%.',
    nominationRules: 'Nomination via AMC folio or Demat.',
    accountOpeningProcess: [
      'Select Tech Sector Fund on AMC direct portal or broker app.',
      'Invest under Direct-Growth plan.'
    ],
    whereToInvest: 'AMC direct portals, MF Central, CAMS, licensed brokers.',
    requiredDocuments: ['PAN Card', 'Aadhaar Card', 'Bank details'],
    importantRules: [
      'SEBI mandates minimum 80% investment in tech and IT-related businesses.'
    ],
    risksAndLimitations: [
      'Sector concentration risk and sensitivity to US/European enterprise IT spending cycles.'
    ],
    faqs: [
      {
        question: 'Are Tech Sector funds suitable for beginner investors?',
        answer: 'They are recommended as satellite portfolio holdings (5-10%) for experienced investors due to concentrated sector cyclicality.'
      }
    ],
    comparisonSlugs: ['healthcare-pharmaceuticals-sector-fund', 'banking-financial-services-sector-fund'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-sectoral-pharma',
    title: 'Healthcare & Pharmaceuticals Sector Fund',
    slug: 'healthcare-pharmaceuticals-sector-fund',
    description: 'SEBI-categorized sectoral equity mutual fund mandated to invest at least 80% of total assets in pharmaceutical manufacturing, hospitals, diagnostic chains, CDMO/CROs, and medical equipment companies.',
    authority: 'Securities and Exchange Board of India (SEBI)',
    category: 'Sectoral Mutual Funds',
    status: 'ACTIVE',
    sourceUrl: 'https://www.amfiindia.com',
    sourceAuthority: 'Association of Mutual Funds in India (AMFI) / SEBI',
    verificationStatus: 'VERIFIED',
    minInvestment: 500,
    maxInvestment: 'No Upper Limit',
    expectedReturn: 'Healthcare & Life Sciences Compounding ~11.5% to 15.0% p.a.',
    notifiedRate: 'Healthcare Sector Performance Linked',
    rateEffectivePeriod: 'Daily NAV Calculation',
    tenure: 'Open-ended (Recommended horizon: 5+ years)',
    lockInPeriod: 'None',
    riskLevel: 'High',
    returnMechanism: 'Capitalizes on expanding domestic healthcare infrastructure, rising health insurance penetration, global generic drug export leadership, and contract research manufacturing (CDMO).',
    depositRules: 'Minimum ₹500 via SIP or lump sum.',
    maturityRules: 'Continuous open-ended scheme.',
    extensionRules: 'Perpetual fund scheme.',
    withdrawalRules: 'T+2 settlement on business days.',
    prematureClosureRules: 'Exit load of 1% if redeemed within 1 year; 0% thereafter.',
    loanFacilityRules: 'Eligible for loan against mutual funds.',
    taxTreatment: 'Equity Taxation: LTCG (>12 months) at 12.5% above ₹1.25 Lakh; STCG (≤12 months) at 20%.',
    nominationRules: 'Nomination via AMC folio or Demat.',
    accountOpeningProcess: [
      'Select Pharma/Healthcare Fund on AMC portal or broker.',
      'Invest under Direct-Growth plan.'
    ],
    whereToInvest: 'AMC direct portals, MF Central, CAMS, licensed brokers.',
    requiredDocuments: ['PAN Card', 'Aadhaar Card', 'Bank details'],
    importantRules: [
      'SEBI mandates minimum 80% investment in healthcare, pharma, and allied life sciences.'
    ],
    risksAndLimitations: [
      'US FDA regulatory inspection audits, price control policies (NLEM), and patent expiry cliffs.'
    ],
    faqs: [
      {
        question: 'Why invest in Healthcare & Pharma Funds?',
        answer: 'Healthcare provides defensive earnings resilience during market downturns combined with secular growth driven by aging demographics and medical advances.'
      }
    ],
    comparisonSlugs: ['technology-innovation-sector-fund', 'consumption-fmcg-thematic-fund'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-sectoral-banking',
    title: 'Banking & Financial Services Sector Fund',
    slug: 'banking-financial-services-sector-fund',
    description: 'SEBI-categorized sectoral equity mutual fund mandated to invest at least 80% of total assets in public/private commercial banks, NBFCs, housing finance companies, insurance firms, and fintech leaders.',
    authority: 'Securities and Exchange Board of India (SEBI)',
    category: 'Sectoral Mutual Funds',
    status: 'ACTIVE',
    sourceUrl: 'https://www.amfiindia.com',
    sourceAuthority: 'Association of Mutual Funds in India (AMFI) / SEBI',
    verificationStatus: 'VERIFIED',
    minInvestment: 500,
    maxInvestment: 'No Upper Limit',
    expectedReturn: 'Credit Growth & Financial Sector Compounding ~12.0% to 15.5% p.a.',
    notifiedRate: 'Banking & Financial Sector Performance Linked',
    rateEffectivePeriod: 'Daily NAV Calculation',
    tenure: 'Open-ended (Recommended horizon: 5+ years)',
    lockInPeriod: 'None',
    riskLevel: 'High',
    returnMechanism: 'Harnesses India double-digit credit growth, expanding retail lending, financial inclusion, wealth management adoption, and expanding net interest margins (NIMs).',
    depositRules: 'Minimum ₹500 via SIP or lump sum.',
    maturityRules: 'Continuous open-ended scheme.',
    extensionRules: 'Perpetual fund scheme.',
    withdrawalRules: 'T+2 settlement on business days.',
    prematureClosureRules: 'Exit load of 1% if redeemed within 1 year; 0% thereafter.',
    loanFacilityRules: 'Eligible for loan against mutual funds.',
    taxTreatment: 'Equity Taxation: LTCG (>12 months) at 12.5% above ₹1.25 Lakh; STCG (≤12 months) at 20%.',
    nominationRules: 'Nomination via AMC folio or Demat.',
    accountOpeningProcess: [
      'Select Banking & Financial Services Fund on AMC portal or broker.',
      'Invest under Direct-Growth plan.'
    ],
    whereToInvest: 'AMC direct portals, MF Central, CAMS, licensed brokers.',
    requiredDocuments: ['PAN Card', 'Aadhaar Card', 'Bank details'],
    importantRules: [
      'SEBI mandates minimum 80% investment in banking, NBFC, and financial service equities.'
    ],
    risksAndLimitations: [
      'Non-performing asset (NPA) cycles, RBI regulatory tightening, and interest rate margin compression.'
    ],
    faqs: [
      {
        question: 'How closely is BFSI linked to India GDP growth?',
        answer: 'The BFSI sector acts as the primary credit engine of the economy, historically growing at 1.2x to 1.5x of nominal GDP growth.'
      }
    ],
    comparisonSlugs: ['cpse-psu-equity-mutual-fund', 'infrastructure-sector-mutual-fund'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-psu-equity-fund',
    title: 'CPSE / PSU Equity Mutual Fund',
    slug: 'cpse-psu-equity-mutual-fund',
    description: 'Thematic equity mutual fund scheme investing at least 80% of total assets in Maharatna, Navratna, and Miniratna Central Public Sector Enterprises (CPSEs) and state-owned corporate leaders.',
    authority: 'Securities and Exchange Board of India (SEBI) / DIPAM',
    category: 'Thematic Mutual Funds',
    status: 'ACTIVE',
    sourceUrl: 'https://www.amfiindia.com',
    sourceAuthority: 'Association of Mutual Funds in India (AMFI) / SEBI',
    verificationStatus: 'VERIFIED',
    minInvestment: 500,
    maxInvestment: 'No Upper Limit',
    expectedReturn: 'PSU Dividend Yield & Capex Value Compounding ~12.5% to 16.0% p.a.',
    notifiedRate: 'PSU Market Index Linked',
    rateEffectivePeriod: 'Daily NAV Calculation',
    tenure: 'Open-ended (Recommended horizon: 5+ years)',
    lockInPeriod: 'None',
    riskLevel: 'High',
    returnMechanism: 'Invests in monopolistic/dominant state-owned companies in defense, power, railways, oil & gas, mining, and banking, offering high dividend yields and sovereign capex order books.',
    depositRules: 'Minimum ₹500 via SIP or lump sum.',
    maturityRules: 'Continuous open-ended scheme.',
    extensionRules: 'Perpetual fund scheme.',
    withdrawalRules: 'T+2 settlement on business days.',
    prematureClosureRules: 'Exit load of 1% if redeemed within 1 year; 0% thereafter.',
    loanFacilityRules: 'Eligible for loan against mutual funds.',
    taxTreatment: 'Equity Taxation: LTCG (>12 months) at 12.5% above ₹1.25 Lakh; STCG (≤12 months) at 20%.',
    nominationRules: 'Nomination via AMC folio or Demat.',
    accountOpeningProcess: [
      'Select PSU/CPSE Fund on AMC portal or broker.',
      'Invest under Direct-Growth plan.'
    ],
    whereToInvest: 'AMC direct portals, MF Central, CAMS, licensed brokers.',
    requiredDocuments: ['PAN Card', 'Aadhaar Card', 'Bank details'],
    importantRules: [
      'SEBI mandates minimum 80% investment in state-owned / public sector enterprises.'
    ],
    risksAndLimitations: [
      'Government policy changes, disinvestment timelines, and government pricing mandates.'
    ],
    faqs: [
      {
        question: 'Why are PSU funds attractive for dividend yields?',
        answer: 'Government guidelines mandate central PSUs to distribute at least 30% of net profit or 5% of net worth as annual dividends, ensuring high cash return yields.'
      }
    ],
    comparisonSlugs: ['infrastructure-sector-mutual-fund', 'banking-financial-services-sector-fund'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-infrastructure-fund',
    title: 'Infrastructure Sector Mutual Fund',
    slug: 'infrastructure-sector-mutual-fund',
    description: 'Thematic equity mutual fund investing at least 80% of total assets in companies participating in India capital expenditure cycle (power generation/transmission, highways, railways, ports, airports, cement, and engineering).',
    authority: 'Securities and Exchange Board of India (SEBI)',
    category: 'Sectoral Mutual Funds',
    status: 'ACTIVE',
    sourceUrl: 'https://www.amfiindia.com',
    sourceAuthority: 'Association of Mutual Funds in India (AMFI) / SEBI',
    verificationStatus: 'VERIFIED',
    minInvestment: 500,
    maxInvestment: 'No Upper Limit',
    expectedReturn: 'National Capex & Infrastructure Growth ~13.0% to 17.5% p.a.',
    notifiedRate: 'Infrastructure Market Index Linked',
    rateEffectivePeriod: 'Daily NAV Calculation',
    tenure: 'Open-ended (Recommended horizon: 5+ years)',
    lockInPeriod: 'None',
    riskLevel: 'High',
    returnMechanism: 'Benefits directly from multi-trillion rupee government infrastructure development outlays under PM Gati Shakti, National Infrastructure Pipeline (NIP), and private capex expansion.',
    depositRules: 'Minimum ₹500 via SIP or lump sum.',
    maturityRules: 'Continuous open-ended scheme.',
    extensionRules: 'Perpetual fund scheme.',
    withdrawalRules: 'T+2 settlement on business days.',
    prematureClosureRules: 'Exit load of 1% if redeemed within 1 year; 0% thereafter.',
    loanFacilityRules: 'Eligible for loan against mutual funds.',
    taxTreatment: 'Equity Taxation: LTCG (>12 months) at 12.5% above ₹1.25 Lakh; STCG (≤12 months) at 20%.',
    nominationRules: 'Nomination via AMC folio or Demat.',
    accountOpeningProcess: [
      'Select Infrastructure Fund on AMC portal or broker.',
      'Invest under Direct-Growth plan.'
    ],
    whereToInvest: 'AMC direct portals, MF Central, CAMS, licensed brokers.',
    requiredDocuments: ['PAN Card', 'Aadhaar Card', 'Bank details'],
    importantRules: [
      'SEBI mandates minimum 80% investment in infrastructure and capital goods companies.'
    ],
    risksAndLimitations: [
      'Capex cycle delays, raw material inflation (steel/cement), and high debt leverage in construction firms.'
    ],
    faqs: [
      {
        question: 'Which sectors are covered under Infrastructure Funds?',
        answer: 'Power, transportation, logistics, capital goods, construction engineering, metals, and urban infrastructure.'
      }
    ],
    comparisonSlugs: ['cpse-psu-equity-mutual-fund', 'consumption-fmcg-thematic-fund'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-consumption-fund',
    title: 'Consumption & FMCG Thematic Fund',
    slug: 'consumption-fmcg-thematic-fund',
    description: 'Thematic equity mutual fund scheme investing at least 80% of total assets in companies benefiting from growing domestic consumption, consumer goods, fast-moving consumer goods (FMCG), retail, and automobiles.',
    authority: 'Securities and Exchange Board of India (SEBI)',
    category: 'Thematic Mutual Funds',
    status: 'ACTIVE',
    sourceUrl: 'https://www.amfiindia.com',
    sourceAuthority: 'Association of Mutual Funds in India (AMFI) / SEBI',
    verificationStatus: 'VERIFIED',
    minInvestment: 500,
    maxInvestment: 'No Upper Limit',
    expectedReturn: 'Domestic Consumer Demand Compounding ~11.5% to 14.5% p.a.',
    notifiedRate: 'Consumption Index Linked',
    rateEffectivePeriod: 'Daily NAV Calculation',
    tenure: 'Open-ended (Recommended horizon: 5+ years)',
    lockInPeriod: 'None',
    riskLevel: 'High',
    returnMechanism: 'Capitalizes on rising per capita income, urbanization, premiumization trends, and expanding middle-class discretionary consumption spending.',
    depositRules: 'Minimum ₹500 via SIP or lump sum.',
    maturityRules: 'Continuous open-ended scheme.',
    extensionRules: 'Perpetual fund scheme.',
    withdrawalRules: 'T+2 settlement on business days.',
    prematureClosureRules: 'Exit load of 1% if redeemed within 1 year; 0% thereafter.',
    loanFacilityRules: 'Eligible for loan against mutual funds.',
    taxTreatment: 'Equity Taxation: LTCG (>12 months) at 12.5% above ₹1.25 Lakh; STCG (≤12 months) at 20%.',
    nominationRules: 'Nomination via AMC folio or Demat.',
    accountOpeningProcess: [
      'Select Consumption Thematic Fund on AMC portal or broker.',
      'Invest under Direct-Growth plan.'
    ],
    whereToInvest: 'AMC direct portals, MF Central, CAMS, licensed brokers.',
    requiredDocuments: ['PAN Card', 'Aadhaar Card', 'Bank details'],
    importantRules: [
      'SEBI mandates minimum 80% investment in consumer discretionary and staple businesses.'
    ],
    risksAndLimitations: [
      'Rural demand slowdowns and raw material cost inflation compressing corporate gross margins.'
    ],
    faqs: [
      {
        question: 'Why invest in Indian Consumption Thematic Funds?',
        answer: 'India is one of the world’s largest and fastest-growing consumer markets, driven by demographic expansion, rising urbanization, and increasing disposable income.'
      }
    ],
    comparisonSlugs: ['healthcare-pharmaceuticals-sector-fund', 'flexi-cap-equity-mutual-fund'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-ahmedabad-muni',
    title: 'Ahmedabad Municipal Corporation Green Muni Bond',
    slug: 'ahmedabad-municipal-corporation-muni-bond',
    description: 'SEBI-regulated municipal debt security issued by Ahmedabad Municipal Corporation (AMC) to fund sustainable urban infrastructure, sewage treatment plants, and green water distribution networks.',
    authority: 'Securities and Exchange Board of India (SEBI) / Ahmedabad Municipal Corporation',
    category: 'Municipal Bonds',
    status: 'LISTED / TRADED',
    sourceUrl: 'https://ahmedabadcity.gov.in',
    sourceAuthority: 'Ahmedabad Municipal Corporation / SEBI Issue and Listing of Municipal Debt Securities Regulations',
    verificationStatus: 'VERIFIED',
    minInvestment: 10000,
    maxInvestment: 'No Upper Limit (Traded in lots of ₹10,000 / ₹1,00,000)',
    expectedReturn: 'Fixed Semi-Annual Coupon ~7.85% to 8.50% p.a.',
    notifiedRate: '7.85% to 8.50% p.a. (Tranche Dependent)',
    rateEffectivePeriod: '5 to 10 Year Bond Tenure',
    tenure: '5 to 10 Years',
    lockInPeriod: 'None (Tradable on National Stock Exchange debt segment)',
    riskLevel: 'Low',
    returnMechanism: 'Semi-annual fixed coupon payments backed by dedicated municipal escrow accounts funded by municipal property taxes, professional taxes, and state government octroi compensation transfers.',
    depositRules: 'Subscribed during municipal bond public issue or purchased on NSE/BSE debt market.',
    maturityRules: 'Principal redeemed at par upon completion of tenure through structured debt service reserve accounts (DSRA).',
    extensionRules: 'No extension; bullet or structured amortizing redemption at maturity.',
    withdrawalRules: 'Tradable on stock exchange secondary debt markets.',
    prematureClosureRules: 'Secondary market sale via broker.',
    loanFacilityRules: 'Eligible for loan pledging with institutional lenders.',
    taxTreatment: 'Interest income is taxable at investor marginal slab rate (unless explicitly notified as tax-free municipal bond under Section 10(15)(vii) of the Income Tax Act). LTCG on listed municipal bonds held >12 months taxed at 12.5% without indexation; STCG (≤12 months) at slab rates.',
    nominationRules: 'Nomination registered via Demat depository.',
    accountOpeningProcess: [
      'Log into Demat trading platform or SEBI-regulated Online Bond Platform Provider (OBPP).',
      'Search for Ahmedabad Municipal Corporation listed bond ISIN.',
      'Execute buy order on debt market segment.'
    ],
    whereToInvest: 'NSE Wholesale Debt Market, BSE, and SEBI-registered OBPP platforms (e.g. Wint Wealth, GoldenPi, Grip).',
    requiredDocuments: ['Demat Account', 'PAN Card', 'Bank Account details'],
    importantRules: [
      'Structured with an independent escrow account and tripartite agreement ensuring timely debt servicing.',
      'AA+ rated by CRISIL and India Ratings.'
    ],
    risksAndLimitations: [
      'Secondary market liquidity for municipal bonds can be limited compared to central G-Secs.'
    ],
    faqs: [
      {
        question: 'How is the repayment of AMC Municipal Bonds secured?',
        answer: 'Repayment is secured through an irrevocable escrow mechanism where property tax revenues flow directly into a designated debt servicing escrow account.'
      }
    ],
    comparisonSlugs: ['surat-municipal-corporation-bond', 'indore-municipal-corporation-green-bond'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-surat-muni',
    title: 'Surat Municipal Corporation Bond',
    slug: 'surat-municipal-corporation-bond',
    description: 'AA+ rated municipal bond issued by Surat Municipal Corporation (SMC) under SEBI Municipal Debt Securities Framework to finance urban development, drainage infrastructure, and renewable solar installations.',
    authority: 'Securities and Exchange Board of India (SEBI) / Surat Municipal Corporation',
    category: 'Municipal Bonds',
    status: 'LISTED / TRADED',
    sourceUrl: 'https://www.suratmunicipal.gov.in',
    sourceAuthority: 'Surat Municipal Corporation / SEBI',
    verificationStatus: 'VERIFIED',
    minInvestment: 10000,
    maxInvestment: 'No Upper Limit',
    expectedReturn: 'Fixed Semi-Annual Coupon ~8.00% to 8.45% p.a.',
    notifiedRate: '8.25% p.a. (Indicative tranche rate)',
    rateEffectivePeriod: '5 to 7 Year Tenure',
    tenure: '5 to 7 Years',
    lockInPeriod: 'None (Tradable on NSE/BSE)',
    riskLevel: 'Low',
    returnMechanism: 'Fixed coupon payments disbursed semi-annually backed by water cess, municipal property collections, and structured escrow accounts.',
    depositRules: 'Purchased on primary issue or secondary debt market in multiples of ₹10,000.',
    maturityRules: 'Redemption at par upon maturity.',
    extensionRules: 'Fixed maturity bond.',
    withdrawalRules: 'Secondary market trade on stock exchanges.',
    prematureClosureRules: 'Secondary market sale.',
    loanFacilityRules: 'Eligible for loan pledging.',
    taxTreatment: 'Taxable coupon at applicable slab rate. LTCG (>12 months) at 12.5%; STCG (≤12 months) at slab rates.',
    nominationRules: 'Handled via Depository Participant.',
    accountOpeningProcess: [
      'Access SEBI-registered OBPP or stockbroker app.',
      'Select Surat Municipal Corporation listed bond and place order.'
    ],
    whereToInvest: 'NSE, BSE, and Online Bond Platform Providers (OBPPs).',
    requiredDocuments: ['Demat Account', 'PAN Card', 'Bank details'],
    importantRules: ['AA+ credit rating by leading credit rating agencies with structured escrow debt mechanism.'],
    risksAndLimitations: ['Moderate secondary market trading volume.'],
    faqs: [
      {
        question: 'What is the credit rating of Surat Municipal Corporation Bonds?',
        answer: 'Surat Municipal Corporation bonds carry high AA+ credit ratings reflecting strong municipal financial discipline and revenue generation.'
      }
    ],
    comparisonSlugs: ['ahmedabad-municipal-corporation-muni-bond', 'indore-municipal-corporation-green-bond'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-indore-muni',
    title: 'Indore Municipal Corporation Green Bond',
    slug: 'indore-municipal-corporation-green-bond',
    description: 'India’s first public green municipal bond issued by Indore Municipal Corporation (IMC) and listed on NSE, funding a 60 MW solar power plant at Jalud Pumping Station to supply clean green energy for city water pumping.',
    authority: 'Securities and Exchange Board of India (SEBI) / Indore Municipal Corporation',
    category: 'Municipal Bonds',
    status: 'LISTED / TRADED',
    sourceUrl: 'https://imcindore.mp.gov.in',
    sourceAuthority: 'Indore Municipal Corporation / SEBI Green Debt Securities Framework',
    verificationStatus: 'VERIFIED',
    minInvestment: 10000,
    maxInvestment: 'No Upper Limit (Retail Lot Size: ₹10,000)',
    expectedReturn: '8.25% to 8.42% p.a. Semi-Annual Fixed Coupon',
    notifiedRate: '8.25% p.a. (Payable Semi-Annually)',
    rateEffectivePeriod: '3 to 9 Year Amortizing Tenure (Separately Traded 4 STRPPs)',
    tenure: '3, 5, 7, and 9 Years (Separately Transferable Principal Parts)',
    lockInPeriod: 'None (Listed and tradable on NSE)',
    riskLevel: 'Low',
    returnMechanism: 'Semi-annual interest coupon payments and scheduled principal amortizations (25% every 2 years) funded by escrowed municipal revenue streams and power tariff savings from the solar project.',
    depositRules: 'Purchased on NSE or SEBI-registered OBPP platforms in lots of ₹10,000.',
    maturityRules: 'Structured STRPP principal repayment at 3rd, 5th, 7th, and 9th year milestones.',
    extensionRules: 'Fixed maturity schedule.',
    withdrawalRules: 'Tradable on NSE debt market.',
    prematureClosureRules: 'Secondary market trade via broker.',
    loanFacilityRules: 'Eligible for loan against securities.',
    taxTreatment: 'Interest is taxable at investor income tax slab rate. Capital gains on transfer: LTCG (>12 months) at 12.5% without indexation; STCG (≤12 months) at slab rates.',
    nominationRules: 'Managed via Demat provider.',
    accountOpeningProcess: [
      'Log into broker or bond platform (Wint Wealth / GoldenPi / Grip).',
      'Search for Indore Green Muni Bond STRPPs.',
      'Place order for desired lot quantity.'
    ],
    whereToInvest: 'NSE Debt Segment and Online Bond Platform Providers.',
    requiredDocuments: ['Demat Account', 'PAN Card', 'Bank details'],
    importantRules: [
      'Issued as Green Debt Securities conforming to SEBI Green Bond disclosure standards.',
      'Dual credit rating: AA+ by India Ratings and AA by CARE Ratings.'
    ],
    risksAndLimitations: ['Secondary market liquidity depends on exchange order book depth.'],
    faqs: [
      {
        question: 'What was the objective of the Indore Green Municipal Bond?',
        answer: 'The bond raised ₹244 Crore to set up a 60 MW captive solar power project at Jalud to power municipal water pumping, saving over ₹50 Crore in annual civic electricity costs.'
      }
    ],
    comparisonSlugs: ['ahmedabad-municipal-corporation-muni-bond', 'surat-municipal-corporation-bond'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-lic-housing-ncd',
    title: 'LIC Housing Finance Secured NCDs',
    slug: 'lic-housing-finance-secured-ncds',
    description: 'AAA-rated secured redeemable non-convertible debentures issued by LIC Housing Finance Limited (promoted by Life Insurance Corporation of India), offering high safety and stable fixed income for retail and institutional investors.',
    authority: 'Securities and Exchange Board of India (SEBI) / RBI / NHB',
    category: 'Corporate NCDs',
    status: 'ACTIVE',
    sourceUrl: 'https://www.lichousing.com',
    sourceAuthority: 'LIC Housing Finance Limited / SEBI (Issue and Listing of Non-Convertible Securities)',
    verificationStatus: 'VERIFIED',
    minInvestment: 10000,
    maxInvestment: 'No Upper Limit (Face value ₹10,000 / ₹1,00,000 / ₹10,00,000)',
    expectedReturn: 'Fixed Annual/Monthly Coupon ~7.40% to 8.10% p.a.',
    notifiedRate: '7.40% to 8.10% p.a. (Tranche Dependent)',
    rateEffectivePeriod: '3 to 10 Year Tenure',
    tenure: '3, 5, 7, and 10 Years',
    lockInPeriod: 'None (Tradable on NSE and BSE debt segments)',
    riskLevel: 'Low',
    returnMechanism: 'Secured by a first charge on prime mortgage loan assets and housing receivables of LIC Housing Finance; pays regular annual or monthly coupon directly to bank account.',
    depositRules: 'Subscribed during public tranche issuances or bought on secondary debt markets.',
    maturityRules: 'Full bullet principal repayment at face value upon maturity.',
    extensionRules: 'Fixed maturity NCD.',
    withdrawalRules: 'Tradable on NSE/BSE secondary debt markets.',
    prematureClosureRules: 'Secondary market sale via broker.',
    loanFacilityRules: 'Eligible for loan against debentures with banks and financial institutions.',
    taxTreatment: 'Interest received is fully taxable at applicable income tax slab rates. TDS is NOT deducted on listed dematerialized NCDs under Section 193 of the Income Tax Act. LTCG (>12 months) taxed at 12.5% without indexation; STCG (≤12 months) taxed at marginal slab rates.',
    nominationRules: 'Nomination registered via Demat depository.',
    accountOpeningProcess: [
      'Log into stockbroker trading account or Online Bond Platform.',
      'Search for LIC Housing Finance NCD ISIN.',
      'Place buy order at market price.'
    ],
    whereToInvest: 'NSE, BSE, and SEBI-registered Online Bond Platforms (Wint Wealth, GoldenPi, Grip, BondsIndia).',
    requiredDocuments: ['Demat Account', 'PAN Card', 'Bank details'],
    importantRules: [
      'Backed by AAA credit rating from CRISIL and ICRA indicating highest safety regarding timely servicing of financial obligations.',
      'Promoted by LIC of India (India’s largest financial institution).'
    ],
    risksAndLimitations: [
      'Interest rate market price fluctuations if sold on the exchange before maturity.'
    ],
    faqs: [
      {
        question: 'Are LIC Housing Finance NCDs safe for conservative investors?',
        answer: 'Yes, they carry the highest AAA credit rating and are secured by mortgage receivables of the corporation, making them among the safest corporate debt instruments in India.'
      }
    ],
    comparisonSlugs: ['nabard-capital-gains-regular-bonds', 'pfc-tax-free-bonds'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-nabard-bonds',
    title: 'NABARD Capital Gains & Regular Bonds',
    slug: 'nabard-capital-gains-regular-bonds',
    description: 'AAA-rated development bank bonds issued by National Bank for Agriculture and Rural Development (wholly owned by the Government of India) to finance national agricultural infrastructure, irrigation, and rural credit institutions.',
    authority: 'NABARD / Reserve Bank of India (RBI) / Ministry of Finance',
    category: 'Development Bank Bonds',
    status: 'ACTIVE',
    sourceUrl: 'https://www.nabard.org',
    sourceAuthority: 'National Bank for Agriculture and Rural Development / Ministry of Finance',
    verificationStatus: 'VERIFIED',
    minInvestment: 10000,
    maxInvestment: 'No Upper Limit (Section 54EC bonds capped at ₹50 Lakhs per financial year)',
    expectedReturn: 'Fixed Sovereign-Backed Annual Coupon ~7.35% to 7.90% p.a.',
    notifiedRate: '7.35% to 7.90% p.a. (Tranche Dependent)',
    rateEffectivePeriod: '3 to 10 Year Tenure',
    tenure: '3, 5, and 10 Years (5 Years for Section 54EC capital gains bonds)',
    lockInPeriod: '5 Years for Section 54EC; regular bonds tradable on NSE/BSE',
    riskLevel: 'Low',
    returnMechanism: 'Regular annual coupon payments backed by 100% Government of India ownership of NABARD and statutory refinancing revenue flows from apex agricultural institutions.',
    depositRules: 'Direct application through NABARD registrar or secondary purchase on stock exchanges.',
    maturityRules: 'Full principal redemption at par upon maturity.',
    extensionRules: 'Fixed maturity bond.',
    withdrawalRules: 'Regular bonds tradable on exchange; Section 54EC bonds non-transferable for 5-year lock-in.',
    prematureClosureRules: 'Secondary market sale for regular bonds.',
    loanFacilityRules: 'Eligible for loan pledging (excluding 54EC tax-saving bonds).',
    taxTreatment: 'For Regular Bonds: Annual interest is taxable at investor slab rate; LTCG on sale (>12 months) at 12.5%. For Section 54EC Capital Gains Bonds: Provides 100% tax exemption on long-term capital gains arising from the sale of any long-term immovable property up to ₹50 Lakhs under Section 54EC of the Income Tax Act.',
    nominationRules: 'Nomination registered in application form or Demat.',
    accountOpeningProcess: [
      'For Section 54EC: Submit application form with cheque to authorized bank branches within 6 months of property sale.',
      'For Regular Bonds: Buy on NSE/BSE debt market or Online Bond Platforms.'
    ],
    whereToInvest: 'Authorized public sector bank branches, NSE, BSE, and NABARD official portal.',
    requiredDocuments: [
      'PAN Card (Mandatory)',
      'Aadhaar / Address Proof',
      'Bank Account details',
      'Copy of property sale deed (for 54EC bonds)'
    ],
    importantRules: [
      '100% Government of India owned apex development financial institution.',
      'Highest AAA credit rating by CRISIL, ICRA, and India Ratings.'
    ],
    risksAndLimitations: [
      'Section 54EC bonds cannot be transferred, pledged, or encashed prior to 5 years.'
    ],
    faqs: [
      {
        question: 'Can I invest in NABARD bonds to save capital gains tax on house sale?',
        answer: 'Yes, investing capital gains up to ₹50 Lakh in NABARD Section 54EC bonds within 6 months of selling long-term real estate exempts the capital gain from tax.'
      }
    ],
    comparisonSlugs: ['rec-capital-gains-bonds', 'lic-housing-finance-secured-ncds'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  }
];
