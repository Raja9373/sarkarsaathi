import { SERVICES_LIST } from '../data/servicesData';
import { BLOG_POSTS } from '../data/blogData';
import { STATES_LIST } from '../data/statesData';

export interface SitemapEntry {
  url: string;
  lastModified?: string | Date;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

// 42 Standard Core Citizen Services across all 36 States & UTs
const CORE_SERVICES = [
  'passport-seva',
  'driving-licence',
  'ration-card',
  'domicile-certificate',
  'income-certificate',
  'caste-certificate',
  'birth-certificate',
  'death-certificate',
  'marriage-certificate',
  'property-tax',
  'water-bill-connection',
  'electricity-bill-connection',
  'trade-licence',
  'police-clearance-certificate',
  'senior-citizen-card',
  'disability-certificate',
  'e-shram-card',
  'ayushman-bharat-card',
  'pm-kisan-samman',
  'pm-awas-yojana',
  'sukanya-samriddhi',
  'epfo-pf-withdrawal',
  'aadhaar-enrolment',
  'aadhaar-update',
  'pan-card-apply',
  'voter-id-card',
  'land-records-mutation',
  'vehicle-rc-transfer',
  'high-security-number-plate',
  'food-licence-fssai',
  'udyam-msme-registration',
  'old-age-pension',
  'widow-pension',
  'divyang-pension',
  'crop-insurance-pmfby',
  'mudra-loan',
  'jan-dhan-account',
  'esewa-citizen-services',
  'edistrict-services',
  'land-jamabandi-records',
  'employment-exchange-registration',
  'arms-licence-portal',
];

export default function sitemap(): SitemapEntry[] {
  const baseUrl = 'https://www.sarkarsaathi.org';
  const currentDate = new Date().toISOString().split('T')[0];

  // 1. Core Primary Pages
  const coreRoutes: SitemapEntry[] = [
    { url: `${baseUrl}/`, lastModified: currentDate, changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/schemes`, lastModified: currentDate, changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/services`, lastModified: currentDate, changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/find-yojana`, lastModified: currentDate, changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/states`, lastModified: currentDate, changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/banking`, lastModified: currentDate, changeFrequency: 'daily', priority: 0.8 },
    { url: `${baseUrl}/finders`, lastModified: currentDate, changeFrequency: 'daily', priority: 0.8 },
    { url: `${baseUrl}/calculators`, lastModified: currentDate, changeFrequency: 'daily', priority: 0.8 },
    { url: `${baseUrl}/downloads`, lastModified: currentDate, changeFrequency: 'daily', priority: 0.8 },
    { url: `${baseUrl}/complaints`, lastModified: currentDate, changeFrequency: 'daily', priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: currentDate, changeFrequency: 'daily', priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/contact`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/privacy`, lastModified: currentDate, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/terms`, lastModified: currentDate, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${baseUrl}/disclaimer`, lastModified: currentDate, changeFrequency: 'yearly', priority: 0.4 },
  ];

  // 2. State Portals (/state/${state.id})
  const stateRoutes: SitemapEntry[] = STATES_LIST.map((state) => ({
    url: `${baseUrl}/state/${state.id}`,
    lastModified: currentDate,
    changeFrequency: 'daily',
    priority: 0.9,
  }));

  // 3. Pan-India State-Specific Service Routes (36 states x 42 services = 1,512 URLs)
  const stateServiceRoutes: SitemapEntry[] = [];
  for (const state of STATES_LIST) {
    if (state.id === 'national') continue;
    for (const srv of CORE_SERVICES) {
      stateServiceRoutes.push({
        url: `${baseUrl}/${state.id}/${srv}`,
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.85,
      });
    }
  }

  // 4. Main Official Government Schemes & Yojana Pages (Backward compatibility)
  const yojanaRoutes: SitemapEntry[] = SERVICES_LIST.map((service) => ({
    url: `${baseUrl}/yojana/${service.id}`,
    lastModified: service.lastUpdated || currentDate,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const serviceRoutes: SitemapEntry[] = SERVICES_LIST.map((service) => ({
    url: `${baseUrl}/service/${service.id}`,
    lastModified: service.lastUpdated || currentDate,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // 5. Blog Guides
  const blogRoutes: SitemapEntry[] = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.publishedDate || currentDate,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [
    ...coreRoutes,
    ...stateRoutes,
    ...stateServiceRoutes,
    ...yojanaRoutes,
    ...serviceRoutes,
    ...blogRoutes,
  ];
}
