import React, { useState, useEffect } from 'react';
import { MockNewsRepository } from '../infrastructure/repositories/NewsRepository';
import { NewsRecord } from '../types/news';
import { SEOHead } from './SEOHead';
import { Newspaper, ShieldCheck, Info, ExternalLink, Calendar } from 'lucide-react';

interface NewsDetailProps {
  slug: string;
}

export const NewsDetail: React.FC<NewsDetailProps> = ({ slug }) => {
  const [news, setNews] = useState<NewsRecord | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      const repo = new MockNewsRepository();
      const n = await repo.getBySlug(slug);
      setNews(n);
      setLoading(false);
    };
    fetchNews();
  }, [slug]);

  if (loading) return <div className="text-white p-8">Loading...</div>;
  if (!news) return <div className="text-white p-8">News not found.</div>;

  return (
    <div className="py-12 px-4 max-w-4xl mx-auto text-zinc-100">
      <SEOHead activeNews={news} canonicalUrl={`https://www.sarkarsaathi.org/news/${news.slug}`} />
      <a href="/news" className="text-[#FF6B00] mb-4 inline-block hover:underline font-bold">&larr; Back to News</a>
      
      <h1 className="text-3xl md:text-4xl font-black mb-3 leading-tight">{news.title}</h1>
      <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-400 mb-8">
        <span className="bg-[#FF6B00]/20 text-[#FF6B00] px-3 py-1 rounded font-semibold text-xs uppercase">{news.category}</span>
        <span className="flex items-center gap-1"><Calendar size={14} /> Published: {news.publishedAt}</span>
        {news.updatedAt && <span>• Updated: {news.updatedAt}</span>}
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8 mb-8 text-zinc-300">
        <p className="text-xl font-medium text-white mb-6 leading-relaxed">{news.shortSummary}</p>
        <div className="prose prose-zinc prose-invert max-w-none text-zinc-300 leading-relaxed border-t border-zinc-800 pt-6">
          {news.content}
        </div>
      </div>

      {/* SarkarSaathi Editorial Guide: What This Update Means */}
      <div className="mb-8 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8 text-zinc-300">
        <div className="flex items-center gap-2 text-white font-bold text-lg mb-4">
          <Newspaper className="text-[#FF6B00]" size={22} />
          <span>What This Update Means (SarkarSaathi Summary & Context)</span>
        </div>
        
        <p className="text-sm leading-relaxed text-zinc-300 mb-6">
          This article summarizes recent governance decisions and public communications concerning <strong className="text-white">{news.category}</strong> policy, sourced from official releases by <strong className="text-white">{news.sourceAuthority}</strong>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-zinc-950/60 p-4 rounded-xl border border-zinc-800/80">
            <div className="flex items-center gap-2 font-semibold text-white mb-1.5">
              <Info size={16} className="text-[#FF6B00]" />
              <span>Policy & Implementation Context</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Public policy announcements and circulars may follow phased operational rollout dates. Readers should observe the effective dates stated in official notifications before modifying compliance or financial actions.
            </p>
          </div>

          <div className="bg-zinc-950/60 p-4 rounded-xl border border-zinc-800/80">
            <div className="flex items-center gap-2 font-semibold text-white mb-1.5">
              <ShieldCheck size={16} className="text-emerald-400" />
              <span>Official Gazette Verification</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Our reporting synthesizes official announcements for clarity. For legal citations, binding rules, or statutory circular text, always reference the primary gazette or ministry portal linked below.
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 bg-zinc-900 border border-zinc-700 rounded-2xl mb-8">
        <h3 className="font-bold text-lg text-white mb-4 flex items-center gap-2">
          <ShieldCheck className="text-[#FF6B00]" size={20} />
          Official Source & Verification
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-4">
          <div>
            <span className="text-zinc-500 text-xs block">Issuing Authority</span>
            <span className="font-semibold text-white">{news.sourceAuthority}</span>
          </div>
          <div>
            <span className="text-zinc-500 text-xs block">Verification Status</span>
            <span className="font-semibold text-white">{news.verificationStatus}</span>
          </div>
          <div>
            <span className="text-zinc-500 text-xs block">Last Verified</span>
            <span className="font-semibold text-white">{news.lastVerifiedAt}</span>
          </div>
        </div>
        <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
          Original press communications and ministry notifications are accessible via the publishing agency.
        </p>
        <a 
          href={news.sourceUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center gap-2 text-white bg-[#FF6B00] px-6 py-3 rounded-xl font-bold hover:bg-[#e66000] transition text-sm"
        >
          View Official Source <ExternalLink size={16} />
        </a>
      </div>

      <div className="p-4 bg-zinc-800/50 rounded-xl text-xs text-zinc-400 leading-relaxed">
        <p>SarkarSaathi.org is an independent informational platform and is not affiliated with or operated by any government authority. Information provided is for educational purposes based on official public sources.</p>
      </div>
    </div>
  );
};
