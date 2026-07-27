import React from 'react';
import { Helmet } from 'react-helmet-async';

export const SchemaOrg = ({ type, data, title, description, canonicalUrl }) => {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": type || "WebPage",
    "name": title || "SarkarSaathi.org - Free Government Services Assistant",
    "description": description || "All Indian Government Services, Official Links, and Guides in One Place.",
    "url": canonicalUrl || "https://sarkarsaathi.org",
    "publisher": {
      "@type": "Organization",
      "name": "SarkarSaathi",
      "url": "https://sarkarsaathi.org",
      "logo": "https://sarkarsaathi.org/logo.png"
    }
  };

  let specificSchema = null;

  if (type === 'FAQPage' && data) {
    specificSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": data.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
  }

  if (type === 'GovernmentService' && data) {
    specificSchema = {
      "@context": "https://schema.org",
      "@type": "GovernmentService",
      "name": data.title,
      "serviceType": data.category,
      "provider": {
        "@type": "GovernmentOrganization",
        "name": "Delhi Government / Official Authorities"
      },
      "areaServed": "Delhi, India",
      "url": data.officialApplyLink
    };
  }

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* Structural Schema JSON-LD */}
      <script type="application/ld+json">{JSON.stringify(baseSchema)}</script>
      {specificSchema && (
        <script type="application/ld+json">{JSON.stringify(specificSchema)}</script>
      )}
    </Helmet>
  );
};