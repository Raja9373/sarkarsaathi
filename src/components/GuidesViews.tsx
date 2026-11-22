import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  Clock,
  Calendar,
  ShieldCheck,
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  Info,
  FileText,
  UserCheck
} from 'lucide-react';
import { editorialGuides, EditorialGuide } from '../data/editorialGuidesData';
import { injectStructuredData, PRODUCTION_DOMAIN } from '../utils/seo';

interface GuidesHubProps {
  onNavigate: (route: string, slug?: string) => void;
}

const CATEGORIES = [
  'All Guides',
  'Sovereign Investments',
  'Subsidies & Welfare',
  'Public Procurement',
  'Small Savings',
  'MSME & Housing',
  'Citizen Safety',
] as const;

export function GuidesHubView({ onNavigate }: GuidesHubProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Guides');

  const filteredGuides =
    selectedCategory === 'All Guides'
      ? editorialGuides
      : editorialGuides.filter((g) => g.category === selectedCategory);

  useEffect(() => {
    injectStructuredData('guides-collection-jsonld', {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      '@id': `${PRODUCTION_DOMAIN}/guides#collection`,
      url: `${PRODUCTION_DOMAIN}/guides`,
      name: 'In-Depth Civic Finance, Sarkari Yojana & Public Procurement Editorial Guides — SarkarSaathi',
      description:
        'Original, research-backed long-form handbooks covering Section 54EC bonds, PM Surya Ghar solar subsidy, GeM L1 & Auto-CRAC procurement rules, PPF/SSY/SCSS comparison, PM-KISAN troubleshooting, and MSME loans.',
      isPartOf: {
        '@type': 'WebSite',
        '@id': `${PRODUCTION_DOMAIN}/#website`,
        name: 'SarkarSaathi',
        url: `${PRODUCTION_DOMAIN}/`,
      },
    });
    return () => {
      document.getElementById('guides-collection-jsonld')?.remove();
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      {/* Editorial Hero Header */}
      <section className="bg-gradient-to-br from-slate-900 via-[#0a2a54] to-[#0f3460] text-white rounded-3xl p-6 sm:p-10 shadow-sm border border-blue-950/60">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center space-x-2 bg-blue-800/50 border border-blue-400/30 px-3.5 py-1.5 rounded-full text-xs font-semibold text-blue-100">
            <BookOpen className="w-3.5 h-3.5 text-amber-300" />
            <span>Original Long-Form Civic &amp; Sovereign Finance Journalism</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
            In-Depth Editorial Handbooks &amp; Policy Guides (2026)
          </h1>
          <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed">
            Comprehensive, plain-English research guides compiled by the SarkarSaathi Editorial Desk from primary Income Tax, Ministry of Finance, MNRE, MoHUA, RBI, and GeM circulars — complete with worked Rupee calculations, statutory tables, and common rejection checklists.
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border transition cursor-pointer ${
              selectedCategory === cat
                ? 'bg-blue-900 text-white border-blue-900 shadow-xs'
                : 'bg-white text-slate-700 border-slate-200 hover:border-blue-400'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Guides Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredGuides.map((guide) => (
          <article
            key={guide.id}
            className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md hover:border-blue-300 transition flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="font-bold text-indigo-700 bg-indigo-50 border border-indigo-200/80 px-2.5 py-0.5 rounded-md">
                  {guide.category}
                </span>
                <div className="flex items-center space-x-3 text-slate-500 font-medium">
                  <span className="inline-flex items-center space-x-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{guide.readTimeMinutes} min read</span>
                  </span>
                  <span className="inline-flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Updated {guide.lastUpdated}</span>
                  </span>
                </div>
              </div>

              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug">
                <a
                  href={`/guides/${guide.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/guides', guide.slug);
                  }}
                  className="hover:text-blue-700 transition"
                >
                  {guide.title}
                </a>
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                {guide.summary}
              </p>
            </div>

            <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm">
              <span className="text-slate-500 font-medium">{guide.authorName}</span>
              <a
                href={`/guides/${guide.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('/guides', guide.slug);
                }}
                className="font-bold text-blue-700 hover:text-blue-900 inline-flex items-center space-x-1"
              >
                <span>Read Complete Guide</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* Editorial Standards Strip */}
      <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center space-x-2 text-sm font-bold text-slate-900">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Fact-Checked Against Official Gazette &amp; Statutory Sources</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600">
            Every numerical rate, cap, and procedural timeline in our editorial guides is audited against official <code>.gov.in</code>, <code>.nic.in</code>, and RBI circulars.
          </p>
        </div>
        <a
          href="/about"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('/about');
          }}
          className="px-4 py-2 bg-white border border-slate-300 hover:border-blue-500 rounded-xl text-xs font-bold text-slate-800 shrink-0 text-center"
        >
          Read Editorial Methodology
        </a>
      </section>
    </div>
  );
}

interface GuideDetailProps {
  guide: EditorialGuide;
  onNavigate: (route: string, slug?: string) => void;
}

export function GuideDetailView({ guide, onNavigate }: GuideDetailProps) {
  useEffect(() => {
    const canonicalUrl = `${PRODUCTION_DOMAIN}/guides/${guide.slug}`;
    injectStructuredData('guide-article-jsonld', {
      '@context': 'https://schema.org',
      '@type': 'Article',
      '@id': `${canonicalUrl}#article`,
      headline: guide.title,
      description: guide.metaDescription,
      datePublished: guide.publishedDate,
      dateModified: guide.lastUpdated,
      inLanguage: 'en-IN',
      author: {
        '@type': 'Organization',
        name: guide.authorName,
        url: `${PRODUCTION_DOMAIN}/about`,
      },
      publisher: {
        '@type': 'Organization',
        name: 'SarkarSaathi',
        url: `${PRODUCTION_DOMAIN}/`,
        logo: {
          '@type': 'ImageObject',
          url: `${PRODUCTION_DOMAIN}/icon-192x192.png`,
        },
      },
      mainEntityOfPage: canonicalUrl,
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${PRODUCTION_DOMAIN}/` },
          { '@type': 'ListItem', position: 2, name: 'Editorial Guides', item: `${PRODUCTION_DOMAIN}/guides` },
          { '@type': 'ListItem', position: 3, name: guide.shortTitle, item: canonicalUrl },
        ],
      },
    });
    return () => {
      document.getElementById('guide-article-jsonld')?.remove();
    };
  }, [guide]);

  const otherGuides = editorialGuides.filter((g) => g.slug !== guide.slug).slice(0, 3);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-slate-600">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('/');
          }}
          className="text-blue-700 hover:underline font-medium"
        >
          Home
        </a>
        <span aria-hidden="true">/</span>
        <a
          href="/guides"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('/guides');
          }}
          className="text-blue-700 hover:underline font-medium"
        >
          Editorial Guides
        </a>
        <span aria-hidden="true">/</span>
        <span className="font-semibold text-slate-900 truncate">{guide.shortTitle}</span>
      </nav>

      {/* Main Article */}
      <article className="bg-white rounded-3xl border border-slate-200 shadow-xs p-6 sm:p-10 space-y-8">
        <header className="space-y-4 border-b border-slate-200 pb-6">
          <div className="flex flex-wrap items-center gap-2.5 text-xs">
            <span className="font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-md">
              {guide.category}
            </span>
            <span className="inline-flex items-center space-x-1 text-slate-600 font-medium">
              <Clock className="w-3.5 h-3.5" />
              <span>{guide.readTimeMinutes} min read</span>
            </span>
            <span className="inline-flex items-center space-x-1 text-slate-600 font-medium">
              <Calendar className="w-3.5 h-3.5" />
              <span>Last Verified: {guide.lastUpdated}</span>
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {guide.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {guide.summary}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-600">
            <div className="inline-flex items-center space-x-1.5 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg">
              <UserCheck className="w-3.5 h-3.5 text-blue-700" />
              <span>
                <strong>By:</strong> {guide.authorName} ({guide.authorRole})
              </span>
            </div>
            <div className="inline-flex items-center space-x-1.5 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-lg text-emerald-900">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
              <span>
                <strong>Reviewed by:</strong> {guide.reviewerName}
              </span>
            </div>
          </div>
        </header>

        {/* Table of Contents */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            In This Guide
          </h2>
          <ol className="list-decimal pl-5 space-y-1.5 text-sm text-blue-800 font-medium">
            {guide.sections.map((sec, idx) => (
              <li key={idx}>
                <a href={`#section-${idx + 1}`} className="hover:underline">
                  {sec.heading}
                </a>
              </li>
            ))}
            {guide.faqs.length > 0 && (
              <li>
                <a href="#guide-faqs" className="hover:underline">
                  Frequently Asked Questions
                </a>
              </li>
            )}
          </ol>
        </div>

        {/* Guide Sections */}
        <div className="space-y-9">
          {guide.sections.map((sec, idx) => (
            <section key={idx} id={`section-${idx + 1}`} className="space-y-4 scroll-mt-24">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                {sec.heading}
              </h2>

              {sec.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {p}
                </p>
              ))}

              {sec.callout && (
                <div
                  className={`p-5 rounded-2xl border text-sm leading-relaxed space-y-1.5 ${
                    sec.callout.tone === 'warning'
                      ? 'bg-amber-50 border-amber-200 text-amber-950'
                      : sec.callout.tone === 'success'
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                      : 'bg-blue-50 border-blue-200 text-blue-950'
                  }`}
                >
                  <div className="font-bold flex items-center space-x-2">
                    {sec.callout.tone === 'warning' ? (
                      <AlertTriangle className="w-4 h-4 shrink-0" />
                    ) : sec.callout.tone === 'success' ? (
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                    ) : (
                      <Info className="w-4 h-4 shrink-0" />
                    )}
                    <span>{sec.callout.title}</span>
                  </div>
                  <p>{sec.callout.body}</p>
                </div>
              )}

              {sec.table && (
                <div className="overflow-x-auto rounded-2xl border border-slate-200">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-100 border-b border-slate-200 text-slate-700">
                        {sec.table.headers.map((h, hIdx) => (
                          <th key={hIdx} className="p-3.5 font-bold">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-700">
                      {sec.table.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-slate-50/70">
                          {row.map((cell, cIdx) => (
                            <td
                              key={cIdx}
                              className={`p-3.5 align-top ${cIdx === 0 ? 'font-bold text-slate-900' : ''}`}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {sec.bullets && sec.bullets.length > 0 && (
                <ul className="space-y-2.5 pl-1">
                  {sec.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start space-x-2.5 text-sm sm:text-base text-slate-700 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {/* FAQs */}
        {guide.faqs.length > 0 && (
          <section id="guide-faqs" className="pt-6 border-t border-slate-200 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {guide.faqs.map((faq, fIdx) => (
                <div key={fIdx} className="p-5 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-1.5">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">{faq.question}</h3>
                  <p className="text-sm text-slate-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Primary Statutory Sources */}
        <section className="pt-6 border-t border-slate-200 space-y-3">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 flex items-center space-x-2">
            <FileText className="w-4 h-4 text-blue-700" />
            <span>Primary Official Government &amp; Statutory Sources</span>
          </h2>
          <ul className="space-y-2 text-sm">
            {guide.primarySources.map((src, sIdx) => (
              <li key={sIdx}>
                <a
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline font-semibold inline-flex items-center space-x-1.5"
                >
                  <span>{src.label}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </li>
            ))}
          </ul>
          <p className="text-xs text-slate-500 pt-2">
            <strong>Editorial Disclaimer:</strong> SarkarSaathi.org is an independent research publication and is not affiliated with the Government of India or any ministry. Interest rates, subsidy slabs, and statutory thresholds are subject to official revision; always confirm active circulars on the linked <code>.gov.in</code> portal.
          </p>
        </section>

        {/* Related Platform Tools & Profiles */}
        {guide.relatedLinks.length > 0 && (
          <section className="pt-6 border-t border-slate-200 space-y-3">
            <h2 className="text-base font-bold text-slate-900">Related Tools &amp; Verified Profiles</h2>
            <div className="flex flex-wrap gap-3">
              {guide.relatedLinks.map((rl, rIdx) => {
                const href = rl.slug ? `${rl.path}/${rl.slug}` : rl.path;
                return (
                  <a
                    key={rIdx}
                    href={href}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(rl.path, rl.slug);
                    }}
                    className="px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-800 border border-blue-200 rounded-xl text-xs sm:text-sm font-semibold transition inline-flex items-center space-x-1.5"
                  >
                    <span>{rl.label}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                );
              })}
            </div>
          </section>
        )}
      </article>

      {/* More Editorial Guides */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900">More In-Depth Editorial Guides</h2>
          <a
            href="/guides"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('/guides');
            }}
            className="text-xs sm:text-sm font-bold text-blue-700 hover:underline inline-flex items-center space-x-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All {editorialGuides.length} Guides</span>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {otherGuides.map((og) => (
            <a
              key={og.id}
              href={`/guides/${og.slug}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/guides', og.slug);
              }}
              className="bg-white rounded-2xl border border-slate-200 p-5 hover:border-blue-400 hover:shadow-sm transition flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <span className="text-[11px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
                  {og.category}
                </span>
                <h3 className="text-sm font-bold text-slate-900 leading-snug">{og.shortTitle}</h3>
                <p className="text-xs text-slate-600 line-clamp-2">{og.summary}</p>
              </div>
              <span className="text-xs font-bold text-blue-700 inline-flex items-center space-x-1">
                <span>Read Guide ({og.readTimeMinutes} min)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
