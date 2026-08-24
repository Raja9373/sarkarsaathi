import React, { useEffect } from 'react';
import { ServiceItem, BlogPost } from '../types';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  activeService?: ServiceItem | null;
  activeBlogPost?: BlogPost | null;
  breadcrumbs?: { name: string; url: string }[];
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title = "SarkarSaathi.org — Independent Citizen Guidance Portal | Indian Govt Services & Schemes",
  description = "Independent Indian citizen assistance portal providing verified procedural guides, eligibility checklists, direct official .gov.in links, finders, and calculators.",
  canonicalUrl = "https://www.sarkarsaathi.org/",
  ogImage = "https://www.sarkarsaathi.org/og-image.jpg",
  activeService,
  activeBlogPost,
  breadcrumbs = [{ name: 'Home', url: 'https://www.sarkarsaathi.org/' }]
}) => {
  const currentTitle = activeService
    ? `${activeService.title} - Official Details, Apply & Eligibility | SarkarSaathi`
    : activeBlogPost
    ? `${activeBlogPost.title} | SarkarSaathi.org`
    : title;

  const currentDesc = activeService
    ? `${activeService.shortDesc} Official portal: ${activeService.officialGovUrl}. Learn eligibility, required documents, and step-by-step application.`
    : activeBlogPost
    ? `${activeBlogPost.summary} Read complete step-by-step guide with verified official government sources.`
    : description;

  useEffect(() => {
    document.title = currentTitle;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', currentDesc);

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // Update OG Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', currentTitle);

    // Update OG Description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', currentDesc);

    // Inject JSON-LD Structured Data
    const existingScript = document.getElementById('sarkarsaathi-schema-jsonld');
    if (existingScript) existingScript.remove();

    const schemas: any[] = [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "SarkarSaathi.org",
        "url": "https://www.sarkarsaathi.org",
        "logo": "https://www.sarkarsaathi.org/og-image.jpg",
        "description": "Independent Citizen Guidance Platform for Indian Government Services, Schemes, and official .gov.in links."
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "SarkarSaathi.org",
        "url": "https://www.sarkarsaathi.org",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.sarkarsaathi.org/?search={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ];

    if (breadcrumbs && breadcrumbs.length > 0) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((b, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": b.name,
          "item": b.url
        }))
      });
    }

    if (activeService) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "GovernmentService",
        "name": activeService.title,
        "alternateName": activeService.hindiTitle,
        "serviceType": activeService.category,
        "provider": {
          "@type": "GovernmentOrganization",
          "name": activeService.department
        },
        "url": activeService.officialGovUrl,
        "description": activeService.overview,
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "INR"
        }
      });

      if (activeService.faqs && activeService.faqs.length > 0) {
        schemas.push({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": activeService.faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        });
      }
    }

    if (activeBlogPost) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": activeBlogPost.title,
        "description": activeBlogPost.summary,
        "author": {
          "@type": "Organization",
          "name": activeBlogPost.author
        },
        "publisher": {
          "@type": "Organization",
          "name": "SarkarSaathi.org",
          "logo": {
            "@type": "ImageObject",
            "url": "https://sarkarsaathi.org/og-image.jpg"
          }
        },
        "datePublished": activeBlogPost.publishedDate
      });
    }

    const script = document.createElement('script');
    script.id = 'sarkarsaathi-schema-jsonld';
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(schemas);
    document.head.appendChild(script);

  }, [currentTitle, currentDesc, activeService, activeBlogPost, breadcrumbs]);

  return null;
};
