import { IfscBranch } from '../types';

export interface BankSelectOption {
  id: string;
  name: string;
  shortName: string;
  codePrefix: string;
  logoText: string;
}

export const POPULAR_BANKS_LIST: BankSelectOption[] = [
  { id: 'sbi', name: 'State Bank of India', shortName: 'SBI', codePrefix: 'SBIN', logoText: 'SBI' },
  { id: 'pnb', name: 'Punjab National Bank', shortName: 'PNB', codePrefix: 'PUNB', logoText: 'PNB' },
  { id: 'hdfc', name: 'HDFC Bank', shortName: 'HDFC', codePrefix: 'HDFC', logoText: 'HDFC' },
  { id: 'icici', name: 'ICICI Bank', shortName: 'ICICI', codePrefix: 'ICIC', logoText: 'ICICI' },
  { id: 'bob', name: 'Bank of Baroda', shortName: 'BOB', codePrefix: 'BARB', logoText: 'BOB' },
  { id: 'canara', name: 'Canara Bank', shortName: 'Canara', codePrefix: 'CNRB', logoText: 'CAN' },
  { id: 'axis', name: 'Axis Bank', shortName: 'Axis', codePrefix: 'UTIB', logoText: 'AXIS' },
  { id: 'union', name: 'Union Bank of India', shortName: 'Union Bank', codePrefix: 'UBIN', logoText: 'UBI' },
  { id: 'kotak', name: 'Kotak Mahindra Bank', shortName: 'Kotak', codePrefix: 'KKBK', logoText: 'KOTAK' },
  { id: 'boi', name: 'Bank of India', shortName: 'BOI', codePrefix: 'BKID', logoText: 'BOI' },
  { id: 'indian-bank', name: 'Indian Bank', shortName: 'Indian Bank', codePrefix: 'IDIB', logoText: 'INDB' },
  { id: 'central-bank', name: 'Central Bank of India', shortName: 'Central Bank', codePrefix: 'CBIN', logoText: 'CBI' },
  { id: 'yes-bank', name: 'Yes Bank', shortName: 'Yes Bank', codePrefix: 'YESB', logoText: 'YES' },
  { id: 'idfc', name: 'IDFC FIRST Bank', shortName: 'IDFC FIRST', codePrefix: 'IDFB', logoText: 'IDFC' },
  { id: 'federal', name: 'Federal Bank', shortName: 'Federal', codePrefix: 'FDRL', logoText: 'FED' },
  { id: 'uco', name: 'UCO Bank', shortName: 'UCO', codePrefix: 'UCBA', logoText: 'UCO' },
  { id: 'iob', name: 'Indian Overseas Bank', shortName: 'IOB', codePrefix: 'IOBA', logoText: 'IOB' },
  { id: 'psb', name: 'Punjab & Sind Bank', shortName: 'PSB', codePrefix: 'PSIB', logoText: 'PSB' },
  { id: 'bandhan', name: 'Bandhan Bank', shortName: 'Bandhan', codePrefix: 'BDBL', logoText: 'BAN' },
  { id: 'au-bank', name: 'AU Small Finance Bank', shortName: 'AU Bank', codePrefix: 'AUBL', logoText: 'AU' },
  { id: 'indusind', name: 'IndusInd Bank', shortName: 'IndusInd', codePrefix: 'INDB', logoText: 'IND' }
];

export const STATES_LIST = [
  'Delhi',
  'Maharashtra',
  'Uttar Pradesh',
  'Karnataka',
  'Tamil Nadu',
  'West Bengal',
  'Gujarat',
  'Haryana',
  'Punjab',
  'Rajasthan',
  'Telangana',
  'Kerala',
  'Bihar',
  'Madhya Pradesh'
];

export const CITIES_BY_STATE: Record<string, string[]> = {
  'Delhi': ['New Delhi', 'Central Delhi', 'South Delhi', 'South West Delhi', 'West Delhi', 'North Delhi', 'East Delhi', 'Shahdara'],
  'Maharashtra': ['Mumbai', 'Pune', 'Nagpur', 'Thane', 'Nashik'],
  'Uttar Pradesh': ['Noida', 'Ghaziabad', 'Lucknow', 'Kanpur', 'Agra', 'Varanasi'],
  'Karnataka': ['Bengaluru', 'Mysuru', 'Mangaluru', 'Hubballi'],
  'Tamil Nadu': ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli'],
  'West Bengal': ['Kolkata', 'Howrah', 'Siliguri', 'Durgapur'],
  'Gujarat': ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot'],
  'Haryana': ['Gurugram', 'Faridabad', 'Panipat', 'Ambala'],
  'Punjab': ['Chandigarh', 'Ludhiana', 'Amritsar', 'Jalandhar'],
  'Rajasthan': ['Jaipur', 'Jodhpur', 'Udaipur', 'Kota'],
  'Telangana': ['Hyderabad', 'Warangal', 'Nizamabad'],
  'Kerala': ['Thiruvananthapuram', 'Kochi', 'Kozhikode'],
  'Bihar': ['Patna', 'Gaya', 'Muzaffarpur'],
  'Madhya Pradesh': ['Bhopal', 'Indore', 'Gwalior']
};

