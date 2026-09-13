import { InvestmentCandidate, CandidateStatus, Investment } from '../types/investment';

// Minimal normalization helper
const normalize = (str: string) => str.toLowerCase().replace(/\(.*\)/g, '').replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, ' ').trim();

export const candidateService = {
  // Functional duplicate detection
  isDuplicate: (candidate: InvestmentCandidate, existingInvestments: Investment[]): boolean => {
    const normName = normalize(candidate.name);
    const normSlug = normalize(candidate.slug);
    
    return existingInvestments.some(
      (inv) => 
        inv.id === candidate.id ||
        normalize(inv.name) === normName ||
        normalize(inv.slug) === normSlug
    );
  },

  // Process candidate through workflow
  processCandidate: (candidate: InvestmentCandidate, existingInvestments: Investment[]): { status: CandidateStatus; note?: string } => {
    // 1. Validation
    if (!candidate.name || !candidate.slug || !candidate.category || !candidate.officialInformationUrl || !candidate.provenance) {
      return { status: 'REJECTED', note: 'Missing required fields' };
    }

    // 2. Duplicate check
    if (candidateService.isDuplicate(candidate, existingInvestments)) {
      return { status: 'DUPLICATE', note: 'Duplicate found' };
    }

    // 3. Needs review
    return { status: 'NEEDS_REVIEW' };
  },

  // Manual approval gate
  approveCandidate: (candidate: InvestmentCandidate): InvestmentCandidate => {
    if (candidate.status === 'DUPLICATE') {
      throw new Error('Cannot approve a duplicate candidate.');
    }
    if (candidate.status !== 'NEEDS_REVIEW') {
      throw new Error('Only candidates in NEEDS_REVIEW status can be approved.');
    }
    return { ...candidate, status: 'APPROVED' };
  }
};
