export interface AyushmanArogyaItem {
  id: string;
  name: string;
  hindiName: string;
  type: 'Urban Ayushman Arogya Mandir (U-AAM)' | 'Health & Wellness Centre (HWC)' | 'Arogya Mahila & Child Clinic';
  district: string;
  pincode: string;
  address: string;
  landmark: string;
  opdTimings: string;
  moicDoctor: string;
  phone: string;
  freeMedicinesCount: number;
  freeLabTestsCount: number;
  keyFacilities: string[];
  abhaCardCounterAvailable: boolean;
}

export const AYUSHMAN_DISTRICTS = [
  'All Districts',
  'New Delhi',
  'Central Delhi',
  'South Delhi',
  'South East Delhi',
  'South West Delhi',
  'West Delhi',
  'North Delhi',
  'North West Delhi',
  'North East Delhi',
  'East Delhi',
  'Shahdara'
];

export const MOCK_AYUSHMAN_AROGYA_MANDIRS: AyushmanArogyaItem[] = [
  {
    id: 'aam-saket',
    name: 'Ayushman Arogya Mandir - Urban PHC Saket',
    hindiName: 'आयुष्मान आरोग्य मंदिर - अर्बन पीएचसी साकेत',
    type: 'Urban Ayushman Arogya Mandir (U-AAM)',
    district: 'South Delhi',
    pincode: '110017',
    address: 'Sector 3, Near SDM Office & Community Centre, Saket, New Delhi',
    landmark: 'Opposite Saket DDA Sports Complex / SDM Saket Office',
    opdTimings: 'Mon to Sat: 8:00 AM - 2:00 PM (Sunday Closed)',
    moicDoctor: 'Dr. Ritu Sharma (MBBS, DCH)',
    phone: '011-29532100 / 1800-11-4477',
    freeMedicinesCount: 212,
    freeLabTestsCount: 107,
    keyFacilities: [
      'Free General Physician OPD Consultation',
      'Free Essential Generic Medicines & Antibiotics',
      'Free Pathological & Diabetes Blood Tests',
      'Free ABHA Card & Ayushman Bharat Card Generation',
      'Maternal & Child Immunization Vaccines',
      'Hypertension & Diabetes NCD Screening'
    ],
    abhaCardCounterAvailable: true
  },
  {
    id: 'aam-daryaganj',
    name: 'Ayushman Arogya Mandir - City U-PHC Daryaganj',
    hindiName: 'आयुष्मान आरोग्य मंदिर - सिटी यू-पीएचसी दरियागंज',
    type: 'Urban Ayushman Arogya Mandir (U-AAM)',
    district: 'Central Delhi',
    pincode: '110002',
    address: 'Ansari Road, Near Golcha Cinema & Kasturba Hospital, Daryaganj, New Delhi',
    landmark: 'Near Daryaganj Police Station & MCD Community Hall',
    opdTimings: 'Mon to Sat: 8:00 AM - 2:00 PM',
    moicDoctor: 'Dr. Manoj Kumar (MBBS)',
    phone: '011-23271100',
    freeMedicinesCount: 212,
    freeLabTestsCount: 107,
    keyFacilities: [
      'Free OPD Healthcare & Medical Advice',
      'Free Essential Drug Distribution',
      'Free Diagnostic Sample Collection (KMC)',
      'Ayushman Card e-KYC & Verification',
      'Child Nutrition & Tuberculosis Screening'
    ],
    abhaCardCounterAvailable: true
  },
  {
    id: 'aam-civil-lines',
    name: 'Ayushman Arogya Mandir - Old Secretariat Civil Lines',
    hindiName: 'आयुष्मान आरोग्य मंदिर - ओल्ड सेक्रेटेरिएट सिविल लाइन्स',
    type: 'Health & Wellness Centre (HWC)',
    district: 'North Delhi',
    pincode: '110054',
    address: 'Rajpur Road, Opposite Vidhan Sabha Metro Station, Civil Lines, Delhi',
    landmark: 'Near Delhi Assembly Gate 2 & Tis Hazari Metro Line',
    opdTimings: 'Mon to Sat: 8:00 AM - 2:00 PM',
    moicDoctor: 'Dr. Sunita Verma (MBBS, MD Community Medicine)',
    phone: '011-23812234',
    freeMedicinesCount: 212,
    freeLabTestsCount: 107,
    keyFacilities: [
      'General Wellness & Tele-consultation',
      'Free Blood Sugar, Lipid Profile & CBC Tests',
      'Elderly Care & Palliative Support',
      'Free Prescription Medicines',
      'ABHA Digital Health Locker Assistance'
    ],
    abhaCardCounterAvailable: true
  },
  {
    id: 'aam-dwarka-sec6',
    name: 'Ayushman Arogya Mandir - Urban PHC Dwarka Sector 6',
    hindiName: 'आयुष्मान आरोग्य मंदिर - अर्बन पीएचसी द्वारका सेक्टर 6',
    type: 'Urban Ayushman Arogya Mandir (U-AAM)',
    district: 'South West Delhi',
    pincode: '110075',
    address: 'Near Central Park & DDA Market, Sector 6, Dwarka, New Delhi',
    landmark: 'Behind Dwarka Sector 6 Central Market',
    opdTimings: 'Mon to Sat: 8:00 AM - 2:00 PM',
    moicDoctor: 'Dr. Arvind Meena (MBBS)',
    phone: '011-25081190',
    freeMedicinesCount: 212,
    freeLabTestsCount: 107,
    keyFacilities: [
      'Free OPD Doctor Consultation',
      'Free Blood Sugar & Hemoglobin Testing',
      'Essential Antihypertensive & Anti-Diabetic Medicines',
      'ABHA Digital Health ID Activation',
      'Pregnant Women Antenatal Care (ANC)'
    ],
    abhaCardCounterAvailable: true
  },
  {
    id: 'aam-lajpat-nagar',
    name: 'Ayushman Arogya Mandir - Central Market Lajpat Nagar',
    hindiName: 'आयुष्मान आरोग्य मंदिर - सेंट्रल मार्केट लाजपत नगर',
    type: 'Urban Ayushman Arogya Mandir (U-AAM)',
    district: 'South Delhi',
    pincode: '110024',
    address: 'Block 2, Near Municipal School & Jal Vihar, Lajpat Nagar 2, New Delhi',
    landmark: 'Near Lajpat Nagar Metro Station Gate 1',
    opdTimings: 'Mon to Sat: 8:00 AM - 2:00 PM',
    moicDoctor: 'Dr. Priyanshu Gupta (MBBS)',
    phone: '011-29831122',
    freeMedicinesCount: 212,
    freeLabTestsCount: 107,
    keyFacilities: [
      'Free General OPD & Chronic Disease Care',
      'Free Lab Testing & Sample Collection',
      'Free Generic Drugs Distribution',
      'ABHA ID & Ayushman Bharat Card Counter',
      'Routine Child Vaccination'
    ],
    abhaCardCounterAvailable: true
  },
  {
    id: 'aam-laxmi-nagar',
    name: 'Ayushman Arogya Mandir - Vikas Marg Laxmi Nagar',
    hindiName: 'आयुष्मान आरोग्य मंदिर - विकास मार्ग लक्ष्मी नगर',
    type: 'Urban Ayushman Arogya Mandir (U-AAM)',
    district: 'East Delhi',
    pincode: '110092',
    address: 'Vijay Block, Near Laxmi Nagar Metro Station Gate 4, Vikas Marg, Delhi',
    landmark: 'Behind Laxmi Nagar Commercial Hub & MCD Dispensary',
    opdTimings: 'Mon to Sat: 8:00 AM - 2:00 PM',
    moicDoctor: 'Dr. Pooja Roy (MBBS)',
    phone: '011-22501099',
    freeMedicinesCount: 212,
    freeLabTestsCount: 107,
    keyFacilities: [
      'Free OPD Medical Checkup',
      'Free Essential Medicines Supply',
      'Free Blood & Urine Diagnostic Screening',
      'Ayushman Bharat Digital Health Card Desk',
      'Vector-Borne Dengue / Malaria Screening'
    ],
    abhaCardCounterAvailable: true
  },
  {
    id: 'aam-rohini-sec7',
    name: 'Ayushman Arogya Mandir - Rohini Sector 7',
    hindiName: 'आयुष्मान आरोग्य मंदिर - रोहिणी सेक्टर 7',
    type: 'Health & Wellness Centre (HWC)',
    district: 'North West Delhi',
    pincode: '110085',
    address: 'Pocket 12, Near DDA Market & Mother Dairy, Rohini Sector 7, Delhi',
    landmark: 'Near Rohini West Metro Station',
    opdTimings: 'Mon to Sat: 8:00 AM - 2:00 PM',
    moicDoctor: 'Dr. S.K. Bansal (MBBS)',
    phone: '011-27051230',
    freeMedicinesCount: 212,
    freeLabTestsCount: 107,
    keyFacilities: [
      'Primary Healthcare & OPD Consultation',
      'Free Medicines & Prescription Fulfillment',
      'Diabetes & Hypertension Continuous Monitoring',
      'ABHA ID Registration & Ayushman Card Desk'
    ],
    abhaCardCounterAvailable: true
  },
  {
    id: 'aam-shahdara-gt',
    name: 'Ayushman Arogya Mandir - Shahdara GT Road',
    hindiName: 'आयुष्मान आरोग्य मंदिर - शाहदरा जीटी रोड',
    type: 'Urban Ayushman Arogya Mandir (U-AAM)',
    district: 'Shahdara',
    pincode: '110032',
    address: 'Near Old Bus Stand & Shyam Lal College, GT Road Shahdara, Delhi',
    landmark: 'Near Welcome Metro Junction & MCD Hospital',
    opdTimings: 'Mon to Sat: 8:00 AM - 2:00 PM',
    moicDoctor: 'Dr. Farooq Siddiqui (MBBS)',
    phone: '011-22321140',
    freeMedicinesCount: 212,
    freeLabTestsCount: 107,
    keyFacilities: [
      'Free General Physician OPD',
      'Free Laboratory Tests & Blood Profiles',
      'Free Essential Medicines',
      'Ayushman Card e-KYC Counter',
      'Polio & Routine Immunization Center'
    ],
    abhaCardCounterAvailable: true
  },
  {
    id: 'aam-janakpuri',
    name: 'Ayushman Arogya Mandir - Janakpuri B-Block',
    hindiName: 'आयुष्मान आरोग्य मंदिर - जनकपुरी बी-ब्लॉक',
    type: 'Arogya Mahila & Child Clinic',
    district: 'West Delhi',
    pincode: '110058',
    address: 'B-Block DDA Community Park, Near District Centre, Janakpuri, New Delhi',
    landmark: 'Near Janakpuri West Metro Station Gate 3',
    opdTimings: 'Mon to Sat: 8:00 AM - 2:00 PM',
    moicDoctor: 'Dr. Vandana Malhotra (MBBS, DGO)',
    phone: '011-25501880',
    freeMedicinesCount: 212,
    freeLabTestsCount: 107,
    keyFacilities: [
      'Women & Child Specialized Primary Healthcare',
      'Maternal Care & Free Nutritional Supplements',
      'Free OPD Medical Checkups',
      'Free Generic Medicines & Diagnostics',
      'ABHA Health ID Generation'
    ],
    abhaCardCounterAvailable: true
  },
  {
    id: 'aam-nizamuddin',
    name: 'Ayushman Arogya Mandir - Jangpura Nizamuddin',
    hindiName: 'आयुष्मान आरोग्य मंदिर - जंगपुरा निजामुद्दीन',
    type: 'Urban Ayushman Arogya Mandir (U-AAM)',
    district: 'South East Delhi',
    pincode: '110013',
    address: 'Near Nizamuddin Railway Station Approach Road, Jangpura, New Delhi',
    landmark: 'Near Hazrat Nizamuddin Police Station',
    opdTimings: 'Mon to Sat: 8:00 AM - 2:00 PM',
    moicDoctor: 'Dr. Asif Iqbal (MBBS)',
    phone: '011-24351080',
    freeMedicinesCount: 212,
    freeLabTestsCount: 107,
    keyFacilities: [
      'Free OPD Consultation & Medicines',
      'Free Pathology Diagnostics',
      'Elderly Geriatric Care',
      'ABHA Card Enrollment Desk'
    ],
    abhaCardCounterAvailable: true
  }
];

