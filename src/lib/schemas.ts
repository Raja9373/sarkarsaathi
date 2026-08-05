// Schema.org JSON-LD Generators for SarkarSaathi.org FAQ system

export interface SchemaFAQ {
  question: string;
  answer: string;
  officialSource?: string;
}

export function generateFAQSchema(question: string, answer: string, officialSource?: string) {
  // Strip HTML tags for clean schema text if needed, or keep clean formatted text
  const cleanAnswer = answer.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": cleanAnswer + (officialSource ? ` Official Portal Source: ${officialSource}` : '')
        }
      }
    ]
  };
}

export function generateBreadcrumbSchema(slug: string, category: string, question: string) {
  const baseUrl = "https://sarkarsaathi.org";
  
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "1000+ FAQs Hub",
        "item": `${baseUrl}/faqs`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": category,
        "item": `${baseUrl}/faqs?cat=${encodeURIComponent(category)}`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": question,
        "item": `${baseUrl}/faq/${slug}`
      }
    ]
  };
}

export function generateArticleSchema(
  question: string,
  answer: string,
  updatedDate: string = "2026-05-13",
  slug?: string
) {
  const baseUrl = "https://sarkarsaathi.org";
  const cleanAnswer = answer.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 200);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": question,
    "description": cleanAnswer,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": slug ? `${baseUrl}/faq/${slug}` : `${baseUrl}/faqs`
    },
    "image": `${baseUrl}/og-image.jpg`,
    "datePublished": "2026-01-01",
    "dateModified": updatedDate,
    "author": {
      "@type": "Organization",
      "name": "SarkarSaathi Team",
      "url": baseUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": "SarkarSaathi.org",
      "url": baseUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo.png`
      }
    }
  };
}
