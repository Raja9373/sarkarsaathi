export interface PassportOfficeItem {
  id: string;
  name: string;
  type: 'PSK (Passport Seva Kendra)' | 'POPSK (Post Office PSK)' | 'RPO (Regional Passport Office)';
  region: string;
  address: string;
  pincode: string;
  phone: string;
  timings: string;
  landmark: string;
  servicesOffered: string[];
  appointmentRequired: boolean;
  isMainRpo?: boolean;
}

export const DELHI_PASSPORT_REGIONS = [
  'All Regions',
  'Central & New Delhi',
  'North & West Delhi',
  'South Delhi & Dwarka',
  'East & North East Delhi',
  'NCR (Noida / Gurgaon / Ghaziabad)'
];

export const MOCK_DELHI_PASSPORT_OFFICES: PassportOfficeItem[] = [
  // --- REGIONAL PASSPORT OFFICE (RPO) ---
  {
    id: 'rpo-bhikaji-cama',
    name: 'Regional Passport Office (RPO) Delhi',
    type: 'RPO (Regional Passport Office)',
    region: 'South Delhi & Dwarka',
    address: 'HUDCO Vishala Building, 14 Bhikaji Cama Place, RK Puram, New Delhi',
    pincode: '110066',
    phone: '011-26182269 / 1800-258-1800',
    timings: '09:30 AM - 04:30 PM (Mon-Fri, Excl Public Holidays)',
    landmark: 'Near Bhikaji Cama Place Metro Station & Hyatt Regency',
    servicesOffered: [
      'Complex Passport Verification Enquiries',
      'Lost / Damaged Passport Hearing',
      'PCC Verification Appeal',
      'Name Change Court Order Cases',
      'Adoption & Surrender Certificate'
    ],
    appointmentRequired: true,
    isMainRpo: true
  },

  // --- PASSPORT SEVA KENDRAS (PSK) ---
  {
    id: 'psk-ito-herald-house',
    name: 'Passport Seva Kendra (PSK) Herald House - ITO',
    type: 'PSK (Passport Seva Kendra)',
    region: 'Central & New Delhi',
    address: 'Herald House, 5A, Bahadur Shah Zafar Marg, Rouse Avenue, ITO, New Delhi',
    pincode: '110002',
    phone: '1800-258-1800 (National Helpline)',
    timings: '09:00 AM - 05:30 PM (Mon-Fri)',
    landmark: 'Opposite Income Tax Office, Near ITO Metro Station Gate 1',
    servicesOffered: [
      'Fresh Normal Passport',
      'Tatkaal Passport Processing',
      'Passport Re-issue / Renewal',
      'Police Clearance Certificate (PCC)',
      'Minor Passport Application',
      'Address & Name Modification'
    ],
    appointmentRequired: true
  },
  {
    id: 'psk-shalimar-bagh',
    name: 'Passport Seva Kendra (PSK) Shalimar Bagh / NSP',
    type: 'PSK (Passport Seva Kendra)',
    region: 'North & West Delhi',
    address: 'Plot No. 11, AGD Tower, Netaji Subhash Place, Pitampura / Shalimar Bagh, New Delhi',
    pincode: '110034',
    phone: '1800-258-1800',
    timings: '09:00 AM - 05:30 PM (Mon-Fri)',
    landmark: 'Near Netaji Subhash Place (NSP) Metro Station Gate 2',
    servicesOffered: [
      'Fresh Passport Application',
      'Tatkaal Passport Service',
      'Passport Re-issue / Validity Extension',
      'Police Clearance Certificate (PCC)',
      'Child / Minor Passport'
    ],
    appointmentRequired: true
  },
  {
    id: 'psk-rk-puram',
    name: 'Passport Seva Kendra (PSK) RK Puram / Bhikaji Cama',
    type: 'PSK (Passport Seva Kendra)',
    region: 'South Delhi & Dwarka',
    address: 'Ground Floor, HUDCO Vishala Building, Bhikaji Cama Place, RK Puram, New Delhi',
    pincode: '110066',
    phone: '1800-258-1800',
    timings: '09:00 AM - 05:30 PM (Mon-Fri)',
    landmark: 'Adjacent to RPO Delhi, Near Bhikaji Cama Metro',
    servicesOffered: [
      'Fresh Normal & Tatkaal Passport',
      'Re-issue due to Exhaustion / Loss',
      'PCC Issuance',
      'Biometric Capture & Verification'
    ],
    appointmentRequired: true
  },
  {
    id: 'psk-gurgaon',
    name: 'Passport Seva Kendra (PSK) Gurugram',
    type: 'PSK (Passport Seva Kendra)',
    region: 'NCR (Noida / Gurgaon / Ghaziabad)',
    address: 'MM Towers, Plot No 8 & 9, Udyog Vihar Phase IV, Gurugram, Haryana',
    pincode: '122015',
    phone: '1800-258-1800',
    timings: '09:00 AM - 05:30 PM (Mon-Fri)',
    landmark: 'Near Maruti Suzuki Gate 2 & NH-48 Express Highway',
    servicesOffered: [
      'Fresh Passport',
      'Tatkaal Passport',
      'Re-issue / Renewal',
      'PCC Application'
    ],
    appointmentRequired: true
  },
  {
    id: 'psk-noida',
    name: 'Passport Seva Kendra (PSK) Noida Sector 62',
    type: 'PSK (Passport Seva Kendra)',
    region: 'NCR (Noida / Gurgaon / Ghaziabad)',
    address: 'A-2, Sector 62, Noida, Uttar Pradesh',
    pincode: '201309',
    phone: '1800-258-1800',
    timings: '09:00 AM - 05:30 PM (Mon-Fri)',
    landmark: 'Near Fortis Hospital & Sector 62 Noida Electronic City Metro',
    servicesOffered: [
      'Fresh Normal & Tatkaal Passport',
      'Re-issue of Passport',
      'Police Clearance Certificate (PCC)'
    ],
    appointmentRequired: true
  },
  {
    id: 'psk-ghaziabad',
    name: 'Passport Seva Kendra (PSK) Sahibabad / Ghaziabad',
    type: 'PSK (Passport Seva Kendra)',
    region: 'NCR (Noida / Gurgaon / Ghaziabad)',
    address: 'C-32, Site IV Industrial Area, Sahibabad, Ghaziabad, Uttar Pradesh',
    pincode: '201010',
    phone: '1800-258-1800',
    timings: '09:00 AM - 05:30 PM (Mon-Fri)',
    landmark: 'Near Vaishali Metro Station & Anand Vihar Border',
    servicesOffered: [
      'Fresh Passport Enrolment',
      'Tatkaal Passport Processing',
      'Re-issue & Renewal',
      'PCC'
    ],
    appointmentRequired: true
  },

  // --- POST OFFICE PASSPORT SEVA KENDRAS (POPSK) ---
  {
    id: 'popsk-yamuna-vihar',
    name: 'Post Office Passport Seva Kendra (POPSK) Yamuna Vihar',
    type: 'POPSK (Post Office PSK)',
    region: 'East & North East Delhi',
    address: 'Head Post Office, Block C, Yamuna Vihar, Delhi',
    pincode: '110053',
    phone: '011-22812233 / 1800-258-1800',
    timings: '09:30 AM - 04:30 PM (Mon-Fri)',
    landmark: 'Near B-Block Market & Bhajanpura Crossing',
    servicesOffered: [
      'Fresh Normal Passport Application',
      'Passport Re-issue / Renewal',
      'Police Clearance Certificate (PCC)',
      'Minor Passport Services'
    ],
    appointmentRequired: true
  },
  {
    id: 'popsk-nehru-place',
    name: 'Post Office Passport Seva Kendra (POPSK) Kalkaji / Nehru Place',
    type: 'POPSK (Post Office PSK)',
    region: 'South Delhi & Dwarka',
    address: 'Head Post Office Complex, Kalkaji Main Market, New Delhi',
    pincode: '110019',
    phone: '011-26432100 / 1800-258-1800',
    timings: '09:30 AM - 04:30 PM (Mon-Fri)',
    landmark: 'Near Nehru Place Metro Station Gate 1',
    servicesOffered: [
      'Fresh Normal Passport',
      'Passport Re-issue',
      'Police Clearance Certificate (PCC)'
    ],
    appointmentRequired: true
  },
  {
    id: 'popsk-patparganj',
    name: 'Post Office Passport Seva Kendra (POPSK) Patparganj / Mayur Vihar',
    type: 'POPSK (Post Office PSK)',
    region: 'East & North East Delhi',
    address: 'Post Office, IP Extension, Patparganj, Delhi',
    pincode: '110092',
    phone: '011-22721100 / 1800-258-1800',
    timings: '09:30 AM - 04:30 PM (Mon-Fri)',
    landmark: 'Near IP Extension Metro Station & Max Hospital',
    servicesOffered: [
      'Fresh Normal Passport',
      'Passport Re-issue',
      'PCC Application'
    ],
    appointmentRequired: true
  },
  {
    id: 'popsk-rohini',
    name: 'Post Office Passport Seva Kendra (POPSK) Rohini Sector 7',
    type: 'POPSK (Post Office PSK)',
    region: 'North & West Delhi',
    address: 'Head Post Office, Sector 7, Rohini, Delhi',
    pincode: '110085',
    phone: '011-27041122 / 1800-258-1800',
    timings: '09:30 AM - 04:30 PM (Mon-Fri)',
    landmark: 'Opposite DC Chowk Market',
    servicesOffered: [
      'Fresh Normal Passport',
      'Passport Re-issue',
      'Police Clearance Certificate (PCC)'
    ],
    appointmentRequired: true
  },
  {
    id: 'popsk-dwarka',
    name: 'Post Office Passport Seva Kendra (POPSK) Dwarka Sector 6',
    type: 'POPSK (Post Office PSK)',
    region: 'South Delhi & Dwarka',
    address: 'Post Office, Sector 6 Main Market, Dwarka, New Delhi',
    pincode: '110075',
    phone: '011-25081199 / 1800-258-1800',
    timings: '09:30 AM - 04:30 PM (Mon-Fri)',
    landmark: 'Near Central Park Sector 6 Dwarka',
    servicesOffered: [
      'Fresh Normal Passport',
      'Passport Re-issue',
      'Police Clearance Certificate (PCC)'
    ],
    appointmentRequired: true
  },
  {
    id: 'popsk-janakpuri',
    name: 'Post Office Passport Seva Kendra (POPSK) Janakpuri',
    type: 'POPSK (Post Office PSK)',
    region: 'North & West Delhi',
    address: 'Head Post Office, B-Block, Janakpuri, New Delhi',
    pincode: '110058',
    phone: '011-25501234 / 1800-258-1800',
    timings: '09:30 AM - 04:30 PM (Mon-Fri)',
    landmark: 'Near Possangipur Chowk & Janakpuri West Metro',
    servicesOffered: [
      'Fresh Normal Passport',
      'Passport Re-issue',
      'PCC Service'
    ],
    appointmentRequired: true
  }
];

