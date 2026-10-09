// Category 7: Official Sources (11 Answers: Q-OS-001 to Q-OS-011)

export const cat7Answers = [
  {
    question_id: "Q-OS-001",
    canonical_question: "How does the myScheme portal determine which central and state schemes a citizen is eligible for?",
    short_answer: "The myScheme portal (myscheme.gov.in) uses an intelligent rule-based eligibility engine that matches a citizen's self-reported profile attributes (gender, age, caste, state, occupation, income, and disability status) against thousands of scheme criteria.",
    detailed_answer: "Developed by the Ministry of Electronics and Information Technology (MeitY) and the National e-Governance Division (NeGD), myScheme is India's unified national scheme discovery platform. A citizen completes an anonymous multi-step questionnaire answering basic demographic criteria: age, gender, state of residence, rural/urban domicile, social category (General/OBC/SC/ST/Minority), economic status (BPL/EWS/annual income), employment type (student, farmer, entrepreneur, artisan), and special categories (differently abled, single parent). The platform's automated engine filters over 1,500 central and state schemes and generates a tailored list of schemes for which the user qualifies, linking directly to official application forms.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "माईस्कीम (myScheme.gov.in) पोर्टल एक नियम-आधारित पात्रता इंजन का उपयोग करता है जो नागरिक द्वारा दर्ज की गई जनसांख्यिकीय जानकारी (आयु, लिंग, आय, राज्य, जाति और व्यवसाय) के आधार पर उपयुक्त सरकारी योजनाओं की सूची तैयार करता है।",
        detailed_answer: "MeitY और NeGD द्वारा विकसित यह पोर्टल 1,500 से अधिक केंद्रीय और राज्य योजनाओं का डेटाबेस रखता है। उपयोगकर्ता अपनी बुनियादी जानकारी भरकर तुरंत जान सकते हैं कि वे किन-किन सरकारी लाभों के पात्र हैं, और सीधे आवेदन लिंक प्राप्त कर सकते हैं।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "myScheme portal (myscheme.gov.in) citizen ke profile data (age, gender, caste, income, state aur occupation) ko thousands of government schemes se match karke customized eligibility list dikhata hai.",
        detailed_answer: "NeGD aur MeitY dwara banaya gaya myScheme platform ek automated filter engine use karta hai. User bina login kiye bhi apne attributes daalkar central aur state government schemes ki tailored list check kar sakta hai.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "myScheme uses an automated rule-based filtering engine across demographic attributes to determine eligibility across 1,500+ schemes.",
        citation_source: "myScheme Portal Architecture & NeGD Platform Documentation",
        source_url: "https://www.myscheme.gov.in/"
      }
    ],
    official_source_urls: [
      "https://www.myscheme.gov.in/",
      "https://negd.gov.in/"
    ],
    source_title: "myScheme National Platform Architecture & Citizen Guide",
    source_publisher: "National e-Governance Division (NeGD) & Ministry of Electronics and IT (MeitY)",
    evidence_type: "OFFICIAL_DEPARTMENT_PORTAL",
    effective_date: "2022-07-04",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Platform is discovery-only; actual scheme execution is routed to respective departmental portals.",
    conflicting_evidence: null,
    next_review_due: "2026-12-31"
  },
  {
    question_id: "Q-OS-002",
    canonical_question: "What is the difference between Central Government portals (.gov.in) and state single window clearance portals?",
    short_answer: "Central Government portals (.gov.in) administer nation-wide policies, central sector schemes, and federal clearances, whereas State Single Window portals handle state-level industrial approvals, land allotments, utility connections, and local factory inspections.",
    detailed_answer: "Under the constitutional division of legislative powers (Union List vs State List / Concurrent List): 1) Central Portals: Operated by federal ministries (e.g., DPIIT, MoEFCC's PARIVESH, Ministry of Corporate Affairs' MCA21) granting PAN/TAN, company incorporation, central environmental clearances, and foreign direct investment (FDI) approvals; 2) State Single Window Clearances (SWCS): Operated by state investment promotion bureaus (e.g., MAITRI in Maharashtra, Nivesh Mitra in Uttar Pradesh, Guidance in Tamil Nadu) granting state-specific industrial clearances including municipal building plan approvals, State Pollution Control Board Consent to Establish/Operate (CTE/CTO), electricity load sanction, factory licenses, and fire NOCs.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "केंद्रीय पोर्टल (.gov.in) राष्ट्रीय नीतियों, निगमन और केंद्रीय पर्यावरण मंजूरियों का संचालन करते हैं, जबकि राज्य सिंगल विंडो पोर्टल भूमि आवंटन, बिजली कनेक्शन, अग्निशमन एनओसी और स्थानीय फैक्ट्री लाइसेंस जारी करते हैं।",
        detailed_answer: "संवैधानिक शक्तियों के तहत कंपनी निगमन (MCA21) और केंद्रीय पर्यावरण मंजूरी (PARIVESH) केंद्र सरकार के पोर्टल संभालते हैं। इसके विपरीत औद्योगिक भूमि, जल आपूर्ति, प्रदूषण नियंत्रण बोर्ड की मंजूरी और स्थानीय श्रम पंजीकरण राज्य के सिंगल विंडो सिस्टम (जैसे उत्तर प्रदेश में निवेश मित्र) द्वारा दिए जाते हैं।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "Central portals federal approvals (MCA, Income Tax, central pollution) manage karte hain, jabki State single window portals land allocation, power connection, state pollution CTE/CTO aur local factory licenses handle karte hain.",
        detailed_answer: "Union List subjects Central portals handle karte hain jaise Corporate Affairs aur Foreign Investment. State portals (jaise Nivesh Mitra, MAITRI) ground implementation clearances dete hain jaise industrial plot allotment, fire NOC aur state commercial taxes.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "Central portals manage federal approvals while State Single Windows administer municipal, pollution, and utility sanctions.",
        citation_source: "DPIIT Business Reforms Action Plan (BRAP) & Single Window Framework",
        source_url: "https://dpiit.gov.in/"
      }
    ],
    official_source_urls: [
      "https://dpiit.gov.in/",
      "https://www.nsws.gov.in/"
    ],
    source_title: "Business Reforms Action Plan (BRAP) & Single Window Architecture Guidelines",
    source_publisher: "Department for Promotion of Industry and Internal Trade (DPIIT)",
    evidence_type: "OFFICIAL_GOV_NOTIFICATION",
    effective_date: "2024-01-01",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "National Single Window System (NSWS) serves as the digital bridge integrating both central and state clearances.",
    conflicting_evidence: null,
    next_review_due: "2026-12-31"
  },
  {
    question_id: "Q-OS-003",
    canonical_question: "What is JanSamarth portal and which government loan schemes can be applied through it?",
    short_answer: "JanSamarth (jansamarth.in) is India's unified digital credit portal linking lenders with borrowers to disburse government-subsidized loans across 13+ credit schemes under 4 major loan categories: Education, Agri Infrastructure, Business Activity, and Livelihood.",
    detailed_answer: "Launched by the Prime Minister in June 2022 and managed under the Department of Financial Services (DFS), Ministry of Finance, JanSamarth connects beneficiaries directly with more than 125 lending institutions (Public Sector Banks, Private Banks, Regional Rural Banks, and NBFCs). Major schemes hosted include: 1) Business Loans: Pradhan Mantri Mudra Yojana (PMMY), Prime Minister's Employment Generation Programme (PMEGP), Stand-Up India, and PM SVANidhi; 2) Education Loans: Central Sector Interest Subsidy (CSIS) and Padho Pardesh; 3) Agricultural Infrastructure: Agri Clinic & Agri Business Centres (ACABC) and Agriculture Infrastructure Fund (AIF); 4) Livelihood: Deendayal Antyodaya Yojana - NRLM.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "जनसमर्थ (jansamarth.in) भारत का एकीकृत क्रेडिट पोर्टल है, जो 13 से अधिक सरकारी ऋण योजनाओं (शिक्षा, कृषि बुनियादी ढांचा, व्यवसाय और आजीविका) के तहत बैंकों से सब्सिडी-युक्त ऋण उपलब्ध कराता है।",
        detailed_answer: "वित्तीय सेवा विभाग (DFS) के अंतर्गत जनसमर्थ 125 से अधिक बैंकों को जोड़ता है। इस पर मुद्रा ऋण (PMMY), पीएमईजीपी (PMEGP), स्टैंड-अप इंडिया, पीएम स्वनिधि (PM SVANidhi) और केंद्रीय क्षेत्र ब्याज सब्सिडी (CSIS) जैसे प्रमुख ऋणों के लिए डिजिटल आवेदन और सैद्धांतिक मंजूरी प्राप्त की जा सकती है।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "JanSamarth (jansamarth.in) Government of India ka official credit portal hai jahan Mudra, PMEGP, Stand-Up India aur education loans ke liye 125+ banks se direct apply kiya ja sakta hai.",
        detailed_answer: "June 2022 me launch hua JanSamarth portal DFS ke under operate hota hai. Isme 4 categories (Business, Education, Agri Infra, Livelihood) ke 13+ credit-linked schemes hain jahan digital In-Principle Sanction Letter milta hai.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "JanSamarth integrates 13 credit-linked government subsidy schemes across 125+ lenders.",
        citation_source: "Department of Financial Services (DFS) JanSamarth Architecture & Press Release",
        source_url: "https://www.jansamarth.in/"
      }
    ],
    official_source_urls: [
      "https://www.jansamarth.in/",
      "https://financialservices.gov.in/"
    ],
    source_title: "JanSamarth National Portal for Credit-Linked Government Schemes",
    source_publisher: "Department of Financial Services, Ministry of Finance",
    evidence_type: "OFFICIAL_DEPARTMENT_PORTAL",
    effective_date: "2022-06-06",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Official domain is jansamarth.in; beware of phishing domains requesting upfront processing charges.",
    conflicting_evidence: null,
    next_review_due: "2026-12-31"
  },
  {
    question_id: "Q-OS-004",
    canonical_question: "How does the 'Know Your Approvals' (KYA) module on National Single Window System (NSWS) identify required central and state business licenses?",
    short_answer: "The 'Know Your Approvals' (KYA) service on NSWS is an automated diagnostic questionnaire that evaluates an enterprise's industry sector, business activity, location, and investment size to output a complete, personalized list of mandatory central and state licenses.",
    detailed_answer: "Developed under DPIIT and Invest India, the KYA service on nsws.gov.in guides entrepreneurs through an intelligent questionnaire covering: 1) Industry Sector and 3-digit NIC (National Industrial Classification) Code; 2) Proposed Location (State, District, Urban/Rural/Industrial Park); 3) Proposed Capital Investment and Annual Turnover; 4) Number of Employees and Hazardous Substance Usage; 5) Building and Land Construction Requirements. Upon completion, KYA dynamically generates a comprehensive clearance checklist across central ministries (e.g., PESO, FSSAI, MoEFCC) and state departments (e.g., Factory Inspectorate, State Pollution Board, Labour Registration), detailing estimated approval timelines, fees, and application links.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "राष्ट्रीय सिंगल विंडो सिस्टम (NSWS) पर 'नो योर अप्रूवल्स' (KYA) मॉड्यूल एक स्वचालित प्रश्नावली के माध्यम से उद्यम के उद्योग, स्थान और निवेश आकार का मूल्यांकन करके सभी आवश्यक केंद्रीय और राज्य लाइसेंसों की सूची तैयार करता है।",
        detailed_answer: "डीपीआईआईटी के KYA टूल में निवेशक अपने उद्योग का प्रकार, राज्य, निवेश राशि और कर्मचारियों की संख्या दर्ज करते हैं। सिस्टम तुरंत आवश्यक सभी मंजूरियों (जैसे प्रदूषण बोर्ड, अग्नि शमन एनओसी, एफएसएसएआई, फैक्ट्री लाइसेंस) की सूची, अनुमानित शुल्क और समय-सीमा प्रदर्शित करता है।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "NSWS par 'Know Your Approvals' (KYA) tool ek diagnostic questionnaire hai jo business activity, sector aur investment amount ke hisaab se mandatory central aur state licenses ki tailored list deta hai.",
        detailed_answer: "KYA service me industry type, NIC code aur factory location daalne par automated clearance checklist generate hoti hai, jisme central ministries (FSSAI, PESO) aur state boards ke clearances ki fees aur timelines clear dikhti hain.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "KYA diagnostic service identifies mandatory central and state clearances dynamically based on business profile.",
        citation_source: "NSWS User Guide & DPIIT Single Window Architecture",
        source_url: "https://www.nsws.gov.in/"
      }
    ],
    official_source_urls: [
      "https://www.nsws.gov.in/",
      "https://dpiit.gov.in/"
    ],
    source_title: "National Single Window System (NSWS) KYA User Guide",
    source_publisher: "Department for Promotion of Industry and Internal Trade (DPIIT) & Invest India",
    evidence_type: "OFFICIAL_DEPARTMENT_PORTAL",
    effective_date: "2021-09-22",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Entrepreneurs can use KYA freely without creating an account or logging in.",
    conflicting_evidence: null,
    next_review_due: "2026-12-31"
  },
  {
    question_id: "Q-OS-005",
    canonical_question: "Can business documents uploaded into the NSWS Document Repository be reused across multiple ministry clearance applications?",
    short_answer: "Yes, the National Single Window System (NSWS) features a centralized digital Document Repository that allows businesses to upload statutory documents once and reuse them across multiple central and state clearance applications.",
    detailed_answer: "Under the Ease of Doing Business framework, NSWS eliminates repetitive document submissions. Once an investor uploads foundational corporate records into their secure NSWS Document Repository—such as Memorandum of Association (MOA), Articles of Association (AOA), Board Resolutions, PAN, GSTIN, audited financial balance sheets, and land possession deeds—these digital assets can be mapped and attached to multiple clearance applications across different ministries (e.g., Ministry of Environment, Ministry of Commerce, State Single Window) with a single click, eliminating duplicate uploading and redundant document verifications.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "हाँ, राष्ट्रीय सिंगल विंडो सिस्टम (NSWS) में एक केंद्रीकृत दस्तावेज़ भंडार (Document Repository) है, जिससे एक बार अपलोड किए गए दस्तावेज़ों को कई मंत्रालयों और राज्य विभागों की मंजूरियों में पुनः उपयोग किया जा सकता है।",
        detailed_answer: "NSWS की यह सुविधा व्यवसायों को बार-बार वही कागजात जमा करने से बचाती है। पैन, जीएसटी, एमओए, ऑडिटेड बैलेंस शीट और भूमि विलेख जैसे आवश्यक दस्तावेज रिपोजिटरी में सुरक्षित रहते हैं और विभिन्न विभागीय आवेदनों के साथ सीधे अटैच किए जा सकते हैं।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "Haan, NSWS Document Repository me upload kiye gaye company documents (PAN, GST, MOA, Land deeds) multiple central aur state clearance forms me direct reuse ho sakte hain.",
        detailed_answer: "Ease of Doing Business initiative ke under NSWS single-upload facility deta hai. Ek baar verify hone ke baad wahi documents different ministries ke licensing portals par autofill aur attach ho jaate hain.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "NSWS Document Repository enables single upload and multi-department reuse of common enterprise documents.",
        citation_source: "NSWS Standard Operating Procedures & DPIIT Circular on Common Document Repository",
        source_url: "https://www.nsws.gov.in/"
      }
    ],
    official_source_urls: [
      "https://www.nsws.gov.in/",
      "https://dpiit.gov.in/"
    ],
    source_title: "NSWS Common Application Form & Document Repository Functional Specifications",
    source_publisher: "DPIIT & Invest India",
    evidence_type: "OFFICIAL_DEPARTMENT_PORTAL",
    effective_date: "2021-09-22",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Ensures significant administrative time savings during multi-license greenfield setups.",
    conflicting_evidence: null,
    next_review_due: "2026-12-31"
  },
  {
    question_id: "Q-OS-006",
    canonical_question: "Does an investor need to register separately on state single window portals if applying for state approvals through NSWS?",
    short_answer: "No, for states integrated with NSWS, an investor does not need to register separately because NSWS provides single sign-on (SSO) and bi-directional API integration with participating state single window systems.",
    detailed_answer: "The National Single Window System (NSWS) was architected to eliminate multiple credentials. For the 30+ states and Union Territories currently onboarded, NSWS shares single sign-on (SSO) authentication and investor profile data via secure API bridges. When an investor fills out the Common Application Form (CAF) on NSWS and initiates a state-level clearance, the application payload and accompanying documents are securely pushed into the state's internal portal (e.g., Nivesh Mitra, MAITRI, Guidance). The investor receives status tracking and final downloadable permits directly within their unified NSWS dashboard without needing a separate state login.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "नहीं, NSWS से जुड़े राज्यों के लिए निवेशकों को अलग से पंजीकरण करने की आवश्यकता नहीं है, क्योंकि NSWS सिंगल साइन-ऑन (SSO) और राज्य पोर्टलों के साथ सीधे एपीआई एकीकरण की सुविधा देता है।",
        detailed_answer: "30 से अधिक राज्यों और केंद्र शासित प्रदेशों के सिंगल विंडो पोर्टल अब NSWS से सीधे जुड़े हुए हैं। निवेशक NSWS के साझा आवेदन पत्र (CAF) के माध्यम से राज्य की मंजूरियों के लिए आवेदन करते हैं, और सारा डेटा स्वतः राज्य प्रणाली में स्थानांतरित हो जाता है।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "Nahi, integrated states ke liye separate registration nahi chahiye kyunki NSWS Single Sign-On (SSO) aur API integration ke through data directly state portal ko pass kar deta hai.",
        detailed_answer: "NSWS dashboard se hi investor state approvals ke liye apply kar sakta hai. System Common Application Form (CAF) ke through state systems me request submit karta hai aur status NSWS dashboard par track hota hai.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "NSWS provides single sign-on integration with state single window portals eliminating duplicate registrations.",
        citation_source: "DPIIT Review of State Single Window Integration with NSWS",
        source_url: "https://www.nsws.gov.in/"
      }
    ],
    official_source_urls: [
      "https://www.nsws.gov.in/",
      "https://dpiit.gov.in/"
    ],
    source_title: "Integration Architecture of National Single Window System with State Single Windows",
    source_publisher: "DPIIT & Invest India",
    evidence_type: "OFFICIAL_GOV_NOTIFICATION",
    effective_date: "2023-01-01",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "A few states maintain parallel standalone legacy forms for specialized local municipal clearances.",
    conflicting_evidence: null,
    next_review_due: "2026-12-31"
  },
  {
    question_id: "Q-OS-007",
    canonical_question: "Why is official Udyam Registration completely free of cost and how can MSMEs avoid fraudulent third-party charging websites?",
    short_answer: "Official Udyam Registration (udyamregistration.gov.in) is statutorily 100% free of cost with zero government fees; MSMEs can avoid fraud by checking that the website strictly ends with .gov.in and never paying private agency fees.",
    detailed_answer: "Under Ministry of MSME Notification S.O. 2119(E) dated June 26, 2020, registering a Micro, Small, or Medium Enterprise on the official Udyam portal is completely paperless and free of cost. The government does not charge any processing fee, stamp duty, or facilitation charge. Fraudulent third-party portals operating under domains like udyamregister.org, udyam-portal.com, or msme-certificate.in trick business owners by charging between ₹500 and ₹3,500 under the pretext of 'consulting fees'. MSMEs should register exclusively at udyamregistration.gov.in using Aadhaar, PAN, and GSTIN without paying any money.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "आधिकारिक उद्यम पंजीकरण (udyamregistration.gov.in) सरकारी नियमों के तहत पूरी तरह निःशुल्क है। एमएसएमई को यह ध्यान रखना चाहिए कि वेबसाइट .gov.in पर ही समाप्त हो और किसी भी निजी एजेंट को शुल्क न दें।",
        detailed_answer: "एमएसएमई मंत्रालय की अधिसूचना के अनुसार उद्यम पंजीकरण पूरी तरह मुफ्त और पेपरलेस है। .org या .com जैसी निजी वेबसाइटें 'फाइलिंग शुल्क' के नाम पर ₹500 से ₹3,500 वसूलती हैं जो कि पूरी तरह अनधिकृत हैं। नागरिकों को केवल आधिकारिक सरकारी पोर्टल पर आधार और पैन से पंजीकरण करना चाहिए।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "Official Udyam Registration (udyamregistration.gov.in) 100% free hai. Private websites jo ₹500 se ₹3,000 charge karti hain unse bachein aur strictly .gov.in domain use karein.",
        detailed_answer: "Government of India Udyam certificate ke liye zero fee leti hai. Agar koi website registration fee maang rahi hai to woh private third-party agency hai. Directly udyamregistration.gov.in par jakar Aadhaar OTP se free me register karein.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "Udyam Registration is 100% free of charge with zero government fees on udyamregistration.gov.in.",
        citation_source: "Ministry of MSME Notification S.O. 2119(E) & Public Advisory on Fake MSME Websites",
        source_url: "https://udyamregistration.gov.in/"
      }
    ],
    official_source_urls: [
      "https://udyamregistration.gov.in/",
      "https://msme.gov.in/"
    ],
    source_title: "Ministry of MSME Advisory on Free Official Udyam Registration & Phishing Prevention",
    source_publisher: "Ministry of Micro, Small and Medium Enterprises",
    evidence_type: "PRIMARY_STATUTORY_RULE",
    effective_date: "2020-06-26",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Statutory caution notices are permanently pinned on msme.gov.in against impersonating intermediaries.",
    conflicting_evidence: null,
    next_review_due: "2026-12-31"
  },
  {
    question_id: "Q-OS-008",
    canonical_question: "How does the National Portal of India (india.gov.in) structure citizen service directories across central ministries and states?",
    short_answer: "The National Portal of India (india.gov.in) organizes citizen services through a centralized metadata taxonomy structured by life stages, user categories, sector themes, and state-wise e-governance service directories.",
    detailed_answer: "Maintained by the National Informatics Centre (NIC) under MeitY, india.gov.in serves as the apex digital single window to the Government of India. The platform structures public services using: 1) Services Directory: Cataloging thousands of online citizen services categorized by function (Certificates, Licences, Bill Payments, Land Records, Pensions); 2) My Government Section: Providing constitutional information, Acts, Rules, Schemes, and directory listings of all Union Ministries and State Departments; 3) Sector Portals: Dedicated focal points for Agriculture, Healthcare, Education, and Commerce; 4) State Portals Linkage: Mapping state-specific administrative portals and district administration websites across India.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "भारत का राष्ट्रीय पोर्टल (india.gov.in) नागरिक सेवाओं को जीवन के चरणों, उपयोगकर्ता श्रेणियों, विषयगत क्षेत्रों और राज्य-वार ऑनलाइन सेवा निर्देशिकाओं में व्यवस्थित करता है।",
        detailed_answer: "एनआईसी द्वारा संचालित यह पोर्टल देश भर की सरकारी सेवाओं का मुख्य प्रवेश द्वार है। इसमें जन्म प्रमाण पत्र, भूमि रिकॉर्ड, पेंशन और ड्राइविंग लाइसेंस जैसी सेवाओं को विषय और राज्य के अनुसार वर्गीकृत किया गया है, साथ ही सभी मंत्रालयों के संपर्क और अधिनियम उपलब्ध कराए गए हैं।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "National Portal of India (india.gov.in) citizen services ko category, sector (Education, Health, Agriculture) aur State-wise service directories me structured format me organize karta hai.",
        detailed_answer: "NIC dwara managed india.gov.in portal central aur state government services ka central hub hai. Yahan online certificates, land records, electricity bill payment aur ministry schemes ki authenticated links milti hain.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "india.gov.in organizes services across ministries, states, and citizen life-stage categories.",
        citation_source: "National Portal of India Guidelines & NIC Documentation",
        source_url: "https://www.india.gov.in/"
      }
    ],
    official_source_urls: [
      "https://www.india.gov.in/",
      "https://www.nic.in/"
    ],
    source_title: "National Portal of India Architecture & Citizen Service Taxonomy",
    source_publisher: "National Informatics Centre (NIC) & Ministry of Electronics and IT",
    evidence_type: "OFFICIAL_DEPARTMENT_PORTAL",
    effective_date: "2024-01-01",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Awarded Web Ratna for outstanding public e-governance accessibility standards.",
    conflicting_evidence: null,
    next_review_due: "2026-12-31"
  },
  {
    question_id: "Q-OS-009",
    canonical_question: "How can data scientists and researchers access open government datasets and APIs on Open Government Data (data.gov.in)?",
    short_answer: "Data scientists and researchers can freely access open datasets and RESTful APIs on data.gov.in by registering an open account, generating an API key, and consuming data in open formats like JSON, XML, and CSV.",
    detailed_answer: "The Open Government Data (OGD) Platform India (data.gov.in), developed under the National Data Sharing and Accessibility Policy (NDSAP) by NIC and MeitY, publishes proactive public datasets from central and state ministries. Access workflows include: 1) Catalog Browsing: Downloading published datasets in open machine-readable formats (CSV, JSON, XML, XLS, ODS); 2) API Integration: Registered developers can generate a unique API access key from their dashboard to query live datasets programmatically with rate limits; 3) Visualizations and Communities: Accessing community-contributed dashboards, data stories, and analytical models; 4) Dataset Requests: Submitting formal public suggestions for unreleased datasets under NDSAP provisions.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "डेटा वैज्ञानिक और शोधकर्ता data.gov.in पर निःशुल्क खाता बनाकर, एपीआई कुंजी प्राप्त करके सीएसवी (CSV), जेसन (JSON) और एक्सएमएल (XML) जैसे खुले प्रारूपों में सरकारी डेटासेट डाउनलोड कर सकते हैं।",
        detailed_answer: "राष्ट्रीय डेटा शेयरिंग नीति (NDSAP) के तहत संचालित OGD प्लेटफॉर्म विभिन्न मंत्रालयों के सार्वजनिक डेटा को साझा करता है। उपयोगकर्ता सीधे डेटा फाइलें डाउनलोड कर सकते हैं या शोध और अनुप्रयोग विकास के लिए लाइव RESTful APIs का उपयोग कर सकते हैं।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "Data scientists data.gov.in par free account register karke API key generate kar sakte hain aur CSV, JSON ya REST APIs ke through government datasets consume kar sakte hain.",
        detailed_answer: "NDSAP policy ke under OGD platform India me central aur state departments ka open data provide hota hai. Researchers open formats (CSV, JSON, XML) me machine-readable data download karke analytics aur research kar sakte hain.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "data.gov.in provides machine-readable datasets and developer APIs under the National Data Sharing and Accessibility Policy (NDSAP).",
        citation_source: "National Data Sharing and Accessibility Policy (NDSAP) & OGD Platform Guidelines",
        source_url: "https://data.gov.in/"
      }
    ],
    official_source_urls: [
      "https://data.gov.in/",
      "https://www.meity.gov.in/"
    ],
    source_title: "Open Government Data (OGD) Platform India Developer & API Guidelines",
    source_publisher: "National Informatics Centre (NIC) & MeitY",
    evidence_type: "OFFICIAL_DEPARTMENT_PORTAL",
    effective_date: "2012-03-17",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Subject to Government Open Data License - India (GODL).",
    conflicting_evidence: null,
    next_review_due: "2026-12-31"
  },
  {
    question_id: "Q-OS-010",
    canonical_question: "Why do authentic Indian government websites strictly end with .gov.in or .nic.in domain extensions and how to detect imposters?",
    short_answer: "Authentic Indian government websites strictly end with '.gov.in' or '.nic.in' because these top-level domain extensions are legally restricted and allocated exclusively to sovereign public entities by the National Informatics Centre (NIC).",
    detailed_answer: "Under the Guidelines for Indian Government Websites (GIGW) and national cybersecurity protocols: 1) Domain Restrictions: Only verified constitutional bodies, Union Ministries, State Departments, District Administrations, and CPSEs can acquire '.gov.in' or '.nic.in' domain names, managed exclusively by the Government of India Domain Registrar at NIC; 2) Detecting Imposters: Private entities cannot register these extensions and often register lookalike domains ending in '.com', '.org', '.in', '.co.in', or '.online' (e.g., pmkisan-status.in or mudraloan.org). Any site requesting citizen data, banking PINs, or processing fees on non-.gov.in/.nic.in domains is an unauthorized third party.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "प्रामाणिक भारतीय सरकारी वेबसाइटें अनिवार्य रूप से '.gov.in' या '.nic.in' पर समाप्त होती हैं क्योंकि ये डोमेन केवल एनआईसी (NIC) द्वारा सत्यापित सरकारी संस्थाओं को ही आवंटित किए जाते हैं।",
        detailed_answer: "भारत सरकार की वेबसाइटों के दिशा-निर्देशों (GIGW) के तहत कोई भी निजी व्यक्ति .gov.in डोमेन नहीं खरीद सकता। फर्जी साइटें अक्सर .org, .com, या .in का इस्तेमाल करती हैं। यदि कोई पोर्टल सरकारी योजना के नाम पर गैर-.gov.in पते पर शुल्क मांगता है, तो वह फर्जी है।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "Real Indian government websites strictly .gov.in ya .nic.in par end hoti hain kyunki NIC yeh domains sirf official constitutional bodies aur ministries ko allot karta hai.",
        detailed_answer: "Private agencies .gov.in domain nahi le sakti. Isliye scammers lookalike domains (.org, .com, .info) banakar fake schemes promote karte hain. Citizens ko URL me domain extension check karke fraud detect karna chahiye.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "Only verified sovereign government bodies can register .gov.in and .nic.in domains under NIC registrar rules.",
        citation_source: "Guidelines for Indian Government Websites (GIGW 3.0) & NIC Domain Registrar Policy",
        source_url: "https://guidelines.gov.in/"
      }
    ],
    official_source_urls: [
      "https://guidelines.gov.in/",
      "https://registry.gov.in/",
      "https://www.nic.in/"
    ],
    source_title: "Guidelines for Indian Government Websites (GIGW 3.0) & Government Domain Allocation Policy",
    source_publisher: "National Informatics Centre (NIC) & MeitY",
    evidence_type: "PRIMARY_STATUTORY_RULE",
    effective_date: "2023-02-01",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "GIGW 3.0 mandates standard security audit certification by CERT-In empaneled auditors.",
    conflicting_evidence: null,
    next_review_due: "2026-12-31"
  },
  {
    question_id: "Q-OS-011",
    canonical_question: "What is the digital In-Principle Sanction Letter generated by JanSamarth and how long is it valid for bank loan processing?",
    short_answer: "The digital In-Principle Sanction Letter generated by JanSamarth is an automated preliminary loan eligibility approval issued by a chosen lender, typically valid for 30 calendar days for physical document verification and final loan disbursement.",
    detailed_answer: "When an applicant completes their digital profile and credit assessment on jansamarth.in, the system evaluates credit bureau scores, demographic rules, and scheme subsidy criteria. If successful, the platform generates a digital 'In-Principle Sanction Letter' from the preferred lending institution. Key operational attributes include: 1) It serves as conditional approval confirming eligibility under the scheme's subsidy guidelines; 2) It is typically valid for 30 calendar days from issuance; 3) The applicant presents this digital letter along with original KYC, project reports, and premises documentation at the assigned bank branch to complete underwriting and execute loan agreements.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "जनसमर्थ पोर्टल द्वारा जारी डिजिटल सैद्धांतिक स्वीकृति पत्र (In-Principle Sanction Letter) बैंक द्वारा दी गई प्रारंभिक ऋण पात्रता मंजूरी है, जो सामान्यतः अंतिम सत्यापन के लिए 30 दिनों तक वैध रहती है।",
        detailed_answer: "जनसमर्थ पर आवेदन पूरा करने पर चयनित बैंक डिजिटल स्वीकृति पत्र जारी करता है। यह पत्र पुष्टि करता है कि आवेदक सब्सिडी योजना के मानदंडों को पूरा करता है। 30 दिनों के भीतर बैंक शाखा में मूल दस्तावेज और परियोजना रिपोर्ट जमा करके अंतिम ऋण वितरण कराया जाता है।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "JanSamarth par generate hone wala In-Principle Sanction Letter ek digital preliminary loan approval hai jo 30 calendar days tak bank branch me document verification ke liye valid hota hai.",
        detailed_answer: "Jab applicant digital criteria pass karta hai to system selected bank ka In-Principle Sanction Letter issue karta hai. Borrower ko 30 din ke andar designated bank branch jakar original KYC aur project report dekar final disbursement leni hoti hai.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "JanSamarth generates digital In-Principle Sanction Letters valid for 30 days for branch verification.",
        citation_source: "JanSamarth Operational Guidelines & Department of Financial Services SOP",
        source_url: "https://www.jansamarth.in/"
      }
    ],
    official_source_urls: [
      "https://www.jansamarth.in/",
      "https://financialservices.gov.in/"
    ],
    source_title: "JanSamarth Standard Operating Procedure for Credit Processing & Sanction Letters",
    source_publisher: "Department of Financial Services, Ministry of Finance",
    evidence_type: "OFFICIAL_DEPARTMENT_PORTAL",
    effective_date: "2022-06-06",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Letter does not constitute unconditional loan disbursement; final sanction is contingent on physical branch verification.",
    conflicting_evidence: null,
    next_review_due: "2026-12-31"
  }
];
