export interface MlaItem {
  constituencyNo: number;
  constituencyName: string;
  hindiName: string;
  mlaName: string;
  party: string;
  lokSabhaConstituency: string;
  officeAddress: string;
  phone: string;
  email: string;
  pincodes: string[];
  keyAreas: string[];
  state: string;
  stateId: string;
}

export interface MpItem {
  id: string;
  constituencyName: string;
  hindiName: string;
  mpName: string;
  party: string;
  officeAddress: string;
  phone: string;
  email: string;
  areasCovered: string[];
  pincodes: string[];
  vidhanSabhaCount: number;
  state: string;
  stateId: string;
}

export interface StateAssemblyPortalInfo {
  stateName: string;
  stateId: string;
  assemblyName: string;
  assemblyPortalUrl: string;
  mlaListPdfUrl: string;
  totalMlaSeats: number;
  totalMpSeats: number;
  rulingParty: string;
  oppositionLeader: string;
}

export const STATE_ASSEMBLY_INFO: Record<string, StateAssemblyPortalInfo> = {
  'delhi': {
    stateName: 'Delhi (NCT)',
    stateId: 'delhi',
    assemblyName: 'Delhi Legislative Assembly (दिल्ली विधानसभा)',
    assemblyPortalUrl: 'https://delhiassembly.delhi.gov.in',
    mlaListPdfUrl: 'https://delhiassembly.delhi.gov.in/sites/default/files/2025-04/list_of_member.pdf',
    totalMlaSeats: 70,
    totalMpSeats: 7,
    rulingParty: 'AAP',
    oppositionLeader: 'Leader of Opposition'
  },
  'maharashtra': {
    stateName: 'Maharashtra',
    stateId: 'maharashtra',
    assemblyName: 'Maharashtra Legislative Assembly (महाराष्ट्र विधानसभा)',
    assemblyPortalUrl: 'http://mls.org.in',
    mlaListPdfUrl: 'http://mls.org.in/members.aspx',
    totalMlaSeats: 288,
    totalMpSeats: 48,
    rulingParty: 'Mahayuti (BJP/SHS/NCP)',
    oppositionLeader: 'Maha Vikas Aghadi'
  },
  'punjab': {
    stateName: 'Punjab',
    stateId: 'punjab',
    assemblyName: 'Punjab Vidhan Sabha (ਪੰਜਾਬ ਵਿਧਾਨ ਸਭਾ)',
    assemblyPortalUrl: 'https://punjabassembly.nic.in',
    mlaListPdfUrl: 'https://punjabassembly.nic.in/members',
    totalMlaSeats: 117,
    totalMpSeats: 13,
    rulingParty: 'AAP',
    oppositionLeader: 'INC / SAD'
  },
  'tamil-nadu': {
    stateName: 'Tamil Nadu',
    stateId: 'tamil-nadu',
    assemblyName: 'Tamil Nadu Legislative Assembly (தமிழ்நாடு சட்டமன்றம்)',
    assemblyPortalUrl: 'https://assembly.tn.gov.in',
    mlaListPdfUrl: 'https://assembly.tn.gov.in/members',
    totalMlaSeats: 234,
    totalMpSeats: 39,
    rulingParty: 'DMK',
    oppositionLeader: 'AIADMK'
  },
  'karnataka': {
    stateName: 'Karnataka',
    stateId: 'karnataka',
    assemblyName: 'Karnataka Legislative Assembly (ಕರ್ನಾಟಕ ವಿಧಾನ ಸಭೆ)',
    assemblyPortalUrl: 'https://kla.kar.nic.in',
    mlaListPdfUrl: 'https://kla.kar.nic.in/assembly/members.htm',
    totalMlaSeats: 224,
    totalMpSeats: 28,
    rulingParty: 'INC',
    oppositionLeader: 'BJP / JD(S)'
  },
  'uttar-pradesh': {
    stateName: 'Uttar Pradesh',
    stateId: 'uttar-pradesh',
    assemblyName: 'Uttar Pradesh Vidhan Sabha (उत्तर प्रदेश विधानसभा)',
    assemblyPortalUrl: 'https://uplegisassembly.gov.in',
    mlaListPdfUrl: 'https://uplegisassembly.gov.in/members',
    totalMlaSeats: 403,
    totalMpSeats: 80,
    rulingParty: 'BJP',
    oppositionLeader: 'SP'
  },
  'haryana': {
    stateName: 'Haryana',
    stateId: 'haryana',
    assemblyName: 'Haryana Vidhan Sabha (हरियाणा विधानसभा)',
    assemblyPortalUrl: 'https://haryanaassembly.gov.in',
    mlaListPdfUrl: 'https://haryanaassembly.gov.in/members',
    totalMlaSeats: 90,
    totalMpSeats: 10,
    rulingParty: 'BJP',
    oppositionLeader: 'INC'
  },
  'gujarat': {
    stateName: 'Gujarat',
    stateId: 'gujarat',
    assemblyName: 'Gujarat Legislative Assembly (ગુજરાત વિધાનસભા)',
    assemblyPortalUrl: 'https://gujaratassembly.gov.in',
    mlaListPdfUrl: 'https://gujaratassembly.gov.in/members',
    totalMlaSeats: 182,
    totalMpSeats: 26,
    rulingParty: 'BJP',
    oppositionLeader: 'INC / AAP'
  },
  'west-bengal': {
    stateName: 'West Bengal',
    stateId: 'west-bengal',
    assemblyName: 'West Bengal Legislative Assembly (পশ্চিমবঙ্গ বিধানসভা)',
    assemblyPortalUrl: 'https://wbassembly.gov.in',
    mlaListPdfUrl: 'https://wbassembly.gov.in/members',
    totalMlaSeats: 294,
    totalMpSeats: 42,
    rulingParty: 'AITC',
    oppositionLeader: 'BJP'
  },
  'bihar': {
    stateName: 'Bihar',
    stateId: 'bihar',
    assemblyName: 'Bihar Vidhan Sabha (बिहार विधानसभा)',
    assemblyPortalUrl: 'https://vidhansabha.bih.nic.in',
    mlaListPdfUrl: 'https://vidhansabha.bih.nic.in/members',
    totalMlaSeats: 243,
    totalMpSeats: 40,
    rulingParty: 'NDA (JD(U)/BJP)',
    oppositionLeader: 'RJD'
  },
  'rajasthan': {
    stateName: 'Rajasthan',
    stateId: 'rajasthan',
    assemblyName: 'Rajasthan Legislative Assembly (राजस्थान विधानसभा)',
    assemblyPortalUrl: 'https://rajassembly.nic.in',
    mlaListPdfUrl: 'https://rajassembly.nic.in/members',
    totalMlaSeats: 200,
    totalMpSeats: 25,
    rulingParty: 'BJP',
    oppositionLeader: 'INC'
  }
};

