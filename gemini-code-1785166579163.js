export const LIFE_EVENTS = [
  {
    id: 'baby-born',
    slug: 'baby-born',
    title: 'Baby Born (Child Birth)',
    icon: 'Baby',
    description: 'Complete checklist for birth registration, Aadhaar, immunization, and child welfare schemes.',
    requiredServices: [
      { name: 'Birth Certificate Registration (MCD)', link: '/delhi/service/birth-certificate-delhi' },
      { name: 'Baal Aadhaar Card Application', link: '/delhi/service/baal-aadhaar' },
      { name: 'Pradhan Mantri Matru Vandana Yojana (PMMVY)', link: '/delhi/service/pmmvy-scheme' }
    ],
    requiredDocuments: [
      'Hospital Discharge Summary / Birth Slip',
      'Parents Aadhaar Cards',
      'Parents Marriage Certificate',
      'Address Proof in Delhi'
    ],
    fees: '₹0 (Within 21 days of birth)',
    timeline: '0 to 21 Days post-birth for free registration',
    officialLinks: [
      { title: 'Delhi MCD Birth Portal', url: 'https://mcdonline.nic.in' }
    ]
  },
  {
    id: 'buying-house',
    slug: 'buying-house',
    title: 'Buying a House / Property',
    icon: 'Home',
    description: 'Registry, Stamp Duty calculation, Property Tax mutation, and DJB connection transfer.',
    requiredServices: [
      { name: 'Property Registration & e-Stamping', link: '/delhi/service/property-registration' },
      { name: 'Property Tax Mutation (MCD)', link: '/delhi/service/property-mutation' },
      { name: 'Delhi Jal Board New Water Connection', link: '/delhi/service/djb-new-connection' }
    ],
    requiredDocuments: ['Sale Deed', 'Identity Proof', 'PAN Card', 'NOC from Builder/RWA'],
    fees: '6% Stamp Duty (Men), 4% (Women) + 1% Registration Fee',
    timeline: '1 - 7 Days',
    officialLinks: [
      { title: 'Stock Holding e-Stamping Delhi', url: 'https://www.shcilestamp.com' },
      { title: 'Delhi Revenue Department Registry Booking', url: 'https://srf.delhi.gov.in' }
    ]
  }
];