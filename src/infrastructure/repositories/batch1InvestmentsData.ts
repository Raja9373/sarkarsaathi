import { Investment } from '../../types';

export const batch1InvestmentsData: Investment[] = [
  {
    id: 'inv-tbill-91d',
    title: '91-Day Treasury Bills (T-Bills)',
    slug: '91-day-treasury-bills',
    description: 'Short-term sovereign zero-coupon debt instrument issued by the Reserve Bank of India on behalf of the Government of India to finance temporary fiscal deficits.',
    authority: 'Reserve Bank of India (RBI) / Ministry of Finance',
    category: 'Government Securities',
    status: 'ACTIVE',
    sourceUrl: 'https://www.rbi.org.in',
    sourceAuthority: 'Reserve Bank of India, Government of India',
    verificationStatus: 'VERIFIED',
    minInvestment: 10000,
    maxInvestment: 20000000,
    expectedReturn: 'Discount to Face Value (Prevailing 91-Day Auction Cut-off Yield)',
    notifiedRate: 'Auction Cut-Off Yield',
    rateEffectivePeriod: 'Weekly Wednesday Auction',
    tenure: '91 Days',
    lockInPeriod: '91 Days (Tradable in secondary market on NDS-OM / RBI Retail Direct)',
    riskLevel: 'Low',
    returnMechanism: 'Zero-coupon security issued at a discount to the nominal face value of ₹100 and redeemed at full face value upon maturity of 91 days. The difference between issue price and face value constitutes the investor return.',
    depositRules: 'Minimum bidding amount is ₹10,000 (100 units of face value ₹100 each) and in multiples of ₹10,000 thereafter via non-competitive bidding in RBI Retail Direct.',
    maturityRules: 'Redeemed automatically at par (₹100 per unit) on the 91st day directly into the investor linked primary bank account.',
    extensionRules: 'No statutory rollover/extension. Proceeds must be reinvested into a new T-Bill auction or G-Sec issuance.',
    withdrawalRules: 'No premature encashment by issuer. Liquidity is available by selling the holding in the secondary market via NDS-OM or stock exchanges.',
    prematureClosureRules: 'Premature redemption with the Government of India is not permissible. Secondary market sell orders can be placed during market hours (9:00 AM to 5:00 PM).',
    loanFacilityRules: 'Eligible to be pledged as collateral with commercial banks for short-term credit facilities subject to RBI margin norms.',
    taxTreatment: 'The difference between the issue price and the redemption value is treated as Short-Term Capital Gains (STCG) and taxed at applicable income slab rates. No TDS is deducted by RBI on maturity.',
    nominationRules: 'Nomination facility is available (up to two nominees) through the RBI Retail Direct or depository participant portal.',
    accountOpeningProcess: [
      'Open a Retail Direct Gilt (RDG) Account online on the RBI Retail Direct portal (retaildirect.rbi.org.in) using PAN, Aadhaar, and bank verification.',
      'Log in during the weekly non-competitive bidding window (open from Monday to Wednesday).',
      'Select 91-Day Treasury Bill auction and enter the desired bid amount (minimum ₹10,000).',
      'Make payment via UPI or ASBA-linked net banking mandate.',
      'Upon allotment on Thursday, T-Bills are credited to your RDG account.'
    ],
    whereToInvest: 'Directly via RBI Retail Direct Portal (retaildirect.rbi.org.in), NSDL/CDSL Demat accounts through SEBI-registered stockbrokers, or primary dealer banks.',
    requiredDocuments: [
      'PAN Card (Permanent Account Number)',
      'Aadhaar Card for DigiLocker KYC e-verification',
      'Active Savings Bank Account details with cancelled cheque or bank statement',
      'Valid mobile number and email ID linked with Aadhaar OTP'
    ],
    importantRules: [
      'Retail non-competitive bidding allocates up to 5% of the notified auction amount to individual retail investors at the weighted average auction yield.',
      'Sovereign backing ensures absolute zero credit risk / default risk.',
      'Auctions are conducted weekly on every Wednesday by the Reserve Bank of India.'
    ],
    risksAndLimitations: [
      'Subject to interest rate reinvestment risk upon 91-day maturity.',
      'Secondary market liquidity for small retail odd-lots can have bid-ask spreads.'
    ],
    faqs: [
      {
        question: 'How do 91-Day Treasury Bills earn returns without an interest rate?',
        answer: 'T-Bills are zero-coupon securities. They are issued at a discount (for example, ₹98.40) and redeemed at full face value (₹100.00). The ₹1.60 gain represents your absolute return.'
      },
      {
        question: 'Is TDS deducted on Treasury Bill maturity proceeds?',
        answer: 'No, the Reserve Bank of India does not deduct TDS on Treasury Bill redemption. However, the gains must be reported in your ITR as short-term capital gains.'
      },
      {
        question: 'What is the minimum investment required for retail investors?',
        answer: 'The minimum investment is ₹10,000 (100 units of ₹100 face value) when applying through RBI Retail Direct.'
      }
    ],
    comparisonSlugs: ['182-day-treasury-bills', '364-day-treasury-bills'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-tbill-182d',
    title: '182-Day Treasury Bills (T-Bills)',
    slug: '182-day-treasury-bills',
    description: 'Medium-term sovereign zero-coupon money market security issued by the Reserve Bank of India on a fortnightly auction cycle with full central government backing.',
    authority: 'Reserve Bank of India (RBI) / Ministry of Finance',
    category: 'Government Securities',
    status: 'ACTIVE',
    sourceUrl: 'https://www.rbi.org.in',
    sourceAuthority: 'Reserve Bank of India, Government of India',
    verificationStatus: 'VERIFIED',
    minInvestment: 10000,
    maxInvestment: 20000000,
    expectedReturn: 'Discount to Face Value (Prevailing 182-Day Auction Cut-off Yield)',
    notifiedRate: 'Auction Cut-Off Yield',
    rateEffectivePeriod: 'Fortnightly Wednesday Auction',
    tenure: '182 Days (Approx. 6 Months)',
    lockInPeriod: '182 Days (Tradable in secondary market)',
    riskLevel: 'Low',
    returnMechanism: 'Issued at a discount to face value and redeemed at par (₹100) after 182 days. Discount reflects prevailing 6-month money market yield.',
    depositRules: 'Minimum ₹10,000 in multiples of ₹10,000 through the non-competitive bidding facility on RBI Retail Direct or registered stockbrokers.',
    maturityRules: 'Matures exactly on the 182nd day. Redemption funds are credited directly to the investor linked bank account on the maturity date.',
    extensionRules: 'No automatic renewal; principal and gains are disbursed at maturity.',
    withdrawalRules: 'No premature redemption from RBI. Holdings can be sold in the secondary market via NDS-OM / exchange platform.',
    prematureClosureRules: 'Secondary market sale is permissible anytime before maturity during sovereign debt trading hours.',
    loanFacilityRules: 'Permitted as collateral for bank loans and margin requirements against securities.',
    taxTreatment: 'Appreciation on redemption is taxed as Short-Term Capital Gains (STCG) at the investor income tax slab rate under the Income Tax Act. No TDS is deducted.',
    nominationRules: 'Nomination can be registered at the time of opening the Retail Direct Gilt Account or added later.',
    accountOpeningProcess: [
      'Register on the RBI Retail Direct platform with PAN, KYC documents, and bank account.',
      'Participate during the fortnightly auction bidding window (Monday to Wednesday).',
      'Submit non-competitive bid for 182-Day T-Bills and authorize electronic payment.',
      'Units are credited to your Gilt account following settlement.'
    ],
    whereToInvest: 'RBI Retail Direct portal (retaildirect.rbi.org.in), designated primary dealers, and stockbroker demat accounts.',
    requiredDocuments: [
      'PAN Card',
      'Aadhaar / DigiLocker verification',
      'Bank Account Proof (cancelled cheque or bank statement)',
      'Signature image and email/mobile verification'
    ],
    importantRules: [
      'Auctions are conducted fortnightly on Wednesdays by RBI.',
      'Zero default risk backed by the sovereign credit of the Union Government.',
      'Retail non-competitive bidders receive allotment at the weighted average price.'
    ],
    risksAndLimitations: [
      'Returns do not beat high unexpected inflation spikes.',
      'Secondary market liquidity for small retail volumes may have minor price spreads.'
    ],
    faqs: [
      {
        question: 'When are 182-day T-Bill auctions held?',
        answer: 'Auctions for 182-day T-Bills are conducted fortnightly on Wednesdays as per the RBI issuance calendar.'
      },
      {
        question: 'How does tax apply on 182-day Treasury Bills?',
        answer: 'Because the holding period is under 12 months, the return is classified as short-term capital gains and taxed according to your individual income tax slab.'
      }
    ],
    comparisonSlugs: ['91-day-treasury-bills', '364-day-treasury-bills'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-tbill-364d',
    title: '364-Day Treasury Bills (T-Bills)',
    slug: '364-day-treasury-bills',
    description: 'One-year sovereign zero-coupon money market benchmark instrument issued by the Reserve Bank of India, offering 100% sovereign security for one-year surplus liquidity.',
    authority: 'Reserve Bank of India (RBI) / Ministry of Finance',
    category: 'Government Securities',
    status: 'ACTIVE',
    sourceUrl: 'https://www.rbi.org.in',
    sourceAuthority: 'Reserve Bank of India, Government of India',
    verificationStatus: 'VERIFIED',
    minInvestment: 10000,
    maxInvestment: 20000000,
    expectedReturn: 'Discount to Face Value (Prevailing 1-Year Sovereign Yield)',
    notifiedRate: 'Auction Cut-Off Yield',
    rateEffectivePeriod: 'Fortnightly Wednesday Auction',
    tenure: '364 Days (52 Weeks / 1 Year)',
    lockInPeriod: '364 Days (Secondary market tradable)',
    riskLevel: 'Low',
    returnMechanism: 'Zero-coupon structure: purchased at a discounted price at RBI auction and redeemed at full face value (₹100) after 364 days.',
    depositRules: 'Minimum ₹10,000 and in multiples of ₹10,000 thereafter through non-competitive retail bidding.',
    maturityRules: 'Automatic redemption at par on the 364th day with proceeds remitted directly to the registered bank account.',
    extensionRules: 'No rollover facility; fresh bids must be placed in subsequent auctions.',
    withdrawalRules: 'Tradable on the NDS-OM secondary market platform prior to maturity.',
    prematureClosureRules: 'No surrender to RBI; exit only via secondary market trade.',
    loanFacilityRules: 'Eligible for loan pledging with scheduled commercial banks.',
    taxTreatment: 'Gains are treated as Short-Term Capital Gains (STCG) and added to gross total income, taxable at marginal tax rates. No TDS deducted.',
    nominationRules: 'Nomination permitted on the Gilt / Demat account.',
    accountOpeningProcess: [
      'Log in to RBI Retail Direct portal during the auction window.',
      'Select 364-Day T-Bill and specify application amount in multiples of ₹10,000.',
      'Fund through UPI or Net Banking.',
      'Receive sovereign allotment confirmation in RDG account on settlement day.'
    ],
    whereToInvest: 'RBI Retail Direct (retaildirect.rbi.org.in), BSE Direct, NSE goBID, and authorized brokers.',
    requiredDocuments: [
      'PAN Card',
      'Aadhaar Card',
      'Bank Account Details',
      'KYC Details'
    ],
    importantRules: [
      'Serves as the benchmark 1-year sovereign risk-free rate in Indian financial markets.',
      'Sovereign guarantee covers both principal and return.'
    ],
    risksAndLimitations: [
      'Fixed return with no inflation escalation clause during the 1-year tenure.'
    ],
    faqs: [
      {
        question: 'Why choose 364-day T-Bills over 1-year bank fixed deposits?',
        answer: '364-day T-Bills offer sovereign risk-free backing by the Government of India (above the ₹5 Lakh DICGC bank deposit insurance ceiling) and can be sold on secondary debt markets if needed.'
      }
    ],
    comparisonSlugs: ['91-day-treasury-bills', 'post-office-time-deposit'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-gsec-2y',
    title: '2-Year Central Government Security',
    slug: '2-year-central-gsec',
    description: 'Short-duration fixed-rate sovereign bond issued by the Reserve Bank of India on behalf of the Government of India with semi-annual coupon payouts.',
    authority: 'Reserve Bank of India (RBI) / Ministry of Finance',
    category: 'Government Securities',
    status: 'ACTIVE',
    sourceUrl: 'https://retaildirect.rbi.org.in',
    sourceAuthority: 'Reserve Bank of India',
    verificationStatus: 'VERIFIED',
    minInvestment: 10000,
    maxInvestment: 20000000,
    expectedReturn: 'Fixed Semi-Annual Coupon (Notified Sovereign Coupon Rate)',
    notifiedRate: 'Fixed Coupon Rate',
    rateEffectivePeriod: 'Specific Bond Issuance Series',
    tenure: '2 Years',
    lockInPeriod: '2 Years (Secondary market liquid on NDS-OM)',
    riskLevel: 'Low',
    returnMechanism: 'Pays a predetermined coupon rate semi-annually on the face value (every 6 months) and returns the full face value (₹100 per unit) at maturity after 2 years.',
    depositRules: 'Minimum ₹10,000 (100 units of ₹100 face value) and multiples of ₹10,000 thereafter via RBI Retail Direct non-competitive bidding.',
    maturityRules: 'Principal is repaid at par value directly into the investor linked bank account on the notified maturity date.',
    extensionRules: 'No extension provision; bond is extinguished on maturity.',
    withdrawalRules: 'Secondary market exit via RBI Retail Direct / NDS-OM screen-based order matching.',
    prematureClosureRules: 'No premature redemption with the issuer; liquidity is achieved by selling in the secondary debt market.',
    loanFacilityRules: 'Eligible collateral for bank overdrafts, loans, and clearing margin requirements.',
    taxTreatment: 'Semi-annual coupon interest is taxable as income under "Income from Other Sources" at slab rates without TDS. Capital gains on secondary market transfer held for more than 12 months qualify as LTCG (taxed at 12.5% without indexation under Finance Act 2024).',
    nominationRules: 'Up to two nominees can be appointed in the Retail Direct Gilt account.',
    accountOpeningProcess: [
      'Open RDG account on retaildirect.rbi.org.in.',
      'Place non-competitive bid during notified auction window for 2-Year G-Sec.',
      'Transfer funds via net banking or UPI.',
      'Bond is credited into the RDG account upon settlement.'
    ],
    whereToInvest: 'RBI Retail Direct portal, stock exchanges (NSE/BSE), and primary dealer banks.',
    requiredDocuments: ['PAN Card', 'Aadhaar Card', 'Bank Account Verification'],
    importantRules: [
      'Sovereign backing by Government of India with zero credit risk.',
      'Interest is disbursed directly into the bank account every 6 months.'
    ],
    risksAndLimitations: [
      'Low interest rate risk due to short 2-year duration, but secondary market bond prices can fluctuate prior to maturity.'
    ],
    faqs: [
      {
        question: 'When is interest paid on 2-Year Government Securities?',
        answer: 'Interest is paid semi-annually (every 6 months) on designated coupon dates directly into your registered bank account.'
      }
    ],
    comparisonSlugs: ['5-year-central-gsec', '91-day-treasury-bills'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-gsec-5y',
    title: '5-Year Central Government Security',
    slug: '5-year-central-gsec',
    description: 'Medium-tenure sovereign benchmark bond issued by the Reserve Bank of India providing guaranteed semi-annual interest cash flows and full capital preservation.',
    authority: 'Reserve Bank of India (RBI)',
    category: 'Government Securities',
    status: 'ACTIVE',
    sourceUrl: 'https://retaildirect.rbi.org.in',
    sourceAuthority: 'Reserve Bank of India, Government of India',
    verificationStatus: 'VERIFIED',
    minInvestment: 10000,
    maxInvestment: 20000000,
    expectedReturn: 'Fixed Semi-Annual Coupon (~6.8% to 7.2% Sovereign Yield)',
    notifiedRate: 'Specific Issue Coupon',
    rateEffectivePeriod: 'Specific Tranche',
    tenure: '5 Years',
    lockInPeriod: '5 Years (Tradable on NDS-OM / Exchanges)',
    riskLevel: 'Low',
    returnMechanism: 'Fixed semi-annual coupon paid every 6 months on face value with principal returned at par on 5-year maturity.',
    depositRules: 'Minimum ₹10,000 in multiples of ₹10,000 via non-competitive bidding.',
    maturityRules: 'Principal is redeemed at face value upon the 5th anniversary of the security issue.',
    extensionRules: 'No statutory extension; proceeds are remitted to the investor bank account.',
    withdrawalRules: 'Tradable on the RBI NDS-OM secondary market.',
    prematureClosureRules: 'Sell order on RBI Retail Direct NDS-OM during market hours.',
    loanFacilityRules: 'Accepted as high-quality liquid asset collateral for bank financing.',
    taxTreatment: 'Coupon interest is taxable at applicable income slab rates. Capital gains on transfer after 12 months are treated as LTCG (taxed at 12.5% without indexation). No TDS.',
    nominationRules: 'Nomination available on the Gilt account.',
    accountOpeningProcess: [
      'Log in to RBI Retail Direct portal during auction window.',
      'Select 5-Year G-Sec auction and specify amount.',
      'Complete payment via net banking or UPI.',
      'Sovereign bonds credited on settlement date.'
    ],
    whereToInvest: 'RBI Retail Direct (retaildirect.rbi.org.in), NSE, BSE, Primary Dealers.',
    requiredDocuments: ['PAN Card', 'Aadhaar Card', 'Bank details'],
    importantRules: [
      'Zero credit risk backed by sovereign full faith and credit.',
      'Liquid secondary market trading on RBI NDS-OM.'
    ],
    risksAndLimitations: [
      'Moderate interest rate duration risk if sold before maturity in a rising interest rate environment.'
    ],
    faqs: [
      {
        question: 'How is a 5-Year G-Sec different from a 5-Year Post Office Time Deposit?',
        answer: 'A 5-Year G-Sec pays semi-annual coupons and can be actively traded on secondary markets at market prices, whereas a 5-Year POTD has fixed annual interest and Sec 80C tax deduction benefits.'
      }
    ],
    comparisonSlugs: ['2-year-central-gsec', '10-year-benchmark-government-security'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-gsec-10y',
    title: '10-Year Benchmark Government Security (GS 2036)',
    slug: '10-year-benchmark-government-security',
    description: 'India primary 10-year benchmark sovereign bond issued by the Reserve Bank of India, defining the risk-free reference yield curve for the entire domestic economy.',
    authority: 'Reserve Bank of India (RBI) / Ministry of Finance',
    category: 'Government Securities',
    status: 'ACTIVE',
    sourceUrl: 'https://www.rbi.org.in',
    sourceAuthority: 'Reserve Bank of India, Government of India',
    verificationStatus: 'VERIFIED',
    minInvestment: 10000,
    maxInvestment: 20000000,
    expectedReturn: 'Fixed Semi-Annual Coupon (~7.0% p.a. Benchmark Sovereign Yield)',
    notifiedRate: 'Benchmark Coupon Rate',
    rateEffectivePeriod: 'Issuance Series Tenure',
    tenure: '10 Years',
    lockInPeriod: '10 Years (Highly liquid secondary market on NDS-OM)',
    riskLevel: 'Low',
    returnMechanism: 'Fixed semi-annual coupon credited directly to the investor bank account every 6 months, with full redemption of ₹100 face value at the end of 10 years.',
    depositRules: 'Minimum ₹10,000 (100 units) and in multiples of ₹10,000 thereafter via non-competitive bidding on RBI Retail Direct.',
    maturityRules: 'Full principal redemption at par (₹100) on the 10-year maturity date.',
    extensionRules: 'No extension; bonds are extinguished upon maturity.',
    withdrawalRules: 'Highest liquidity in the domestic debt market; tradable on NDS-OM and stock exchanges daily.',
    prematureClosureRules: 'Secondary market sale executed via RBI Retail Direct portal.',
    loanFacilityRules: 'Universally accepted as top-tier collateral for bank borrowing and derivative margin.',
    taxTreatment: 'Coupons taxed as income under individual slab rates. Capital gains after 12 months taxed as LTCG at 12.5% without indexation. No TDS.',
    nominationRules: 'Nomination facility available for up to two nominees.',
    accountOpeningProcess: [
      'Register for RBI Retail Direct Gilt Account (RDG) using Aadhaar and PAN.',
      'Apply during the primary auction window for the 10-Year benchmark bond.',
      'Fund application through UPI / Net Banking.',
      'G-Sec credited to RDG portfolio upon settlement.'
    ],
    whereToInvest: 'RBI Retail Direct Portal, secondary markets via NSE/BSE, primary dealers.',
    requiredDocuments: ['PAN Card', 'Aadhaar Card', 'Cancelled Cheque / Bank Statement'],
    importantRules: [
      'The 10-year benchmark G-Sec is the most liquid fixed-income instrument in India.',
      'Interest payments are backed by the sovereign credit of India.'
    ],
    risksAndLimitations: [
      'Highest duration sensitivity among standard benchmark bonds: bond prices fall when market yields rise if liquidated before maturity.'
    ],
    faqs: [
      {
        question: 'Why is the 10-Year G-Sec referred to as the benchmark bond?',
        answer: 'The yield on the 10-Year G-Sec serves as the primary benchmark for pricing home loans, corporate bonds, infrastructure debt, and sovereign risk in India.'
      }
    ],
    comparisonSlugs: ['5-year-central-gsec', '15-year-central-gsec'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-gsec-15y',
    title: '15-Year Central Government Security',
    slug: '15-year-central-gsec',
    description: 'Long-duration sovereign fixed-income bond issued by the Reserve Bank of India providing predictable semi-annual cash flows for long-term retirement and institutional portfolios.',
    authority: 'Reserve Bank of India (RBI)',
    category: 'Government Securities',
    status: 'ACTIVE',
    sourceUrl: 'https://retaildirect.rbi.org.in',
    sourceAuthority: 'Reserve Bank of India',
    verificationStatus: 'VERIFIED',
    minInvestment: 10000,
    maxInvestment: 20000000,
    expectedReturn: 'Fixed Semi-Annual Coupon (~7.1% to 7.3% Sovereign Yield)',
    notifiedRate: 'Fixed Coupon Rate',
    rateEffectivePeriod: 'Issuance Series',
    tenure: '15 Years',
    lockInPeriod: '15 Years (Secondary market tradable)',
    riskLevel: 'Low',
    returnMechanism: 'Regular semi-annual coupon payouts for 15 years with full return of principal at maturity.',
    depositRules: 'Minimum ₹10,000 in multiples of ₹10,000 via RBI Retail Direct.',
    maturityRules: 'Redemption at par (₹100) after 15 years directly into bank account.',
    extensionRules: 'No statutory extension.',
    withdrawalRules: 'Tradable on NDS-OM secondary debt market.',
    prematureClosureRules: 'Secondary market exit via RBI Retail Direct.',
    loanFacilityRules: 'Eligible for loan pledging with commercial banks.',
    taxTreatment: 'Coupon interest taxable at individual slab rates. Capital gains beyond 12 months taxed as LTCG at 12.5% without indexation.',
    nominationRules: 'Nomination facility available on RDG account.',
    accountOpeningProcess: [
      'Access RBI Retail Direct portal during the primary auction cycle.',
      'Bid non-competitively for 15-Year G-Sec.',
      'Authorize electronic fund transfer.',
      'Receive bond allotment in RDG account.'
    ],
    whereToInvest: 'RBI Retail Direct (retaildirect.rbi.org.in), NSE, BSE.',
    requiredDocuments: ['PAN Card', 'Aadhaar Card', 'Bank Account Verification'],
    importantRules: ['Sovereign guarantee with zero default risk.'],
    risksAndLimitations: ['Long-duration price volatility if interest rates increase prior to maturity.'],
    faqs: [
      {
        question: 'Who should invest in a 15-Year Central Government Security?',
        answer: 'Investors looking to lock in sovereign guaranteed interest rates for long-term retirement horizons without credit risk.'
      }
    ],
    comparisonSlugs: ['10-year-benchmark-government-security', '30-year-ultra-long-government-security'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-gsec-30y',
    title: '30-Year Ultra-Long Government Security',
    slug: '30-year-ultra-long-government-security',
    description: 'Ultra-long duration sovereign bond issued by the Reserve Bank of India designed to match multi-decade pension, insurance, and generational wealth compounding objectives.',
    authority: 'Reserve Bank of India (RBI)',
    category: 'Government Securities',
    status: 'ACTIVE',
    sourceUrl: 'https://rbi.org.in',
    sourceAuthority: 'Reserve Bank of India, Government of India',
    verificationStatus: 'VERIFIED',
    minInvestment: 10000,
    maxInvestment: 20000000,
    expectedReturn: 'Fixed Semi-Annual Coupon (~7.2% to 7.4% p.a.)',
    notifiedRate: 'Fixed Coupon Rate',
    rateEffectivePeriod: 'Issuance Series',
    tenure: '30 Years',
    lockInPeriod: '30 Years (Tradable on NDS-OM)',
    riskLevel: 'Low',
    returnMechanism: 'Semi-annual coupon payments for 30 consecutive years, followed by 100% principal return at par on maturity.',
    depositRules: 'Minimum ₹10,000 in multiples of ₹10,000.',
    maturityRules: 'Matures exactly on the 30th anniversary of issuance with principal payout at ₹100 face value.',
    extensionRules: 'No extension.',
    withdrawalRules: 'Tradable on the RBI Retail Direct NDS-OM secondary market.',
    prematureClosureRules: 'Secondary market trade only; no premature encashment from RBI.',
    loanFacilityRules: 'Eligible as loan security with scheduled banks.',
    taxTreatment: 'Interest taxable at marginal income slab rate. LTCG after 12 months taxed at 12.5% without indexation.',
    nominationRules: 'Nomination facility available on RDG account.',
    accountOpeningProcess: [
      'Log in to RBI Retail Direct portal.',
      'Participate in non-competitive auction for 30-Year G-Sec.',
      'Fund bid via ASBA or UPI.',
      'Allotted bonds credited into RDG account.'
    ],
    whereToInvest: 'RBI Retail Direct portal and registered debt brokers.',
    requiredDocuments: ['PAN Card', 'Aadhaar Card', 'Bank account details'],
    importantRules: ['Provides the longest available sovereign fixed rate lock-in in Indian debt markets.'],
    risksAndLimitations: ['High sensitivity to macro interest rate shifts (high modified duration).'],
    faqs: [
      {
        question: 'What is the main benefit of a 30-year G-Sec for retail investors?',
        answer: 'It locks in a guaranteed sovereign yield for 30 full years, completely eliminating reinvestment risk for multi-decade retirement planning.'
      }
    ],
    comparisonSlugs: ['15-year-central-gsec', 'floating-rate-savings-bonds'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-cm-bill',
    title: 'Cash Management Bills (CMBs)',
    slug: 'cash-management-bills',
    description: 'Ultra short-term sovereign money market instruments issued by the Reserve Bank of India on behalf of the Government of India to meet temporary mismatches in central cash flow.',
    authority: 'Reserve Bank of India (RBI) / Ministry of Finance',
    category: 'Government Securities',
    status: 'ACTIVE',
    sourceUrl: 'https://www.rbi.org.in',
    sourceAuthority: 'Reserve Bank of India, Government of India',
    verificationStatus: 'VERIFIED',
    minInvestment: 10000,
    maxInvestment: 20000000,
    expectedReturn: 'Discount to Face Value (Prevailing Short-Term Money Market Yield)',
    notifiedRate: 'Auction Cut-Off Yield',
    rateEffectivePeriod: 'Ad-hoc Tranche Issuance',
    tenure: 'Under 91 Days (Typically 14 to 84 Days)',
    lockInPeriod: 'Specific Tenor (Tradable on NDS-OM)',
    riskLevel: 'Low',
    returnMechanism: 'Zero-coupon instrument issued at a discount to face value and redeemed at ₹100 par on maturity.',
    depositRules: 'Minimum ₹10,000 and in multiples of ₹10,000 via RBI Retail Direct when issued.',
    maturityRules: 'Automatic redemption at face value on designated maturity date (<91 days).',
    extensionRules: 'No rollover facility.',
    withdrawalRules: 'Tradable on NDS-OM secondary market.',
    prematureClosureRules: 'No premature redemption with RBI; sale in secondary market only.',
    loanFacilityRules: 'Eligible for short-term collateral pledging.',
    taxTreatment: 'Gains are taxed as Short-Term Capital Gains (STCG) at individual slab rates. No TDS.',
    nominationRules: 'Nomination available on RDG account.',
    accountOpeningProcess: [
      'Track RBI ad-hoc CMB issuance notices.',
      'Place bid on RBI Retail Direct during non-competitive window.',
      'Make electronic payment via UPI / Net Banking.',
      'Receive CMBs in RDG account upon settlement.'
    ],
    whereToInvest: 'RBI Retail Direct portal and primary dealer networks.',
    requiredDocuments: ['PAN Card', 'Aadhaar Card', 'Bank details'],
    importantRules: [
      'CMBs are non-standard short-term bills with tenors strictly less than 91 days.',
      'Issued as ad-hoc tranches when the Central Government requires immediate liquidity.'
    ],
    risksAndLimitations: ['Irregular issuance calendar compared to standard weekly T-Bills.'],
    faqs: [
      {
        question: 'How do Cash Management Bills differ from Treasury Bills?',
        answer: 'While standard T-Bills have fixed tenors (91, 182, 364 days), CMBs have customized tenors of less than 91 days (such as 14, 28, or 60 days) and are issued on an ad-hoc basis.'
      }
    ],
    comparisonSlugs: ['91-day-treasury-bills', '182-day-treasury-bills'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-inflation-indexed',
    title: 'Inflation-Indexed Bonds (IIBs)',
    slug: 'inflation-indexed-bonds',
    description: 'Sovereign debt securities issued by the Reserve Bank of India where the principal and coupon cash flows are adjusted for Consumer Price Index (CPI) inflation to safeguard real purchasing power.',
    authority: 'Reserve Bank of India (RBI) / Ministry of Finance',
    category: 'Government Securities',
    status: 'ACTIVE',
    sourceUrl: 'https://www.rbi.org.in',
    sourceAuthority: 'Reserve Bank of India, Government of India',
    verificationStatus: 'VERIFIED',
    minInvestment: 10000,
    maxInvestment: 20000000,
    expectedReturn: 'Real Coupon Rate + CPI Inflation Indexation',
    notifiedRate: 'Real Base Rate + CPI Adjustment',
    rateEffectivePeriod: 'Issuance Series',
    tenure: '5 to 10 Years',
    lockInPeriod: '5 to 10 Years (Tradable on NDS-OM)',
    riskLevel: 'Low',
    returnMechanism: 'The principal value is adjusted periodically based on the reference CPI inflation index. The fixed real coupon is calculated and paid on the inflation-adjusted principal, protecting against inflation drag.',
    depositRules: 'Minimum ₹10,000 in multiples of ₹10,000.',
    maturityRules: 'At maturity, the investor receives the higher of the inflation-adjusted principal or the original face value (inflation floor guarantee).',
    extensionRules: 'No statutory extension.',
    withdrawalRules: 'Tradable on secondary debt markets through NDS-OM and stock exchanges.',
    prematureClosureRules: 'Secondary market exit only.',
    loanFacilityRules: 'Eligible for loan pledging with commercial banks.',
    taxTreatment: 'Coupon interest and inflation adjustments to principal are taxable as income at slab rates under the Income Tax Act. LTCG applies on secondary market transfer after 12 months at 12.5%.',
    nominationRules: 'Nomination available on Gilt/Demat account.',
    accountOpeningProcess: [
      'Register for RBI Retail Direct or brokerage demat account.',
      'Participate in RBI IIB primary auction tranches or purchase from secondary market.',
      'Fund purchase via electronic payment.',
      'Holdings reflected in Gilt/Demat portfolio.'
    ],
    whereToInvest: 'RBI Retail Direct portal, NSE, BSE, Primary Dealers.',
    requiredDocuments: ['PAN Card', 'Aadhaar Card', 'Bank details'],
    importantRules: [
      'Principal floor guarantee ensures that even in cases of deflation, the investor receives not less than the original face value at maturity.'
    ],
    risksAndLimitations: ['Inflation lag in index calculation and periodic tranche availability.'],
    faqs: [
      {
        question: 'How do Inflation-Indexed Bonds protect against inflation?',
        answer: 'Both the bond principal and interest payouts are indexed to the Consumer Price Index (CPI), ensuring that your real purchasing power does not erode when inflation increases.'
      }
    ],
    comparisonSlugs: ['10-year-benchmark-government-security', 'floating-rate-savings-bonds'],
    calculatorType: 'compound',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-nhai-tf',
    title: 'NHAI Tax-Free Bonds (Tranche Series)',
    slug: 'nhai-tax-free-bonds',
    description: 'AAA-rated secured tax-free infrastructure bonds issued by the National Highways Authority of India under Section 10(15)(iv)(h) of the Income Tax Act, offering 100% tax-exempt annual coupons.',
    authority: 'National Highways Authority of India (NHAI) / Ministry of Road Transport and Highways',
    category: 'Tax-Free Bonds',
    status: 'TRADED / HISTORICAL',
    sourceUrl: 'https://nhai.gov.in',
    sourceAuthority: 'National Highways Authority of India, Government of India',
    verificationStatus: 'VERIFIED',
    minInvestment: 1000,
    maxInvestment: 'No Upper Limit (Secondary Market Lot Size: 1 Bond = ₹1,000 FV)',
    expectedReturn: '7.39% to 8.75% p.a. 100% Tax-Free Annual Coupon (Depends on specific tranche/series)',
    notifiedRate: '7.39% - 8.75% Tax-Free Coupon',
    rateEffectivePeriod: 'Fixed for Bond Life (10, 15, or 20 Years)',
    tenure: '10, 15, or 20 Years from Issue Date',
    lockInPeriod: 'Until Tranche Maturity (Freely tradable on NSE/BSE secondary markets)',
    riskLevel: 'Low',
    returnMechanism: 'Fixed tax-free interest paid annually on designated record dates directly into the investor bank account. Principal redeemed at face value (₹1,000/bond) on tranche maturity.',
    depositRules: 'Available in the secondary market on NSE and BSE through any SEBI-registered stockbroker in lot size of 1 bond (face value ₹1,000).',
    maturityRules: 'Redeemed at full par value on the predetermined maturity date by NHAI directly into the demat-linked bank account.',
    extensionRules: 'No extension; bonds are redeemed and extinguished on maturity.',
    withdrawalRules: 'No lock-in for secondary trades; bonds can be bought and sold on the NSE/BSE debt segment during standard market hours (9:15 AM to 3:30 PM).',
    prematureClosureRules: 'Issuer does not provide put options; premature liquidation is done by selling units on the stock exchange.',
    loanFacilityRules: 'Eligible for loan against securities (LAS) and overdraft facilities with commercial banks.',
    taxTreatment: '100% Tax-Exempt: Annual coupon interest is completely exempt from income tax under Section 10(15)(iv)(h) of the Income Tax Act, 1961. No TDS is deducted. Capital gains on secondary market sale after 12 months are taxed as LTCG at 12.5% without indexation.',
    nominationRules: 'Nomination registered with the Depository Participant (NSDL/CDSL) applies automatically.',
    accountOpeningProcess: [
      'Open a trading and demat account with any SEBI-registered stockbroker (Zerodha, Groww, ICICI Direct, HDFC Sky, etc.).',
      'Search for NHAI Tax-Free Bond series symbols on NSE/BSE (e.g., NHAI N1, NHAI N2, NHAI N6).',
      'Check prevailing market yield-to-maturity (YTM) and clean price.',
      'Place a limit or market buy order and execute.',
      'Bonds are credited to your demat account on T+1 settlement.'
    ],
    whereToInvest: 'Secondary market of National Stock Exchange (NSE) and Bombay Stock Exchange (BSE), Online Bond Platforms (OBPPs) licensed by SEBI.',
    requiredDocuments: [
      'Demat Account with NSDL or CDSL',
      'PAN Card',
      'Bank Account linked to Demat Account for annual interest credit'
    ],
    importantRules: [
      'Original public tranches offered an additional 25–50 bps interest rate to retail individual investors (holding up to ₹10 Lakh at public issue).',
      'AAA credit rating by CRISIL, ICRA, and CARE signifying highest safety.',
      'No fresh primary issuances are permitted under current fiscal budgets; only secondary market purchases are available.'
    ],
    risksAndLimitations: [
      'Secondary market liquidity varies across series; illiquid series may have wide bid-ask spreads.',
      'Purchasing at a premium over face value reduces the effective Yield to Maturity (YTM).'
    ],
    faqs: [
      {
        question: 'Are NHAI tax-free bonds completely exempt from income tax?',
        answer: 'Yes, all annual interest received from NHAI tax-free bonds is 100% exempt from income tax under Section 10(15)(iv)(h) and does not need to be added to taxable income.'
      },
      {
        question: 'Can I still buy NHAI tax-free bonds today?',
        answer: 'Yes, while no new primary issues are launched, existing tranches with maturities ranging from 2026 to 2036 are actively traded on the NSE and BSE secondary debt segments.'
      }
    ],
    comparisonSlugs: ['rec-tax-free-bonds', 'pfc-tax-free-bonds', 'irfc-tax-free-bonds'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-ireda-tf',
    title: 'IREDA Tax-Free Bonds',
    slug: 'ireda-tax-free-bonds',
    description: 'Secured tax-free public sector infrastructure bonds issued by the Indian Renewable Energy Development Agency under Section 10(15)(iv)(h) to finance clean energy projects.',
    authority: 'Indian Renewable Energy Development Agency (IREDA) / Ministry of New and Renewable Energy',
    category: 'Tax-Free Bonds',
    status: 'TRADED / HISTORICAL',
    sourceUrl: 'https://www.ireda.in',
    sourceAuthority: 'IREDA, Government of India',
    verificationStatus: 'VERIFIED',
    minInvestment: 1000,
    maxInvestment: 'No Upper Limit (Secondary Market)',
    expectedReturn: '7.28% to 8.68% p.a. 100% Tax-Free Annual Coupon',
    notifiedRate: '7.28% - 8.68% Tax-Free Coupon',
    rateEffectivePeriod: 'Fixed for Bond Life (10, 15, or 20 Years)',
    tenure: '10 to 20 Years',
    lockInPeriod: 'Until Maturity (Freely tradable on NSE/BSE)',
    riskLevel: 'Low',
    returnMechanism: 'Annual fixed coupon payout credited to bank account, with full redemption of ₹1,000 face value per bond at maturity.',
    depositRules: 'Purchased on NSE/BSE secondary markets through stockbrokers in lot sizes of 1 bond.',
    maturityRules: 'Automatic redemption of face value at maturity by IREDA.',
    extensionRules: 'No extension.',
    withdrawalRules: 'Secondary market sale on stock exchange debt platforms.',
    prematureClosureRules: 'Sold through stockbrokers on secondary market; no premature redemption option from IREDA.',
    loanFacilityRules: 'Eligible for loan collateral with commercial banks.',
    taxTreatment: 'Interest income is 100% tax-free under Section 10(15)(iv)(h) of Income Tax Act. No TDS. LTCG of 12.5% applies on secondary market transfer after 12 months.',
    nominationRules: 'Nomination managed through Demat account.',
    accountOpeningProcess: [
      'Log in to trading/demat account.',
      'Search for IREDA Tax-Free bond series on NSE/BSE.',
      'Execute buy order on debt segment.',
      'Units credited to demat on settlement.'
    ],
    whereToInvest: 'NSE, BSE, SEBI-registered Online Bond Platform Providers (OBPPs).',
    requiredDocuments: ['Demat Account', 'PAN Card', 'Bank details'],
    importantRules: ['AAA/AA+ credit rating by domestic rating agencies.'],
    risksAndLimitations: ['Lower secondary trading volume compared to NHAI/REC bonds.'],
    faqs: [
      {
        question: 'What is the tax treatment of IREDA Tax-Free Bonds?',
        answer: 'Annual coupon interest is completely tax-free in the hands of the investor under Section 10(15)(iv)(h).'
      }
    ],
    comparisonSlugs: ['nhai-tax-free-bonds', 'pfc-tax-free-bonds'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-pfc-tf',
    title: 'Power Finance Corporation (PFC) Tax-Free Bonds',
    slug: 'pfc-tax-free-bonds',
    description: 'Government-backed AAA-rated tax-free infrastructure bonds issued by Power Finance Corporation under Section 10(15)(iv)(h) for funding India power sector transmission and generation projects.',
    authority: 'Power Finance Corporation (PFC) / Ministry of Power',
    category: 'Tax-Free Bonds',
    status: 'TRADED / HISTORICAL',
    sourceUrl: 'https://pfcindia.com',
    sourceAuthority: 'Power Finance Corporation Limited, Government of India',
    verificationStatus: 'VERIFIED',
    minInvestment: 1000,
    maxInvestment: 'No Upper Limit (Secondary Market)',
    expectedReturn: '7.36% to 8.92% p.a. 100% Tax-Free Annual Coupon',
    notifiedRate: '7.36% - 8.92% Tax-Free Coupon',
    rateEffectivePeriod: 'Fixed for Bond Life (10, 15, or 20 Years)',
    tenure: '10, 15, or 20 Years',
    lockInPeriod: 'Until Maturity (Tradable on NSE/BSE)',
    riskLevel: 'Low',
    returnMechanism: 'Annual tax-exempt coupon paid on scheduled record dates directly into bank account, with full par value returned at maturity.',
    depositRules: 'Traded on NSE and BSE debt segments in units of 1 bond (face value ₹1,000).',
    maturityRules: 'Face value repaid in full on the maturity date by PFC.',
    extensionRules: 'No extension.',
    withdrawalRules: 'Tradable on secondary debt markets during exchange trading hours.',
    prematureClosureRules: 'Secondary market sale through broker.',
    loanFacilityRules: 'Eligible collateral for bank loan against securities.',
    taxTreatment: '100% tax-free coupon under Section 10(15)(iv)(h) of Income Tax Act. Zero TDS. 12.5% LTCG on capital appreciation upon secondary sale after 12 months.',
    nominationRules: 'Handled via depository participant.',
    accountOpeningProcess: [
      'Log into your brokerage demat platform.',
      'Search for PFC tax-free series (e.g. PFC N1, PFC N2, etc.).',
      'Place buy order at prevailing secondary market ask price.',
      'Bonds settle into demat account.'
    ],
    whereToInvest: 'NSE, BSE, SEBI-registered Online Bond Platforms.',
    requiredDocuments: ['Demat Account', 'PAN Card', 'Bank account'],
    importantRules: ['Highest safety rating (CRISIL AAA, ICRA AAA, CARE AAA).'],
    risksAndLimitations: ['Yield depends on prevailing market purchase price.'],
    faqs: [
      {
        question: 'Is PFC Tax-Free Bond interest subject to TDS?',
        answer: 'No, there is zero TDS, and the entire interest income is completely exempt from income tax.'
      }
    ],
    comparisonSlugs: ['rec-tax-free-bonds', 'nhai-tax-free-bonds'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-rec-tf',
    title: 'REC Limited Tax-Free Bonds',
    slug: 'rec-tax-free-bonds',
    description: 'Maharatna PSU tax-free infrastructure bonds issued by REC Limited under Section 10(15)(iv)(h) providing sovereign-quality security and tax-free annual coupon income.',
    authority: 'REC Limited / Ministry of Power',
    category: 'Tax-Free Bonds',
    status: 'TRADED / HISTORICAL',
    sourceUrl: 'https://recindia.nic.in',
    sourceAuthority: 'REC Limited, Government of India',
    verificationStatus: 'VERIFIED',
    minInvestment: 1000,
    maxInvestment: 'No Upper Limit (Secondary Market)',
    expectedReturn: '7.22% to 8.71% p.a. 100% Tax-Free Annual Coupon',
    notifiedRate: '7.22% - 8.71% Tax-Free Coupon',
    rateEffectivePeriod: 'Fixed for Bond Life (10, 15, or 20 Years)',
    tenure: '10, 15, or 20 Years',
    lockInPeriod: 'Until Maturity (Freely tradable on NSE/BSE)',
    riskLevel: 'Low',
    returnMechanism: 'Annual interest credited to demat-linked bank account, with principal redemption at face value (₹1,000) on maturity.',
    depositRules: 'Purchased via secondary market on NSE and BSE debt markets.',
    maturityRules: 'Automatic redemption of face value at maturity by REC.',
    extensionRules: 'No extension.',
    withdrawalRules: 'Secondary market exit via stockbroker.',
    prematureClosureRules: 'Sold on stock exchange; no early put option from issuer.',
    loanFacilityRules: 'Eligible for loan pledging with commercial banks.',
    taxTreatment: 'Tax-free annual coupon under Section 10(15)(iv)(h). LTCG of 12.5% applies on secondary market transfer held over 12 months.',
    nominationRules: 'Managed through Demat depository account.',
    accountOpeningProcess: [
      'Open demat account with registered stockbroker.',
      'Place buy order for REC tax-free bond series on NSE/BSE.',
      'Execute trade and hold in demat.'
    ],
    whereToInvest: 'NSE, BSE, licensed Online Bond Platforms.',
    requiredDocuments: ['Demat Account', 'PAN Card', 'Bank details'],
    importantRules: ['Highest safety AAA ratings by CRISIL, ICRA, and CARE.'],
    risksAndLimitations: ['Price fluctuates in secondary market inversely to interest rate cycles.'],
    faqs: [
      {
        question: 'Who should buy REC Tax-Free Bonds?',
        answer: 'High-income individuals in the 30%+ income tax slab who want tax-free annual income with PSU sovereign safety.'
      }
    ],
    comparisonSlugs: ['pfc-tax-free-bonds', 'nhai-tax-free-bonds'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-irfc-tf',
    title: 'IRFC Tax-Free Bonds',
    slug: 'irfc-tax-free-bonds',
    description: 'AAA-rated secured tax-free bonds issued by the Indian Railway Finance Corporation (Ministry of Railways) under Section 10(15)(iv)(h) to fund Indian Railways rolling stock and rail infrastructure.',
    authority: 'Indian Railway Finance Corporation (IRFC) / Ministry of Railways',
    category: 'Tax-Free Bonds',
    status: 'TRADED / HISTORICAL',
    sourceUrl: 'https://irfc.nic.in',
    sourceAuthority: 'Indian Railway Finance Corporation, Government of India',
    verificationStatus: 'VERIFIED',
    minInvestment: 1000,
    maxInvestment: 'No Upper Limit (Secondary Market)',
    expectedReturn: '7.18% to 8.65% p.a. 100% Tax-Free Annual Coupon',
    notifiedRate: '7.18% - 8.65% Tax-Free Coupon',
    rateEffectivePeriod: 'Fixed for Bond Life (10, 15, or 20 Years)',
    tenure: '10, 15, or 20 Years',
    lockInPeriod: 'Until Maturity (Tradable on NSE/BSE)',
    riskLevel: 'Low',
    returnMechanism: 'Annual fixed coupon credited directly to bank account, with full redemption of ₹1,000 face value on maturity.',
    depositRules: 'Traded in secondary market on NSE/BSE in units of 1 bond.',
    maturityRules: 'Redemption at par upon maturity date directly to bank account.',
    extensionRules: 'No extension.',
    withdrawalRules: 'Tradable on stock exchange debt segments.',
    prematureClosureRules: 'Secondary market sale.',
    loanFacilityRules: 'Eligible for loan pledging with scheduled banks.',
    taxTreatment: 'Interest is 100% tax-exempt under Section 10(15)(iv)(h). Zero TDS. Capital gains tax of 12.5% on holding periods over 12 months.',
    nominationRules: 'Registered via Demat account.',
    accountOpeningProcess: [
      'Log in to trading account on NSE/BSE.',
      'Search for IRFC tax-free series (e.g., IRFC N1, IRFC N2, etc.).',
      'Execute buy order on debt platform.'
    ],
    whereToInvest: 'NSE, BSE, Online Bond Platforms.',
    requiredDocuments: ['Demat Account', 'PAN Card', 'Bank details'],
    importantRules: ['Highest credit quality backed by Ministry of Railways lease rentals.'],
    risksAndLimitations: ['Secondary market liquidity varies across series.'],
    faqs: [
      {
        question: 'Are IRFC Tax-Free Bonds backed by the Government of India?',
        answer: 'IRFC is a Schedule-A Miniratna public sector enterprise under the Ministry of Railways, and its bonds carry the highest AAA credit rating.'
      }
    ],
    comparisonSlugs: ['nhai-tax-free-bonds', 'rec-tax-free-bonds'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-hudco-tf',
    title: 'HUDCO Tax-Free Bonds',
    slug: 'hudco-tax-free-bonds',
    description: 'Secured tax-free infrastructure bonds issued by the Housing and Urban Development Corporation under Section 10(15)(iv)(h) to finance affordable housing and urban infrastructure.',
    authority: 'Housing and Urban Development Corporation (HUDCO) / Ministry of Housing and Urban Affairs',
    category: 'Tax-Free Bonds',
    status: 'TRADED / HISTORICAL',
    sourceUrl: 'https://hudco.org.in',
    sourceAuthority: 'HUDCO, Government of India',
    verificationStatus: 'VERIFIED',
    minInvestment: 1000,
    maxInvestment: 'No Upper Limit (Secondary Market)',
    expectedReturn: '7.34% to 8.76% p.a. 100% Tax-Free Annual Coupon',
    notifiedRate: '7.34% - 8.76% Tax-Free Coupon',
    rateEffectivePeriod: 'Fixed for Bond Life (10, 15, or 20 Years)',
    tenure: '10, 15, or 20 Years',
    lockInPeriod: 'Until Maturity (Tradable on NSE/BSE)',
    riskLevel: 'Low',
    returnMechanism: 'Annual tax-free coupon credited to bank account, with full redemption at face value (₹1,000) on maturity.',
    depositRules: 'Purchased on NSE and BSE debt markets.',
    maturityRules: 'Redeemed at par value on maturity date.',
    extensionRules: 'No extension.',
    withdrawalRules: 'Tradable on NSE/BSE.',
    prematureClosureRules: 'Secondary market sale.',
    loanFacilityRules: 'Eligible for loan pledging.',
    taxTreatment: 'Tax-free annual coupon under Section 10(15)(iv)(h). Zero TDS. 12.5% LTCG on capital gains held over 12 months.',
    nominationRules: 'Managed via Demat depository.',
    accountOpeningProcess: [
      'Search for HUDCO tax-free series on stock exchange.',
      'Place buy order through stockbroker.',
      'Units credited to demat account.'
    ],
    whereToInvest: 'NSE, BSE, registered Online Bond Platforms.',
    requiredDocuments: ['Demat Account', 'PAN Card', 'Bank details'],
    importantRules: ['AAA rated public sector housing finance enterprise.'],
    risksAndLimitations: ['Secondary trading volume is lower than NHAI bonds.'],
    faqs: [
      {
        question: 'Do HUDCO Tax-Free Bonds require tax filing declaration?',
        answer: 'Yes, tax-free interest must be reported under exempt income (EI) in your Income Tax Return, but no tax is payable on it.'
      }
    ],
    comparisonSlugs: ['nhb-tax-free-bonds', 'nhai-tax-free-bonds'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-nhb-tf',
    title: 'National Housing Bank Tax-Free Bonds',
    slug: 'nhb-tax-free-bonds',
    description: 'AAA-rated tax-free bonds issued by the National Housing Bank (wholly owned by the Government of India) under Section 10(15)(iv)(h) to support residential mortgage refinancing.',
    authority: 'National Housing Bank (NHB) / Ministry of Finance',
    category: 'Tax-Free Bonds',
    status: 'TRADED / HISTORICAL',
    sourceUrl: 'https://nhb.org.in',
    sourceAuthority: 'National Housing Bank, Government of India',
    verificationStatus: 'VERIFIED',
    minInvestment: 1000,
    maxInvestment: 'No Upper Limit (Secondary Market)',
    expectedReturn: '7.21% to 8.63% p.a. 100% Tax-Free Annual Coupon',
    notifiedRate: '7.21% - 8.63% Tax-Free Coupon',
    rateEffectivePeriod: 'Fixed for Bond Life (10, 15, or 20 Years)',
    tenure: '10 to 20 Years',
    lockInPeriod: 'Until Maturity (Tradable on NSE/BSE)',
    riskLevel: 'Low',
    returnMechanism: 'Annual fixed coupon paid to linked bank account with principal redemption at par (₹1,000) on maturity.',
    depositRules: 'Purchased via secondary market on NSE and BSE debt segments.',
    maturityRules: 'Redemption at par value at maturity by NHB.',
    extensionRules: 'No extension.',
    withdrawalRules: 'Tradable on stock exchanges.',
    prematureClosureRules: 'Secondary market trade only.',
    loanFacilityRules: 'Eligible for loan pledging with scheduled commercial banks.',
    taxTreatment: 'Interest is 100% tax-free under Section 10(15)(iv)(h). Zero TDS. 12.5% LTCG on capital gains held over 12 months.',
    nominationRules: 'Registered via Demat account.',
    accountOpeningProcess: [
      'Search for NHB tax-free bonds on brokerage app.',
      'Place buy order on debt segment.',
      'Hold in demat.'
    ],
    whereToInvest: 'NSE, BSE, SEBI-registered Online Bond Platforms.',
    requiredDocuments: ['Demat Account', 'PAN Card', 'Bank details'],
    importantRules: ['NHB is a statutory apex financial institution wholly owned by Government of India.'],
    risksAndLimitations: ['Limited trading volume in secondary markets.'],
    faqs: [
      {
        question: 'Who owns the National Housing Bank?',
        answer: 'National Housing Bank is a statutory body wholly owned by the Government of India (Ministry of Finance).'
      }
    ],
    comparisonSlugs: ['hudco-tax-free-bonds', 'nhai-tax-free-bonds'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-iifl-ncd',
    title: 'IIFL Secured Redeemable NCDs',
    slug: 'iifl-secured-redeemable-ncds',
    description: 'Secured redeemable non-convertible debentures issued by IIFL Finance Limited, offering fixed monthly, annual, or cumulative coupon options with security backed by receivables.',
    authority: 'Securities and Exchange Board of India (SEBI) / IIFL Finance',
    category: 'Corporate NCDs',
    status: 'ACTIVE',
    sourceUrl: 'https://www.sebi.gov.in',
    sourceAuthority: 'SEBI / IIFL Finance',
    verificationStatus: 'VERIFIED',
    minInvestment: 10000,
    maxInvestment: 'No Upper Limit (In Multiples of ₹1,000)',
    expectedReturn: '8.50% to 10.00% p.a. Fixed Coupon (Monthly / Annual / Cumulative)',
    notifiedRate: '8.50% - 10.00% Fixed Coupon',
    rateEffectivePeriod: 'Public Issue Tranche Tenure',
    tenure: '24, 36, or 60 Months (2 to 5 Years)',
    lockInPeriod: 'Chosen Tranche Tenure (Listed on BSE/NSE for secondary trading)',
    riskLevel: 'Medium',
    returnMechanism: 'Fixed coupon payouts according to chosen frequency (monthly, annual, or cumulative at maturity) with full principal redemption at ₹1,000 face value per debenture at maturity.',
    depositRules: 'Minimum application is ₹10,000 (10 NCDs of face value ₹1,000 each) during public issuances or secondary market purchases.',
    maturityRules: 'Face value is redeemed on the completion of the chosen tenor (24, 36, or 60 months) directly to the demat-linked bank account.',
    extensionRules: 'No statutory extension; new series subscription required upon maturity.',
    withdrawalRules: 'Listed on BSE and NSE debt segments; can be sold prior to maturity subject to secondary market liquidity.',
    prematureClosureRules: 'No early redemption from issuer unless specified in tranche terms; secondary market sale via broker.',
    loanFacilityRules: 'Eligible for loan against securities (LAS) with participating NBFCs and banks.',
    taxTreatment: 'Interest is fully taxable under "Income from Other Sources" at individual slab rates. As per Finance Act 2023, TDS at 10% is deductible on listed demat NCD interest payments. Capital gains after 12 months taxed at 12.5% without indexation.',
    nominationRules: 'Nomination registered with depository participant (NSDL/CDSL).',
    accountOpeningProcess: [
      'Apply online via ASBA through net banking (UPI mandate or bank ASBA) during public issue opening dates.',
      'Select preferred series (monthly, annual, or cumulative payout and chosen tenure).',
      'Authorize ASBA block on your bank account.',
      'Allotted NCDs are credited to your demat account on listing day.'
    ],
    whereToInvest: 'Stock exchange public issue bidding portals (BSE/NSE), net banking ASBA, and Online Bond Platforms (OBPPs).',
    requiredDocuments: [
      'Demat Account (NSDL or CDSL)',
      'PAN Card',
      'Bank Account with ASBA / UPI mandate support'
    ],
    importantRules: [
      'Secured by first pari-passu floating charge on standard loan receivables and asset pool of the issuer.',
      'Credit ratings (e.g. CRISIL AA/Stable, ICRA AA/Stable) evaluate issuer creditworthiness.',
      'Finance Act 2023 removed TDS exemption on listed NCDs; 10% TDS is deducted on interest payments.'
    ],
    risksAndLimitations: [
      'Credit/default risk of the NBFC issuer.',
      'Secondary market liquidity may be low, leading to discounts on premature market sales.'
    ],
    faqs: [
      {
        question: 'Is interest from IIFL NCDs taxable?',
        answer: 'Yes, interest earned on corporate NCDs is fully taxable according to your income tax slab rate, and 10% TDS is deducted on interest payments.'
      },
      {
        question: 'What does "Secured" NCD mean?',
        answer: 'A secured NCD is backed by the issuer specific assets/loan receivables, giving debenture holders a legal claim over the collateral in the event of default.'
      }
    ],
    comparisonSlugs: ['muthoot-finance-secured-ncds', 'manappuram-finance-secured-ncds'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-muthoot-ncd',
    title: 'Muthoot Finance Secured NCDs',
    slug: 'muthoot-finance-secured-ncds',
    description: 'Secured redeemable non-convertible debentures issued by Muthoot Finance Limited (India largest gold financing NBFC), offering high-yield fixed coupon options backed by gold loan receivables.',
    authority: 'Securities and Exchange Board of India (SEBI) / Muthoot Finance',
    category: 'Corporate NCDs',
    status: 'ACTIVE',
    sourceUrl: 'https://www.sebi.gov.in',
    sourceAuthority: 'SEBI / Muthoot Finance Limited',
    verificationStatus: 'VERIFIED',
    minInvestment: 10000,
    maxInvestment: 'No Upper Limit (In Multiples of ₹1,000)',
    expectedReturn: '8.25% to 9.25% p.a. Fixed Coupon (Monthly / Annual / Cumulative)',
    notifiedRate: '8.25% - 9.25% Fixed Coupon',
    rateEffectivePeriod: 'Public Issue Tranche Tenure',
    tenure: '24, 36, 60, or 84 Months (2 to 7 Years)',
    lockInPeriod: 'Chosen Tranche Tenure (Listed on BSE for secondary trading)',
    riskLevel: 'Medium',
    returnMechanism: 'Fixed coupon payouts according to selected frequency (monthly, annual, or cumulative) with full redemption of ₹1,000 face value per NCD on maturity.',
    depositRules: 'Minimum ₹10,000 (10 NCDs of face value ₹1,000 each) and in multiples of ₹1,000 thereafter during public subscription.',
    maturityRules: 'Redeemed at par (₹1,000 per unit) directly into the investor linked bank account on completion of the tenure.',
    extensionRules: 'No statutory extension; proceeds must be reinvested into new issues.',
    withdrawalRules: 'Listed on BSE debt segment; tradable prior to maturity.',
    prematureClosureRules: 'Secondary market sale on stock exchange.',
    loanFacilityRules: 'Eligible for loan against securities with commercial banks and NBFCs.',
    taxTreatment: 'Interest is taxable under "Income from Other Sources" at individual slab rates. 10% TDS is deducted on interest payments. LTCG of 12.5% applies on secondary transfer held for more than 12 months.',
    nominationRules: 'Registered via Demat account (NSDL/CDSL).',
    accountOpeningProcess: [
      'Apply online through bank ASBA or UPI during public issue period.',
      'Choose preferred series and tenure.',
      'Authorize payment mandate.',
      'NCDs credited to demat account post-allotment.'
    ],
    whereToInvest: 'BSE Public Issue Portal, Net Banking ASBA, Online Bond Platforms (OBPPs).',
    requiredDocuments: ['Demat Account', 'PAN Card', 'Bank account with ASBA/UPI'],
    importantRules: [
      'Rated CRISIL AA+/Stable and ICRA AA+/Stable indicating high degree of safety for timely servicing of financial obligations.',
      'Secured by first charge on gold loan receivables and current assets of the company.'
    ],
    risksAndLimitations: [
      'NBFC sector credit risk and gold price volatility impacting loan collateral coverage.',
      'Secondary market liquidity may be moderate.'
    ],
    faqs: [
      {
        question: 'What is the credit rating of Muthoot Finance NCDs?',
        answer: 'Muthoot Finance public NCDs typically carry CRISIL AA+/Stable and ICRA AA+/Stable credit ratings.'
      },
      {
        question: 'Can senior citizens get extra interest on Muthoot NCDs?',
        answer: 'Certain tranches offer an additional 0.25% to 0.50% p.a. incentive for retail investors or senior citizens.'
      }
    ],
    comparisonSlugs: ['manappuram-finance-secured-ncds', 'iifl-secured-redeemable-ncds'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  },
  {
    id: 'inv-manappuram-ncd',
    title: 'Manappuram Finance Secured NCDs',
    slug: 'manappuram-finance-secured-ncds',
    description: 'Secured redeemable non-convertible debentures issued by Manappuram Finance Limited offering competitive fixed coupon income backed by gold loan assets and corporate receivables.',
    authority: 'Securities and Exchange Board of India (SEBI) / Manappuram Finance',
    category: 'Corporate NCDs',
    status: 'ACTIVE',
    sourceUrl: 'https://www.sebi.gov.in',
    sourceAuthority: 'SEBI / Manappuram Finance Limited',
    verificationStatus: 'VERIFIED',
    minInvestment: 10000,
    maxInvestment: 'No Upper Limit (In Multiples of ₹1,000)',
    expectedReturn: '8.25% to 9.25% p.a. Fixed Coupon (Monthly / Annual / Cumulative)',
    notifiedRate: '8.25% - 9.25% Fixed Coupon',
    rateEffectivePeriod: 'Public Issue Tranche Tenure',
    tenure: '12, 24, 36, or 60 Months (1 to 5 Years)',
    lockInPeriod: 'Chosen Tranche Tenure (Listed on BSE/NSE)',
    riskLevel: 'Medium',
    returnMechanism: 'Fixed coupon payouts according to chosen series (monthly, annual, or cumulative) with full principal repayment at face value on maturity.',
    depositRules: 'Minimum ₹10,000 (10 NCDs of face value ₹1,000 each) in multiples of ₹1,000.',
    maturityRules: 'Redemption at par directly into bank account on maturity date.',
    extensionRules: 'No rollover; fresh application needed for new tranches.',
    withdrawalRules: 'Tradable on BSE and NSE debt segments.',
    prematureClosureRules: 'Secondary market sale through broker.',
    loanFacilityRules: 'Eligible for loan pledging.',
    taxTreatment: 'Interest taxable at marginal income tax slab rates. 10% TDS deducted on coupon payments. 12.5% LTCG on holding periods over 12 months.',
    nominationRules: 'Managed via Demat depository.',
    accountOpeningProcess: [
      'Apply online via ASBA net banking or UPI during public issue.',
      'Select series and maturity period.',
      'Approve payment mandate.',
      'NCDs credited to demat account.'
    ],
    whereToInvest: 'BSE, NSE, Net Banking ASBA, licensed Online Bond Platforms.',
    requiredDocuments: ['Demat Account', 'PAN Card', 'Bank account'],
    importantRules: [
      'Secured by charge on company loan assets.',
      'Rated AA/Stable by CRISIL and CARE.'
    ],
    risksAndLimitations: [
      'Credit risk of issuer and interest rate risk upon secondary market exit.'
    ],
    faqs: [
      {
        question: 'How is interest received from Manappuram Finance NCDs?',
        answer: 'Interest is credited directly into your linked bank account electronically (NEFT/RTGS/ACH) on the designated coupon payout dates.'
      }
    ],
    comparisonSlugs: ['muthoot-finance-secured-ncds', 'iifl-secured-redeemable-ncds'],
    calculatorType: 'simple',
    completenessLevel: 'COMPLETE',
    lastVerifiedDate: '2026-03-16'
  }
];
