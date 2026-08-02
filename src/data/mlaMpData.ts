export interface MlaItem {
  constituencyNo: number;
  constituencyName: string;
  hindiName: string;
  mlaName: string;
  party: 'AAP' | 'BJP' | 'INC' | 'Other';
  lokSabhaConstituency: string;
  officeAddress: string;
  phone: string;
  email: string;
  pincodes: string[];
  keyAreas: string[];
}

export interface MpItem {
  id: string;
  constituencyName: string;
  hindiName: string;
  mpName: string;
  party: 'BJP' | 'AAP' | 'INC' | 'Other';
  officeAddress: string;
  phone: string;
  email: string;
  areasCovered: string[];
  pincodes: string[];
  vidhanSabhaCount: number;
}

export const DELHI_LOK_SABHA_MPS: MpItem[] = [
  {
    id: 'mp-chandni-chowk',
    constituencyName: 'Chandni Chowk',
    hindiName: 'चांदनी चौक (लोकसभा)',
    mpName: 'Praveen Khandelwal',
    party: 'BJP',
    officeAddress: '1775, Kucha Lattu Shah, Dariba Kalan, Chandni Chowk, Delhi - 110006',
    phone: '011-23912345 / 9811100000',
    email: 'praveenkhandelwal.mp@sansad.nic.in',
    areasCovered: ['Chandni Chowk', 'Ballimaran', 'Matia Mahal', 'Sadar Bazar', 'Model Town', 'Shakur Basti', 'Tri Nagar', 'Wazirpur', 'Shalimar Bagh', 'Saraswati Vihar'],
    pincodes: ['110006', '110007', '110009', '110034', '110035', '110052', '110088'],
    vidhanSabhaCount: 10
  },
  {
    id: 'mp-north-east-delhi',
    constituencyName: 'North East Delhi',
    hindiName: 'उत्तर पूर्वी दिल्ली (लोकसभा)',
    mpName: 'Manoj Tiwari',
    party: 'BJP',
    officeAddress: 'House No. 159, Gali No. 3, Yamuna Vihar, Delhi - 110053',
    phone: '011-22812233 / 011-23782244',
    email: 'manojtiwari.mp@sansad.nic.in',
    areasCovered: ['Yamuna Vihar', 'Burari', 'Timarpur', 'Karawal Nagar', 'Seelampur', 'Mustafabad', 'Gonda', 'Rohtas Nagar', 'Babarpur', 'Gokhalepur'],
    pincodes: ['110053', '110054', '110084', '110094', '110032'],
    vidhanSabhaCount: 10
  },
  {
    id: 'mp-east-delhi',
    constituencyName: 'East Delhi',
    hindiName: 'पूर्वी दिल्ली (लोकसभा)',
    mpName: 'Harsh Malhotra',
    party: 'BJP',
    officeAddress: 'C-57, Preet Vihar, Main Vikas Marg, Delhi - 110092',
    phone: '011-22443322 / 9810011223',
    email: 'harshmalhotra.mp@sansad.nic.in',
    areasCovered: ['Preet Vihar', 'Laxmi Nagar', 'Vishwas Nagar', 'Krishna Nagar', 'Gandhi Nagar', 'Shahdara', 'Kondli', 'Patparganj', 'Trilokpuri', 'Okhla'],
    pincodes: ['110091', '110092', '110095', '110031', '110025'],
    vidhanSabhaCount: 10
  },
  {
    id: 'mp-new-delhi',
    constituencyName: 'New Delhi',
    hindiName: 'नई दिल्ली (लोकसभा)',
    mpName: 'Bansuri Swaraj',
    party: 'BJP',
    officeAddress: '14, Malcha Marg, Chanakyapuri, New Delhi - 110021',
    phone: '011-23381122 / 011-24112233',
    email: 'bansuriswaraj.mp@sansad.nic.in',
    areasCovered: ['Connaught Place', 'Chanakyapuri', 'RK Puram', 'Greater Kailash', 'Kasturba Nagar', 'Malviya Nagar', 'Delhi Cantt', 'Karol Bagh', 'Patel Nagar'],
    pincodes: ['110001', '110021', '110022', '110048', '110008', '110005', '110010'],
    vidhanSabhaCount: 10
  },
  {
    id: 'mp-north-west-delhi',
    constituencyName: 'North West Delhi (SC)',
    hindiName: 'उत्तर पश्चिम दिल्ली (लोकसभा - आरक्षित)',
    mpName: 'Yogender Chandolia',
    party: 'BJP',
    officeAddress: 'Pocket 8, Sector 7, Rohini, New Delhi - 110085',
    phone: '011-27041122 / 9811223344',
    email: 'yogenderchandolia.mp@sansad.nic.in',
    areasCovered: ['Rohini', 'Rithala', 'Bawana', 'Mundka', 'Kirari', 'Sultanpur Majra', 'Nangloi Jat', 'Mangolpuri', 'Narela', 'Badli'],
    pincodes: ['110085', '110039', '110041', '110083', '110086', '110042'],
    vidhanSabhaCount: 10
  },
  {
    id: 'mp-west-delhi',
    constituencyName: 'West Delhi',
    hindiName: 'पश्चिम दिल्ली (लोकसभा)',
    mpName: 'Kamaljeet Sehrawat',
    party: 'BJP',
    officeAddress: 'Plot No. 12, Sector 12A, Dwarka, New Delhi - 110078',
    phone: '011-25501133 / 9818811223',
    email: 'kamaljeetsehrawat.mp@sansad.nic.in',
    areasCovered: ['Dwarka', 'Uttam Nagar', 'Janakpuri', 'Vikaspuri', 'Tilak Nagar', 'Rajouri Garden', 'Hari Nagar', 'Madipur', 'Najafgarh'],
    pincodes: ['110075', '110078', '110058', '110018', '110027', '110064', '110043'],
    vidhanSabhaCount: 10
  },
  {
    id: 'mp-south-delhi',
    constituencyName: 'South Delhi',
    hindiName: 'दक्षिण दिल्ली (लोकसभा)',
    mpName: 'Ramvir Singh Bidhuri',
    party: 'BJP',
    officeAddress: 'Bidhuri Farm, Ali Village, Badarpur Road, New Delhi - 110044',
    phone: '011-29951144 / 9810112233',
    email: 'ramvirsinghs.mp@sansad.nic.in',
    areasCovered: ['Badarpur', 'Tughlakabad', 'Sangam Vihar', 'Ambedkar Nagar', 'Deoli', 'Chhatarpur', 'Bijwasan', 'Kalkaji', 'Mehrauli'],
    pincodes: ['110044', '110019', '110062', '110074', '110030', '110061'],
    vidhanSabhaCount: 10
  }
];

