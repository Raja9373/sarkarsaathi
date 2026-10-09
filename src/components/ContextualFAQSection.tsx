import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink, 
  ShieldCheck, 
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { questionRepository } from '../infrastructure/repositories/QuestionRepository';
import { VerifiedQuestionItem } from '../types/question';

interface ContextualFAQSectionProps {
  category: string;
  onNavigate: (route: string, slug?: string) => void;
  maxItems?: number;
}

export function ContextualFAQSection({ category, onNavigate, maxItems = 6 }: ContextualFAQSectionProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const questions: VerifiedQuestionItem[] = questionRepository.getByCategory(category, true);

  if (questions.length === 0) {
    return null;
  }

  const displayedQuestions = questions.slice(0, maxItems);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="mt-12 pt-8 border-t border-slate-200">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
        <div>
          <div className="inline-flex items-center space-x-1.5 text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full mb-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            <span>Official Rules &amp; Answers</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Frequently Asked Questions: {category}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Verified answers derived from primary acts, gazettes, and official department guidelines.
          </p>
        </div>

        <a
          href="/questions"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('/questions');
          }}
          className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center shrink-0 transition"
        >
          <span>View All in Questions Hub ({questions.length})</span>
          <ArrowRight className="w-3.5 h-3.5 ml-1" />
        </a>
      </div>

      <div className="space-y-3">
        {displayedQuestions.map((q) => {
          const isExpanded = expandedId === q.id;
          return (
            <div
              key={q.id}
              className={`bg-white border rounded-xl transition ${
                isExpanded ? 'border-blue-300 shadow-xs ring-1 ring-blue-100' : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <button
                onClick={() => toggleExpand(q.id)}
                className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-4 cursor-pointer focus:outline-none"
                aria-expanded={isExpanded}
              >
                <div className="flex items-start space-x-3">
                  <span className="font-mono text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded mt-0.5 shrink-0">
                    {q.id}
                  </span>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-slate-900 leading-snug">
                      {q.canonical_question}
                    </h3>
                    <div className="text-xs text-slate-400 mt-0.5">
                      {q.subcategory} · Source: {q.source_publisher}
                    </div>
                  </div>
                </div>

                <div className="p-1 rounded-lg bg-slate-100 text-slate-600 shrink-0 mt-0.5">
                  {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </button>

              {isExpanded && (
                <div className="px-4 pb-5 sm:px-5 pt-1 border-t border-slate-100">
                  <div className="bg-slate-50 p-4 rounded-xl text-slate-800 text-sm leading-relaxed mb-3">
                    <p className="font-medium">{q.short_answer}</p>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed">{q.detailed_answer}</p>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
                    <div className="flex items-center space-x-3">
                      <span>Source: <strong className="text-slate-700">{q.source_title}</strong></span>
                      {q.effective_date && <span>Effective: {q.effective_date}</span>}
                    </div>

                    <a
                      href={`/questions/${q.slug}`}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('/questions', q.slug);
                      }}
                      className="text-blue-600 hover:text-blue-800 font-semibold flex items-center space-x-1"
                    >
                      <span>Complete Citations &amp; Translations</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
