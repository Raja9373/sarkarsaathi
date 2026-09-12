import React, { useState, useEffect } from 'react';
import { MockInvestmentSchemeRepository } from '../infrastructure/repositories/InvestmentSchemeRepository';
import { GovernmentInvestmentSchemeRecord } from '../types/investmentScheme';
import { ExternalLink, ShieldCheck, CheckCircle, Info, Calendar, FileText, HelpCircle, Briefcase } from 'lucide-react';
import { RelatedContent } from './RelatedContent';
import { globalSearch, SearchResult } from '../lib/globalSearch';

interface InvestmentSchemeDetailProps {
  slug: string;
}

export const InvestmentSchemeDetail: React.FC<InvestmentSchemeDetailProps> = ({ slug }) => {
  const [scheme, setScheme] = useState<GovernmentInvestmentSchemeRecord | null>(null);
  const [allData, setAllData] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const repo = new MockInvestmentSchemeRepository();
      const s = await repo.getBySlug(slug);
      setScheme(s);
      setAllData(await globalSearch(' '));
      setLoading(false);
    };
    fetchData();
  }, [slug]);

  if (loading) return <div className="p-8 text-center dark:text-zinc-300">Loading scheme details...</div>;
  if (!scheme) return <div className="p-8 text-center dark:text-zinc-300">Scheme not found.</div>;

  return (
    <div className="py-12 px-4 max-w-5xl mx-auto dark:text-zinc-200 text-zinc-900">
      <a href="/investment-schemes" className="text-[#FF6B00] mb-6 inline-block hover:underline font-bold">&larr; Back to Schemes Hub</a>
      
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-3xl mb-8 shadow-sm">
        <div className="flex flex-wrap gap-3 mb-4">
            <span className="bg-[#FF6B00]/10 text-[#FF6B00] px-3 py-1 rounded-full text-xs font-bold uppercase">{scheme.category}</span>
            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${scheme.status === 'ACTIVE' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200' : 'bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200'}`}>{scheme.status}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-black mb-4 leading-tight text-zinc-900 dark:text-white">{scheme.schemeName}</h1>
        <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-8">{scheme.shortDescription}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-6">
            <div className="p-4 bg-zinc-50 dark:bg-[#0B0F17] rounded-xl border border-zinc-200 dark:border-zinc-800">
                <div className="text-zinc-600 dark:text-zinc-400 text-xs">Implementing Agency</div>
                <div className="font-bold text-zinc-900 dark:text-white">{scheme.implementingAgency}</div>
            </div>
            <div className="p-4 bg-zinc-50 dark:bg-[#0B0F17] rounded-xl border border-zinc-200 dark:border-zinc-800">
                <div className="text-zinc-600 dark:text-zinc-400 text-xs">Verification Status</div>
                <div className="font-bold text-zinc-900 dark:text-white">{scheme.verificationStatus}</div>
            </div>
            <div className="p-4 bg-zinc-50 dark:bg-[#0B0F17] rounded-xl border border-zinc-200 dark:border-zinc-800">
                <div className="text-zinc-600 dark:text-zinc-400 text-xs">Last Verified</div>
                <div className="font-bold text-zinc-900 dark:text-white">{scheme.lastVerifiedAt}</div>
            </div>
        </div>
      </div>

      <div className="prose prose-zinc dark:prose-invert max-w-none mb-12 text-zinc-800 dark:text-zinc-300">
          {scheme.statusNote && (
            <div className="p-4 bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 rounded-r-xl mb-8">
              <h4 className="font-bold text-amber-900 dark:text-amber-100 flex items-center gap-2"><Info size={18}/> Status Note</h4>
              <p className="text-amber-900 dark:text-amber-200 mt-1">{scheme.statusNote}</p>
            </div>
          )}

          <h2 className="text-2xl font-bold mb-4 text-zinc-100 dark:text-white">What is this scheme?</h2>
          <p className="text-zinc-700 dark:text-zinc-300">{scheme.detailedDescription}</p>

          {scheme.keyBenefits && (
            <>
              <h2 className="text-2xl font-bold mb-4 text-zinc-100 dark:text-white">Key Benefits</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
                  {scheme.keyBenefits.map((b, i) => <li key={i} className="flex gap-2 bg-zinc-100 dark:bg-zinc-800 p-4 rounded-xl text-zinc-900 dark:text-zinc-100"><CheckCircle className="text-[#FF6B00] flex-shrink-0" size={20} /> {b}</li>)}
              </ul>
            </>
          )}

          {(scheme.benefitAmount || scheme.subsidy || scheme.incentive) && (
            <>
              <h2 className="text-2xl font-bold mb-4 text-zinc-100 dark:text-white">Financial & Benefit Details</h2>
              <div className="bg-zinc-100 dark:bg-zinc-800 p-6 rounded-2xl text-zinc-800 dark:text-zinc-200">
                {scheme.benefitAmount && <p><strong>Benefit Amount:</strong> {scheme.benefitAmount}</p>}
                {scheme.subsidy && <p><strong>Subsidy:</strong> {scheme.subsidy}</p>}
                {scheme.incentive && <p><strong>Incentive:</strong> {scheme.incentive}</p>}
                {scheme.benefitType && <p><strong>Benefit Type:</strong> {scheme.benefitType}</p>}
              </div>
            </>
          )}

          <h2 className="text-2xl font-bold mb-4 text-zinc-100 dark:text-white">Who can apply?</h2>
          <p className="text-zinc-700 dark:text-zinc-300"><strong>Beneficiary Type:</strong> {scheme.targetBeneficiary}</p>
          <p className="text-zinc-700 dark:text-zinc-300">{scheme.eligibility}</p>
          
          <h2 className="text-2xl font-bold mb-4 text-zinc-100 dark:text-white">Documents Required</h2>
          <p className="text-zinc-700 dark:text-zinc-300">{scheme.documentsRequired}</p>
          
          <h2 className="text-2xl font-bold mb-4 text-zinc-100 dark:text-white">How to apply?</h2>
          <p className="text-zinc-700 dark:text-zinc-300">{scheme.applicationProcess}</p>

          {scheme.faqItems && scheme.faqItems.length > 0 && (
            <>
              <h2 className="text-2xl font-bold mb-4 mt-8 text-zinc-100 dark:text-white">FAQs</h2>
              {scheme.faqItems.map((faq, i) => (
                <div key={i} className="mb-4">
                  <h4 className="font-bold flex items-start gap-2 text-zinc-100 dark:text-white"><HelpCircle size={20} className="text-[#FF6B00] flex-shrink-0 mt-1"/> {faq.question}</h4>
                  <p className="text-zinc-700 dark:text-zinc-300 mt-2">{faq.answer}</p>
                </div>
              ))}
            </>
          )}
      </div>
      
      {scheme.relatedInvestmentProductIds && (
          <RelatedContent 
            relatedIds={scheme.relatedInvestmentProductIds}
            allResults={allData}
            onNavigate={(type, slug) => window.location.href = `/${type.toLowerCase()}s/${slug}`}
          />
      )}

      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-3xl mt-12 shadow-sm">
        <h3 className="font-bold text-xl mb-6 flex items-center gap-2"><ShieldCheck className="text-[#FF6B00]" /> Official Source</h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">Information on SarkarSaathi is provided for informational purposes. Always confirm the latest eligibility, benefits, application requirements and deadlines on the official government source before applying.</p>
        
        <div className="flex gap-4">
            <a href={scheme.officialSourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white bg-[#FF6B00] px-8 py-4 rounded-xl font-bold hover:bg-[#e66000] transition">
                {scheme.applicationUrl ? 'Apply / Visit Official Portal' : 'Visit Official Source'} <ExternalLink size={18} />
            </a>
        </div>
      </div>
    </div>
  );
};
