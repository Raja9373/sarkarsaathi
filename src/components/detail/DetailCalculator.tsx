import React, { useState, useMemo } from 'react';
import { Calculator, TrendingUp, Info, HelpCircle } from 'lucide-react';

interface DetailCalculatorProps {
  productTitle: string;
  defaultAnnualRate?: number;
  rateLabel?: string;
  lockInYears?: number;
  minAmount?: number;
  maxAmount?: number;
  allowRateAdjustment?: boolean;
}

export const DetailCalculator: React.FC<DetailCalculatorProps> = ({
  productTitle,
  defaultAnnualRate = 7.1,
  rateLabel = '7.1% p.a. (Compounded Annually, Notified by MoF)',
  lockInYears = 15,
  minAmount = 500,
  maxAmount = 150000,
  allowRateAdjustment = false
}) => {
  const [annualDeposit, setAnnualDeposit] = useState<number>(100000);
  const [tenureYears, setTenureYears] = useState<number>(lockInYears);
  const [customRate, setCustomRate] = useState<number>(defaultAnnualRate);
  const [depositFrequency, setDepositFrequency] = useState<'annual' | 'monthly'>('annual');

  const calculation = useMemo(() => {
    const rate = (allowRateAdjustment ? customRate : defaultAnnualRate) / 100;
    const years = tenureYears;
    
    let totalInvested = 0;
    let balance = 0;
    const yearlyBreakdown: Array<{ year: number; deposited: number; interestEarned: number; closingBalance: number }> = [];

    if (depositFrequency === 'annual') {
      for (let y = 1; y <= years; y++) {
        totalInvested += annualDeposit;
        const interest = (balance + annualDeposit) * rate;
        balance = balance + annualDeposit + interest;
        yearlyBreakdown.push({
          year: y,
          deposited: totalInvested,
          interestEarned: interest,
          closingBalance: balance
        });
      }
    } else {
      // Monthly deposit (assuming deposited before 5th of each month)
      const monthlyDeposit = annualDeposit / 12;
      for (let y = 1; y <= years; y++) {
        let yearInterest = 0;
        for (let m = 1; m <= 12; m++) {
          totalInvested += monthlyDeposit;
          balance += monthlyDeposit;
          // monthly simple interest component compounded at end of year
          yearInterest += balance * (rate / 12);
        }
        balance += yearInterest;
        yearlyBreakdown.push({
          year: y,
          deposited: totalInvested,
          interestEarned: yearInterest,
          closingBalance: balance
        });
      }
    }

    const totalInterest = balance - totalInvested;
    return {
      totalInvested: Math.round(totalInvested),
      totalInterest: Math.round(totalInterest),
      maturityValue: Math.round(balance),
      yearlyBreakdown
    };
  }, [annualDeposit, tenureYears, customRate, defaultAnnualRate, allowRateAdjustment, depositFrequency]);

  return (
    <div className="bg-white border border-indigo-100 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-2">
        <div className="flex items-center space-x-2">
          <div className="p-2 bg-indigo-50 text-indigo-700 rounded-xl">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900">{productTitle} Compound Growth Calculator</h3>
            <p className="text-xs text-slate-500">
              Interactive returns and wealth accumulation estimation.
            </p>
          </div>
        </div>

        <div className="bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-xl text-xs font-semibold text-emerald-800 flex items-center space-x-1">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Notified Rate: {defaultAnnualRate}% p.a.</span>
        </div>
      </div>

      {/* Inputs Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div>
          <div className="flex justify-between items-center mb-1.5">
            <label className="text-xs font-bold text-slate-700">
              {depositFrequency === 'annual' ? 'Annual Investment (₹)' : 'Yearly Budget (₹)'}
            </label>
            <span className="text-xs font-mono font-bold text-indigo-600">
              ₹{annualDeposit.toLocaleString('en-IN')}
            </span>
          </div>
          <input
            type="range"
            min={minAmount}
            max={maxAmount}
            step={500}
            value={annualDeposit}
            onChange={(e) => setAnnualDeposit(Number(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
          />
          <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
            <span>Min: ₹{minAmount.toLocaleString('en-IN')}</span>
            <span>Max: ₹{maxAmount.toLocaleString('en-IN')}</span>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-1.5">
            <label className="text-xs font-bold text-slate-700">Investment Tenure</label>
            <span className="text-xs font-mono font-bold text-indigo-600">{tenureYears} Years</span>
          </div>
          <select
            value={tenureYears}
            onChange={(e) => setTenureYears(Number(e.target.value))}
            className="w-full text-xs p-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-500 font-medium text-slate-800"
          >
            <option value={5}>5 Years (Partial Extension)</option>
            <option value={10}>10 Years</option>
            <option value={15}>15 Years (Full Statutory Maturity)</option>
            <option value={20}>20 Years (1 Block Extension)</option>
            <option value={25}>25 Years (2 Block Extensions)</option>
            <option value={30}>30 Years (3 Block Extensions)</option>
          </select>
          <span className="text-[10px] text-slate-400 mt-1 block">
            Standard maturity is 15 years; 5-year extensions allowed.
          </span>
        </div>

        <div>
          <label className="text-xs font-bold text-slate-700 block mb-1.5">Deposit Frequency</label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setDepositFrequency('annual')}
              className={`py-2 text-xs font-semibold rounded-xl border transition ${
                depositFrequency === 'annual'
                  ? 'bg-indigo-600 text-white border-indigo-600'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              Lump Sum / Yearly
            </button>
            <button
              type="button"
              onClick={() => setDepositFrequency('monthly')}
              className={`py-2 text-xs font-semibold rounded-xl border transition ${
                depositFrequency === 'monthly'
                  ? 'bg-indigo-600 text-white border-indigo-600'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              Monthly (Before 5th)
            </button>
          </div>
          <span className="text-[10px] text-slate-400 mt-1 block">
            Depositing before the 5th earns full month interest.
          </span>
        </div>
      </div>

      {/* Results Summary Box */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-gradient-to-br from-indigo-50/70 via-slate-50 to-emerald-50/50 p-5 rounded-2xl border border-indigo-100/80">
        <div className="space-y-1">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
            Total Principal Invested
          </span>
          <span className="text-lg sm:text-xl font-bold text-slate-800">
            ₹{calculation.totalInvested.toLocaleString('en-IN')}
          </span>
        </div>

        <div className="space-y-1">
          <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider block">
            Total Compound Interest
          </span>
          <span className="text-lg sm:text-xl font-bold text-emerald-700">
            +₹{calculation.totalInterest.toLocaleString('en-IN')}
          </span>
        </div>

        <div className="space-y-1">
          <span className="text-xs font-semibold text-indigo-700 uppercase tracking-wider block">
            Estimated Maturity Corpus (Tax-Free)
          </span>
          <span className="text-xl sm:text-2xl font-black text-indigo-900">
            ₹{calculation.maturityValue.toLocaleString('en-IN')}
          </span>
        </div>
      </div>

      {/* Parameter Clarity & Assumptions Note */}
      <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600 space-y-1">
        <div className="flex items-center space-x-1.5 font-bold text-slate-800">
          <Info className="w-3.5 h-3.5 text-indigo-600" />
          <span>Calculation Methodology & Statutory Disclosure:</span>
        </div>
        <p className="text-[11px] leading-relaxed">
          • <strong>Actual Notified Rate:</strong> Calculated using the official Ministry of Finance notified benchmark rate of <strong>{defaultAnnualRate}% per annum</strong> compounded annually.<br />
          • <strong>Tax Treatment (EEE):</strong> Under Section 80C and Section 10(11) of the Income Tax Act, the entire interest earned and maturity proceeds are exempt from income tax.<br />
          • <strong>Assumption:</strong> Future returns assume the notified rate remains constant throughout the tenure. Notified rates are subject to quarterly review by the Government of India.
        </p>
      </div>
    </div>
  );
};
