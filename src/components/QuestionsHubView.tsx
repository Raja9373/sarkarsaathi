import React, { useState, useMemo } from 'react';
import { 
  Search, 
  HelpCircle, 
  ShieldCheck, 
  ChevronRight, 
  ChevronLeft, 
  ExternalLink, 
  Filter, 
  X, 
  ArrowRight,
  BookOpen,
  Calendar,
  Languages,
  CheckCircle2,
  FileText
} from 'lucide-react';
import { questionRepository } from '../infrastructure/repositories/QuestionRepository';
import { VerifiedQuestionItem } from '../types/question';

interface QuestionsHubProps {
  onNavigate: (route: string, slug?: string) => void;
}

export function QuestionsHubView({ onNavigate }: QuestionsHubProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [selectedLanguage, setSelectedLanguage] = useState<'all' | 'en' | 'hi' | 'hinglish'>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const categories = useMemo(() => [
    'ALL',
    ...questionRepository.getCategories()
  ], []);

  const counts = useMemo(() => questionRepository.getTotalCounts(), []);

  const paginatedResult = useMemo(() => {
    return questionRepository.getPaginated({
      search: searchQuery,
      category: selectedCategory,
      language: selectedLanguage,
      page: currentPage,
      pageSize,
      publishedOnly: true
    });
  }, [searchQuery, selectedCategory, selectedLanguage, currentPage]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleCategorySelect = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleLanguageSelect = (lang: 'all' | 'en' | 'hi' | 'hinglish') => {
    setSelectedLanguage(lang);
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('ALL');
    setSelectedLanguage('all');
    setCurrentPage(1);
  };

  const startRecord = paginatedResult.total > 0 ? (currentPage - 1) * pageSize + 1 : 0;
  const endRecord = Math.min(currentPage * pageSize, paginatedResult.total);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header Banner */}
      <div className="mb-8">
        <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 px-3 py-1.5 rounded-full text-xs font-semibold text-blue-800 mb-3">
          <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
          <span>Verified Government Intelligence &amp; FAQ Engine</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
          Questions &amp; Verified Answers
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-3xl leading-relaxed">
          Search and browse verified answers to essential questions across government investments, small savings schemes, subsidies, procurement tenders, and single-window portals—backed by statutory rules and official .gov.in sources.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs mb-8 space-y-4">
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
          <div className="relative flex-grow">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search by keywords, scheme names, limits, tax rules (e.g., PPF loan, EMD exemption, Mudra 20 lakh)..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition text-slate-900 placeholder:text-slate-400"
              aria-label="Search questions"
            />
            {searchQuery && (
              <button
                onClick={() => { setSearchQuery(''); setCurrentPage(1); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Language Selector */}
          <div className="flex items-center space-x-1.5 shrink-0 bg-slate-100 p-1 rounded-xl">
            <Languages className="w-4 h-4 text-slate-500 ml-2" />
            <button
              onClick={() => handleLanguageSelect('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition ${
                selectedLanguage === 'all'
                  ? 'bg-white text-blue-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All
            </button>
            <button
              onClick={() => handleLanguageSelect('en')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition ${
                selectedLanguage === 'en'
                  ? 'bg-white text-blue-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              English
            </button>
            <button
              onClick={() => handleLanguageSelect('hi')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition ${
                selectedLanguage === 'hi'
                  ? 'bg-white text-blue-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              हिन्दी
            </button>
            <button
              onClick={() => handleLanguageSelect('hinglish')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition ${
                selectedLanguage === 'hinglish'
                  ? 'bg-white text-blue-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Hinglish
            </button>
          </div>
        </div>

        {/* Category Pills Bar */}
        <div className="pt-2 border-t border-slate-100 flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider shrink-0 mr-1">
            Category:
          </span>
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => handleCategorySelect(cat)}
                className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer shrink-0 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat === 'ALL' ? 'All Categories' : cat}
              </button>
            );
          })}
        </div>

        {/* Results Metadata Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
          <div>
            Showing <span className="font-bold text-slate-900">{startRecord}</span> to{' '}
            <span className="font-bold text-slate-900">{endRecord}</span> of{' '}
            <span className="font-bold text-slate-900">{paginatedResult.total}</span> verified questions
            {selectedCategory !== 'ALL' && (
              <span className="ml-1 text-slate-600">
                in <strong className="text-blue-700">{selectedCategory}</strong>
              </span>
            )}
          </div>
          <div className="flex items-center space-x-3 mt-2 sm:mt-0">
            <span>Total Verified Repository: {counts.published}</span>
            {(searchQuery || selectedCategory !== 'ALL' || selectedLanguage !== 'all') && (
              <button
                onClick={clearFilters}
                className="text-blue-600 hover:text-blue-800 font-semibold underline cursor-pointer"
              >
                Reset filters
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Questions Cards List */}
      {paginatedResult.items.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-xl mx-auto shadow-xs">
          <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h2 className="text-lg font-bold text-slate-800 mb-2">No Matching Questions Found</h2>
          <p className="text-slate-500 text-xs sm:text-sm mb-5 leading-relaxed">
            We could not find any verified question matching "{searchQuery}". Try different keywords, select another category, or browse the entire collection.
          </p>
          <button
            onClick={clearFilters}
            className="px-4 py-2 bg-blue-600 text-white font-semibold text-xs rounded-xl hover:bg-blue-700 transition"
          >
            Show All Questions
          </button>
        </div>
      ) : (
        <div className="space-y-4 mb-8">
          {paginatedResult.items.map((q) => (
            <article
              key={q.id}
              className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-xs hover:border-blue-300 hover:shadow-sm transition flex flex-col justify-between"
            >
              <div>
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                  <div className="flex items-center space-x-2 text-xs">
                    <span className="font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                      {q.id}
                    </span>
                    <span className="text-slate-400">·</span>
                    <span className="font-semibold text-slate-700">{q.category}</span>
                    <span className="text-slate-400">/</span>
                    <span className="text-slate-500">{q.subcategory}</span>
                  </div>

                  <div className="inline-flex items-center space-x-1.5 text-xs text-emerald-700 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Verified Statutory Evidence</span>
                  </div>
                </div>

                {/* Question Heading */}
                <h2 
                  onClick={() => onNavigate('/questions', q.slug)}
                  className="text-base sm:text-lg font-bold text-slate-900 mb-3 hover:text-blue-600 transition cursor-pointer leading-snug"
                >
                  {q.canonical_question}
                </h2>

                {/* Short Answer Preview */}
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {selectedLanguage === 'hi' && q.translations?.hi?.short_answer
                    ? q.translations.hi.short_answer
                    : selectedLanguage === 'hinglish' && q.translations?.hinglish?.short_answer
                    ? q.translations.hinglish.short_answer
                    : q.short_answer}
                </p>
              </div>

              {/* Bottom Footer Info */}
              <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-500">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="flex items-center">
                    <BookOpen className="w-3.5 h-3.5 mr-1 text-slate-400" />
                    {q.source_publisher}
                  </span>
                  {q.effective_date && (
                    <span className="flex items-center">
                      <Calendar className="w-3.5 h-3.5 mr-1 text-slate-400" />
                      Effective: {q.effective_date}
                    </span>
                  )}
                  {q.translations?.hi && (
                    <span className="text-slate-400 font-medium">
                      Available in: EN · HI · HINGLISH
                    </span>
                  )}
                </div>

                <div className="flex items-center space-x-3 w-full sm:w-auto justify-end">
                  {q.suggested_existing_page && (
                    <button
                      onClick={() => onNavigate(q.suggested_existing_page)}
                      className="text-slate-600 hover:text-slate-900 font-semibold flex items-center transition"
                    >
                      <span>Related Hub</span>
                      <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                    </button>
                  )}
                  <button
                    onClick={() => onNavigate('/questions', q.slug)}
                    className="px-3.5 py-1.5 bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white rounded-lg font-semibold transition flex items-center space-x-1"
                  >
                    <span>Read Verified Answer</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Pagination Controls */}
      {paginatedResult.totalPages > 1 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4 px-6 bg-white border border-slate-200 rounded-2xl shadow-xs">
          <div className="text-xs text-slate-600">
            Page <span className="font-bold text-slate-900">{currentPage}</span> of{' '}
            <span className="font-bold text-slate-900">{paginatedResult.totalPages}</span>
          </div>

          <div className="flex items-center space-x-1.5">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage <= 1}
              className={`p-2 rounded-lg border text-xs font-semibold flex items-center transition ${
                currentPage <= 1
                  ? 'border-slate-200 text-slate-300 cursor-not-allowed'
                  : 'border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
              title="Previous Page"
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              <span>Prev</span>
            </button>

            {Array.from({ length: paginatedResult.totalPages }, (_, i) => i + 1)
              .filter(
                (p) =>
                  p === 1 ||
                  p === paginatedResult.totalPages ||
                  Math.abs(p - currentPage) <= 1
              )
              .map((p, idx, arr) => {
                const prev = arr[idx - 1];
                const showEllipsis = prev && p - prev > 1;
                return (
                  <React.Fragment key={p}>
                    {showEllipsis && <span className="px-1 text-slate-400 text-xs">...</span>}
                    <button
                      onClick={() => setCurrentPage(p)}
                      className={`min-w-[32px] h-8 rounded-lg text-xs font-bold transition ${
                        currentPage === p
                          ? 'bg-blue-600 text-white shadow-xs'
                          : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {p}
                    </button>
                  </React.Fragment>
                );
              })}

            <button
              onClick={() => setCurrentPage((p) => Math.min(paginatedResult.totalPages, p + 1))}
              disabled={currentPage >= paginatedResult.totalPages}
              className={`p-2 rounded-lg border text-xs font-semibold flex items-center transition ${
                currentPage >= paginatedResult.totalPages
                  ? 'border-slate-200 text-slate-300 cursor-not-allowed'
                  : 'border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
              title="Next Page"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
