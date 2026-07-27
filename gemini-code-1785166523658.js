import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES_DATABASE } from '../data/servicesData';
import { SchemaOrg } from '../components/common/SchemaOrg';
import { ExternalLink, Download, Clock, ShieldAlert, CheckCircle2, FileText } from 'lucide-react';

export const ServiceDetail = () => {
  const { slug } = useParams();
  const service = SERVICES_DATABASE.find(s => s.slug === slug) || SERVICES_DATABASE[0];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <SchemaOrg
        type="GovernmentService"
        data={service}
        title={service.metaTitle}
        description={service.metaDescription}
        canonicalUrl={`https://sarkarsaathi.org/delhi/service/${service.slug}`}
      />

      {/* Breadcrumb */}
      <nav className="text-xs text-sarkar-textMuted mb-4 flex items-center space-x-2">
        <Link to="/delhi" className="hover:text-white">Home</Link>
        <span>/</span>
        <span>Services</span>
        <span>/</span>
        <span className="text-sarkar-orange">{service.title}</span>
      </nav>

      {/* Header */}
      <div className="bg-sarkar-card border border-sarkar-border rounded-xl p-6 mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="bg-sarkar-orange/10 border border-sarkar-orange/30 text-sarkar-orange text-xs px-2.5 py-0.5 rounded-md font-semibold">
            {service.category}
          </span>
          <span className="text-xs text-sarkar-textMuted">Updated: {service.lastUpdated}</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">{service.title}</h1>
        <p className="text-xs sm:text-sm text-sarkar-textMuted leading-relaxed">{service.overview}</p>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={service.officialApplyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-sarkar-orange hover:bg-sarkar-orangeHover text-white font-bold text-sm px-5 py-2.5 rounded-lg flex items-center shadow-lg transition-colors"
          >
            Official Apply Portal (.gov.in) <ExternalLink className="w-4 h-4 ml-2" />
          </a>
          <a
            href={service.officialWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-sarkar-dark hover:bg-sarkar-border text-sarkar-textLight border border-sarkar-border font-medium text-sm px-4 py-2.5 rounded-lg flex items-center transition-colors"
          >
            Official Department Website <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>

      {/* Metadata Overview Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-sarkar-card border border-sarkar-border p-4 rounded-xl">
          <span className="text-xs text-sarkar-textMuted block">Official Fees</span>
          <span className="text-sm font-bold text-white mt-1 block">{service.fees}</span>
        </div>
        <div className="bg-sarkar-card border border-sarkar-border p-4 rounded-xl">
          <span className="text-xs text-sarkar-textMuted block">Processing Time</span>
          <span className="text-sm font-bold text-white mt-1 block">{service.processingTime}</span>
        </div>
        <div className="bg-sarkar-card border border-sarkar-border p-4 rounded-xl col-span-2 sm:col-span-1">
          <span className="text-xs text-sarkar-textMuted block">Data Privacy</span>
          <span className="text-sm font-bold text-sarkar-orange mt-1 block">100% Direct Official Link</span>
        </div>
      </div>

      {/* Step by Step Process */}
      <div className="space-y-8">
        
        {/* Documents Required */}
        <section className="bg-sarkar-card border border-sarkar-border p-6 rounded-xl">
          <h2 className="text-lg font-bold text-white mb-4 flex items-center">
            <FileText className="w-5 h-5 text-sarkar-orange mr-2" /> Required Documents
          </h2>
          <ul className="space-y-2">
            {service.requiredDocuments.map((doc, idx) => (
              <li key={idx} className="text-xs sm:text-sm text-sarkar-textLight flex items-start">
                <CheckCircle2 className="w-4 h-4 text-sarkar-orange mr-2 mt-0.5 flex-shrink-0" />
                <span>{doc}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Online Process */}
        <section className="bg-sarkar-card border border-sarkar-border p-6 rounded-xl">
          <h2 className="text-lg font-bold text-white mb-4">Step-by-Step Online Process</h2>
          <ol className="space-y-3">
            {service.onlineProcess.map((step, idx) => (
              <li key={idx} className="text-xs sm:text-sm text-sarkar-textLight flex">
                <span className="font-bold text-sarkar-orange mr-3">{idx + 1}.</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Downloads */}
        {service.downloadForms && (
          <section className="bg-sarkar-card border border-sarkar-border p-6 rounded-xl">
            <h2 className="text-lg font-bold text-white mb-4 flex items-center">
              <Download className="w-5 h-5 text-sarkar-orange mr-2" /> Download Formats
            </h2>
            <div className="space-y-2">
              {service.downloadForms.map((form, idx) => (
                <a
                  key={idx}
                  href={form.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 bg-sarkar-dark border border-sarkar-border rounded-lg hover:border-sarkar-orange text-xs sm:text-sm text-white"
                >
                  <span>{form.name}</span>
                  <Download className="w-4 h-4 text-sarkar-orange" />
                </a>
              ))}
            </div>
          </section>
        )}

        {/* FAQs */}
        <section className="bg-sarkar-card border border-sarkar-border p-6 rounded-xl">
          <h2 className="text-lg font-bold text-white mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {service.faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-sarkar-border/50 pb-3">
                <h3 className="text-sm font-semibold text-white mb-1">{faq.question}</h3>
                <p className="text-xs text-sarkar-textMuted">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};