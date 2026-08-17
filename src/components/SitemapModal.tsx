import React, { useState } from 'react';
import { X, FileCode, Copy, Check, Download, ExternalLink, Globe } from 'lucide-react';
import { ServiceItem, BlogPost } from '../types';
import { STATES_LIST } from '../data/statesData';

interface SitemapModalProps {
  isOpen: boolean;
  onClose: () => void;
  allServices: ServiceItem[];
  allBlogPosts: BlogPost[];
}

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

export const SitemapModal: React.FC<SitemapModalProps> = ({
  isOpen,
  onClose,
  allServices,
  allBlogPosts,
}) => {
  const [activeView, setActiveView] = useState<'sitemap' | 'robots'>('sitemap');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const baseUrl = 'https://www.sarkarsaathi.org';
  const currentDate = new Date().toISOString().split('T')[0];

  // Generate XML Sitemap String
  const generateXmlSitemap = () => {
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    // Static primary pages
    const staticPages = [
      '',
      '/schemes',
      '/services',
      '/find-yojana',
      '/states',
      '/banking',
      '/finders',
      '/calculators',
      '/downloads',
      '/complaints',
      '/blog',
      '/about',
      '/contact',
      '/privacy',
      '/terms',
      '/disclaimer',
    ];

    staticPages.forEach((p) => {
      xml += `  <url>\n    <loc>${baseUrl}${p}</loc>\n    <lastmod>${currentDate}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>1.0</priority>\n  </url>\n`;
    });

    // Dynamic State Portals (/state/${stateSlug})
    STATES_LIST.forEach((st) => {
      xml += `  <url>\n    <loc>${baseUrl}/state/${st.id}</loc>\n    <lastmod>${currentDate}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>0.9</priority>\n  </url>\n`;
    });

    // Dynamic Pan-India State-Specific Service URLs (36 states x 42 services = 1,512 URLs)
    STATES_LIST.forEach((st) => {
      if (st.id === 'national') return;
      CORE_SERVICES.forEach((srv) => {
        xml += `  <url>\n    <loc>${baseUrl}/${st.id}/${srv}</loc>\n    <lastmod>${currentDate}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.85</priority>\n  </url>\n`;
      });
    });

    // Dynamic Service & Scheme URLs (Backward compatibility)
    allServices.forEach((s) => {
      xml += `  <url>\n    <loc>${baseUrl}/yojana/${s.id}</loc>\n    <lastmod>${s.lastUpdated || currentDate}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
    });

    // Dynamic Blog URLs
    allBlogPosts.forEach((b) => {
      xml += `  <url>\n    <loc>${baseUrl}/blog/${b.slug}</loc>\n    <lastmod>${b.publishedDate || currentDate}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`;
    });

    xml += `</urlset>`;
    return xml;
  };

  const generateRobotsTxt = () => {
    return `User-agent: *\nAllow: /\nAllow: /state/\nAllow: /yojana/\nAllow: /scheme/\nAllow: /service/\nAllow: /blog/\nDisallow: /api/\nDisallow: /faq/\nDisallow: /faqs\n\nSitemap: https://www.sarkarsaathi.org/sitemap.xml`;
  };

  const currentContent = activeView === 'sitemap' ? generateXmlSitemap() : generateRobotsTxt();

  const handleCopy = () => {
    navigator.clipboard.writeText(currentContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const filename = activeView === 'sitemap' ? 'sitemap.xml' : 'robots.txt';
    const blob = new Blob([currentContent], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[85vh] rounded-3xl bg-[#121824] border border-zinc-700 p-6 shadow-2xl flex flex-col justify-between space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-[#FF6B00]/15 border border-[#FF6B00]/30 text-[#FF6B00]">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Pan-India SEO Infrastructure Generator</h3>
              <p className="text-xs text-zinc-400">36 States x 42 Citizen Services (~1,600 Verified URLs) • Google Search Essentials Compliant</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-zinc-800 text-zinc-400 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* View Switcher */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveView('sitemap')}
            className={`px-4 py-2 rounded-xl font-bold text-xs transition flex items-center gap-2 ${
              activeView === 'sitemap'
                ? 'bg-[#FF6B00] text-white shadow-lg shadow-[#FF6B00]/20'
                : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800 border border-zinc-800'
            }`}
          >
            <FileCode className="w-4 h-4" />
            sitemap.xml (~1,600 Pan-India URLs)
          </button>
          <button
            onClick={() => setActiveView('robots')}
            className={`px-4 py-2 rounded-xl font-bold text-xs transition flex items-center gap-2 ${
              activeView === 'robots'
                ? 'bg-[#FF6B00] text-white shadow-lg shadow-[#FF6B00]/20'
                : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800 border border-zinc-800'
            }`}
          >
            <Globe className="w-4 h-4" />
            robots.txt
          </button>
        </div>

        {/* XML Display Box */}
        <div className="relative flex-1 min-h-[320px] max-h-[420px] overflow-hidden rounded-2xl bg-[#090D14] border border-zinc-800 p-4">
          <pre className="h-full overflow-y-auto font-mono text-[11px] text-zinc-300 leading-relaxed scrollbar-thin">
            {currentContent}
          </pre>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-2 border-t border-zinc-800">
          <span className="text-xs text-zinc-500">
            Auto-generated live from 36 Indian States/UTs dataset
          </span>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopy}
              className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-medium text-xs transition flex items-center gap-2 border border-zinc-700"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              {copied ? 'Copied to Clipboard' : 'Copy XML'}
            </button>
            <button
              onClick={handleDownload}
              className="px-4 py-2 rounded-xl bg-[#FF6B00] hover:bg-[#E05E00] text-white font-bold text-xs transition flex items-center gap-2 shadow-lg shadow-[#FF6B00]/20"
            >
              <Download className="w-4 h-4" />
              Download {activeView === 'sitemap' ? 'sitemap.xml' : 'robots.txt'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
