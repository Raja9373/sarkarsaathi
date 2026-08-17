export interface PassportOfficeItem {
  id: string;
  name: string;
  type: 'PSK (Passport Seva Kendra)' | 'POPSK (Post Office PSK)' | 'RPO (Regional Passport Office)';
  region: string;
  state: string;
  stateId: string;
  address: string;
  pincode: string;
  phone: string;
  timings: string;
  landmark: string;
  servicesOffered: string[];
  appointmentRequired: boolean;
  isMainRpo?: boolean;
}

export const STATE_PASSPORT_OFFICES: Record<string, PassportOfficeItem[]> = {
  'delhi': [
    {
      id: 'del-rpo-bhikaji',
      name: 'Regional Passport Office (RPO) Delhi',
      type: 'RPO (Regional Passport Office)',
      region: 'South Delhi & NCR',
      state: 'Delhi',
      stateId: 'delhi',
      address: 'HUDCO Vishala Building, 14 Bhikaji Cama Place, RK Puram, New Delhi',
      pincode: '110066',
      phone: '011-26182269 / 1800-258-1800',
      timings: '09:30 AM - 04:30 PM (Mon-Fri)',
      landmark: 'Near Bhikaji Cama Place Metro Station Gate 2',
      servicesOffered: ['Complex Passport Inquiries', 'Lost / Damaged Passport Appeal', 'PCC Dispute Resolution', 'Surrender Certificate'],
      appointmentRequired: true,
      isMainRpo: true
    },
    {
      id: 'del-psk-ito',
      name: 'Passport Seva Kendra (PSK) Herald House - ITO',
      type: 'PSK (Passport Seva Kendra)',
      region: 'Central & New Delhi',
      state: 'Delhi',
      stateId: 'delhi',
      address: 'Herald House, 5A, Bahadur Shah Zafar Marg, ITO, New Delhi',
      pincode: '110002',
      phone: '1800-258-1800',
      timings: '09:00 AM - 05:30 PM (Mon-Fri)',
      landmark: 'Opposite Income Tax Office, Near ITO Metro Station',
      servicesOffered: ['Fresh Normal Passport', 'Tatkaal Passport', 'Passport Renewal', 'Police Clearance Certificate (PCC)'],
      appointmentRequired: true
    },
    {
      id: 'del-psk-shalimar',
      name: 'Passport Seva Kendra (PSK) Shalimar Bagh / NSP',
      type: 'PSK (Passport Seva Kendra)',
      region: 'North & West Delhi',
      state: 'Delhi',
      stateId: 'delhi',
      address: 'Plot No. 11, AGD Tower, Netaji Subhash Place, Pitampura, New Delhi',
      pincode: '110034',
      phone: '1800-258-1800',
      timings: '09:00 AM - 05:30 PM (Mon-Fri)',
      landmark: 'Near NSP Metro Station Gate 2',
      servicesOffered: ['Fresh Normal Passport', 'Tatkaal Passport', 'Renewal & Re-issue', 'PCC Application'],
      appointmentRequired: true
    },
    {
      id: 'del-popsk-yamuna',
      name: 'Post Office PSK (POPSK) Yamuna Vihar',
      type: 'POPSK (Post Office PSK)',
      region: 'North East Delhi',
      state: 'Delhi',
      stateId: 'delhi',
      address: 'Head Post Office, C-Block, Yamuna Vihar, Delhi',
      pincode: '110053',
      phone: '1800-258-1800',
      timings: '09:00 AM - 04:30 PM (Mon-Fri)',
      landmark: 'Near Yamuna Vihar Dispensary',
      servicesOffered: ['Fresh Normal Passport', 'Renewal & Re-issue', 'Biometric Verification'],
      appointmentRequired: true
    },
    {
      id: 'del-popsk-kalkaji',
      name: 'Post Office PSK (POPSK) Kalkaji',
      type: 'POPSK (Post Office PSK)',
      region: 'South East Delhi',
      state: 'Delhi',
      stateId: 'delhi',
      address: 'Kalkaji Head Post Office, Near Deshbandhu College, Kalkaji, New Delhi',
      pincode: '110019',
      phone: '1800-258-1800',
      timings: '09:00 AM - 04:30 PM (Mon-Fri)',
      landmark: 'Near Nehru Place & Kalkaji Mandir Metro',
      servicesOffered: ['Fresh Normal Passport', 'Renewal', 'PCC Application'],
      appointmentRequired: true
    }
  ],
  'maharashtra': [
    {
      id: 'mh-rpo-mumbai',
      name: 'Regional Passport Office (RPO) Mumbai',
      type: 'RPO (Regional Passport Office)',
      region: 'Mumbai Island City',
      state: 'Maharashtra',
      stateId: 'maharashtra',
      address: 'Videsh Bhavan, C-45, G-Block, Bandra Kurla Complex (BKC), Bandra East, Mumbai',
      pincode: '400051',
      phone: '022-26521100 / 1800-258-1800',
      timings: '09:30 AM - 04:30 PM (Mon-Fri)',
      landmark: 'Near ICICI Bank Tower & MCA Club, BKC',
      servicesOffered: ['Complex Inquiries & Appeals', 'Lost/Damaged Passports', 'Tatkaal Escalation', 'PCC Dispute'],
      appointmentRequired: true,
      isMainRpo: true
    },
    {
      id: 'mh-psk-lower-parel',
      name: 'Passport Seva Kendra (PSK) Lower Parel Mumbai',
      type: 'PSK (Passport Seva Kendra)',
      region: 'South Mumbai',
      state: 'Maharashtra',
      stateId: 'maharashtra',
      address: 'Trade Centre, B-Wing, Kamala Mills Compound, Senapati Bapat Marg, Lower Parel, Mumbai',
      pincode: '400013',
      phone: '1800-258-1800',
      timings: '09:00 AM - 05:30 PM (Mon-Fri)',
      landmark: 'Inside Kamala Mills Compound, Near Lower Parel Railway Station',
      servicesOffered: ['Fresh Normal Passport', 'Tatkaal Processing', 'Re-issue / Renewal', 'PCC Application'],
      appointmentRequired: true
    },
    {
      id: 'mh-psk-andheri',
      name: 'Passport Seva Kendra (PSK) Andheri East Mumbai',
      type: 'PSK (Passport Seva Kendra)',
      region: 'Western Suburbs Mumbai',
      state: 'Maharashtra',
      stateId: 'maharashtra',
      address: 'The Great Oasis, D-9, Road No. 21, MIDC, Andheri East, Mumbai',
      pincode: '400093',
      phone: '1800-258-1800',
      timings: '09:00 AM - 05:30 PM (Mon-Fri)',
      landmark: 'Near Marol Naka Metro Station & Seepz Gate',
      servicesOffered: ['Fresh Normal Passport', 'Tatkaal Processing', 'Renewal', 'Police Clearance Certificate (PCC)'],
      appointmentRequired: true
    },
    {
      id: 'mh-psk-malad',
      name: 'Passport Seva Kendra (PSK) Malad West',
      type: 'PSK (Passport Seva Kendra)',
      region: 'North Mumbai',
      state: 'Maharashtra',
      stateId: 'maharashtra',
      address: 'Raheja Tipco Plaza, Rani Sati Marg, Malad East / West Link Road, Mumbai',
      pincode: '400097',
      phone: '1800-258-1800',
      timings: '09:00 AM - 05:30 PM (Mon-Fri)',
      landmark: 'Near Malad Western Express Highway Metro',
      servicesOffered: ['Fresh Normal Passport', 'Tatkaal Passport', 'Renewal & Re-issue', 'PCC Application'],
      appointmentRequired: true
    },
    {
      id: 'mh-rpo-pune',
      name: 'Regional Passport Office (RPO) & PSK Pune',
      type: 'RPO (Regional Passport Office)',
      region: 'Pune & Western Maharashtra',
      state: 'Maharashtra',
      stateId: 'maharashtra',
      address: 'Zero One Commercial Building, S. No. 79/1, Mundhwa-Kalyani Nagar Road, Pingale Wasti, Koregaon Park Annexe, Pune',
      pincode: '411036',
      phone: '020-25679962 / 1800-258-1800',
      timings: '09:00 AM - 05:30 PM (Mon-Fri)',
      landmark: 'Near Passport Office Mundhwa & Kalyani Nagar Bridge',
      servicesOffered: ['Fresh Normal Passport', 'Tatkaal Passport', 'Diplomatic & Official Inquiries', 'PCC Processing'],
      appointmentRequired: true,
      isMainRpo: true
    },
    {
      id: 'mh-rpo-nagpur',
      name: 'Regional Passport Office (RPO) & PSK Nagpur',
      type: 'RPO (Regional Passport Office)',
      region: 'Vidarbha Region',
      state: 'Maharashtra',
      stateId: 'maharashtra',
      address: 'Bilquis Plaza, Opposite Railway Station, Station Road, Sitabuldi, Nagpur',
      pincode: '440001',
      phone: '0712-2565636 / 1800-258-1800',
      timings: '09:00 AM - 05:30 PM (Mon-Fri)',
      landmark: 'Opposite Nagpur Main Railway Station',
      servicesOffered: ['Fresh Normal Passport', 'Tatkaal Passport', 'Re-issue', 'PCC'],
      appointmentRequired: true,
      isMainRpo: true
    },
    {
      id: 'mh-popsk-thane',
      name: 'Post Office PSK (POPSK) Thane',
      type: 'POPSK (Post Office PSK)',
      region: 'Thane District',
      state: 'Maharashtra',
      stateId: 'maharashtra',
      address: 'Thane Head Post Office, Near Talao Pali, Station Road, Thane West',
      pincode: '400601',
      phone: '1800-258-1800',
      timings: '09:30 AM - 04:30 PM (Mon-Fri)',
      landmark: 'Opposite Talao Pali Lake, Near Thane Railway Station',
      servicesOffered: ['Fresh Passport', 'Renewal', 'Biometrics Verification'],
      appointmentRequired: true
    },
    {
      id: 'mh-popsk-navi-mumbai',
      name: 'Post Office PSK (POPSK) Navi Mumbai - Vashi',
      type: 'POPSK (Post Office PSK)',
      region: 'Navi Mumbai',
      state: 'Maharashtra',
      stateId: 'maharashtra',
      address: 'Vashi Post Office, Sector 17, Vashi, Navi Mumbai',
      pincode: '400703',
      phone: '1800-258-1800',
      timings: '09:30 AM - 04:30 PM (Mon-Fri)',
      landmark: 'Near Vashi Plaza, Sector 17',
      servicesOffered: ['Fresh Normal Passport', 'Renewal', 'PCC Application'],
      appointmentRequired: true
    }
  ],
  'punjab': [
    {
      id: 'pb-rpo-chandigarh',
      name: 'Regional Passport Office (RPO) Chandigarh',
      type: 'RPO (Regional Passport Office)',
      region: 'Chandigarh & Punjab',
      state: 'Punjab',
      stateId: 'punjab',
      address: 'SCO 28-32, Sector 34-A, Chandigarh',
      pincode: '160022',
      phone: '0172-2601243 / 1800-258-1800',
      timings: '09:00 AM - 05:00 PM (Mon-Fri)',
      landmark: 'Sector 34-A Commercial Sub-City Centre',
      servicesOffered: ['Complex Disputes & Inquiries', 'Lost Passport Clearance', 'PCC Verification', 'Tatkaal Escalations'],
      appointmentRequired: true,
      isMainRpo: true
    },
    {
      id: 'pb-rpo-jalandhar',
      name: 'Regional Passport Office (RPO) Jalandhar',
      type: 'RPO (Regional Passport Office)',
      region: 'Doaba Region',
      state: 'Punjab',
      stateId: 'punjab',
      address: 'Passport Complex, Near DC Office, Nehru Garden Road, Jalandhar, Punjab',
      pincode: '144001',
      phone: '0181-2242111 / 1800-258-1800',
      timings: '09:00 AM - 05:00 PM (Mon-Fri)',
      landmark: 'Near DC Office & Nehru Garden, Jalandhar',
      servicesOffered: ['Full Passport Services', 'Tatkaal Processing', 'PCC Approvals', 'NRIs Verification'],
      appointmentRequired: true,
      isMainRpo: true
    },
    {
      id: 'pb-psk-amritsar',
      name: 'Passport Seva Kendra (PSK) Amritsar',
      type: 'PSK (Passport Seva Kendra)',
      region: 'Majha Region',
      state: 'Punjab',
      stateId: 'punjab',
      address: 'SCO 112, District Shopping Centre, Ranjit Avenue, B-Block, Amritsar, Punjab',
      pincode: '143001',
      phone: '1800-258-1800',
      timings: '09:00 AM - 05:30 PM (Mon-Fri)',
      landmark: 'Near Ranjit Avenue Market Complex',
      servicesOffered: ['Fresh Normal Passport', 'Tatkaal Passport', 'Renewal', 'PCC Application'],
      appointmentRequired: true
    },
    {
      id: 'pb-psk-ludhiana',
      name: 'Passport Seva Kendra (PSK) Ludhiana',
      type: 'PSK (Passport Seva Kendra)',
      region: 'Malwa Region',
      state: 'Punjab',
      stateId: 'punjab',
      address: 'Plot No. 1, Model Town Extension, Block-D, Near Krishna Mandir, Ludhiana, Punjab',
      pincode: '141002',
      phone: '1800-258-1800',
      timings: '09:00 AM - 05:30 PM (Mon-Fri)',
      landmark: 'Near Krishna Mandir Model Town Extn',
      servicesOffered: ['Fresh Passport', 'Tatkaal Passport', 'Renewal / Re-issue', 'PCC Issuance'],
      appointmentRequired: true
    },
    {
      id: 'pb-popsk-mohali',
      name: 'Post Office PSK (POPSK) SAS Nagar Mohali',
      type: 'POPSK (Post Office PSK)',
      region: 'Mohali & Kharar',
      state: 'Punjab',
      stateId: 'punjab',
      address: 'Head Post Office, Phase-1, Sector 55, SAS Nagar Mohali, Punjab',
      pincode: '160055',
      phone: '1800-258-1800',
      timings: '09:30 AM - 04:30 PM (Mon-Fri)',
      landmark: 'Near Phase-1 Market & Police Station',
      servicesOffered: ['Fresh Normal Passport', 'Renewal', 'Biometrics Verification'],
      appointmentRequired: true
    },
    {
      id: 'pb-popsk-patiala',
      name: 'Post Office PSK (POPSK) Patiala',
      type: 'POPSK (Post Office PSK)',
      region: 'Patiala District',
      state: 'Punjab',
      stateId: 'punjab',
      address: 'Head Post Office, Near Mall Road, Patiala, Punjab',
      pincode: '147001',
      phone: '1800-258-1800',
      timings: '09:30 AM - 04:30 PM (Mon-Fri)',
      landmark: 'Opposite Baradari Gardens, Mall Road',
      servicesOffered: ['Fresh Passport Application', 'Renewal', 'PCC Application'],
      appointmentRequired: true
    }
  ],
  'tamil-nadu': [
    {
      id: 'tn-rpo-chennai',
      name: 'Regional Passport Office (RPO) Chennai',
      type: 'RPO (Regional Passport Office)',
      region: 'Chennai Metropolitan Area',
      state: 'Tamil Nadu',
      stateId: 'tamil-nadu',
      address: 'Rayala Towers No. 785, 4th Floor, Anna Salai (Mount Road), Chennai, Tamil Nadu',
      pincode: '600002',
      phone: '044-28518848 / 1800-258-1800',
      timings: '09:00 AM - 04:30 PM (Mon-Fri)',
      landmark: 'Near Thousand Lights Metro Station & LIC Building',
      servicesOffered: ['Complex Inquiries & Hearings', 'Lost Passport Replacement', 'PCC Clarifications', 'Tatkaal Review'],
      appointmentRequired: true,
      isMainRpo: true
    },
    {
      id: 'tn-psk-saligramam',
      name: 'Passport Seva Kendra (PSK) Saligramam Chennai',
      type: 'PSK (Passport Seva Kendra)',
      region: 'West Chennai',
      state: 'Tamil Nadu',
      stateId: 'tamil-nadu',
      address: 'No. 1, Arcot Road, Near Vadapalani Murugan Temple, Saligramam, Chennai, Tamil Nadu',
      pincode: '600093',
      phone: '1800-258-1800',
      timings: '09:00 AM - 05:30 PM (Mon-Fri)',
      landmark: 'Near Vadapalani Metro Station & Prasad Studios',
      servicesOffered: ['Fresh Normal Passport', 'Tatkaal Passport', 'Renewal & Re-issue', 'PCC Application'],
      appointmentRequired: true
    },
    {
      id: 'tn-psk-tambaram',
      name: 'Passport Seva Kendra (PSK) Tambaram / Chromepet',
      type: 'PSK (Passport Seva Kendra)',
      region: 'South Chennai',
      state: 'Tamil Nadu',
      stateId: 'tamil-nadu',
      address: 'Clenera Towers, GST Road, Chromepet / Tambaram Sanatorium, Chennai, Tamil Nadu',
      pincode: '600044',
      phone: '1800-258-1800',
      timings: '09:00 AM - 05:30 PM (Mon-Fri)',
      landmark: 'Opposite Tambaram Sanatorium Railway Station & GST Road',
      servicesOffered: ['Fresh Passport', 'Tatkaal Passport', 'Renewal', 'PCC'],
      appointmentRequired: true
    },
    {
      id: 'tn-psk-coimbatore',
      name: 'Regional Passport Office (RPO) & PSK Coimbatore',
      type: 'PSK (Passport Seva Kendra)',
      region: 'Western Tamil Nadu',
      state: 'Tamil Nadu',
      stateId: 'tamil-nadu',
      address: 'First Floor, Corporation Commercial Complex, Avinashi Road, Peelamedu, Coimbatore',
      pincode: '641004',
      phone: '0422-2200888 / 1800-258-1800',
      timings: '09:00 AM - 05:30 PM (Mon-Fri)',
      landmark: 'Near PSG Tech & Peelamedu Airport Road',
      servicesOffered: ['Fresh Normal Passport', 'Tatkaal Processing', 'Re-issue / Renewal', 'PCC Application'],
      appointmentRequired: true,
      isMainRpo: true
    },
    {
      id: 'tn-psk-madurai',
      name: 'Regional Passport Office (RPO) & PSK Madurai',
      type: 'PSK (Passport Seva Kendra)',
      region: 'Southern Tamil Nadu',
      state: 'Tamil Nadu',
      stateId: 'tamil-nadu',
      address: 'Bharathi Ula Veethi, Race Course Road, Madurai, Tamil Nadu',
      pincode: '625002',
      phone: '0452-2530861 / 1800-258-1800',
      timings: '09:00 AM - 05:30 PM (Mon-Fri)',
      landmark: 'Near Madurai District Court & Race Course',
      servicesOffered: ['Fresh Normal Passport', 'Tatkaal Passport', 'Renewal', 'PCC'],
      appointmentRequired: true,
      isMainRpo: true
    }
  ],
  'karnataka': [
    {
      id: 'ka-rpo-bengaluru',
      name: 'Regional Passport Office (RPO) Bengaluru',
      type: 'RPO (Regional Passport Office)',
      region: 'Bengaluru Urban',
      state: 'Karnataka',
      stateId: 'karnataka',
      address: '8th Block, 80 Feet Road, Koramangala, Bengaluru, Karnataka',
      pincode: '560095',
      phone: '080-25706100 / 1800-258-1800',
      timings: '09:30 AM - 04:30 PM (Mon-Fri)',
      landmark: 'Near Koramangala Police Station & Sony World Junction',
      servicesOffered: ['Complex Inquiries & Hearings', 'Lost Passport Cases', 'PCC Clarifications', 'Tatkaal Review'],
      appointmentRequired: true,
      isMainRpo: true
    },
    {
      id: 'ka-psk-lalbagh',
      name: 'Passport Seva Kendra (PSK) Lalbagh Bengaluru',
      type: 'PSK (Passport Seva Kendra)',
      region: 'Central Bengaluru',
      state: 'Karnataka',
      stateId: 'karnataka',
      address: 'Prestige Sigma, 3, Vittal Mallya Road / Kasturba Road, Near Lalbagh West Gate, Bengaluru',
      pincode: '560001',
      phone: '1800-258-1800',
      timings: '09:00 AM - 05:30 PM (Mon-Fri)',
      landmark: 'Near UB City & Lalbagh Metro Station',
      servicesOffered: ['Fresh Normal Passport', 'Tatkaal Passport', 'Renewal & Re-issue', 'PCC Application'],
      appointmentRequired: true
    },
    {
      id: 'ka-psk-marathahalli',
      name: 'Passport Seva Kendra (PSK) Marathahalli / Bellandur',
      type: 'PSK (Passport Seva Kendra)',
      region: 'East Bengaluru',
      state: 'Karnataka',
      stateId: 'karnataka',
      address: 'Sai Arcade, Outer Ring Road, Devarabeesanahalli, Opp. Intel Campus, Marathahalli, Bengaluru',
      pincode: '560103',
      phone: '1800-258-1800',
      timings: '09:00 AM - 05:30 PM (Mon-Fri)',
      landmark: 'Opposite Intel & Ecospace Tech Park, Outer Ring Road',
      servicesOffered: ['Fresh Normal Passport', 'Tatkaal Processing', 'Renewal', 'PCC Application'],
      appointmentRequired: true
    },
    {
      id: 'ka-psk-mangaluru',
      name: 'Passport Seva Kendra (PSK) Mangaluru',
      type: 'PSK (Passport Seva Kendra)',
      region: 'Coastal Karnataka',
      state: 'Karnataka',
      stateId: 'karnataka',
      address: 'Navabharath Building, Kodialbail, Mangaluru, Karnataka',
      pincode: '575003',
      phone: '1800-258-1800',
      timings: '09:00 AM - 05:30 PM (Mon-Fri)',
      landmark: 'Near Navabharath Circle & PVS Junction',
      servicesOffered: ['Fresh Passport', 'Tatkaal Passport', 'Renewal', 'PCC'],
      appointmentRequired: true
    }
  ],
  'uttar-pradesh': [
    {
      id: 'up-rpo-lucknow',
      name: 'Regional Passport Office (RPO) Lucknow',
      type: 'RPO (Regional Passport Office)',
      region: 'Central & Eastern UP',
      state: 'Uttar Pradesh',
      stateId: 'uttar-pradesh',
      address: 'Vipin Khand, Gomti Nagar, Near Dr. Ram Manohar Lohia Hospital, Lucknow, Uttar Pradesh',
      pincode: '226010',
      phone: '0522-2305130 / 1800-258-1800',
      timings: '09:30 AM - 04:30 PM (Mon-Fri)',
      landmark: 'Near Lohia Hospital & Manoj Pandey Chauraha, Gomti Nagar',
      servicesOffered: ['Complex Inquiries & Appeals', 'Lost Passport Review', 'PCC Verification', 'Tatkaal Processing'],
      appointmentRequired: true,
      isMainRpo: true
    },
    {
      id: 'up-rpo-ghaziabad',
      name: 'Regional Passport Office (RPO) Ghaziabad & PSK',
      type: 'RPO (Regional Passport Office)',
      region: 'Western UP & NCR',
      state: 'Uttar Pradesh',
      stateId: 'uttar-pradesh',
      address: 'CGO Complex-I, Hapur Road, Kamla Nehru Nagar, Ghaziabad, Uttar Pradesh',
      pincode: '201002',
      phone: '0120-2713833 / 1800-258-1800',
      timings: '09:00 AM - 05:00 PM (Mon-Fri)',
      landmark: 'Near CBI Academy & ALT Centre, Hapur Road',
      servicesOffered: ['Western UP Full Jurisdiction', 'Fresh & Tatkaal Passport', 'PCC', 'Complex Cases'],
      appointmentRequired: true,
      isMainRpo: true
    },
    {
      id: 'up-psk-noida',
      name: 'Passport Seva Kendra (PSK) Noida Sector 62',
      type: 'PSK (Passport Seva Kendra)',
      region: 'Gautam Buddha Nagar / Noida',
      state: 'Uttar Pradesh',
      stateId: 'uttar-pradesh',
      address: 'Plot No. A-11, Ground Floor, Sector 62, Noida, Uttar Pradesh',
      pincode: '201309',
      phone: '1800-258-1800',
      timings: '09:00 AM - 05:30 PM (Mon-Fri)',
      landmark: 'Near Electronic City Metro Station & Fortis Hospital Noida',
      servicesOffered: ['Fresh Normal Passport', 'Tatkaal Passport', 'Renewal & Re-issue', 'PCC Application'],
      appointmentRequired: true
    },
    {
      id: 'up-psk-varanasi',
      name: 'Passport Seva Kendra (PSK) Varanasi',
      type: 'PSK (Passport Seva Kendra)',
      region: 'Purvanchal Region',
      state: 'Uttar Pradesh',
      stateId: 'uttar-pradesh',
      address: 'Varanasi Trade Centre, Maqbool Alam Road, Khajuri, Varanasi, Uttar Pradesh',
      pincode: '221002',
      phone: '1800-258-1800',
      timings: '09:00 AM - 05:30 PM (Mon-Fri)',
      landmark: 'Near Circuit House & Police Lines, Varanasi',
      servicesOffered: ['Fresh Passport', 'Tatkaal Passport', 'Renewal', 'PCC Application'],
      appointmentRequired: true
    }
  ],
  'haryana': [
    {
      id: 'hr-psk-gurugram',
      name: 'Passport Seva Kendra (PSK) Gurugram',
      type: 'PSK (Passport Seva Kendra)',
      region: 'Gurugram & South Haryana',
      state: 'Haryana',
      stateId: 'haryana',
      address: 'MM Towers, Plot No 8 & 9, Udyog Vihar Phase IV, Gurugram, Haryana',
      pincode: '122015',
      phone: '1800-258-1800',
      timings: '09:00 AM - 05:30 PM (Mon-Fri)',
      landmark: 'Near Maruti Suzuki Gate 2 & NH-48 Express Highway',
      servicesOffered: ['Fresh Passport', 'Tatkaal Passport', 'Re-issue / Renewal', 'PCC Application'],
      appointmentRequired: true
    },
    {
      id: 'hr-psk-ambala',
      name: 'Passport Seva Kendra (PSK) Ambala',
      type: 'PSK (Passport Seva Kendra)',
      region: 'North Haryana',
      state: 'Haryana',
      stateId: 'haryana',
      address: 'Old Judicial Complex, Court Road, Ambala City, Haryana',
      pincode: '134003',
      phone: '1800-258-1800',
      timings: '09:00 AM - 05:30 PM (Mon-Fri)',
      landmark: 'Near Session Courts & DC Office Ambala City',
      servicesOffered: ['Fresh Normal Passport', 'Tatkaal Processing', 'Renewal', 'PCC Application'],
      appointmentRequired: true
    },
    {
      id: 'hr-popsk-faridabad',
      name: 'Post Office PSK (POPSK) Faridabad',
      type: 'POPSK (Post Office PSK)',
      region: 'Faridabad District',
      state: 'Haryana',
      stateId: 'haryana',
      address: 'Faridabad Head Post Office, Neelam Bata Road, NIT Faridabad, Haryana',
      pincode: '121001',
      phone: '1800-258-1800',
      timings: '09:30 AM - 04:30 PM (Mon-Fri)',
      landmark: 'Near Neelam Flyover & BK Chowk, NIT Faridabad',
      servicesOffered: ['Fresh Passport Application', 'Renewal', 'Biometrics Verification'],
      appointmentRequired: true
    }
  ],
  'gujarat': [
    {
      id: 'gj-rpo-ahmedabad',
      name: 'Regional Passport Office (RPO) Ahmedabad',
      type: 'RPO (Regional Passport Office)',
      region: 'Ahmedabad & North Gujarat',
      state: 'Gujarat',
      stateId: 'gujarat',
      address: 'Gulbai Tekra, Opposite University Ground, Navrangpura, Ahmedabad, Gujarat',
      pincode: '380009',
      phone: '079-26309104 / 1800-258-1800',
      timings: '09:00 AM - 05:00 PM (Mon-Fri)',
      landmark: 'Near Gujarat University & L.D. Engineering College',
      servicesOffered: ['Complex Passport Cases', 'Lost Passport Appeals', 'PCC Processing', 'Tatkaal Review'],
      appointmentRequired: true,
      isMainRpo: true
    },
    {
      id: 'gj-psk-mithakhali',
      name: 'Passport Seva Kendra (PSK) Mithakhali Ahmedabad',
      type: 'PSK (Passport Seva Kendra)',
      region: 'Ahmedabad City',
      state: 'Gujarat',
      stateId: 'gujarat',
      address: 'Sheetal Varsha Arcade, Mithakhali Six Roads, Navrangpura, Ahmedabad, Gujarat',
      pincode: '380009',
      phone: '1800-258-1800',
      timings: '09:00 AM - 05:30 PM (Mon-Fri)',
      landmark: 'At Mithakhali Six Roads, Near Navrangpura Police Station',
      servicesOffered: ['Fresh Normal Passport', 'Tatkaal Passport', 'Renewal', 'PCC Application'],
      appointmentRequired: true
    },
    {
      id: 'gj-psk-surat',
      name: 'Regional Passport Office (RPO) & PSK Surat',
      type: 'PSK (Passport Seva Kendra)',
      region: 'South Gujarat',
      state: 'Gujarat',
      stateId: 'gujarat',
      address: 'Passport Bhavan, Umra, Opp. New Court Building, Surat, Gujarat',
      pincode: '395007',
      phone: '0261-2227030 / 1800-258-1800',
      timings: '09:00 AM - 05:30 PM (Mon-Fri)',
      landmark: 'Opposite New District Court, Umra, Surat',
      servicesOffered: ['Fresh Normal Passport', 'Tatkaal Passport', 'Renewal', 'PCC Application'],
      appointmentRequired: true,
      isMainRpo: true
    }
  ],
  'west-bengal': [
    {
      id: 'wb-rpo-kolkata',
      name: 'Regional Passport Office (RPO) Kolkata',
      type: 'RPO (Regional Passport Office)',
      region: 'Kolkata Metropolitan Area',
      state: 'West Bengal',
      stateId: 'west-bengal',
      address: '4, Brabourne Road, Opposite Tea Board, Kolkata, West Bengal',
      pincode: '700001',
      phone: '033-22254395 / 1800-258-1800',
      timings: '09:30 AM - 04:30 PM (Mon-Fri)',
      landmark: 'Near Tea Board & BBD Bagh Metro Station',
      servicesOffered: ['Complex Inquiries & Appeals', 'Lost Passport Clearance', 'PCC Verification', 'Diplomatic Enquiries'],
      appointmentRequired: true,
      isMainRpo: true
    },
    {
      id: 'wb-psk-anandapur',
      name: 'Passport Seva Kendra (PSK) Anandapur / Ruby Kolkata',
      type: 'PSK (Passport Seva Kendra)',
      region: 'South Kolkata & EM Bypass',
      state: 'West Bengal',
      stateId: 'west-bengal',
      address: 'Plot No. 781, Anandapur Main Road, Near Ruby Hospital, EM Bypass, Kolkata, West Bengal',
      pincode: '700107',
      phone: '1800-258-1800',
      timings: '09:00 AM - 05:30 PM (Mon-Fri)',
      landmark: 'Near Ruby General Hospital & Desun Hospital, EM Bypass',
      servicesOffered: ['Fresh Normal Passport', 'Tatkaal Passport', 'Renewal & Re-issue', 'PCC Application'],
      appointmentRequired: true
    }
  ],
  'bihar': [
    {
      id: 'br-rpo-patna',
      name: 'Regional Passport Office (RPO) Patna & PSK',
      type: 'RPO (Regional Passport Office)',
      region: 'Patna & Bihar State',
      state: 'Bihar',
      stateId: 'bihar',
      address: 'Maurya Lok Complex, Block D, Fraser Road, Dak Bunglow, Patna, Bihar',
      pincode: '800001',
      phone: '0612-2223238 / 1800-258-1800',
      timings: '09:00 AM - 05:00 PM (Mon-Fri)',
      landmark: 'Inside Maurya Lok Complex, Near Dak Bunglow Crossing',
      servicesOffered: ['Full State Jurisdiction', 'Fresh Normal Passport', 'Tatkaal Processing', 'PCC Application'],
      appointmentRequired: true,
      isMainRpo: true
    },
    {
      id: 'br-psk-ashiana',
      name: 'Passport Seva Kendra (PSK) Ashiana Digha Road Patna',
      type: 'PSK (Passport Seva Kendra)',
      region: 'West Patna',
      state: 'Bihar',
      stateId: 'bihar',
      address: 'Ashiana Tower, Ashiana Digha Main Road, Patna, Bihar',
      pincode: '800014',
      phone: '1800-258-1800',
      timings: '09:00 AM - 05:30 PM (Mon-Fri)',
      landmark: 'Near Ashiana Nagar Chauraha & Passport Bhawan',
      servicesOffered: ['Fresh Passport', 'Tatkaal Passport', 'Renewal', 'PCC'],
      appointmentRequired: true
    }
  ],
  'rajasthan': [
    {
      id: 'rj-rpo-jaipur',
      name: 'Regional Passport Office (RPO) Jaipur & PSK',
      type: 'RPO (Regional Passport Office)',
      region: 'Jaipur & Central Rajasthan',
      state: 'Rajasthan',
      stateId: 'rajasthan',
      address: 'J-14, Jhalana Institutional Area, Jhalana Doongri, Jaipur, Rajasthan',
      pincode: '302004',
      phone: '0141-2710188 / 1800-258-1800',
      timings: '09:00 AM - 05:00 PM (Mon-Fri)',
      landmark: 'Near Rajasthan High Court Bench & RTO Office Jaipur',
      servicesOffered: ['Full State Jurisdiction', 'Fresh Normal Passport', 'Tatkaal Passport', 'PCC Application'],
      appointmentRequired: true,
      isMainRpo: true
    },
    {
      id: 'rj-psk-jodhpur',
      name: 'Passport Seva Kendra (PSK) Jodhpur',
      type: 'PSK (Passport Seva Kendra)',
      region: 'Western Rajasthan',
      state: 'Rajasthan',
      stateId: 'rajasthan',
      address: 'Opposite New High Court Building, Jhalamand, Jodhpur, Rajasthan',
      pincode: '342005',
      phone: '1800-258-1800',
      timings: '09:00 AM - 05:30 PM (Mon-Fri)',
      landmark: 'Near New High Court Complex, Jhalamand Circle',
      servicesOffered: ['Fresh Normal Passport', 'Tatkaal Passport', 'Renewal', 'PCC Application'],
      appointmentRequired: true
    }
  ]
};

