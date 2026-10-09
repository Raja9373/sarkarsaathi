// Category 6: News & Updates (11 Answers: Q-NW-001 to Q-NW-011)

export const cat6Answers = [
  {
    question_id: "Q-NW-001",
    canonical_question: "How frequently are small savings scheme interest rates revised by the Ministry of Finance?",
    short_answer: "Small savings scheme interest rates are reviewed and notified on a quarterly basis by the Department of Economic Affairs (DEA), Ministry of Finance, effective on the first day of each financial quarter.",
    detailed_answer: "Under the Government Savings Promotion General Rules, 2018, and policy recommendations instituted in 2016 following the Shyamala Gopinath Committee report, interest rates on National Savings Schemes (including PPF, SSY, SCSS, NSC, KVP, and Post Office Time Deposits) are reset quarterly. The four review cycles align with the financial quarters: Quarter 1 (April 1 to June 30), Quarter 2 (July 1 to September 30), Quarter 3 (October 1 to December 31), and Quarter 4 (January 1 to March 31). The Ministry of Finance issues a formal Office Memorandum at the end of the preceding quarter declaring whether rates are revised or maintained unchanged.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "डाकघर लघु बचत योजनाओं की ब्याज दरों की समीक्षा और अधिसूचना वित्त मंत्रालय के आर्थिक मामलों के विभाग (DEA) द्वारा त्रैमासिक (हर तीन महीने में) आधार पर जारी की जाती है।",
        detailed_answer: "वित्त मंत्रालय प्रत्येक वित्तीय तिमाही के लिए ब्याज दरों की घोषणा करता है: Q1 (अप्रैल-जून), Q2 (जुलाई-सितंबर), Q3 (अक्टूबर-दिसंबर), और Q4 (जनवरी-मार्च)। पिछली तिमाही के अंतिम सप्ताह में एक आधिकारिक कार्यालय ज्ञापन (OM) जारी कर नई या यथावत दरों की पुष्टि की जाती है।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "Small savings schemes ki interest rates Ministry of Finance ke DEA department dwara quarterly (har 3 mahine) basis par review aur notify hoti hain.",
        detailed_answer: "Har financial quarter ke start par rates effective hoti hain: April-June, July-September, October-December, aur January-March. Ministry of Finance previous quarter ke end me official OM issue karke rates declare karti hai.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "Small savings interest rates are reviewed on a quarterly basis by the Ministry of Finance.",
        citation_source: "Ministry of Finance (DEA) Quarterly Office Memorandums on Small Savings Rates",
        source_url: "https://dea.gov.in/notifications"
      }
    ],
    official_source_urls: [
      "https://dea.gov.in/notifications",
      "https://www.nsiindia.gov.in/"
    ],
    source_title: "Ministry of Finance Office Memorandums on Revision of Interest Rates for Small Savings Schemes",
    source_publisher: "Department of Economic Affairs, Ministry of Finance",
    evidence_type: "OFFICIAL_GOV_NOTIFICATION",
    effective_date: "2024-01-01",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Next quarterly revision notification cycle is monitored every March, June, September, and December.",
    conflicting_evidence: null,
    next_review_due: "2026-12-31"
  },
  {
    question_id: "Q-NW-002",
    canonical_question: "When small savings interest rates are revised, do existing accounts get the new rate?",
    short_answer: "Whether existing accounts receive the revised rate depends strictly on scheme design: floating-rate schemes (PPF and Sukanya Samriddhi) adjust immediately for all existing accounts, whereas fixed-rate term schemes (SCSS, NSC, KVP, POTD) lock in the rate applicable at opening for their entire tenure.",
    detailed_answer: "The Government Savings Promotion Act specifies two distinct interest rate application mechanisms: 1) Floating Rate Schemes: For Public Provident Fund (PPF) and Sukanya Samriddhi Yojana (SSY), interest is dynamic. Any upward or downward revision announced by the government applies immediately to all existing account balances from the effective date of the notification; 2) Fixed Contractual Schemes: For Senior Citizen Savings Scheme (SCSS), National Savings Certificate (NSC), Kisan Vikas Patra (KVP), and Post Office Time Deposits (POTD), the interest rate prevailing on the date the deposit was opened is locked and guaranteed for the entire original term. Rate revisions apply only to fresh accounts opened on or after the notification date.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "यह योजना के प्रकार पर निर्भर करता है: फ्लोटिंग योजनाओं (PPF और SSY) में सभी मौजूदा खातों पर नई दर तुरंत लागू होती है, जबकि फिक्स्ड योजनाओं (SCSS, NSC, KVP, POTD) में खाता खोलने के समय की दर पूरे कार्यकाल के लिए लॉक रहती है।",
        detailed_answer: "PPF और सुकन्या समृद्धि योजना में सरकार जब भी दरें बदलती है, तो पहले से खुले सभी खातों की ब्याज दर स्वतः बदल जाती है। इसके विपरीत NSC, KVP, SCSS और सावधि जमा (Time Deposit) में खाता खुलवाते समय तय की गई ब्याज दर परिपक्वता तक स्थिर रहती है; नई दरें केवल नए खुले खातों पर लागू होती हैं।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "Yeh scheme type par depend karta hai: PPF aur SSY floating rate hain to purane accounts par bhi nayi rate turant lagti hai, jabki SCSS, NSC, KVP me account open hone wali rate maturity tak lock rehti hai.",
        detailed_answer: "PPF aur Sukanya Samriddhi Yojana me quarterly revision existing balances par immediately apply hoti hai. Lekin NSC, KVP, Post Office FD aur SCSS me jo rate account opening date par thi, wahi pore tenure ke liye guaranteed rehti hai.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "PPF and SSY interest rates are floating and update for all accounts; SCSS, NSC, and POTD rates are locked at account inception.",
        citation_source: "Government Savings Promotion General Rules, 2018 & Department of Posts Operational Handbooks",
        source_url: "https://www.indiapost.gov.in/Financial/Pages/Content/Post-Office-Saving-Schemes.aspx"
      }
    ],
    official_source_urls: [
      "https://www.indiapost.gov.in/Financial/Pages/Content/Post-Office-Saving-Schemes.aspx",
      "https://www.nsiindia.gov.in/"
    ],
    source_title: "Operational Rules for Interest Rate Applicability in Small Savings Schemes",
    source_publisher: "Department of Posts & National Savings Institute",
    evidence_type: "PRIMARY_STATUTORY_RULE",
    effective_date: "2018-10-05",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Key investor protection rule preventing retrospective interest rate cuts on fixed term certificates.",
    conflicting_evidence: null,
    next_review_due: "2026-12-31"
  },
  {
    question_id: "Q-NW-003",
    canonical_question: "How can citizens verify whether a WhatsApp or social media scheme notification is official or fake?",
    short_answer: "Citizens can verify whether a viral scheme notification is genuine by checking the official Press Information Bureau Fact Check unit (factcheck.pib.gov.in or WhatsApp +91 8799711259) and verifying that the scheme is hosted on an authentic .gov.in or .nic.in domain.",
    detailed_answer: "Social media and messaging platforms frequently circulate fraudulent notifications claiming free laptops, monthly direct cash stipends, or uncollateralized loans under forged government emblems. Citizens can verify authenticity through three official checks: 1) PIB Fact Check Unit: Submit forwarded messages, screenshots, or YouTube links directly to PIB Fact Check via WhatsApp (+91 8799711259), email (pibfactcheck@gmail.com), or web portal (factcheck.pib.gov.in); 2) Domain Check: Legitimate Indian government portals strictly end in '.gov.in' or '.nic.in'. Portals using .com, .in, .org, or .xyz asking for processing fees are unauthorized; 3) Scheme Search on myScheme.gov.in: Authentic central and state welfare initiatives are indexed on the national myScheme repository.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "नागरिक पत्र सूचना कार्यालय (PIB) की फैक्ट चेक यूनिट (factcheck.pib.gov.in या व्हाट्सएप +91 8799711259) के माध्यम से और केवल .gov.in या .nic.in वेबसाइटों पर जानकारी की पुष्टि करके फर्जी संदेशों की जांच कर सकते हैं।",
        detailed_answer: "सोशल मीडिया पर फर्जी सब्सिडी या मुफ्त योजनाओं के दावों की पुष्टि के लिए: 1) पीआईबी फैक्ट चेक को व्हाट्सएप (+91 8799711259) पर भेजें; 2) देखें कि वेबसाइट का पता .gov.in या .nic.in पर समाप्त होता है या नहीं (.org या .com वाली निजी साइटें फर्जी हो सकती हैं); 3) राष्ट्रीय पोर्टल myScheme.gov.in पर योजना की वास्तविकता जांचें।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "Citizens viral schemes ko PIB Fact Check (WhatsApp +91 8799711259 ya factcheck.pib.gov.in) par verify kar sakte hain aur check karein ki portal authentic .gov.in domain par hai ya nahi.",
        detailed_answer: "WhatsApp fake forward verify karne ke liye: 1) PIB Fact Check WhatsApp (+91 8799711259) par forward karein; 2) Check karein website strictly .gov.in ya .nic.in ho (.com/.xyz nahi); 3) myScheme.gov.in portal par check karein ki scheme officially listed hai ya nahi.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "PIB Fact Check Unit operates official verification via WhatsApp (+91 8799711259) and web portal.",
        citation_source: "Press Information Bureau Fact Check Portal & Ministry of Information and Broadcasting",
        source_url: "https://factcheck.pib.gov.in/"
      }
    ],
    official_source_urls: [
      "https://factcheck.pib.gov.in/",
      "https://www.pib.gov.in/"
    ],
    source_title: "PIB Fact Check Verification Guidelines & Citizen Advisory",
    source_publisher: "Press Information Bureau (PIB), Ministry of Information and Broadcasting",
    evidence_type: "OFFICIAL_DEPARTMENT_PORTAL",
    effective_date: "2024-01-01",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "PIB Fact Check maintains a dedicated debunking archive accessible to all citizens.",
    conflicting_evidence: null,
    next_review_due: "2026-12-31"
  },
  {
    question_id: "Q-NW-004",
    canonical_question: "How does the Shyamala Gopinath Committee formula link small savings interest rate revisions to benchmark G-Sec yields?",
    short_answer: "The Shyamala Gopinath Committee formula links small savings scheme interest rates to the secondary market yields of central government securities (G-Secs) of comparable residual maturities, calculated over a preceding reference observation period.",
    detailed_answer: "In 2011, the Shyamala Gopinath Committee appointed by the Reserve Bank of India recommended linking administered small savings interest rates dynamically to market yields on Government of India securities (G-Secs). Under the formula: 1) A reference basket of G-Sec yields of matching tenures (e.g., 5-year G-Sec for NSC, 10-year G-Sec for PPF) is tracked over the preceding quarter/three months; 2) Pre-defined spreads (ranging from 0 bps to 100 bps) are added to the benchmark G-Sec yield; 3) The Ministry of Finance evaluates this mathematical output when setting quarterly rates, balancing monetary transmission against the social welfare objective of protecting retail savers.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "श्यामला गोपीनाथ समिति का फॉर्मूला लघु बचत योजनाओं की ब्याज दरों को समान परिपक्वता वाली केंद्र सरकार की प्रतिभूतियों (G-Sec) के द्वितीयक बाजार प्रतिफल (Yield) से जोड़ता है।",
        detailed_answer: "आरबीआई द्वारा गठित श्यामला गोपीनाथ समिति की सिफारिशों के अनुसार, पिछली तिमाही के दौरान सरकारी प्रतिभूतियों (G-Secs) के औसत प्रतिफल के आधार पर आधार दर तय की जाती है, और उसमें योजना-विशिष्ट वैधानिक स्प्रेड (0 से 100 आधार अंक) जोड़कर त्रैमासिक ब्याज दरें निर्धारित की जाती हैं।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "Shyamala Gopinath Committee formula small savings interest rates ko matching maturity wale Government Securities (G-Sec) yields ke secondary market average se link karta hai.",
        detailed_answer: "Is formula ke tehat pichle 3 months ke average G-Sec yields track hote hain. Un yields me statutory spread (jaise PPF me +25 bps, SCSS me +100 bps) add karke Ministry of Finance quarterly rate determine karti hai.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "Small savings rates are linked to secondary market yields of comparable G-Secs with statutory scheme spreads.",
        citation_source: "Report of the Committee on Comprehensive Review of National Small Savings Fund (Shyamala Gopinath Committee, 2011)",
        source_url: "https://www.rbi.org.in/"
      }
    ],
    official_source_urls: [
      "https://www.rbi.org.in/",
      "https://dea.gov.in/"
    ],
    source_title: "Report of the Committee on Comprehensive Review of National Small Savings Fund",
    source_publisher: "Reserve Bank of India & Ministry of Finance",
    evidence_type: "PRIMARY_STATUTORY_RULE",
    effective_date: "2016-02-16",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Government formally operationalized the quarterly revision mechanism in February 2016.",
    conflicting_evidence: null,
    next_review_due: "2026-12-31"
  },
  {
    question_id: "Q-NW-005",
    canonical_question: "What are the statutory spreads added over benchmark G-Sec yields for PPF (25 bps), SSY (75 bps), and SCSS (100 bps)?",
    short_answer: "Under the Shyamala Gopinath formula, the statutory spreads added over comparable benchmark G-Sec yields are: 25 basis points (0.25%) for PPF, 75 basis points (0.75%) for Sukanya Samriddhi Yojana (SSY), and 100 basis points (1.00%) for Senior Citizen Savings Scheme (SCSS).",
    detailed_answer: "To provide targeted social security incentives, the government established specific positive markups (spreads) over the benchmark government security yields of comparable maturity: 1) PPF: +25 bps (0.25%) over the 10-year G-Sec yield; 2) Sukanya Samriddhi Yojana (SSY): +75 bps (0.75%) over the 10-year G-Sec yield, prioritizing girl child welfare; 3) Senior Citizen Savings Scheme (SCSS): +100 bps (1.00%) over the 5-year G-Sec yield, recognizing retirement income dependence; 4) 5-Year NSC: +25 bps; 5) Monthly Income Scheme (POMIS): 0 bps (parity with benchmark). While actual notified rates may temporarily diverge based on fiscal discretion, these spreads constitute the formal policy benchmark.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "श्यामला गोपीनाथ फॉर्मूले के तहत बेंचमार्क जी-सेक प्रतिफल पर वैधानिक स्प्रेड हैं: PPF के लिए 25 आधार अंक (0.25%), सुकन्या समृद्धि के लिए 75 आधार अंक (0.75%), और वरिष्ठ नागरिक योजना (SCSS) के लिए 100 आधार अंक (1.00%)।",
        detailed_answer: "सरकारी प्रतिभूतियों के मुकाबले सामाजिक सुरक्षा योजनाओं को आकर्षक बनाने के लिए यह मार्कअप जोड़ा जाता है: 10-वर्षीय जी-सेक पर PPF के लिए +25 bps और SSY के लिए +75 bps; तथा 5-वर्षीय जी-सेक पर वरिष्ठ नागरिकों (SCSS) के लिए +100 bps (1%) अतिरिक्त ब्याज का वैधानिक फॉर्मूला है।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "Benchmark G-Sec yield par statutory spreads hain: PPF me +25 bps (0.25%), Sukanya Samriddhi me +75 bps (0.75%), aur SCSS me +100 bps (1.00%).",
        detailed_answer: "Social security ko protect karne ke liye government matching G-Sec yield par spreads deti hai: 10-year G-sec par PPF (+0.25%) aur SSY (+0.75%), aur 5-year G-Sec par Senior Citizen Savings Scheme ko +1.00% extra markup milta hai.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "Statutory spreads over G-Sec yields are 25 bps for PPF, 75 bps for SSY, and 100 bps for SCSS.",
        citation_source: "Ministry of Finance Press Release on Small Savings Scheme Interest Rate Framework (February 2016)",
        source_url: "https://pib.gov.in/"
      }
    ],
    official_source_urls: [
      "https://pib.gov.in/",
      "https://dea.gov.in/"
    ],
    source_title: "Framework for Interest Rates on Small Savings Schemes",
    source_publisher: "Ministry of Finance & Press Information Bureau",
    evidence_type: "OFFICIAL_GOV_NOTIFICATION",
    effective_date: "2016-02-16",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Formulas provide the theoretical target rate; actual declared rates are notified by DEA quarterly.",
    conflicting_evidence: null,
    next_review_due: "2026-12-31"
  },
  {
    question_id: "Q-NW-006",
    canonical_question: "Are maturity proceeds of PPF and Sukanya Samriddhi Yojana still 100% tax-free under the New Tax Regime (Section 115BAC)?",
    short_answer: "Yes, maturity proceeds and annual accrued interest of both Public Provident Fund (PPF) and Sukanya Samriddhi Yojana (SSY) remain 100% tax-free under Section 10(11) and Section 10(11A) of the Income Tax Act, even under the New Tax Regime (Section 115BAC).",
    detailed_answer: "Under the New Tax Regime (Section 115BAC of the Income Tax Act, 1961), upfront deposit deductions under Chapter VI-A (such as Section 80C) are disallowed. However, Section 10 exemptions remain fully operational: 1) PPF interest and maturity proceeds are exempt under Section 10(11); 2) Sukanya Samriddhi interest and maturity proceeds are exempt under Section 10(11A). Therefore, taxpayers opting for the New Tax Regime cannot claim the initial ₹1.5 lakh deduction on contributions, but the compounding interest and entire maturity proceeds remain completely exempt from income tax.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "हाँ, नई कर व्यवस्था (धारा 115BAC) के तहत भी पब्लिक प्रोविडेंट फंड (PPF) और सुकन्या समृद्धि योजना (SSY) का ब्याज और परिपक्वता राशि धारा 10(11) और 10(11A) के तहत 100% कर-मुक्त है।",
        detailed_answer: "नई कर व्यवस्था में केवल धारा 80C के तहत जमा पर मिलने वाली ₹1.5 लाख की छूट नहीं मिलती है। लेकिन धारा 10 के तहत अर्जित ब्याज और परिपक्वता (Maturity) पर मिलने वाला पूरा पैसा पूरी तरह टैक्स-फ्री रहता है।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "Haan, New Tax Regime (Section 115BAC) me bhi PPF aur Sukanya Samriddhi ka interest aur maturity amount Section 10(11) aur 10(11A) ke tehat 100% tax-free rehta hai.",
        detailed_answer: "New Tax Regime me Section 80C deposit deduction nahi milta, lekin Section 10 exemptions intact hain. Isliye PPF aur SSY par earn hone wala annual interest aur final maturity payout bilkul tax-free rehta hai.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "Maturity proceeds and interest of PPF and SSY are exempt under Section 10(11) and 10(11A) under both old and new tax regimes.",
        citation_source: "Income Tax Act, 1961, Section 10(11), Section 10(11A), and Section 115BAC",
        source_url: "https://www.incometax.gov.in/"
      }
    ],
    official_source_urls: [
      "https://www.incometax.gov.in/",
      "https://incometaxindia.gov.in/"
    ],
    source_title: "Income Tax Act, 1961: Exemptions under Section 10 & Provisions of Section 115BAC",
    source_publisher: "Income Tax Department & Central Board of Direct Taxes (CBDT)",
    evidence_type: "PRIMARY_STATUTORY_RULE",
    effective_date: "2023-04-01",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Crucial tax distinction: only Chapter VI-A deductions are removed under Section 115BAC, not Section 10 exemptions.",
    conflicting_evidence: null,
    next_review_due: "2026-12-31"
  },
  {
    question_id: "Q-NW-007",
    canonical_question: "How does Section 80TTB provide up to ₹50,000 tax deduction on post office and bank savings interest for senior citizens?",
    short_answer: "Under Section 80TTB of the Income Tax Act, a resident senior citizen (aged 60 years or above) can claim a deduction of up to ₹50,000 per financial year on interest income earned from savings accounts, fixed deposits, and recurring deposits in banks or post offices.",
    detailed_answer: "Introduced via Finance Act 2018, Section 80TTB applies exclusively to resident individuals aged 60 or above during the relevant financial year under the Old Tax Regime. The ₹50,000 deduction covers interest earned on: 1) Post Office Savings Accounts; 2) Post Office Time Deposits (POTD); 3) Senior Citizen Savings Scheme (SCSS); 4) Bank savings accounts and Fixed Deposits (FDs). Additionally, Section 194A specifies that banks and post offices shall not deduct TDS on interest paid to senior citizens unless aggregate interest exceeds ₹50,000 in a financial year.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "आयकर अधिनियम की धारा 80TTB के तहत 60 वर्ष या उससे अधिक आयु के वरिष्ठ नागरिक बैंक और डाकघर की बचत, एफडी और आरडी पर एक वित्तीय वर्ष में ₹50,000 तक की ब्याज आय पर कर कटौती का दावा कर सकते हैं।",
        detailed_answer: "पुरानी कर व्यवस्था के तहत वरिष्ठ नागरिकों को बैंकों और डाकघर (SCSS, Time Deposit, बचत खाता) से मिलने वाले कुल ब्याज पर ₹50,000 तक की कटौती मिलती है। धारा 194A के तहत जब तक कुल ब्याज ₹50,000 से अधिक न हो, तब तक टीडीएस भी नहीं काटा जाता।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "Section 80TTB ke tehat resident senior citizens (60+ years) ko bank aur post office interest income par financial year me ₹50,000 tak ka tax deduction milta hai.",
        detailed_answer: "Old Tax Regime me Senior Citizens ko SCSS, Post Office Time Deposit aur bank FDs ke interest par ₹50,000 tak deduction milta hai. Section 194A ke tehat ₹50,000 tak ke interest par TDS bhi deduct nahi hota.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "Section 80TTB provides up to ₹50,000 deduction on deposit interest for resident senior citizens.",
        citation_source: "Income Tax Act, 1961, Section 80TTB & Section 194A",
        source_url: "https://www.incometax.gov.in/"
      }
    ],
    official_source_urls: [
      "https://www.incometax.gov.in/",
      "https://incometaxindia.gov.in/"
    ],
    source_title: "Income Tax Act, 1961: Section 80TTB Deduction for Senior Citizens",
    source_publisher: "Income Tax Department & Central Board of Direct Taxes (CBDT)",
    evidence_type: "PRIMARY_STATUTORY_RULE",
    effective_date: "2018-04-01",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Applies under Old Tax Regime; senior citizens can submit Form 15H to prevent TDS if estimated total income is below taxable threshold.",
    conflicting_evidence: null,
    next_review_due: "2026-12-31"
  },
  {
    question_id: "Q-NW-008",
    canonical_question: "How can citizens verify viral WhatsApp and YouTube messages regarding fake government subsidy schemes via PIB Fact Check?",
    short_answer: "Citizens can report and verify suspected fake schemes by sending the viral message, screenshot, or YouTube URL to PIB Fact Check via WhatsApp at +91 8799711259 or by emailing pibfactcheck@gmail.com.",
    detailed_answer: "The Press Information Bureau (PIB) Fact Check Unit, under the Ministry of Information and Broadcasting, is the nodal authority for countering misinformation regarding Government of India policies. The verification workflow operates as follows: 1) Save the viral message text, video link, or image; 2) Send it to the verified WhatsApp hotline +91 8799711259 or email pibfactcheck@gmail.com; 3) The PIB team coordinates with the concerned line ministry to confirm whether any such policy or circular exists; 4) PIB publishes public debunks on its official Twitter/X handle (@PIBFactCheck) and on factcheck.pib.gov.in, labeling the claim as FAKE, MISLEADING, or GENUINE.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "नागरिक संदिग्ध संदेशों, स्क्रीनशॉट या यूट्यूब लिंक को व्हाट्सएप पर +91 8799711259 या ईमेल pibfactcheck@gmail.com पर पीआईबी फैक्ट चेक को भेजकर सत्यापन कर सकते हैं।",
        detailed_answer: "सूचना और प्रसारण मंत्रालय के तहत पीआईबी फैक्ट चेक इकाई सरकारी योजनाओं से जुड़े भ्रामक दावों की जांच करती है। नागरिक सामग्री को उनके आधिकारिक नंबर या ईमेल पर भेजते हैं, जिसके बाद संबंधित मंत्रालय से जांच कर पीआईबी अपने पोर्टल और सोशल मीडिया पर स्पष्टीकरण जारी करता है।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "Viral fake schemes ko verify karne ke liye citizens WhatsApp (+91 8799711259) ya email (pibfactcheck@gmail.com) par message forward karke PIB Fact Check se authenticate kar sakte hain.",
        detailed_answer: "PIB Fact Check Unit suspect forwarded messages ko concerned ministry se cross-verify karti hai aur apne official website factcheck.pib.gov.in aur @PIBFactCheck handle par FAKE ya GENUINE alert publish karti hai.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "PIB Fact Check accepts viral media via WhatsApp (+91 8799711259) and email (pibfactcheck@gmail.com).",
        citation_source: "PIB Fact Check Portal & Ministry of Information and Broadcasting Advisory",
        source_url: "https://factcheck.pib.gov.in/"
      }
    ],
    official_source_urls: [
      "https://factcheck.pib.gov.in/",
      "https://www.pib.gov.in/"
    ],
    source_title: "PIB Fact Check Operational Workflow & Citizen Helpline",
    source_publisher: "Press Information Bureau (PIB)",
    evidence_type: "OFFICIAL_DEPARTMENT_PORTAL",
    effective_date: "2024-01-01",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Government never asks for registration fees via UPI QR codes for welfare schemes.",
    conflicting_evidence: null,
    next_review_due: "2026-12-31"
  },
  {
    question_id: "Q-NW-009",
    canonical_question: "What warning signs indicate fraudulent loan and tender portals impersonating central ministries and charging bogus fees?",
    short_answer: "Primary warning signs include commercial non-government domain extensions (.com, .org, .in, .xyz), demands for upfront 'registration' or 'approval' fees via personal UPI QR codes, and fake sanction letters issued on copied ministry letterheads.",
    detailed_answer: "Fraudulent portals impersonating schemes like Mudra, PMEGP, or PM Surya Ghar display distinct indicators of fraud: 1) Domain spoofing: The URL does not end in '.gov.in' or '.nic.in' (e.g., using mudraloan-online.com or pmegp-registration.org); 2) Upfront Fee Demands: Official portals (like Udyam and JanSamarth) never charge registration fees or 'file processing charges' upfront; 3) Personal Payment Gateways: Scammers request transfers to private savings accounts or personal UPI VPA handles; 4) WhatsApp-only communication: Fake agents issue forged 'approval certificates' and demand immediate deposit of GST or security amounts before loan disbursement.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "प्रमुख चेतावनी संकेत हैं: गैर-सरकारी डोमेन (.com, .org, .xyz), व्यक्तिगत यूपीआई क्यूआर कोड के माध्यम से अग्रिम 'पंजीकरण शुल्क' या 'फाइल चार्ज' की मांग, और मंत्रालय के फर्जी लेटरहेड पर जारी पत्र।",
        detailed_answer: "मुद्रा या पीएमईजीपी जैसी योजनाओं के नाम पर ठगी करने वाले पोर्टल: आधिकारिक .gov.in डोमेन के स्थान पर निजी एक्सटेंशन का उपयोग करते हैं; ऋण स्वीकृति से पहले निजी बैंक खातों या यूपीआई पर शुल्क मांगते हैं; और व्हाट्सएप पर फर्जी मंजूरी पत्र भेजते हैं। आधिकारिक सरकारी पंजीकरण पूरी तरह निःशुल्क हैं।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "Fraudulent portals ke main red flags hain: Non-government domains (.com/.org), personal UPI par upfront processing fees ki demand, aur fake ministry letterhead par sanction letters.",
        detailed_answer: "Real government portals (Udyam, JanSamarth, myScheme) strictly free hain aur .gov.in par host hote hain. Agar koi website processing fee ya security deposit ke naam par UPI payment maang rahi hai to woh 100% scam hai.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "Government portals strictly use .gov.in/.nic.in domains and do not charge upfront fees to personal UPI accounts.",
        citation_source: "Ministry of MSME & Indian Cyber Crime Coordination Centre (I4C) Public Advisory",
        source_url: "https://cybercrime.gov.in/"
      }
    ],
    official_source_urls: [
      "https://cybercrime.gov.in/",
      "https://factcheck.pib.gov.in/"
    ],
    source_title: "Indian Cyber Crime Coordination Centre (I4C) Advisory on Impersonation of Government Schemes",
    source_publisher: "Ministry of Home Affairs & Indian Cyber Crime Coordination Centre",
    evidence_type: "OFFICIAL_GOV_NOTIFICATION",
    effective_date: "2024-01-01",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Victims should immediately report incidents to the National Cyber Crime Reporting Portal (1930 / cybercrime.gov.in).",
    conflicting_evidence: null,
    next_review_due: "2026-12-31"
  },
  {
    question_id: "Q-NW-010",
    canonical_question: "When did the Ministry of Finance officially notify the enhancement of the Mudra loan limit to ₹20 lakh under Budget 2024 announcements?",
    short_answer: "The enhancement of the Pradhan Mantri Mudra Yojana (PMMY) loan limit from ₹10 lakh to ₹20 lakh under the new 'Tarun Plus' category was announced in Union Budget 2024-25 on July 23, 2024, and officially notified by the Department of Financial Services on October 24, 2024.",
    detailed_answer: "During the Union Budget 2024-25 address on July 23, 2024, the Union Finance Minister announced the enhancement of the Mudra loan limit to facilitate growing micro enterprises. On October 24, 2024, the Department of Financial Services (DFS), Ministry of Finance, formally issued notification no. F.No.27/01/2024-CP creating the new 'Tarun Plus' category. Under Tarun Plus, entrepreneurs who have previously taken a Tarun loan (₹5 lakh to ₹10 lakh) and successfully repaid it can avail collateral-free credit from ₹10 lakh up to ₹20 lakh, backed by the Credit Guarantee Fund for Micro Units (CGFMU).",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "मुद्रा ऋण की सीमा को ₹10 लाख से बढ़ाकर ₹20 लाख करने की घोषणा केंद्रीय बजट 2024-25 (23 जुलाई 2024) में की गई थी और वित्तीय सेवा विभाग (DFS) ने 24 अक्टूबर 2024 को आधिकारिक अधिसूचना जारी की।",
        detailed_answer: "24 अक्टूबर 2024 को जारी आधिकारिक आदेश के तहत नई 'तरुण प्लस' (Tarun Plus) श्रेणी बनाई गई। जिन उद्यमियों ने पूर्व में तरुण ऋण (₹5 लाख से ₹10 लाख) का सफलतापूर्वक पुनर्भुगतान किया है, वे अब बिना किसी संपार्श्विक (Collateral) के ₹10 लाख से ₹20 लाख तक का ऋण प्राप्त करने के पात्र हैं।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "Mudra loan limit ko ₹10 lakh se badha kar ₹20 lakh karne ka announcement Budget 2024 (23 July 2024) me hua tha aur Department of Financial Services ne 24 October 2024 ko officially notify kiya.",
        detailed_answer: "DFS circular ke tehat 'Tarun Plus' category introduce hui. Jin borrowers ne pehle Tarun loan successfully repay kiya hai, unhe CGFMU credit guarantee cover ke sath ₹10 lakh se ₹20 lakh tak ka loan mil sakta hai.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "DFS notified enhancement of Mudra limit to ₹20 lakh under Tarun Plus category on October 24, 2024.",
        citation_source: "Ministry of Finance (DFS) Notification F.No.27/01/2024-CP & PIB Release",
        source_url: "https://financialservices.gov.in/"
      }
    ],
    official_source_urls: [
      "https://financialservices.gov.in/",
      "https://pib.gov.in/"
    ],
    source_title: "Enhancement of Credit Limit under Pradhan Mantri Mudra Yojana (PMMY) to ₹20 Lakh",
    source_publisher: "Department of Financial Services, Ministry of Finance",
    evidence_type: "PRIMARY_STATUTORY_RULE",
    effective_date: "2024-10-24",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Eligibility for Tarun Plus strictly requires clean prior repayment history of a Tarun loan.",
    conflicting_evidence: null,
    next_review_due: "2026-12-31"
  },
  {
    question_id: "Q-NW-011",
    canonical_question: "Where are quarterly Department of Economic Affairs small savings interest rate orders officially uploaded and archived?",
    short_answer: "Quarterly small savings interest rate orders are officially uploaded and archived on the Department of Economic Affairs (DEA) website (dea.gov.in) under Notifications/Budget Division and on the National Savings Institute portal (nsiindia.gov.in).",
    detailed_answer: "Official small savings interest rate orders are issued as formal Office Memorandums by the Budget Division, Department of Economic Affairs (DEA), Ministry of Finance, Government of India. The authoritative digital archives are maintained at: 1) dea.gov.in -> Notifications -> Budget Division / Small Savings; 2) nsiindia.gov.in -> Circulars & Orders; and 3) indiapost.gov.in -> Financial Services -> Post Office Savings Schemes. Financial journalists, institutional researchers, and citizens can verify historical rate notifications dating back several decades on these repositories.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "त्रैमासिक लघु बचत ब्याज दर आदेश आधिकारिक तौर पर आर्थिक मामलों के विभाग (DEA) की वेबसाइट (dea.gov.in) के बजट प्रभाग और राष्ट्रीय बचत संस्थान (nsiindia.gov.in) पर अपलोड और संग्रहीत किए जाते हैं।",
        detailed_answer: "वित्त मंत्रालय के आर्थिक मामलों के विभाग द्वारा जारी आधिकारिक कार्यालय ज्ञापन (OM) dea.gov.in पर बजट डिवीजन के तहत, nsiindia.gov.in पर और भारतीय डाक विभाग की वेबसाइट indiapost.gov.in पर सार्वजनिक रूप से उपलब्ध कराए जाते हैं।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "Quarterly small savings interest rate orders official roop se Department of Economic Affairs (dea.gov.in) aur National Savings Institute (nsiindia.gov.in) par upload aur archive hote hain.",
        detailed_answer: "Ministry of Finance ke Budget Division ke official Office Memorandums (OM) dea.gov.in ke notifications section aur India Post ki website indiapost.gov.in par digitally verify kiye ja sakte hain.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "DEA Budget Division officially publishes and archives all small savings rate orders on dea.gov.in and nsiindia.gov.in.",
        citation_source: "Department of Economic Affairs Website Structure & National Savings Institute Archive",
        source_url: "https://dea.gov.in/notifications"
      }
    ],
    official_source_urls: [
      "https://dea.gov.in/notifications",
      "https://www.nsiindia.gov.in/",
      "https://www.indiapost.gov.in/"
    ],
    source_title: "DEA Budget Division Notifications Repository",
    source_publisher: "Department of Economic Affairs, Ministry of Finance",
    evidence_type: "OFFICIAL_GOV_NOTIFICATION",
    effective_date: "2024-01-01",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Primary statutory source of truth for all small savings rate announcements in India.",
    conflicting_evidence: null,
    next_review_due: "2026-12-31"
  }
];
