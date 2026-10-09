import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  ShieldCheck, 
  CheckCircle2, 
  ExternalLink, 
  Calendar, 
  BookOpen, 
  Clock, 
  Languages, 
  Share2, 
  HelpCircle,
  ChevronRight,
  Info,
  Building2,
  FileText
} from 'lucide-react';
import { VerifiedQuestionItem } from '../types/question';
import { questionRepository } from '../infrastructure/repositories/QuestionRepository';

interface QuestionDetailProps {
  question: VerifiedQuestionItem;
  onNavigate: (route: string, slug?: string) => void;
  onBack: () => void;
}

export function QuestionDetailView({ question, onNavigate, onBack }: QuestionDetailProps) {
  const [activeLang, setActiveLang] = useState<'en' | 'hi' | 'hinglish'>('en');
  const [copied, setCopied] = useState(false);

  // Determine available translations
  const hasHindi = !!question.translations?.hi?.detailed_answer;
  const hasHinglish = !!question.translations?.hinglish?.detailed_answer;

  const currentShortAnswer = activeLang === 'hi' && hasHindi
    ? question.translations!.hi!.short_answer
    : activeLang === 'hinglish' && hasHinglish
    ? question.translations!.hinglish!.short_answer
    : question.short_answer;

  const currentDetailedAnswer = activeLang === 'hi' && hasHindi
    ? question.translations!.hi!.detailed_answer
    : activeLang === 'hinglish' && hasHinglish
    ? question.translations!.hinglish!.detailed_answer
    : question.detailed_answer;

  // JSON-LD Structured Data for QAPage / FAQPage
  useEffect(() => {
    const scriptId = 'question-qa-jsonld';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'QAPage',
      'mainEntity': {
        '@type': 'Question',
        'name': question.canonical_question,
        'text': question.canonical_question,
        'answerCount': 1,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': `${question.short_answer}\n\n${question.detailed_answer}`,
          'dateCreated': question.verified_at,
          'author': {
            '@type': 'Organization',
            'name': question.source_publisher || 'Government of India'
          },
          'url': `https://sarkarsaathi.org/questions/${question.slug}`
        }
      }
    };

    script.textContent = JSON.stringify(structuredData);

    return () => {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, [question]);

  const handleShare = () => {
    const url = window.location.href;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  // Find 3 related questions in same category
  const relatedQuestions = questionRepository
    .getByCategory(question.category)
    .filter((q) => q.id !== question.id)
    .slice(0, 3);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-xs text-slate-500 overflow-x-auto">
        <button onClick={() => onNavigate('/')} className="hover:text-slate-900 transition shrink-0">
          Home
        </button>
        <span>/</span>
        <button onClick={() => onNavigate('/questions')} className="hover:text-slate-900 transition shrink-0">
          Questions
        </button>
        <span>/</span>
        <button 
          onClick={() => {
            onNavigate('/questions');
          }} 
          className="hover:text-slate-900 transition shrink-0"
        >
          {question.category}
        </button>
        <span>/</span>
        <span className="text-slate-800 font-semibold truncate max-w-xs">{question.id}</span>
      </nav>

      {/* Back Button & Actions */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={onBack}
          className="inline-flex items-center space-x-2 text-sm font-semibold text-slate-600 hover:text-blue-600 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Questions</span>
        </button>

        <button
          onClick={handleShare}
          className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg transition"
        >
          <Share2 className="w-3.5 h-3.5" />
          <span>{copied ? 'Copied Link!' : 'Share Question'}</span>
        </button>
      </div>

      {/* Main Article Container */}
      <article className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs mb-8">
        {/* Category & Badge Row */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center space-x-2 text-xs">
            <span className="font-mono font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded border border-blue-200">
              {question.id}
            </span>
            <span className="text-slate-400">·</span>
            <span className="font-bold text-slate-700">{question.category}</span>
            <span className="text-slate-400">/</span>
            <span className="text-slate-500 font-medium">{question.subcategory}</span>
          </div>

          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-full text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Verified Official Fact</span>
          </div>
        </div>

        {/* Descriptive Main Heading */}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
          {question.canonical_question}
        </h1>

        {/* Language Switcher Bar */}
        {(hasHindi || hasHinglish) && (
          <div className="mb-6 p-2 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
            <div className="flex items-center space-x-2 text-xs text-slate-600 pl-2">
              <Languages className="w-4 h-4 text-blue-600" />
              <span className="font-semibold">Language / भाषा:</span>
            </div>
            <div className="flex items-center space-x-1">
              <button
                onClick={() => setActiveLang('en')}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition ${
                  activeLang === 'en'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                English
              </button>
              {hasHindi && (
                <button
                  onClick={() => setActiveLang('hi')}
                  className={`px-3 py-1 text-xs font-semibold rounded-lg transition ${
                    activeLang === 'hi'
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  हिन्दी
                </button>
              )}
              {hasHinglish && (
                <button
                  onClick={() => setActiveLang('hinglish')}
                  className={`px-3 py-1 text-xs font-semibold rounded-lg transition ${
                    activeLang === 'hinglish'
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Hinglish
                </button>
              )}
            </div>
          </div>
        )}

        {/* Short Executive Answer Box */}
        <div className="bg-blue-50/70 border-l-4 border-blue-600 p-4 sm:p-5 rounded-r-xl mb-6">
          <h2 className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-1.5 flex items-center">
            <CheckCircle2 className="w-4 h-4 mr-1 text-blue-600" />
            Direct Answer
          </h2>
          <p className="text-slate-800 text-sm sm:text-base font-medium leading-relaxed">
            {currentShortAnswer}
          </p>
        </div>

        {/* Detailed Statutory Answer */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-slate-900 mb-3 flex items-center">
            <FileText className="w-5 h-5 mr-2 text-slate-600" />
            Detailed Statutory &amp; Procedural Breakdown
          </h2>
          <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-3">
            <p>{currentDetailedAnswer}</p>
          </div>
        </div>

        {/* Supporting Claims & Legal Citations */}
        {question.supporting_claims && question.supporting_claims.length > 0 && (
          <div className="mb-8 p-5 bg-slate-50 border border-slate-200 rounded-xl">
            <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
              Supporting Verifiable Claims &amp; Specific Citations
            </h3>
            <ul className="space-y-2.5">
              {question.supporting_claims.map((claim, idx) => (
                <li key={idx} className="text-xs sm:text-sm text-slate-700 flex items-start space-x-2">
                  <span className="text-blue-600 font-bold mt-0.5">•</span>
                  <div>
                    <span className="font-semibold text-slate-900">{claim.claim}</span>
                    <div className="text-xs text-slate-500 mt-0.5">
                      Citation: <span className="font-medium text-slate-700">{claim.citation_source}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Metadata & Provenance Box */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 bg-slate-50/80 border border-slate-200 rounded-xl mb-8 text-xs text-slate-600">
          <div>
            <span className="block text-slate-400 font-medium mb-0.5">Authoritative Source Document</span>
            <span className="font-bold text-slate-800 text-sm">{question.source_title}</span>
          </div>

          <div>
            <span className="block text-slate-400 font-medium mb-0.5">Issuing Authority / Publisher</span>
            <span className="font-semibold text-slate-800 text-sm flex items-center">
              <Building2 className="w-3.5 h-3.5 mr-1 text-slate-500" />
              {question.source_publisher}
            </span>
          </div>

          <div>
            <span className="block text-slate-400 font-medium mb-0.5">Evidence Tier Classification</span>
            <span className="font-mono font-semibold text-indigo-700">{question.evidence_type}</span>
          </div>

          <div>
            <span className="block text-slate-400 font-medium mb-0.5">Effective Date / Verification Date</span>
            <span className="font-medium text-slate-800">
              {question.effective_date ? `Effective from ${question.effective_date} · ` : ''}
              Audited: {question.verified_at}
            </span>
          </div>
        </div>

        {/* Primary Official Links */}
        <div className="pt-6 border-t border-slate-200">
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
            Primary Government Links
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {question.official_source_urls.map((url, i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1.5 px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-semibold transition"
              >
                <span>{url.replace('https://', '').split('/')[0]}</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </a>
            ))}
            {question.suggested_existing_page && (
              <button
                onClick={() => onNavigate(question.suggested_existing_page)}
                className="inline-flex items-center space-x-1.5 px-3.5 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-xl text-xs font-semibold transition"
              >
                <span>Browse Related {question.category} Catalogue</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </article>

      {/* Related Questions in Category */}
      {relatedQuestions.length > 0 && (
        <section className="mt-10">
          <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
            <HelpCircle className="w-5 h-5 mr-2 text-blue-600" />
            Related Questions in {question.category}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedQuestions.map((rel) => (
              <div
                key={rel.id}
                onClick={() => onNavigate('/questions', rel.slug)}
                className="bg-white border border-slate-200 rounded-xl p-4 hover:border-blue-400 hover:shadow-xs transition cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-mono font-semibold text-blue-600 mb-1 block">
                    {rel.id}
                  </span>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-800 line-clamp-2 mb-2">
                    {rel.canonical_question}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    {rel.short_answer}
                  </p>
                </div>
                <div className="pt-2 mt-3 border-t border-slate-100 text-xs font-semibold text-blue-600 flex items-center justify-between">
                  <span>View Answer</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
