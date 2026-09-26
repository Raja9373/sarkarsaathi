import { useEffect } from 'react';

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
  };
  noIndex?: boolean;
}

export const normalizeCanonicalUrl = (path?: string): string => {
  if (!path || path === '/' || path === '') {
    return `${PRODUCTION_DOMAIN}/`;
  }
  // Remove leading and trailing slashes, then rebuild clean path
  const cleanPath = path.replace(/^\/+|\/+$/g, '');
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

  // Robots meta (for 404 or private pages)
  let metaRobots = document.querySelector('meta[name="robots"]');
  if (noIndex) {
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute('content', 'noindex, nofollow');
  } else if (metaRobots) {
    metaRobots.setAttribute('content', 'index, follow');
  }

  // Canonical Link
  let canonical = document.querySelector('link[rel="canonical"]');
  if (noIndex) {
    // If noindex, we can keep or remove canonical tag
    if (canonical) {
      canonical.remove();
    }
  } else {
    const canonicalUrl = normalizeCanonicalUrl(canonicalPath);
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // Open Graph
    const ogTags = [
      { property: 'og:site_name', content: 'SarkarSaathi' },
      { property: 'og:title', content: openGraph?.title || title },
      { property: 'og:description', content: openGraph?.description || description },
      { property: 'og:url', content: openGraph?.url || canonicalUrl },
      { property: 'og:type', content: openGraph?.type || 'website' },
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
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: openGraph?.title || title },
      { name: 'twitter:description', content: openGraph?.description || description },
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
  }
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
