import { Investment } from '../../types';

export const batch6InvestmentsData: Investment[] = [
  {
    "id": "inv-kotak-tier2",
    "title": "Kotak Mahindra Bank Tier-2 Bonds",
    "slug": "kotak-mahindra-bank-tier-2-bonds",
    "description": "Subordinated Basel-III compliant Tier-2 capital bonds issued by Kotak Mahindra Bank to augment long-term capital adequacy with secondary market trading on NSE and BSE debt segments.",
    "authority": "Kotak Mahindra Bank / Reserve Bank of India",
    "category": "Banking Tier Bonds",
    "status": "ACTIVE",
    "sourceUrl": "https://www.kotak.com",
    "sourceAuthority": "Kotak Mahindra Bank / RBI",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 10000,
    "expectedReturn": "Fixed Annual Subordinated Coupon",
    "lockInPeriod": "10 Years (Issuer 5th Year Call Option)",
    "riskLevel": "Medium",
    "depositRules": "Issued via private placement / electronic bidding platforms under RBI Basel-III capital regulations; retail and HNI secondary market participation via demat accounts.",
    "returnMechanism": "Annual interest coupon credited to linked bank account; principal repaid at bullet maturity or upon exercise of regulatory call option.",
    "taxTreatment": "Coupon interest is taxable under Income from Other Sources at marginal income tax slab. Capital gains on exchange sale taxed as per listed debt securities.",
    "withdrawalRules": "No premature redemption at investor discretion. Liquidity available exclusively through secondary market sale on stock exchange debt platforms.",
    "importantRules": [
      "Subordinated in claim to senior depositors, creditors, and Tier-1 obligations in resolution scenarios.",
      "Call option exercisable strictly at the discretion of the issuer bank with prior approval from RBI.",
      "Governed by RBI Master Circular on Basel-III Capital Regulations."
    ],
    "faqs": [
      {
        "question": "Are Kotak Tier-2 bonds covered under DICGC insurance?",
        "answer": "No. DICGC deposit insurance of ₹5 lakh covers bank deposits, not subordinated Tier-2 debt instruments."
      },
      {
        "question": "Can investors demand early redemption before 10 years?",
        "answer": "No. Early exit is possible only by selling the bonds on the secondary stock exchange debt segment."
      }
    ]
  },
  {
    "id": "inv-idbi-bonds",
    "title": "IDBI Bank Secured Bonds",
    "slug": "idbi-bank-secured-bonds",
    "description": "Secured redeemable non-convertible debentures and infrastructure debt bonds issued by IDBI Bank Limited backed by specific asset charge.",
    "authority": "IDBI Bank Limited / RBI / SEBI",
    "category": "Banking Bonds",
    "status": "ACTIVE",
    "sourceUrl": "https://www.idbibank.in",
    "sourceAuthority": "IDBI Bank / SEBI",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 10000,
    "expectedReturn": "Fixed Semi-Annual / Annual Coupon",
    "lockInPeriod": "5 to 10 Years",
    "riskLevel": "Low",
    "depositRules": "Secured against underlying book debts, loans, or specified assets with Debenture Trustee oversight.",
    "returnMechanism": "Fixed coupon credited periodically directly to registered bank account via NEFT/RTGS.",
    "taxTreatment": "Interest income is fully taxable at applicable slab rates. Listed bond transfers attract LTCG/STCG provisions without indexation.",
    "withdrawalRules": "Redeemable on scheduled maturity date; secondary market liquidity available on BSE/NSE debt segment.",
    "importantRules": [
      "Secured by a first or pari-passu charge on identified assets of IDBI Bank.",
      "Rated by SEBI-registered credit rating agencies with debenture trustee monitoring."
    ],
    "faqs": [
      {
        "question": "How are secured bonds different from unsecured Tier-2 bonds?",
        "answer": "Secured bonds hold a specific charge over bank assets, providing higher recovery priority than subordinated Tier-2 debt."
      }
    ]
  },
  {
    "id": "inv-sbi-fd",
    "title": "SBI Amrit Vrishti / Special Fixed Deposit",
    "slug": "sbi-special-fixed-deposit",
    "description": "Special high-yield retail term deposit scheme offered by State Bank of India with dedicated tenures (such as 444 days) for domestic and NRI depositors.",
    "authority": "State Bank of India",
    "category": "Bank Fixed Deposits",
    "status": "OPEN",
    "sourceUrl": "https://sbi.co.in",
    "sourceAuthority": "State Bank of India",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 1000,
    "expectedReturn": "7.25% p.a. (7.75% for Senior Citizens)",
    "lockInPeriod": "444 Days (Specific Term)",
    "riskLevel": "Low",
    "depositRules": "Available for fresh deposits and renewals of existing term deposits through SBI branches, YONO App, and SBI Internet Banking.",
    "returnMechanism": "Interest paid monthly, quarterly, or on maturity compounding quarterly based on depositor preference.",
    "taxTreatment": "Interest is fully taxable under Income from Other Sources. TDS applies under Section 194A if interest exceeds ₹40,000 (₹50,000 for senior citizens).",
    "withdrawalRules": "Premature withdrawal permitted subject to standard penalty as per SBI term deposit rules.",
    "loanFacilityRules": "Loan and overdraft facility against deposit available up to 90% of deposit amount.",
    "importantRules": [
      "Covered under DICGC insurance scheme up to ₹5,00,000 per depositor across all SBI branches.",
      "Special interest concession of 50 bps available for resident Indian senior citizens."
    ],
    "faqs": [
      {
        "question": "Can NRI customers open SBI Amrit Vrishti deposits?",
        "answer": "Yes, NRE and NRO deposit accounts are eligible for the scheme in designated tenures."
      },
      {
        "question": "Is nomination available on SBI Special FD?",
        "answer": "Yes, single and joint accounts allow nomination at the time of account creation or later."
      }
    ]
  },
  {
    "id": "inv-hdfc-fd",
    "title": "HDFC Bank Senior Citizen & Regular Tax Saver FD",
    "slug": "hdfc-bank-tax-saver-fd",
    "description": "5-year statutory tax-saving fixed deposit scheme issued under Bank Term Deposit Scheme, 2006, offering income tax deductions under Section 80C of the Income Tax Act.",
    "authority": "HDFC Bank Limited / Reserve Bank of India",
    "category": "Bank Fixed Deposits",
    "status": "OPEN",
    "sourceUrl": "https://www.hdfcbank.com",
    "sourceAuthority": "HDFC Bank / RBI",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100,
    "maxInvestment": 150000,
    "expectedReturn": "7.00% p.a. (7.50% for Senior Citizens)",
    "lockInPeriod": "5 Years Strictly (Lock-in)",
    "riskLevel": "Low",
    "depositRules": "Minimum deposit ₹100, maximum ₹1,50,000 per financial year for Section 80C tax deduction benefit. Available to Resident Individuals and HUFs.",
    "returnMechanism": "Quarterly compounding interest payable at maturity, or periodic monthly/quarterly payout options.",
    "taxTreatment": "Tax deduction under Section 80C up to ₹1.5 lakh. Interest earned is taxable and subject to TDS under Section 194A.",
    "withdrawalRules": "Strict 5-year lock-in. No premature withdrawal, auto-renewal, or loan/pledging against tax-saver deposit is permitted by law.",
    "importantRules": [
      "In joint accounts, Section 80C deduction is available exclusively to the first account holder.",
      "Covered by Deposit Insurance and Credit Guarantee Corporation (DICGC) up to ₹5 lakh."
    ],
    "faqs": [
      {
        "question": "Can a loan be availed against an HDFC Tax Saver FD?",
        "answer": "No. Statutory provisions prohibit taking loans or lien-marking against 5-year 80C tax saver term deposits."
      }
    ]
  },
  {
    "id": "inv-rbi-floating-rate-bonds",
    "title": "RBI Floating Rate Savings Bonds 2020 (Taxable)",
    "slug": "rbi-floating-rate-savings-bonds-2020",
    "description": "Sovereign taxable savings bond issued by the Reserve Bank of India with coupon rate reset semi-annually linked to National Savings Certificate (NSC) rate with a 35 bps markup.",
    "authority": "Reserve Bank of India / Government of India",
    "category": "Government Securities",
    "status": "OPEN",
    "sourceUrl": "https://www.rbi.org.in",
    "sourceAuthority": "Reserve Bank of India",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 1000,
    "expectedReturn": "Floating Rate (NSC Yield + 0.35% Spread, currently 8.05% p.a.)",
    "lockInPeriod": "7 Years",
    "riskLevel": "Low",
    "depositRules": "Issued in electronic Bond Ledger Account (BLA) format through receiving offices including SBI, Nationalised Banks, designated Private Banks, and RBI Retail Direct.",
    "returnMechanism": "Coupon paid semi-annually on January 1 and July 1 directly to investor bank account.",
    "taxTreatment": "Interest is fully taxable under Income from Other Sources. TDS is deducted at source under Section 193. Not eligible for Section 80C deduction.",
    "withdrawalRules": "7-year maturity. Premature redemption allowed only for senior citizens: 60-70 years after 6 years, 70-80 years after 5 years, 80+ years after 4 years.",
    "importantRules": [
      "Non-transferable and non-tradable in secondary market.",
      "Cannot be pledged as collateral for loans.",
      "Direct sovereign repayment obligation of the Government of India."
    ],
    "faqs": [
      {
        "question": "Is there any maximum ceiling on investment in RBI Floating Rate Bonds?",
        "answer": "No, there is no maximum investment limit; investors can invest in multiples of ₹1,000 without ceiling."
      },
      {
        "question": "How is the interest rate reset?",
        "answer": "The coupon resets on January 1 and July 1 every year, maintaining a fixed +0.35% spread over the prevailing NSC rate."
      }
    ]
  },
  {
    "id": "inv-sovereign-gold-bond",
    "title": "Sovereign Gold Bond Scheme (SGB)",
    "slug": "sovereign-gold-bond-scheme",
    "description": "Government securities denominated in grams of gold issued by the Reserve Bank of India on behalf of Government of India, offering gold capital appreciation plus 2.50% annual coupon.",
    "authority": "Reserve Bank of India / Ministry of Finance",
    "category": "Gold Bonds",
    "status": "ACTIVE",
    "sourceUrl": "https://www.rbi.org.in",
    "sourceAuthority": "Reserve Bank of India",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 1000,
    "maxInvestment": "4 kg for Individuals/HUFs per Fiscal Year",
    "expectedReturn": "2.50% p.a. Fixed Interest + Gold Price Capital Appreciation",
    "lockInPeriod": "8 Years (Exit option from 5th year)",
    "riskLevel": "Low",
    "depositRules": "Denominated in multiples of gram(s) of gold with minimum 1 gram. Primary issuances periodic; existing tranches tradable on NSE/BSE.",
    "returnMechanism": "Semi-annual interest coupon of 1.25% credited to bank account; principal redeemed in cash based on simple average closing price of 999 purity gold published by IBJA.",
    "taxTreatment": "Complete tax exemption on capital gains upon redemption at maturity (8 years) for individuals under Section 47(viic). Annual coupon interest is taxable.",
    "withdrawalRules": "Premature redemption allowed with RBI after 5th year on coupon payment dates, or anytime via stock exchange sale.",
    "loanFacilityRules": "Eligible to be used as collateral for loans from banks and financial institutions.",
    "importantRules": [
      "Zero storage cost and zero making charge deductions compared to physical gold.",
      "Joint holding permitted; limit applies to first holder.",
      "Backed by sovereign guarantee of Government of India."
    ],
    "faqs": [
      {
        "question": "Is capital gain on SGB tax-free if sold on stock exchange?",
        "answer": "Tax-exemption on capital gains applies strictly on redemption with RBI at maturity; exchange secondary sales attract listed capital gains taxation."
      }
    ]
  },
  {
    "id": "inv-lic-jeevan-labh",
    "title": "LIC Jeevan Labh Endowment Plan",
    "slug": "lic-jeevan-labh-endowment-plan",
    "description": "Non-linked, participating, individual, life assurance savings and endowment plan (Plan 936) offering financial support for family in case of demise and lump-sum maturity amount for surviving policyholders.",
    "authority": "Life Insurance Corporation of India (LIC)",
    "category": "Insurance Savings",
    "status": "ACTIVE",
    "sourceUrl": "https://licindia.in",
    "sourceAuthority": "Life Insurance Corporation of India",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 5000,
    "expectedReturn": "Guaranteed Basic Sum Assured + Simple Reversionary Bonuses + Final Additional Bonus",
    "lockInPeriod": "Term Dependent (16, 21, or 25 Years)",
    "riskLevel": "Low",
    "depositRules": "Limited premium payment options: 16-year policy (10-yr premium), 21-year policy (15-yr premium), or 25-year policy (16-yr premium). Minimum Basic Sum Assured ₹2,00,000.",
    "returnMechanism": "Lump sum maturity benefit consisting of Basic Sum Assured along with vested Simple Reversionary Bonuses and Final Additional Bonus.",
    "taxTreatment": "Premium paid eligible for Section 80C deduction. Death benefit and maturity proceeds exempt under Section 10(10D) subject to statutory premium limits.",
    "withdrawalRules": "Policy can be surrendered after payment of at least two full policy years premiums. Loan facility available after 2 full premium years.",
    "loanFacilityRules": "Loan available up to 90% of Surrender Value for in-force policies (80% for paid-up policies).",
    "importantRules": [
      "Backed by Government of India sovereign guarantee under Section 37 of the LIC Act, 1956.",
      "Entry age 8 to 59 years depending on chosen policy term."
    ],
    "faqs": [
      {
        "question": "What is the minimum age to enter LIC Jeevan Labh?",
        "answer": "The minimum entry age is 8 years completed; maximum entry age is 59 years for the 16-year term."
      }
    ]
  },
  {
    "id": "inv-nhai-tax-free-bonds",
    "title": "NHAI Tax-Free Secured Redeemable Bonds",
    "slug": "nhai-tax-free-secured-redeemable-bonds",
    "description": "AAA-rated tax-free secured non-convertible debentures issued by the National Highways Authority of India under CBDT notification to finance Bharatmala expressway development.",
    "authority": "National Highways Authority of India (NHAI) / CBDT",
    "category": "Tax-Free Bonds",
    "status": "ACTIVE",
    "sourceUrl": "https://nhai.gov.in",
    "sourceAuthority": "NHAI / CBDT",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 10000,
    "expectedReturn": "7.14% to 8.75% Tax-Free Annual Coupon",
    "lockInPeriod": "10 to 15 Years (Secondary Traded)",
    "riskLevel": "Low",
    "depositRules": "Primary public issues concluded; secondary market purchases available via stock exchanges (BSE/NSE) in demat mode.",
    "returnMechanism": "Annual interest coupon paid directly to registered bank account without any TDS deduction.",
    "taxTreatment": "Interest received is 100% exempt from income tax under Section 10(15)(iv)(h) of Income Tax Act. Capital gains on exchange sale taxable without indexation.",
    "withdrawalRules": "Redeemed by NHAI at par value upon maturity; liquidity prior to maturity available through stock exchange trading.",
    "importantRules": [
      "Secured by a pari passu charge on highway revenue and specific company assets.",
      "AAA credit rating by CRISIL, ICRA, CARE, and India Ratings."
    ],
    "faqs": [
      {
        "question": "Is TDS deducted on NHAI Tax-Free Bonds?",
        "answer": "No TDS is deducted on coupon payments as interest is statutorily tax-exempt."
      }
    ]
  },
  {
    "id": "inv-ireda-tax-free-bonds",
    "title": "IREDA Tax-Free Green Bonds",
    "slug": "ireda-tax-free-green-bonds",
    "description": "AAA-rated secured tax-free bonds issued by the Indian Renewable Energy Development Agency (IREDA) to finance clean energy, solar, wind, and hydro generation projects.",
    "authority": "Indian Renewable Energy Development Agency (IREDA) / MNRE",
    "category": "Tax-Free Bonds",
    "status": "ACTIVE",
    "sourceUrl": "https://www.ireda.in",
    "sourceAuthority": "IREDA / MNRE",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 10000,
    "expectedReturn": "7.28% to 8.56% Tax-Free Annual Coupon",
    "lockInPeriod": "10 to 15 Years (Secondary Traded)",
    "riskLevel": "Low",
    "depositRules": "Secondary market purchase on BSE and NSE debt segments in dematerialised format.",
    "returnMechanism": "Annual tax-free interest coupon credited to investor bank account via ECS/NEFT.",
    "taxTreatment": "Interest is completely tax-free under Section 10(15)(iv)(h). Does not need to be added to taxable total income for slab computation.",
    "withdrawalRules": "Tradable on stock exchanges; principal redeemed at face value by IREDA on final maturity date.",
    "importantRules": [
      "Govt of India enterprise under the Ministry of New and Renewable Energy (MNRE).",
      "Holdings maintained in demat accounts with NSDL and CDSL."
    ],
    "faqs": [
      {
        "question": "Can individuals buy IREDA Tax-Free bonds today?",
        "answer": "Yes, retail investors can purchase them on the secondary debt market through any registered stockbroker."
      }
    ]
  },
  {
    "id": "inv-nabard-capital-gain-bonds",
    "title": "NABARD 54EC Capital Gains Bonds",
    "slug": "nabard-54ec-capital-gains-bonds",
    "description": "Long-term specified assets issued by NABARD under Section 54EC of the Income Tax Act to claim 100% tax exemption on long-term capital gains arising from sale of real estate assets.",
    "authority": "National Bank for Agriculture and Rural Development (NABARD)",
    "category": "Capital Gains Bonds",
    "status": "OPEN",
    "sourceUrl": "https://www.nabard.org",
    "sourceAuthority": "NABARD / Ministry of Finance",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 10000,
    "maxInvestment": 5000000,
    "expectedReturn": "5.25% p.a. Fixed Annual Coupon",
    "lockInPeriod": "5 Years Strictly (Non-transferable)",
    "riskLevel": "Low",
    "depositRules": "Must be invested within 6 months from the date of transfer of original long-term capital asset (land or building). Minimum investment ₹10,000 (1 bond); maximum ₹50 lakh per financial year.",
    "returnMechanism": "Annual interest coupon credited on designated date; bullet principal repayment upon completion of 5-year lock-in.",
    "taxTreatment": "Exempts long-term capital gains from real estate under Section 54EC. Annual 5.25% interest coupon is taxable under Income from Other Sources; no TDS.",
    "withdrawalRules": "Strict 5-year lock-in. Non-transferable, non-negotiable, and cannot be pledged as security or collateral for loans.",
    "importantRules": [
      "Investment must be made within 6 months of capital asset transfer date.",
      "AAA credit rating with sovereign-level backing from apex development bank."
    ],
    "faqs": [
      {
        "question": "Can I sell or transfer NABARD 54EC bonds before 5 years?",
        "answer": "No. The bonds are strictly non-transferable and cannot be pledged or encashed before the 5-year lock-in."
      }
    ]
  }
];
