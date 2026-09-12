import React, { useEffect } from 'react';
import { ServiceItem, BlogPost } from '../types';
import { Investment } from '../types/investment';
import { NewsRecord } from '../types/news';
import { TenderRecord } from '../types/tender';
import { OpportunityRecord } from '../types/opportunity';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  activeService?: ServiceItem | null;
  activeBlogPost?: BlogPost | null;
  activeInvestment?: Investment | null;
  activeNews?: NewsRecord | null;
  activeTender?: TenderRecord | null;
  activeOpportunity?: OpportunityRecord | null;
  breadcrumbs?: { name: string; url: string }[];
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title = "SarkarSaathi.org — Government Investments, Tenders & Opportunities | Independent Platform",
  description = "SarkarSaathi.org is an independent information platform for government investments, tenders, opportunities, and official updates. Verified information from official sources.",
  canonicalUrl = "https://www.sarkarsaathi.org/",
  ogImage = "https://www.sarkarsaathi.org/og-image.jpg",
  activeService,
  activeBlogPost,
  activeInvestment,
  activeNews,
  activeTender,
  activeOpportunity,
  breadcrumbs = [{ name: 'Home', url: 'https://www.sarkarsaathi.org/' }]
}) => {
  const currentTitle = activeOpportunity
    ? `${activeOpportunity.title} - Government Opportunity | SarkarSaathi`
    : activeTender
    ? `${activeTender.title} - Government Tender | SarkarSaathi`
    : activeNews
    ? `${activeNews.title} - Government Update | SarkarSaathi`
    : activeInvestment
    ? `${activeInvestment.name} - Investment Details, Eligibility & Official Sources | SarkarSaathi`
    : activeService
    ? `${activeService.title} - Government Scheme Details | SarkarSaathi`
    : activeBlogPost
    ? `${activeBlogPost.title} | SarkarSaathi.org`
    : title;

  const currentDesc = activeOpportunity
    ? `${activeOpportunity.description} Authority: ${activeOpportunity.authority}.`
    : activeTender
    ? `${activeTender.description} Issuing Authority: ${activeTender.issuingAuthority}. Deadline: ${activeTender.submissionDeadline}.`
    : activeNews
    ? `${activeNews.shortSummary} Official authority: ${activeNews.sourceAuthority}.`
    : activeInvestment
    ? `${activeInvestment.plainLanguageSummary || activeInvestment.description || 'Verified investment details.'} Official authority: ${activeInvestment.authority}. Learn eligibility, and application.`
    : activeService
    ? `${activeService.shortDesc} Official portal: ${activeService.officialGovUrl}. Learn eligibility, documents, and application.`
    : activeBlogPost
    ? `${activeBlogPost.summary} Verified official information.`
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
        "description": "Independent information platform for Indian government investments, tenders, and opportunities."
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

    if (activeInvestment) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "FinancialProduct",
        "name": activeInvestment.name,
        "description": activeInvestment.plainLanguageSummary || activeInvestment.description,
        "provider": {
          "@type": "Organization",
          "name": activeInvestment.authority
        },
        "url": activeInvestment.officialInformationUrl
      });
    }

    if (activeTender) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "GovernmentPermit",
        "name": activeTender.title,
        "description": activeTender.description,
        "provider": {
          "@type": "GovernmentOrganization",
          "name": activeTender.issuingAuthority
        }
      });
    }

    if (activeOpportunity) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "GovernmentService",
        "name": activeOpportunity.title,
        "description": activeOpportunity.description,
        "provider": {
          "@type": "GovernmentOrganization",
          "name": activeOpportunity.authority
        }
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
