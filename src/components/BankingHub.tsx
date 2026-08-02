import React, { useState } from 'react';
import { 
  Landmark, 
  Search, 
  ExternalLink, 
  CheckCircle2, 
  ShieldCheck, 
  CreditCard, 
  Percent, 
  HelpCircle, 
  PhoneCall, 
  Sparkles,
  Building2,
  DollarSign
} from 'lucide-react';
import { BANKING_PRODUCTS, MAJOR_BANKS } from '../data/bankingData';
import { BankProduct } from '../types';
import { IfscFinder } from './IfscFinder';
import { GovtInsuranceFinder } from './GovtInsuranceFinder';

export const BankingHub: React.FC = () => {
  const [selectedProductCategory, setSelectedProductCategory] = useState<string>('all');
  const [selectedBankId, setSelectedBankId] = useState<string>('all');
  const [searchBankQuery, setSearchBankQuery] = useState<string>('');

  const productCategoryTabs = [
    { id: 'all', label: 'All Banking Services' },
    { id: 'insurance', label: '🛡️ Govt Insurance Companies (PSUs)' },
    { id: 'ifsc', label: '🔍 IFSC Code Finder' },
    { id: 'saving', label: 'Savings Account' },
    { id: 'current', label: 'Current Account' },
    { id: 'zero-balance', label: 'Zero Balance' },
    { id: 'ppf-nps', label: 'PPF & NPS' },
    { id: 'sukanya', label: 'Sukanya Samriddhi' }
  ];

  const filteredProducts = BANKING_PRODUCTS.filter(p => {
    const matchesCat = selectedProductCategory === 'all' || p.category === selectedProductCategory;
    const matchesQuery = searchBankQuery === '' || 
      p.title.toLowerCase().includes(searchBankQuery.toLowerCase()) || 
      p.hindiTitle.includes(searchBankQuery);
    return matchesCat && matchesQuery;
  });

  const filteredBanks = MAJOR_BANKS.filter(b => 
    searchBankQuery === '' || 
    b.name.toLowerCase().includes(searchBankQuery.toLowerCase()) || 
    b.shortName.toLowerCase().includes(searchBankQuery.toLowerCase())
  );

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto bg-[#0B0F17] text-zinc-100">
      {/* Title Header */}
      <div className="mb-8 border-b border-zinc-800 pb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/80 text-blue-400 border border-blue-800/60 text-xs font-bold uppercase mb-2">
          <Landmark className="w-3.5 h-3.5" /> India Banking Hub
        </div>
        <h2 className="text-3xl font-black text-white">Banking Services & Account Directory</h2>
        <p className="text-sm text-zinc-400 mt-1 max-w-2xl">
          Complete comparison of 21 major Indian banks, minimum balance requirements, charges, eligibility, and official bank portals.
        </p>
      </div>

      {/* Category Tabs & Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div className="flex flex-wrap gap-1.5 bg-[#121824] p-1.5 rounded-xl border border-zinc-800">
          {productCategoryTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedProductCategory(tab.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                selectedProductCategory === tab.id 
                  ? 'bg-[#FF6B00] text-white shadow-md' 
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Bank Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchBankQuery}
            onChange={(e) => setSearchBankQuery(e.target.value)}
            placeholder="Search SBI, HDFC, ICICI, Charges..."
            className="w-full bg-[#121824] border border-zinc-800 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#FF6B00]"
          />
        </div>
      </div>

      {/* Products Breakdown Cards or IFSC Finder or Insurance Finder */}
      {selectedProductCategory === 'insurance' ? (
        <div className="mb-12">
          <GovtInsuranceFinder />
        </div>
      ) : selectedProductCategory === 'ifsc' ? (
        <div className="mb-12">
          <IfscFinder />
        </div>
      ) : (
        <div className="space-y-6 mb-12">
          {filteredProducts.map((prod) => (
          <div key={prod.id} className="p-6 rounded-2xl bg-[#121824] border border-zinc-800 space-y-6 shadow-xl">
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-zinc-800 pb-4">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <span>{prod.title}</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-blue-950 text-blue-400 border border-blue-800 font-semibold">
                    {prod.hindiTitle}
                  </span>
                </h3>
              </div>
              <a
                href={prod.officialApplyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#E65100] text-white text-xs font-bold shadow-lg hover:brightness-110 transition flex items-center gap-1.5"
              >
                <span>Official Bank Apply</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Grid Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                <span className="text-zinc-500 font-bold block mb-1">Minimum Balance</span>
                <span className="text-zinc-200 font-semibold">{prod.minBalance}</span>
              </div>
              <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                <span className="text-zinc-500 font-bold block mb-1">Charges & Fees</span>
                <span className="text-zinc-200 font-semibold">{prod.charges}</span>
              </div>
              <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                <span className="text-zinc-500 font-bold block mb-1">Processing Time</span>
                <span className="text-zinc-200 font-semibold">{prod.processingTime}</span>
              </div>
              <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                <span className="text-zinc-500 font-bold block mb-1">Safety & Guarantee</span>
                <span className="text-emerald-400 font-semibold">RBI / DICGC Insured up to ₹5 Lakhs</span>
              </div>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              <div>
                <h4 className="font-bold text-zinc-400 uppercase tracking-wider mb-2">Eligibility Criteria</h4>
                <ul className="space-y-1.5 text-zinc-300">
                  {prod.eligibility.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-zinc-400 uppercase tracking-wider mb-2">Required KYC Documents</h4>
                <ul className="space-y-1.5 text-zinc-300">
                  {prod.documentsRequired.map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#FF6B00] font-bold">•</span>
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Key Benefits */}
            <div>
              <h4 className="font-bold text-zinc-400 uppercase tracking-wider mb-2">Key Account Features & Benefits</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {prod.benefits.map((b, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-zinc-900/80 border border-zinc-800/80 text-zinc-200 flex items-start gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            {prod.faqs && prod.faqs.length > 0 && (
              <div className="pt-3 border-t border-zinc-800/80">
                <h4 className="font-bold text-zinc-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                  <HelpCircle className="w-3.5 h-3.5 text-[#FF6B00]" /> FAQs & Important Rules
                </h4>
                <div className="space-y-2">
                  {prod.faqs.map((faq, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                      <p className="font-bold text-zinc-200">Q: {faq.question}</p>
                      <p className="text-zinc-400 mt-1">A: {faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      )}

      {/* 21 Major Banks Official Portal Directory Grid */}
      <div className="pt-8 border-t border-zinc-800">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <span className="text-xs font-bold text-[#FF6B00] uppercase tracking-wider">Official Bank Portal Router</span>
            <h3 className="text-2xl font-black text-white mt-1">21 Major Public & Private Indian Banks</h3>
          </div>
          <p className="text-xs text-zinc-400 max-w-md">
            Direct official net banking portals and 24x7 customer care helplines.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredBanks.map((bank) => (
            <div key={bank.id} className="p-4 rounded-xl bg-[#121824] border border-zinc-800 hover:border-zinc-700 transition space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center font-black text-xs text-[#FF6B00]">
                    {bank.logoText}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{bank.name}</h4>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400 font-semibold">
                      {bank.type} Sector Bank
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-1 text-xs text-zinc-400 border-t border-zinc-800/80 pt-2">
                <p className="flex items-center justify-between">
                  <span>Helpline:</span>
                  <span className="text-white font-mono font-bold">{bank.customerCare}</span>
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={bank.officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-center text-xs font-semibold text-zinc-300 transition flex items-center justify-center gap-1"
                >
                  <span>Website</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
                <a
                  href={bank.netBankingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1.5 rounded-lg bg-[#FF6B00]/15 hover:bg-[#FF6B00]/25 text-[#FF6B00] border border-[#FF6B00]/30 text-center text-xs font-bold transition flex items-center justify-center gap-1"
                >
                  <span>NetBanking</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