export const STATE_MLAS_DATA: Record<string, MlaItem[]> = {
  'delhi': [
    {
      constituencyNo: 40,
      constituencyName: 'New Delhi',
      hindiName: 'नई दिल्ली',
      mlaName: 'Arvind Kejriwal / Incumbent Representative',
      party: 'AAP',
      lokSabhaConstituency: 'New Delhi',
      officeAddress: 'Ground Floor, 23 Canning Lane, Kasturba Gandhi Marg, New Delhi',
      phone: '011-23392020 / 9818000001',
      email: 'mla.newdelhi@delhi.gov.in',
      pincodes: ['110001', '110003', '110011'],
      keyAreas: ['Connaught Place', 'Bengali Market', 'Gol Market', 'Gole Post Office', 'Barakhamba Road', 'Janpath'],
      state: 'Delhi',
      stateId: 'delhi'
    },
    {
      constituencyNo: 42,
      constituencyName: 'Kasturba Nagar',
      hindiName: 'कस्तूरबा नगर',
      mlaName: 'Madan Lal',
      party: 'AAP',
      lokSabhaConstituency: 'New Delhi',
      officeAddress: '15/2, INA Market Complex, New Delhi - 110023',
      phone: '011-24612345 / 9811122334',
      email: 'mla.kasturbanagar@delhi.gov.in',
      pincodes: ['110023', '110003', '110049'],
      keyAreas: ['South Extension Part 1', 'Defence Colony', 'Kotla Mubarakpur', 'INA Colony', 'Aliganj'],
      state: 'Delhi',
      stateId: 'delhi'
    },
    {
      constituencyNo: 13,
      constituencyName: 'Rohini',
      hindiName: 'रोहिणी',
      mlaName: 'Vijender Gupta',
      party: 'BJP',
      lokSabhaConstituency: 'North West Delhi',
      officeAddress: 'A-3/27, Sector 7, Rohini, Delhi - 110085',
      phone: '011-27045678 / 9810012345',
      email: 'mla.rohini@delhi.gov.in',
      pincodes: ['110085', '110089'],
      keyAreas: ['Sector 7 Rohini', 'Sector 8 Rohini', 'Sector 9 Rohini', 'Sector 14 Rohini', 'Naharpur'],
      state: 'Delhi',
      stateId: 'delhi'
    },
    {
      constituencyNo: 33,
      constituencyName: 'Dwarka',
      hindiName: 'द्वारका',
      mlaName: 'Vinay Mishra',
      party: 'AAP',
      lokSabhaConstituency: 'West Delhi',
      officeAddress: 'Plot 4, Sector 12, Main Market, Dwarka, New Delhi - 110078',
      phone: '011-28034567 / 9810198765',
      email: 'mla.dwarka@delhi.gov.in',
      pincodes: ['110075', '110078'],
      keyAreas: ['Dwarka Sector 6', 'Dwarka Sector 10', 'Dwarka Sector 12', 'Dwarka Sector 14', 'Kakrola'],
      state: 'Delhi',
      stateId: 'delhi'
    },
    {
      constituencyNo: 58,
      constituencyName: 'Laxmi Nagar',
      hindiName: 'लक्ष्मी नगर',
      mlaName: 'Abhay Verma',
      party: 'BJP',
      lokSabhaConstituency: 'East Delhi',
      officeAddress: 'H-14, Main Vikas Marg, Shakarpur, Laxmi Nagar, Delhi - 110092',
      phone: '011-22445566 / 9811223344',
      email: 'mla.laxminagar@delhi.gov.in',
      pincodes: ['110092'],
      keyAreas: ['Laxmi Nagar Commercial Market', 'Shakarpur', 'Guru Angad Nagar', 'Ramesh Park', 'Bank Enclave'],
      state: 'Delhi',
      stateId: 'delhi'
    },
    {
      constituencyNo: 20,
      constituencyName: 'Chandni Chowk',
      hindiName: 'चांदनी चौक',
      mlaName: 'Parlad Singh Sawhney',
      party: 'AAP',
      lokSabhaConstituency: 'Chandni Chowk',
      officeAddress: 'Shop 112, Nai Sarak, Chandni Chowk, Delhi - 110006',
      phone: '011-23278901 / 9810055443',
      email: 'mla.chandnichowk@delhi.gov.in',
      pincodes: ['110006'],
      keyAreas: ['Fatehpuri', 'Katra Neel', 'Dariba Kalan', 'Kinari Bazar', 'Town Hall', 'Red Fort Area'],
      state: 'Delhi',
      stateId: 'delhi'
    }
  ],
  'maharashtra': [
    {
      constituencyNo: 182,
      constituencyName: 'Worli',
      hindiName: 'वरळी (मुंबई)',
      mlaName: 'Aaditya Thackeray',
      party: 'SS (UBT)',
      lokSabhaConstituency: 'Mumbai South',
      officeAddress: 'Worli Seaface Road, Near Worli Dairy, Mumbai - 400018',
      phone: '022-24921234 / 9820011223',
      email: 'mla.worli@maharashtra.gov.in',
      pincodes: ['400018', '400030', '400025'],
      keyAreas: ['Worli Sea Face', 'Prabhadevi', 'Lower Parel East', 'Century Bazaar', 'Bhimnagar'],
      state: 'Maharashtra',
      stateId: 'maharashtra'
    },
    {
      constituencyNo: 185,
      constituencyName: 'Malabar Hill',
      hindiName: 'मलबार हिल (मुंबई)',
      mlaName: 'Mangal Prabhat Lodha',
      party: 'BJP',
      lokSabhaConstituency: 'Mumbai South',
      officeAddress: '14, Walkeshwar Road, Teen Batti, Malabar Hill, Mumbai - 400006',
      phone: '022-23678900 / 9821034567',
      email: 'mla.malabarhill@maharashtra.gov.in',
      pincodes: ['400006', '400026', '400004'],
      keyAreas: ['Malabar Hill', 'Walkeshwar', 'Breach Candy', 'Girgaon Chowpatty', 'Tardeo', 'Kemps Corner'],
      state: 'Maharashtra',
      stateId: 'maharashtra'
    },
    {
      constituencyNo: 177,
      constituencyName: 'Bandra West',
      hindiName: 'वांद्रे पश्चिम (मुंबई)',
      mlaName: 'Ashish Shelar',
      party: 'BJP',
      lokSabhaConstituency: 'Mumbai North Central',
      officeAddress: 'Shop 4, Hill Road, Bandra West, Mumbai - 400050',
      phone: '022-26401122 / 9820123456',
      email: 'mla.bandrawest@maharashtra.gov.in',
      pincodes: ['400050', '400052'],
      keyAreas: ['Bandra Bandstand', 'Carter Road', 'Pali Hill', 'Khar West', 'Linking Road', 'Turner Road'],
      state: 'Maharashtra',
      stateId: 'maharashtra'
    },
    {
      constituencyNo: 167,
      constituencyName: 'Vile Parle',
      hindiName: 'विलेपार्ले (मुंबई)',
      mlaName: 'Parag Alavani',
      party: 'BJP',
      lokSabhaConstituency: 'Mumbai North Central',
      officeAddress: 'Dixit Road, Near Vile Parle East Railway Station, Mumbai - 400057',
      phone: '022-26123456',
      email: 'mla.vileparle@maharashtra.gov.in',
      pincodes: ['400057', '400099'],
      keyAreas: ['Vile Parle East', 'Vile Parle West', 'Nehru Road', 'Domestic Airport Road', 'Hanuman Nagar'],
      state: 'Maharashtra',
      stateId: 'maharashtra'
    },
    {
      constituencyNo: 214,
      constituencyName: 'Pune Cantonment',
      hindiName: 'पुणे कँटोन्मेंट',
      mlaName: 'Sunil Kamble',
      party: 'BJP',
      lokSabhaConstituency: 'Pune',
      officeAddress: 'Camp Main Street, Near MG Road, Pune - 411001',
      phone: '020-26131234',
      email: 'mla.punecantonment@maharashtra.gov.in',
      pincodes: ['411001', '411002'],
      keyAreas: ['MG Road Camp', 'East Street', 'Ghorpadi', 'Wanowrie', 'Lashkar'],
      state: 'Maharashtra',
      stateId: 'maharashtra'
    }
  ],
  'punjab': [
    {
      constituencyNo: 18,
      constituencyName: 'Amritsar East',
      hindiName: 'ਅੰਮ੍ਰਿਤਸਰ ਪੂਰਬੀ (अमृतसर ईस्ट)',
      mlaName: 'Jeevan Jyot Kaur',
      party: 'AAP',
      lokSabhaConstituency: 'Amritsar',
      officeAddress: 'Circular Road, Near Golden Temple Complex, Amritsar - 143001',
      phone: '0183-2551234 / 9876543210',
      email: 'mla.amritsareast@punjab.gov.in',
      pincodes: ['143001', '143006'],
      keyAreas: ['Golden Temple Area', 'Sultanwind', 'Tarn Taran Road', 'Chowk Hussainpura', 'Ranjit Avenue Extn'],
      state: 'Punjab',
      stateId: 'punjab'
    },
    {
      constituencyNo: 64,
      constituencyName: 'Ludhiana Central',
      hindiName: 'ਲੁਧਿਆਣਾ ਕੇਂਦਰੀ (लुधियाना सेंट्रल)',
      mlaName: 'Ashok Prashar Pappi',
      party: 'AAP',
      lokSabhaConstituency: 'Ludhiana',
      officeAddress: 'Clock Tower Market Complex, GT Road, Ludhiana - 141008',
      phone: '0161-2441234',
      email: 'mla.ludhianacentral@punjab.gov.in',
      pincodes: ['141008', '141001'],
      keyAreas: ['Clock Tower', 'Chaura Bazar', 'Mata Rani Chowk', 'Civil Lines Ludhiana', 'Daresi Ground'],
      state: 'Punjab',
      stateId: 'punjab'
    },
    {
      constituencyNo: 53,
      constituencyName: 'SAS Nagar (Mohali)',
      hindiName: 'ਐਸ.ਏ.ਐਸ. ਨਗਰ ਮੋਹਾਲੀ (मोहाली)',
      mlaName: 'Kulwant Singh',
      party: 'AAP',
      lokSabhaConstituency: 'Anandpur Sahib',
      officeAddress: 'SCO 23, Phase 3B2 Market, SAS Nagar Mohali - 160059',
      phone: '0172-2271234 / 9814012345',
      email: 'mla.mohali@punjab.gov.in',
      pincodes: ['160055', '160059', '160062', '160071'],
      keyAreas: ['Phase 3B2', 'Phase 7 Mohali', 'Sector 70', 'Sector 71', 'Kharar Road', 'Aero City Mohali'],
      state: 'Punjab',
      stateId: 'punjab'
    },
    {
      constituencyNo: 115,
      constituencyName: 'Patiala Urban',
      hindiName: 'ਪਟਿਆਲਾ ਸ਼ਹਿਰੀ (पटियाला अर्बन)',
      mlaName: 'Ajit Pal Singh Kohli',
      party: 'AAP',
      lokSabhaConstituency: 'Patiala',
      officeAddress: 'Mall Road, Near Baradari Gardens, Patiala - 147001',
      phone: '0175-2211234',
      email: 'mla.patialaurban@punjab.gov.in',
      pincodes: ['147001', '147002'],
      keyAreas: ['Mall Road Patiala', 'Baradari', 'Leela Bhawan', 'Tripuri', 'Model Town Patiala'],
      state: 'Punjab',
      stateId: 'punjab'
    }
  ],
  'tamil-nadu': [
    {
      constituencyNo: 13,
      constituencyName: 'Kolathur',
      hindiName: 'கொளத்தூர் (कोलाथुर - चेन्नई)',
      mlaName: 'M. K. Stalin (Chief Minister)',
      party: 'DMK',
      lokSabhaConstituency: 'Chennai North',
      officeAddress: '7/1, Paper Mills Road, Peravallur, Kolathur, Chennai - 600082',
      phone: '044-25501234 / 044-25672345',
      email: 'cmcell@tn.gov.in',
      pincodes: ['600082', '600099'],
      keyAreas: ['Kolathur', 'Perambur', 'Peravallur', 'Villivakkam East', 'GKM Colony'],
      state: 'Tamil Nadu',
      stateId: 'tamil-nadu'
    },
    {
      constituencyNo: 19,
      constituencyName: 'Chepauk-Thiruvallikeni',
      hindiName: 'சேப்பாக்கம்-திருவல்லிக்கேணி (चेपॉक)',
      mlaName: 'Udhayanidhi Stalin',
      party: 'DMK',
      lokSabhaConstituency: 'Chennai Central',
      officeAddress: 'Pycrofts Road, Triplicane, Chennai - 600005',
      phone: '044-28441234',
      email: 'mla.chepauk@tn.gov.in',
      pincodes: ['600002', '600005'],
      keyAreas: ['Triplicane', 'Chepauk Stadium', 'Marina Beach Front', 'Chintadripet', 'Mount Road'],
      state: 'Tamil Nadu',
      stateId: 'tamil-nadu'
    },
    {
      constituencyNo: 118,
      constituencyName: 'Coimbatore South',
      hindiName: 'கோயம்புத்தூர் தெற்கு (कोयंबटूर साउथ)',
      mlaName: 'Vanathi Srinivasan',
      party: 'BJP',
      lokSabhaConstituency: 'Coimbatore',
      officeAddress: 'Oppanakara Street, Town Hall, Coimbatore - 641001',
      phone: '0422-2301234',
      email: 'mla.coimbatoresouth@tn.gov.in',
      pincodes: ['641001', '641018'],
      keyAreas: ['Town Hall Coimbatore', 'Gandhipuram', 'RS Puram', 'Ukkadam', 'Race Course'],
      state: 'Tamil Nadu',
      stateId: 'tamil-nadu'
    }
  ],
  'karnataka': [
    {
      constituencyNo: 173,
      constituencyName: 'Jayanagar',
      hindiName: 'ಜಯನಗರ (जयनगर बेंगलुरु)',
      mlaName: 'C. K. Ramamurthy',
      party: 'BJP',
      lokSabhaConstituency: 'Bangalore South',
      officeAddress: '4th Block, 11th Main Road, Jayanagar, Bengaluru - 560011',
      phone: '080-22441234',
      email: 'mla.jayanagar@karnataka.gov.in',
      pincodes: ['560011', '560041'],
      keyAreas: ['Jayanagar 4th Block', 'Jayanagar 9th Block', 'Tilak Nagar', 'South End Circle'],
      state: 'Karnataka',
      stateId: 'karnataka'
    },
    {
      constituencyNo: 160,
      constituencyName: 'Sarvagnanagar',
      hindiName: 'ಸರ್ವಜ್ಞನಗರ (सर्वज्ञनगर बेंगलुरु)',
      mlaName: 'K. J. George',
      party: 'INC',
      lokSabhaConstituency: 'Bangalore Central',
      officeAddress: 'MM Road, Frazer Town / Pulikeshi Nagar, Bengaluru - 560005',
      phone: '080-25481234',
      email: 'mla.sarvagnanagar@karnataka.gov.in',
      pincodes: ['560005', '560043', '560084'],
      keyAreas: ['Kalyan Nagar', 'HRBR Layout', 'Frazer Town', 'Kammanahalli', 'Banaswadi'],
      state: 'Karnataka',
      stateId: 'karnataka'
    }
  ],
  'uttar-pradesh': [
    {
      constituencyNo: 174,
      constituencyName: 'Lucknow Central',
      hindiName: 'लखनऊ मध्य (सेंट्रल)',
      mlaName: 'Ravi Das Mehrotra',
      party: 'SP',
      lokSabhaConstituency: 'Lucknow',
      officeAddress: 'Hazratganj Main Market, Near Capitol Cinema, Lucknow - 226001',
      phone: '0522-2231234',
      email: 'mla.lucknowcentral@up.gov.in',
      pincodes: ['226001', '226003'],
      keyAreas: ['Hazratganj', 'Aminabad', 'Kaiserbagh', 'Hussainabad', 'Chowk Lucknow'],
      state: 'Uttar Pradesh',
      stateId: 'uttar-pradesh'
    },
    {
      constituencyNo: 61,
      constituencyName: 'Noida (Gautam Buddha Nagar)',
      hindiName: 'नोएडा (गौतम बुद्ध नगर)',
      mlaName: 'Pankaj Singh',
      party: 'BJP',
      lokSabhaConstituency: 'Gautam Buddha Nagar',
      officeAddress: 'Block C, Sector 26, Noida, Uttar Pradesh - 201301',
      phone: '0120-2551234 / 9818001234',
      email: 'mla.noida@up.gov.in',
      pincodes: ['201301', '201303', '201304', '201307'],
      keyAreas: ['Sector 18 Noida', 'Sector 62', 'Sector 50', 'Sector 137 Expressway', 'Atta Market'],
      state: 'Uttar Pradesh',
      stateId: 'uttar-pradesh'
    }
  ],
  'haryana': [
    {
      constituencyNo: 77,
      constituencyName: 'Gurugram',
      hindiName: 'गुरुग्राम (गुड़गांव)',
      mlaName: 'Mukesh Sharma',
      party: 'BJP',
      lokSabhaConstituency: 'Gurgaon',
      officeAddress: 'Civil Lines, Near Mor Chowk, Gurugram, Haryana - 122001',
      phone: '0124-2321234',
      email: 'mla.gurugram@haryana.gov.in',
      pincodes: ['122001', '122002', '122018'],
      keyAreas: ['Civil Lines Gurgaon', 'Sadar Bazar', 'Sector 14 Gurgaon', 'MG Road Gurgaon', 'DLF Phase 1-4'],
      state: 'Haryana',
      stateId: 'haryana'
    },
    {
      constituencyNo: 76,
      constituencyName: 'Badshahpur',
      hindiName: 'बादशाहपुर (गुरुग्राम)',
      mlaName: 'Rao Narbir Singh',
      party: 'BJP',
      lokSabhaConstituency: 'Gurgaon',
      officeAddress: 'Sohna Road, Badshahpur, Gurugram - 122101',
      phone: '0124-2251234',
      email: 'mla.badshahpur@haryana.gov.in',
      pincodes: ['122018', '122101'],
      keyAreas: ['Golf Course Extension', 'Sohna Road', 'Sector 48-70', 'Vatika City', 'Southern Peripheral Road'],
      state: 'Haryana',
      stateId: 'haryana'
    }
  ]
};

