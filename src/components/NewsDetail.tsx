import React, { useState, useEffect } from 'react';
import { MockNewsRepository } from '../infrastructure/repositories/NewsRepository';
import { NewsRecord } from '../types/news';
import { SEOHead } from './SEOHead';

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
      <a href="/news" className="text-[#FF6B00] mb-4 inline-block hover:underline">&larr; Back to News</a>
      
      <h1 className="text-4xl font-black mb-2">{news.title}</h1>
      <p className="text-zinc-400 mb-8">{news.category} • Published: {news.publishedAt}</p>

      <div className="prose prose-zinc prose-invert mb-8">
        <p className="text-xl text-zinc-300">{news.shortSummary}</p>
        <div className="mt-4">{news.content}</div>
      </div>

      <div className="p-6 bg-zinc-900 border border-zinc-700 rounded-lg">
        <h3 className="font-bold mb-4">Official Source & Verification</h3>
        <p className="text-sm text-zinc-400 mb-2">Authority: {news.sourceAuthority}</p>
        <p className="text-sm text-zinc-400 mb-2">Verification: {news.verificationStatus}</p>
        <p className="text-sm text-zinc-400 mb-4">Last Verified: {news.lastVerifiedAt}</p>
        <a href={news.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-[#FF6B00] hover:underline">
            Visit Official Source &rarr;
        </a>
      </div>

      <div className="mt-8 p-4 bg-zinc-800/50 rounded text-xs text-zinc-500">
        <p>SarkarSaathi.org is an independent informational platform and is not affiliated with or operated by any government authority. Information provided is for educational purposes based on official sources.</p>
      </div>
    </div>
  );
};
