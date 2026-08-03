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
  title = "SarkarSaathi.org | सभी सरकारी काम एक जगह, बिल्कुल फ्री - Delhi Govt Services & Schemes",
  description = "Official Delhi Government Services, Government Schemes, Delhi Lakshmi Yojana, Subsidies, Pensions, Calculators, Finders and step-by-step guides. 100% Free & Official links.",
  canonicalUrl = "https://sarkarsaathi.org/",
  ogImage = "https://sarkarsaathi.org/og-image.jpg",
  activeService,
  activeBlogPost,
  breadcrumbs = [{ name: 'Home', url: 'https://sarkarsaathi.org/' }]
}) => {
  const currentTitle = activeService
    ? `${activeService.title} - Official Details, Apply & Eligibility | SarkarSaathi`
    : activeBlogPost
    ? `${activeBlogPost.title} | SarkarSaathi.org`
    : title;

  const currentDesc = activeService
    ? `${activeService.shortDesc} Official link: ${activeService.officialGovUrl}. Learn eligibility, required documents, and step-by-step online application.`
    : activeBlogPost
    ? `${activeBlogPost.summary} Read complete step-by-step guide with official government sources.`
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
        "url": "https://sarkarsaathi.org",
        "logo": "https://sarkarsaathi.org/og-image.jpg",
        "description": "India's Government Assistance Platform - Official .gov.in links, Delhi services, and schemes."
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "SarkarSaathi.org",
        "url": "https://sarkarsaathi.org",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://sarkarsaathi.org/?search={search_term_string}",
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
