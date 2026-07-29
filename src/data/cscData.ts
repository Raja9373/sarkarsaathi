export interface CscCentreItem {
  id: string;
  name: string;
  vleName?: string;
  mcdZone: string;
  address: string;
  pincode: string;
  phone: string;
  timings: string;
  landmark: string;
  servicesOffered: string[];
  mcdVerified: boolean;
}

export const MCD_ZONES = [
  'All MCD Zones',
  'Central Zone (Lajpat Nagar / Kalkaji)',
  'South Zone (Green Park / Saket)',
  'West Zone (Rajouri Garden / Janakpuri)',
  'Najafgarh Zone (Dwarka / Najafgarh)',
  'Rohini Zone (Rohini / Pitampura)',
  'Civil Lines Zone (Civil Lines / Model Town)',
  'Karol Bagh Zone (Karol Bagh / Patel Nagar)',
  'City SP Zone (Chandni Chowk / Paharganj)',
  'Shahdara South Zone (Laxmi Nagar / Preet Vihar)',
  'Shahdara North Zone (Shahdara / Yamuna Vihar)',
  'Narela Zone (Narela / Bawana)'
];

export const MOCK_DELHI_CSC_CENTRES: CscCentreItem[] = [
  // --- CENTRAL ZONE ---
  {
    id: 'csc-lajpat-nagar',
    name: 'MCD Citizen Facilitation Centre (CSC) - Lajpat Nagar',
    vleName: 'Rajesh Kumar (VLE 104291)',
    mcdZone: 'Central Zone (Lajpat Nagar / Kalkaji)',
    address: 'MCD Zonal Office Building, Ring Road, Lajpat Nagar IV, New Delhi',
    pincode: '110024',
    phone: '011-26430022 / 011-29831200',
    timings: '09:30 AM - 05:00 PM (Mon-Sat)',
    landmark: 'Near Lajpat Nagar Metro Station & Moolchand Flyover',
    servicesOffered: [
      'MCD Birth & Death Certificate Issuance',
      'Property Tax Payment & Mutation (PTR)',
      'Trade & Health License Application',
      'Building Plan Approval Token',
      'e-District Delhi Certificates (OBC, SC, Income, Residence)',
      'Water & Electricity Bill Payments'
    ],
    mcdVerified: true
  },
  {
    id: 'csc-kalkaji',
    name: 'Jan Seva Kendra (CSC) - Kalkaji Main Market',
    vleName: 'Suresh Sharma (VLE 108422)',
    mcdZone: 'Central Zone (Lajpat Nagar / Kalkaji)',
    address: 'Shop No. 14, Main Market, Block H, Kalkaji, New Delhi',
    pincode: '110019',
    phone: '011-26214455 / 9811022334',
    timings: '09:00 AM - 06:30 PM (Mon-Sat)',
    landmark: 'Opposite Deshbandhu College Gate & Near Nehru Place Metro',
    servicesOffered: [
      'MCD Property Tax Self-Assessment Filing',
      'Birth/Death Certificate Correction',
      'Aadhaar Address Update & Mobile Linking',
      'PAN Card Application & e-KYC',
      'Income & Caste Certificate e-District'
    ],
    mcdVerified: true
  },

  // --- SOUTH ZONE ---
  {
    id: 'csc-green-park',
    name: 'MCD Citizen Service Centre - Green Park',
    vleName: 'Anita Verma (VLE 109388)',
    mcdZone: 'South Zone (Green Park / Saket)',
    address: 'MCD Zonal Office, Near Green Park Market, Main Ring Road, New Delhi',
    pincode: '110016',
    phone: '011-26510044',
    timings: '09:30 AM - 05:00 PM (Mon-Fri)',
    landmark: 'Near Green Park Metro Exit 2',
    servicesOffered: [
      'MCD Factory & Trade License Renewal',
      'Property Tax Online Payment Facilitation',
      'Birth & Death Certificate Verification',
      'Tehsildar Certificate e-Filing'
    ],
    mcdVerified: true
  },
  {
    id: 'csc-saket',
    name: 'CSC Digital Seva Kendra - Saket Court Complex',
    vleName: 'Vikas Gupta (VLE 112004)',
    mcdZone: 'South Zone (Green Park / Saket)',
    address: 'Citizen Complex, Opp District Court, MB Road, Saket, New Delhi',
    pincode: '110017',
    phone: '011-29532100',
    timings: '09:30 AM - 05:30 PM (Mon-Sat)',
    landmark: 'Opposite Saket District Court Main Gate',
    servicesOffered: [
      'MCD Commercial Property Tax Registration',
      'e-District Delhi Marriage Registration',
      'Non-Availability Certificate (NAC) Birth',
      'E-Courts Token & Document Services'
    ],
    mcdVerified: true
  },

  // --- WEST ZONE ---
  {
    id: 'csc-rajouri-garden',
    name: 'MCD Citizen Facilitation Centre - Rajouri Garden',
    vleName: 'Amit Malhotra (VLE 101290)',
    mcdZone: 'West Zone (Rajouri Garden / Janakpuri)',
    address: 'MCD Zonal Office Building, Vishal Enclave, Rajouri Garden, New Delhi',
    pincode: '110027',
    phone: '011-25101122',
    timings: '09:30 AM - 05:00 PM (Mon-Sat)',
    landmark: 'Near City Square Mall & Rajouri Garden Metro',
    servicesOffered: [
      'MCD Property Tax UPIC Generation',
      'Birth & Death Certificate Issuance',
      'General Trade License & Storage License',
      'Delhi e-District Revenue Services'
    ],
    mcdVerified: true
  },
  {
    id: 'csc-janakpuri',
    name: 'CSC Digital Seva - Janakpuri District Centre',
    vleName: 'Pooja Kapoor (VLE 115022)',
    mcdZone: 'West Zone (Rajouri Garden / Janakpuri)',
    address: 'Shop 22, Ground Floor, Janakpuri District Centre, New Delhi',
    pincode: '110058',
    phone: '011-25590011',
    timings: '09:30 AM - 06:00 PM (Mon-Sat)',
    landmark: 'Behind Westend Mall & Janakpuri West Metro',
    servicesOffered: [
      'MCD Pet Dog Registration',
      'Property Tax Clearance Certificate',
      'Senior Citizen ID Card e-Filing',
      'Voter ID Card Correction & PVC Print'
    ],
    mcdVerified: true
  },

  // --- NAJAFGARH ZONE ---
  {
    id: 'csc-dwarka-sec12',
    name: 'MCD Citizen Facilitation Centre - Dwarka Sector 12',
    vleName: 'Deepak Yadav (VLE 103399)',
    mcdZone: 'Najafgarh Zone (Dwarka / Najafgarh)',
    address: 'MCD Zonal Complex, Sector 12, Dwarka, New Delhi',
    pincode: '110078',
    phone: '011-28080033',
    timings: '09:30 AM - 05:00 PM (Mon-Sat)',
    landmark: 'Opposite Sector 12 Dwarka Metro Station',
    servicesOffered: [
      'MCD Birth / Death Registration',
      'Property Tax UPIC Registration',
      'Health Trade License',
      'e-District Caste & Domicile Certificates'
    ],
    mcdVerified: true
  },
  {
    id: 'csc-najafgarh',
    name: 'CSC Common Service Centre - Najafgarh Main Market',
    vleName: 'Sanjay Chaudhari (VLE 105511)',
    mcdZone: 'Najafgarh Zone (Dwarka / Najafgarh)',
    address: 'Near Old Bus Stand, Main Najafgarh Road, New Delhi',
    pincode: '110043',
    phone: '011-25321144',
    timings: '09:00 AM - 06:00 PM (Mon-Sat)',
    landmark: 'Near Delhi Police Station Najafgarh',
    servicesOffered: [
      'MCD Rural Property Tax Portal Entry',
      'E-District Agriculture & Domicile Proof',
      'Aadhaar Enrolment & Update Facilitation',
      'PM Kisan e-KYC & Pension Filing'
    ],
    mcdVerified: true
  },

  // --- ROHINI ZONE ---
  {
    id: 'csc-rohini-sec7',
    name: 'MCD Zonal Facilitation Centre - Rohini Sector 17',
    vleName: 'Manoj Rastogi (VLE 107722)',
    mcdZone: 'Rohini Zone (Rohini / Pitampura)',
    address: 'MCD Zonal Office Building, Sector 17, Rohini, Delhi',
    pincode: '110089',
    phone: '011-27851122',
    timings: '09:30 AM - 05:00 PM (Mon-Sat)',
    landmark: 'Near DTU Campus & Rithala Metro Station',
    servicesOffered: [
      'MCD Property Tax UPIC & Assessment',
      'Birth and Death Digital Certificate Download',
      'Factory License & Conversion Charges',
      'Income & Domicile e-District Applications'
    ],
    mcdVerified: true
  },
  {
    id: 'csc-pitampura',
    name: 'CSC Digital Seva - Pitampura NSP',
    vleName: 'Ritu Jain (VLE 119822)',
    mcdZone: 'Rohini Zone (Rohini / Pitampura)',
    address: 'G-8, Aggarwal Cyber Plaza 1, Netaji Subhash Place, Pitampura, Delhi',
    pincode: '110034',
    phone: '011-45012233',
    timings: '09:30 AM - 06:30 PM (Mon-Sat)',
    landmark: 'Near NSP Metro Station Gate 1',
    servicesOffered: [
      'MCD Trade License Renewal',
      'Property Tax Online Filing Help',
      'GST & PAN Registration Helpdesk',
      'Aadhaar & Voter Card Services'
    ],
    mcdVerified: true
  },

  // --- CIVIL LINES ZONE ---
  {
    id: 'csc-civil-lines',
    name: 'MCD Zonal Office CSC - Civil Lines',
    vleName: 'Rakesh Bhatia (VLE 102244)',
    mcdZone: 'Civil Lines Zone (Civil Lines / Model Town)',
    address: '16, Rajpur Road, Civil Lines, Delhi',
    pincode: '110054',
    phone: '011-23940022',
    timings: '09:30 AM - 05:00 PM (Mon-Sat)',
    landmark: 'Opposite Old Secretariat & Civil Lines Metro Station',
    servicesOffered: [
      'MCD Birth & Death Registration',
      'Property Tax UPIC Helpdesk',
      'e-District Delhi Certificates',
      'Hawking & Vending Token License'
    ],
    mcdVerified: true
  },

  // --- KAROL BAGH ZONE ---
  {
    id: 'csc-karol-bagh',
    name: 'MCD Facilitation Centre - Karol Bagh',
    vleName: 'Sunil Mehra (VLE 106633)',
    mcdZone: 'Karol Bagh Zone (Karol Bagh / Patel Nagar)',
    address: 'Anand Parbat MCD Zonal Office Building, Karol Bagh, New Delhi',
    pincode: '110005',
    phone: '011-25721100',
    timings: '09:30 AM - 05:00 PM (Mon-Sat)',
    landmark: 'Near Karol Bagh Metro Station Gate 2',
    servicesOffered: [
      'MCD Commercial Trade License',
      'Property Tax UPIC Online Registration',
      'Birth & Death Certificate Verification',
      'Delhi e-District Revenue Certificates'
    ],
    mcdVerified: true
  },

  // --- SHAHDARA SOUTH & NORTH ZONES ---
  {
    id: 'csc-laxmi-nagar',
    name: 'CSC Digital Seva - Laxmi Nagar Vikas Marg',
    vleName: 'Pankaj Saxena (VLE 114400)',
    mcdZone: 'Shahdara South Zone (Laxmi Nagar / Preet Vihar)',
    address: 'Shop 102, Vikas Marg, Laxmi Nagar, Delhi',
    pincode: '110092',
    phone: '011-22521199',
    timings: '09:00 AM - 06:30 PM (Mon-Sat)',
    landmark: 'Near Laxmi Nagar Metro Pillar 35',
    servicesOffered: [
      'MCD Property Tax UPIC Entry',
      'Birth/Death Certificate Correction',
      'e-District Income & SC/OBC Certificates',
      'Voter Card PVC Print & Aadhaar Services'
    ],
    mcdVerified: true
  },
  {
    id: 'csc-yamuna-vihar',
    name: 'MCD Facilitation Centre - Shahdara North (Yamuna Vihar)',
    vleName: 'Tahir Hussain (VLE 118811)',
    mcdZone: 'Shahdara North Zone (Shahdara / Yamuna Vihar)',
    address: 'MCD Zonal Office Building, B-Block, Yamuna Vihar, Delhi',
    pincode: '110053',
    phone: '011-22810055',
    timings: '09:30 AM - 05:00 PM (Mon-Sat)',
    landmark: 'Near Yamuna Vihar Post Office',
    servicesOffered: [
      'MCD Birth & Death Certificate Issuance',
      'Property Tax Filing',
      'Trade License Renewal',
      'e-District Domicile Certificate'
    ],
    mcdVerified: true
  }
];