export const DELHI_VIDHAN_SABHA_MLAS: MlaItem[] = [
  {
    constituencyNo: 1,
    constituencyName: 'Narela',
    hindiName: 'नरेला (01)',
    mlaName: 'Sharad Kumar Chauhan',
    party: 'AAP',
    lokSabhaConstituency: 'North West Delhi (SC)',
    officeAddress: 'Main Anaj Mandi Road, Narela, Delhi - 110040',
    phone: '011-27281100 / 9810234567',
    email: 'sharadchauhan.mla@delhi.gov.in',
    pincodes: ['110040', '110036'],
    keyAreas: ['Narela Mandi', 'Singhu Border', 'Bhorgarh', 'Lampur', 'Sanoth', 'Holambi Kalan']
  },
  {
    constituencyNo: 2,
    constituencyName: 'Burari',
    hindiName: 'बुराड़ी (02)',
    mlaName: 'Sanjeev Jha',
    party: 'AAP',
    lokSabhaConstituency: 'North East Delhi',
    officeAddress: 'A-Block, Main Market, Sant Nagar, Burari, Delhi - 110084',
    phone: '011-27618822 / 9871122334',
    email: 'sanjeevjha.mla@delhi.gov.in',
    pincodes: ['110084'],
    keyAreas: ['Sant Nagar Burari', 'Jharoda', 'Kamal Pur', 'Mukundpur', 'Kaushik Enclave', 'Nathupura']
  },
  {
    constituencyNo: 3,
    constituencyName: 'Timarpur',
    hindiName: 'तिमारपुर (03)',
    mlaName: 'Dilip Pandey',
    party: 'AAP',
    lokSabhaConstituency: 'North East Delhi',
    officeAddress: '22, Mall Road, Near Timarpur Police Station, Delhi - 110054',
    phone: '011-23819900 / 9811098765',
    email: 'dilippandey.mla@delhi.gov.in',
    pincodes: ['110054', '110007'],
    keyAreas: ['Timarpur', 'Civil Lines', 'Dhaka Village', 'Mukherjee Nagar', 'Radio Colony', 'Outram Lines']
  },
  {
    constituencyNo: 4,
    constituencyName: 'Adarsh Nagar',
    hindiName: 'आदर्श नगर (04)',
    mlaName: 'Pawan Kumar Sharma',
    party: 'AAP',
    lokSabhaConstituency: 'Chandni Chowk',
    officeAddress: 'B-Block, Main Market, Adarsh Nagar, Delhi - 110033',
    phone: '011-27671122 / 9810123456',
    email: 'pawansharma.mla@delhi.gov.in',
    pincodes: ['110033'],
    keyAreas: ['Adarsh Nagar', 'Jahangirpuri', 'Majlis Park', 'Rameshwar Nagar', 'Bharola']
  },
  {
    constituencyNo: 5,
    constituencyName: 'Badli',
    hindiName: 'बादली (05)',
    mlaName: 'Ajesh Yadav',
    party: 'AAP',
    lokSabhaConstituency: 'North West Delhi (SC)',
    officeAddress: 'Badli Village Main Road, Near Badli Railway Station, Delhi - 110042',
    phone: '011-27851144 / 9811122334',
    email: 'ajeshyadav.mla@delhi.gov.in',
    pincodes: ['110042', '110084'],
    keyAreas: ['Badli Village', 'Samaipur', 'Yadav Nagar', 'Siraspur', 'Rohini Sector 18']
  },
  {
    constituencyNo: 6,
    constituencyName: 'Rithala',
    hindiName: 'रिठाला (06)',
    mlaName: 'Mohinder Goyal',
    party: 'AAP',
    lokSabhaConstituency: 'North West Delhi (SC)',
    officeAddress: 'Sector 5, Main Market, Rohini, Delhi - 110085',
    phone: '011-27051188 / 9818822334',
    email: 'mohindergoyal.mla@delhi.gov.in',
    pincodes: ['110085'],
    keyAreas: ['Rithala Village', 'Rohini Sectors 5, 6, 11, 22, 24', 'Vijay Vihar', 'Budh Vihar']
  },
  {
    constituencyNo: 7,
    constituencyName: 'Bawana (SC)',
    hindiName: 'बवाना (07 - आरक्षित)',
    mlaName: 'Jai Bhagwankar',
    party: 'AAP',
    lokSabhaConstituency: 'North West Delhi (SC)',
    officeAddress: 'Bawana Industrial Area, Main Chowk, Delhi - 110039',
    phone: '011-27751122 / 9811987654',
    email: 'jaibhagwan.mla@delhi.gov.in',
    pincodes: ['110039'],
    keyAreas: ['Bawana Village', 'Bawana Industrial Area', 'Pooth Khurd', 'Auchandi Border', 'Kanjhawala']
  },
  {
    constituencyNo: 8,
    constituencyName: 'Mundka',
    hindiName: 'मुंडका (08)',
    mlaName: 'Dharampal Lakra',
    party: 'AAP',
    lokSabhaConstituency: 'North West Delhi (SC)',
    officeAddress: 'Main Rohtak Road, Mundka Metro Station Pillar 512, Delhi - 110041',
    phone: '011-28341100 / 9810099887',
    email: 'dharampallakra.mla@delhi.gov.in',
    pincodes: ['110041'],
    keyAreas: ['Mundka', 'Tikri Kalan', 'Nangloi West', 'Gheora', 'Bakkarwala', 'Rani Khera']
  },
  {
    constituencyNo: 9,
    constituencyName: 'Kirari',
    hindiName: 'किराड़ी (09)',
    mlaName: 'Ritu Raj Govind',
    party: 'AAP',
    lokSabhaConstituency: 'North West Delhi (SC)',
    officeAddress: 'Karan Vihar Part 2, Main Mubarakpur Road, Kirari, Delhi - 110086',
    phone: '011-25471133 / 9873322110',
    email: 'rituraj.mla@delhi.gov.in',
    pincodes: ['110086'],
    keyAreas: ['Kirari Suleman Nagar', 'Karan Vihar', 'Prem Nagar', 'Mubarakpur Dabas', 'Agar Nagar']
  },
  {
    constituencyNo: 10,
    constituencyName: 'Sultanpur Majra (SC)',
    hindiName: 'सुल्तानपुर माजरा (10 - आरक्षित)',
    mlaName: 'Mukesh Kumar Ahlawat',
    party: 'AAP',
    lokSabhaConstituency: 'North West Delhi (SC)',
    officeAddress: 'Block C, Sultanpuri Main Bus Terminal, Delhi - 110086',
    phone: '011-25961122 / 9810122334',
    email: 'mukeshahlawat.mla@delhi.gov.in',
    pincodes: ['110086'],
    keyAreas: ['Sultanpuri Blocks A to H', 'Pooth Kalan', 'Majra Village', 'Jalebi Chowk']
  },
  {
    constituencyNo: 11,
    constituencyName: 'Nangloi Jat',
    hindiName: 'नांगलोई जाट (11)',
    mlaName: 'Raghuvinder Shokeen',
    party: 'AAP',
    lokSabhaConstituency: 'North West Delhi (SC)',
    officeAddress: 'Main Najafgarh Road, Nangloi, Delhi - 110041',
    phone: '011-25941100 / 9811011223',
    email: 'rshokeen.mla@delhi.gov.in',
    pincodes: ['110041'],
    keyAreas: ['Nangloi Metro Market', 'Kavita Colony', 'Veer Bazar Road', 'Niharika Enclave']
  },
  {
    constituencyNo: 12,
    constituencyName: 'Mangol Puri (SC)',
    hindiName: 'मंगोल पुरी (12 - आरक्षित)',
    mlaName: 'Rakhi Birla',
    party: 'AAP',
    lokSabhaConstituency: 'North West Delhi (SC)',
    officeAddress: 'Block Q, Mangolpuri Main Market, Delhi - 110083',
    phone: '011-27911100 / 9871100998',
    email: 'rakhibirla.mla@delhi.gov.in',
    pincodes: ['110083'],
    keyAreas: ['Mangolpuri Blocks A to Y', 'Sanjay Gandhi Hospital Colony', 'Avantika Market']
  },
  {
    constituencyNo: 13,
    constituencyName: 'Rohini',
    hindiName: 'रोहिणी (13)',
    mlaName: 'Vijender Gupta',
    party: 'BJP',
    lokSabhaConstituency: 'North West Delhi (SC)',
    officeAddress: 'D-14/142, Sector 7, Rohini, Delhi - 110085',
    phone: '011-27045566 / 9810011990',
    email: 'vijendergupta.mla@delhi.gov.in',
    pincodes: ['110085'],
    keyAreas: ['Rohini Sector 7, 8, 9, 13, 14, 15', 'DC Chowk Market', 'Prashant Vihar']
  },
  {
    constituencyNo: 14,
    constituencyName: 'Shalimar Bagh',
    hindiName: 'शालीमार बाग (14)',
    mlaName: 'Bandana Kumari',
    party: 'AAP',
    lokSabhaConstituency: 'Chandni Chowk',
    officeAddress: 'BH Block, Main Club Road, Shalimar Bagh, Delhi - 110088',
    phone: '011-27481122 / 9810233445',
    email: 'bandanakumari.mla@delhi.gov.in',
    pincodes: ['110088'],
    keyAreas: ['Shalimar Bagh', 'Hyderpur', 'Max Hospital Area', 'Prabhu Dayal Public School Road']
  },
  {
    constituencyNo: 15,
    constituencyName: 'Shakur Basti',
    hindiName: 'शकूर बस्ती (15)',
    mlaName: 'Satyendar Jain',
    party: 'AAP',
    lokSabhaConstituency: 'Chandni Chowk',
    officeAddress: '15, Raja Park, Shakur Basti, Delhi - 110034',
    phone: '011-27021100 / 9810022334',
    email: 'satyendarjain.mla@delhi.gov.in',
    pincodes: ['110034'],
    keyAreas: ['Shakur Basti', 'Saraswati Vihar', 'Rani Bagh', 'Rishi Nagar', 'Britannia Chowk']
  },
  {
    constituencyNo: 16,
    constituencyName: 'Tri Nagar',
    hindiName: 'त्रि नगर (16)',
    mlaName: 'Preeti Tomar',
    party: 'AAP',
    lokSabhaConstituency: 'Chandni Chowk',
    officeAddress: 'Main Rampura Road, Tri Nagar, Delhi - 110035',
    phone: '011-27381122 / 9871133445',
    email: 'preetitomar.mla@delhi.gov.in',
    pincodes: ['110035'],
    keyAreas: ['Tri Nagar', 'Rampura', 'Onkar Nagar', 'Dev Nagar Tri Nagar', 'Shanti Nagar']
  },
  {
    constituencyNo: 17,
    constituencyName: 'Wazirpur',
    hindiName: 'वजीरपुर (17)',
    mlaName: 'Rajesh Gupta',
    party: 'AAP',
    lokSabhaConstituency: 'Chandni Chowk',
    officeAddress: 'Wazirpur Industrial Area Main Road, Delhi - 110052',
    phone: '011-27371100 / 9810144556',
    email: 'rajeshgupta.mla@delhi.gov.in',
    pincodes: ['110052'],
    keyAreas: ['Wazirpur Industrial Area', 'Ashok Vihar Phase 1, 2, 3', 'Nimri Colony', 'Satyawati College']
  },
  {
    constituencyNo: 18,
    constituencyName: 'Model Town',
    hindiName: 'मॉडल टाउन (18)',
    mlaName: 'Akhilesh Pati Tripathi',
    party: 'AAP',
    lokSabhaConstituency: 'Chandni Chowk',
    officeAddress: 'Model Town 2, Main Ring Road, Delhi - 110009',
    phone: '011-27461100 / 9811055667',
    email: 'aptripathi.mla@delhi.gov.in',
    pincodes: ['110009'],
    keyAreas: ['Model Town 1, 2, 3', 'Derawal Nagar', 'Gujranwala Town', 'Kalyan Vihar', 'Rana Pratap Bagh']
  },
  {
    constituencyNo: 19,
    constituencyName: 'Sadar Bazar',
    hindiName: 'सदर बाजार (19)',
    mlaName: 'Som Dutt',
    party: 'AAP',
    lokSabhaConstituency: 'Chandni Chowk',
    officeAddress: 'Main Sadar Thana Road, Sadar Bazar, Delhi - 110006',
    phone: '011-23511122 / 9810066778',
    email: 'somdutt.mla@delhi.gov.in',
    pincodes: ['110006'],
    keyAreas: ['Sadar Bazar Market', 'Nabi Karim', 'Bara Hindu Rao', 'Qutab Road', 'Kishan Ganj']
  },
  {
    constituencyNo: 20,
    constituencyName: 'Chandni Chowk',
    hindiName: 'चांदनी चौक (20)',
    mlaName: 'Parlar Parlad Singh Sawhney',
    party: 'AAP',
    lokSabhaConstituency: 'Chandni Chowk',
    officeAddress: 'Near Town Hall, Main Chandni Chowk Road, Delhi - 110006',
    phone: '011-23861100 / 9811177889',
    email: 'parladsawhney.mla@delhi.gov.in',
    pincodes: ['110006'],
    keyAreas: ['Chandni Chowk Market', 'Fatehpuri', 'Kinari Bazar', 'Naya Bazar', 'Red Fort Area']
  },
  {
    constituencyNo: 21,
    constituencyName: 'Matia Mahal',
    hindiName: 'मटिया महल (21)',
    mlaName: 'Shoaib Iqbal',
    party: 'AAP',
    lokSabhaConstituency: 'Chandni Chowk',
    officeAddress: 'Chitli Qabar, Main Matia Mahal Market, Old Delhi - 110006',
    phone: '011-23271188 / 9810088990',
    email: 'shoeabiqbal.mla@delhi.gov.in',
    pincodes: ['110006'],
    keyAreas: ['Matia Mahal', 'Chitli Qabar', 'Jama Masjid Area', 'Turkman Gate', 'Asaf Ali Road']
  },
  {
    constituencyNo: 22,
    constituencyName: 'Ballimaran',
    hindiName: 'बल्लीमारान (22)',
    mlaName: 'Imran Hussain',
    party: 'AAP',
    lokSabhaConstituency: 'Chandni Chowk',
    officeAddress: 'Main Ballimaran Road, Near Ghalib Haveli, Delhi - 110006',
    phone: '011-23281100 / 9811099001',
    email: 'imranhussain.mla@delhi.gov.in',
    pincodes: ['110006'],
    keyAreas: ['Ballimaran', 'Qasim Jan Street', 'Baradari', 'Lal Kuan', 'Chawri Bazar']
  },
  {
    constituencyNo: 23,
    constituencyName: 'Karol Bagh (SC)',
    hindiName: 'करोल बाग (23 - आरक्षित)',
    mlaName: 'Vishesh Ravi',
    party: 'AAP',
    lokSabhaConstituency: 'New Delhi',
    officeAddress: 'Gaffar Market Main Road, Karol Bagh, New Delhi - 110005',
    phone: '011-25751122 / 9810012399',
    email: 'visheshravi.mla@delhi.gov.in',
    pincodes: ['110005'],
    keyAreas: ['Gaffar Market', 'Ajmal Khan Road', 'Dev Nagar Karol Bagh', 'Regar Pura', 'Bapa Nagar']
  },
  {
    constituencyNo: 24,
    constituencyName: 'Patel Nagar (SC)',
    hindiName: 'पटेल नगर (24 - आरक्षित)',
    mlaName: 'Raaj Kumar Anand',
    party: 'BJP',
    lokSabhaConstituency: 'New Delhi',
    officeAddress: 'West Patel Nagar Main Market, New Delhi - 110008',
    phone: '011-25881100 / 9811123488',
    email: 'rkaranand.mla@delhi.gov.in',
    pincodes: ['110008'],
    keyAreas: ['Patel Nagar East, West, South', 'Ranjit Nagar', 'Baljit Nagar', 'Prem Nagar Patel Nagar']
  },
  {
    constituencyNo: 25,
    constituencyName: 'Moti Nagar',
    hindiName: 'मोती नगर (25)',
    mlaName: 'Shiv Charan Goel',
    party: 'AAP',
    lokSabhaConstituency: 'West Delhi',
    officeAddress: 'Main Najafgarh Road, Moti Nagar Metro Pillar 320, Delhi - 110015',
    phone: '011-25101122 / 9810034577',
    email: 'scgoel.mla@delhi.gov.in',
    pincodes: ['110015'],
    keyAreas: ['Moti Nagar', 'Karampura', 'Kirti Nagar Industrial Area', 'Fun Cinema Mall Road']
  },
  {
    constituencyNo: 26,
    constituencyName: 'Madipur (SC)',
    hindiName: 'मादीपुर (26 - आरक्षित)',
    mlaName: 'Girish Soni',
    party: 'AAP',
    lokSabhaConstituency: 'West Delhi',
    officeAddress: 'Block A, Madipur JJ Colony, Main Rohtak Road, Delhi - 110063',
    phone: '011-25221100 / 9871145688',
    email: 'girishsoni.mla@delhi.gov.in',
    pincodes: ['110063'],
    keyAreas: ['Madipur Colony', 'Paschim Puri', 'Punjabi Bagh West', 'Jwala Puri']
  },
  {
    constituencyNo: 27,
    constituencyName: 'Rajouri Garden',
    hindiName: 'राजौरी गार्डन (27)',
    mlaName: 'Dhanwati Chandela',
    party: 'AAP',
    lokSabhaConstituency: 'West Delhi',
    officeAddress: 'Main Ring Road, Opposite Rajouri Garden Metro Station, Delhi - 110027',
    phone: '011-25411122 / 9810156799',
    email: 'dhanwatic.mla@delhi.gov.in',
    pincodes: ['110027'],
    keyAreas: ['Rajouri Garden Market', 'Tagore Garden', 'Subhash Nagar', 'Kukreja Hospital Road']
  },
  {
    constituencyNo: 28,
    constituencyName: 'Hari Nagar',
    hindiName: 'हरि नगर (28)',
    mlaName: 'Raj Kumari Dhillon',
    party: 'AAP',
    lokSabhaConstituency: 'West Delhi',
    officeAddress: 'Main Jail Road, Hari Nagar, New Delhi - 110064',
    phone: '011-25121100 / 9811067800',
    email: 'rkdhillon.mla@delhi.gov.in',
    pincodes: ['110064'],
    keyAreas: ['Hari Nagar Clock Tower', 'DDU Hospital Colony', 'Fateh Nagar', 'Tihar Jail Area']
  },
  {
    constituencyNo: 29,
    constituencyName: 'Tilak Nagar',
    hindiName: 'तिलक नगर (29)',
    mlaName: 'Jarnail Singh',
    party: 'AAP',
    lokSabhaConstituency: 'West Delhi',
    officeAddress: 'Main Najafgarh Road, Tilak Nagar Market, Delhi - 110018',
    phone: '011-25991122 / 9810078911',
    email: 'jarnailsingh.mla@delhi.gov.in',
    pincodes: ['110018'],
    keyAreas: ['Tilak Nagar Market', 'Ganesh Nagar', 'Krishna Park', 'Sant Garh', 'Chaukhandi']
  },
  {
    constituencyNo: 30,
    constituencyName: 'Janakpuri',
    hindiName: 'जनकपुरी (30)',
    mlaName: 'Rajesh Rishi',
    party: 'AAP',
    lokSabhaConstituency: 'West Delhi',
    officeAddress: 'C-Block Main Market, Janakpuri, New Delhi - 110058',
    phone: '011-25551100 / 9811189022',
    email: 'rajeshrishi.mla@delhi.gov.in',
    pincodes: ['110058'],
    keyAreas: ['Janakpuri Blocks A to C', 'Possangipur', 'Chhoti Chopal', 'District Centre Janakpuri']
  },
  {
    constituencyNo: 31,
    constituencyName: 'Vikaspuri',
    hindiName: 'विकासपुरी (31)',
    mlaName: 'Mahinder Yadav',
    party: 'AAP',
    lokSabhaConstituency: 'West Delhi',
    officeAddress: 'PVR Road, Vikaspuri Complex, New Delhi - 110018',
    phone: '011-25611122 / 9810090133',
    email: 'mahinderyadav.mla@delhi.gov.in',
    pincodes: ['110018'],
    keyAreas: ['Vikaspuri Blocks A to H', 'Hastsal Village', 'Uttam Nagar East', 'Bodella']
  },
  {
    constituencyNo: 32,
    constituencyName: 'Uttam Nagar',
    hindiName: 'उत्तम नगर (32)',
    mlaName: 'Naresh Balyan',
    party: 'AAP',
    lokSabhaConstituency: 'West Delhi',
    officeAddress: 'Main Najafgarh Road, Uttam Nagar Chowk, Delhi - 110059',
    phone: '011-25331100 / 9871101244',
    email: 'nareshbalyan.mla@delhi.gov.in',
    pincodes: ['110059'],
    keyAreas: ['Uttam Nagar West', 'Arya Samaj Road', 'Bindapur', 'Matiala Extension', 'Vipras Enclave']
  },
  {
    constituencyNo: 33,
    constituencyName: 'Dwarka',
    hindiName: 'द्वारका (33)',
    mlaName: 'Vinay Mishra',
    party: 'AAP',
    lokSabhaConstituency: 'West Delhi',
    officeAddress: 'Sector 12A, Main DDA Market, Dwarka, New Delhi - 110078',
    phone: '011-28081122 / 9810112355',
    email: 'vinaymishra.mla@delhi.gov.in',
    pincodes: ['110075', '110078'],
    keyAreas: ['Dwarka Sectors 1 to 19', 'Kakrola', 'Bharat Vihar', 'Sector 10 DDA Market']
  },
  {
    constituencyNo: 34,
    constituencyName: 'Matiala',
    hindiName: 'मटियाला (34)',
    mlaName: 'Gulab Singh',
    party: 'AAP',
    lokSabhaConstituency: 'West Delhi',
    officeAddress: 'Main Matiala Village Road, Near Dwarka Sector 3, Delhi - 110059',
    phone: '011-25351100 / 9811023466',
    email: 'gulabsingh.mla@delhi.gov.in',
    pincodes: ['110059', '110078'],
    keyAreas: ['Matiala Village', 'Nawada', 'Dwarka Sectors 2, 3, 4', 'Sita Puri', 'Palam Extension']
  },
  {
    constituencyNo: 35,
    constituencyName: 'Najafgarh',
    hindiName: 'नजफगढ़ (35)',
    mlaName: 'Kailash Gahlot',
    party: 'BJP',
    lokSabhaConstituency: 'West Delhi',
    officeAddress: 'Main Najafgarh Bus Stand Road, Near Police Station, Delhi - 110043',
    phone: '011-25011122 / 9810034577',
    email: 'kailashgahlot.mla@delhi.gov.in',
    pincodes: ['110043'],
    keyAreas: ['Najafgarh Market', 'Mitraon', 'Jharoda Kalan', 'Kair', 'Dichaon Kalan', 'Chhawla']
  },
  {
    constituencyNo: 36,
    constituencyName: 'Bijwasan',
    hindiName: 'बिजवासन (36)',
    mlaName: 'Bhupinder Singh Joon',
    party: 'AAP',
    lokSabhaConstituency: 'South Delhi',
    officeAddress: 'Main Bijwasan Road, Near Railway Crossing, New Delhi - 110061',
    phone: '011-28061100 / 9871145688',
    email: 'bsjoon.mla@delhi.gov.in',
    pincodes: ['110061'],
    keyAreas: ['Bijwasan Village', 'Kapoashera', 'Samalkha', 'Rajokri', 'Bamnoli', 'Dharmpura']
  },
  {
    constituencyNo: 37,
    constituencyName: 'Palam',
    hindiName: 'पालम (37)',
    mlaName: 'Bhavna Gaur',
    party: 'AAP',
    lokSabhaConstituency: 'South West Delhi',
    officeAddress: 'Main Palam Flyover Road, Palam Colony, New Delhi - 110045',
    phone: '011-25091122 / 9810156799',
    email: 'bhavnagaur.mla@delhi.gov.in',
    pincodes: ['110045'],
    keyAreas: ['Palam Colony', 'Raj Nagar 1 & 2', 'Sadh Nagar', 'Manglapuri', 'Mahavir Enclave']
  },
  {
    constituencyNo: 38,
    constituencyName: 'Delhi Cantt',
    hindiName: 'दिल्ली कैंट (38)',
    mlaName: 'Virender Singh Kadian',
    party: 'AAP',
    lokSabhaConstituency: 'New Delhi',
    officeAddress: 'Sadar Bazar Main Road, Delhi Cantt, New Delhi - 110010',
    phone: '011-25691100 / 9811067800',
    email: 'vskadian.mla@delhi.gov.in',
    pincodes: ['110010'],
    keyAreas: ['Delhi Cantt Sadar Bazar', 'Gopinath Bazar', 'Dhaula Kuan Army Area', 'Kirby Place']
  },
  {
    constituencyNo: 39,
    constituencyName: 'Rajinder Nagar',
    hindiName: 'राजेंद्र नगर (39)',
    mlaName: 'Durgesh Pathak',
    party: 'AAP',
    lokSabhaConstituency: 'New Delhi',
    officeAddress: 'Double Storey Main Market, New Rajinder Nagar, New Delhi - 110060',
    phone: '011-28741122 / 9810078911',
    email: 'durgeshpathak.mla@delhi.gov.in',
    pincodes: ['110060'],
    keyAreas: ['Old Rajinder Nagar Coaching Hub', 'New Rajinder Nagar', 'Pandav Nagar West', 'Inderpuri']
  },
  {
    constituencyNo: 40,
    constituencyName: 'New Delhi',
    hindiName: 'नई दिल्ली (40)',
    mlaName: 'Arvind Kejriwal',
    party: 'AAP',
    lokSabhaConstituency: 'New Delhi',
    officeAddress: 'BK Dutt Colony, Lodhi Road, New Delhi - 110003',
    phone: '011-24621100 / 011-23392020',
    email: 'arvindkejriwal.mla@delhi.gov.in',
    pincodes: ['110001', '110003'],
    keyAreas: ['Connaught Place', 'Janpath', 'Lodhi Colony', 'Sarojini Nagar', 'Gole Market', 'Valmiki Colony']
  },
  {
    constituencyNo: 41,
    constituencyName: 'Jangpura',
    hindiName: 'जंगपुरा (41)',
    mlaName: 'Praveen Kumar',
    party: 'AAP',
    lokSabhaConstituency: 'East Delhi',
    officeAddress: 'Main Mathura Road, Jangpura Extension, New Delhi - 110014',
    phone: '011-24371122 / 9811189022',
    email: 'praveenkumar.mla@delhi.gov.in',
    pincodes: ['110014', '110013'],
    keyAreas: ['Jangpura A, B, C', 'Bhogal Market', 'Nizamuddin West & East', 'Pant Nagar']
  },
  {
    constituencyNo: 42,
    constituencyName: 'Kasturba Nagar',
    hindiName: 'कस्तूरबा नगर (42)',
    mlaName: 'Madan Lal',
    party: 'AAP',
    lokSabhaConstituency: 'New Delhi',
    officeAddress: 'Main INA Market Road, Near Dilli Haat, New Delhi - 110023',
    phone: '011-24601100 / 9810090133',
    email: 'madanlal.mla@delhi.gov.in',
    pincodes: ['110023', '110003'],
    keyAreas: ['Kasturba Nagar', 'INA Market', 'Kidwai Nagar', 'Sewa Nagar', 'Lodhi Complex']
  },
  {
    constituencyNo: 43,
    constituencyName: 'Malviya Nagar',
    hindiName: 'मालवीय नगर (43)',
    mlaName: 'Somnath Bharti',
    party: 'AAP',
    lokSabhaConstituency: 'New Delhi',
    officeAddress: 'B-Block Main Market, Malviya Nagar, New Delhi - 110017',
    phone: '011-26681122 / 9871101244',
    email: 'somnathbharti.mla@delhi.gov.in',
    pincodes: ['110017'],
    keyAreas: ['Malviya Nagar Corner Market', 'Hauz Khas Village', 'Green Park', 'Safdarjung Enclave']
  },
  {
    constituencyNo: 44,
    constituencyName: 'R K Puram',
    hindiName: 'आर के पुरम (44)',
    mlaName: 'Pramila Tokas',
    party: 'AAP',
    lokSabhaConstituency: 'New Delhi',
    officeAddress: 'Sector 3 Main Market, R K Puram, New Delhi - 110022',
    phone: '011-26171100 / 9810112355',
    email: 'pramilatokas.mla@delhi.gov.in',
    pincodes: ['110022'],
    keyAreas: ['RK Puram Sectors 1 to 12', 'Munirka Village', 'Mohammadpur', 'Moti Bagh']
  },
  {
    constituencyNo: 45,
    constituencyName: 'Mehrauli',
    hindiName: 'महरौली (45)',
    mlaName: 'Naresh Yadav',
    party: 'AAP',
    lokSabhaConstituency: 'South Delhi',
    officeAddress: 'Main Qutub Minar Road, Mehrauli, New Delhi - 110030',
    phone: '011-26641122 / 9811023466',
    email: 'nareshyadav.mla@delhi.gov.in',
    pincodes: ['110030'],
    keyAreas: ['Mehrauli Bazaar', 'Kishan Garh', 'Vasant Kunj Sectors A & B', 'Lado Sarai']
  },
  {
    constituencyNo: 46,
    constituencyName: 'Chhatarpur',
    hindiName: 'छतरपुर (46)',
    mlaName: 'Kartar Singh Tanwar',
    party: 'BJP',
    lokSabhaConstituency: 'South Delhi',
    officeAddress: 'Main Temple Road, Chhatarpur, New Delhi - 110074',
    phone: '011-26801100 / 9810034577',
    email: 'kstanwar.mla@delhi.gov.in',
    pincodes: ['110074'],
    keyAreas: ['Chhatarpur Temple Complex', 'Fatehpur Beri', 'Bhati Mines', 'Satbari', 'Asola']
  },
  {
    constituencyNo: 47,
    constituencyName: 'Deoli (SC)',
    hindiName: 'देवली (47 - आरक्षित)',
    mlaName: 'Prakash Jarwal',
    party: 'AAP',
    lokSabhaConstituency: 'South Delhi',
    officeAddress: 'Deoli Village Main Market, New Delhi - 110062',
    phone: '011-29911122 / 9871145688',
    email: 'prakashjarwal.mla@delhi.gov.in',
    pincodes: ['110062'],
    keyAreas: ['Deoli Village', 'Durga Vihar', 'Khanpur Extension', 'Bandh Road Sangam Vihar']
  },
  {
    constituencyNo: 48,
    constituencyName: 'Ambedkar Nagar (SC)',
    hindiName: 'अम्बेडकर नगर (48 - आरक्षित)',
    mlaName: 'Ajay Dutt',
    party: 'AAP',
    lokSabhaConstituency: 'South Delhi',
    officeAddress: 'Block 4, Dakshinpuri Main Bus Stop, New Delhi - 110062',
    phone: '011-29961100 / 9810156799',
    email: 'ajaydutt.mla@delhi.gov.in',
    pincodes: ['110062'],
    keyAreas: ['Dakshinpuri Blocks 1 to 20', 'Ambedkar Nagar Sector 1, 3', 'Madangir']
  },
  {
    constituencyNo: 49,
    constituencyName: 'Sangam Vihar',
    hindiName: 'संगम विहार (49)',
    mlaName: 'Dinesh Mohaniya',
    party: 'AAP',
    lokSabhaConstituency: 'South Delhi',
    officeAddress: 'Main Ratia Marg, Block L, Sangam Vihar, New Delhi - 110062',
    phone: '011-29991122 / 9811067800',
    email: 'dineshmohaniya.mla@delhi.gov.in',
    pincodes: ['110062'],
    keyAreas: ['Sangam Vihar Blocks A to L', 'Devli Road', 'Ratia Marg Market', 'Tigri']
  },
  {
    constituencyNo: 50,
    constituencyName: 'Greater Kailash',
    hindiName: 'ग्रेटर कैलाश (50)',
    mlaName: 'Saurabh Bharadwaj',
    party: 'AAP',
    lokSabhaConstituency: 'New Delhi',
    officeAddress: 'M-Block Main Market, Greater Kailash 1, New Delhi - 110048',
    phone: '011-29231100 / 9810078911',
    email: 'saurabhb.mla@delhi.gov.in',
    pincodes: ['110048'],
    keyAreas: ['GK 1 M Block', 'GK 2 M Block', 'Chittaranjan Park (CR Park)', 'Pamposh Enclave', 'Alaknanda']
  },
  {
    constituencyNo: 51,
    constituencyName: 'Kalkaji',
    hindiName: 'कालकाजी (51)',
    mlaName: 'Atishi Marlena Singh',
    party: 'AAP',
    lokSabhaConstituency: 'South Delhi',
    officeAddress: 'Main Road, Rampuri, Kalkaji, New Delhi - 110019',
    phone: '011-26441122 / 011-23392030',
    email: 'atishi.mla@delhi.gov.in',
    pincodes: ['110019'],
    keyAreas: ['Kalkaji Main Market', 'Govindpuri', 'Nehru Place Complex', 'Giri Nagar']
  },
  {
    constituencyNo: 52,
    constituencyName: 'Tughlakabad',
    hindiName: 'तुगलकाबाद (52)',
    mlaName: 'Sahi Ram Pehelwan',
    party: 'AAP',
    lokSabhaConstituency: 'South Delhi',
    officeAddress: 'Main Mehrauli-Badarpur Road, Tughlakabad Village, New Delhi - 110044',
    phone: '011-29981100 / 9811189022',
    email: 'sahiram.mla@delhi.gov.in',
    pincodes: ['110044'],
    keyAreas: ['Tughlakabad Fort Area', 'Chhatarpal Market', 'Tehkhand', 'Okhla Phase 1 & 2']
  },
  {
    constituencyNo: 53,
    constituencyName: 'Badarpur',
    hindiName: 'बदरपुर (53)',
    mlaName: 'Ramvir Singh Bidhuri',
    party: 'BJP',
    lokSabhaConstituency: 'South Delhi',
    officeAddress: 'Main Mathura Road, Badarpur Chowk, New Delhi - 110044',
    phone: '011-26941122 / 9810090133',
    email: 'rsbidhuri.mla@delhi.gov.in',
    pincodes: ['110044'],
    keyAreas: ['Badarpur Border', 'Molarband', 'Jaitpur', 'Harinagar Extension Badarpur']
  },
  {
    constituencyNo: 54,
    constituencyName: 'Okhla',
    hindiName: 'ओखला (54)',
    mlaName: 'Amanatullah Khan',
    party: 'AAP',
    lokSabhaConstituency: 'East Delhi',
    officeAddress: 'Main Batla House Chowk, Jamia Nagar, Okhla, New Delhi - 110025',
    phone: '011-26981100 / 9871101244',
    email: 'amanatullah.mla@delhi.gov.in',
    pincodes: ['110025'],
    keyAreas: ['Jamia Nagar', 'Batla House', 'Shaheen Bagh', 'Abul Fazal Enclave', 'Zakir Nagar']
  },
  {
    constituencyNo: 55,
    constituencyName: 'Trilokpuri (SC)',
    hindiName: 'त्रिलोकपुरी (55 - आरक्षित)',
    mlaName: 'Rohit Kumar Mehraulia',
    party: 'AAP',
    lokSabhaConstituency: 'East Delhi',
    officeAddress: 'Block 15, Main Market, Trilokpuri, Delhi - 110091',
    phone: '011-22711122 / 9810112355',
    email: 'rohitmehraulia.mla@delhi.gov.in',
    pincodes: ['110091'],
    keyAreas: ['Trilokpuri Blocks 1 to 36', 'Mayur Vihar Phase 1 Pocket 1 & 2', 'Himmatpuri']
  },
  {
    constituencyNo: 56,
    constituencyName: 'Kondli (SC)',
    hindiName: 'कोंडली (56 - आरक्षित)',
    mlaName: 'Kuldeep Kumar',
    party: 'AAP',
    lokSabhaConstituency: 'East Delhi',
    officeAddress: 'Main Gharoli Dairy Farm Road, Kondli, Delhi - 110091',
    phone: '011-22621100 / 9811023466',
    email: 'kuldeepkumar.mla@delhi.gov.in',
    pincodes: ['110091'],
    keyAreas: ['Kondli Village', 'Gharoli', 'Mayur Vihar Phase 3', 'Kalyanpuri Blocks']
  },
  {
    constituencyNo: 57,
    constituencyName: 'Patparganj',
    hindiName: 'पटपड़गंज (57)',
    mlaName: 'Manish Sisodia',
    party: 'AAP',
    lokSabhaConstituency: 'East Delhi',
    officeAddress: 'Main IP Extension Road, Patparganj, Delhi - 110092',
    phone: '011-22721122 / 9810034577',
    email: 'manishsisodia.mla@delhi.gov.in',
    pincodes: ['110092'],
    keyAreas: ['IP Extension Society Area', 'Patparganj Village', 'Mayur Vihar Phase 2', 'Pandav Nagar East']
  },
  {
    constituencyNo: 58,
    constituencyName: 'Laxmi Nagar',
    hindiName: 'लक्ष्मी नगर (58)',
    mlaName: 'Abhay Verma',
    party: 'BJP',
    lokSabhaConstituency: 'East Delhi',
    officeAddress: 'Main Vikas Marg, Near Laxmi Nagar Metro Station Gate 1, Delhi - 110092',
    phone: '011-22521100 / 9871145688',
    email: 'abhayverma.mla@delhi.gov.in',
    pincodes: ['110092'],
    keyAreas: ['Laxmi Nagar Commercial Hub', 'Shakarpur', 'Guru Nanak Pura', 'Lalita Park', 'Ramesh Park']
  },
  {
    constituencyNo: 59,
    constituencyName: 'Vishwas Nagar',
    hindiName: 'विश्वास नगर (59)',
    mlaName: 'Om Prakash Sharma',
    party: 'BJP',
    lokSabhaConstituency: 'East Delhi',
    officeAddress: 'Main Surajmal Vihar Road, CBD Ground, Vishwas Nagar, Delhi - 110032',
    phone: '011-22301122 / 9810156799',
    email: 'opsharma.mla@delhi.gov.in',
    pincodes: ['110032', '110095'],
    keyAreas: ['Vishwas Nagar Industrial Area', 'Surajmal Vihar', 'Anand Vihar', 'Yojana Vihar']
  },
  {
    constituencyNo: 60,
    constituencyName: 'Krishna Nagar',
    hindiName: 'कृष्णा नगर (60)',
    mlaName: 'SK Bagga',
    party: 'AAP',
    lokSabhaConstituency: 'East Delhi',
    officeAddress: 'Main Lal Quarter Market Road, Krishna Nagar, Delhi - 110051',
    phone: '011-22091100 / 9811067800',
    email: 'skbagga.mla@delhi.gov.in',
    pincodes: ['110051'],
    keyAreas: ['Lal Quarter Market', 'Krishna Nagar Blocks A to F', 'Geeta Colony', 'Jagat Puri']
  },
  {
    constituencyNo: 61,
    constituencyName: 'Gandhi Nagar',
    hindiName: 'गांधी नगर (61)',
    mlaName: 'Anil Kumar Bajpai',
    party: 'BJP',
    lokSabhaConstituency: 'East Delhi',
    officeAddress: 'Main Readymade Garment Market Road, Gandhi Nagar, Delhi - 110031',
    phone: '011-22081122 / 9810078911',
    email: 'akbajpai.mla@delhi.gov.in',
    pincodes: ['110031'],
    keyAreas: ['Gandhi Nagar Asia Garment Market', 'Shanti Mohalla', 'Raghubar Pura', 'Kailash Nagar']
  },
  {
    constituencyNo: 62,
    constituencyName: 'Shahdara',
    hindiName: 'शाहदरा (62)',
    mlaName: 'Ram Niwas Goel',
    party: 'AAP',
    lokSabhaConstituency: 'East Delhi',
    officeAddress: 'Main GT Road Shahdara, Near Court Complex, Delhi - 110032',
    phone: '011-22321100 / 9810011223',
    email: 'ramniwasgoel.mla@delhi.gov.in',
    pincodes: ['110032'],
    keyAreas: ['Shahdara Chota Bazar', 'Bholanath Nagar', 'Rohtas Nagar Road', 'Mansarovar Park']
  },
  {
    constituencyNo: 63,
    constituencyName: 'Seemapuri (SC)',
    hindiName: 'सीमापुरी (63 - आरक्षित)',
    mlaName: 'Rajendra Pal Gautam',
    party: 'INC',
    lokSabhaConstituency: 'North East Delhi',
    officeAddress: 'Block D, Old Seemapuri Main Bus Stand, Delhi - 110095',
    phone: '011-22581122 / 9811189022',
    email: 'rpgautam.mla@delhi.gov.in',
    pincodes: ['110095'],
    keyAreas: ['Seemapuri Blocks A to F', 'Dilshad Garden', 'Nand Nagri Blocks', 'Taharpur']
  },
  {
    constituencyNo: 64,
    constituencyName: 'Rohtas Nagar',
    hindiName: 'रोहतास नगर (64)',
    mlaName: 'Jitender Mahajan',
    party: 'BJP',
    lokSabhaConstituency: 'North East Delhi',
    officeAddress: 'Main 100 Feet Road, Rohtas Nagar, Shahdara, Delhi - 110032',
    phone: '011-22121100 / 9810090133',
    email: 'jmahajan.mla@delhi.gov.in',
    pincodes: ['110032'],
    keyAreas: ['Rohtas Nagar Main Market', 'Gorakh Park', 'Babarpur Road', 'Durgapuri Chowk']
  },
  {
    constituencyNo: 65,
    constituencyName: 'Seelampur',
    hindiName: 'सीलमपुर (65)',
    mlaName: 'Abdul Rehman',
    party: 'AAP',
    lokSabhaConstituency: 'North East Delhi',
    officeAddress: 'Main GT Road, Seelampur Metro Pillar 210, Delhi - 110053',
    phone: '011-22561122 / 9871101244',
    email: 'abdulrehman.mla@delhi.gov.in',
    pincodes: ['110053'],
    keyAreas: ['Seelampur Market', 'Welcome Colony', 'Jaffrabad', 'Chauhan Bangar', 'Dharampura']
  },
  {
    constituencyNo: 66,
    constituencyName: 'Ghonda',
    hindiName: 'घोंडा (66)',
    mlaName: 'Ajay Mahawar',
    party: 'BJP',
    lokSabhaConstituency: 'North East Delhi',
    officeAddress: 'Main Yamuna Vihar C-Block Market, Delhi - 110053',
    phone: '011-22811100 / 9810112355',
    email: 'ajaymahawar.mla@delhi.gov.in',
    pincodes: ['110053'],
    keyAreas: ['Yamuna Vihar Blocks A to C', 'Ghonda Village', 'Garhi Mendu', 'Gamri Road']
  },
  {
    constituencyNo: 67,
    constituencyName: 'Babarpur',
    hindiName: 'बाबरपुर (67)',
    mlaName: 'Gopal Rai',
    party: 'AAP',
    lokSabhaConstituency: 'North East Delhi',
    officeAddress: 'Main Babarpur Road, Near Bus Terminal, Delhi - 110032',
    phone: '011-22821122 / 011-23392040',
    email: 'gopalrai.mla@delhi.gov.in',
    pincodes: ['110032', '110094'],
    keyAreas: ['Babarpur Market', 'Chhajupur', 'West Jyoti Nagar', 'Balbir Nagar']
  },
  {
    constituencyNo: 68,
    constituencyName: 'Gokhale Pur',
    hindiName: 'गोखलेपुर (68)',
    mlaName: 'Fateh Singh',
    party: 'AAP',
    lokSabhaConstituency: 'North East Delhi',
    officeAddress: 'Main Wazirabad Road, Gokhale Pur, Delhi - 110094',
    phone: '011-22831100 / 9811023466',
    email: 'fatehsingh.mla@delhi.gov.in',
    pincodes: ['110094'],
    keyAreas: ['Gokhale Pur', 'Harsh Vihar', 'Meet Nagar', 'Saboli']
  },
  {
    constituencyNo: 69,
    constituencyName: 'Mustafabad',
    hindiName: 'मुस्तफाबाद (69)',
    mlaName: 'Haji Yunus',
    party: 'AAP',
    lokSabhaConstituency: 'North East Delhi',
    officeAddress: 'Main Karawal Nagar Road, Mustafabad, Delhi - 110094',
    phone: '011-22841122 / 9810034577',
    email: 'hajiyunus.mla@delhi.gov.in',
    pincodes: ['110094'],
    keyAreas: ['Mustafabad Blocks A to E', 'Nehru Vihar', 'Dayalpur', 'Bhagirathi Vihar']
  },
  {
    constituencyNo: 70,
    constituencyName: 'Karawal Nagar',
    hindiName: 'करावल नगर (70)',
    mlaName: 'Mohan Singh Bisht',
    party: 'BJP',
    lokSabhaConstituency: 'North East Delhi',
    officeAddress: 'Main Pushta Road, Karawal Nagar, Delhi - 110094',
    phone: '011-22851100 / 9871145688',
    email: 'msbisht.mla@delhi.gov.in',
    pincodes: ['110094'],
    keyAreas: ['Karawal Nagar Chowk', 'Shiv Vihar', 'Ankur Vihar Border', 'Sadatpur']
  }
];

