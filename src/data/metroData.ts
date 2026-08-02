export interface MetroStationItem {
  id: string;
  name: string;
  hindiName: string;
  lines: {
    lineName: string; // e.g. 'Yellow Line', 'Blue Line'
    lineColor: string; // e.g. 'yellow', 'blue', 'red', 'violet', 'pink', 'magenta', 'green', 'orange', 'grey', 'aqua'
    terminalStations: string; // e.g. 'Samaypur Badli - Millennium City Centre'
  }[];
  pincode: string;
  district: string;
  landmark: string;
  isInterchange: boolean;
  interchangeLines?: string[];
  hasParking: boolean;
  isElevatedOrUnderground: 'Elevated' | 'Underground' | 'At Grade';
  gatesInfo: string;
}

export const METRO_LINE_OPTIONS = [
  'All Lines',
  'Yellow Line',
  'Blue Line',
  'Red Line',
  'Pink Line',
  'Magenta Line',
  'Violet Line',
  'Green Line',
  'Airport Express (Orange Line)',
  'Grey Line',
  'Aqua Line (Noida)'
];

export const METRO_DISTRICTS = [
  'All Zones',
  'New Delhi',
  'Central Delhi',
  'South Delhi',
  'South East Delhi',
  'South West Delhi',
  'West Delhi',
  'North Delhi',
  'North West Delhi',
  'East Delhi',
  'Shahdara',
  'Noida / Greater Noida',
  'Gurugram (Gurgaon)',
  'Ghaziabad',
  'Faridabad'
];