export const MOCK_IFSC_DATABASE: IfscBranch[] = [
  // --- STATE BANK OF INDIA (SBI) ---
  {
    ifsc: 'SBIN0000691',
    bankId: 'sbi',
    bankName: 'State Bank of India',
    branchName: 'New Delhi Main Branch',
    branchCode: '000691',
    micrCode: '110002001',
    address: '11, Parliament Street, Post Box No. 139, New Delhi',
    city: 'New Delhi',
    district: 'New Delhi',
    state: 'Delhi',
    pincode: '110001',
    phone: '011-23374000',
    neft: true,
    rtgs: true,
    imps: true,
    upi: true,
    swiftCode: 'SBININBB102'
  },
  {
    ifsc: 'SBIN0001282',
    bankId: 'sbi',
    bankName: 'State Bank of India',
    branchName: 'Connaught Place Branch',
    branchCode: '001282',
    micrCode: '110002002',
    address: 'Inner Circle, Connaught Place, Block C, New Delhi',
    city: 'New Delhi',
    district: 'New Delhi',
    state: 'Delhi',
    pincode: '110001',
    phone: '011-23321520',
    neft: true,
    rtgs: true,
    imps: true,
    upi: true,
    swiftCode: 'SBININBB102'
  },
  {
    ifsc: 'SBIN0001539',
    bankId: 'sbi',
    bankName: 'State Bank of India',
    branchName: 'Personal Banking Branch Karol Bagh',
    branchCode: '001539',
    micrCode: '110002045',
    address: '17A/35, Gurudwara Road, Karol Bagh, New Delhi',
    city: 'New Delhi',
    district: 'Central Delhi',
    state: 'Delhi',
    pincode: '110005',
    phone: '011-28751210',
    neft: true,
    rtgs: true,
    imps: true,
    upi: true
  },
  {
    ifsc: 'SBIN0008064',
    bankId: 'sbi',
    bankName: 'State Bank of India',
    branchName: 'Hauz Khas Branch',
    branchCode: '008064',
    micrCode: '110002068',
    address: 'E-8, Aurobindo Marg, Hauz Khas, New Delhi',
    city: 'New Delhi',
    district: 'South Delhi',
    state: 'Delhi',
    pincode: '110016',
    phone: '011-26514418',
    neft: true,
    rtgs: true,
    imps: true,
    upi: true
  },
  {
    ifsc: 'SBIN0005783',
    bankId: 'sbi',
    bankName: 'State Bank of India',
    branchName: 'Dwarka Sector 6 Branch',
    branchCode: '005783',
    micrCode: '110002102',
    address: 'Plot No 2, Sector 6 Market, Dwarka, New Delhi',
    city: 'New Delhi',
    district: 'South West Delhi',
    state: 'Delhi',
    pincode: '110075',
    phone: '011-25089201',
    neft: true,
    rtgs: true,
    imps: true,
    upi: true
  },
  {
    ifsc: 'SBIN0004185',
    bankId: 'sbi',
    bankName: 'State Bank of India',
    branchName: 'Rohini Sector 7 Branch',
    branchCode: '004185',
    micrCode: '110002130',
    address: 'Community Centre, Sector 7, Rohini, Delhi',
    city: 'New Delhi',
    district: 'North West Delhi',
    state: 'Delhi',
    pincode: '110085',
    phone: '011-27042211',
    neft: true,
    rtgs: true,
    imps: true,
    upi: true
  },

  // --- HDFC BANK ---
  {
    ifsc: 'HDFC0000240',
    bankId: 'hdfc',
    bankName: 'HDFC Bank',
    branchName: 'Connaught Place Branch',
    branchCode: '000240',
    micrCode: '110240002',
    address: 'G-3, Ground Floor, Surya Kiran Building, 19 Kasturba Gandhi Marg, CP, New Delhi',
    city: 'New Delhi',
    district: 'New Delhi',
    state: 'Delhi',
    pincode: '110001',
    phone: '011-61606161',
    neft: true,
    rtgs: true,
    imps: true,
    upi: true,
    swiftCode: 'HDFCINBB'
  },
  {
    ifsc: 'HDFC0000003',
    bankId: 'hdfc',
    bankName: 'HDFC Bank',
    branchName: 'KGB Marg Main Branch',
    branchCode: '000003',
    micrCode: '110240001',
    address: 'KG Marg, Connaught Place, New Delhi',
    city: 'New Delhi',
    district: 'New Delhi',
    state: 'Delhi',
    pincode: '110001',
    phone: '011-41512345',
    neft: true,
    rtgs: true,
    imps: true,
    upi: true
  },
  {
    ifsc: 'HDFC0000027',
    bankId: 'hdfc',
    bankName: 'HDFC Bank',
    branchName: 'Vasant Vihar Branch',
    branchCode: '000027',
    micrCode: '110240006',
    address: 'Basant Lok Community Centre, Vasant Vihar, New Delhi',
    city: 'New Delhi',
    district: 'South West Delhi',
    state: 'Delhi',
    pincode: '110057',
    phone: '011-26145890',
    neft: true,
    rtgs: true,
    imps: true,
    upi: true
  },

  // --- ICICI BANK ---
  {
    ifsc: 'ICIC0000007',
    bankId: 'icici',
    bankName: 'ICICI Bank',
    branchName: 'Connaught Place Branch',
    branchCode: '000007',
    micrCode: '110229002',
    address: '9A, Phelps Building, Inner Circle, Connaught Place, New Delhi',
    city: 'New Delhi',
    district: 'New Delhi',
    state: 'Delhi',
    pincode: '110001',
    phone: '011-43510000',
    neft: true,
    rtgs: true,
    imps: true,
    upi: true,
    swiftCode: 'ICICINBB'
  },
  {
    ifsc: 'ICIC0000102',
    bankId: 'icici',
    bankName: 'ICICI Bank',
    branchName: 'Green Park Branch',
    branchCode: '000102',
    micrCode: '110229015',
    address: 'Main Market, Green Park, New Delhi',
    city: 'New Delhi',
    district: 'South Delhi',
    state: 'Delhi',
    pincode: '110016',
    phone: '011-26859000',
    neft: true,
    rtgs: true,
    imps: true,
    upi: true
  },

  // --- PUNJAB NATIONAL BANK (PNB) ---
  {
    ifsc: 'PUNB0013800',
    bankId: 'pnb',
    bankName: 'Punjab National Bank',
    branchName: 'Parliament Street Branch',
    branchCode: '013800',
    micrCode: '110024001',
    address: 'Jeevan Deep Building, Parliament Street, New Delhi',
    city: 'New Delhi',
    district: 'New Delhi',
    state: 'Delhi',
    pincode: '110001',
    phone: '011-23743000',
    neft: true,
    rtgs: true,
    imps: true,
    upi: true,
    swiftCode: 'PUNBINBB'
  },
  {
    ifsc: 'PUNB0000300',
    bankId: 'pnb',
    bankName: 'Punjab National Bank',
    branchName: 'Karol Bagh Branch',
    branchCode: '000300',
    micrCode: '110024012',
    address: 'Arya Samaj Road, Karol Bagh, New Delhi',
    city: 'New Delhi',
    district: 'Central Delhi',
    state: 'Delhi',
    pincode: '110005',
    phone: '011-28721100',
    neft: true,
    rtgs: true,
    imps: true,
    upi: true
  },

  // --- BANK OF BARODA (BOB) ---
  {
    ifsc: 'BARB0VALSAD',
    bankId: 'bob',
    bankName: 'Bank of Baroda',
    branchName: 'Nehru Place Main Branch',
    branchCode: 'VALSAD',
    micrCode: '110012005',
    address: '16, Nehru Place, Greens Building, New Delhi',
    city: 'New Delhi',
    district: 'South East Delhi',
    state: 'Delhi',
    pincode: '110019',
    phone: '011-26418800',
    neft: true,
    rtgs: true,
    imps: true,
    upi: true,
    swiftCode: 'BARBINBB'
  },

  // --- CANARA BANK ---
  {
    ifsc: 'CNRB0000101',
    bankId: 'canara',
    bankName: 'Canara Bank',
    branchName: 'Janpath Branch',
    branchCode: '000101',
    micrCode: '110015002',
    address: 'Tolstoy Marg, Janpath, New Delhi',
    city: 'New Delhi',
    district: 'New Delhi',
    state: 'Delhi',
    pincode: '110001',
    phone: '011-23312000',
    neft: true,
    rtgs: true,
    imps: true,
    upi: true,
    swiftCode: 'CNRBINBB'
  },

  // --- AXIS BANK ---
  {
    ifsc: 'UTIB0000001',
    bankId: 'axis',
    bankName: 'Axis Bank',
    branchName: 'Statesman House Connaught Place',
    branchCode: '000001',
    micrCode: '110211001',
    address: 'Ground Floor, Statesman House, 148 Barakhamba Road, CP, New Delhi',
    city: 'New Delhi',
    district: 'New Delhi',
    state: 'Delhi',
    pincode: '110001',
    phone: '011-23311100',
    neft: true,
    rtgs: true,
    imps: true,
    upi: true,
    swiftCode: 'AXISINBB'
  },

  // --- UNION BANK OF INDIA ---
  {
    ifsc: 'UBIN0530018',
    bankId: 'union',
    bankName: 'Union Bank of India',
    branchName: 'Connaught Place Branch',
    branchCode: '530018',
    micrCode: '110026002',
    address: '14/15, F Block, Connaught Place, New Delhi',
    city: 'New Delhi',
    district: 'New Delhi',
    state: 'Delhi',
    pincode: '110001',
    phone: '011-23328000',
    neft: true,
    rtgs: true,
    imps: true,
    upi: true
  },

  // --- KOTAK MAHINDRA BANK ---
  {
    ifsc: 'KKBK0000181',
    bankId: 'kotak',
    bankName: 'Kotak Mahindra Bank',
    branchName: 'Kasturba Gandhi Marg Branch',
    branchCode: '000181',
    micrCode: '110485002',
    address: 'G-1, Ambadeep Building, 14 KG Marg, CP, New Delhi',
    city: 'New Delhi',
    district: 'New Delhi',
    state: 'Delhi',
    pincode: '110001',
    phone: '011-41528000',
    neft: true,
    rtgs: true,
    imps: true,
    upi: true
  },

  // --- YES BANK ---
  {
    ifsc: 'YESB0000001',
    bankId: 'yes-bank',
    bankName: 'Yes Bank',
    branchName: 'Chanakyapuri Branch',
    branchCode: '000001',
    micrCode: '110532001',
    address: '48, Nyaya Marg, Chanakyapuri, New Delhi',
    city: 'New Delhi',
    district: 'New Delhi',
    state: 'Delhi',
    pincode: '110021',
    phone: '011-43560000',
    neft: true,
    rtgs: true,
    imps: true,
    upi: true
  },

  // --- MUMBAI EXAMPLES ---
  {
    ifsc: 'SBIN0000300',
    bankId: 'sbi',
    bankName: 'State Bank of India',
    branchName: 'Mumbai Main Branch Nariman Point',
    branchCode: '000300',
    micrCode: '400002001',
    address: 'State Bank Bhavan, Madame Cama Road, Nariman Point, Mumbai',
    city: 'Mumbai',
    district: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400021',
    phone: '022-22883000',
    neft: true,
    rtgs: true,
    imps: true,
    upi: true,
    swiftCode: 'SBININBB101'
  },
  {
    ifsc: 'HDFC0000060',
    bankId: 'hdfc',
    bankName: 'HDFC Bank',
    branchName: 'Fort Branch Mumbai',
    branchCode: '000060',
    micrCode: '400240002',
    address: 'Manekji Wadia Building, Bell Lane, Fort, Mumbai',
    city: 'Mumbai',
    district: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400001',
    phone: '022-61606161',
    neft: true,
    rtgs: true,
    imps: true,
    upi: true
  },

  // --- BENGALURU EXAMPLES ---
  // --- BENGALURU EXAMPLES ---
  {
    ifsc: 'SBIN0000813',
    bankId: 'sbi',
    bankName: 'State Bank of India',
    branchName: 'Bengaluru Main Branch MG Road',
    branchCode: '000813',
    micrCode: '560002001',
    address: 'St. Marks Road, MG Road, Bengaluru',
    city: 'Bengaluru',
    district: 'Bengaluru',
    state: 'Karnataka',
    pincode: '560001',
    phone: '080-25584000',
    neft: true,
    rtgs: true,
    imps: true,
    upi: true
  },
  {
    ifsc: 'HDFC0000009',
    bankId: 'hdfc',
    bankName: 'HDFC Bank',
    branchName: 'Kasturba Road Main Branch',
    branchCode: '000009',
    micrCode: '560240002',
    address: '54 Kasturba Road, Bengaluru',
    city: 'Bengaluru',
    district: 'Bengaluru',
    state: 'Karnataka',
    pincode: '560001',
    phone: '080-61606161',
    neft: true,
    rtgs: true,
    imps: true,
    upi: true
  },
  {
    ifsc: 'ICIC0000002',
    bankId: 'icici',
    bankName: 'ICICI Bank',
    branchName: 'MG Road Bengaluru Branch',
    branchCode: '000002',
    micrCode: '560229002',
    address: 'M G Road, Opp. Bible Society, Bengaluru',
    city: 'Bengaluru',
    district: 'Bengaluru',
    state: 'Karnataka',
    pincode: '560001',
    phone: '080-41120000',
    neft: true,
    rtgs: true,
    imps: true,
    upi: true
  },

  // --- NOIDA & GURUGRAM EXAMPLES ---
  {
    ifsc: 'PUNB0002102',
    bankId: 'pnb',
    bankName: 'Punjab National Bank',
    branchName: 'Noida Sector 18 Branch',
    branchCode: '002102',
    micrCode: '110024088',
    address: 'Sector 18 Commercial Market, Near Atta Market, Noida',
    city: 'Noida',
    district: 'Gautam Buddha Nagar',
    state: 'Uttar Pradesh',
    pincode: '201301',
    phone: '0120-2512100',
    neft: true,
    rtgs: true,
    imps: true,
    upi: true
  },
  {
    ifsc: 'SBIN0001402',
    bankId: 'sbi',
    bankName: 'State Bank of India',
    branchName: 'Noida Sector 18 Branch',
    branchCode: '001402',
    micrCode: '110002092',
    address: 'Sector 18 Market, Pocket J, Noida',
    city: 'Noida',
    district: 'Gautam Buddha Nagar',
    state: 'Uttar Pradesh',
    pincode: '201301',
    phone: '0120-2514412',
    neft: true,
    rtgs: true,
    imps: true,
    upi: true
  },
  {
    ifsc: 'HDFC0000021',
    bankId: 'hdfc',
    bankName: 'HDFC Bank',
    branchName: 'DLF Cyber City Cyber Hub Branch',
    branchCode: '000021',
    micrCode: '110240030',
    address: 'Building 10, Tower B, DLF Cyber City, Sector 24, Gurugram',
    city: 'Gurugram',
    district: 'Gurugram',
    state: 'Haryana',
    pincode: '122002',
    phone: '0124-6160616',
    neft: true,
    rtgs: true,
    imps: true,
    upi: true
  },

  // --- HYDERABAD & CHENNAI ---
  {
    ifsc: 'SBIN0000847',
    bankId: 'sbi',
    bankName: 'State Bank of India',
    branchName: 'Hyderabad Main Branch Koti',
    branchCode: '000847',
    micrCode: '500002001',
    address: 'Bank Street, Koti, Hyderabad',
    city: 'Hyderabad',
    district: 'Hyderabad',
    state: 'Telangana',
    pincode: '500095',
    phone: '040-24600100',
    neft: true,
    rtgs: true,
    imps: true,
    upi: true
  },
  {
    ifsc: 'SBIN0000800',
    bankId: 'sbi',
    bankName: 'State Bank of India',
    branchName: 'Chennai Main Branch George Town',
    branchCode: '000800',
    micrCode: '600002001',
    address: 'Rajaji Salai, George Town, Chennai',
    city: 'Chennai',
    district: 'Chennai',
    state: 'Tamil Nadu',
    pincode: '600001',
    phone: '044-25340001',
    neft: true,
    rtgs: true,
    imps: true,
    upi: true
  },

  // --- KOLKATA & AHMEDABAD ---
  {
    ifsc: 'SBIN0000001',
    bankId: 'sbi',
    bankName: 'State Bank of India',
    branchName: 'Kolkata Main Branch Strand Road',
    branchCode: '000001',
    micrCode: '700002001',
    address: '1 Strand Road, Samriddhi Bhavan, Kolkata',
    city: 'Kolkata',
    district: 'Kolkata',
    state: 'West Bengal',
    pincode: '700001',
    phone: '033-22484000',
    neft: true,
    rtgs: true,
    imps: true,
    upi: true
  },
  {
    ifsc: 'SBIN0000301',
    bankId: 'sbi',
    bankName: 'State Bank of India',
    branchName: 'Bhadra Main Branch Ahmedabad',
    branchCode: '000301',
    micrCode: '380002001',
    address: 'Bhadra, Near Lal Darwaja, Ahmedabad',
    city: 'Ahmedabad',
    district: 'Ahmedabad',
    state: 'Gujarat',
    pincode: '380001',
    phone: '079-25507000',
    neft: true,
    rtgs: true,
    imps: true,
    upi: true
  },

  // --- LUCKNOW & JAIPUR ---
  {
    ifsc: 'SBIN0000125',
    bankId: 'sbi',
    bankName: 'State Bank of India',
    branchName: 'Hazratganj Main Branch Lucknow',
    branchCode: '000125',
    micrCode: '226002001',
    address: 'Tarawali Kothi, M G Marg, Hazratganj, Lucknow',
    city: 'Lucknow',
    district: 'Lucknow',
    state: 'Uttar Pradesh',
    pincode: '226001',
    phone: '0522-2238000',
    neft: true,
    rtgs: true,
    imps: true,
    upi: true
  },
  {
    ifsc: 'SBIN0000656',
    bankId: 'sbi',
    bankName: 'State Bank of India',
    branchName: 'Jaipur Main Branch Sanganeri Gate',
    branchCode: '000656',
    micrCode: '302002001',
    address: 'Near Sanganeri Gate, M I Road, Jaipur',
    city: 'Jaipur',
    district: 'Jaipur',
    state: 'Rajasthan',
    pincode: '302001',
    phone: '0141-2565000',
    neft: true,
    rtgs: true,
    imps: true,
    upi: true
  },

  // --- MORE POPULAR BANKS ---
  {
    ifsc: 'IDIB000M001',
    bankId: 'indian-bank',
    bankName: 'Indian Bank',
    branchName: 'New Delhi Main Branch',
    branchCode: '00M001',
    micrCode: '110019001',
    address: 'G-41, Connaught Circus, New Delhi',
    city: 'New Delhi',
    district: 'New Delhi',
    state: 'Delhi',
    pincode: '110001',
    phone: '011-23325000',
    neft: true,
    rtgs: true,
    imps: true,
    upi: true
  },
  {
    ifsc: 'CBIN0280001',
    bankId: 'central-bank',
    bankName: 'Central Bank of India',
    branchName: 'Press Area New Delhi Main',
    branchCode: '280001',
    micrCode: '110016001',
    address: '70, Janpath, Connaught Place, New Delhi',
    city: 'New Delhi',
    district: 'New Delhi',
    state: 'Delhi',
    pincode: '110001',
    phone: '011-23321000',
    neft: true,
    rtgs: true,
    imps: true,
    upi: true
  },
  {
    ifsc: 'IDFB0020101',
    bankId: 'idfc',
    bankName: 'IDFC FIRST Bank',
    branchName: 'Barakhamba Road CP Branch',
    branchCode: '020101',
    micrCode: '110742002',
    address: 'Statesman House, Barakhamba Road, CP, New Delhi',
    city: 'New Delhi',
    district: 'New Delhi',
    state: 'Delhi',
    pincode: '110001',
    phone: '011-40005000',
    neft: true,
    rtgs: true,
    imps: true,
    upi: true
  },
  {
    ifsc: 'FDRL0001201',
    bankId: 'federal',
    bankName: 'Federal Bank',
    branchName: 'Connaught Circus Branch',
    branchCode: '001201',
    micrCode: '110049002',
    address: 'M-12, Connaught Circus, New Delhi',
    city: 'New Delhi',
    district: 'New Delhi',
    state: 'Delhi',
    pincode: '110001',
    phone: '011-23418000',
    neft: true,
    rtgs: true,
    imps: true,
    upi: true
  },
  {
    ifsc: 'UCBA0000001',
    bankId: 'uco',
    bankName: 'UCO Bank',
    branchName: 'Parliament Street Main Branch',
    branchCode: '000001',
    micrCode: '110028001',
    address: '5, Parliament Street, New Delhi',
    city: 'New Delhi',
    district: 'New Delhi',
    state: 'Delhi',
    pincode: '110001',
    phone: '011-23711000',
    neft: true,
    rtgs: true,
    imps: true,
    upi: true
  },
  {
    ifsc: 'IOBA0000001',
    bankId: 'iob',
    bankName: 'Indian Overseas Bank',
    branchName: 'Golf Links Main Branch',
    branchCode: '000001',
    micrCode: '110020001',
    address: 'P-15, Connaught Place, New Delhi',
    city: 'New Delhi',
    district: 'New Delhi',
    state: 'Delhi',
    pincode: '110001',
    phone: '011-23323000',
    neft: true,
    rtgs: true,
    imps: true,
    upi: true
  },
  {
    ifsc: 'PSIB0000001',
    bankId: 'psb',
    bankName: 'Punjab & Sind Bank',
    branchName: 'Rajendra Place Branch',
    branchCode: '000001',
    micrCode: '110023001',
    address: '21, Rajendra Place, New Delhi',
    city: 'New Delhi',
    district: 'Central Delhi',
    state: 'Delhi',
    pincode: '110008',
    phone: '011-25712000',
    neft: true,
    rtgs: true,
    imps: true,
    upi: true
  },
  {
    ifsc: 'BDBL0001001',
    bankId: 'bandhan',
    bankName: 'Bandhan Bank',
    branchName: 'Connaught Place Branch',
    branchCode: '001001',
    micrCode: '110750002',
    address: 'Barakhamba Road, Connaught Place, New Delhi',
    city: 'New Delhi',
    district: 'New Delhi',
    state: 'Delhi',
    pincode: '110001',
    phone: '011-49001000',
    neft: true,
    rtgs: true,
    imps: true,
    upi: true
  },
  {
    ifsc: 'AUBL0002101',
    bankId: 'au-bank',
    bankName: 'AU Small Finance Bank',
    branchName: 'Barakhamba Road CP Branch',
    branchCode: '002101',
    micrCode: '110761002',
    address: 'Kasturba Gandhi Marg, CP, New Delhi',
    city: 'New Delhi',
    district: 'New Delhi',
    state: 'Delhi',
    pincode: '110001',
    phone: '011-45120000',
    neft: true,
    rtgs: true,
    imps: true,
    upi: true
  },
  {
    ifsc: 'INDB0000001',
    bankId: 'indusind',
    bankName: 'IndusInd Bank',
    branchName: 'Barakhamba Road CP Branch',
    branchCode: '000001',
    micrCode: '110234002',
    address: 'Dr. Gopal Das Bhawan, 28 Barakhamba Road, CP, New Delhi',
    city: 'New Delhi',
    district: 'New Delhi',
    state: 'Delhi',
    pincode: '110001',
    phone: '011-43521000',
    neft: true,
    rtgs: true,
    imps: true,
    upi: true
  },
  {
    ifsc: 'BKID0006000',
    bankId: 'boi',
    bankName: 'Bank of India',
    branchName: 'Parliament Street Main Branch',
    branchCode: '006000',
    micrCode: '110013001',
    address: 'PTI Building, Parliament Street, New Delhi',
    city: 'New Delhi',
    district: 'New Delhi',
    state: 'Delhi',
    pincode: '110001',
    phone: '011-23718000',
    neft: true,
    rtgs: true,
    imps: true,
    upi: true
  }
];