export const STATE_MPS_DATA: Record<string, MpItem[]> = {
  'delhi': [
    {
      id: 'del-mp-chandni-chowk',
      constituencyName: 'Chandni Chowk',
      hindiName: 'चांदनी चौक (लोकसभा)',
      mpName: 'Praveen Khandelwal',
      party: 'BJP',
      officeAddress: '1775, Dariba Kalan, Chandni Chowk, Delhi - 110006',
      phone: '011-23912345',
      email: 'praveenkhandelwal.mp@sansad.nic.in',
      areasCovered: ['Chandni Chowk', 'Sadar Bazar', 'Model Town', 'Tri Nagar', 'Wazirpur', 'Shalimar Bagh'],
      pincodes: ['110006', '110007', '110009', '110034', '110052', '110088'],
      vidhanSabhaCount: 10,
      state: 'Delhi',
      stateId: 'delhi'
    },
    {
      id: 'del-mp-new-delhi',
      constituencyName: 'New Delhi',
      hindiName: 'नई दिल्ली (लोकसभा)',
      mpName: 'Bansuri Swaraj',
      party: 'BJP',
      officeAddress: '14, Lodhi Estate, New Delhi - 110003',
      phone: '011-24651234',
      email: 'bansuriswaraj.mp@sansad.nic.in',
      areasCovered: ['New Delhi', 'Karol Bagh', 'Patel Nagar', 'Moti Nagar', 'Delhi Cantt', 'Kasturba Nagar', 'Malviya Nagar', 'RK Puram', 'Greater Kailash'],
      pincodes: ['110001', '110003', '110005', '110008', '110010', '110017', '110022', '110048'],
      vidhanSabhaCount: 10,
      state: 'Delhi',
      stateId: 'delhi'
    },
    {
      id: 'del-mp-north-east',
      constituencyName: 'North East Delhi',
      hindiName: 'उत्तर पूर्वी दिल्ली (लोकसभा)',
      mpName: 'Manoj Tiwari',
      party: 'BJP',
      officeAddress: 'House 159, Yamuna Vihar, Delhi - 110053',
      phone: '011-22812233',
      email: 'manojtiwari.mp@sansad.nic.in',
      areasCovered: ['Yamuna Vihar', 'Burari', 'Timarpur', 'Karawal Nagar', 'Seelampur', 'Mustafabad', 'Gonda', 'Rohtas Nagar'],
      pincodes: ['110053', '110054', '110084', '110094'],
      vidhanSabhaCount: 10,
      state: 'Delhi',
      stateId: 'delhi'
    }
  ],
  'maharashtra': [
    {
      id: 'mh-mp-mumbai-south',
      constituencyName: 'Mumbai South',
      hindiName: 'दक्षिण मुंबई (लोकसभा)',
      mpName: 'Arvind Sawant',
      party: 'SS (UBT)',
      officeAddress: '102, Shivalaya Building, Madame Cama Road, Nariman Point, Mumbai - 400021',
      phone: '022-22841234 / 9820056789',
      email: 'arvindsawant.mp@sansad.nic.in',
      areasCovered: ['Worli', 'Malabar Hill', 'Colaba', 'Byculla', 'Mumbadevi', 'Sewree'],
      pincodes: ['400001', '400005', '400006', '400018', '400021', '400032'],
      vidhanSabhaCount: 6,
      state: 'Maharashtra',
      stateId: 'maharashtra'
    },
    {
      id: 'mh-mp-mumbai-north',
      constituencyName: 'Mumbai North',
      hindiName: 'उत्तर मुंबई (लोकसभा)',
      mpName: 'Piyush Goyal (Union Minister)',
      party: 'BJP',
      officeAddress: 'S.V. Road, Near Borivali West Railway Station, Mumbai - 400092',
      phone: '022-28911234',
      email: 'piyushgoyal.mp@sansad.nic.in',
      areasCovered: ['Borivali', 'Dahisar', 'Kandivali East', 'Kandivali West', 'Magathane', 'Malad West'],
      pincodes: ['400064', '400067', '400068', '400092', '400097'],
      vidhanSabhaCount: 6,
      state: 'Maharashtra',
      stateId: 'maharashtra'
    },
    {
      id: 'mh-mp-pune',
      constituencyName: 'Pune',
      hindiName: 'पुणे (लोकसभा)',
      mpName: 'Murlidhar Mohol (Union Minister)',
      party: 'BJP',
      officeAddress: 'JM Road, Shivajinagar, Pune, Maharashtra - 411005',
      phone: '020-25531234',
      email: 'murlidharmohol.mp@sansad.nic.in',
      areasCovered: ['Pune Cantonment', 'Kasba Peth', 'Kothrud', 'Parvati', 'Shivajinagar', 'Vadgaon Sheri'],
      pincodes: ['411001', '411004', '411005', '411038', '411014'],
      vidhanSabhaCount: 6,
      state: 'Maharashtra',
      stateId: 'maharashtra'
    }
  ],
  'punjab': [
    {
      id: 'pb-mp-amritsar',
      constituencyName: 'Amritsar',
      hindiName: 'ਅੰਮ੍ਰਿਤਸਰ (अमृतसर लोकसभा)',
      mpName: 'Gurjeet Singh Aujla',
      party: 'INC',
      officeAddress: 'Court Road, Near Kacheri Chowk, Amritsar - 143001',
      phone: '0183-2221234',
      email: 'gurjeetaujla.mp@sansad.nic.in',
      areasCovered: ['Amritsar East', 'Amritsar West', 'Amritsar North', 'Amritsar Central', 'Amritsar South', 'Attari', 'Ajnala', 'Majitha'],
      pincodes: ['143001', '143002', '143006', '143102'],
      vidhanSabhaCount: 9,
      state: 'Punjab',
      stateId: 'punjab'
    },
    {
      id: 'pb-mp-ludhiana',
      constituencyName: 'Ludhiana',
      hindiName: 'ਲੁਧਿਆਣਾ (लुधियाना लोकसभा)',
      mpName: 'Amrinder Singh Raja Warring',
      party: 'INC',
      officeAddress: 'Ferozepur Road, Near Aggar Nagar, Ludhiana - 141012',
      phone: '0161-2401234',
      email: 'rajawarring.mp@sansad.nic.in',
      areasCovered: ['Ludhiana East', 'Ludhiana South', 'Ludhiana Atam Nagar', 'Ludhiana Central', 'Ludhiana West', 'Ludhiana North'],
      pincodes: ['141001', '141008', '141012'],
      vidhanSabhaCount: 9,
      state: 'Punjab',
      stateId: 'punjab'
    }
  ],
  'tamil-nadu': [
    {
      id: 'tn-mp-chennai-central',
      constituencyName: 'Chennai Central',
      hindiName: 'மத்திய சென்னை (चेन्नई सेंट्रल लोकसभा)',
      mpName: 'Dayanidhi Maran',
      party: 'DMK',
      officeAddress: 'Murugappa Road, Santhome / Boat Club Road, Chennai - 600028',
      phone: '044-24981234',
      email: 'dayanidhimaran.mp@sansad.nic.in',
      areasCovered: ['Villivakkam', 'Egmore', 'Harbour', 'Chepauk-Thiruvallikeni', 'Thousand Lights', 'Anna Nagar'],
      pincodes: ['600002', '600005', '600006', '600008', '600040', '600049'],
      vidhanSabhaCount: 6,
      state: 'Tamil Nadu',
      stateId: 'tamil-nadu'
    }
  ],
  'karnataka': [
    {
      id: 'ka-mp-bangalore-south',
      constituencyName: 'Bangalore South',
      hindiName: 'ಬೆಂಗಳೂರು ದಕ್ಷಿಣ (बेंगलुरु साउथ लोकसभा)',
      mpName: 'Tejasvi Surya',
      party: 'BJP',
      officeAddress: '15th Cross, 100 Feet Ring Road, JP Nagar 2nd Phase, Bengaluru - 560078',
      phone: '080-26591234',
      email: 'tejasvisurya.mp@sansad.nic.in',
      areasCovered: ['Jayanagar', 'Padmanabanagar', 'BTM Layout', 'Basavanagudi', 'Chikkapet', 'Bommanahalli', 'Govindraj Nagar'],
      pincodes: ['560004', '560011', '560028', '560041', '560068', '560078'],
      vidhanSabhaCount: 8,
      state: 'Karnataka',
      stateId: 'karnataka'
    }
  ],
  'uttar-pradesh': [
    {
      id: 'up-mp-lucknow',
      constituencyName: 'Lucknow',
      hindiName: 'लखनऊ (लोकसभा)',
      mpName: 'Rajnath Singh (Defence Minister)',
      party: 'BJP',
      officeAddress: '1, A.P. Sen Road, Charbagh, Lucknow, Uttar Pradesh - 226001',
      phone: '0522-2631234 / 011-23012345',
      email: 'rajnathsingh.mp@sansad.nic.in',
      areasCovered: ['Lucknow West', 'Lucknow North', 'Lucknow East', 'Lucknow Central', 'Lucknow Cantt'],
      pincodes: ['226001', '226003', '226005', '226010', '226024'],
      vidhanSabhaCount: 5,
      state: 'Uttar Pradesh',
      stateId: 'uttar-pradesh'
    },
    {
      id: 'up-mp-gautam-buddha-nagar',
      constituencyName: 'Gautam Buddha Nagar (Noida)',
      hindiName: 'गौतम बुद्ध नगर (नोएडा लोकसभा)',
      mpName: 'Dr. Mahesh Sharma',
      party: 'BJP',
      officeAddress: 'Kailash Hospital Campus, Sector 27, Noida - 201301',
      phone: '0120-2441234',
      email: 'maheshsharma.mp@sansad.nic.in',
      areasCovered: ['Noida', 'Dadri', 'Jewar', 'Khurja', 'Sikandrabad'],
      pincodes: ['201301', '201304', '201308', '201310'],
      vidhanSabhaCount: 5,
      state: 'Uttar Pradesh',
      stateId: 'uttar-pradesh'
    }
  ],
  'haryana': [
    {
      id: 'hr-mp-gurgaon',
      constituencyName: 'Gurgaon',
      hindiName: 'गुड़गांव (लोकसभा)',
      mpName: 'Rao Inderjit Singh (Union Minister)',
      party: 'BJP',
      officeAddress: 'Rampura House, Delhi-Jaipur Highway, Rewari / Gurugram Office',
      phone: '0124-2325678',
      email: 'raoinderjit.mp@sansad.nic.in',
      areasCovered: ['Gurugram', 'Badshahpur', 'Pataudi', 'Sohna', 'Nuh', 'Ferozepur Jhirka', 'Punhana', 'Bawal', 'Rewari'],
      pincodes: ['122001', '122002', '122018', '122101', '122103'],
      vidhanSabhaCount: 9,
      state: 'Haryana',
      stateId: 'haryana'
    }
  ]
};