export function getMatchingAyushmanMandirs(
  districtFilter?: string, 
  queryStr?: string
): AyushmanArogyaItem[] {
  const cleanDistrict = districtFilter && districtFilter !== 'All Districts' ? districtFilter.toLowerCase() : '';
  const cleanQuery = queryStr ? queryStr.trim().toLowerCase() : '';

  const matched = MOCK_AYUSHMAN_AROGYA_MANDIRS.filter(item => {
    const matchesDistrict = !cleanDistrict || item.district.toLowerCase().includes(cleanDistrict);

    if (!cleanQuery) return matchesDistrict;

    const matchesName = item.name.toLowerCase().includes(cleanQuery);
    const matchesHindiName = item.hindiName.includes(cleanQuery);
    const matchesPincode = item.pincode.includes(cleanQuery);
    const matchesAddress = item.address.toLowerCase().includes(cleanQuery);
    const matchesLandmark = item.landmark.toLowerCase().includes(cleanQuery);
    const matchesDistrictName = item.district.toLowerCase().includes(cleanQuery);
    const matchesDoctor = item.moicDoctor.toLowerCase().includes(cleanQuery);

    return matchesDistrict && (matchesName || matchesHindiName || matchesPincode || matchesAddress || matchesLandmark || matchesDistrictName || matchesDoctor);
  });

  if (cleanQuery && matched.length === 0) {
    const capitalizedQuery = queryStr!.trim().charAt(0).toUpperCase() + queryStr!.trim().slice(1);
    const isPin = /^\d{6}$/.test(cleanQuery);
    const dynamicPincode = isPin ? cleanQuery : '110001';

    const dynamicItems: AyushmanArogyaItem[] = [
      {
        id: `dyn-aam-${cleanQuery}`,
        name: `Ayushman Arogya Mandir - Urban HWC ${capitalizedQuery}`,
        hindiName: `आयुष्मान आरोग्य मंदिर - अर्बन एचडब्ल्यूसी ${capitalizedQuery}`,
        type: 'Urban Ayushman Arogya Mandir (U-AAM)',
        district: districtFilter && districtFilter !== 'All Districts' ? districtFilter : 'Delhi NCT Health Circle',
        pincode: dynamicPincode,
        address: `Primary Health Care Centre, Sector / Ward Area, ${capitalizedQuery}, Delhi NCR`,
        landmark: `Near Local Municipal Dispensary / Government School, ${capitalizedQuery}`,
        opdTimings: 'Mon to Sat: 8:00 AM - 2:00 PM',
        moicDoctor: 'Medical Officer In-Charge (Govt. Medical Service)',
        phone: '1800-11-4477 / 011-22302441',
        freeMedicinesCount: 212,
        freeLabTestsCount: 107,
        keyFacilities: [
          'Free OPD Consultation with MBBS Doctor',
          'Free Essential Medicines (212 Generic Drugs)',
          'Free Diagnostic Tests (107 Pathological Tests)',
          'Free ABHA Card & Ayushman Bharat Card Desk',
          'Maternal & Child Immunization Care'
        ],
        abhaCardCounterAvailable: true
      }
    ];

    return dynamicItems;
  }

  return matched;
}