export const MOCK_DELHI_METRO_STATIONS: MetroStationItem[] = [
  // --- MAJOR INTERCHANGES & KEY STATIONS ---
  {
    id: 'ms-rajiv-chowk',
    name: 'Rajiv Chowk',
    hindiName: 'राजीव चौक',
    lines: [
      { lineName: 'Yellow Line', lineColor: 'yellow', terminalStations: 'Samaypur Badli ↔ Millennium City Centre Gurugram' },
      { lineName: 'Blue Line', lineColor: 'blue', terminalStations: 'Dwarka Sector 21 ↔ Noida City Centre / Vaishali' }
    ],
    pincode: '110001',
    district: 'New Delhi',
    landmark: 'Connaught Place Inner & Outer Circle, Janpath, Palika Bazaar',
    isInterchange: true,
    interchangeLines: ['Yellow Line', 'Blue Line'],
    hasParking: false,
    isElevatedOrUnderground: 'Underground',
    gatesInfo: 'Gate 1: Radial 1 CP | Gate 2: Shankar Market | Gate 3, 4, 5: Palika Bazaar | Gate 6, 7, 8: Radial 6, 7'
  },
  {
    id: 'ms-kashmere-gate',
    name: 'Kashmere Gate',
    hindiName: 'कशमीरी गेट',
    lines: [
      { lineName: 'Red Line', lineColor: 'red', terminalStations: 'Rithala ↔ Shaheed Sthal Ghaziabad' },
      { lineName: 'Yellow Line', lineColor: 'yellow', terminalStations: 'Samaypur Badli ↔ Millennium City Centre Gurugram' },
      { lineName: 'Violet Line', lineColor: 'violet', terminalStations: 'Kashmere Gate ↔ Raja Nahar Singh Faridabad' }
    ],
    pincode: '110006',
    district: 'North Delhi',
    landmark: 'ISBT Kashmere Gate Bus Terminal, St. James Church, Old Delhi Railway Station',
    isInterchange: true,
    interchangeLines: ['Red Line', 'Yellow Line', 'Violet Line'],
    hasParking: true,
    isElevatedOrUnderground: 'Underground',
    gatesInfo: 'Gate 1: ISBT Departure | Gate 2, 3: Mori Gate | Gate 4, 5, 6: St. James Church & Lothian Road'
  },
  {
    id: 'ms-hauz-khas',
    name: 'Hauz Khas',
    hindiName: 'हौज खास',
    lines: [
      { lineName: 'Yellow Line', lineColor: 'yellow', terminalStations: 'Samaypur Badli ↔ Millennium City Centre Gurugram' },
      { lineName: 'Magenta Line', lineColor: 'magenta', terminalStations: 'Janakpuri West ↔ Botanical Garden Noida' }
    ],
    pincode: '110016',
    district: 'South Delhi',
    landmark: 'IIT Delhi, AIIMS, Hauz Khas Village, Laxman Public School, Sri Aurobindo Marg',
    isInterchange: true,
    interchangeLines: ['Yellow Line', 'Magenta Line'],
    hasParking: true,
    isElevatedOrUnderground: 'Underground',
    gatesInfo: 'Gate 1: Laxman Public School | Gate 2: RBI Staff Quarters | Gate 3, 4: IIT Delhi Gate & Aurobindo Marg'
  },
  {
    id: 'ms-central-secretariat',
    name: 'Central Secretariat',
    hindiName: 'केंद्रीय सचिवालय',
    lines: [
      { lineName: 'Yellow Line', lineColor: 'yellow', terminalStations: 'Samaypur Badli ↔ Millennium City Centre Gurugram' },
      { lineName: 'Violet Line', lineColor: 'violet', terminalStations: 'Kashmere Gate ↔ Raja Nahar Singh Faridabad' }
    ],
    pincode: '110001',
    district: 'New Delhi',
    landmark: 'North Block, South Block, Rashtrapati Bhavan, Krishi Bhawan, Shastri Bhawan, India Gate',
    isInterchange: true,
    interchangeLines: ['Yellow Line', 'Violet Line'],
    hasParking: false,
    isElevatedOrUnderground: 'Underground',
    gatesInfo: 'Gate 1: Krishi Bhawan | Gate 2, 3: North Block & Dr. Rajendra Prasad Road | Gate 4, 5: Rail Bhawan'
  },
  {
    id: 'ms-mandi-house',
    name: 'Mandi House',
    hindiName: 'मंडी हाउस',
    lines: [
      { lineName: 'Blue Line', lineColor: 'blue', terminalStations: 'Dwarka Sector 21 ↔ Noida City Centre / Vaishali' },
      { lineName: 'Violet Line', lineColor: 'violet', terminalStations: 'Kashmere Gate ↔ Raja Nahar Singh Faridabad' }
    ],
    pincode: '110001',
    district: 'New Delhi',
    landmark: 'National School of Drama (NSD), Sangeet Natak Akademi, Shri Ram Centre, Bengali Market',
    isInterchange: true,
    interchangeLines: ['Blue Line', 'Violet Line'],
    hasParking: false,
    isElevatedOrUnderground: 'Underground',
    gatesInfo: 'Gate 1: NSD & Himachal Bhawan | Gate 2: Copernicus Marg | Gate 3: Modern School | Gate 4: Sikandra Road'
  },
  {
    id: 'ms-botanical-garden',
    name: 'Botanical Garden',
    hindiName: 'बॉटनिकल गार्डन',
    lines: [
      { lineName: 'Blue Line', lineColor: 'blue', terminalStations: 'Dwarka Sector 21 ↔ Noida Electronic City' },
      { lineName: 'Magenta Line', lineColor: 'magenta', terminalStations: 'Janakpuri West ↔ Botanical Garden Noida' }
    ],
    pincode: '201301',
    district: 'Noida / Greater Noida',
    landmark: 'Botanical Garden Noida, Sector 37 Bus Stand, Captain Vijyant Thapar Marg',
    isInterchange: true,
    interchangeLines: ['Blue Line', 'Magenta Line'],
    hasParking: true,
    isElevatedOrUnderground: 'Elevated',
    gatesInfo: 'Gate 1: Sector 37 Bus Stand | Gate 2, 3: Botanical Garden & Amity University Bus Route'
  },
  {
    id: 'ms-anand-vihar',
    name: 'Anand Vihar ISBT',
    hindiName: 'आनंद विहार आईएसबीटी',
    lines: [
      { lineName: 'Blue Line', lineColor: 'blue', terminalStations: 'Dwarka Sector 21 ↔ Vaishali' },
      { lineName: 'Pink Line', lineColor: 'pink', terminalStations: 'Majlis Park ↔ Shiv Vihar' }
    ],
    pincode: '110092',
    district: 'East Delhi',
    landmark: 'Anand Vihar ISBT Bus Terminal, Anand Vihar Railway Station, Pacific Mall',
    isInterchange: true,
    interchangeLines: ['Blue Line', 'Pink Line'],
    hasParking: true,
    isElevatedOrUnderground: 'Elevated',
    gatesInfo: 'Gate 1: Anand Vihar Railway Station | Gate 2: ISBT Bus Terminal | Gate 3: Kaushambi Border'
  },
  {
    id: 'ms-azadpur',
    name: 'Azadpur',
    hindiName: 'आजादपुर',
    lines: [
      { lineName: 'Yellow Line', lineColor: 'yellow', terminalStations: 'Samaypur Badli ↔ Millennium City Centre Gurugram' },
      { lineName: 'Pink Line', lineColor: 'pink', terminalStations: 'Majlis Park ↔ Shiv Vihar' }
    ],
    pincode: '110033',
    district: 'North West Delhi',
    landmark: 'Azadpur Mandi (Fruit & Vegetable Wholesale Market), Model Town Part 3, GT Karnal Road',
    isInterchange: true,
    interchangeLines: ['Yellow Line', 'Pink Line'],
    hasParking: true,
    isElevatedOrUnderground: 'Underground',
    gatesInfo: 'Gate 1: Azadpur Sabzi Mandi | Gate 2, 3: GT Karnal Road | Gate 4: Shalimar Bagh Flyover'
  },
  {
    id: 'ms-netaji-subhash-place',
    name: 'Netaji Subhash Place (NSP)',
    hindiName: 'नेताजी सुभाष प्लेस',
    lines: [
      { lineName: 'Red Line', lineColor: 'red', terminalStations: 'Rithala ↔ Shaheed Sthal Ghaziabad' },
      { lineName: 'Pink Line', lineColor: 'pink', terminalStations: 'Majlis Park ↔ Shiv Vihar' }
    ],
    pincode: '110034',
    district: 'North West Delhi',
    landmark: 'Netaji Subhash Place Commercial Complex, Pitampura TV Tower, D-Mall, Max Hospital Pitampura',
    isInterchange: true,
    interchangeLines: ['Red Line', 'Pink Line'],
    hasParking: true,
    isElevatedOrUnderground: 'Elevated',
    gatesInfo: 'Gate 1: NSP Complex & Food Court | Gate 2: Pitampura TV Tower | Gate 3: Wazirpur Depot'
  },
  {
    id: 'ms-janakpuri-west',
    name: 'Janakpuri West',
    hindiName: 'जनकपुरी पश्चिम',
    lines: [
      { lineName: 'Blue Line', lineColor: 'blue', terminalStations: 'Dwarka Sector 21 ↔ Noida / Vaishali' },
      { lineName: 'Magenta Line', lineColor: 'magenta', terminalStations: 'Janakpuri West ↔ Botanical Garden Noida' }
    ],
    pincode: '110058',
    district: 'West Delhi',
    landmark: 'Janakpuri District Centre, Unity One Mall, Piccadily Hotel, Uttam Nagar Border',
    isInterchange: true,
    interchangeLines: ['Blue Line', 'Magenta Line'],
    hasParking: true,
    isElevatedOrUnderground: 'Elevated',
    gatesInfo: 'Gate 1: Unity One Mall | Gate 2: District Centre | Gate 3, 4: Westend Mall & Shivaji Marg'
  },
  {
    id: 'ms-new-delhi',
    name: 'New Delhi Railway Station Metro',
    hindiName: 'नई दिल्ली रेलवे स्टेशन',
    lines: [
      { lineName: 'Yellow Line', lineColor: 'yellow', terminalStations: 'Samaypur Badli ↔ Millennium City Centre Gurugram' },
      { lineName: 'Airport Express (Orange Line)', lineColor: 'orange', terminalStations: 'New Delhi ↔ Yashobhoomi Dwarka Sector 25' }
    ],
    pincode: '110055',
    district: 'Central Delhi',
    landmark: 'New Delhi Railway Station (NDLS) Ajmeri Gate Side, Paharganj, Connaught Place',
    isInterchange: true,
    interchangeLines: ['Yellow Line', 'Airport Express (Orange Line)'],
    hasParking: true,
    isElevatedOrUnderground: 'Underground',
    gatesInfo: 'Gate 1: NDLS Ajmeri Gate Platform 16 | Gate 2: Paharganj Side | Gate 3: Airport Express Check-in'
  },
  {
    id: 'ms-igi-airport',
    name: 'IGI Airport Terminal 3',
    hindiName: 'आईजीआई एयरपोर्ट टी3',
    lines: [
      { lineName: 'Airport Express (Orange Line)', lineColor: 'orange', terminalStations: 'New Delhi ↔ Yashobhoomi Dwarka Sector 25' }
    ],
    pincode: '110061',
    district: 'South West Delhi',
    landmark: 'Indira Gandhi International Airport Terminal 3 (T3) & Terminal 2 (T2)',
    isInterchange: false,
    hasParking: true,
    isElevatedOrUnderground: 'Underground',
    gatesInfo: 'Direct Underground Tunnel Passage to T3 Arrivals & Departures Hall'
  },
  {
    id: 'ms-chandni-chowk',
    name: 'Chandni Chowk',
    hindiName: 'चांदनी चौक',
    lines: [
      { lineName: 'Yellow Line', lineColor: 'yellow', terminalStations: 'Samaypur Badli ↔ Millennium City Centre Gurugram' }
    ],
    pincode: '110006',
    district: 'North Delhi',
    landmark: 'Old Delhi Railway Station (DLI), Red Fort, Jama Masjid, Town Hall, Paranthe Wali Gali',
    isInterchange: false,
    hasParking: false,
    isElevatedOrUnderground: 'Underground',
    gatesInfo: 'Gate 1: Old Delhi Railway Station | Gate 2: Chandni Chowk Main Market | Gate 3: Town Hall'
  },
  {
    id: 'ms-aiims',
    name: 'AIIMS',
    hindiName: 'एम्स',
    lines: [
      { lineName: 'Yellow Line', lineColor: 'yellow', terminalStations: 'Samaypur Badli ↔ Millennium City Centre Gurugram' }
    ],
    pincode: '110029',
    district: 'South Delhi',
    landmark: 'AIIMS Main Hospital, Safdarjung Hospital, Ansari Nagar, Ring Road Junction',
    isInterchange: false,
    hasParking: true,
    isElevatedOrUnderground: 'Underground',
    gatesInfo: 'Gate 1, 2: AIIMS Main OPD & Emergency | Gate 3, 4: Safdarjung Hospital OPD'
  },
  {
    id: 'ms-dilli-haat-ina',
    name: 'Dilli Haat INA',
    hindiName: 'दिल्ली हाट आईएनए',
    lines: [
      { lineName: 'Yellow Line', lineColor: 'yellow', terminalStations: 'Samaypur Badli ↔ Millennium City Centre Gurugram' },
      { lineName: 'Pink Line', lineColor: 'pink', terminalStations: 'Majlis Park ↔ Shiv Vihar' }
    ],
    pincode: '110023',
    district: 'South Delhi',
    landmark: 'Dilli Haat Craft Bazaar, INA Market, Sarojini Nagar Market, Kidwai Nagar',
    isInterchange: true,
    interchangeLines: ['Yellow Line', 'Pink Line'],
    hasParking: false,
    isElevatedOrUnderground: 'Underground',
    gatesInfo: 'Gate 1: Dilli Haat Entry | Gate 2: INA Market | Gate 3: Laxmibai Nagar'
  },
  {
    id: 'ms-lajpat-nagar',
    name: 'Lajpat Nagar',
    hindiName: 'लाजपत नगर',
    lines: [
      { lineName: 'Violet Line', lineColor: 'violet', terminalStations: 'Kashmere Gate ↔ Raja Nahar Singh Faridabad' },
      { lineName: 'Pink Line', lineColor: 'pink', terminalStations: 'Majlis Park ↔ Shiv Vihar' }
    ],
    pincode: '110024',
    district: 'South Delhi',
    landmark: 'Lajpat Nagar Central Market, Amar Colony, Defence Colony, Haldiram Lajpat Nagar',
    isInterchange: true,
    interchangeLines: ['Violet Line', 'Pink Line'],
    hasParking: true,
    isElevatedOrUnderground: 'Elevated',
    gatesInfo: 'Gate 1, 2: Lajpat Nagar Central Market | Gate 3, 4: Defence Colony & Ring Road'
  },
  {
    id: 'ms-kalkaji-mandir',
    name: 'Kalkaji Mandir',
    hindiName: 'कालकाजी मंदिर',
    lines: [
      { lineName: 'Violet Line', lineColor: 'violet', terminalStations: 'Kashmere Gate ↔ Raja Nahar Singh Faridabad' },
      { lineName: 'Magenta Line', lineColor: 'magenta', terminalStations: 'Janakpuri West ↔ Botanical Garden Noida' }
    ],
    pincode: '110019',
    district: 'South East Delhi',
    landmark: 'Kalkaji Devi Temple, Lotus Temple (Bahai House of Worship), Nehru Place Market',
    isInterchange: true,
    interchangeLines: ['Violet Line', 'Magenta Line'],
    hasParking: true,
    isElevatedOrUnderground: 'Elevated',
    gatesInfo: 'Gate 1: Kalkaji Temple Entry | Gate 2: Lotus Temple | Gate 3: Paras Cinema & Nehru Place'
  },
  {
    id: 'ms-dwarka-sec21',
    name: 'Dwarka Sector 21',
    hindiName: 'द्वारका सेक्टर 21',
    lines: [
      { lineName: 'Blue Line', lineColor: 'blue', terminalStations: 'Dwarka Sector 21 ↔ Noida / Vaishali' },
      { lineName: 'Airport Express (Orange Line)', lineColor: 'orange', terminalStations: 'New Delhi ↔ Yashobhoomi Dwarka Sector 25' }
    ],
    pincode: '110077',
    district: 'South West Delhi',
    landmark: 'Pacific D21 Mall Dwarka, Yashobhoomi Convention Centre, Bijwasan Border',
    isInterchange: true,
    interchangeLines: ['Blue Line', 'Airport Express (Orange Line)'],
    hasParking: true,
    isElevatedOrUnderground: 'Underground',
    gatesInfo: 'Gate 1: Pacific Mall Entry | Gate 2: Bus Terminal | Gate 3: Airport Express Terminal'
  },
  {
    id: 'ms-akshardham',
    name: 'Akshardham',
    hindiName: 'अक्षरधाम',
    lines: [
      { lineName: 'Blue Line', lineColor: 'blue', terminalStations: 'Dwarka Sector 21 ↔ Noida Electronic City' }
    ],
    pincode: '110092',
    district: 'East Delhi',
    landmark: 'Swaminarayan Akshardham Temple, Commonwealth Games Village (CWG), Noida Link Road',
    isInterchange: false,
    hasParking: true,
    isElevatedOrUnderground: 'Elevated',
    gatesInfo: 'Gate 1: Akshardham Temple Main Gate | Gate 2: CWG Village & Sports Complex'
  },
  {
    id: 'ms-yamuna-bank',
    name: 'Yamuna Bank',
    hindiName: 'यमुना बैंक',
    lines: [
      { lineName: 'Blue Line', lineColor: 'blue', terminalStations: 'Dwarka Sector 21 ↔ Noida / Vaishali Branch' }
    ],
    pincode: '110092',
    district: 'East Delhi',
    landmark: 'Yamuna Bank Depot, Laxmi Nagar Link Road, Ring Road',
    isInterchange: true,
    interchangeLines: ['Blue Line (Noida Branch)', 'Blue Line (Vaishali Branch)'],
    hasParking: false,
    isElevatedOrUnderground: 'At Grade',
    gatesInfo: 'Gate 1: Yamuna Bank Depot Gate'
  },
  {
    id: 'ms-welcome',
    name: 'Welcome',
    hindiName: 'वेलकम',
    lines: [
      { lineName: 'Red Line', lineColor: 'red', terminalStations: 'Rithala ↔ Shaheed Sthal Ghaziabad' },
      { lineName: 'Pink Line', lineColor: 'pink', terminalStations: 'Majlis Park ↔ Shiv Vihar' }
    ],
    pincode: '110053',
    district: 'Shahdara',
    landmark: 'Welcome Colony, Shahdara Court, GT Road Shahdara, Shyam Lal College',
    isInterchange: true,
    interchangeLines: ['Red Line', 'Pink Line'],
    hasParking: true,
    isElevatedOrUnderground: 'Elevated',
    gatesInfo: 'Gate 1: GT Road Shahdara | Gate 2: Welcome Colony Park'
  },
  {
    id: 'ms-kirti-nagar',
    name: 'Kirti Nagar',
    hindiName: 'कीर्ति नगर',
    lines: [
      { lineName: 'Blue Line', lineColor: 'blue', terminalStations: 'Dwarka Sector 21 ↔ Noida / Vaishali' },
      { lineName: 'Green Line', lineColor: 'green', terminalStations: 'Kirti Nagar / Inderlok ↔ Brig. Hoshiar Singh Bahadurgarh' }
    ],
    pincode: '110015',
    district: 'West Delhi',
    landmark: 'Kirti Nagar Furniture Market, Moments Mall, Moti Nagar Industrial Area',
    isInterchange: true,
    interchangeLines: ['Blue Line', 'Green Line'],
    hasParking: true,
    isElevatedOrUnderground: 'Elevated',
    gatesInfo: 'Gate 1: Moments Mall & Najafgarh Road | Gate 2: Kirti Nagar Furniture Market'
  },
  {
    id: 'ms-inderlok',
    name: 'Inderlok',
    hindiName: 'इंद्रलोक',
    lines: [
      { lineName: 'Red Line', lineColor: 'red', terminalStations: 'Rithala ↔ Shaheed Sthal Ghaziabad' },
      { lineName: 'Green Line', lineColor: 'green', terminalStations: 'Inderlok ↔ Brig. Hoshiar Singh Bahadurgarh' }
    ],
    pincode: '110035',
    district: 'North West Delhi',
    landmark: 'Inderlok DDA Market, Daya Basti Railway Station, Tri Nagar, Anand Parbat',
    isInterchange: true,
    interchangeLines: ['Red Line', 'Green Line'],
    hasParking: true,
    isElevatedOrUnderground: 'Elevated',
    gatesInfo: 'Gate 1: Tri Nagar Main Road | Gate 2: Inderlok DDA Market'
  },
  {
    id: 'ms-millennium-city-centre',
    name: 'Millennium City Centre Gurugram (HUDA City Centre)',
    hindiName: 'मिललेनियम सिटी सेंटर गुरुग्राम',
    lines: [
      { lineName: 'Yellow Line', lineColor: 'yellow', terminalStations: 'Samaypur Badli ↔ Millennium City Centre Gurugram' }
    ],
    pincode: '122001',
    district: 'Gurugram (Gurgaon)',
    landmark: 'Fortis Hospital Gurgaon, Max Hospital Gurgaon, Vyapar Kendra, Sector 29 Food Street',
    isInterchange: false,
    hasParking: true,
    isElevatedOrUnderground: 'Elevated',
    gatesInfo: 'Gate 1: Fortis Hospital Side | Gate 2: Sector 29 Commercial Hub'
  }
];

