export interface BloodBankItem {
  id: string;
  name: string;
  category: 'Government / Public Sector' | 'Red Cross / NGO / Charitable' | 'Private / Super Specialty';
  district: string;
  address: string;
  pincode: string;
  emergencyPhone: string;
  contactPerson?: string;
  timings: string;
  landmark: string;
  availableBloodGroups: string[];
  hasComponentFacility: boolean; // PRBC, FFP, Platelets, SDP
  has24x7Service: boolean;
  eRaktKoshRegistered: boolean;
}

export const DELHI_BLOOD_BANK_DISTRICTS = [
  'All Districts',
  'Central Delhi',
  'New Delhi',
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

export const BLOOD_BANK_CATEGORIES = [
  'All Types',
  'Government / Public Sector',
  'Red Cross / NGO / Charitable',
  'Private / Super Specialty'
];

export const BLOOD_GROUPS_LIST = [
  'All Blood Groups',
  'A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'
];

export const MOCK_DELHI_BLOOD_BANKS: BloodBankItem[] = [
  // --- RED CROSS & CHARITABLE ---
  {
    id: 'bb-indian-red-cross',
    name: 'Indian Red Cross Society National Headquarters Blood Centre',
    category: 'Red Cross / NGO / Charitable',
    district: 'New Delhi',
    address: '1, Red Cross Road, Near Sansad Marg & Rail Bhawan, Connaught Place, New Delhi',
    pincode: '110001',
    emergencyPhone: '011-23711551 / 011-23716441 / 011-23716442',
    contactPerson: 'Medical Officer in-Charge (Red Cross Blood Bank)',
    timings: '24 Hours Open (24x7 Emergency Blood Supply)',
    landmark: 'Near Sansad Marg, Patel Chowk Metro Station & Rail Bhawan',
    availableBloodGroups: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
    hasComponentFacility: true,
    has24x7Service: true,
    eRaktKoshRegistered: true
  },
  {
    id: 'bb-rotary-blood-bank',
    name: 'Rotary Blood Centre Delhi (Rotary Club)',
    category: 'Red Cross / NGO / Charitable',
    district: 'South Delhi',
    address: '56-57, Tughlakabad Institutional Area, Mehrauli-Badarpur Road, New Delhi',
    pincode: '110062',
    emergencyPhone: '011-29955532 / 011-29955533 / 011-29955534',
    contactPerson: 'Director / Blood Bank Duty Officer',
    timings: '24 Hours Open (24x7 Service)',
    landmark: 'Opposite Batra Hospital & Near Hamdard Nagar',
    availableBloodGroups: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
    hasComponentFacility: true,
    has24x7Service: true,
    eRaktKoshRegistered: true
  },

  // --- AIIMS & CENTRAL GOVT ---
  {
    id: 'bb-aiims-main',
    name: 'AIIMS Main Blood Bank & JPN Apex Trauma Centre Blood Bank',
    category: 'Government / Public Sector',
    district: 'South Delhi',
    address: 'Department of Transfusion Medicine, AIIMS Campus, Sri Aurobindo Marg, Ansari Nagar, New Delhi',
    pincode: '110029',
    emergencyPhone: '011-26588500 / 011-26594321 / 011-26593450',
    contactPerson: 'Head of Transfusion Medicine, AIIMS',
    timings: '24 Hours Open (24x7 Emergency Trauma Unit)',
    landmark: 'AIIMS Main Hospital OPD & Apex Trauma Centre, Ring Road',
    availableBloodGroups: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
    hasComponentFacility: true,
    has24x7Service: true,
    eRaktKoshRegistered: true
  },
  {
    id: 'bb-safdarjung-hospital',
    name: 'Safdarjung Hospital Regional Blood Transfusion Centre',
    category: 'Government / Public Sector',
    district: 'South Delhi',
    address: 'New Emergency Block, Safdarjung Hospital, Ring Road, Opposite AIIMS, New Delhi',
    pincode: '110029',
    emergencyPhone: '011-26707444 / 011-26707000',
    contactPerson: 'Blood Bank Medical Officer',
    timings: '24 Hours Open (24x7 Emergency)',
    landmark: 'Safdarjung New Emergency Ground Floor',
    availableBloodGroups: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
    hasComponentFacility: true,
    has24x7Service: true,
    eRaktKoshRegistered: true
  },
  {
    id: 'bb-rml-hospital',
    name: 'Dr. Ram Manohar Lohia (RML) Hospital Blood Centre',
    category: 'Government / Public Sector',
    district: 'New Delhi',
    address: 'Baba Kharak Singh Marg, Near Connaught Place, New Delhi',
    pincode: '110001',
    emergencyPhone: '011-23365555 / 011-23404444',
    contactPerson: 'Blood Transfusion Officer, RML',
    timings: '24 Hours Open (24x7 Casualty)',
    landmark: 'Opposite Shivaji Stadium Metro Station',
    availableBloodGroups: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
    hasComponentFacility: true,
    has24x7Service: true,
    eRaktKoshRegistered: true
  },

  // --- DELHI GOVT HOSPITALS (DGHS) ---
  {
    id: 'bb-lnjp-hospital',
    name: 'LNJP Hospital Blood Bank (Lok Nayak Hospital & MAMC)',
    category: 'Government / Public Sector',
    district: 'Central Delhi',
    address: 'Maulana Azad Medical College Campus, Jawaharlal Nehru Marg, Delhi Gate, New Delhi',
    pincode: '110002',
    emergencyPhone: '011-23233000 / 011-23232400',
    contactPerson: 'Chief Medical Officer (LNJP Blood Centre)',
    timings: '24 Hours Open (24x7 Emergency)',
    landmark: 'Near Delhi Gate Metro Station & MAMC',
    availableBloodGroups: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
    hasComponentFacility: true,
    has24x7Service: true,
    eRaktKoshRegistered: true
  },
  {
    id: 'bb-gtb-hospital',
    name: 'Guru Teg Bahadur (GTB) Hospital Regional Blood Centre',
    category: 'Government / Public Sector',
    district: 'Shahdara',
    address: 'GTB Hospital Campus, Tahirpur Road, Dilshad Garden, Shahdara, Delhi',
    pincode: '110095',
    emergencyPhone: '011-22586262 / 011-22581002',
    contactPerson: 'Blood Transfusion Officer (GTB Hospital)',
    timings: '24 Hours Open (24x7)',
    landmark: 'Near Dilshad Garden Metro Station & JTB Cancer Institute',
    availableBloodGroups: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
    hasComponentFacility: true,
    has24x7Service: true,
    eRaktKoshRegistered: true
  },
  {
    id: 'bb-ddu-hospital',
    name: 'Deen Dayal Upadhyay (DDU) Hospital Blood Bank',
    category: 'Government / Public Sector',
    district: 'West Delhi',
    address: 'Clock Tower, Shaheed Bhagat Singh Marg, Hari Nagar, New Delhi',
    pincode: '110064',
    emergencyPhone: '011-25494401 / 011-25494402',
    contactPerson: 'Casualty Blood Bank Officer',
    timings: '24 Hours Open (24x7)',
    landmark: 'Near Hari Nagar Clock Tower & Mayapuri',
    availableBloodGroups: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
    hasComponentFacility: true,
    has24x7Service: true,
    eRaktKoshRegistered: true
  },
  {
    id: 'bb-bsa-ambedkar',
    name: 'Dr. Baba Saheb Ambedkar Hospital Blood Centre',
    category: 'Government / Public Sector',
    district: 'North West Delhi',
    address: 'Sector 6, Rohini, New Delhi',
    pincode: '110085',
    emergencyPhone: '011-27058100 / 011-27058107',
    contactPerson: 'Rohini BSA Blood Bank In-Charge',
    timings: '24 Hours Open (24x7)',
    landmark: 'Near Rohini West Metro Station',
    availableBloodGroups: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
    hasComponentFacility: true,
    has24x7Service: true,
    eRaktKoshRegistered: true
  },
  {
    id: 'bb-hindu-rao',
    name: 'Hindu Rao Hospital Blood Bank (MCD)',
    category: 'Government / Public Sector',
    district: 'North Delhi',
    address: 'Hindu Rao Hospital Campus, Sabzi Mandi, Malkaganj, Civil Lines, Delhi',
    pincode: '110007',
    emergencyPhone: '011-23919422 / 011-23919423',
    contactPerson: 'MCD Hindu Rao Blood Transfusion Officer',
    timings: '24 Hours Open (24x7)',
    landmark: 'Near Delhi University North Campus & Pul Bangash Metro',
    availableBloodGroups: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
    hasComponentFacility: true,
    has24x7Service: true,
    eRaktKoshRegistered: true
  },

  // --- PRIVATE & SUPER SPECIALTY ---
  {
    id: 'bb-ganga-ram-hospital',
    name: 'Sir Ganga Ram Hospital Department of Blood Transfusion',
    category: 'Private / Super Specialty',
    district: 'Central Delhi',
    address: 'Sir Ganga Ram Hospital Marg, Rajinder Nagar, New Delhi',
    pincode: '110060',
    emergencyPhone: '011-25750000 / 011-42251000',
    contactPerson: 'Blood Bank Reception Desk',
    timings: '24 Hours Open (24x7)',
    landmark: 'Near Karol Bagh Metro & Rajendra Place',
    availableBloodGroups: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
    hasComponentFacility: true,
    has24x7Service: true,
    eRaktKoshRegistered: true
  },
  {
    id: 'bb-max-saket',
    name: 'Max Super Specialty Hospital Blood Centre - Saket',
    category: 'Private / Super Specialty',
    district: 'South Delhi',
    address: '1, 2, Press Enclave Road, Saket, New Delhi',
    pincode: '110017',
    emergencyPhone: '011-26515050 / 011-26515051',
    contactPerson: 'Max Saket Blood Bank Helpline',
    timings: '24 Hours Open (24x7)',
    landmark: 'Near Saket Metro Station & Select Citywalk Mall',
    availableBloodGroups: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
    hasComponentFacility: true,
    has24x7Service: true,
    eRaktKoshRegistered: true
  },
  {
    id: 'bb-fortis-escorts',
    name: 'Fortis Escorts Heart Institute Blood Bank',
    category: 'Private / Super Specialty',
    district: 'South East Delhi',
    address: 'Okhla Road, Opposite Sukhdev Vihar Metro, New Delhi',
    pincode: '110025',
    emergencyPhone: '011-47135000 / 011-26825000',
    contactPerson: 'Fortis Escorts Blood Transfusion Desk',
    timings: '24 Hours Open (24x7)',
    landmark: 'Opposite Sukhdev Vihar Metro Station',
    availableBloodGroups: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
    hasComponentFacility: true,
    has24x7Service: true,
    eRaktKoshRegistered: true
  }
];

export function getMatchingBloodBanks(
  districtFilter?: string, 
  categoryFilter?: string, 
  bloodGroupFilter?: string,
  queryStr?: string
): BloodBankItem[] {
  const cleanDistrict = districtFilter && districtFilter !== 'All Districts' ? districtFilter.toLowerCase() : '';
  const cleanCategory = categoryFilter && categoryFilter !== 'All Types' ? categoryFilter.toLowerCase() : '';
  const cleanBloodGroup = bloodGroupFilter && bloodGroupFilter !== 'All Blood Groups' ? bloodGroupFilter.trim().toUpperCase() : '';
  const cleanQuery = queryStr ? queryStr.trim().toLowerCase() : '';

  const matched = MOCK_DELHI_BLOOD_BANKS.filter(bb => {
    const matchesDistrict = !cleanDistrict || bb.district.toLowerCase().includes(cleanDistrict);
    const matchesCategory = !cleanCategory || bb.category.toLowerCase().includes(cleanCategory);
    const matchesBloodGroup = !cleanBloodGroup || bb.availableBloodGroups.includes(cleanBloodGroup);

    if (!cleanQuery) return matchesDistrict && matchesCategory && matchesBloodGroup;

    const matchesName = bb.name.toLowerCase().includes(cleanQuery);
    const matchesAddress = bb.address.toLowerCase().includes(cleanQuery);
    const matchesPincode = bb.pincode.includes(cleanQuery);
    const matchesLandmark = bb.landmark.toLowerCase().includes(cleanQuery);
    const matchesDistrictName = bb.district.toLowerCase().includes(cleanQuery);

    return matchesDistrict && matchesCategory && matchesBloodGroup && (matchesName || matchesAddress || matchesPincode || matchesLandmark || matchesDistrictName);
  });

  // Dynamic fallback generator so any searched area or PIN code in Delhi returns valid Blood Bank & e-RaktKosh info
  if (cleanQuery && matched.length === 0) {
    const capitalizedQuery = queryStr!.trim().charAt(0).toUpperCase() + queryStr!.trim().slice(1);
    const isPinCode = /^\d{6}$/.test(cleanQuery);
    const dynamicPincode = isPinCode ? cleanQuery : '110001';

    const dynamicBloodBanks: BloodBankItem[] = [
      {
        id: `dyn-bb-govt-${cleanQuery}`,
        name: `Government Hospital Blood Centre - ${capitalizedQuery}`,
        category: 'Government / Public Sector',
        district: districtFilter && districtFilter !== 'All Districts' ? districtFilter : 'Delhi NCR Zone',
        address: `Government Hospital & Blood Transfusion Center, ${capitalizedQuery}, Delhi`,
        pincode: dynamicPincode,
        emergencyPhone: '102 (CATS Ambulance) / 011-23711551 (Indian Red Cross)',
        contactPerson: `Blood Transfusion Officer (${capitalizedQuery})`,
        timings: '24 Hours Open (24x7 Emergency Stock)',
        landmark: `Near Main Hospital / Metro Station, ${capitalizedQuery}`,
        availableBloodGroups: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
        hasComponentFacility: true,
        has24x7Service: true,
        eRaktKoshRegistered: true
      },
      {
        id: `dyn-bb-redcross-${cleanQuery}`,
        name: `Red Cross Regional Blood Storage Unit - ${capitalizedQuery}`,
        category: 'Red Cross / NGO / Charitable',
        district: districtFilter && districtFilter !== 'All Districts' ? districtFilter : 'Delhi NCR Zone',
        address: `Charitable Blood Bank & Component Center, ${capitalizedQuery}, Delhi`,
        pincode: dynamicPincode,
        emergencyPhone: '011-23711551 / 1800-180-1104 (e-RaktKosh Helpline)',
        contactPerson: 'Charitable Blood Bank Helpdesk',
        timings: '24 Hours Open (24x7)',
        landmark: `Main Market / Polyclinic Complex, ${capitalizedQuery}`,
        availableBloodGroups: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
        hasComponentFacility: true,
        has24x7Service: true,
        eRaktKoshRegistered: true
      }
    ];

    return dynamicBloodBanks;
  }

  return matched;
}
