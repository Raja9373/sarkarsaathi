export interface SarkariNewsItem {
  id: string;
  title: string;
  hindiTitle: string;
  ministry: string;
  category: 'Yojana' | 'Job' | 'Policy' | 'Tender' | 'Citizen Welfare';
  date: string;
  summary: string;
  hindiSummary: string;
  sourceUrl: string;
  state?: string;
  isUrgent?: boolean;
}

export const OFFICIAL_SARKARI_NEWS: SarkariNewsItem[] = [
  {
    id: 'pib-2026-pm-kisan-20th',
    title: 'Cabinet Approves Release of Next Installment Under PM-KISAN Scheme for 9.5 Crore Beneficiary Farmers',
    hindiTitle: 'केंद्रीय मंत्रिमंडल ने 9.5 करोड़ किसान लाभार्थियों के लिए पीएम-किसान की अगली किस्त को मंजूरी दी',
    ministry: 'Ministry of Agriculture & Farmers Welfare',
    category: 'Yojana',
    date: 'August 17, 2026',
    summary: 'Direct benefit transfer of Rs 2,000 to eligible farmer bank accounts via Aadhaar-seeded NPCI gateway approved across all States and UTs.',
    hindiSummary: 'सभी राज्यों और केंद्र शासित प्रदेशों में आधार-सीडेड बैंक खातों में ₹2,000 की राशि सीधे डीबीटी के माध्यम से ट्रांसफर की जा रही है।',
    sourceUrl: 'https://pib.gov.in',
    state: 'all',
    isUrgent: true
  },
  {
    id: 'pib-2026-ayushman-senior',
    title: 'Ayushman Bharat AB-PMJAY Universal Health Coverage Extended to All Citizens Aged 70 and Above',
    hindiTitle: 'आयुष्मान भारत के तहत 70 वर्ष और उससे अधिक आयु के सभी वरिष्ठ नागरिकों को ₹5 लाख का मुफ्त स्वास्थ्य कवर',
    ministry: 'Ministry of Health & Family Welfare',
    category: 'Citizen Welfare',
    date: 'August 16, 2026',
    summary: 'Special Ayushman Vaya Vandana Card issuance commenced across nationwide CSCs and hospitals irrespective of family income limit.',
    hindiSummary: 'पारिवारिक आय सीमा के बिना 70 वर्ष से अधिक उम्र के बुजुर्गों के लिए विशेष आयुष्मान वय वंदना कार्ड जारी करने की प्रक्रिया शुरू।',
    sourceUrl: 'https://pib.gov.in',
    state: 'all',
    isUrgent: true
  },
  {
    id: 'pib-2026-punjab-agriculture',
    title: 'Punjab Govt Announces Crop Diversification Incentive and Direct Canal Water Bonus for Farmers',
    hindiTitle: 'पंजाब सरकार द्वारा फसल विविधीकरण प्रोत्साहन एवं नहरी पानी उपयोग पर विशेष सब्सिडी की घोषणा',
    ministry: 'Punjab Dept of Agriculture & Farmers Welfare',
    category: 'Yojana',
    date: 'August 15, 2026',
    summary: 'Direct transfer of Rs 7,000 per acre announced for adopting direct seeding of rice (DSR) and pulse cultivation in Punjab districts.',
    hindiSummary: 'पंजाब के किसानों को सीधी बुवाई और दलहन उत्पादन अपनाने पर ₹7,000 प्रति एकड़ की सीधी सब्सिडी की घोषणा।',
    sourceUrl: 'https://pib.gov.in',
    state: 'punjab'
  },
  {
    id: 'pib-2026-maharashtra-ladki-bahin',
    title: 'Maharashtra Mukhyamantri Majhi Ladki Bahin Yojana Milestone: 1.8 Crore Women Receive Direct Monthly Financial Assistance',
    hindiTitle: 'महाराष्ट्र मुख्यमंत्री माझी लाडकी बहीण योजना: 1.8 करोड़ महिलाओं को ₹1,500 की मासिक किस्त सीधे खाते में',
    ministry: 'Maharashtra Women & Child Development',
    category: 'Yojana',
    date: 'August 15, 2026',
    summary: 'State-wide verification completed for Aadhaar-linked bank accounts with zero fee e-KYC available at all Aaple Sarkar Setu centres.',
    hindiSummary: 'आपले सरकार सेतु केंद्रों पर आधार लिंक सत्यापन के बाद महिलाओं को सीधे बैंक खाते में आर्थिक सहायता।',
    sourceUrl: 'https://pib.gov.in',
    state: 'maharashtra'
  },
  {
    id: 'pib-2026-assam-orunodoi',
    title: 'Assam Orunodoi 3.0 Registration Drive Begins Across All Districts with Enhanced Monthly Support',
    hindiTitle: 'असम ओरुनोदोई 3.0 का नया चरण शुरू: पात्र परिवारों को प्रति माह ₹1,400 की सीधी सहायता',
    ministry: 'Assam Finance & Social Welfare Department',
    category: 'Yojana',
    date: 'August 14, 2026',
    summary: 'Expanded coverage to include additional ration card holders and special self-help group members across rural Assam.',
    hindiSummary: 'असम के ग्रामीण और शहरी इलाकों में राशन कार्ड धारक महिलाओं के लिए वित्तीय सुरक्षा योजना का विस्तार।',
    sourceUrl: 'https://pib.gov.in',
    state: 'assam'
  },
  {
    id: 'pib-2026-karnataka-gruha',
    title: 'Karnataka Gruha Lakshmi & Shakti Free Bus Travel Surpasses 300 Crore Passenger Journeys',
    hindiTitle: 'कर्नाटक गृह लक्ष्मी योजना एवं शक्ति योजना: महिलाओं के लिए 300 करोड़ निःशुल्क यात्राएं पूरी',
    ministry: 'Karnataka Transport & Women Welfare',
    category: 'Citizen Welfare',
    date: 'August 14, 2026',
    summary: 'State transport corporations operate special smart ticketing counters at KSRTC and BMTC bus terminals.',
    hindiSummary: 'कर्नाटक राज्य की महिलाओं के लिए सरकारी बसों में मुफ्त यात्रा और परिवार की मुखिया को ₹2,000 की मासिक सहायता जारी।',
    sourceUrl: 'https://pib.gov.in',
    state: 'karnataka'
  },
  {
    id: 'pib-2026-up-kanya-sumangala',
    title: 'Uttar Pradesh Increases Mukhyamantri Kanya Sumangala Yojana Grant to Rs 25,000 Per Girl Child',
    hindiTitle: 'उत्तर प्रदेश: मुख्यमंत्री कन्या सुमंगला योजना की सहायता राशि बढ़ाकर ₹25,000 की गई',
    ministry: 'UP Women and Child Development',
    category: 'Yojana',
    date: 'August 13, 2026',
    summary: 'Staged financial assistance from birth to college degree for girl children residing in Uttar Pradesh.',
    hindiSummary: 'बालिकाओं के जन्म से लेकर स्नातक तक छह चरणों में ₹25,000 की कुल आर्थिक सहायता उपलब्ध।',
    sourceUrl: 'https://pib.gov.in',
    state: 'uttar-pradesh'
  },
  {
    id: 'pib-2026-bihar-student-credit',
    title: 'Bihar Student Credit Card Scheme: Loan Approval Process Fully Automated Online with 0% Interest for Girls',
    hindiTitle: 'बिहार स्टूडेंट क्रेडिट कार्ड योजना: उच्च शिक्षा के लिए ₹4 लाख तक का शिक्षा ऋण अब पूरी तरह ऑनलाइन',
    ministry: 'Bihar Education Department',
    category: 'Yojana',
    date: 'August 12, 2026',
    summary: 'Automated sanctioning portal launched for students taking admission in recognized polytechnic, engineering, and medical institutes.',
    hindiSummary: 'इंजीनियरिंग, मेडिकल व सामान्य उच्च शिक्षा के लिए छात्रों को ₹4 लाख तक का ऋण 1% और छात्राओं को 0% ब्याज पर।',
    sourceUrl: 'https://pib.gov.in',
    state: 'bihar'
  },
  {
    id: 'pib-2026-tamilnadu-pudhumai-penn',
    title: 'Tamil Nadu Pudhumai Penn and Tamil Pudhalvan Higher Education Incentive Portal Opens for Fresh Batch',
    hindiTitle: 'तमिलनाडु पुधुमई पेन योजना: सरकारी स्कूल के विद्यार्थियों को उच्च शिक्षा हेतु ₹1,000 मासिक प्रोत्साहन',
    ministry: 'Tamil Nadu Higher Education Department',
    category: 'Yojana',
    date: 'August 11, 2026',
    summary: 'Monthly stipend transferred directly to bank accounts of students enrolled in degree, diploma, and ITI courses.',
    hindiSummary: 'सरकारी स्कूलों से 6वीं से 12वीं तक पढ़े विद्यार्थियों को कॉलेज में प्रति माह ₹1,000 का सीधा अनुदान।',
    sourceUrl: 'https://pib.gov.in',
    state: 'tamil-nadu'
  },
  {
    id: 'pib-2026-solar-rooftop-muft-bijli',
    title: 'PM Surya Ghar: Muft Bijli Yojana Crosses 1.5 Crore Registrations with Subsidies Up to Rs 78,000',
    hindiTitle: 'पीएम सूर्य घर मुफ्त बिजली योजना: 300 यूनिट मुफ्त बिजली और ₹78,000 तक की सीधी सब्सिडी',
    ministry: 'Ministry of New and Renewable Energy',
    category: 'Yojana',
    date: 'August 10, 2026',
    summary: 'Rooftop solar installation subsidy credited within 30 days of net-metering inspection across all DISCOMs in India.',
    hindiSummary: 'छतों पर सोलर पैनल लगाने के लिए राष्ट्रीय पोर्टल पर आवेदन करें, ₹78,000 तक की सब्सिडी बैंक खाते में उपलब्ध।',
    sourceUrl: 'https://pib.gov.in',
    state: 'all'
  },
  {
    id: 'pib-2026-digital-driving-licence',
    title: 'Ministry of Road Transport & Highways Implements 100% Faceless DL Renewal and e-Challan Settlement',
    hindiTitle: 'सड़क परिवहन मंत्रालय: ड्राइविंग लाइसेंस नवीनीकरण और ई-चालान समाधान अब पूर्णतः फेसलेस',
    ministry: 'Ministry of Road Transport and Highways (MoRTH)',
    category: 'Policy',
    date: 'August 09, 2026',
    summary: 'Aadhaar authentication enables instant DL renewal, address change, and international driving permit without RTO visit.',
    hindiSummary: 'परिवहन सेवा पोर्टल पर आधार प्रमाणीकरण के साथ बिना आरटीओ गए लाइसेंस नवीनीकरण और पता परिवर्तन की सुविधा।',
    sourceUrl: 'https://pib.gov.in',
    state: 'all'
  },
  {
    id: 'pib-2026-delhi-solar-policy',
    title: 'Delhi Solar Policy 2026: Zero Electricity Bills and Generation Generation-Based Incentive (GBI) Extended',
    hindiTitle: 'दिल्ली सौर ऊर्जा नीति: घरेलू उपभोक्ताओं के लिए बिजली बिल शून्य और ₹3/यूनिट उत्पादन प्रोत्साहन',
    ministry: 'Delhi Power Department',
    category: 'Policy',
    date: 'August 08, 2026',
    summary: 'Delhi residents installing rooftop solar units get net-metering and monthly GBI transferred to bank accounts.',
    hindiSummary: 'दिल्ली में सोलर पैनल लगाने वाले उपभोक्ताओं को मासिक बिजली बिल में छूट और अतिरिक्त उत्पादन पर सीधे बैंक में इंसेंटिव।',
    sourceUrl: 'https://pib.gov.in',
    state: 'delhi'
  }
];

export async function fetchSarkariNews(filterState?: string): Promise<SarkariNewsItem[]> {
  const normState = filterState ? filterState.toLowerCase().trim() : '';

  if (!normState || normState === 'all' || normState === 'national' || normState === 'in') {
    return OFFICIAL_SARKARI_NEWS;
  }

  const stateMatched = OFFICIAL_SARKARI_NEWS.filter(item => {
    if (item.state === 'all' || !item.state) return true;
    return (
      item.state.toLowerCase() === normState ||
      (normState === 'up' && item.state === 'uttar-pradesh') ||
      (normState === 'mh' && item.state === 'maharashtra') ||
      (normState === 'pb' && item.state === 'punjab') ||
      (normState === 'tn' && item.state === 'tamil-nadu') ||
      (normState === 'ka' && item.state === 'karnataka') ||
      (normState === 'wb' && item.state === 'west-bengal') ||
      (normState === 'as' && item.state === 'assam') ||
      (normState === 'dl' && item.state === 'delhi')
    );
  });

  return stateMatched.length > 0 ? stateMatched : OFFICIAL_SARKARI_NEWS;
}