// Aliases for matching state codes / IDs
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

export const getPassportOfficesByState = (
  stateId: string = 'delhi',
  regionFilter: string = 'All Regions',
  searchQuery: string = '',
  typeFilter: string = 'All Types'
): PassportOfficeItem[] => {
  const normalizedKey = STATE_ALIAS_MAP[stateId.toLowerCase()] || 'delhi';
  const stateOffices = STATE_PASSPORT_OFFICES[normalizedKey] || STATE_PASSPORT_OFFICES['delhi'];

  return stateOffices.filter(office => {
    const q = searchQuery.toLowerCase().trim();
    const matchesQuery = 
      q === '' ||
      office.name.toLowerCase().includes(q) ||
      office.address.toLowerCase().includes(q) ||
      office.landmark.toLowerCase().includes(q) ||
      office.pincode.includes(q) ||
      office.servicesOffered.some(s => s.toLowerCase().includes(q));

    const matchesRegion = regionFilter === 'All Regions' || office.region.toLowerCase() === regionFilter.toLowerCase();
    const matchesType = typeFilter === 'All Types' || office.type === typeFilter;

    return matchesQuery && matchesRegion && matchesType;
  });
};

export const getPassportRegionsForState = (stateId: string = 'delhi'): string[] => {
  const normalizedKey = STATE_ALIAS_MAP[stateId.toLowerCase()] || 'delhi';
  const stateOffices = STATE_PASSPORT_OFFICES[normalizedKey] || STATE_PASSPORT_OFFICES['delhi'];
  return ['All Regions', ...Array.from(new Set(stateOffices.map(o => o.region))).filter(Boolean)];
};

export const MOCK_DELHI_PASSPORT_OFFICES = STATE_PASSPORT_OFFICES['delhi'];
export const DELHI_PASSPORT_REGIONS = ['All Regions', 'Central & New Delhi', 'North & West Delhi', 'South Delhi & Dwarka', 'East & North East Delhi', 'NCR (Noida / Gurgaon / Ghaziabad)'];

export const getMatchingPassportOffices = (
  region: string = 'All Regions',
  query: string = '',
  type: string = 'All Types'
): PassportOfficeItem[] => {
  return getPassportOfficesByState('delhi', region, query, type);
};
