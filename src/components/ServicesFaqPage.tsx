import React, { useState, useMemo, useEffect } from 'react';
import { 
  Search, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Copy, 
  Check, 
  Share2, 
  Languages, 
  Sparkles, 
  BookOpen, 
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Filter,
  CheckCircle2,
  FileText,
  ArrowRight
} from 'lucide-react';
import allFaqsData from '../data/faqs';
import { FaqDetailPage } from './FaqDetailPage';

export interface FaqItem {
  id: number;
  slug: string;
  category: string;
  categorySlug?: string;
  question: string;
  q?: string;
  q_en?: string;
  answer: string;
  a?: string;
  a_en?: string;
  answer_en?: string;
  keywords?: string[];
  updatedDate?: string;
  updated?: string;
  officialSource?: string;
}

const CATEGORIES = [
  'All',
  'Parivahan & RTO',
  'Aadhaar, PAN & Voter ID',
  'Ration Card, E-Shram & Labour',
  'Certificates - Jati, Niwas & Aay',
  'PF, ESI, Pension & Samagra',
  'Police, FIR, RTI & Legal',
  'Bijli, Pani & Property',
  'Rozgar, Scholarship & Skill',
  'Business & License Services',
  'Helpline, Status & CSC'
];

interface ServicesFaqPageProps {
  initialSlug?: string;
  onSelectServiceSlug?: (slug: string) => void;
}

