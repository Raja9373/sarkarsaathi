import { candidateService } from '../src/services/candidateService';
import { InvestmentCandidate } from '../src/types/investment';
import { Investment } from '../src/types/investment';

const mockExisting: Investment[] = [
  { id: 'ppf', slug: 'public-provident-fund', name: 'Public Provident Fund (PPF)', category: 'Government Savings', authority: 'Gov', lastVerified: '2026-09-13', officialSource: 'Gov', officialInformationUrl: 'http://gov.in', status: 'ACTIVE' } as any
];

const normalize = (str: string) => str.toLowerCase().replace(/\(.*\)/g, '').replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, ' ').trim();

const verify = () => {
  console.log("Starting verification...");

  // A. Exact existing Investment -> DUPLICATE
  const candA: InvestmentCandidate = { id: 'ppf', slug: 'public-provident-fund', name: 'Public Provident Fund (PPF)', category: 'Government Savings', description: '', officialSource: '', officialInformationUrl: '', status: 'DISCOVERED', lastVerified: '2026-09-13', provenance: 'test' };
  if (!candidateService.isDuplicate(candA, mockExisting)) throw new Error('Failed Case A');

  // B. Same slug -> DUPLICATE
  const candB: InvestmentCandidate = { id: 'new', slug: 'public-provident-fund', name: 'New Name', category: 'Government Savings', description: '', officialSource: '', officialInformationUrl: '', status: 'DISCOVERED', lastVerified: '2026-09-13', provenance: 'test' };
  if (!candidateService.isDuplicate(candB, mockExisting)) throw new Error('Failed Case B');

  // C. Same normalized name -> DUPLICATE
  const candC: InvestmentCandidate = { id: 'new', slug: 'new-slug', name: 'public provident fund!!!', category: 'Government Savings', description: '', officialSource: '', officialInformationUrl: '', status: 'DISCOVERED', lastVerified: '2026-09-13', provenance: 'test' };
  
  // Debug
  console.log("Existing name normalized:", normalize('Public Provident Fund (PPF)'));
  console.log("Candidate name normalized:", normalize('public provident fund!!!'));

  if (!candidateService.isDuplicate(candC, mockExisting)) throw new Error('Failed Case C');

  // D. Different legitimate Investment -> NOT DUPLICATE
  const candD: InvestmentCandidate = { id: 'nps', slug: 'nps', name: 'NPS', category: 'Pension', description: '', officialSource: '', officialInformationUrl: '', status: 'DISCOVERED', lastVerified: '2026-09-13', provenance: 'test' };
  if (candidateService.isDuplicate(candD, mockExisting)) throw new Error('Failed Case D');

  // E. Candidate marked DUPLICATE cannot be approved
  const candE: InvestmentCandidate = { id: 'new', slug: 'new-slug', name: 'New', category: 'Pension', description: '', officialSource: '', officialInformationUrl: '', status: 'DUPLICATE', lastVerified: '2026-09-13', provenance: 'test' };
  try { candidateService.approveCandidate(candE); throw new Error('Failed Case E'); } catch(e: any) { if (e.message !== 'Cannot approve a duplicate candidate.') throw e; }

  // F. Candidate marked NEEDS_REVIEW can proceed to explicit approval
  const candF: InvestmentCandidate = { id: 'new', slug: 'new-slug', name: 'New', category: 'Pension', description: '', officialSource: '', officialInformationUrl: '', status: 'NEEDS_REVIEW', lastVerified: '2026-09-13', provenance: 'test' };
  const approved = candidateService.approveCandidate(candF);
  if (approved.status !== 'APPROVED') throw new Error('Failed Case F');

  console.log("Verification passed!");
};

verify();
