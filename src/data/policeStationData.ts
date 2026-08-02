export interface PoliceStationItem {
  id: string;
  name: string;
  hindiName: string;
  district: string;
  address: string;
  pincode: string;
  phone: string;
  shoPhone: string;
  pcrNumber: string;
  jurisdictionAreas: string[];
  landmark: string;
  isSpecialUnit?: boolean;
}

export const DELHI_POLICE_DISTRICTS = [
  'All Districts',
  'New Delhi District',
  'Central Delhi District',
  'North Delhi District',
  'South Delhi District',
  'South East Police District',
  'South West Police District',
  'West Police District',
  'East Police District',
  'Shahdara Police District',
  'North East Police District',
  'North West Police District',
  'Outer Police District',
  'Outer North Police District',
  'Dwarka Police District',
  'Rohini Police District',
  'Special Units & Crime Branch'
];

export const MOCK_DELHI_POLICE_STATIONS: PoliceStationItem[] = [
  // --- NEW DELHI DISTRICT ---
  {
    id: 'ps-parliament-street',
    name: 'Police Station Parliament Street',
    hindiName: 'थाना पार्लियामेंट स्ट्रीट',
    district: 'New Delhi District',
    address: 'Parliament Street, Opp. NDMC Building, Patel Chowk, New Delhi',
    pincode: '110001',
    phone: '011-23361100',
    shoPhone: '011-23747100 / 8750870121',
    pcrNumber: '112',
    jurisdictionAreas: ['Connaught Place', 'Janpath', 'Patel Chowk', 'Jantar Mantar', 'Tolstoy Marg', 'Windsor Place', 'Parliament House'],
    landmark: 'Near Patel Chowk Metro Station'
  },
  {
    id: 'ps-connaught-place',
    name: 'Police Station Connaught Place',
    hindiName: 'थाना कनॉट प्लेस',
    district: 'New Delhi District',
    address: 'Atul Grove Road, Near Janpath, Connaught Place, New Delhi',
    pincode: '110001',
    phone: '011-23341800',
    shoPhone: '011-23341801 / 8750870122',
    pcrNumber: '112',
    jurisdictionAreas: ['Inner Circle CP', 'Outer Circle CP', 'Regal Building', 'Shankar Market', 'Shivaji Stadium', 'Palika Bazaar', 'KG Marg'],
    landmark: 'Behind Janpath Market'
  },
  {
    id: 'ps-chanakyapuri',
    name: 'Police Station Chanakyapuri',
    hindiName: 'थाना चाणक्यपुरी',
    district: 'New Delhi District',
    address: 'Nyaya Marg, Diplomatic Enclave, Chanakyapuri, New Delhi',
    pincode: '110021',
    phone: '011-24101000',
    shoPhone: '011-24101001 / 8750870123',
    pcrNumber: '112',
    jurisdictionAreas: ['Diplomatic Enclave', 'Shanti Path', 'Moti Bagh', 'Malcha Marg', 'US Embassy Area', 'Satya Niketan Border'],
    landmark: 'Near Rail Museum'
  },
  {
    id: 'ps-tughlak-road',
    name: 'Police Station Tughlak Road',
    hindiName: 'थाना तुगलक रोड',
    district: 'New Delhi District',
    address: 'Tughlak Road, Near Race Course, New Delhi',
    pincode: '110011',
    phone: '011-23014100',
    shoPhone: '011-23014101 / 8750870124',
    pcrNumber: '112',
    jurisdictionAreas: ['Aurangzeb Road', 'Prithviraj Road', 'Claridges Hotel Area', 'Safdarjung Tomb', 'Lok Kalyan Marg', 'Race Course'],
    landmark: 'Near Safdarjung Airport Metro'
  },
  {
    id: 'ps-mandir-marg',
    name: 'Police Station Mandir Marg',
    hindiName: 'थाना मंदिर मार्ग',
    district: 'New Delhi District',
    address: 'Mandir Marg, Near Laxmi Narayan Birla Temple, New Delhi',
    pincode: '110001',
    phone: '011-23362100',
    shoPhone: '011-23362101 / 8750870125',
    pcrNumber: '112',
    jurisdictionAreas: ['Birla Mandir', 'Panchkuian Road', 'Kali Bari Marg', 'Valmiki Temple', 'St. Thomas School Area'],
    landmark: 'Opp. Laxmi Narayan Temple'
  },
  {
    id: 'ps-barakhamba-road',
    name: 'Police Station Barakhamba Road',
    hindiName: 'थाना बाराखम्बा रोड',
    district: 'New Delhi District',
    address: 'Barakhamba Road, Near Fire Station, New Delhi',
    pincode: '110001',
    phone: '011-23311100',
    shoPhone: '011-23311101 / 8750870126',
    pcrNumber: '112',
    jurisdictionAreas: ['Barakhamba Road', 'Statesman House', 'Modern School', 'Mandi House Circle', 'Gopal Das Building'],
    landmark: 'Adjacent to Barakhamba Metro Station'
  },
  {
    id: 'ps-tilak-marg',
    name: 'Police Station Tilak Marg',
    hindiName: 'थाना तिलक मार्ग',
    district: 'New Delhi District',
    address: 'Tilak Marg, Near Supreme Court of India, New Delhi',
    pincode: '110001',
    phone: '011-23381100',
    shoPhone: '011-23381101 / 8750870127',
    pcrNumber: '112',
    jurisdictionAreas: ['Supreme Court', 'Delhi High Court', 'Pragya Maidan', 'India Gate Lawns', 'Purana Qila', 'National Museum'],
    landmark: 'Opp. Supreme Court Gate 4'
  },

  // --- CENTRAL DELHI DISTRICT ---
  {
    id: 'ps-daryaganj',
    name: 'Police Station Daryaganj',
    hindiName: 'थाना दरियागंज',
    district: 'Central Delhi District',
    address: 'Ansari Road, Daryaganj, New Delhi',
    pincode: '110002',
    phone: '011-23271100',
    shoPhone: '011-23271101 / 8750870221',
    pcrNumber: '112',
    jurisdictionAreas: ['Daryaganj Market', 'Delhi Gate', 'Asaf Ali Road', 'Golcha Cinema', 'Faiz Bazaar', 'Netaji Subhash Marg'],
    landmark: 'Near Delhi Gate Metro Station'
  },
  {
    id: 'ps-karol-bagh',
    name: 'Police Station Karol Bagh',
    hindiName: 'थाना करोल बाग',
    district: 'Central Delhi District',
    address: 'Pusa Road, Near Metro Pillar 110, Karol Bagh, New Delhi',
    pincode: '110005',
    phone: '011-25751100',
    shoPhone: '011-25751101 / 8750870222',
    pcrNumber: '112',
    jurisdictionAreas: ['Ajmal Khan Road', 'Bank Street', 'Gaffar Market', 'Dev Nagar', 'Joshi Road', 'Arya Samaj Road'],
    landmark: 'Opp. Karol Bagh Metro Station Gate 1'
  },
  {
    id: 'ps-paharganj',
    name: 'Police Station Paharganj',
    hindiName: 'थाना पहाड़गंज',
    district: 'Central Delhi District',
    address: 'Desh Bandhu Gupta Road, Paharganj, New Delhi',
    pincode: '110055',
    phone: '011-23581100',
    shoPhone: '011-23581101 / 8750870223',
    pcrNumber: '112',
    jurisdictionAreas: ['New Delhi Railway Station (NDLS)', 'Main Bazaar Paharganj', 'Chuna Mandi', 'Arakshan Road', 'Imperial Cinema Area'],
    landmark: 'Near NDLS Station Paharganj Entry'
  },
  {
    id: 'ps-ip-estate',
    name: 'Police Station IP Estate',
    hindiName: 'थाना आई.पी. एस्टेट',
    district: 'Central Delhi District',
    address: 'Ring Road, Opp. WHO Building, ITO, New Delhi',
    pincode: '110002',
    phone: '011-23318100',
    shoPhone: '011-23318101 / 8750870226',
    pcrNumber: '112',
    jurisdictionAreas: ['ITO Junction', 'Vikas Minar', 'LNJP Hospital', 'Maulana Azad Medical College (MAMC)', 'Rajghat', 'Indraprastha Park'],
    landmark: 'Near ITO Metro Station'
  },
  {
    id: 'ps-rajendra-nagar',
    name: 'Police Station Rajendra Nagar',
    hindiName: 'थाना राजेन्द्र नगर',
    district: 'Central Delhi District',
    address: 'Shankar Road, Old Rajendra Nagar, New Delhi',
    pincode: '110060',
    phone: '011-25721100',
    shoPhone: '011-25721101 / 8750870227',
    pcrNumber: '112',
    jurisdictionAreas: ['Old Rajendra Nagar', 'Sir Ganga Ram Hospital', 'New Rajendra Nagar', 'Pusa Road Coaching Hub', 'Shankar Road Market'],
    landmark: 'Near Sir Ganga Ram Hospital'
  },

  // --- NORTH DELHI DISTRICT ---
  {
    id: 'ps-kotwali',
    name: 'Police Station Kotwali',
    hindiName: 'थाना कोतवाली (चांदनी चौक)',
    district: 'North Delhi District',
    address: 'Chandni Chowk Main Road, Opp. Town Hall, Delhi',
    pincode: '110006',
    phone: '011-23971100',
    shoPhone: '011-23971101 / 8750870321',
    pcrNumber: '112',
    jurisdictionAreas: ['Chandni Chowk', 'Red Fort', 'Gurudwara Sis Ganj Sahib', 'Fountain Chowk', 'Dariba Kalan', 'Kinari Bazaar'],
    landmark: 'Opp. Historic Town Hall Chandni Chowk'
  },
  {
    id: 'ps-kashmere-gate',
    name: 'Police Station Kashmere Gate',
    hindiName: 'थाना कश्मीरी गेट',
    district: 'North Delhi District',
    address: 'ISBT Bus Complex, Kashmere Gate, Delhi',
    pincode: '110006',
    phone: '011-23861100',
    shoPhone: '011-23861101 / 8750870322',
    pcrNumber: '112',
    jurisdictionAreas: ['Kashmere Gate ISBT Bus Stand', 'St. Xavier School', 'Lothian Bridge', 'Inter State Bus Terminal', 'Mori Gate'],
    landmark: 'Inside ISBT Complex'
  },
  {
    id: 'ps-civil-lines',
    name: 'Police Station Civil Lines',
    hindiName: 'थाना सिविल लाइंस',
    district: 'North Delhi District',
    address: 'Rajpur Road, Near Vidhan Sabha, Civil Lines, Delhi',
    pincode: '110054',
    phone: '011-23931100',
    shoPhone: '011-23931101 / 8750870323',
    pcrNumber: '112',
    jurisdictionAreas: ['Delhi Vidhan Sabha', 'Old Secretariat', 'Tis Hazari Courts', 'Rajpur Road', 'IP College for Women', 'Ludlow Castle'],
    landmark: 'Near Civil Lines Metro Station'
  },
  {
    id: 'ps-maurice-nagar',
    name: 'Police Station Maurice Nagar',
    hindiName: 'थाना मौरिस नगर (नॉर्थ कैंपस)',
    district: 'North Delhi District',
    address: 'University Enclave, North Campus Delhi University, Delhi',
    pincode: '110007',
    phone: '011-27661100',
    shoPhone: '011-27661101 / 8750870324',
    pcrNumber: '112',
    jurisdictionAreas: ['Delhi University North Campus', 'Hindu College', 'SRCC', 'Hansraj College', 'Kamla Nagar Market', 'Patel Chest Institute'],
    landmark: 'Inside DU Campus'
  },

  // --- SOUTH DELHI DISTRICT ---
  {
    id: 'ps-hauz-khas',
    name: 'Police Station Hauz Khas',
    hindiName: 'थाना हौज खास',
    district: 'South Delhi District',
    address: 'Aurobindo Marg, Hauz Khas, New Delhi',
    pincode: '110016',
    phone: '011-26511100',
    shoPhone: '011-26511101 / 8750870421',
    pcrNumber: '112',
    jurisdictionAreas: ['Hauz Khas Village', 'Green Park', 'IIT Delhi Campus', 'Safdarjung Development Area (SDA)', 'Kalu Sarai', 'Bhim Nagri'],
    landmark: 'Near Green Park Metro Station'
  },
  {
    id: 'ps-malviya-nagar',
    name: 'Police Station Malviya Nagar',
    hindiName: 'थाना मालवीय नगर',
    district: 'South Delhi District',
    address: 'Main Market, Malviya Nagar, New Delhi',
    pincode: '110017',
    phone: '011-26681100',
    shoPhone: '011-26681101 / 8750870422',
    pcrNumber: '112',
    jurisdictionAreas: ['Malviya Nagar Market', 'Khirki Extension', 'Corner Market', 'Sarvodya Enclave', 'Sheikh Sarai Phase 1 & 2', 'Geetanjali Enclave'],
    landmark: 'Adjacent to Malviya Nagar Market'
  },
  {
    id: 'ps-saket',
    name: 'Police Station Saket',
    hindiName: 'थाना साकेत',
    district: 'South Delhi District',
    address: 'Press Enclave Road, Saket, New Delhi',
    pincode: '110017',
    phone: '011-29561100',
    shoPhone: '011-29561101 / 8750870423',
    pcrNumber: '112',
    jurisdictionAreas: ['Select CITYWALK Mall', 'Saket District Court', 'Max Smart Super Speciality Hospital', 'Pushp Vihar', 'DLF Avenue Saket', 'PVR Anupam'],
    landmark: 'Opp. Saket District Courts'
  },
  {
    id: 'ps-mehrauli',
    name: 'Police Station Mehrauli',
    hindiName: 'थाना महरौली',
    district: 'South Delhi District',
    address: 'Qutub Minar Road, Mehrauli, New Delhi',
    pincode: '110030',
    phone: '011-26641100',
    shoPhone: '011-26641101 / 8750870424',
    pcrNumber: '112',
    jurisdictionAreas: ['Qutub Minar Monument', 'Mehrauli Bus Terminal', 'Lado Sarai', 'Jamali Kamali Park', 'Ahimsa Sthal', 'Sultanpur Metro Area'],
    landmark: 'Near Qutub Minar Ticket Counter'
  },

  // --- SOUTH EAST POLICE DISTRICT ---
  {
    id: 'ps-lajpat-nagar',
    name: 'Police Station Lajpat Nagar',
    hindiName: 'थाना लाजपत नगर',
    district: 'South East Police District',
    address: 'Ring Road, Lajpat Nagar IV, New Delhi',
    pincode: '110024',
    phone: '011-26411100',
    shoPhone: '011-26411101 / 8750870521',
    pcrNumber: '112',
    jurisdictionAreas: ['Lajpat Nagar Central Market', 'Lajpat Nagar I, II, III, IV', 'Defence Colony Border', 'National Heart Institute', 'Amar Colony Border'],
    landmark: 'On Ring Road Flyover Service Lane'
  },
  {
    id: 'ps-kalkaji',
    name: 'Police Station Kalkaji',
    hindiName: 'थाना कालकाजी',
    district: 'South East Police District',
    address: 'Hansraj Sethi Marg, Kalkaji, New Delhi',
    pincode: '110019',
    phone: '011-26431100',
    shoPhone: '011-26431101 / 8750870522',
    pcrNumber: '112',
    jurisdictionAreas: ['Kalkaji Mandir', 'Nehru Place Bus Terminal', 'CR Park Main Road', 'Govindpuri Metro Area', 'Alaknanda Shopping Complex'],
    landmark: 'Near Kalkaji Temple Gate 2'
  },
  {
    id: 'ps-cr-park',
    name: 'Police Station CR Park',
    hindiName: 'थाना सी.आर. पार्क',
    district: 'South East Police District',
    address: 'B Block Market, Chittaranjan Park, New Delhi',
    pincode: '110019',
    phone: '011-26271100',
    shoPhone: '011-26271101 / 8750870523',
    pcrNumber: '112',
    jurisdictionAreas: ['CR Park Market 1 & 2', 'Kali Mandir CR Park', 'Pamposh Enclave', 'Greater Kailash 2 Border', 'B Block Chittaranjan Park'],
    landmark: 'Adjacent to B-Block Market'
  },
  {
    id: 'ps-jamia-nagar',
    name: 'Police Station Jamia Nagar',
    hindiName: 'थाना जामिया नगर',
    district: 'South East Police District',
    address: 'Okhla Main Road, Jamia Nagar, New Delhi',
    pincode: '110025',
    phone: '011-26981100',
    shoPhone: '011-26981101 / 8750870525',
    pcrNumber: '112',
    jurisdictionAreas: ['Jamia Millia Islamia University', 'Batla House', 'Zakir Nagar', 'Okhla Vihar', 'Abul Fazal Enclave', 'Tikona Park'],
    landmark: 'Near Jamia Metro Station'
  },

  // --- SOUTH WEST POLICE DISTRICT ---
  {
    id: 'ps-vasant-vihar',
    name: 'Police Station Vasant Vihar',
    hindiName: 'थाना वसंत विहार',
    district: 'South West Police District',
    address: 'Poorvi Marg, Vasant Vihar, New Delhi',
    pincode: '110057',
    phone: '011-26141100',
    shoPhone: '011-26141101 / 8750870621',
    pcrNumber: '112',
    jurisdictionAreas: ['Basant Lok Market', 'Priya Cinema Complex', 'Vasant Vihar Block A to F', 'Munirka Enclave', 'Uttara Swamimalai Temple'],
    landmark: 'Near Basant Lok Shopping Complex'
  },
  {
    id: 'ps-vasant-kunj-north',
    name: 'Police Station Vasant Kunj North',
    hindiName: 'थाना वसंत कुंज नॉर्थ',
    district: 'South West Police District',
    address: 'Sector B, Vasant Kunj, New Delhi',
    pincode: '110070',
    phone: '011-26891100',
    shoPhone: '011-26891101 / 8750870622',
    pcrNumber: '112',
    jurisdictionAreas: ['Vasant Square Mall', 'JNU Campus North Gate', 'Vasant Kunj Sector B & C', 'Kishangarh Village', 'Ryan International Area'],
    landmark: 'Near Vasant Square Mall'
  },
  {
    id: 'ps-sarojini-nagar',
    name: 'Police Station Sarojini Nagar',
    hindiName: 'थाना सरोजिनी नगर',
    district: 'South West Police District',
    address: 'Ring Road, Sarojini Nagar, New Delhi',
    pincode: '110023',
    phone: '011-24671100',
    shoPhone: '011-24671101 / 8750870624',
    pcrNumber: '112',
    jurisdictionAreas: ['Sarojini Nagar Export Market', 'Laxmibai Nagar', 'Kidwai Nagar East & West', 'Netaji Nagar', 'Babu Market'],
    landmark: 'Opp. Sarojini Nagar Metro Station'
  },

  // --- WEST POLICE DISTRICT ---
  {
    id: 'ps-rajouri-garden',
    name: 'Police Station Rajouri Garden',
    hindiName: 'थाना राजौरी गार्डन',
    district: 'West Police District',
    address: 'Major Sudesh Kumar Marg, Rajouri Garden, New Delhi',
    pincode: '110027',
    phone: '011-25111100',
    shoPhone: '011-25111101 / 8750870721',
    pcrNumber: '112',
    jurisdictionAreas: ['Rajouri Garden Main Market', 'City Square Mall', 'TDI Mall', 'Tagore Garden', 'Subhash Nagar', 'Raja Garden Chowk'],
    landmark: 'Near Rajouri Garden Metro Interchange'
  },
  {
    id: 'ps-janakpuri',
    name: 'Police Station Janakpuri',
    hindiName: 'थाना जनकपुरी',
    district: 'West Police District',
    address: 'District Centre Road, Janakpuri, New Delhi',
    pincode: '110058',
    phone: '011-25551100',
    shoPhone: '011-25551101 / 8750870723',
    pcrNumber: '112',
    jurisdictionAreas: ['Janakpuri District Centre', 'Chhoti Subzi Mandi', 'Jail Road Market', 'Possangipur', 'Janakpuri Block A, B, C, D'],
    landmark: 'Near Janakpuri West Metro Station'
  },
  {
    id: 'ps-punjabi-bagh',
    name: 'Police Station Punjabi Bagh',
    hindiName: 'थाना पंजाबी बाग',
    district: 'West Police District',
    address: 'Ring Road, Punjabi Bagh, New Delhi',
    pincode: '110026',
    phone: '011-25221100',
    shoPhone: '011-25221101 / 8750870722',
    pcrNumber: '112',
    jurisdictionAreas: ['Club Road Punjabi Bagh', 'Punjabi Bagh East & West', 'Madipur', 'Shivaji Park Metro Area', 'Agarsain Hospital Area'],
    landmark: 'Near Club Road Crossing'
  },

  // --- EAST POLICE DISTRICT ---
  {
    id: 'ps-preet-vihar',
    name: 'Police Station Preet Vihar',
    hindiName: 'थाना प्रीत विहार',
    district: 'East Police District',
    address: 'Vikas Marg, Preet Vihar, Delhi',
    pincode: '110092',
    phone: '011-22501100',
    shoPhone: '011-22501101 / 8750870821',
    pcrNumber: '112',
    jurisdictionAreas: ['Preet Vihar Commercial Complex', 'Nirman Vihar Metro Area', 'V3S Mall', 'Swasthya Vihar', 'Karkardooma Border'],
    landmark: 'Near Preet Vihar Metro Gate 3'
  },
  {
    id: 'ps-laxmi-nagar',
    name: 'Police Station Laxmi Nagar',
    hindiName: 'थाना लक्ष्मी नगर',
    district: 'East Police District',
    address: 'Vikas Marg, Laxmi Nagar, Delhi',
    pincode: '110092',
    phone: '011-22451100',
    shoPhone: '011-22451101 / 8750870822',
    pcrNumber: '112',
    jurisdictionAreas: ['Laxmi Nagar CA Coaching Market', 'Shakarpur', 'Mangal Bazaar', 'Walia Circle', 'Vikas Marg Commercial Hub'],
    landmark: 'Near Laxmi Nagar Metro Pillar 35'
  },
  {
    id: 'ps-mayur-vihar',
    name: 'Police Station Mayur Vihar',
    hindiName: 'थाना मयूर विहार',
    district: 'East Police District',
    address: 'Phase 1, Mayur Vihar, Delhi',
    pincode: '110091',
    phone: '011-22751100',
    shoPhone: '011-22751101 / 8750870823',
    pcrNumber: '112',
    jurisdictionAreas: ['Mayur Vihar Phase 1 Pocket 1 & 2', 'Trilokpuri', 'Chilla Village', 'Sanjay Lake Park Area', 'Noida Border Toll'],
    landmark: 'Near Mayur Vihar Phase 1 Metro'
  },

  // --- SHAHDARA POLICE DISTRICT ---
  {
    id: 'ps-shahdara',
    name: 'Police Station Shahdara',
    hindiName: 'थाना शाहदरा',
    district: 'Shahdara Police District',
    address: 'Railway Station Road, Shahdara, Delhi',
    pincode: '110032',
    phone: '011-22321100',
    shoPhone: '011-22321101 / 8750870921',
    pcrNumber: '112',
    jurisdictionAreas: ['Shahdara Chowk', 'Rohtas Nagar', 'Chhota Bazaar Shahdara', 'Mansarovar Park', 'Shahdara Railway Station'],
    landmark: 'Opp. Shahdara Railway Station'
  },
  {
    id: 'ps-anand-vihar',
    name: 'Police Station Anand Vihar',
    hindiName: 'थाना आनंद विहार',
    district: 'Shahdara Police District',
    address: 'Near ISBT Anand Vihar Terminal, Delhi',
    pincode: '110092',
    phone: '011-22151100',
    shoPhone: '011-22151101 / 8750870923',
    pcrNumber: '112',
    jurisdictionAreas: ['Anand Vihar Railway Station', 'Anand Vihar ISBT', 'Surajmal Vihar', 'Karkardooma Court Complex', 'Cross River Mall'],
    landmark: 'Inside Anand Vihar Terminal Complex'
  },

  // --- NORTH EAST POLICE DISTRICT ---
  {
    id: 'ps-seelampur',
    name: 'Police Station Seelampur',
    hindiName: 'थाना सीलमपुर',
    district: 'North East Police District',
    address: 'GT Road, Seelampur, Delhi',
    pincode: '110053',
    phone: '011-22181100',
    shoPhone: '011-22181101 / 8750871021',
    pcrNumber: '112',
    jurisdictionAreas: ['Seelampur Market', 'Welcome Metro Station', 'Shastri Park DMRC Depot', 'Dharampura', 'Old Seelampur'],
    landmark: 'Near Welcome Metro Station'
  },

  // --- DWARKA POLICE DISTRICT ---
  {
    id: 'ps-dwarka-north',
    name: 'Police Station Dwarka North',
    hindiName: 'थाना द्वारका नॉर्थ',
    district: 'Dwarka Police District',
    address: 'Sector 16B, Dwarka, New Delhi',
    pincode: '110078',
    phone: '011-28031100',
    shoPhone: '011-28031101 / 8750871222',
    pcrNumber: '112',
    jurisdictionAreas: ['Dwarka Sector 13, 14, 16', 'Guru Gobind Singh IP University', 'Vegas Mall', 'Kakrola Village', 'NSUT Campus'],
    landmark: 'Near Dwarka Sector 14 Metro Station'
  },
  {
    id: 'ps-dwarka-south',
    name: 'Police Station Dwarka South',
    hindiName: 'थाना द्वारका साउथ',
    district: 'Dwarka Police District',
    address: 'Sector 9, Dwarka, New Delhi',
    pincode: '110075',
    phone: '011-28041100',
    shoPhone: '011-28041101 / 8750871223',
    pcrNumber: '112',
    jurisdictionAreas: ['Dwarka Sector 6, 7, 8, 9, 10', 'Dwarka District Court', 'WelcomeHotel Dwarka', 'Manipal Hospital Sector 6'],
    landmark: 'Adjacent to Dwarka District Courts'
  },

  // --- ROHINI POLICE DISTRICT ---
  {
    id: 'ps-south-rohini',
    name: 'Police Station South Rohini',
    hindiName: 'थाना साउथ रोहिणी',
    district: 'Rohini Police District',
    address: 'Sector 3, Rohini, Delhi',
    pincode: '110085',
    phone: '011-27511100',
    shoPhone: '011-27511101 / 8750871321',
    pcrNumber: '112',
    jurisdictionAreas: ['Rohini Sector 1, 2, 3, 7, 8', 'Swarn Jayanti Park (Japanese Park)', 'Jaipur Golden Hospital', 'Rithala Metro Area'],
    landmark: 'Near Jaipur Golden Hospital'
  },
  {
    id: 'ps-north-rohini',
    name: 'Police Station North Rohini',
    hindiName: 'थाना नॉर्थ रोहिणी',
    district: 'Rohini Police District',
    address: 'Sector 7/8 Dividing Road, Rohini, Delhi',
    pincode: '110085',
    phone: '011-27521100',
    shoPhone: '011-27521101 / 8750871322',
    pcrNumber: '112',
    jurisdictionAreas: ['Rohini Sector 9, 11, 13, 14', 'DC Chowk Shopping Hub', 'Bhagwan Mahavir Hospital', 'Prashant Vihar Border'],
    landmark: 'Near DC Chowk Sector 9'
  },

  // --- SPECIAL INVESTIGATIVE UNITS & SPECIAL ACT AGENCIES ---
  {
    id: 'ps-cyber-crime-cell',
    name: 'Cyber Crime Police Station (IFSO Special Cell)',
    hindiName: 'साइबर क्राइम थाना (आई.एफ.एस.ओ.)',
    district: 'Special Units & Crime Branch',
    address: 'Special Cell Complex, Sector 17, Dwarka, New Delhi',
    pincode: '110078',
    phone: '011-20892220',
    shoPhone: 'Cyber Crime Helpline: 1930 / 011-20892221',
    pcrNumber: '1930',
    jurisdictionAreas: ['All Delhi NCT Cyber Frauds', 'Online Banking Scams', 'Phishing & Crypto Crimes', 'Social Media Harassment', 'Financial Ransomware'],
    landmark: 'Near Dwarka Sector 14 Metro Station',
    isSpecialUnit: true
  },
  {
    id: 'ps-special-cell-lodhi',
    name: 'Special Cell Police Station Lodhi Colony',
    hindiName: 'स्पेशल सेल थाना लोधी कॉलोनी',
    district: 'Special Units & Crime Branch',
    address: 'Lodhi Road Complex, Near CGO Complex, New Delhi',
    pincode: '110003',
    phone: '011-24361100',
    shoPhone: '011-24361101 / 8750870100',
    pcrNumber: '112',
    jurisdictionAreas: ['Anti-Terrorism Investigations', 'Organized Gangsters Syndicate', 'Extortion Rings', 'National Security Counter-Intelligence'],
    landmark: 'Opp. CGO Complex Gate 1',
    isSpecialUnit: true
  },
  {
    id: 'ps-crime-branch-sunlight',
    name: 'Crime Branch Police Station (Sunlight Colony)',
    hindiName: 'क्राइम ब्रांच थाना (सनलाइट कॉलोनी)',
    district: 'Special Units & Crime Branch',
    address: 'Sunlight Colony Complex, Ring Road Ashram, New Delhi',
    pincode: '110014',
    phone: '011-26341100',
    shoPhone: '011-26341101 / 8750870200',
    pcrNumber: '112',
    jurisdictionAreas: ['Inter-State Armed Robbery', 'Homicide Investigations', 'Narcotics Trafficking', 'Major Financial Frauds'],
    landmark: 'Near Ashram Flyover Ring Road',
    isSpecialUnit: true
  },
  {
    id: 'ps-spuwac-women-cell',
    name: 'Special Police Unit for Women & Children (SPUWAC)',
    hindiName: 'महिला एवं बाल विकास विशेष पुलिस इकाई',
    district: 'Special Units & Crime Branch',
    address: 'Nanakpura, Near Moti Bagh, New Delhi',
    pincode: '110021',
    phone: '011-24121234',
    shoPhone: 'Women Helpline: 1091 / 011-24121235',
    pcrNumber: '1091',
    jurisdictionAreas: ['Women Safety & Protection', 'Matrimonial & Dowry Disputes', 'Child Welfare & POCSO Cell', 'Senior Citizen Helpline 14567'],
    landmark: 'Near Moti Bagh Flyover',
    isSpecialUnit: true
  }
];

export function getMatchingPoliceStations(districtFilter?: string, queryStr?: string): PoliceStationItem[] {
  const cleanDistrict = districtFilter && districtFilter !== 'All Districts' ? districtFilter.toLowerCase() : '';
  const cleanQuery = queryStr ? queryStr.trim().toLowerCase() : '';

  return MOCK_DELHI_POLICE_STATIONS.filter(ps => {
    const matchesDistrict = !cleanDistrict || ps.district.toLowerCase() === cleanDistrict;
    if (!cleanQuery) return matchesDistrict;

    const matchesName = ps.name.toLowerCase().includes(cleanQuery);
    const matchesHindi = ps.hindiName.toLowerCase().includes(cleanQuery);
    const matchesAddress = ps.address.toLowerCase().includes(cleanQuery);
    const matchesPincode = ps.pincode.includes(cleanQuery);
    const matchesAreas = ps.jurisdictionAreas.some(area => area.toLowerCase().includes(cleanQuery));
    const matchesDistrictName = ps.district.toLowerCase().includes(cleanQuery);

    return matchesDistrict && (matchesName || matchesHindi || matchesAddress || matchesPincode || matchesAreas || matchesDistrictName);
  });
}
