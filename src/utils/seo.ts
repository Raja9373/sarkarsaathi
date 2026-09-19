import { useEffect } from 'react';

const PRODUCTION_DOMAIN = 'https://sarkarsaathi.org';

export const updateSEO = ({
  title,
  description,
  canonicalPath, // Use path instead of full URL to enforce production domain
  openGraph,
}: {
  title: string;
  description: string;
  canonicalPath: string; // The path relative to the root, e.g., '/investments/slug'
  openGraph?: {
    title?: string;
    description?: string;
    url?: string;
    type?: string;
  };
}) => {
  document.title = title;

  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute('content', description);

  const canonicalUrl = `${PRODUCTION_DOMAIN}${canonicalPath}`;

  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', canonicalUrl);

  // Open Graph
  if (openGraph) {
    const ogTags = [
      { property: 'og:title', content: openGraph.title || title },
      { property: 'og:description', content: openGraph.description || description },
      { property: 'og:url', content: openGraph.url || canonicalUrl },
      { property: 'og:type', content: openGraph.type || 'website' }
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
  }
};

export const useSEO = ({
  title,
  description,
  canonicalPath,
  openGraph,
}: {
  title: string;
  description: string;
  canonicalPath: string;
  openGraph?: {
    title?: string;
    description?: string;
    url?: string;
    type?: string;
  };
}) => {
  useEffect(() => {
    updateSEO({ title, description, canonicalPath, openGraph });
  }, [title, description, canonicalPath, openGraph]);
};