const STATE_ALIAS_MAP: Record<string, string> = {
  'delhi': 'delhi',
  'dl': 'delhi',
  'punjab': 'punjab',
  'pb': 'punjab',
  'maharashtra': 'maharashtra',
  'mh': 'maharashtra',
  'mumbai': 'maharashtra',
  'tamil-nadu': 'tamil-nadu',
  'tn': 'tamil-nadu',
  'chennai': 'tamil-nadu',
  'karnataka': 'karnataka',
  'ka': 'karnataka',
  'bengaluru': 'karnataka',
  'uttar-pradesh': 'uttar-pradesh',
  'up': 'uttar-pradesh',
  'haryana': 'haryana',
  'hr': 'haryana',
  'gujarat': 'gujarat',
  'gj': 'gujarat',
  'west-bengal': 'west-bengal',
  'wb': 'west-bengal',
  'kolkata': 'west-bengal',
  'bihar': 'bihar',
  'br': 'bihar',
  'rajasthan': 'rajasthan',
  'rj': 'rajasthan',
  'national': 'delhi'
};

export const getMlaAndMpByState = (
  stateId: string = 'delhi',
  searchQuery: string = '',
  activeTab: 'ALL' | 'MLA' | 'MP' = 'ALL'
): { mlas: MlaItem[]; mps: MpItem[]; assemblyInfo: StateAssemblyPortalInfo } => {
  const normKey = STATE_ALIAS_MAP[stateId.toLowerCase()] || 'delhi';
  const assemblyInfo = STATE_ASSEMBLY_INFO[normKey] || STATE_ASSEMBLY_INFO['delhi'];
  const stateMlas = STATE_MLAS_DATA[normKey] || STATE_MLAS_DATA['delhi'];
  const stateMps = STATE_MPS_DATA[normKey] || STATE_MPS_DATA['delhi'];

  const q = searchQuery.toLowerCase().trim();

  let filteredMlas: MlaItem[] = [];
  if (activeTab === 'ALL' || activeTab === 'MLA') {
    filteredMlas = stateMlas.filter(m => {
      if (!q) return true;
      return (
        m.constituencyName.toLowerCase().includes(q) ||
        m.hindiName.includes(q) ||
        m.mlaName.toLowerCase().includes(q) ||
        m.party.toLowerCase().includes(q) ||
        m.lokSabhaConstituency.toLowerCase().includes(q) ||
        m.keyAreas.some(a => a.toLowerCase().includes(q)) ||
        m.pincodes.some(p => p.includes(q)) ||
        m.constituencyNo.toString() === q
      );
    });
  }

  let filteredMps: MpItem[] = [];
  if (activeTab === 'ALL' || activeTab === 'MP') {
    filteredMps = stateMps.filter(m => {
      if (!q) return true;
      return (
        m.constituencyName.toLowerCase().includes(q) ||
        m.hindiName.includes(q) ||
        m.mpName.toLowerCase().includes(q) ||
        m.party.toLowerCase().includes(q) ||
        m.areasCovered.some(a => a.toLowerCase().includes(q)) ||
        m.pincodes.some(p => p.includes(q))
      );
    });
  }

  return {
    mlas: filteredMlas,
    mps: filteredMps,
    assemblyInfo
  };
};

export const DELHI_VIDHAN_SABHA_MLAS = STATE_MLAS_DATA['delhi'];
export const DELHI_LOK_SABHA_MPS = STATE_MPS_DATA['delhi'];

export const searchMlaAndMp = (query: string, tab: 'ALL' | 'MLA' | 'MP') => {
  return getMlaAndMpByState('delhi', query, tab);
};
