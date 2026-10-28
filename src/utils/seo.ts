import { useEffect } from 'react';
import { VerifiedQuestionItem } from '../types/question';

const PRODUCTION_DOMAIN = 'https://sarkarsaathi.org';

export interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  openGraph?: {
    title?: string;
    description?: string;
    url?: string;
    type?: string;
    image?: string;
  };
  noIndex?: boolean;
}

export const normalizeCanonicalUrl = (path?: string): string => {
  const targetPath = path || (typeof window !== 'undefined' ? window.location.pathname : '/');
  if (!targetPath || targetPath === '/' || targetPath === '') {
    return `${PRODUCTION_DOMAIN}/`;
  }
  // Strip query parameters and hash, remove leading/trailing slashes, and ensure lowercase
  const cleanPath = targetPath.split('?')[0].split('#')[0].replace(/^\/+|\/+$/g, '').toLowerCase();
  if (!cleanPath) {
    return `${PRODUCTION_DOMAIN}/`;
  }
  return `${PRODUCTION_DOMAIN}/${cleanPath}`;
};

export const updateSEO = ({
  title,
  description,
  canonicalPath,
  openGraph,
  noIndex = false,
}: SEOProps) => {
  // Title
  document.title = title;

  // Meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute('content', description);

  // Robots meta (explicitly set index, follow or noindex, follow on every route transition)
  let metaRobots = document.querySelector('meta[name="robots"]');
  if (!metaRobots) {
    metaRobots = document.createElement('meta');
    metaRobots.setAttribute('name', 'robots');
    document.head.appendChild(metaRobots);
  }
  if (noIndex === true) {
    metaRobots.setAttribute('content', 'noindex, follow');
  } else {
    metaRobots.setAttribute('content', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
  }

  // Canonical Link
  let canonical = document.querySelector('link[rel="canonical"]');
  const canonicalUrl = normalizeCanonicalUrl(canonicalPath);
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', canonicalUrl);

  const defaultOgImage = `${PRODUCTION_DOMAIN}/india-gate.jpg`;
  const resolvedOgImage = openGraph?.image || defaultOgImage;

  // Open Graph
  const ogTags = [
    { property: 'og:site_name', content: 'SarkarSaathi' },
    { property: 'og:title', content: openGraph?.title || title },
    { property: 'og:description', content: openGraph?.description || description },
    { property: 'og:url', content: openGraph?.url || canonicalUrl },
    { property: 'og:type', content: openGraph?.type || 'website' },
    { property: 'og:image', content: resolvedOgImage },
  ];
  ogTags.forEach(tag => {
    let meta = document.querySelector(`meta[property="${tag.property}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('property', tag.property);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', tag.content);
  });

  // Twitter Card
  const twitterTags = [
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: openGraph?.title || title },
    { name: 'twitter:description', content: openGraph?.description || description },
    { name: 'twitter:image', content: resolvedOgImage },
  ];
  twitterTags.forEach(tag => {
    let meta = document.querySelector(`meta[name="${tag.name}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', tag.name);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', tag.content);
  });
};

export const useSEO = ({
  title,
  description,
  canonicalPath,
  openGraph,
  noIndex,
}: SEOProps) => {
  useEffect(() => {
    updateSEO({ title, description, canonicalPath, openGraph, noIndex });
  }, [title, description, canonicalPath, openGraph, noIndex]);
};

/**
 * Dynamically manages a single <script type="application/ld+json"> tag in the document head.
 * Checks for an existing tag by ID or unique attribute to ensure updates replace rather than duplicate content.
 */
export const injectStructuredData = (id: string, data: Record<string, any>): void => {
  if (typeof document === 'undefined') return;

  let script = document.getElementById(id) as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(data);
};

/**
 * Helper function to inject FAQPage JSON-LD schema into the document head when rendering QuestionDetailView,
 * ensuring the schema is dynamically updated/replaced on route changes to prevent duplicate script tags.
 */
export const injectFAQPageSchema = (
  question: VerifiedQuestionItem,
  relatedQuestions: VerifiedQuestionItem[],
  activeLang: 'en' | 'hi' | 'hinglish',
  categoryHubUrl: string
): void => {
  const scriptId = 'question-webpage-jsonld';

  const currentDetailedAnswer = activeLang === 'hi' && question.translations?.hi?.detailed_answer
    ? question.translations.hi.detailed_answer
    : activeLang === 'hinglish' && question.translations?.hinglish?.detailed_answer
    ? question.translations.hinglish.detailed_answer
    : question.detailed_answer;

  const currentShortAnswer = activeLang === 'hi' && question.translations?.hi?.short_answer
    ? question.translations.hi.short_answer
    : activeLang === 'hinglish' && question.translations?.hinglish?.short_answer
    ? question.translations.hinglish.short_answer
    : question.short_answer;

  const faqEntities = [
    {
      '@type': 'Question',
      'name': question.canonical_question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': currentDetailedAnswer || currentShortAnswer
      }
    },
    ...relatedQuestions.map(rel => ({
      '@type': 'Question',
      'name': rel.canonical_question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': rel.short_answer
      }
    }))
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': ['WebPage', 'FAQPage'],
    '@id': `https://sarkarsaathi.org/questions/${question.slug}#webpage`,
    'url': `https://sarkarsaathi.org/questions/${question.slug}`,
    'name': question.canonical_question,
    'description': question.short_answer,
    'isPartOf': {
      '@type': 'WebSite',
      '@id': 'https://sarkarsaathi.org/#website',
      'name': 'SarkarSaathi',
      'url': 'https://sarkarsaathi.org/'
    },
    'inLanguage': activeLang === 'hi' ? 'hi-IN' : activeLang === 'hinglish' ? 'en-IN' : 'en-IN',
    'dateModified': question.verified_at,
    'mainEntity': faqEntities,
    'breadcrumb': {
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': 'https://sarkarsaathi.org/'
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Questions',
          'item': 'https://sarkarsaathi.org/questions'
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': question.category,
          'item': `https://sarkarsaathi.org${categoryHubUrl}`
        },
        {
          '@type': 'ListItem',
          'position': 4,
          'name': question.canonical_question,
          'item': `https://sarkarsaathi.org/questions/${question.slug}`
        }
      ]
    }
  };

  injectStructuredData(scriptId, structuredData);
};

