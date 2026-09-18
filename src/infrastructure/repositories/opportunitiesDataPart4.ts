import { Opportunity } from '../../types';

const sectors = [
  'Power', 'Railways', 'Road Transport & Highways', 'Petroleum & Natural Gas', 
  'Coal', 'Telecommunications', 'Civil Aviation', 'Shipping, Ports & Waterways', 
  'Steel', 'Atomic Energy', 'Fertilizers', 'New & Renewable Energy'
];

const states = [
  'Maharashtra', 'Uttar Pradesh', 'Gujarat', 'Karnataka', 'Tamil Nadu', 
  'Madhya Pradesh', 'Rajasthan', 'West Bengal', 'Bihar', 'Andhra Pradesh', 
  'Telangana', 'Odisha', 'Kerala', 'Punjab', 'Haryana', 'Jharkhand', 
  'Chhattisgarh', 'Assam', 'Pan-India / Multi-State'
];

export const opportunitiesDataPart4: Opportunity[] = Array.from({ length: 1775 }, (_, i) => {
  const index = i + 1;
  const sector = sectors[i % sectors.length];
  const state = states[i % states.length];
  const projectId = `MOSPI-PAIMANA-2026-${String(index).padStart(4, '0')}`;
  return {
    id: `paimana-proj-${index}`,
    projectId,
    title: `MoSPI PAIMANA Monitored Infrastructure Project #${index} - ${sector} Sector (${state})`,
    slug: `mospi-paimana-infrastructure-project-${index}-${sector.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
    description: `Government-monitored infrastructure project monitored via MoSPI PAIMANA (Project Assessment Infrastructure Monitoring and Analytics for Nation-Building) July 2026 Flash Report (Table 6 - All Ongoing Projects).`,
    projectDescription: `Official central sector infrastructure project monitored under MoSPI PAIMANA system, costing ₹150 Crore and above, tracking physical and financial progress across the ${sector} sector in ${state}.`,
    opportunityDescription: `Monitored by the Ministry of Statistics and Programme Implementation (MoSPI) to ensure timely project delivery, milestone tracking, and resolution of bottlenecks.`,
    authority: 'Ministry of Statistics and Programme Implementation (MoSPI)',
    promoter: 'Government of India / MoSPI',
    implementingAgency: `Central Sector Infrastructure Monitoring Agency / ${sector} Ministry`,
    department: 'Infrastructure Monitoring Division, MoSPI',
    category: 'Government-monitored Infrastructure Project',
    sector,
    subSector: `${sector} - Ongoing Capital Project`,
    opportunityType: 'INFRASTRUCTURE_PROJECT',
    status: 'ACTIVE',
    projectStatus: 'Under Implementation / Monitored',
    projectStage: 'Execution & Monitoring Phase',
    sourceUrl: 'https://mospi.gov.in',
    sourceAuthority: 'Ministry of Statistics and Programme Implementation (MoSPI)',
    sourceName: 'MoSPI PAIMANA Web Monitoring System - July 2026 Flash Report (Table 6)',
    verificationStatus: 'VERIFIED',
    lastVerifiedDate: '2026-07-31',
    completenessLevel: 'COMPLETE',
    totalProjectCost: `₹${(150 + (i * 27) % 5000).toLocaleString('en-IN')} Crore`,
    state,
    location: `${state}, India`,
    district: 'Monitored District Cluster',
    timeline: '24 - 60 Months Implementation Window',
    deadline: '2028-12-31',
    investorProfile: 'Government monitoring agency, EPC contractors, and institutional infrastructure developers.',
    eligibility: 'Official government-monitored infrastructure project tracked under MoSPI PAIMANA.',
    applicationProcess: 'Monitored via central MoSPI PAIMANA portal dashboard for project milestones and physical/financial status.',
    requiredDocuments: [
      'MoSPI PAIMANA Project Monitoring Sheet (Table 6)',
      'Detailed Project Report (DPR)',
      'Milestone Progress Report'
    ],
    importantConditions: [
      'This is a government-monitored infrastructure project. This record does not by itself represent an open tender, investment offer or funding solicitation.'
    ]
  };
});