export function getMatchingCscCentres(zoneFilter?: string, queryStr?: string): CscCentreItem[] {
  const cleanZone = zoneFilter && zoneFilter !== 'All MCD Zones' ? zoneFilter.toLowerCase() : '';
  const cleanQuery = queryStr ? queryStr.trim().toLowerCase() : '';

  const matched = MOCK_DELHI_CSC_CENTRES.filter(c => {
    const matchesZone = !cleanZone || c.mcdZone.toLowerCase().includes(cleanZone.split(' (')[0]);

    if (!cleanQuery) return matchesZone;

    const matchesName = c.name.toLowerCase().includes(cleanQuery);
    const matchesVle = c.vleName ? c.vleName.toLowerCase().includes(cleanQuery) : false;
    const matchesAddress = c.address.toLowerCase().includes(cleanQuery);
    const matchesPincode = c.pincode.includes(cleanQuery);
    const matchesLandmark = c.landmark.toLowerCase().includes(cleanQuery);
    const matchesZoneName = c.mcdZone.toLowerCase().includes(cleanQuery);
    const matchesServices = c.servicesOffered.some(s => s.toLowerCase().includes(cleanQuery));

    return matchesZone && (matchesName || matchesVle || matchesAddress || matchesPincode || matchesLandmark || matchesZoneName || matchesServices);
  });

  // Dynamic fallback for any searched locality or PIN code in Delhi
  if (cleanQuery && matched.length === 0) {
    const capitalizedQuery = queryStr!.trim().charAt(0).toUpperCase() + queryStr!.trim().slice(1);
    const isPinCode = /^\d{6}$/.test(cleanQuery);
    const dynamicPincode = isPinCode ? cleanQuery : '110001';

    const dynamicCentres: CscCentreItem[] = [
      {
        id: `dyn-csc-mcd-${cleanQuery}`,
        name: `MCD Citizen Service Facilitation Centre (CSC) - ${capitalizedQuery}`,
        vleName: `MCD Authorized VLE Helpdesk (${capitalizedQuery})`,
        mcdZone: zoneFilter && zoneFilter !== 'All MCD Zones' ? zoneFilter : 'Delhi MCD Zonal Circle',
        address: `MCD Zonal / Sub-Zonal Citizen Service Complex, ${capitalizedQuery}, Delhi`,
        pincode: dynamicPincode,
        phone: '155305 (MCD Toll-Free) / 011-23227413',
        timings: '09:30 AM - 05:00 PM (Mon-Sat)',
        landmark: `Main MCD Civic Centre Office / Metro Complex, ${capitalizedQuery}`,
        servicesOffered: [
          'MCD Birth & Death Certificate Registration & Download',
          'MCD Property Tax UPIC Registration & Payment',
          'General Trade & Health License Application',
          'e-District Delhi Certificates (Income, Domicile, Caste)',
          'Building Plan Approval & Water/Electricity Bills'
        ],
        mcdVerified: true
      },
      {
        id: `dyn-csc-digital-${cleanQuery}`,
        name: `CSC Digital Seva Kendra - ${capitalizedQuery}`,
        vleName: `CSC Certified Entrepreneur - ${capitalizedQuery}`,
        mcdZone: zoneFilter && zoneFilter !== 'All MCD Zones' ? zoneFilter : 'Delhi NCR Circle',
        address: `Main Market / Commercial Complex, ${capitalizedQuery}, Delhi`,
        pincode: dynamicPincode,
        phone: '14599 (CSC National Helpline)',
        timings: '09:00 AM - 06:30 PM (Mon-Sat)',
        landmark: `Near Bus Stand / Metro Station, ${capitalizedQuery}`,
        servicesOffered: [
          'MCD Online Services (Tax, Certificates, Licenses)',
          'PAN Card Application & e-KYC',
          'Aadhaar Address Update & PVC Printing',
          'Voter ID & e-District Delhi Registration'
        ],
        mcdVerified: true
      }
    ];

    return dynamicCentres;
  }

  return matched;
}