export const ServicesFaqPage: React.FC<ServicesFaqPageProps> = ({ initialSlug }) => {
  const [selectedFaqSlug, setSelectedFaqSlug] = useState<string | null>(initialSlug || null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [lang, setLang] = useState<'hi' | 'en'>('hi');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [expandedIds, setExpandedIds] = useState<Record<number, boolean>>({});
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const ITEMS_PER_PAGE = 20;

  // Check URL Hash on load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash && hash.startsWith('#faq/')) {
      const slugFromHash = hash.replace('#faq/', '');
      if (slugFromHash) setSelectedFaqSlug(slugFromHash);
    }
  }, []);

  // Category Counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: allFaqsData.length };
    (allFaqsData as unknown as FaqItem[]).forEach((faq) => {
      const catName = faq.category || (faq as any).cat || 'General';
      counts[catName] = (counts[catName] || 0) + 1;
    });
    return counts;
  }, []);

  // Filtered FAQs
  const filteredFaqs = useMemo(() => {
    return (allFaqsData as unknown as FaqItem[]).filter((faq) => {
      const catName = faq.category || (faq as any).cat || 'General';
      const matchesCat = selectedCategory === 'All' || catName === selectedCategory;
      const queryLower = searchQuery.toLowerCase().trim();
      if (!queryLower) return matchesCat;

      const qText = lang === 'hi' ? (faq.question || faq.q || '') : (faq.q_en || faq.question || '');
      const aText = lang === 'hi' ? (faq.answer || faq.a || '') : (faq.a_en || faq.answer || '');

      const matchesSearch = 
        qText.toLowerCase().includes(queryLower) ||
        aText.toLowerCase().includes(queryLower) ||
        catName.toLowerCase().includes(queryLower) ||
        faq.slug.toLowerCase().includes(queryLower);

      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery, lang]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredFaqs.length / ITEMS_PER_PAGE) || 1;
  const paginatedFaqs = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredFaqs.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredFaqs, currentPage]);

  // Reset to page 1 on filter/search change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  // Toggle single item
  const toggleExpand = (id: number) => {
    setExpandedIds(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Expand / Collapse All on current page
  const handleToggleExpandAll = (expand: boolean) => {
    const newExpanded: Record<number, boolean> = {};
    paginatedFaqs.forEach(faq => {
      newExpanded[faq.id] = expand;
    });
    setExpandedIds(newExpanded);
  };

  // Copy FAQ to Clipboard
  const handleCopy = (faq: FaqItem) => {
    const qText = lang === 'hi' ? (faq.question || faq.q || '') : (faq.q_en || faq.question || '');
    const textToCopy = `Q: ${qText}\n\nDirect URL: https://sarkarsaathi.org/faq/${faq.slug}`;

    navigator.clipboard.writeText(textToCopy);
    setCopiedId(faq.id);
    showToast('Question Link copied to clipboard!');
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Share FAQ
  const handleShare = (faq: FaqItem) => {
    const qText = lang === 'hi' ? (faq.question || faq.q || '') : (faq.q_en || faq.question || '');
    const shareUrl = `https://sarkarsaathi.org/faq/${faq.slug}`;

    if (navigator.share) {
      navigator.share({
        title: `SarkarSaathi FAQ: ${qText}`,
        text: qText,
        url: shareUrl
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(shareUrl);
      showToast('FAQ Direct Link copied!');
    }
  };

  const getValidUrl = (urlStr?: string) => {
    if (!urlStr) return 'https://india.gov.in';
    let clean = urlStr.trim();
    if (!clean.startsWith('http://') && !clean.startsWith('https://')) {
      clean = `https://${clean}`;
    }
    return clean;
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Dynamically Inject FAQ Schema JSON-LD for Search Engines (Google, Bing)
  useEffect(() => {
    if (selectedFaqSlug) return; // Handled by FaqDetailPage when open

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": paginatedFaqs.map(faq => ({
        "@type": "Question",
        "name": lang === 'hi' ? (faq.question || faq.q || '') : (faq.q_en || faq.question || ''),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": (lang === 'hi' ? (faq.answer || faq.a || '') : (faq.a_en || faq.answer || '')).replace(/<[^>]*>/g, ' ')
        }
      }))
    };

    let scriptTag = document.getElementById('faq-hub-jsonld-schema');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'faq-hub-jsonld-schema';
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schemaData);

    return () => {
      const tag = document.getElementById('faq-hub-jsonld-schema');
      if (tag) tag.remove();
    };
  }, [paginatedFaqs, lang, selectedFaqSlug]);

  // If a single FAQ detail view is active, render FaqDetailPage
  if (selectedFaqSlug) {
    return (
      <FaqDetailPage 
        slug={selectedFaqSlug} 
        onBackToHub={() => {
          setSelectedFaqSlug(null);
          window.history.replaceState(null, '', window.location.pathname);
        }}
        onSelectFaqSlug={(newSlug) => {
          setSelectedFaqSlug(newSlug);
          window.location.hash = `#faq/${newSlug}`;
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0F17] text-zinc-100 py-8 px-3 sm:px-6 max-w-7xl mx-auto space-y-8 animate-fadeIn">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#FF6B00] text-white px-4 py-2.5 rounded-xl shadow-2xl font-bold text-xs flex items-center gap-2 animate-bounce">
          <CheckCircle2 className="w-4 h-4" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Hero Header Section */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#121826] via-[#161f33] to-[#0D1320] border border-zinc-800 p-6 sm:p-10 shadow-2xl space-y-6">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-[#FF6B00] text-xs font-extrabold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>Official Government Knowledge Base 2026</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Sarkari Seva <span className="text-[#FF6B00]">1000+ FAQs</span> Hub
            </h1>

            <p className="text-zinc-400 text-xs sm:text-base max-w-2xl leading-relaxed">
              Find instant, step-by-step verified answers for Parivahan RTO, Aadhaar, PAN Card, Ration Card, E-District Certificates, PF UAN, Police FIR, RTI, Electricity & Property services.
            </p>
          </div>

          {/* Dynamic Badge & Language Switcher */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
            <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl px-4 py-3 text-center shadow-lg">
              <span className="block text-2xl font-black text-[#FF6B00]">{allFaqsData.length}+</span>
              <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">Verified FAQs</span>
            </div>

            <button
              onClick={() => setLang(lang === 'hi' ? 'en' : 'hi')}
              className="inline-flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-[#1D263B] border border-zinc-700 hover:border-[#FF6B00] text-white text-xs font-bold transition shadow-md hover:bg-zinc-800"
              title="Switch Language"
            >
              <Languages className="w-4 h-4 text-[#FF6B00]" />
              <span>{lang === 'hi' ? 'Language: Hindi (हिंदी)' : 'Language: English'}</span>
            </button>
          </div>
        </div>

        {/* Search Bar Input */}
        <div className="relative max-w-3xl pt-2">
          <Search className="w-5 h-5 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              lang === 'hi'
                ? "खोजें: जैसे 'Driving license apply', 'Aadhaar update', 'Ration card eKYC', 'PF balance'..."
                : "Search: e.g. 'Driving license apply', 'Aadhaar update', 'Ration card eKYC', 'PF balance'..."
            }
            className="w-full bg-[#0B0F17] border-2 border-zinc-700/80 focus:border-[#FF6B00] rounded-2xl pl-12 pr-10 py-4 text-sm sm:text-base text-white placeholder-zinc-500 focus:outline-none transition shadow-inner"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white text-xs font-bold bg-zinc-800 px-2 py-1 rounded-lg"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Category Pills Filter Bar (Horizontal Scrollable) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs font-bold text-zinc-400 px-1">
          <span className="flex items-center gap-1.5 uppercase tracking-wider">
            <Filter className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span>Select Category ({CATEGORIES.length - 1} Departments)</span>
          </span>
          <span className="text-zinc-500">Showing {filteredFaqs.length} FAQs</span>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none custom-scrollbar">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            const count = categoryCounts[cat] || 0;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition whitespace-nowrap shrink-0 flex items-center gap-2 border ${
                  isSelected
                    ? 'bg-[#FF6B00] text-white border-[#FF6B00] shadow-lg shadow-[#FF6B00]/20'
                    : 'bg-[#121824] text-zinc-300 border-zinc-800 hover:border-zinc-700 hover:text-white'
                }`}
              >
                <span>{cat}</span>
                <span className={`px-2 py-0.5 rounded-full text-[10px] ${
                  isSelected ? 'bg-black/30 text-white' : 'bg-zinc-800 text-zinc-400'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Accordion List Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-4">
        <div className="text-sm font-bold text-zinc-300 flex items-center gap-2">
          <HelpCircle className="w-4 h-4 text-[#FF6B00]" />
          <span>
            Page {currentPage} of {totalPages} ({paginatedFaqs.length} FAQs on this page)
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs font-bold">
          <button
            onClick={() => handleToggleExpandAll(true)}
            className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white transition"
          >
            Expand All
          </button>
          <button
            onClick={() => handleToggleExpandAll(false)}
            className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white transition"
          >
            Collapse All
          </button>
        </div>
      </div>

      {/* FAQ Accordion Items List */}
      {paginatedFaqs.length === 0 ? (
        <div className="p-12 text-center rounded-3xl bg-[#121824] border border-zinc-800 space-y-4">
          <HelpCircle className="w-12 h-12 text-zinc-600 mx-auto" />
          <h3 className="text-lg font-bold text-white">No matching FAQs found</h3>
          <p className="text-xs text-zinc-400">Try searching with different keywords or selecting 'All' category.</p>
          <button
            onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
            className="px-4 py-2 bg-[#FF6B00] text-white rounded-xl text-xs font-bold hover:bg-[#FF6B00]/90 transition"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {paginatedFaqs.map((faq) => {
            const isExpanded = !!expandedIds[faq.id];
            const qText = lang === 'hi' ? (faq.question || faq.q || '') : (faq.q_en || faq.question || '');
            const aText = lang === 'hi' ? (faq.answer || faq.a || '') : (faq.a_en || faq.answer || '');
            const catName = faq.category || (faq as any).cat || 'General';

            return (
              <div
                key={faq.id}
                id={faq.slug}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isExpanded 
                    ? 'bg-[#121826] border-[#FF6B00]/60 shadow-xl' 
                    : 'bg-[#121824]/80 border-zinc-800/80 hover:border-zinc-700'
                }`}
              >
                {/* Accordion Question Header */}
                <button
                  onClick={() => toggleExpand(faq.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-4 cursor-pointer group"
                >
                  <div className="flex items-start gap-3 flex-1">
                    <span className="text-xs font-mono font-bold text-[#FF6B00] bg-zinc-900 px-2.5 py-1 rounded-lg shrink-0 border border-zinc-800">
                      #{faq.id}
                    </span>
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
                          {catName}
                        </span>
                        <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded">
                          Updated {faq.updatedDate || faq.updated || 'May 2026'}
                        </span>
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-[#FF6B00] transition leading-snug">
                        {qText}
                      </h3>
                    </div>
                  </div>

                  <div className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 group-hover:text-white shrink-0 mt-1">
                    {isExpanded ? <ChevronUp className="w-4 h-4 text-[#FF6B00]" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {/* Accordion Answer Content */}
                {isExpanded && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 border-t border-zinc-800/60 space-y-4 animate-fadeIn">
                    <div className="p-4 sm:p-5 rounded-2xl bg-[#0B0F17] border border-zinc-800/80 text-xs sm:text-sm text-zinc-300 leading-relaxed space-y-3">
                      {aText.includes('<p>') || aText.includes('<h2>') ? (
                        <div 
                          className="faq-answer-content space-y-3 font-sans text-zinc-200"
                          dangerouslySetInnerHTML={{ __html: aText }} 
                        />
                      ) : (
                        <p className="whitespace-pre-line">{aText}</p>
                      )}
                    </div>

                    {/* Official Source Banner Box */}
                    {faq.officialSource && (
                      <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 flex items-center justify-between gap-3 text-xs">
                        <div className="flex items-center gap-2 text-zinc-300 font-bold truncate">
                          <BookOpen className="w-4 h-4 text-[#FF6B00] shrink-0" />
                          <span className="truncate">Official Source: {getValidUrl(faq.officialSource)}</span>
                        </div>
                        <a
                          href={getValidUrl(faq.officialSource)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white font-bold shrink-0 transition"
                        >
                          <span>Open Portal</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    )}

                    {/* Bottom Action Footer */}
                    <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-bold pt-1">
                      <button
                        onClick={() => {
                          setSelectedFaqSlug(faq.slug);
                          window.location.hash = `#faq/${faq.slug}`;
                        }}
                        className="inline-flex items-center gap-1.5 text-[#FF6B00] hover:underline"
                      >
                        <span>Open Full Dedicated Page Guide</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleCopy(faq)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-[#FF6B00] text-zinc-300 hover:text-white transition"
                          title="Copy Question & Link"
                        >
                          {copiedId === faq.id ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                              <span className="text-emerald-400">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5 text-zinc-400" />
                              <span>Copy Link</span>
                            </>
                          )}
                        </button>

                        <button
                          onClick={() => handleShare(faq)}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-[#FF6B00] text-zinc-300 hover:text-white transition"
                          title="Share direct FAQ link"
                        >
                          <Share2 className="w-3.5 h-3.5 text-[#FF6B00]" />
                          <span>Share</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-zinc-800">
          <span className="text-xs text-zinc-400 font-bold">
            Showing Page {currentPage} of {totalPages} ({filteredFaqs.length} total results)
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="p-2.5 rounded-xl bg-[#121824] border border-zinc-800 text-zinc-300 hover:text-white disabled:opacity-40 disabled:hover:text-zinc-300 transition"
              title="Previous Page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-1">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum = currentPage;
                if (currentPage <= 3) pageNum = i + 1;
                else if (currentPage >= totalPages - 2) pageNum = totalPages - 4 + i;
                else pageNum = currentPage - 2 + i;

                if (pageNum < 1 || pageNum > totalPages) return null;

                const isCurrent = pageNum === currentPage;
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-9 h-9 rounded-xl text-xs font-bold transition ${
                      isCurrent
                        ? 'bg-[#FF6B00] text-white shadow-lg'
                        : 'bg-[#121824] text-zinc-400 border border-zinc-800 hover:text-white'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="p-2.5 rounded-xl bg-[#121824] border border-zinc-800 text-zinc-300 hover:text-white disabled:opacity-40 disabled:hover:text-zinc-300 transition"
              title="Next Page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