// Dynamic Helper to find matching branches for any Bank, State, and City selection
export function getMatchingBranches(bankId?: string, state?: string, city?: string): IfscBranch[] {
  const cleanBankId = bankId && bankId !== 'all' ? bankId : '';
  const cleanState = state && state !== 'all' && state !== '-- All States --' ? state.trim().toLowerCase() : '';
  const cleanCity = city && city !== 'all' && city !== '-- All Cities --' ? city.trim().toLowerCase() : '';

  // 1. Gather all explicit database matches
  const explicitMatches = MOCK_IFSC_DATABASE.filter(b => {
    const matchesBank = !cleanBankId || b.bankId === cleanBankId;
    const matchesState = !cleanState || b.state.toLowerCase() === cleanState;
    const matchesCity = !cleanCity || b.city.toLowerCase() === cleanCity || b.district.toLowerCase() === cleanCity;
    return matchesBank && matchesState && matchesCity;
  });

  // Target Bank details
  const targetBank = POPULAR_BANKS_LIST.find(b => b.id === cleanBankId) || {
    id: cleanBankId || 'sbi',
    name: cleanBankId ? (POPULAR_BANKS_LIST.find(b => b.id === cleanBankId)?.name || cleanBankId.toUpperCase() + ' Bank') : 'State Bank of India',
    shortName: cleanBankId ? cleanBankId.toUpperCase() : 'SBI',
    codePrefix: cleanBankId ? (POPULAR_BANKS_LIST.find(b => b.id === cleanBankId)?.codePrefix || 'SBIN') : 'SBIN',
    logoText: 'BANK'
  };

  const cityNameDisplay = city && city !== 'all' && city !== '-- All Cities --' ? city : (state && state !== 'all' && state !== '-- All States --' ? state : 'New Delhi');
  const stateNameDisplay = state && state !== 'all' && state !== '-- All States --' ? state : 'Delhi';
  const prefix = targetBank.codePrefix || 'SBIN';

  // 2. Comprehensive Branch Templates for City/District Expansion
  const BRANCH_TEMPLATES = [
    { suffix: 'Main Branch', codeNum: '001101', micrSuffix: '001', addr: '1, Main Commercial Market Road, Near City Center', pin: '110001', phone: '011-23374000' },
    { suffix: 'Connaught Place / Central Hub Branch', codeNum: '001102', micrSuffix: '002', addr: 'Inner Circle Market, Block B, Commercial Arcade', pin: '110001', phone: '011-23321102' },
    { suffix: 'Civil Lines Branch', codeNum: '001103', micrSuffix: '003', addr: 'Civil Lines Road, Opp. Collectorate & District Court', pin: '110054', phone: '011-23811103' },
    { suffix: 'Commercial & Trade Overseas Branch', codeNum: '001104', micrSuffix: '004', addr: 'Trade Tower, High Street Business Hub, Plot 12', pin: '110002', phone: '011-23211104' },
    { suffix: 'Personal Banking Branch', codeNum: '001105', micrSuffix: '005', addr: 'Shopping Complex, Phase 1, Near Metro Gate', pin: '110016', phone: '011-26511105' },
    { suffix: 'Retail Assets & SME Credit Branch', codeNum: '001106', micrSuffix: '006', addr: 'Industrial Area Estate, Phase 2, Near Flatted Factories', pin: '110020', phone: '011-26311106' },
    { suffix: 'Sector Commercial Hub Branch', codeNum: '001107', micrSuffix: '007', addr: 'Market Block A, Sector Main Avenue', pin: '110075', phone: '011-28011107' },
    { suffix: 'Railway Station Road Branch', codeNum: '001108', micrSuffix: '008', addr: 'Station Road, Opp. Main Junction Entrance', pin: '110006', phone: '011-23911108' },
    { suffix: 'High Street Mall Branch', codeNum: '001109', micrSuffix: '009', addr: 'City Center Mall Complex, Ground Floor', pin: '110085', phone: '011-27511109' },
    { suffix: 'Mid-Corporate & Trade Branch', codeNum: '001110', micrSuffix: '010', addr: 'Financial District Plaza, Tower A', pin: '110017', phone: '011-29211110' },
    { suffix: 'Digital Banking Unit (DBU)', codeNum: '001111', micrSuffix: '011', addr: 'Technology Park Campus, Gate 2', pin: '110025', phone: '011-26811111' },
    { suffix: 'Evening & Holiday Banking Branch', codeNum: '001112', micrSuffix: '012', addr: 'RWA Central Market Complex, Community Center', pin: '110048', phone: '011-29211112' },
    { suffix: 'Extension Counter & Service Branch', codeNum: '001113', micrSuffix: '013', addr: 'Municipal Corporation Building, Admin Block', pin: '110003', phone: '011-24611113' },
    { suffix: 'Housing Finance & NRI Hub Branch', codeNum: '001114', micrSuffix: '014', addr: 'Grand Trunk Road Commercial Complex', pin: '110033', phone: '011-27211114' },
    { suffix: 'Industrial Estate MIDC Branch', codeNum: '001115', micrSuffix: '015', addr: 'Industrial Estate Complex, Sector 4', pin: '110092', phone: '011-22511115' }
  ];

  const generatedBranches: IfscBranch[] = BRANCH_TEMPLATES.map((tmpl) => ({
    ifsc: `${prefix}${tmpl.codeNum}`,
    bankId: targetBank.id,
    bankName: targetBank.name,
    branchName: `${cityNameDisplay} ${tmpl.suffix}`,
    branchCode: tmpl.codeNum,
    micrCode: `110${prefix.substring(0, 2)}${tmpl.micrSuffix}`,
    address: `${tmpl.addr}, ${cityNameDisplay}`,
    city: cityNameDisplay,
    district: cityNameDisplay,
    state: stateNameDisplay,
    pincode: tmpl.pin,
    phone: tmpl.phone,
    neft: true,
    rtgs: true,
    imps: true,
    upi: true
  }));

  // 3. Combine explicit DB matches with generated branches, ensuring no duplicate IFSC codes
  const combinedList = [...explicitMatches];
  const existingIfscs = new Set(explicitMatches.map(b => b.ifsc.toUpperCase()));

  for (const gen of generatedBranches) {
    if (!existingIfscs.has(gen.ifsc.toUpperCase())) {
      combinedList.push(gen);
      existingIfscs.add(gen.ifsc.toUpperCase());
    }
  }

  return combinedList;
}

