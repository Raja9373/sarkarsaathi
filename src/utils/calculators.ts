export function calculateIncomeTax(annualIncome: number, regime: 'new' | 'old') {
  let tax = 0;
  
  if (regime === 'new') {
    // New Tax Regime Slabs (FY 2025-26 / 2024-25 after standard deduction Rs 75,000)
    const taxableIncome = Math.max(0, annualIncome - 75000);
    
    if (taxableIncome <= 700000) {
      // Full rebate under 87A for income up to 7 Lakhs (effective taxable 7.75 Lakhs with standard deduction)
      return { taxableIncome, taxBeforeRebate: 0, rebate: 0, cess: 0, finalTax: 0 };
    }

    let remaining = taxableIncome;
    
    // Up to 3L : 0%
    if (remaining > 300000) {
      const slab1 = Math.min(remaining - 300000, 400000); // 3L to 7L @ 5%
      tax += slab1 * 0.05;
    }
    if (remaining > 700000) {
      const slab2 = Math.min(remaining - 700000, 300000); // 7L to 10L @ 10%
      tax += slab2 * 0.10;
    }
    if (remaining > 1000000) {
      const slab3 = Math.min(remaining - 1000000, 200000); // 10L to 12L @ 15%
      tax += slab3 * 0.15;
    }
    if (remaining > 1200000) {
      const slab4 = Math.min(remaining - 1200000, 300000); // 12L to 15L @ 20%
      tax += slab4 * 0.20;
    }
    if (remaining > 1500000) {
      const slab5 = remaining - 1500000; // Above 15L @ 30%
      tax += slab5 * 0.30;
    }
    
    const cess = tax * 0.04;
    return { taxableIncome, taxBeforeRebate: tax, rebate: 0, cess, finalTax: Math.round(tax + cess) };
  } else {
    // Old Regime (Standard deduction 50,000)
    const taxableIncome = Math.max(0, annualIncome - 50000);
    if (taxableIncome <= 500000) {
      return { taxableIncome, taxBeforeRebate: 0, rebate: 0, cess: 0, finalTax: 0 };
    }
    
    if (taxableIncome > 250000) tax += Math.min(taxableIncome - 250000, 250000) * 0.05;
    if (taxableIncome > 500000) tax += Math.min(taxableIncome - 500000, 500000) * 0.20;
    if (taxableIncome > 1000000) tax += (taxableIncome - 1000000) * 0.30;

    const cess = tax * 0.04;
    return { taxableIncome, taxBeforeRebate: tax, rebate: 0, cess, finalTax: Math.round(tax + cess) };
  }
}

export function calculateDelhiMcdPropertyTax(
  coveredAreaSqM: number,
  category: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H',
  occupancy: 'Self Occupied' | 'Rented',
  structure: 'Pucca' | 'Katcha'
) {
  // Unit Area Value per sq.m as per MCD
  const uavMap: Record<string, number> = { A: 800, B: 680, C: 560, D: 420, E: 340, F: 280, G: 200, H: 100 };
  const uav = uavMap[category] || 420;
  const occupancyFactor = occupancy === 'Rented' ? 2.0 : 1.0;
  const structureFactor = structure === 'Pucca' ? 1.0 : 0.7;
  const ageFactor = 1.0; // standard

  const annualValue = coveredAreaSqM * uav * occupancyFactor * structureFactor * ageFactor;
  // Tax rate is approx 12% for category A-E
  const taxRate = ['A','B','C','D','E'].includes(category) ? 0.12 : 0.07;
  const grossTax = annualValue * taxRate;
  const earlyBirdRebate = grossTax * 0.10; // 10% rebate
  const netTax = Math.max(0, grossTax - earlyBirdRebate);

  return { annualValue: Math.round(annualValue), grossTax: Math.round(grossTax), rebate: Math.round(earlyBirdRebate), netTax: Math.round(netTax) };
}

export function calculateDelhiStampDuty(propertyValue: number, ownerGender: 'male' | 'female' | 'joint') {
  let rate = 0.06; // 6% for male
  if (ownerGender === 'female') rate = 0.04; // 4% for female
  if (ownerGender === 'joint') rate = 0.05; // 5% for joint male+female

  const stampDuty = propertyValue * rate;
  const registrationFee = propertyValue * 0.01; // 1% registration fee
  const totalPayable = stampDuty + registrationFee;

  return {
    stampDutyRatePercent: rate * 100,
    stampDuty: Math.round(stampDuty),
    registrationFee: Math.round(registrationFee),
    totalPayable: Math.round(totalPayable)
  };
}

