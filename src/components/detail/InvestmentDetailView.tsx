import React, { useState } from 'react';
import { Investment } from '../../types';
import { CompletenessBadge } from './CompletenessBadge';
import { SourceTransparencyCard } from './SourceTransparencyCard';
import { DetailCalculator } from './DetailCalculator';
import {
  Building2,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  FileText,
  HelpCircle,
  Lock,
  Percent,
  Shield,
  ShieldCheck,
  TrendingUp,
  AlertTriangle,
  ArrowRight,
  ExternalLink,
  Coins,
  BadgeIndianRupee,
  Layers,
  Sparkles,
  Info,
  LogOut,
  Landmark
} from 'lucide-react';

interface InvestmentDetailViewProps {
  item: Investment;
  onNavigateComparison?: (slug: string) => void;
}

export const InvestmentDetailView: React.FC<InvestmentDetailViewProps> = ({ item, onNavigateComparison }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const isPPF = item.id === 'inv-ppf' || item.slug === 'public-provident-fund';
  const hasCalculator = isPPF || item.calculatorType === 'ppf' || item.calculatorType === 'compound';

  // Determine which metric cards to show
  const showMinInvestment = item.minInvestment !== undefined && item.minInvestment !== null;
  const showMaxInvestment = Boolean(item.maxInvestment);
  const showReturn = Boolean(item.notifiedRate || item.expectedReturn);
  const showTenure = Boolean(item.tenure || item.lockInPeriod);
  const showRisk = Boolean(item.riskLevel);
  const showAuthority = Boolean(item.authority);

  return (
    <div className="space-y-8">
      {/* 1. AT A GLANCE & HEADER */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-100">
              {item.category}
            </span>
            <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              {item.status}
            </span>
            <CompletenessBadge level={item.completenessLevel || 'COMPLETE'} type="Investment" />
          </div>
          {item.lastVerifiedDate && (
            <span className="text-xs text-slate-500 font-mono">
              Last Verified: {item.lastVerifiedDate}
            </span>
          )}
        </div>

        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-3">
            {item.title}
          </h1>
          <p className="text-base text-slate-600 leading-relaxed max-w-4xl">
            {item.description}
          </p>
        </div>

        {/* Core Financial Metric Highlights Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pt-2">
          {showMinInvestment && (
            <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Minimum Investment
              </span>
              <span className="text-base sm:text-lg font-bold text-slate-900">
                {item.minInvestment >= 100 ? `₹${item.minInvestment.toLocaleString('en-IN')}` : `${item.minInvestment} Unit`}
              </span>
              <span className="text-[10px] text-slate-500 block mt-0.5">
                {item.minInvestment >= 100 ? 'Initial entry amount' : 'Minimum trade lot'}
              </span>
            </div>
          )}

          {showMaxInvestment && (
            <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Maximum Limit
              </span>
              <span className="text-base sm:text-lg font-bold text-slate-900">
                {typeof item.maxInvestment === 'number'
                  ? `₹${item.maxInvestment.toLocaleString('en-IN')}`
                  : item.maxInvestment}
              </span>
              <span className="text-[10px] text-slate-500 block mt-0.5">Statutory / Scheme cap</span>
            </div>
          )}

          {showReturn && (
            <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Return / Yield Type
              </span>
              <span className="text-base sm:text-lg font-bold text-emerald-700 truncate block" title={item.notifiedRate || item.expectedReturn}>
                {item.notifiedRate || item.expectedReturn}
              </span>
              <span className="text-[10px] text-emerald-600 font-medium block mt-0.5">
                {item.notifiedRate ? 'Official Notified Rate' : 'Market-Linked Return'}
              </span>
            </div>
          )}

          {showTenure && (
            <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Tenure / Lock-in
              </span>
              <span className="text-base sm:text-lg font-bold text-slate-900">
                {item.tenure || item.lockInPeriod}
              </span>
              <span className="text-[10px] text-slate-500 block mt-0.5">Holding horizon</span>
            </div>
          )}

          {showRisk && (
            <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Risk Profile
              </span>
              <span className="text-base sm:text-lg font-bold text-indigo-700 flex items-center space-x-1">
                <Shield className="w-4 h-4 text-indigo-600 inline" />
                <span>{item.riskLevel} Risk</span>
              </span>
              <span className="text-[10px] text-slate-500 block mt-0.5">
                {item.riskLevel === 'Low' ? 'Capital preservation' : item.riskLevel === 'Medium' ? 'Moderate volatility' : 'High volatility & return'}
              </span>
            </div>
          )}

          {showAuthority && !showMaxInvestment && (
            <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Authority / Issuer
              </span>
              <span className="text-sm font-bold text-slate-900 truncate block" title={item.authority}>
                {item.authority}
              </span>
              <span className="text-[10px] text-slate-500 block mt-0.5">Regulated entity</span>
            </div>
          )}
        </div>
      </div>

      {/* Interactive Growth Calculator (if applicable) */}
      {hasCalculator && (
        <DetailCalculator
          productTitle={item.title}
          defaultAnnualRate={7.1}
          lockInYears={15}
          minAmount={item.minInvestment || 500}
          maxAmount={typeof item.maxInvestment === 'number' ? item.maxInvestment : 150000}
        />
      )}

      {/* In-Depth Information Architecture Sections */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-8">
        {/* SECTION 2: What is this? & Overview */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-indigo-600" />
            <span>Overview &amp; Purpose</span>
          </h2>
          <div className="prose prose-slate text-sm text-slate-700 leading-relaxed space-y-2">
            <p>{item.description}</p>
            {item.authority && (
              <p className="text-xs text-slate-500">
                Administered / Regulated by: <strong>{item.authority}</strong> under applicable statutory guidelines.
              </p>
            )}
          </div>
        </section>

        {/* SECTION 3: Eligibility (for schemes with specific eligibility details) */}
        {isPPF && (
          <section className="space-y-4 pt-6 border-t border-slate-100">
            <h2 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
              <ShieldCheck className="w-5 h-5 text-indigo-600" />
              <span>Who Can Invest &amp; Eligibility Criteria</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                  Eligible Individuals
                </span>
                <ul className="text-xs text-slate-700 space-y-1.5 list-disc list-inside">
                  <li>Any resident Indian citizen of any age.</li>
                  <li>Parents or legal guardians can open an account on behalf of a minor child.</li>
                  <li>One account per individual across all banks and post offices in India.</li>
                </ul>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                  Ineligible Entities &amp; Restrictions
                </span>
                <ul className="text-xs text-slate-700 space-y-1.5 list-disc list-inside">
                  <li><strong>Joint Accounts:</strong> Cannot be opened jointly under PPF rules.</li>
                  <li><strong>NRIs:</strong> Cannot open new PPF accounts. (Existing accounts opened before attaining NRI status remain valid till original 15-yr maturity).</li>
                  <li><strong>HUF / Trusts / Companies:</strong> Ineligible to open PPF accounts.</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* SECTION 4: Investment / Contribution / Deposit Rules */}
        {(item.depositRules || showMinInvestment || showMaxInvestment) && (
          <section className="space-y-4 pt-6 border-t border-slate-100">
            <h2 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
              <BadgeIndianRupee className="w-5 h-5 text-indigo-600" />
              <span>Investment &amp; Deposit Rules</span>
            </h2>
            <div className="p-4 bg-indigo-50/40 rounded-2xl border border-indigo-100 space-y-2 text-xs text-slate-700 leading-relaxed">
              {item.depositRules && <p>{item.depositRules}</p>}
              <div className="flex flex-wrap gap-4 pt-2 text-[11px] font-medium text-indigo-950">
                {showMinInvestment && <span>• Minimum Investment: <strong>{item.minInvestment >= 100 ? `₹${item.minInvestment.toLocaleString('en-IN')}` : `${item.minInvestment} Unit`}</strong></span>}
                {showMaxInvestment && <span>• Maximum Investment: <strong>{typeof item.maxInvestment === 'number' ? `₹${item.maxInvestment.toLocaleString('en-IN')}` : item.maxInvestment}</strong></span>}
              </div>
            </div>
          </section>
        )}

        {/* SECTION 5: Returns, Interest & Cash Flow Mechanism */}
        {(item.returnMechanism || item.expectedReturn || item.notifiedRate) && (
          <section className="space-y-4 pt-6 border-t border-slate-100">
            <h2 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-indigo-600" />
              <span>Return &amp; Cash Flow Mechanism</span>
            </h2>
            <div className="p-4 bg-emerald-50/40 rounded-2xl border border-emerald-100 space-y-2 text-xs text-slate-700 leading-relaxed">
              {item.returnMechanism && <p>{item.returnMechanism}</p>}
              {item.expectedReturn && (
                <p className="font-semibold text-emerald-900">
                  Expected Return Benchmark / Structure: {item.expectedReturn}
                </p>
              )}
              {item.rateEffectivePeriod && (
                <p className="text-[11px] text-slate-500">
                  Rate Effective Period: {item.rateEffectivePeriod}
                </p>
              )}
            </div>
          </section>
        )}

        {/* SECTION 6: Tenure, Maturity & Extensions */}
        {(item.tenure || item.lockInPeriod || item.maturityRules || item.extensionRules) && (
          <section className="space-y-4 pt-6 border-t border-slate-100">
            <h2 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-indigo-600" />
              <span>Tenure, Lock-In &amp; Maturity Structure</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-1.5">
                <span className="font-bold text-slate-900 block">Holding Period / Lock-In</span>
                <p className="text-slate-700 leading-relaxed">
                  {item.tenure || item.lockInPeriod}
                </p>
              </div>

              {item.maturityRules && (
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-1.5">
                  <span className="font-bold text-slate-900 block">Maturity Settlement</span>
                  <p className="text-slate-700 leading-relaxed">{item.maturityRules}</p>
                </div>
              )}

              {item.extensionRules && (
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-1.5 sm:col-span-2">
                  <span className="font-bold text-slate-900 block">Extension Options</span>
                  <p className="text-slate-700 leading-relaxed">{item.extensionRules}</p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* SECTION 7: Taxation & Statutory Treatment */}
        {item.taxTreatment && (
          <section className="space-y-4 pt-6 border-t border-slate-100">
            <h2 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
              <Lock className="w-5 h-5 text-indigo-600" />
              <span>Taxation &amp; Statutory Treatment</span>
            </h2>
            <div className="p-5 bg-emerald-50/60 border border-emerald-200/80 rounded-2xl space-y-3">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-bold text-emerald-950 uppercase tracking-wider">
                  Tax Guidelines &amp; Provisions
                </span>
              </div>
              <p className="text-xs text-emerald-900 leading-relaxed">
                {item.taxTreatment}
              </p>
              {item.nominationRules && (
                <div className="pt-2 border-t border-emerald-200/50 text-[11px] text-emerald-950">
                  <strong>Nomination Facility:</strong> {item.nominationRules}
                </div>
              )}
            </div>
          </section>
        )}

        {/* SECTION 8: Risk, Limitations & Important Rules */}
        {((item.importantRules && item.importantRules.length > 0) || (item.risksAndLimitations && item.risksAndLimitations.length > 0) || item.riskLevel) && (
          <section className="space-y-4 pt-6 border-t border-slate-100">
            <h2 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              <span>Important Rules, Conditions &amp; Risk Considerations</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              {item.importantRules && item.importantRules.length > 0 && (
                <div className="p-4 bg-amber-50/50 border border-amber-200/80 rounded-2xl space-y-2">
                  <span className="font-bold text-amber-950 block">Important Rules &amp; Guidelines</span>
                  <ul className="text-amber-900 space-y-1.5 list-disc list-inside">
                    {item.importantRules.map((rule, idx) => (
                      <li key={idx}>{rule}</li>
                    ))}
                  </ul>
                </div>
              )}

              {(item.risksAndLimitations && item.risksAndLimitations.length > 0) ? (
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
                  <span className="font-bold text-slate-900 block">Risks &amp; Limitations</span>
                  <ul className="text-slate-700 space-y-1.5 list-disc list-inside">
                    {item.risksAndLimitations.map((risk, idx) => (
                      <li key={idx}>{risk}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
                  <span className="font-bold text-slate-900 block">Risk Characteristics</span>
                  <p className="text-slate-700 leading-relaxed">
                    This instrument carries a <strong>{item.riskLevel || 'Standard'} Risk</strong> classification. Investors should review scheme information documents and align investments with their personal risk appetite and investment horizon.
                  </p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* SECTION 9: Withdrawal / Exit / Redemption */}
        {(item.withdrawalRules || item.prematureClosureRules || item.loanFacilityRules) && (
          <section className="space-y-4 pt-6 border-t border-slate-100">
            <h2 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
              <LogOut className="w-5 h-5 text-indigo-600" />
              <span>Withdrawal, Exit &amp; Redemption Facilities</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              {item.withdrawalRules && (
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-1.5">
                  <span className="font-bold text-slate-900 block">Redemption / Withdrawal Rules</span>
                  <p className="text-slate-700 leading-relaxed">{item.withdrawalRules}</p>
                </div>
              )}

              {item.prematureClosureRules && (
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-1.5">
                  <span className="font-bold text-slate-900 block">Premature Exit / Closure</span>
                  <p className="text-slate-700 leading-relaxed">{item.prematureClosureRules}</p>
                </div>
              )}

              {item.loanFacilityRules && (
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-1.5 sm:col-span-2">
                  <span className="font-bold text-slate-900 block">Loan Facility Against Balance</span>
                  <p className="text-slate-700 leading-relaxed">{item.loanFacilityRules}</p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* SECTION 10: How to Invest & Application Process */}
        {(item.whereToInvest || item.accountOpeningProcess || item.requiredDocuments) && (
          <section className="space-y-4 pt-6 border-t border-slate-100">
            <h2 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
              <FileText className="w-5 h-5 text-indigo-600" />
              <span>How to Invest &amp; Access Details</span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {item.accountOpeningProcess && item.accountOpeningProcess.length > 0 && (
                <div className="space-y-3">
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                    Process / Application Steps
                  </span>
                  <div className="space-y-2">
                    {item.accountOpeningProcess.map((step, idx) => (
                      <div key={idx} className="flex items-start space-x-3 p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs">
                        <span className="w-5 h-5 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center shrink-0 text-[10px]">
                          {idx + 1}
                        </span>
                        <span className="text-slate-700 leading-relaxed">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="space-y-3">
                {item.requiredDocuments && item.requiredDocuments.length > 0 && (
                  <>
                    <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                      Required Documents
                    </span>
                    <div className="space-y-2">
                      {item.requiredDocuments.map((doc, idx) => (
                        <div key={idx} className="flex items-center space-x-2.5 p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{doc}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {item.whereToInvest && (
                  <div className="p-3.5 bg-slate-100 rounded-xl text-xs text-slate-600">
                    <span className="font-semibold text-slate-800 block mb-0.5">Where to Invest / Transact:</span>
                    {item.whereToInvest}
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* SECTION 11: Comparison with Peer Investments */}
        {item.comparisonSlugs && item.comparisonSlugs.length > 0 && (
          <section className="space-y-4 pt-6 border-t border-slate-100">
            <h2 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
              <Layers className="w-5 h-5 text-indigo-600" />
              <span>Compare with Alternative Instruments</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-white border border-slate-200 rounded-2xl space-y-3 hover:border-indigo-300 transition">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-sm">PPF vs NSC</span>
                  <span className="text-[10px] font-bold bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded">15 Yr vs 5 Yr</span>
                </div>
                <p className="text-slate-600">
                  Compare Public Provident Fund (15-year EEE tax-free) against National Savings Certificate (5-year fixed tenure).
                </p>
                <button
                  type="button"
                  onClick={() => onNavigateComparison ? onNavigateComparison('public-provident-fund-vs-national-savings-certificate') : window.location.assign('/investments/national-savings-certificate')}
                  className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center space-x-1"
                >
                  <span>Explore Comparison</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="p-4 bg-white border border-slate-200 rounded-2xl space-y-3 hover:border-indigo-300 transition">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 text-sm">PPF vs Sukanya Samriddhi (SSY)</span>
                  <span className="text-[10px] font-bold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded">Retirement vs Girl Child</span>
                </div>
                <p className="text-slate-600">
                  Compare PPF with Sukanya Samriddhi Account dedicated to the education and marriage of the girl child.
                </p>
                <button
                  type="button"
                  onClick={() => onNavigateComparison ? onNavigateComparison('public-provident-fund-vs-sukanya-samriddhi-account') : window.location.assign('/investments/sukanya-samriddhi-account')}
                  className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center space-x-1"
                >
                  <span>Explore Comparison</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </section>
        )}

        {/* SECTION 12: Frequently Asked Questions */}
        {item.faqs && item.faqs.length > 0 && (
          <section className="space-y-4 pt-6 border-t border-slate-100">
            <h2 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
              <HelpCircle className="w-5 h-5 text-indigo-600" />
              <span>Frequently Asked Questions</span>
            </h2>
            <div className="space-y-2">
              {item.faqs.map((faq, idx) => (
                <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden">
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 text-left flex items-center justify-between text-xs font-bold text-slate-800 hover:bg-slate-50 transition"
                  >
                    <span>{faq.question}</span>
                    {openFaqIndex === idx ? <ChevronUp className="w-4 h-4 text-indigo-600" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                  </button>
                  {openFaqIndex === idx && (
                    <div className="p-4 pt-0 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* 13. OFFICIAL SOURCE TRANSPARENCY & VERIFICATION */}
      <SourceTransparencyCard
        authority={item.authority}
        sourceAuthority={item.sourceAuthority}
        sourceUrl={item.sourceUrl}
        verificationStatus={item.verificationStatus}
        lastVerifiedDate={item.lastVerifiedDate || '2026-03-16'}
      />
    </div>
  );
};