export function searchMlaAndMp(queryStr?: string, houseTypeFilter: 'ALL' | 'MLA' | 'MP' = 'ALL') {
  const cleanQuery = queryStr ? queryStr.trim().toLowerCase() : '';

  const matchedMlas = DELHI_VIDHAN_SABHA_MLAS.filter(mla => {
    if (!cleanQuery) return true;
    return (
      mla.constituencyName.toLowerCase().includes(cleanQuery) ||
      mla.hindiName.includes(cleanQuery) ||
      mla.mlaName.toLowerCase().includes(cleanQuery) ||
      mla.party.toLowerCase().includes(cleanQuery) ||
      mla.officeAddress.toLowerCase().includes(cleanQuery) ||
      mla.pincodes.some(p => p.includes(cleanQuery)) ||
      mla.keyAreas.some(a => a.toLowerCase().includes(cleanQuery)) ||
      mla.lokSabhaConstituency.toLowerCase().includes(cleanQuery)
    );
  });

  const matchedMps = DELHI_LOK_SABHA_MPS.filter(mp => {
    if (!cleanQuery) return true;
    return (
      mp.constituencyName.toLowerCase().includes(cleanQuery) ||
      mp.hindiName.includes(cleanQuery) ||
      mp.mpName.toLowerCase().includes(cleanQuery) ||
      mp.party.toLowerCase().includes(cleanQuery) ||
      mp.officeAddress.toLowerCase().includes(cleanQuery) ||
      mp.pincodes.some(p => p.includes(cleanQuery)) ||
      mp.areasCovered.some(a => a.toLowerCase().includes(cleanQuery))
    );
  });

  return {
    mlas: houseTypeFilter === 'MP' ? [] : matchedMlas,
    mps: houseTypeFilter === 'MLA' ? [] : matchedMps
  };
}
