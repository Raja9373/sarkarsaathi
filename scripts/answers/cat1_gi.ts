// Category 1: Government Investments (30 Answers: Q-GI-001 to Q-GI-030)

export const cat1Answers = [
  {
    question_id: "Q-GI-001",
    canonical_question: "What is the maximum investment limit in Public Provident Fund (PPF) in a financial year?",
    short_answer: "The maximum statutory investment limit in a Public Provident Fund (PPF) account is ₹1,50,000 per financial year across all accounts held by an individual, including deposits made on behalf of a minor.",
    detailed_answer: "Under the Public Provident Fund Scheme, 2019, notified by the Ministry of Finance, an individual can deposit a minimum of ₹500 and a maximum of ₹1,50,000 in a financial year (April 1 to March 31). This ₹1.5 lakh ceiling applies cumulatively to all PPF accounts operated under the same PAN, including any account opened as a guardian on behalf of a minor child. Any deposit exceeding ₹1,50,000 in a financial year is treated as irregular: it earns zero interest and does not qualify for tax deductions under Section 80C of the Income Tax Act.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "पब्लिक प्रोविडेंट फंड (PPF) में एक वित्तीय वर्ष में अधिकतम ₹1,50,000 तक जमा किए जा सकते हैं।",
        detailed_answer: "पब्लिक प्रोविडेंट फंड स्कीम, 2019 के तहत एक वित्तीय वर्ष (1 अप्रैल से 31 मार्च) में न्यूनतम ₹500 और अधिकतम ₹1,50,000 जमा किए जा सकते हैं। यह ₹1.5 लाख की सीमा स्वयं के खाते और नाबालिग बच्चे के खाते दोनों को मिलाकर लागू होती है। ₹1.5 लाख से अधिक जमा की गई राशि पर कोई ब्याज नहीं मिलता और न ही सेक्शन 80C के तहत टैक्स छूट मिलती है।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "PPF account me ek financial year me maximum deposit limit ₹1,50,000 hai.",
        detailed_answer: "PPF Scheme 2019 ke anusar ek saal me minimum ₹500 aur maximum ₹1.5 lakh deposit kiya ja sakta hai. Yeh limit self account aur minor child ke account dono ko milakar calculate hoti hai. ₹1.5 lakh se upar deposit karne par na to interest milta hai aur na hi 80C tax deduction.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "Maximum deposit limit in PPF is ₹1,50,000 per financial year across self and minor accounts.",
        citation_source: "Government Savings Promotion General Rules, 2018 & PPF Scheme, 2019, Paragraph 4",
        source_url: "https://www.nsiindia.gov.in/"
      },
      {
        claim: "Deposits exceeding ₹1.5 lakh earn no interest and are refunded without interest.",
        citation_source: "Ministry of Finance GSR Notification 915(E)",
        source_url: "https://www.indiapost.gov.in/Financial/Pages/Content/Post-Office-Saving-Schemes.aspx"
      }
    ],
    official_source_urls: [
      "https://www.nsiindia.gov.in/",
      "https://www.indiapost.gov.in/Financial/Pages/Content/Post-Office-Saving-Schemes.aspx"
    ],
    source_title: "Public Provident Fund Scheme, 2019 Notification GSR 915(E)",
    source_publisher: "Department of Economic Affairs, Ministry of Finance",
    evidence_type: "PRIMARY_STATUTORY_RULE",
    effective_date: "2019-12-12",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Statutory cap reaffirmed under Section 80C and Small Savings Scheme rules.",
    conflicting_evidence: null,
    next_review_due: "2027-03-31"
  },
  {
    question_id: "Q-GI-002",
    canonical_question: "Why should PPF deposits be made on or before the 5th of every month?",
    short_answer: "PPF interest is calculated on the lowest balance between the close of the 5th day and the end of the calendar month. Depositing by the 5th ensures you earn interest on that deposit for that entire month.",
    detailed_answer: "As per statutory PPF interest computation rules, interest is calculated on the minimum balance maintained in the account between the close of the 5th day and the last day of each calendar month. If funds are deposited on or after the 6th day of any month, that deposit is excluded from interest calculations for that month, effectively earning zero interest for that period. Although interest is calculated monthly, it is compounded and credited to the account once annually on March 31st.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "PPF में ब्याज की गणना महीने के 5वें दिन की समाप्ति और महीने के अंत के बीच के न्यूनतम बैलेंस पर होती है। 5 तारीख तक जमा करने पर पूरे महीने का ब्याज मिलता है।",
        detailed_answer: "सरकारी नियमों के अनुसार, PPF खाते में ब्याज की गणना हर महीने की 5 तारीख की समाप्ति से लेकर महीने के अंतिम दिन के बीच के सबसे कम बैलेंस पर की जाती है। यदि 6 तारीख या उसके बाद पैसा जमा किया जाता है, तो उस महीने उस जमा राशि पर कोई ब्याज नहीं मिलता। गणना मासिक होती है, लेकिन ब्याज खाते में हर साल 31 मार्च को क्रेडिट किया जाता है।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "PPF interest har mahine ki 5th date ke close aur month-end ke lowest balance par count hota hai. 5th tak deposit karne se us month ka pura interest milta hai.",
        detailed_answer: "Agar aap 5th date ya usse pehle PPF me deposit karte hain, to us deposit par current month ka interest milta hai. 6th date ya baad me deposit karne par us month ka interest zero ho jata hai aur interest agle month se shuru hota hai.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "Interest is calculated on the lowest balance between the close of the 5th day and the end of the month.",
        citation_source: "PPF Scheme, 2019, Paragraph 6(1)",
        source_url: "https://www.nsiindia.gov.in/"
      }
    ],
    official_source_urls: [
      "https://www.nsiindia.gov.in/",
      "https://www.indiapost.gov.in/Financial/Pages/Content/Post-Office-Saving-Schemes.aspx"
    ],
    source_title: "PPF Scheme 2019 Rules on Interest Calculation",
    source_publisher: "National Savings Institute",
    evidence_type: "PRIMARY_STATUTORY_RULE",
    effective_date: "2019-12-12",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Crucial operational timing rule for all small savers.",
    conflicting_evidence: null,
    next_review_due: "2027-03-31"
  },
  {
    question_id: "Q-GI-003",
    canonical_question: "Can an NRI continue an existing PPF account after moving abroad?",
    short_answer: "Yes, an Indian resident who opened a PPF account and subsequently becomes a Non-Resident Indian (NRI) can continue the account until its 15-year maturity on a non-repatriable basis, but cannot extend it further.",
    detailed_answer: "Non-Resident Indians are prohibited from opening new PPF accounts. However, if an account was lawfully opened while the individual was a resident Indian, they are permitted to maintain the existing account until its 15-year maturity period expires. All deposits and interest earned will be held on a non-repatriable basis. Crucially, once the 15-year tenure completes, NRIs cannot extend the account for 5-year blocks either with or without contributions.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "हां, यदि खाता निवासी भारतीय रहते हुए खोला गया था, तो NRI बनने के बाद भी 15 साल की परिपक्वता तक खाता जारी रखा जा सकता है, लेकिन इसे आगे नहीं बढ़ाया जा सकता।",
        detailed_answer: "अनिवासी भारतीय (NRI) नया PPF खाता नहीं खोल सकते। लेकिन यदि खाता भारतीय नागरिक रहते हुए खोला गया था, तो वह 15 वर्ष की परिपक्वता तक जारी रहेगा। परिपक्वता के बाद NRI इसे 5 साल के ब्लॉक में आगे (extend) नहीं बढ़ा सकते।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "Haan, resident rehte hue open kiya gaya PPF account NRI banne ke baad 15 years maturity tak continue kar sakte hain, par extend nahi kar sakte.",
        detailed_answer: "NRI naya PPF account nahi khol sakte, lekin purana active account 15 years tak chala sakte hain. 15 years complete hone ke baad NRIs ko account close karna hota hai, extension allow nahi hoti.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "NRIs cannot open fresh PPF accounts but can retain existing accounts till 15-year maturity without extension.",
        citation_source: "Ministry of Finance Office Memorandum No. 1/3/2017-NS and Public Provident Fund Scheme 2019",
        source_url: "https://dea.gov.in/"
      }
    ],
    official_source_urls: [
      "https://dea.gov.in/",
      "https://rbi.org.in/"
    ],
    source_title: "Ministry of Finance Clarification on PPF Accounts of Non-Resident Indians",
    source_publisher: "Department of Economic Affairs",
    evidence_type: "OFFICIAL_GOV_NOTIFICATION",
    effective_date: "2018-02-23",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Reconciled with 2018 DEA rollback of immediate closure notification.",
    conflicting_evidence: null,
    next_review_due: "2027-03-31"
  },
  {
    question_id: "Q-GI-004",
    canonical_question: "What is the premature withdrawal penalty and rule for PPF accounts after 5 years?",
    short_answer: "Premature closure of a PPF account is permitted after 5 financial years for life-threatening medical treatment, higher education, or change of residency, subject to a 1% interest rate penalty.",
    detailed_answer: "Under Rule 13 of the PPF Scheme 2019, premature closure of the entire PPF account is allowed only after the completion of 5 full financial years from the year of account opening, under three strict conditions: (1) Treatment of life-threatening disease of the account holder, spouse, dependent children or parents; (2) Higher education expenses of the account holder or dependent children; or (3) Change of residency status of the account holder. Upon premature closure, interest is recalculated at a rate 1% lower than the prevailing rate applicable for each year the account was held.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "PPF खाता 5 वित्तीय वर्ष पूरे होने पर गंभीर बीमारी, उच्च शिक्षा या नागरिकता बदलाव के आधार पर 1% ब्याज कटौती के साथ समय पूर्व बंद किया जा सकता है।",
        detailed_answer: "PPF स्कीम 2019 के नियम 13 के तहत 5 पूर्ण वित्तीय वर्ष के बाद खाता समय पूर्व बंद (premature closure) किया जा सकता है। इसके लिए मेडिकल इमरजेंसी, बच्चों की उच्च शिक्षा या विदेश में निवास का प्रमाण देना होता है। समय पूर्व बंद करने पर पूरे कार्यकाल के दौरान मिले ब्याज में से 1% की कटौती की जाती है।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "5 financial years complete hone ke baad medical emergency, higher education ya NRI status change par 1% interest penalty ke saath PPF account close ho sakta hai.",
        detailed_answer: "PPF account ko 5 saal baad band karne ke liye valid proof dena hota hai. Account opening se lekar closure tak ke pure interest rate me se 1% deduct karke balance payout kiya jata hai.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "Premature closure is allowed after 5 financial years with a 1% deduction in interest rate.",
        citation_source: "PPF Scheme, 2019, Paragraph 13",
        source_url: "https://www.nsiindia.gov.in/"
      }
    ],
    official_source_urls: [
      "https://www.nsiindia.gov.in/",
      "https://www.indiapost.gov.in/Financial/Pages/Content/Post-Office-Saving-Schemes.aspx"
    ],
    source_title: "PPF Scheme 2019 Premature Closure Conditions",
    source_publisher: "National Savings Institute",
    evidence_type: "PRIMARY_STATUTORY_RULE",
    effective_date: "2019-12-12",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Distinct from partial withdrawal (Form 2) which has no penalty.",
    conflicting_evidence: null,
    next_review_due: "2027-03-31"
  },
  {
    question_id: "Q-GI-005",
    canonical_question: "What is the maximum age limit of a girl child to open a Sukanya Samriddhi Yojana (SSY) account?",
    short_answer: "The maximum age limit for a girl child to open a Sukanya Samriddhi Yojana account is 10 years at the time of account opening.",
    detailed_answer: "Under the Sukanya Samriddhi Account Scheme, 2019, notified by the Ministry of Finance, an account can be opened by the natural or legal guardian in the name of a girl child from her birth up to the age of 10 years. An official birth certificate issued by the competent municipal or registrar authority is mandatory proof of age. Once a girl child completes 10 years of age, she becomes ineligible for a fresh SSY account opening.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "सुकन्या समृद्धि योजना (SSY) खाता खोलने के लिए बालिका की अधिकतम आयु 10 वर्ष है।",
        detailed_answer: "सुकन्या समृद्धि खाता योजना, 2019 के अनुसार, माता-पिता या कानूनी अभिभावक बालिका के जन्म से लेकर उसके 10 वर्ष की आयु पूरी करने तक यह खाता खोल सकते हैं। इसके लिए जन्म प्रमाण पत्र प्रस्तुत करना अनिवार्य है।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "Sukanya Samriddhi Yojana (SSY) account open karne ke liye girl child ki maximum age 10 saal honi chahiye.",
        detailed_answer: "Parents apni beti ke birth se lekar 10 saal ki age tak post office ya authorized bank me SSY account open karwa sakte hain. 10 saal se badi hone par account open nahi kiya ja sakta.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "Account can be opened for a girl child till she attains the age of 10 years.",
        citation_source: "Sukanya Samriddhi Account Scheme, 2019, Paragraph 3(1)",
        source_url: "https://www.nsiindia.gov.in/"
      }
    ],
    official_source_urls: [
      "https://www.nsiindia.gov.in/",
      "https://www.indiapost.gov.in/Financial/Pages/Content/Post-Office-Saving-Schemes.aspx"
    ],
    source_title: "Sukanya Samriddhi Account Scheme, 2019 GSR 914(E)",
    source_publisher: "Department of Economic Affairs, Ministry of Finance",
    evidence_type: "PRIMARY_STATUTORY_RULE",
    effective_date: "2019-12-12",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Statutory age limit strictly enforced by post offices and banks.",
    conflicting_evidence: null,
    next_review_due: "2027-03-31"
  },
  {
    question_id: "Q-GI-006",
    canonical_question: "How many Sukanya Samriddhi accounts can be opened in one family?",
    short_answer: "A family can open a maximum of two Sukanya Samriddhi accounts for two girl children, with an exception allowing a third account in the case of twin or triplet births.",
    detailed_answer: "Under the Sukanya Samriddhi Account Scheme 2019 rules, a parent or guardian can open only one account per girl child and a maximum of two accounts in a family for two girl children. A third account is permitted only if twin or triplet girls are born in the first birth, or if twin girls are born after the first girl child, supported by a medical certificate from an authorized medical institution.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "एक परिवार में अधिकतम दो बालिकाओं के लिए दो सुकन्या खाते खोले जा सकते हैं। जुड़वा या तीन बच्चियों के जन्म पर तीसरा खाता अनुमन्य है।",
        detailed_answer: "नियमों के अनुसार, एक परिवार में अधिकतम दो बेटियों के नाम पर सुकन्या समृद्धि खाते खोले जा सकते हैं। यदि पहले प्रसव में या पहले बच्चे के बाद जुड़वा/तीन बेटियों का जन्म होता है, तो मेडिकल सर्टिफिकेट के आधार पर तीसरे खाते की अनुमति दी जाती है।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "Ek family me maximum 2 girl children ke liye SSY accounts open ho sakte hain. Twins ya triplets ke case me 3 accounts allowed hain.",
        detailed_answer: "Standard rule ke mutabiq per family 2 accounts allowed hain. Agar pehli delivery me ya pehli beti ke baad twins betiyan paida hoti hain to medical proof ke sath 3rd account open kiya ja sakta hai.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "Maximum of two accounts per family, with exception for twin/triplet births.",
        citation_source: "Sukanya Samriddhi Account Scheme, 2019, Paragraph 3(2)",
        source_url: "https://www.nsiindia.gov.in/"
      }
    ],
    official_source_urls: [
      "https://www.nsiindia.gov.in/",
      "https://www.indiapost.gov.in/Financial/Pages/Content/Post-Office-Saving-Schemes.aspx"
    ],
    source_title: "Sukanya Samriddhi Account Scheme Rules on Family Limits",
    source_publisher: "National Savings Institute",
    evidence_type: "PRIMARY_STATUTORY_RULE",
    effective_date: "2019-12-12",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Third account requires hospital certificate verifying multiple birth.",
    conflicting_evidence: null,
    next_review_due: "2027-03-31"
  },
  {
    question_id: "Q-GI-007",
    canonical_question: "What is the lock-in period and maturity tenure of Sukanya Samriddhi Yojana?",
    short_answer: "Sukanya Samriddhi Yojana matures after 21 years from the date of account opening or upon the marriage of the girl child after attaining 18 years of age. Deposits are required for the first 15 years.",
    detailed_answer: "The SSY account has a total maturity tenure of 21 years from the date of opening. Contributions are required to be made for the first 15 years only. From year 16 to year 21, no further deposits are accepted, but the accumulated corpus continues to earn compounded interest at the prevailing scheme rate. The account can be closed early upon the girl child's marriage after attaining 18 years of age, provided the marriage application is submitted between 1 month prior to and 3 months after the wedding date.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "सुकन्या समृद्धि योजना खाता खोलने की तारीख से 21 वर्ष बाद परिपक्व होता है। इसमें केवल पहले 15 वर्षों तक पैसे जमा करने होते हैं।",
        detailed_answer: "खाते की कुल परिपक्वता अवधि 21 वर्ष है। इसमें केवल शुरुआती 15 वर्षों तक सालाना न्यूनतम ₹250 जमा करने होते हैं। 16वें से 21वें वर्ष तक कोई पैसा जमा नहीं करना होता, लेकिन ब्याज लगातार मिलता रहता है। बालिका की आयु 18 वर्ष पूरी होने के बाद उसके विवाह के समय भी खाता बंद किया जा सकता है।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "SSY account 21 saal me mature hota hai. Isme shuru ke 15 saal deposit karna hota hai aur baaki 6 saal bina deposit ke compound interest milta hai.",
        detailed_answer: "Total tenure 21 years hai. 15 saal deposit tenure ke baad 16 se 21 saal tak interest continue rehta hai. Beti ki 18 saal ki age ke baad marriage par account mature karwaya ja sakta hai.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "Tenure is 21 years from account opening; deposits required for 15 years.",
        citation_source: "Sukanya Samriddhi Account Scheme, 2019, Paragraph 11",
        source_url: "https://www.nsiindia.gov.in/"
      }
    ],
    official_source_urls: [
      "https://www.nsiindia.gov.in/",
      "https://www.indiapost.gov.in/Financial/Pages/Content/Post-Office-Saving-Schemes.aspx"
    ],
    source_title: "SSY Maturity and Tenure Statutory Provisions",
    source_publisher: "National Savings Institute",
    evidence_type: "PRIMARY_STATUTORY_RULE",
    effective_date: "2019-12-12",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Key distinction: 15-year deposit tenure vs 21-year maturity tenure.",
    conflicting_evidence: null,
    next_review_due: "2027-03-31"
  },
  {
    question_id: "Q-GI-008",
    canonical_question: "What is the maximum investment limit in Senior Citizen Savings Scheme (SCSS)?",
    short_answer: "The maximum investment limit in Senior Citizen Savings Scheme (SCSS) is ₹30,00,000 per individual, enhanced from ₹15 lakh in the Union Budget 2023.",
    detailed_answer: "Effective from April 1, 2023, the Ministry of Finance doubled the maximum deposit ceiling for the Senior Citizen Savings Scheme from ₹15 lakh to ₹30 lakh. Deposits must be made in multiples of ₹1,000 and cannot exceed the actual retirement benefits received if the individual retires between age 55 and 60. In joint accounts with a spouse, each spouse can invest up to ₹30 lakh in separate accounts if both independently meet the eligibility criteria, allowing a couple to invest up to ₹60 lakh combined.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "सीनियर सिटीजन सेविंग्स स्कीम (SCSS) में अधिकतम निवेश सीमा ₹30,00,000 (तीस लाख रुपये) है।",
        detailed_answer: "केंद्रीय बजट 2023 के तहत SCSS की अधिकतम जमा सीमा ₹15 लाख से बढ़ाकर ₹30 लाख कर दी गई थी, जो 1 अप्रैल 2023 से प्रभावी है। यदि पति और पत्नी दोनों पात्र हैं, तो वे अलग-अलग खाते खोलकर कुल ₹60 लाख तक निवेश कर सकते हैं।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "Senior Citizen Savings Scheme (SCSS) me maximum deposit limit ₹30,00,000 hai.",
        detailed_answer: "Budget 2023 me SCSS limit ko ₹15 lakh se badhakar ₹30 lakh kar diya gaya tha. Husband aur wife dono eligible hone par alag-alag accounts me total ₹60 lakh tak invest kar sakte hain.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "Maximum deposit ceiling under SCSS is ₹30 lakh effective April 1, 2023.",
        citation_source: "Ministry of Finance Notification GSR 240(E) dated 31st March 2023",
        source_url: "https://dea.gov.in/"
      }
    ],
    official_source_urls: [
      "https://dea.gov.in/",
      "https://www.nsiindia.gov.in/"
    ],
    source_title: "Senior Citizen Savings Scheme (Amendment) Rules, 2023",
    source_publisher: "Department of Economic Affairs, Ministry of Finance",
    evidence_type: "OFFICIAL_GOV_NOTIFICATION",
    effective_date: "2023-04-01",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Statutory enhancement confirmed in Gazette Notification GSR 240(E).",
    conflicting_evidence: null,
    next_review_due: "2027-03-31"
  },
  {
    question_id: "Q-GI-009",
    canonical_question: "Can retired individuals aged 55 to 60 invest in SCSS?",
    short_answer: "Yes, retired civilian individuals aged 55 to 60 can invest in SCSS provided they invest within 3 months of receiving their retirement benefits, and retired defence personnel can invest from age 50.",
    detailed_answer: "Under SCSS Scheme Rules, while the standard entry age is 60 years, two special concessions apply: (1) Retired civilian employees who retired on superannuation or under a Voluntary Retirement Scheme (VRS) between 55 and 60 years of age can open an account, provided the deposit is made within 3 months of receiving retirement benefits and does not exceed the total retirement proceeds; (2) Retired defence personnel (excluding civilian defence employees) are eligible from 50 years of age under identical retirement benefit conditions.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "हां, 55 से 60 वर्ष के सेवानिवृत्त नागरिक कर्मचारी रिटायरमेंट लाभ मिलने के 3 महीने के भीतर SCSS में निवेश कर सकते हैं। रक्षा कर्मी 50 वर्ष की आयु से पात्र हैं।",
        detailed_answer: "55 से 60 वर्ष के सेवानिवृत्त कर्मचारी (VRS या सामान्य सेवानिवृत्ति) रिटायरमेंट फंड मिलने के 3 माह के भीतर निवेश कर सकते हैं, बशर्ते निवेश राशि रिटायरमेंट लाभों से अधिक न हो। रक्षा सेवाओं से सेवानिवृत्त कर्मी 50 वर्ष की आयु से निवेश के पात्र हैं।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "Haan, 55 to 60 years ke retired employees retirement benefits milne ke 3 months ke andar SCSS me invest kar sakte hain. Defence personnel 50 saal se eligible hain.",
        detailed_answer: "Standard age 60 saal hai, lekin 55-60 saal ke retirees retirement benefits milne ke 3 months ke andar SCSS account khol sakte hain. Deposit amount unke actual retirement benefits se zyada nahi ho sakta.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "Retirees aged 55-60 can invest within 3 months of retirement; defence retirees eligible from age 50.",
        citation_source: "Senior Citizen Savings Scheme Rules, 2019, Paragraph 3",
        source_url: "https://www.nsiindia.gov.in/"
      }
    ],
    official_source_urls: [
      "https://www.nsiindia.gov.in/",
      "https://dea.gov.in/"
    ],
    source_title: "SCSS Eligibility Rules for Retired Personnel",
    source_publisher: "National Savings Institute",
    evidence_type: "PRIMARY_STATUTORY_RULE",
    effective_date: "2019-12-12",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Three-month timeline strictly enforced from receipt of retirement check.",
    conflicting_evidence: null,
    next_review_due: "2027-03-31"
  },
  {
    question_id: "Q-GI-010",
    canonical_question: "Is interest earned on Sovereign Gold Bonds (SGB) taxable?",
    short_answer: "Yes, the 2.50% annual interest on Sovereign Gold Bonds is fully taxable according to the investor's income tax slab, but capital gains at maturity after 8 years are 100% tax-free for individuals.",
    detailed_answer: "Sovereign Gold Bonds offer two income streams with distinct tax treatments: (1) The semi-annual interest paid at 2.50% per annum on the nominal value is fully taxable under the head 'Income from Other Sources' at the investor's marginal income tax slab. No TDS is deducted at payout. (2) The capital gains arising upon final redemption after the 8-year maturity period are completely exempt from capital gains tax for individual investors under Section 47(viic) of the Income Tax Act.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "हां, सॉवरेन गोल्ड बॉन्ड (SGB) पर मिलने वाला 2.50% सालाना ब्याज टैक्स योग्य है, लेकिन 8 वर्ष की परिपक्वता पर कैपिटल गेंस पूरी तरह टैक्स-फ्री होता है।",
        detailed_answer: "SGB पर मिलने वाला 2.5% वार्षिक ब्याज निवेशक के इनकम टैक्स स्लैब के अनुसार कर योग्य होता है। हालांकि, इस पर TDS नहीं काटा जाता। 8 साल की परिपक्वता पर रिडेम्पशन से होने वाला पूंजीगत लाभ (Capital Gains) आयकर अधिनियम की धारा 47(viic) के तहत व्यक्तिगत निवेशकों के लिए 100% कर-मुक्त है।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "Haan, SGB par milne wala 2.5% annual interest tax slab ke hisab se taxable hai, lekin 8 saal maturity par capital gains 100% tax-free hota hai.",
        detailed_answer: "SGB ke semi-annual interest par income tax slab ke mutabiq tax lagta hai (par TDS nahi katta). 8-year maturity par redemption par capital gains tax Section 47(viic) ke tehat completely exempt hai.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "Interest on SGB is taxable under Income Tax Act; capital gains on redemption for individuals are exempt.",
        citation_source: "RBI FAQs on Sovereign Gold Bond Scheme & Section 47(viic) of Income Tax Act",
        source_url: "https://www.rbi.org.in/"
      }
    ],
    official_source_urls: [
      "https://www.rbi.org.in/",
      "https://www.incometax.gov.in/"
    ],
    source_title: "Reserve Bank of India Master Direction - Sovereign Gold Bond Scheme",
    source_publisher: "Reserve Bank of India",
    evidence_type: "OFFICIAL_GOV_NOTIFICATION",
    effective_date: "2015-10-30",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Secondary market sale before 8 years incurs capital gains tax under revised Budget 2024 rules.",
    conflicting_evidence: null,
    next_review_due: "2027-03-31"
  },
  {
    question_id: "Q-GI-011",
    canonical_question: "When can Sovereign Gold Bonds be prematurely redeemed through the RBI window?",
    short_answer: "Premature redemption of Sovereign Gold Bonds through the RBI window is permitted after 5 years from the issue date, specifically on the coupon interest payment dates.",
    detailed_answer: "Although Sovereign Gold Bonds have an overall tenure of 8 years, early encashment is permitted starting from the 5th year from the date of issue. Premature redemption through the RBI window can be executed only on the semi-annual coupon payment dates. Investors must submit their redemption request to their receiving office, bank, or depository participant at least 10 to 30 days prior to the coupon date. The redemption price is based on the simple average of the closing gold price (999 purity) published by IBJA for the preceding three working days.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "सॉवरेन गोल्ड बॉन्ड (SGB) को जारी होने के 5 वर्ष पूरे होने के बाद, ब्याज भुगतान की तारीखों पर RBI विंडो के माध्यम से समय से पहले भुनाया जा सकता है।",
        detailed_answer: "SGB की कुल अवधि 8 वर्ष है, लेकिन 5वें वर्ष से समय पूर्व निकासी (premature redemption) की अनुमति होती है। यह केवल ब्याज भुगतान की तिथियों पर ही संभव है। इसके लिए कूपन तिथि से 10 से 30 दिन पहले बैंक या पोस्ट ऑफिस में आवेदन करना होता है। रिडेम्पशन मूल्य पिछले 3 कार्य दिवसों के IBJA सोने के औसत भाव पर तय होता है।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "SGB ko 5 saal complete hone ke baad interest payout dates par RBI window ke through prematurely redeem kiya ja sakta hai.",
        detailed_answer: "8 saal ke tenure me se 5th year ke baad early redemption option open hota hai. Yeh request coupon payment date se pehle bank me submit karni hoti hai aur payment IBJA ke 3-day average gold price par hoti hai.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "Premature redemption permitted from fifth year onwards on coupon payment dates.",
        citation_source: "RBI SGB Operational Guidelines, Paragraph 8",
        source_url: "https://www.rbi.org.in/"
      }
    ],
    official_source_urls: [
      "https://www.rbi.org.in/"
    ],
    source_title: "RBI Sovereign Gold Bond Operational Guidelines",
    source_publisher: "Reserve Bank of India",
    evidence_type: "OFFICIAL_GOV_NOTIFICATION",
    effective_date: "2015-11-05",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Secondary market trading on stock exchanges provides liquidity before year 5.",
    conflicting_evidence: null,
    next_review_due: "2027-03-31"
  },
  {
    question_id: "Q-GI-012",
    canonical_question: "How is the interest rate on RBI Floating Rate Savings Bonds (FRSB) determined?",
    short_answer: "The interest rate on RBI Floating Rate Savings Bonds is pegged to the National Savings Certificate (NSC) rate with a statutory spread of plus 0.35%, and resets semi-annually on January 1 and July 1.",
    detailed_answer: "RBI Floating Rate Savings Bonds (FRSB) 2020 (Taxable) carry a floating coupon rate reset every six months by the Government of India. The coupon is mathematically benchmarked to the prevailing National Savings Certificate (NSC) rate plus a fixed spread of 35 basis points (+0.35%). For instance, when the NSC rate is 7.70%, the FRSB interest rate is fixed at 8.05%. Interest is paid semi-annually on January 1st and July 1st of each year, and there is no option for cumulative interest payout.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "RBI फ्लोटिंग रेट सेविंग्स बॉन्ड की ब्याज दर NSC दर से 0.35% अधिक तय की जाती है और यह हर साल 1 जनवरी और 1 जुलाई को रीसेट होती है।",
        detailed_answer: "RBI FRSB बॉन्ड की ब्याज दर स्थिर नहीं होती। यह राष्ट्रीय बचत पत्र (NSC) की ब्याज दर से 35 बेसिस पॉइंट (+0.35%) अधिक तय की जाती है। यदि NSC की दर 7.7% है, तो FRSB की दर 8.05% होगी। ब्याज का भुगतान हर 6 महीने में 1 जनवरी और 1 जुलाई को सीधे बैंक खाते में किया जाता है।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "RBI Floating Rate Bonds ka interest NSC rate se +0.35% zyada hota hai, jo har saal 1 January aur 1 July ko reset hota hai.",
        detailed_answer: "FRSB bonds me floating rate system hota hai. Formula hai: NSC Interest Rate + 0.35%. Interest har 6 months me January 1 aur July 1 ko bank account me credit hota hai. Isme cumulative option nahi hota.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "Coupon rate of FRSB is linked to NSC rate with a spread of (+) 35 bps and resets on Jan 1 and July 1.",
        citation_source: "Government of India Notification F.No.4(10)-B(W&M)/2020 dated June 26, 2020",
        source_url: "https://www.rbi.org.in/"
      }
    ],
    official_source_urls: [
      "https://www.rbi.org.in/",
      "https://dea.gov.in/"
    ],
    source_title: "Floating Rate Savings Bonds, 2020 (Taxable) Scheme Notification",
    source_publisher: "Reserve Bank of India",
    evidence_type: "OFFICIAL_GOV_NOTIFICATION",
    effective_date: "2020-07-01",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Statutory spread formula guarantees FRSB always yields 35 bps higher than NSC.",
    conflicting_evidence: null,
    next_review_due: "2027-03-31"
  },
  {
    question_id: "Q-GI-013",
    canonical_question: "Can RBI Floating Rate Savings Bonds be traded in secondary markets or pledged for loans?",
    short_answer: "No, RBI Floating Rate Savings Bonds are strictly non-transferable, cannot be traded in secondary markets, and cannot be pledged as collateral for bank loans.",
    detailed_answer: "Unlike government securities and Sovereign Gold Bonds, RBI Floating Rate Savings Bonds (FRSB) are issued as Bond Ledger Accounts (BLA) managed by the Reserve Bank of India and authorized banks. They are strictly non-negotiable and non-transferable, except in the event of the holder's death to a designated nominee or legal heir. They cannot be traded on stock exchanges, sold to third parties, or pledged as collateral security to banks, NBFCs, or financial institutions.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "नहीं, RBI फ्लोटिंग रेट सेविंग्स बॉन्ड गैर-हस्तांतरणीय हैं। इन्हें शेयर बाजार में बेचा नहीं जा सकता और न ही लोन के लिए गिरवी रखा जा सकता है।",
        detailed_answer: "RBI FRSB बॉन्ड को सेकेंडरी मार्केट में ट्रेड नहीं किया जा सकता। इन्हें बैंक लोन के लिए सुरक्षा या जमानत (collateral) के रूप में गिरवी रखने की अनुमति नहीं है। खाताधारक की मृत्यु की स्थिति में ही यह केवल नामांकित व्यक्ति को हस्तांतरित किए जा सकते हैं।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "Nahi, RBI Floating Rate Bonds non-transferable hote hain. Inhe stock market me trade nahi kiya ja sakta aur na hi bank loan ke liye pledge kiya ja sakta hai.",
        detailed_answer: "Yeh bonds Bond Ledger Account form me hote hain. Inhe secondary market me becha nahi ja sakta aur kisi bhi bank ya NBFC me collateral security ke taur par pledge karna prohibited hai.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "Bonds are not transferable except to nominees and cannot be pledged for bank loans.",
        citation_source: "RBI FRSB 2020 Scheme Notification, Clause 13 & 14",
        source_url: "https://www.rbi.org.in/"
      }
    ],
    official_source_urls: [
      "https://www.rbi.org.in/"
    ],
    source_title: "RBI Guidelines on Floating Rate Savings Bonds Tradability and Collateral",
    source_publisher: "Reserve Bank of India",
    evidence_type: "OFFICIAL_GOV_NOTIFICATION",
    effective_date: "2020-07-01",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Key liquidity limitation compared to Sovereign Gold Bonds.",
    conflicting_evidence: null,
    next_review_due: "2027-03-31"
  },
  {
    question_id: "Q-GI-014",
    canonical_question: "What is the maximum investment limit for Mahila Samman Savings Certificate (MSSC)?",
    short_answer: "The maximum investment limit for Mahila Samman Savings Certificate (MSSC) is ₹2,00,000 per individual female account holder across all accounts.",
    detailed_answer: "Under the Mahila Samman Savings Certificate Rules, 2023, notified by the Ministry of Finance, an eligible woman or a guardian on behalf of a minor girl can deposit a minimum of ₹1,000 and a maximum of ₹2,00,000. An investor may open multiple accounts, but a mandatory minimum gap of three months must be maintained between opening an existing account and a new account, and the aggregate balance across all accounts of the individual cannot exceed the ₹2 lakh ceiling.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "महिला सम्मान बचत प्रमाणपत्र (MSSC) में अधिकतम निवेश सीमा ₹2,00,000 (दो लाख रुपये) है।",
        detailed_answer: "महिला सम्मान बचत प्रमाणपत्र योजना, 2023 के तहत किसी महिला या नाबालिग लड़की के नाम पर न्यूनतम ₹1,000 और अधिकतम ₹2,00,000 जमा किए जा सकते हैं। एक महिला एक से अधिक खाते खोल सकती है, लेकिन दो खातों के बीच 3 महीने का अंतर होना चाहिए और कुल जमा राशि ₹2 लाख से अधिक नहीं हो सकती।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "Mahila Samman Savings Certificate (MSSC) me maximum deposit limit ₹2,00,000 hai.",
        detailed_answer: "MSSC scheme me minimum ₹1,000 aur maximum ₹2 lakh deposit kiya ja sakta hai. Multiple accounts open kiye ja sakte hain par do accounts ke beech me 3 months ka gap hona mandatory hai aur total balance ₹2 lakh se zyada nahi ho sakta.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "Maximum deposit limit under MSSC is ₹2 lakh with 3-month gap between multiple accounts.",
        citation_source: "Mahila Samman Savings Certificate Scheme, 2023, GSR 237(E) dated 31st March 2023",
        source_url: "https://www.nsiindia.gov.in/"
      }
    ],
    official_source_urls: [
      "https://www.nsiindia.gov.in/",
      "https://www.indiapost.gov.in/Financial/Pages/Content/Post-Office-Saving-Schemes.aspx"
    ],
    source_title: "Mahila Samman Savings Certificate Scheme Rules, 2023",
    source_publisher: "Department of Economic Affairs, Ministry of Finance",
    evidence_type: "PRIMARY_STATUTORY_RULE",
    effective_date: "2023-04-01",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Scheme tenure valid for deposits made up to March 31, 2025 unless extended.",
    conflicting_evidence: null,
    next_review_due: "2027-03-31"
  },
  {
    question_id: "Q-GI-015",
    canonical_question: "What is the difference between National Savings Certificate (NSC) and Kisan Vikas Patra (KVP)?",
    short_answer: "NSC has a 5-year fixed tenure and qualifies for Section 80C tax deductions, whereas KVP has a 115-month doubling tenure, does not qualify for Section 80C deductions, but allows premature withdrawal after 2.5 years.",
    detailed_answer: "National Savings Certificate (NSC VIII Issue) and Kisan Vikas Patra (KVP) differ fundamentally across four criteria: (1) Tenure: NSC has a fixed 5-year tenure, while KVP matures when the principal doubles (currently 115 months at 7.5% interest); (2) Tax Benefits: Initial deposit and accrued interest in the first 4 years of NSC qualify for tax deduction under Section 80C up to ₹1.5 lakh (Old Tax Regime), whereas KVP offers zero Section 80C tax benefits; (3) Premature Withdrawal: NSC cannot be closed before 5 years except on death or court order, while KVP permits premature encashment after a 30-month (2.5 years) lock-in period; (4) Eligibility: Trusts can invest in KVP, while only individuals can invest in NSC.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "NSC की अवधि 5 वर्ष है और इसमें सेक्शन 80C टैक्स छूट मिलती है, जबकि KVP का पैसा 115 महीने में दोगुना होता है, इसमें 80C छूट नहीं मिलती लेकिन 2.5 साल बाद निकासी संभव है।",
        detailed_answer: "NSC में 5 साल की लॉक-इन अवधि होती है और 80C के तहत ₹1.5 लाख तक टैक्स डिडक्शन मिलता है। इसके विपरीत KVP में 80C की कोई छूट नहीं मिलती, लेकिन इसमें 30 महीने (ढाई साल) के बाद समय से पहले पैसे निकालने (premature encashment) की सुविधा मिलती है। KVP में वर्तमान में 7.5% ब्याज पर पैसा 115 महीनों में दोगुना होता है।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "NSC 5 saal ka tax-saving instrument hai jisme 80C deduction milta hai, jabki KVP 115 months me paisa double karta hai bina 80C tax benefit ke par 2.5 saal baad liquidity deta hai.",
        detailed_answer: "NSC me 5-year lock-in rehta hai aur 80C tax benefit milta hai. KVP me 80C nahi milta, par 30 months (2.5 years) ke baad premature withdrawal allow hota hai. KVP ka tenure paisa double hone tak hota hai (current 115 months).",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "NSC matures in 5 years with 80C tax deduction; KVP doubles in 115 months with 30-month lock-in and no 80C benefit.",
        citation_source: "National Savings Certificates (VIII Issue) Scheme 2019 & Kisan Vikas Patra Scheme 2019",
        source_url: "https://www.nsiindia.gov.in/"
      }
    ],
    official_source_urls: [
      "https://www.nsiindia.gov.in/",
      "https://www.indiapost.gov.in/Financial/Pages/Content/Post-Office-Saving-Schemes.aspx"
    ],
    source_title: "Comparative Framework for NSC and KVP Schemes",
    source_publisher: "National Savings Institute",
    evidence_type: "PRIMARY_STATUTORY_RULE",
    effective_date: "2019-12-12",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Both schemes carry identical sovereign guarantees from Ministry of Finance.",
    conflicting_evidence: null,
    next_review_due: "2027-03-31"
  },
  {
    question_id: "Q-GI-016",
    canonical_question: "When can an account holder take a loan against their PPF account and what is the maximum loan limit?",
    short_answer: "A loan against PPF can be availed between the 3rd and 6th financial year of account opening, with a maximum loan ceiling of 25% of the balance at the end of the second preceding financial year.",
    detailed_answer: "Under Paragraph 10 of the PPF Scheme 2019, an account holder can apply for a loan starting from the third financial year up to the end of the sixth financial year from the financial year in which the account was opened. The maximum loan amount is capped at 25% of the credit balance standing at the close of the second financial year immediately preceding the year in which the loan is applied. For example, if applying in FY 2024-25, the loan limit is 25% of the balance as of March 31, 2023. From the 7th financial year onward, the loan facility ceases because partial withdrawal eligibility begins.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "PPF खाते पर लोन तीसरे वित्तीय वर्ष से छठे वित्तीय वर्ष के बीच लिया जा सकता है। अधिकतम लोन राशि आवेदन वर्ष से 2 वर्ष पूर्व के बैलेंस का 25% होती है।",
        detailed_answer: "PPF स्कीम 2019 के अनुसार, खाताधारक खाता खोलने के तीसरे से छठे वित्तीय वर्ष के अंत तक लोन ले सकता है। लोन की अधिकतम सीमा उस वित्तीय वर्ष से ठीक दो साल पहले के खाते में मौजूद बैलेंस का 25% होती है। सातवें वर्ष से आंशिक निकासी (withdrawal) की सुविधा शुरू हो जाती है, इसलिए लोन की सुविधा बंद हो जाती है।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "PPF par loan 3rd financial year se 6th financial year ke beech mil sakta hai, aur maximum limit 2 saal pehle ke balance ka 25% hoti hai.",
        detailed_answer: "Agar aap FY 2024-25 me loan apply kar rahe hain, to March 31, 2023 ke balance ka 25% loan milega. 7th financial year se loan facility band ho jaati hai kyunki partial withdrawal chalu ho jata hai.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "Loan allowed between 3rd and 6th financial year up to 25% of balance at end of second preceding year.",
        citation_source: "Public Provident Fund Scheme, 2019, Paragraph 10(1)",
        source_url: "https://www.nsiindia.gov.in/"
      }
    ],
    official_source_urls: [
      "https://www.nsiindia.gov.in/",
      "https://www.indiapost.gov.in/Financial/Pages/Content/Post-Office-Saving-Schemes.aspx"
    ],
    source_title: "PPF Scheme 2019 Loan Against Deposits Provisions",
    source_publisher: "National Savings Institute",
    evidence_type: "PRIMARY_STATUTORY_RULE",
    effective_date: "2019-12-12",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Only one loan allowed per financial year; second loan allowed only after first is cleared.",
    conflicting_evidence: null,
    next_review_due: "2027-03-31"
  },
  {
    question_id: "Q-GI-017",
    canonical_question: "What is the interest rate charged on a PPF loan and what penalty applies if it is not repaid within 36 months?",
    short_answer: "A PPF loan carries an interest rate of 1% per annum above the prevailing PPF rate if repaid within 36 months; if delayed beyond 36 months, the interest rate jumps penal to 6% per annum above the PPF rate.",
    detailed_answer: "Under statutory PPF loan rules, the interest rate on a PPF loan is 1% per annum over the prevailing PPF interest rate (e.g., 8.1% when PPF rate is 7.1%), provided the principal and interest are fully repaid within 36 months from the first day of the month following loan disbursement. The principal must be repaid first in lump sum or installments, followed by interest in not more than two monthly installments. If the loan is not fully repaid within 36 months, a penalty interest rate of 6% per annum above the prevailing PPF rate is charged on the outstanding balance from the date of initial disbursement.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "PPF लोन पर ब्याज दर मौजूदा PPF दर से 1% अधिक होती है (36 महीने के भीतर चुकाने पर)। 36 महीने में न चुकाने पर 6% दंडात्मक ब्याज दर लागू होती है।",
        detailed_answer: "PPF लोन 36 महीने (3 साल) के भीतर चुकाना होता है। समय पर चुकाने पर ब्याज दर PPF दर से केवल 1% अधिक (वर्तमान में 8.1%) होती है। यदि 36 महीने में लोन नहीं चुकाया जाता, तो लोन मिलने की तारीख से पूरे बकाया पर PPF दर से 6% अधिक (यानी 13.1%) दंडात्मक ब्याज वसूला जाता है।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "PPF loan par interest rate PPF rate + 1% hota hai agar 36 months me repay kar diya jaye. 36 months cross hone par 6% penalty interest lagta hai.",
        detailed_answer: "Loan 36 months me chukana mandatory hai. Pehle principal repay hota hai fir 2 installments me interest. Agar 36 months me loan clear nahi hota, to disbursement date se hi PPF rate + 6% ka penal interest charge kiya jata hai.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "PPF loan interest is 1% above PPF rate if repaid in 36 months, increasing to 6% above PPF rate if delayed.",
        citation_source: "PPF Scheme, 2019, Paragraph 10(3) and 10(4)",
        source_url: "https://www.nsiindia.gov.in/"
      }
    ],
    official_source_urls: [
      "https://www.nsiindia.gov.in/",
      "https://www.indiapost.gov.in/Financial/Pages/Content/Post-Office-Saving-Schemes.aspx"
    ],
    source_title: "PPF Scheme 2019 Loan Interest and Repayment Rules",
    source_publisher: "National Savings Institute",
    evidence_type: "PRIMARY_STATUTORY_RULE",
    effective_date: "2019-12-12",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Interest rate reduced from 2% to 1% in December 2019 gazette notification.",
    conflicting_evidence: null,
    next_review_due: "2027-03-31"
  },
  {
    question_id: "Q-GI-018",
    canonical_question: "What options are available upon maturity of a PPF account after 15 years?",
    short_answer: "Upon completing 15 years, a subscriber has three options: (1) Withdraw the full balance and close the account; (2) Extend the account in 5-year blocks with fresh contributions; or (3) Extend the account without contributions while earning interest.",
    detailed_answer: "At the end of the mandatory 15-year tenure (calculated from the end of the financial year of opening), an account holder can choose: (1) Complete Closure: Submit Form 3 to withdraw the entire tax-free corpus; (2) Extension with Contribution: Submit Form 4 (formerly Form H) within one year of maturity to extend for a 5-year block with ongoing deposits (up to 60% of balance at start of extension can be withdrawn during the 5 years); (3) Extension without Contribution: If no form is submitted within one year, the account automatically continues indefinitely in 5-year blocks, where the balance continues earning interest and one withdrawal per year of any amount is permitted.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "15 साल पूरे होने पर तीन विकल्प हैं: (1) पूरा पैसा निकालकर खाता बंद करना; (2) नई जमा राशि के साथ 5-5 साल के ब्लॉक में बढ़ाना; या (3) बिना जमा किए खाता जारी रखना और ब्याज कमाना।",
        detailed_answer: "15 वर्ष की परिपक्वता पर ग्राहक: (1) फॉर्म 3 भरकर पूरा पैसा टैक्स-फ्री निकाल सकता है; (2) फॉर्म 4 भरकर 1 साल के भीतर योगदान के साथ 5 साल के लिए खाता बढ़ा सकता है; (3) बिना कोई फॉर्म भरे खाता अपने आप बिना योगदान के जारी रहता है, जिस पर ब्याज मिलता रहता है और साल में एक बार निकासी की जा सकती है।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "15 years maturity par 3 options hain: (1) Full amount withdraw karke account close karna; (2) Form 4 submit karke fresh deposits ke sath 5 saal extend karna; (3) Bina deposit ke account continue rakhna.",
        detailed_answer: "15 saal complete hone par agar koi action nahi liya jata to account automatically bina contribution ke extend ho jata hai aur interest milta rehta hai. Fresh contribution ke liye 1 saal ke andar Form 4 dena zaroori hai.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "PPF can be closed, extended with contributions, or extended without contributions upon 15-year maturity.",
        citation_source: "PPF Scheme, 2019, Paragraph 12",
        source_url: "https://www.nsiindia.gov.in/"
      }
    ],
    official_source_urls: [
      "https://www.nsiindia.gov.in/",
      "https://www.indiapost.gov.in/Financial/Pages/Content/Post-Office-Saving-Schemes.aspx"
    ],
    source_title: "PPF Scheme 2019 Maturity and Extension Options",
    source_publisher: "National Savings Institute",
    evidence_type: "PRIMARY_STATUTORY_RULE",
    effective_date: "2019-12-12",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Form H replaced by Form 4 under Government Savings Promotion General Rules 2018.",
    conflicting_evidence: null,
    next_review_due: "2027-03-31"
  },
  {
    question_id: "Q-GI-019",
    canonical_question: "What is the procedure and deadline to extend a PPF account with contributions using Form H or Form 4?",
    short_answer: "To extend a PPF account with fresh contributions, the subscriber must submit Form 4 (formerly Form H) to the bank or post office within one year from the date of 15-year maturity.",
    detailed_answer: "To extend a PPF account with ongoing deposits, the account holder must submit Form 4 to the branch where the account is held within one year of the maturity date. If fresh deposits are made into the account after 15 years without submitting Form 4 within the one-year window, all such deposits are treated as irregular under government rules: they earn zero interest and are ineligible for Section 80C tax deductions, though the pre-existing balance continues to earn interest.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "PPF खाते को नए योगदान के साथ बढ़ाने के लिए परिपक्वता की तारीख से 1 वर्ष के भीतर फॉर्म 4 (पुराना फॉर्म H) जमा करना अनिवार्य है।",
        detailed_answer: "यदि ग्राहक 15 साल बाद भी पैसे जमा करना चाहता है, तो उसे 1 साल के भीतर बैंक या पोस्ट ऑफिस में फॉर्म 4 जमा करना होगा। यदि बिना फॉर्म जमा किए पैसे डाले जाते हैं, तो उन पैसों पर कोई ब्याज नहीं मिलेगा और न ही टैक्स छूट मिलेगी।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "PPF account ko fresh contribution ke sath extend karne ke liye maturity date se 1 saal ke andar Form 4 (Form H) submit karna mandatory hai.",
        detailed_answer: "Agar 1 saal ke andar Form 4 submit kiye bina paise deposit kiye jate hain, to un deposits par zero interest milta hai aur 80C tax deduction bhi nahi milta.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "Form 4 must be submitted within one year of maturity to extend PPF with deposits.",
        citation_source: "Government Savings Promotion General Rules, 2018, Form 4 and PPF Scheme 2019",
        source_url: "https://www.nsiindia.gov.in/"
      }
    ],
    official_source_urls: [
      "https://www.nsiindia.gov.in/",
      "https://www.indiapost.gov.in/Financial/Pages/Content/Post-Office-Saving-Schemes.aspx"
    ],
    source_title: "PPF Extension with Contribution Filing Timeline",
    source_publisher: "Department of Economic Affairs",
    evidence_type: "PRIMARY_STATUTORY_RULE",
    effective_date: "2019-12-12",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Crucial compliance rule: deposits without Form 4 earn zero interest.",
    conflicting_evidence: null,
    next_review_due: "2027-03-31"
  },
  {
    question_id: "Q-GI-020",
    canonical_question: "Under what conditions is premature closure of a Sukanya Samriddhi Yojana (SSY) account allowed before 21 years?",
    short_answer: "Premature closure of an SSY account before 21 years is permitted on the death of the girl child, life-threatening medical emergencies, or upon her marriage after turning 18 years old.",
    detailed_answer: "Under the Sukanya Samriddhi Account Scheme 2019, premature closure before the 21-year maturity is allowed under specific statutory grounds: (1) Death of the girl child: Account is closed immediately upon submission of death certificate, and balance with interest is paid to the guardian; (2) Compassionate grounds: After 5 years of account opening, in cases of life-threatening disease of the girl child or death of the guardian; (3) Marriage of the girl child: After attaining 18 years of age, supported by marriage declaration and age proof, submitted between 1 month prior to and 3 months after the marriage date.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "सुकन्या समृद्धि खाता 21 वर्ष से पहले बालिका की मृत्यु, जानलेवा बीमारी, अभिभावक की मृत्यु या 18 वर्ष की आयु के बाद विवाह के समय बंद किया जा सकता है।",
        detailed_answer: "SSY खाता 21 वर्ष से पूर्व निम्न परिस्थितियों में बंद हो सकता है: (1) बालिका की असामयिक मृत्यु पर मृत्यु प्रमाण पत्र प्रस्तुत करने पर; (2) 5 वर्ष पूरे होने के बाद बालिका की गंभीर बीमारी या माता-पिता की मृत्यु पर; (3) 18 वर्ष की आयु पूरी होने के बाद बालिका के विवाह के अवसर पर।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "SSY account 21 saal se pehle girl child ki death, critical illness, guardian death ya 18 years ke baad marriage hone par prematurely close kiya ja sakta hai.",
        detailed_answer: "Account opening ke 5 saal baad medical emergency ya parents ki demise par compassionate grounds par closure allow hota hai. 18 years age hone par marriage application ke sath account close kiya ja sakta hai.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "Premature closure allowed on death, after 5 years on compassionate medical grounds, or on marriage after age 18.",
        citation_source: "Sukanya Samriddhi Account Scheme, 2019, Paragraph 12",
        source_url: "https://www.nsiindia.gov.in/"
      }
    ],
    official_source_urls: [
      "https://www.nsiindia.gov.in/",
      "https://www.indiapost.gov.in/Financial/Pages/Content/Post-Office-Saving-Schemes.aspx"
    ],
    source_title: "SSY Scheme 2019 Premature Closure Conditions",
    source_publisher: "National Savings Institute",
    evidence_type: "PRIMARY_STATUTORY_RULE",
    effective_date: "2019-12-12",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Post Office savings bank interest applies if closed prematurely on non-specified grounds.",
    conflicting_evidence: null,
    next_review_due: "2027-03-31"
  },
  {
    question_id: "Q-GI-021",
    canonical_question: "When and how much can be partially withdrawn from a Sukanya Samriddhi account for higher education?",
    short_answer: "Up to 50% of the balance at the end of the preceding financial year can be partially withdrawn once the girl child turns 18 years old or passes the 10th standard, specifically for higher education.",
    detailed_answer: "Under Paragraph 10 of the Sukanya Samriddhi Account Scheme 2019, partial withdrawal is permitted specifically for the higher education expenses of the girl child. The withdrawal is allowed once the girl attains 18 years of age or completes standard 10th (matriculation), whichever is earlier. The maximum withdrawal limit is 50% of the balance standing in the account at the close of the immediately preceding financial year. The funds can be withdrawn in a lump sum or in up to five annual installments, upon presenting confirmed admission documentation and fee structure from an educational institution.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "बालिका की आयु 18 वर्ष होने या 10वीं कक्षा पास करने पर उच्च शिक्षा के लिए पिछले वित्तीय वर्ष के बैलेंस का अधिकतम 50% निकाला जा सकता है।",
        detailed_answer: "उच्च शिक्षा के लिए बालिका की 18 वर्ष आयु पूरी होने या 10वीं पास करने पर (जो भी पहले हो) निकासी की अनुमति है। अधिकतम 50% राशि निकाली जा सकती है। यह राशि एकमुश्त या 5 वार्षिक किस्तों में कॉलेज के दाखिला पत्र और फीस रसीद के आधार पर प्राप्त की जा सकती है।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "Girl child ki 18 years age hone ya 10th class pass karne par higher education ke liye previous financial year balance ka 50% withdraw kiya ja sakta hai.",
        detailed_answer: "Admission letter aur fee slip submit karke 50% balance withdraw ho sakta hai. Yeh amount lump-sum ya maximum 5 yearly installments me withdraw karne ki permission hoti hai.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "Partial withdrawal up to 50% permitted after age 18 or passing 10th standard for higher education.",
        citation_source: "Sukanya Samriddhi Account Scheme, 2019, Paragraph 10",
        source_url: "https://www.nsiindia.gov.in/"
      }
    ],
    official_source_urls: [
      "https://www.nsiindia.gov.in/",
      "https://www.indiapost.gov.in/Financial/Pages/Content/Post-Office-Saving-Schemes.aspx"
    ],
    source_title: "SSY Scheme Higher Education Withdrawal Guidelines",
    source_publisher: "National Savings Institute",
    evidence_type: "PRIMARY_STATUTORY_RULE",
    effective_date: "2019-12-12",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Confirmed admission offer required as mandatory evidentiary documentation.",
    conflicting_evidence: null,
    next_review_due: "2027-03-31"
  },
  {
    question_id: "Q-GI-022",
    canonical_question: "What is the penalty and revival process if the minimum ₹250 annual deposit is missed in a Sukanya Samriddhi account?",
    short_answer: "If the minimum ₹250 deposit is missed in a financial year, the SSY account is marked in default and can be revived by paying a penalty of ₹50 per default year along with the ₹250 minimum deposit for each missed year.",
    detailed_answer: "A Sukanya Samriddhi account requires a minimum statutory deposit of ₹250 in every financial year. If this minimum deposit is not made, the account is categorized as an 'account in default'. A defaulted account can be regularized at any time before the completion of 15 years from account opening by paying a penalty fee of ₹50 for each defaulted year plus the minimum deposit of ₹250 for each such year. Even if an account remains in default, the existing balance continues to earn interest at the applicable scheme rate until maturity.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "सालाना न्यूनतम ₹250 जमा न करने पर खाता डिफॉल्ट हो जाता है। इसे प्रति डिफॉल्ट वर्ष ₹50 पेनल्टी और ₹250 न्यूनतम जमा देकर पुनर्जीवित किया जा सकता है।",
        detailed_answer: "यदि किसी वित्तीय वर्ष में ₹250 जमा नहीं होते हैं, तो खाता डिफॉल्ट माना जाता है। इसे 15 वर्ष पूरे होने से पहले कभी भी ₹50 प्रति वर्ष की पेनल्टी और ₹250 का न्यूनतम बकाया जमा करके दोबारा चालू (revive) कराया जा सकता है। डिफॉल्ट अवधि में भी खाते में मौजूद बैलेंस पर ब्याज मिलता रहता है।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "Minimum ₹250 annual deposit miss hone par account default ho jata hai. Har default year ke liye ₹50 penalty + ₹250 deposit dekar account revive ho sakta hai.",
        detailed_answer: "Default account ko 15 years complete hone se pehle kabhi bhi revive kiya ja sakta hai. Default rehne par bhi purane balance par government interest rate continue milta rehta hai.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "Default fee is ₹50 per year plus minimum deposit of ₹250 per defaulted year; interest continues to accrue.",
        citation_source: "Sukanya Samriddhi Account Scheme, 2019, Paragraph 4(3) and 4(4)",
        source_url: "https://www.nsiindia.gov.in/"
      }
    ],
    official_source_urls: [
      "https://www.nsiindia.gov.in/",
      "https://www.indiapost.gov.in/Financial/Pages/Content/Post-Office-Saving-Schemes.aspx"
    ],
    source_title: "SSY Default Account Regularization Rules",
    source_publisher: "National Savings Institute",
    evidence_type: "PRIMARY_STATUTORY_RULE",
    effective_date: "2019-12-12",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Interest accrual rule updated in 2019: earlier defaulted accounts earned only PO savings interest.",
    conflicting_evidence: null,
    next_review_due: "2027-03-31"
  },
  {
    question_id: "Q-GI-023",
    canonical_question: "Can an SCSS account be opened jointly with a spouse and what are the individual vs combined deposit limits?",
    short_answer: "Yes, an SCSS account can be opened jointly with a spouse only. In a joint account, the investment limit is ₹30 lakh, but if both spouses independently qualify, they can invest up to ₹60 lakh across two separate accounts.",
    detailed_answer: "Under SCSS Scheme Rules, joint accounts are permitted exclusively with a spouse; joint holding with children or other relatives is prohibited. The entire deposit in a joint account is legally attributable solely to the primary account holder. The maximum deposit ceiling in a single joint account is ₹30 lakh. However, if both spouses independently fulfill the age criteria (60+ years, or 55+ with retirement benefits), both spouses can open separate individual accounts of ₹30 lakh each, allowing the couple to invest a combined total of ₹60 lakh in SCSS.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "हां, SCSS खाता केवल पति या पत्नी के साथ संयुक्त रूप से खोला जा सकता है। संयुक्त खाते की सीमा ₹30 लाख है, लेकिन दोनों के पात्र होने पर अलग खातों में कुल ₹60 लाख जमा किए जा सकते हैं।",
        detailed_answer: "SCSS में संयुक्त खाता केवल जीवनसाथी (spouse) के साथ ही खोला जा सकता है। संयुक्त खाते में पूरी जमा राशि प्राथमिक खाताधारक की मानी जाती है। यदि पति और पत्नी दोनों पात्र हैं, तो वे अलग-अलग खाते खोलकर कुल ₹60 लाख (₹30 लाख + ₹30 लाख) तक सुरक्षित निवेश कर सकते हैं।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "Haan, SCSS joint account sirf spouse ke sath open ho sakta hai. Joint account me limit ₹30 lakh hai, par dono eligible hone par alag-alag accounts me ₹60 lakh invest ho sakte hain.",
        detailed_answer: "SCSS joint account bachho ya relatives ke sath open nahi hota, sirf spouse ke sath hota hai. Joint account ka pura fund primary holder ka maana jata hai. Dono spouse eligible hone par alag accounts me ₹30-₹30 lakh dal sakte hain.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "SCSS joint account allowed only with spouse; primary holder owns funds; spouses can hold separate accounts up to ₹30 lakh each.",
        citation_source: "Senior Citizen Savings Scheme Rules, 2019, Paragraph 3(3) and 4",
        source_url: "https://www.nsiindia.gov.in/"
      }
    ],
    official_source_urls: [
      "https://www.nsiindia.gov.in/",
      "https://dea.gov.in/"
    ],
    source_title: "SCSS Joint Account and Deposit Ceiling Guidelines",
    source_publisher: "National Savings Institute",
    evidence_type: "PRIMARY_STATUTORY_RULE",
    effective_date: "2023-04-01",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Secondary holder in joint account does not need to satisfy age criterion.",
    conflicting_evidence: null,
    next_review_due: "2027-03-31"
  },
  {
    question_id: "Q-GI-024",
    canonical_question: "What penalty is deducted if a Senior Citizen Savings Scheme (SCSS) account is closed prematurely before 5 years?",
    short_answer: "If an SCSS account is closed after 1 year but before 2 years, a 1.5% deduction of principal applies; between 2 and 5 years, a 1% deduction applies; if closed within 1 year, all paid interest is recovered from principal.",
    detailed_answer: "Under Paragraph 8 of the SCSS Scheme Rules 2019, premature closure is permitted anytime subject to statutory deductions: (1) Closure within 1 year of opening: No interest is payable; any quarterly interest already credited is deducted from the principal balance; (2) Closure after 1 year but before 2 years: An amount equal to 1.5% of the principal deposit is deducted as penalty; (3) Closure after 2 years but before 5 years: An amount equal to 1.0% of the principal deposit is deducted as penalty. In extended accounts (extended by 3 years after the initial 5-year tenure), the account can be closed after 1 year from the date of extension without any deduction.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "SCSS में 1 से 2 साल के बीच बंद करने पर मूलधन का 1.5% और 2 से 5 साल के बीच बंद करने पर 1% पेनल्टी कटती है। 1 साल के भीतर बंद करने पर पूरा ब्याज वापस ले लिया जाता है।",
        detailed_answer: "SCSS खाता समय पूर्व बंद करने पर: 1 वर्ष के भीतर बंद करने पर कोई ब्याज नहीं मिलता और दिया गया ब्याज मूलधन से काटा जाता है; 1 से 2 वर्ष के बीच 1.5% मूलधन कटता है; 2 से 5 वर्ष के बीच 1% मूलधन कटता है। यदि खाता 5 साल के बाद 3 साल के लिए बढ़ाया गया हो, तो 1 साल बाद बिना किसी कटौती के बंद किया जा सकता है।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "SCSS premature closure par 1-2 saal me 1.5% principal penalty aur 2-5 saal me 1.0% penalty deduct hoti hai. 1 saal se pehle close karne par sara interest recover ho jata hai.",
        detailed_answer: "First year me close karne par zero interest milta hai. 1-2 years me 1.5% principal deduction hota hai aur 2 years ke baad 1% deduction hota hai. Extended account me 1 year ke baad zero penalty lagti hai.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "Premature penalty is recovery of interest in Year 1, 1.5% deduction in Year 2, and 1% deduction between Years 2-5.",
        citation_source: "Senior Citizen Savings Scheme Rules, 2019, Paragraph 8",
        source_url: "https://www.nsiindia.gov.in/"
      }
    ],
    official_source_urls: [
      "https://www.nsiindia.gov.in/",
      "https://www.indiapost.gov.in/Financial/Pages/Content/Post-Office-Saving-Schemes.aspx"
    ],
    source_title: "SCSS Scheme Rules on Premature Closure and Penalties",
    source_publisher: "National Savings Institute",
    evidence_type: "PRIMARY_STATUTORY_RULE",
    effective_date: "2019-12-12",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Updated rules in 2023 allow penalty-free closure after 1 year in extended accounts.",
    conflicting_evidence: null,
    next_review_due: "2027-03-31"
  },
  {
    question_id: "Q-GI-025",
    canonical_question: "Can a National Savings Certificate (NSC) be pledged as security for bank loans and who is authorized to accept the pledge?",
    short_answer: "Yes, an NSC can be pledged as loan security to the President of India, State Governors, Reserve Bank of India, scheduled commercial banks, cooperative banks, government companies, and NHB-approved housing finance companies.",
    detailed_answer: "Under Rule 12 of the Government Savings Promotion General Rules, 2018, and the National Savings Certificates (VIII Issue) Scheme 2019, an NSC can be pledged or transferred as collateral security. Authorized pledgees include: (1) The President of India or Governor of a State in their official capacity; (2) The RBI, scheduled banks, cooperative banks, and cooperative credit societies; (3) Public or private corporations and government companies; (4) Local authorities; (5) Housing finance companies approved by the National Housing Bank. The pledge requires submitting an application in Form 5 at the relevant post office along with an acceptance letter from the pledgee bank.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "हां, NSC को बैंक लोन के लिए सुरक्षा के रूप में राष्ट्रपति, राज्यपाल, RBI, अनुसूचित बैंकों, सहकारी बैंकों और सरकारी कंपनियों के पास गिरवी रखा जा सकता है।",
        detailed_answer: "राष्ट्रीय बचत पत्र (NSC) को लोन के लिए कोलैटरल सिक्योरिटी के तौर पर गिरवी (pledge) रखा जा सकता है। अधिकृत संस्थानों में कमर्शियल बैंक, कॉपरेटिव बैंक, RBI, हाउसिंग फाइनेंस कंपनियां और सरकारी निगम शामिल हैं। इसके लिए पोस्ट ऑफिस में फॉर्म 5 और बैंक का स्वीकृति पत्र जमा करना होता है।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "Haan, NSC certificate ko bank loan ke liye scheduled commercial banks, cooperative banks, RBI aur government corporations ke pas pledge kiya ja sakta hai.",
        detailed_answer: "Post Office me Form 5 submit karke aur bank ka sanction letter dekar NSC ko pledge karwaya ja sakta hai. Loan default hone par bank official procedure se certificate encash karwa sakta hai.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "NSC can be pledged to banks, RBI, government bodies, and housing finance companies under prescribed rules.",
        citation_source: "National Savings Certificates (VIII Issue) Scheme 2019, Paragraph 11",
        source_url: "https://www.nsiindia.gov.in/"
      }
    ],
    official_source_urls: [
      "https://www.nsiindia.gov.in/",
      "https://www.indiapost.gov.in/Financial/Pages/Content/Post-Office-Saving-Schemes.aspx"
    ],
    source_title: "NSC Pledging and Transfer as Security Rules",
    source_publisher: "National Savings Institute",
    evidence_type: "PRIMARY_STATUTORY_RULE",
    effective_date: "2019-12-12",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Pledge fee may be charged by post office per certificate.",
    conflicting_evidence: null,
    next_review_due: "2027-03-31"
  },
  {
    question_id: "Q-GI-026",
    canonical_question: "How is interest on National Savings Certificate (NSC) taxed annually and does accrued interest qualify for Section 80C deduction?",
    short_answer: "NSC interest is taxable on an accrual basis annually under 'Income from Other Sources'. For the first 4 years, accrued interest is deemed reinvested and qualifies for Section 80C deduction; fifth-year interest is fully taxable.",
    detailed_answer: "Although NSC interest is compounded annually and paid as a lump sum at 5-year maturity, income tax laws treat the interest as accrued income in each respective financial year. Under the Old Tax Regime: (1) Interest accrued during years 1 to 4 is considered automatically reinvested in the certificate and qualifies for tax deduction under Section 80C within the overall ₹1.5 lakh ceiling; (2) Interest accrued in the 5th and final year cannot be reinvested and is fully taxable at the investor's tax slab; (3) Under the New Tax Regime (Section 115BAC), Section 80C deductions are unavailable, making all accrued annual interest fully taxable.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "NSC का ब्याज हर साल उपार्जित (accrual) आधार पर कर योग्य होता है। शुरुआती 4 वर्षों का ब्याज पुनर्निवेशित मानकर धारा 80C में छूट योग्य होता है, जबकि 5वें वर्ष का ब्याज पूर्णतः कर योग्य होता है।",
        detailed_answer: "पुरानी कर व्यवस्था में NSC के पहले 4 वर्षों का संचित ब्याज धारा 80C के तहत ₹1.5 लाख की सीमा में कर छूट का हकदार होता है क्योंकि वह पुनर्निवेशित माना जाता है। 5वें वर्ष का ब्याज परिपक्व हो जाने के कारण 80C में नहीं आता और पूरी तरह टैक्स योग्य होता है। नई कर व्यवस्था में 80C छूट न होने के कारण सभी 5 वर्षों का ब्याज पूरी तरह टैक्स स्लैब अनुसार कर योग्य है।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "NSC interest annual accrual basis par taxable hota hai. Pehle 4 saal ka accrued interest 80C me reinvested maana jata hai aur deduction milta hai, 5th year ka interest fully taxable hota hai.",
        detailed_answer: "Old Tax Regime me saal 1 se 4 tak ka interest Section 80C me claim ho sakta hai. 5th year ka interest maturity year hone ki wajah se 80C me eligible nahi hota. New Tax Regime me koi 80C deduction nahi milta aur sara interest taxable hota hai.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "Accrued interest in first 4 years qualifies for 80C deduction as reinvestment; fifth year interest is fully taxable.",
        citation_source: "Income Tax Department Circular & Section 80C of Income Tax Act, 1961",
        source_url: "https://www.incometax.gov.in/"
      }
    ],
    official_source_urls: [
      "https://www.incometax.gov.in/",
      "https://www.nsiindia.gov.in/"
    ],
    source_title: "Tax Treatment of Accrued Interest on National Savings Certificates",
    source_publisher: "Income Tax Department of India",
    evidence_type: "PRIMARY_STATUTORY_RULE",
    effective_date: "2019-12-12",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Crucial tax reporting detail: taxpayers must declare annual accrued interest in ITR.",
    conflicting_evidence: null,
    next_review_due: "2027-03-31"
  },
  {
    question_id: "Q-GI-027",
    canonical_question: "How many months does it take for Kisan Vikas Patra (KVP) to double at the current 7.5% interest rate?",
    short_answer: "At the current interest rate of 7.5% compounded annually, Kisan Vikas Patra (KVP) doubles the invested amount in exactly 115 months (9 years and 7 months).",
    detailed_answer: "Under the Kisan Vikas Patra Scheme 2019, the tenure of the certificate is defined by the time required for the principal to double based on the prevailing interest rate. At the current government-notified interest rate of 7.5% per annum compounded annually, an investment doubles in 115 months (9 years and 7 months). Crucially, the doubling period is locked in at the time of certificate issuance and remains unchanged for that certificate even if interest rates are subsequently revised for new issues.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "वर्तमान 7.5% वार्षिक चक्रवृद्धि ब्याज दर पर किसान विकास पत्र (KVP) में जमा राशि ठीक 115 महीने (9 वर्ष 7 माह) में दोगुनी हो जाती है।",
        detailed_answer: "KVP योजना के तहत परिपक्वता अवधि पैसा दोगुना होने के समय पर निर्भर करती है। 7.5% की वर्तमान दर पर यह अवधि 115 महीने तय की गई है। एक बार सर्टिफिकेट जारी होने के बाद उस पर तय की गई परिपक्वता अवधि अपरिवर्तित रहती है, भले ही भविष्य में सरकार द्वारा नई दरों में बदलाव किया जाए।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "Current 7.5% interest rate par Kisan Vikas Patra (KVP) me invested amount exactly 115 months (9 years 7 months) me double hota hai.",
        detailed_answer: "KVP me doubling tenure purchase ke time lock ho jata hai. Agar aapne 115 months wale period me purchase kiya hai to future rate cuts se aapka maturity period affect nahi hoga aur paisa 115 months me hi double hoga.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "KVP doubles in 115 months at 7.5% interest compounded annually.",
        citation_source: "Ministry of Finance Notification on Small Savings Interest Rates",
        source_url: "https://www.nsiindia.gov.in/"
      }
    ],
    official_source_urls: [
      "https://www.nsiindia.gov.in/",
      "https://www.indiapost.gov.in/Financial/Pages/Content/Post-Office-Saving-Schemes.aspx"
    ],
    source_title: "Kisan Vikas Patra Scheme Maturity Schedule",
    source_publisher: "National Savings Institute",
    evidence_type: "OFFICIAL_GOV_NOTIFICATION",
    effective_date: "2023-01-01",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Tenure reduced from 120 to 115 months when rate was hiked to 7.5%.",
    conflicting_evidence: null,
    next_review_due: "2027-03-31"
  },
  {
    question_id: "Q-GI-028",
    canonical_question: "What is the mandatory lock-in period before which Kisan Vikas Patra (KVP) cannot be prematurely encashed?",
    short_answer: "Kisan Vikas Patra has a mandatory lock-in period of 2 years and 6 months (30 months) from the date of purchase, before which premature encashment is prohibited under normal circumstances.",
    detailed_answer: "Under Paragraph 7 of the Kisan Vikas Patra Scheme 2019, premature withdrawal is not permitted before the expiry of 2 years and 6 months (30 months) from the date of deposit. Exceptions to this lock-in apply only on the death of the holder (or any joint holder), on forfeiture by an authorized pledgee (such as a bank gazetted officer), or upon an explicit court order. If encashed after 30 months but before the 115-month maturity, the redemption value is paid according to a pre-defined statutory table at a lower effective yield.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "किसान विकास पत्र (KVP) में 2 वर्ष 6 माह (30 महीने) का अनिवार्य लॉक-इन पीरियड होता है, जिससे पहले सामान्य स्थिति में पैसा नहीं निकाला जा सकता।",
        detailed_answer: "KVP नियमों के अनुसार, जमा की तारीख से 30 महीने पूरे होने के बाद ही समय पूर्व निकासी (premature withdrawal) की जा सकती है। 30 महीने से पहले निकासी केवल खाताधारक की मृत्यु या न्यायालय के आदेश पर ही संभव है। 30 महीने के बाद निकासी पर सरकारी तालिका के अनुसार निर्धारित ब्याज दर पर भुगतान किया जाता है।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "Kisan Vikas Patra (KVP) me 2.5 saal (30 months) ka mandatory lock-in period hota hai. Isse pehle premature encashment allow nahi hota.",
        detailed_answer: "30 months complete hone ke baad KVP ko post office se prematurely encash karwaya ja sakta hai, par return pre-fixed table ke mutabiq kam milta hai. Death ya court order ke alawa 30 months se pehle withdrawal strictly prohibited hai.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "Premature closure permitted after 2 years and 6 months from deposit date.",
        citation_source: "Kisan Vikas Patra Scheme, 2019, Paragraph 7(1)",
        source_url: "https://www.nsiindia.gov.in/"
      }
    ],
    official_source_urls: [
      "https://www.nsiindia.gov.in/",
      "https://www.indiapost.gov.in/Financial/Pages/Content/Post-Office-Saving-Schemes.aspx"
    ],
    source_title: "Kisan Vikas Patra Premature Encashment Table and Rules",
    source_publisher: "National Savings Institute",
    evidence_type: "PRIMARY_STATUTORY_RULE",
    effective_date: "2019-12-12",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Provides liquidity advantage over 5-year locked NSC.",
    conflicting_evidence: null,
    next_review_due: "2027-03-31"
  },
  {
    question_id: "Q-GI-029",
    canonical_question: "When and how much can be partially withdrawn from a Mahila Samman Savings Certificate (MSSC) account?",
    short_answer: "A partial withdrawal of up to 40% of the eligible balance is permitted once after completing one year from the date of account opening.",
    detailed_answer: "Under Paragraph 8 of the Mahila Samman Savings Certificate Scheme, 2023, the account holder is entitled to execute a single partial withdrawal after the expiry of one year from the date of opening the account. The maximum permissible partial withdrawal amount is 40% of the balance standing in the account at the time of application. In the case of an account opened on behalf of a minor girl, the guardian can execute the withdrawal for the benefit of the minor by submitting Form 3 to the post office or bank.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "खाता खोलने के 1 वर्ष पूरे होने के बाद खाते में जमा राशि का अधिकतम 40% एक बार आंशिक रूप से निकाला जा सकता है।",
        detailed_answer: "महिला सम्मान बचत प्रमाणपत्र योजना, 2023 के तहत खाताधारक 1 साल पूरा होने पर अपने खाते के बैलेंस का अधिकतम 40% निकाल सकती है। यह सुविधा पूरी 2 साल की अवधि में केवल एक बार उपलब्ध होती है। नाबालिग लड़की के खाते से अभिभावक बच्ची की भलाई के लिए फॉर्म 3 भरकर यह निकासी कर सकते हैं।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "MSSC account open hone ke 1 saal baad eligible balance ka maximum 40% partial withdrawal allow hota hai (sirf ek baar).",
        detailed_answer: "1 year complete hone par account holder Form 3 submit karke up to 40% balance withdraw kar sakti hai. 2-year tenure me yeh partial withdrawal facility sirf ek baar milti hai.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "Partial withdrawal up to 40% of balance permitted once after 1 year from account opening.",
        citation_source: "Mahila Samman Savings Certificate Scheme, 2023, Paragraph 8",
        source_url: "https://www.nsiindia.gov.in/"
      }
    ],
    official_source_urls: [
      "https://www.nsiindia.gov.in/",
      "https://www.indiapost.gov.in/Financial/Pages/Content/Post-Office-Saving-Schemes.aspx"
    ],
    source_title: "Mahila Samman Savings Certificate Partial Withdrawal Regulations",
    source_publisher: "Department of Economic Affairs, Ministry of Finance",
    evidence_type: "PRIMARY_STATUTORY_RULE",
    effective_date: "2023-04-01",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Remaining 60% continues to earn 7.5% quarterly compounded interest until 2-year maturity.",
    conflicting_evidence: null,
    next_review_due: "2027-03-31"
  },
  {
    question_id: "Q-GI-030",
    canonical_question: "Is TDS deducted on interest earned from Mahila Samman Savings Certificate (MSSC) and is the interest taxable?",
    short_answer: "Interest earned on MSSC is fully taxable according to the investor's income tax slab, but no TDS is deducted at source because the maximum annual interest is well below the statutory Section 194A TDS threshold.",
    detailed_answer: "The tax treatment of Mahila Samman Savings Certificate involves two rules: (1) Taxability: The scheme does not offer any tax deduction under Section 80C, and the 7.5% interest earned is fully taxable under 'Income from Other Sources' at the investor's applicable slab rate; (2) TDS Exemption: Under Central Board of Direct Taxes (CBDT) Circular No. 4/2023, no Tax Deducted at Source (TDS) is deducted on MSSC interest. Even on the maximum investment of ₹2,00,000, the total annual interest is approximately ₹15,400, which is far below the statutory Section 194A TDS threshold of ₹40,000 (or ₹50,000 for senior citizens).",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "MSSC का ब्याज निवेशक के टैक्स स्लैब अनुसार कर योग्य है, लेकिन इस पर TDS नहीं काटा जाता क्योंकि सालाना ब्याज ₹40,000 की TDS सीमा से काफी कम होता है।",
        detailed_answer: "महिला सम्मान बचत प्रमाणपत्र में धारा 80C के तहत कोई कर छूट नहीं मिलती। इस पर मिलने वाला 7.5% ब्याज आयकर स्लैब के अनुसार टैक्स योग्य है। हालांकि, ₹2 लाख के अधिकतम निवेश पर भी 1 साल का ब्याज लगभग ₹15,400 बनता है, जो टीडीएस सीमा (₹40,000) से बहुत कम है, इसलिए पोस्ट ऑफिस या बैंक द्वारा कोई TDS नहीं काटा जाता।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "MSSC par interest income tax slab ke hisab se fully taxable hai, par TDS nahi katta kyunki total interest ₹40,000 threshold se kaafi kam hota hai.",
        detailed_answer: "MSSC me Section 80C deduction nahi milta. Interest taxable hota hai aur ITR me Other Sources me declare karna hota hai. Maximum ₹2 lakh deposit par bhi annual interest ₹15,400 banta hai, isliye Section 194A ke tehat koi TDS deduct nahi hota.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "Interest on MSSC is taxable at slab rate; no TDS deducted as interest does not exceed Section 194A threshold.",
        citation_source: "CBDT Circular No. 4/2023 & Section 194A Income Tax Act",
        source_url: "https://www.incometax.gov.in/"
      }
    ],
    official_source_urls: [
      "https://www.incometax.gov.in/",
      "https://www.nsiindia.gov.in/"
    ],
    source_title: "CBDT Clarification on TDS Applicability to Mahila Samman Savings Certificate",
    source_publisher: "Central Board of Direct Taxes, Ministry of Finance",
    evidence_type: "OFFICIAL_GOV_NOTIFICATION",
    effective_date: "2023-05-16",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Confirmed by CBDT Notification No. 27/2023.",
    conflicting_evidence: null,
    next_review_due: "2027-03-31"
  }
];
