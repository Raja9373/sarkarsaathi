import { SERVICES_LIST } from '../data/servicesData';
import { BLOG_POSTS } from '../data/blogData';
import { STATES_LIST } from '../data/statesData';

export interface SitemapEntry {
  url: string;
  lastModified?: string | Date;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

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
    { url: `${baseUrl}/delhi-govt`, lastModified: currentDate, changeFrequency: 'daily', priority: 0.8 },
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

  // 2. Main Official Government Schemes & Yojana Pages (No spam FAQ loop)
  const yojanaRoutes: SitemapEntry[] = SERVICES_LIST.map((service) => ({
    url: `${baseUrl}/yojana/${service.id}`,
    lastModified: service.lastUpdated || currentDate,
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  const serviceRoutes: SitemapEntry[] = SERVICES_LIST.map((service) => ({
    url: `${baseUrl}/service/${service.id}`,
    lastModified: service.lastUpdated || currentDate,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // 3. Blog Guides
  const blogRoutes: SitemapEntry[] = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.publishedDate || currentDate,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // 4. State Portals
  const stateRoutes: SitemapEntry[] = STATES_LIST.map((state) => ({
    url: `${baseUrl}/state/${state.id}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  // Return only verified high-quality pages
  return [
    ...coreRoutes,
    ...yojanaRoutes,
    ...serviceRoutes,
    ...blogRoutes,
    ...stateRoutes,
  ];
}
