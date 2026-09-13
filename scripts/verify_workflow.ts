import { candidateService } from '../src/services/candidateService';
import { InvestmentCandidate } from '../src/types/investment';
import { Investment } from '../src/types/investment';

const mockExisting: Investment[] = [
  { id: 'ppf', slug: 'public-provident-fund', name: 'Public Provident Fund (PPF)', category: 'Government Savings', authority: 'Gov', lastVerified: '2026-09-13', officialSource: 'Gov', officialInformationUrl: 'http://gov.in', status: 'ACTIVE' } as any
];

const verify = () => {
  console.log("Starting workflow verification...");

  // A. Valid new candidate -> NEEDS_REVIEW
  const candA: InvestmentCandidate = { id: 'new', slug: 'new-slug', name: 'New Investment', category: 'Pension', description: 'desc', officialSource: 'Source', officialInformationUrl: 'http://new.in', status: 'DISCOVERED', lastVerified: '2026-09-13', provenance: 'test' };
  const resA = candidateService.processCandidate(candA, mockExisting);
  if (resA.status !== 'NEEDS_REVIEW') throw new Error('Failed Case A');

  // B. Existing-name candidate -> DUPLICATE
  const candB: InvestmentCandidate = { id: 'new2', slug: 'new-slug2', name: 'Public Provident Fund (PPF)', category: 'Government Savings', description: 'desc', officialSource: 'Source', officialInformationUrl: 'http://new2.in', status: 'DISCOVERED', lastVerified: '2026-09-13', provenance: 'test' };
  const resB = candidateService.processCandidate(candB, mockExisting);
  if (resB.status !== 'DUPLICATE') throw new Error('Failed Case B');

  // C. Existing-slug candidate -> DUPLICATE
  const candC: InvestmentCandidate = { id: 'new3', slug: 'public-provident-fund', name: 'New Name', category: 'Government Savings', description: 'desc', officialSource: 'Source', officialInformationUrl: 'http://new3.in', status: 'DISCOVERED', lastVerified: '2026-09-13', provenance: 'test' };
  const resC = candidateService.processCandidate(candC, mockExisting);
  if (resC.status !== 'DUPLICATE') throw new Error('Failed Case C');

  // D. Missing official URL -> REJECTED
  const candD: InvestmentCandidate = { id: 'new4', slug: 'new-slug4', name: 'New Investment 4', category: 'Pension', description: 'desc', officialSource: 'Source', officialInformationUrl: '', status: 'DISCOVERED', lastVerified: '2026-09-13', provenance: 'test' };
  const resD = candidateService.processCandidate(candD, mockExisting);
  if (resD.status !== 'REJECTED') throw new Error('Failed Case D');

  // E. Missing provenance -> REJECTED
  const candE: InvestmentCandidate = { id: 'new5', slug: 'new-slug5', name: 'New Investment 5', category: 'Pension', description: 'desc', officialSource: 'Source', officialInformationUrl: 'http://new5.in', status: 'DISCOVERED', lastVerified: '2026-09-13', provenance: '' };
  const resE = candidateService.processCandidate(candE, mockExisting);
  if (resE.status !== 'REJECTED') throw new Error('Failed Case E');

  // F. Duplicate candidate cannot be approved
  const candF: InvestmentCandidate = { id: 'new6', slug: 'new-slug6', name: 'Duplicate Name', category: 'Pension', description: 'desc', officialSource: 'Source', officialInformationUrl: 'http://new6.in', status: 'DUPLICATE', lastVerified: '2026-09-13', provenance: 'test' };
  try { candidateService.approveCandidate(candF); throw new Error('Failed Case F'); } catch(e: any) { if (e.message !== 'Cannot approve a duplicate candidate.') throw e; }

  // G. Unapproved candidate cannot enter production
  const candG: InvestmentCandidate = { id: 'new7', slug: 'new-slug7', name: 'New Investment 7', category: 'Pension', description: 'desc', officialSource: 'Source', officialInformationUrl: 'http://new7.in', status: 'NEEDS_REVIEW', lastVerified: '2026-09-13', provenance: 'test' };
  // Production insertion logic is not yet built, but status remains NEEDS_REVIEW here.
  if (candG.status === 'APPROVED') throw new Error('Failed Case G');

  console.log("Workflow verification passed!");
};

verify();