export function getMatchingPassportOffices(regionFilter?: string, queryStr?: string, typeFilter?: string): PassportOfficeItem[] {
  const cleanRegion = regionFilter && regionFilter !== 'All Regions' ? regionFilter.toLowerCase() : '';
  const cleanQuery = queryStr ? queryStr.trim().toLowerCase() : '';
  const cleanType = typeFilter && typeFilter !== 'All Types' ? typeFilter.toLowerCase() : '';

  const matched = MOCK_DELHI_PASSPORT_OFFICES.filter(o => {
    const matchesRegion = !cleanRegion || o.region.toLowerCase() === cleanRegion;
    const matchesType = !cleanType || o.type.toLowerCase().includes(cleanType);

    if (!cleanQuery) return matchesRegion && matchesType;

    const matchesName = o.name.toLowerCase().includes(cleanQuery);
    const matchesAddress = o.address.toLowerCase().includes(cleanQuery);
    const matchesPincode = o.pincode.includes(cleanQuery);
    const matchesLandmark = o.landmark.toLowerCase().includes(cleanQuery);
    const matchesRegionName = o.region.toLowerCase().includes(cleanQuery);
    const matchesServices = o.servicesOffered.some(s => s.toLowerCase().includes(cleanQuery));

    return matchesRegion && matchesType && (matchesName || matchesAddress || matchesPincode || matchesLandmark || matchesRegionName || matchesServices);
  });

  // Dynamic fallback for any unlisted searched locality or PIN code in Delhi NCR
  if (cleanQuery && matched.length === 0) {
    const capitalizedQuery = queryStr!.trim().charAt(0).toUpperCase() + queryStr!.trim().slice(1);
    const isPinCode = /^\d{6}$/.test(cleanQuery);
    const dynamicPincode = isPinCode ? cleanQuery : '110001';

    const dynamicCentres: PassportOfficeItem[] = [
      {
        id: `dyn-popsk-${cleanQuery}`,
        name: `Post Office Passport Seva Kendra (POPSK) - ${capitalizedQuery}`,
        type: 'POPSK (Post Office PSK)',
        region: regionFilter && regionFilter !== 'All Regions' ? regionFilter : 'Delhi NCR',
        address: `Head / Sub Post Office Building, ${capitalizedQuery}, Delhi NCR`,
        pincode: dynamicPincode,
        phone: '1800-258-1800 (Toll Free Helpline)',
        timings: '09:30 AM - 04:30 PM (Mon-Fri)',
        landmark: `Main Post Office / Metro Complex, ${capitalizedQuery}`,
        servicesOffered: [
          'Fresh Normal Passport Application',
          'Passport Re-issue / Renewal',
          'Police Clearance Certificate (PCC)',
          'Biometric Verification'
        ],
        appointmentRequired: true
      },
      {
        id: `dyn-psk-${cleanQuery}`,
        name: `Passport Seva Kendra (PSK) - Central Delhi (ITO / Herald House)`,
        type: 'PSK (Passport Seva Kendra)',
        region: 'Central & New Delhi',
        address: 'Herald House, 5A, Bahadur Shah Zafar Marg, ITO, New Delhi',
        pincode: '110002',
        phone: '1800-258-1800',
        timings: '09:00 AM - 05:30 PM (Mon-Fri)',
        landmark: 'Near ITO Metro Station (Accessible for all Delhi districts including ' + capitalizedQuery + ')',
        servicesOffered: [
          'Fresh Passport (Normal & Tatkaal)',
          'Passport Re-issue / Renewal',
          'Police Clearance Certificate (PCC)',
          'Minor Passport Processing'
        ],
        appointmentRequired: true
      }
    ];

    return dynamicCentres.filter(o => !cleanType || o.type.toLowerCase().includes(cleanType));
  }

  return matched;
}
