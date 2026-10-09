// Category 9: Tools & Calculators (14 Answers: Q-CALC-001 to Q-CALC-014)

export const cat9Answers = [
  {
    question_id: "Q-CALC-001",
    canonical_question: "How does a PPF calculator compute compound interest if deposits are made in installments?",
    short_answer: "A PPF calculator calculates monthly interest on the lowest balance between the 5th and the last day of each month, sums these 12 monthly interest amounts, and compounds them into the principal balance on March 31 of each financial year.",
    detailed_answer: "Under the Public Provident Fund Scheme, 2019, interest calculation follows a strict statutory algorithm: 1) Qualifying Monthly Balance: For each calendar month (April to March), the interest-bearing balance is defined as the minimum balance standing to the credit of the account between the close of the fifth day and the end of the month. Deposits credited after the 5th earn zero interest for that month; 2) Monthly Interest Accrual: Monthly Interest = (Lowest Balance * Annual Rate) / (12 * 100); 3) Annual Compounding: The 12 monthly interest calculations are accumulated and added to the principal balance once annually on March 31st. For installment depositors, making contributions on or before the 5th of each month maximizes total annual compounded yield.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "PPF कैलकुलेटर महीने की 5 तारीख और अंतिम दिन के बीच के न्यूनतम शेष पर मासिक ब्याज की गणना करता है, और पूरे वर्ष के 12 महीनों के ब्याज को जोड़कर 31 मार्च को मूलधन में चक्रवृद्धि (कंपाउंड) करता है।",
        detailed_answer: "PPF नियम 2019 के अनुसार, यदि आप किसी महीने की 5 तारीख के बाद पैसा जमा करते हैं, तो उस महीने उस जमा राशि पर ब्याज नहीं मिलता। प्रत्येक महीने का ब्याज (न्यूनतम शेष * 7.1% / 12) के रूप में निकाला जाता है और वित्तीय वर्ष के अंत (31 मार्च) में खाते में जोड़ दिया जाता है।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "PPF calculator har mahine ki 5th date aur month-end ke lowest balance par monthly interest calculate karta hai aur 31st March ko pore saal ke interest ko principal me compound add karta hai.",
        detailed_answer: "PPF algorithm ke mutabiq har month ka interest = (Lowest balance between 5th and last day * Rate) / 1200 hota hai. Yeh monthly interest book hota rehta hai aur 31st March ko annual compounding ke roop me balance me add ho jata hai.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "PPF interest is calculated on the lowest balance between 5th and end of each month and compounded annually on March 31.",
        citation_source: "Public Provident Fund Scheme, 2019, Paragraph 8 (Calculation of Interest)",
        source_url: "https://www.nsiindia.gov.in/"
      }
    ],
    official_source_urls: [
      "https://www.nsiindia.gov.in/",
      "https://www.indiapost.gov.in/Financial/Pages/Content/Post-Office-Saving-Schemes.aspx"
    ],
    source_title: "Public Provident Fund Scheme, 2019: Mathematical Interest Calculation Rules",
    source_publisher: "Ministry of Finance & National Savings Institute",
    evidence_type: "PRIMARY_STATUTORY_RULE",
    effective_date: "2019-12-12",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Always advise depositors to set auto-debit on or before the 5th of each month.",
    conflicting_evidence: null,
    next_review_due: "2026-12-31"
  },
  {
    question_id: "Q-CALC-002",
    canonical_question: "How is maturity amount calculated in Sukanya Samriddhi Yojana if deposit is made for 15 years and account matures at 21 years?",
    short_answer: "In Sukanya Samriddhi Yojana (SSY), the depositor makes annual contributions for the first 15 years, and during years 16 to 21 (when no fresh deposits are permitted), the accumulated corpus continues to earn compound interest at the applicable annual rate until final maturity at 21 years.",
    detailed_answer: "The SSY calculator computes the maturity value across two distinct temporal phases: 1) Contribution Phase (Years 1 to 15): The subscriber deposits funds (up to ₹1.5 lakh annually). Compounding interest is calculated on the lowest balance between the 5th and the end of each month and credited on March 31st of each year, compounding the principal for 15 years; 2) Growth Phase (Years 16 to 21): No further deposits are allowed (or required). The entire accumulated corpus at the end of year 15 continues to compound at the prevailing notified government rate (currently 8.2%) for an additional 6 years: Maturity Amount = Corpus_Year15 * (1 + r)^6. At completion of 21 years from account opening, the entire sum is disbursed 100% tax-free.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "सुकन्या समृद्धि योजना में पहले 15 वर्षों तक राशि जमा की जाती है, और 16वें से 21वें वर्ष तक (बिना कोई नया पैसा जमा किए) कुल जमा पूंजी पर अगले 6 वर्षों तक चक्रवृद्धि ब्याज जुड़ता रहता है, जो 21 वर्ष पूरे होने पर परिपक्व होता है।",
        detailed_answer: "कैलकुलेटर दो चरणों में गणना करता है: पहले 15 वर्षों में वार्षिक जमा + 8.2% चक्रवृद्धि ब्याज। इसके बाद अगले 6 वर्षों तक कोई जमा नहीं करना होता, लेकिन 15वें वर्ष का कुल फंड अगले 6 साल तक 8.2% की दर से बढ़ता रहता है। 21 वर्ष बाद मिलने वाली पूरी राशि पूरी तरह कर-मुक्त होती है।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "SSY me pehle 15 years tak deposit hota hai, aur 16th se 21st year tak (bina fresh deposit kiye) accumulated balance par 6 years tak compound interest continue rehta hai jab tak 21 saal me account mature na ho.",
        detailed_answer: "Calculation 2 phases me hoti hai: Phase 1 (1-15 years) me regular deposit aur compounding hoti hai. Phase 2 (16-21 years) me deposit band ho jata hai par total corpus par prevailing 8.2% rate par 6 saal tak interest compound hota rehta hai.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "SSY deposits are made for 15 years; corpus continues to earn interest without deposits until maturity at 21 years.",
        citation_source: "Sukanya Samriddhi Account Scheme, 2019, Paragraph 5 & Paragraph 11",
        source_url: "https://www.nsiindia.gov.in/"
      }
    ],
    official_source_urls: [
      "https://www.nsiindia.gov.in/",
      "https://www.indiapost.gov.in/Financial/Pages/Content/Post-Office-Saving-Schemes.aspx"
    ],
    source_title: "Sukanya Samriddhi Account Scheme, 2019: Maturity Compounding Rules",
    source_publisher: "National Savings Institute & Department of Posts",
    evidence_type: "PRIMARY_STATUTORY_RULE",
    effective_date: "2019-12-12",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Interest continues to accrue even beyond 21 years if the account is not closed, up to formal gazette instructions.",
    conflicting_evidence: null,
    next_review_due: "2026-12-31"
  },
  {
    question_id: "Q-CALC-003",
    canonical_question: "What is the formula to calculate monthly payout under Post Office Monthly Income Scheme (POMIS)?",
    short_answer: "The formula to calculate the monthly interest payout under POMIS is: Monthly Payout = (Principal Deposit * Annual Interest Rate) / 12, yielding exactly ₹5,550 per month on a ₹9 lakh deposit and ₹9,250 per month on a ₹15 lakh deposit at 7.4% per annum.",
    detailed_answer: "Under the Post Office Monthly Income Scheme Rules, 2019, interest is calculated on a simple interest basis on the initial principal deposit and disbursed monthly: Monthly Interest = (P * r) / (12 * 100), where P is the deposited principal and r is the notified annual interest rate (currently 7.4%). Examples: 1) Maximum Single Account (₹9,00,000): Monthly Payout = (9,00,000 * 7.4) / 1,200 = ₹5,550 per month (₹66,600 per year); 2) Maximum Joint Account (₹15,00,000): Monthly Payout = (15,00,000 * 7.4) / 1,200 = ₹9,250 per month (₹1,11,000 per year). If the depositor does not withdraw the monthly interest, it does not earn any extra interest in the POMIS account.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "POMIS में मासिक ब्याज की गणना का फॉर्मूला है: मासिक आय = (मूलधन * वार्षिक ब्याज दर) / 12। वर्तमान 7.4% दर पर ₹9 लाख पर ₹5,550 प्रतिमाह और ₹15 लाख के संयुक्त खाते पर ₹9,250 प्रतिमाह मिलते हैं।",
        detailed_answer: "डाकघर मासिक आय योजना का फॉर्मूला (P * R) / 1200 है। यदि कोई एकल खाते में अधिकतम ₹9 लाख जमा करता है, तो उसे हर महीने ₹5,550 मिलते हैं। ₹15 लाख के संयुक्त खाते पर ₹9,250 मासिक पेंशन की तरह मिलते हैं। यह ब्याज सीधे बचत खाते में ट्रांसफर हो जाता है।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "POMIS monthly payout formula: Monthly Interest = (Principal * Annual Rate) / 1200. At 7.4% interest, ₹9 lakh par ₹5,550/month aur ₹15 lakh joint account par ₹9,250/month milte hain.",
        detailed_answer: "POMIS simple interest basis par monthly credit hota hai. Formula: (P * 7.4) / 1200. ₹9 lakh single deposit par exactly ₹5,550 monthly milta hai aur ₹15 lakh joint par ₹9,250 monthly credited to savings account.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "POMIS monthly interest equals (Principal * Rate) / 12, delivering ₹5,550 on ₹9L and ₹9,250 on ₹15L at 7.4%.",
        citation_source: "Post Office Monthly Income Scheme Rules, 2019, Paragraph 5",
        source_url: "https://www.indiapost.gov.in/Financial/Pages/Content/Post-Office-Saving-Schemes.aspx"
      }
    ],
    official_source_urls: [
      "https://www.indiapost.gov.in/Financial/Pages/Content/Post-Office-Saving-Schemes.aspx",
      "https://www.nsiindia.gov.in/"
    ],
    source_title: "Post Office Monthly Income Account Rules, 2019: Mathematical Payout Formula",
    source_publisher: "Department of Posts & National Savings Institute",
    evidence_type: "PRIMARY_STATUTORY_RULE",
    effective_date: "2023-04-01",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Depositors should link their Post Office Savings Account (POSA) for automatic monthly credit.",
    conflicting_evidence: null,
    next_review_due: "2026-12-31"
  },
  {
    question_id: "Q-CALC-004",
    canonical_question: "Why does compound interest produce significantly higher returns than simple interest in multi-year government bonds?",
    short_answer: "Compound interest produces significantly higher returns because each year's accrued interest is reinvested and added to the principal base, generating 'interest on interest' that grows exponentially over multi-year tenures.",
    detailed_answer: "The mathematical divergence between Simple Interest and Compound Interest accelerates with time: 1) Simple Interest: Future Value = P * (1 + r * t), where interest remains linear because it is calculated solely on the original principal P; 2) Compound Interest: Future Value = P * (1 + r/n)^(n*t), where previously accrued interest is rolled into principal every compounding cycle (quarterly or annually). In a 15-year instrument like PPF at 7.1%, ₹1,50,000 deposited annually accumulates to ~₹40.68 lakh under compound interest (where interest exceeds ₹18.18 lakh), whereas under simple interest the total return would be only ~₹30.98 lakh—a compounding premium of nearly ₹10 lakh.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "चक्रवृद्धि ब्याज साधारण ब्याज से कहीं अधिक रिटर्न देता है क्योंकि इसमें हर साल अर्जित ब्याज को मूलधन में जोड़ दिया जाता है, जिससे 'ब्याज पर भी ब्याज' मिलता है और दीर्घकालिक रिटर्न घातीय (Exponential) रूप से बढ़ता है।",
        detailed_answer: "साधारण ब्याज में केवल मूलधन पर लाभ मिलता है (P * R * T)। चक्रवृद्धि ब्याज में हर वर्ष या तिमाही में अर्जित लाभ मूलधन का हिस्सा बन जाता है। 15 वर्षों में PPF में वार्षिक ₹1.5 लाख जमा करने पर चक्रवृद्धि ब्याज के कारण लगभग ₹40.68 लाख बनते हैं, जबकि साधारण ब्याज में यह केवल ₹31 लाख के करीब होता।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "Compound interest significantly higher return deta hai kyunki isme 'interest on interest' generate hota hai: pichle saal ka interest principal me add ho kar exponential growth create karta hai.",
        detailed_answer: "Simple interest linear rehta hai (A = P + P*r*t), jabki compound interest exponential hota hai [A = P*(1+r)^t]. 15 saal ke tenure me PPF me ₹1.5L annual deposit karne par compounding ki wajah se ~₹10 lakh extra interest generate hota hai.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "Compound interest reinvests accrued returns generating exponential wealth accumulation over long tenures.",
        citation_source: "Financial Mathematics & National Savings Scheme Actuarial Guidelines",
        source_url: "https://www.nsiindia.gov.in/"
      }
    ],
    official_source_urls: [
      "https://www.nsiindia.gov.in/",
      "https://dea.gov.in/"
    ],
    source_title: "Actuarial Principles of Compounding in Government Small Savings Instruments",
    source_publisher: "National Savings Institute",
    evidence_type: "RESEARCH_SYNTHESIS",
    effective_date: "2024-01-01",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Core educational foundation for SarkarSaathi compound interest comparison tools.",
    conflicting_evidence: null,
    next_review_due: "2026-12-31"
  },
  {
    question_id: "Q-CALC-005",
    canonical_question: "How is the PPF loan eligibility limit calculated using the formula of 25% of balance at the end of the second preceding financial year?",
    short_answer: "The PPF loan limit is mathematically calculated as exactly 25% of the total balance standing to the credit of the account at the close of the second financial year immediately preceding the year in which the loan is applied for.",
    detailed_answer: "Under Paragraph 10 of the Public Provident Fund Scheme, 2019, an account holder can apply for a loan starting from the 3rd financial year up to the end of the 6th financial year from account opening. The statutory formula is: Maximum Loan = 0.25 * Balance at end of (Application FY - 2). Example: If an applicant applies for a loan in FY 2024-25 (Year 5), the second preceding financial year is FY 2022-23 (which closed on March 31, 2023). If the credit balance on March 31, 2023 was ₹4,00,000, the maximum permissible loan is: 0.25 * ₹4,00,000 = ₹1,00,000. Only one loan is permitted in a financial year, and no fresh loan can be sanctioned until the prior loan is completely repaid.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "PPF ऋण पात्रता की गणना आवेदन के वित्तीय वर्ष से ठीक पहले के दूसरे वित्तीय वर्ष की 31 मार्च को खाते में जमा कुल राशि के 25% के रूप में की जाती है।",
        detailed_answer: "PPF नियम 2019 के अनुसार, यदि आप FY 2024-25 में ऋण के लिए आवेदन करते हैं, तो दूसरा पूर्ववर्ती वर्ष FY 2022-23 (31 मार्च 2023) होगा। यदि 31 मार्च 2023 को आपका बैलेंस ₹4,00,000 था, तो आपको अधिकतम ₹1,00,000 (25%) का ऋण मिल सकता है। ऋण 3रे से 6ठे वर्ष के बीच ही लिया जा सकता है।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "PPF loan formula: Loan Amount = 25% of balance at the end of the second preceding financial year (Application Year se 2 saal pehle ki 31st March ka balance * 0.25).",
        detailed_answer: "PPF Scheme 2019 Para 10 ke tehat: Agar application FY 2024-25 me lagayi hai, to 31 March 2023 (FY 2022-23) ke closing balance ka 25% calculate hoga. Agar balance ₹4 lakh tha to maximum loan ₹1 lakh sanction hoga.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "PPF loan limit is 25% of balance at the close of the second preceding financial year, available from 3rd to 6th year.",
        citation_source: "Public Provident Fund Scheme, 2019, Paragraph 10(1)",
        source_url: "https://www.nsiindia.gov.in/"
      }
    ],
    official_source_urls: [
      "https://www.nsiindia.gov.in/",
      "https://www.indiapost.gov.in/Financial/Pages/Content/Post-Office-Saving-Schemes.aspx"
    ],
    source_title: "Public Provident Fund Scheme, 2019: Paragraph 10 (Loans)",
    source_publisher: "Ministry of Finance & National Savings Institute",
    evidence_type: "PRIMARY_STATUTORY_RULE",
    effective_date: "2019-12-12",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "From the 7th financial year onwards, loan facility ends and partial withdrawal becomes active.",
    conflicting_evidence: null,
    next_review_due: "2026-12-31"
  },
  {
    question_id: "Q-CALC-006",
    canonical_question: "How is the 1% interest differential and 6% penalty rate calculated mathematically on PPF loan balances?",
    short_answer: "If repaid within 36 months, interest on a PPF loan is charged at 1.00% per annum above the prevailing PPF rate; if not repaid within 36 months, a punitive interest rate of 6.00% per annum is charged on the outstanding balance from the date of loan disbursement.",
    detailed_answer: "Under Paragraph 10(3) and 10(4) of the PPF Scheme, 2019: 1) Timely Repayment (within 36 months): The borrower repays the principal in lump sum or monthly installments. Upon full principal clearance, interest is charged at 1.00% p.a. (e.g., 7.1% + 1% = 8.1% p.a.), calculated from the first day of the month following disbursement to the last day of the month of final installment; 2) Default Penalty (exceeding 36 months): If the principal is not fully repaid within 36 months, penal interest of 6.00% per annum (e.g., 7.1% + 6% = 13.1% p.a.) is debited on the unpaid principal balance retrospectively from the disbursement date until full recovery from the PPF account.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "यदि PPF ऋण 36 महीनों के भीतर चुका दिया जाता है, तो PPF की वर्तमान दर से केवल 1% अधिक ब्याज लगता है; यदि 36 महीनों में नहीं चुकाया जाता, तो ऋण जारी होने की तिथि से 6% प्रति वर्ष की दर से दंडात्मक ब्याज वसूला जाता है।",
        detailed_answer: "PPF नियम 2019 के अनुसार, समय पर (36 महीने में) ऋण चुकाने पर ब्याज दर केवल 1% प्रति वर्ष (7.1% + 1% = 8.1%) होती है। लेकिन 36 महीने से अधिक की चूक होने पर, ऋण वितरण की तिथि से पूरे 6% प्रति वर्ष (7.1% + 6% = 13.1%) का दंडात्मक ब्याज खाते से काट लिया जाता है।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "Agar PPF loan 36 months me repay ho jaye to interest PPF rate + 1% p.a. lagta hai; agar 36 months exceed ho jayein to disbursement date se 6% p.a. penal interest deduct hota hai.",
        detailed_answer: "PPF loan repayment terms: 36 months ke andar pay karne par effective interest 1% above PPF rate hota hai. Agar 36 months me pay nahi kiya to penal rate 6% p.a. retrospective apply hota hai jo final PPF corpus se debit ho jata hai.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "PPF loan interest is 1% p.a. if repaid in 36 months, and 6% p.a. penal interest if unpaid beyond 36 months.",
        citation_source: "Public Provident Fund Scheme, 2019, Paragraph 10(3) and 10(4)",
        source_url: "https://www.nsiindia.gov.in/"
      }
    ],
    official_source_urls: [
      "https://www.nsiindia.gov.in/",
      "https://www.indiapost.gov.in/Financial/Pages/Content/Post-Office-Saving-Schemes.aspx"
    ],
    source_title: "Public Provident Fund Scheme, 2019: Loan Interest and Penal Rates",
    source_publisher: "Ministry of Finance & Department of Posts",
    evidence_type: "PRIMARY_STATUTORY_RULE",
    effective_date: "2019-12-12",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Interest is paid in not more than two monthly installments after the entire principal is repaid.",
    conflicting_evidence: null,
    next_review_due: "2026-12-31"
  },
  {
    question_id: "Q-CALC-007",
    canonical_question: "What is the mathematical compound interest formula used by SSY calculators to project maturity amounts after 21 years?",
    short_answer: "SSY calculators use the future value annuity formula for the first 15 years of annual deposits: FV_15 = P * [((1 + r)^15 - 1) / r] * (1 + r), and project the subsequent 6 years using lump-sum compound interest: Final Maturity = FV_15 * (1 + r)^6.",
    detailed_answer: "Sukanya Samriddhi calculators project the maturity value using standard actuarial compound interest mathematics: 1) Phase 1 Annuity (Years 1 to 15): Assuming constant annual deposit P made at the beginning of each financial year and constant annual rate r (e.g., 0.082): FV_15 = P * [((1 + r)^15 - 1) / r] * (1 + r); 2) Phase 2 Compounding (Years 16 to 21): With zero fresh deposits, FV_15 compounds for 6 years: Final Maturity = FV_15 * (1 + r)^6; 3) Example with ₹1,50,000 annual deposit at 8.2%: FV_15 equals approximately ₹46,82,416. Over the remaining 6 years, ₹46,82,416 * (1.082)^6 equals approximately ₹75,10,950 at full 21-year maturity.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "SSY कैलकुलेटर पहले 15 वर्षों के वार्षिक जमा के लिए एन्युइटी फॉर्मूला FV = P * [((1+r)^15 - 1)/r] * (1+r) का उपयोग करता है, और अगले 6 वर्षों के लिए एकमुश्त चक्रवृद्धि फॉर्मूला Maturity = FV * (1+r)^6 लागू करता है।",
        detailed_answer: "यदि कोई अभिभावक प्रतिवर्ष ₹1.5 लाख जमा करता है (8.2% ब्याज पर), तो 15 वर्षों के अंत में कुल फंड लगभग ₹46.82 लाख हो जाता है। अगले 6 वर्षों में (बिना किसी नए जमा के) 8.2% चक्रवृद्धि ब्याज के साथ 21 वर्ष बाद कुल परिपक्वता राशि लगभग ₹75.11 लाख बनती है।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "SSY projection formula: First 15 years me Annuity compounding formula lagta hai [FV_15 = P * (((1+r)^15 - 1)/r) * (1+r)], aur agle 6 years me wahi corpus Final Maturity = FV_15 * (1+r)^6 se grow hota hai.",
        detailed_answer: "₹1,50,000 annual deposit at 8.2% interest: 15 years me corpus ~₹46.82 lakh banta hai. Remaining 6 years me zero deposit ke sath compounding chalne par 21 years maturity par total payout ~₹75.1 lakh calculate hota hai.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "SSY maturity formula compounds annual deposits for 15 years and compounds total corpus for 6 years until 21 years.",
        citation_source: "Sukanya Samriddhi Account Scheme Rules, 2019 & Actuarial Compounding Standards",
        source_url: "https://www.nsiindia.gov.in/"
      }
    ],
    official_source_urls: [
      "https://www.nsiindia.gov.in/",
      "https://www.indiapost.gov.in/Financial/Pages/Content/Post-Office-Saving-Schemes.aspx"
    ],
    source_title: "Sukanya Samriddhi Calculator Actuarial Formula Specification",
    source_publisher: "National Savings Institute",
    evidence_type: "RESEARCH_SYNTHESIS",
    effective_date: "2024-01-01",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Calculators assume a constant interest rate throughout the 21-year horizon; actual return varies with quarterly government rate revisions.",
    conflicting_evidence: null,
    next_review_due: "2026-12-31"
  },
  {
    question_id: "Q-CALC-008",
    canonical_question: "How is the quarterly interest payout of ₹61,500 calculated on a ₹30 lakh SCSS deposit at the current 8.2% interest rate?",
    short_answer: "On a ₹30 lakh SCSS deposit at 8.2% per annum, the quarterly interest payout is calculated using the formula: Quarterly Payout = (Principal * Annual Rate) / 400 = (30,00,000 * 8.2) / 400 = exactly ₹61,500 per quarter (₹2,46,000 annually).",
    detailed_answer: "Under Paragraph 7 of the Senior Citizen Savings Scheme Rules, 2019: 1) Annual Interest Computation: Total Annual Interest = ₹30,00,000 * 8.2% = ₹2,46,000; 2) Quarterly Distribution: Interest is payable on a quarterly basis on the first working day of April, July, October, and January: Quarterly Payout = ₹2,46,000 / 4 = ₹61,500; 3) Tax Deducted at Source (TDS): Because annual interest (₹2,46,000) exceeds the ₹50,000 threshold under Section 194A, banks/post offices deduct 10% TDS (₹6,150 per quarter, resulting in a net credit of ₹55,350) unless the senior citizen submits a valid Form 15H declaring estimated total income below the basic tax exemption limit.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "₹30 लाख के SCSS खाते पर 8.2% की दर से त्रैमासिक ब्याज की गणना का फॉर्मूला है: (₹30,00,000 * 8.2) / 400 = ठीक ₹61,500 प्रति तिमाही (या ₹2,46,000 प्रति वर्ष)।",
        detailed_answer: "SCSS नियम 2019 के अनुसार, ₹30 लाख की अधिकतम जमा पर 8.2% के हिसाब से साल का ₹2,46,000 ब्याज बनता है। इसे 4 तिमाहियों में विभाजित करने पर हर 3 महीने में ₹61,500 बैंक खाते में आते हैं। यदि फॉर्म 15H जमा नहीं किया जाता है, तो 10% टीडीएस कटकर ₹55,350 जमा होते हैं।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "SCSS quarterly interest formula: Quarterly Payout = (Principal * Rate) / 400. ₹30 lakh deposit par 8.2% rate se calculation: (30,00,000 * 8.2) / 400 = exactly ₹61,500 per quarter.",
        detailed_answer: "₹30 lakh par total annual interest ₹2,46,000 hota hai. Yeh 4 quarters (April, July, Oct, Jan) me ₹61,500 each credit hota hai. Agar Form 15H submit nahi kiya to Section 194A ke tehat 10% TDS deduct hone ke baad net payout ₹55,350 per quarter milta hai.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "SCSS pays quarterly interest calculated as (Principal * Rate) / 400, yielding ₹61,500 on ₹30 lakh at 8.2%.",
        citation_source: "Senior Citizens Savings Scheme Rules, 2019, Paragraph 7",
        source_url: "https://www.indiapost.gov.in/Financial/Pages/Content/Post-Office-Saving-Schemes.aspx"
      }
    ],
    official_source_urls: [
      "https://www.indiapost.gov.in/Financial/Pages/Content/Post-Office-Saving-Schemes.aspx",
      "https://www.nsiindia.gov.in/"
    ],
    source_title: "Senior Citizens Savings Scheme Rules, 2019: Quarterly Payout & TDS Formula",
    source_publisher: "Department of Posts & National Savings Institute",
    evidence_type: "PRIMARY_STATUTORY_RULE",
    effective_date: "2024-01-01",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Form 15H should be submitted at the start of each financial year (April) to avoid TDS deductions.",
    conflicting_evidence: null,
    next_review_due: "2026-12-31"
  },
  {
    question_id: "Q-CALC-009",
    canonical_question: "How is Section 194A TDS calculated on senior citizen bank and post office interest when total annual interest exceeds ₹50,000?",
    short_answer: "Under Section 194A of the Income Tax Act, banks and post offices deduct TDS at 10% on the entire interest amount paid to a resident senior citizen once total interest exceeds ₹50,000 in a financial year, provided a valid PAN is on record.",
    detailed_answer: "Statutory calculation rules for senior citizen interest taxation: 1) Statutory Threshold: For individuals aged 60 or above, TDS applies under Section 194A only when aggregate interest credited across all branches of a bank or post office exceeds ₹50,000 in a financial year (compared to ₹40,000 for non-seniors); 2) Tax Rate: If total interest > ₹50,000, TDS is deducted at 10% on the full gross interest paid; if PAN is not linked, TDS is deducted at 20% under Section 206AA; 3) Form 15H Exemption: A resident senior citizen can submit Form 15H to declare that their estimated total taxable income for the financial year is nil, legally instructing the bank/post office to deduct 0% TDS.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "आयकर अधिनियम की धारा 194A के तहत, यदि किसी वरिष्ठ नागरिक की कुल वार्षिक ब्याज आय ₹50,000 से अधिक होती है, तो बैंक या डाकघर पैन लिंक होने पर 10% की दर से टीडीएस (TDS) काटते हैं।",
        detailed_answer: "यदि वरिष्ठ नागरिक का कुल ब्याज ₹50,000 की सीमा को पार कर जाता है, तो पूरी ब्याज राशि पर 10% टीडीएस काटा जाता है (पैन न होने पर 20%)। यदि वरिष्ठ नागरिक की कुल कर-योग्य आय शून्य है, तो वे अप्रैल माह में फॉर्म 15H जमा करके टीडीएस कटौती को पूरी तरह रुकवा सकते हैं।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "Section 194A ke tehat senior citizens ka annual interest ₹50,000 exceed hote hi bank/post office 10% TDS deduct karte hain (agar PAN verified ho).",
        detailed_answer: "Senior citizens (60+) ke liye TDS threshold ₹50,000 per financial year hai. Agar interest ₹50,000 se upar jata hai to gross interest par 10% TDS cut hota hai. Zero tax liability hone par Form 15H submit karke TDS se bacha ja sakta hai.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "Section 194A mandates 10% TDS on senior citizen interest exceeding ₹50,000, waivable via Form 15H.",
        citation_source: "Income Tax Act, 1961, Section 194A, Section 197A (Form 15H) & Section 206AA",
        source_url: "https://www.incometax.gov.in/"
      }
    ],
    official_source_urls: [
      "https://www.incometax.gov.in/",
      "https://incometaxindia.gov.in/"
    ],
    source_title: "Income Tax Act, 1961: Section 194A Interest Other Than Interest on Securities",
    source_publisher: "Central Board of Direct Taxes (CBDT)",
    evidence_type: "PRIMARY_STATUTORY_RULE",
    effective_date: "2018-04-01",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Form 15H is valid for one financial year only and must be renewed annually.",
    conflicting_evidence: null,
    next_review_due: "2026-12-31"
  },
  {
    question_id: "Q-CALC-010",
    canonical_question: "How to compute beneficiary contribution and government subsidy across General vs Special categories in PMEGP Margin Money matrix?",
    short_answer: "In PMEGP, General category beneficiaries contribute 10% own equity and receive 15% (urban) or 25% (rural) subsidy, while Special categories contribute 5% own equity and receive 25% (urban) or 35% (rural) subsidy.",
    detailed_answer: "The PMEGP Margin Money subsidy matrix is computed as follows: 1) General Category Beneficiaries: Beneficiary Own Contribution = 10% of project cost; Government Subsidy in Urban Area = 15% of project cost (Bank Term Loan = 75%); Government Subsidy in Rural Area = 25% of project cost (Bank Term Loan = 65%); 2) Special Categories (SC, ST, OBC, Minorities, Women, Ex-servicemen, Transgenders, Differently Abled, NER, Hill/Border Areas): Beneficiary Own Contribution = 5% of project cost; Government Subsidy in Urban Area = 25% of project cost (Bank Term Loan = 70%); Government Subsidy in Rural Area = 35% of project cost (Bank Term Loan = 60%). Example: On a ₹50 lakh rural manufacturing unit for a woman entrepreneur, own equity is ₹2.5 lakh (5%), government subsidy is ₹17.5 lakh (35%), and the bank loan is ₹30 lakh (60%).",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "PMEGP मार्जिन मनी मैट्रिक्स के अनुसार, सामान्य वर्ग के लाभार्थी 10% स्वयं का अंशदान देते हैं और 15% (शहरी) या 25% (ग्रामीण) सब्सिडी पाते हैं; जबकि विशेष वर्ग (महिलाएं, SC/ST/OBC) 5% अंशदान देकर 25% (शहरी) या 35% (ग्रामीण) सब्सिडी प्राप्त करते हैं।",
        detailed_answer: "यदि कोई महिला उद्यमी ग्रामीण क्षेत्र में ₹50 लाख का विनिर्माण कारखाना लगाती है, तो उसे अपनी जेब से केवल ₹2.5 लाख (5%) लगाने होंगे। सरकार ₹17.5 लाख (35%) की गैर-वापसी योग्य सब्सिडी देगी और शेष ₹30 लाख (60%) बैंक ऋण होगा।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "PMEGP matrix: General category ko 10% own equity deni hoti hai aur 15% (urban) ya 25% (rural) subsidy milti hai. Special category (Women, SC/ST, OBC) ko sirf 5% equity par 25% (urban) ya 35% (rural) subsidy milti hai.",
        detailed_answer: "Rural manufacturing project of ₹50 lakh for special category: Own contribution 5% = ₹2.5 lakh, Government Margin Money Subsidy 35% = ₹17.5 lakh, aur Bank Term Loan 60% = ₹30 lakh hota hai.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "PMEGP subsidy is 15-25% for general (10% equity) and 25-35% for special categories (5% equity).",
        citation_source: "Ministry of MSME PMEGP Scheme Guidelines, Annexure 1 (Margin Money Matrix)",
        source_url: "https://www.kviconline.gov.in/pmegpeportal/pmegphome/index.jsp"
      }
    ],
    official_source_urls: [
      "https://www.kviconline.gov.in/pmegpeportal/pmegphome/index.jsp",
      "https://msme.gov.in/"
    ],
    source_title: "PMEGP Scheme Guidelines & Margin Money Subsidy Calculation Matrix",
    source_publisher: "Khadi and Village Industries Commission (KVIC) & Ministry of MSME",
    evidence_type: "PRIMARY_STATUTORY_RULE",
    effective_date: "2022-05-13",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Subsidy is kept in a 3-year term deposit lock-in before final credit adjustment.",
    conflicting_evidence: null,
    next_review_due: "2026-12-31"
  },
  {
    question_id: "Q-CALC-011",
    canonical_question: "How is reducing balance EMI calculated for a ₹20 lakh Tarun Plus Mudra loan over a 5-year repayment tenure?",
    short_answer: "Using the standard reducing balance EMI formula: EMI = [P * r * (1 + r)^n] / [((1 + r)^n - 1)], a ₹20 lakh Tarun Plus Mudra loan at an indicative 10.0% interest rate over 5 years (60 months) has an EMI of approximately ₹42,494 per month.",
    detailed_answer: "The mathematical monthly reducing balance EMI is calculated as: EMI = [P * r * (1 + r)^n] / [((1 + r)^n - 1)], where P = Principal Loan (₹20,00,000), r = Monthly interest rate (e.g., 10.0% / 12 / 100 = 0.008333), and n = Number of monthly installments (5 years * 12 = 60 months). Calculation breakdown: 1) Monthly EMI: ₹42,494; 2) Total Amount Repaid over 60 months: ₹42,494 * 60 = ₹25,49,640; 3) Total Interest Paid: ₹25,49,640 - ₹20,00,000 = ₹5,49,640. Each month, interest is calculated only on the remaining unpaid principal balance, meaning the interest component decreases while principal amortization increases over time.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "घटते शेष EMI फॉर्मूले [P * r * (1 + r)^n] / [((1 + r)^n - 1)] के अनुसार, 10% की सांकेतिक ब्याज दर पर ₹20 लाख के तरुण प्लस मुद्रा ऋण की 5 वर्षों (60 माह) के लिए ईएमआई लगभग ₹42,494 प्रतिमाह होगी।",
        detailed_answer: "₹20 लाख के 5-वर्षीय ऋण में 10% ब्याज दर पर कुल ₹5,49,640 का ब्याज देय होगा और कुल पुनर्भुगतान ₹25,49,640 होगा। घटते शेष (Reducing Balance) पद्धति में हर महीने ब्याज केवल बचे हुए बकाया मूलधन पर लगता है।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "Reducing balance EMI formula se ₹20 lakh Tarun Plus Mudra loan (10% interest, 5 years/60 months) ki monthly EMI approximately ₹42,494 banti hai.",
        detailed_answer: "Formula: EMI = [P * r * (1+r)^n] / [((1+r)^n - 1)]. ₹20 Lakh loan at 10% for 60 months: Monthly EMI = ₹42,494, total interest paid = ₹5,49,640, aur total repayment = ₹25,49,640 hota hai.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "Reducing balance EMI formula amortizes loan with declining monthly interest on outstanding principal.",
        citation_source: "RBI Guidelines on Loan Pricing & Financial Amortization Standards",
        source_url: "https://www.mudra.org.in/"
      }
    ],
    official_source_urls: [
      "https://www.mudra.org.in/",
      "https://www.rbi.org.in/"
    ],
    source_title: "Pradhan Mantri Mudra Yojana Loan Calculator & Amortization Guidelines",
    source_publisher: "MUDRA Ltd & Reserve Bank of India",
    evidence_type: "RESEARCH_SYNTHESIS",
    effective_date: "2024-10-24",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Actual bank interest rates on Mudra loans vary between 9.5% and 11.5% linked to EBLR.",
    conflicting_evidence: null,
    next_review_due: "2026-12-31"
  },
  {
    question_id: "Q-CALC-012",
    canonical_question: "How to calculate the exact government subsidy for rooftop solar systems of 1 kW (₹30,000), 2 kW (₹60,000), and 3+ kW (₹78,000) under PM Surya Ghar?",
    short_answer: "Under PM Surya Ghar: Muft Bijli Yojana, the central financial assistance (subsidy) is calculated as: ₹30,000 for 1 kW, ₹60,000 for 2 kW, and a flat ceiling of ₹78,000 for any system of 3 kW or higher capacity.",
    detailed_answer: "The Ministry of New and Renewable Energy (MNRE) notified a structured benchmark subsidy formula under PM Surya Ghar: Muft Bijli Yojana: 1) 1 kW Capacity: Fixed subsidy of ₹30,000; 2) 2 kW Capacity: Fixed subsidy of ₹60,000 (₹30,000 per kW); 3) 3 kW Capacity: ₹60,000 for the first 2 kW plus ₹18,000 for the 3rd kW = ₹78,000; 4) Above 3 kW (e.g., 4 kW, 5 kW, 10 kW): The subsidy remains capped at the maximum statutory ceiling of ₹78,000; 5) Group Housing Societies / Resident Welfare Associations (GHS/RWA): Subsidy of ₹18,000 per kW for common facilities (EV charging, common lighting) up to a maximum aggregated capacity of 500 kW.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "पीएम सूर्य घर: मुफ्त बिजली योजना के तहत सब्सिडी की सटीक गणना है: 1 किलोवाट के लिए ₹30,000, 2 किलोवाट के लिए ₹60,000, और 3 किलोवाट या उससे अधिक के सिस्टम के लिए अधिकतम ₹78,000 की निश्चित सब्सिडी।",
        detailed_answer: "नवीन और नवीकरणीय ऊर्जा मंत्रालय (MNRE) के अनुसार: 1 kW पर ₹30,000; 2 kW पर ₹60,000; 3 kW पर पहले दो किलोवाट के ₹60,000 + तीसरे किलोवाट के ₹18,000 = कुल ₹78,000 मिलते हैं। 3 किलोवाट से बड़ा सिस्टम (जैसे 4 या 5 kW) लगाने पर भी अधिकतम सब्सिडी ₹78,000 ही रहती है।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "PM Surya Ghar subsidy slab: 1 kW solar system par ₹30,000, 2 kW par ₹60,000, aur 3 kW ya usse bade systems par flat ₹78,000 maximum direct bank subsidy milti hai.",
        detailed_answer: "MNRE guidelines ke tehat: 1 kW = ₹30k, 2 kW = ₹60k (₹30k/kW), aur 3 kW = ₹78k (₹60k + ₹18k). 3 kW se upar system chahe 4 kW ya 5 kW ho, maximum government subsidy ₹78,000 par cap hoti hai.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "PM Surya Ghar subsidy is ₹30,000 for 1 kW, ₹60,000 for 2 kW, and capped at ₹78,000 for 3 kW and above.",
        citation_source: "Ministry of New and Renewable Energy (MNRE) Gazette Notification & PM Surya Ghar Operational Guidelines",
        source_url: "https://pmsuryaghar.gov.in/"
      }
    ],
    official_source_urls: [
      "https://pmsuryaghar.gov.in/",
      "https://mnre.gov.in/"
    ],
    source_title: "PM Surya Ghar: Muft Bijli Yojana Central Financial Assistance (CFA) Operational Guidelines",
    source_publisher: "Ministry of New and Renewable Energy (MNRE)",
    evidence_type: "PRIMARY_STATUTORY_RULE",
    effective_date: "2024-02-15",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Subsidy is credited directly into the consumer's bank account within 30 days of net meter commissioning.",
    conflicting_evidence: null,
    next_review_due: "2026-12-31"
  },
  {
    question_id: "Q-CALC-013",
    canonical_question: "How does the mathematical doubling formula and compounding yield determine the 115-month maturity period for Kisan Vikas Patra (KVP)?",
    short_answer: "At the current notified annual interest rate of 7.5% compounded annually, the mathematical doubling formula: (1 + 0.075)^t = 2 yields t = ln(2) / ln(1.075) = 9.584 years, which equals exactly 115 months (9 years and 7 months).",
    detailed_answer: "Kisan Vikas Patra (KVP) guarantees by statute that the deposited money will double exactly upon maturity: 1) Mathematical Formulation: Maturity Amount = Principal * 2 = Principal * (1 + r)^t. Dividing by Principal gives: (1 + r)^t = 2; 2) Solving for Time t: t = ln(2) / ln(1 + r). With the current rate r = 7.5% (0.075): t = 0.693147 / 0.072321 = 9.5843 years; 3) Converting to Months: 9.5843 * 12 = 115.01 months, rounded to exactly 115 months (9 years and 7 months); 4) Comparative Context: If interest rates are raised to 7.7%, the doubling period shortens to 112 months; if lowered to 7.2%, it extends to 120 months.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "वर्तमान 7.5% वार्षिक चक्रवृद्धि ब्याज दर पर पैसे दोगुने होने का गणितीय फॉर्मूला (1 + 0.075)^t = 2 है, जिससे t = 9.584 वर्ष निकलता है, जो ठीक 115 महीने (9 वर्ष 7 महीने) के बराबर है।",
        detailed_answer: "किसान विकास पत्र (KVP) में जमा राशि को दोगुना करने का नियम है। 7.5% चक्रवृद्धि ब्याज दर पर लॉगरिदमिक गणना [ln(2)/ln(1.075)] करने पर समय ठीक 115 महीने आता है। 115 महीने पूरे होने पर ₹10,000 का निवेश ₹20,000 और ₹1,00,000 का निवेश ₹2,00,000 बन जाता है।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "KVP doubling formula: (1 + r)^t = 2. Current 7.5% rate par logarithmic solution t = ln(2)/ln(1.075) se 9.584 years bante hain, jo exactly 115 months (9 years 7 months) hota hai.",
        detailed_answer: "KVP mathematical maturity doubling: Principal 2x hone ke liye (1.075)^t = 2 solve hota hai. Iska exact tenure 115 months aata hai jisme ₹1 lakh deposit maturity par exactly ₹2 lakh ban jata hai.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "KVP matures and doubles deposit in 115 months at 7.5% annual compounding interest.",
        citation_source: "Kisan Vikas Patra Scheme, 2019, Paragraph 6 (Maturity Period)",
        source_url: "https://www.indiapost.gov.in/Financial/Pages/Content/Post-Office-Saving-Schemes.aspx"
      }
    ],
    official_source_urls: [
      "https://www.indiapost.gov.in/Financial/Pages/Content/Post-Office-Saving-Schemes.aspx",
      "https://www.nsiindia.gov.in/"
    ],
    source_title: "Kisan Vikas Patra Scheme, 2019: Mathematical Compounding & Maturity Schedule",
    source_publisher: "Ministry of Finance & Department of Posts",
    evidence_type: "PRIMARY_STATUTORY_RULE",
    effective_date: "2023-04-01",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Statutory doubling period adjusts whenever the Ministry of Finance revises the KVP interest rate.",
    conflicting_evidence: null,
    next_review_due: "2026-12-31"
  },
  {
    question_id: "Q-CALC-014",
    canonical_question: "How does quarterly compounding with annual interest payout work mathematically on Post Office Time Deposits (POTD)?",
    short_answer: "On Post Office Time Deposits (POTD), interest is calculated using quarterly compounding: A = P * (1 + r/400)^4, but the resulting cumulative annual interest is paid out in a single lump sum at the end of each completed year rather than reinvested across multi-year cycles.",
    detailed_answer: "Under the Post Office Time Deposit Rules, 2019, the interest calculation mechanics operate as follows: 1) Quarterly Compounding Calculation: For a deposit P at nominal annual rate r (e.g., 7.5% on 5-Year POTD), interest compounds 4 times per year: Annual Effective Yield = [(1 + 7.5/400)^4 - 1] * 100 = 7.7136%; 2) Annual Payout: Instead of accumulating into the principal for year 2, the total earned interest from the 4 quarters is disbursed directly into the investor's savings account at the end of each financial year; 3) Mathematical Example: On a ₹10,00,000 deposit at 7.5%, quarterly compounding generates exactly ₹77,136 of annual interest paid at year-end, while the principal remains at ₹10,00,000.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "डाकघर सावधि जमा (POTD) में ब्याज की गणना त्रैमासिक चक्रवृद्धि (A = P * (1 + r/400)^4) के आधार पर की जाती है, लेकिन पूरे वर्ष का कुल ब्याज वर्ष के अंत में एकमुश्त वार्षिक भुगतान के रूप में बचत खाते में दिया जाता है।",
        detailed_answer: "POTD में ब्याज तिमाही आधार पर कंपाउंड होता है जिससे 7.5% की सांकेतिक दर वास्तव में 7.71% प्रभावी वार्षिक रिटर्न (Effective Yield) बन जाती है। यह कुल अर्जित ब्याज हर साल के अंत में निवेशक के खाते में जमा कर दिया जाता है और मूलधन अगले वर्ष के लिए यथावत रहता है।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "POTD me quarterly compounding hoti hai [A = P * (1 + r/400)^4] jisse effective annual yield 7.71% banti hai, aur total interest saal ke end me annual payout ke roop me savings account me credit hota hai.",
        detailed_answer: "Quarterly compounding calculation: ₹10 lakh deposit at 7.5% POTD par har quarter interest compound hota hai jisse saal ke end me exactly ₹77,136 ka interest payout milta hai aur principal ₹10 lakh untouched rehta hai.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "Post Office Time Deposits compound quarterly and pay interest annually at the end of each year.",
        citation_source: "Post Office Time Deposit Rules, 2019, Paragraph 7 (Interest)",
        source_url: "https://www.indiapost.gov.in/Financial/Pages/Content/Post-Office-Saving-Schemes.aspx"
      }
    ],
    official_source_urls: [
      "https://www.indiapost.gov.in/Financial/Pages/Content/Post-Office-Saving-Schemes.aspx",
      "https://www.nsiindia.gov.in/"
    ],
    source_title: "Post Office Time Deposit Rules, 2019: Compounding & Payment Mechanics",
    source_publisher: "Department of Posts & National Savings Institute",
    evidence_type: "PRIMARY_STATUTORY_RULE",
    effective_date: "2024-01-01",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Interest can be automatically routed to a Post Office Recurring Deposit (RD) account if requested.",
    conflicting_evidence: null,
    next_review_due: "2026-12-31"
  }
];