export function getMatchingMetroStations(
  lineFilter?: string, 
  districtFilter?: string, 
  queryStr?: string
): MetroStationItem[] {
  const cleanLine = lineFilter && lineFilter !== 'All Lines' ? lineFilter.toLowerCase() : '';
  const cleanDistrict = districtFilter && districtFilter !== 'All Zones' ? districtFilter.toLowerCase() : '';
  const cleanQuery = queryStr ? queryStr.trim().toLowerCase() : '';

  const matched = MOCK_DELHI_METRO_STATIONS.filter(station => {
    const matchesLine = !cleanLine || station.lines.some(l => l.lineName.toLowerCase().includes(cleanLine));
    const matchesDistrict = !cleanDistrict || station.district.toLowerCase().includes(cleanDistrict);

    if (!cleanQuery) return matchesLine && matchesDistrict;

    const matchesName = station.name.toLowerCase().includes(cleanQuery);
    const matchesHindiName = station.hindiName.includes(cleanQuery);
    const matchesPincode = station.pincode.includes(cleanQuery);
    const matchesLandmark = station.landmark.toLowerCase().includes(cleanQuery);
    const matchesDistrictName = station.district.toLowerCase().includes(cleanQuery);
    const matchesLineName = station.lines.some(l => l.lineName.toLowerCase().includes(cleanQuery));

    return matchesLine && matchesDistrict && (matchesName || matchesHindiName || matchesPincode || matchesLandmark || matchesDistrictName || matchesLineName);
  });

  // Dynamic fallback generator so any searched location or PIN code in Delhi NCR returns Metro station & route planner info
  if (cleanQuery && matched.length === 0) {
    const capitalizedQuery = queryStr!.trim().charAt(0).toUpperCase() + queryStr!.trim().slice(1);
    const isPinCode = /^\d{6}$/.test(cleanQuery);
    const dynamicPincode = isPinCode ? cleanQuery : '110001';

    const dynamicStations: MetroStationItem[] = [
      {
        id: `dyn-ms-${cleanQuery}`,
        name: `${capitalizedQuery} Metro Station`,
        hindiName: `${capitalizedQuery} मेट्रो स्टेशन`,
        lines: [
          { 
            lineName: lineFilter && lineFilter !== 'All Lines' ? lineFilter : 'Yellow / Blue Connected Line', 
            lineColor: 'yellow', 
            terminalStations: 'Central Metro Corridor ↔ Delhi NCR Interchange' 
          }
        ],
        pincode: dynamicPincode,
        district: districtFilter && districtFilter !== 'All Zones' ? districtFilter : 'Delhi NCR Corridor',
        landmark: `Main Sector Market, Bus Terminal & Local Area, ${capitalizedQuery}`,
        isInterchange: false,
        hasParking: true,
        isElevatedOrUnderground: 'Elevated',
        gatesInfo: `Gate 1: Main Road & Bus Stop | Gate 2: Local Market & Auto Stand, ${capitalizedQuery}`
      }
    ];

    return dynamicStations;
  }

  return matched;
}
