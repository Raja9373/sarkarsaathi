import React, { useEffect, useState, useMemo } from 'react';
import { 
  ArrowLeft, 
  ExternalLink, 
  Share2, 
  Copy, 
  Check, 
  BookOpen, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  HelpCircle, 
  CheckCircle2, 
  Languages,
  ShieldCheck,
  FileText,
  Clock,
  Home
} from 'lucide-react';
import allFaqsData from '../data/faqs';
import { generateFAQSchema, generateBreadcrumbSchema, generateArticleSchema } from '../lib/schemas';

export interface FaqItem {
  id: number;
  slug: string;
  category: string;
  categorySlug: string;
  question: string;
  q?: string;
  q_en?: string;
  answer: string;
  a?: string;
  a_en?: string;
  answer_en?: string;
  keywords: string[];
  updatedDate: string;
  updated?: string;
  officialSource: string;
}

interface FaqDetailPageProps {
  slug: string;
  onBackToHub: () => void;
  onSelectFaqSlug: (slug: string) => void;
}

export const FaqDetailPage: React.FC<FaqDetailPageProps> = ({ slug, onBackToHub, onSelectFaqSlug }) => {
  const [lang, setLang] = useState<'hi' | 'en'>('hi');
  const [copied, setCopied] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Find target FAQ by slug or ID
  const faq = useMemo(() => {
    const found = (allFaqsData as unknown as FaqItem[]).find(
      f => f.slug === slug || String(f.id) === slug
    );
    return found || ((allFaqsData.length > 0 ? allFaqsData[0] : null) as unknown as FaqItem | null);
  }, [slug]);

  const currentIndex = useMemo(() => {
    if (!faq) return -1;
    return (allFaqsData as unknown as FaqItem[]).findIndex(f => f.id === faq.id);
  }, [faq]);

  const prevFaq = useMemo(() => {
    if (currentIndex > 0) return (allFaqsData as unknown as FaqItem[])[currentIndex - 1];
    return null;
  }, [currentIndex]);

  const nextFaq = useMemo(() => {
    if (currentIndex >= 0 && currentIndex < allFaqsData.length - 1) return (allFaqsData as unknown as FaqItem[])[currentIndex + 1];
    return null;
  }, [currentIndex]);

  // Related FAQs in the same category
  const relatedFaqs = useMemo(() => {
    if (!faq) return [];
    return (allFaqsData as unknown as FaqItem[])
      .filter(f => f.category === faq.category && f.id !== faq.id)
      .slice(0, 5);
  }, [faq]);

  const getValidUrl = (urlStr?: string) => {
    if (!urlStr) return 'https://india.gov.in';
    let clean = urlStr.trim();
    if (!clean.startsWith('http://') && !clean.startsWith('https://')) {
      clean = `https://${clean}`;
    }
    return clean;
  };

  const displayQuestion = faq ? (lang === 'hi' ? (faq.question || faq.q || '') : (faq.q_en || faq.question || '')) : 'Sarkari Yojana FAQ';
  const displayAnswer = faq ? (lang === 'hi' ? (faq.answer || faq.a || '') : (faq.answer_en || faq.a_en || faq.answer || '')) : '';

  // Update DOM Title and Meta Tags for SEO
  useEffect(() => {
    if (!faq) return;
    document.title = `${displayQuestion} | SarkarSaathi.org`;
    
    // Set canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `https://sarkarsaathi.org/faq/${faq.slug}`);

    // Inject JSON-LD Schema
    const faqSchema = generateFAQSchema(displayQuestion, displayAnswer, faq.officialSource);
    const breadcrumbSchema = generateBreadcrumbSchema(faq.slug, faq.category, displayQuestion);
    const articleSchema = generateArticleSchema(displayQuestion, displayAnswer, faq.updatedDate, faq.slug);

    let scriptTag = document.getElementById('faq-detail-jsonld-schema');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'faq-detail-jsonld-schema';
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify([faqSchema, breadcrumbSchema, articleSchema]);

    window.scrollTo({ top: 0, behavior: 'smooth' });

    return () => {
      const tag = document.getElementById('faq-detail-jsonld-schema');
      if (tag) tag.remove();
    };
  }, [faq, displayQuestion, displayAnswer]);

  if (!faq) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center space-y-4">
        <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-[#FF6B00] flex items-center justify-center">
          <HelpCircle className="w-8 h-8" />
        </div>
        <h2 className="text-xl font-bold text-white">FAQ Page Not Found or Removed</h2>
        <p className="text-xs text-zinc-400 max-w-md">
          This question has been removed or updated. You can browse all verified government schemes, state portals, and official services directly.
        </p>
        <button
          onClick={onBackToHub}
          className="px-5 py-2.5 rounded-xl bg-[#FF6B00] text-white text-xs font-bold shadow hover:bg-[#E65100] transition flex items-center gap-1.5"
        >
          <Home className="w-4 h-4" />
          <span>Explore All Schemes & Services</span>
        </button>
      </div>
    );
  }

  const handleCopy = () => {
    const textToCopy = `Q: ${displayQuestion}\n\nURL: https://sarkarsaathi.org/faq/${faq.slug}\n\nSource: ${faq.officialSource}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    showToast('FAQ Link & Question copied!');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = () => {
    const shareUrl = `https://sarkarsaathi.org/faq/${faq.slug}`;
    if (navigator.share) {
      navigator.share({
        title: displayQuestion,
        text: `Check step by step guide on SarkarSaathi: ${displayQuestion}`,
        url: shareUrl
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(shareUrl);
      showToast('Direct FAQ URL copied to clipboard!');
    }
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <div className="min-h-screen bg-[#0B0F17] text-zinc-100 py-8 px-3 sm:px-6 max-w-5xl mx-auto space-y-8 animate-fadeIn">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#FF6B00] text-white px-4 py-2.5 rounded-xl shadow-2xl font-bold text-xs flex items-center gap-2 animate-bounce">
          <CheckCircle2 className="w-4 h-4" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Navigation Bar & Breadcrumb */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#121824] p-4 sm:p-5 rounded-2xl border border-zinc-800 shadow-md">
        <nav className="flex flex-wrap items-center gap-2 text-xs text-zinc-400 font-medium">
          <button 
            onClick={onBackToHub} 
            className="hover:text-white flex items-center gap-1 transition"
          >
            <Home className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span>Home</span>
          </button>
          <span>/</span>
          <button onClick={onBackToHub} className="hover:text-white transition">
            1000+ FAQs Hub
          </button>
          <span>/</span>
          <span className="text-[#FF6B00] font-bold">{faq.category}</span>
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang(lang === 'hi' ? 'en' : 'hi')}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-700 hover:border-[#FF6B00] text-xs font-bold text-white transition"
          >
            <Languages className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span>{lang === 'hi' ? 'Language: Hindi' : 'Language: English'}</span>
          </button>

          <button
            onClick={onBackToHub}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FF6B00] text-white text-xs font-bold hover:bg-[#FF6B00]/90 transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to 1000 FAQs</span>
          </button>
        </div>
      </div>

      {/* Main Content Article Container */}
      <article className="bg-[#121826] border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header Metadata Badges */}
        <div className="space-y-4 relative z-10">
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
            <span className="px-3 py-1 rounded-lg bg-[#FF6B00]/20 text-[#FF6B00] border border-[#FF6B00]/40 uppercase tracking-wider">
              {faq.category}
            </span>
            <span className="px-3 py-1 rounded-lg bg-emerald-950/80 text-emerald-400 border border-emerald-800/60 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Official .gov.in Verified</span>
            </span>
            <span className="px-3 py-1 rounded-lg bg-zinc-900 text-zinc-400 border border-zinc-800 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-zinc-500" />
              <span>Updated: {faq.updatedDate || 'May 2026'}</span>
            </span>
          </div>

          {/* Question H1 Title */}
          <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-snug">
            {displayQuestion}
          </h1>

          {/* Action buttons (Copy & Share) */}
          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-[#FF6B00] text-xs font-bold text-zinc-300 hover:text-white transition"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-[#FF6B00]" />}
              <span>{copied ? 'Copied Link' : 'Copy Question Link'}</span>
            </button>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-[#FF6B00] text-xs font-bold text-zinc-300 hover:text-white transition"
            >
              <Share2 className="w-4 h-4 text-[#FF6B00]" />
              <span>Share Guide</span>
            </button>
          </div>
        </div>

        {/* Detailed Formatted Answer Section */}
        <div className="prose prose-invert max-w-none space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed pt-4 border-t border-zinc-800/80">
          {displayAnswer.includes('<p>') || displayAnswer.includes('<h2>') ? (
            <div 
              className="faq-answer-content space-y-4 font-sans text-zinc-200"
              dangerouslySetInnerHTML={{ __html: displayAnswer }} 
            />
          ) : (
            <div className="p-5 rounded-2xl bg-[#0B0F17] border border-zinc-800/80 whitespace-pre-line text-zinc-200">
              {displayAnswer}
            </div>
          )}
        </div>

        {/* Official Portal Reference Link Box */}
        <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#182238] to-[#0D1424] border border-zinc-700/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FF6B00]">Official Portal Source</span>
            <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#FF6B00]" />
              <span>Visit Official Website: {getValidUrl(faq.officialSource)}</span>
            </h4>
            <p className="text-xs text-zinc-400">Apply online, check live status, and upload documents directly on government portals.</p>
          </div>

          <a
            href={getValidUrl(faq.officialSource)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#FF6B00] hover:bg-[#FF6B00]/90 text-white font-extrabold text-xs transition shadow-lg shrink-0 cursor-pointer"
          >
            <span>Open Government Portal</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Previous & Next FAQ Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-zinc-800">
          {prevFaq ? (
            <button
              onClick={() => onSelectFaqSlug(prevFaq.slug)}
              className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800 hover:border-[#FF6B00] text-left transition space-y-1 group"
            >
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-zinc-400 group-hover:text-[#FF6B00]">
                <ChevronLeft className="w-4 h-4" />
                <span>Previous FAQ (#{prevFaq.id})</span>
              </div>
              <p className="text-xs font-bold text-zinc-200 line-clamp-1">
                {lang === 'hi' ? (prevFaq.question || prevFaq.q) : (prevFaq.q_en || prevFaq.question)}
              </p>
            </button>
          ) : <div />}

          {nextFaq ? (
            <button
              onClick={() => onSelectFaqSlug(nextFaq.slug)}
              className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800 hover:border-[#FF6B00] text-right transition space-y-1 group"
            >
              <div className="flex items-center justify-end gap-1.5 text-[11px] font-bold text-zinc-400 group-hover:text-[#FF6B00]">
                <span>Next FAQ (#{nextFaq.id})</span>
                <ChevronRight className="w-4 h-4" />
              </div>
              <p className="text-xs font-bold text-zinc-200 line-clamp-1">
                {lang === 'hi' ? (nextFaq.question || nextFaq.q) : (nextFaq.q_en || nextFaq.question)}
              </p>
            </button>
          ) : <div />}
        </div>
      </article>

      {/* Related FAQs Section (5 related FAQs from same category) */}
      {relatedFaqs.length > 0 && (
        <section className="space-y-4 pt-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#FF6B00]" />
              <span>Related FAQs in {faq.category}</span>
            </h3>
            <span className="text-xs text-zinc-400 font-medium">5 Recommended Guides</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {relatedFaqs.map((rel) => (
              <button
                key={rel.id}
                onClick={() => onSelectFaqSlug(rel.slug)}
                className="p-4 rounded-2xl bg-[#121824] border border-zinc-800 hover:border-[#FF6B00] text-left transition space-y-2 group"
              >
                <div className="flex items-center justify-between text-[10px] font-extrabold text-zinc-400">
                  <span className="px-2 py-0.5 rounded bg-zinc-900 text-[#FF6B00]">#{rel.id}</span>
                  <span className="text-emerald-400">{rel.updatedDate}</span>
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-zinc-200 group-hover:text-[#FF6B00] transition line-clamp-2">
                  {lang === 'hi' ? (rel.question || rel.q) : (rel.q_en || rel.question)}
                </h4>
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Bottom CTA to Return to Hub */}
      <div className="text-center py-8">
        <button
          onClick={onBackToHub}
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#FF6B00] to-amber-600 text-white font-black text-sm shadow-xl hover:opacity-95 transition"
        >
          <HelpCircle className="w-5 h-5" />
          <span>Explore All 1000+ Government Service FAQs Hub</span>
        </button>
      </div>
    </div>
  );
};
