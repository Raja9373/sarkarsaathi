import { Investment } from '../../types';

export const reconstructedInvestmentsData: Investment[] = [
  {
    "id": "inv-mssc",
    "title": "Mahila Samman Savings Certificate (MSSC)",
    "slug": "mahila-samman-savings-certificate",
    "description": "Statutory small savings deposit scheme for women and girls notified by the Ministry of Finance under the Government Savings Promotion Act, offering guaranteed 7.5% quarterly compounded return with sovereign safety.",
    "authority": "Ministry of Finance / Department of Posts",
    "category": "Government Savings Schemes",
    "status": "OPEN",
    "sourceUrl": "https://www.indiapost.gov.in",
    "sourceAuthority": "Ministry of Finance / Department of Posts",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 1000,
    "maxInvestment": 200000,
    "expectedReturn": "7.5% p.a. Compounded Quarterly",
    "lockInPeriod": "2 Years",
    "riskLevel": "Low",
    "depositRules": "Can be opened by a woman for herself, or by a guardian on behalf of a minor girl. Deposit in multiples of ₹100 with minimum ₹1,000 and maximum ₹2 lakh per individual. Time gap of 3 months required between opening multiple accounts.",
    "returnMechanism": "Interest compounded quarterly at 7.5% p.a. and credited to account, paid out with principal at maturity on completion of 2 years.",
    "taxTreatment": "Interest is taxable under Income from Other Sources as per investor income tax slab. Subject to TDS rules under Section 194A. No Section 80C deduction.",
    "withdrawalRules": "Single partial withdrawal up to 40% of the eligible balance allowed after completion of 1 year from account opening date.",
    "prematureClosureRules": "Premature closure allowed on demise of account holder, on compassionate medical grounds (extreme illness), or after 6 months from account opening with interest penalty of 2% (i.e. 5.5% interest rate).",
    "importantRules": [
      "Available across all India Post branches and authorized public/private sector commercial banks.",
      "Sovereign guarantee by the Central Government of India under Government Savings Promotion Act."
    ],
    "faqs": [
      {
        "question": "Who is eligible to open a Mahila Samman Savings Certificate account?",
        "answer": "Any resident Indian woman or a guardian on behalf of a minor girl can open an MSSC account."
      },
      {
        "question": "What is the maximum investment cap in MSSC?",
        "answer": "The maximum aggregate deposit limit is ₹2,00,000 across all MSSC accounts held by an individual."
      }
    ]
  },
  {
    "id": "inv-posa",
    "title": "Post Office Savings Account (POSA)",
    "slug": "post-office-savings-account",
    "category": "Government Savings Schemes",
    "authority": "Department of Posts / Ministry of Finance",
    "description": "Sovereign retail liquid demand deposit account offered across India Post network with ATM, cheque, mobile banking, and Aadhaar-enabled payment services, backed by Government of India.",
    "status": "OPEN",
    "sourceUrl": "https://www.indiapost.gov.in",
    "sourceAuthority": "Department of Posts",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 500,
    "expectedReturn": "4.0% p.a.",
    "lockInPeriod": "None (Completely Liquid)",
    "riskLevel": "Low",
    "depositRules": "Minimum initial deposit of ₹500 to open account. No maximum ceiling on deposits. Minimum ongoing balance of ₹500 required.",
    "returnMechanism": "Interest calculated on minimum balance between 10th and end of each month at 4.0% p.a. and credited annually at the end of financial year.",
    "taxTreatment": "Interest earned up to ₹10,000 is tax-exempt under Section 80TTA. Additional exemption up to ₹3,500 (single account) / ₹7,000 (joint account) available under Section 10(15)(i).",
    "withdrawalRules": "Anytime liquid withdrawal via post office counters, India Post ATMs, IPPB digital app, and interoperable micro-ATMs.",
    "nominationRules": "Nomination is mandatory at the time of opening account across all India Post branches.",
    "importantRules": [
      "Direct sovereign backing of the Government of India on full account balance.",
      "Can be linked with India Post Payments Bank (IPPB) for seamless digital sweeps."
    ],
    "faqs": [
      {
        "question": "Is POSA covered under DICGC insurance?",
        "answer": "POSA is directly guaranteed by the Government of India without the ₹5 lakh limitation of DICGC."
      }
    ]
  },
  {
    "id": "inv-sgrn-5y",
    "title": "Sovereign Green Bond (SGrB) 5-Year",
    "slug": "sovereign-green-bond-5-year",
    "description": "5-year sovereign green dated security issued by the Reserve Bank of India on behalf of Government of India to finance public sector solar, wind, and green infrastructure projects under Framework for Sovereign Green Bonds.",
    "authority": "Reserve Bank of India (RBI) / Government of India",
    "category": "Government Securities (G-Secs)",
    "status": "ACTIVE",
    "sourceUrl": "https://rbidocs.rbi.org.in",
    "sourceAuthority": "Reserve Bank of India",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 10000,
    "expectedReturn": "Sovereign Semi-Annual Fixed Coupon",
    "lockInPeriod": "5 Years",
    "riskLevel": "Low",
    "depositRules": "Available through RBI Retail Direct portal for retail investors and NDS-OM electronic auction system for institutions in multiples of ₹10,000.",
    "returnMechanism": "Semi-annual fixed interest coupon credited directly to investor registered bank account; bullet redemption of principal at par at 5-year maturity.",
    "taxTreatment": "Coupon interest is taxable at investor income tax slab rate. No TDS on G-Secs under Section 193. Capital gains on secondary exchange sale taxed as per listed debt securities.",
    "withdrawalRules": "Tradable in secondary market on RBI Retail Direct, NDS-OM, NSE, and BSE debt market segments.",
    "importantRules": [
      "Proceeds earmarked exclusively for eligible green projects verified by CICERO and Green Finance Working Committee.",
      "Classified as eligible Statutory Liquidity Ratio (SLR) security for banking institutions."
    ],
    "faqs": [
      {
        "question": "What projects are funded by Sovereign Green Bonds?",
        "answer": "Proceeds finance renewable energy, energy efficiency, clean transportation, water/waste management, and climate change adaptation projects."
      }
    ]
  },
  {
    "id": "inv-sgrn-10y",
    "title": "Sovereign Green Bond (SGrB) 10-Year",
    "slug": "sovereign-green-bond-10-year",
    "description": "10-year benchmark sovereign green dated security issued by the Reserve Bank of India to provide long-term capital for national decarbonization and renewable energy initiatives.",
    "authority": "Reserve Bank of India (RBI) / Government of India",
    "category": "Government Securities (G-Secs)",
    "status": "ACTIVE",
    "sourceUrl": "https://rbidocs.rbi.org.in",
    "sourceAuthority": "Reserve Bank of India",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 10000,
    "expectedReturn": "Sovereign Benchmark Semi-Annual Green Coupon",
    "lockInPeriod": "10 Years",
    "riskLevel": "Low",
    "depositRules": "Issued via competitive and non-competitive bidding on RBI NDS-OM and RBI Retail Direct platform.",
    "returnMechanism": "Fixed semi-annual coupon payments directly credited via RBI payment gateway to investor bank account.",
    "taxTreatment": "Interest is added to taxable income under Income from Other Sources. No TDS deducted.",
    "withdrawalRules": "Secondary market liquidity on NDS-OM and stock exchanges; principal paid at maturity by RBI.",
    "importantRules": [
      "Direct sovereign repayment obligation with zero default risk.",
      "Eligible as collateral for market repo operations with RBI."
    ],
    "faqs": [
      {
        "question": "Can individual retail investors buy 10-year Green Bonds?",
        "answer": "Yes, retail investors can purchase through non-competitive bidding on RBI Retail Direct with zero commission."
      }
    ]
  },
  {
    "id": "inv-sgrn-40y",
    "title": "Sovereign Green Bond (SGrB) 40-Year",
    "slug": "sovereign-green-bond-40-year",
    "description": "Ultra long-term 40-year sovereign green dated security issued by the Government of India through RBI to finance multi-decade environmental and sustainable public infrastructure projects.",
    "authority": "Reserve Bank of India (RBI) / Government of India",
    "category": "Government Securities (G-Secs)",
    "status": "ACTIVE",
    "sourceUrl": "https://rbidocs.rbi.org.in",
    "sourceAuthority": "Reserve Bank of India",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 10000,
    "expectedReturn": "Ultra Long-Term Fixed Sovereign Green Coupon",
    "lockInPeriod": "40 Years",
    "riskLevel": "Low",
    "depositRules": "Electronic auction by RBI; held in demat mode or Retail Direct Gilt Account (RDG).",
    "returnMechanism": "Fixed coupon paid semi-annually over 40-year life of the bond; principal repaid at face value on final maturity.",
    "taxTreatment": "Interest taxable at marginal rate. Subject to standard long-term capital gains rules on exchange trading.",
    "withdrawalRules": "Secondary market exit via RBI Retail Direct / NDS-OM trading platform.",
    "importantRules": [
      "Designed for long-term insurance funds, pension trusts, provident funds, and inter-generational investors.",
      "Zero credit risk backed by sovereign full faith and credit."
    ],
    "faqs": [
      {
        "question": "What is the benefit of a 40-year green bond?",
        "answer": "It locks in a guaranteed sovereign yield for 4 decades while funding long-term sustainable ecological projects."
      }
    ]
  },
  {
    "id": "inv-gsec-7y",
    "title": "7-Year Benchmark Government of India Dated Security (G-Sec)",
    "slug": "7-year-benchmark-gsec",
    "description": "Medium-tenor benchmark sovereign bond issued by the Reserve Bank of India on behalf of Government of India to finance budgeted capital expenditures.",
    "authority": "Reserve Bank of India (RBI) / Government of India",
    "category": "Government Securities (G-Secs)",
    "status": "ACTIVE",
    "sourceUrl": "https://rbidocs.rbi.org.in",
    "sourceAuthority": "Reserve Bank of India",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 10000,
    "expectedReturn": "7-Year Benchmark Sovereign Fixed Coupon",
    "lockInPeriod": "7 Years (Secondary Traded)",
    "riskLevel": "Low",
    "depositRules": "Issued periodically as per RBI issuance calendar via non-competitive bidding on RBI Retail Direct (minimum ₹10,000) and primary auctions.",
    "returnMechanism": "Semi-annual fixed interest coupon credited directly to bank account; principal repaid at par upon 7-year maturity.",
    "taxTreatment": "Interest is fully taxable as per investor income slab. No TDS deducted under Section 193.",
    "withdrawalRules": "Liquid secondary market trading on NDS-OM and major stock exchanges.",
    "importantRules": [
      "Zero credit risk backed by sovereign taxing and monetary authority.",
      "Highly liquid intermediate tenor benchmark on the Indian sovereign yield curve."
    ],
    "faqs": [
      {
        "question": "Are 7-year G-Secs eligible for banking SLR?",
        "answer": "Yes, all Central Government Dated Securities qualify as eligible Statutory Liquidity Ratio (SLR) assets."
      }
    ]
  },
  {
    "id": "inv-gsec-14y",
    "title": "14-Year Benchmark Government of India Dated Security (G-Sec)",
    "slug": "14-year-benchmark-gsec",
    "description": "Long-term benchmark sovereign dated security issued by the Government of India through RBI electronic auctions for institutional liability matching and retail wealth preservation.",
    "authority": "Reserve Bank of India (RBI) / Government of India",
    "category": "Government Securities (G-Secs)",
    "status": "ACTIVE",
    "sourceUrl": "https://rbidocs.rbi.org.in",
    "sourceAuthority": "Reserve Bank of India",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 10000,
    "expectedReturn": "14-Year Sovereign Fixed Coupon",
    "lockInPeriod": "14 Years (Secondary Traded)",
    "riskLevel": "Low",
    "depositRules": "Bidding via RBI Retail Direct portal and NDS-OM primary auctions in multiples of ₹10,000 face value.",
    "returnMechanism": "Fixed semi-annual coupon payments; bullet redemption on maturity date.",
    "taxTreatment": "Taxable under Income from Other Sources; no TDS at source.",
    "withdrawalRules": "Secondary market sale available via stock exchange debt segment and NDS-OM.",
    "importantRules": [
      "Benchmark long-term sovereign bond with substantial daily trading volume on NDS-OM.",
      "Guaranteed repayment by Central Government."
    ],
    "faqs": [
      {
        "question": "Can NRIs invest in 14-Year G-Secs?",
        "answer": "Yes, NRIs can invest through the Fully Accessible Route (FAR) or NRE/NRO accounts via RBI Retail Direct."
      }
    ]
  },
  {
    "id": "inv-gsec-40y",
    "title": "40-Year Ultra Long-Term Government Security (G-Sec)",
    "slug": "40-year-ultra-long-term-gsec",
    "description": "Ultra long-duration sovereign fixed income security issued by the Government of India to anchor long-term retirement liabilities, provident funds, and pension portfolios.",
    "authority": "Reserve Bank of India (RBI) / Government of India",
    "category": "Government Securities (G-Secs)",
    "status": "ACTIVE",
    "sourceUrl": "https://rbidocs.rbi.org.in",
    "sourceAuthority": "Reserve Bank of India",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 10000,
    "expectedReturn": "Long-Term Sovereign Fixed Coupon",
    "lockInPeriod": "40 Years",
    "riskLevel": "Low",
    "depositRules": "Subscribed through RBI Retail Direct portal or primary dealer auctions.",
    "returnMechanism": "Fixed semi-annual interest payment directly into bank account; face value repaid at 40-year maturity.",
    "taxTreatment": "Interest taxable at marginal income tax slab. Capital gains on secondary market transfer taxed under listed securities provisions.",
    "withdrawalRules": "Secondary market trading on NDS-OM platform.",
    "importantRules": [
      "Zero credit risk; highest duration risk / interest rate sensitivity among sovereign instruments.",
      "Favored by life insurance companies and pension funds for asset-liability matching."
    ],
    "faqs": [
      {
        "question": "What is duration risk in 40-Year G-Secs?",
        "answer": "Because of the long tenor, secondary market bond prices fluctuate significantly in response to RBI policy rate changes."
      }
    ]
  },
  {
    "id": "inv-gsec-50y",
    "title": "50-Year Ultra Long-Term Government Security (G-Sec)",
    "slug": "50-year-ultra-long-term-gsec",
    "description": "50-year ultra long-term sovereign dated security introduced by the Government of India in 2023 to extend the sovereign yield curve and finance monumental infrastructure development.",
    "authority": "Reserve Bank of India (RBI) / Government of India",
    "category": "Government Securities (G-Secs)",
    "status": "ACTIVE",
    "sourceUrl": "https://rbidocs.rbi.org.in",
    "sourceAuthority": "Reserve Bank of India",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 10000,
    "expectedReturn": "50-Year Sovereign Fixed Coupon",
    "lockInPeriod": "50 Years",
    "riskLevel": "Low",
    "depositRules": "Issued via RBI electronic auctions; held in Retail Direct Gilt accounts or demat.",
    "returnMechanism": "Fixed semi-annual interest payment credited to linked bank account; principal repaid at face value after 50 years.",
    "taxTreatment": "Interest taxable under Income from Other Sources; no TDS.",
    "withdrawalRules": "Liquidity available on NDS-OM and stock exchange debt segments.",
    "importantRules": [
      "India longest sovereign bond tenor, placing India alongside select major global sovereign debt issuers.",
      "Zero default risk backed by full sovereign credit of Republic of India."
    ],
    "faqs": [
      {
        "question": "When was the 50-year G-Sec first issued by India?",
        "answer": "The Government of India first introduced the 50-year dated security in the second half of the FY 2023-24 borrowing calendar."
      }
    ]
  },
  {
    "id": "inv-omc-oil-bonds",
    "title": "Special Oil Marketing Companies (OMC) Government Bonds",
    "slug": "special-omc-government-oil-bonds",
    "description": "Special dated sovereign bonds issued by the Government of India to state-owned oil marketing companies (IOCL, BPCL, HPCL) carrying full sovereign backing and traded on secondary exchange debt markets.",
    "authority": "Government of India / Reserve Bank of India (RBI)",
    "category": "Government Securities (G-Secs)",
    "status": "HISTORICAL / TRADED",
    "sourceUrl": "https://www.rbi.org.in",
    "sourceAuthority": "Reserve Bank of India / Ministry of Petroleum",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 10000,
    "expectedReturn": "Fixed Semi-Annual Sovereign Coupon (Series specific)",
    "lockInPeriod": "Series Maturity (Secondary Traded)",
    "riskLevel": "Low",
    "depositRules": "Primary issuances discontinued; secondary market trading on NSE and BSE debt segments in demat mode.",
    "returnMechanism": "Semi-annual interest coupon paid directly to bondholders; principal redeemed at par by Government of India at maturity.",
    "taxTreatment": "Interest income is fully taxable at applicable slab rates. No TDS deducted under Section 193.",
    "withdrawalRules": "Tradable on stock exchange secondary market until final redemption by Central Government.",
    "importantRules": [
      "Carry sovereign guarantee of the Government of India.",
      "Eligible as non-SLR investments for institutions."
    ],
    "faqs": [
      {
        "question": "Are fresh Oil Bonds being issued by the Government?",
        "answer": "No. The Government discontinued issuing new oil bonds, but existing historical series continue to be serviced and redeemed at maturity."
      }
    ]
  },
  {
    "id": "inv-fertilizer-bonds",
    "title": "Special Fertilizer Companies Government Bonds",
    "slug": "special-fertilizer-government-bonds",
    "description": "Special dated sovereign bonds issued by the Government of India in lieu of cash fertilizer subsidies to fertilizer manufacturing companies, carrying full sovereign backing and secondary market trading.",
    "authority": "Government of India / Reserve Bank of India (RBI)",
    "category": "Government Securities (G-Secs)",
    "status": "HISTORICAL / TRADED",
    "sourceUrl": "https://www.rbi.org.in",
    "sourceAuthority": "Reserve Bank of India / Ministry of Chemicals and Fertilizers",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 10000,
    "expectedReturn": "Fixed Semi-Annual Sovereign Coupon (Series Specific)",
    "lockInPeriod": "Series Maturity (Secondary Traded)",
    "riskLevel": "Low",
    "depositRules": "Fresh primary issuances discontinued; secondary market purchases available on NSE/BSE wholesale and retail debt segments in demat form.",
    "returnMechanism": "Fixed semi-annual interest coupon credited to bank account; principal repaid at par by the Government of India upon scheduled maturity.",
    "taxTreatment": "Interest income is fully taxable under Income from Other Sources at applicable slab rates. No TDS deducted under Section 193 for government securities.",
    "withdrawalRules": "Tradable on stock exchange secondary debt market until final maturity and redemption.",
    "importantRules": [
      "Direct sovereign repayment obligation of the Government of India.",
      "Eligible as non-SLR investments for institutions; primary issuances historically closed."
    ],
    "faqs": [
      {
        "question": "Are Fertilizer Bonds currently issued by the Government?",
        "answer": "No, primary issuances of special fertilizer subsidy bonds were discontinued. Existing series remain active in secondary markets until maturity."
      }
    ]
  },
  {
    "id": "inv-sdl-maharashtra",
    "title": "Maharashtra State Development Loan (SDL)",
    "slug": "maharashtra-state-development-loan",
    "description": "State government dated securities issued by the Government of Maharashtra through RBI auctions to fund state budgetary capital expenditure and infrastructure.",
    "authority": "Government of Maharashtra / Reserve Bank of India",
    "category": "State Development Loans (SDLs)",
    "status": "ACTIVE",
    "sourceUrl": "https://www.rbi.org.in",
    "sourceAuthority": "Reserve Bank of India / Finance Department, Maharashtra",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 10000,
    "expectedReturn": "Auction-Determined Semi-Annual State Coupon (Varies by Tranche)",
    "lockInPeriod": "Tenure Specific (Typically 10 Years; Secondary Traded)",
    "riskLevel": "Low",
    "depositRules": "Issued via periodic RBI electronic auctions on NDS-OM and accessible to retail investors via RBI Retail Direct in multiples of ₹10,000.",
    "returnMechanism": "Semi-annual fixed interest coupon credited directly to registered bank account; principal repaid at par on maturity date.",
    "taxTreatment": "Coupon interest is taxable at investor slab rate under Income from Other Sources. No TDS under Section 193. Capital gains on secondary transfer taxed as per listed debt rules.",
    "withdrawalRules": "Tradable on NDS-OM and stock exchange debt segments; redeemed by RBI on behalf of state government at maturity.",
    "importantRules": [
      "Automatic debit mechanism through RBI ensures timely servicing of principal and interest.",
      "Qualifies as eligible Statutory Liquidity Ratio (SLR) security for banking institutions."
    ],
    "faqs": [
      {
        "question": "What is the sovereign backing on Maharashtra SDLs?",
        "answer": "SDLs are serviced through RBI accounts with an institutional mechanism guaranteeing timely debt servicing."
      }
    ]
  },
  {
    "id": "inv-sdl-gujarat",
    "title": "Gujarat State Development Loan (SDL)",
    "slug": "gujarat-state-development-loan",
    "description": "State government dated securities issued by the Finance Department, Government of Gujarat, managed and auctioned by the Reserve Bank of India.",
    "authority": "Government of Gujarat / Reserve Bank of India",
    "category": "State Development Loans (SDLs)",
    "status": "ACTIVE",
    "sourceUrl": "https://www.rbi.org.in",
    "sourceAuthority": "Reserve Bank of India / Finance Department, Gujarat",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 10000,
    "expectedReturn": "Auction-Determined Semi-Annual Coupon (Varies by Tranche)",
    "lockInPeriod": "Tranche Specific (Typically 5 to 15 Years)",
    "riskLevel": "Low",
    "depositRules": "Issued through RBI competitive and non-competitive auctions as per quarterly SDL borrowing calendars.",
    "returnMechanism": "Fixed semi-annual interest credited via electronic clearing; principal repaid at face value upon maturity.",
    "taxTreatment": "Interest is added to taxable income under Income from Other Sources. No TDS under Section 193.",
    "withdrawalRules": "Secondary market liquidity on RBI Retail Direct, NDS-OM, BSE, and NSE debt platforms.",
    "importantRules": [
      "Represents a sovereign-equivalent obligation with zero credit loss history across Indian states.",
      "Eligible as collateral for repo transactions with RBI."
    ],
    "faqs": [
      {
        "question": "How do retail investors purchase Gujarat SDLs?",
        "answer": "Retail investors can participate via non-competitive bidding on the RBI Retail Direct portal without brokerage."
      }
    ]
  },
  {
    "id": "inv-sdl-tamilnadu",
    "title": "Tamil Nadu State Development Loan (SDL)",
    "slug": "tamil-nadu-state-development-loan",
    "description": "State government dated securities issued by the Government of Tamil Nadu via RBI market borrowings to finance public infrastructure and socio-economic programs.",
    "authority": "Government of Tamil Nadu / Reserve Bank of India",
    "category": "State Development Loans (SDLs)",
    "status": "ACTIVE",
    "sourceUrl": "https://www.rbi.org.in",
    "sourceAuthority": "Reserve Bank of India / Finance Department, Tamil Nadu",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 10000,
    "expectedReturn": "Market-Determined Semi-Annual Yield (Tranche Specific)",
    "lockInPeriod": "Tenure Dependent (Typically 10, 15, or 20 Years)",
    "riskLevel": "Low",
    "depositRules": "Subscribed through weekly RBI SDL auctions via primary dealers, commercial banks, or RBI Retail Direct.",
    "returnMechanism": "Semi-annual interest coupon credited to investor bank account; bullet redemption at maturity.",
    "taxTreatment": "Interest income fully taxable at marginal rate. No TDS at source.",
    "withdrawalRules": "Tradable on secondary debt markets across exchanges and NDS-OM platform.",
    "importantRules": [
      "Qualifies as SLR investment for banks and eligible investment for provident/pension funds.",
      "Debt servicing managed under the Public Debt Act by RBI."
    ],
    "faqs": [
      {
        "question": "How often does Tamil Nadu issue SDLs?",
        "answer": "Issuances follow the indicative quarterly calendar of market borrowings published by RBI."
      }
    ]
  },
  {
    "id": "inv-sdl-karnataka",
    "title": "Karnataka State Development Loan (SDL)",
    "slug": "karnataka-state-development-loan",
    "description": "Long-term government bonds issued by the Government of Karnataka through RBI auctions to fund state development projects and capital outlays.",
    "authority": "Government of Karnataka / Reserve Bank of India",
    "category": "State Development Loans (SDLs)",
    "status": "ACTIVE",
    "sourceUrl": "https://www.rbi.org.in",
    "sourceAuthority": "Reserve Bank of India / Finance Department, Karnataka",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 10000,
    "expectedReturn": "Tranche Specific Semi-Annual Fixed Coupon",
    "lockInPeriod": "Tenure Specific (Typically 10 to 30 Years)",
    "riskLevel": "Low",
    "depositRules": "Available in multiples of ₹10,000 through primary auctions and secondary market transactions.",
    "returnMechanism": "Fixed semi-annual coupon payments credited directly; face value refunded on scheduled maturity date.",
    "taxTreatment": "Subject to regular income tax as per applicable slab. No TDS applies.",
    "withdrawalRules": "Tradable in secondary market on NDS-OM and stock exchange debt segments.",
    "importantRules": [
      "High liquidity on secondary market due to strong state fiscal performance.",
      "Sovereign backing via RBI debt management framework."
    ],
    "faqs": [
      {
        "question": "Can individuals hold Karnataka SDLs in demat format?",
        "answer": "Yes, SDLs can be held in a regular demat account with NSDL/CDSL or in a Retail Direct Gilt Account with RBI."
      }
    ]
  },
  {
    "id": "inv-sdl-up",
    "title": "Uttar Pradesh State Development Loan (SDL)",
    "slug": "uttar-pradesh-state-development-loan",
    "description": "Government dated securities issued by the Finance Department of Uttar Pradesh via RBI to finance state infrastructure, highways, and industrial corridors.",
    "authority": "Government of Uttar Pradesh / Reserve Bank of India",
    "category": "State Development Loans (SDLs)",
    "status": "ACTIVE",
    "sourceUrl": "https://www.rbi.org.in",
    "sourceAuthority": "Reserve Bank of India / Finance Department, Uttar Pradesh",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 10000,
    "expectedReturn": "Auction-Determined Semi-Annual Coupon",
    "lockInPeriod": "Tenure Specific (Typically 10 to 25 Years)",
    "riskLevel": "Low",
    "depositRules": "Offered during scheduled RBI state loan auctions in lots of ₹10,000.",
    "returnMechanism": "Semi-annual interest coupon credited to investor bank account; principal repaid at maturity.",
    "taxTreatment": "Interest taxable under Income from Other Sources; exempt from TDS under Section 193.",
    "withdrawalRules": "Tradable on stock exchanges and NDS-OM debt segment.",
    "importantRules": [
      "Eligible security for banking Statutory Liquidity Ratio (SLR) compliance.",
      "Supported by Central devolution debit safeguards managed by RBI."
    ],
    "faqs": [
      {
        "question": "What is the minimum lot size for UP SDL auctions?",
        "answer": "For non-competitive retail bidding on RBI Retail Direct, the minimum lot size is ₹10,000."
      }
    ]
  },
  {
    "id": "inv-sdl-andhra",
    "title": "Andhra Pradesh State Development Loan (SDL)",
    "slug": "andhra-pradesh-state-development-loan",
    "description": "State government dated bonds issued by the Government of Andhra Pradesh through RBI market borrowing programs for state developmental initiatives.",
    "authority": "Government of Andhra Pradesh / Reserve Bank of India",
    "category": "State Development Loans (SDLs)",
    "status": "ACTIVE",
    "sourceUrl": "https://www.rbi.org.in",
    "sourceAuthority": "Reserve Bank of India / Finance Department, Andhra Pradesh",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 10000,
    "expectedReturn": "Auction-Determined Fixed Semi-Annual Coupon",
    "lockInPeriod": "Tenure Specific (Typically 10 to 20 Years)",
    "riskLevel": "Low",
    "depositRules": "Bidding through RBI Retail Direct (retail) and NDS-OM (institutional) in units of ₹10,000.",
    "returnMechanism": "Semi-annual interest coupon credited electronically; bullet redemption of principal upon maturity.",
    "taxTreatment": "Interest fully taxable at slab rate; no TDS on government securities.",
    "withdrawalRules": "Secondary market trading available on NDS-OM and stock exchange debt desks.",
    "importantRules": [
      "Institutional repayment safety backed by RBI statutory fund management mechanisms.",
      "Qualifies for SLR compliance for banks."
    ],
    "faqs": [
      {
        "question": "Are Andhra Pradesh SDLs tradeable before maturity?",
        "answer": "Yes, investors can sell SDLs on the secondary market via stock exchanges or RBI Retail Direct."
      }
    ]
  },
  {
    "id": "inv-sdl-rajasthan",
    "title": "Rajasthan State Development Loan (SDL)",
    "slug": "rajasthan-state-development-loan",
    "description": "State government bonds issued by the Government of Rajasthan through RBI auctions to fund water, power, and socio-economic infrastructure.",
    "authority": "Government of Rajasthan / Reserve Bank of India",
    "category": "State Development Loans (SDLs)",
    "status": "ACTIVE",
    "sourceUrl": "https://www.rbi.org.in",
    "sourceAuthority": "Reserve Bank of India / Finance Department, Rajasthan",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 10000,
    "expectedReturn": "Auction-Determined Semi-Annual Coupon (Varies by Series)",
    "lockInPeriod": "Tenure Dependent (Typically 10 Years)",
    "riskLevel": "Low",
    "depositRules": "Issued via RBI electronic auctions per borrowing calendar; minimum lot ₹10,000.",
    "returnMechanism": "Fixed semi-annual interest payment; face value returned at scheduled maturity.",
    "taxTreatment": "Taxable under Income from Other Sources; no TDS deducted.",
    "withdrawalRules": "Tradable on NDS-OM and exchange debt markets.",
    "importantRules": [
      "Represents a sovereign-quality credit with SLR qualification for commercial banks.",
      "Monitored and serviced through the Reserve Bank of India."
    ],
    "faqs": [
      {
        "question": "How does the yield on Rajasthan SDLs compare to Central G-Secs?",
        "answer": "SDLs typically trade at a modest yield spread (25-60 bps) over corresponding central government securities."
      }
    ]
  },
  {
    "id": "inv-sdl-westbengal",
    "title": "West Bengal State Development Loan (SDL)",
    "slug": "west-bengal-state-development-loan",
    "description": "State government dated securities issued by the Government of West Bengal through RBI to finance welfare, irrigation, and capital infrastructure projects.",
    "authority": "Government of West Bengal / Reserve Bank of India",
    "category": "State Development Loans (SDLs)",
    "status": "ACTIVE",
    "sourceUrl": "https://www.rbi.org.in",
    "sourceAuthority": "Reserve Bank of India / Finance Department, West Bengal",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 10000,
    "expectedReturn": "Auction-Determined Fixed Coupon",
    "lockInPeriod": "Tenure Specific (Typically 10 to 15 Years)",
    "riskLevel": "Low",
    "depositRules": "Subscribed through RBI Retail Direct or primary dealer networks in units of ₹10,000.",
    "returnMechanism": "Semi-annual coupon payout directly to bank account; principal repaid at par upon maturity.",
    "taxTreatment": "Taxable at slab rates; exempt from TDS under Section 193.",
    "withdrawalRules": "Secondary market exit via stock exchanges and NDS-OM platform.",
    "importantRules": [
      "Eligible SLR security for institutional compliance.",
      "Direct servicing by RBI under Public Debt framework."
    ],
    "faqs": [
      {
        "question": "Is there any credit rating assigned to West Bengal SDLs?",
        "answer": "RBI-administered SDLs are treated as sovereign-equivalent risk assets and are not assigned individual credit ratings by rating agencies."
      }
    ]
  },
  {
    "id": "inv-sdl-telangana",
    "title": "Telangana State Development Loan (SDL)",
    "slug": "telangana-state-development-loan",
    "description": "Bonds issued by the Finance Department, Government of Telangana, auctioned and managed by the Reserve Bank of India for state capital development.",
    "authority": "Government of Telangana / Reserve Bank of India",
    "category": "State Development Loans (SDLs)",
    "status": "ACTIVE",
    "sourceUrl": "https://www.rbi.org.in",
    "sourceAuthority": "Reserve Bank of India / Finance Department, Telangana",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 10000,
    "expectedReturn": "Auction-Determined Semi-Annual Coupon",
    "lockInPeriod": "Tenure Dependent (Typically 10 to 30 Years)",
    "riskLevel": "Low",
    "depositRules": "Available in multiples of ₹10,000 through RBI primary auctions and secondary trading.",
    "returnMechanism": "Fixed semi-annual interest payment credited to linked account; principal redeemed at maturity.",
    "taxTreatment": "Coupon interest taxable at investor marginal slab. No TDS applies.",
    "withdrawalRules": "Secondary market trading on BSE, NSE, and NDS-OM.",
    "importantRules": [
      "High institutional demand with active secondary market participation.",
      "SLR eligible asset for banks."
    ],
    "faqs": [
      {
        "question": "Can Telangana SDLs be pledged for borrowing?",
        "answer": "Yes, eligible institutions and investors can use SDLs as collateral for market repo operations."
      }
    ]
  },
  {
    "id": "inv-sdl-kerala",
    "title": "Kerala State Development Loan (SDL)",
    "slug": "kerala-state-development-loan",
    "description": "Government dated securities issued by the Government of Kerala through RBI auctions to finance state social infrastructure and developmental outlays.",
    "authority": "Government of Kerala / Reserve Bank of India",
    "category": "State Development Loans (SDLs)",
    "status": "ACTIVE",
    "sourceUrl": "https://www.rbi.org.in",
    "sourceAuthority": "Reserve Bank of India / Finance Department, Kerala",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 10000,
    "expectedReturn": "Tranche Specific Semi-Annual Coupon Yield",
    "lockInPeriod": "Tenure Specific (Typically 10 to 20 Years)",
    "riskLevel": "Low",
    "depositRules": "Offered through regular RBI borrowing auctions in units of ₹10,000.",
    "returnMechanism": "Semi-annual interest coupon credited electronically; face value repaid at par at maturity.",
    "taxTreatment": "Interest is added to taxable income under Income from Other Sources; no TDS.",
    "withdrawalRules": "Secondary market liquidity on NDS-OM and stock exchanges.",
    "importantRules": [
      "Administered under Government Securities Regulations by RBI.",
      "SLR status for commercial banks."
    ],
    "faqs": [
      {
        "question": "What happens to Kerala SDL principal upon maturity?",
        "answer": "RBI automatically credits the face value of the security into the investor registered bank account."
      }
    ]
  },
  {
    "id": "inv-sdl-mp",
    "title": "Madhya Pradesh State Development Loan (SDL)",
    "slug": "madhya-pradesh-state-development-loan",
    "description": "Dated securities issued by the Finance Department of Madhya Pradesh through RBI auctions to fund state capital expenditures.",
    "authority": "Government of Madhya Pradesh / Reserve Bank of India",
    "category": "State Development Loans (SDLs)",
    "status": "ACTIVE",
    "sourceUrl": "https://www.rbi.org.in",
    "sourceAuthority": "Reserve Bank of India / Finance Department, Madhya Pradesh",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 10000,
    "expectedReturn": "Market-Determined Semi-Annual Coupon",
    "lockInPeriod": "Tenure Specific (Typically 10 to 20 Years)",
    "riskLevel": "Low",
    "depositRules": "Issued via RBI electronic auction system in lots of ₹10,000.",
    "returnMechanism": "Fixed semi-annual interest credited to bank account; bullet redemption on maturity date.",
    "taxTreatment": "Taxable at marginal slab rates under Income from Other Sources; no TDS deducted.",
    "withdrawalRules": "Secondary market exit via stock exchanges and NDS-OM.",
    "importantRules": [
      "Represents zero credit loss risk through RBI debt servicing safeguards.",
      "Eligible as SLR asset for banking entities."
    ],
    "faqs": [
      {
        "question": "Who manages the register of holders for MP SDLs?",
        "answer": "The Public Debt Office (PDO) of the Reserve Bank of India maintains the master ledger of holders."
      }
    ]
  },
  {
    "id": "inv-sdl-haryana",
    "title": "Haryana State Development Loan (SDL)",
    "slug": "haryana-state-development-loan",
    "description": "State government dated bonds issued by the Government of Haryana through RBI borrowing programs to support infrastructure development.",
    "authority": "Government of Haryana / Reserve Bank of India",
    "category": "State Development Loans (SDLs)",
    "status": "ACTIVE",
    "sourceUrl": "https://www.rbi.org.in",
    "sourceAuthority": "Reserve Bank of India / Finance Department, Haryana",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 10000,
    "expectedReturn": "Auction-Determined Fixed Coupon",
    "lockInPeriod": "Tenure Specific (Typically 10 to 15 Years)",
    "riskLevel": "Low",
    "depositRules": "Purchased via RBI Retail Direct portal or primary dealers during scheduled auctions.",
    "returnMechanism": "Semi-annual coupon payout; face value repaid at scheduled maturity.",
    "taxTreatment": "Taxable under Income from Other Sources; no TDS at source.",
    "withdrawalRules": "Tradable on stock exchange secondary market debt segments.",
    "importantRules": [
      "Strong fiscal indicators supporting high liquidity in secondary markets.",
      "Full sovereign debt management mechanism via RBI."
    ],
    "faqs": [
      {
        "question": "Is nomination allowed on Haryana SDLs?",
        "answer": "Yes, nomination facility is available through the demat depository or RBI Retail Direct account."
      }
    ]
  },
  {
    "id": "inv-sdl-punjab",
    "title": "Punjab State Development Loan (SDL)",
    "slug": "punjab-state-development-loan",
    "description": "Dated securities issued by the Government of Punjab through RBI electronic auctions to finance state development and capital works.",
    "authority": "Government of Punjab / Reserve Bank of India",
    "category": "State Development Loans (SDLs)",
    "status": "ACTIVE",
    "sourceUrl": "https://www.rbi.org.in",
    "sourceAuthority": "Reserve Bank of India / Finance Department, Punjab",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 10000,
    "expectedReturn": "Auction-Determined Semi-Annual Coupon",
    "lockInPeriod": "Tenure Specific (Typically 10 Years)",
    "riskLevel": "Low",
    "depositRules": "Issued in multiples of ₹10,000 through RBI auction calendars.",
    "returnMechanism": "Fixed semi-annual interest coupon payments; principal repaid at face value upon maturity.",
    "taxTreatment": "Fully taxable at investor slab rate; no TDS under Section 193.",
    "withdrawalRules": "Tradable on NDS-OM platform and stock exchange debt desks.",
    "importantRules": [
      "Direct debt servicing through RBI ensuring timely coupon and principal payment.",
      "Qualifies as eligible SLR investment for financial institutions."
    ],
    "faqs": [
      {
        "question": "What is the frequency of coupon payouts on Punjab SDLs?",
        "answer": "Coupons are paid semi-annually on designated dates determined at the time of auction."
      }
    ]
  },
  {
    "id": "inv-sdl-odisha",
    "title": "Odisha State Development Loan (SDL)",
    "slug": "odisha-state-development-loan",
    "description": "Dated securities issued by the Finance Department, Government of Odisha, through the Reserve Bank of India to fund state capital programs.",
    "authority": "Government of Odisha / Reserve Bank of India",
    "category": "State Development Loans (SDLs)",
    "status": "ACTIVE",
    "sourceUrl": "https://www.rbi.org.in",
    "sourceAuthority": "Reserve Bank of India / Finance Department, Odisha",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 10000,
    "expectedReturn": "Market-Determined Semi-Annual Coupon",
    "lockInPeriod": "Tenure Specific (Typically 10 to 15 Years)",
    "riskLevel": "Low",
    "depositRules": "Offered in primary auctions on RBI NDS-OM and accessible via RBI Retail Direct in lots of ₹10,000.",
    "returnMechanism": "Semi-annual interest coupon credited electronically; bullet redemption of face value at maturity.",
    "taxTreatment": "Taxable under Income from Other Sources; no TDS deducted.",
    "withdrawalRules": "Tradable on secondary debt markets across exchanges and NDS-OM.",
    "importantRules": [
      "Low debt-to-GSDP fiscal profile supporting strong market confidence.",
      "Sovereign-backed repayment mechanism through RBI."
    ],
    "faqs": [
      {
        "question": "Can NRIs buy Odisha SDLs?",
        "answer": "Yes, NRIs can invest in SDLs on a repatriable/non-repatriable basis through NRE/NRO accounts."
      }
    ]
  },
  {
    "id": "inv-sdl-bihar",
    "title": "Bihar State Development Loan (SDL)",
    "slug": "bihar-state-development-loan",
    "description": "Government dated securities issued by the Government of Bihar through RBI market borrowing auctions to finance state infrastructure and welfare projects.",
    "authority": "Government of Bihar / Reserve Bank of India",
    "category": "State Development Loans (SDLs)",
    "status": "ACTIVE",
    "sourceUrl": "https://www.rbi.org.in",
    "sourceAuthority": "Reserve Bank of India / Finance Department, Bihar",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 10000,
    "expectedReturn": "Auction-Determined Fixed Semi-Annual Coupon",
    "lockInPeriod": "Tenure Specific (Typically 10 to 15 Years)",
    "riskLevel": "Low",
    "depositRules": "Subscribed in lots of ₹10,000 during scheduled RBI state loan auctions.",
    "returnMechanism": "Fixed semi-annual interest credited to registered bank account; bullet redemption at maturity.",
    "taxTreatment": "Taxable at applicable slab rates; exempt from TDS under Section 193.",
    "withdrawalRules": "Tradable on NDS-OM platform and exchange wholesale debt segments.",
    "importantRules": [
      "Backed by RBI debt servicing mechanism with zero default history.",
      "SLR eligible security for banking compliance."
    ],
    "faqs": [
      {
        "question": "Are Bihar SDLs guaranteed by the Central Government?",
        "answer": "SDLs are state government liabilities serviced by RBI, with institutional protections making them sovereign-equivalent debt."
      }
    ]
  },
  {
    "id": "inv-sdl-assam",
    "title": "Assam State Development Loan (SDL)",
    "slug": "assam-state-development-loan",
    "description": "State government dated bonds issued by the Government of Assam through RBI electronic auctions to support socio-economic infrastructure development in the North East region.",
    "authority": "Government of Assam / Reserve Bank of India",
    "category": "State Development Loans (SDLs)",
    "status": "ACTIVE",
    "sourceUrl": "https://www.rbi.org.in",
    "sourceAuthority": "Reserve Bank of India / Finance Department, Assam",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 10000,
    "expectedReturn": "Auction-Determined Fixed Semi-Annual Coupon",
    "lockInPeriod": "Tenure Specific (Typically 10 Years)",
    "riskLevel": "Low",
    "depositRules": "Available in multiples of ₹10,000 via RBI Retail Direct and institutional auction bidding.",
    "returnMechanism": "Semi-annual interest coupon credited to bank account; principal repaid at par upon maturity.",
    "taxTreatment": "Interest taxable under Income from Other Sources; no TDS at source.",
    "withdrawalRules": "Secondary market exit via stock exchange debt segments and NDS-OM.",
    "importantRules": [
      "Institutional safety backed by RBI statutory fund management framework.",
      "Eligible as Statutory Liquidity Ratio (SLR) asset."
    ],
    "faqs": [
      {
        "question": "How do investors receive maturity proceeds for Assam SDLs?",
        "answer": "The maturity amount is directly credited to the linked bank account by the RBI Public Debt Office."
      }
    ]
  },
  {
    "id": "inv-pfc-54ec",
    "title": "Power Finance Corporation (PFC) 54EC Capital Gains Bonds",
    "slug": "pfc-54ec-capital-gains-bonds",
    "description": "AAA-rated long-term specified capital gains bonds issued by Power Finance Corporation under Section 54EC of the Income Tax Act to exempt long-term capital gains from real estate sales.",
    "authority": "Power Finance Corporation (PFC) / Ministry of Power",
    "category": "Capital Gains Bonds",
    "status": "OPEN",
    "sourceUrl": "https://www.pfcindia.com",
    "sourceAuthority": "Power Finance Corporation / CBDT",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 10000,
    "maxInvestment": 5000000,
    "expectedReturn": "5.25% p.a. Fixed Annual Coupon",
    "lockInPeriod": "5 Years Strictly (Non-transferable)",
    "riskLevel": "Low",
    "depositRules": "Must be invested within 6 months from the date of transfer of original long-term capital asset (land or building). Minimum ₹10,000 (1 bond of face value ₹10,000) up to maximum ₹50 lakh per financial year.",
    "returnMechanism": "Annual interest coupon credited on designated coupon date; principal redeemed at par after 5-year lock-in.",
    "taxTreatment": "Full exemption of long-term capital gains under Section 54EC up to ₹50 lakh. Annual 5.25% interest coupon is taxable under Income from Other Sources; no TDS deducted.",
    "withdrawalRules": "Strict 5-year lock-in. Non-transferable, non-negotiable, and cannot be pledged as collateral for loans.",
    "importantRules": [
      "Investment must be completed within 6 months of capital asset transfer date.",
      "AAA credit rating by CRISIL, ICRA, and CARE Ratings; Maharatna CPSE issuer."
    ],
    "faqs": [
      {
        "question": "Can PFC 54EC bonds be bought online?",
        "answer": "Yes, PFC provides online application and electronic fund transfer facility on its official portal."
      }
    ]
  },
  {
    "id": "inv-rec-54ec",
    "title": "REC Limited 54EC Capital Gains Bonds",
    "slug": "rec-54ec-capital-gains-bonds",
    "description": "AAA-rated long term specified assets issued by REC Limited under Section 54EC of the Income Tax Act to claim 100% tax exemption on long-term capital gains from property sale.",
    "authority": "REC Limited / Ministry of Power",
    "category": "Capital Gains Bonds",
    "status": "OPEN",
    "sourceUrl": "https://recindia.nic.in",
    "sourceAuthority": "REC Limited / CBDT",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 10000,
    "maxInvestment": 5000000,
    "expectedReturn": "5.25% p.a. Fixed Annual Coupon",
    "lockInPeriod": "5 Years Strictly (Non-transferable)",
    "riskLevel": "Low",
    "depositRules": "Investment must be made within 6 months of transfer of capital asset. Minimum ₹10,000 (1 bond) up to maximum ₹50,00,000 per financial year across all 54EC bonds.",
    "returnMechanism": "Annual interest coupon credited directly via ECS/NEFT; bullet principal repayment upon completion of 5-year tenure.",
    "taxTreatment": "Capital gains tax exemption under Section 54EC. Annual coupon is taxable as ordinary income; no TDS at source.",
    "withdrawalRules": "Strict 5-year lock-in period. No premature redemption, loan lien, or secondary transfer permitted.",
    "importantRules": [
      "Maharatna public sector enterprise under the Ministry of Power.",
      "AAA rating from CRISIL, ICRA, and India Ratings."
    ],
    "faqs": [
      {
        "question": "What is the ceiling for investment in REC 54EC bonds?",
        "answer": "The statutory ceiling under Section 54EC is ₹50 lakh per investor across all 54EC bonds during a financial year."
      }
    ]
  },
  {
    "id": "inv-irfc-54ec",
    "title": "Indian Railway Finance Corporation (IRFC) 54EC Capital Gains Bonds",
    "slug": "irfc-54ec-capital-gains-bonds",
    "description": "AAA-rated capital gains exemption bonds issued by Indian Railway Finance Corporation (Series VI) under Section 54EC of the Income Tax Act to finance Indian Railways infrastructure.",
    "authority": "Indian Railway Finance Corporation (IRFC) / Ministry of Railways",
    "category": "Capital Gains Bonds",
    "status": "OPEN",
    "sourceUrl": "https://irfc.co.in",
    "sourceAuthority": "Indian Railway Finance Corporation / CBDT",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 10000,
    "maxInvestment": 5000000,
    "expectedReturn": "5.25% p.a. Fixed Annual Coupon",
    "lockInPeriod": "5 Years Strictly (Non-transferable)",
    "riskLevel": "Low",
    "depositRules": "Must be invested within 6 months from the date of real estate asset sale. Minimum subscription ₹10,000 (1 bond) up to maximum ₹50 lakh per financial year.",
    "returnMechanism": "Annual interest coupon paid on October 15 every year; principal repaid at par upon completion of 5 years.",
    "taxTreatment": "Provides 100% tax exemption on long-term capital gains under Section 54EC. Annual interest coupon is taxable; no TDS deducted.",
    "withdrawalRules": "Strict 5-year lock-in. Cannot be transferred, traded on secondary market, or pledged for loans.",
    "importantRules": [
      "Dedicated financing arm of Indian Railways, Ministry of Railways, Govt of India.",
      "Highest domestic credit rating (AAA) with pristine track record."
    ],
    "faqs": [
      {
        "question": "When is the annual interest coupon paid on IRFC 54EC bonds?",
        "answer": "Interest is paid annually on October 15 each year directly to the registered bank account."
      }
    ]
  },
  {
    "id": "inv-nhai-taxable-bonds",
    "title": "NHAI Taxable Infrastructure Bonds",
    "slug": "nhai-taxable-infrastructure-bonds",
    "description": "Secured redeemable non-convertible debentures and taxable infrastructure debt securities issued by the National Highways Authority of India under Ministry of Road Transport and Highways to fund national highway and Bharatmala expressway development.",
    "authority": "National Highways Authority of India (NHAI) / MoRTH",
    "category": "Infrastructure Bonds",
    "status": "ACTIVE / TRADED",
    "sourceUrl": "https://nhai.gov.in",
    "sourceAuthority": "National Highways Authority of India",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 10000,
    "expectedReturn": "Fixed Annual / Semi-Annual Taxable Coupon (Series Specific)",
    "lockInPeriod": "Series Maturity (Secondary Traded)",
    "riskLevel": "Low",
    "depositRules": "Issued periodically via private placement electronic bidding platforms (EBP) and public tranches; secondary market trading on NSE and BSE debt segments in demat mode.",
    "returnMechanism": "Annual interest coupon paid directly to registered bank account; bullet redemption of principal at face value upon maturity.",
    "taxTreatment": "Interest income is fully taxable under Income from Other Sources as per investor applicable income tax slab. Subject to TDS rules unless held in demat form with exemption certificate.",
    "withdrawalRules": "Secondary market exit available on stock exchange debt segments prior to scheduled final redemption by NHAI.",
    "importantRules": [
      "Statutory body constituted by an Act of Parliament (NHAI Act, 1988).",
      "AAA credit rating by domestic credit rating agencies (CRISIL, ICRA, CARE, India Ratings)."
    ],
    "faqs": [
      {
        "question": "Are NHAI Taxable Bonds tax-free like 54EC or old NHAI tax-free bonds?",
        "answer": "No. Unlike Section 54EC or earlier Section 10(15)(iv)(h) bonds, interest earned on taxable infrastructure bonds is added to gross total income and taxed at slab rates."
      }
    ]
  },
  {
    "id": "inv-ireda-green-bonds",
    "title": "IREDA Green Energy Institutional Bonds",
    "slug": "ireda-green-energy-institutional-bonds",
    "description": "AAA-rated secured/unsecured taxable green debentures issued by Indian Renewable Energy Development Agency (IREDA) to mobilize resources for financing renewable energy, solar parks, wind farms, and green hydrogen projects across India.",
    "authority": "Indian Renewable Energy Development Agency (IREDA) / MNRE",
    "category": "Corporate Bonds & Debentures",
    "status": "ACTIVE / TRADED",
    "sourceUrl": "https://www.ireda.in",
    "sourceAuthority": "IREDA / Ministry of New and Renewable Energy",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100000,
    "expectedReturn": "Fixed Annual Green Coupon (Tranche Dependent)",
    "lockInPeriod": "Tranche Maturity (Secondary Traded)",
    "riskLevel": "Low",
    "depositRules": "Issued via Electronic Bidding Provider (EBP) platforms on BSE/NSE for Qualified Institutional Buyers and HNIs; secondary market lots traded in demat format.",
    "returnMechanism": "Annual coupon credited to investor bank account; principal repaid at par by IREDA upon maturity.",
    "taxTreatment": "Coupon interest is fully taxable at applicable slab rates. Listed bond transfers on stock exchanges subject to capital gains tax without indexation.",
    "withdrawalRules": "Secondary market sale on stock exchange wholesale debt market segment.",
    "importantRules": [
      "Proceeds strictly ring-fenced for clean and renewable energy financing under SEBI Green Debt Securities Framework.",
      "Navratna CPSE under the administrative control of the Ministry of New and Renewable Energy."
    ],
    "faqs": [
      {
        "question": "Can retail investors buy IREDA institutional green bonds?",
        "answer": "Retail and HNI investors can purchase secondary lots on stock exchange debt segments through registered demat brokers."
      }
    ]
  },
  {
    "id": "inv-npcil-bonds",
    "title": "Nuclear Power Corporation of India (NPCIL) Bonds",
    "slug": "npcil-corporate-bonds",
    "description": "AAA-rated secured redeemable taxable non-convertible debentures issued by Nuclear Power Corporation of India Limited (Series XXX / XXXI / XXXII) to finance civilian nuclear power generation capacity expansion.",
    "authority": "Nuclear Power Corporation of India Limited (NPCIL) / Department of Atomic Energy",
    "category": "Corporate Bonds & Debentures",
    "status": "ACTIVE / TRADED",
    "sourceUrl": "https://www.npcil.nic.in",
    "sourceAuthority": "NPCIL / Department of Atomic Energy",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100000,
    "expectedReturn": "Fixed Annual Coupon (Series Specific)",
    "lockInPeriod": "Series Maturity (Typically 10 to 15 Years)",
    "riskLevel": "Low",
    "depositRules": "Issued through private placement / EBP auctions to institutional investors; secondary market traded on NSE/BSE debt market.",
    "returnMechanism": "Annual interest coupon credited electronically; principal repaid at par at final maturity.",
    "taxTreatment": "Interest income is fully taxable under Income from Other Sources at applicable income tax rates.",
    "withdrawalRules": "Tradable on stock exchange secondary debt segment.",
    "importantRules": [
      "Wholly owned Government of India enterprise under the administrative jurisdiction of the Department of Atomic Energy (DAE).",
      "Highest credit safety rating (AAA/Stable) by CRISIL, CARE, and ICRA."
    ],
    "faqs": [
      {
        "question": "Who owns Nuclear Power Corporation of India Limited?",
        "answer": "NPCIL is a 100% Government of India-owned enterprise under the Department of Atomic Energy."
      }
    ]
  },
  {
    "id": "inv-nhpc-bonds",
    "title": "NHPC Limited Hydro Power Bonds",
    "slug": "nhpc-hydro-power-bonds",
    "description": "AAA-rated secured redeemable taxable non-convertible debentures issued by NHPC Limited to fund large-scale hydro-electric generation and pumped storage projects.",
    "authority": "NHPC Limited / Ministry of Power",
    "category": "Corporate Bonds & Debentures",
    "status": "ACTIVE / TRADED",
    "sourceUrl": "https://www.nhpcindia.com",
    "sourceAuthority": "NHPC Limited / Ministry of Power",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100000,
    "expectedReturn": "Fixed Annual Coupon (Series Specific)",
    "lockInPeriod": "Series Maturity (Typically 10 to 15 Years)",
    "riskLevel": "Low",
    "depositRules": "Issued on private placement basis via BSE/NSE EBP platform for institutional placement; secondary trading in demat form.",
    "returnMechanism": "Annual interest payout to linked bank account; bullet redemption of principal at maturity.",
    "taxTreatment": "Coupon interest is taxable at investor marginal income tax slab. Capital gains on exchange transfer taxed under listed debt provisions.",
    "withdrawalRules": "Secondary market exit via stock exchange debt segment.",
    "importantRules": [
      "Navratna CPSE under the Ministry of Power, Government of India.",
      "Secured by fixed charge on identified hydro power project assets with Debenture Trustee monitoring."
    ],
    "faqs": [
      {
        "question": "What is the credit rating of NHPC bonds?",
        "answer": "NHPC bond series carry the highest credit rating of AAA/Stable from major domestic credit rating agencies."
      }
    ]
  },
  {
    "id": "inv-sjvn-bonds",
    "title": "SJVN Limited Green Energy Bonds",
    "slug": "sjvn-green-energy-bonds",
    "description": "Secured/unsecured taxable debt securities issued by SJVN Limited (a joint venture between Government of India and Government of Himachal Pradesh) to finance hydro, solar, and wind renewable energy generation projects.",
    "authority": "SJVN Limited / Ministry of Power",
    "category": "Corporate Bonds & Debentures",
    "status": "ACTIVE / TRADED",
    "sourceUrl": "https://sjvn.nic.in",
    "sourceAuthority": "SJVN Limited / Ministry of Power",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100000,
    "expectedReturn": "Fixed Annual Coupon (Tranche Dependent)",
    "lockInPeriod": "Tranche Maturity (Secondary Traded)",
    "riskLevel": "Low",
    "depositRules": "Placed through private placement EBP mechanisms with institutional investors; secondary market trading on NSE and BSE debt segments.",
    "returnMechanism": "Annual interest coupon credited to investor bank account; principal repaid at par upon final redemption.",
    "taxTreatment": "Coupon interest is fully taxable under Income from Other Sources.",
    "withdrawalRules": "Tradable on stock exchange secondary market debt desks.",
    "importantRules": [
      "Navratna CPSE jointly promoted by the Government of India and the Government of Himachal Pradesh.",
      "Rated AAA/AA+ by SEBI-registered rating agencies."
    ],
    "faqs": [
      {
        "question": "What is the ownership structure of SJVN Limited?",
        "answer": "SJVN is a joint venture between the Central Government of India and the State Government of Himachal Pradesh."
      }
    ]
  },
  {
    "id": "inv-sail-bonds",
    "title": "Steel Authority of India (SAIL) Corporate Bonds",
    "slug": "sail-corporate-bonds",
    "description": "Secured/unsecured taxable non-convertible debentures issued by Steel Authority of India Limited to fund modernization, blast furnace expansion, and working capital requirements.",
    "authority": "Steel Authority of India Limited (SAIL) / Ministry of Steel",
    "category": "Corporate Bonds & Debentures",
    "status": "ACTIVE / TRADED",
    "sourceUrl": "https://www.sail.co.in",
    "sourceAuthority": "Steel Authority of India Limited / Ministry of Steel",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100000,
    "expectedReturn": "Fixed Annual / Semi-Annual Coupon (Series Specific)",
    "lockInPeriod": "Series Maturity (Typically 5 to 10 Years)",
    "riskLevel": "Low",
    "depositRules": "Issued through institutional private placement on BSE/NSE EBP; secondary market liquidity available in demat mode.",
    "returnMechanism": "Periodic interest payments directly into registered bank account; face value refunded upon maturity.",
    "taxTreatment": "Interest income is fully taxable at applicable slab rates. Capital gains on secondary market transfer taxed under listed debt provisions.",
    "withdrawalRules": "Secondary market trading on BSE/NSE wholesale debt platforms.",
    "importantRules": [
      "Maharatna Central Public Sector Enterprise under the Ministry of Steel.",
      "High investment grade credit rating (AA+/AAA) from domestic rating agencies."
    ],
    "faqs": [
      {
        "question": "Are SAIL bonds backed by the Government of India directly?",
        "answer": "SAIL bonds are corporate obligations of the Maharatna CPSE backed by its corporate balance sheet and assets, not direct sovereign guarantees."
      }
    ]
  },
  {
    "id": "inv-bel-bonds",
    "title": "Bharat Electronics Limited (BEL) Corporate Debt",
    "slug": "bel-corporate-debt",
    "description": "Commercial debt and money market borrowing framework of Bharat Electronics Limited, a Navratna defence public sector enterprise under the Ministry of Defence, maintaining near-debt-free status with high liquidity reserves.",
    "authority": "Bharat Electronics Limited (BEL) / Ministry of Defence",
    "category": "Corporate Bonds & Debentures",
    "status": "HISTORICAL / DEBT-FREE PROFILE",
    "sourceUrl": "https://bel-india.in",
    "sourceAuthority": "Bharat Electronics Limited / Ministry of Defence",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100000,
    "expectedReturn": "Money Market / Commercial Paper Yield (When Issued)",
    "lockInPeriod": "Short to Medium Term (Issue Specific)",
    "riskLevel": "Low",
    "depositRules": "BEL operates as a virtually debt-free Navratna CPSE; borrowings restricted to operational short-term working capital / commercial paper programs through institutional channels.",
    "returnMechanism": "Interest/discount payout directly through banking clearing upon maturity.",
    "taxTreatment": "Income from short-term debt instruments is taxed at the investor marginal income tax slab.",
    "withdrawalRules": "Redemption on maturity date; institutional secondary market trading.",
    "importantRules": [
      "Navratna defence CPSE with majority ownership by Government of India.",
      "Maintains highest standalone credit rating (AAA/A1+) from domestic rating agencies."
    ],
    "faqs": [
      {
        "question": "Does BEL regularly issue long-term retail public bonds?",
        "answer": "No. BEL maintains a debt-free capital structure and funds its capital expenditure primarily through internal cash accruals."
      }
    ]
  },
  {
    "id": "inv-hal-bonds",
    "title": "Hindustan Aeronautics Limited (HAL) Corporate Debt",
    "slug": "hal-corporate-debt",
    "description": "Institutional debt and liquidity management framework of Hindustan Aeronautics Limited, a Maharatna aerospace and defence public sector enterprise under the Ministry of Defence with pristine zero net-debt financial profile.",
    "authority": "Hindustan Aeronautics Limited (HAL) / Ministry of Defence",
    "category": "Corporate Bonds & Debentures",
    "status": "HISTORICAL / DEBT-FREE PROFILE",
    "sourceUrl": "https://hal-india.co.in",
    "sourceAuthority": "Hindustan Aeronautics Limited / Ministry of Defence",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100000,
    "expectedReturn": "Short-Term Commercial Yield (When Issued)",
    "lockInPeriod": "Issue Specific",
    "riskLevel": "Low",
    "depositRules": "HAL maintains a zero-debt balance sheet; short-term debt facilities are limited to operational bank lines and commercial paper placements for institutional entities.",
    "returnMechanism": "Direct electronic credit of interest and face value at maturity.",
    "taxTreatment": "Taxable under Income from Other Sources as per investor applicable income tax rate.",
    "withdrawalRules": "Settled at scheduled maturity; institutional money market trading.",
    "importantRules": [
      "Maharatna CPSE under the administrative jurisdiction of the Ministry of Defence.",
      "Highest credit safety rating (AAA / A1+) with sovereign ownership support."
    ],
    "faqs": [
      {
        "question": "Are there public retail bond issues available from HAL?",
        "answer": "No. HAL does not have active public retail bond issues as it funds operations through internal accruals and order advances."
      }
    ]
  },
  {
    "id": "inv-bhel-bonds",
    "title": "Bharat Heavy Electricals Limited (BHEL) Corporate Bonds",
    "slug": "bhel-corporate-bonds",
    "description": "Secured/unsecured taxable debentures and commercial paper debt instruments issued by Bharat Heavy Electricals Limited to fund power equipment manufacturing, transmission systems, and industrial capital expenditure.",
    "authority": "Bharat Heavy Electricals Limited (BHEL) / Ministry of Heavy Industries",
    "category": "Corporate Bonds & Debentures",
    "status": "ACTIVE / TRADED",
    "sourceUrl": "https://www.bhel.com",
    "sourceAuthority": "Bharat Heavy Electricals Limited / Ministry of Heavy Industries",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100000,
    "expectedReturn": "Fixed Annual Coupon (Series Dependent)",
    "lockInPeriod": "Series Maturity (Secondary Traded)",
    "riskLevel": "Low",
    "depositRules": "Issued through institutional private placement mechanisms; secondary market trading on BSE and NSE debt segments in demat mode.",
    "returnMechanism": "Annual coupon payment credited to registered bank account; principal repaid at par upon maturity.",
    "taxTreatment": "Coupon interest is taxable at investor slab rate under Income from Other Sources.",
    "withdrawalRules": "Secondary market sale available on stock exchange wholesale debt desks.",
    "importantRules": [
      "Maharatna public sector enterprise under the Ministry of Heavy Industries.",
      "Rated AA+/AAA by domestic credit rating agencies."
    ],
    "faqs": [
      {
        "question": "What is BHEL status among Central Public Sector Enterprises?",
        "answer": "BHEL is a Maharatna CPSE and India largest power plant equipment manufacturer."
      }
    ]
  },
  {
    "id": "inv-concor-bonds",
    "title": "Container Corporation of India (CONCOR) Bonds",
    "slug": "concor-corporate-bonds",
    "description": "Debt and non-convertible debenture framework of Container Corporation of India Limited, a Navratna logistics CPSE under the Ministry of Railways, operating multi-modal logistics parks and container freight stations.",
    "authority": "Container Corporation of India Limited (CONCOR) / Ministry of Railways",
    "category": "Corporate Bonds & Debentures",
    "status": "ACTIVE / TRADED",
    "sourceUrl": "https://concorindia.co.in",
    "sourceAuthority": "Container Corporation of India / Ministry of Railways",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100000,
    "expectedReturn": "Fixed Annual Coupon (Series Specific)",
    "lockInPeriod": "Series Maturity (Typically 5 to 10 Years)",
    "riskLevel": "Low",
    "depositRules": "Mobilized through private placement / EBP routes for institutional investors; secondary market trading in demat format.",
    "returnMechanism": "Annual interest coupon credited electronically; face value returned at scheduled maturity.",
    "taxTreatment": "Coupon interest is fully taxable as income from other sources at applicable slab rates.",
    "withdrawalRules": "Tradable on stock exchange secondary market debt desks.",
    "importantRules": [
      "Navratna CPSE under the administrative control of the Ministry of Railways.",
      "AAA/AA+ credit rating by domestic credit rating agencies."
    ],
    "faqs": [
      {
        "question": "What core business does CONCOR operate?",
        "answer": "CONCOR operates multi-modal logistics, container rail transportation, and inland container depots across India."
      }
    ]
  },
  {
    "id": "inv-nlc-india-bonds",
    "title": "NLC India (Neyveli Lignite) Green & Power Bonds",
    "slug": "nlc-india-power-bonds",
    "description": "Secured/unsecured taxable non-convertible debentures issued by NLC India Limited (Series I / II / III) to finance lignite mining, thermal power generation, and massive solar/wind renewable energy additions.",
    "authority": "NLC India Limited / Ministry of Coal",
    "category": "Corporate Bonds & Debentures",
    "status": "ACTIVE / TRADED",
    "sourceUrl": "https://www.nlcindia.in",
    "sourceAuthority": "NLC India Limited / Ministry of Coal",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100000,
    "expectedReturn": "Fixed Annual Coupon (Series Specific)",
    "lockInPeriod": "Series Maturity (Typically 5 to 10 Years)",
    "riskLevel": "Low",
    "depositRules": "Placed through BSE/NSE Electronic Bidding Provider (EBP) platforms; listed and traded on NSE/BSE debt segments in demat form.",
    "returnMechanism": "Annual interest coupon paid directly to bank account; bullet principal redemption on scheduled maturity date.",
    "taxTreatment": "Interest income is fully taxable under Income from Other Sources as per investor slab.",
    "withdrawalRules": "Secondary market exit via stock exchange debt segments.",
    "importantRules": [
      "Navratna CPSE under the administrative jurisdiction of the Ministry of Coal.",
      "Rated AAA/Stable by CRISIL, CARE, and India Ratings."
    ],
    "faqs": [
      {
        "question": "What projects are funded by NLC India bond issuances?",
        "answer": "Bond proceeds finance expansion of lignite mines, pit-head thermal power plants, and renewable solar/wind energy installations."
      }
    ]
  },
  {
    "id": "inv-railtel-bonds",
    "title": "RailTel Corporation of India Bonds",
    "slug": "railtel-corporate-bonds",
    "description": "Debt and credit borrowing framework of RailTel Corporation of India Limited, a Navratna telecom infrastructure CPSE under the Ministry of Railways providing nationwide optical fiber and digital rail services.",
    "authority": "RailTel Corporation of India Limited / Ministry of Railways",
    "category": "Corporate Bonds & Debentures",
    "status": "ACTIVE / TRADED",
    "sourceUrl": "https://www.railtelindia.com",
    "sourceAuthority": "RailTel Corporation of India / Ministry of Railways",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100000,
    "expectedReturn": "Fixed Coupon (When Placed via Debt Issues)",
    "lockInPeriod": "Issue Maturity (Secondary Traded)",
    "riskLevel": "Low",
    "depositRules": "Placed through institutional private placement mechanisms; maintained in demat format.",
    "returnMechanism": "Periodic coupon payouts directly credited to bank accounts; face value paid at maturity.",
    "taxTreatment": "Interest earned is taxable under Income from Other Sources at applicable rates.",
    "withdrawalRules": "Secondary market exit via debt trading platforms.",
    "importantRules": [
      "Navratna CPSE with exclusive right of way across Indian Railways optical fiber network.",
      "High investment-grade credit rating with robust cash flow profile."
    ],
    "faqs": [
      {
        "question": "What is RailTel primary business?",
        "answer": "RailTel provides nationwide telecom, broadband, station Wi-Fi, and digital signaling infrastructure along Indian Railway corridors."
      }
    ]
  },
  {
    "id": "inv-rites-bonds",
    "title": "RITES Limited Corporate Debt",
    "slug": "rites-corporate-debt",
    "description": "Financial borrowing and short-term debt framework of RITES Limited, a Navratna transport infrastructure engineering and consultancy CPSE under the Ministry of Railways with virtually zero debt balance sheet.",
    "authority": "RITES Limited / Ministry of Railways",
    "category": "Corporate Bonds & Debentures",
    "status": "HISTORICAL / DEBT-FREE PROFILE",
    "sourceUrl": "https://rites.com",
    "sourceAuthority": "RITES Limited / Ministry of Railways",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100000,
    "expectedReturn": "Short-Term Debt / Money Market Yield (When Issued)",
    "lockInPeriod": "Issue Specific",
    "riskLevel": "Low",
    "depositRules": "RITES operates on a debt-free balance sheet with robust cash balances; borrowing limited to operational bank guarantees and short-term credit facilities.",
    "returnMechanism": "Repaid upon maturity via electronic clearing directly to creditor account.",
    "taxTreatment": "Taxable under Income from Other Sources as per investor applicable income tax rate.",
    "withdrawalRules": "Settled on maturity date; institutional secondary market trading.",
    "importantRules": [
      "Navratna engineering consultancy CPSE under the Ministry of Railways.",
      "Highest standalone liquidity and debt-free status."
    ],
    "faqs": [
      {
        "question": "Does RITES have public retail bonds available for subscription?",
        "answer": "No. RITES does not issue long-term retail public bonds due to its self-funded zero net-debt financial position."
      }
    ]
  },
  {
    "id": "inv-oil-india-bonds",
    "title": "Oil India Limited (OIL) Corporate Bonds",
    "slug": "oil-india-corporate-bonds",
    "description": "AAA-rated secured/unsecured taxable non-convertible debentures issued by Oil India Limited to fund upstream hydrocarbon exploration, drilling, pipeline infrastructure, and Numaligarh Refinery expansion.",
    "authority": "Oil India Limited (OIL) / Ministry of Petroleum and Natural Gas",
    "category": "Corporate Bonds & Debentures",
    "status": "ACTIVE / TRADED",
    "sourceUrl": "https://www.oil-india.com",
    "sourceAuthority": "Oil India Limited / MoPNG",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100000,
    "expectedReturn": "Fixed Annual Coupon (Series Specific)",
    "lockInPeriod": "Series Maturity (Typically 5 to 10 Years)",
    "riskLevel": "Low",
    "depositRules": "Issued via Electronic Bidding Provider (EBP) platforms on BSE/NSE for institutional bidding; secondary market trading on NSE and BSE debt segments in demat mode.",
    "returnMechanism": "Annual interest coupon credited to registered bank account; bullet redemption of principal at face value at maturity.",
    "taxTreatment": "Interest income is fully taxable at applicable slab rates. No indexation benefit on listed bond transfers.",
    "withdrawalRules": "Secondary market exit via stock exchange debt segment.",
    "importantRules": [
      "Maharatna Central Public Sector Enterprise under the Ministry of Petroleum and Natural Gas.",
      "AAA credit rating by CRISIL, ICRA, and CARE Ratings."
    ],
    "faqs": [
      {
        "question": "What is Oil India role in India energy security?",
        "answer": "Oil India is India second largest state-owned upstream oil and natural gas exploration and production company."
      }
    ]
  },
  {
    "id": "inv-mrpl-bonds",
    "title": "Mangalore Refinery and Petrochemicals (MRPL) Bonds",
    "slug": "mrpl-corporate-bonds",
    "description": "AAA-rated secured/unsecured taxable debentures issued by Mangalore Refinery and Petrochemicals Limited (a subsidiary of ONGC) to finance refining units, petrochemical plants, and BS-VI compliance infrastructure.",
    "authority": "Mangalore Refinery and Petrochemicals Limited (MRPL) / ONGC / MoPNG",
    "category": "Corporate Bonds & Debentures",
    "status": "ACTIVE / TRADED",
    "sourceUrl": "https://www.mrpl.co.in",
    "sourceAuthority": "MRPL / ONGC / Ministry of Petroleum",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100000,
    "expectedReturn": "Fixed Annual Coupon (Series Specific)",
    "lockInPeriod": "Series Maturity (Typically 5 to 10 Years)",
    "riskLevel": "Low",
    "depositRules": "Issued through private placement EBP auctions to institutional investors; listed and traded on NSE/BSE debt market segments in demat form.",
    "returnMechanism": "Annual interest coupon paid directly to bank account; principal repaid at par upon scheduled maturity.",
    "taxTreatment": "Coupon interest is taxable at investor marginal income tax slab. Capital gains on exchange transfer taxed under listed debt provisions.",
    "withdrawalRules": "Tradable on stock exchange secondary market debt desks.",
    "importantRules": [
      "Miniratna Category-I CPSE and subsidiary of Maharatna ONGC.",
      "AAA rating from CRISIL, ICRA, and CARE with parentage support from ONGC."
    ],
    "faqs": [
      {
        "question": "Who is the parent company of MRPL?",
        "answer": "Oil and Natural Gas Corporation Limited (ONGC) is the parent promoter of MRPL with majority equity shareholding."
      }
    ]
  },
  {
    "id": "inv-cpcl-bonds",
    "title": "Chennai Petroleum Corporation Limited (CPCL) Bonds",
    "slug": "cpcl-corporate-bonds",
    "description": "Secured/unsecured taxable debentures issued by Chennai Petroleum Corporation Limited (a subsidiary of Indian Oil Corporation) to fund crude distillation, refinery expansion at Cauvery Basin, and clean fuels projects.",
    "authority": "Chennai Petroleum Corporation Limited (CPCL) / IOCL / MoPNG",
    "category": "Corporate Bonds & Debentures",
    "status": "ACTIVE / TRADED",
    "sourceUrl": "https://www.cpcl.co.in",
    "sourceAuthority": "Chennai Petroleum Corporation Limited / IOCL",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100000,
    "expectedReturn": "Fixed Annual Coupon (Series Specific)",
    "lockInPeriod": "Series Maturity (Typically 3 to 10 Years)",
    "riskLevel": "Low",
    "depositRules": "Subscribed through institutional private placement platforms; listed on NSE/BSE debt segments.",
    "returnMechanism": "Annual interest payout to registered bank account; bullet repayment on maturity date.",
    "taxTreatment": "Taxable under Income from Other Sources as per applicable income tax slab.",
    "withdrawalRules": "Secondary market exit via stock exchange debt platforms.",
    "importantRules": [
      "Subsidiary of Maharatna Indian Oil Corporation Limited (IOCL).",
      "High investment-grade credit rating supported by IOCL operational integration."
    ],
    "faqs": [
      {
        "question": "What is the relationship between CPCL and Indian Oil Corporation?",
        "answer": "CPCL is a subsidiary of Indian Oil Corporation Limited (IOCL), which holds the controlling promoter stake."
      }
    ]
  },
  {
    "id": "inv-rcf-bonds",
    "title": "Rashtriya Chemicals & Fertilizers (RCF) Bonds",
    "slug": "rcf-corporate-bonds",
    "description": "Secured/unsecured taxable non-convertible debentures issued by Rashtriya Chemicals & Fertilizers Limited to finance urea manufacturing revamps, NPK complex plants, and industrial chemical capacity additions.",
    "authority": "Rashtriya Chemicals & Fertilizers Limited (RCF) / Ministry of Chemicals and Fertilizers",
    "category": "Corporate Bonds & Debentures",
    "status": "ACTIVE / TRADED",
    "sourceUrl": "https://www.rcfltd.com",
    "sourceAuthority": "RCF Limited / Ministry of Chemicals and Fertilizers",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100000,
    "expectedReturn": "Fixed Annual Coupon (Series Specific)",
    "lockInPeriod": "Series Maturity (Typically 3 to 10 Years)",
    "riskLevel": "Low",
    "depositRules": "Placed via Electronic Bidding Provider platforms for institutional bidding; secondary market trading on BSE/NSE debt segment.",
    "returnMechanism": "Annual interest coupon paid directly to bank account; principal repaid at face value upon maturity.",
    "taxTreatment": "Interest income is fully taxable under Income from Other Sources at applicable slab rates.",
    "withdrawalRules": "Secondary market trading available on stock exchanges in demat mode.",
    "importantRules": [
      "Navratna CPSE under the administrative jurisdiction of the Ministry of Chemicals and Fertilizers.",
      "High credit rating (AA+/AAA) from SEBI-registered domestic rating agencies."
    ],
    "faqs": [
      {
        "question": "What is RCF primary manufacturing portfolio?",
        "answer": "RCF manufactures Ujjwala Urea, Suphala NPK complex fertilizers, and industrial chemicals across its Trombay and Thal plants."
      }
    ]
  },
  {
    "id": "inv-nfl-bonds",
    "title": "National Fertilizers Limited (NFL) Bonds",
    "slug": "nfl-corporate-bonds",
    "description": "Secured/unsecured taxable non-convertible debentures and commercial debt instruments issued by National Fertilizers Limited to finance energy reduction revamps and ammonia-urea manufacturing facilities.",
    "authority": "National Fertilizers Limited (NFL) / Ministry of Chemicals and Fertilizers",
    "category": "Corporate Bonds & Debentures",
    "status": "ACTIVE / TRADED",
    "sourceUrl": "https://www.nationalfertilizers.com",
    "sourceAuthority": "National Fertilizers Limited / Ministry of Chemicals and Fertilizers",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100000,
    "expectedReturn": "Fixed Annual Coupon (Series Specific)",
    "lockInPeriod": "Series Maturity (Typically 3 to 7 Years)",
    "riskLevel": "Low",
    "depositRules": "Issued through institutional private placement auctions; secondary trading on BSE and NSE debt desks.",
    "returnMechanism": "Annual interest coupon credited electronically; face value repaid at scheduled maturity.",
    "taxTreatment": "Coupon interest is added to total income and taxed at marginal income tax slab.",
    "withdrawalRules": "Tradable on stock exchange secondary debt market segments in demat mode.",
    "importantRules": [
      "Navratna CPSE under the Ministry of Chemicals and Fertilizers.",
      "AA+ / AAA credit safety profile backed by government majority shareholding."
    ],
    "faqs": [
      {
        "question": "Where are NFL primary manufacturing plants located?",
        "answer": "NFL operates major urea and fertilizer production units at Nangal, Bathinda, Panipat, and Vijaipur."
      }
    ]
  },
  {
    "id": "inv-hudco-taxable-bonds",
    "title": "Housing and Urban Development Corporation (HUDCO) Taxable Bonds",
    "slug": "hudco-taxable-bonds",
    "description": "AAA-rated secured/unsecured taxable non-convertible debentures issued by HUDCO to finance social housing schemes, smart cities, urban transport, and civic water/sanitation infrastructure across India.",
    "authority": "Housing and Urban Development Corporation (HUDCO) / MoHUA",
    "category": "Corporate Bonds & Debentures",
    "status": "ACTIVE / TRADED",
    "sourceUrl": "https://hudco.org.in",
    "sourceAuthority": "HUDCO / Ministry of Housing and Urban Affairs",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100000,
    "expectedReturn": "Fixed Annual Coupon (Series Specific)",
    "lockInPeriod": "Series Maturity (Typically 5 to 15 Years)",
    "riskLevel": "Low",
    "depositRules": "Issued periodically through private placement EBP platforms on BSE/NSE for institutional bidding; secondary market trading in demat form.",
    "returnMechanism": "Annual interest coupon credited to registered bank account; bullet redemption of principal at face value upon maturity.",
    "taxTreatment": "Interest income is fully taxable under Income from Other Sources as per investor slab. No Section 80C or tax-free exemption.",
    "withdrawalRules": "Secondary market exit available on stock exchange debt segments.",
    "importantRules": [
      "Navratna CPSE under the administrative control of the Ministry of Housing and Urban Affairs (MoHUA).",
      "Highest credit safety rating (AAA/Stable) by CRISIL, ICRA, and CARE Ratings."
    ],
    "faqs": [
      {
        "question": "How are HUDCO taxable bonds different from HUDCO tax-free bonds?",
        "answer": "HUDCO taxable bonds offer taxable coupon interest, whereas earlier historical tranches under Section 10(15)(iv)(h) were tax-exempt."
      }
    ]
  },
  {
    "id": "inv-nhb-taxable-bonds",
    "title": "National Housing Bank (NHB) Taxable Bonds",
    "slug": "nhb-taxable-bonds",
    "description": "AAA-rated taxable priority sector debentures and infrastructure debt bonds issued by National Housing Bank, an apex housing finance institution wholly owned by the Reserve Bank of India / Government of India.",
    "authority": "National Housing Bank (NHB) / Government of India",
    "category": "Corporate Bonds & Debentures",
    "status": "ACTIVE / TRADED",
    "sourceUrl": "https://nhb.org.in",
    "sourceAuthority": "National Housing Bank / Ministry of Finance",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100000,
    "expectedReturn": "Fixed Annual / Semi-Annual Coupon (Series Specific)",
    "lockInPeriod": "Series Maturity (Typically 3 to 10 Years)",
    "riskLevel": "Low",
    "depositRules": "Placed through private placement EBP auctions for institutional investors; listed and traded on NSE and BSE debt segments in demat mode.",
    "returnMechanism": "Periodic interest payments directly credited to investor bank account; principal repaid at par upon maturity.",
    "taxTreatment": "Interest income is taxable under Income from Other Sources as per applicable income tax slab rates.",
    "withdrawalRules": "Secondary market liquidity on stock exchange wholesale debt desks.",
    "importantRules": [
      "Statutory apex financial institution established under the National Housing Bank Act, 1987.",
      "Pristine AAA credit rating with 100% sovereign ownership backing."
    ],
    "faqs": [
      {
        "question": "Who owns the National Housing Bank?",
        "answer": "NHB is 100% owned by the Government of India, having been established under an Act of Parliament."
      }
    ]
  },
  {
    "id": "inv-ifci-bonds",
    "title": "IFCI Limited Industrial Bonds",
    "slug": "ifci-industrial-bonds",
    "description": "Secured and unsecured taxable non-convertible debentures and institutional debt instruments issued by IFCI Limited (India first Development Financial Institution established in 1948) under the Department of Financial Services, Ministry of Finance.",
    "authority": "IFCI Limited / Department of Financial Services, MoF",
    "category": "Corporate Bonds & Debentures",
    "status": "ACTIVE / TRADED",
    "sourceUrl": "https://www.ifciltd.com",
    "sourceAuthority": "IFCI Limited / Ministry of Finance",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100000,
    "expectedReturn": "Fixed Annual / Semi-Annual Coupon (Series Specific)",
    "lockInPeriod": "Series Maturity (Secondary Traded)",
    "riskLevel": "Medium",
    "depositRules": "Placed through private placement EBP bidding platforms on BSE/NSE for institutional entities; listed and secondary traded on NSE and BSE debt segments in demat form.",
    "returnMechanism": "Annual/semi-annual interest coupon credited to registered bank account; principal redeemed at par on maturity date.",
    "taxTreatment": "Coupon interest is taxable under Income from Other Sources at applicable investor slab rate. Subject to applicable TDS provisions.",
    "withdrawalRules": "Secondary market exit via stock exchange debt platforms prior to scheduled maturity.",
    "importantRules": [
      "Government of India-owned Development Financial Institution under the Department of Financial Services.",
      "Rated by SEBI-registered domestic rating agencies."
    ],
    "faqs": [
      {
        "question": "What is IFCI primary mandate?",
        "answer": "Established in 1948 as India first DFI, IFCI provides medium and long-term project financing for industrial and infrastructure growth."
      }
    ]
  },
  {
    "id": "inv-dvc-bonds",
    "title": "Damodar Valley Corporation (DVC) Power Bonds",
    "slug": "dvc-power-bonds",
    "description": "Secured redeemable taxable non-convertible bonds issued by Damodar Valley Corporation, a statutory corporation established under the DVC Act, 1948, jointly managed by the Central Government and Governments of West Bengal and Jharkhand.",
    "authority": "Damodar Valley Corporation (DVC) / Ministry of Power",
    "category": "Corporate Bonds & Debentures",
    "status": "ACTIVE / TRADED",
    "sourceUrl": "https://www.dvc.gov.in",
    "sourceAuthority": "Damodar Valley Corporation / Ministry of Power",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100000,
    "expectedReturn": "Fixed Semi-Annual / Annual Coupon (Series Specific)",
    "lockInPeriod": "Series Maturity (Typically 10 to 15 Years)",
    "riskLevel": "Low",
    "depositRules": "Issued through private placement EBP auctions to institutional investors; secondary market trading on BSE/NSE wholesale debt markets.",
    "returnMechanism": "Periodic coupon payouts directly into bank account; face value repaid at scheduled maturity.",
    "taxTreatment": "Interest income is fully taxable under Income from Other Sources as per investor slab rate.",
    "withdrawalRules": "Secondary market trading available on stock exchange debt desks in demat mode.",
    "importantRules": [
      "Statutory multipurpose river valley authority created by an Act of Parliament (DVC Act, 1948).",
      "AAA / AA+ credit rating with structured payment mechanism / sovereign tripartite safeguards."
    ],
    "faqs": [
      {
        "question": "Who participates in Damodar Valley Corporation governance?",
        "answer": "DVC is governed jointly by the Central Government along with the State Governments of West Bengal and Jharkhand."
      }
    ]
  },
  {
    "id": "inv-thdc-bonds",
    "title": "THDC India Limited Hydro Power Bonds",
    "slug": "thdc-hydro-power-bonds",
    "description": "AAA-rated secured redeemable taxable non-convertible debentures issued by THDC India Limited (a subsidiary of NTPC Limited) to finance the Tehri Hydro Power Complex, pumped storage schemes, and renewable energy capacity additions.",
    "authority": "THDC India Limited / NTPC / Ministry of Power",
    "category": "Corporate Bonds & Debentures",
    "status": "ACTIVE / TRADED",
    "sourceUrl": "https://thdc.co.in",
    "sourceAuthority": "THDC India Limited / Ministry of Power",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100000,
    "expectedReturn": "Fixed Annual Coupon (Series Specific)",
    "lockInPeriod": "Series Maturity (Typically 10 Years)",
    "riskLevel": "Low",
    "depositRules": "Issued via Electronic Bidding Provider (EBP) platforms for institutional bidding; secondary market trading in demat form on NSE/BSE.",
    "returnMechanism": "Annual interest coupon paid directly to bank account; bullet redemption of principal at maturity.",
    "taxTreatment": "Coupon interest is taxable at investor slab rate under Income from Other Sources.",
    "withdrawalRules": "Secondary market sale on stock exchange wholesale debt desks.",
    "importantRules": [
      "Joint venture of NTPC Limited and the Government of UP, operating major hydro assets including the Tehri Dam complex.",
      "AAA credit rating by CRISIL, India Ratings, and CARE."
    ],
    "faqs": [
      {
        "question": "Which major hydro projects are operated by THDC India?",
        "answer": "THDC operates the iconic Tehri Hydro Power Complex (2,400 MW), Koteshwar HEP, and multiple solar/wind assets."
      }
    ]
  },
  {
    "id": "inv-neepco-bonds",
    "title": "North Eastern Electric Power Corporation (NEEPCO) Bonds",
    "slug": "neepco-power-bonds",
    "description": "AAA-rated secured/unsecured taxable debentures issued by North Eastern Electric Power Corporation Limited (a wholly-owned subsidiary of NTPC Limited) to fund hydro, thermal, and solar power plants in North-Eastern India.",
    "authority": "North Eastern Electric Power Corporation (NEEPCO) / NTPC / Ministry of Power",
    "category": "Corporate Bonds & Debentures",
    "status": "ACTIVE / TRADED",
    "sourceUrl": "https://neepco.co.in",
    "sourceAuthority": "NEEPCO / Ministry of Power",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100000,
    "expectedReturn": "Fixed Annual Coupon (Series Specific)",
    "lockInPeriod": "Series Maturity (Typically 10 to 15 Years)",
    "riskLevel": "Low",
    "depositRules": "Placed through private placement EBP auctions for institutional investors; listed and traded on NSE/BSE debt segments in demat mode.",
    "returnMechanism": "Annual interest coupon credited electronically; principal repaid at face value at maturity.",
    "taxTreatment": "Interest income is fully taxable at applicable slab rates under Income from Other Sources.",
    "withdrawalRules": "Secondary market exit via stock exchange debt platforms.",
    "importantRules": [
      "Wholly owned subsidiary of Maharatna NTPC Limited operating under the Ministry of Power.",
      "Pristine AAA credit rating from domestic credit rating agencies."
    ],
    "faqs": [
      {
        "question": "What is NEEPCO operational focus?",
        "answer": "NEEPCO plans, designs, constructs, and operates power stations across all northeastern states of India."
      }
    ]
  },
  {
    "id": "inv-vadodara-muni",
    "title": "Vadodara Municipal Corporation Bond",
    "slug": "vadodara-municipal-corporation-bond",
    "description": "AA+ rated municipal green infrastructure bond issued by Vadodara Municipal Corporation (VMC) on BSE to fund sustainable water supply, sewage treatment plants, and civic infrastructure under the AMRUT mission.",
    "authority": "Vadodara Municipal Corporation (VMC) / Government of Gujarat",
    "category": "Municipal Bonds",
    "status": "ACTIVE / TRADED",
    "sourceUrl": "https://vmc.gov.in",
    "sourceAuthority": "Vadodara Municipal Corporation / SEBI / Ministry of Housing and Urban Affairs",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100000,
    "expectedReturn": "7.15% p.a. Semi-Annual Fixed Coupon (Tranche 2022)",
    "lockInPeriod": "5 Years Staggered Redemption (Tranche Specific)",
    "riskLevel": "Low",
    "depositRules": "Issued via BSE Electronic Bidding Platform with technical support from the US Treasury; listed and traded on BSE debt segment in demat format.",
    "returnMechanism": "Semi-annual interest coupon credited electronically; principal redeemed through escrow-backed sinking fund mechanism.",
    "taxTreatment": "Interest income is taxable as per applicable income tax slab rates unless specific tax-free tranches are notified under Section 10(15)(vii).",
    "withdrawalRules": "Secondary market trading on BSE debt market segment.",
    "importantRules": [
      "Backed by structured escrow of property tax and user charges revenues.",
      "AA+ credit rating by India Ratings and CRISIL."
    ],
    "faqs": [
      {
        "question": "What projects were funded by the Vadodara Municipal Corporation Bond?",
        "answer": "Proceeds were dedicated to modernizing sewage treatment facilities and liquid waste management under AMRUT."
      }
    ]
  },
  {
    "id": "inv-pune-muni",
    "title": "Pune Municipal Corporation Bond",
    "slug": "pune-municipal-corporation-bond",
    "description": "Landmark AA+ rated municipal bond issued by Pune Municipal Corporation (PMC) on BSE (2017) to fund 24x7 smart water supply projects across Pune city under the Smart Cities Mission.",
    "authority": "Pune Municipal Corporation (PMC) / Government of Maharashtra",
    "category": "Municipal Bonds",
    "status": "ACTIVE / TRADED",
    "sourceUrl": "https://www.pmc.gov.in",
    "sourceAuthority": "Pune Municipal Corporation / MoHUA / SEBI",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100000,
    "expectedReturn": "7.59% p.a. Semi-Annual Coupon (10-Year Series 2017)",
    "lockInPeriod": "10 Years Maturity (2017–2027; Secondary Traded)",
    "riskLevel": "Low",
    "depositRules": "Issued via public/institutional book building on BSE; secondary market trading in demat form.",
    "returnMechanism": "Semi-annual coupon payout directly to registered bank account; bullet redemption of principal at maturity.",
    "taxTreatment": "Taxable under Income from Other Sources as per investor applicable income tax slab.",
    "withdrawalRules": "Secondary market liquidity on BSE debt trading platform.",
    "importantRules": [
      "First major municipal bond issuance after SEBI 2015 Municipal Debt Regulations.",
      "Secured by structured escrow account on water charges and municipal revenues with AA+ rating."
    ],
    "faqs": [
      {
        "question": "Why was the Pune Municipal Corporation bond issuance historic?",
        "answer": "It was the first municipal bond issuance in India under the new SEBI Municipal Debt Regulations in 2017, pioneering smart city municipal financing."
      }
    ]
  },
  {
    "id": "inv-ghaziabad-muni",
    "title": "Ghaziabad Municipal Corporation Green Bond",
    "slug": "ghaziabad-municipal-corporation-green-bond",
    "description": "First-of-its-kind certified green municipal bond issued by Ghaziabad Municipal Corporation (GMC) on BSE (2021) to fund a tertiary water treatment plant supplying treated water to Sahibabad industrial area.",
    "authority": "Ghaziabad Municipal Corporation (GMC) / Government of Uttar Pradesh",
    "category": "Municipal Bonds",
    "status": "ACTIVE / TRADED",
    "sourceUrl": "https://ghaziabadnagarngam.in",
    "sourceAuthority": "Ghaziabad Nagar Nigam / MoHUA / SEBI",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100000,
    "expectedReturn": "8.10% p.a. Semi-Annual Coupon (Series 2021)",
    "lockInPeriod": "5 Years Maturity (Secondary Traded)",
    "riskLevel": "Low",
    "depositRules": "Issued on BSE EBP platform for institutional placement; traded on BSE wholesale debt segment in demat mode.",
    "returnMechanism": "Semi-annual interest coupon credited electronically; principal repaid at par through escrowed revenue accounts.",
    "taxTreatment": "Interest is taxable under Income from Other Sources as per investor slab rate.",
    "withdrawalRules": "Tradable on stock exchange secondary market debt desks.",
    "importantRules": [
      "First certified green municipal bond issued by an urban local body in India.",
      "Dual credit rating of AA from India Ratings and Brickwork Ratings with tripartite escrow structure."
    ],
    "faqs": [
      {
        "question": "What green project was funded by Ghaziabad Municipal Corporation Green Bond?",
        "answer": "Proceeds financed construction of a tertiary sewage treatment plant supplying recycled water to industrial units in Sahibabad."
      }
    ]
  },
  {
    "id": "inv-ghmc-muni",
    "title": "Greater Hyderabad Municipal Corporation (GHMC) Bond",
    "slug": "ghmc-municipal-corporation-bond",
    "description": "AA rated municipal bonds issued by Greater Hyderabad Municipal Corporation (GHMC) in multiple tranches on BSE to finance the Strategic Road Development Plan (SRDP), flyovers, and junction improvements.",
    "authority": "Greater Hyderabad Municipal Corporation (GHMC) / Government of Telangana",
    "category": "Municipal Bonds",
    "status": "ACTIVE / TRADED",
    "sourceUrl": "https://www.ghmc.gov.in",
    "sourceAuthority": "GHMC / Government of Telangana / SEBI",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100000,
    "expectedReturn": "8.90%–9.38% p.a. Semi-Annual Coupon (Tranche Dependent)",
    "lockInPeriod": "10 Years with Staggered Strip Redemptions",
    "riskLevel": "Low",
    "depositRules": "Issued through BSE EBP platform in demat format; secondary market trading on BSE debt platform.",
    "returnMechanism": "Semi-annual interest payments; principal redeemed through Separate Trading of Registered Interest and Principal of Securities (STRIPS).",
    "taxTreatment": "Taxable at marginal slab rates under Income from Other Sources.",
    "withdrawalRules": "Secondary market exit via BSE debt segment.",
    "importantRules": [
      "Secured by dedicated escrow account of property tax collections with minimum debt service coverage ratio.",
      "AA rating by CARE and CRISIL."
    ],
    "faqs": [
      {
        "question": "What infrastructure is financed by GHMC municipal bonds?",
        "answer": "Proceeds are utilized for the Strategic Road Development Plan (SRDP) constructing major flyovers, grade separators, and underpasses across Hyderabad."
      }
    ]
  },
  {
    "id": "inv-lucknow-muni",
    "title": "Lucknow Municipal Corporation Bond",
    "slug": "lucknow-municipal-corporation-bond",
    "description": "AA rated municipal bond issued by Lucknow Municipal Corporation (LMC) on BSE (2020) to fund urban water supply, sewage pipelines, and housing projects under the AMRUT mission.",
    "authority": "Lucknow Municipal Corporation (LMC) / Government of Uttar Pradesh",
    "category": "Municipal Bonds",
    "status": "ACTIVE / TRADED",
    "sourceUrl": "https://lmc.up.nic.in",
    "sourceAuthority": "Lucknow Nagar Nigam / Government of Uttar Pradesh / MoHUA",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100000,
    "expectedReturn": "8.50% p.a. Semi-Annual Coupon (Series 2020)",
    "lockInPeriod": "10 Years Maturity (2020–2030; Staggered Strip Redemption)",
    "riskLevel": "Low",
    "depositRules": "Issued via BSE electronic auction mechanism with incentive subsidy from the Ministry of Housing and Urban Affairs.",
    "returnMechanism": "Semi-annual interest coupon credited to bank account; principal redeemed via structured escrow account in annual installments.",
    "taxTreatment": "Coupon interest is taxable under Income from Other Sources at applicable slab rates.",
    "withdrawalRules": "Secondary market trading on BSE debt segment.",
    "importantRules": [
      "First municipal corporation from North India to list municipal bonds on stock exchanges post-AMRUT.",
      "Backed by structured escrow of property tax and user charges with AA rating by India Ratings and Brickwork."
    ],
    "faqs": [
      {
        "question": "How is debt service structured for Lucknow Municipal Corporation bonds?",
        "answer": "LMC maintains a dedicated escrow account where property taxes and government grants are routed directly to ensure timely debt servicing."
      }
    ]
  },
  {
    "id": "inv-bhopal-muni",
    "title": "Bhopal Municipal Corporation Green Muni Bond",
    "slug": "bhopal-municipal-corporation-green-bond",
    "description": "AA rated green municipal bond issued by Bhopal Municipal Corporation (BMC) on NSE (2023) to fund a 21 MW solar power project at Neemuch to power water pumping stations in Bhopal.",
    "authority": "Bhopal Municipal Corporation (BMC) / Government of Madhya Pradesh",
    "category": "Municipal Bonds",
    "status": "ACTIVE / TRADED",
    "sourceUrl": "https://www.bhopalmunicipalcorporation.org",
    "sourceAuthority": "Bhopal Municipal Corporation / Urban Development Dept, MP / NSE",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100000,
    "expectedReturn": "7.80% p.a. Semi-Annual Coupon (Series 2023)",
    "lockInPeriod": "5 Years Maturity (2023–2028; Secondary Traded)",
    "riskLevel": "Low",
    "depositRules": "Issued on NSE electronic bidding platform; traded on NSE debt segment in demat form.",
    "returnMechanism": "Semi-annual coupon payout directly to registered bank account; bullet redemption of principal upon maturity.",
    "taxTreatment": "Interest income is taxable as per applicable income tax slab rates.",
    "withdrawalRules": "Secondary market exit via stock exchange debt desks.",
    "importantRules": [
      "Certified green bond financing renewable solar energy to offset municipal electricity expenditure.",
      "AA rating with escrow mechanism on municipal water supply revenues."
    ],
    "faqs": [
      {
        "question": "What green asset does the Bhopal Municipal Corporation bond finance?",
        "answer": "The bond financed a 21 MW solar power plant at Neemuch dedicated to powering Bhopal municipal water pumping stations."
      }
    ]
  },
  {
    "id": "inv-pcmc-muni",
    "title": "Pimpri-Chinchwad Municipal Corporation Bond",
    "slug": "pcmc-municipal-corporation-bond",
    "description": "AA+ rated municipal bond and sustainable infrastructure debt framework of Pimpri-Chinchwad Municipal Corporation (PCMC) under SEBI regulations to fund urban transport, sewage treatment, and smart city projects.",
    "authority": "Pimpri-Chinchwad Municipal Corporation (PCMC) / Government of Maharashtra",
    "category": "Municipal Bonds",
    "status": "ACTIVE / TRADED",
    "sourceUrl": "https://www.pcmcindia.gov.in",
    "sourceAuthority": "Pimpri-Chinchwad Municipal Corporation / MoHUA / SEBI",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100000,
    "expectedReturn": "Market-Determined Semi-Annual Municipal Yield (Series Specific)",
    "lockInPeriod": "Series Maturity (Typically 5 to 10 Years)",
    "riskLevel": "Low",
    "depositRules": "Issued through institutional private placement / book-building on stock exchange electronic platforms in demat format.",
    "returnMechanism": "Semi-annual interest coupon credited electronically; principal repaid via dedicated debt service escrow accounts.",
    "taxTreatment": "Taxable under Income from Other Sources at applicable investor slab rates.",
    "withdrawalRules": "Secondary market trading on stock exchange debt segments.",
    "importantRules": [
      "One of India wealthiest urban local bodies with exceptional revenue surplus and AA+ credit rating.",
      "Governed under Maharashtra Municipal Corporations Act with structured escrow safeguards."
    ],
    "faqs": [
      {
        "question": "What is PCMC credit profile among Indian municipalities?",
        "answer": "PCMC holds an AA+ credit rating, among the highest for urban local bodies in India, due to its robust industrial tax base."
      }
    ]
  },
  {
    "id": "inv-chennai-muni",
    "title": "Chennai Municipal Corporation Green Bond",
    "slug": "chennai-municipal-corporation-green-bond",
    "description": "Municipal debt and green bond financing framework of Greater Chennai Corporation (GCC) to fund climate-resilient storm water drainage, eco-restoration of water bodies, and electric mobility infrastructure.",
    "authority": "Greater Chennai Corporation (GCC) / Government of Tamil Nadu",
    "category": "Municipal Bonds",
    "status": "ACTIVE / TRADED",
    "sourceUrl": "https://chennaicorporation.gov.in",
    "sourceAuthority": "Greater Chennai Corporation / Municipal Administration Dept, TN",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100000,
    "expectedReturn": "Semi-Annual Municipal Yield (Series Specific)",
    "lockInPeriod": "Series Maturity (Typically 5 to 10 Years)",
    "riskLevel": "Low",
    "depositRules": "Issued via stock exchange electronic bidding platforms for institutional placement; traded in demat format.",
    "returnMechanism": "Semi-annual coupon credited directly to linked bank account; principal repaid at scheduled maturity.",
    "taxTreatment": "Interest income is fully taxable under Income from Other Sources.",
    "withdrawalRules": "Secondary market exit via stock exchange wholesale debt platforms.",
    "importantRules": [
      "Earmarked for climate resilience and storm water management in vulnerable coastal urban zones.",
      "High investment-grade credit rating with statutory revenue escrow protections."
    ],
    "faqs": [
      {
        "question": "What climate resilience projects are prioritized by Greater Chennai Corporation?",
        "answer": "Key projects include comprehensive storm water drainage networks in Kosasthalaiyar and Kovalam basins and urban water body restoration."
      }
    ]
  },
  {
    "id": "inv-vizag-muni",
    "title": "Visakhapatnam Municipal Corporation Bond",
    "slug": "visakhapatnam-municipal-corporation-bond",
    "description": "AA rated municipal bond issued by Greater Visakhapatnam Municipal Corporation (GVMC) on BSE to finance 24x7 smart water supply and underground sewerage infrastructure under the Smart Cities Mission.",
    "authority": "Greater Visakhapatnam Municipal Corporation (GVMC) / Government of Andhra Pradesh",
    "category": "Municipal Bonds",
    "status": "ACTIVE / TRADED",
    "sourceUrl": "https://www.gvmc.gov.in",
    "sourceAuthority": "Greater Visakhapatnam Municipal Corporation / MoHUA / SEBI",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100000,
    "expectedReturn": "7.90% p.a. Semi-Annual Coupon (Series Specific)",
    "lockInPeriod": "5 to 10 Years Maturity (Series Dependent)",
    "riskLevel": "Low",
    "depositRules": "Issued through BSE EBP platform; traded on BSE debt market segment in demat form.",
    "returnMechanism": "Semi-annual interest coupon credited to registered bank account; bullet redemption of principal upon maturity.",
    "taxTreatment": "Coupon interest is taxable under Income from Other Sources as per investor slab rate.",
    "withdrawalRules": "Tradable on stock exchange secondary market debt desks.",
    "importantRules": [
      "Secured by designated escrow of property tax and non-tax revenues.",
      "AA rating by CRISIL and India Ratings with MoHUA financial incentives."
    ],
    "faqs": [
      {
        "question": "What infrastructure was supported by the GVMC municipal bond?",
        "answer": "Proceeds were invested in expanding underground drainage networks and continuous water supply infrastructure across Visakhapatnam."
      }
    ]
  },
  {
    "id": "inv-nagpur-muni",
    "title": "Nagpur Municipal Corporation Bond",
    "slug": "nagpur-municipal-corporation-bond",
    "description": "Municipal infrastructure debt and bond framework of Nagpur Municipal Corporation (NMC) to fund 24x7 uninterrupted water supply projects, sewage treatment plants, and smart transport corridors.",
    "authority": "Nagpur Municipal Corporation (NMC) / Government of Maharashtra",
    "category": "Municipal Bonds",
    "status": "ACTIVE / TRADED",
    "sourceUrl": "https://www.nmcnagpur.gov.in",
    "sourceAuthority": "Nagpur Municipal Corporation / MoHUA / SEBI",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100000,
    "expectedReturn": "Market-Determined Semi-Annual Municipal Yield (Series Specific)",
    "lockInPeriod": "Series Maturity (Typically 5 to 10 Years)",
    "riskLevel": "Low",
    "depositRules": "Placed through stock exchange electronic bidding mechanisms in demat mode for institutional and HNI investors.",
    "returnMechanism": "Semi-annual coupon payout directly to bank account; principal refunded through structured escrow sinking fund.",
    "taxTreatment": "Interest income is fully taxable under Income from Other Sources.",
    "withdrawalRules": "Secondary market exit via stock exchange debt trading desks.",
    "importantRules": [
      "Structured escrow mechanism on property tax collection accounts.",
      "Investment-grade credit rating supported by Maharashtra Urban Development Department frameworks."
    ],
    "faqs": [
      {
        "question": "What is the debt servicing mechanism for Nagpur Municipal Corporation bonds?",
        "answer": "Debt service is secured via an escrow account into which daily municipal collections are deposited prior to other administrative spending."
      }
    ]
  },
  {
    "id": "inv-boi-tier2",
    "title": "Bank of India Tier-2 Bonds",
    "slug": "bank-of-india-tier-2-bonds",
    "description": "Basel III compliant subordinated taxable non-convertible Tier-2 debt bonds issued by Bank of India, a leading Public Sector Bank under the Ministry of Finance, to augment its regulatory Tier-2 capital base.",
    "authority": "Bank of India / Reserve Bank of India (RBI)",
    "category": "Corporate Bonds & Debentures",
    "status": "ACTIVE / TRADED",
    "sourceUrl": "https://www.bankofindia.co.in",
    "sourceAuthority": "Bank of India / Reserve Bank of India",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100000,
    "expectedReturn": "Fixed Annual Subordinated Coupon (Series Specific)",
    "lockInPeriod": "10 Years Maturity with 5-Year Call Option (Series Dependent)",
    "riskLevel": "Medium",
    "depositRules": "Issued via Electronic Bidding Provider (EBP) platforms on BSE/NSE on private placement basis for Qualified Institutional Buyers and HNIs; listed on NSE/BSE debt segments in demat mode.",
    "returnMechanism": "Annual interest coupon paid directly to linked bank account; bullet redemption of principal at maturity or on exercise of call option (subject to RBI approval).",
    "taxTreatment": "Coupon interest is taxable under Income from Other Sources at applicable investor slab rates. No TDS for demat listed securities under Section 193.",
    "withdrawalRules": "Tradable on stock exchange secondary market debt desks.",
    "importantRules": [
      "Basel III regulatory capital instrument with Loss Absorption Point of Non-Viability (PONV) clause.",
      "Subordinated to claims of depositors and general senior creditors.",
      "AA+ credit rating with majority Government of India ownership."
    ],
    "faqs": [
      {
        "question": "What is the PONV clause in Basel III Tier-2 bonds?",
        "answer": "Point of Non-Viability (PONV) is an RBI-mandated clause where the bonds may be written off or converted if the bank reaches severe financial distress as determined by the Reserve Bank of India."
      }
    ]
  },
  {
    "id": "inv-central-bank-tier2",
    "title": "Central Bank of India Tier-2 Bonds",
    "slug": "central-bank-of-india-tier-2-bonds",
    "description": "Basel III compliant unsecured subordinated taxable Tier-2 bonds issued by Central Bank of India to strengthen its capital adequacy ratio and support credit expansion across retail, MSME, and agriculture sectors.",
    "authority": "Central Bank of India / Reserve Bank of India (RBI)",
    "category": "Corporate Bonds & Debentures",
    "status": "ACTIVE / TRADED",
    "sourceUrl": "https://www.centralbankofindia.co.in",
    "sourceAuthority": "Central Bank of India / Reserve Bank of India",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100000,
    "expectedReturn": "Fixed Annual Subordinated Coupon (Series Specific)",
    "lockInPeriod": "10 Years Tenure (Call Option after 5 Years)",
    "riskLevel": "Medium",
    "depositRules": "Placed through private placement EBP auctions for institutional investors; listed and traded on NSE and BSE debt segments in demat mode.",
    "returnMechanism": "Annual interest coupon credited to registered bank account; principal repaid at par upon maturity or call option.",
    "taxTreatment": "Interest income is fully taxable at applicable slab rates under Income from Other Sources.",
    "withdrawalRules": "Secondary market exit via stock exchange debt segments.",
    "importantRules": [
      "Subordinated debt instrument under RBI Basel III guidelines with PONV loss-absorption trigger.",
      "Backed by Government of India majority shareholding with AA/AA+ credit rating."
    ],
    "faqs": [
      {
        "question": "Are Tier-2 bonds insured by DICGC like bank deposits?",
        "answer": "No. Tier-2 bonds are subordinated capital market instruments and are NOT covered by DICGC insurance."
      }
    ]
  },
  {
    "id": "inv-indian-bank-tier2",
    "title": "Indian Bank Tier-2 Bonds",
    "slug": "indian-bank-tier-2-bonds",
    "description": "AAA/AA+ rated Basel III compliant unsecured subordinated taxable Tier-2 debt securities issued by Indian Bank to augment its regulatory capital base and support asset growth.",
    "authority": "Indian Bank / Reserve Bank of India (RBI)",
    "category": "Corporate Bonds & Debentures",
    "status": "ACTIVE / TRADED",
    "sourceUrl": "https://www.indianbank.in",
    "sourceAuthority": "Indian Bank / Reserve Bank of India",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100000,
    "expectedReturn": "Fixed Annual Subordinated Coupon (Series Specific)",
    "lockInPeriod": "10 Years Maturity (Call Option at 5 Years)",
    "riskLevel": "Medium",
    "depositRules": "Issued on BSE/NSE Electronic Bidding Provider platforms on private placement basis; secondary trading in demat format.",
    "returnMechanism": "Annual interest coupon paid directly into investor bank account; bullet redemption of principal upon maturity.",
    "taxTreatment": "Coupon interest is taxable at investor marginal income tax slab. Capital gains on transfer taxed under listed debt rules.",
    "withdrawalRules": "Tradable on stock exchange secondary market debt desks.",
    "importantRules": [
      "High asset quality and robust capital adequacy ratio (CAR) exceeding RBI regulatory mandates.",
      "AAA / AA+ rating from CRISIL, CARE, and India Ratings."
    ],
    "faqs": [
      {
        "question": "When can Indian Bank exercise the call option on Tier-2 bonds?",
        "answer": "The call option can be exercised on or after the 5th anniversary of issuance, subject to prior approval from the Reserve Bank of India."
      }
    ]
  },
  {
    "id": "inv-iob-tier2",
    "title": "Indian Overseas Bank Tier-2 Bonds",
    "slug": "indian-overseas-bank-tier-2-bonds",
    "description": "Basel III compliant unsecured subordinated taxable Tier-2 capital bonds issued by Indian Overseas Bank to augment its capital adequacy ratio under RBI regulatory guidelines.",
    "authority": "Indian Overseas Bank / Reserve Bank of India (RBI)",
    "category": "Corporate Bonds & Debentures",
    "status": "ACTIVE / TRADED",
    "sourceUrl": "https://www.iob.in",
    "sourceAuthority": "Indian Overseas Bank / Reserve Bank of India",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100000,
    "expectedReturn": "Fixed Annual Subordinated Coupon (Series Specific)",
    "lockInPeriod": "10 Years Tenure (Call Option at 5 Years)",
    "riskLevel": "Medium",
    "depositRules": "Placed through private placement EBP bidding mechanisms for institutional entities; listed and secondary traded on NSE/BSE.",
    "returnMechanism": "Annual interest coupon credited electronically; face value refunded upon maturity or call option redemption.",
    "taxTreatment": "Interest income is fully taxable under Income from Other Sources at applicable income tax rates.",
    "withdrawalRules": "Secondary market exit via stock exchange debt trading platforms.",
    "importantRules": [
      "Subordinated to senior creditors with Point of Non-Viability (PONV) clause under Basel III regulations.",
      "Public Sector Bank with majority Government of India equity stake and AA rating."
    ],
    "faqs": [
      {
        "question": "Who is the majority shareholder of Indian Overseas Bank?",
        "answer": "The Government of India is the majority promoter and owner of Indian Overseas Bank."
      }
    ]
  },
  {
    "id": "inv-uco-bank-tier2",
    "title": "UCO Bank Tier-2 Bonds",
    "slug": "uco-bank-tier-2-bonds",
    "description": "Basel III compliant subordinated taxable non-convertible Tier-2 debt bonds issued by UCO Bank, a leading Public Sector Bank under the Ministry of Finance, to enhance long-term regulatory capital.",
    "authority": "UCO Bank / Reserve Bank of India (RBI)",
    "category": "Corporate Bonds & Debentures",
    "status": "ACTIVE / TRADED",
    "sourceUrl": "https://www.ucobank.com",
    "sourceAuthority": "UCO Bank / Reserve Bank of India",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100000,
    "expectedReturn": "Fixed Annual Subordinated Coupon (Series Specific)",
    "lockInPeriod": "10 Years Maturity (Call Option at 5 Years)",
    "riskLevel": "Medium",
    "depositRules": "Issued via Electronic Bidding Provider (EBP) platforms for institutional bidding; secondary market trading on NSE and BSE debt segments in demat mode.",
    "returnMechanism": "Annual coupon payment credited to registered bank account; principal repaid at face value upon maturity.",
    "taxTreatment": "Coupon interest is taxable at investor slab rate under Income from Other Sources.",
    "withdrawalRules": "Tradable on stock exchange secondary market debt desks.",
    "importantRules": [
      "Basel III regulatory capital instrument with Loss Absorption Point of Non-Viability (PONV) clause.",
      "AA rating backed by sovereign ownership and turn-around profitability."
    ],
    "faqs": [
      {
        "question": "Where is UCO Bank headquartered?",
        "answer": "UCO Bank is headquartered in Kolkata, West Bengal, and operates nationwide across India."
      }
    ]
  },
  {
    "id": "inv-bom-tier2",
    "title": "Bank of Maharashtra Tier-2 Bonds",
    "slug": "bank-of-maharashtra-tier-2-bonds",
    "description": "AA+ rated Basel III compliant unsecured subordinated taxable Tier-2 capital bonds issued by Bank of Maharashtra to augment Tier-2 capital and support loan book expansion.",
    "authority": "Bank of Maharashtra / Reserve Bank of India (RBI)",
    "category": "Corporate Bonds & Debentures",
    "status": "ACTIVE / TRADED",
    "sourceUrl": "https://bankofmaharashtra.in",
    "sourceAuthority": "Bank of Maharashtra / Reserve Bank of India",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100000,
    "expectedReturn": "Fixed Annual Subordinated Coupon (Series Specific)",
    "lockInPeriod": "10 Years Maturity (Call Option at 5 Years)",
    "riskLevel": "Medium",
    "depositRules": "Subscribed through private placement EBP auctions on BSE/NSE; listed and secondary traded on NSE and BSE debt segments.",
    "returnMechanism": "Annual interest coupon paid directly to linked bank account; bullet redemption of principal at maturity or call exercise.",
    "taxTreatment": "Interest income is fully taxable under Income from Other Sources as per applicable income tax slab rates.",
    "withdrawalRules": "Secondary market exit via stock exchange debt segments.",
    "importantRules": [
      "Ranked among the fastest growing Public Sector Banks with lowest Net NPA ratios and high CAR.",
      "AA+ credit rating with majority Government of India equity shareholding."
    ],
    "faqs": [
      {
        "question": "What is Bank of Maharashtra credit rating on Tier-2 bonds?",
        "answer": "Bank of Maharashtra Tier-2 bonds carry an AA+ rating from domestic credit rating agencies such as CRISIL, CARE, and India Ratings."
      }
    ]
  },
  {
    "id": "inv-psb-tier2",
    "title": "Punjab & Sind Bank Tier-2 Bonds",
    "slug": "punjab-and-sind-bank-tier-2-bonds",
    "description": "Basel III compliant unsecured subordinated taxable Tier-2 capital bonds issued by Punjab & Sind Bank (a Government of India undertaking) to augment capital adequacy and support credit growth.",
    "authority": "Punjab & Sind Bank / Reserve Bank of India (RBI)",
    "category": "Corporate Bonds & Debentures",
    "status": "ACTIVE / TRADED",
    "sourceUrl": "https://punjabandsindbank.co.in",
    "sourceAuthority": "Punjab & Sind Bank / Reserve Bank of India",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100000,
    "expectedReturn": "Fixed Annual Subordinated Coupon (Series Specific)",
    "lockInPeriod": "10 Years Maturity (Call Option at 5 Years)",
    "riskLevel": "Medium",
    "depositRules": "Placed through private placement EBP bidding mechanisms for institutional entities; listed and secondary traded on NSE and BSE in demat mode.",
    "returnMechanism": "Annual coupon credited directly to registered bank account; bullet redemption of principal at maturity or call exercise.",
    "taxTreatment": "Coupon interest is taxable at applicable slab rates under Income from Other Sources.",
    "withdrawalRules": "Secondary market exit via stock exchange debt trading platforms.",
    "importantRules": [
      "Subordinated to claims of depositors and senior creditors with Loss Absorption PONV clause under Basel III.",
      "Public Sector Bank with majority Government of India shareholding and AA/AA- credit rating."
    ],
    "faqs": [
      {
        "question": "Who regulates Punjab & Sind Bank Tier-2 bond issuances?",
        "answer": "They are regulated under Reserve Bank of India Basel III capital regulations and SEBI Debt Listing guidelines."
      }
    ]
  },
  {
    "id": "inv-indusind-tier2",
    "title": "IndusInd Bank Tier-2 Bonds",
    "slug": "indusind-bank-tier-2-bonds",
    "description": "AA+ rated Basel III compliant unsecured subordinated taxable Tier-2 debt securities issued by IndusInd Bank Limited to reinforce capital adequacy and fund asset expansion.",
    "authority": "IndusInd Bank Limited / Reserve Bank of India (RBI)",
    "category": "Corporate Bonds & Debentures",
    "status": "ACTIVE / TRADED",
    "sourceUrl": "https://www.indusind.com",
    "sourceAuthority": "IndusInd Bank / Reserve Bank of India / SEBI",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100000,
    "expectedReturn": "Fixed Annual Subordinated Coupon (Series Specific)",
    "lockInPeriod": "10 Years Maturity (Call Option at 5 Years)",
    "riskLevel": "Medium",
    "depositRules": "Issued on BSE/NSE Electronic Bidding Provider platforms on private placement basis; secondary trading on NSE/BSE debt segments.",
    "returnMechanism": "Annual interest coupon paid directly to bank account; principal repaid at par upon maturity or call option redemption.",
    "taxTreatment": "Coupon interest is taxable at investor marginal income tax slab. Capital gains on transfer taxed under listed debt rules.",
    "withdrawalRules": "Secondary market liquidity on stock exchange wholesale debt desks.",
    "importantRules": [
      "Basel III regulatory capital instrument with Point of Non-Viability (PONV) loss-absorption terms.",
      "Rated AA+ by CRISIL and India Ratings."
    ],
    "faqs": [
      {
        "question": "Are IndusInd Bank Tier-2 bonds secured against bank assets?",
        "answer": "No. They are unsecured subordinated debt instruments ranking below senior creditors and depositors."
      }
    ]
  },
  {
    "id": "inv-federal-bank-tier2",
    "title": "Federal Bank Tier-2 Bonds",
    "slug": "federal-bank-tier-2-bonds",
    "description": "AA+ rated Basel III compliant unsecured subordinated taxable Tier-2 debt securities issued by The Federal Bank Limited to augment regulatory capital and support nationwide credit operations.",
    "authority": "The Federal Bank Limited / Reserve Bank of India (RBI)",
    "category": "Corporate Bonds & Debentures",
    "status": "ACTIVE / TRADED",
    "sourceUrl": "https://www.federalbank.co.in",
    "sourceAuthority": "The Federal Bank Limited / Reserve Bank of India",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100000,
    "expectedReturn": "Fixed Annual Subordinated Coupon (Series Specific)",
    "lockInPeriod": "10 Years Maturity (Call Option at 5 Years)",
    "riskLevel": "Medium",
    "depositRules": "Issued through private placement EBP auctions for institutional investors; listed and traded on NSE and BSE debt segments in demat mode.",
    "returnMechanism": "Annual interest coupon credited electronically; bullet redemption of principal upon maturity.",
    "taxTreatment": "Interest income is fully taxable under Income from Other Sources as per investor slab rate.",
    "withdrawalRules": "Tradable on stock exchange secondary market debt desks.",
    "importantRules": [
      "Subordinated debt under RBI Basel III guidelines with PONV loss-absorption clause.",
      "High asset quality and strong capital buffer rated AA+ by CRISIL and India Ratings."
    ],
    "faqs": [
      {
        "question": "What is the maturity period of Federal Bank Tier-2 bonds?",
        "answer": "Typically 10 years from the date of allotment with an issuer call option exercisable after 5 years subject to RBI approval."
      }
    ]
  },
  {
    "id": "inv-idfc-first-tier2",
    "title": "IDFC FIRST Bank Tier-2 Bonds",
    "slug": "idfc-first-bank-tier-2-bonds",
    "description": "AA+ rated Basel III compliant unsecured subordinated taxable Tier-2 bonds issued by IDFC FIRST Bank Limited to augment capital adequacy and support diversified retail and commercial lending.",
    "authority": "IDFC FIRST Bank Limited / Reserve Bank of India (RBI)",
    "category": "Corporate Bonds & Debentures",
    "status": "ACTIVE / TRADED",
    "sourceUrl": "https://www.idfcfirstbank.com",
    "sourceAuthority": "IDFC FIRST Bank / Reserve Bank of India",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100000,
    "expectedReturn": "Fixed Annual Subordinated Coupon (Series Specific)",
    "lockInPeriod": "10 Years Maturity (Call Option at 5 Years)",
    "riskLevel": "Medium",
    "depositRules": "Subscribed through private placement EBP auctions on BSE/NSE; listed and secondary traded in demat format.",
    "returnMechanism": "Annual coupon payment credited to registered bank account; bullet redemption of principal at maturity.",
    "taxTreatment": "Coupon interest is taxable at investor slab rate under Income from Other Sources.",
    "withdrawalRules": "Secondary market exit via stock exchange debt segments.",
    "importantRules": [
      "Basel III regulatory capital instrument with Loss Absorption Point of Non-Viability (PONV) clause.",
      "AA+ credit rating by CRISIL, CARE, and India Ratings."
    ],
    "faqs": [
      {
        "question": "Who can invest in IDFC FIRST Bank Tier-2 bond primary placements?",
        "answer": "Primary placement is conducted via EBP for institutional entities, banks, mutual funds, insurance companies, and qualified HNIs."
      }
    ]
  },
  {
    "id": "inv-sbi-infra-bonds",
    "title": "State Bank of India Long-Term Infrastructure Bonds",
    "slug": "sbi-long-term-infrastructure-bonds",
    "description": "AAA-rated long-term senior taxable infrastructure bonds issued by State Bank of India under RBI long-term bond guidelines for financing infrastructure and affordable housing projects.",
    "authority": "State Bank of India / Reserve Bank of India (RBI)",
    "category": "Corporate Bonds & Debentures",
    "status": "ACTIVE / TRADED",
    "sourceUrl": "https://sbi.co.in",
    "sourceAuthority": "State Bank of India / Reserve Bank of India / SEBI",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100000,
    "expectedReturn": "7.36%–7.54% p.a. Annual Coupon (Series Dependent)",
    "lockInPeriod": "15 Years Maturity (Secondary Traded)",
    "riskLevel": "Low",
    "depositRules": "Issued through private placement EBP auctions for institutional investors; listed and traded on NSE and BSE debt segments in demat mode.",
    "returnMechanism": "Annual interest coupon paid directly to bank account; bullet repayment of principal at scheduled maturity.",
    "taxTreatment": "Coupon interest is taxable under Income from Other Sources as per investor slab rate. (Exempt from CRR/SLR requirements for the issuing bank).",
    "withdrawalRules": "Tradable on stock exchange secondary market debt desks.",
    "importantRules": [
      "Senior, unsecured, redeemable non-convertible debt securities issued under RBI circulars on infrastructure bond issuance.",
      "Pristine AAA credit rating by CRISIL, ICRA, and India Ratings."
    ],
    "faqs": [
      {
        "question": "What is the purpose of SBI Infrastructure Bonds?",
        "answer": "Proceeds are exclusively utilized to provide long-term credit to national infrastructure sectors and affordable housing projects across India."
      }
    ]
  },
  {
    "id": "inv-hdfc-infra-bonds",
    "title": "HDFC Bank Long-Term Infrastructure Bonds",
    "slug": "hdfc-bank-long-term-infrastructure-bonds",
    "description": "AAA-rated long-term senior taxable infrastructure and affordable housing bonds issued by HDFC Bank Limited under RBI regulations to fund major infrastructure projects and home loans.",
    "authority": "HDFC Bank Limited / Reserve Bank of India (RBI)",
    "category": "Corporate Bonds & Debentures",
    "status": "ACTIVE / TRADED",
    "sourceUrl": "https://www.hdfcbank.com",
    "sourceAuthority": "HDFC Bank / Reserve Bank of India",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100000,
    "expectedReturn": "7.40%–7.70% p.a. Annual Coupon (Series Dependent)",
    "lockInPeriod": "10 to 15 Years Maturity (Secondary Traded)",
    "riskLevel": "Low",
    "depositRules": "Placed through private placement EBP bidding on BSE/NSE for institutional entities; listed and secondary traded on NSE and BSE.",
    "returnMechanism": "Annual interest coupon credited electronically; principal repaid at face value at maturity.",
    "taxTreatment": "Coupon interest is taxable under Income from Other Sources at applicable income tax rates.",
    "withdrawalRules": "Secondary market exit via stock exchange debt trading platforms.",
    "importantRules": [
      "Senior unsecured debt securities issued under RBI framework for Long-Term Bonds for Infrastructure and Affordable Housing.",
      "AAA credit rating by CRISIL and CARE."
    ],
    "faqs": [
      {
        "question": "Are HDFC Bank Infrastructure Bonds senior or subordinated?",
        "answer": "Infrastructure bonds are senior debt securities ranking pari-passu with other senior unsecured creditors of the bank."
      }
    ]
  },
  {
    "id": "inv-icici-infra-bonds",
    "title": "ICICI Bank Long-Term Infrastructure Bonds",
    "slug": "icici-bank-long-term-infrastructure-bonds",
    "description": "AAA-rated long-term senior taxable bonds issued by ICICI Bank Limited under RBI guidelines to fund infrastructure and affordable housing lending.",
    "authority": "ICICI Bank Limited / Reserve Bank of India (RBI)",
    "category": "Corporate Bonds & Debentures",
    "status": "ACTIVE / TRADED",
    "sourceUrl": "https://www.icicibank.com",
    "sourceAuthority": "ICICI Bank / Reserve Bank of India",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100000,
    "expectedReturn": "7.45%–7.65% p.a. Annual Coupon (Series Dependent)",
    "lockInPeriod": "10 to 15 Years Maturity (Secondary Traded)",
    "riskLevel": "Low",
    "depositRules": "Issued via Electronic Bidding Provider (EBP) platforms on BSE/NSE for institutional bidding; secondary trading in demat form on NSE/BSE.",
    "returnMechanism": "Annual interest coupon credited to registered bank account; bullet redemption of principal at maturity.",
    "taxTreatment": "Interest income is fully taxable under Income from Other Sources as per investor slab rate.",
    "withdrawalRules": "Secondary market exit via stock exchange wholesale debt desks.",
    "importantRules": [
      "Senior unsecured debentures issued under RBI infrastructure financing norms.",
      "AAA credit rating with strong asset quality buffer."
    ],
    "faqs": [
      {
        "question": "What projects are eligible for funding from ICICI Bank Infrastructure Bonds?",
        "answer": "Eligible projects include power generation/transmission, transportation, roads, telecommunications, and affordable housing."
      }
    ]
  },
  {
    "id": "inv-axis-infra-bonds",
    "title": "Axis Bank Long-Term Infrastructure Bonds",
    "slug": "axis-bank-long-term-infrastructure-bonds",
    "description": "AAA-rated senior taxable infrastructure debt bonds issued by Axis Bank Limited under RBI regulations to fund long-term infrastructure and affordable housing projects.",
    "authority": "Axis Bank Limited / Reserve Bank of India (RBI)",
    "category": "Corporate Bonds & Debentures",
    "status": "ACTIVE / TRADED",
    "sourceUrl": "https://www.axisbank.com",
    "sourceAuthority": "Axis Bank / Reserve Bank of India",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100000,
    "expectedReturn": "7.50%–7.75% p.a. Annual Coupon (Series Dependent)",
    "lockInPeriod": "10 Years Maturity (Secondary Traded)",
    "riskLevel": "Low",
    "depositRules": "Placed through private placement EBP bidding mechanisms for institutional entities; listed and secondary traded on NSE/BSE.",
    "returnMechanism": "Annual coupon payment credited to registered bank account; bullet repayment of principal at maturity.",
    "taxTreatment": "Coupon interest is taxable at investor slab rate under Income from Other Sources.",
    "withdrawalRules": "Tradable on stock exchange secondary market debt desks.",
    "importantRules": [
      "Senior unsecured debt securities issued under RBI framework for Long-Term Bonds for Infrastructure Financing.",
      "AAA credit rating from CRISIL and India Ratings."
    ],
    "faqs": [
      {
        "question": "How do RBI rules benefit banks issuing infrastructure bonds?",
        "answer": "Proceeds raised through long-term infrastructure bonds are exempt from CRR and SLR requirements and priority sector lending targets."
      }
    ]
  },
  {
    "id": "inv-bob-infra-bonds",
    "title": "Bank of Baroda Long-Term Infrastructure Bonds",
    "slug": "bank-of-baroda-long-term-infrastructure-bonds",
    "description": "AAA-rated long-term senior taxable infrastructure bonds issued by Bank of Baroda (a Government of India undertaking) to fund national infrastructure assets and affordable housing.",
    "authority": "Bank of Baroda / Reserve Bank of India (RBI)",
    "category": "Corporate Bonds & Debentures",
    "status": "ACTIVE / TRADED",
    "sourceUrl": "https://www.bankofbaroda.in",
    "sourceAuthority": "Bank of Baroda / Reserve Bank of India",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100000,
    "expectedReturn": "7.30%–7.55% p.a. Annual Coupon (Series Dependent)",
    "lockInPeriod": "10 to 15 Years Maturity (Secondary Traded)",
    "riskLevel": "Low",
    "depositRules": "Issued via Electronic Bidding Provider (EBP) platforms for institutional bidding; secondary market trading on NSE/BSE debt segments in demat mode.",
    "returnMechanism": "Annual interest coupon paid directly into investor bank account; bullet redemption of principal upon maturity.",
    "taxTreatment": "Coupon interest is taxable at investor marginal income tax slab.",
    "withdrawalRules": "Secondary market exit via stock exchange debt segments.",
    "importantRules": [
      "Senior unsecured debt securities issued under RBI infrastructure bond guidelines.",
      "AAA credit rating backed by majority Government of India equity ownership."
    ],
    "faqs": [
      {
        "question": "What is the credit rating of Bank of Baroda Infrastructure Bonds?",
        "answer": "They carry the highest domestic credit rating of AAA from CRISIL, India Ratings, and CARE."
      }
    ]
  },
  {
    "id": "inv-canara-infra-bonds",
    "title": "Canara Bank Long-Term Infrastructure Bonds",
    "slug": "canara-bank-long-term-infrastructure-bonds",
    "description": "AAA-rated senior taxable infrastructure debt bonds issued by Canara Bank (a Government of India undertaking) to finance core infrastructure projects and affordable housing.",
    "authority": "Canara Bank / Reserve Bank of India (RBI)",
    "category": "Corporate Bonds & Debentures",
    "status": "ACTIVE / TRADED",
    "sourceUrl": "https://canarabank.com",
    "sourceAuthority": "Canara Bank / Reserve Bank of India",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100000,
    "expectedReturn": "7.40%–7.60% p.a. Annual Coupon (Series Dependent)",
    "lockInPeriod": "10 Years Maturity (Secondary Traded)",
    "riskLevel": "Low",
    "depositRules": "Subscribed through private placement EBP auctions on BSE/NSE; listed and secondary traded in demat format.",
    "returnMechanism": "Annual interest coupon credited electronically; principal repaid at face value at maturity.",
    "taxTreatment": "Interest income is fully taxable under Income from Other Sources as per investor slab rate.",
    "withdrawalRules": "Tradable on stock exchange secondary market debt desks.",
    "importantRules": [
      "Senior unsecured debt instrument under RBI infrastructure financing framework.",
      "Pristine AAA credit rating from CRISIL and CARE."
    ],
    "faqs": [
      {
        "question": "What sectors are supported by Canara Bank infrastructure bond proceeds?",
        "answer": "Sectors include roads, highways, ports, power transmission, clean energy, and affordable housing lending."
      }
    ]
  },
  {
    "id": "inv-pnb-infra-bonds",
    "title": "Punjab National Bank Long-Term Infrastructure Bonds",
    "slug": "pnb-long-term-infrastructure-bonds",
    "description": "AAA-rated long-term senior taxable bonds issued by Punjab National Bank under RBI guidelines to raise resources for long-term lending to infrastructure and affordable housing sectors.",
    "authority": "Punjab National Bank / Reserve Bank of India (RBI)",
    "category": "Corporate Bonds & Debentures",
    "status": "ACTIVE / TRADED",
    "sourceUrl": "https://www.pnbindia.in",
    "sourceAuthority": "Punjab National Bank / Reserve Bank of India",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100000,
    "expectedReturn": "7.40%–7.65% p.a. Annual Coupon (Series Dependent)",
    "lockInPeriod": "10 to 15 Years Maturity (Secondary Traded)",
    "riskLevel": "Low",
    "depositRules": "Placed through private placement EBP auctions for institutional investors; listed and traded on NSE and BSE debt segments in demat mode.",
    "returnMechanism": "Annual interest coupon credited to registered bank account; bullet repayment of principal at maturity.",
    "taxTreatment": "Coupon interest is taxable at investor slab rate under Income from Other Sources.",
    "withdrawalRules": "Secondary market exit via stock exchange debt platforms.",
    "importantRules": [
      "Senior unsecured debt instrument issued under RBI guidelines for Infrastructure & Affordable Housing.",
      "AAA credit rating by CRISIL, India Ratings, and CARE."
    ],
    "faqs": [
      {
        "question": "Are PNB infrastructure bonds covered by DICGC deposit insurance?",
        "answer": "No. They are market-listed debt securities and not bank retail deposits; DICGC insurance does not apply."
      }
    ]
  },
  {
    "id": "inv-bob-tax-saver-fd",
    "title": "Bank of Baroda bob Tax Savings Term Deposit",
    "slug": "bank-of-baroda-tax-savings-term-deposit",
    "description": "Tax-saving fixed deposit scheme offered by Bank of Baroda under the Bank Term Deposit Scheme, 2006, allowing individuals and HUFs to claim tax deductions up to Rs 1.5 Lakh per financial year under Section 80C of the Income Tax Act, 1961.",
    "authority": "Bank of Baroda / Ministry of Finance",
    "category": "Fixed Deposits & Bank Schemes",
    "status": "ACTIVE / OPEN",
    "sourceUrl": "https://www.bankofbaroda.in",
    "sourceAuthority": "Bank of Baroda / Income Tax Department",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100,
    "maxInvestment": 150000,
    "expectedReturn": "6.50%–7.15% p.a. (Senior citizens receive 0.50% additional rate)",
    "lockInPeriod": "5 Years Mandatory Lock-in",
    "riskLevel": "Low",
    "depositRules": "Minimum deposit Rs 100 (and in multiples of Rs 100) up to maximum Rs 1,50,000 per financial year; available in non-cumulative (monthly/quarterly interest payout) and cumulative (compounded quarterly) options.",
    "returnMechanism": "Principal with accumulated compounded interest paid on completion of 5-year lock-in, or periodic interest credited to operative savings account.",
    "taxTreatment": "Principal deposit qualifies for deduction up to Rs 1,50,000 per financial year under Section 80C (Old Tax Regime). Interest earned is fully taxable under Income from Other Sources; TDS applicable under Section 194A if total interest exceeds statutory threshold (Rs 40,000 for regular individuals, Rs 50,000 for senior citizens). Form 15G/15H can be submitted for nil TDS if total income is below taxable threshold.",
    "withdrawalRules": "No premature withdrawal permitted before completion of 5 years, except in the event of the depositor death.",
    "importantRules": [
      "Strict 5-year lock-in with no loan or overdraft facility allowed against the deposit.",
      "Cannot be pledged as security/collateral for any credit facility.",
      "In joint accounts, Section 80C tax deduction benefit is available only to the first account holder.",
      "Insured by DICGC up to Rs 5 Lakh (principal + interest) across all accounts in Bank of Baroda."
    ],
    "faqs": [
      {
        "question": "Can I take a loan against my Bank of Baroda Tax Saver FD?",
        "answer": "No. As per the Bank Term Deposit Scheme, 2006, tax-saving fixed deposits cannot be pledged, mortgaged, or used as collateral for any loan or overdraft."
      },
      {
        "question": "What is the minimum and maximum deposit in bob Tax Savings Term Deposit?",
        "answer": "The minimum deposit is Rs 100 and the maximum deposit eligible for Section 80C deduction is Rs 1,50,000 in a financial year."
      }
    ]
  },
  {
    "id": "inv-pnb-tax-saver-fd",
    "title": "Punjab National Bank PNB Tax Saver Fixed Deposit",
    "slug": "pnb-tax-saver-fixed-deposit",
    "description": "Tax-saving fixed deposit scheme offered by Punjab National Bank under the Bank Term Deposit Scheme, 2006, providing Section 80C income tax deduction up to Rs 1.5 Lakh per financial year.",
    "authority": "Punjab National Bank / Ministry of Finance",
    "category": "Fixed Deposits & Bank Schemes",
    "status": "ACTIVE / OPEN",
    "sourceUrl": "https://www.pnbindia.in",
    "sourceAuthority": "Punjab National Bank / Income Tax Department",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100,
    "maxInvestment": 150000,
    "expectedReturn": "6.50%–7.00% p.a. (Senior citizens receive 0.50% additional rate, Super seniors 0.80%)",
    "lockInPeriod": "5 Years Mandatory Lock-in",
    "riskLevel": "Low",
    "depositRules": "Minimum deposit Rs 100 and in multiples of Rs 100 up to maximum Rs 1,50,000 per financial year; available as ordinary term deposit (monthly/quarterly interest) or special term deposit (compounded quarterly reinvestment).",
    "returnMechanism": "Principal and compounded interest paid at the end of 5 years for cumulative option, or periodic interest credited to savings account for non-cumulative option.",
    "taxTreatment": "Principal deposit eligible for deduction under Section 80C of the Income Tax Act, 1961 up to Rs 1.5 Lakh per financial year under Old Tax Regime. Interest earned is fully taxable at applicable slab rates under Income from Other Sources; TDS applicable under Section 194A unless Form 15G/15H is submitted.",
    "withdrawalRules": "Premature withdrawal is strictly prohibited during the 5-year lock-in period, except upon death of the primary depositor.",
    "importantRules": [
      "Mandatory 5-year lock-in period with no premature encashment or pledge facility.",
      "Nomination facility available and recommended at account opening.",
      "In joint accounts, tax benefit under Section 80C is available only to the first holder.",
      "DICGC insurance coverage up to Rs 5 Lakh per depositor."
    ],
    "faqs": [
      {
        "question": "Can PNB Tax Saver FD be opened online?",
        "answer": "Yes, existing PNB customers with internet banking or PNB ONE mobile app can open PNB Tax Saver Fixed Deposits instantly."
      },
      {
        "question": "Who is eligible for the tax benefit in a joint PNB Tax Saver FD?",
        "answer": "In case of joint deposits, the tax deduction under Section 80C is available exclusively to the first account holder."
      }
    ]
  },
  {
    "id": "inv-canara-tax-saver-fd",
    "title": "Canara Bank Tax Saver Term Deposit",
    "slug": "canara-bank-tax-saver-deposit",
    "description": "Tax-saving term deposit scheme offered by Canara Bank under the Bank Term Deposit Scheme, 2006, enabling individuals and HUFs to claim tax deductions under Section 80C up to Rs 1.5 Lakh per financial year.",
    "authority": "Canara Bank / Ministry of Finance",
    "category": "Fixed Deposits & Bank Schemes",
    "status": "ACTIVE / OPEN",
    "sourceUrl": "https://canarabank.com",
    "sourceAuthority": "Canara Bank / Income Tax Department",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100,
    "maxInvestment": 150000,
    "expectedReturn": "6.70%–7.20% p.a. (Senior citizens receive 0.50% additional rate)",
    "lockInPeriod": "5 Years Mandatory Lock-in",
    "riskLevel": "Low",
    "depositRules": "Minimum deposit Rs 100 up to maximum Rs 1,50,000 per financial year; available as Canara Tax Saver Kamadhenu (cumulative with quarterly compounding) or General Term Deposit (periodic monthly/quarterly interest payout).",
    "returnMechanism": "Maturity proceeds along with compounded interest credited to linked account upon completion of 5-year tenure.",
    "taxTreatment": "Qualifies for tax deduction under Section 80C of the Income Tax Act up to Rs 1.50 Lakh per financial year (Old Tax Regime). Interest income is taxable under Income from Other Sources; TDS applicable under Section 194A.",
    "withdrawalRules": "No premature closure permitted before 5 years from deposit date, except in the case of death of the depositor.",
    "importantRules": [
      "Lock-in period of 5 years during which the deposit cannot be closed, transferred, or pledged.",
      "No loan against deposit or overdraft facility permitted.",
      "Protected by DICGC deposit insurance up to Rs 5 Lakh per depositor."
    ],
    "faqs": [
      {
        "question": "What is Canara Tax Saver Kamadhenu deposit?",
        "answer": "It is the cumulative interest option where interest is compounded quarterly and paid along with the principal on maturity after 5 years."
      },
      {
        "question": "Is nomination allowed on Canara Bank Tax Saver FD?",
        "answer": "Yes, nomination facility is available for individual and single-holder accounts."
      }
    ]
  },
  {
    "id": "inv-union-tax-saver-fd",
    "title": "Union Bank of India Union Tax Saver FD",
    "slug": "union-bank-tax-saver-fd",
    "description": "Tax-saving fixed deposit scheme offered by Union Bank of India under the Bank Term Deposit Scheme, 2006, offering income tax relief under Section 80C for deposits up to Rs 1.5 Lakh per financial year.",
    "authority": "Union Bank of India / Ministry of Finance",
    "category": "Fixed Deposits & Bank Schemes",
    "status": "ACTIVE / OPEN",
    "sourceUrl": "https://www.unionbankofindia.co.in",
    "sourceAuthority": "Union Bank of India / Income Tax Department",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 500,
    "maxInvestment": 150000,
    "expectedReturn": "6.50%–7.00% p.a. (Senior citizens receive 0.50% additional rate)",
    "lockInPeriod": "5 Years Mandatory Lock-in",
    "riskLevel": "Low",
    "depositRules": "Minimum deposit Rs 500 up to maximum Rs 1,50,000 per financial year; available in single or joint holding for individuals and Hindu Undivided Families (HUF).",
    "returnMechanism": "Cumulative payout at end of 5 years or non-cumulative monthly/quarterly interest payout to bank account.",
    "taxTreatment": "Principal amount eligible for deduction under Section 80C of the Income Tax Act, 1961 up to Rs 1.5 Lakh per year under the Old Tax Regime. Interest earned is fully taxable; TDS deducted under Section 194A if interest exceeds applicable limits.",
    "withdrawalRules": "Premature closure is strictly barred during the 5-year tenure except in the event of depositor death.",
    "importantRules": [
      "Mandatory lock-in period of 5 years with zero collateral loan eligibility.",
      "Deposit cannot be transferred or encumbered in any form.",
      "DICGC insurance coverage up to Rs 5 Lakh across all accounts with Union Bank of India."
    ],
    "faqs": [
      {
        "question": "Can HUFs invest in Union Tax Saver FD?",
        "answer": "Yes, Hindu Undivided Families (HUF) represented by the Karta are eligible to invest and claim Section 80C deduction."
      },
      {
        "question": "How is interest calculated in cumulative Union Tax Saver FD?",
        "answer": "Interest is compounded on a quarterly basis and paid on maturity after 5 years."
      }
    ]
  },
  {
    "id": "inv-boi-tax-saver-fd",
    "title": "Bank of India Star Tax Saver Fixed Deposit",
    "slug": "bank-of-india-star-tax-saver-fd",
    "description": "Tax-saving fixed deposit scheme offered by Bank of India under the Bank Term Deposit Scheme, 2006, providing Section 80C tax deduction up to Rs 1.5 Lakh per financial year.",
    "authority": "Bank of India / Ministry of Finance",
    "category": "Fixed Deposits & Bank Schemes",
    "status": "ACTIVE / OPEN",
    "sourceUrl": "https://www.bankofindia.co.in",
    "sourceAuthority": "Bank of India / Income Tax Department",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 10000,
    "maxInvestment": 150000,
    "expectedReturn": "6.50%–7.00% p.a. (Senior citizens receive 0.50% additional rate)",
    "lockInPeriod": "5 Years Mandatory Lock-in",
    "riskLevel": "Low",
    "depositRules": "Minimum deposit Rs 10,000 (and in multiples of Rs 1,000) up to maximum Rs 1,50,000 per financial year; available in cumulative and non-cumulative interest payment plans.",
    "returnMechanism": "Cumulative maturity proceeds or periodic interest payout credited to savings account.",
    "taxTreatment": "Principal investment eligible for deduction under Section 80C of the Income Tax Act up to Rs 1,50,000 per financial year (Old Tax Regime). Interest earned is taxable under Income from Other Sources subject to TDS under Section 194A.",
    "withdrawalRules": "No premature withdrawal allowed prior to 5 years, except in case of depositor demise.",
    "importantRules": [
      "Lock-in period of 5 years with no loan or lien facility permitted.",
      "In joint accounts, Section 80C tax certificate is issued only in the name of the first account holder.",
      "DICGC insured up to Rs 5 Lakh per depositor."
    ],
    "faqs": [
      {
        "question": "What is the minimum deposit amount for Star Tax Saver FD?",
        "answer": "The minimum deposit amount for Bank of India Star Tax Saver FD is Rs 10,000 and thereafter in multiples of Rs 1,000."
      },
      {
        "question": "Can I open Star Tax Saver FD via BOI Mobile App?",
        "answer": "Yes, existing KYC-compliant account holders can open Star Tax Saver FDs directly via BOI Omni Neo Mobile Banking or Internet Banking."
      }
    ]
  },
  {
    "id": "inv-icici-tax-saver-fd",
    "title": "ICICI Bank Tax Saver Fixed Deposit",
    "slug": "icici-bank-tax-saver-fd",
    "description": "Tax-saving fixed deposit scheme offered by ICICI Bank Limited under the Bank Term Deposit Scheme, 2006, allowing individuals and HUFs to claim tax deductions up to Rs 1.5 Lakh per financial year under Section 80C of the Income Tax Act, 1961.",
    "authority": "ICICI Bank Limited / Ministry of Finance",
    "category": "Fixed Deposits & Bank Schemes",
    "status": "ACTIVE / OPEN",
    "sourceUrl": "https://www.icicibank.com",
    "sourceAuthority": "ICICI Bank / Income Tax Department",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 10000,
    "maxInvestment": 150000,
    "expectedReturn": "7.00%–7.50% p.a. (Senior citizens receive 0.50% additional rate)",
    "lockInPeriod": "5 Years Mandatory Lock-in",
    "riskLevel": "Low",
    "depositRules": "Minimum deposit Rs 10,000 up to maximum Rs 1,50,000 per financial year; available in Traditional Plan (quarterly or monthly interest payout) and Reinvestment Plan (quarterly compounding paid at maturity).",
    "returnMechanism": "Principal and accrued interest paid at maturity after 5 years or periodic interest credited to linked savings account.",
    "taxTreatment": "Principal deposit qualifies for tax deduction up to Rs 1,50,000 per financial year under Section 80C (Old Tax Regime). Interest is fully taxable under Income from Other Sources; TDS applicable under Section 194A if interest exceeds statutory limits. Submit Form 15G/15H for nil TDS if total income is non-taxable.",
    "withdrawalRules": "No premature withdrawal permitted under any circumstances during the 5-year lock-in period, except in the event of depositor death.",
    "importantRules": [
      "Mandatory 5-year lock-in with zero loan against deposit or overdraft facility.",
      "Deposit cannot be pledged as security or transferred.",
      "In joint holding, Section 80C deduction applies exclusively to the first account holder.",
      "Insured by DICGC up to Rs 5 Lakh per depositor across all ICICI Bank accounts."
    ],
    "faqs": [
      {
        "question": "Can I open an ICICI Bank Tax Saver FD instantly online?",
        "answer": "Yes, existing ICICI Bank customers can open Tax Saver FDs instantly through iMobile Pay app or Internet Banking with instant FD receipt and 80C certificate generation."
      },
      {
        "question": "Is auto-renewal available on ICICI Tax Saver FD?",
        "answer": "Tax Saver FDs do not automatically renew into tax saver mode; at maturity after 5 years, funds are credited to the linked account or renewed into a standard term deposit as per maturity instructions."
      }
    ]
  },
  {
    "id": "inv-axis-tax-saver-fd",
    "title": "Axis Bank Tax Saver Fixed Deposit",
    "slug": "axis-bank-tax-saver-fd",
    "description": "Tax-saving fixed deposit scheme offered by Axis Bank Limited under the Bank Term Deposit Scheme, 2006, providing Section 80C income tax deductions up to Rs 1.5 Lakh per financial year.",
    "authority": "Axis Bank Limited / Ministry of Finance",
    "category": "Fixed Deposits & Bank Schemes",
    "status": "ACTIVE / OPEN",
    "sourceUrl": "https://www.axisbank.com",
    "sourceAuthority": "Axis Bank / Income Tax Department",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100,
    "maxInvestment": 150000,
    "expectedReturn": "7.00%–7.75% p.a. (Senior citizens receive 0.50%–0.75% additional rate)",
    "lockInPeriod": "5 Years Mandatory Lock-in",
    "riskLevel": "Low",
    "depositRules": "Minimum deposit Rs 100 (via digital channels) or Rs 10,000 (branch) up to maximum Rs 1,50,000 per financial year; available in Reinvestment (cumulative) and Quarterly/Monthly Payout modes.",
    "returnMechanism": "Quarterly compounded maturity payout or periodic interest payout directly to linked savings account.",
    "taxTreatment": "Principal deposit eligible for deduction under Section 80C of the Income Tax Act, 1961 up to Rs 1,50,000 per financial year under Old Tax Regime. Interest earned is taxable under Income from Other Sources; TDS deducted under Section 194A unless Form 15G/15H is submitted.",
    "withdrawalRules": "Premature encashment is strictly prohibited during the 5-year lock-in period, except on death of depositor.",
    "importantRules": [
      "Lock-in period of 5 years with no loan or lien facility allowed.",
      "In joint accounts, Section 80C tax deduction benefit is available only to the first account holder.",
      "Insured by DICGC up to Rs 5 Lakh per depositor."
    ],
    "faqs": [
      {
        "question": "How can I download the Section 80C tax certificate for Axis Bank Tax Saver FD?",
        "answer": "You can download the Section 80C deposit certificate instantly from Axis Bank Internet Banking or Axis Mobile App under the Tax Center / Deposit Certificates section."
      },
      {
        "question": "Can an NRI open an Axis Bank Tax Saver Fixed Deposit?",
        "answer": "Tax saver fixed deposits under Section 80C are eligible for Resident Individuals and HUFs; NRE/NRO tax saver deposits have specific guidelines under FEMA."
      }
    ]
  },
  {
    "id": "inv-kotak-tax-saver-fd",
    "title": "Kotak Mahindra Bank Tax Saver Fixed Deposit",
    "slug": "kotak-bank-tax-saver-fd",
    "description": "Tax-saving fixed deposit scheme offered by Kotak Mahindra Bank Limited under the Bank Term Deposit Scheme, 2006, providing Section 80C income tax deductions up to Rs 1.5 Lakh per financial year.",
    "authority": "Kotak Mahindra Bank Limited / Ministry of Finance",
    "category": "Fixed Deposits & Bank Schemes",
    "status": "ACTIVE / OPEN",
    "sourceUrl": "https://www.kotak.com",
    "sourceAuthority": "Kotak Mahindra Bank / Income Tax Department",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100,
    "maxInvestment": 150000,
    "expectedReturn": "7.00%–7.60% p.a. (Senior citizens receive 0.50% additional rate)",
    "lockInPeriod": "5 Years Mandatory Lock-in",
    "riskLevel": "Low",
    "depositRules": "Minimum deposit Rs 100 up to maximum Rs 1,50,000 per financial year; available in cumulative option (compounded quarterly) and non-cumulative option (monthly/quarterly interest payout).",
    "returnMechanism": "Cumulative maturity proceeds or periodic interest payout credited to savings account upon completion of 5-year lock-in.",
    "taxTreatment": "Principal investment qualifies for tax deduction under Section 80C of the Income Tax Act up to Rs 1.50 Lakh per financial year (Old Tax Regime). Interest is taxable under Income from Other Sources; TDS applicable under Section 194A.",
    "withdrawalRules": "No premature withdrawal allowed during the 5-year lock-in period under any circumstances, except upon death of the primary depositor.",
    "importantRules": [
      "Strict 5-year lock-in with zero loan or overdraft facility permitted against the deposit.",
      "Nomination facility available and recommended at account creation.",
      "Protected by DICGC deposit insurance up to Rs 5 Lakh per depositor."
    ],
    "faqs": [
      {
        "question": "Can Kotak 811 account holders open Kotak Tax Saver FD?",
        "answer": "Yes, Kotak 811 account holders with Full KYC can open Tax Saver Fixed Deposits instantly via the Kotak Mobile Banking App."
      },
      {
        "question": "Can I break Kotak Tax Saver FD before 5 years in an emergency?",
        "answer": "No, premature withdrawal is not permitted before 5 years under statutory rules of the Bank Term Deposit Scheme, 2006."
      }
    ]
  },
  {
    "id": "inv-nps-tier2",
    "title": "NPS Tier-II Voluntary Savings & Investment Account",
    "slug": "nps-tier-2-voluntary-account",
    "description": "Voluntary, flexible savings and investment account under the National Pension System (NPS) regulated by PFRDA, available to active Tier-I account holders with no lock-in, complete liquidity, and professional market-linked fund management.",
    "authority": "Pension Fund Regulatory and Development Authority (PFRDA) / Ministry of Finance",
    "category": "Pensions & Social Security",
    "status": "ACTIVE / OPEN",
    "sourceUrl": "https://www.pfrda.org.in",
    "sourceAuthority": "PFRDA / National Pension System Trust / Protean CRA / KFintech CRA",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 250,
    "expectedReturn": "Market-linked returns based on asset allocation across Equity (E), Corporate Debt (C), and Government Securities (G)",
    "lockInPeriod": "No Lock-in (100% Liquid Voluntary Account)",
    "riskLevel": "Medium",
    "depositRules": "Requires an active NPS Tier-I PRAN (Permanent Retirement Account Number); minimum initial contribution Rs 1,000 (Rs 250 for subsequent contributions); no minimum annual contribution required; no upper ceiling on investments.",
    "returnMechanism": "Market-linked Net Asset Value (NAV) appreciation managed by PFRDA-registered Pension Fund Managers (SBI, LIC, HDFC, ICICI, UTI, Kotak, Aditya Birla, Axis, Tata, Max Life, DSP).",
    "taxTreatment": "Contributions to NPS Tier-II are NOT eligible for tax deductions under Section 80CCD (except for Central Government employees opting for the specific Tier-II 80C Tax Saver Scheme with 3-year lock-in). Withdrawals and capital gains are taxable at investor slab rate / capital gains rules as applicable to debt/hybrid mutual funds.",
    "withdrawalRules": "Unlimited instant withdrawals permitted at any time without penalty or exit load; funds credited to linked verified bank account via CRA portal within T+2 to T+3 working days.",
    "importantRules": [
      "Active NPS Tier-I account is a mandatory prerequisite to activate Tier-II.",
      "Subscribers can choose their Pension Fund Manager (PFM) and asset allocation independently of their Tier-I choices.",
      "Ultra-low fund management fee (maximum 0.09% p.a.), making it one of the most cost-effective investment accounts in India.",
      "Asset classes available: Scheme E (Equity up to 75%), Scheme C (Corporate Debt), Scheme G (Government Securities)."
    ],
    "faqs": [
      {
        "question": "How is NPS Tier-II different from NPS Tier-I?",
        "answer": "NPS Tier-I is a mandatory retirement pension account with strict lock-in until age 60 and dedicated tax deductions. NPS Tier-II is a voluntary, completely liquid investment account with no lock-in and no standard tax deduction."
      },
      {
        "question": "Are there any exit loads or withdrawal charges in NPS Tier-II?",
        "answer": "No, there are no exit loads or withdrawal penalties in NPS Tier-II; only standard CRA nominal transaction processing charges apply."
      },
      {
        "question": "Can I transfer funds from NPS Tier-II to NPS Tier-I?",
        "answer": "Yes, subscribers can transfer/switch funds from Tier-II to Tier-I account seamlessly via the CRA portal."
      }
    ]
  },
  {
    "id": "inv-bharat-22-etf",
    "title": "Bharat 22 ETF (Government Disinvestment ETF)",
    "slug": "bharat-22-etf",
    "description": "Open-ended target index exchange-traded fund managed by ICICI Prudential AMC, tracking the S&P BSE Bharat 22 Index comprising 22 central public sector enterprises (CPSEs), public sector banks, and Government-held SUUTI companies.",
    "authority": "DIPAM / Ministry of Finance / ICICI Prudential AMC",
    "category": "Exchange Traded Funds (ETFs)",
    "status": "ACTIVE / TRADED",
    "sourceUrl": "https://www.icicipruamc.com",
    "sourceAuthority": "DIPAM / Ministry of Finance / SEBI / BSE",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 1,
    "expectedReturn": "Market-linked returns tracking the S&P BSE Bharat 22 Index",
    "lockInPeriod": "No Lock-in (Exchange Traded)",
    "riskLevel": "High",
    "depositRules": "Traded in units of 1 on NSE/BSE secondary markets via demat account; creation unit size applicable for direct institutional creation/redemption with AMC.",
    "returnMechanism": "Capital appreciation and dividend distributions reflecting the performance of underlying portfolio of 22 leading PSUs and SUUTI holdings across 6 sectors.",
    "taxTreatment": "Treated as an equity-oriented fund for taxation (subject to equity holding thresholds). Equity LTCG taxed at 12.5% on gains exceeding Rs 1.25 Lakh; STCG taxed at 20% under Section 111A.",
    "withdrawalRules": "Units can be bought or sold during stock market trading hours on NSE and BSE at live market prices.",
    "importantRules": [
      "Portfolio covers 6 sectors: Basic Materials, Energy, Finance, FMCG, Industrials, and Utilities.",
      "Sector cap at 20% and individual stock cap at 15% to maintain diversification.",
      "Includes prominent blue-chips like ITC, L&T, Axis Bank (SUUTI), NTPC, ONGC, Power Grid, and SBI."
    ],
    "faqs": [
      {
        "question": "What is the role of DIPAM in Bharat 22 ETF?",
        "answer": "DIPAM (Department of Investment and Public Asset Management) utilizes Bharat 22 ETF as a structured divestment vehicle for Government equity in CPSEs and SUUTI holdings."
      },
      {
        "question": "How can retail investors purchase Bharat 22 ETF units?",
        "answer": "Retail investors can buy and sell units directly on stock exchanges (NSE and BSE) through any registered stockbroker and demat account."
      }
    ]
  },
  {
    "id": "inv-cpse-etf",
    "title": "CPSE ETF (Central Public Sector Enterprises ETF)",
    "slug": "cpse-etf-disinvestment",
    "description": "Open-ended exchange traded fund managed by Nippon India Mutual Fund tracking the Nifty CPSE Index, comprising Maharatna, Navratna, and Miniratna Central Public Sector Enterprises.",
    "authority": "DIPAM / Ministry of Finance / Nippon India AMC",
    "category": "Exchange Traded Funds (ETFs)",
    "status": "ACTIVE / TRADED",
    "sourceUrl": "https://mf.nipponindiaim.com",
    "sourceAuthority": "DIPAM / Ministry of Finance / SEBI / NSE",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 1,
    "expectedReturn": "Market-linked returns tracking the Nifty CPSE Index",
    "lockInPeriod": "No Lock-in (Exchange Traded)",
    "riskLevel": "High",
    "depositRules": "Traded continuously on NSE/BSE debt/equity segments in whole units via any standard demat and trading account.",
    "returnMechanism": "Market-linked Net Asset Value (NAV) appreciation and dividend yield distributions from constituent CPSE blue-chips.",
    "taxTreatment": "Equity-oriented ETF taxation: Short-term capital gains (STCG) taxed at 20% under Section 111A; long-term capital gains (LTCG) over Rs 1.25 Lakh taxed at 12.5% without indexation.",
    "withdrawalRules": "Real-time secondary market liquidity on NSE and BSE during trading hours.",
    "importantRules": [
      "Constituents include core public sector leaders such as NTPC, Power Grid, ONGC, Coal India, BEL, and NHPC.",
      "Single stock weight capped at 20% to avoid single-company concentration.",
      "High dividend yield portfolio reflecting sovereign PSU cash flow strength."
    ],
    "faqs": [
      {
        "question": "Which index is tracked by CPSE ETF?",
        "answer": "CPSE ETF tracks the Nifty CPSE Index constructed by NSE Indices Limited."
      },
      {
        "question": "Who manages the CPSE ETF?",
        "answer": "The CPSE ETF is managed by Nippon India Mutual Fund (Nippon Life India Asset Management Limited)."
      }
    ]
  },
  {
    "id": "inv-bharat-bond-2030",
    "title": "Bharat Bond ETF April 2030",
    "slug": "bharat-bond-etf-april-2030",
    "description": "Target maturity exchange traded fund managed by Edelweiss Mutual Fund tracking the Nifty BHARAT Bond Index - April 2030, investing exclusively in AAA-rated Central Public Sector Undertakings (CPSE/CPSU) bonds maturing in April 2030.",
    "authority": "Department of Investment and Public Asset Management (DIPAM) / Edelweiss AMC",
    "category": "Exchange Traded Funds (ETFs)",
    "status": "ACTIVE / TRADED",
    "sourceUrl": "https://www.bharatbond.in",
    "sourceAuthority": "DIPAM / Ministry of Finance / Edelweiss AMC / NSE",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 1,
    "expectedReturn": "Yield-to-Maturity (YTM) tracking underlying portfolio of AAA-rated PSU debt maturing in April 2030",
    "lockInPeriod": "Matures in April 2030 (Open-ended secondary liquidity on NSE/BSE)",
    "riskLevel": "Low",
    "depositRules": "Listed and traded on NSE and BSE in units of 1; also accessible via Bharat Bond Fund of Fund (FOF) for non-demat investors.",
    "returnMechanism": "Hold-to-maturity yield strategy with periodic coupon reinvestment and bullet redemption of portfolio proceeds at maturity in April 2030.",
    "taxTreatment": "Debt mutual fund taxation: Capital gains on redemption/sale taxed at the investor marginal income tax slab rate under Section 50AA.",
    "withdrawalRules": "Tradable on stock exchange secondary markets at prevailing market prices, or redeemed at NAV on scheduled maturity in April 2030.",
    "importantRules": [
      "100% portfolio allocation in AAA-rated public sector enterprises like REC, PFC, Power Grid, NHPC, and Indian Railway Finance Corp (IRFC).",
      "Ultra-low expense ratio capped at 0.0005% p.a.",
      "Predictable target maturity structure minimizing interest rate risk when held to April 2030."
    ],
    "faqs": [
      {
        "question": "When does Bharat Bond ETF April 2030 mature?",
        "answer": "The ETF will mature and wind down in April 2030, paying out the full maturity proceeds directly to unitholders bank accounts."
      },
      {
        "question": "Is Bharat Bond ETF sovereign guaranteed?",
        "answer": "While not directly sovereign debt, all constituent issuers are AAA-rated Central Public Sector Undertakings with majority Government of India ownership."
      }
    ]
  },
  {
    "id": "inv-bharat-bond-2031",
    "title": "Bharat Bond ETF April 2031",
    "slug": "bharat-bond-etf-april-2031",
    "description": "Target maturity exchange traded fund managed by Edelweiss Mutual Fund tracking the Nifty BHARAT Bond Index - April 2031, holding AAA-rated CPSU/CPSE debt securities maturing in April 2031.",
    "authority": "DIPAM / Ministry of Finance / Edelweiss AMC",
    "category": "Exchange Traded Funds (ETFs)",
    "status": "ACTIVE / TRADED",
    "sourceUrl": "https://www.bharatbond.in",
    "sourceAuthority": "DIPAM / Edelweiss AMC / SEBI / NSE",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 1,
    "expectedReturn": "Yield-to-Maturity (YTM) tracking AAA-rated PSU debt portfolio maturing in April 2031",
    "lockInPeriod": "Matures in April 2031 (Secondary liquidity on stock exchanges)",
    "riskLevel": "Low",
    "depositRules": "Traded in whole units on NSE and BSE; direct creation/redemption in creation unit size with the AMC.",
    "returnMechanism": "Roll-down maturity strategy where interest coupons are reinvested and principal is distributed at terminal maturity in April 2031.",
    "taxTreatment": "Taxed as debt mutual fund under Section 50AA at applicable income tax slab rates.",
    "withdrawalRules": "Secondary market exit during exchange trading hours or bullet payout at maturity in April 2031.",
    "importantRules": [
      "Strict mandate: only AAA-rated Central Public Sector Enterprises permitted in portfolio.",
      "Capped individual issuer weight to ensure portfolio diversification.",
      "Low expense ratio offering cost-effective institutional debt market access to retail investors."
    ],
    "faqs": [
      {
        "question": "Can investors without a demat account invest in Bharat Bond ETF April 2031?",
        "answer": "Yes, through the Bharat Bond Fund of Fund (FOF) April 2031 which invests directly into the underlying ETF."
      }
    ]
  },
  {
    "id": "inv-bharat-bond-2032",
    "title": "Bharat Bond ETF April 2032",
    "slug": "bharat-bond-etf-april-2032",
    "description": "Target maturity debt ETF managed by Edelweiss Mutual Fund tracking the Nifty BHARAT Bond Index - April 2032, investing in AAA-rated public sector entity debt maturing in April 2032.",
    "authority": "DIPAM / Ministry of Finance / Edelweiss AMC",
    "category": "Exchange Traded Funds (ETFs)",
    "status": "ACTIVE / TRADED",
    "sourceUrl": "https://www.bharatbond.in",
    "sourceAuthority": "DIPAM / Edelweiss AMC / SEBI / NSE",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 1,
    "expectedReturn": "Yield-to-Maturity (YTM) tracking AAA-rated PSU debt portfolio maturing in April 2032",
    "lockInPeriod": "Matures in April 2032 (Exchange Traded)",
    "riskLevel": "Low",
    "depositRules": "Listed and traded on NSE and BSE; accessible through stockbrokers and digital demat platforms.",
    "returnMechanism": "Compounded yield accumulation with redemption proceeds credited to investor bank account on maturity in April 2032.",
    "taxTreatment": "Capital gains taxed under Section 50AA as short-term capital gains at investor marginal income tax slab.",
    "withdrawalRules": "Secondary market liquidity on stock exchange debt segments prior to scheduled maturity.",
    "importantRules": [
      "Target maturity structure reduces duration risk progressively as maturity approaches.",
      "Zero credit risk beyond sovereign-backed AAA CPSE issuers."
    ],
    "faqs": [
      {
        "question": "What is the credit quality of issuers in Bharat Bond ETF April 2032?",
        "answer": "All underlying issuers must hold the highest AAA domestic credit rating from registered rating agencies."
      }
    ]
  },
  {
    "id": "inv-bharat-bond-2033",
    "title": "Bharat Bond ETF April 2033",
    "slug": "bharat-bond-etf-april-2033",
    "description": "Target maturity debt ETF managed by Edelweiss Mutual Fund tracking the Nifty BHARAT Bond Index - April 2033, holding AAA-rated bonds of Central Public Sector Undertakings maturing in April 2033.",
    "authority": "DIPAM / Ministry of Finance / Edelweiss AMC",
    "category": "Exchange Traded Funds (ETFs)",
    "status": "ACTIVE / TRADED",
    "sourceUrl": "https://www.bharatbond.in",
    "sourceAuthority": "DIPAM / Edelweiss AMC / SEBI / NSE",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 1,
    "expectedReturn": "Yield-to-Maturity (YTM) tracking AAA-rated PSU debt portfolio maturing in April 2033",
    "lockInPeriod": "Matures in April 2033 (Exchange Traded)",
    "riskLevel": "Low",
    "depositRules": "Traded on NSE and BSE debt/cash segments in demat units.",
    "returnMechanism": "Hold-to-maturity yield strategy with terminal redemption payout in April 2033.",
    "taxTreatment": "Debt mutual fund tax provisions apply: Gains taxed at applicable investor income tax slab rates.",
    "withdrawalRules": "Continuous exchange trading liquidity on BSE and NSE.",
    "importantRules": [
      "Constituents include top-tier CPSUs like Power Finance Corporation, REC, and Nuclear Power Corporation.",
      "Predetermined maturity date providing institutional bond yields to retail and corporate investors."
    ],
    "faqs": [
      {
        "question": "How are Bharat Bond ETF proceeds distributed at maturity in 2033?",
        "answer": "On the maturity date in April 2033, the AMC liquidates all underlying bonds and credits the full NAV value per unit directly to unitholders registered bank accounts."
      }
    ]
  },
  {
    "id": "inv-nifty-next50-index",
    "title": "Nifty Next 50 Index Fund / ETF",
    "slug": "nifty-next-50-index-fund-etf",
    "description": "Passive index mutual funds and exchange-traded funds tracking the Nifty Next 50 Index, representing 50 large-cap companies ranked 51 to 100 by market capitalization on the National Stock Exchange of India (NSE).",
    "authority": "SEBI / AMFI / NSE Indices Limited",
    "category": "Mutual Funds",
    "status": "ACTIVE / OPEN",
    "sourceUrl": "https://www.niftyindices.com",
    "sourceAuthority": "NSE Indices Limited / AMFI / SEBI",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100,
    "expectedReturn": "Market-linked returns tracking the performance of the Nifty Next 50 Total Return Index (TRI)",
    "lockInPeriod": "No Lock-in (Open-ended)",
    "riskLevel": "High",
    "depositRules": "Available as Index Mutual Funds (SIP starting Rs 100/month or lumpsum Rs 500) via AMCs/MF Utility/CAMS/KFintech, or as ETFs traded on NSE/BSE.",
    "returnMechanism": "Market-linked NAV appreciation reflecting large-cap emerging leaders with potential to enter the Nifty 50.",
    "taxTreatment": "Equity mutual fund taxation: Long-term capital gains (holding > 12 months) over Rs 1.25 Lakh taxed at 12.5%; Short-term capital gains (holding <= 12 months) taxed at 20% under Section 111A.",
    "withdrawalRules": "Open-ended daily redemption at prevailing NAV with no exit load in most index funds, or instant sale of ETF units on stock exchanges.",
    "importantRules": [
      "Well-diversified large-cap index with exposure across financial services, consumer goods, capital goods, and healthcare.",
      "Rebalanced semi-annually in March and September by NSE Indices Limited.",
      "Offers potential for higher growth relative to Nifty 50 with large-cap governance standards."
    ],
    "faqs": [
      {
        "question": "What companies are included in the Nifty Next 50 Index?",
        "answer": "The index comprises the 50 largest liquid companies after the Nifty 50 (ranked 51 to 100 by free-float market capitalization)."
      },
      {
        "question": "What is the expense ratio for Nifty Next 50 Index Funds?",
        "answer": "Direct plans of Nifty Next 50 index funds typically feature ultra-low expense ratios ranging from 0.10% to 0.35% p.a."
      }
    ]
  },
  {
    "id": "inv-nifty-midcap150-index",
    "title": "Nifty Midcap 150 Index Fund / ETF",
    "slug": "nifty-midcap-150-index-fund-etf",
    "description": "Passive index funds and ETFs tracking the Nifty Midcap 150 Index, measuring the performance of 150 mid-sized companies ranked 101 to 250 by market capitalization listed on the NSE.",
    "authority": "SEBI / AMFI / NSE Indices Limited",
    "category": "Mutual Funds",
    "status": "ACTIVE / OPEN",
    "sourceUrl": "https://www.niftyindices.com",
    "sourceAuthority": "NSE Indices Limited / AMFI / SEBI",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100,
    "expectedReturn": "Market-linked returns tracking the Nifty Midcap 150 Total Return Index (TRI)",
    "lockInPeriod": "No Lock-in (Open-ended)",
    "riskLevel": "High",
    "depositRules": "Open for subscription via SIP or lumpsum in index fund format across mutual fund platforms, and on stock exchanges in ETF format.",
    "returnMechanism": "Capital appreciation driven by high-growth mid-sized companies across diverse industrial, manufacturing, and technology sectors.",
    "taxTreatment": "Equity fund tax rules apply: 12.5% LTCG on gains above Rs 1.25 Lakh per year; 20% STCG for holding under 1 year.",
    "withdrawalRules": "Redeemable at daily applicable NAV via AMC portals or traded during exchange hours in ETF form.",
    "importantRules": [
      "Captures the entire pure-play midcap segment (ranks 101–250) without subjective fund-manager selection bias.",
      "Semi-annual index rebalancing by NSE Indices Limited.",
      "Subject to higher volatility compared to large-cap indices."
    ],
    "faqs": [
      {
        "question": "How does Nifty Midcap 150 differ from active midcap funds?",
        "answer": "Nifty Midcap 150 index funds passively replicate all 150 constituent stocks according to market weight at lower expense ratios, eliminating fund manager stock-picking risk."
      }
    ]
  },
  {
    "id": "inv-nifty-smallcap250-index",
    "title": "Nifty Smallcap 250 Index Fund / ETF",
    "slug": "nifty-smallcap-250-index-fund-etf",
    "description": "Passive index mutual funds and ETFs tracking the Nifty Smallcap 250 Index, representing 250 companies ranked 251 to 500 by full market capitalization listed on the National Stock Exchange of India.",
    "authority": "SEBI / AMFI / NSE Indices Limited",
    "category": "Mutual Funds",
    "status": "ACTIVE / OPEN",
    "sourceUrl": "https://www.niftyindices.com",
    "sourceAuthority": "NSE Indices Limited / AMFI / SEBI",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100,
    "expectedReturn": "Market-linked returns tracking the Nifty Smallcap 250 Total Return Index (TRI)",
    "lockInPeriod": "No Lock-in (Open-ended)",
    "riskLevel": "High",
    "depositRules": "Investible via Systematic Investment Plan (SIP) starting Rs 100/month or lumpsum in index funds; exchange-traded in ETF format.",
    "returnMechanism": "Market-linked capital appreciation reflecting rapid growth and expansion in emerging small-cap Indian enterprises.",
    "taxTreatment": "Equity mutual fund taxation: Long-term gains (>12 months) over Rs 1.25 Lakh taxed at 12.5%; Short-term gains (<=12 months) taxed at 20%.",
    "withdrawalRules": "Open-ended daily redemption via AMC/registrar portals or exchange sale of ETF units.",
    "importantRules": [
      "Comprehensive representation of the small-cap segment with high diversification across 250 stocks.",
      "High growth potential accompanied by elevated volatility and drawdowns during market corrections.",
      "Rebalanced semi-annually in March and September."
    ],
    "faqs": [
      {
        "question": "What is the investment horizon recommended for Nifty Smallcap 250 funds?",
        "answer": "A long-term investment horizon of 7 to 10+ years is generally recommended due to higher short-term cyclical volatility."
      }
    ]
  },
  {
    "id": "inv-nifty-bank-etf",
    "title": "Nifty Bank Index ETF / Fund",
    "slug": "nifty-bank-index-etf-fund",
    "description": "Sectoral exchange-traded funds and index funds tracking the Nifty Bank Index, comprising the 12 most liquid and large-capitalized banking stocks (both Public and Private sector banks) listed on the NSE.",
    "authority": "SEBI / AMFI / NSE Indices Limited",
    "category": "Exchange Traded Funds (ETFs)",
    "status": "ACTIVE / TRADED",
    "sourceUrl": "https://www.niftyindices.com",
    "sourceAuthority": "NSE Indices Limited / AMFI / SEBI",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 1,
    "expectedReturn": "Market-linked returns tracking the Nifty Bank Total Return Index",
    "lockInPeriod": "No Lock-in (Exchange Traded)",
    "riskLevel": "High",
    "depositRules": "Traded continuously on NSE/BSE secondary markets during trading hours; also available as open-ended index mutual funds via AMCs.",
    "returnMechanism": "Capital growth and dividend distributions from leading Indian commercial banks including HDFC Bank, ICICI Bank, SBI, Kotak Mahindra Bank, and Axis Bank.",
    "taxTreatment": "Equity ETF taxation: 12.5% LTCG on gains exceeding Rs 1.25 Lakh per financial year; 20% STCG for holding period of 12 months or less.",
    "withdrawalRules": "Instant real-time secondary market liquidity on stock exchanges.",
    "importantRules": [
      "Single sector concentration risk focused 100% on the Indian banking system.",
      "Constituents capped at 33% maximum weight for single stock and 72% for top 3 stocks.",
      "High sensitivity to monetary policy, interest rate cycles, and macroeconomic credit growth."
    ],
    "faqs": [
      {
        "question": "How many banking stocks are included in the Nifty Bank Index?",
        "answer": "The Nifty Bank Index consists of the 12 largest and most liquid banking stocks listed on the NSE."
      }
    ]
  },
  {
    "id": "inv-nifty-it-etf",
    "title": "Nifty IT Sector Index ETF / Fund",
    "slug": "nifty-it-sector-index-etf",
    "description": "Sectoral exchange-traded funds and index funds tracking the Nifty IT Index, comprising the top 10 leading Indian information technology software and services companies listed on the NSE.",
    "authority": "SEBI / AMFI / NSE Indices Limited",
    "category": "Exchange Traded Funds (ETFs)",
    "status": "ACTIVE / TRADED",
    "sourceUrl": "https://www.niftyindices.com",
    "sourceAuthority": "NSE Indices Limited / AMFI / SEBI",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 1,
    "expectedReturn": "Market-linked returns tracking the Nifty IT Total Return Index",
    "lockInPeriod": "No Lock-in (Exchange Traded)",
    "riskLevel": "High",
    "depositRules": "Traded in whole units on NSE/BSE secondary markets via demat account or subscribed through AMC index fund schemes.",
    "returnMechanism": "Capital appreciation and dividend yield from major global IT services exporters including TCS, Infosys, HCL Tech, Wipro, and Tech Mahindra.",
    "taxTreatment": "Equity-oriented taxation: LTCG over Rs 1.25 Lakh taxed at 12.5%; STCG taxed at 20% under Section 111A.",
    "withdrawalRules": "Real-time sale of ETF units during stock exchange trading hours.",
    "importantRules": [
      "Sectoral exposure concentrated in technology software, consulting, and digital solutions.",
      "Strong exposure to US and European corporate tech spending and foreign exchange fluctuations.",
      "Single stock weight capped at 33% to prevent single-firm dominance."
    ],
    "faqs": [
      {
        "question": "What are the top holdings in Nifty IT Index funds?",
        "answer": "Top constituents typically include Tata Consultancy Services (TCS), Infosys, HCL Technologies, and Wipro."
      }
    ]
  },
  {
    "id": "inv-gsec-10y-etf",
    "title": "10-Year Constant Maturity G-Sec ETF / Gilt Fund",
    "slug": "10-year-constant-maturity-gsec-etf",
    "description": "Target duration sovereign debt mutual funds and ETFs tracking the 10-Year Constant Maturity Government of India benchmark bond yield under SEBI mutual fund categorisation guidelines.",
    "authority": "SEBI / Reserve Bank of India / AMFI",
    "category": "Government Securities",
    "status": "ACTIVE / OPEN",
    "sourceUrl": "https://www.amfiindia.com",
    "sourceAuthority": "SEBI / AMFI / Reserve Bank of India",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100,
    "expectedReturn": "Market-linked sovereign yields tracking the 10-Year Government of India benchmark bond",
    "lockInPeriod": "No Lock-in (Open-ended with daily liquidity)",
    "riskLevel": "Medium",
    "depositRules": "Investible via mutual fund platforms (SIP/lumpsum) and on stock exchange debt segments in ETF format.",
    "returnMechanism": "Sovereign coupon accumulation and capital gains/losses from benchmark G-Sec price fluctuations driven by RBI interest rate cycles.",
    "taxTreatment": "Debt fund taxation under Section 50AA: Capital gains on redemption are added to investor income and taxed at the applicable marginal slab rate.",
    "withdrawalRules": "Daily redemption at applicable NAV via AMC, or real-time trading of ETF units on stock exchanges.",
    "importantRules": [
      "Mandated to maintain at least 80% portfolio in sovereign Government of India securities with modified duration around 10 years.",
      "Zero credit risk (sovereign guarantee of repayment by GoI) but high duration/interest rate sensitivity.",
      "Ideal for capturing capital gains during interest rate easing cycles."
    ],
    "faqs": [
      {
        "question": "Is there credit default risk in a 10-Year G-Sec ETF?",
        "answer": "No, because the underlying securities are issued directly by the Government of India, carrying zero credit default risk."
      },
      {
        "question": "Why does the NAV fluctuate if government bonds have fixed coupons?",
        "answer": "Because bond prices move inversely to market interest rates; when yields fall, bond prices rise (and vice-versa)."
      }
    ]
  },
  {
    "id": "inv-gilt-general-fund",
    "title": "Gilt Mutual Fund (General Sovereign Securities)",
    "slug": "gilt-mutual-fund-general",
    "description": "Open-ended debt mutual fund category mandated by SEBI to invest a minimum of 80% of total assets in sovereign Government of India securities (G-Secs) and State Development Loans (SDLs) across varying maturities.",
    "authority": "SEBI / AMFI / Reserve Bank of India",
    "category": "Mutual Funds",
    "status": "ACTIVE / OPEN",
    "sourceUrl": "https://www.amfiindia.com",
    "sourceAuthority": "SEBI / AMFI",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100,
    "expectedReturn": "Market-linked sovereign debt returns driven by G-Sec yield accruals and duration management",
    "lockInPeriod": "No Lock-in (Open-ended)",
    "riskLevel": "Medium",
    "depositRules": "Subscribed through mutual fund platforms, banks, and registrars via SIP (from Rs 100/month) or lumpsum.",
    "returnMechanism": "Accrual of sovereign interest coupons combined with active duration management by the fund manager across yield curve cycles.",
    "taxTreatment": "Debt fund taxation under Section 50AA: Capital gains taxed at the investor marginal income tax slab rate.",
    "withdrawalRules": "Daily redemption at applicable NAV without lock-in; most funds have nil exit load.",
    "importantRules": [
      "Minimum 80% investment in sovereign central and state government securities.",
      "Highest safety from credit default with varying degrees of interest rate risk depending on portfolio average maturity.",
      "Active portfolio duration adjustments by fund managers to capitalize on interest rate trends."
    ],
    "faqs": [
      {
        "question": "What is the main difference between Gilt Funds and Corporate Bond Funds?",
        "answer": "Gilt funds invest exclusively in Central and State Government securities with zero credit risk, whereas corporate bond funds carry credit risk from corporate issuers."
      }
    ]
  },
  {
    "id": "inv-money-market-fund",
    "title": "Money Market Mutual Fund",
    "slug": "money-market-mutual-fund",
    "description": "Open-ended debt mutual fund category defined by SEBI investing in money market instruments having a maturity of up to 1 year, including Commercial Papers (CPs), Certificates of Deposit (CDs), Treasury Bills, and Repos.",
    "authority": "SEBI / AMFI / Reserve Bank of India",
    "category": "Mutual Funds",
    "status": "ACTIVE / OPEN",
    "sourceUrl": "https://www.amfiindia.com",
    "sourceAuthority": "SEBI / AMFI",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100,
    "expectedReturn": "Market-linked short-term yields tracking high-quality money market rates",
    "lockInPeriod": "No Lock-in (Open-ended with daily liquidity)",
    "riskLevel": "Low",
    "depositRules": "Open for daily investment via AMC platforms, MF Central, and banks via lumpsum or Systematic Investment Plan (SIP).",
    "returnMechanism": "Accrual income from short-term money market instruments with minimal mark-to-market volatility.",
    "taxTreatment": "Debt mutual fund taxation under Section 50AA: Capital gains added to total income and taxed at applicable tax slab rates.",
    "withdrawalRules": "Daily redemption processed at T+1 business day NAV with zero exit load.",
    "importantRules": [
      "All portfolio securities must mature within 1 year as per SEBI regulations.",
      "Invests in top-rated money market instruments (A1+ rated CPs/CDs, Sovereign T-Bills).",
      "Low interest rate risk and low volatility, suitable for parking funds for 3 to 12 months."
    ],
    "faqs": [
      {
        "question": "What instruments do Money Market Mutual Funds invest in?",
        "answer": "They invest in Treasury Bills, Certificates of Deposit (CDs) issued by banks, Commercial Papers (CPs) of top corporates, and Tri-Party Repos (TREPS) maturing within 1 year."
      }
    ]
  },
  {
    "id": "inv-short-duration-fund",
    "title": "Short Duration Debt Mutual Fund",
    "slug": "short-duration-debt-mutual-fund",
    "description": "Open-ended debt mutual fund category regulated by SEBI that invests in debt and money market instruments such that the Macaulay duration of the portfolio is between 1 year and 3 years.",
    "authority": "SEBI / AMFI",
    "category": "Mutual Funds",
    "status": "ACTIVE / OPEN",
    "sourceUrl": "https://www.amfiindia.com",
    "sourceAuthority": "SEBI / AMFI",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100,
    "expectedReturn": "Market-linked returns from coupon accruals and modest duration positioning",
    "lockInPeriod": "No Lock-in (Open-ended)",
    "riskLevel": "Low",
    "depositRules": "Available through all mutual fund distributors, digital investment apps, and AMC direct portals.",
    "returnMechanism": "Steady interest accrual from diversified AAA/AA+ rated corporate bonds, PSUs, and G-Secs with Macaulay duration of 1–3 years.",
    "taxTreatment": "Debt fund taxation under Section 50AA: All gains on redemption taxed at the investor marginal slab rate.",
    "withdrawalRules": "Open-ended daily redemption at prevailing NAV with no exit load in most schemes.",
    "importantRules": [
      "Portfolio Macaulay duration strictly maintained between 1 year and 3 years.",
      "Moderate interest rate risk with stable coupon yield suitable for 1 to 3 year horizons.",
      "Predominantly high-rated corporate and sovereign debt holdings."
    ],
    "faqs": [
      {
        "question": "What is the optimal investment horizon for Short Duration Funds?",
        "answer": "The recommended investment horizon is 1 to 3 years to match the portfolio Macaulay duration and optimize risk-adjusted returns."
      }
    ]
  },
  {
    "id": "inv-medium-duration-fund",
    "title": "Medium Duration Debt Mutual Fund",
    "slug": "medium-duration-debt-mutual-fund",
    "description": "Open-ended debt mutual fund category mandated by SEBI to invest in debt and money market securities maintaining a portfolio Macaulay duration between 3 years and 4 years.",
    "authority": "SEBI / AMFI",
    "category": "Mutual Funds",
    "status": "ACTIVE / OPEN",
    "sourceUrl": "https://www.amfiindia.com",
    "sourceAuthority": "SEBI / AMFI",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100,
    "expectedReturn": "Market-linked returns from medium-term debt accruals and duration management",
    "lockInPeriod": "No Lock-in (Open-ended)",
    "riskLevel": "Medium",
    "depositRules": "Open for subscription via SIP or lumpsum through mutual fund distributors and digital portals.",
    "returnMechanism": "Coupon income from medium-term bonds combined with capital appreciation opportunities during yield declines.",
    "taxTreatment": "Debt mutual fund tax rules under Section 50AA: Capital gains taxed at marginal income tax slab rates.",
    "withdrawalRules": "Daily redemption at applicable NAV (nominal exit load may apply for very short redemptions in select schemes).",
    "importantRules": [
      "Portfolio Macaulay duration maintained between 3 and 4 years (can be 1–4 years under anticipated adverse conditions as permitted by SEBI).",
      "Moderate-to-high interest rate risk suitable for 3 to 4 year investment horizons.",
      "Invests across AAA/AA rated corporate debt and sovereign securities."
    ],
    "faqs": [
      {
        "question": "What is Macaulay duration?",
        "answer": "Macaulay duration measures the weighted average time (in years) an investor must hold a bond fund to receive all cash flows (coupons and principal)."
      }
    ]
  },
  {
    "id": "inv-long-duration-fund",
    "title": "Long Duration Debt Mutual Fund",
    "slug": "long-duration-debt-mutual-fund",
    "description": "Open-ended debt mutual fund category defined by SEBI investing in debt and money market instruments with portfolio Macaulay duration greater than 7 years.",
    "authority": "SEBI / AMFI",
    "category": "Mutual Funds",
    "status": "ACTIVE / OPEN",
    "sourceUrl": "https://www.amfiindia.com",
    "sourceAuthority": "SEBI / AMFI",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100,
    "expectedReturn": "Market-linked returns driven by long-term sovereign bond yields and interest rate cycles",
    "lockInPeriod": "No Lock-in (Open-ended)",
    "riskLevel": "Medium",
    "depositRules": "Investible via direct/regular mutual fund plans through AMCs, MF Central, and registrars.",
    "returnMechanism": "Yield accruals and substantial capital appreciation/depreciation driven by macroeconomic interest rate movements.",
    "taxTreatment": "Debt fund taxation under Section 50AA: Gains taxed at the investor applicable income tax slab rate.",
    "withdrawalRules": "Open-ended daily redemption at prevailing NAV.",
    "importantRules": [
      "Portfolio Macaulay duration strictly greater than 7 years as mandated by SEBI.",
      "High sensitivity to interest rate fluctuations (duration risk).",
      "Invests primarily in long-dated Central Government bonds and top-tier PSU bonds."
    ],
    "faqs": [
      {
        "question": "When do Long Duration Funds perform best?",
        "answer": "Long duration funds perform best during falling interest rate environments when long-term bond prices appreciate significantly."
      }
    ]
  },
  {
    "id": "inv-ultra-short-duration-fund",
    "title": "Ultra Short Duration Debt Mutual Fund",
    "slug": "ultra-short-duration-debt-fund",
    "description": "Open-ended debt mutual fund category regulated by SEBI that invests in debt and money market instruments with portfolio Macaulay duration between 3 months and 6 months.",
    "authority": "SEBI / AMFI",
    "category": "Mutual Funds",
    "status": "ACTIVE / OPEN",
    "sourceUrl": "https://www.amfiindia.com",
    "sourceAuthority": "SEBI / AMFI",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100,
    "expectedReturn": "Market-linked short-term yield accruals with minimal volatility",
    "lockInPeriod": "No Lock-in (Open-ended with daily liquidity)",
    "riskLevel": "Low",
    "depositRules": "Open for daily investment via lumpsum or SIP across all mutual fund platforms and mobile apps.",
    "returnMechanism": "Steady accrual of interest from high-quality Commercial Papers, Certificates of Deposit, and short-term corporate bonds.",
    "taxTreatment": "Debt mutual fund taxation under Section 50AA: Capital gains taxed at applicable investor slab rate.",
    "withdrawalRules": "Daily redemption at applicable T+1 NAV with zero exit load.",
    "importantRules": [
      "Portfolio Macaulay duration strictly kept between 3 months and 6 months.",
      "Very low interest rate risk and superior liquidity compared to traditional savings accounts.",
      "Suitable for parking surplus corporate or personal funds for 3 to 6 months."
    ],
    "faqs": [
      {
        "question": "How do Ultra Short Duration funds compare to Liquid Funds?",
        "answer": "Liquid funds invest in securities maturing up to 91 days, while Ultra Short Duration funds invest with a Macaulay duration of 3 to 6 months, offering slightly higher yield potential."
      }
    ]
  },
  {
    "id": "inv-low-duration-fund",
    "title": "Low Duration Debt Mutual Fund",
    "slug": "low-duration-debt-mutual-fund",
    "description": "Open-ended debt mutual fund category defined by SEBI investing in debt and money market instruments with a portfolio Macaulay duration between 6 months and 12 months.",
    "authority": "SEBI / AMFI",
    "category": "Mutual Funds",
    "status": "ACTIVE / OPEN",
    "sourceUrl": "https://www.amfiindia.com",
    "sourceAuthority": "SEBI / AMFI",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100,
    "expectedReturn": "Market-linked returns from short-tenor debt accruals",
    "lockInPeriod": "No Lock-in (Open-ended)",
    "riskLevel": "Low",
    "depositRules": "Subscribed through mutual fund platforms, direct AMC portals, and banks.",
    "returnMechanism": "Accrual income from short-term debt instruments with low mark-to-market volatility.",
    "taxTreatment": "Debt fund taxation under Section 50AA: Capital gains on redemption taxed at investor marginal income tax rate.",
    "withdrawalRules": "Daily redemption at applicable NAV with nil exit load in most schemes.",
    "importantRules": [
      "Portfolio Macaulay duration maintained between 6 months and 12 months.",
      "Ideal for parking surplus cash for a 6 to 12 month horizon.",
      "Invests in Commercial Papers, CDs, Treasury Bills, and short-tenor corporate debentures."
    ],
    "faqs": [
      {
        "question": "Who should invest in Low Duration Funds?",
        "answer": "Investors looking for higher yield than savings accounts or ultra-short funds for a 6 to 12 month timeframe with low interest rate sensitivity."
      }
    ]
  },
  {
    "id": "inv-floating-rate-fund",
    "title": "Floating Rate Debt Mutual Fund",
    "slug": "floating-rate-debt-mutual-fund",
    "description": "Open-ended debt mutual fund category defined by SEBI that invests a minimum of 65% of total assets in floating rate debt instruments (including fixed rate instruments swapped for floating rate returns).",
    "authority": "SEBI / AMFI / Reserve Bank of India",
    "category": "Mutual Funds",
    "status": "ACTIVE / OPEN",
    "sourceUrl": "https://www.amfiindia.com",
    "sourceAuthority": "SEBI / AMFI",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100,
    "expectedReturn": "Market-linked returns adjusting dynamically with benchmark interest rate movements (e.g. MIBOR / T-Bill linked)",
    "lockInPeriod": "No Lock-in (Open-ended)",
    "riskLevel": "Low",
    "depositRules": "Open for daily investment via lumpsum or SIP across mutual fund platforms and registrar portals.",
    "returnMechanism": "Coupons reset periodically with market benchmark rates, protecting portfolio value during rising interest rate cycles.",
    "taxTreatment": "Debt mutual fund taxation under Section 50AA: Capital gains taxed at the investor marginal slab rate.",
    "withdrawalRules": "Open-ended daily redemption at prevailing NAV with no exit load in most schemes.",
    "importantRules": [
      "Minimum 65% of portfolio in floating rate debt instruments or synthetic floating rate structures via Interest Rate Swaps (OIS).",
      "Protects bond portfolio capital when interest rates are rising as coupons reset upward.",
      "Low duration risk due to frequent coupon reset mechanisms."
    ],
    "faqs": [
      {
        "question": "How do Floating Rate Funds protect against rising interest rates?",
        "answer": "Since coupons on floating rate bonds adjust periodically based on benchmark interest rates, their market prices remain stable even when interest rates increase."
      }
    ]
  },
  {
    "id": "inv-credit-risk-fund",
    "title": "Credit Risk Debt Mutual Fund",
    "slug": "credit-risk-debt-mutual-fund",
    "description": "Open-ended debt mutual fund category defined by SEBI that invests a minimum of 65% of total assets in corporate debt securities rated AA and below (excluding AA+ rated instruments) to earn credit spread premiums.",
    "authority": "SEBI / AMFI",
    "category": "Mutual Funds",
    "status": "ACTIVE / OPEN",
    "sourceUrl": "https://www.amfiindia.com",
    "sourceAuthority": "SEBI / AMFI",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100,
    "expectedReturn": "Market-linked returns generated from higher yield accruals and credit rating upgrades",
    "lockInPeriod": "No Lock-in (Open-ended)",
    "riskLevel": "High",
    "depositRules": "Open for daily investment via Systematic Investment Plan (SIP) starting Rs 100/month or lumpsum through AMCs, MF Central, and distributors.",
    "returnMechanism": "Higher interest coupon accruals from lower-rated corporate bonds combined with potential capital gains from credit rating upgrades.",
    "taxTreatment": "Debt fund taxation under Section 50AA: Capital gains on redemption are taxed at the investor applicable marginal income tax slab rate.",
    "withdrawalRules": "Open-ended daily redemption at applicable NAV (exit load may apply for redemptions within 1 to 3 years depending on the AMC scheme).",
    "importantRules": [
      "SEBI mandates minimum 65% investment in bonds rated AA and below.",
      "Carries substantial credit/default risk and liquidity risk in stressed credit environments.",
      "Mandatory side-pocketing (segregated portfolio) provisions enabled in case of credit default events."
    ],
    "faqs": [
      {
        "question": "What is the primary risk in Credit Risk Funds?",
        "answer": "Credit risk (the risk of issuer default or downgrade) and liquidity risk (difficulty in selling lower-rated bonds in secondary markets) are the primary risks."
      },
      {
        "question": "What is side-pocketing in mutual funds?",
        "answer": "Side-pocketing (segregated portfolio) isolates distressed/defaulted debt assets from the main fund portfolio to ensure fair treatment between exiting and staying investors."
      }
    ]
  },
  {
    "id": "inv-conservative-hybrid-fund",
    "title": "Conservative Hybrid Mutual Fund",
    "slug": "conservative-hybrid-mutual-fund",
    "description": "Open-ended hybrid mutual fund category mandated by SEBI investing predominantly in debt instruments (75% to 90% of total assets) with a modest allocation to equity and equity-related instruments (10% to 25% of total assets).",
    "authority": "SEBI / AMFI",
    "category": "Mutual Funds",
    "status": "ACTIVE / OPEN",
    "sourceUrl": "https://www.amfiindia.com",
    "sourceAuthority": "SEBI / AMFI",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100,
    "expectedReturn": "Market-linked returns from steady debt accruals with modest equity growth kicker",
    "lockInPeriod": "No Lock-in (Open-ended)",
    "riskLevel": "Medium",
    "depositRules": "Open for subscription via SIP or lumpsum across all mutual fund platforms and registered brokers.",
    "returnMechanism": "Combines fixed-income stability and coupon accruals from bonds with potential capital appreciation and dividends from equity holdings.",
    "taxTreatment": "Taxed as non-equity/specified mutual fund (unless equity gross exposure exceeds specified statutory thresholds): Gains taxed at investor marginal income tax slab.",
    "withdrawalRules": "Daily redemption at applicable NAV (nominal exit load may apply for redemptions within 1 year).",
    "importantRules": [
      "SEBI allocation mandate: 75%–90% in debt/money market instruments, 10%–25% in equity & equity-related instruments.",
      "Provides regular income orientation with lower volatility than pure equity funds.",
      "Suitable for conservative investors seeking modest equity participation without high volatility."
    ],
    "faqs": [
      {
        "question": "Who should consider investing in Conservative Hybrid Funds?",
        "answer": "Investors looking for steady income with inflation protection, such as retirees or conservative investors with a 3+ year horizon."
      }
    ]
  },
  {
    "id": "inv-aggressive-hybrid-fund",
    "title": "Aggressive Hybrid Mutual Fund",
    "slug": "aggressive-hybrid-mutual-fund",
    "description": "Open-ended hybrid mutual fund category regulated by SEBI that invests 65% to 80% of total assets in equity & equity-related instruments and 20% to 35% in debt instruments.",
    "authority": "SEBI / AMFI",
    "category": "Mutual Funds",
    "status": "ACTIVE / OPEN",
    "sourceUrl": "https://www.amfiindia.com",
    "sourceAuthority": "SEBI / AMFI",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100,
    "expectedReturn": "Market-linked returns combining equity capital growth with debt stability",
    "lockInPeriod": "No Lock-in (Open-ended)",
    "riskLevel": "High",
    "depositRules": "Investible via SIP (from Rs 100/month) or lumpsum through mutual fund distributors and digital portals.",
    "returnMechanism": "Capital appreciation from diversified equity holdings cushioned by regular coupon yield from the debt portion.",
    "taxTreatment": "Treated as an equity-oriented mutual fund for taxation (equity >= 65%): Long-term capital gains (>12 months) over Rs 1.25 Lakh taxed at 12.5%; Short-term capital gains (<=12 months) taxed at 20% under Section 111A.",
    "withdrawalRules": "Open-ended daily redemption at prevailing NAV (typically 1% exit load for redemptions within 1 year exceeding 10% of units).",
    "importantRules": [
      "SEBI allocation mandate: 65%–80% Equity, 20%–35% Debt.",
      "Automatic portfolio rebalancing between equity and debt assets by the fund manager.",
      "Qualifies for equity mutual fund tax treatment while maintaining fixed income cushion."
    ],
    "faqs": [
      {
        "question": "What is the tax status of Aggressive Hybrid Funds?",
        "answer": "Since minimum 65% is maintained in Indian equities, they qualify as equity-oriented funds with 12.5% LTCG (above Rs 1.25 Lakh) and 20% STCG."
      }
    ]
  },
  {
    "id": "inv-equity-savings-fund",
    "title": "Equity Savings Mutual Fund",
    "slug": "equity-savings-mutual-fund",
    "description": "Open-ended mutual fund category defined by SEBI that invests in equity (minimum 65% total gross equity, including unhedged net equity and hedged arbitrage positions) and debt instruments (minimum 10% of total assets).",
    "authority": "SEBI / AMFI",
    "category": "Mutual Funds",
    "status": "ACTIVE / OPEN",
    "sourceUrl": "https://www.amfiindia.com",
    "sourceAuthority": "SEBI / AMFI",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100,
    "expectedReturn": "Market-linked returns generated from unhedged equity growth, risk-free arbitrage spreads, and debt yield",
    "lockInPeriod": "No Lock-in (Open-ended)",
    "riskLevel": "Medium",
    "depositRules": "Open for daily subscription via SIP or lumpsum across AMC websites, MF Central, and mutual fund distributors.",
    "returnMechanism": "Three-way engine: unhedged directional equity (growth), fully hedged cash-futures arbitrage (risk-free spread), and debt securities (steady yield).",
    "taxTreatment": "Equity-oriented taxation (as gross equity including arbitrage exceeds 65%): LTCG over Rs 1.25 Lakh taxed at 12.5%; STCG taxed at 20%.",
    "withdrawalRules": "Daily redemption at applicable NAV (nominal exit load for redemptions within 15–90 days depending on scheme).",
    "importantRules": [
      "SEBI mandate: Minimum 65% total equity (cash + derivatives arbitrage), minimum 10% debt, and minimum hedged/unhedged exposure stated in SID.",
      "Significantly lower volatility than pure equity funds while retaining equity tax efficiency.",
      "Ideal for conservative investors seeking higher tax-adjusted returns than fixed deposits for a 2–3 year horizon."
    ],
    "faqs": [
      {
        "question": "How does the arbitrage component in Equity Savings Funds work?",
        "answer": "Arbitrage exploits the price differential between cash and futures markets (buying cash stock and selling futures simultaneously) to lock in risk-free spreads."
      }
    ]
  },
  {
    "id": "inv-dividend-yield-fund",
    "title": "Dividend Yield Equity Mutual Fund",
    "slug": "dividend-yield-equity-mutual-fund",
    "description": "Open-ended equity mutual fund category regulated by SEBI that predominantly invests a minimum of 65% of total assets in high dividend-yielding equity stocks.",
    "authority": "SEBI / AMFI",
    "category": "Mutual Funds",
    "status": "ACTIVE / OPEN",
    "sourceUrl": "https://www.amfiindia.com",
    "sourceAuthority": "SEBI / AMFI",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100,
    "expectedReturn": "Market-linked returns from stock capital appreciation and high corporate dividend cash flows",
    "lockInPeriod": "No Lock-in (Open-ended)",
    "riskLevel": "High",
    "depositRules": "Subscribed via Systematic Investment Plan (SIP) or lumpsum across all mutual fund platforms and registered brokers.",
    "returnMechanism": "Portfolio Net Asset Value (NAV) appreciation from mature, cash-rich companies with strong dividend track records.",
    "taxTreatment": "Equity mutual fund taxation: Long-term capital gains (>12 months) exceeding Rs 1.25 Lakh taxed at 12.5%; Short-term capital gains (<=12 months) taxed at 20%. Dividends received under IDCW option taxed at investor slab rate.",
    "withdrawalRules": "Open-ended daily redemption at prevailing NAV with no lock-in.",
    "importantRules": [
      "Minimum 65% investment in dividend-yielding stocks with yields higher than the broad market benchmark (e.g. Nifty 50).",
      "Value-oriented investment style with natural downside protection during market downturns.",
      "Underlying dividend yield of a stock does not guarantee a fixed dividend payout by the mutual fund scheme."
    ],
    "faqs": [
      {
        "question": "Does a Dividend Yield Fund guarantee regular income to the unitholder?",
        "answer": "No. The fund invests in companies that have high dividend yields, but mutual fund returns and IDCW distributions remain market-linked and non-guaranteed."
      }
    ]
  },
  {
    "id": "inv-focused-equity-fund",
    "title": "Focused Equity Mutual Fund (Max 30 Stocks)",
    "slug": "focused-equity-mutual-fund",
    "description": "Open-ended equity mutual fund category defined by SEBI that invests in a concentrated portfolio of high-conviction equity stocks subject to a strict statutory maximum limit of 30 stocks (minimum 65% in equity & equity-related instruments).",
    "authority": "SEBI / AMFI",
    "category": "Mutual Funds",
    "status": "ACTIVE / OPEN",
    "sourceUrl": "https://www.amfiindia.com",
    "sourceAuthority": "SEBI / AMFI",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100,
    "expectedReturn": "Market-linked returns driven by high-conviction, stock-specific outperformance",
    "lockInPeriod": "No Lock-in (Open-ended)",
    "riskLevel": "High",
    "depositRules": "Investible via SIP or lumpsum across all mutual fund platforms and mobile applications.",
    "returnMechanism": "Capital appreciation driven by top high-conviction ideas selected by the fund manager across market capitalizations.",
    "taxTreatment": "Equity mutual fund tax rules: LTCG over Rs 1.25 Lakh taxed at 12.5%; STCG taxed at 20% under Section 111A.",
    "withdrawalRules": "Daily redemption at applicable NAV (typical 1% exit load for redemptions within 1 year).",
    "importantRules": [
      "SEBI mandates maximum 30 stocks in portfolio, ensuring concentrated high-conviction exposure.",
      "Scheme must explicitly specify its multi-cap, large-cap, mid-cap, or small-cap focus in offer documents.",
      "Higher stock-specific concentration risk relative to broadly diversified equity funds."
    ],
    "faqs": [
      {
        "question": "What is the statutory cap on the number of stocks in a Focused Fund?",
        "answer": "Under SEBI regulations, a Focused Equity Mutual Fund is strictly capped at a maximum of 30 stocks in its portfolio."
      }
    ]
  },
  {
    "id": "inv-value-contra-fund",
    "title": "Value / Contra Equity Mutual Fund",
    "slug": "value-contra-equity-mutual-fund",
    "description": "Open-ended equity mutual fund categories defined by SEBI: Value Funds follow a value investment strategy (minimum 65% in equities), while Contra Funds follow a contrarian investment strategy. A fund house can offer either a Value fund or a Contra fund, but not both.",
    "authority": "SEBI / AMFI",
    "category": "Mutual Funds",
    "status": "ACTIVE / OPEN",
    "sourceUrl": "https://www.amfiindia.com",
    "sourceAuthority": "SEBI / AMFI",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100,
    "expectedReturn": "Market-linked capital appreciation from undervalued or out-of-favor equity assets",
    "lockInPeriod": "No Lock-in (Open-ended)",
    "riskLevel": "High",
    "depositRules": "Open for daily investment via SIP (from Rs 100/month) or lumpsum across all mutual fund channels.",
    "returnMechanism": "Long-term value unlocking as market mispricings correct and contrarian turnaround themes play out.",
    "taxTreatment": "Equity mutual fund taxation: LTCG over Rs 1.25 Lakh taxed at 12.5%; STCG taxed at 20%.",
    "withdrawalRules": "Open-ended daily redemption at prevailing NAV.",
    "importantRules": [
      "SEBI rule: Mutual fund houses are permitted to offer either a Value Fund or a Contra Fund (not both).",
      "Minimum 65% investment in equity & equity-related instruments.",
      "Requires longer holding horizon (5+ years) for underlying value or turnaround cycles to materialize."
    ],
    "faqs": [
      {
        "question": "How does a Contra Fund differ from a Value Fund?",
        "answer": "Value funds look for fundamentally strong companies trading at a discount to intrinsic value, whereas Contra funds take contrarian bets against prevailing market trends on unloved or turnaround sectors."
      }
    ]
  },
  {
    "id": "inv-manufacturing-sector-fund",
    "title": "Manufacturing & Capital Goods Sector Fund",
    "slug": "manufacturing-capital-goods-sector-fund",
    "description": "Sectoral / Thematic open-ended equity mutual fund category regulated under SEBI guidelines investing a minimum of 80% of total assets in equity and equity-related securities of companies engaged in manufacturing, capital goods, industrial machinery, and infrastructure components.",
    "authority": "SEBI / AMFI",
    "category": "Mutual Funds",
    "status": "ACTIVE / OPEN",
    "sourceUrl": "https://www.amfiindia.com",
    "sourceAuthority": "SEBI / AMFI",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100,
    "expectedReturn": "Market-linked returns tracking industrial capex, manufacturing growth, and Make in India initiatives",
    "lockInPeriod": "No Lock-in (Open-ended)",
    "riskLevel": "High",
    "depositRules": "Available for daily investment via SIP or lumpsum across all mutual fund platforms and mobile apps.",
    "returnMechanism": "Capital appreciation driven by industrial capacity expansion, PLI schemes, export manufacturing, and capital goods order inflows.",
    "taxTreatment": "Equity mutual fund tax rules apply: 12.5% LTCG on gains above Rs 1.25 Lakh; 20% STCG for holding period <= 12 months.",
    "withdrawalRules": "Open-ended daily redemption at prevailing NAV with no lock-in (nominal exit load for redemptions within 1 year).",
    "importantRules": [
      "SEBI sectoral/thematic mandate: Minimum 80% investment in manufacturing and capital goods sector stocks.",
      "High cyclical sensitivity to macroeconomic industrial production, capex cycles, and interest rates.",
      "Elevated sector concentration risk compared to broad market diversified funds."
    ],
    "faqs": [
      {
        "question": "What sectors are covered in Manufacturing & Capital Goods funds?",
        "answer": "Automobiles, industrial machinery, capital goods, defense manufacturing, electronics, specialty chemicals, and metals."
      }
    ]
  },
  {
    "id": "inv-esg-thematic-fund",
    "title": "ESG (Environmental, Social & Governance) Thematic Fund",
    "slug": "esg-thematic-mutual-fund",
    "description": "Thematic open-ended equity mutual fund category regulated under SEBI ESG framework (2023) investing a minimum of 80% of total assets in equity securities of companies adhering to Environmental, Social, and Governance (ESG) principles with mandatory Business Responsibility and Sustainability Reporting (BRSR) disclosures.",
    "authority": "SEBI / AMFI",
    "category": "Mutual Funds",
    "status": "ACTIVE / OPEN",
    "sourceUrl": "https://www.sebi.gov.in",
    "sourceAuthority": "SEBI / AMFI",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 100,
    "expectedReturn": "Market-linked capital appreciation from sustainability leaders with high ESG compliance scores",
    "lockInPeriod": "No Lock-in (Open-ended)",
    "riskLevel": "High",
    "depositRules": "Open for daily subscription via SIP or lumpsum across mutual fund channels and digital investment apps.",
    "returnMechanism": "Long-term equity appreciation from companies with superior governance, clean energy transition, carbon efficiency, and social responsibility.",
    "taxTreatment": "Equity mutual fund taxation: LTCG exceeding Rs 1.25 Lakh taxed at 12.5%; STCG taxed at 20% under Section 111A.",
    "withdrawalRules": "Daily redemption at applicable NAV with no lock-in.",
    "importantRules": [
      "SEBI mandates minimum 80% investment in ESG-compliant companies and minimum 65% in companies with comprehensive BRSR core assurance.",
      "Six distinct ESG sub-themes allowed: Exclusion, Integration, Best-in-class, Positive Screening, Impact Investing, and Sustainable Objectives.",
      "Mandatory periodic disclosure of fund ESG scoring methodology and voting decisions."
    ],
    "faqs": [
      {
        "question": "What is BRSR Core under SEBI ESG guidelines?",
        "answer": "BRSR Core consists of key performance indicators (KPIs) covering GHG emissions, water usage, waste management, employee diversity, and governance subject to reasonable assurance."
      }
    ]
  },
  {
    "id": "inv-cube-highways-invit",
    "title": "Cube Highways Trust (InvIT)",
    "slug": "cube-highways-trust-invit",
    "description": "Publicly listed Infrastructure Investment Trust (InvIT) registered with SEBI, backed by sovereign and institutional sponsors (I Squared Capital and Abu Dhabi Investment Authority), owning and managing a diversified portfolio of toll and annuity road assets across India.",
    "authority": "SEBI / Cube Highways Fund Advisors Private Limited",
    "category": "Infrastructure Investment Trusts (InvITs)",
    "status": "ACTIVE / TRADED",
    "sourceUrl": "https://www.cubehighwaystrust.com",
    "sourceAuthority": "SEBI / BSE / NSE / Cube Highways Trust",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 1,
    "expectedReturn": "Yield from toll road cash flows distributed at least semi-annually (Dividend, Interest, and Return of Capital)",
    "lockInPeriod": "No Lock-in (Exchange Traded)",
    "riskLevel": "Medium",
    "depositRules": "Traded in trading lot of 1 unit on NSE and BSE debt/equity trading platforms via standard demat and trading accounts.",
    "returnMechanism": "Mandatory minimum 90% distribution of Net Distributable Cash Flows (NDCF) to unitholders as Interest, Dividend, and Return of Capital (SPV loan repayments).",
    "taxTreatment": "Pass-through taxation under Section 115UA: Interest component is taxable at investor slab rate; Dividend is tax-exempt if SPV did not opt for Section 115BAA or taxable if opted; Return of capital component taxed under Section 56(2)(xii) if total distributions exceed issue price. Capital gains on unit sale on exchange: 12.5% LTCG (>36 months), 20% STCG (<=36 months).",
    "withdrawalRules": "Secondary market trading on NSE and BSE during stock market trading hours.",
    "importantRules": [
      "AAA credit rating from CRISIL, India Ratings, and CARE for underlying debt facilities.",
      "Operates major national highway stretches under long-term NHAI concessions.",
      "Institutional sponsors include Abu Dhabi Investment Authority (ADIA) and Canadian pension fund BCI."
    ],
    "faqs": [
      {
        "question": "What assets are owned by Cube Highways Trust?",
        "answer": "Cube Highways Trust owns a portfolio of toll and Hybrid Annuity Model (HAM) national highway stretches across multiple Indian states."
      },
      {
        "question": "How frequently does Cube Highways Trust distribute cash flows?",
        "answer": "As per SEBI InvIT regulations, cash distributions must occur at least semi-annually, with many InvITs distributing quarterly."
      }
    ]
  },
  {
    "id": "inv-oriental-infra-invit",
    "title": "Oriental InfraTrust (InvIT)",
    "slug": "oriental-infratrust-invit",
    "description": "Infrastructure Investment Trust (InvIT) registered with SEBI, sponsored by Oriental Structural Engineers Pvt Ltd and Oriental Tollways Pvt Ltd with major institutional participation from international investors, managing toll road and highway concessions across India.",
    "authority": "SEBI / OIT Infrastructure Management Limited",
    "category": "Infrastructure Investment Trusts (InvITs)",
    "status": "ACTIVE / TRADED",
    "sourceUrl": "https://www.orientalinfratrust.com",
    "sourceAuthority": "SEBI / BSE / NSE / Oriental InfraTrust",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 1,
    "expectedReturn": "Yield from road asset cash flows distributed periodically as Interest, Dividend, and Return of Capital",
    "lockInPeriod": "No Lock-in (Exchange Traded)",
    "riskLevel": "Medium",
    "depositRules": "Listed and traded on NSE and BSE in demat format; secondary market trading accessible through stockbrokers.",
    "returnMechanism": "Quarterly/semi-annual distribution of Net Distributable Cash Flows (NDCF) generated from toll collections and NHAI annuity payments across project SPVs.",
    "taxTreatment": "Pass-through taxation under Section 115UA: Interest component is taxable at investor slab rate; Dividend tax depends on SPV tax regime; Return of capital component taxed under Section 56(2)(xii) if cumulative distributions exceed issue price. Exchange sale LTCG (>36 months) taxed at 12.5%, STCG (<=36 months) taxed at 20%.",
    "withdrawalRules": "Tradable on stock exchange secondary market platforms during market hours.",
    "importantRules": [
      "Portfolio comprises operational toll and annuity road projects across high-traffic corridors.",
      "AAA / AA+ rating from domestic credit rating agencies with structured debt servicing escrow accounts.",
      "SEBI-mandated 90% minimum NDCF cash flow distribution."
    ],
    "faqs": [
      {
        "question": "Who are the sponsors of Oriental InfraTrust?",
        "answer": "Oriental Structural Engineers Private Limited and Oriental Tollways Private Limited."
      }
    ]
  },
  {
    "id": "inv-irb-invit",
    "title": "IRB InvIT Fund",
    "slug": "irb-invit-fund",
    "description": "India first publicly offered Infrastructure Investment Trust (InvIT) registered with SEBI and sponsored by IRB Infrastructure Developers Limited, owning and operating operational toll road projects under long-term NHAI concessions.",
    "authority": "SEBI / IRB Infrastructure Private Limited (Investment Manager)",
    "category": "Infrastructure Investment Trusts (InvITs)",
    "status": "ACTIVE / TRADED",
    "sourceUrl": "https://www.irbinvit.co.in",
    "sourceAuthority": "SEBI / BSE / NSE / IRB InvIT Fund",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "minInvestment": 1,
    "expectedReturn": "Periodic quarterly cash distributions (Interest, Return of Capital, Dividend) from toll road collections",
    "lockInPeriod": "No Lock-in (Exchange Traded)",
    "riskLevel": "Medium",
    "depositRules": "Publicly listed on NSE and BSE; traded in trading lots of 1 unit in demat format via stockbroking accounts.",
    "returnMechanism": "Mandatory distribution of at least 90% of Net Distributable Cash Flows (NDCF) paid out to unitholders on a quarterly basis.",
    "taxTreatment": "Pass-through taxation under Section 115UA: Interest portion is taxable at the investor marginal income tax slab; Dividend portion is taxed as per SPV tax regime; Return of capital component taxed under Section 56(2)(xii) if total distributions exceed cost. Capital gains on sale of listed units on stock exchange: LTCG (>36 months) at 12.5% and STCG (<=36 months) at 20%.",
    "withdrawalRules": "Instant real-time secondary market liquidity on NSE and BSE.",
    "importantRules": [
      "Pioneering first publicly listed InvIT in India (listed on BSE and NSE in May 2017).",
      "Portfolio consists of operating toll road special purpose vehicles (SPVs) across national arterial highway corridors.",
      "Subject to traffic volume fluctuations, fuel prices, and macroeconomic commercial vehicle movements."
    ],
    "faqs": [
      {
        "question": "When did IRB InvIT Fund list on the Indian stock exchanges?",
        "answer": "IRB InvIT Fund listed on BSE and NSE in May 2017 as India first publicly offered Infrastructure Investment Trust."
      },
      {
        "question": "How often does IRB InvIT pay distributions to unitholders?",
        "answer": "IRB InvIT Fund distributes cash flows on a quarterly basis to all registered unitholders."
      }
    ]
  }
];