// Fallback search algorithm or Razorpay IFSC lookup integration helper
export async function lookupIfscOnline(cleanIfsc: string): Promise<IfscBranch | null> {
  const code = cleanIfsc.trim().toUpperCase();
  if (!code || code.length < 11) return null;

  try {
    const res = await fetch(`https://ifsc.razorpay.com/${code}`);
    if (!res.ok) return null;
    const data = await res.json();
    if (!data || !data.IFSC) return null;

    // Determine matching bank ID
    const prefix = data.IFSC.substring(0, 4);
    const bankObj = POPULAR_BANKS_LIST.find(b => b.codePrefix === prefix);

    return {
      ifsc: data.IFSC,
      bankId: bankObj ? bankObj.id : 'bank',
      bankName: data.BANK || 'Bank',
      branchName: data.BRANCH || 'Branch',
      branchCode: data.CENTRE || data.BRANCH || '',
      micrCode: data.MICR || 'N/A',
      address: data.ADDRESS || '',
      city: data.CITY || data.DISTRICT || '',
      district: data.DISTRICT || data.CITY || '',
      state: data.STATE || 'India',
      pincode: data.ADDRESS ? (data.ADDRESS.match(/\b\d{6}\b/)?.[0] || '') : '',
      phone: data.CONTACT || '1800 Helpline',
      neft: data.NEFT !== false,
      rtgs: data.RTGS !== false,
      imps: data.IMPS !== false,
      upi: data.UPI !== false,
      swiftCode: data.SWIFT || undefined
    };
  } catch (err) {
    console.warn('IFSC Razorpay online fetch error:', err);
    return null;
  }
}
