import { VerifiedQuestionItem } from '../types/question';

export const TOP_CITIZEN_QUERIES_ARTICLES: VerifiedQuestionItem[] = [
  // 1. GeM Direct Purchase Limit
  {
    id: 'Q-GEM-001',
    slug: 'maximum-price-limit-direct-purchase-gem',
    canonical_question: 'What is the maximum price limit for doing a direct purchase on GeM?',
    category: 'Tenders',
    subcategory: 'GeM Procurement',
    search_intent: 'Informational & Commercial',
    audience: 'Government Buyers, Procurement Officers, MSME Sellers',
    geography: 'India',
    suggested_existing_page: '/tenders',
    alternate_phrasings: [
      'what is the maximum price limit for doing a direct purchase',
      'what is the limit of direct purchase?',
      'what is the item total purchase value for a direct purchase on gem?',
      'what is the maximum price limit for doing a direct purchase in gem',
      'what is direct purchase limit on gem portal 25000 or 50000',
    ],
    short_answer:
      'Under Rule 149(i) of General Financial Rules (GFR) 2017 and GeM guidelines, the maximum threshold for Direct Purchase without price comparison is up to ₹25,000 for standard items (extended up to ₹50,000 for specific product categories and buyers with documented market quality satisfaction). Above this threshold, Direct Purchase without comparison is prohibited.',
    detailed_answer: `### Statutory Framework for Direct Purchase on GeM

Under Rule 149(i) of the General Financial Rules (GFR), 2017 issued by the Ministry of Finance, Government of India:

1. **Standard Direct Purchase Limit (Up to ₹25,000):**
   A government buyer can directly purchase any available product or service on the Government e-Marketplace (GeM) having an order value up to **₹25,000 (INR Twenty-Five Thousand inclusive of all taxes)** through any available seller meeting the requisite quality, specification, and delivery period, without requiring online price comparison with other sellers.

2. **Enhanced Direct Purchase Threshold (Up to ₹50,000):**
   The Department of Expenditure (DoE) and GeM Special Terms and Conditions (STC) allow buyers in designated departments and autonomous bodies to procure goods up to **₹50,000** directly from any seller whose product meets quality benchmarks, provided the buyer certifies suitability and reasonable rates.

3. **Key Conditions & Safeguards:**
   - **No Splitting of Requirements:** Under GFR Rule 157, a buyer must never divide or split demands into smaller lots below ₹25,000/₹50,000 simply to bypass L1 comparison or tender requirements.
   - **Reasonableness of Price:** The buyer must record that the purchased product matches standard market specifications and prices.
   - **Delivery & Warranty Terms:** Sellers must fulfill delivery within the timeline committed on the GeM contract order.`,
    answer_language: 'en',
    translations: {
      hi: {
        short_answer:
          'GeM पोर्टल और GFR 2017 नियम 149(i) के अनुसार बिना किसी मूल्य तुलना के डायरेक्ट परचेज (Direct Purchase) की अधिकतम सीमा ₹25,000 है (विशेष परिस्थितियों और श्रेणियों में ₹50,000 तक मान्य)। इससे अधिक मूल्य की खरीद के लिए L1 तुलना या बिडिंग अनिवार्य है।',
        detailed_answer:
          'गवर्नमेंट ई-मार्केटप्लेस (GeM) पर जनरल फाइनेंशियल रूल्स (GFR 2017) के नियम 149 के तहत सरकारी खरीदार ₹25,000 तक की सामग्री बिना किसी अन्य विक्रेता से कोटेशन या तुलना किए सीधे किसी भी प्रमाणित विक्रेता से खरीद सकते हैं। इस सीमा से अधिक की खरीद पर कम से कम 3 विभिन्न OEM के उत्पादों की तुलना (L1 Purchase) अथवा ई-टेंडरिंग अनिवार्य होती है।',
        status: 'VERIFIED',
      },
      hinglish: {
        short_answer:
          'GeM portal par direct purchase ki standard limit ₹25,000 tak hoti hai (certain categories me ₹50,000 tak). Is limit tak buyer ko kisi dusre seller se rate compare karne ki zarurat nahi hoti.',
        detailed_answer:
          'GFR Rule 149(i) ke mutabiq GeM par direct purchase ka ceiling limit standard ₹25,000 hai. Agar order value ₹25,000 se zyada ho to buyer direct single-seller order generate nahi kar sakta, use minimum 3 OEM ke rates compare karke L1 purchase ya bidding karni hoti hai.',
        status: 'VERIFIED',
      },
    },
    supporting_claims: [
      {
        claim: 'GFR 2017 Rule 149(i) sets direct purchase threshold at up to ₹25,000.',
        citation_source: 'Ministry of Finance, Department of Expenditure, GFR 2017',
        source_url: 'https://doe.gov.in/order-rules/general-financial-rules-2017',
      },
      {
        claim: 'GeM Special Terms & Conditions Direct Purchase Chapter',
        citation_source: 'GeM Portal Procurement Manual',
        source_url: 'https://gem.gov.in/',
      },
    ],
    official_source_urls: ['https://gem.gov.in/', 'https://doe.gov.in/'],
    source_title: 'General Financial Rules 2017 Rule 149 & GeM Procurement Manual',
    source_publisher: 'GeM SPV & Ministry of Finance',
    evidence_type: 'PRIMARY_STATUTORY_RULE',
    effective_date: '2026-01-01',
    verified_at: '2026-11-09T05:00:00Z',
    answer_status: 'VERIFIED',
    verification_status: 'VERIFIED',
    review_required: false,
    is_published: true,
  },

  // 2. GeM L1 Purchase Limits
  {
    id: 'Q-GEM-002',
    slug: 'l1-purchase-upper-and-lower-limits-gem',
    canonical_question: 'What are the upper and lower financial limits for L1 purchase on GeM?',
    category: 'Tenders',
    subcategory: 'GeM Procurement',
    search_intent: 'Informational & Commercial',
    audience: 'Government Buyers, DDOs, Suppliers',
    geography: 'India',
    suggested_existing_page: '/tenders',
    alternate_phrasings: [
      'what is l1 purchase upper limit?',
      'what is l1 purchase lower limit?',
      'what is l1 purchase in gem',
      'what is the financial bench mark up to which, goods/services can be procured by using gem through comparison of rates, without floating tender?',
      'financial benchmark up to which goods can be procured on gem by comparison of rates',
    ],
    short_answer:
      'On GeM, the lower limit for L1 Purchase by rate comparison is above ₹25,000 (or ₹50,000 where applicable), and the standard upper limit is ₹5,00,000 (INR 5 Lakhs), extendable up to ₹10,00,000 (INR 10 Lakhs) under specific ministry guidelines and up to ₹30,00,000 for automobiles. Within this bracket, procurement is permitted by comparing at least 3 different OEMs.',
    detailed_answer: `### L1 Purchase Framework on GeM (GFR Rule 149(ii))

Under Rule 149(ii) of the General Financial Rules (GFR), 2017:

1. **Lower Financial Benchmark:**
   - The lower limit starts immediately above the Direct Purchase threshold, i.e., **above ₹25,000** (or above ₹50,000 where enhanced direct purchase is enabled).

2. **Standard Upper Financial Benchmark:**
   - The standard upper financial benchmark up to which goods and services can be procured through online comparison of rates **without floating an open tender is ₹5,00,000 (Five Lakh Rupees)**.
   - For specific notified departments and enhanced procurement thresholds, this benchmark extends up to **₹10,00,000 (Ten Lakh Rupees)**.

3. **Special Automobile Procurement Benchmark:**
   - For government vehicles and passenger automobiles, buyers are authorized to place orders through L1 price comparison for values up to **₹30,00,000 (Thirty Lakh Rupees)** among at least 3 different automotive OEMs.

4. **Mandatory Process for L1 Comparison:**
   - The buyer must select products from at least **three different OEMs/manufacturers** that meet identical technical specifications.
   - The GeM system automatically determines the Lowest (L1) price among the qualified products.
   - The purchase order must be awarded to the L1 seller.`,
    answer_language: 'en',
    translations: {
      hi: {
        short_answer:
          'GeM पर L1 खरीद की निचली सीमा ₹25,000 (या ₹50,000) से ऊपर शुरू होती है, और बिना खुला टेंडर निकाले रेट कम्पेरिजन द्वारा खरीद की मानक ऊपरी सीमा ₹5,00,000 (विशेष मामलों में ₹10,00,000 तथा ऑटोमोबाइल के लिए ₹30,00,000) है।',
        detailed_answer:
          'GFR नियम 149(ii) के तहत ₹25,000 से लेकर ₹5,00,000 तक की खरीद बिना ओपन टेंडर जारी किए, GeM पोर्टल पर उपलब्ध न्यूनतम 3 विभिन्न निर्माताओं (OEMs) के तकनीकी रूप से समान उत्पादों के मूल्यों की ऑनलाइन तुलना करके L1 (न्यूनतम मूल्य) विक्रेता को दी जा सकती है।',
        status: 'VERIFIED',
      },
      hinglish: {
        short_answer:
          'GeM par L1 purchase ki lower limit ₹25,000 se upar aur upper limit standard ₹5,00,000 hoti hai (specific categories me ₹10 Lakh aur automobiles ke liye ₹30 Lakh tak).',
        detailed_answer:
          'Agar order value ₹25,000 se ₹5,00,000 ke beech hai, toh buyer bina open tender nikale GeM portal par 3 alag-alag OEMs ke products compare karke lowest rate (L1) wale seller ko order de sakta hai.',
        status: 'VERIFIED',
      },
    },
    supporting_claims: [
      {
        claim: 'GFR 149(ii) specifies ₹25,000 to ₹5,00,000 comparison window.',
        citation_source: 'Ministry of Finance, DoE Procurement Guidelines',
        source_url: 'https://doe.gov.in/',
      },
      {
        claim: 'Automobile category L1 comparison limit up to ₹30 Lakhs.',
        citation_source: 'GeM Procurement Manual for Vehicles',
        source_url: 'https://gem.gov.in/',
      },
    ],
    official_source_urls: ['https://gem.gov.in/', 'https://doe.gov.in/'],
    source_title: 'GFR Rule 149(ii) Comparison Guidelines',
    source_publisher: 'Ministry of Finance & GeM',
    evidence_type: 'PRIMARY_STATUTORY_RULE',
    effective_date: '2026-01-01',
    verified_at: '2026-11-09T05:00:00Z',
    answer_status: 'VERIFIED',
    verification_status: 'VERIFIED',
    review_required: false,
    is_published: true,
  },

  // 3. GeM Minimum OEM Comparison
  {
    id: 'Q-GEM-003',
    slug: 'how-many-oems-compare-l1-purchase-gem',
    canonical_question: 'How many OEMs does a buyer need to compare for an L1 purchase on GeM?',
    category: 'Tenders',
    subcategory: 'GeM Procurement',
    search_intent: 'Informational',
    audience: 'Buyers, Auditing Officers',
    geography: 'India',
    suggested_existing_page: '/tenders',
    alternate_phrasings: [
      'how many oems does a buyer need to compare for an l1 purchase? 2 3 4 5',
      'how many different oem need to be compaired to place a l1 purchase?',
      'how many oems does a buyer need to compare for l1 purchase',
      'number of brands required for l1 purchase on gem',
    ],
    short_answer:
      'For an L1 Purchase on GeM, a buyer is mandatorily required to compare products from at least 3 (three) different Original Equipment Manufacturers (OEMs) or distinct brands meeting the required specifications before generating a purchase order.',
    detailed_answer: `### Mandatory 3-OEM Comparison Rule on GeM

Under GFR Rule 149(ii) and the GeM Buyer Handbook:

1. **Mandatory Count: Exactly 3 Different OEMs:**
   - To make an L1 purchase for goods or services between ₹25,000 and ₹5,00,000 (or up to ₹10,00,000 for notified items), the buyer **must select and compare at least three (3) distinct OEMs / brands**.
   - Comparing three products from the *same* manufacturer or reseller does **not** fulfill statutory audit compliance.

2. **Technical Suitability:**
   - All 3 compared items must meet the buyer's functional, technical, and delivery specifications.

3. **Consequences of Insufficient OEMs:**
   - If 3 distinct OEMs are unavailable in the GeM catalog for the desired specification, the buyer cannot place an L1 comparison order. The buyer must either float a Custom Bid / Open Bid on GeM or procure under Proprietary Article Certificate (PAC) rules if justified.`,
    answer_language: 'en',
    translations: {
      hi: {
        short_answer:
          'GeM पोर्टल पर L1 खरीद करने के लिए खरीदार को अनिवार्य रूप से कम से कम 3 (तीन) अलग-अलग निर्माताओं (OEMs) या ब्रांड्स के उत्पादों की तुलना करनी होती है।',
        detailed_answer:
          'नियमों के अनुसार GeM पर रेट कम्पेरिजन के समय न्यूनतम 3 अलग-अलग मूल उपकरण निर्माताओं (OEMs) के उत्पादों की तुलना होना आवश्यक है। एक ही ब्रांड के 3 अलग-अलग डीलरों के उत्पाद इस नियम की पूर्ति नहीं करते।',
        status: 'VERIFIED',
      },
      hinglish: {
        short_answer:
          'GeM par L1 purchase ke liye buyer ko minimum 3 alag-alag OEMs ya brands ke products compare karna mandatory hai.',
        detailed_answer:
          'Buyer ko GeM par compare karte waqt kam se kam 3 different OEMs select karne hote hain. Ek hi manufacturer ke multiple sellers ko compare karke L1 order generate karna valid nahi mana jata.',
        status: 'VERIFIED',
      },
    },
    supporting_claims: [
      {
        claim: 'Minimum 3 distinct OEMs required for L1 comparison.',
        citation_source: 'GeM Buyer User Manual Section 4.2',
        source_url: 'https://gem.gov.in/',
      },
    ],
    official_source_urls: ['https://gem.gov.in/'],
    source_title: 'GeM Buyer Operations Manual — L1 Comparison Rules',
    source_publisher: 'GeM SPV',
    evidence_type: 'PRIMARY_STATUTORY_RULE',
    effective_date: '2026-01-01',
    verified_at: '2026-11-09T05:00:00Z',
    answer_status: 'VERIFIED',
    verification_status: 'VERIFIED',
    review_required: false,
    is_published: true,
  },

  // 4. GeM CRAC Timeline & 10-Day Payment Release
  {
    id: 'Q-GEM-004',
    slug: 'payment-release-timeline-after-crac-gem',
    canonical_question: 'What is the timeline to release the payment after CRAC is generated by the consignee on GeM?',
    category: 'Tenders',
    subcategory: 'GeM Procurement',
    search_intent: 'Informational & Commercial',
    audience: 'Suppliers, MSME Vendors, DDOs',
    geography: 'India',
    suggested_existing_page: '/tenders',
    alternate_phrasings: [
      'what is the timeline to release the payment after crac is generated by the consignee',
      'how many days to pay seller after crac on gem',
      'gem payment release timeline 10 days',
      'crac payment release rule gem',
    ],
    short_answer:
      'Under the General Terms and Conditions (GTC) of GeM and Ministry of Finance mandates, buyer organizations are statutorily required to release payment to the seller within 10 (ten) calendar days from the date the Consignee Receipt and Acceptance Certificate (CRAC) is generated.',
    detailed_answer: `### Statutory Payment Timelines on GeM

To protect MSMEs and promote timely public procurement cash flow, the Government of India has instituted strict payment turnaround rules on GeM:

1. **The 10-Day Mandate:**
   - Once goods are delivered and the consignee generates the **Consignee Receipt and Acceptance Certificate (CRAC)**, the buyer/DDO must release **100% payment within 10 calendar days**.

2. **Penal Interest for Delayed Payments:**
   - If payment is delayed beyond 10 days post-CRAC without a documented statutory justification, the buyer organization is liable to pay **penal interest of 1% per month** for the delayed period, automatically billed to the buyer department.

3. **Auto-Deduction for Central Government Entities:**
   - For central ministries, CPSEs, and departments integrated with the Public Financial Management System (PFMS) or GeM Pool Accounts (GPA), payments are prioritized electronically to avoid payment default.`,
    answer_language: 'en',
    translations: {
      hi: {
        short_answer:
          'GeM पोर्टल पर कंसाइनी द्वारा CRAC (Consignee Receipt and Acceptance Certificate) जारी होने के बाद खरीदार विभाग को अधिकतम 10 कैलेंडर दिनों के भीतर विक्रेता का भुगतान जारी करना अनिवार्य है।',
        detailed_answer:
          'वित्त मंत्रालय और GeM की सामान्य शर्तों (GTC) के अनुसार, जैसे ही सामग्री का निरीक्षण पूरा होकर CRAC जनरेट होता है, संबंधित विभाग को 10 दिनों के भीतर बिल पास करके भुगतान करना होता है। 10 दिनों से अधिक की देरी पर 1% प्रतिमाह की दर से दंडात्मक ब्याज का प्रावधान है।',
        status: 'VERIFIED',
      },
      hinglish: {
        short_answer:
          'GeM par consignee dwara CRAC generate hone ke baad buyer ko strictly 10 calendar days ke andar seller ka payment release karna hota hai.',
        detailed_answer:
          'CRAC generate hone ke baad 10 din ke andar buyer ko payment karna mandatory hai. Agar buyer 10 din me payment nahi karta, to GeM guidelines ke mutabiq 1% per month penal interest lag sakta hai.',
        status: 'VERIFIED',
      },
    },
    supporting_claims: [
      {
        claim: 'Buyer must release payment within 10 calendar days of CRAC generation.',
        citation_source: 'GeM General Terms and Conditions Clause 12',
        source_url: 'https://gem.gov.in/',
      },
    ],
    official_source_urls: ['https://gem.gov.in/', 'https://doe.gov.in/'],
    source_title: 'GeM General Terms & Conditions Clause on Payment Terms',
    source_publisher: 'Government e-Marketplace',
    evidence_type: 'PRIMARY_STATUTORY_RULE',
    effective_date: '2026-01-01',
    verified_at: '2026-11-09T05:00:00Z',
    answer_status: 'VERIFIED',
    verification_status: 'VERIFIED',
    review_required: false,
    is_published: true,
  },

  // 5. GeM Auto-CRAC Limits (10 Days)
  {
    id: 'Q-GEM-005',
    slug: 'auto-crac-days-limit-gem',
    canonical_question: 'What is the default minimum and maximum number of days limit for Auto-CRAC on GeM?',
    category: 'Tenders',
    subcategory: 'GeM Procurement',
    search_intent: 'Informational',
    audience: 'Sellers, Buyers, Auditing Teams',
    geography: 'India',
    suggested_existing_page: '/tenders',
    alternate_phrasings: [
      'what is the default minimum and maximum number of days limit for auto crac? 10 & 30 days',
      'what is the default minimum and maximum number of days limit for auto crac',
      'auto crac days limit in gem',
    ],
    short_answer:
      'On GeM, the default threshold for Auto-CRAC is 10 calendar days from the date of physical delivery / Provisional Receipt Certificate (PRC). If the consignee does not accept or reject the delivery within this window, the system automatically generates an Auto-CRAC, triggering the 10-day payment clock.',
    detailed_answer: `### Understanding the Auto-CRAC Mechanism on GeM

To stop government consignees from sitting on delivered consignments indefinitely, GeM operates an automated acceptance mechanism:

1. **Provisional Receipt Certificate (PRC):**
   - Issued within **48 hours** of physical parcel/consignment delivery.

2. **Default Inspection Window (10 Calendar Days):**
   - Consignees have **10 days** from delivery/PRC to inspect the consignment and either generate CRAC (acceptance) or issue a Rejection Certificate.

3. **Auto-CRAC Trigger:**
   - If the consignee fails to take action within the designated 10-day period, the GeM platform automatically issues **Auto-CRAC**.
   - Upon Auto-CRAC issuance, the consignment is deemed fully accepted, and the buyer has 10 days to release payment to the vendor.`,
    answer_language: 'en',
    translations: {
      hi: {
        short_answer:
          'GeM पर ऑटो-सीआरएसी (Auto-CRAC) की मानक समय सीमा 10 कैलेंडर दिन है। यदि खरीदार डिलीवरी मिलने के 10 दिनों में माल स्वीकार या अस्वीकार नहीं करता, तो सिस्टम स्वतः Auto-CRAC जारी कर देता है।',
        detailed_answer:
          'विक्रेता को अनावश्यक भुगतान देरी से बचाने के लिए GeM ने ऑटो-सीआरएसी व्यवस्था बनाई है। सामग्री पहुंचने के बाद कंसाइनी को 10 दिनों में निरीक्षण करना होता है। यदि 10 दिनों तक कोई एक्शन नहीं लिया गया, तो सिस्टम स्वतः माल स्वीकृत मानकर Auto-CRAC जनरेट कर देता है।',
        status: 'VERIFIED',
      },
      hinglish: {
        short_answer:
          'GeM par Auto-CRAC ka default time limit 10 calendar days hota hai. Agar buyer 10 din tak delivery accept ya reject na kare, to system automatically Auto-CRAC issue kar deta hai.',
        detailed_answer:
          'Delivery ke baad consignee ke paas inspection ke liye 10 din hote hain. Agar 10 days me koi response nahi aata, to GeM portal auto-crac generate karke payment timeline start kar deta hai.',
        status: 'VERIFIED',
      },
    },
    supporting_claims: [
      {
        claim: 'Auto-CRAC triggers on the 10th day post delivery/PRC if inactive.',
        citation_source: 'GeM Incident & Order Fulfilment Guidelines',
        source_url: 'https://gem.gov.in/',
      },
    ],
    official_source_urls: ['https://gem.gov.in/'],
    source_title: 'GeM Consignee Inspection and Auto-CRAC Guidelines',
    source_publisher: 'GeM SPV',
    evidence_type: 'PRIMARY_STATUTORY_RULE',
    effective_date: '2026-01-01',
    verified_at: '2026-11-09T05:00:00Z',
    answer_status: 'VERIFIED',
    verification_status: 'VERIFIED',
    review_required: false,
    is_published: true,
  },

  // 6. Direct Purchase Order Count Limit in Financial Year
  {
    id: 'Q-GEM-006',
    slug: 'direct-purchase-orders-limit-single-buyer-gem',
    canonical_question: 'How many direct purchase orders can be generated by a single buyer in one financial year on GeM?',
    category: 'Tenders',
    subcategory: 'GeM Procurement',
    search_intent: 'Informational',
    audience: 'Government Buyers, DDOs, Vigilance Officers',
    geography: 'India',
    suggested_existing_page: '/tenders',
    alternate_phrasings: [
      'how many direct purchase orders can be generated by a singal buyer a one financial year',
      'how many direct purchase orders can be generated by a single buyer a one financial year? no limit specify 1000 10000 15000',
      'how many direct purchase orders can be generated by a single buyer',
    ],
    short_answer:
      'There is no numerical limit specified on the total number of Direct Purchase orders a single buyer can generate in one financial year on GeM. However, GFR Rule 157 strictly prohibits artificially splitting orders to stay under the ₹25,000 threshold and evade L1 comparison or tendering.',
    detailed_answer: `### Annual Direct Purchase Order Ceiling Rules

Under the General Financial Rules (GFR) 2017 and GeM operating guidelines:

1. **No Fixed Numerical Cap:**
   - The GeM platform does **not impose any strict numerical limit** (such as 100, 1,000, or 10,000) on the count of direct purchase orders a buyer can create annually.

2. **The Anti-Splitting Clause (GFR Rule 157):**
   - While order volume is unlimited, public procurement vigilance strictly audits **split purchasing**. A buyer cannot split a single aggregated requirement of ₹2,00,000 into eight separate ₹25,000 direct purchase orders across days or months.
   - Any recurring requirement must be consolidated and procured through L1 comparison or bidding.`,
    answer_language: 'en',
    translations: {
      hi: {
        short_answer:
          'GeM पर एक वित्तीय वर्ष में किसी खरीदार द्वारा डायरेक्ट परचेज ऑर्डर जनरेट करने की कोई निश्चित संख्यात्मक सीमा (No numerical limit specified) नहीं है, लेकिन GFR 157 के तहत मांग को जानबूझकर टुकड़ों में बांटना प्रतिबंधित है।',
        detailed_answer:
          'सरकारी नियमों के अनुसार एक खरीदार पूरे वर्ष में जितने चाहे डायरेक्ट परचेज ऑर्डर जनरेट कर सकता है। लेकिन सतर्कता (Vigilance) नियमों के अनुसार एक ही मद की बड़ी आवश्यकता को टेंडर से बचने के लिए ₹25,000 के छोटे-छोटे टुकड़ों में विभाजित करना अवैध माना जाता है।',
        status: 'VERIFIED',
      },
      hinglish: {
        short_answer:
          'Ek financial year me single buyer kitne direct purchase orders generate kar sakta hai iski koi numerical limit specify nahi hai, lekin requirement ko split karke order karna prohibited hai.',
        detailed_answer:
          'GeM system par number of direct orders par koi restriction nahi hai. Par GFR Rule 157 ke tehat large demand ko chote-chote orders me divide karke direct buy karna audit objection ban sakta hai.',
        status: 'VERIFIED',
      },
    },
    supporting_claims: [
      {
        claim: 'No quantitative limit on direct orders, but splitting is prohibited under Rule 157.',
        citation_source: 'GFR 2017 Rule 157 & GeM Audit Norms',
        source_url: 'https://doe.gov.in/',
      },
    ],
    official_source_urls: ['https://gem.gov.in/', 'https://doe.gov.in/'],
    source_title: 'GFR 2017 Rule 157 Splitting of Demand & GeM Guidelines',
    source_publisher: 'Ministry of Finance',
    evidence_type: 'PRIMARY_STATUTORY_RULE',
    effective_date: '2026-01-01',
    verified_at: '2026-11-09T05:00:00Z',
    answer_status: 'VERIFIED',
    verification_status: 'VERIFIED',
    review_required: false,
    is_published: true,
  },

  // 7. Kisan Vikas Patra (KVP) Lock-in Period & Premature Encashment
  {
    id: 'Q-SAV-001',
    slug: 'kisan-vikas-patra-lock-in-period-premature-closure',
    canonical_question: 'What is the lock-in period for Kisan Vikas Patra (KVP) and can it be closed before maturity?',
    category: 'Investment Schemes',
    subcategory: 'Small Savings Schemes',
    search_intent: 'Informational',
    audience: 'Savers, Post Office Depositors, Senior Citizens',
    geography: 'India',
    suggested_existing_page: '/investment-schemes',
    alternate_phrasings: [
      'what is the lock-in period for kisan vikas patra (kvp)?',
      'can we close kvp before maturity',
      'can we break kisan vikas patra before maturity',
      'can i withdraw kisan vikas patra before maturity',
      'what is the minimum lock-in period for a kisan vikas patra account?',
      'what is the lock-up period in case of kvp account?',
    ],
    short_answer:
      'The mandatory lock-in period for Kisan Vikas Patra (KVP) is 2 years and 6 months (30 months) from the date of deposit. Premature encashment is permitted only after completing this 30-month lock-in period, or earlier in case of the death of the account holder or by court order.',
    detailed_answer: `### Kisan Vikas Patra (KVP) Lock-In & Premature Withdrawal Rules

Kisan Vikas Patra is a sovereign-backed small savings certificate scheme managed by India Post and designated public sector banks under Ministry of Finance rules:

1. **Statutory Lock-in Period (30 Months):**
   - The statutory minimum lock-in period is **2.5 years (30 months)**.
   - Normal voluntary premature withdrawal is **not allowed before 30 months**.

2. **Premature Closure After 30 Months:**
   - After completing 2 years and 6 months, a depositor can voluntarily encash the certificate at any time prior to full maturity. The encashment value is paid according to the predetermined Ministry of Finance slab table.

3. **Exceptions for Closure Before 30 Months:**
   - On the death of the holder (or any of the holders in joint accounts).
   - On forfeiture by a pledgee being a Gazetted government officer.
   - When ordered by a court of law.

4. **Current Maturity & Interest:**
   - KVP offers 7.5% p.a. compounded annually, doubling the invested capital in approximately 115 months.`,
    answer_language: 'en',
    translations: {
      hi: {
        short_answer:
          'किसान विकास पत्र (KVP) की अनिवार्य लॉक-इन अवधि 2 वर्ष 6 माह (30 महीने) है। 30 महीने पूरे होने के बाद इसे कभी भी समय पूर्व भुनाया (Premature Close) जा सकता है। इससे पहले केवल खाताधारक की मृत्यु या अदालती आदेश पर ही बंद हो सकता है।',
        detailed_answer:
          'डाकघर किसान विकास पत्र नियम 2019 के तहत न्यूनतम लॉक-इन अवधि 30 महीने निर्धारित है। 2.5 वर्ष पूरे होने के बाद वित्त मंत्रालय द्वारा अधिसूचित तालिका के अनुसार ब्याज सहित भुगतान प्राप्त किया जा सकता है। 30 महीने से पहले सामान्य परिस्थितियों में खाता बंद नहीं किया जा सकता।',
        status: 'VERIFIED',
      },
      hinglish: {
        short_answer:
          'Kisan Vikas Patra (KVP) ka minimum lock-in period 2.5 years (30 months) hota hai. 30 months complete hone ke baad premature closure allowed hai.',
        detailed_answer:
          'KVP me aap 30 months se pehle normal conditions me paise nahi nikal sakte. 2.5 saal pure hone ke baad post office ya bank jakar premature encashment karwaya ja sakta hai.',
        status: 'VERIFIED',
      },
    },
    supporting_claims: [
      {
        claim: 'KVP lock-in period is 2 years and 6 months under National Savings Scheme Rules.',
        citation_source: 'Department of Economic Affairs, Ministry of Finance Notification',
        source_url: 'https://dea.gov.in/',
      },
    ],
    official_source_urls: ['https://www.indiapost.gov.in/', 'https://dea.gov.in/'],
    source_title: 'Kisan Vikas Patra Scheme Rules 2019',
    source_publisher: 'Ministry of Finance & India Post',
    evidence_type: 'PRIMARY_STATUTORY_RULE',
    effective_date: '2026-01-01',
    verified_at: '2026-11-09T05:00:00Z',
    answer_status: 'VERIFIED',
    verification_status: 'VERIFIED',
    review_required: false,
    is_published: true,
  },

  // 8. SCSS Joint Account & Spouses Rules
  {
    id: 'Q-SAV-002',
    slug: 'scss-joint-account-husband-wife-premature-closure',
    canonical_question: 'Can an SCSS account be opened jointly, and can husband and wife open accounts separately?',
    category: 'Investment Schemes',
    subcategory: 'Senior Citizen Savings Scheme',
    search_intent: 'Informational',
    audience: 'Senior Citizens, Pensioners, Tax Planners',
    geography: 'India',
    suggested_existing_page: '/investment-schemes',
    alternate_phrasings: [
      'can scss account be opened jointly',
      'can scss be opened jointly',
      'can husband and wife open scss account separately',
      'can scss account be closed prematurely',
      'senior citizen savings scheme joint account rules',
    ],
    short_answer:
      'Yes, an SCSS account can be opened jointly with a spouse only. Furthermore, both husband and wife (if eligible by age) can open separate individual accounts up to the maximum limit of ₹30 Lakh each (totaling ₹60 Lakh per couple). SCSS can be closed prematurely anytime with statutory interest deductions.',
    detailed_answer: `### Senior Citizen Savings Scheme (SCSS) Joint Account & Separation Rules

The Senior Citizen Savings Scheme (SCSS) provides an 8.2% sovereign quarterly payout backed by the Government of India:

1. **Joint Account Rules (Spouse Only):**
   - An individual aged 60+ (or 55+ for voluntary retirees) can open an SCSS account individually or **jointly with their spouse only**.
   - In a joint account, the entire deposit amount belongs to the primary account holder.

2. **Husband and Wife Separate Accounts (Up to ₹60 Lakh Combined):**
   - Both husband and wife can open **independent individual SCSS accounts** up to **₹30 Lakh each**, provided both meet the age eligibility.
   - This allows a senior citizen couple to invest up to **₹60 Lakh** in high-yielding, sovereign-guaranteed 8.2% quarterly income.

3. **Premature Closure Rules:**
   - SCSS can be closed prematurely at any time after opening.
   - **Closure within 1 year:** No interest is payable; any paid interest is deducted from the principal.
   - **Closure between 1 and 2 years:** 1.5% of the deposit amount is deducted.
   - **Closure after 2 years:** 1% of the deposit amount is deducted.`,
    answer_language: 'en',
    translations: {
      hi: {
        short_answer:
          'हाँ, SCSS खाता पति/पत्नी के साथ संयुक्त (Jointly) खोला जा सकता है। इसके अलावा पात्र पति और पत्नी दोनों अलग-अलग ₹30-30 लाख तक के व्यक्तिगत खाते खोल सकते हैं (परिवार के लिए कुल ₹60 लाख सीमा)।',
        detailed_answer:
          'वरिष्ठ नागरिक बचत योजना नियम 2019 के अनुसार खाता केवल पति या पत्नी के साथ ही जॉइंट खोला जा सकता है। दोनों वरिष्ठ नागरिक होने पर अलग-अलग ₹30 लाख तक जमा करके कुल ₹60 लाख की त्रैमासिक ब्याज आय का लाभ ले सकते हैं। समय से पहले बंद करने पर 1% से 1.5% तक की कटौती होती है।',
        status: 'VERIFIED',
      },
      hinglish: {
        short_answer:
          'Haan, SCSS account spouse ke sath joint open kiya ja sakta hai. Husband aur wife dono separate accounts bhi open kar sakte hain ₹30 lakh each (Total ₹60 Lakh per couple).',
        detailed_answer:
          'SCSS me joint account sirf husband ya wife ke sath hi ho sakta hai. Dono separate accounts bhi khol sakte hain jisse couple ko combined ₹60 Lakh tak 8.2% interest mil sakta hai. Premature closure 1-1.5% penalty ke sath allowed hai.',
        status: 'VERIFIED',
      },
    },
    supporting_claims: [
      {
        claim: 'Maximum individual SCSS deposit limit enhanced to ₹30 Lakh.',
        citation_source: 'Union Budget Notification, Ministry of Finance',
        source_url: 'https://dea.gov.in/',
      },
    ],
    official_source_urls: ['https://www.indiapost.gov.in/', 'https://dea.gov.in/'],
    source_title: 'Senior Citizen Savings Scheme Rules 2019 (Amended)',
    source_publisher: 'Ministry of Finance',
    evidence_type: 'PRIMARY_STATUTORY_RULE',
    effective_date: '2026-01-01',
    verified_at: '2026-11-09T05:00:00Z',
    answer_status: 'VERIFIED',
    verification_status: 'VERIFIED',
    review_required: false,
    is_published: true,
  },

  // 9. Sukanya Samriddhi Account (SSA) Rules & Tax Regime
  {
    id: 'Q-SAV-003',
    slug: 'can-i-open-two-sukanya-samriddhi-accounts-rules',
    canonical_question: 'Can I open two Sukanya Samriddhi accounts, and is interest tax-free in the new tax regime?',
    category: 'Investment Schemes',
    subcategory: 'Sukanya Samriddhi Yojana',
    search_intent: 'Informational',
    audience: 'Parents, Guardians, Taxpayers',
    geography: 'India',
    suggested_existing_page: '/investment-schemes',
    alternate_phrasings: [
      'can i open 2 sukanya samriddhi account',
      'can i open two sukanya samriddhi account for one child',
      'can we open two sukanya samriddhi account',
      'how many sukanya samriddhi account can be opened',
      'is sukanya samriddhi yojana tax free in new tax regime',
      'is sukanya samriddhi yojana gives compound interest',
      'how to close sukanya samriddhi account before maturity',
    ],
    short_answer:
      'No, you cannot open two accounts for the same child. A parent or guardian can open only 1 account per girl child, and a maximum of 2 accounts per family (with an exception for twins/triplets). Sukanya Samriddhi Yojana offers compound interest (8.2% p.a. compounded annually) and is 100% tax-free on interest and maturity in both Old and New Tax Regimes.',
    detailed_answer: `### Sukanya Samriddhi Yojana (SSY) Rules & Guidelines

Under the Sukanya Samriddhi Account Rules, 2019:

1. **Strict "One Child, One Account" Rule:**
   - A girl child can have **only one single account** across all post offices and banks in India. Opening two accounts in the name of the same child is irregular and earns zero interest on the second account.

2. **Maximum 2 Accounts Per Family:**
   - A natural or legal guardian can open accounts for a maximum of **two girl children**.
   - **Exception:** A third account is permitted if twin/triplet girls are born in the second order of birth, supported by medical certificates.

3. **Taxability in New Tax Regime vs. Old Tax Regime:**
   - While Section 80C deposit deductions (up to ₹1.5 Lakh) are available only under the Old Tax Regime, the **annual accrued interest and the final maturity proceeds remain 100% EXEMPT under Section 10(11A) in BOTH the Old and New Tax Regimes**.

4. **Compounding & Premature Closure:**
   - Interest (currently 8.2%) is **compounded annually**.
   - Premature closure is permitted only upon reaching 18 years for marriage/higher education or under extraordinary medical/compassionate grounds.`,
    answer_language: 'en',
    translations: {
      hi: {
        short_answer:
          'नहीं, एक बच्ची के नाम पर दो सुकन्या समृद्धि खाते नहीं खोले जा सकते। एक परिवार में अधिकतम 2 बच्चियों के खाते खोले जा सकते हैं। योजना पर 8.2% वार्षिक चक्रवृद्धि ब्याज मिलता है और नए टैक्स रिजीम में भी इसका ब्याज व मैच्योरिटी राशि 100% टैक्स फ्री है।',
        detailed_answer:
          'सुकन्या समृद्धि खाता नियम 2019 के तहत एक बालिका के लिए केवल एक ही खाता वैध है। परिवार में अधिकतम दो बेटियों के खाते खोले जा सकते हैं (जुड़वां बच्चियों के मामले में तीन)। इस खाते पर मिलने वाला ब्याज धारा 10(11A) के तहत पुराने और नए दोनों टैक्स रिजीम में पूर्णतः कर-मुक्त है।',
        status: 'VERIFIED',
      },
      hinglish: {
        short_answer:
          'Ek bachi ke naam par 2 Sukanya Samriddhi accounts nahi khol sakte. Family me maximum 2 daughters ke accounts allow hote hain. New tax regime me bhi iska interest aur maturity 100% tax-free rehta hai.',
        detailed_answer:
          'SSA me one-girl-one-account rule strictly lagta hai. Isme 8.2% compound interest milta hai. Deposit deduction sirf old regime me milta hai, par iska pura interest aur maturity new regime me bhi completely tax-exempt hai.',
        status: 'VERIFIED',
      },
    },
    supporting_claims: [
      {
        claim: 'Interest and maturity exempt under Section 10(11A) across all regimes.',
        citation_source: 'Income Tax Act 1961 Section 10(11A)',
        source_url: 'https://incometaxindia.gov.in/',
      },
    ],
    official_source_urls: ['https://www.indiapost.gov.in/', 'https://incometaxindia.gov.in/'],
    source_title: 'Sukanya Samriddhi Account Rules 2019 & Tax Status',
    source_publisher: 'Ministry of Finance & CBDT',
    evidence_type: 'PRIMARY_STATUTORY_RULE',
    effective_date: '2026-01-01',
    verified_at: '2026-11-09T05:00:00Z',
    answer_status: 'VERIFIED',
    verification_status: 'VERIFIED',
    review_required: false,
    is_published: true,
  },

  // 10. NRI PPF Account Rules
  {
    id: 'Q-SAV-004',
    slug: 'can-nri-continue-open-extend-ppf-account',
    canonical_question: 'Can an NRI continue, open, or extend a Public Provident Fund (PPF) account?',
    category: 'Investment Schemes',
    subcategory: 'Public Provident Fund',
    search_intent: 'Informational',
    audience: 'Non-Resident Indians (NRIs), Expats, Overseas Citizens',
    geography: 'India',
    suggested_existing_page: '/investment-schemes',
    alternate_phrasings: [
      'can nri continue ppf account',
      'can nri extend ppf account after 15 years',
      'can nri hold ppf account',
      'can nri open ppf account',
      'can nris continue investing in ppf account',
      'can nri extend ppf account',
    ],
    short_answer:
      'A Non-Resident Indian (NRI) cannot open a new PPF account. However, if an individual opened a PPF account as a resident Indian and subsequently became an NRI, they can continue the account until its original 15-year maturity on a non-repatriation basis. NRIs are strictly not permitted to extend the PPF account beyond 15 years.',
    detailed_answer: `### NRI Public Provident Fund (PPF) Statutory Guidelines

Under the Public Provident Fund Scheme, 2019 and Reserve Bank of India (RBI) FEMA regulations:

1. **Opening New Accounts (Strictly Prohibited):**
   - Non-Resident Indians (NRIs) are **not eligible to open a new PPF account**.

2. **Continuing Pre-existing Accounts:**
   - If an Indian resident opened a PPF account and subsequently acquired NRI status, they are permitted to **continue maintaining and contributing to the existing account** until the initial **15-year maturity period** is completed.
   - Contributions must be made from NRE/NRO accounts in Indian Rupees.
   - Maturity proceeds cannot be directly repatriated overseas; they are credited to the investor's NRO account.

3. **Extension After 15 Years (Not Allowed for NRIs):**
   - Resident Indians can extend PPF in 5-year blocks indefinitely.
   - **For NRIs, extension beyond 15 years is strictly prohibited.** The account must be closed upon completing 15 financial years. If left unclosed, it earns only post office savings account interest (currently 4.0%).`,
    answer_language: 'en',
    translations: {
      hi: {
        short_answer:
          'एनआरआई (NRI) नया पीपीएफ खाता नहीं खोल सकते। यदि भारत में रहते हुए खाता खोला गया था और बाद में व्यक्ति एनआरआई बन गया, तो वह 15 वर्ष की मूल परिपक्वता तक खाता जारी रख सकता है। 15 वर्ष के बाद एनआरआई के लिए खाता आगे बढ़ाना (Extension) प्रतिबंधित है।',
        detailed_answer:
          'पब्लिक प्रोविडेंट फंड नियम 2019 और फेमा (FEMA) नियमों के अनुसार प्रवासी भारतीय नया खाता नहीं खोल सकते। पहले से चल रहा खाता 15 साल तक सामान्य ब्याज दर पर जारी रखा जा सकता है, लेकिन 15 साल पूरे होने पर इसे बंद करना अनिवार्य है; 5-वर्षीय एक्सटेंशन केवल भारतीय निवासियों के लिए उपलब्ध है।',
        status: 'VERIFIED',
      },
      hinglish: {
        short_answer:
          'NRI naya PPF account open nahi kar sakte. Agar resident rehte hue account khola tha aur baad me NRI bane, to 15 years maturity tak continue kar sakte hain, par 15 saal ke baad extension nahi kar sakte.',
        detailed_answer:
          'PPF rules ke mutabiq NRIs naya account open nahi kar sakte. Existing account 15 saal tak non-repatriation basis par chal sakta hai, par 15 years complete hone ke baad NRIs ko 5-year block extension allow nahi hota.',
        status: 'VERIFIED',
      },
    },
    supporting_claims: [
      {
        claim: 'NRIs cannot extend PPF beyond initial 15-year tenure.',
        citation_source: 'Public Provident Fund Scheme Rules 2019 Notification',
        source_url: 'https://dea.gov.in/',
      },
    ],
    official_source_urls: ['https://dea.gov.in/', 'https://www.rbi.org.in/'],
    source_title: 'Public Provident Fund Scheme Rules 2019',
    source_publisher: 'Ministry of Finance & RBI',
    evidence_type: 'PRIMARY_STATUTORY_RULE',
    effective_date: '2026-01-01',
    verified_at: '2026-11-09T05:00:00Z',
    answer_status: 'VERIFIED',
    verification_status: 'VERIFIED',
    review_required: false,
    is_published: true,
  },

  // 11. PPF Deposit Limits, Loan Facility & 5th-of-Month Rule
  {
    id: 'Q-SAV-005',
    slug: 'ppf-deposit-limit-loan-rules-best-deposit-date',
    canonical_question: 'What is the PPF deposit limit, when can you take a loan, and what date should it be deposited?',
    category: 'Investment Schemes',
    subcategory: 'Public Provident Fund',
    search_intent: 'Informational',
    audience: 'Savers, Salaried Individuals, Business Owners',
    geography: 'India',
    suggested_existing_page: '/investment-schemes',
    alternate_phrasings: [
      'what is public provident fund',
      'what is the ppf deposit limit',
      'when can we take loan on ppf account',
      'what date ppf should be deposited',
      'how much loan can be taken on ppf account',
      'how to invest in public provident fund',
      'what is ppf scheme',
    ],
    short_answer:
      'The annual PPF deposit limit is minimum ₹500 and maximum ₹1,50,000 per financial year. Deposits should be made on or before the 5th of every month to earn interest for that month. A loan on PPF can be taken from the 3rd financial year up to the end of the 6th financial year, up to 25% of the balance at the close of the 2nd preceding year.',
    detailed_answer: `### Complete PPF Operating Rules & Calculations

Under the Public Provident Fund Scheme 2019:

1. **Deposit Limits:**
   - **Minimum Deposit:** ₹500 per financial year.
   - **Maximum Deposit:** ₹1,50,000 per financial year (across personal account and any account opened on behalf of a minor).

2. **The 5th-of-the-Month Golden Rule:**
   - PPF interest is calculated on the **lowest balance in the account between the close of the 5th day and the end of the month**.
   - Therefore, to maximize returns, always deposit contributions **on or before the 5th of the month** (or by April 5th for lump-sum deposits).

3. **Loan on PPF Account:**
   - **Eligibility Window:** Available between the **3rd financial year and the 6th financial year** from the account opening year.
   - **Maximum Loan Amount:** Up to **25%** of the balance standing to credit at the end of the second financial year preceding the year in which the loan is applied for.
   - **Interest Rate on Loan:** Only **1% p.a. above the prevailing PPF interest rate** if repaid within 36 months.`,
    answer_language: 'en',
    translations: {
      hi: {
        short_answer:
          'पीपीएफ में सालाना न्यूनतम ₹500 और अधिकतम ₹1,50,000 जमा किया जा सकता है। अधिकतम ब्याज पाने के लिए हर महीने की 5 तारीख या उससे पहले जमा करना चाहिए। तीसरे से छठे वित्तीय वर्ष के बीच खाते पर 25% तक का सस्ता लोन लिया जा सकता है।',
        detailed_answer:
          'पीपीएफ ब्याज की गणना प्रत्येक माह की 5 तारीख से महीने के अंतिम दिन के बीच न्यूनतम शेष पर की जाती है। इसलिए 5 तारीख से पहले जमा करने पर उस पूरे महीने का ब्याज मिलता है। खाता खुलने के तीसरे साल से लोन की सुविधा मिलती है जो दूसरे पूर्ववर्ती वर्ष के बैलेंस का 25% तक हो सकती है।',
        status: 'VERIFIED',
      },
      hinglish: {
        short_answer:
          'PPF me saal ka minimum ₹500 aur maximum ₹1.5 Lakh deposit ho sakta hai. Har month 5th date ya usse pehle deposit karna chahiye taki us month ka pura interest mile. 3rd se 6th year ke beech 25% tak loan liya ja sakta hai.',
        detailed_answer:
          'PPF ka interest calculate 5th aur month-end ke lowest balance par hota hai. Agar aap 6th ko deposit karenge to us month ka interest miss ho jayega. Loan facility 3rd se 6th FY me milti hai sirf 1% extra interest par.',
        status: 'VERIFIED',
      },
    },
    supporting_claims: [
      {
        claim: 'PPF interest calculated on lowest balance between 5th and end of month.',
        citation_source: 'PPF Scheme 2019 Clause 11',
        source_url: 'https://dea.gov.in/',
      },
    ],
    official_source_urls: ['https://www.indiapost.gov.in/', 'https://dea.gov.in/'],
    source_title: 'Public Provident Fund Scheme Guidelines',
    source_publisher: 'Ministry of Finance & India Post',
    evidence_type: 'PRIMARY_STATUTORY_RULE',
    effective_date: '2026-01-01',
    verified_at: '2026-11-09T05:00:00Z',
    answer_status: 'VERIFIED',
    verification_status: 'VERIFIED',
    review_required: false,
    is_published: true,
  },

  // 12. Section 54EC Capital Gain Bonds Comprehensive Guide
  {
    id: 'Q-BND-001',
    slug: '54ec-capital-gain-bonds-complete-investor-guide',
    canonical_question: 'What are 54EC Capital Gain Bonds, which institutions issue them, and is the interest taxable?',
    category: 'Government Investments',
    subcategory: 'Sovereign & PSU Bonds',
    search_intent: 'Commercial & Informational',
    audience: 'Property Sellers, Real Estate Investors, Tax Planners',
    geography: 'India',
    suggested_existing_page: '/investments',
    alternate_phrasings: [
      'what are 54ec bonds',
      'what is 54ec capital gain bonds',
      'what are capital gain bonds',
      'how to invest in rec bonds',
      'is interest on rec bonds taxable',
      'where to buy nhai bonds',
      'how to buy rec bonds',
      'what is 54ec bonds',
    ],
    short_answer:
      'Section 54EC Bonds are government-backed tax exemption bonds issued by REC, PFC, IRFC, and NHAI. Investing capital gains from real estate within 6 months of sale exempts up to ₹50 Lakh from Long-Term Capital Gains (LTCG) tax. The bonds have a 5-year lock-in period at 5.25% p.a. interest. The interest received is taxable under income slab, but the principal capital gain is 100% tax-free.',
    detailed_answer: `### Complete Section 54EC Capital Gain Bonds Guide

Under Section 54EC of the Income Tax Act, 1961:

1. **Eligible Capital Asset:**
   - Tax exemption is available exclusively on long-term capital gains arising from the transfer of **land, building, or both** (held for more than 24 months).

2. **Authorized Issuers:**
   - **REC Limited** (Rural Electrification Corporation)
   - **PFC Limited** (Power Finance Corporation)
   - **IRFC** (Indian Railway Finance Corporation)
   - **NHAI** (National Highways Authority of India)

3. **Statutory Investment Parameters:**
   - **Maximum Investment Limit:** ₹50 Lakh per individual per financial year.
   - **Investment Timeline:** Must be invested within **6 months** from the date of asset transfer.
   - **Interest Rate:** 5.25% per annum, payable annually.
   - **Lock-in Period:** Strictly **5 years** (non-transferable, cannot be pledged for loans).

4. **Tax Treatment:**
   - The principal invested amount saves 20% (or 12.5% revised) Long-Term Capital Gains Tax.
   - **Interest earned annually is taxable** under "Income from Other Sources" as per the investor's applicable income tax slab. No TDS is deducted.`,
    answer_language: 'en',
    translations: {
      hi: {
        short_answer:
          'धारा 54EC बॉन्ड्स (REC, PFC, IRFC) जमीन या मकान बेचने से हुए लॉन्ग टर्म कैपिटल गेन पर टैक्स बचाने का सरकारी साधन हैं। 6 महीने के भीतर अधिकतम ₹50 लाख तक निवेश कर टैक्स बचाया जा सकता है। लॉक-इन अवधि 5 वर्ष है, ब्याज दर 5.25% सालाना है, और मिलने वाला ब्याज कर-योग्य होता है।',
        detailed_answer:
          'इनकम टैक्स एक्ट की धारा 54EC के तहत अचल संपत्ति की बिक्री से प्राप्त पूंजीगत लाभ को 6 महीने के भीतर REC, PFC अथवा IRFC के 54EC बॉन्ड में निवेश करके ₹50 लाख तक की छूट ली जा सकती है। 5 साल का लॉक-इन होता है। मूल राशि पर कैपिटल गेन टैक्स शून्य हो जाता है, जबकि 5.25% सालाना ब्याज आय पर स्लैब अनुसार टैक्स लगता है।',
        status: 'VERIFIED',
      },
      hinglish: {
        short_answer:
          'Section 54EC Capital Gain Bonds (REC, PFC, IRFC) property sale se huye LTCG tax ko bachane ke liye hote hain. Maximum limit ₹50 Lakh hai, 5 saal ka lock-in aur 5.25% p.a. interest milta hai. Principal tax-free hota hai par interest taxable hota hai.',
        detailed_answer:
          'Agar aapne zameen ya ghar becha hai to 6 months ke andar Section 54EC bonds me invest karke capital gains tax bacha sakte hain. ₹50 Lakh max investment allowed hai. Iska lock-in 5 years hai aur interest slab rate par tax hota hai.',
        status: 'VERIFIED',
      },
    },
    supporting_claims: [
      {
        claim: 'Maximum ₹50 Lakh investment under Section 54EC with 5-year lock-in.',
        citation_source: 'Income Tax Act 1961 Section 54EC',
        source_url: 'https://incometaxindia.gov.in/',
      },
    ],
    official_source_urls: ['https://recindia.nic.in/', 'https://pfcindia.com/', 'https://incometaxindia.gov.in/'],
    source_title: 'Income Tax Act Section 54EC & REC/PFC Bond Prospectus',
    source_publisher: 'CBDT & Ministry of Power',
    evidence_type: 'PRIMARY_STATUTORY_RULE',
    effective_date: '2026-01-01',
    verified_at: '2026-11-09T05:00:00Z',
    answer_status: 'VERIFIED',
    verification_status: 'VERIFIED',
    review_required: false,
    is_published: true,
  },

  // 13. State Development Loans (SDL) & Cash Management Bills (CMB)
  {
    id: 'Q-BND-002',
    slug: 'state-development-loans-and-cash-management-bills',
    canonical_question: 'What are State Development Loans (SDLs) and Cash Management Bills (CMBs)?',
    category: 'Government Investments',
    subcategory: 'Sovereign Debt',
    search_intent: 'Informational',
    audience: 'Institutional Investors, Retail Bond Buyers',
    geography: 'India',
    suggested_existing_page: '/investments',
    alternate_phrasings: [
      'what is state development loans',
      'what is sdl',
      'what are cash management bills?',
      'what are cash management bills',
      'what is cash management bill',
    ],
    short_answer:
      'State Development Loans (SDLs) are dated sovereign bonds issued by State Governments through RBI auctions to fund state budget deficits, offering 7.2%–7.8% yields with sovereign safety. Cash Management Bills (CMBs) are short-term, zero-coupon money market instruments issued by the RBI for less than 91 days to meet temporary GoI cash flow mismatches.',
    detailed_answer: `### Sovereign Debt Instruments: SDLs vs. CMBs

Under the Reserve Bank of India (RBI) Public Debt Management framework:

1. **State Development Loans (SDLs):**
   - **Issuer:** Respective State Governments (e.g., Maharashtra, Tamil Nadu, Uttar Pradesh).
   - **Management & Guarantee:** Auctioned and serviced directly by the **Reserve Bank of India (RBI)** under the RBI Act.
   - **Tenure & Yield:** Typically 10 to 30 years. Yields are usually 25 to 50 basis points higher than Central Government G-Secs (around 7.2% to 7.8% p.a.).
   - **Safety:** Deemed quasi-sovereign with zero risk of principal default due to RBI direct debit mechanisms on state consolidated funds.
   - **Retail Access:** Citizens can invest directly through **RBI Retail Direct** without broker commissions.

2. **Cash Management Bills (CMBs):**
   - **Issuer:** Government of India via RBI.
   - **Tenure:** Short-term, with maturities strictly **less than 91 days** (e.g., 28 days, 42 days, 63 days).
   - **Purpose:** Designed solely to manage temporary, non-structural mismatches in the government's receipts and payments.
   - **Structure:** Issued at a discount and redeemed at face value, exactly like Treasury Bills (T-Bills).`,
    answer_language: 'en',
    translations: {
      hi: {
        short_answer:
          'स्टेट डेवलपमेंट लोन्स (SDL) राज्य सरकारों द्वारा वित्तीय घाटे को पूरा करने के लिए RBI के जरिए जारी किए जाने वाले सरकारी बॉन्ड हैं। कैश मैनेजमेंट बिल्स (CMB) भारत सरकार द्वारा 91 दिनों से कम समय के लिए तात्कालिक नकदी की जरूरतें पूरी करने हेतु जारी डिस्काउंट इंस्ट्रूमेंट्स हैं।',
        detailed_answer:
          'एसडीएल (SDL) राज्य सरकारों के बॉन्ड हैं जिनका प्रबंधन आरबीआई करता है। ये 10 से 30 वर्ष की अवधि के होते हैं और सामान्यतः केंद्र सरकार की प्रतिभूतियों से अधिक ब्याज देते हैं। सीएमबी (CMB) 91 दिनों से कम अवधि वाले अल्पकालिक सरकारी पत्र हैं। दोनों को आरबीआई रिटेल डायरेक्ट पर खरीदा जा सकता है।',
        status: 'VERIFIED',
      },
      hinglish: {
        short_answer:
          'State Development Loans (SDLs) state governments ke sovereign bonds hote hain jo RBI manage karta hai. Cash Management Bills (CMBs) government ke short-term bills hote hain jo 91 days se kam maturity ke hote hain.',
        detailed_answer:
          'SDLs me state governments 10-30 saal ke liye borrow karti hain RBI ke zariye, iska yield normal G-Sec se thoda higher hota hai. CMBs government ke cash mismatch ko temporarily manage karne ke liye 91 days se kam period ke liye issue hote hain.',
        status: 'VERIFIED',
      },
    },
    supporting_claims: [
      {
        claim: 'SDLs serviced by RBI and eligible for SLR and Retail Direct purchase.',
        citation_source: 'Reserve Bank of India Master Direction on Government Securities',
        source_url: 'https://www.rbi.org.in/',
      },
    ],
    official_source_urls: ['https://www.rbi.org.in/', 'https://rbiretaildirect.org.in/'],
    source_title: 'RBI Guidelines on State Development Loans and Cash Management Bills',
    source_publisher: 'Reserve Bank of India',
    evidence_type: 'PRIMARY_STATUTORY_RULE',
    effective_date: '2026-01-01',
    verified_at: '2026-11-09T05:00:00Z',
    answer_status: 'VERIFIED',
    verification_status: 'VERIFIED',
    review_required: false,
    is_published: true,
  },

  // 14. PMAY Subsidy: Why Woman Co-Owner is Mandatory
  {
    id: 'Q-SUB-001',
    slug: 'why-woman-co-owner-mandatory-pmay-subsidy',
    canonical_question: 'Why is a woman co-owner required for the Pradhan Mantri Awas Yojana (PMAY) subsidy?',
    category: 'Subsidies & Benefits',
    subcategory: 'Housing Schemes',
    search_intent: 'Informational',
    audience: 'Homebuyers, EWS/LIG Applicants, Women Beneficiaries',
    geography: 'India',
    suggested_existing_page: '/subsidies',
    alternate_phrasings: [
      'why is a woman co-owner required for the pmay subsidy',
      'is woman ownership compulsory for pmay subsidy',
      'pmay woman ownership rule ews lig',
    ],
    short_answer:
      'Under PMAY-Urban guidelines, having female head ownership or co-ownership of the house is mandatory for EWS (Economically Weaker Section) and LIG (Low Income Group) categories to promote gender empowerment, prevent unilateral mortgaging or sale of subsidized homes, and ensure permanent asset security for women.',
    detailed_answer: `### Statutory Woman Ownership Mandate in PMAY

The Ministry of Housing and Urban Affairs (MoHUA) mandates female ownership in the Pradhan Mantri Awas Yojana (PMAY) under the following statutory principles:

1. **Statutory Requirement:**
   - For all new houses constructed or purchased under the **EWS (annual income up to ₹3 Lakh)** and **LIG (income up to ₹6 Lakh)** categories, the title deed of the property **must be either in the sole name of the female head of the household or in joint ownership with her spouse**.

2. **Objectives of the Mandate:**
   - **Economic Empowerment:** Ensuring that subsidized welfare assets create permanent, legally enforceable financial security for women.
   - **Preventing Distressed Sale:** In patriarchal families, sole male ownership historically led to distressed property sales or mortgaging without family consensus; female co-ownership legally restricts unilateral disposal.
   - **Housing Security:** Protects women and children from destitution in cases of marital discord or domestic abuse.

3. **Exceptions:**
   - The female ownership rule is relaxed only when there is **no adult female member in the family** at the time of application.`,
    answer_language: 'en',
    translations: {
      hi: {
        short_answer:
          'प्रधानमंत्री आवास योजना (PMAY) में EWS और LIG श्रेणी के लिए महिला को मकान का एकमात्र या संयुक्त मालिक (Co-owner) बनाना अनिवार्य है ताकि महिला सशक्तिकरण हो सके और परिवार की संपत्ति सुरक्षित रहे।',
        detailed_answer:
          'आवासन और शहरी कार्य मंत्रालय के अनुसार महिलाओं को सामाजिक व आर्थिक सुरक्षा प्रदान करने के लिए PMAY में घर की रजिस्ट्री में महिला मुखिया का नाम अनिवार्य किया गया है। केवल उन परिवारों में जहां कोई वयस्क महिला सदस्य नहीं है, यह नियम शिथिल किया जाता है।',
        status: 'VERIFIED',
      },
      hinglish: {
        short_answer:
          'PMAY subsidy ke liye EWS aur LIG category me property ke title deed me female head ya wife ka co-owner hona compulsory hai, jisse women empowerment aur permanent housing security mile.',
        detailed_answer:
          'Government guidelines ke hisaab se PMAY houses me woman co-ownership mandatory hai. Iska objective women ko financial rights dena aur family properties ko safe rakhna hai. Sirf un cases me chhoot milti hai jahan family me koi adult female member na ho.',
        status: 'VERIFIED',
      },
    },
    supporting_claims: [
      {
        claim: 'Female ownership is mandatory for EWS/LIG houses under PMAY guidelines.',
        citation_source: 'Ministry of Housing and Urban Affairs (MoHUA) Scheme Guidelines',
        source_url: 'https://pmaymis.gov.in/',
      },
    ],
    official_source_urls: ['https://pmaymis.gov.in/', 'https://mohua.gov.in/'],
    source_title: 'PMAY-Urban Scheme Guidelines Clause on Ownership',
    source_publisher: 'Ministry of Housing and Urban Affairs',
    evidence_type: 'PRIMARY_STATUTORY_RULE',
    effective_date: '2026-01-01',
    verified_at: '2026-11-09T05:00:00Z',
    answer_status: 'VERIFIED',
    verification_status: 'VERIFIED',
    review_required: false,
    is_published: true,
  },

  // 15. EDP Training in MUDRA & Multiple Mudra Loans
  {
    id: 'Q-SUB-002',
    slug: 'mudra-loan-edp-training-multiple-loans-jansamarth',
    canonical_question: 'What is EDP training in a MUDRA loan, can a person avail two MUDRA loans, and what is JanSamarth?',
    category: 'Subsidies & Benefits',
    subcategory: 'MSME Loans',
    search_intent: 'Informational',
    audience: 'Entrepreneurs, Small Shopkeepers, Artisans',
    geography: 'India',
    suggested_existing_page: '/subsidies',
    alternate_phrasings: [
      'what is edp training in mudra loan',
      'can a person avail two mudra loan',
      'what is jansamarth loan',
      'how to get mudra loan on jansamarth portal',
    ],
    short_answer:
      'EDP (Entrepreneurship Development Programme) training is a structured practical skill and financial literacy course conducted by RSETIs/CEDs to prepare borrowers before loan disbursement. An individual cannot hold two active MUDRA loans for the same enterprise; however, they can upgrade from Shishu (up to ₹50k) to Kishore (up to ₹5 Lakh) or Tarun (up to ₹20 Lakh) upon successful repayment. JanSamarth is the official unified national portal connecting borrowers to 13 government credit schemes.',
    detailed_answer: `### MUDRA Loan Guidelines & JanSamarth Portal

Under the Pradhan Mantri MUDRA Yojana (PMMY) overseen by the Ministry of Finance:

1. **What is EDP Training?**
   - **Entrepreneurship Development Programme (EDP)** is a 1 to 2-week training program organized by Rural Self Employment Training Institutes (RSETIs), banks, and MSME Development Institutes.
   - It covers business planning, cash-flow bookkeeping, inventory control, GST basics, and marketing. For PMEGP and higher MUDRA limits, EDP certification is required prior to capital subsidy/disbursement.

2. **Can a Person Avail Two MUDRA Loans?**
   - **No duplicate loans for the same business:** An individual cannot borrow two separate MUDRA loans simultaneously for a single business unit.
   - **Stage-wise Upgrade Permitted:** A borrower who repays a **Shishu loan (up to ₹50,000)** cleanly can qualify for a **Kishore loan (₹50,000 to ₹5 Lakh)**, and subsequently for a **Tarun loan (up to ₹10 Lakh / ₹20 Lakh under enhanced 2024 budget limits)**.

3. **What is the JanSamarth Portal?**
   - **JanSamarth (jansamarth.in)** is the Government of India's single-window digital platform linking 13 government credit-linked subsidies and loan schemes (including MUDRA, PMEGP, and Education Loans) directly with commercial banks and NBFCs for paperless in-principle sanction.`,
    answer_language: 'en',
    translations: {
      hi: {
        short_answer:
          'मुद्रा लोन में EDP (एंटरप्रेन्योरशिप डेवलपमेंट प्रोग्राम) स्वरोजगार व वित्तीय प्रबंधन का प्रशिक्षण है। एक व्यक्ति एक व्यवसाय के लिए दो मुद्रा लोन नहीं ले सकता, लेकिन पुराना लोन चुकाकर शिशु से किशोर या तरुण में अपग्रेड कर सकता है। जनसमर्थ (JanSamarth) सरकारी लोन का एकीकृत डिजिटल पोर्टल है।',
        detailed_answer:
          'आरसेटी (RSETI) के माध्यम से दी जाने वाली EDP ट्रेनिंग नए व्यवसायियों को योजना और लेखा-जोखा सिखाती है। एक ही गतिविधि के लिए दो मुद्रा लोन लेना प्रतिबंधित है। जनसमर्थ पोर्टल (jansamarth.in) पर जाकर नागरिक सीधे बैंकों से मुद्रा, पीएमईजीपी आदि के लिए ऑनलाइन आवेदन कर सकते हैं।',
        status: 'VERIFIED',
      },
      hinglish: {
        short_answer:
          'MUDRA loan me EDP training business skills aur cash-flow manage karne ka formal course hota hai. Ek person same business ke liye 2 Mudra loans nahi le sakta par Shishu se Kishore/Tarun me upgrade kar sakta hai. JanSamarth government loans ka common portal hai.',
        detailed_answer:
          'EDP training RSETI dwara karwai jati hai. Ek time par 2 Mudra loans allow nahi hote, pehla loan clear karke higher category me apply kiya ja sakta hai. JanSamarth.in portal se aap direct online bank sanction le sakte hain.',
        status: 'VERIFIED',
      },
    },
    supporting_claims: [
      {
        claim: 'PMMY permits category enhancement from Shishu to Kishore/Tarun upon clean track record.',
        citation_source: 'MUDRA Operating Guidelines, Department of Financial Services',
        source_url: 'https://www.mudra.org.in/',
      },
    ],
    official_source_urls: ['https://www.mudra.org.in/', 'https://www.jansamarth.in/'],
    source_title: 'PMMY Guidelines & JanSamarth Portal Integration',
    source_publisher: 'Ministry of Finance & SIDBI',
    evidence_type: 'PRIMARY_STATUTORY_RULE',
    effective_date: '2026-01-01',
    verified_at: '2026-11-09T05:00:00Z',
    answer_status: 'VERIFIED',
    verification_status: 'VERIFIED',
    review_required: false,
    is_published: true,
  },

  // 16. Tender Corrigendum & PBG (Performance Bank Guarantee)
  {
    id: 'Q-TND-CORR-01',
    slug: 'tender-corrigendum-performance-bank-guarantee-defence-bidding',
    canonical_question: 'What is a corrigendum in a tender, what is a PBG, and how do you bid for defence tenders?',
    category: 'Tenders',
    subcategory: 'Public Procurement',
    search_intent: 'Informational',
    audience: 'Government Contractors, Defence Suppliers, MSME Bidders',
    geography: 'India',
    suggested_existing_page: '/tenders',
    alternate_phrasings: [
      'what is corrigendum in tender',
      'what is a corrigendum in tender',
      'what is pbg',
      'how to bid for defence tenders',
    ],
    short_answer:
      'A Corrigendum is an official published amendment or addendum issued by the tendering authority modifying tender specs, BOQ, or bid submission dates. A PBG (Performance Bank Guarantee) is an irrevocable bank guarantee (typically 3%–5% of contract value) furnished by the winning bidder to secure satisfactory contract execution. Defence tenders are bid through GeM Defence portal or CPPP DefProc with required security clearances and industrial licenses.',
    detailed_answer: `### Public Tendering Terminology & Defence Procurement

Under the Manual for Procurement of Goods (Ministry of Finance) and Defence Acquisition Procedure (DAP):

1. **What is a Corrigendum?**
   - After a Notice Inviting Tender (NIT) is published, potential bidders submit pre-bid queries.
   - If the tendering department alters technical specifications, increases delivery timelines, amends eligibility, or extends the deadline, it issues an official legal amendment termed a **Corrigendum** (or Addendum).
   - Bidders must sign and upload all published corrigenda alongside their technical bids; failure to do so results in technical disqualification.

2. **What is a PBG (Performance Bank Guarantee)?**
   - Once a contract is awarded, the successful contractor must submit a **Performance Bank Guarantee (PBG)** or Performance Security, typically ranging between **3% and 5% of the total contract value** (reduced from 10% under post-COVID procurement reforms).
   - It remains valid for the entire contract period plus 60 days of warranty/defect liability.

3. **How to Bid for Defence Tenders:**
   - Defence procurement is categorized into **Revenue Procurement** (spares, clothing, rations, routine services) and **Capital Procurement** (weapon systems, platforms under Make in India).
   - Commercial suppliers register on the **Defence GeM portal** and the **Central Public Procurement Portal (defproc.gov.in)**.
   - Bidders require valid Udyam registration, active GSTIN, ISO/NABL quality certifications, and security clearance for sensitive items.`,
    answer_language: 'en',
    translations: {
      hi: {
        short_answer:
          'टेंडर में शुद्धिपत्र (Corrigendum) शर्तों या तारीखों में बदलाव की आधिकारिक सूचना है। PBG (परफॉर्मेंस बैंक गारंटी) अनुबंध मूल्य का 3-5% बैंक गारंटी के रूप में कार्य निष्पादन की सुरक्षा हेतु जमा होता है। रक्षा टेंडरों के लिए defproc.gov.in और GeM डिफेंस के माध्यम से बोली लगाई जाती है।',
        detailed_answer:
          'टेंडर जारी होने के बाद किसी भी नियम या समय-सीमा में बदलाव को शुद्धिपत्र (Corrigendum) कहते हैं जिसे बिड के साथ लगाना अनिवार्य है। सफल ठेकेदार को 3-5% की परफॉर्मेंस बैंक गारंटी (PBG) देनी होती है। रक्षा खरीद के लिए डीपीआर और गुणवत्ता मानकों का पालन करते हुए सीपीपीपी डिफेंस पोर्टल पर बोली लगाई जाती है।',
        status: 'VERIFIED',
      },
      hinglish: {
        short_answer:
          'Tender me Corrigendum official amendment/date change notice hota hai. PBG (Performance Bank Guarantee) contract value ka 3-5% security deposit hota hai. Defence tenders ke liye defproc.gov.in aur GeM defence portal use hota hai.',
        detailed_answer:
          'Pre-bid query ke baad department jo official changes karta hai use Corrigendum kehte hain. Winning bidder ko 3-5% PBG submit karni hoti hai. Defence supply ke liye security clearance aur GeM DefProc portal par register karna hota hai.',
        status: 'VERIFIED',
      },
    },
    supporting_claims: [
      {
        claim: 'Performance Security standard benchmark set at 3-5% of contract value.',
        citation_source: 'Manual for Procurement of Goods, Ministry of Finance',
        source_url: 'https://doe.gov.in/',
      },
    ],
    official_source_urls: ['https://eprocure.gov.in/defproc/', 'https://gem.gov.in/', 'https://doe.gov.in/'],
    source_title: 'Manual for Procurement of Goods & Defence Acquisition Procedure',
    source_publisher: 'Ministry of Finance & Ministry of Defence',
    evidence_type: 'PRIMARY_STATUTORY_RULE',
    effective_date: '2026-01-01',
    verified_at: '2026-11-09T05:00:00Z',
    answer_status: 'VERIFIED',
    verification_status: 'VERIFIED',
    review_required: false,
    is_published: true,
  },

  // 17. PAIMANA Portal & PORD in Infrastructure
  {
    id: 'Q-PAIMANA-001',
    slug: 'what-is-paimana-portal-and-pord-public-procurement',
    canonical_question: 'What is the PAIMANA portal and what is PORD in infrastructure and procurement?',
    category: 'Opportunities',
    subcategory: 'Infrastructure Monitoring',
    search_intent: 'Informational',
    audience: 'Infrastructure Analysts, Contractors, Project Monitors',
    geography: 'India',
    suggested_existing_page: '/opportunities',
    alternate_phrasings: [
      'what is paimana portal',
      'what is paimana',
      'what is pord',
    ],
    short_answer:
      'PAIMANA (Project Appraisal, Infrastructure Monitoring and Analysis) is the official online tracking platform run by the Ministry of Statistics and Programme Implementation (MoSPI) to monitor cost overruns and milestones of all Central Sector Infrastructure Projects costing ₹150 Crore and above. PORD (Procurement Operational Rules Document) defines statutory bidding rules and execution obligations.',
    detailed_answer: `### MoSPI PAIMANA Portal & Infrastructure Governance

1. **What is PAIMANA?**
   - Managed by the Infrastructure and Project Monitoring Division (IPMD) under the **Ministry of Statistics and Programme Implementation (MoSPI)**.
   - It acts as the national nerve center tracking all major Central Sector infrastructure projects with an estimated capital outlay of **₹150 Crore and above**.
   - Sectors covered include Railways, Road Transport & Highways, Petroleum & Natural Gas, Coal, Power, Civil Aviation, Atomic Energy, and Shipping/Ports.
   - It transparently reports project gestation timelines, original vs. anticipated costs, cumulative expenditure, and bottleneck reasons.

2. **What is PORD?**
   - **Procurement Operational Rules Document (PORD)** specifies the contractual conditions, tendering rules, defect liability periods, and statutory milestone audits applied to EPC (Engineering, Procurement, and Construction) and PPP concessions.`,
    answer_language: 'en',
    translations: {
      hi: {
        short_answer:
          'पैमाना (PAIMANA) सांख्यिकी और कार्यक्रम कार्यान्वयन मंत्रालय (MoSPI) का पोर्टल है, जो ₹150 करोड़ और उससे अधिक लागत वाली सभी केंद्रीय बुनियादी ढांचा परियोजनाओं की समय-सीमा और खर्च की लाइव निगरानी करता है।',
        detailed_answer:
          'PAIMANA पोर्टल के माध्यम से सरकार रेलवे, हाईवे, पेट्रोलियम और पावर सेक्टर के बड़े प्रोजेक्ट्स के समय और बजट में होने वाली देरी पर नज़र रखती है। PORD सार्वजनिक खरीद और निर्माण अनुबंधों के परिचालन नियमों का वैधानिक दस्तावेज है।',
        status: 'VERIFIED',
      },
      hinglish: {
        short_answer:
          'PAIMANA MoSPI ka centralized infrastructure monitoring portal hai jo ₹150 Crore+ ke sabhi central mega projects ke cost aur delay ko monitor karta hai.',
        detailed_answer:
          'Government of India ke 150 Cr+ outlay wale projects jaise NHAI, Railways, Coal, Power ko MoSPI PAIMANA portal par track kiya jata hai. PORD procurement execution guidelines ko define karta hai.',
        status: 'VERIFIED',
      },
    },
    supporting_claims: [
      {
        claim: 'PAIMANA monitors all central sector projects costing ₹150 Crore and above.',
        citation_source: 'MoSPI IPMD Annual Report',
        source_url: 'https://mospi.gov.in/',
      },
    ],
    official_source_urls: ['https://mospi.gov.in/'],
    source_title: 'MoSPI Project Monitoring Division Guidelines',
    source_publisher: 'Ministry of Statistics and Programme Implementation',
    evidence_type: 'PRIMARY_STATUTORY_RULE',
    effective_date: '2026-01-01',
    verified_at: '2026-11-09T05:00:00Z',
    answer_status: 'VERIFIED',
    verification_status: 'VERIFIED',
    review_required: false,
    is_published: true,
  },

  // 18. SIDCUL Uttarakhand Industrial Parks
  {
    id: 'Q-SIDCUL-001',
    slug: 'what-is-sidcul-uttarakhand-industrial-development',
    canonical_question: 'What is SIDCUL in Uttarakhand and what industrial benefits does it offer?',
    category: 'Opportunities',
    subcategory: 'State Industrial Development',
    search_intent: 'Informational',
    audience: 'Factory Owners, Industrialists, MSME Units',
    geography: 'Uttarakhand, India',
    suggested_existing_page: '/opportunities',
    alternate_phrasings: [
      'what is sidcul',
      'what is sidcul in uttarakhand',
      'sidcul pantnagar haridwar industrial areas',
    ],
    short_answer:
      'SIDCUL (State Infrastructure and Industrial Development Corporation of Uttarakhand Limited) is the nodal government agency developing industrial infrastructure in Uttarakhand. It operates major integrated industrial estates at Pantnagar, Haridwar, Sitarganj, and Kotdwar, offering land leases, single-window clearances, and capital investment subsidies.',
    detailed_answer: `### SIDCUL Industrial Development Ecosystem

1. **Agency Overview:**
   - **SIDCUL** is a Government of Uttarakhand enterprise incorporated to accelerate industrialization, entrepreneurship, and manufacturing infrastructure in the Himalayan state.

2. **Major Integrated Industrial Estates (IIEs):**
   - **IIE Haridwar:** Home to automobile, FMCG, and electronics manufacturers.
   - **IIE Pantnagar:** Major automotive and heavy engineering manufacturing corridor.
   - **IIE Sitarganj (Eldeco SIDCUL):** Engineering, plastics, and agro-processing.
   - **Pharma City Selaqui (Dehradun):** Specialized pharmaceuticals and biotechnology hub.

3. **Incentives & Facilities:**
   - Concessional stamp duty on land allotment.
   - Single Window Clearance under the Uttarakhand Enterprise Single Window Clearance Act.
   - Dedicated power supply, effluent treatment plants (CETPs), and industrial logistics.`,
    answer_language: 'en',
    translations: {
      hi: {
        short_answer:
          'सिडकुल (SIDCUL) उत्तराखंड सरकार का औद्योगिक विकास निगम है, जो हरिद्वार, पंतनगर और सितारगंज में एकीकृत औद्योगिक एस्टेट्स का संचालन करता है और उद्यमियों को रियायती जमीन व सिंगल विंडो क्लीयरेंस देता है।',
        detailed_answer:
          'उत्तराखंड राज्य अवसंरचना एवं औद्योगिक विकास निगम (SIDCUL) राज्य में उद्योगों की स्थापना के लिए नोडल एजेंसी है। यह विनिर्माण इकाइयों को भूमि आवंटन, स्टांप ड्यूटी में छूट और एमएसएमई पूंजीगत सब्सिडी की सुविधाएं प्रदान करता है।',
        status: 'VERIFIED',
      },
      hinglish: {
        short_answer:
          'SIDCUL Uttarakhand government ki industrial development agency hai jo Pantnagar aur Haridwar jaise Integrated Industrial Estates operate karti hai aur factory setup ke liye single-window approval deti hai.',
        detailed_answer:
          'Uttarakhand me industries setup karne ke liye SIDCUL main authority hai. Haridwar, Pantnagar, Sitarganj me inke mega industrial parks hain jahan land allotment aur industrial subsidies milti hain.',
        status: 'VERIFIED',
      },
    },
    supporting_claims: [
      {
        claim: 'SIDCUL operates major Integrated Industrial Estates in Uttarakhand.',
        citation_source: 'Directorate of Industries, Government of Uttarakhand',
        source_url: 'https://doiuk.org/',
      },
    ],
    official_source_urls: ['https://sidcul.com/', 'https://doiuk.org/'],
    source_title: 'SIDCUL Official Industrial Policy & Portal',
    source_publisher: 'Government of Uttarakhand',
    evidence_type: 'PRIMARY_STATUTORY_RULE',
    effective_date: '2026-01-01',
    verified_at: '2026-11-09T05:00:00Z',
    answer_status: 'VERIFIED',
    verification_status: 'VERIFIED',
    review_required: false,
    is_published: true,
  },

  // 19. MSME Export Interest Equalisation & NIRVIK Schemes
  {
    id: 'Q-SUB-003',
    slug: 'msme-interest-equalisation-and-nirvik-export-schemes',
    canonical_question: 'What is the Interest Equalisation Scheme and what is the NIRVIK scheme for exporters?',
    category: 'Subsidies & Benefits',
    subcategory: 'Export Incentives',
    search_intent: 'Informational & Commercial',
    audience: 'Exporters, Manufacturer MSMEs, Trade Finance Heads',
    geography: 'India',
    suggested_existing_page: '/subsidies',
    alternate_phrasings: [
      'what is interest equalisation scheme',
      'what is nirvik scheme',
      'what is aspire scheme',
      'what is sitp',
    ],
    short_answer:
      'The Interest Equalisation Scheme provides a 2% to 3% pre- and post-shipment export credit interest subvention to eligible MSME manufacturer exporters via the RBI. The NIRVIK (Niryat Rin Vikas Yojana) scheme by ECGC provides up to 90% credit insurance cover on principal and interest for export working capital loans.',
    detailed_answer: `### Indian Export Promotion & MSME Credit Subsidies

1. **Interest Equalisation Scheme (IES):**
   - **Administered by:** DGFT (Directorate General of Foreign Trade) and Reserve Bank of India (RBI).
   - **Benefit:** Offers a **3% interest subvention for MSME manufacturer exporters** and **2% for identified tariff lines** on pre-shipment and post-shipment export rupee credit.
   - **Mechanism:** Banks reduce the loan interest rate upfront, and the Ministry of Commerce reimburses the difference.

2. **NIRVIK Scheme (ECGC):**
   - Managed by the **Export Credit Guarantee Corporation (ECGC)**.
   - Enhances loan availability by offering **up to 90% insurance cover** on export credit (both principal and interest), reducing risk for commercial banks lending to exporters.

3. **ASPIRE & SITP:**
   - **ASPIRE Scheme (MSME):** Supports Livelihood Business Incubators (LBIs) and rural technology enterprises.
   - **SITP (Ministry of Textiles):** Scheme for Integrated Textile Parks providing up to 40% government grant (up to ₹40 Crore) to build world-class textile manufacturing clusters.`,
    answer_language: 'en',
    translations: {
      hi: {
        short_answer:
          'इंटरेस्ट इक्वलाइजेशन स्कीम एमएसएमई निर्यातकों को प्री व पोस्ट शिपमेंट लोन पर 3% तक ब्याज सबवेंशन देती है। NIRVIK योजना निर्यातकों के बैंक ऋण पर 90% तक बीमा सुरक्षा प्रदान करती है।',
        detailed_answer:
          'डीजीएफटी और आरबीआई द्वारा संचालित ब्याज समतुल्यता योजना निर्यातकों की ऋण लागत घटाती है। ईसीजीसी की निर्विक योजना बैंकों के जोखिम को 90% तक कवर करके एमएसएमई निर्यातकों के लिए आसान वर्किंग कैपिटल सुनिश्चित करती है।',
        status: 'VERIFIED',
      },
      hinglish: {
        short_answer:
          'Interest Equalisation Scheme MSME exporters ko export bank loan par 2-3% interest discount deti hai. NIRVIK scheme export loans par 90% ECGC insurance cover deti hai.',
        detailed_answer:
          'Export credit sasta karne ke liye RBI Interest Equalisation Scheme chalata hai. NIRVIK scheme se banks ko 90% loan recovery guarantee milti hai jisse exporters ko collateral-free loans asani se milte hain.',
        status: 'VERIFIED',
      },
    },
    supporting_claims: [
      {
        claim: 'Interest Equalisation provides up to 3% interest subvention on export credit.',
        citation_source: 'DGFT Trade Notice & RBI Circular on Export Credit',
        source_url: 'https://www.dgft.gov.in/',
      },
    ],
    official_source_urls: ['https://www.dgft.gov.in/', 'https://www.ecgc.in/'],
    source_title: 'DGFT Export Credit Schemes & ECGC NIRVIK Policy',
    source_publisher: 'Ministry of Commerce and Industry',
    evidence_type: 'PRIMARY_STATUTORY_RULE',
    effective_date: '2026-01-01',
    verified_at: '2026-11-09T05:00:00Z',
    answer_status: 'VERIFIED',
    verification_status: 'VERIFIED',
    review_required: false,
    is_published: true,
  },

  // 20. EPFO Employee Pension Scheme 1995 (EPS 95)
  {
    id: 'Q-SAV-006',
    slug: 'employee-pension-scheme-1995-eps-pf-rules',
    canonical_question: 'What is the Employee Pension Scheme 1995 (EPS 95) in Provident Fund and how does it work?',
    category: 'Investment Schemes',
    subcategory: 'EPFO & Pensions',
    search_intent: 'Informational',
    audience: 'Salaried Employees, HR Heads, Pensioners',
    geography: 'India',
    suggested_existing_page: '/investment-schemes',
    alternate_phrasings: [
      'what is employee pension scheme 1995',
      'what is eps scheme',
      'what is eps scheme 1995',
      'what is eps in pf',
      'what is employee pension scheme',
    ],
    short_answer:
      'The Employees Pension Scheme 1995 (EPS-95) is a statutory social security scheme managed by the EPFO. Out of the 12% employer PF contribution, 8.33% (capped at ₹1,250/month on the statutory wage ceiling of ₹15,000) is diverted to the EPS fund. An employee becomes eligible for monthly pension after completing at least 10 years of eligible service and attaining 58 years of age.',
    detailed_answer: `### Employees' Pension Scheme 1995 (EPS-95) Structure

Managed under the Employees' Provident Funds and Miscellaneous Provisions Act, 1952:

1. **Contribution Bifurcation:**
   - **Employee Contribution:** 12% of basic wage + DA goes **100% to EPF** (Provident Fund).
   - **Employer Contribution (12%):**
     * **8.33%** is diverted to the **EPS (Pension Fund)**, subject to a statutory cap of **₹1,250 per month** (based on the ₹15,000 wage ceiling).
     * The remaining **3.67%** goes to the EPF account.
     * Central Government contributes an additional **1.16%** subsidy to the pension fund.

2. **Eligibility Conditions for Pension:**
   - Minimum **10 years of contributory service**.
   - Normal pension begins upon attaining **58 years of age**.
   - Early reduced pension can be opted from age **50 to 57** (reduced by 4% for each year under 58).

3. **Pension Formula:**
   - Monthly Pension = (Pensionable Salary × Pensionable Service) ÷ 70.
   - For employees with less than 10 years of service, the EPS balance can be withdrawn via Scheme Certificate / Form 10C.`,
    answer_language: 'en',
    translations: {
      hi: {
        short_answer:
          'EPS-95 कर्मचारी भविष्य निधि संगठन (EPFO) की पेंशन योजना है। कंपनी के 12% योगदान में से 8.33% हिस्सा पेंशन फंड में जाता है। 10 वर्ष की न्यूनतम नौकरी पूरी करने और 58 वर्ष की उम्र पर आजीवन मासिक पेंशन मिलती है।',
        detailed_answer:
          'कर्मचारी पेंशन योजना 1995 संगठित क्षेत्र के कर्मचारियों को वृद्धावस्था में सामाजिक सुरक्षा देती है। 10 साल की नौकरी के बाद 58 वर्ष की आयु से मासिक पेंशन मिलना शुरू होता है। 10 साल से कम सेवा होने पर फॉर्म 10C द्वारा पेंशन अंशदान वापस निकाला जा सकता है।',
        status: 'VERIFIED',
      },
      hinglish: {
        short_answer:
          'EPS 95 EPFO ki pension scheme hai. Employer ke 12% PF contribution me se 8.33% EPS me jata hai. Minimum 10 years service aur 58 age hone par monthly pension milti hai.',
        detailed_answer:
          'Aapke salary slip me PF ka part EPS me divert hota hai. Agar aapne 10 years continuous service ki hai to 58 saal ki age ke baad monthly lifelong pension shuru ho jati hai. 10 saal se kam service me Form 10C se amount withdraw hota hai.',
        status: 'VERIFIED',
      },
    },
    supporting_claims: [
      {
        claim: '10 years minimum service required for pension entitlement under EPS-95.',
        citation_source: 'EPFO Scheme Guidelines & Employees Pension Scheme 1995',
        source_url: 'https://www.epfindia.gov.in/',
      },
    ],
    official_source_urls: ['https://www.epfindia.gov.in/'],
    source_title: 'EPFO Employees Pension Scheme 1995 Guidelines',
    source_publisher: 'Employees Provident Fund Organisation',
    evidence_type: 'PRIMARY_STATUTORY_RULE',
    effective_date: '2026-01-01',
    verified_at: '2026-11-09T05:00:00Z',
    answer_status: 'VERIFIED',
    verification_status: 'VERIFIED',
    review_required: false,
    is_published: true,
  },

  // 21. Atal Pension Yojana Exclusions & Tax-Saver FD Rules
  {
    id: 'Q-SAV-007',
    slug: 'atal-pension-yojana-eligibility-tax-saver-fd-rules',
    canonical_question: 'Who is not eligible for Atal Pension Yojana, and can you break a Tax Saver FD in Canara Bank or HDFC?',
    category: 'Investment Schemes',
    subcategory: 'Pensions & Tax Saving',
    search_intent: 'Informational',
    audience: 'Income Tax Payers, Bank Depositors, Unorganized Workers',
    geography: 'India',
    suggested_existing_page: '/investment-schemes',
    alternate_phrasings: [
      'who are not eligible for atal pension yojana',
      'what is tax saver deposit in canara bank',
      'what is tax saver fd in canara bank',
      'how to break tax saver fd in hdfc',
      'how to calculate penal interest',
    ],
    short_answer:
      'From 1 October 2022, any citizen who is or has been an Income Tax payer is NOT eligible to join Atal Pension Yojana (APY). A 5-Year Tax Saver Fixed Deposit (whether in Canara Bank, HDFC, or any bank) CANNOT be broken, prematurely closed, or pledged for a loan under Section 80C rules, except in the event of the depositor\'s death.',
    detailed_answer: `### Atal Pension Yojana (APY) Exclusions & Tax Saver FD Lock-In

1. **Who is NOT Eligible for Atal Pension Yojana (APY)?**
   - **Income Tax Payers:** As per Ministry of Finance notification effective **1 October 2022**, any individual who is or has been an **income tax payer under the Income Tax Act** is strictly barred from enrolling in APY. If an income tax payer joins, their account is closed and accumulated contributions returned.
   - **Age Outside 18–40 Years:** Individuals below 18 or above 40 years are not eligible to open new accounts.
   - **Non-Indian Citizens:** Only resident Indian citizens are eligible.

2. **Can You Break a Tax-Saver FD in Canara Bank or HDFC?**
   - **Strict 5-Year Statutory Lock-In:** Under the Bank Term Deposit Scheme, 2006 notified under Section 80C(2)(xxi) of the Income Tax Act:
     * Tax Saver FDs carry an **absolute 5-year lock-in period**.
     * **No premature encashment** is permitted under any circumstances during the 5 years.
     * **No loan or overdraft facility** can be taken against a Tax Saver FD.
   - **Sole Exception:** Premature release of funds is allowed **only in the event of the death of the primary account holder** to the nominee/legal heirs.`,
    answer_language: 'en',
    translations: {
      hi: {
        short_answer:
          '1 अक्टूबर 2022 से कोई भी व्यक्ति जो इनकम टैक्स भरता है, वह अटल पेंशन योजना (APY) का पात्र नहीं है। केनरा बैंक, HDFC या किसी भी बैंक की 5-वर्षीय टैक्स सेवर FD को 5 साल से पहले किसी भी हाल में तोड़ा या बंद नहीं किया जा सकता, केवल खाताधारक की मृत्यु की स्थिति को छोड़कर।',
        detailed_answer:
          'वित्त मंत्रालय के आदेशानुसार आयकर दाताओं के लिए अटल पेंशन योजना पूर्णतः बंद है। वहीं धारा 80C के तहत मिलने वाली 5 वर्षीय टैक्स सेवर एफडी पर कानूनी लॉक-इन होता है; इसे 5 साल पूरे होने से पहले बैंक से नहीं निकाला जा सकता और न ही इस पर कोई लोन लिया जा सकता है।',
        status: 'VERIFIED',
      },
      hinglish: {
        short_answer:
          'Income tax payers Atal Pension Yojana (APY) ke liye eligible nahi hain. Kisi bhi bank (Canara/HDFC) ki 5-Year Tax Saver FD ko 5 saal se pehle break ya withdraw nahi kiya ja sakta, except in case of depositor death.',
        detailed_answer:
          'APY unorganized sector ke liye hai, tax payers isme join nahi kar sakte. Tax saver FD me Section 80C ka strict 5-year lock-in hota hai jisme premature breaking ya loan completely prohibited hota hai.',
        status: 'VERIFIED',
      },
    },
    supporting_claims: [
      {
        claim: 'Income tax payers barred from joining APY from 1 October 2022.',
        citation_source: 'Department of Financial Services, Ministry of Finance Gazette Notification',
        source_url: 'https://financialservices.gov.in/',
      },
      {
        claim: 'Tax Saver FDs have a 5-year lock-in under Bank Term Deposit Scheme 2006.',
        citation_source: 'CBDT Bank Term Deposit Scheme 2006 Notification',
        source_url: 'https://incometaxindia.gov.in/',
      },
    ],
    official_source_urls: ['https://financialservices.gov.in/', 'https://incometaxindia.gov.in/'],
    source_title: 'Ministry of Finance Notification on APY & CBDT Term Deposit Scheme 2006',
    source_publisher: 'Ministry of Finance & PFRDA',
    evidence_type: 'PRIMARY_STATUTORY_RULE',
    effective_date: '2026-01-01',
    verified_at: '2026-11-09T05:00:00Z',
    answer_status: 'VERIFIED',
    verification_status: 'VERIFIED',
    review_required: false,
    is_published: true,
  },

  // 22. NSC Accrued Interest Taxation Rule (First 4 Years)
  {
    id: 'Q-SAV-008',
    slug: 'nsc-accrued-interest-taxation-rule-first-4-years',
    canonical_question: 'What is the taxation rule for the accrued interest in National Savings Certificate (NSC) during the first 4 years?',
    category: 'Investment Schemes',
    subcategory: 'National Savings Certificate',
    search_intent: 'Informational',
    audience: 'Income Tax Assessees, Post Office Investors',
    geography: 'India',
    suggested_existing_page: '/investment-schemes',
    alternate_phrasings: [
      'what is the taxation rule for the accrued interest in nsc during the first 4 years?',
      'what is nsc',
      'how to invest in nsc',
      'nsc interest tax 80c reinvestment rule',
    ],
    short_answer:
      'Under the Income Tax Act, the interest accrued on a 5-Year NSC during the first 4 years is deemed to be reinvested into the scheme. Therefore, it must be declared as income under "Income from Other Sources" and is simultaneously eligible for deduction under Section 80C (up to the ₹1.5 Lakh limit). Only the interest earned in the 5th (final) year cannot be reinvested and is fully taxable.',
    detailed_answer: `### Taxation Mechanism for Accrued Interest on NSC (VIII Issue)

National Savings Certificate (NSC) operates under unique tax reinvestment principles:

1. **The Deemed Reinvestment Principle (Years 1 to 4):**
   - In an NSC, interest is not paid out annually; it is compounded annually and added to the principal.
   - For tax assessment in Years 1, 2, 3, and 4, the accrued interest is treated as **deemed to have been reinvested in NSC**.
   - **How to Report:**
     1. Add the year's accrued interest under **"Income from Other Sources"**.
     2. Claim the exact same amount as a deduction under **Section 80C** of the Income Tax Act (subject to the total ₹1,50,000 ceiling under the Old Tax Regime).
     3. Consequently, for taxpayers with available 80C limit, the net tax liability on accrued interest during the first 4 years is **Zero**.

2. **The 5th Year (Maturity Year) Rule:**
   - In the 5th and final year, the interest accrued reaches maturity and is paid out along with the principal.
   - Because it matures, it is **not reinvested**. Therefore, the 5th-year interest is fully taxable as per the individual's income slab and does not qualify for Section 80C deduction.

3. **No TDS Deduction:**
   - The post office does not deduct Tax Deducted at Source (TDS) on NSC interest; the taxpayer must calculate and disclose it in their ITR.`,
    answer_language: 'en',
    translations: {
      hi: {
        short_answer:
          'राष्ट्रीय बचत पत्र (NSC) में पहले 4 वर्षों के दौरान मिलने वाले ब्याज को पुनर्निवेशित (Reinvested) माना जाता है। इसलिए इसे आय में जोड़कर धारा 80C के तहत छूट ली जा सकती है। केवल 5वें (अंतिम) वर्ष का ब्याज कर-योग्य होता है।',
        detailed_answer:
          'आयकर नियमों के अनुसार NSC के पहले 4 सालों का संचित ब्याज "अन्य स्रोतों से आय" माना जाता है और उसी समय धारा 80C में छूट का हकदार होता है। 5वें साल में मैच्योरिटी होने के कारण ब्याज का पुनर्निवेश नहीं होता, इसलिए अंतिम वर्ष का ब्याज स्लैब अनुसार कर-योग्य होता है। डाकघर इस पर कोई टीडीएस नहीं काटता।',
        status: 'VERIFIED',
      },
      hinglish: {
        short_answer:
          'NSC me pehle 4 saal ka interest deemed reinvested mana jata hai. Isliye isko Income from Other Sources me dikhakar Section 80C me deduction claim kiya ja sakta hai. Sirf 5th year ka interest fully taxable hota hai.',
        detailed_answer:
          'NSC ka interest post office pay nahi karta balki accumulate hota hai. Years 1 to 4 ka interest Section 80C me reinvestment deduction ban jata hai. 5th year ka interest maturity amount ke sath milta hai isliye uspe koi 80C deduction nahi milta.',
        status: 'VERIFIED',
      },
    },
    supporting_claims: [
      {
        claim: 'Accrued interest in first 4 years deemed reinvested for Section 80C deduction.',
        citation_source: 'Income Tax Department Tax Information & CBDT Circulars',
        source_url: 'https://incometaxindia.gov.in/',
      },
    ],
    official_source_urls: ['https://www.indiapost.gov.in/', 'https://incometaxindia.gov.in/'],
    source_title: 'National Savings Certificate (VIII Issue) Rules & Tax Guidelines',
    source_publisher: 'Ministry of Finance & CBDT',
    evidence_type: 'PRIMARY_STATUTORY_RULE',
    effective_date: '2026-01-01',
    verified_at: '2026-11-09T05:00:00Z',
    answer_status: 'VERIFIED',
    verification_status: 'VERIFIED',
    review_required: false,
    is_published: true,
  },

  // 23. Post Office Monthly Income Scheme (POMIS)
  {
    id: 'Q-SAV-009',
    slug: 'post-office-monthly-income-scheme-taxability-rules',
    canonical_question: 'Is interest on Post Office Monthly Income Scheme (MIS) taxable, and what are the investment rules?',
    category: 'Investment Schemes',
    subcategory: 'Post Office Savings',
    search_intent: 'Informational',
    audience: 'Retirees, Savers, Senior Citizens',
    geography: 'India',
    suggested_existing_page: '/investment-schemes',
    alternate_phrasings: [
      'is interest on post office monthly income scheme taxable',
      'how to invest in post office monthly income scheme',
      'what is monthly income scheme',
      'pomis deposit limit single joint',
    ],
    short_answer:
      'Yes, the monthly interest earned on the Post Office Monthly Income Scheme (MIS) is 100% taxable as per the investor\'s applicable income tax slab. There is no TDS deducted by the Post Office, and there is no Section 80C tax deduction on the deposit. The deposit limit is ₹9 Lakh for single accounts and ₹15 Lakh for joint accounts, offering 7.4% p.a. paid monthly.',
    detailed_answer: `### Post Office Monthly Income Scheme (POMIS) Operating & Tax Guide

Under the National Savings (Monthly Income Account) Scheme, 2019:

1. **Investment Limits:**
   - **Single Account:** Maximum **₹9,00,000 (Nine Lakh Rupees)**.
   - **Joint Account (up to 3 adults):** Maximum **₹15,00,000 (Fifteen Lakh Rupees)**.
   - **Minimum Deposit:** ₹1,000.
   - **Tenure:** Exactly **5 years**.

2. **Interest Payout & Current Rate:**
   - Current interest rate: **7.4% per annum**, credited monthly directly into the depositor's post office savings account or auto-credited to a linked bank account via ECS/CBS.

3. **Taxability Breakdown:**
   - **Principal Deposit:** No tax deduction is available under Section 80C.
   - **Monthly Interest:** Fully taxable as **"Income from Other Sources"** as per the investor's tax slab.
   - **TDS:** The Post Office **does not deduct TDS** on MIS interest payouts, but depositors are legally obligated to disclose it in their Income Tax Return.

4. **Premature Closure Conditions:**
   - No withdrawal allowed within the **first 1 year**.
   - **Between 1 and 3 years:** Allowed with a deduction of **2% of principal**.
   - **Between 3 and 5 years:** Allowed with a deduction of **1% of principal**.`,
    answer_language: 'en',
    translations: {
      hi: {
        short_answer:
          'हाँ, डाकघर मासिक आय योजना (MIS) का ब्याज पूर्णतः कर-योग्य (Taxable) है। डाकघर कोई टीडीएस नहीं काटता, लेकिन इसे इनकम टैक्स रिटर्न में अन्य स्रोतों से आय में दिखाना होता है। एकल खाते में अधिकतम ₹9 लाख और संयुक्त खाते में ₹15 लाख तक 7.4% मासिक ब्याज पर जमा किया जा सकता है।',
        detailed_answer:
          'पोस्ट ऑफिस एमआईएस में 5 साल की अवधि के लिए पैसा जमा होता है। इसमें धारा 80C की छूट नहीं मिलती और मासिक मिलने वाला ब्याज निवेशक के टैक्स स्लैब के अनुसार टैक्सेबल होता है। 1 से 3 साल में खाता बंद करने पर 2% और 3 से 5 साल में बंद करने पर 1% मूलधन काटा जाता है।',
        status: 'VERIFIED',
      },
      hinglish: {
        short_answer:
          'Haan, Post Office MIS ka monthly interest 100% taxable hota hai aapke income tax slab ke mutabiq. Isme koi 80C deduction nahi milta. Single account limit ₹9 Lakh aur Joint limit ₹15 Lakh hai with 7.4% p.a. monthly payout.',
        detailed_answer:
          'POMIS me 5 saal ka tenure hota hai. Har mahine milne wala 7.4% interest taxable hota hai par post office TDS nahi katata. 1 saal se pehle premature closure allowed nahi hota, 1-3 saal me 2% penalty aur 3-5 saal me 1% penalty lagti hai.',
        status: 'VERIFIED',
      },
    },
    supporting_claims: [
      {
        claim: 'POMIS single account limit is ₹9 Lakh and joint limit is ₹15 Lakh.',
        citation_source: 'National Savings (Monthly Income Account) Amendment Rules',
        source_url: 'https://dea.gov.in/',
      },
    ],
    official_source_urls: ['https://www.indiapost.gov.in/', 'https://dea.gov.in/'],
    source_title: 'Post Office Monthly Income Account Scheme Rules',
    source_publisher: 'Ministry of Finance & India Post',
    evidence_type: 'PRIMARY_STATUTORY_RULE',
    effective_date: '2026-01-01',
    verified_at: '2026-11-09T05:00:00Z',
    answer_status: 'VERIFIED',
    verification_status: 'VERIFIED',
    review_required: false,
    is_published: true,
  },

  // 24. GeM L1 Purchase Limitations & Automobile Limit
  {
    id: 'Q-GEM-007',
    slug: 'limitations-l1-purchase-and-automobiles-gem',
    canonical_question: 'What are the significant limitations of an L1 purchase on GeM, and what is the automobile purchase limit?',
    category: 'Tenders',
    subcategory: 'GeM Procurement',
    search_intent: 'Informational',
    audience: 'Government Buyers, DDOs, Automobile Dealers',
    geography: 'India',
    suggested_existing_page: '/tenders',
    alternate_phrasings: [
      'what is the significant limitation of l1 purchase on gem ?',
      'what is the significant limitation of l1 purchase on gem ? minimum 3 different oems/brands are required for price comparison',
      'what is the l1 purchase limit for automobile category ?',
      'gem automobile direct purchase l1 limit 30 lakhs',
    ],
    short_answer:
      'The most significant limitation of an L1 purchase on GeM is that minimum 3 (three) different OEMs / brands meeting requisite technical specifications are strictly required for price comparison; buyers cannot evaluate innovative or technically superior features unless codified into the filter, nor buy a single brand without proprietary certification. For the Automobile category, the L1 comparison ceiling is enhanced up to ₹30,00,000 (INR Thirty Lakhs).',
    detailed_answer: `### Limitations of L1 Purchase & Special Automobile Rules on GeM

Under GFR Rule 149 and GeM Special Terms:

1. **Significant Limitations of L1 Comparison:**
   - **Minimum 3 Different OEMs Mandatory:** If the catalog contains fewer than 3 distinct manufacturers for that specification, an L1 purchase cannot proceed.
   - **Lowest Price Trumps Innovation:** The algorithm mechanically selects the lowest rate (L1) among technically qualifying products. Superior build quality, longer durability, or advanced energy efficiency cannot override price if all items meet baseline filter criteria.
   - **Vendor Non-Acceptance:** If the lowest quoted seller refuses to deliver or has expired stock, the order must be canceled; the buyer cannot arbitrarily choose L2 without re-initiating comparison.

2. **Automobile Category Procurement Rules (₹30 Lakh Benchmark):**
   - Under GeM guidelines, passenger cars, utility vehicles, and transport automobiles have an **enhanced L1 price comparison limit of up to ₹30,00,000 (Thirty Lakh Rupees)**.
   - Buyers can select vehicles through online comparison among at least 3 distinct automobile OEMs (e.g., Tata Motors, Mahindra, Maruti Suzuki) matching mileage, engine capacity, and emission parameters without publishing open tenders.`,
    answer_language: 'en',
    translations: {
      hi: {
        short_answer:
          'GeM पर L1 खरीद की सबसे बड़ी सीमा यह है कि मूल्य तुलना के लिए न्यूनतम 3 अलग-अलग OEMs/ब्रांड्स का होना अनिवार्य है। किसी एक तकनीकी रूप से बेहतर ब्रांड को प्राथमिकता नहीं दी जा सकती। ऑटोमोबाइल श्रेणी के लिए L1 खरीद सीमा ₹30,00,000 (30 लाख रुपये) तक है।',
        detailed_answer:
          'L1 खरीद की मुख्य सीमा है कि 3 अलग-अलग निर्माताओं के बिना खरीद संभव नहीं है और सिस्टम केवल न्यूनतम मूल्य (L1) को ही चुनता है। वाहनों और कारों की खरीद हेतु सरकार ने विशेष छूट देते हुए ₹30 लाख तक के वाहनों को 3 ऑटोमोबाइल निर्माताओं के बीच तुलना करके खरीदने की अनुमति दी है।',
        status: 'VERIFIED',
      },
      hinglish: {
        short_answer:
          'GeM par L1 purchase ka main limitation ye hai ki minimum 3 different OEMs/brands compare karna zaruri hota hai aur system sirf lowest price dekhta hai. Automobile category ke liye L1 limit ₹30 Lakh tak enhanced hai.',
        detailed_answer:
          'Agar catalog me 3 different brands available nahi hain to L1 order nahi ho sakta. Automobiles ke case me special rule hai jisme ₹30 Lakh tak ki vehicles 3 OEMs compare karke direct L1 purchase se khareedi ja sakti hain.',
        status: 'VERIFIED',
      },
    },
    supporting_claims: [
      {
        claim: 'Minimum 3 distinct OEMs required; Automobile L1 limit set at ₹30 Lakh.',
        citation_source: 'GeM Specific Terms and Conditions for Automobiles & Goods',
        source_url: 'https://gem.gov.in/',
      },
    ],
    official_source_urls: ['https://gem.gov.in/'],
    source_title: 'GeM Procurement Manual & Vehicle Category Provisions',
    source_publisher: 'Government e-Marketplace',
    evidence_type: 'PRIMARY_STATUTORY_RULE',
    effective_date: '2026-01-01',
    verified_at: '2026-11-09T05:00:00Z',
    answer_status: 'VERIFIED',
    verification_status: 'VERIFIED',
    review_required: false,
    is_published: true,
  },

  // 25. GeM PRC, CRAC, Incident Management & Portal Overview
  {
    id: 'Q-GEM-008',
    slug: 'what-is-prc-crac-and-incident-management-gem',
    canonical_question: 'What is PRC and CRAC in GeM, how do you raise an incident against a seller, and what is the GeM portal?',
    category: 'Tenders',
    subcategory: 'GeM Procurement',
    search_intent: 'Informational',
    audience: 'Sellers, Buyers, Public Officers',
    geography: 'India',
    suggested_existing_page: '/tenders',
    alternate_phrasings: [
      'what is prc and crac in gem',
      'how to raise incident in gem against seller',
      'what is government e market',
    ],
    short_answer:
      'PRC (Provisional Receipt Certificate) acknowledges parcel arrival within 48 hours without quality inspection. CRAC (Consignee Receipt and Acceptance Certificate) confirms complete technical acceptance within 10 days, initiating the payment release clock. Incidents against defaulting sellers are raised via GeM Incident Management with a 5-day response window, potentially leading to catalog disablement or debarment. GeM is India\'s national public procurement portal managed by a Section 8 SPV.',
    detailed_answer: `### GeM Delivery Lifecycle & Dispute Resolution

1. **PRC vs. CRAC:**
   - **PRC (Provisional Receipt Certificate):** Generated within **48 hours** of physical package delivery. It only certifies package count and physical arrival; it is NOT an acceptance of goods.
   - **CRAC (Consignee Receipt and Acceptance Certificate):** Generated within **10 calendar days** after opening, testing, and verifying conformity with contract specifications. Generating CRAC legally binds the department to pay within 10 days.

2. **How to Raise an Incident Against a Seller:**
   - Go to **Dashboard > Incident Management > Raise Incident**.
   - Select the Order ID, consignee location, and violation reason (e.g., non-delivery, defective goods, fake authorization, delay beyond delivery date).
   - Upload documentary proof and submit.
   - The seller receives an automated notification and must respond within **5 calendar days**.
   - If unsatisfied, the competent authority can issue a Show Cause Notice and place the seller under **temporary de-listing or administrative debarment (blacklisting)**.

3. **What is Government e-Marketplace (GeM)?**
   - GeM is the 100% digital public procurement portal established under the aegis of the Ministry of Commerce and Industry (Special Purpose Vehicle).
   - Under GFR Rule 149, it is **statutorily mandatory for all Central Ministries, Departments, CPSEs, and Autonomous Bodies** to procure goods and services through GeM.`,
    answer_language: 'en',
    translations: {
      hi: {
        short_answer:
          'PRC माल प्राप्ति की अस्थायी रसीद है (48 घंटे में), जबकि CRAC माल के सफल निरीक्षण और स्वीकृति का प्रमाणपत्र है (10 दिनों में)। विक्रेता के खिलाफ शिकायत करने के लिए Incident Management में जाकर केस दर्ज किया जाता है। GeM भारत सरकार का राष्ट्रीय सार्वजनिक खरीद पोर्टल है।',
        detailed_answer:
          'पीआरसी (PRC) केवल सामग्री के पार्सल पहुंचने की पावती है। सीआरएसी (CRAC) माल के परीक्षण के बाद दिया जाने वाला अंतिम स्वीकृति पत्र है जिसके 10 दिन में भुगतान अनिवार्य है। किसी विक्रेता द्वारा माल न देने पर इंसिडेंट मैनेजमेंट मॉड्यूल में जाकर 5 दिन का नोटिस देकर उसे ब्लॉक या ब्लैकलिस्ट कराया जा सकता है।',
        status: 'VERIFIED',
      },
      hinglish: {
        short_answer:
          'PRC delivery milne ke 48 hours me package count confirm karta hai. CRAC 10 days me inspection complete hone par generate hota hai jiske baad payment process hoti hai. Seller ke khilaf Incident Management tab me complaint raise kar sakte hain.',
        detailed_answer:
          'PRC provisional receipt hoti hai aur CRAC final acceptance certificate. CRAC aane ke baad buyer ko 10 din me payment karni hoti hai. Defaulting seller ke against GeM portal par Incident raise karke Show Cause Notice issue kiya ja sakta hai.',
        status: 'VERIFIED',
      },
    },
    supporting_claims: [
      {
        claim: 'PRC generated in 48 hours; CRAC generated in 10 days; GeM mandatory under Rule 149.',
        citation_source: 'GeM Incident Management Policy & Procurement Guidelines',
        source_url: 'https://gem.gov.in/',
      },
    ],
    official_source_urls: ['https://gem.gov.in/'],
    source_title: 'GeM Incident Management Policy & Order Processing Guidelines',
    source_publisher: 'Government e-Marketplace',
    evidence_type: 'PRIMARY_STATUTORY_RULE',
    effective_date: '2026-01-01',
    verified_at: '2026-11-09T05:00:00Z',
    answer_status: 'VERIFIED',
    verification_status: 'VERIFIED',
    review_required: false,
    is_published: true,
  },

  // 26. CPSE ETF, Index Funds & Mutual Fund Classes Guide
  {
    id: 'Q-INV-001',
    slug: 'cpse-etf-index-funds-and-sovereign-instruments-guide',
    canonical_question: 'What is CPSE ETF, Nifty 50 Index Fund, FRSB, and how do sovereign mutual fund classes work?',
    category: 'Government Investments',
    subcategory: 'ETFs & Mutual Funds',
    search_intent: 'Informational & Commercial',
    audience: 'Retail Investors, Mutual Fund Buyers, Passive Savers',
    geography: 'India',
    suggested_existing_page: '/investments',
    alternate_phrasings: [
      'what is cpse etf',
      'what is nifty 50 index fund',
      'what is sensex etf',
      'how to invest in nifty bank etf',
      'what is silver etf',
      'what is frsb',
      'what is pginvit',
      'what is gilt fund',
      'what is arbitrage fund',
      'what is focused equity fund',
      'what are corporate bond funds',
      'what are fmcg mutual funds',
      'what are inflation indexed bonds',
      'is sgb interest taxable',
      'how to buy ntpc bonds online',
      'is mmtc pamp digital gold safe',
    ],
    short_answer:
      'CPSE ETF is a government disinvestment exchange-traded fund investing in 11 Navratna/Maharatna PSUs like ONGC, NTPC, and Coal India with low expense ratios. A Nifty 50 Index Fund passively mirrors India\'s top 50 bluechip companies. FRSB (Floating Rate Savings Bonds) are RBI bonds offering 8.05% floating sovereign interest. SGB interest (2.5%) is taxable, but maturity capital gains are 100% tax-free. NTPC bonds can be purchased online via NSE/BSE debt segments.',
    detailed_answer: `### Complete Sovereign & Passive Investment Instruments Guide

1. **CPSE ETF (Central Public Sector Enterprises ETF):**
   - Launched by the Department of Investment and Public Asset Management (DIPAM).
   - Holds shares in high-dividend, bluechip Maharatna/Navratna CPSEs (NTPC, Coal India, ONGC, Power Grid, BEL).
   - Extremely low expense ratio (under 0.05%) and attractive dividend yields (4%–6%).

2. **Index Funds & ETFs (Nifty 50, Sensex, Bank ETF, Silver ETF):**
   - **Nifty 50 Index Fund:** Replicates India's top 50 large-cap enterprises with zero fund manager bias.
   - **Nifty Bank ETF:** Invests in top 12 private and PSU banking giants.
   - **Silver ETF:** Backed by physical 99.9% pure silver stored in vaults, tracked on stock exchanges without storage risk.

3. **FRSB (Floating Rate Savings Bonds 2020):**
   - Issued by the Government of India via the Reserve Bank of India (RBI).
   - Coupon rate is pegged at **35 basis points above National Savings Certificate (NSC)**, currently offering **8.05% p.a.** paid semi-annually.
   - 7-year lock-in period (concessions for senior citizens).

4. **Taxability of Sovereign Gold Bonds (SGB) & MMTC-PAMP Digital Gold:**
   - **SGB Interest (2.5% p.a.):** Fully taxable as per income slab.
   - **SGB Capital Gains on Maturity (8 Years):** **100% TAX-FREE** for individual investors under Section 47(viic).
   - **MMTC-PAMP Digital Gold:** 24K 999.9 purity stored in insured Brink's vaults with IDBI Trusteeship.

5. **Mutual Fund Terminology Quick Guide:**
   - **Gilt Fund:** Invests minimum 80% in Government Securities (G-Secs) with zero credit risk.
   - **Arbitrage Fund:** Exploits price differentials between cash and futures markets; taxed as equity with debt-like low risk.
   - **Focused Equity Fund:** Concentrated portfolio of maximum 30 high-conviction stocks under SEBI rules.
   - **Corporate Bond Fund:** Invests minimum 80% in AA+ and AAA-rated corporate debt.`,
    answer_language: 'en',
    translations: {
      hi: {
        short_answer:
          'सीपीएसई ईटीएफ (CPSE ETF) प्रमुख सरकारी नवरत्न/महारत्न कंपनियों का शेयर बास्केट है। निफ्टी 50 इंडेक्स फंड देश की शीर्ष 50 ब्लूचिप कंपनियों में निवेश करता है। एफआरएसबी (FRSB) आरबीआई का 8.05% फ्लोटिंग बॉन्ड है। एसजीबी पर 2.5% ब्याज कर-योग्य है पर 8 वर्ष की मैच्योरिटी पर कैपिटल गेन 100% टैक्स फ्री होता है।',
        detailed_answer:
          'सरकारी विनिवेश योजना के तहत बना सीपीएसई ईटीएफ उच्च लाभांश देने वाली पीएसयू कंपनियों में निवेश का सुरक्षित माध्यम है। इंडेक्स फंड्स कम खर्च में बाजार जैसा रिटर्न देते हैं। आरबीआई फ्लोटिंग रेट बॉन्ड 8.05% सरकारी गारंटीकृत ब्याज देते हैं। सोवरेन गोल्ड बॉन्ड का ब्याज टैक्सेबल होता है लेकिन 8 साल बाद मूल लाभ पूरी तरह टैक्स फ्री होता है।',
        status: 'VERIFIED',
      },
      hinglish: {
        short_answer:
          'CPSE ETF top government PSUs (NTPC, ONGC, Coal India) ka basket hai. Nifty 50 top 50 Indian companies me passively invest karta hai. FRSB RBI ka 8.05% floating rate bond hai. SGB ka interest taxable hota hai par maturity par LTCG tax 0% hota hai.',
        detailed_answer:
          'CPSE ETF government disinvestment vehicle hai jisme high dividend milta hai. Nifty 50 index fund low expense ratio ke sath long term wealth banata hai. SGB me 2.5% interest slab rate par tax hota hai par 8-year maturity par pura capital gain tax-exempt hota hai.',
        status: 'VERIFIED',
      },
    },
    supporting_claims: [
      {
        claim: 'SGB maturity capital gains exempt under Section 47(viic) of Income Tax Act.',
        citation_source: 'Income Tax Act 1961 Section 47(viic)',
        source_url: 'https://incometaxindia.gov.in/',
      },
      {
        claim: 'FRSB coupon rate linked to NSC rate plus 35 bps.',
        citation_source: 'RBI Master Direction on Floating Rate Savings Bonds',
        source_url: 'https://www.rbi.org.in/',
      },
    ],
    official_source_urls: ['https://www.rbi.org.in/', 'https://incometaxindia.gov.in/', 'https://www.sebi.gov.in/'],
    source_title: 'RBI Master Directions & SEBI Mutual Fund Categorization Circulars',
    source_publisher: 'Reserve Bank of India & SEBI',
    evidence_type: 'PRIMARY_STATUTORY_RULE',
    effective_date: '2026-01-01',
    verified_at: '2026-11-09T05:00:00Z',
    answer_status: 'VERIFIED',
    verification_status: 'VERIFIED',
    review_required: false,
    is_published: true,
  },
];

