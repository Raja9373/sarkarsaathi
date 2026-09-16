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
  Sparkles
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

  return (
    <div className="space-y-8">
      {/* Header Badge & Title */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-100">
              {item.category}
            </span>
            <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              {item.status}
            </span>
            <CompletenessBadge level={item.completenessLevel || (isPPF ? 'COMPLETE' : 'MOSTLY_COMPLETE')} type="Investment" />
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
          <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Minimum Investment
            </span>
            <span className="text-base sm:text-lg font-bold text-slate-900">
              ₹{item.minInvestment?.toLocaleString('en-IN') || '500'}
            </span>
            <span className="text-[10px] text-slate-500 block mt-0.5">per financial year</span>
          </div>

          <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Maximum Limit
            </span>
            <span className="text-base sm:text-lg font-bold text-slate-900">
              {item.maxInvestment ? `₹${Number(item.maxInvestment).toLocaleString('en-IN')}` : '₹1,50,000'}
            </span>
            <span className="text-[10px] text-slate-500 block mt-0.5">80C eligible cap</span>
          </div>

          <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Notified Return
            </span>
            <span className="text-base sm:text-lg font-bold text-emerald-700 truncate block" title={item.expectedReturn}>
              {item.notifiedRate || item.expectedReturn}
            </span>
            <span className="text-[10px] text-emerald-600 font-medium block mt-0.5">Compounded Annually</span>
          </div>

          <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Lock-In / Tenure
            </span>
            <span className="text-base sm:text-lg font-bold text-slate-900">
              {item.tenure || item.lockInPeriod}
            </span>
            <span className="text-[10px] text-slate-500 block mt-0.5">Renewable in 5-yr blocks</span>
          </div>

          <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Sovereign Risk
            </span>
            <span className="text-base sm:text-lg font-bold text-indigo-700 flex items-center space-x-1">
              <Shield className="w-4 h-4 text-indigo-600 inline" />
              <span>{item.riskLevel || 'Low (Sovereign)'}</span>
            </span>
            <span className="text-[10px] text-slate-500 block mt-0.5">Govt of India Guarantee</span>
          </div>
        </div>
      </div>

      {/* Interactive Growth Calculator */}
      <DetailCalculator
        productTitle={item.title}
        defaultAnnualRate={7.1}
        lockInYears={15}
        minAmount={item.minInvestment || 500}
        maxAmount={typeof item.maxInvestment === 'number' ? item.maxInvestment : 150000}
      />

      {/* In-Depth Information Architecture Sections */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-8">
        {/* SECTION 1: What is it & Purpose */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-indigo-600" />
            <span>Understanding {item.title}</span>
          </h2>
          <div className="prose prose-slate text-sm text-slate-700 leading-relaxed space-y-2">
            <p>
              The <strong>{item.title}</strong> is a premier sovereign small savings instrument established by the Government of India under the <em>Government Savings Banks Act</em> and administered by the Ministry of Finance. It was conceived to encourage long-term retirement savings and financial discipline among citizens while providing absolute capital security and sovereign-guaranteed interest returns.
            </p>
            <p>
              Unlike market-linked equities or mutual funds, PPF balances carry no market volatility risk and are fully backed by the Central Government.
            </p>
          </div>
        </section>

        {/* SECTION 2: Who Can Invest & Eligibility */}
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

        {/* SECTION 3: Contribution, Return & Deposit Rules */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
            <BadgeIndianRupee className="w-5 h-5 text-indigo-600" />
            <span>Deposit Rules &amp; Interest Compounding Mechanism</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="p-4 bg-indigo-50/50 rounded-2xl border border-indigo-100 space-y-2">
              <span className="font-bold text-indigo-950 block">Deposit Limits</span>
              <p className="text-slate-700 leading-relaxed">
                {item.depositRules || 'Minimum deposit is ₹500 and maximum is ₹1,50,000 per financial year. Deposits can be made in lump sum or in multiple installments.'}
              </p>
            </div>

            <div className="p-4 bg-indigo-50/50 rounded-2xl border border-indigo-100 space-y-2">
              <span className="font-bold text-indigo-950 block">Interest Calculation Rule</span>
              <p className="text-slate-700 leading-relaxed">
                {item.returnMechanism || 'Interest is calculated on the lowest balance maintained between the close of the 5th day and the end of the month, credited annually on 31st March.'}
              </p>
            </div>

            <div className="p-4 bg-indigo-50/50 rounded-2xl border border-indigo-100 space-y-2">
              <span className="font-bold text-indigo-950 block">Golden Contribution Tip</span>
              <p className="text-slate-700 leading-relaxed">
                Always deposit your PPF contribution <strong>on or before the 5th of each month</strong> to earn interest for that entire calendar month.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4: Maturity, Extensions & Liquidity Facilities */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
            <Coins className="w-5 h-5 text-indigo-600" />
            <span>Maturity, Extensions, Withdrawals &amp; Loan Facilities</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
              <span className="font-bold text-slate-900 block">15-Year Maturity &amp; 5-Year Extensions</span>
              <p className="text-slate-700 leading-relaxed">
                {item.maturityRules || 'Matures after 15 full financial years.'} {item.extensionRules || 'Can be extended indefinitely in 5-year blocks with or without fresh contributions.'}
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
              <span className="font-bold text-slate-900 block">Partial Withdrawals (7th Year Onward)</span>
              <p className="text-slate-700 leading-relaxed">
                {item.withdrawalRules || 'Allowed from the 7th financial year up to 50% of the eligible credit balance.'}
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
              <span className="font-bold text-slate-900 block">Premature Closure Conditions (After 5 Years)</span>
              <p className="text-slate-700 leading-relaxed">
                {item.prematureClosureRules || 'Allowed after 5 years for critical illness treatment, higher education, or change in residency with 1% interest rate deduction penalty.'}
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
              <span className="font-bold text-slate-900 block">Low-Interest Loan Facility (3rd to 6th Year)</span>
              <p className="text-slate-700 leading-relaxed">
                {item.loanFacilityRules || 'Loan available up to 25% of balance at end of 2nd preceding year, charged at 1% interest above PPF rate if repaid in 36 months.'}
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5: Tax Treatment (EEE Status) & Statutory Protections */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
            <Lock className="w-5 h-5 text-indigo-600" />
            <span>Tax Benefits (Exempt-Exempt-Exempt) &amp; Court Attachment Immunity</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 bg-emerald-50/60 border border-emerald-200/80 rounded-2xl space-y-3">
              <span className="text-xs font-bold text-emerald-950 uppercase tracking-wider flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Exempt-Exempt-Exempt (EEE) Category</span>
              </span>
              <ul className="text-xs text-emerald-900 space-y-2">
                <li><strong>Deposit Phase:</strong> Claim tax deduction up to ₹1,50,000 under Section 80C.</li>
                <li><strong>Accumulation Phase:</strong> Annual interest accrued is completely tax-free under Section 10(11).</li>
                <li><strong>Maturity Phase:</strong> Final lump sum payout and withdrawals are 100% tax-exempt.</li>
              </ul>
            </div>

            <div className="p-5 bg-blue-50/60 border border-blue-200/80 rounded-2xl space-y-3">
              <span className="text-xs font-bold text-blue-950 uppercase tracking-wider flex items-center space-x-1.5">
                <Shield className="w-4 h-4 text-blue-600" />
                <span>Statutory Immunity &amp; Nomination</span>
              </span>
              <ul className="text-xs text-blue-900 space-y-2">
                <li><strong>Court Immunity:</strong> PPF balances cannot be attached by any court decree in respect of any debt or creditor liability under Government Savings Banks Act.</li>
                <li><strong>Nomination:</strong> Multiple nominees with percentage allocations can be registered and updated anytime.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 6: Account Opening Process & Documents Required */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
            <FileText className="w-5 h-5 text-indigo-600" />
            <span>How to Open an Account &amp; Required Documents</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-3">
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                Step-by-Step Account Opening
              </span>
              <div className="space-y-2">
                {(item.accountOpeningProcess || [
                  'Select an authorized Post Office or designated commercial bank branch (SBI, PNB, BoB, HDFC, ICICI, etc.).',
                  'Fill out Form-1 (Application for opening PPF Account).',
                  'Submit KYC documents (Aadhaar, PAN, identity and address proofs).',
                  'Deposit initial opening amount (minimum ₹500).',
                  'Receive passbook or internet banking linking for digital transfers.'
                ]).map((step, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs">
                    <span className="w-5 h-5 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center shrink-0 text-[10px]">
                      {idx + 1}
                    </span>
                    <span className="text-slate-700 leading-relaxed">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                Required KYC Documentation
              </span>
              <div className="space-y-2">
                {(item.requiredDocuments || [
                  'Form-1 Account Opening Form',
                  'Identity Proof (Aadhaar Card, Passport, Voter ID, Driving License)',
                  'Address Proof (Aadhaar, Utility Bill, Bank Statement)',
                  'PAN Card or Form 60',
                  'Two recent passport-sized photographs'
                ]).map((doc, idx) => (
                  <div key={idx} className="flex items-center space-x-2.5 p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{doc}</span>
                  </div>
                ))}
              </div>

              <div className="p-3.5 bg-slate-100 rounded-xl text-xs text-slate-600">
                <span className="font-semibold text-slate-800 block mb-0.5">Where to Invest:</span>
                {item.whereToInvest || 'Available across all India Post branches and major designated nationalized and private commercial banks.'}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: Important Rules & Limitations */}
        <section className="space-y-4 pt-6 border-t border-slate-100">
          <h2 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
            <AlertTriangle className="w-5 h-5 text-amber-600" />
            <span>Important Rules, Restrictions &amp; Limitations</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 bg-amber-50/50 border border-amber-200/80 rounded-2xl space-y-2">
              <span className="font-bold text-amber-950 block">Operational Rules &amp; Penalties</span>
              <ul className="text-amber-900 space-y-1.5 list-disc list-inside">
                <li>If minimum ₹500 is not deposited in a financial year, the account becomes inactive.</li>
                <li>Revival fee is ₹50 default penalty per inactive year plus ₹500 minimum deposit per year.</li>
                <li>Deposits in excess of ₹1.5 Lakh in a financial year earn no interest and are refunded.</li>
              </ul>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
              <span className="font-bold text-slate-900 block">Risks &amp; Limitations</span>
              <ul className="text-slate-700 space-y-1.5 list-disc list-inside">
                <li>15-year statutory lock-in period restricts short-term emergency liquidity.</li>
                <li>Interest rate is variable and reviewed quarterly by the Ministry of Finance.</li>
                <li>Annual 80C tax deduction benefit capped at ₹1.5 Lakh across all combined 80C instruments.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 8: Comparison with Peer Sovereign Investments */}
        {item.comparisonSlugs && item.comparisonSlugs.length > 0 && (
          <section className="space-y-4 pt-6 border-t border-slate-100">
            <h2 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
              <Layers className="w-5 h-5 text-indigo-600" />
              <span>Compare with Alternative Sovereign Instruments</span>
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

        {/* SECTION 9: Frequently Asked Questions */}
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

      {/* Official Source Transparency */}
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
