import React, { useState } from 'react';
import { Calculator, ArrowRight, DollarSign, Calendar, Landmark, Percent } from 'lucide-react';
import { 
  calculateIncomeTax, 
  calculateDelhiMcdPropertyTax, 
  calculateDelhiStampDuty, 
  calculateEmi, 
  calculateGratuity, 
  calculateEpf, 
  calculateAge 
} from '../utils/calculators';

export const CalculatorsHub: React.FC = () => {
  const [activeCalc, setActiveCalc] = useState<string>('income-tax');

  // Income Tax State
  const [annualIncome, setAnnualIncome] = useState<number>(1200000);
  const taxNew = calculateIncomeTax(annualIncome, 'new');
  const taxOld = calculateIncomeTax(annualIncome, 'old');

  // MCD Property Tax State
  const [coveredArea, setCoveredArea] = useState<number>(100);
  const [mcdCat, setMcdCat] = useState<'A'|'B'|'C'|'D'|'E'|'F'|'G'|'H'>('C');
  const [occupancy, setOccupancy] = useState<'Self Occupied'|'Rented'>('Self Occupied');
  const mcdTax = calculateDelhiMcdPropertyTax(coveredArea, mcdCat, occupancy, 'Pucca');

  // Stamp Duty State
  const [propValue, setPropValue] = useState<number>(5000000);
  const [gender, setGender] = useState<'male'|'female'|'joint'>('female');
  const stampDuty = calculateDelhiStampDuty(propValue, gender);

  // EMI State
  const [loanAmt, setLoanAmt] = useState<number>(3000000);
  const [rate, setRate] = useState<number>(8.5);
  const [tenure, setTenure] = useState<number>(20);
  const emiRes = calculateEmi(loanAmt, rate, tenure);

  // Gratuity State
  const [basicSalary, setBasicSalary] = useState<number>(50000);
  const [tenureYears, setTenureYears] = useState<number>(7);
  const [isCovered, setIsCovered] = useState<boolean>(true);
  const gratuityRes = calculateGratuity(basicSalary, tenureYears, isCovered);

  // EPF State
  const [epfBasic, setEpfBasic] = useState<number>(30000);
  const [age, setAge] = useState<number>(28);
  const [retirementAge, setRetirementAge] = useState<number>(58);
  const [epfBalance, setEpfBalance] = useState<number>(0);
  const [epfHike, setEpfHike] = useState<number>(5);
  const epfRes = calculateEpf(epfBasic, age, retirementAge, epfBalance, epfHike);

  // Age Calculator State
  const [dob, setDob] = useState<string>('1998-08-15');
  const ageRes = calculateAge(dob);

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto bg-[#0B0F17] text-zinc-100">
      <div className="mb-8 border-b border-zinc-800 pb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-800/60 text-xs font-bold uppercase mb-2">
          <Calculator className="w-3.5 h-3.5" /> Financial & Government Calculators
        </div>
        <h2 className="text-3xl font-black text-white">Government Calculators & Planning Tools</h2>
        <p className="text-sm text-zinc-400 mt-1 max-w-2xl">
          Calculate Income Tax (New vs Old Regime), MCD Delhi Property Tax, Delhi Stamp Duty, Loan EMI, EPF, and Gratuity accurately.
        </p>
      </div>

      {/* Selector Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {[
          { id: 'income-tax', label: 'Income Tax (Old vs New)' },
          { id: 'mcd-tax', label: 'Delhi MCD Property Tax' },
          { id: 'stamp-duty', label: 'Delhi Stamp Duty' },
          { id: 'emi', label: 'Loan EMI Calculator' },
          { id: 'gratuity', label: 'Gratuity Calculator' },
          { id: 'epf', label: 'EPF Growth Calculator' },
          { id: 'age', label: 'Age Calculator' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveCalc(tab.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
              activeCalc === tab.id 
                ? 'bg-[#FF6B00] text-white shadow-lg' 
                : 'bg-[#121824] border border-zinc-800 text-zinc-400 hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Active Calculator Box */}
      <div className="bg-[#121824] border border-zinc-800 rounded-2xl p-6 shadow-2xl">
        {activeCalc === 'income-tax' && (
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white">Income Tax Calculator (FY 2025-26 / FY 2024-25)</h3>
            <div className="max-w-md space-y-2">
              <label className="text-xs text-zinc-400 font-bold block">Annual Gross Salary / Income (₹)</label>
              <input
                type="number"
                value={annualIncome}
                onChange={(e) => setAnnualIncome(Number(e.target.value))}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white text-base font-mono font-bold focus:outline-none focus:border-[#FF6B00]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-[#182338] border border-[#FF6B00]/40 space-y-3">
                <span className="text-xs font-bold text-[#FF6B00] uppercase tracking-wider block">New Tax Regime (Recommended)</span>
                <p className="text-xs text-zinc-400">Standard Deduction: ₹75,000</p>
                <div className="pt-2">
                  <span className="text-2xl font-black text-white font-mono">₹{taxNew.finalTax.toLocaleString('en-IN')}</span>
                  <span className="text-xs text-zinc-400 block mt-1">Total Payable Income Tax</span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-3">
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">Old Tax Regime</span>
                <p className="text-xs text-zinc-400">Standard Deduction: ₹50,000</p>
                <div className="pt-2">
                  <span className="text-2xl font-black text-zinc-200 font-mono">₹{taxOld.finalTax.toLocaleString('en-IN')}</span>
                  <span className="text-xs text-zinc-400 block mt-1">Total Payable Income Tax</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeCalc === 'mcd-tax' && (
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white">Delhi MCD Property Tax Calculator (Unit Area System)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="text-xs text-zinc-400 font-bold block mb-1">Covered Area (Sq. Meters)</label>
                <input
                  type="number"
                  value={coveredArea}
                  onChange={(e) => setCoveredArea(Number(e.target.value))}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-white font-mono focus:outline-none focus:border-[#FF6B00]"
                />
              </div>

              <div>
                <label className="text-xs text-zinc-400 font-bold block mb-1">MCD Category Zone</label>
                <select
                  value={mcdCat}
                  onChange={(e) => setMcdCat(e.target.value as any)}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-white text-xs focus:outline-none"
                >
                  <option value="A">Category A (Prime / Colony e.g. Vasant Vihar, Defence Colony)</option>
                  <option value="B">Category B (Greater Kailash, Safdarjung)</option>
                  <option value="C">Category C (Lajpat Nagar, Pitampura)</option>
                  <option value="D">Category D (Janakpuri, Mayur Vihar)</option>
                  <option value="E">Category E (Rohini, Laxmi Nagar)</option>
                </select>
              </div>

              <div>
                <label className="text-xs text-zinc-400 font-bold block mb-1">Occupancy</label>
                <select
                  value={occupancy}
                  onChange={(e) => setOccupancy(e.target.value as any)}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-white text-xs focus:outline-none"
                >
                  <option value="Self Occupied">Self Occupied (Factor 1.0)</option>
                  <option value="Rented">Rented Out (Factor 2.0)</option>
                </select>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <span className="text-xs text-zinc-400 block">Gross Tax</span>
                <span className="text-lg font-bold text-white font-mono">₹{mcdTax.grossTax.toLocaleString('en-IN')}</span>
              </div>
              <div>
                <span className="text-xs text-zinc-400 block">10% Early Bird Rebate</span>
                <span className="text-lg font-bold text-emerald-400 font-mono">₹{mcdTax.rebate.toLocaleString('en-IN')}</span>
              </div>
              <div>
                <span className="text-xs text-zinc-400 block">Net Payable Property Tax</span>
                <span className="text-xl font-black text-[#FF6B00] font-mono">₹{mcdTax.netTax.toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>
        )}

        {activeCalc === 'stamp-duty' && (
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white">Delhi Property Stamp Duty & Registration Fee Calculator</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-zinc-400 font-bold block mb-1">Property Value / Consideration (₹)</label>
                <input
                  type="number"
                  value={propValue}
                  onChange={(e) => setPropValue(Number(e.target.value))}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-white font-mono focus:outline-none focus:border-[#FF6B00]"
                />
              </div>

              <div>
                <label className="text-xs text-zinc-400 font-bold block mb-1">Owner Gender / Joint Ownership</label>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value as any)}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-white text-xs focus:outline-none"
                >
                  <option value="female">Female Owner (4% Stamp Duty - Discounted)</option>
                  <option value="male">Male Owner (6% Stamp Duty)</option>
                  <option value="joint">Joint Owner (Male + Female) (5% Stamp Duty)</option>
                </select>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-3">
              <div className="flex justify-between text-xs">
                <span className="text-zinc-400">Stamp Duty ({stampDuty.stampDutyRatePercent}%):</span>
                <span className="font-mono font-bold text-white">₹{stampDuty.stampDuty.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-zinc-400">Registration Fee (1%):</span>
                <span className="font-mono font-bold text-white">₹{stampDuty.registrationFee.toLocaleString('en-IN')}</span>
              </div>
              <div className="border-t border-zinc-800 pt-2 flex justify-between text-sm font-bold">
                <span className="text-[#FF6B00]">Total Govt Registration Payable:</span>
                <span className="font-mono text-xl text-[#FF6B00]">₹{stampDuty.totalPayable.toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>
        )}

        {activeCalc === 'emi' && (
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white">Loan EMI Calculator</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="text-xs text-zinc-400 font-bold block mb-1">Loan Principal (₹)</label>
                <input
                  type="number"
                  value={loanAmt}
                  onChange={(e) => setLoanAmt(Number(e.target.value))}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-white font-mono"
                />
              </div>
              <div>
                <label className="text-xs text-zinc-400 font-bold block mb-1">Annual Interest Rate (%)</label>
                <input
                  type="number"
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-white font-mono"
                />
              </div>
              <div>
                <label className="text-xs text-zinc-400 font-bold block mb-1">Tenure (Years)</label>
                <input
                  type="number"
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-white font-mono"
                />
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <span className="text-xs text-zinc-400 block">Monthly EMI</span>
                <span className="text-2xl font-black text-[#FF6B00] font-mono">₹{emiRes.emi.toLocaleString('en-IN')}</span>
              </div>
              <div>
                <span className="text-xs text-zinc-400 block">Total Interest Payable</span>
                <span className="text-lg font-bold text-amber-400 font-mono">₹{emiRes.totalInterest.toLocaleString('en-IN')}</span>
              </div>
              <div>
                <span className="text-xs text-zinc-400 block">Total Amount Paid</span>
                <span className="text-lg font-bold text-white font-mono">₹{emiRes.totalPayment.toLocaleString('en-IN')}</span>
              </div>
            </div>
          </div>
        )}

        {activeCalc === 'gratuity' && (
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white">Gratuity Calculator (Payment of Gratuity Act 1972)</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="text-xs text-zinc-400 font-bold block mb-1">Monthly Basic Salary + DA (₹)</label>
                <input
                  type="number"
                  value={basicSalary}
                  onChange={(e) => setBasicSalary(Number(e.target.value))}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-white font-mono focus:outline-none focus:border-[#FF6B00]"
                  placeholder="e.g. 50000"
                />
              </div>

              <div>
                <label className="text-xs text-zinc-400 font-bold block mb-1">Total Continuous Tenure (Years)</label>
                <input
                  type="number"
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Number(e.target.value))}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-white font-mono focus:outline-none focus:border-[#FF6B00]"
                  placeholder="e.g. 7"
                />
              </div>

              <div>
                <label className="text-xs text-zinc-400 font-bold block mb-1">Org Covered under Gratuity Act?</label>
                <select
                  value={isCovered ? 'yes' : 'no'}
                  onChange={(e) => setIsCovered(e.target.value === 'yes')}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-white text-xs focus:outline-none"
                >
                  <option value="yes">Yes - Factor 15/26 (Standard Corporate/Govt)</option>
                  <option value="no">No - Factor 15/30 (Non-Covered Org)</option>
                </select>
              </div>
            </div>

            {/* Status Banner */}
            <div className={`p-4 rounded-xl border text-xs leading-relaxed ${
              gratuityRes.eligible 
                ? 'bg-emerald-950/40 border-emerald-800/60 text-emerald-300' 
                : 'bg-amber-950/40 border-amber-800/60 text-amber-300'
            }`}>
              <span className="font-bold block mb-0.5">
                {gratuityRes.eligible ? '✓ Eligible for Gratuity Payout' : '⚠️ Minimum Service Threshold Notice'}
              </span>
              {gratuityRes.message}
            </div>

            {/* Result Breakdown */}
            <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <span className="text-xs text-zinc-400 block">Total Gratuity Payable</span>
                <span className="text-2xl font-black text-[#FF6B00] font-mono">
                  ₹{gratuityRes.amount.toLocaleString('en-IN')}
                </span>
              </div>
              <div>
                <span className="text-xs text-zinc-400 block">Tax-Exempt Portion (Sec 10(10))</span>
                <span className="text-lg font-bold text-emerald-400 font-mono">
                  ₹{gratuityRes.taxExempt.toLocaleString('en-IN')}
                </span>
              </div>
              <div>
                <span className="text-xs text-zinc-400 block">Taxable Gratuity Portion</span>
                <span className="text-lg font-bold text-white font-mono">
                  ₹{gratuityRes.taxable.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            <p className="text-[11px] text-zinc-500 italic">
              * Gratuity Formula: (15 × Monthly Basic Salary + DA × Tenure Years) ÷ {isCovered ? '26' : '30'}. Maximum tax exemption under Indian Income Tax Act is ₹20,000,000 (20 Lakhs).
            </p>
          </div>
        )}

        {activeCalc === 'epf' && (
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white">EPF Growth & Corpus Calculator (8.25% p.a. EPFO Rate)</h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="text-xs text-zinc-400 font-bold block mb-1">Monthly Basic Salary + DA (₹)</label>
                <input
                  type="number"
                  value={epfBasic}
                  onChange={(e) => setEpfBasic(Number(e.target.value))}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-white font-mono focus:outline-none focus:border-[#FF6B00]"
                />
              </div>

              <div>
                <label className="text-xs text-zinc-400 font-bold block mb-1">Current Age (Years)</label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-white font-mono focus:outline-none focus:border-[#FF6B00]"
                />
              </div>

              <div>
                <label className="text-xs text-zinc-400 font-bold block mb-1">Retirement Target Age (Years)</label>
                <input
                  type="number"
                  value={retirementAge}
                  onChange={(e) => setRetirementAge(Number(e.target.value))}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-white font-mono focus:outline-none focus:border-[#FF6B00]"
                />
              </div>

              <div>
                <label className="text-xs text-zinc-400 font-bold block mb-1">Existing EPF Balance (₹)</label>
                <input
                  type="number"
                  value={epfBalance}
                  onChange={(e) => setEpfBalance(Number(e.target.value))}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-white font-mono focus:outline-none focus:border-[#FF6B00]"
                  placeholder="0"
                />
              </div>

              <div>
                <label className="text-xs text-zinc-400 font-bold block mb-1">Expected Annual Salary Hike (%)</label>
                <input
                  type="number"
                  value={epfHike}
                  onChange={(e) => setEpfHike(Number(e.target.value))}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-white font-mono focus:outline-none focus:border-[#FF6B00]"
                  placeholder="5"
                />
              </div>
            </div>

            {/* Monthly Split Badge */}
            <div className="p-4 rounded-xl bg-[#182338] border border-[#FF6B00]/40 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div>
                <span className="text-zinc-400 block">Your Contribution (12%):</span>
                <span className="text-base font-bold text-white font-mono">₹{epfRes.employeeMonthly.toLocaleString('en-IN')}/mo</span>
              </div>
              <div>
                <span className="text-zinc-400 block">Employer EPF (3.67%):</span>
                <span className="text-base font-bold text-emerald-400 font-mono">₹{epfRes.employerMonthly.toLocaleString('en-IN')}/mo</span>
              </div>
              <div>
                <span className="text-zinc-400 block">Employer EPS Pension (8.33%):</span>
                <span className="text-base font-bold text-amber-400 font-mono">₹{epfRes.epsMonthly.toLocaleString('en-IN')}/mo</span>
              </div>
            </div>

            {/* Maturity Results */}
            <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <span className="text-xs text-zinc-400 block">Total Maturity Corpus at Age {retirementAge}</span>
                <span className="text-2xl font-black text-[#FF6B00] font-mono">
                  ₹{epfRes.totalMaturityCorpus.toLocaleString('en-IN')}
                </span>
              </div>
              <div>
                <span className="text-xs text-zinc-400 block">Total EPF Investment ({epfRes.tenureYears} Yrs)</span>
                <span className="text-lg font-bold text-white font-mono">
                  ₹{epfRes.totalInvestment.toLocaleString('en-IN')}
                </span>
              </div>
              <div>
                <span className="text-xs text-zinc-400 block">Total Compound Interest Earned</span>
                <span className="text-lg font-bold text-emerald-400 font-mono">
                  ₹{epfRes.totalInterestEarned.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            <p className="text-[11px] text-zinc-500 italic">
              * Compounded at official EPFO rate of 8.25% p.a. Employee contribution of 12% + Employer EPF share of 3.67% grow tax-free under EEE status.
            </p>
          </div>
        )}

        {activeCalc === 'age' && (
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white">Age Calculator (Exact DOB Calculation)</h3>
            <div className="max-w-xs">
              <label className="text-xs text-zinc-400 font-bold block mb-1">Date of Birth</label>
              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-2.5 text-white font-mono"
              />
            </div>

            <div className="p-5 rounded-2xl bg-zinc-900 border border-zinc-800 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <span className="text-xs text-zinc-400 block">Current Age</span>
                <span className="text-xl font-bold text-white">{ageRes.years} Years, {ageRes.months} Months, {ageRes.days} Days</span>
              </div>
              <div>
                <span className="text-xs text-zinc-400 block">Born On Day</span>
                <span className="text-xl font-bold text-[#FF6B00]">{ageRes.dayName}</span>
              </div>
              <div>
                <span className="text-xs text-zinc-400 block">Total Days Lived</span>
                <span className="text-xl font-bold text-emerald-400 font-mono">{ageRes.totalDays.toLocaleString('en-IN')} Days</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
