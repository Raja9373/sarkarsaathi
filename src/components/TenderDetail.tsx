import React, { useState, useEffect } from 'react';
import { MockTenderRepository } from '../infrastructure/repositories/TenderRepository';
import { TenderRecord } from '../types/tender';
import { SEOHead } from './SEOHead';

interface TenderDetailProps {
  slug: string;
}

export const TenderDetail: React.FC<TenderDetailProps> = ({ slug }) => {
  const [tender, setTender] = useState<TenderRecord | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTender = async () => {
      setLoading(true);
      const repo = new MockTenderRepository();
      const t = await repo.getBySlug(slug);
      setTender(t);
      setLoading(false);
    };
    fetchTender();
  }, [slug]);

  if (loading) return <div className="text-white p-8">Loading...</div>;
  if (!tender) return <div className="text-white p-8">Tender not found.</div>;

  return (
    <div className="py-12 px-4 max-w-4xl mx-auto text-zinc-100">
      <SEOHead activeTender={tender} canonicalUrl={`https://www.sarkarsaathi.org/tenders/${tender.slug}`} />
      <a href="/tenders" className="text-[#FF6B00] mb-4 inline-block hover:underline">&larr; Back to Tenders</a>
      
      <h1 className="text-4xl font-black mb-2">{tender.title}</h1>
      <p className="text-zinc-400 mb-8">{tender.tenderCategory} • Status: {tender.status} • Deadline: {tender.submissionDeadline}</p>

      <div className="prose prose-zinc prose-invert mb-8">
        <p className="text-xl text-zinc-300">{tender.description}</p>
        <div className="mt-4">
          <h3 className="font-semibold text-white">Reference Number:</h3>
          <p>{tender.tenderReferenceNumber}</p>
          <h3 className="font-semibold text-white mt-4">Issuing Authority:</h3>
          <p>{tender.issuingAuthority}, {tender.organisation}</p>
        </div>
      </div>

      <div className="p-6 bg-zinc-900 border border-zinc-700 rounded-lg">
        <h3 className="font-bold mb-4">Official Source & Verification</h3>
        <p className="text-sm text-zinc-400 mb-2">Authority: {tender.sourceAuthority}</p>
        <p className="text-sm text-zinc-400 mb-2">Verification: {tender.verificationStatus}</p>
        <p className="text-sm text-zinc-400 mb-4">Last Verified: {tender.lastVerifiedAt}</p>
        <a href={tender.officialSourceUrl} target="_blank" rel="noopener noreferrer" className="text-[#FF6B00] hover:underline">
            Visit Official Source &rarr;
        </a>
      </div>

      <div className="mt-8 p-4 bg-zinc-800/50 rounded text-xs text-zinc-500">
        <p>SarkarSaathi.org is an independent informational platform and is not affiliated with or operated by any government authority. Information provided is for educational purposes based on official sources.</p>
      </div>
    </div>
  );
};
