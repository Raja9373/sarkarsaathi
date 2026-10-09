// Category 3: Subsidies & Benefits (15 Answers: Q-SB-001 to Q-SB-015)

export const cat3Answers = [
  {
    question_id: "Q-SB-001",
    canonical_question: "How much subsidy is provided for rooftop solar under PM Surya Ghar Muft Bijli Yojana?",
    short_answer: "Under PM Surya Ghar Muft Bijli Yojana, residential households receive ₹30,000 for 1 kW, ₹60,000 for 2 kW, and a maximum capped subsidy of ₹78,000 for systems of 3 kW capacity and above.",
    detailed_answer: "Launched in February 2024, the PM Surya Ghar: Muft Bijli Yojana provides Central Financial Assistance (CFA) directly credited via DBT to residential consumer bank accounts: (1) 1 kW capacity system: ₹30,000 fixed subsidy; (2) 2 kW capacity system: ₹60,000 fixed subsidy (₹30,000 per kW); (3) 3 kW capacity system and above: ₹78,000 fixed subsidy (₹30,000/kW for first 2 kW plus ₹18,000 for the 3rd kW). Systems exceeding 3 kW capacity remain capped at the maximum ₹78,000 subsidy. The scheme aims to generate up to 300 units of free electricity per month for 1 crore households.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "पीएम सूर्य घर मुफ्त बिजली योजना के तहत 1 kW पर ₹30,000, 2 kW पर ₹60,000 और 3 kW या उससे अधिक के सिस्टम पर अधिकतम ₹78,000 की सब्सिडी मिलती है।",
        detailed_answer: "पीएम सूर्य घर योजना में आवासीय घरों के लिए छत पर सोलर लगाने हेतु केंद्रीय वित्तीय सहायता दी जाती है: 1 किलोवाट के लिए ₹30,000; 2 किलोवाट के लिए ₹60,000; तथा 3 किलोवाट या इससे बड़े सिस्टम पर अधिकतम ₹78,000 की सब्सिडी तय है। 3 किलोवाट से बड़ा पैनल लगाने पर भी अधिकतम सब्सिडी ₹78,000 ही रहती है।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "PM Surya Ghar me residential solar par 1 kW ke liye ₹30,000, 2 kW ke liye ₹60,000 aur 3 kW+ ke liye maximum ₹78,000 subsidy milti hai.",
        detailed_answer: "Central government DBT se subsidy sidhe bank account me transfer karti hai. 1 kW par ₹30k, 2 kW par ₹60k, aur 3 kW par ₹78k fixed hai. Agar aap 5 kW ya 10 kW ka panel lagwate hain tab bhi maximum subsidy ₹78,000 hi capped rehti hai.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "Residential rooftop solar subsidy is ₹30k for 1kW, ₹60k for 2kW, and capped at ₹78k for 3kW+.",
        citation_source: "Ministry of New and Renewable Energy PM Surya Ghar Operational Guidelines",
        source_url: "https://pmsuryaghar.gov.in/"
      }
    ],
    official_source_urls: [
      "https://pmsuryaghar.gov.in/",
      "https://mnre.gov.in/"
    ],
    source_title: "PM Surya Ghar Muft Bijli Yojana Central Financial Assistance Structure",
    source_publisher: "Ministry of New and Renewable Energy (MNRE)",
    evidence_type: "OFFICIAL_GOV_NOTIFICATION",
    effective_date: "2024-02-13",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Subsidy disbursed within 30 days of DISCOM commissioning and net meter installation.",
    conflicting_evidence: null,
    next_review_due: "2027-03-31"
  },
  {
    question_id: "Q-SB-002",
    canonical_question: "Can commercial buildings or rented shops get PM Surya Ghar solar subsidy?",
    short_answer: "No, PM Surya Ghar subsidy is strictly reserved for residential households with individual electricity connections; commercial establishments, private shops, and industrial units are completely excluded.",
    detailed_answer: "Under the statutory eligibility rules of PM Surya Ghar Muft Bijli Yojana, Central Financial Assistance is restricted exclusively to residential electricity consumers with valid domestic electricity connections (domestic tariff category). Commercial buildings, factories, rented shops, educational institutes, and government buildings are ineligible for capital subsidies under this scheme. However, commercial entities may install rooftop solar under standard open-access or net-metering regulations without central subsidy, or utilize separate commercial solar accelerated depreciation tax benefits under Section 32 of the Income Tax Act.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "नहीं, पीएम सूर्य घर योजना की सब्सिडी केवल आवासीय घरों (घरेलू बिजली कनेक्शन) के लिए है। वाणिज्यिक (कमर्शियल) दुकानों या कारखानों को सब्सिडी नहीं मिलती।",
        detailed_answer: "नियमों के अनुसार, केवल घरेलू बिजली टैरिफ वाले आवासीय उपभोक्ता ही सब्सिडी के पात्र हैं। दुकानें, होटल, मॉल, वाणिज्यिक परिसर और औद्योगिक इकाइयां इस योजना में सब्सिडी की हकदार नहीं हैं, हालांकि वे बिना सरकारी सब्सिडी के सामान्य नेट-मीटरिंग के तहत सोलर पैनल लगवा सकते हैं।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "Nahi, PM Surya Ghar subsidy sirf residential houses (domestic meter) ke liye hai. Commercial shops, factories aur offices isme eligible nahi hain.",
        detailed_answer: "Subsidy lene ke liye electricity bill domestic category ka hona compulsory hai. Commercial units bina subsidy ke rooftop solar install kar sakti hain aur Section 32 ke tehat accelerated depreciation tax benefit claim kar sakti hain.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "PM Surya Ghar subsidy is restricted exclusively to residential category electricity connections.",
        citation_source: "MNRE PM Surya Ghar Operational Manual, Section 3 Eligibility",
        source_url: "https://pmsuryaghar.gov.in/"
      }
    ],
    official_source_urls: [
      "https://pmsuryaghar.gov.in/",
      "https://mnre.gov.in/"
    ],
    source_title: "PM Surya Ghar Eligibility Criteria and Disqualifications",
    source_publisher: "Ministry of New and Renewable Energy",
    evidence_type: "OFFICIAL_GOV_NOTIFICATION",
    effective_date: "2024-02-13",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Electricity consumer account must match residential tariff schedule of respective DISCOM.",
    conflicting_evidence: null,
    next_review_due: "2027-03-31"
  },
  {
    question_id: "Q-SB-003",
    canonical_question: "How to check beneficiary status and eKYC under PM-KISAN Samman Nidhi?",
    short_answer: "Beneficiary status and eKYC can be verified on pmkisan.gov.in under 'Farmers Corner' by entering Registration Number/Aadhaar, and completing eKYC via OTP, biometric CSC, or Face Auth on the PM-KISAN app.",
    detailed_answer: "To verify your PM-KISAN installment and compliance status: (1) Visit the official portal pmkisan.gov.in; (2) In 'Farmers Corner', click on 'Know Your Status' and enter your PM-KISAN Registration Number and captcha; (3) The portal displays whether the three mandatory criteria are satisfied: eKYC Status (Yes/No), Land Seeding (Yes/No), and Aadhaar Bank Account Seeding Status (Yes/No); (4) If eKYC is pending, it can be completed online via OTP on the portal, through the PM-KISAN mobile app using Face Authentication without OTP, or physically at any Common Service Centre (CSC) using biometric thumb verification.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "pmkisan.gov.in पर 'फार्मर्स कॉर्नर' में 'Know Your Status' पर जाकर रजिस्ट्रेशन नंबर से स्टेटस चेक करें। eKYC पोर्टल पर OTP, ऐप पर फेस ऑथेंटिकेशन या CSC पर बायोमेट्रिक से करें।",
        detailed_answer: "पीएम-किसान पोर्टल पर स्टेटस देखने के लिए: (1) pmkisan.gov.in पर जाएं; (2) 'Know Your Status' पर क्लिक करके रजिस्ट्रेशन नंबर डालें; (3) जांचें कि eKYC, Land Seeding और Aadhaar Bank Seeding तीनों 'Yes' हैं या नहीं। यदि eKYC बाकी है, तो आधार से लिंक मोबाइल नंबर के OTP से, मोबाइल ऐप पर चेहरे के स्कैन से या सीएससी सेंटर पर फिंगरप्रिंट लगाकर तुरंत पूरा करें।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "pmkisan.gov.in par 'Know Your Status' me Registration Number dalkar status check karein. eKYC OTP, PM Kisan app Face Auth ya CSC par biometric se complete hoti hai.",
        detailed_answer: "Portal par teen cheezein check karni hoti hain: eKYC Status, Land Seeding, aur Aadhaar Bank Seeding. Teeno 'Yes' hona mandatory hai tabhi ₹2,000 ki installment account me credit hoti hai.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "Mandatory conditions for PM-KISAN payment are completed eKYC, verified land seeding, and Aadhaar bank seeding.",
        citation_source: "Ministry of Agriculture PM-KISAN Standard Operating Procedure",
        source_url: "https://pmkisan.gov.in/"
      }
    ],
    official_source_urls: [
      "https://pmkisan.gov.in/",
      "https://agricoop.nic.in/"
    ],
    source_title: "PM-KISAN Samman Nidhi Portal Beneficiary Navigation Guide",
    source_publisher: "Department of Agriculture and Farmers Welfare",
    evidence_type: "OFFICIAL_DEPARTMENT_PORTAL",
    effective_date: "2019-02-01",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "eKYC is 100% compulsory for installment disbursement.",
    conflicting_evidence: null,
    next_review_due: "2027-03-31"
  },
  {
    question_id: "Q-SB-004",
    canonical_question: "Who is eligible for interest subsidy under Pradhan Mantri Awas Yojana (PMAY) Urban 2.0?",
    short_answer: "Under PMAY-U 2.0, Economically Weaker Section (EWS, income up to ₹3 lakh), Low Income Group (LIG, income up to ₹6 lakh), and Middle Income Group (MIG, income up to ₹9 lakh) families constructing or buying their first pucca house are eligible for interest subsidies.",
    detailed_answer: "Approved in August 2024 by the Union Cabinet for 1 crore urban houses, PMAY-Urban 2.0 provides an Interest Subsidy Scheme (ISS) for home loans up to ₹25 lakh (with property value up to ₹35 lakh): (1) EWS (annual income up to ₹3 lakh), LIG (annual income ₹3-6 lakh), and MIG (annual income ₹6-9 lakh) households are eligible; (2) An interest subsidy of 4.0% per annum is provided on home loan amounts up to ₹8 lakh for a tenure of up to 5 years, delivering an upfront subsidy benefit of up to ₹1.80 lakh via 5-yearly installments; (3) The beneficiary family must not own a pucca house anywhere in India, and female head ownership/co-ownership is mandatory.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "PMAY अर्बन 2.0 में EWS (वार्षिक आय ₹3 लाख तक), LIG (आय ₹6 लाख तक) और MIG (आय ₹9 लाख तक) के वे परिवार पात्र हैं जो देश में अपना पहला पक्का मकान खरीद या बना रहे हैं।",
        detailed_answer: "अगस्त 2024 में मंजूर PMAY-U 2.0 के तहत ₹35 लाख तक के मकान पर ₹25 लाख तक के होम लोन के लिए ब्याज सब्सिडी मिलती है। ₹8 लाख तक के लोन पर 5 वर्षों के लिए 4.0% ब्याज सब्सिडी दी जाती है, जिससे कुल ₹1.80 लाख तक का शुद्ध लाभ 5 किस्तों में मिलता है। लाभार्थी के पास पहले से कोई पक्का मकान नहीं होना चाहिए और मकान में महिला का नाम होना अनिवार्य है।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "PMAY-U 2.0 me EWS (income upto ₹3L), LIG (upto ₹6L) aur MIG (upto ₹9L) families eligible hain jinka pure India me pehle se koi pucca house nahi hai.",
        detailed_answer: "Cabinet ne August 2024 me PMAY-U 2.0 approve kiya hai jisme ₹8 lakh tak ke home loan par 4% annual interest subsidy milti hai (max ₹1.8 lakh subsidy benefit). Female co-ownership mandatory condition hai.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "PMAY-U 2.0 covers EWS (up to ₹3L), LIG (₹3-6L), MIG (₹6-9L) with 4% interest subsidy up to ₹8L loan.",
        citation_source: "Cabinet Approval of PMAY-Urban 2.0 & MoHUA Guidelines August 2024",
        source_url: "https://pmay-urban.gov.in/"
      }
    ],
    official_source_urls: [
      "https://pmay-urban.gov.in/",
      "https://mohua.gov.in/"
    ],
    source_title: "Pradhan Mantri Awas Yojana Urban 2.0 Scheme Guidelines",
    source_publisher: "Ministry of Housing and Urban Affairs",
    evidence_type: "OFFICIAL_GOV_NOTIFICATION",
    effective_date: "2024-09-01",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Replaces earlier CLSS guidelines with streamlined 5-year release structure.",
    conflicting_evidence: null,
    next_review_due: "2027-03-31"
  },
  {
    question_id: "Q-SB-005",
    canonical_question: "What is the rooftop solar subsidy rate for Group Housing Societies (GHS) and Resident Welfare Associations (RWA) under PM Surya Ghar?",
    short_answer: "Group Housing Societies (GHS) and RWAs receive a rooftop solar subsidy of ₹18,000 per kilowatt (kW) for common facilities and EV charging, up to a maximum capacity of 500 kW (up to ₹90 lakh total subsidy).",
    detailed_answer: "Under the PM Surya Ghar: Muft Bijli Yojana guidelines, Group Housing Societies (GHS) and Resident Welfare Associations (RWA) are eligible for Central Financial Assistance to power common utility services (lifts, water pumps, common lighting, and EV charging infrastructure). The subsidy is fixed at ₹18,000 per kW. The maximum capacity eligible for central subsidy is 500 kW per society (inclusive of individual rooftop setups calculated at 3 kW per household). A residential society installing a 500 kW solar plant can receive a direct government subsidy of up to ₹90,00,000 (₹90 lakh), significantly reducing community common maintenance bills.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "हाउसिंग सोसायटियों (GHS/RWA) को कॉमन मीटर और ईवी चार्जिंग के लिए ₹18,000 प्रति किलोवाट की दर से अधिकतम 500 kW तक (अधिकतम ₹90 लाख) सब्सिडी मिलती है।",
        detailed_answer: "पीएम सूर्य घर योजना में अपार्टमेंट और सोसायटियों के कॉमन एरिया (लिफ्ट, पानी की मोटर, स्ट्रीट लाइट) के लिए सोलर लगवाने पर ₹18,000 प्रति kW की सब्सिडी दी जाती है। एक सोसायटी के लिए अधिकतम क्षमता 500 kW तय है, जिससे सोसायटी को अधिकतम ₹90 लाख तक की सरकारी सब्सिडी मिल सकती है।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "Housing Societies aur RWAs ko common facilities ke liye ₹18,000 per kW subsidy milti hai up to 500 kW capacity (max ₹90 lakh subsidy).",
        detailed_answer: "Apartment complexes common meter ke liye PM Surya Ghar portal par apply kar sakte hain. ₹18k/kW ke hisab se 500 kW tak subsidy allow hoti hai jisse community electricity cost drastically reduce ho jati hai.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "GHS/RWA common facility solar subsidy is ₹18,000 per kW up to maximum 500 kW capacity.",
        citation_source: "MNRE PM Surya Ghar Muft Bijli Yojana Guidelines, Section 4.2 Group Housing Societies",
        source_url: "https://pmsuryaghar.gov.in/"
      }
    ],
    official_source_urls: [
      "https://pmsuryaghar.gov.in/",
      "https://mnre.gov.in/"
    ],
    source_title: "PM Surya Ghar Guidelines for Group Housing Societies and RWAs",
    source_publisher: "Ministry of New and Renewable Energy",
    evidence_type: "OFFICIAL_GOV_NOTIFICATION",
    effective_date: "2024-02-13",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Subject to net metering permission from the respective state DISCOM.",
    conflicting_evidence: null,
    next_review_due: "2027-03-31"
  },
  {
    question_id: "Q-SB-006",
    canonical_question: "What are the mandatory DISCOM technical feasibility and net-metering approval steps on pmsuryaghar.gov.in?",
    short_answer: "The process requires: (1) Registering on pmsuryaghar.gov.in with consumer account number; (2) Applying for technical feasibility approval from DISCOM; (3) Installing via registered vendor; (4) Applying for net-metering; (5) Commissioning and inspection for DBT subsidy release.",
    detailed_answer: "To claim PM Surya Ghar subsidy, consumers must strictly adhere to the six-stage national workflow: (1) Portal Registration: Register on pmsuryaghar.gov.in by choosing State, Distribution Company (DISCOM), and entering Electricity Consumer Account Number, mobile, and email; (2) Feasibility Application: Submit rooftop solar application; the local DISCOM reviews distribution transformer load and grants technical feasibility approval; (3) Installation: Procure and install panels through a DISCOM-registered vendor; (4) Work Completion Submission: Vendor and consumer upload plant specifications, module serial numbers, and invoice; (5) Net-Meter Installation: DISCOM inspects the plant, replaces the existing meter with a bidirectional net-meter, and generates the Commissioning Certificate; (6) DBT Disbursement: Consumer uploads bank details and canceled cheque; subsidy is directly credited to bank account within 30 days.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "प्रक्रिया: (1) पोर्टल पर रजिस्ट्रेशन; (2) डिस्कॉम से फिजिबिलिटी अप्रूवल; (3) रजिस्टर्ड वेंडर से इंस्टॉलेशन; (4) नेट-मीटरिंग आवेदन और इंस्पेक्शन; (5) कमीशनिंग सर्टिफिकेट जारी होने पर बैंक खाते में DBT सब्सिडी।",
        detailed_answer: "पीएम सूर्य घर सब्सिडी पाने के चरण: pmsuryaghar.gov.in पर बिजली बिल नंबर से रजिस्टर करें। डिस्कॉम से तकनीकी व्यवहार्यता (feasibility) मंजूरी मिलने के बाद ही रजिस्टर्ड वेंडर से सोलर पैनल लगवाएं। काम पूरा होने पर डिस्कॉम नेट-मीटर लगाएगी और कमीशनिंग सर्टिफिकेट जारी करेगी, जिसके बाद सब्सिडी सीधे बैंक खाते में आएगी।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "Steps: (1) Portal registration with Consumer ID; (2) DISCOM feasibility approval; (3) Registered vendor installation; (4) Net-metering setup; (5) Inspection ke baad direct bank account me DBT subsidy.",
        detailed_answer: "Pehle pmsuryaghar.gov.in par consumer number se apply karna hota hai. DISCOM approval aane ke baad hi registered vendor se kaam karwaya jata hai. Net meter lagte hi commissioning certificate generate hota hai aur subsidy 30 days me credit ho jati hai.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "Six-step digital workflow: Registration, Feasibility, Installation, Net-metering, Commissioning, and DBT payout.",
        citation_source: "National Portal for Rooftop Solar Step-by-Step User Manual",
        source_url: "https://pmsuryaghar.gov.in/"
      }
    ],
    official_source_urls: [
      "https://pmsuryaghar.gov.in/",
      "https://mnre.gov.in/"
    ],
    source_title: "PM Surya Ghar Consumer Application and DISCOM Feasibility Manual",
    source_publisher: "Ministry of New and Renewable Energy",
    evidence_type: "OFFICIAL_DEPARTMENT_PORTAL",
    effective_date: "2024-02-13",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Feasibility approval is time-bound by state electricity regulatory commission norms.",
    conflicting_evidence: null,
    next_review_due: "2027-03-31"
  },
  {
    question_id: "Q-SB-007",
    canonical_question: "Why must rooftop solar systems be installed exclusively through registered DISCOM vendors to qualify for PM Surya Ghar subsidy?",
    short_answer: "Installation through registered vendors is mandatory to ensure technical grid safety, ALMM-compliant domestic solar panels, valid warranties, and authorized digital sign-off on the national portal for subsidy disbursement.",
    detailed_answer: "Under statutory MNRE guidelines, Central Financial Assistance is released exclusively if the rooftop solar plant is executed by an empanelled vendor registered on the national portal with the respective DISCOM. The rationale comprises four statutory controls: (1) Quality & ALMM Compliance: Solar modules must be manufactured domestically and listed on the Approved List of Models and Manufacturers (ALMM) with Bureau of Indian Standards (BIS) certification; (2) Grid Synchronization Safety: Registered vendors ensure inverters meet anti-islanding and grid protection protocols to prevent electrocuting line workers during grid power outages; (3) Comprehensive 5-Year Maintenance: Registered vendors are contractually bound to provide a 5-year comprehensive maintenance warranty; (4) Digital Verification: Only registered vendors have portal credentials to upload serial numbers and trigger commissioning inspections.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "सब्सिडी के लिए रजिस्टर्ड वेंडर अनिवार्य है ताकि ग्रिड सुरक्षा, 'मेड इन इंडिया' (ALMM) पैनल की गुणवत्ता, 5 साल की वारंटी और पोर्टल पर कमीशनिंग की आधिकारिक पुष्टि हो सके।",
        detailed_answer: "सरकार की शर्त है कि सोलर सिस्टम केवल डिस्कॉम-पंजीकृत वेंडर से ही लगवाया जाए। ऐसा इसलिए है क्योंकि: (1) पैनल ALMM सूची के अनुसार भारत में बने होने चाहिए; (2) ग्रिड सुरक्षा के नियम पूरे होने चाहिए ताकि लाइनमैन को करंट न लगे; (3) वेंडर 5 साल तक मुफ्त मेंटेनेंस देने के लिए कानूनी रूप से बाध्य होता है; (4) केवल पंजीकृत वेंडर ही पोर्टल पर काम पूरा होने का सर्टिफिकेट अपलोड कर सकता है।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "Registered vendor se lagwana mandatory hai taaki ALMM approved Indian solar panels, grid safety, 5-year warranty aur portal par digital verification ensure ho sake.",
        detailed_answer: "Market ke unauthorized vendor se khareedne par government subsidy release nahi karti. Registered vendor hone par hi BIS approved panels lagte hain aur DISCOM net-meter inspection approve karti hai.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "Rooftop solar must use ALMM compliant modules installed by registered vendors with 5-year maintenance warranty.",
        citation_source: "MNRE Order on Implementation of ALMM and Empanelled Vendors",
        source_url: "https://pmsuryaghar.gov.in/"
      }
    ],
    official_source_urls: [
      "https://pmsuryaghar.gov.in/",
      "https://mnre.gov.in/"
    ],
    source_title: "Vendor Empanelment and ALMM Compliance Guidelines for PM Surya Ghar",
    source_publisher: "Ministry of New and Renewable Energy",
    evidence_type: "OFFICIAL_GOV_NOTIFICATION",
    effective_date: "2024-02-13",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Unregistered vendor installations cannot be processed for central subsidy.",
    conflicting_evidence: null,
    next_review_due: "2027-03-31"
  },
  {
    question_id: "Q-SB-008",
    canonical_question: "How can a registered farmer resolve the 'Land Seeding: No' status to resume PM-KISAN installment payments?",
    short_answer: "To resolve 'Land Seeding: No', the farmer must submit physical land records (Khatauni/Jamabandi, Aadhaar, and PM-KISAN ID) to the local Patwari, Lekhpal, or Block Agriculture Officer for portal record verification.",
    detailed_answer: "When a beneficiary's PM-KISAN status displays 'Land Seeding: No', installments are halted because state revenue records have not verified lawful land ownership against the applicant's Aadhaar. To correct this: (1) Obtain an updated copy of land ownership records (Khatauni, Jamabandi, or RoR) containing the farmer's name; (2) Take the land document, Aadhaar card copy, bank passbook, and PM-KISAN registration number to the local area Lekhpal/Patwari or the Block Agriculture Office; (3) The revenue officer conducts physical verification and approves the land parcel on the state revenue portal; (4) Once approved, the state portal feeds the verified flag to the central PM-KISAN database, updating the status to 'Land Seeding: Yes' and releasing withheld installments in the subsequent cycle.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "'Land Seeding: No' ठीक करने के लिए किसान को अपनी खतौनी/जमाबंदी, आधार कार्ड और रजिस्ट्रेशन नंबर अपने स्थानीय पटवारी/लेखपाल या कृषि अधिकारी को जमा कर सत्यापन कराना होता है।",
        detailed_answer: "यदि स्टेटस में 'Land Seeding: No' आ रहा है, तो इसका मतलब है कि भू-अभिलेखों में जमीन का सत्यापन नहीं हुआ है। इसे ठीक कराने के लिए किसान को अपनी अद्यतन खतौनी (भूलेख नकल), आधार और बैंक पासबुक लेकर अपने हल्के के लेखपाल/पटवारी या ब्लॉक कृषि कार्यालय जाना होगा। लेखपाल द्वारा पोर्टल पर ऑनलाइन सत्यापन करते ही लैंड सीडिंग 'Yes' हो जाएगी और रुकी हुई किस्तें जारी हो जाएंगी।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "Land Seeding No ko Yes karne ke liye Khatauni/Jamabandi, Aadhaar card aur PM Kisan registration copy local Patwari ya Block Agriculture Office me physical verify karwani hoti hai.",
        detailed_answer: "State revenue portal par land details match hone ke baad revenue officer portal par update karta hai. Verification complete hote hi status 'Yes' ho jata hai aur pending installments release ho jati hain.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "Land seeding resolution requires physical revenue verification by Patwari/Agriculture department.",
        citation_source: "Ministry of Agriculture PM-KISAN Land Seeding Standard Operating Procedure",
        source_url: "https://pmkisan.gov.in/"
      }
    ],
    official_source_urls: [
      "https://pmkisan.gov.in/",
      "https://agricoop.nic.in/"
    ],
    source_title: "PM-KISAN Standard Operating Procedure on Land Record Verification",
    source_publisher: "Department of Agriculture and Farmers Welfare",
    evidence_type: "OFFICIAL_GOV_NOTIFICATION",
    effective_date: "2022-08-15",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Withheld backlog installments are automatically credited once verified.",
    conflicting_evidence: null,
    next_review_due: "2027-03-31"
  },
  {
    question_id: "Q-SB-009",
    canonical_question: "Why must a farmer's bank account be NPCI Aadhaar-seeded to receive PM-KISAN Direct Benefit Transfer (DBT) credits?",
    short_answer: "Government payments are routed via the Aadhaar Payment Bridge System (APBS); if an account is merely linked to Aadhaar but not seeded in the NPCI mapper for DBT, installments bounce and fail to credit.",
    detailed_answer: "Under central DBT mandate, PM-KISAN installments are disbursed using the National Payments Corporation of India (NPCI) Aadhaar Payment Bridge System (APBS) rather than account number/IFSC routing. There is a vital distinction between Aadhaar-linking (submitting Aadhaar for KYC) and Aadhaar-seeding (registering the bank account on the NPCI mapper as the designated recipient account for government DBT benefits). If an account is not seeded, the DBT transaction is rejected with error 'Aadhaar not mapped to NPCI'. Farmers can verify their seeding status on the UIDAI portal, or open a DBT-enabled zero-balance savings account at India Post Payments Bank (IPPB) to establish NPCI seeding instantly.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "सरकारी किस्तें NPCI आधार पेमेंट ब्रिज (APBS) से भेजी जाती हैं। यदि बैंक खाता केवल लिंक है लेकिन NPCI मैपर पर सीड (DBT सक्षम) नहीं है, तो किस्तें खाते में नहीं आती हैं।",
        detailed_answer: "पीएम-किसान का पैसा सीधे बैंक खाते में भेजने के लिए बैंक का NPCI मैपर में आधार से सीड होना अनिवार्य है। बैंक में केवल आधार देना (KYC) काफी नहीं है, बल्कि उस खाते में सरकारी सब्सिडी (DBT) चालू होना जरूरी है। किसान इसे UIDAI वेबसाइट पर 'Bank Seeding Status' में जाकर चेक कर सकते हैं या पोस्ट ऑफिस (IPPB) में खाता खुलवाकर इसे तुरंत चालू करा सकते हैं।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "PM Kisan installments NPCI Aadhaar Payment Bridge (APBS) ke through aati hain. Agar bank account NPCI mapper par DBT ke liye seeded nahi hai to payment bounce ho jati hai.",
        detailed_answer: "Aadhaar linking (KYC) aur Aadhaar seeding (DBT mandate) alag cheezein hain. Farmers bank me jakar 'Aadhaar DBT Mandate Form' submit kar sakte hain ya India Post Payments Bank me account kholkar 48 hours me seeding activate kar sakte hain.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "DBT benefits require active Aadhaar seeding on the NPCI mapper via Aadhaar Payment Bridge System.",
        citation_source: "Cabinet Secretariat DBT Mission & NPCI APBS Guidelines",
        source_url: "https://pmkisan.gov.in/"
      }
    ],
    official_source_urls: [
      "https://pmkisan.gov.in/",
      "https://uidai.gov.in/"
    ],
    source_title: "DBT Mission and NPCI Guidelines on Aadhaar Seeding for PM-KISAN",
    source_publisher: "Direct Benefit Transfer (DBT) Mission, Cabinet Secretariat",
    evidence_type: "OFFICIAL_GOV_NOTIFICATION",
    effective_date: "2022-09-01",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Common cause of payment failures; resolved via IPPB account opening.",
    conflicting_evidence: null,
    next_review_due: "2027-03-31"
  },
  {
    question_id: "Q-SB-010",
    canonical_question: "How can farmers complete biometric eKYC using the PM-KISAN mobile app's facial authentication feature?",
    short_answer: "Farmers can download the official PM-KISAN Mobile App and AadhaarFaceRD App from Google Play Store, log in via registration number, scan their face using the phone camera, and complete eKYC without OTP or fingerprints.",
    detailed_answer: "To eliminate dependency on OTP (when mobile is not linked to Aadhaar) and fingerprint biometric machines at CSCs, the Ministry of Agriculture launched the Face Authentication feature in the official PM-KISAN app: (1) Download 'PM-KISAN Mobile App' and UIDAI's 'AadhaarFaceRD' app from Google Play Store; (2) Log in to the PM-KISAN app using Farmer Registration Number and MPIN/OTP; (3) Navigate to the 'eKYC' section; (4) The app activates the front camera via AadhaarFaceRD to scan the beneficiary's face against UIDAI biometric archives; (5) Upon successful facial match, eKYC status is confirmed instantly on the spot; (6) Farmers can also complete eKYC for up to 100 neighboring farmers using this mobile app.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "किसान 'PM-KISAN मोबाइल ऐप' और 'AadhaarFaceRD ऐप' डाउनलोड करके, कैमरे से चेहरा स्कैन करके बिना किसी ओटीपी या फिंगरप्रिंट मशीन के घर बैठे eKYC पूरी कर सकते हैं।",
        detailed_answer: "फेस ऑथेंटिकेशन से eKYC करने की प्रक्रिया: गूगल प्ले स्टोर से 'PM-KISAN' और UIDAI का 'AadhaarFaceRD' ऐप इंस्टॉल करें। रजिस्ट्रेशन नंबर से लॉग इन करके 'eKYC' विकल्प चुनें। ऐप मोबाइल कैमरे से चेहरे को स्कैन करेगा और आधार डेटा से मिलान होते ही तुरंत eKYC सफलतापूर्वक पूरी हो जाएगी। इसके माध्यम से किसान अपने साथी किसानों की भी eKYC कर सकते हैं।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "Farmers PM-KISAN mobile app aur AadhaarFaceRD app download karke bina OTP ya fingerprint ke mobile camera se face scan karke instant eKYC kar sakte hain.",
        detailed_answer: "Google Play Store se PM-KISAN aur AadhaarFaceRD apps install karein. Registration number se login karke camera ke samne face scan karein, UIDAI biometric match hote hi eKYC status 'Yes' ho jata hai.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "Face Authentication eKYC enabled on PM-KISAN mobile app integrated with UIDAI FaceRD service.",
        citation_source: "Ministry of Agriculture Press Release on PM-KISAN Mobile App Face Authentication",
        source_url: "https://pmkisan.gov.in/"
      }
    ],
    official_source_urls: [
      "https://pmkisan.gov.in/",
      "https://agricoop.nic.in/"
    ],
    source_title: "PM-KISAN Face Authentication Mobile App User Manual",
    source_publisher: "Department of Agriculture and Farmers Welfare",
    evidence_type: "OFFICIAL_GOV_NOTIFICATION",
    effective_date: "2023-06-22",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Solves OTP failure issue for rural elderly beneficiaries.",
    conflicting_evidence: null,
    next_review_due: "2027-03-31"
  },
  {
    question_id: "Q-SB-011",
    canonical_question: "Which categories of landowners, institutional holders, and retired pensioners are strictly excluded from PM-KISAN eligibility?",
    short_answer: "Excluded categories include institutional landholders, constitutional post holders, current/former MPs/MLAs, serving/retired government employees, pensioners receiving ₹10,000+/month, income taxpayers, and registered professionals.",
    detailed_answer: "Paragraph 2 of PM-KISAN scheme operational guidelines defines the exclusion criteria: (1) All Institutional Landholders; (2) Former and present holders of constitutional posts; (3) Former and present Ministers, MPs, MLAs, MLCs, Mayors, and District Panchayat Chairpersons; (4) All serving or retired officers and employees of Central/State Government Ministries, Departments, PSEs, and Autonomous Bodies (excluding Class IV/Multi-Tasking/Group D staff); (5) All superannuated/retired pensioners whose monthly pension is ₹10,000 or more (excluding Group D staff); (6) All persons who paid Income Tax in the last assessment year; (7) Professionals like Doctors, Engineers, Lawyers, Chartered Accountants, and Architects registered with professional bodies and undertaking active practice.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "अपात्र श्रेणियों में संस्थागत जमीन मालिक, सांसद/विधायक, सेवारत/सेवानिवृत्त सरकारी कर्मचारी, ₹10,000 से अधिक मासिक पेंशन पाने वाले, आयकर दाता और डॉक्टर, वकील, सीए शामिल हैं।",
        detailed_answer: "PM-KISAN से बाहर रखे गए लोग: (1) संस्थागत भूधारक; (2) वर्तमान या पूर्व सांसद, विधायक और मंत्री; (3) केंद्र और राज्य सरकार के कर्मचारी (ग्रुप डी/सफाईकर्मी को छोड़कर); (4) ₹10,000 या अधिक मासिक पेंशन पाने वाले सेवानिवृत्त कर्मी; (5) पिछले वर्ष आयकर भरने वाले किसान; (6) डॉक्टर, वकील, सीए और इंजीनियर जैसे पेशेवर।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "PM Kisan me institutional landholders, MPs/MLAs, government employees, ₹10,000+ monthly pensioners, income tax pay karne wale aur doctors/engineers/CAs excluded hain.",
        detailed_answer: "Agar kisi family member ne last assessment year me Income Tax pay kiya hai ya monthly pension ₹10,000 se zyada hai to PM-KISAN ke ₹6,000 annual installment ke liye ineligible hote hain.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "Exclusion criteria bar constitutional post holders, government staff, ₹10k+ pensioners, and income taxpayers from PM-KISAN.",
        citation_source: "PM-KISAN Scheme Guidelines, Section 2 Beneficiary Exclusions",
        source_url: "https://pmkisan.gov.in/"
      }
    ],
    official_source_urls: [
      "https://pmkisan.gov.in/",
      "https://agricoop.nic.in/"
    ],
    source_title: "PM-KISAN Beneficiary Ineligibility and Exclusion Framework",
    source_publisher: "Department of Agriculture and Farmers Welfare",
    evidence_type: "PRIMARY_STATUTORY_RULE",
    effective_date: "2019-02-01",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Class IV / Group D / MTS employees are explicitly exempt from exclusion.",
    conflicting_evidence: null,
    next_review_due: "2027-03-31"
  },
  {
    question_id: "Q-SB-012",
    canonical_question: "What are the household income criteria and interest subsidy terms under Pradhan Mantri Awas Yojana Urban 2.0 (PMAY-U 2.0)?",
    short_answer: "PMAY-U 2.0 categorizes households into EWS (up to ₹3L), LIG (₹3-6L), and MIG (₹6-9L), offering an interest subsidy of 4% per annum on home loans up to ₹8 lakh for up to 5 years (maximum ₹1.80 lakh benefit).",
    detailed_answer: "Under PMAY-Urban 2.0 guidelines approved for FY 2024-25 through 2028-29: (1) Income Slabs: Economically Weaker Section (EWS) up to ₹3,00,000 annually; Low Income Group (LIG) ₹3,00,001 to ₹6,00,000 annually; Middle Income Group (MIG) ₹6,00,001 to ₹9,00,000 annually; (2) House Cost and Loan Ceilings: House valuation cannot exceed ₹35 lakh and maximum home loan amount cannot exceed ₹25 lakh; (3) Interest Subsidy Terms: An interest subvention of 4.0% per annum is applied to the first ₹8.00 lakh of the loan for a maximum 5-year tenure; (4) Release Mechanism: Up to ₹1.80 lakh net present value benefit is disbursed in 5 equal yearly installments credited directly into the borrower's home loan account.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "PMAY-U 2.0 में आय सीमा EWS (₹3 लाख तक), LIG (₹3-6 लाख) और MIG (₹6-9 लाख) है। इसमें ₹8 लाख तक के लोन पर 5 साल के लिए 4% ब्याज सब्सिडी (अधिकतम ₹1.80 लाख) मिलती है।",
        detailed_answer: "PMAY अर्बन 2.0 की शर्तें: ₹35 लाख तक के मकान पर ₹25 लाख तक का लोन लिया जा सकता है। सरकार पहले ₹8 लाख के लोन पर 4% की दर से सालाना ब्याज सब्सिडी देती है, जिसका कुल लाभ ₹1.80 लाख तक होता है। यह लाभ 5 वर्षों में समान किस्तों में बैंक लोन खाते में जमा किया जाता है।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "PMAY-U 2.0 me income brackets EWS (upto ₹3L), LIG (₹3-6L), MIG (₹6-9L) hain. ₹8 lakh loan par 4% interest subsidy milti hai 5 years ke liye (max ₹1.8 lakh benefit).",
        detailed_answer: "House cost max ₹35 lakh aur home loan max ₹25 lakh hona chahiye. ₹8 lakh tak ke loan amount par 4% subsidy milti hai jo 5 annual installments me home loan account me credit hoti hai.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "PMAY-U 2.0 covers EWS, LIG, MIG with 4% interest subvention up to ₹8 lakh loan for 5 years.",
        citation_source: "Ministry of Housing and Urban Affairs PMAY-U 2.0 Operational Guidelines",
        source_url: "https://pmay-urban.gov.in/"
      }
    ],
    official_source_urls: [
      "https://pmay-urban.gov.in/",
      "https://mohua.gov.in/"
    ],
    source_title: "Operational Guidelines for Interest Subsidy Scheme under PMAY-U 2.0",
    source_publisher: "Ministry of Housing and Urban Affairs",
    evidence_type: "OFFICIAL_GOV_NOTIFICATION",
    effective_date: "2024-09-01",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Beneficiary must maintain active repayment track record to receive subsequent annual installments.",
    conflicting_evidence: null,
    next_review_due: "2027-03-31"
  },
  {
    question_id: "Q-SB-013",
    canonical_question: "Why is female head ownership or co-ownership mandatory for house sanction under Pradhan Mantri Awas Yojana (PMAY)?",
    short_answer: "Female ownership or co-ownership is mandatory under PMAY to empower women, secure asset titles in women's names, and prevent male-only distress sales of subsidized family housing.",
    detailed_answer: "Under the core guidelines of Pradhan Mantri Awas Yojana (both Gramin and Urban verticals), houses constructed or acquired with central financial assistance must be registered in the name of the female head of the household or in joint ownership with the male spouse. The only statutory exception is when there is no adult female member in the family (e.g., unmarried males, widowers, or single fathers). This policy ensures legal land and property title security for women, enhances women's socioeconomic standing, and protects families against arbitrary liquidation of the housing asset.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "PMAY में मकान का पंजीकरण महिला मुखिया के नाम या संयुक्त नाम पर होना अनिवार्य है ताकि महिलाओं का सशक्तिकरण हो और संपत्ति पर उनका कानूनी मालिकाना हक सुरक्षित रहे।",
        detailed_answer: "प्रधानमंत्री आवास योजना की अनिवार्य शर्त है कि स्वीकृत मकान परिवार की वयस्क महिला मुखिया के नाम पर या पति-पत्नी के संयुक्त नाम पर ही पंजीकृत होना चाहिए। केवल उन्हीं मामलों में जहां परिवार में कोई वयस्क महिला सदस्य नहीं है, मकान अकेले पुरुष के नाम पर स्वीकृत किया जा सकता है। इसका उद्देश्य महिलाओं को संपत्ति का मालिकाना हक देना है।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "PMAY me house title female head ke naam par ya joint ownership me hona mandatory hai taaki women empowerment aur property security ensure ho sake.",
        detailed_answer: "Subsidy approve hone ke liye registry me mahila ka naam hona compulsory condition hai. Sirf unhi households me male sole ownership allow hoti hai jahan family me koi adult female member exist nahi karti.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "Houses under PMAY must be in the name of female head or joint ownership with spouse.",
        citation_source: "MoHUA PMAY Operational Guidelines, Mandatory Conditions",
        source_url: "https://pmay-urban.gov.in/"
      }
    ],
    official_source_urls: [
      "https://pmay-urban.gov.in/",
      "https://mohua.gov.in/"
    ],
    source_title: "PMAY Guidelines on Mandatory Female Title Ownership",
    source_publisher: "Ministry of Housing and Urban Affairs",
    evidence_type: "PRIMARY_STATUTORY_RULE",
    effective_date: "2015-06-25",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Enforced strictly by registry departments and primary lending institutions.",
    conflicting_evidence: null,
    next_review_due: "2027-03-31"
  },
  {
    question_id: "Q-SB-014",
    canonical_question: "What percentage premium is paid by farmers for Kharif, Rabi, and commercial crops under PM Fasal Bima Yojana (PMFBY)?",
    short_answer: "Under PMFBY, farmers pay a uniform maximum premium of 2.0% for Kharif food and oilseed crops, 1.5% for Rabi crops, and 5.0% for annual commercial/horticultural crops, with all remaining actuarial premium funded by government subsidy.",
    detailed_answer: "Pradhan Mantri Fasal Bima Yojana (PMFBY) shields farmers from weather and calamity risks at highly subsidized premium rates: (1) Kharif Crops (paddy, maize, pulses, oilseeds): Farmers pay a maximum premium of 2.0% of the sum insured; (2) Rabi Crops (wheat, barley, mustard, gram): Farmers pay a maximum premium of 1.5% of the sum insured; (3) Commercial and Horticultural Crops (cotton, sugarcane, fruits, vegetables): Farmers pay a maximum premium of 5.0% of the sum insured. The entire balance of the actuarial premium (which frequently exceeds 15-25%) is paid as premium subsidy shared equally (50:50) between the Central Government and State Governments (90:10 in North Eastern States).",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "PMFBY में किसानों को खरीफ फसलों पर 2.0%, रबी फसलों पर 1.5% और वाणिज्यिक/बागवानी फसलों पर अधिकतम 5.0% का मामूली प्रीमियम देना होता है। शेष प्रीमियम सरकार देती है।",
        detailed_answer: "पीएम फसल बीमा योजना में किसान का प्रीमियम अंशदान बहुत कम तय किया गया है: खरीफ फसलों (धान, मक्का आदि) पर 2.0%; रबी फसलों (गेहूं, सरसों आदि) पर 1.5%; और बागवानी/वाणिज्यिक फसलों (कपास, गन्ना, सब्जियां) पर 5.0%। बाकी का पूरा भारी प्रीमियम केंद्र और राज्य सरकार मिलकर बीमा कंपनी को सब्सिडी के रूप में देती हैं।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "PMFBY me farmers Kharif crops ke liye 2.0%, Rabi crops ke liye 1.5% aur commercial/horticultural crops ke liye 5.0% premium pay karte hain. Baaki pura premium government deti hai.",
        detailed_answer: "Sum insured par farmer ka share fixed hai: 2% Kharif, 1.5% Rabi, 5% commercial. Balance actuarial premium central aur state governments 50:50 share karti hain subsidy ke taur par.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "Farmer premium share is 2% for Kharif, 1.5% for Rabi, and 5% for commercial/horticultural crops under PMFBY.",
        citation_source: "Ministry of Agriculture PMFBY Revised Operational Guidelines, Section 8",
        source_url: "https://pmfby.gov.in/"
      }
    ],
    official_source_urls: [
      "https://pmfby.gov.in/",
      "https://agricoop.nic.in/"
    ],
    source_title: "Pradhan Mantri Fasal Bima Yojana Operational Guidelines",
    source_publisher: "Department of Agriculture and Farmers Welfare",
    evidence_type: "OFFICIAL_GOV_NOTIFICATION",
    effective_date: "2016-02-18",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "Crop insurance enrollment is voluntary for both loanee and non-loanee farmers.",
    conflicting_evidence: null,
    next_review_due: "2027-03-31"
  },
  {
    question_id: "Q-SB-015",
    canonical_question: "Within how many hours must localized crop loss or post-harvest damage be reported to claim PMFBY insurance compensation?",
    short_answer: "Localized crop losses (hailstorm, landslide, inundation) or post-harvest damages must be reported within 72 hours of the calamity through the Crop Insurance App, toll-free helpline, or local agriculture office.",
    detailed_answer: "Under PMFBY Operational Guidelines, for localized risks (such as hailstorm, landslide, cloudburst, natural fire, and inundation) and post-harvest losses (cut and spread crops drying in the field damaged within 14 days of harvest by unseasonal cyclonic rains), the affected farmer must report the crop loss within 72 hours of the event occurrence. Intimation can be lodged via: (1) Crop Insurance App (uploading geotagged photo of damaged field); (2) National Crop Insurance Portal (pmfby.gov.in); (3) Kisan Call Centre toll-free number (14447); or (4) Written notification to the local bank branch or revenue/agriculture officer. Failure to report within 72 hours can lead to rejection of individual assessment claims.",
    answer_language: "en",
    translations: {
      hi: {
        short_answer: "ओलावृष्टि, जलभराव या कटाई के बाद फसल नुकसान की स्थिति में घटना के 72 घंटे के भीतर 'क्रॉप इंश्योरेंस ऐप' या टोल-फ्री नंबर पर सूचना देना अनिवार्य है।",
        detailed_answer: "पीएम फसल बीमा योजना के तहत स्थानीय आपदाओं (ओलावृष्टि, बादल फटना, भूस्खलन, बाढ़) या खेत में सूखने के लिए कटी पड़ी फसल के नुकसान पर किसान को 72 घंटे के भीतर सूचना देनी होती है। यह सूचना 'Crop Insurance App' पर फोटो अपलोड करके, टोल-फ्री हेल्पलाइन (14447) पर कॉल करके या बैंक/कृषि अधिकारी को लिखित में दी जा सकती है। 72 घंटे बाद दावा खारिज हो सकता है।",
        status: "COMPLETED"
      },
      hinglish: {
        short_answer: "Crop loss ya post-harvest damage hone par 72 hours ke andar Crop Insurance App ya helpline 14447 par intimation dena mandatory hai.",
        detailed_answer: "Hailstorm, flooding ya cut crop damage hone par 72 ghante ke andar report karna compulsory rule hai. Geotagged photo ke sath app par claim lodge karne par surveyor aakar physical loss assessment karta hai.",
        status: "COMPLETED"
      }
    },
    supporting_claims: [
      {
        claim: "Crop loss must be reported within 72 hours for localized calamities and post-harvest losses under PMFBY.",
        citation_source: "PMFBY Revised Operational Guidelines, Section 15 Post-Harvest and Localized Risk Claims",
        source_url: "https://pmfby.gov.in/"
      }
    ],
    official_source_urls: [
      "https://pmfby.gov.in/",
      "https://agricoop.nic.in/"
    ],
    source_title: "PMFBY Claim Settlement Procedure for Localized Calamities and Post-Harvest Loss",
    source_publisher: "Ministry of Agriculture and Farmers Welfare",
    evidence_type: "OFFICIAL_GOV_NOTIFICATION",
    effective_date: "2020-04-01",
    verified_at: "2026-10-09",
    answer_status: "VERIFIED",
    verification_status: "VERIFIED",
    review_required: false,
    reviewer_notes: "72-hour cut-off is strictly enforced across all general insurance companies.",
    conflicting_evidence: null,
    next_review_due: "2027-03-31"
  }
];