export function calculateEmi(principal: number, annualInterestRatePercent: number, tenureYears: number) {
  const r = annualInterestRatePercent / 12 / 100;
  const n = tenureYears * 12;
  if (r === 0) {
    const emi = principal / n;
    return { emi: Math.round(emi), totalPayment: principal, totalInterest: 0 };
  }
  const emi = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  const totalPayment = emi * n;
  const totalInterest = totalPayment - principal;

  return {
    emi: Math.round(emi),
    totalPayment: Math.round(totalPayment),
    totalInterest: Math.round(totalInterest)
  };
}

export function calculateGratuity(
  lastDrawnBasicPlusDa: number, 
  tenureYears: number, 
  isCoveredUnderAct: boolean = true
) {
  const salary = Math.max(0, isNaN(lastDrawnBasicPlusDa) ? 0 : lastDrawnBasicPlusDa);
  const tenure = Math.max(0, isNaN(tenureYears) ? 0 : tenureYears);

  if (tenure < 5) {
    return { 
      eligible: false, 
      amount: 0, 
      taxExempt: 0,
      taxable: 0,
      message: 'Minimum 5 years of continuous service required for Gratuity eligibility under Payment of Gratuity Act 1972.' 
    };
  }

  const divisor = isCoveredUnderAct ? 26 : 30;
  const totalGratuity = (15 * salary * tenure) / divisor;
  const taxExemptLimit = 2000000; // Rs 20 Lakhs tax-free limit under Income Tax Act
  const taxExempt = Math.min(totalGratuity, taxExemptLimit);
  const taxable = Math.max(0, totalGratuity - taxExemptLimit);

  return { 
    eligible: true, 
    amount: Math.round(totalGratuity), 
    taxExempt: Math.round(taxExempt),
    taxable: Math.round(taxable),
    message: totalGratuity > taxExemptLimit 
      ? `Gratuity Rs ${Math.round(totalGratuity).toLocaleString('en-IN')}. Rs 20 Lakhs is tax-free; Rs ${Math.round(taxable).toLocaleString('en-IN')} is taxable.`
      : 'Entire gratuity amount is 100% tax-exempt under Income Tax Act.' 
  };
}

export function calculateEpf(
  basicSalaryMonthly: number, 
  currentAge: number, 
  retirementAge: number = 58, 
  currentBalance: number = 0,
  annualSalaryIncreasePercent: number = 5
) {
  const salary = Math.max(0, isNaN(basicSalaryMonthly) ? 0 : basicSalaryMonthly);
  const cAge = Math.max(18, isNaN(currentAge) ? 28 : currentAge);
  const rAge = Math.max(cAge, isNaN(retirementAge) ? 58 : retirementAge);
  const initialBal = Math.max(0, isNaN(currentBalance) ? 0 : currentBalance);
  const salaryHike = Math.max(0, isNaN(annualSalaryIncreasePercent) ? 0 : annualSalaryIncreasePercent);

  const years = Math.max(0, rAge - cAge);
  let totalEmployeeContrib = 0;
  let totalEmployerContrib = 0;
  let balance = initialBal;
  let currentSalary = salary;
  const annualInterestRate = 0.0825; // 8.25% current EPFO rate

  for (let y = 0; y < years; y++) {
    const employeeMonthly = currentSalary * 0.12;
    const employerEpfMonthly = currentSalary * 0.0367; // 3.67% goes to EPF (8.33% to EPS)
    const yearlyDeposit = (employeeMonthly + employerEpfMonthly) * 12;

    totalEmployeeContrib += employeeMonthly * 12;
    totalEmployerContrib += employerEpfMonthly * 12;

    balance += yearlyDeposit;
    // Interest on balance
    balance += balance * annualInterestRate;

    // Salary increase
    currentSalary += currentSalary * (salaryHike / 100);
  }

  const totalInvestment = totalEmployeeContrib + totalEmployerContrib + initialBal;
  const totalInterestEarned = Math.max(0, balance - totalInvestment);

  return {
    employeeMonthly: Math.round(salary * 0.12),
    employerMonthly: Math.round(salary * 0.0367),
    epsMonthly: Math.min(1250, Math.round(salary * 0.0833)),
    totalMaturityCorpus: Math.round(balance),
    totalInvestment: Math.round(totalInvestment),
    totalEmployeeContrib: Math.round(totalEmployeeContrib),
    totalEmployerContrib: Math.round(totalEmployerContrib),
    totalInterestEarned: Math.round(totalInterestEarned),
    tenureYears: years
  };
}

export function calculateAge(birthDateStr: string) {
  const birth = new Date(birthDateStr);
  const today = new Date();
  
  let years = today.getFullYear() - birth.getFullYear();
  let months = today.getMonth() - birth.getMonth();
  let days = today.getDate() - birth.getDate();

  if (days < 0) {
    months -= 1;
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += prevMonth.getDate();
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayName = daysOfWeek[birth.getDay()] || '';

  const totalDays = Math.floor((today.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24));

  return { years, months, days, totalDays, dayName };
}
