import React, { useState } from 'react';
import { X, FileCode, Copy, Check, Download, ExternalLink, Globe } from 'lucide-react';
import { ServiceItem, BlogPost } from '../types';

interface SitemapModalProps {
  isOpen: boolean;
  onClose: () => void;
  allServices: ServiceItem[];
  allBlogPosts: BlogPost[];
}

export const SitemapModal: React.FC<SitemapModalProps> = ({
  isOpen,
  onClose,
  allServices,
  allBlogPosts
}) => {
  const [activeView, setActiveView] = useState<'sitemap' | 'robots'>('sitemap');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const baseUrl = 'https://sarkarsaathi.org';

  // Generate XML Sitemap String
  const generateXmlSitemap = () => {
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    // Static primary pages
    const staticPages = [
      '',
      '/services',
      '/schemes',
      '/delhi-govt',
      '/banking',
      '/finders',
      '/calculators',
      '/downloads',
      '/blog',
      '/legal'
    ];

    staticPages.forEach(p => {
      xml += `  <url>\n    <loc>${baseUrl}${p}</loc>\n    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>0.9</priority>\n  </url>\n`;
    });

    // Dynamic Service & Scheme URLs
    allServices.forEach(s => {
      xml += `  <url>\n    <loc>${baseUrl}/service/${s.id}</loc>\n    <lastmod>${s.lastUpdated || '2026-08-01'}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
    });

    // Dynamic Blog URLs
    allBlogPosts.forEach(b => {
      xml += `  <url>\n    <loc>${baseUrl}/blog/${b.slug}</loc>\n    <lastmod>${b.publishedDate || '2026-08-01'}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`;
    });

    xml += `</urlset>`;
    return xml;
  };

  const generateRobotsTxt = () => {
    return `User-agent: *\nAllow: /\n\nSitemap: https://sarkarsaathi.org/sitemap.xml`;
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
              <h3 className="text-xl font-bold text-white">SEO Infrastructure Generator</h3>
              <p className="text-xs text-zinc-400">Google Search Essentials Compliant XML Sitemap & robots.txt</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-zinc-800 text-zinc-400 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center justify-between gap-2 bg-[#0B0F17] p-1.5 rounded-2xl border border-zinc-800">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveView('sitemap')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                activeView === 'sitemap'
                  ? 'bg-[#FF6B00] text-white shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              sitemap.xml ({allServices.length + allBlogPosts.length + 10} URLs)
            </button>
            <button
              onClick={() => setActiveView('robots')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                activeView === 'robots'
                  ? 'bg-[#FF6B00] text-white shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              robots.txt
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold transition flex items-center gap-1.5"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
            <button
              onClick={handleDownload}
              className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download File</span>
            </button>
          </div>
        </div>

        {/* Code View Canvas */}
        <div className="flex-1 overflow-auto bg-[#070A0F] p-4 rounded-2xl border border-zinc-800 text-xs font-mono text-emerald-400 max-h-[50vh]">
          <pre className="whitespace-pre-wrap break-all leading-relaxed">{currentContent}</pre>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between text-xs text-zinc-400 pt-2 border-t border-zinc-800">
          <span>✔ Auto-generated from active database</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-zinc-800 text-zinc-300 font-semibold hover:bg-zinc-700 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