export interface BreadcrumbListItem {
  '@type': 'ListItem';
  position: number;
  name: string;
  item: string;
}

export interface BreadcrumbListSchema {
  '@context': 'https://schema.org';
  '@type': 'BreadcrumbList';
  itemListElement: BreadcrumbListItem[];
}

/**
 * Builds standard BreadcrumbList structured data for investment detail pages.
 * Hierarchy:
 * Position 1: Home (https://sarkarsaathi.org/)
 * Position 2: Hub category (Sovereign Investments or Government Investment Schemes)
 * Position 3: Investment Title (itemTitle) at absolute canonical URL
 */
export const getInvestmentBreadcrumbSchema = (
  type: 'investments' | 'investment-schemes',
  itemTitle: string,
  slug: string
): BreadcrumbListSchema => {
  const hubName = type === 'investments' ? 'Sovereign Investments' : 'Government Investment Schemes';
  const hubPath = type === 'investments' ? '/investments' : '/investment-schemes';
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${PRODUCTION_DOMAIN}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: hubName,
        item: `${PRODUCTION_DOMAIN}${hubPath}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: itemTitle,
        item: `${PRODUCTION_DOMAIN}${hubPath}/${slug}`,
      },
    ],
  };
};

export interface QuestionFaqEntity {
  '@type': 'Question';
  name: string;
  acceptedAnswer: {
    '@type': 'Answer';
    text: string;
  };
}

export interface QuestionFaqSchema {
  '@context': 'https://schema.org';
  '@type': 'FAQPage';
  mainEntity: QuestionFaqEntity[];
}

/**
 * Builds standard FAQPage structured data for a question detail page.
 */
export const getQuestionFaqSchema = (question: VerifiedQuestionItem): QuestionFaqSchema => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: question.canonical_question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: question.detailed_answer || question.short_answer,
        },
      },
    ],
  };
};

/**
 * Dynamically injects JSON-LD FAQ schema for question detail pages into document.head,
 * ensuring unique script tags are managed by ID to avoid duplicate schema tags.
 * Returns a cleanup function to remove the script tag when unmounted.
 */
export const injectQuestionFaqSchema = (
  question: VerifiedQuestionItem,
  scriptId: string = 'question-faq-jsonld'
): (() => void) => {
  if (typeof document === 'undefined') return () => {};

  const structuredData = getQuestionFaqSchema(question);
  injectStructuredData(scriptId, structuredData);

  return () => {
    if (typeof document !== 'undefined') {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    }
  };
};

// Compatibility aliases
export const injectQuestionFAQSchema = injectQuestionFaqSchema;
export const getQuestionFAQSchema = getQuestionFaqSchema;

/**
 * Builds Schema.org GovernmentService structured data for Subsidies & Benefits.
 * Recognized by Google to generate rich scheme cards with eligibility and provider details in search results.
 */
export const getGovernmentServiceSchema = (item: any): Record<string, any> => {
  const slug = item.slug || item.id;
  const canonicalUrl = `${PRODUCTION_DOMAIN}/subsidies/${slug}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'GovernmentService',
    '@id': `${canonicalUrl}#service`,
    name: item.title,
    serviceType: item.category || 'Government Subsidy',
    description: item.description || item.shortDescription || item.title,
    provider: {
      '@type': 'GovernmentOrganization',
      name: item.ministry || item.authority || item.sourceAuthority || 'Government of India',
      url: item.applicationUrl || item.sourceUrl || canonicalUrl
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: item.state || 'India'
    },
    audience: {
      '@type': 'Audience',
      audienceType: item.beneficiaryType || 'Citizens of India'
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
      description: item.benefits || item.subsidyAmount || item.benefitType || 'Government Financial Assistance'
    },
    url: canonicalUrl,
    isAccessibleForFree: true
  };
};

/**
 * Dynamically injects GovernmentService JSON-LD schema for subsidy detail pages.
 */
export const injectGovernmentServiceSchema = (
  item: any,
  scriptId: string = 'subsidy-service-jsonld'
): (() => void) => {
  if (typeof document === 'undefined') return () => {};

  const structuredData = getGovernmentServiceSchema(item);
  injectStructuredData(scriptId, structuredData);

  return () => {
    if (typeof document !== 'undefined') {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    }
  };
};


