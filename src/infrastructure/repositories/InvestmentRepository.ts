import { Investment, InvestmentScheme, Opportunity, Tender, NewsItem } from '../../types';
import { IndexedCatalogStore, CatalogFacets } from './IndexedCatalogStore';
import { CatalogQueryOptions, PaginatedResult } from '../../ingestion/types';
import { coreInvestmentsData } from './coreInvestmentsData';
import { batch1InvestmentsData } from './batch1InvestmentsData';
import { batch3InvestmentsData } from './batch3InvestmentsData';
import { batch4InvestmentsData } from './batch4InvestmentsData';
import { batch5InvestmentsData } from './batch5InvestmentsData';
import { batch6InvestmentsData } from './batch6InvestmentsData';
import { reconstructedInvestmentsData } from './reconstructedInvestmentsData';

export interface Repository<T> {
  getAll(): T[];
  getById(id: string): T | undefined;
  getBySlug(slug: string): T | undefined;
  search(query: string, category?: string): T[];
  add?(item: T): boolean;
  getPaginated?(options: CatalogQueryOptions): PaginatedResult<T>;
  getFacets?(): CatalogFacets;
  getTotalCount?(): number;
}

export class InvestmentRepository implements Repository<Investment> {
  private items: Investment[] = [
    ...coreInvestmentsData,
    ...batch1InvestmentsData,
    ...batch3InvestmentsData,
    ...batch4InvestmentsData,
    ...batch5InvestmentsData,
    ...batch6InvestmentsData,
    ...reconstructedInvestmentsData
  ];

  getAll(): Investment[] { return this.items; }
  getById(id: string): Investment | undefined { return this.items.find(i => i.id === id); }
  getBySlug(slug: string): Investment | undefined { return this.items.find(i => i.slug === slug); }
  search(query: string, category?: string): Investment[] {
    const q = query.toLowerCase();
    return this.items.filter(i => (i.title.toLowerCase().includes(q) || i.description.toLowerCase().includes(q)) && (!category || category === 'ALL' || i.category === category));
  }
}



export class InvestmentSchemeRepository implements Repository<InvestmentScheme> {
  private items: InvestmentScheme[] = [

  {
    "id": "sch-1",
    "title": "Production Linked Incentive (PLI) Scheme for Large Scale Electronics Manufacturing",
    "slug": "pli-large-scale-electronics",
    "description": "Premier national manufacturing incentive scheme under the National Policy on Electronics (NPE 2019) offering 4% to 6% financial incentive on net incremental sales of mobile phones and specified electronic components manufactured in India.",
    "authority": "Ministry of Electronics and Information Technology (MeitY)",
    "implementingAuthority": "IFCI Limited (Project Management Agency)",
    "category": "Industrial Investment & Manufacturing",
    "status": "ACTIVE / ONGOING IMPLEMENTATION",
    "sourceUrl": "https://www.meity.gov.in/esdm/pli",
    "sourceAuthority": "Ministry of Electronics and Information Technology (MeitY)",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "Global & Domestic Mobile Phone Manufacturers and Specified Electronic Component Producers",
    "financialParameters": "4% to 6% Incentive on Incremental Sales over Base Year (FY 2019-20)",
    "objective": "Attract massive global capital investment, develop domestic champions, position India as an export hub for ESDM, and create extensive electronics assembly and component supply chain ecosystems.",
    "coverage": "Pan-India for eligible greenfield and brownfield electronics manufacturing facilities.",
    "benefits": "Tiered cash incentive of 6% (Years 1-2), 5% (Years 3-4), and 4% (Year 5) on net incremental sales of manufactured goods over the base year threshold.",
    "incentives": "Financial incentive paid out annually upon verification of committed cumulative capital expenditure and incremental production thresholds by Project Management Agency (IFCI).",
    "eligibility": "Incorporated companies in India making threshold capital investment: Global Mobile Makers (FOB value >= ₹15,000, capex ₹1,000 Cr over 4 yrs), Domestic Mobile Makers (capex ₹200 Cr over 4 yrs), and Specified Electronic Component Makers (capex ₹100 Cr over 4 yrs).",
    "howToUnderstand": "This scheme operates on an incremental production model where financial payouts require verifiable physical capex investment in plant and machinery as well as audited year-on-year growth in manufactured goods sales.",
    "applicationProcess": "Online application submission via the MeitY PLI online portal managed by IFCI Limited during notified application windows.",
    "registrationProcess": [
      "Register business entity credentials on the MeitY PLI Online Portal.",
      "Submit Detailed Investment and Manufacturing Plan detailing phased capex, machinery imports, and job creation.",
      "Provide audited baseline financial statements for Base Year (FY 2019-20).",
      "Approval and issuance of formal Selection Letter by Empowered Committee (EC).",
      "Submit annual claims along with statutory auditor certificates, GST invoices, and physical asset verification reports."
    ],
    "requiredDocuments": [
      "Certificate of Incorporation, Memorandum & Articles of Association (MoA/AoA)",
      "Audited Financial Statements for Base Year and Claim Years",
      "Detailed Project Report (DPR) with Plant & Machinery Capex Schedule",
      "Chartered Engineer Certificate verifying physical installation of new capital equipment",
      "Statutory Auditor Certificate on Net Incremental Sales and GST reconciliation"
    ],
    "importantConditions": [
      "Incentives are capped per target segment and company as per Empowered Committee allocations.",
      "Only incremental sales of goods manufactured in India within the designated target segments qualify for incentive calculation.",
      "Second-hand or refurbished plant & machinery is strictly restricted up to notified regulatory caps (max 20% of total capital expenditure)."
    ],
    "exclusions": [
      "Trading activities and assembly of semi-knocked-down (SKD) kits without genuine domestic value-addition.",
      "Capex incurred on land and administrative buildings is excluded from eligible capital investment calculations."
    ],
    "faqs": [
      {
        "question": "What is the base year for calculating incremental sales under the PLI Large Scale Electronics Scheme?",
        "answer": "The base year for calculating incremental sales is Financial Year 2019-20."
      },
      {
        "question": "What are the target segments covered under this PLI scheme?",
        "answer": "Target Segment 1 covers Mobile Phones (specified by invoice value brackets for domestic and global applicants), and Target Segment 2 covers Specified Electronic Components (including SMT passive components, printed circuit boards, sensors, and camera modules)."
      }
    ]
  },
  {
    "id": "sch-2",
    "title": "Production Linked Incentive (PLI) Scheme for IT Hardware",
    "slug": "pli-it-hardware",
    "description": "National manufacturing incentive program (PLI 2.0 for IT Hardware with an outlay of ₹17,000 Crore) offering an average 5% incentive on net incremental sales to boost domestic manufacturing of laptops, tablets, all-in-one PCs, servers, and ultra small form factor devices.",
    "authority": "Ministry of Electronics and Information Technology (MeitY)",
    "implementingAuthority": "IFCI Limited (Project Management Agency)",
    "category": "Electronics & IT",
    "status": "ACTIVE / ONGOING IMPLEMENTATION",
    "sourceUrl": "https://www.meity.gov.in/esdm/pliit",
    "sourceAuthority": "Ministry of Electronics and Information Technology (MeitY)",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "Global IT Hardware OEMs, Domestic IT Hardware Manufacturers, and EMS Providers",
    "financialParameters": "Average ~5% Incentive on Incremental Sales + Additional Localization Incentives over 6 Years",
    "objective": "Establish a resilient domestic supply chain for laptops, servers, and computing hardware, fostering component localization and software integration in India.",
    "coverage": "All States and Union Territories across India for greenfield and brownfield manufacturing facilities.",
    "benefits": "Base incentive rates starting from 5% to 3% on incremental sales over the base year, with additional flexibility and optional localization incentives for using Indian-designed semiconductor chips and domestic components.",
    "incentives": "Annual cash incentive disbursement based on certified cumulative incremental capital expenditure and production sales targets across a 6-year tenure.",
    "eligibility": "Global and domestic IT hardware manufacturers classified into Global Companies, Domestic Companies, and Hybrid/EMS applicants committing to threshold capex (ranging from ₹10 Cr for domestic to ₹500 Cr for large global OEMs).",
    "howToUnderstand": "PLI 2.0 for IT Hardware encourages global electronics manufacturers to establish deep manufacturing operations in India by rewarding both top-line assembly and bottom-up component localization.",
    "applicationProcess": "Online application through the MeitY IT Hardware PLI application gateway managed by Project Management Agency (IFCI).",
    "registrationProcess": [
      "Register business entity profile on the MeitY IT Hardware PLI 2.0 Portal.",
      "Select chosen applicant category (Global, Domestic, or Hybrid) and tenure option (6-year window).",
      "Submit Detailed Project Report (DPR) detailing planned capital expenditure and localization schedule.",
      "Execution of formal incentive agreement upon approval by Empowered Committee.",
      "Annual submission of incentive disbursement claims backed by CA/CE audit certifications."
    ],
    "requiredDocuments": [
      "Corporate Incorporation & GSTIN Documentation",
      "Audited Annual Accounts and Tax Returns for Base Year",
      "Itemized Plant, Machinery & Tooling Capex Invoices and CE Installation Certificates",
      "BOM (Bill of Materials) breakdown demonstrating domestic component sourcing"
    ],
    "importantConditions": [
      "Applicants must meet cumulative investment thresholds and year-wise incremental production targets to claim full incentive tranches.",
      "Flexible investment windows allow applicants to choose their first year of production within notified parameters."
    ],
    "exclusions": [
      "Pure trading, repacking, or minor testing of imported finished computing hardware.",
      "Investments made in non-manufacturing real estate or non-eligible administrative expenses."
    ],
    "faqs": [
      {
        "question": "What computing products are covered under the PLI Scheme for IT Hardware?",
        "answer": "Laptops, Tablets, All-in-One Personal Computers (PCs), Ultra Small Form Factor (USFF) PCs, and Enterprise Servers."
      },
      {
        "question": "What is the tenure of PLI 2.0 for IT Hardware?",
        "answer": "The scheme provides financial incentives over a 6-year operational tenure."
      }
    ]
  },
  {
    "id": "sch-3",
    "title": "Modified SPECS Scheme for Electronic Components & Semiconductors",
    "slug": "modified-specs-scheme",
    "description": "Scheme for Promotion of Manufacturing of Electronic Components and Semiconductors (SPECS) offering a 25% financial incentive on capital expenditure for setting up new units or expanding existing units across the electronic components supply chain.",
    "authority": "Ministry of Electronics and Information Technology (MeitY)",
    "implementingAuthority": "IFCI Limited (Project Management Agency)",
    "category": "Semiconductors & Electronics",
    "status": "ACTIVE / ONGOING IMPLEMENTATION",
    "sourceUrl": "https://www.meity.gov.in/esdm/SPECS",
    "sourceAuthority": "Ministry of Electronics and Information Technology (MeitY)",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "Manufacturers of Electronic Components, Semiconductor Packages, Display Assemblies, and Passive Components",
    "financialParameters": "25% Direct Financial Capital Subsidy on Eligible Capital Expenditure",
    "objective": "Overcome the disability in manufacturing electronic components and semiconductors in India by providing direct capex reimbursements, thereby strengthening domestic value addition.",
    "coverage": "Pan-India eligible industrial manufacturing units.",
    "benefits": "25% reimbursement of capital expenditure incurred on plant, machinery, equipment, associated utilities, and transfer of technology (ToT).",
    "incentives": "Capital subsidy disbursed in tranches post commercial production and physical audit verification of installed equipment.",
    "eligibility": "Entities making capital investment in notified target goods with threshold investment limits ranging from ₹5 Crore (for basic passives, PCBs) up to ₹1,000 Crore (for display sub-assemblies and ATMP facilities).",
    "howToUnderstand": "SPECS reimburses one-fourth of your plant and machinery investments upon achieving commercial production, reducing the capital barrier for high-tech electronics component manufacturing.",
    "applicationProcess": "Online project application submission through the SPECS portal managed by MeitY and IFCI Limited.",
    "registrationProcess": [
      "Submit online application with business profile and Detailed Project Report (DPR).",
      "Technical appraisal and evaluation of project parameters by PMA (IFCI).",
      "Issuance of formal Approval Letter with investment milestones and commercial production timelines.",
      "Execution of capex within the approved investment window (typically 5 years).",
      "Filing of subsidy disbursement claim post commissioning of commercial operations."
    ],
    "requiredDocuments": [
      "Detailed Project Report (DPR) and Technical Feasibility Study",
      "Chartered Engineer and Chartered Accountant Capex Verification Certificates",
      "Original Invoices, Bills of Entry, and Payment Receipts for Plant & Machinery",
      "Consent to Operate (CTO) from State Pollution Control Board"
    ],
    "importantConditions": [
      "Eligible capex includes new plant, machinery, clean room facilities, and effluent treatment plants directly used in manufacturing.",
      "Land and civil construction costs for non-technical buildings are not eligible for subsidy."
    ],
    "exclusions": [
      "Used/refurbished machinery imported without meeting standard regulatory guidelines.",
      "Non-manufacturing overheads, R&D operational expenditures, or vehicle purchases."
    ],
    "faqs": [
      {
        "question": "What is the rate of financial assistance provided under the SPECS scheme?",
        "answer": "The scheme provides a 25% financial incentive on eligible capital expenditure incurred on plant, machinery, equipment, and associated utilities."
      }
    ]
  },
  {
    "id": "sch-4",
    "title": "Modified Electronics Manufacturing Clusters (EMC 2.0) Scheme",
    "slug": "emc-2-0-scheme",
    "description": "Infrastructure development scheme providing grant assistance of up to 50% of project cost (max ₹70 Cr per 100 acres) for Electronics Manufacturing Clusters (EMCs) and up to 75% (max ₹75 Cr) for Common Facility Centers (CFCs) to create plug-and-play manufacturing infrastructure.",
    "authority": "Ministry of Electronics and Information Technology (MeitY)",
    "implementingAuthority": "Project Management Agency (PMA) / MeitY",
    "category": "Infrastructure Investment",
    "status": "ACTIVE / ONGOING IMPLEMENTATION",
    "sourceUrl": "https://www.meity.gov.in/esdm/emc2.0",
    "sourceAuthority": "Ministry of Electronics and Information Technology (MeitY)",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "State Industrial Development Corporations, Project Developer Consortia, and Industrial Park Developers",
    "financialParameters": "Up to 50% Grant for EMC Parks (max ₹70 Cr/100 acres) & 75% Grant for CFCs (max ₹75 Cr)",
    "objective": "Create world-class plug-and-play industrial infrastructure, shared testing laboratories, supply chain warehouses, and common facility centers to reduce logistics overheads for electronics manufacturing units.",
    "coverage": "All Indian States and Union Territories across minimum contiguous land parcels (100 acres in normal areas, 50 acres in hilly/NE states).",
    "benefits": "Non-repayable financial grant assistance covering basic industrial infrastructure (roads, substations, water supply, ETP) and common testing/tooling centers.",
    "incentives": "Grant assistance released in milestones linked to land acquisition, physical infrastructure construction, and industrial unit allotment.",
    "eligibility": "Project Implementing Agencies (PIAs) including State Government Agencies, SIDCs, Joint Ventures, or private industrial infrastructure developers holding unencumbered industrial land.",
    "howToUnderstand": "EMC 2.0 builds modern industrial townships dedicated to electronics manufacturing, providing ready-made factory sheds, uninterrupted power, water, and specialized testing facilities.",
    "applicationProcess": "Detailed project proposal submission by the Project Implementing Agency to the MeitY EMC Directorate.",
    "registrationProcess": [
      "Submission of Preliminary Project Assessment and unencumbered land possession proof.",
      "Preparation of Comprehensive Master Plan and Detailed Project Report (DPR).",
      "Appraisal by Project Management Agency (PMA) and review by Project Review Committee (PRC).",
      "Approval by Steering Committee and signing of Grant Agreement.",
      "Phased disbursement of central grants into an Escrow Account upon physical milestone verification."
    ],
    "requiredDocuments": [
      "Land Title Deeds and Possession Certificates for minimum 100 acres (or 50 acres for special states)",
      "Detailed Project Report (DPR) with Engineering Estimates and Master Layout Plan",
      "State Government Support Resolution and Environmental Clearances",
      "Demand Assessment and Letters of Intent (LoIs) from prospective electronics manufacturing tenants"
    ],
    "importantConditions": [
      "Minimum contiguous land area of 100 acres (50 acres for North East and hilly states).",
      "At least 80% of the allocable industrial land must be reserved exclusively for electronics manufacturing units."
    ],
    "exclusions": [
      "Acquisition cost of land cannot be funded through the central government grant component.",
      "Commercial real estate development outside the authorized industrial layout parameters."
    ],
    "faqs": [
      {
        "question": "What is the maximum grant available for an Electronics Manufacturing Cluster under EMC 2.0?",
        "answer": "For an EMC, the grant is 50% of the project cost subject to a ceiling of ₹70 Crore for every 100 acres of land."
      }
    ]
  },
  {
    "id": "sch-5",
    "title": "PLI Scheme for Advanced Chemistry Cell (ACC) Battery Storage",
    "slug": "pli-acc-battery-storage",
    "description": "National Programme on Advanced Chemistry Cell (ACC) Battery Storage with an outlay of ₹18,100 Crore providing production-linked cash subsidies for establishing 50 GWh of giga-scale battery manufacturing capacity in India.",
    "authority": "Ministry of Heavy Industries",
    "implementingAuthority": "Ministry of Heavy Industries / IFCI Limited",
    "category": "Clean Energy & EV",
    "status": "ACTIVE / ONGOING IMPLEMENTATION",
    "sourceUrl": "https://heavyindustries.gov.in/pli-scheme-national-programme-advanced-chemistry-cell-acc-battery-storage",
    "sourceAuthority": "Ministry of Heavy Industries",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "Giga-Scale Advanced Chemistry Cell and Battery Pack Manufacturers",
    "financialParameters": "Performance-Linked Subsidy per kWh Based on Energy Density, Cycle Life, and Domestic Value Addition",
    "objective": "Establish domestic manufacturing capacity for advanced chemistry cells to accelerate electric vehicle adoption, enable grid-scale renewable energy storage, and reduce import dependency on battery cells.",
    "coverage": "Pan-India for greenfield giga-scale manufacturing plants.",
    "benefits": "Direct cash subsidy per unit of ACC battery capacity manufactured and sold, scaled by matrix of energy density, cycle life, and percentage of Domestic Value Addition (DVA).",
    "incentives": "Direct subsidy disbursed quarterly/annually for 5 years following the mandatory 2-year gestation window.",
    "eligibility": "Bidders selected through international competitive bidding committing to a minimum capacity of 5 GWh and minimum 25% Domestic Value Addition (DVA) at start, scaling to 60% within 5 years.",
    "howToUnderstand": "This flagship program rewards companies that set up large-scale battery cell factories in India with cash subsidies per kWh, provided they source materials domestically and meet global battery performance standards.",
    "applicationProcess": "Selected through global competitive Request for Proposal (RFP) bidding managed by Ministry of Heavy Industries and NITI Aayog.",
    "registrationProcess": [
      "Submission of global qualification and financial bids under the transparent e-bidding mechanism.",
      "Allocation of manufacturing capacity (in GWh) to successful bidder consortia.",
      "Execution of Tripartite Program Agreement between Beneficiary Company, MHI, and PMA.",
      "Setting up of minimum 5 GWh manufacturing facility within the 2-year gestation timeline.",
      "Submission of periodic DVA audit reports and product performance test certificates for subsidy claims."
    ],
    "requiredDocuments": [
      "Program Agreement and Performance Bank Guarantees",
      "Factory Commissioning Certificates and Commercial Operation Date (COD) Proofs",
      "Domestic Value Addition (DVA) Audit Reports certified by Independent Statutory Auditor",
      "Advanced Chemistry Cell performance test certificates from accredited laboratories"
    ],
    "importantConditions": [
      "Minimum committed manufacturing capacity of 5 GWh per beneficiary.",
      "Domestic Value Addition must reach at least 25% within 2 years and minimum 60% within 5 years.",
      "Cells must adhere to international quality, safety, and cycle-life standards."
    ],
    "exclusions": [
      "Simple battery pack assembly using completely imported unbonded foreign cells.",
      "Lead-acid or conventional legacy battery chemistries not meeting ACC qualifying energy density thresholds."
    ],
    "faqs": [
      {
        "question": "What is the domestic value addition (DVA) requirement under the ACC PLI Scheme?",
        "answer": "Beneficiaries must achieve a minimum of 25% Domestic Value Addition within 2 years of project commissioning and scale it to at least 60% within 5 years."
      }
    ]
  },
  {
    "id": "sch-6",
    "title": "PLI Scheme for Automobile and Auto Components",
    "slug": "pli-automobile-auto-components",
    "description": "National flagship scheme with an outlay of ₹25,938 Crore incentivizing manufacturing of Advanced Automotive Technology (AAT) vehicles (EVs, Hydrogen Fuel Cell) and high-end automotive components with incentives ranging from 8% to 18%.",
    "authority": "Ministry of Heavy Industries",
    "implementingAuthority": "Ministry of Heavy Industries / ARAI / ICAT / IFCI",
    "category": "Automotive & EV",
    "status": "ACTIVE / ONGOING IMPLEMENTATION",
    "sourceUrl": "https://heavyindustries.gov.in/pli-scheme-automobile-and-auto-components",
    "sourceAuthority": "Ministry of Heavy Industries",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "Champion OEMs (Zero Emission Vehicles) and Component Champions (Advanced Automotive Technology)",
    "financialParameters": "8% to 18% Sales-Linked Incentive on Determined Sales Value of AAT Products",
    "objective": "Overcome cost disabilities in advanced automotive technologies, boost deep localization of EV drivetrains, ADAS, and sensors, and integrate Indian auto component makers into global supply chains.",
    "coverage": "Pan-India for approved automotive manufacturing companies.",
    "benefits": "Incentive of 13% to 18% for Champion OEMs on sales of battery electric and hydrogen vehicles; 8% to 13% for Component Champions (+5% additional incentive for battery EV and hydrogen components).",
    "incentives": "Disbursed annually against certified determined sales value of notified Advanced Automotive Technology products.",
    "eligibility": "Automotive OEMs and auto-component manufacturers meeting global revenue thresholds (minimum ₹10,000 Cr for OEM, ₹500 Cr for components) and committing to mandatory cumulative new capex (₹2,000 Cr for OEM, ₹250 Cr for components).",
    "howToUnderstand": "The scheme pays cash incentives to automotive manufacturers on the sales value of electric vehicles and futuristic automotive technologies that pass strict 50% domestic value addition testing.",
    "applicationProcess": "Selected approved applicants submit annual incentive claims via MHI PLI Auto portal following DVA certification from ARAI or ICAT.",
    "registrationProcess": [
      "Submission of application during notified window and selection under Champion OEM or Component Champion category.",
      "Execution of committed capital expenditure in plant, machinery, and AAT manufacturing assets.",
      "Application to testing agencies (ARAI, ICAT) for Domestic Value Addition (DVA >= 50%) inspection and certification.",
      "Submission of annual incentive claim along with DVA certificate and audited sales ledger.",
      "Review by PMA (IFCI) and disbursement of approved incentive tranche."
    ],
    "requiredDocuments": [
      "Mandatory DVA Certificate issued by notified testing agencies (ARAI/ICAT/GARC/NATRAX)",
      "Chartered Accountant Certificate verifying cumulative capex and determined sales value",
      "Itemized SAP/ERP Sales Ledgers and GST Invoices for AAT products",
      "Environmental and Factory Commercial Production Approvals"
    ],
    "importantConditions": [
      "Mandatory minimum 50% Domestic Value Addition (DVA) certified at component and vehicle level.",
      "Only products featuring in the pre-approved list of Advanced Automotive Technology (AAT) qualify."
    ],
    "exclusions": [
      "Internal combustion engine (ICE) vehicles operating solely on conventional petrol/diesel fuels.",
      "Standard legacy components lacking advanced technological innovation or electronics integration."
    ],
    "faqs": [
      {
        "question": "What is the minimum Domestic Value Addition required to claim incentives under PLI Auto?",
        "answer": "Applicants must achieve a minimum of 50% Domestic Value Addition (DVA) certified by recognized testing agencies such as ARAI or ICAT."
      }
    ]
  },
  {
    "id": "sch-7",
    "title": "FME Scheme - Formalization of Micro Food Processing Enterprises",
    "slug": "fme-micro-food-processing",
    "description": "Centrally sponsored PMFME scheme with an outlay of ₹10,000 Crore supporting existing individual micro food processing enterprises, FPOs, SHGs, and Producer Cooperatives with credit-linked capital subsidies of 35% (up to ₹10 Lakh) under One District One Product (ODOP).",
    "authority": "Ministry of Food Processing Industries (MoFPI)",
    "implementingAuthority": "State Nodal Agencies (SNA) / NIFTEM",
    "category": "Food Processing",
    "status": "ACTIVE / OPEN",
    "sourceUrl": "https://pmfme.mofpi.gov.in",
    "sourceAuthority": "Ministry of Food Processing Industries (MoFPI)",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "Individual Micro Food Entrepreneurs, Farmer Producer Organizations (FPOs), Self Help Groups (SHGs), and Cooperatives",
    "financialParameters": "Credit-Linked Capital Subsidy at 35% of Eligible Project Cost (Max ₹10 Lakh per Unit)",
    "objective": "Formalize 2,00,000 micro food processing enterprises, enhance access to institutional credit, upgrade manufacturing technology, support food safety compliance, and promote collective branding under ODOP.",
    "coverage": "All Districts across all States and Union Territories in India.",
    "benefits": "Credit-linked capital subsidy of 35% up to ₹10 Lakh for individual units; seed capital of ₹40,000 per SHG member for working capital; 35% grant for common infrastructure and branding support up to 50%.",
    "incentives": "Subsidy amount credited into bank loan account as back-ended subsidy after bank loan sanction and appraisal.",
    "eligibility": "Existing individual micro food processing units, new units aligned with ODOP, SHGs, FPOs, and cooperatives with promoter contribution of minimum 10% of project cost.",
    "howToUnderstand": "This scheme helps micro food businesses (pickle makers, spice grinders, bakery units, oil extractors) modernize equipment and obtain bank loans with a 35% government capital subsidy.",
    "applicationProcess": "Direct online application through the national PMFME portal (pmfme.mofpi.gov.in) with assistance from District Resource Persons (DRPs).",
    "registrationProcess": [
      "Register on PMFME portal using Aadhaar and mobile number.",
      "Fill online application form and select the relevant One District One Product (ODOP) or non-ODOP activity.",
      "Upload Detailed Project Report (DPR) prepared with help of District Resource Person (DRP).",
      "Online forwardal of proposal to designated lending commercial or regional rural bank.",
      "Sanction of bank loan and release of 35% back-ended capital subsidy into borrower account."
    ],
    "requiredDocuments": [
      "Aadhaar Card and PAN Card of applicant/promoters",
      "Udyam Registration Certificate and FSSAI Registration/License",
      "Detailed Project Report (DPR) detailing machinery quotation and civil works",
      "Bank Account Statement for past 6 months and property electricity bill"
    ],
    "importantConditions": [
      "Applicant enterprise must be a micro unit with investment in plant & machinery under statutory micro enterprise ceilings.",
      "The subsidy is strictly credit-linked; self-financed projects without bank term loans are not eligible."
    ],
    "exclusions": [
      "Large and medium scale food processing enterprises.",
      "Units dealing exclusively in wholesale trading of raw agricultural commodities without processing."
    ],
    "faqs": [
      {
        "question": "What is the maximum subsidy amount available for an individual micro food processing unit under PMFME?",
        "answer": "The maximum capital subsidy is 35% of the eligible project cost, capped at ₹10 Lakh per individual micro enterprise."
      },
      {
        "question": "What is the One District One Product (ODOP) approach in PMFME?",
        "answer": "ODOP identifies a specific agricultural or food produce for each district (e.g. mango in one district, spices in another) to build concentrated supply chains, processing clusters, and brand recognition."
      }
    ]
  },
  {
    "id": "sch-8",
    "title": "PRADHAN MANTRI KISAN SAMPADA YOJANA (PMKSY) - Agro-Processing Clusters",
    "slug": "pmksy-agro-processing-clusters",
    "description": "Central sector scheme under PMKSY providing grant-in-aid of 35% to 50% (up to ₹10 Crore) for developing Agro-Processing Clusters (minimum 10 acres) with common basic infrastructure and shared core processing facilities.",
    "authority": "Ministry of Food Processing Industries (MoFPI)",
    "implementingAuthority": "Ministry of Food Processing Industries (MoFPI)",
    "category": "Agri-Infrastructure",
    "status": "ACTIVE / WINDOW-DEPENDENT",
    "sourceUrl": "https://mofpi.gov.in/schemes/creation-infrastructure-agro-processing-clusters",
    "sourceAuthority": "Ministry of Food Processing Industries (MoFPI)",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "Industrial Park Developers, FPOs, Cooperatives, State Agencies, and Private Promoters",
    "financialParameters": "Grant-in-Aid of 35% (General Areas) to 50% (Difficult/Hilly Areas) up to ₹10 Crore",
    "objective": "Establish modern agro-processing clusters near production areas to facilitate setting up of food processing units, reduce post-harvest wastage, and create non-farm rural employment.",
    "coverage": "Pan-India on minimum contiguous 10 acres of land (5 acres for North East and Himalayan States).",
    "benefits": "Non-repayable capital grant covering 35% of eligible project cost in general areas (max ₹10 Crore) and 50% in North Eastern, Himalayan, ITDP, and SC/ST promoted clusters.",
    "incentives": "Grant released in four milestone-based installments (25%, 40%, 25%, 10%) deposited in dedicated project bank accounts.",
    "eligibility": "Project Implementing Agencies (Promoters/SPVs/State Agencies) holding unencumbered land of at least 10 acres and committing to establish at least 5 food processing units with aggregate investment of minimum ₹25 Crore.",
    "howToUnderstand": "Agro-Processing Clusters act as mini-food parks that provide ready-to-use industrial plots, effluent treatment, power, cold storage, and testing labs for food manufacturing factories.",
    "applicationProcess": "Online Expression of Interest (EOI) proposal submission on the MoFPI SAMPADA online portal during open notification windows.",
    "registrationProcess": [
      "Register on MoFPI SAMPADA online portal during open EOI call.",
      "Submit Detailed Project Report (DPR), master layout, and financial closure documents.",
      "Technical appraisal by Project Management Agency (PMA) and presentation to Technical Committee (TC).",
      "Final approval by Inter-Ministerial Approval Committee (IMAC) chaired by Union Minister.",
      "Milestone-based grant drawdowns matched with equity and bank term loan deployments."
    ],
    "requiredDocuments": [
      "Registered Land Sale/Lease Deed for minimum 10 acres (minimum 30 years unexpired lease)",
      "Detailed Project Report (DPR) with structural drawings and civil cost estimates",
      "Bank Appraisal Note and Sanction Letter for Term Loan with 100% financial closure",
      "Statutory Net Worth Certificates of promoters and Environmental Clearances"
    ],
    "importantConditions": [
      "Minimum cluster area of 10 acres with mandatory commitment for at least 5 food processing units.",
      "Total investment in the cluster units must be at least ₹25 Crore."
    ],
    "exclusions": [
      "Land acquisition cost and residential colony construction cannot be funded from the grant.",
      "Units involved solely in trading of unprocessed raw farm commodities."
    ],
    "faqs": [
      {
        "question": "What is the minimum land requirement for an Agro-Processing Cluster under PMKSY?",
        "answer": "The minimum land requirement is 10 acres for general areas and 5 acres for North Eastern States, Himalayan States, and difficult areas."
      }
    ]
  },
  {
    "id": "sch-9",
    "title": "PMKSY - Cold Chain, Value Addition and Preservation Infrastructure",
    "slug": "pmksy-cold-chain",
    "description": "Flagship infrastructure scheme providing financial grant assistance of up to ₹10 Crore (35% to 75% of eligible cost) for setting up integrated cold chain, preservation, and minimal processing facilities from farm gate to market.",
    "authority": "Ministry of Food Processing Industries (MoFPI)",
    "implementingAuthority": "Ministry of Food Processing Industries (MoFPI)",
    "category": "Cold Chain Infrastructure",
    "status": "ACTIVE / WINDOW-DEPENDENT",
    "sourceUrl": "https://mofpi.gov.in/schemes/integrated-cold-chain-and-value-addition-infrastructure",
    "sourceAuthority": "Ministry of Food Processing Industries (MoFPI)",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "Cold Chain Logistics Operators, Food Processors, FPOs, and Integrated Agri-Enterprises",
    "financialParameters": "Grant-in-Aid of 35% to 50% for Storage & 50% to 75% for Value Addition Infrastructure (Max ₹10 Crore)",
    "objective": "Establish uninterrupted temperature-controlled storage and distribution logistics from farm gate to retail outlets, preventing post-harvest spoilage of horticulture, dairy, meat, and seafood products.",
    "coverage": "All States and Union Territories across India.",
    "benefits": "Financial grant-in-aid of 35% (general areas) or 50% (difficult areas) for cold storage infrastructure, and 50% (general) or 75% (difficult) for processing/value-addition machinery, up to ₹10 Crore per project.",
    "incentives": "Capital grant disbursed in four tranches against audited expenditure and physical construction milestones.",
    "eligibility": "Partnership firms, private/public limited companies, corporate bodies, FPOs, and cooperatives with verified net worth matching scheme benchmarks and secured bank term loans.",
    "howToUnderstand": "This scheme co-funds the construction of blast freezers, pack houses, cold storage warehouses, IQF lines, and reefer trucks to create seamless farm-to-shelf cold chains.",
    "applicationProcess": "Online project submission in response to periodic Expression of Interest (EOI) notifications published on the MoFPI portal.",
    "registrationProcess": [
      "Submit online project application on the MoFPI SAMPADA portal during notified EOI window.",
      "Provide comprehensive DPR covering farm-gate pack-house, reefer transport, and distribution hub.",
      "Detailed appraisal by Project Management Agency (PMA).",
      "Approval by Inter-Ministerial Approval Committee (IMAC).",
      "Implementation of project within 24 months (30 months for difficult areas) and milestone-based grant claims."
    ],
    "requiredDocuments": [
      "Detailed Project Report (DPR) with technical specifications of refrigeration equipment",
      "Land ownership/long-term lease documents for packhouse and central hub locations",
      "Bank appraisal note and final sanction letter for project term loan",
      "Statutory auditor net worth certificate of promoters"
    ],
    "importantConditions": [
      "Project must include at least two mandatory components: (a) Farm-level infrastructure/pack house, (b) Distribution hub with cold storage, or (c) Reefer vans.",
      "Standalone cold storage without minimal processing or farm-level linkage is not eligible."
    ],
    "exclusions": [
      "Standalone dry godowns without temperature-controlled refrigeration systems.",
      "Used or refurbished refrigeration machinery."
    ],
    "faqs": [
      {
        "question": "Can I apply for funding for a standalone cold storage under this scheme?",
        "answer": "No. Standalone cold storage is not supported; the project must establish an integrated supply chain connecting farm-level infrastructure to distribution hubs or refrigerated transport."
      }
    ]
  },
  {
    "id": "sch-10",
    "title": "PLI Scheme for Specialty Steel",
    "slug": "pli-specialty-steel",
    "description": "National manufacturing program with an approved outlay of ₹6,322 Crore providing 4% to 12% production-linked incentives on incremental output of high-grade specialty steel categories to substitute critical steel imports.",
    "authority": "Ministry of Steel",
    "implementingAuthority": "MECON Limited (Project Management Agency)",
    "category": "Steel & Heavy Metallurgy",
    "status": "ACTIVE / ONGOING IMPLEMENTATION",
    "sourceUrl": "https://steel.gov.in/en/pli-specialty-steel",
    "sourceAuthority": "Ministry of Steel",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "Integrated and Secondary Steel Manufacturers in India",
    "financialParameters": "4% to 12% Incentive on Incremental Production over Base Year across 5 Product Categories",
    "objective": "Promote domestic manufacturing of high-value specialty steel grades, reduce import reliance on critical engineering steel, attract ₹30,000+ Crore in private capital investment, and upgrade technological capabilities.",
    "coverage": "Pan-India for eligible steel manufacturing units.",
    "benefits": "Tiered incentive of 4% to 12% on determined incremental production of specialty steel grades over the base year for a 5-year incentive period.",
    "incentives": "Annual cash incentive disbursement post verification of capital expenditure and actual production volume benchmarks by MECON Limited.",
    "eligibility": "Companies registered in India manufacturing or setting up greenfield/brownfield capacities in 5 target specialty steel segments committing to required threshold capital investment.",
    "howToUnderstand": "The scheme subsidizes domestic steel mills that invest in sophisticated metallurgy equipment to manufacture high-end coated, electrical, and alloy steels currently imported for automotive, defense, and power sectors.",
    "applicationProcess": "Selected companies under notified rounds execute formal Memorandum of Understanding (MoU) with Ministry of Steel and submit annual production claims via the portal.",
    "registrationProcess": [
      "Online application submission on Ministry of Steel PLI Portal during notified application rounds.",
      "Evaluation of technical and financial bids by PMA (MECON) and approval by Empowered Group of Secretaries (EGoS).",
      "Signing of formal tripartite MoU with Ministry of Steel.",
      "Implementation of committed capital expenditure in rolling mills and metallurgy plants.",
      "Filing of annual incentive claims with audited sales, production volumes, and quality certifications."
    ],
    "requiredDocuments": [
      "Audited Financial Statements and Production Records for Base Year",
      "Chartered Engineer Capex Verification Certificate for specialized steel rolling equipment",
      "BIS / International Quality Certifications for manufactured specialty steel grades",
      "Statutory Auditor Report on Incremental Production Volumes"
    ],
    "importantConditions": [
      "Target Segments: (1) Coated/Plated Steel, (2) High Strength/Wear Resistant Steel, (3) Specialty Rails, (4) Alloy Steel & Steel Wires, (5) Electrical Steel (CRGO/CRNO).",
      "End-to-end manufacturing (melting to rolling) must take place within India."
    ],
    "exclusions": [
      "Standard commodity grade mild steel, TMT rebars, or basic commercial hot rolled coils.",
      "Imported steel processed through simple cutting, slitting, or repacking."
    ],
    "faqs": [
      {
        "question": "What are the five product categories covered under the PLI Scheme for Specialty Steel?",
        "answer": "Coated/Plated Steel Products, High Strength/Wear Resistant Steel, Specialty Rails, Alloy Steel Products and Steel Wires, and Electrical Steel (CRGO/CRNO)."
      }
    ]
  },
  {
    "id": "sch-11",
    "title": "PLI Scheme for White Goods (Air Conditioners and LED Lights)",
    "slug": "pli-white-goods",
    "description": "National industrial incentive scheme with an outlay of ₹6,238 Crore offering 4% to 6% incentives on net incremental sales of manufactured components and sub-assemblies of Air Conditioners and LED Lights.",
    "authority": "Department for Promotion of Industry and Internal Trade (DPIIT)",
    "implementingAuthority": "IFCI Limited (Project Management Agency)",
    "category": "Consumer Electronics",
    "status": "ACTIVE / ONGOING IMPLEMENTATION",
    "sourceUrl": "https://www.dpiit.gov.in/schemes-programmes/production-linked-incentive-pli/pli-white-goods",
    "sourceAuthority": "Department for Promotion of Industry and Internal Trade (DPIIT)",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "Manufacturers of AC Components (Compressors, Copper Tubes, Control Boards) and LED Components (Chips, Drivers, MCPCBs)",
    "financialParameters": "4% to 6% Incentive on Net Incremental Sales over Base Year over 5 Consecutive Years",
    "objective": "Create a complete domestic component manufacturing ecosystem for Air Conditioners and LED Lights, eliminate component import dependency, and establish India as a global manufacturing hub.",
    "coverage": "Pan-India for greenfield and brownfield component manufacturing units.",
    "benefits": "Cash incentives calculated at 6% (Years 1-2), 5% (Years 3-4), and 4% (Year 5) on net incremental sales of eligible manufactured components over the base year.",
    "incentives": "Annual cash disbursement following verification of committed cumulative capital expenditure and incremental component production.",
    "eligibility": "Companies incorporated in India committing to threshold investments in target component segments across Large and MSME applicant categories.",
    "howToUnderstand": "Rather than subsidizing the assembly of finished ACs and bulbs, this scheme specifically funds factories making core internal components like compressors, heat exchangers, circuit boards, and LED drivers.",
    "applicationProcess": "Selected companies under notified application rounds submit annual claims through the DPIIT / Invest India White Goods portal.",
    "registrationProcess": [
      "Submission of application and selection under target component segment.",
      "Deployment of committed capital investment in specialized manufacturing machinery.",
      "Achieving commercial production within the designated gestation window.",
      "Annual submission of incentive disbursement claims backed by Chartered Accountant & Engineer certifications.",
      "Review by PMA (IFCI) and direct credit of approved incentive into company account."
    ],
    "requiredDocuments": [
      "Chartered Engineer Certificate of Plant & Machinery commissioning",
      "Statutory Auditor Certificate for Base Year and Claim Year component sales",
      "GST Invoices and reconciliation for manufactured eligible components",
      "Factory licenses, consent to operate, and power consumption records"
    ],
    "importantConditions": [
      "Only component manufacturing qualifies; assembly of finished AC units or finished LED luminaires is not eligible for incentive.",
      "Cumulative investment thresholds must be achieved within the defined schedule to qualify for full benefits."
    ],
    "exclusions": [
      "Mere assembly of completely knocked-down (CKD) or semi knocked-down (SKD) kits without component-level manufacturing.",
      "Second-hand or refurbished imported machinery beyond statutory threshold allowances."
    ],
    "faqs": [
      {
        "question": "Does the White Goods PLI scheme incentivize the assembly of finished air conditioners?",
        "answer": "No. The scheme strictly targets the domestic manufacturing of key components and sub-assemblies (such as compressors, control boards, heat exchangers, and copper tubes), not the assembly of finished AC units."
      }
    ]
  },
  {
    "id": "sch-12",
    "title": "National Technical Textiles Mission (NTTM)",
    "slug": "national-technical-textiles-mission",
    "description": "National mission with a four-year outlay of ₹1,480 Crore to position India as a global leader in Technical Textiles through four pillars: Research & Innovation (R&D), Promotion & Market Development, Export Promotion, and Education/Skill Training.",
    "authority": "Ministry of Textiles",
    "implementingAuthority": "National Technical Textiles Mission Secretariat / Ministry of Textiles",
    "category": "Textiles & Technical Manufacturing",
    "status": "ACTIVE / OPEN",
    "sourceUrl": "http://nttm.texmin.gov.in",
    "sourceAuthority": "Ministry of Textiles",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "Technical Textile Manufacturers, Research Institutes (IITs, NITs, CSIR), Academic Bodies, and Machinery Developers",
    "financialParameters": "Up to 100% Grant-in-Aid for R&D Projects; Financial Support for Indigenous Machinery & Academic Labs",
    "objective": "Promote deep technological innovation, development of carbon and specialized fibers, boost domestic technical textile consumption across 12 sectors, and increase exports from $2B to over $10B.",
    "coverage": "Pan-India across 12 Technical Textile segments (Agrotech, Meditech, Geotech, Buildtech, Mobiltech, Protech, etc.).",
    "benefits": "Full financial grants for cutting-edge R&D projects, financial assistance for developing indigenous technical textile machinery, institutional grants for updating technical university curriculum and testing laboratories.",
    "incentives": "Grant disbursements linked to technical milestones, prototype demonstration, and commercial patent development.",
    "eligibility": "Indian research organizations, public and private academic institutions, industry-academia research consortia, and recognized technical textile enterprises.",
    "howToUnderstand": "NTTM funds high-tech research and machinery development for specialty industrial fabrics—such as bulletproof vests, medical implants, road-reinforcement geotextiles, and agricultural shade nets.",
    "applicationProcess": "Online submission of R&D and machinery development proposals through the NTTM web portal (nttm.texmin.gov.in) under active calls for proposals.",
    "registrationProcess": [
      "Register research institution or enterprise on the NTTM portal.",
      "Select active Call for Proposals under Research, Machinery Development, or Internship programs.",
      "Submit Detailed Research Proposal with technical milestones, budget breakdown, and industry partner details.",
      "Evaluation by Technical Sub-Committee and approval by Mission Steering Group (MSG).",
      "Tranche-based grant releases against experimental milestones and peer-reviewed deliverables."
    ],
    "requiredDocuments": [
      "Detailed Technical Research Proposal with IPR and Commercialization Roadmap",
      "Institutional Registration / DSIR Recognition Certificates",
      "Memorandum of Understanding (MoU) with Industry Co-Sponsor (where applicable)",
      "Itemized Capital Equipment and Consumables Budget Estimates"
    ],
    "importantConditions": [
      "R&D projects must address prioritized technical textile challenges (e.g. indigenous carbon fiber, high-performance composites).",
      "Proposals must include clear pathways for commercial scale-up and industrial prototyping."
    ],
    "exclusions": [
      "Conventional garmenting, routine yarn spinning, or traditional handloom products.",
      "Standard commercial factory expansions without research/innovation components."
    ],
    "faqs": [
      {
        "question": "What are the four pillars of the National Technical Textiles Mission?",
        "answer": "1. Research, Innovation and Development, 2. Promotion and Market Development, 3. Export Promotion, and 4. Education, Training and Skill Development."
      }
    ]
  },
  {
    "id": "sch-13",
    "title": "PLI Scheme for Textiles - Man-Made Fibre (MMF) Apparel & Technical Textiles",
    "slug": "pli-textiles-mmf",
    "description": "National textile production incentive scheme with an approved outlay of ₹10,683 Crore offering 7% to 15% incentives on turnover of MMF Apparel, MMF Fabrics, and 10 categories of Technical Textiles to build global scale manufacturing champions.",
    "authority": "Ministry of Textiles",
    "implementingAuthority": "IFCI Limited (Project Management Agency)",
    "category": "Textiles",
    "status": "ACTIVE / ONGOING IMPLEMENTATION",
    "sourceUrl": "https://texmin.nic.in/pli-textiles",
    "sourceAuthority": "Ministry of Textiles",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "Large Scale Manufacturers of Man-Made Fibre (MMF) Apparel, MMF Fabrics, and Technical Textiles",
    "financialParameters": "7% to 15% Turnover-Linked Incentive over 5 Years under Part 1 (₹300 Cr Capex) and Part 2 (₹100 Cr Capex)",
    "objective": "Shift India’s textile manufacturing focus from traditional cotton to high-demand global synthetic fibres (MMF) and technical textiles, attracting over ₹19,000 Crore in fresh industrial investments.",
    "coverage": "Pan-India for newly incorporated manufacturing entities.",
    "benefits": "Tiered turnover incentives over 5 consecutive operational years: Part 1 offers 15% (Year 1) tapering to 11% (Year 5); Part 2 offers 11% (Year 1) tapering to 7% (Year 5).",
    "incentives": "Annual cash disbursement post verification of minimum required turnover growth (minimum 25% year-on-year growth required).",
    "eligibility": "New companies incorporated in India investing minimum ₹300 Crore (Part 1, targeting min ₹600 Cr turnover) or minimum ₹100 Crore (Part 2, targeting min ₹200 Cr turnover) in notified MMF and Technical Textile product codes.",
    "howToUnderstand": "This scheme provides multi-year cash subsidies on total sales to companies setting up large synthetic textile factories and technical textile plants in India.",
    "applicationProcess": "Selected companies under notified rounds execute formal agreements and submit annual turnover audit reports via the Ministry of Textiles e-portal.",
    "registrationProcess": [
      "Online application submission on Ministry of Textiles PLI Portal.",
      "Selection and approval by Empowered Group of Secretaries (EGoS).",
      "Incorporation of dedicated new company and deployment of minimum capital investment (₹100 Cr or ₹300 Cr).",
      "Commencement of commercial production within the 2-year gestation window.",
      "Filing of annual incentive claims with audited sales ledgers and factory inspection reports."
    ],
    "requiredDocuments": [
      "Certificate of Incorporation of the new project company and GSTIN",
      "Chartered Engineer and Chartered Accountant Capex Completion Certificates",
      "Audited Financial Accounts, Itemized Sales Invoices, and HSN-wise sales reconciliation",
      "Electricity consumption records and factory commercial production certificates"
    ],
    "importantConditions": [
      "Eligible participants must achieve at least 25% year-on-year incremental turnover growth to maintain full incentive eligibility.",
      "Only notified MMF apparel, MMF fabrics, and specified technical textile HS codes qualify for incentive calculations."
    ],
    "exclusions": [
      "Conventional natural cotton, silk, wool, or jute fabric and apparel products.",
      "Trading or merchant exporting of fabrics manufactured by third-party unapproved mills."
    ],
    "faqs": [
      {
        "question": "What are the two investment categories under the PLI Scheme for Textiles?",
        "answer": "Part 1 requires a minimum investment of ₹300 Crore with a minimum turnover target of ₹600 Crore; Part 2 requires a minimum investment of ₹100 Crore with a minimum turnover target of ₹200 Crore."
      }
    ]
  },
  {
    "id": "sch-14",
    "title": "Modified Amended Technology Upgradation Fund Scheme (A-TUFS)",
    "slug": "a-tufs-textiles",
    "description": "Credit Linked Capital Investment Subsidy (CIS) scheme offering 10% to 15% capital subsidy (up to ₹30 Crore) to modernize plant and machinery in garmenting, weaving, technical textiles, processing, and jute manufacturing.",
    "authority": "Ministry of Textiles / Office of the Textile Commissioner",
    "implementingAuthority": "Office of the Textile Commissioner, Mumbai / i-TUFS Portal",
    "category": "Textile Upgradation",
    "status": "ACTIVE / ONGOING IMPLEMENTATION",
    "sourceUrl": "https://txcindia.gov.in",
    "sourceAuthority": "Ministry of Textiles / Office of the Textile Commissioner",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "Textile Manufacturing MSMEs, Weaving Units, Processing Houses, and Garmenting Factories",
    "financialParameters": "10% to 15% Capital Investment Subsidy (CIS) on Benchmarked Machinery (Max ₹20 Cr to ₹30 Cr)",
    "objective": "Promote capital investment, technical modernization, quality improvement, and employment generation across decentralized textile manufacturing segments.",
    "coverage": "Pan-India across all manufacturing states.",
    "benefits": "One-time Capital Investment Subsidy: 15% (max ₹30 Crore) for garmenting and technical textiles; 10% (max ₹20 Crore) for weaving, processing, composite, and jute units.",
    "incentives": "Direct credit of capital subsidy into borrower bank term loan account following joint physical verification of installed benchmarked machinery.",
    "eligibility": "Textile manufacturing entities possessing valid Udyam registration and obtaining institutional credit/term loans from scheduled commercial banks for eligible benchmarked machinery.",
    "howToUnderstand": "A-TUFS reimburses up to 15% of the purchase price of brand-new, modern textile machinery to help Indian weavers, garment factories, and processors upgrade from obsolete looms to high-speed automated equipment.",
    "applicationProcess": "Online registration and Unique Identification Number (UID) generation through the i-TUFS portal prior to machinery procurement.",
    "registrationProcess": [
      "Sanction of term loan by lending bank for eligible benchmarked textile machinery.",
      "Online application on i-TUFS portal for issuance of Unique Identification (UID) number.",
      "Procurement, installation, and commercial commissioning of benchmarked machinery.",
      "Submission of subsidy claim on i-TUFS portal and Joint Inspection Team (JIT) physical verification.",
      "Approval by Technical Advisory-cum-Monitoring Committee (TAMC) and direct subsidy transfer to loan account."
    ],
    "requiredDocuments": [
      "Term Loan Sanction Letter and Bank Appraisal Note",
      "Machinery Invoices, Bill of Lading, Custom Clearance, and Payment Bank Vouchers",
      "Joint Inspection Team (JIT) Physical Verification Report and Geo-tagged Machinery Photos",
      "Udyam Registration Certificate and Factory Commercial Electricity Connection"
    ],
    "importantConditions": [
      "Machinery must be brand new and conform to the benchmarked technical specifications notified by the Textile Commissioner.",
      "Standalone spinning machinery is not eligible for capital subsidy under A-TUFS."
    ],
    "exclusions": [
      "Second-hand, reconditioned, or unbenchmarked textile machinery.",
      "Civil construction, land development, or operational working capital expenses."
    ],
    "faqs": [
      {
        "question": "What is the maximum subsidy cap under A-TUFS for garmenting units?",
        "answer": "Garmenting and Technical Textile units are eligible for a 15% Capital Investment Subsidy subject to a maximum ceiling of ₹30 Crore."
      }
    ]
  },
  {
    "id": "sch-15",
    "title": "Scheme for Integrated Textile Parks (SITP)",
    "slug": "sitp-textile-parks",
    "description": "Infrastructure development scheme providing grant assistance of up to 40% of project cost (max ₹40 Crore) for creating world-class industrial infrastructure, common facilities, and effluent treatment plants for textile clusters on PPP basis.",
    "authority": "Ministry of Textiles",
    "implementingAuthority": "Ministry of Textiles / Project Management Consultants",
    "category": "Industrial Infrastructure",
    "status": "ACTIVE / ONGOING IMPLEMENTATION",
    "sourceUrl": "https://texmin.nic.in/schemes/scheme-integrated-textile-parks-sitp",
    "sourceAuthority": "Ministry of Textiles",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "Textile Industry Associations, Entrepreneur Consortia, and Special Purpose Vehicles (SPVs)",
    "financialParameters": "Grant-in-Aid of 40% of Project Infrastructure Cost (up to ₹40 Crore per Park)",
    "objective": "Provide the textile industry with world-class infrastructure facilities for setting up textile units meeting international environmental and quality standards.",
    "coverage": "Pan-India (with enhanced grant support up to 90% or max ₹40 Crore for North Eastern and Hill States).",
    "benefits": "Non-repayable capital grant funding common infrastructure: roads, drainage, water supply, captive power distribution, testing labs, design centers, creches, and Common Effluent Treatment Plants (CETPs).",
    "incentives": "Grant released in four milestone-based installments (10%, 15%, 25%, 25%, 25%) linked to physical construction and equity infusion.",
    "eligibility": "Special Purpose Vehicles (SPVs) formed by a group of at least 10 textile entrepreneurs holding contiguous industrial land.",
    "howToUnderstand": "SITP enables groups of textile business owners to pool resources and build dedicated industrial parks equipped with heavy-duty power lines, water treatment, and worker amenities funded partially by central grants.",
    "applicationProcess": "Project proposal submission and approval through the Project Approval Committee (PAC) of the Ministry of Textiles.",
    "registrationProcess": [
      "Formation and registration of a Special Purpose Vehicle (SPV) by participating textile entrepreneurs.",
      "Acquisition of contiguous land and preparation of Detailed Project Report (DPR).",
      "Appraisal by Project Management Consultant (PMC) and presentation to PAC.",
      "Execution of Tripartite Agreement between SPV, Ministry of Textiles, and Lending Bank.",
      "Milestone-driven construction and drawdown of central grant funds into dedicated trust account."
    ],
    "requiredDocuments": [
      "SPV Incorporation Certificate and Shareholding Agreement of constituent members",
      "Unencumbered Land Title Deeds and Industrial Conversion Orders",
      "Detailed Project Report (DPR) with civil designs, CETP layout, and cost estimates",
      "Bank Term Loan Sanction Letter for SPV infrastructure component"
    ],
    "importantConditions": [
      "Minimum of 10 textile units must be established within the park.",
      "The SPV must have complete financial closure with verifiable equity infusion and bank debt."
    ],
    "exclusions": [
      "Cost of land purchase cannot be funded through the central government grant component.",
      "Individual factory building interiors and private machinery belong to individual unit accounts, not SPV grant."
    ],
    "faqs": [
      {
        "question": "What is the financial grant assistance provided under SITP?",
        "answer": "The Government of India grant is up to 40% of the project cost (excluding land), subject to a maximum ceiling of ₹40 Crore per textile park (up to 90% for North East and Himalayan States)."
      }
    ]
  },
  {
    "id": "sch-16",
    "title": "PM Mega Integrated Textile Region and Apparel (PM MITRA) Parks",
    "slug": "pm-mitra-textiles",
    "description": "Mega infrastructure initiative with an outlay of ₹4,445 Crore developing 7 world-class integrated textile parks across 1,000+ contiguous acres each in 7 States, offering up to ₹500 Crore Development Capital Support and ₹300 Crore Competitiveness Incentive Support per park.",
    "authority": "Ministry of Textiles",
    "implementingAuthority": "Ministry of Textiles / State-Centre Joint Venture SPVs",
    "category": "Mega Infrastructure",
    "status": "ACTIVE / ONGOING IMPLEMENTATION",
    "sourceUrl": "https://texmin.nic.in/pm-mitra",
    "sourceAuthority": "Ministry of Textiles",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "Integrated Textile Manufacturers, Global Apparel Brands, Technical Textile Units, and Mega Investors",
    "financialParameters": "Development Capital Support up to ₹500 Cr + Competitiveness Incentive Support up to ₹300 Cr per Park",
    "objective": "Implement the 5F vision (Farm to Fibre to Factory to Fashion to Foreign) by creating world-class 1,000+ acre plug-and-play industrial ecosystems that unify spinning, weaving, processing, garmenting, and logistics under one roof.",
    "coverage": "7 Selected States: Tamil Nadu (Virudhunagar), Telangana (Warangal), Gujarat (Navsari), Karnataka (Kalaburagi), Madhya Pradesh (Dhar), Uttar Pradesh (Lucknow), and Maharashtra (Amravati).",
    "benefits": "Development Capital Support (DCS) of up to ₹500 Crore per greenfield park (₹200 Cr for brownfield) for master infrastructure, plus Competitiveness Incentive Support (CIS) up to ₹300 Crore per park to incentivize early setting up of manufacturing units (up to 3% of turnover).",
    "incentives": "Direct infrastructure funding to the State-Centre SPV and operational turnover incentives to early manufacturing units establishing factories within PM MITRA parks.",
    "eligibility": "State Governments in partnership with Central Government (51% State / 49% Centre JV SPV), Master Industrial Developers, and individual textile manufacturing units setting up facilities within the designated PM MITRA park.",
    "howToUnderstand": "PM MITRA creates massive, world-class industrial cities dedicated to textiles where raw cotton or yarn enters one side and fully packaged fashion garments emerge for direct global export from integrated dry ports.",
    "applicationProcess": "Industrial plot allotment and unit incentives managed through the respective State PM MITRA Special Purpose Vehicle single-window portals.",
    "registrationProcess": [
      "Incorporation of Joint Venture SPV between Central Ministry of Textiles and respective State Government.",
      "Master planning and selection of Master Developer on PPP (Design-Build-Finance-Operate-Transfer) basis.",
      "Development of core industrial infrastructure (power, water, CETP, plug-and-play factory sheds).",
      "Allotment of industrial plots and standard design factories to textile manufacturing units.",
      "Operationalization of units and claiming Competitiveness Incentive Support (CIS) on turnover."
    ],
    "requiredDocuments": [
      "SPV Joint Venture Agreement and Land Handover Gazetted Orders for 1,000+ acres",
      "Master Infrastructure Detailed Project Report (DPR) and Comprehensive Environmental Impact Assessment (EIA)",
      "Unit Allotment Agreement with the SPV / Master Developer",
      "Factory Commercial Production and GST turnover filings for claiming CIS incentives"
    ],
    "importantConditions": [
      "Minimum contiguous encumbrance-free land parcel of 1,000 acres provided by State Government.",
      "Parks must incorporate zero liquid discharge (ZLD) effluent treatment, renewable energy, and worker housing facilities."
    ],
    "exclusions": [
      "Non-textile industrial manufacturing activities within the specialized park zones.",
      "Standalone speculative real estate trading."
    ],
    "faqs": [
      {
        "question": "Which 7 states were selected for setting up PM MITRA Mega Textile Parks?",
        "answer": "Tamil Nadu, Telangana, Gujarat, Karnataka, Madhya Pradesh, Uttar Pradesh, and Maharashtra."
      },
      {
        "question": "What is Competitiveness Incentive Support (CIS) under PM MITRA?",
        "answer": "CIS provides up to ₹300 Crore per park (up to 3% of total turnover, capped at ₹30 Crore per enterprise) to incentivize textile units to establish operations early inside the PM MITRA park."
      }
    ]
  },
  {
    "id": "sch-17",
    "title": "PLI Scheme for Pharmaceuticals",
    "slug": "pli-pharmaceuticals",
    "description": "National pharmaceutical manufacturing incentive program with an outlay of ₹15,000 Crore providing 3% to 10% production-linked incentives on incremental sales to enhance India’s manufacturing capabilities in complex generics, biopharmaceuticals, patented drugs, and gene therapies.",
    "authority": "Department of Pharmaceuticals",
    "implementingAuthority": "Small Industries Development Bank of India (SIDBI) / Department of Pharmaceuticals",
    "category": "Pharmaceuticals & Healthcare",
    "status": "ACTIVE / ONGOING IMPLEMENTATION",
    "sourceUrl": "https://pharmaceuticals.gov.in/schemes/production-linked-incentive-pli-scheme-pharmaceuticals",
    "sourceAuthority": "Department of Pharmaceuticals, Ministry of Chemicals & Fertilizers",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "Large Global Pharma Majors, Domestic Mid-Tier Pharma Firms, and Small/MSME Biotech Innovators",
    "financialParameters": "3% to 10% Incentive on Incremental Sales over Base Year (FY 2019-20) across 6 Operational Years",
    "objective": "Promote high-value, complex pharmaceutical manufacturing, boost domestic R&D pipelines, enhance product diversification into biosimilars and cell therapies, and reduce import dependency on critical formulations.",
    "coverage": "Pan-India across three applicant categories (Group A: Global revenue >= ₹5,000 Cr; Group B: ₹500–₹5,000 Cr; Group C: < ₹500 Cr including MSMEs).",
    "benefits": "Incentives of 10% (Years 1-4), 7.5% (Year 5), and 5% (Year 6) on incremental sales for Category 1 & 2 products; 5% (Years 1-4), 4% (Year 5), and 3% (Year 6) for Category 3 products.",
    "incentives": "Annual financial disbursement post verification of cumulative capex and incremental sales thresholds by SIDBI.",
    "eligibility": "Selected approved pharma manufacturing companies manufacturing in 3 product categories: Category 1 (Biopharmaceuticals, Complex Generics, Patented Drugs), Category 2 (APIs/KSMs), Category 3 (Repurposed drugs, In-Vitro Diagnostics, Formulations).",
    "howToUnderstand": "This scheme pays cash bonuses on new sales to pharmaceutical companies that invest in high-tech laboratories and factories producing biosimilars, oncology therapies, and specialized medical drugs.",
    "applicationProcess": "Selected companies under notified batches file annual disbursement claims via the Department of Pharmaceuticals / SIDBI portal.",
    "registrationProcess": [
      "Submission of application during open window and selection by Empowered Group of Secretaries (EGoS).",
      "Execution of formal incentive agreement with Department of Pharmaceuticals and SIDBI.",
      "Deployment of committed cumulative capital expenditure in manufacturing plants and R&D facilities.",
      "Filing of annual incentive claims with audited sales ledgers and product batch manufacturing records.",
      "Review by PMA (SIDBI) and direct electronic fund transfer of approved incentive amount."
    ],
    "requiredDocuments": [
      "Drug Manufacturing Licenses from State FDA / CDSCO for approved product lines",
      "Chartered Engineer Certificate verifying physical plant & machinery capex",
      "Statutory Auditor Certificate on Base Year and Claim Year incremental net sales",
      "WHO-GMP / USFDA / EU-GMP compliance inspection certificates"
    ],
    "importantConditions": [
      "Applicants must achieve mandatory cumulative investment thresholds and minimum baseline sales to trigger incentive disbursements.",
      "Second-hand machinery cannot exceed notified regulatory limits."
    ],
    "exclusions": [
      "Simple contract manufacturing or repackaging without genuine technological ownership.",
      "Routine low-value basic formulations not included in the notified target product list."
    ],
    "faqs": [
      {
        "question": "What are the three product categories covered under the PLI Scheme for Pharmaceuticals?",
        "answer": "Category 1: Biopharmaceuticals, Complex Generics, Patented Drugs, and Cell/Gene Therapies; Category 2: Active Pharmaceutical Ingredients (APIs) and Key Starting Materials (KSMs); Category 3: Auto-immune drugs, anti-cancer drugs, and In-Vitro Diagnostic (IVD) devices."
      }
    ]
  },
  {
    "id": "sch-18",
    "title": "Production Linked Incentive Scheme for Bulk Drugs (KSMs/APIs)",
    "slug": "pli-bulk-drugs-apis",
    "description": "National manufacturing program with an approved outlay of ₹6,940 Crore providing 5% to 20% production-linked incentives on sales of 41 critical Key Starting Materials (KSMs), Drug Intermediates (DIs), and Active Pharmaceutical Ingredients (APIs) to ensure drug security.",
    "authority": "Department of Pharmaceuticals",
    "implementingAuthority": "IFCI Limited (Project Management Agency)",
    "category": "Bulk Drugs & APIs",
    "status": "ACTIVE / ONGOING IMPLEMENTATION",
    "sourceUrl": "https://pharmaceuticals.gov.in/schemes/production-linked-incentive-pli-scheme-bulk-drugs",
    "sourceAuthority": "Department of Pharmaceuticals, Ministry of Chemicals & Fertilizers",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "Greenfield Bulk Drug, API, and KSM Manufacturing Companies in India",
    "financialParameters": "20% Incentive for Fermentation-Based & 10% for Chemical Synthesis Bulk Drugs on Net Sales over 6 Years",
    "objective": "Attain self-reliance and eliminate critical import vulnerabilities in 41 essential Key Starting Materials, Drug Intermediates, and Active Pharmaceutical Ingredients essential for life-saving antibiotics, vitamins, and steroids.",
    "coverage": "Pan-India for approved greenfield manufacturing plants.",
    "benefits": "Fermentation-based products receive 20% (Years 1-4), 15% (Year 5), and 5% (Year 6) on net sales; Chemical synthesis-based products receive 10% per year for 6 consecutive operational years.",
    "incentives": "Direct cash subsidy disbursed annually post technical inspection and sales verification by Project Management Agency (IFCI).",
    "eligibility": "Selected companies in 4 target segments committing to mandatory greenfield capital investments and achieving commercial production within notified gestation timelines.",
    "howToUnderstand": "This scheme provides massive cash subsidies (up to 20% of sales) to companies that build brand-new factories in India to manufacture raw drug ingredients like penicillin, clavulanic acid, and paracetamol raw intermediates.",
    "applicationProcess": "Approved participants submit annual production verification and subsidy claims through the IFCI / Department of Pharmaceuticals online portal.",
    "registrationProcess": [
      "Selection and issuance of Approval Letter under notified target bulk drug segments.",
      "Setting up of greenfield manufacturing plant and installation of specialized fermenters/reactors.",
      "Commercial commissioning of the plant and intimation of Commercial Operation Date (COD).",
      "Annual submission of production, sales, and GST invoices along with quality batch tests.",
      "PMA (IFCI) physical inspection and direct disbursement of approved incentive."
    ],
    "requiredDocuments": [
      "Commercial Operation Date (COD) Certification and Drug Manufacturing License",
      "Environmental Clearance (EC) and Consent to Operate (CTO) from State Pollution Control Board",
      "Chartered Engineer Capex Verification Certificate for greenfield machinery",
      "Statutory Auditor Certificate for Net Sales Value of notified bulk drug molecules"
    ],
    "importantConditions": [
      "Only greenfield projects (brand-new manufacturing facilities) are eligible for incentives.",
      "Beneficiary must manufacture the specific approved molecule out of the 41 notified bulk drug products."
    ],
    "exclusions": [
      "Brownfield plant expansions or modifying existing manufacturing lines.",
      "Formulation manufacturing (tablets, capsules) made using imported bulk drug powders."
    ],
    "faqs": [
      {
        "question": "What is the incentive rate for fermentation-based bulk drugs under this PLI scheme?",
        "answer": "Fermentation-based bulk drugs receive an incentive of 20% of net sales for the first 4 years, 15% in the 5th year, and 5% in the 6th year."
      }
    ]
  },
  {
    "id": "sch-19",
    "title": "Promotion of Research and Development in Pharma-MedTech Sector (PRIP)",
    "slug": "prip-pharma-medtech",
    "description": "National research and innovation scheme with an approved outlay of ₹5,000 Crore supporting R&D infrastructure through 7 NIPER Centers of Excellence (₹700 Cr) and direct financial assistance of up to ₹125 Crore per project for cutting-edge pharma and medtech innovation.",
    "authority": "Department of Pharmaceuticals",
    "implementingAuthority": "Department of Pharmaceuticals / Project Management Agency",
    "category": "R&D & Innovation",
    "status": "ACTIVE / OPEN",
    "sourceUrl": "https://pharmaceuticals.gov.in/schemes/promotion-research-and-innovation-pharma-medtech-sector-prip",
    "sourceAuthority": "Department of Pharmaceuticals, Ministry of Chemicals & Fertilizers",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "Indian Pharmaceutical & Medical Device Companies, MSMEs, Startups, and Academic Research Institutions",
    "financialParameters": "Grants up to ₹125 Cr for Commercial R&D Projects; up to ₹100 Cr for MSMEs/Startups; ₹700 Cr for NIPER CoEs",
    "objective": "Transform the Indian pharma-medtech sector from cost-based manufacturing to innovation-led R&D, commercialize novel drug candidates, develop high-end medical devices, and foster industry-academia collaboration.",
    "coverage": "Pan-India across two major components (Component A: NIPER CoEs; Component B: Financial Assistance for Priority R&D Projects).",
    "benefits": "Direct financial assistance: up to ₹125 Crore per project for commercial large-scale clinical innovation (up to 35% of R&D cost); up to ₹100 Crore for MSMEs/Startups (up to 50% grant); up to ₹50 Crore for translational research.",
    "incentives": "Non-repayable milestone-based grant disbursements tied to drug discovery phases, pre-clinical trials, and human clinical trial milestones.",
    "eligibility": "Indian incorporated entities with active in-house R&D units recognized by DSIR, academic/research institutions, startups in DPIIT registry, and consortia proposing innovative projects in notified priority areas.",
    "howToUnderstand": "PRIP directly funds the expensive research, laboratory animal testing, and human clinical trials required to invent brand-new medicines and breakthrough medical devices in India.",
    "applicationProcess": "Online project proposal submission through the PRIP portal (prip.pharmaceuticals.gov.in) under active calls for proposals.",
    "registrationProcess": [
      "Register entity profile on the PRIP online application portal.",
      "Submit Detailed Research Proposal under designated Priority Area (e.g. New Chemical Entities, Complex Generics, Medical Devices).",
      "Technical review and scientific peer evaluation by Apex Committee.",
      "Sanction of R&D grant and signing of tripartite agreement with PMA.",
      "Milestone-linked disbursement of funds against validated laboratory and clinical trial deliverables."
    ],
    "requiredDocuments": [
      "Detailed Project Proposal with Scientific Methodology, TRL Level, and IPR Strategy",
      "DSIR In-house R&D Recognition Certificate / DPIIT Startup Certificate",
      "Audited Financial Statements and R&D Expenditure Accounts for past 3 years",
      "Ethical clearances, CTRI clinical trial approvals, and animal testing permissions (where applicable)"
    ],
    "importantConditions": [
      "Projects must focus on notified priority areas: New Chemical Entities (NCEs), Biopharmaceuticals, Medical Devices, Antimicrobial Resistance, or Orphan Drugs.",
      "Intellectual Property (IP) generated from the funded research must reside in India."
    ],
    "exclusions": [
      "Routine quality control testing, standard formulation copying, or routine regulatory bio-equivalence studies.",
      "General commercial factory construction without proprietary R&D components."
    ],
    "faqs": [
      {
        "question": "What are the two components of the PRIP Scheme?",
        "answer": "Component A focuses on strengthening R&D infrastructure by setting up 7 Centers of Excellence at NIPERs (₹700 Crore); Component B provides direct financial grants to industries, MSMEs, and academia for prioritized R&D projects (₹4,250 Crore)."
      }
    ]
  },
  {
    "id": "sch-20",
    "title": "PLI Scheme for Medical Devices",
    "slug": "pli-medical-devices",
    "description": "National manufacturing program with an approved outlay of ₹3,420 Crore providing 5% financial incentive on net incremental sales of manufactured medical devices across 4 target high-tech medical technology segments.",
    "authority": "Department of Pharmaceuticals",
    "implementingAuthority": "IFCI Limited (Project Management Agency)",
    "category": "Medical Devices",
    "status": "ACTIVE / ONGOING IMPLEMENTATION",
    "sourceUrl": "https://pharmaceuticals.gov.in/schemes/production-linked-incentive-pli-scheme-medical-devices",
    "sourceAuthority": "Department of Pharmaceuticals, Ministry of Chemicals & Fertilizers",
    "verificationStatus": "VERIFIED",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "Greenfield Manufacturers of High-End Medical Devices and Diagnostic Equipment",
    "financialParameters": "5% Financial Incentive on Net Incremental Sales over Base Year (FY 2019-20) for 5 Consecutive Years",
    "objective": "Boost domestic manufacturing of high-end medical devices, attract massive greenfield private capital investments, reduce 80%+ import reliance, and position India as a global medical technology manufacturer.",
    "coverage": "Pan-India for approved greenfield manufacturing projects.",
    "benefits": "5% cash incentive on net incremental sales of eligible manufactured medical devices over base year threshold for a period of 5 years.",
    "incentives": "Annual cash disbursement following verification of committed greenfield capital expenditure (minimum threshold ₹180 Crore) and incremental sales.",
    "eligibility": "Companies registered in India setting up greenfield manufacturing plants in four target segments: (1) Cancer care/Radiotherapy, (2) Radiology & Imaging / Nuclear Imaging, (3) Anaesthetics & Cardio-Respiratory / Stents, (4) All Implants.",
    "howToUnderstand": "This scheme provides 5% cash incentives on total domestic and export sales to companies that build new medical equipment factories in India producing MRI scanners, CT machines, pacemakers, and orthopedic implants.",
    "applicationProcess": "Approved participants submit annual sales audits and capex compliance reports through the IFCI / Department of Pharmaceuticals online portal.",
    "registrationProcess": [
      "Selection and approval under one of the 4 notified medical device target segments.",
      "Deployment of committed greenfield capital expenditure in plant, cleanrooms, and testing facilities.",
      "Obtaining manufacturing licenses and medical device quality certifications (ISO 13485 / CDSCO).",
      "Filing of annual incentive claims with audited sales ledgers and product batch release records.",
      "Review by PMA (IFCI) and direct disbursement of approved incentive amount."
    ],
    "requiredDocuments": [
      "CDSCO Medical Device Manufacturing License (MD-5 / MD-9 / MD-10)",
      "ISO 13485 Quality Management System Certification",
      "Chartered Engineer Capex Verification Certificate for greenfield machinery and cleanrooms",
      "Statutory Auditor Certificate on Base Year and Claim Year Net Incremental Sales"
    ],
    "importantConditions": [
      "Mandatory greenfield project requirement with minimum cumulative capital investment threshold of ₹180 Crore.",
      "Only medical devices falling under the 4 notified target segments qualify for incentive claims."
    ],
    "exclusions": [
      "Low-tech disposable items such as non-woven masks, standard gloves, or basic surgical cotton.",
      "Imported medical devices assembled through simple screw-driver operations without domestic manufacturing."
    ],
    "faqs": [
      {
        "question": "What are the four target segments under the PLI Scheme for Medical Devices?",
        "answer": "1. Cancer care/Radiotherapy medical devices, 2. Radiology & Imaging medical devices (MRI, CT, Ultrasound) and Nuclear Imaging, 3. Anaesthetics & Cardio-Respiratory medical devices (including Catheters, Stents, Pacemakers), and 4. All Implants (including orthopedic and dental implants)."
      }
    ]
  },
  {
    "id": "sch-21",
    "title": "Scheme for Promotion of Medical Device Parks",
    "slug": "medical-device-parks",
    "description": "Central sector infrastructure scheme with an outlay of ₹400 Crore providing financial assistance of up to ₹100 Crore per park (or 70% of project cost for general states, 90% for Hilly/NE states) to 4 selected State Implementing Agencies (Himachal Pradesh, Tamil Nadu, Madhya Pradesh, Uttar Pradesh) for developing world-class Common Infrastructure Facilities (CIF) in medical device parks.",
    "authority": "Department of Pharmaceuticals, Ministry of Chemicals and Fertilizers",
    "category": "Healthcare Infrastructure",
    "status": "ACTIVE / ONGOING IMPLEMENTATION",
    "sourceUrl": "https://pharmaceuticals.gov.in/schemes/promotion-medical-devices-parks",
    "sourceAuthority": "Department of Pharmaceuticals, Ministry of Chemicals & Fertilizers",
    "verificationStatus": "VERIFIED",
    "eligibility": "State Implementing Agencies (SIAs) nominated by State Governments for park development. Manufacturing units leasing plots/sheds within the approved parks must be incorporated medical device manufacturing enterprises.",
    "benefits": "Grants-in-aid up to ₹100 Crore per park for Common Infrastructure Facilities (CIF); access for manufacturing units to shared high-cost testing facilities, 3D prototyping, cleanrooms, gamma irradiation, and toxicological evaluation at subsidized user fees.",
    "applicationProcess": "Park allocation completed for 4 designated states. Manufacturing units apply directly to the respective State Industrial Development Corporation / SIA (YEIDA, TIDCO, MPIDC, HPSIDC) for plot allotments.",
    "implementingAuthority": "State Implementing Agencies (SIAs) / State Industrial Development Corporations",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "State Governments / State Implementing Agencies establishing dedicated Medical Device Parks and industrial units setting up within the parks",
    "financialParameters": "Financial grant-in-aid of up to ₹100 Crore per park or 70% of project cost of Common Infrastructure Facilities (90% for Hilly and North-Eastern States)",
    "objective": "Provide financial assistance for creation of world-class Common Infrastructure Facilities (testing laboratories, sterilization plants, component manufacturing centers, power/water distribution, effluent treatment plants) in 4 dedicated medical device parks to reduce manufacturing cost and foster an integrated ecosystem.",
    "coverage": "4 designated State Medical Device Parks approved under the scheme: Himachal Pradesh (Nalagarh), Tamil Nadu (Oragadam), Madhya Pradesh (Ujjain), and Uttar Pradesh (YEIDA).",
    "incentives": "Phased grant-in-aid releases to State Implementing Agencies based on infrastructure construction milestones and physical progress monitoring.",
    "howToUnderstand": "This is an infrastructure assistance scheme supporting State Governments to build shared testing labs, clean rooms, and waste treatment plants inside 4 major medical device parks so manufacturing companies do not have to purchase individual multi-crore testing machines.",
    "registrationProcess": [
      "Scheme infrastructure grant allocated to the 4 approved State Implementing Agencies (SIAs).",
      "SIA executes construction of Common Infrastructure Facilities (CIF) including calibration labs, tool rooms, and central warehousing.",
      "Medical device manufacturing companies apply for industrial plot/shed allotment via the respective State Single Window Portal.",
      "Manufacturing enterprises establish production facilities and access CIF testing facilities on scheduled pay-per-use tariffs."
    ],
    "requiredDocuments": [
      "State Single Window industrial plot application and Detailed Project Report (DPR)",
      "Company Incorporation Certificate, PAN, and Udyam/GSTIN registration",
      "CDSCO Medical Device Manufacturing License / Application Acknowledgment",
      "Consent to Establish (CTE) from State Pollution Control Board"
    ],
    "importantConditions": [
      "Financial assistance is strictly for Common Infrastructure Facilities (CIF) and cannot be utilized for land acquisition or recurring administrative expenses.",
      "CIF facilities must maintain open, non-discriminatory access and subsidized pricing for MSME medical device manufacturers."
    ],
    "exclusions": [
      "Direct capital grants to private commercial manufacturing entities (which fall separately under the PLI Scheme for Medical Devices).",
      "Cost of land acquisition, corporate building construction, or personal real estate development."
    ],
    "faqs": [
      {
        "question": "Which states were approved under the Scheme for Promotion of Medical Device Parks?",
        "answer": "Four states received final approval under the scheme: Himachal Pradesh, Tamil Nadu, Madhya Pradesh, and Uttar Pradesh."
      },
      {
        "question": "Does this scheme provide direct production subsidies to private medical device factories?",
        "answer": "No. This scheme provides grant-in-aid to State Implementing Agencies for creating shared testing and common infrastructure facilities. Direct manufacturing production incentives are provided separately under the PLI Scheme for Medical Devices."
      }
    ]
  },
  {
    "id": "sch-22",
    "title": "National Green Hydrogen Mission - Electrolyser Manufacturing Incentive",
    "slug": "green-hydrogen-electrolyser-pli",
    "description": "Strategic Interventions for Green Hydrogen Transition (SIGHT) Component I under the National Green Hydrogen Mission (outlay ₹4,440 Crore), providing direct production-linked financial incentives over 5 years for manufacturing advanced electrolysers in India.",
    "authority": "Ministry of New and Renewable Energy (MNRE)",
    "category": "Clean Energy & Hydrogen",
    "status": "ACTIVE / ONGOING IMPLEMENTATION",
    "sourceUrl": "https://mnre.gov.in/national-green-hydrogen-mission",
    "sourceAuthority": "Ministry of New and Renewable Energy (MNRE)",
    "verificationStatus": "VERIFIED",
    "eligibility": "Bidders selected through competitive bidding by SECI meeting minimum net worth criteria, committed manufacturing capacity (minimum 100 MW, maximum 300 MW per bidder for generic technology bucket), and local value addition thresholds (starting at 40% Alkaline / 30% Stack).",
    "benefits": "Annual cash incentive disbursed per kW of manufactured electrolyser capacity multiplied by local value addition factor and specific energy consumption performance factor over a 5-year operating window.",
    "applicationProcess": "Competitive e-bidding conducted by SECI through Bharat Electronics / ISN-ETS tender portals under published SIGHT Component-I tranches.",
    "implementingAuthority": "Solar Energy Corporation of India (SECI)",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "Electrolyser Manufacturing Companies / Joint Ventures setting up giga-scale electrolyser production plants in India",
    "financialParameters": "Base incentive of ₹4,440/kW in Year 1 tapering to ₹3,700/kW (Yr 2), ₹2,960/kW (Yr 3), ₹2,220/kW (Yr 4), and ₹1,480/kW (Yr 5) per kW of manufactured electrolyser capacity",
    "objective": "Establish giga-scale domestic manufacturing capacity of advanced electrolysers (Alkaline, PEM, AEM, SOEC), lower the capital cost of hydrogen production, and maximize domestic local value addition.",
    "coverage": "Pan-India for approved manufacturing facilities allocated capacity under competitive SECI tenders.",
    "incentives": "Direct financial incentive payments disbursed annually by SECI upon verification of actual production, domestic value addition, and specific energy consumption metrics.",
    "howToUnderstand": "This scheme pays direct cash subsidies (starting at ₹4,440 per kilowatt of capacity) to companies manufacturing green hydrogen electrolyser machines in India, scaled to their efficiency and domestic parts sourcing.",
    "registrationProcess": [
      "Submission of techno-commercial bid under SECI SIGHT Component-I Request for Selection (RfS).",
      "Evaluation of bid capacity, technology pathway (Bucket 1: Any Technology, Bucket 2: Indigenously Developed Stack Technology), and financial net worth.",
      "Issuance of Letter of Award (LoA) and execution of implementation agreement with SECI.",
      "Commissioning of manufacturing plant within committed timeline (typically 24-30 months from LoA).",
      "Annual filing of incentive claims with verified local value addition (LVA) and specific energy consumption audits."
    ],
    "requiredDocuments": [
      "SECI RfS Bid Submission Documents and Earnest Money Deposit / Performance Bank Guarantee",
      "Audited Financial Statements and Net Worth Certificate issued by Statutory Auditor",
      "Chartered Engineer and Third-Party Lab Certification on Local Value Addition and Specific Energy Consumption (kWh/kg H2)",
      "Factory Commercial Production Certificate and GST Invoices"
    ],
    "importantConditions": [
      "Incentive is strictly calculated based on allocated annual capacity and actual sales of domestically manufactured electrolysers.",
      "Must meet progressive annual Domestic Value Addition (LVA) benchmarks starting at 40% and reaching 70% in Year 5."
    ],
    "exclusions": [
      "Pure assembly of completely knocked down (CKD) or semi-knocked down (SKD) imported electrolyser kits without local value addition.",
      "Entities producing hydrogen gas without manufacturing the electrolyser equipment (which falls under SIGHT Component-II)."
    ],
    "faqs": [
      {
        "question": "What is the incentive rate for electrolyser manufacturing under SIGHT Component-I?",
        "answer": "The base incentive starts at ₹4,440/kW in Year 1, reducing annually to ₹3,700/kW (Year 2), ₹2,960/kW (Year 3), ₹2,220/kW (Year 4), and ₹1,480/kW (Year 5)."
      },
      {
        "question": "Who conducts the bidding and disbursement for SIGHT Electrolyser Manufacturing?",
        "answer": "Solar Energy Corporation of India (SECI) serves as the implementing and disbursement agency on behalf of the Ministry of New and Renewable Energy (MNRE)."
      }
    ]
  },
  {
    "id": "sch-23",
    "title": "National Green Hydrogen Mission - Green Hydrogen Production Incentive",
    "slug": "green-hydrogen-production-incentive",
    "description": "Strategic Interventions for Green Hydrogen Transition (SIGHT) Component II under the National Green Hydrogen Mission (outlay ₹13,050 Crore), providing direct financial incentives over 3 years for commercial production of Green Hydrogen and Green Ammonia in India.",
    "authority": "Ministry of New and Renewable Energy (MNRE)",
    "category": "Clean Energy",
    "status": "ACTIVE / ONGOING IMPLEMENTATION",
    "sourceUrl": "https://mnre.gov.in/national-green-hydrogen-mission",
    "sourceAuthority": "Ministry of New and Renewable Energy (MNRE)",
    "verificationStatus": "VERIFIED",
    "eligibility": "Bidders selected under SECI SIGHT Component-II competitive auctions offering minimum 10,000 MT/year capacity (Bucket 1: Technology Agnostic) or 500 MT/year (Bucket 2: Biomass-based) with demonstrated financial net worth.",
    "benefits": "Direct financial incentive disbursed per kilogram of verified Green Hydrogen produced and supplied (₹50/kg in Yr 1, ₹40/kg in Yr 2, ₹30/kg in Yr 3) for 3 consecutive years from commercial operation date.",
    "applicationProcess": "Competitive e-bidding through SECI tenders published under SIGHT Component-II (Green Hydrogen / Green Ammonia production).",
    "implementingAuthority": "Solar Energy Corporation of India (SECI)",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "Green Hydrogen and Green Ammonia Producers / Project Developers establishing commercial green hydrogen production facilities in India",
    "financialParameters": "Base incentive of ₹50/kg of Green Hydrogen produced in Year 1, ₹40/kg in Year 2, and ₹30/kg in Year 3 over a 3-year period",
    "objective": "Accelerate large-scale commercial production of Green Hydrogen and its derivatives, bridge the cost parity gap with fossil-based grey hydrogen, and build export-oriented hydrogen hubs.",
    "coverage": "Pan-India for production facilities awarded capacity through competitive auctions under Technology Agnostic and Biomass buckets.",
    "incentives": "Direct quarterly/annual cash payouts from SECI based on metered output of Green Hydrogen complying with National Green Hydrogen Standard criteria (<=2 kg CO2 equivalent per kg H2).",
    "howToUnderstand": "This program pays commercial green hydrogen plants a direct production cash subsidy of ₹50, ₹40, and ₹30 per kilogram of hydrogen produced over their first 3 operational years.",
    "registrationProcess": [
      "Submission of techno-commercial and financial bids under SECI SIGHT Component-II Request for Selection (RfS).",
      "Allocation of production capacity based on lowest quoting incentive trajectory and bid evaluation.",
      "Execution of SIGHT Implementation Agreement with SECI and securing renewable power connectivity.",
      "Commissioning of Green Hydrogen production plant within 36 months from execution date.",
      "Verification of clean energy origin, carbon emission threshold compliance, and quarterly disbursement of production subsidies."
    ],
    "requiredDocuments": [
      "SECI RfS Bidding Documentation and Performance Bank Guarantees",
      "Grid Connectivity Agreement and Renewable Energy Power Purchase Agreement (PPA) / Captive RE certificates",
      "Third-party accredited verification of Green Hydrogen Standard compliance (<= 2 kg CO2 eq/kg H2)",
      "Commercial Operation Date (COD) Certificate and certified mass flow meter production logs"
    ],
    "importantConditions": [
      "Green hydrogen produced must adhere to India's National Green Hydrogen Standard (well-to-gate GHG emissions not exceeding 2 kg CO2 equivalent per kg H2).",
      "Production incentive is payable for a maximum of 3 consecutive years from the scheduled or actual COD."
    ],
    "exclusions": [
      "Grey or blue hydrogen produced from unabated fossil fuels without renewable or biomass pathways.",
      "Manufacturing of electrolyser hardware (covered separately under SIGHT Component-I)."
    ],
    "faqs": [
      {
        "question": "What is the per-kilogram subsidy under SIGHT Green Hydrogen Production?",
        "answer": "The maximum financial incentive is ₹50/kg in the first year, ₹40/kg in the second year, and ₹30/kg in the third year of commercial production."
      },
      {
        "question": "What is the carbon emission ceiling to qualify as Green Hydrogen in India?",
        "answer": "According to the National Green Hydrogen Standard, well-to-gate greenhouse gas emissions must not exceed 2 kg of CO2 equivalent per kg of H2 produced."
      }
    ]
  },
  {
    "id": "sch-24",
    "title": "Solar PV Manufacturing PLI Scheme (Tranche II)",
    "slug": "solar-pv-manufacturing-pli-tranche-2",
    "description": "National High-Efficiency Solar PV Modules PLI Scheme (Tranche II) with an outlay of ₹19,500 Crore, incentivizing fully integrated solar manufacturing from Polysilicon to Ingots, Wafers, Solar Cells, and High-Efficiency PV Modules in India.",
    "authority": "Ministry of New and Renewable Energy (MNRE)",
    "category": "Solar Manufacturing",
    "status": "ACTIVE / ONGOING IMPLEMENTATION",
    "sourceUrl": "https://mnre.gov.in/production-linked-incentive-scheme-high-efficiency-solar-pv-modules",
    "sourceAuthority": "Ministry of New and Renewable Energy (MNRE)",
    "verificationStatus": "VERIFIED",
    "eligibility": "Bidders selected under Tranche-II RfS across 3 Baskets: Basket 1 (Polysilicon + Ingot/Wafer + Solar Cell + Module, min 1,000 MW), Basket 2 (Ingot/Wafer + Solar Cell + Module, min 1,000 MW), Basket 3 (Solar Cell + Module, min 1,000 MW).",
    "benefits": "Production-linked cash disbursements for 5 years post-commissioning based on high module efficiency (minimum 20.50% - 21.50%) and high domestic local value addition.",
    "applicationProcess": "Capacity allocation completed through SECI competitive bidding under Tranche-II. Approved beneficiaries submit annual capex commissioning and module sales claims.",
    "implementingAuthority": "Solar Energy Corporation of India (SECI) / IREDA",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "Integrated Solar PV Manufacturing Companies establishing giga-scale manufacturing facilities across 3 integration baskets",
    "financialParameters": "Financial incentive calculated on base PLI rate multiplied by module efficiency factor and local value addition factor disbursed annually for 5 years on module sales",
    "objective": "Build vertically integrated gigawatt-scale solar PV manufacturing in India across three distinct integration categories (P+W+C+M, W+C+M, and C+M) to eliminate import reliance on solar components.",
    "coverage": "Pan-India for manufacturing units allocated capacity under SECI Tranche-II bidding.",
    "incentives": "Annual cash disbursements linked to actual sales of high-efficiency modules produced from fully integrated manufacturing lines.",
    "howToUnderstand": "A ₹19,500 Crore program funding companies that build large factories in India creating complete solar panels starting all the way from raw silicon rock to finished high-efficiency solar modules.",
    "registrationProcess": [
      "Competitive RfS bidding conducted under Tranche II (Baskets 1, 2, and 3).",
      "Issuance of Letters of Award by SECI to qualifying manufacturing bidders.",
      "Deployment of capital expenditure and commissioning of giga-watt manufacturing lines.",
      "Module efficiency certification by accredited test laboratory (NABL/BIS) and Local Value Addition (LVA) audit.",
      "Filing of annual incentive claims on module sales and direct disbursement by implementing agency."
    ],
    "requiredDocuments": [
      "SECI Letter of Award and Approved Project Baseline Plan",
      "BIS Certification and ALMM (Approved List of Models and Manufacturers) listing",
      "Chartered Accountant / Statutory Auditor Certificate on capital expenditure, local value addition, and module sales",
      "Third-party accredited lab test reports certifying module efficiency (minimum 20.50% to 21.50%)"
    ],
    "importantConditions": [
      "Selected manufacturers must meet minimum committed integration level and minimum local value addition (ranging from 65% to 90% depending on basket).",
      "Modules manufactured must meet minimum threshold efficiency standards and qualify under ALMM."
    ],
    "exclusions": [
      "Standalone module assembly units lacking cell manufacturing integration.",
      "Modules manufactured with efficiency below the baseline eligibility threshold."
    ],
    "faqs": [
      {
        "question": "What are the three integration baskets under Solar PV PLI Tranche II?",
        "answer": "Basket 1: Fully Integrated (Polysilicon + Wafers + Cells + Modules); Basket 2: Wafers + Cells + Modules; Basket 3: Cells + Modules."
      },
      {
        "question": "What is the total financial outlay of Solar PV PLI Tranche II?",
        "answer": "The approved financial outlay for Tranche II is ₹19,500 Crore (in addition to ₹4,500 Crore allocated under Tranche I)."
      }
    ]
  },
  {
    "id": "sch-25",
    "title": "PM-KUSUM Component A - Grid-Connected Solar Power Plants",
    "slug": "pm-kusum-component-a",
    "description": "Component A of Pradhan Mantri Kisan Urja Suraksha evam Utthaan Mahabhiyan (PM-KUSUM), facilitating the setup of decentralized grid-connected renewable energy power plants of capacity 500 kW to 2 MW by individual farmers, cooperatives, panchayats, and developer syndicates on barren or agricultural land within 5 km of distribution substations.",
    "authority": "Ministry of New and Renewable Energy (MNRE)",
    "category": "Agri-Solar Investment",
    "status": "ACTIVE / OPEN",
    "sourceUrl": "https://pmkusum.mnre.gov.in",
    "sourceAuthority": "Ministry of New and Renewable Energy (MNRE)",
    "verificationStatus": "VERIFIED",
    "eligibility": "Individual farmers, groups of farmers, FPOs, cooperatives, and panchayats with land located within a 5 km radius of a 33/11 kV sub-station. If the farmer cannot arrange equity, developer syndicates can be engaged on a land-lease basis.",
    "benefits": "25-year guaranteed cash flow from solar electricity sales to local DISCOMs; steady lease rent income for farmers (if executed via developer model); daytime power supply to agricultural rural feeders.",
    "applicationProcess": "Tenders and expressions of interest released periodically by State DISCOMs / State Nodal Agencies on their respective renewable procurement portals.",
    "implementingAuthority": "State Nodal Agencies (SNAs) and State Power Distribution Companies (DISCOMs)",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "Individual Farmers, Farmer Groups, Cooperatives, Panchayats, Farmer Producer Organizations (FPOs), and Solar Project Developers leasing land from farmers",
    "financialParameters": "Guaranteed 25-Year Power Purchase Agreement (PPA) with DISCOMs at State Electricity Regulatory Commission (SERC) determined feed-in tariffs; DISCOMs receive Procurement Based Incentive (PBI) of ₹0.40/kWh or ₹6.60 Lakh/MW/year for 5 years",
    "objective": "Promote decentralized grid-connected solar power generation in rural areas, reduce transmission losses, provide regular daytime tariff income to farmers on uncultivable land, and support DISCOM renewable purchase obligations.",
    "coverage": "Pan-India across all participating states and rural DISCOM operational territories.",
    "incentives": "Guaranteed power off-take under long-term PPA with DISCOMs at pre-determined or competitively bid feed-in tariffs; central financial support provided directly to DISCOMs via PBI.",
    "howToUnderstand": "This program allows farmers or solar developers to build a 0.5 MW to 2 MW mini solar power plant on unused rural land and sell all generated power directly to the state electricity company under a guaranteed 25-year contract.",
    "registrationProcess": [
      "State DISCOM notifies sub-station-wise available capacity for solar plant interconnection.",
      "Eligible farmer or developer submits application/bid for solar plant setup on designated portal.",
      "Issuance of Letter of Award (LoA) and signing of 25-Year Power Purchase Agreement (PPA) with DISCOM.",
      "Procurement of DCR-compliant solar PV modules and construction of solar plant & evacuation line to sub-station.",
      "Commissioning and commercial power evacuation with monthly revenue billing to DISCOM."
    ],
    "requiredDocuments": [
      "Land Ownership Documents (Revenue Record / Jamabandi / 7/12 extract) or registered lease agreement",
      "Aadhaar Card, PAN, and Bank Account Details of applicant/developer",
      "DISCOM Sub-station Distance and Feasibility Certificate",
      "Detailed Technical Project Proposal and Grid Interconnection Scheme"
    ],
    "importantConditions": [
      "Solar plant capacity must be between 500 kW (0.5 MW) and 2 MW (DISCOMs may allow down to 100 kW in specific cases).",
      "Plant must be situated within approximately 5 km radius of a 33/11 kV sub-station to ensure technical evacuation feasibility.",
      "Solar cells and modules used must comply with Domestic Content Requirement (DCR) and ALMM norms."
    ],
    "exclusions": [
      "Rooftop solar installations on domestic residences (covered under PM Surya Ghar).",
      "Off-grid standalone solar agriculture pumps (which are covered under PM-KUSUM Component B)."
    ],
    "faqs": [
      {
        "question": "Can a farmer partner with an external developer if they do not have capital to invest?",
        "answer": "Yes. Under PM-KUSUM Component A, if a farmer or group of farmers lacks upfront investment capital, they can lease their land to a solar developer through a mutually agreed lease rent, while the developer finances and operates the plant."
      },
      {
        "question": "Is Component A a consumer subsidy for home solar?",
        "answer": "No. Component A is a commercial developer and rural generation model involving 0.5 MW to 2 MW grid-tied power plants selling electricity to DISCOMs under 25-year PPAs."
      }
    ]
  },
  {
    "id": "sch-26",
    "title": "Production Linked Incentive Scheme for Drone and Drone Components",
    "slug": "pli-drones-components",
    "description": "Targeted manufacturing incentive scheme with an outlay of ₹120 Crore providing a uniform 20% incentive on value addition for 3 consecutive financial years to manufacturers of drones (UAVs) and critical drone sub-components in India.",
    "authority": "Ministry of Civil Aviation (MoCA)",
    "category": "Aerospace & Drones",
    "status": "ACTIVE / ONGOING IMPLEMENTATION",
    "sourceUrl": "https://www.civilaviation.gov.in/schemes/pli-scheme-drones",
    "sourceAuthority": "Ministry of Civil Aviation (MoCA)",
    "verificationStatus": "VERIFIED",
    "eligibility": "Indian manufacturers of drones and drone components. Minimum annual turnover threshold: ₹2 Crore for Drone MSME/startups (₹4 Crore for Non-MSME); ₹50 Lakh for Drone Component MSME/startups (₹1 Crore for Non-MSME). Minimum 40% value addition required.",
    "benefits": "20% cash incentive on net domestic value addition; minimum value addition threshold fixed at a generous 40%; eligibility criteria tailored specifically for MSMEs and startups.",
    "applicationProcess": "Beneficiaries selected under published application windows submit annual incentive claims along with audited cost accounts through the Ministry of Civil Aviation / PMA portal.",
    "implementingAuthority": "Project Management Agency (PMA) / Ministry of Civil Aviation",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "Manufacturers of Drones (Unmanned Aerial Vehicles) and Drone Components incorporated in India",
    "financialParameters": "20% Cash Incentive on Value Addition (Net Sales Revenue minus Purchase Cost of inputs/raw materials) for 3 Financial Years",
    "objective": "Transform India into a global drone manufacturing hub by incentivizing domestic value addition, fostering local component ecosystems (propulsion systems, flight controllers, airframes), and supporting aerospace hardware engineering.",
    "coverage": "Pan-India for qualifying manufacturing enterprises.",
    "incentives": "Annual cash incentive disbursement based on certified value addition calculations, capped at maximum ₹30 Crore per manufacturer across the 3-year period.",
    "howToUnderstand": "This program gives drone and drone-parts makers in India a 20% cash incentive based on the net value they add in their manufacturing process (sales minus raw material purchase costs).",
    "registrationProcess": [
      "Application submission during notified PLI Drone application windows.",
      "Verification of eligibility thresholds (turnover and minimum 40% value addition).",
      "Selection and notification of approved drone and component manufacturers.",
      "Submission of annual incentive claims with audited GST invoices and input cost ledgers.",
      "Disbursement of 20% value addition incentive directly to company bank accounts."
    ],
    "requiredDocuments": [
      "Company Incorporation, Udyam MSME (if applicable), and GST Registration Certificates",
      "Statutory Auditor Certificate certifying annual drone/component sales revenue and input costs",
      "Itemized computation of Value Addition with purchase ledgers and invoices",
      "DGCA Type Certificate / Drone Unique Identification Number (UIN) details where applicable"
    ],
    "importantConditions": [
      "Minimum domestic value addition must be at least 40% of the net selling price.",
      "Eligible components include airframes, propulsion systems (motors/ESC), flight control computers, sensors, communications payloads, and drone software."
    ],
    "exclusions": [
      "Traders, importers, or distributors assembling completely imported drone kits without domestic value addition.",
      "General software services unrelated to drone onboard systems or ground control stations."
    ],
    "faqs": [
      {
        "question": "What is the incentive percentage and basis under the PLI Drone Scheme?",
        "answer": "The incentive is 20% of the Value Addition (calculated as Net Sales Revenue minus the purchase cost of raw materials and input components)."
      },
      {
        "question": "What is the minimum value addition required?",
        "answer": "Manufacturers must achieve a minimum of 40% domestic value addition to qualify for incentive payouts."
      }
    ]
  },
  {
    "id": "sch-27",
    "title": "Scheme for Promotion of Research and Innovation in Digital Ecosystem (PRIDE)",
    "slug": "pride-digital-ecosystem",
    "description": "MeitY initiative fostering advanced R&D, indigenous technology intellectual property (IP), and innovation in emerging digital technologies (AI, Quantum, IoT, Cyber Security, Blockchain) through academic-industry research consortia, Centers of Excellence, and grant-in-aid project funding.",
    "authority": "Ministry of Electronics and Information Technology (MeitY)",
    "category": "Digital Innovation",
    "status": "ACTIVE / CALLS FOR PROPOSALS",
    "sourceUrl": "https://www.meity.gov.in/content/schemes-programmes",
    "sourceAuthority": "Ministry of Electronics and Information Technology (MeitY)",
    "verificationStatus": "VERIFIED",
    "eligibility": "Recognized Indian academic institutions, government R&D laboratories, autonomous scientific societies, industry R&D centers recognized by DSIR, and collaborative industry-academia consortia.",
    "benefits": "Financial grant-in-aid for specialized hardware/software tools, cloud computing infrastructure, research fellowships, fabrication access, and field trial deployment.",
    "applicationProcess": "Project proposals are invited through thematic Calls for Proposals (CFP) published on the MeitY R&D portal and MeitY Startup Hub.",
    "implementingAuthority": "MeitY R&D Societies (C-DAC, SAMEER, STPI) / MeitY Startup Hub",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "Academic and Research Institutions, R&D Labs, Technology Startups, and Industry Consortia developing indigenous digital technologies",
    "financialParameters": "Grant-in-aid financial assistance up to 100% for academic/institutional R&D projects and matching grant-in-aid (typically up to 50%) for industry-partnered collaborative projects",
    "objective": "Promote indigenous research and technological capabilities in priority digital technology areas, generate domestic IPR and patents, create institutional Centers of Excellence, and translate lab prototypes into commercial digital products.",
    "coverage": "Pan-India across recognized academic universities, research organizations, and affiliated startups.",
    "incentives": "Non-repayable milestone-linked grant disbursements against validated research deliverables, peer-reviewed publications, and functional technology demonstrations.",
    "howToUnderstand": "PRIDE funds deep-tech scientific research, university labs, and joint industry projects to develop homegrown Indian technologies in artificial intelligence, quantum computing, and cybersecurity.",
    "registrationProcess": [
      "Review thematic Call for Proposals published by MeitY on prioritized digital domains.",
      "Principal Investigator (PI) prepares Detailed Project Proposal with milestones, IPR roadmap, and budget.",
      "Online submission through MeitY Project Management and Information System (PMIS) / MeitY Startup Hub.",
      "Evaluation and presentation before MeitY Project Review and Steering Group (PRSG).",
      "Administrative sanction and milestone-linked release of grant-in-aid installments."
    ],
    "requiredDocuments": [
      "Detailed Project Proposal in prescribed MeitY R&D format with work breakdown structure",
      "Institutional Endorsement Certificate and DSIR recognition letter (for industry partners)",
      "Itemized Budget Justification (Capital Equipment, Manpower, Consumables, Overheads)",
      "Consortium MoU and IPR Sharing Agreement (for collaborative industry-academia proposals)"
    ],
    "importantConditions": [
      "Proposed projects must demonstrate clear technological novelty and aim for high Technology Readiness Levels (TRL 4 to TRL 7+).",
      "IP generated under the funded project must be protected and managed as per MeitY IPR guidelines."
    ],
    "exclusions": [
      "Routine IT services, basic commercial website development, or purchase of general office IT hardware.",
      "Projects lacking substantial research or novelty in digital ecosystem technologies."
    ],
    "faqs": [
      {
        "question": "How are projects funded under MeitY's digital research and innovation schemes?",
        "answer": "Funding is provided as milestone-based grant-in-aid directly to the applicant institutions/consortia following technical appraisal by the Project Review and Steering Group (PRSG)."
      },
      {
        "question": "Can private tech startups apply individually?",
        "answer": "Startups typically participate either in consortium with recognized academic/R&D institutions or through specialized challenge programs hosted on the MeitY Startup Hub."
      }
    ]
  },
  {
    "id": "sch-28",
    "title": "Design Linked Incentive (DLI) Scheme for Semiconductors",
    "slug": "semiconductor-design-linked-incentive",
    "description": "Flagship scheme under the Semicon India Programme (outlay ₹1,000 Crore) offering financial incentives and design infrastructure support to domestic companies, startups, and MSMEs engaged in semiconductor design of Integrated Circuits (ICs), Chipsets, System on Chips (SoCs), and IP Cores.",
    "authority": "Ministry of Electronics and Information Technology (MeitY)",
    "category": "Semiconductor Design",
    "status": "ACTIVE / OPEN",
    "sourceUrl": "https://www.chips-dli.gov.in",
    "sourceAuthority": "India Semiconductor Mission (ISM) / C-DAC / MeitY",
    "verificationStatus": "VERIFIED",
    "eligibility": "Domestic companies and startups registered in India having more than 50% equity held by Indian citizens, with proven technical semiconductor design capabilities.",
    "benefits": "Reimbursement of up to 50% of design expenditure (MPW shuttle costs, emulation, validation, packaging) up to ₹15 Crore; 4-6% cash incentive on net sales for 5 years up to ₹30 Crore; ChipIN Centre access offering advanced Electronic Design Automation (EDA) tools (Synopsys, Cadence, Siemens).",
    "applicationProcess": "Direct online application through the dedicated DLI portal (chips-dli.gov.in) managed by C-DAC and ISM.",
    "implementingAuthority": "C-DAC (Centre for Development of Advanced Computing) / India Semiconductor Mission (ISM)",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "Domestic Semiconductor Design Startups, MSMEs, and Indian Companies engaged in Integrated Circuit (IC) design, SoC development, and IP Core engineering",
    "financialParameters": "Product Design Linked Incentive of up to 50% of eligible expenditure (ceiling ₹15 Crore per application) + Deployment Linked Incentive of 6% to 4% on net sales turnover over 5 years (ceiling ₹30 Crore per application) + EDA tool access",
    "objective": "Nurture a vibrant domestic semiconductor design ecosystem, develop at least 20 domestic semiconductor design companies achieving turnover >₹1500 Crore, and enable indigenous fabless chip startups.",
    "coverage": "Pan-India for registered domestic companies (with >50% Indian shareholding/control).",
    "incentives": "Milestone-based financial reimbursements for design milestones plus annual sales turnover incentives upon commercial tape-out and customer deployment.",
    "howToUnderstand": "This scheme pays up to 50% (up to ₹15 Crore) of the prototyping and chip-making costs for Indian chip design startups, plus gives them free access to multi-million dollar chip design software and extra cash bonuses on their sales.",
    "registrationProcess": [
      "Register company profile on the DLI Portal (chips-dli.gov.in).",
      "Submit Detailed Project Proposal under Product Design Linked Incentive (P-DLI) or Deployment Linked Incentive (D-DLI).",
      "Evaluation of proposal by Technical Advisory Committee (TAC) on innovation, feasibility, and market potential.",
      "Approval by ISM / MeitY and signing of Tripartite Agreement with C-DAC.",
      "Release of design milestone reimbursements and subsequent annual deployment linked sales incentives."
    ],
    "requiredDocuments": [
      "Company Incorporation Certificate proving >50% Indian Shareholding / Control",
      "Detailed Semiconductor Design Proposal with Architecture, PPA Targets, and Tape-out Timeline",
      "Chartered Accountant Certificate of Historical and Projected Eligible Design Expenditure",
      "Quotations for MPW shuttles, IP licensing, testing, and packaging services"
    ],
    "importantConditions": [
      "Applicant company must maintain domestic status (Indian resident shareholding >50%) throughout the incentive tenure.",
      "Chips designed must target commercial applications in telecom, automotive, consumer electronics, industrial IoT, or smart energy."
    ],
    "exclusions": [
      "Foreign-controlled MNC subsidiaries or design service shops doing contract work without owning the underlying semiconductor IP.",
      "Hardware PCB board design without semiconductor IC / SoC / IP core development."
    ],
    "faqs": [
      {
        "question": "What is the difference between DLI and Semiconductor Fab schemes?",
        "answer": "The DLI Scheme supports 'fabless' chip design companies, startups, and software IP creators (up to ₹15 Cr design grant + ₹30 Cr sales bonus), whereas the Fab Scheme funds multi-billion dollar physical manufacturing plants constructing silicon foundries."
      },
      {
        "question": "What EDA tools are provided to startups under the scheme?",
        "answer": "Through the ChipIN Centre at C-DAC, approved designers receive centralized access to leading EDA tools from Synopsys, Cadence, and Siemens EDA."
      }
    ]
  },
  {
    "id": "sch-29",
    "title": "Modified Semiconductor Fabs and Display Fabs Setup Scheme",
    "slug": "semiconductor-fab-ecosystem",
    "description": "Flagship Semicon India national scheme providing uniform fiscal support of 50% of project cost on a pari-passu basis for setting up Silicon Semiconductor Fabs, Display Fabs, Compound Semiconductor / Silicon Photonics / Sensor Fabs, and Semiconductor ATMP / OSAT facilities in India.",
    "authority": "Ministry of Electronics and Information Technology (MeitY)",
    "category": "Semiconductor Manufacturing",
    "status": "ACTIVE / OPEN",
    "sourceUrl": "https://ism.gov.in",
    "sourceAuthority": "India Semiconductor Mission (ISM) / MeitY",
    "verificationStatus": "VERIFIED",
    "eligibility": "Consortia/companies possessing proven volume production technology (<=28nm node or legacy nodes for silicon fabs; Gen 8.5/Gen 6 for display fabs; specialized processes for compound/OSAT), committed equity capital, and world-class fab operational experience.",
    "benefits": "Direct central financial support of 50% of total capital expenditure (cleanrooms, lithography tools, clean utilities, fab machinery) disbursed pari-passu with investor equity; customs duty exemptions on specialized fab equipment; complementary state incentives.",
    "applicationProcess": "Continuous open application submission directly to the India Semiconductor Mission (ISM) via ism.gov.in.",
    "implementingAuthority": "India Semiconductor Mission (ISM)",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "Global and Domestic Semiconductor Manufacturing Consortia, Technology Giants, and Industrial Groups establishing silicon fabs, display fabs, and ATMP/OSAT packaging plants",
    "financialParameters": "Fiscal Support of 50% of Project Cost (Capital Expenditure) on a Pari-Passu basis from Central Government + additional 20-25% State Government capital subsidies",
    "objective": "Build a sustainable, resilient semiconductor and display manufacturing ecosystem in India, position India as a global manufacturing powerhouse, and secure strategic supply chains for electronics and defense.",
    "coverage": "Pan-India across designated industrial clusters with uninterrupted power, ultra-pure water, and logistics connectivity.",
    "incentives": "Pari-passu cash disbursements matched to approved capital expenditure drawdowns as construction milestones and tool installations progress.",
    "howToUnderstand": "A massive government program funding 50% of the entire multi-billion-dollar cost of building semiconductor chip factories and advanced chip-packaging plants in India.",
    "registrationProcess": [
      "Submission of comprehensive Project Proposal and Business Plan on the ISM portal (ism.gov.in).",
      "Technical, operational, and financial appraisal by the India Semiconductor Mission Advisory Committee.",
      "Negotiation of Technology Transfer Agreements, Volume Offtake MoUs, and State Support Agreements.",
      "Approval by Union Cabinet and issuance of formal project sanction.",
      "Pari-passu disbursement of 50% central fiscal grant matched against certified capital expenditure tranches."
    ],
    "requiredDocuments": [
      "Detailed Project Report (DPR) with cleanroom layouts, utility requirements, and technology node roadmap",
      "Technology Licensing / Technology Transfer Agreement from an established fab technology partner",
      "Financing Plan and Equity Commitment Letters from Promoters / Institutional Investors",
      "State Government In-Principle Approval for Land, Water (MGD), and High-Tension Uninterrupted Power"
    ],
    "importantConditions": [
      "Fiscal support of 50% applies to capital expenditure covering building, cleanrooms, manufacturing tools, and clean utility systems.",
      "Proposals must demonstrate clear commercial viability, technology transfer credibility, and long-term customer purchase agreements."
    ],
    "exclusions": [
      "Pure consumer electronics assembly or board mounting plants lacking semiconductor wafer processing or ATMP packaging.",
      "Proposals lacking proven, licensed semiconductor manufacturing technology."
    ],
    "faqs": [
      {
        "question": "What is the fiscal support percentage under the Modified Semicon India Programme?",
        "answer": "The Central Government provides a uniform fiscal support of 50% of the project cost (capital expenditure) on a pari-passu basis across all technology nodes (silicon fabs, display fabs, compound semiconductors, and ATMP/OSAT)."
      },
      {
        "question": "What is the role of the India Semiconductor Mission (ISM)?",
        "answer": "ISM acts as the dedicated nodal agency coordinating technical appraisal, inter-ministerial clearances, state government alignments, and grant disbursements for all semiconductor manufacturing projects."
      }
    ]
  },
  {
    "id": "sch-30",
    "title": "Credit Guarantee Scheme for Micro and Small Enterprises (CGTMSE)",
    "slug": "cgtmse-credit-guarantee",
    "description": "Flagship credit enhancement trust established by Ministry of MSME and SIDBI providing institutional credit guarantee coverage (up to 85%) for collateral-free credit facilities (term loans and working capital) up to ₹5 Crore extended to Micro and Small Enterprises (MSEs).",
    "authority": "Ministry of Micro, Small and Medium Enterprises (MoMSME) / SIDBI",
    "category": "MSME Investment Credit",
    "status": "ACTIVE / OPEN",
    "sourceUrl": "https://www.cgtmse.in",
    "sourceAuthority": "Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE)",
    "verificationStatus": "VERIFIED",
    "eligibility": "New and existing Micro and Small Enterprises (manufacturing and services, including retail trade) holding valid Udyam Registration. Both term loans and fund-based/non-fund-based working capital qualify.",
    "benefits": "Entrepreneurs can secure business loans up to ₹5 Crore without mortgaging personal real estate or providing collateral security; reduced Annual Guarantee Fee (AGF) starting as low as 0.37% for micro units and women entrepreneurs.",
    "applicationProcess": "Borrowers apply directly to any Member Lending Institution (Public/Private Banks, RRBs, SFBs, NBFCs) for a business loan under the CGTMSE scheme.",
    "implementingAuthority": "Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE)",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "New and Existing Micro and Small Enterprises (MSEs) in manufacturing and services sectors seeking bank loans without collateral",
    "financialParameters": "Credit guarantee coverage of up to 85% for credit facilities up to ₹5 Crore (up to ₹500 Lakh) without requiring third-party collateral or personal guarantees",
    "objective": "Enable collateral-free debt financing for first-generation entrepreneurs and existing micro/small enterprises, reassure Member Lending Institutions against credit defaults, and expand formal institutional credit penetration in the MSME sector.",
    "coverage": "Pan-India across all Scheduled Commercial Banks, Regional Rural Banks, Small Finance Banks, SIDBI, and eligible NBFCs.",
    "incentives": "Credit guarantee backing issued to lending banks, guaranteeing repayment of up to 75% to 85% of default amounts (85% for micro enterprises up to ₹5 Lakh, women entrepreneurs, SC/ST, and units in NER/ZED certified units).",
    "howToUnderstand": "This is a government credit-guarantee program (not a cash grant or personal investment) that covers up to 85% of bank risk so that banks can give small business loans up to ₹5 Crore without asking for property mortgage.",
    "registrationProcess": [
      "Borrower prepares business plan and project report for manufacturing or service venture.",
      "Application submitted to an MLI (bank/NBFC) requesting collateral-free credit under CGTMSE.",
      "Bank appraises creditworthiness and sanctions term loan / working capital facility.",
      "Lending institution pays the Annual Guarantee Fee and logs guarantee coverage on the CGTMSE digital portal.",
      "Loan disbursed directly to borrower's enterprise account."
    ],
    "requiredDocuments": [
      "Udyam Registration Certificate and PAN Card of enterprise/promoters",
      "Detailed Project Report (DPR) / Business Proposal with financial projections",
      "Bank statements for previous 6 to 12 months and GST returns",
      "Proof of business location and statutory operational licenses"
    ],
    "importantConditions": [
      "This is a debt credit guarantee mechanism; it is NOT a direct cash subsidy or personal investment return scheme.",
      "Maximum eligible loan limit covered under guarantee is ₹5 Crore per MSE borrower.",
      "Borrower must pay the annual guarantee fee (AGF) charged by the lending institution."
    ],
    "exclusions": [
      "Medium enterprises (investment >₹10 Cr or turnover >₹50 Cr) and agricultural crop loans.",
      "Educational institutions, self-help groups, and non-commercial personal loans."
    ],
    "faqs": [
      {
        "question": "Is CGTMSE a direct cash grant or investment fund for individuals?",
        "answer": "No. CGTMSE is an institutional credit guarantee mechanism that reassures commercial banks so they can lend business loans up to ₹5 Crore to micro and small businesses without requiring real estate collateral."
      },
      {
        "question": "What is the maximum loan limit covered under CGTMSE?",
        "answer": "The credit guarantee limit has been enhanced up to ₹5 Crore (₹500 Lakh) per eligible MSE borrower."
      }
    ]
  },
  {
    "id": "sch-31",
    "title": "Prime Minister’s Employment Generation Programme (PMEGP)",
    "slug": "pmegp-credit-subsidy",
    "description": "Major credit-linked capital subsidy scheme implemented by KVIC providing margin money financial subsidies of 15% to 35% for establishing new micro-enterprises in manufacturing (project cost up to ₹50 Lakh) and service sectors (project cost up to ₹20 Lakh).",
    "authority": "Ministry of Micro, Small and Medium Enterprises (MoMSME)",
    "category": "Entrepreneurship & MSME",
    "status": "ACTIVE / OPEN",
    "sourceUrl": "https://www.kviconline.gov.in/pmegpeportal",
    "sourceAuthority": "KVIC / Ministry of MSME",
    "verificationStatus": "VERIFIED",
    "eligibility": "Any individual above 18 years of age. Minimum 8th standard pass required for project cost above ₹10 Lakh in manufacturing or above ₹5 Lakh in service sector. Existing units are ineligible (must be new micro-enterprise).",
    "benefits": "Government margin money capital subsidy credited directly into bank account (kept in 3-year term deposit lock-in); promoter contribution required is only 5% (special category) or 10% (general category); 2nd loan up to ₹1 Crore available for upgrading existing performing PMEGP units.",
    "applicationProcess": "100% online application submission via the PMEGP e-Portal (kviconline.gov.in/pmegpeportal).",
    "implementingAuthority": "Khadi and Village Industries Commission (KVIC) / State KVIBs / DICs",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "First-generation entrepreneurs, individuals (aged 18+), SHGs, and cooperative societies setting up new micro manufacturing or service units",
    "financialParameters": "Margin Money Subsidy of 15% to 25% for General category and 25% to 35% for Special categories (SC/ST/OBC/Women/NER/Ex-servicemen/Transgender) on project costs up to ₹50 Lakh (Manufacturing) and ₹20 Lakh (Services)",
    "objective": "Generate continuous sustainable wage and self-employment opportunities for urban and rural youth, assist traditional artisans and rural entrepreneurs, and facilitate formal credit flow for micro-enterprises.",
    "coverage": "Pan-India across rural and urban areas in all districts.",
    "incentives": "Back-ended capital subsidy: 25% (rural) / 15% (urban) for general category; 35% (rural) / 25% (urban) for special category beneficiaries.",
    "howToUnderstand": "This scheme gives first-time entrepreneurs a 15% to 35% government grant on bank loans when starting a new small factory (up to ₹50 Lakh) or service business (up to ₹20 Lakh).",
    "registrationProcess": [
      "Register online on PMEGP e-Portal with Aadhaar and select Implementing Agency (KVIC, KVIB, or DIC).",
      "Fill online application form and upload Detailed Project Profile (DPR), caste/category certificate, and educational certificate.",
      "Proposal is scrutinized by District Task Force Committee (DTFC) and forwarded online to selected financing bank.",
      "Bank sanctions credit, borrower completes mandatory EDP training (online/offline), and margin money subsidy is released into a 3-year TDR lock-in."
    ],
    "requiredDocuments": [
      "Aadhaar Card, PAN Card, and Passport Photograph of applicant",
      "Educational Qualification Certificate (8th pass mark sheet if project >₹10 Lakh mfg / >₹5 Lakh services)",
      "Special Category / Caste Certificate (SC/ST/OBC/PH/Ex-serviceman/Women where applicable)",
      "Detailed Project Report (DPR) detailing machinery breakdown, working capital, and projected financials"
    ],
    "importantConditions": [
      "Only for setting up NEW micro-enterprises; existing units cannot apply for 1st loan subsidy.",
      "Mandatory Entrepreneurship Development Programme (EDP) training must be completed before subsidy disbursement.",
      "Margin money subsidy remains locked in a Term Deposit Receipt (TDR) for 3 years to prevent premature closure."
    ],
    "exclusions": [
      "Businesses involved in meat/slaughter processing, intoxicants/tobacco, toddy tapping, or polythene carry bags <75 microns.",
      "Agricultural cultivation, horticulture, and floriculture activities (farm-level cropping)."
    ],
    "faqs": [
      {
        "question": "What is the maximum project cost and subsidy under PMEGP?",
        "answer": "The maximum project cost is ₹50 Lakh for manufacturing units and ₹20 Lakh for service units. The capital subsidy ranges from 15% to 35% depending on rural/urban location and social category."
      },
      {
        "question": "Is collateral security required for PMEGP bank loans?",
        "answer": "No collateral security is required for project loans up to ₹10 Lakh (covered under CGTMSE or RBI guidelines for micro-loans)."
      }
    ]
  },
  {
    "id": "sch-32",
    "title": "MSME Champions Scheme - Modernization & Lean Manufacturing",
    "slug": "msme-champions-lean",
    "description": "MSME Competitive (Lean) Scheme under the MSME Champions umbrella, providing up to 90% government financial assistance on consultancy implementation costs for adopting 5S, Kaizen, Visual Control, TPM, and Lean techniques across Basic, Intermediate, and Advanced stages.",
    "authority": "Ministry of Micro, Small and Medium Enterprises (MoMSME)",
    "category": "MSME Modernization",
    "status": "ACTIVE / OPEN",
    "sourceUrl": "https://champions.gov.in",
    "sourceAuthority": "Ministry of Micro, Small and Medium Enterprises (MoMSME)",
    "verificationStatus": "VERIFIED",
    "eligibility": "All manufacturing MSMEs with valid Udyam Registration. Both individual MSME units and clusters of units can participate.",
    "benefits": "Government financial contribution covering up to 90% of the cost of engaging certified Lean consultants; hands-on shopfloor restructuring with 5S, Kaizen, Value Stream Mapping, and Just-in-Time inventory workflows.",
    "applicationProcess": "Direct online registration and application through the MSME Champions / Lean Scheme portal (lean.msme.gov.in).",
    "implementingAuthority": "Quality Council of India (QCI) / NPC / MSME-DFOs",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "Manufacturing Micro, Small, and Medium Enterprises holding valid Udyam Registration",
    "financialParameters": "Financial assistance of up to 90% of implementation and consultancy costs for Lean intervention across Basic, Intermediate, and Advanced levels (additional 5% for Women/SC/ST/NER units)",
    "objective": "Enhance the global competitiveness of Indian manufacturing MSMEs by reducing waste, improving manufacturing efficiency, optimizing space utilization, minimizing defects, and boosting shop-floor productivity.",
    "coverage": "Pan-India for all manufacturing MSMEs registered on the Udyam portal.",
    "incentives": "Direct financial reimbursement to approved Lean consulting agencies / MSME beneficiaries upon verified milestone achievement across Lean levels.",
    "howToUnderstand": "This program pays up to 90% of the consultant fees when a manufacturing factory hires industrial experts to reorganize their factory floor, eliminate waste, and implement Japanese Lean (5S / Kaizen) methods.",
    "registrationProcess": [
      "Login using Udyam Registration number on the MSME Lean Scheme portal.",
      "Take the Lean Pledge and complete basic digital self-assessment.",
      "Select implementation level (Basic, Intermediate, or Advanced) and engage an empanelled Lean Consultant.",
      "Implement Lean tools on the factory floor with consultant guidance.",
      "Third-party verification and release of 90% government financial subsidy on consultancy fees."
    ],
    "requiredDocuments": [
      "Valid Udyam Registration Certificate and PAN Card",
      "Factory Commercial Electricity Bill and Shop & Establishment License",
      "Lean Implementation Work Plan and Consultant Engagement Agreement",
      "Pre-implementation and Post-implementation Shopfloor Photographic & Metrics Evidence"
    ],
    "importantConditions": [
      "Only manufacturing MSMEs with active industrial shopfloor operations are eligible.",
      "Implementation must be executed by consultants empanelled through accredited implementing agencies (e.g. QCI / NPC)."
    ],
    "exclusions": [
      "Pure service-sector enterprises or retail trading firms without physical manufacturing operations.",
      "Capital machinery purchase costs (which must be funded separately through credit schemes)."
    ],
    "faqs": [
      {
        "question": "What percentage of Lean consultancy fees is subsidized by the government?",
        "answer": "The government provides up to 90% financial assistance on implementation/consultancy costs, with an additional 5% support for women-led, SC/ST-owned, and North-Eastern region units."
      },
      {
        "question": "What are the levels of Lean certification under the scheme?",
        "answer": "The scheme is structured into three progressive levels: Basic, Intermediate, and Advanced."
      }
    ]
  },
  {
    "id": "sch-33",
    "title": "MSME Champions Scheme - ZED Certification (Zero Defect Zero Effect)",
    "slug": "msme-zed-certification",
    "description": "MSME Sustainable (ZED) Certification Scheme under the MSME Champions umbrella, providing up to 80% subsidy on certification costs across Bronze, Silver, and Gold levels, along with financial support of up to ₹5 Lakh for testing/consultancy and up to ₹3 Lakh for clean technology upgradation.",
    "authority": "Ministry of Micro, Small and Medium Enterprises (MoMSME)",
    "category": "Quality & Sustainability",
    "status": "ACTIVE / OPEN",
    "sourceUrl": "https://zed.msme.gov.in",
    "sourceAuthority": "Ministry of Micro, Small and Medium Enterprises (MoMSME)",
    "verificationStatus": "VERIFIED",
    "eligibility": "All manufacturing MSMEs holding a valid Udyam Registration number.",
    "benefits": "Subsidies up to 80% on certification fees; up to ₹5 Lakh financial support for consultancy handholding; up to ₹3 Lakh financial assistance for Zero Effect pollution-control and energy-efficient technology; bank loan interest rate concessions (0.25% to 0.75%) from participating lending institutions.",
    "applicationProcess": "Direct online registration and document submission on the official ZED portal (zed.msme.gov.in).",
    "implementingAuthority": "Quality Council of India (QCI) / MoMSME",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "Manufacturing Micro, Small, and Medium Enterprises registered on the Udyam portal",
    "financialParameters": "Financial subsidy of 80% (Micro), 60% (Small), and 50% (Medium) on ZED Certification costs + ₹5 Lakh for Handholding/Consultancy + ₹3 Lakh for Tech Upgradation (additional 10% for Women/SC/ST/NER/Hilly areas)",
    "objective": "Promote zero defect in manufactured goods and zero environmental effect in production processes, motivate MSMEs to attain global quality benchmarks, and provide concessions on bank interest rates and processing fees.",
    "coverage": "Pan-India for all manufacturing MSMEs across all sectors.",
    "incentives": "Direct financial subsidy on certification assessment, handholding assistance, and technology adoption payouts disbursed directly through the ZED portal.",
    "howToUnderstand": "This program gives small factories up to an 80% discount on getting quality & environmental certifications (Bronze, Silver, Gold), gives up to ₹5 Lakh for expert consulting, and helps them get lower interest rates on bank loans.",
    "registrationProcess": [
      "Register on zed.msme.gov.in using Udyam Registration Number.",
      "Take the free online ZED Pledge and complete desktop self-assessment.",
      "Select desired certification level: Bronze (5 parameters), Silver (14 parameters), or Gold (20 parameters).",
      "Pay subsidized assessment fee and undergo desktop verification / on-site physical assessment by accredited audit agency.",
      "Receive official ZED Certificate and apply for financial handholding and technology upgradation subsidies."
    ],
    "requiredDocuments": [
      "Valid Udyam Registration Certificate and PAN Card",
      "Consent to Operate (CTO) from State Pollution Control Board or pollution exemption certificate",
      "Factory layout, calibration records, and quality control documentation",
      "Photographs/videos verifying safety equipment, energy meters, and waste management setups"
    ],
    "importantConditions": [
      "Applicant unit must be an active manufacturing enterprise.",
      "ZED Certificate is valid for a period of 3 years, after which renewal/surveillance audit is required."
    ],
    "exclusions": [
      "Enterprises operating exclusively in service or wholesale/retail trading sectors without manufacturing.",
      "Units failing environmental statutory compliances under central or state pollution laws."
    ],
    "faqs": [
      {
        "question": "What are the three certification levels in the MSME ZED Scheme?",
        "answer": "The three certification levels are Bronze (5 core parameters), Silver (14 parameters), and Gold (20 advanced quality and sustainability parameters)."
      },
      {
        "question": "What is the subsidy percentage for Micro enterprises under ZED?",
        "answer": "Micro enterprises receive an 80% subsidy on certification costs, with an additional 10% for women-owned, SC/ST, and North-Eastern/Hilly region enterprises (up to 90% total subsidy)."
      }
    ]
  },
  {
    "id": "sch-34",
    "title": "MSME Champions Scheme - Design Expertise (MSME Design)",
    "slug": "msme-design-expertise",
    "description": "MSME Innovative (Design) Scheme under the MSME Champions umbrella, providing financial assistance of up to 75% (up to ₹40 Lakh) for professional design projects and up to 75% (up to ₹2.5 Lakh) for student design projects executed through empanelled design institutions.",
    "authority": "Ministry of Micro, Small and Medium Enterprises (MoMSME)",
    "category": "Industrial Design",
    "status": "ACTIVE / OPEN",
    "sourceUrl": "https://innovative.msme.gov.in",
    "sourceAuthority": "Ministry of Micro, Small and Medium Enterprises (MoMSME)",
    "verificationStatus": "VERIFIED",
    "eligibility": "MSMEs registered on the Udyam portal. Projects must involve product design, ergonomic redesign, packaging design, or engineering design with commercial market potential.",
    "benefits": "Financial grant up to ₹40 Lakh per design project to hire top industrial designers; access to premier design and engineering institutes (NID, IITs, IISc); tailored solutions for packaging, ergonomics, mechanical enclosures, and user interfaces.",
    "applicationProcess": "Online submission of design project proposals via the MSME Innovative portal (innovative.msme.gov.in).",
    "implementingAuthority": "National Institute of Design (NID) / IISc Bangalore / IITs / MSME-DFOs",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "Manufacturing and Service MSMEs with valid Udyam Registration seeking professional product styling, packaging, UI/UX, or engineering design interventions",
    "financialParameters": "Government grant of 75% of design project cost up to ₹40 Lakh for professional design projects (MSME contributes 25%); 75% up to ₹2.5 Lakh for student design projects",
    "objective": "Bring Indian manufacturing MSMEs and professional design designers onto a common platform, enhance product aesthetics and functional ergonomic value, and promote value addition in traditional and modern products.",
    "coverage": "Pan-India for all eligible MSMEs partnering with empanelled design institutions.",
    "incentives": "Milestone-linked grant disbursements paid in 3 tranches directly to the Project Monitoring and Implementing Agency (PMIA) / Design Consultant.",
    "howToUnderstand": "This scheme provides up to ₹40 Lakhs (75% government funding) so that small business owners can hire premier industrial designers (from NID/IITs) to redesign their product packaging, styling, and ergonomics.",
    "registrationProcess": [
      "Register enterprise on the MSME Innovative Scheme portal using Udyam number.",
      "Select a Design Project stream: Professional Design Project or Student Design Project.",
      "Collaborate with an empanelled Design Institution (e.g. NID, IIT) or qualified Design Consultant to formulate proposal.",
      "Submit design proposal and cost estimation on the portal for appraisal by Project Screening Committee.",
      "Upon approval by Project Approval Committee (PAC), funds are disbursed in tranches against design deliverables."
    ],
    "requiredDocuments": [
      "Valid Udyam Registration Certificate and PAN Card",
      "Detailed Design Project Proposal detailing problem statement, aesthetic goals, and deliverables",
      "MoU / Agreement with Design Consultant or Design Institute",
      "Audited financial statements and enterprise profile"
    ],
    "importantConditions": [
      "The MSME must contribute its mandatory 25% share of the project cost.",
      "Design project must result in tangible design deliverables (3D models, prototypes, manufacturing drawings, or packaging artwork)."
    ],
    "exclusions": [
      "Standard architectural interior design or routine printing stationery design.",
      "Purchase of general commercial manufacturing machinery or land."
    ],
    "faqs": [
      {
        "question": "What is the maximum financial assistance under the MSME Design Scheme?",
        "answer": "The government provides 75% of the project cost up to a maximum of ₹40 Lakh for professional design projects, and 75% up to ₹2.5 Lakh for student design projects."
      },
      {
        "question": "Which premier institutes anchor the MSME Design Scheme?",
        "answer": "The scheme is anchored by premier institutions including National Institute of Design (NID) Ahmedabad, Indian Institute of Science (IISc) Bangalore, and various IITs."
      }
    ]
  },
  {
    "id": "sch-35",
    "title": "Raising and Accelerating MSME Performance (RAMP)",
    "slug": "ramp-msme-performance",
    "description": "World Bank-assisted central sector programme (outlay ₹6,062 Crore) strengthening MSME institutional capacity, state-level governance, market access, delayed payment resolution, and green transition through Strategic Investment Plans (SIPs) across participating States.",
    "authority": "Ministry of Micro, Small and Medium Enterprises (MoMSME)",
    "category": "MSME Performance",
    "status": "ACTIVE / ONGOING IMPLEMENTATION",
    "sourceUrl": "https://ramp.msme.gov.in",
    "sourceAuthority": "Ministry of Micro, Small and Medium Enterprises (MoMSME)",
    "verificationStatus": "VERIFIED",
    "eligibility": "State Governments and Union Territory administrations executing approved Strategic Investment Plans (SIPs). Individual MSMEs benefit through state-run programs and cluster interventions initiated under RAMP.",
    "benefits": "State-level systemic infrastructure strengthening, operationalization of delayed payment facilitation councils (MSEFCs), state export promotion programs, digital supplier onboarding, and cluster technology upgradation.",
    "applicationProcess": "State Governments submit Strategic Investment Plans (SIPs) to MoMSME; MSMEs participate in subsidized programs rolled out by their respective State MSME Directorates.",
    "implementingAuthority": "National MSME Council / State MSME Departments",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "State Governments, MSME Institutional Ecosystems, Industry Associations, and MSME Clusters across participating Indian States",
    "financialParameters": "Central financial transfers to participating States and institutions based on Disbursement Linked Indicators (DLIs) from the ₹6,062 Crore total budget outlay",
    "objective": "Scale up MSME institutional implementation capacity at central and state levels, improve MSME access to technology and competitive markets, enhance credit delivery, resolve delayed payments, and foster greening of MSMEs.",
    "coverage": "Pan-India across all participating State and UT Governments with approved Strategic Investment Plans (SIPs).",
    "incentives": "Results-based financing disbursed to State Governments and implementing institutions upon achieving verified Disbursement Linked Indicators (DLIs).",
    "howToUnderstand": "RAMP is a ₹6,000+ Crore national institutional transformation program (supported by the World Bank) funding State Governments to fix MSME delayed payments, modernize testing centers, and expand small business export readiness.",
    "registrationProcess": [
      "State Governments formulate comprehensive MSME Strategic Investment Plans (SIPs).",
      "Appraisal and approval of State SIPs by the National MSME Council under MoMSME.",
      "Release of RAMP programme grants linked to verified institutional milestone achievements.",
      "State Directorates deploy capacity programs, delayed payment conciliation portals, and cluster tech hubs.",
      "Local MSMEs access upgraded state services, vendor development meets, and market access portals."
    ],
    "requiredDocuments": [
      "State Strategic Investment Plan (SIP) and Results Framework Documentation",
      "Annual DLI Verification Reports audited by independent verification agencies",
      "Udyam registration proof for MSMEs participating in state-sponsored RAMP interventions"
    ],
    "importantConditions": [
      "RAMP is a systemic institutional and state-level policy programme, NOT a direct retail cash loan or individual investment instrument.",
      "Funds are disbursed based on strictly verified milestone outcomes (DLIs) such as reduced payment delays and increased Udyam onboarding."
    ],
    "exclusions": [
      "Direct retail personal equity investments or individual speculative trading funds.",
      "Unapproved state expenditures outside the agreed Strategic Investment Plan mandate."
    ],
    "faqs": [
      {
        "question": "Is RAMP a direct individual loan scheme for entrepreneurs?",
        "answer": "No. RAMP is a government-to-government and ecosystem institutional programme supported by the World Bank to strengthen state-level MSME policies, dispute resolution, and cluster capabilities."
      },
      {
        "question": "What is the total financial outlay of the RAMP programme?",
        "answer": "The total programme outlay is ₹6,062.45 Crore, of which ₹3,750 Crore is funded via World Bank loan assistance and the remainder by the Government of India."
      }
    ]
  },
  {
    "id": "sch-36",
    "title": "Scheme for Fund for Regeneration of Traditional Industries (SFURTI)",
    "slug": "sfurti-traditional-industries",
    "description": "Centrally sponsored cluster development scheme providing financial grants of up to ₹2.5 Crore (Regular Clusters up to 500 artisans) and up to ₹5 Crore (Major Clusters >500 artisans) for establishing Common Facility Centers (CFCs), modern machinery, and market linkages for traditional artisans in khadi, coir, handicrafts, and agro-processing sectors.",
    "authority": "Ministry of Micro, Small and Medium Enterprises (MoMSME)",
    "category": "Traditional Artisans & Clusters",
    "status": "ACTIVE / OPEN",
    "sourceUrl": "https://sfurti.msme.gov.in",
    "sourceAuthority": "Ministry of Micro, Small and Medium Enterprises (MoMSME)",
    "verificationStatus": "VERIFIED",
    "eligibility": "Implementing Agencies (IAs) such as Non-Government Organizations (NGOs), institutions of Central/State Governments, Semi-Government bodies, State Panchayati Raj Institutions, and Section 8 companies with experience in traditional rural cluster development.",
    "benefits": "100% financial grant for soft interventions (skill training, design development, exposure visits) and up to 95% grant for hard interventions (building Common Facility Centers, procuring advanced automated tools, packaging units).",
    "applicationProcess": "Online proposal submission by eligible Implementing Agencies through the SFURTI portal (sfurti.msme.gov.in).",
    "implementingAuthority": "KVIC, Coir Board, IIE, NIMSME, and designated Nodal Agencies (NAs)",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "Artisans, Craftspersons, Village Industries, Self Help Groups (SHGs), and Producer Companies organized into traditional manufacturing clusters",
    "financialParameters": "Financial assistance of up to ₹2.5 Crore for Regular Clusters (up to 500 artisans) and up to ₹5.0 Crore for Major Clusters (more than 500 artisans), covering 95% of hard interventions (CFC machinery)",
    "objective": "Organize traditional artisans and rural craftspersons into sustainable competitive clusters, provide modern production tools and shared Common Facility Centers (CFCs), upgrade artisan skills, and build national/international market linkages.",
    "coverage": "Pan-India across traditional craft, khadi, bamboo, honey, handloom, coir, and agro-processing artisan concentrations.",
    "incentives": "Non-repayable central grant-in-aid disbursed to the designated Special Purpose Vehicle (SPV) / Implementing Agency in milestone-based tranches.",
    "howToUnderstand": "This program gives up to ₹5 Crore in government grants to set up shared processing factories, modern machinery tool rooms, and design centers for groups of 500+ rural artisans (potters, weavers, bamboo workers, honey gatherers).",
    "registrationProcess": [
      "Eligible Implementing Agency (NGO/Institution) identifies traditional artisan cluster and submits Concept Proposal.",
      "Preliminary approval by Nodal Agency (NA) and appointment of Technical Agency (TA) to prepare Detailed Project Report (DPR).",
      "Appraisal and final approval by the Scheme Steering Committee (SSC) under MoMSME.",
      "Formation of artisan Special Purpose Vehicle (SPV) / Producer Company and construction of Common Facility Center (CFC).",
      "Procurement of machinery, artisan training, commercial operations commencement, and market linkage onboarding."
    ],
    "requiredDocuments": [
      "Implementing Agency Registration (NGO Darpan ID, Trust/Society/Section 8 Certificate, 3-yr Audited Accounts)",
      "Comprehensive Detailed Project Report (DPR) with Cluster Diagnostic Study and Financial Model",
      "Land Ownership / Registered Lease Deed (minimum 15-year lease) for setting up the Common Facility Center",
      "Artisan Database with Aadhaar numbers, skill mapping, and SPV incorporation documents"
    ],
    "importantConditions": [
      "Must form an artisan-owned Special Purpose Vehicle (SPV) / Producer Company to sustainably manage the CFC assets post-commissioning.",
      "The SPV/beneficiaries must contribute 5% to 10% of the hard intervention cost as promoter equity."
    ],
    "exclusions": [
      "Individual single-person commercial applications (proposals must represent a collective artisan cluster).",
      "Clusters lacking traditional artisan concentrations or having fewer than 100-200 active craftspersons."
    ],
    "faqs": [
      {
        "question": "What is the maximum grant available for a traditional industry cluster under SFURTI?",
        "answer": "The maximum grant is ₹2.5 Crore for Regular Clusters (up to 500 artisans) and ₹5.0 Crore for Major Clusters (more than 500 artisans)."
      },
      {
        "question": "Can an individual business person apply for personal machinery?",
        "answer": "No. SFURTI exclusively supports collective cluster interventions where common machinery is housed in a Common Facility Center (CFC) owned by an artisan Special Purpose Vehicle (SPV)."
      }
    ]
  },
  {
    "id": "sch-37",
    "title": "ASPIRE - Scheme for Promotion of Innovation, Rural Industry and Entrepreneurship",
    "slug": "aspire-rural-entrepreneurship",
    "description": "Central sector scheme facilitating the setup of Livelihood Business Incubators (LBIs) and Technology Business Incubators (TBIs) with one-time grants of up to ₹1 Crore to train rural youth, commercialize agro-rural technologies, and incubate rural micro-enterprises.",
    "authority": "Ministry of Micro, Small and Medium Enterprises (MoMSME)",
    "category": "Rural Incubation",
    "status": "ACTIVE / OPEN",
    "sourceUrl": "https://aspire.msme.gov.in",
    "sourceAuthority": "Ministry of Micro, Small and Medium Enterprises (MoMSME)",
    "verificationStatus": "VERIFIED",
    "eligibility": "Government agencies, autonomous bodies, academic institutions, universities, ICAR/CSIR institutes, and private non-profit entities with adequate infrastructure and experience in skill training.",
    "benefits": "Full financial grant up to ₹1 Crore for procuring industrial training equipment and machinery to set up LBI centers; practical hands-on skill incubation for local entrepreneurs in food processing, packaging, solar engineering, and rural manufacturing.",
    "applicationProcess": "Online application submission by eligible host institutions through the ASPIRE web portal (aspire.msme.gov.in).",
    "implementingAuthority": "National Small Industries Corporation (NSIC) / KVIC / Coir Board / MoMSME",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "Rural Youth, First-Generation Agro-Entrepreneurs, Technical Institutions, Universities, and Rural Business Incubators",
    "financialParameters": "One-time 100% grant-in-aid of up to ₹100 Lakh (₹1 Crore) for Government agencies and up to 50% (up to ₹50 Lakh) for Private entities to set up Livelihood Business Incubators (LBIs); up to ₹100 Lakh for Technology Business Incubators (TBIs)",
    "objective": "Create new rural jobs and reduce unemployment, promote entrepreneurship culture in rural and agro-based industries, establish business incubation centers across rural districts, and facilitate commercialization of innovative agricultural technologies.",
    "coverage": "Pan-India with special focus on rural, unserved, and aspirational districts.",
    "incentives": "Non-repayable capital grant-in-aid disbursed to the host incubator institution in tranches linked to equipment installation and training batches.",
    "howToUnderstand": "This program gives up to ₹1 Crore in government grants to colleges and institutions to build rural training workshops where local youth learn how to operate modern machinery and launch their own small businesses.",
    "registrationProcess": [
      "Host institution registers on the ASPIRE portal (aspire.msme.gov.in).",
      "Preparation of Detailed Project Report (DPR) detailing local agro-rural trades, machinery requirements, and training targets.",
      "Online proposal submission and scrutiny by the ASPIRE Screening Committee.",
      "Final appraisal and approval by the Scheme Steering Committee (SSC) under MoMSME.",
      "Release of grant installments, machinery procurement, and launch of incubation training programs for rural youth."
    ],
    "requiredDocuments": [
      "Institutional Registration Certificate, UGC/AICTE approval (for universities), or Society/Trust Deed",
      "Detailed Project Report (DPR) with machinery specifications, floor layout, and 3-year operational sustainability plan",
      "Proof of dedicated built-up physical space (minimum 2,000 to 5,000 sq ft) for housing the incubator",
      "Audited financial statements and track record of entrepreneurship development activities"
    ],
    "importantConditions": [
      "Grant is strictly for capital procurement of plant, machinery, and training equipment (operating expenses must be sustained by host institution).",
      "Host institution must commit to incubating and graduating a minimum mandated number of rural enterprises annually."
    ],
    "exclusions": [
      "Direct personal startup seed equity to individual students (funded separately via SISFS or TBI schemes).",
      "Purchase of land or major civil real estate construction."
    ],
    "faqs": [
      {
        "question": "What is the funding amount for setting up a Livelihood Business Incubator (LBI) under ASPIRE?",
        "answer": "Government institutions receive a 100% grant up to ₹100 Lakh (₹1 Crore), while private/PPP institutions receive up to 50% grant up to ₹50 Lakh for procuring machinery and equipment."
      },
      {
        "question": "Who can apply to set up an incubator under ASPIRE?",
        "answer": "Universities, technical colleges, ICAR/CSIR institutions, KVKs, state government bodies, and eligible non-profit trusts with ready physical infrastructure can apply."
      }
    ]
  },
  {
    "id": "sch-38",
    "title": "Startup India Seed Fund Scheme (SISFS)",
    "slug": "startup-india-seed-fund-scheme",
    "description": "Flagship seed capital scheme with an outlay of ₹945 Crore providing financial assistance to early-stage DPIIT-recognized startups through approved incubators for proof of concept, prototype development, product trials, market entry, and commercialization.",
    "authority": "Department for Promotion of Industry and Internal Trade (DPIIT), Ministry of Commerce and Industry",
    "category": "Startup Seed Capital",
    "status": "ACTIVE / OPEN",
    "sourceUrl": "https://seedfund.startupindia.gov.in",
    "sourceAuthority": "DPIIT, Ministry of Commerce and Industry",
    "verificationStatus": "VERIFIED",
    "eligibility": "DPIIT-recognized startup incorporated not more than 2 years ago at the time of application; must have an innovative business idea with commercial potential; must not have received more than ₹10 Lakh in monetary support from other central/state government schemes (excluding prize money).",
    "benefits": "Up to ₹20 Lakh milestone-based non-dilutive grant for prototyping; up to ₹50 Lakh debt or convertible debenture financing (at <=prevalent repo rate) with up to 12-month repayment moratorium; access to world-class incubator lab facilities and mentors.",
    "applicationProcess": "100% online direct application through the official Startup India Seed Fund portal (seedfund.startupindia.gov.in).",
    "implementingAuthority": "Experts Advisory Committee (EAC) / DPIIT / Approved Incubators",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "DPIIT-Recognized Early-Stage Startups (incorporated <=2 years ago) with innovative proof-of-concept solutions",
    "financialParameters": "Grants of up to ₹20 Lakh for Proof of Concept / Prototype / Product Trials + Debt / Convertible Debentures of up to ₹50 Lakh for Market Entry and Commercialization",
    "objective": "Provide early-stage financial seed support to innovative startups, bridge the critical capital gap before institutional venture funding, and enable startups to validate prototypes and conduct initial product trials.",
    "coverage": "Pan-India across all sectors with emphasis on hardware, social impact, deep-tech, healthcare, agriculture, and sustainability.",
    "incentives": "Direct financial disbursements from approved host incubators to selected startups based on achievement of validated development milestones.",
    "howToUnderstand": "This is a government startup seed program giving early-stage Indian startups up to ₹20 Lakh in grants to build working prototypes and up to ₹50 Lakh in low-interest loans to launch in the market.",
    "registrationProcess": [
      "Obtain DPIIT Startup Recognition on the Startup India portal.",
      "Log in to seedfund.startupindia.gov.in and complete the standardized online application form.",
      "Select up to 3 preferred approved Incubators in order of preference.",
      "Shortlisted startups present their pitch before the Incubator Seed Management Committee (ISMC).",
      "Sanction and milestone-linked release of seed funds directly from the incubator to the startup bank account."
    ],
    "requiredDocuments": [
      "DPIIT Startup Recognition Certificate and Certificate of Incorporation",
      "Company PAN and Founder Identity / Address Proofs",
      "Pitch Deck / Detailed Business Plan with problem statement, target market, and milestone budget",
      "Proof of Concept / Prototype demonstration video or architectural schematics"
    ],
    "importantConditions": [
      "Startup must be incorporated within 2 years from date of application.",
      "Indian promoters must hold at least 51% shareholding in the startup at the time of application.",
      "Startups can apply to a maximum of 3 incubators simultaneously."
    ],
    "exclusions": [
      "Startups that have already raised more than ₹10 Lakh in government grants or substantial venture capital.",
      "Routine trading entities, agencies, or conventional consultancies without technological innovation."
    ],
    "faqs": [
      {
        "question": "What is the maximum funding a startup can receive under SISFS?",
        "answer": "A startup can receive up to ₹20 Lakh as a grant for prototype validation and proof-of-concept, plus up to ₹50 Lakh through debt or convertible debentures for commercialization and market launch."
      },
      {
        "question": "Can an individual without an incorporated company apply?",
        "answer": "No. The entity must be an incorporated Private Limited Company or LLP and hold an active DPIIT Startup Recognition Certificate."
      }
    ]
  },
  {
    "id": "sch-39",
    "title": "Fund of Funds for Startups (FFS)",
    "slug": "fund-of-funds-for-startups",
    "description": "National venture capital catalyst with a corpus of ₹10,000 Crore managed by SIDBI, investing daughter fund capital into SEBI-registered Alternative Investment Funds (AIFs) which in turn invest equity capital into innovative Indian DPIIT-recognized startups.",
    "authority": "Department for Promotion of Industry and Internal Trade (DPIIT), Ministry of Commerce and Industry",
    "category": "Venture Capital & Startups",
    "status": "ACTIVE / ONGOING IMPLEMENTATION",
    "sourceUrl": "https://www.startupindia.gov.in/content/sih/en/fund-of-funds-for-startups.html",
    "sourceAuthority": "DPIIT / SIDBI",
    "verificationStatus": "VERIFIED",
    "eligibility": "For AIFs: SEBI-registered Category-I and Category-II Alternative Investment Funds. For Startups: DPIIT-recognized startups incorporated in India meeting AIF investment criteria.",
    "benefits": "Venture capital equity infusions into high-potential Indian startups; enables professional venture capital fund managers to raise institutional domestic capital; builds a sustainable homegrown private equity/venture ecosystem.",
    "applicationProcess": "AIF fund managers apply directly to SIDBI's Venture Capital Operations division; startups pitch directly to the participating SIDBI-backed daughter AIF venture funds.",
    "implementingAuthority": "Small Industries Development Bank of India (SIDBI)",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "SEBI-Registered Category I and II Alternative Investment Funds (AIFs) and high-growth Indian DPIIT-Recognized Startups receiving venture capital",
    "financialParameters": "Government contributes up to 35% of the total fund corpus of SEBI-registered daughter AIFs (up to 50% for funds managed by SC/ST/Women/NER fund managers), who must invest twice the contributed amount in DPIIT startups",
    "objective": "Catalyze domestic risk capital for Indian startups, reduce dependence on foreign venture capital, foster entrepreneurship across diverse technology sectors, and scale up innovative early-to-growth stage startups.",
    "coverage": "Pan-India across all innovation sectors (deeptech, software, life sciences, consumer, climate-tech).",
    "incentives": "Capital commitments approved by Venture Capital Investment Committee (VCIC) and drawn down by AIFs to execute equity investments into qualifying startups.",
    "howToUnderstand": "FFS is an institutional fund-of-funds mechanism (not a retail investment product for individuals) where the government commits capital to professional venture capital funds (AIFs) that invest equity directly into Indian startups.",
    "registrationProcess": [
      "SEBI-registered AIF submits application for capital commitment to SIDBI.",
      "Appraisal by SIDBI internal investment team and presentation before the Venture Capital Investment Committee (VCIC).",
      "Issuance of Letter of Intent and execution of Contribution Agreement with the AIF.",
      "AIF raises matching private institutional capital and identifies prospective DPIIT startup investments.",
      "AIF issues capital drawdowns from SIDBI and executes equity investments into selected startups."
    ],
    "requiredDocuments": [
      "SECI / SEBI Category I or II AIF Registration Certificate and Private Placement Memorandum (PPM)",
      "Fund Investment Track Record and Key Investment Team Profiles",
      "Constitutional Documents (Trust Deed, Investment Management Agreement)",
      "Quarterly Portfolio Compliance and DPIIT Startup Investment Verification Reports"
    ],
    "importantConditions": [
      "FFS is an institutional fund-of-funds vehicle; retail individual investors cannot directly deposit or invest in FFS.",
      "Participating AIFs must invest at least 2 times the capital drawn down from FFS into DPIIT-recognized startups."
    ],
    "exclusions": [
      "Direct retail deposits, fixed return investment schemes, or personal wealth management products.",
      "Direct equity grants from SIDBI directly to individual entrepreneurs without AIF intermediary evaluation."
    ],
    "faqs": [
      {
        "question": "Can an individual retail investor or startup founder apply directly to SIDBI for FFS money?",
        "answer": "No. FFS is an institutional fund-of-funds. SIDBI invests into SEBI-registered venture capital funds (AIFs). Startups receive equity funding by pitching directly to these partner venture capital funds."
      },
      {
        "question": "What is the total corpus of the Fund of Funds for Startups?",
        "answer": "The scheme was established with a total dedicated corpus of ₹10,000 Crore, operationalized across rolling Union Budget allocations."
      }
    ]
  },
  {
    "id": "sch-40",
    "title": "Credit Guarantee Scheme for Startups (CGSS)",
    "slug": "credit-guarantee-scheme-for-startups",
    "description": "National institutional credit guarantee framework notified by DPIIT and operated by NCGTC, providing credit guarantees of up to 85% on collateral-free loans and venture debt up to ₹10 Crore extended to eligible DPIIT-recognized startups by Member Institutions (Banks, NBFCs, and AIFs).",
    "authority": "Department for Promotion of Industry and Internal Trade (DPIIT), Ministry of Commerce and Industry",
    "category": "Startup Credit",
    "status": "ACTIVE / OPEN",
    "sourceUrl": "https://www.startupindia.gov.in/content/sih/en/credit-guarantee-scheme-for-startups.html",
    "sourceAuthority": "DPIIT / NCGTC",
    "verificationStatus": "VERIFIED",
    "eligibility": "DPIIT-recognized startups holding active recognition, demonstrating 12-month certified revenue streams or backed by institutional venture funds, with no existing default track record.",
    "benefits": "Startups can secure business loans and venture debt up to ₹10 Crore without pledging personal or promoter physical collateral; lower interest costs; enables startups to finance working capital and asset expansion without diluting equity.",
    "applicationProcess": "Startups apply for debt facilities directly through registered Member Institutions (Scheduled Banks, NBFCs, or registered Venture Debt Funds).",
    "implementingAuthority": "National Credit Guarantee Trustee Company (NCGTC)",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "DPIIT-Recognized Startups with stable revenue traction or backed by institutional venture funds seeking collateral-free debt",
    "financialParameters": "Credit guarantee coverage of up to 80% - 85% on credit facilities (working capital, term loans, venture debt) up to ₹10 Crore per startup borrower",
    "objective": "Provide collateral-free debt funding to early and growth stage startups, encourage commercial banks and venture debt funds to lend to innovation startups without demanding real estate collateral, and reduce startup equity dilution.",
    "coverage": "Pan-India across Scheduled Commercial Banks, eligible NBFCs, and SEBI-registered Category-I/II AIFs (Venture Debt Funds).",
    "incentives": "Institutional credit guarantee coverage issued by NCGTC to Member Institutions covering up to 85% of default amounts on transaction/umbrella guarantee basis.",
    "howToUnderstand": "This is a government credit-guarantee scheme (not a cash grant or personal investment) providing up to an 85% government backstop on bank and venture debt loans up to ₹10 Crore so innovative startups do not need to mortgage property.",
    "registrationProcess": [
      "Startup obtains DPIIT recognition and prepares debt proposal with audited revenue statements / venture backing proof.",
      "Application submitted to an empanelled Member Institution (Bank/NBFC/Venture Debt AIF).",
      "Lender appraises creditworthiness and sanctions debt facility under CGSS framework.",
      "Lender files guarantee application and pays Annual Guarantee Fee on the NCGTC CGSS portal.",
      "Collateral-free debt disbursed directly into the startup's corporate account."
    ],
    "requiredDocuments": [
      "DPIIT Startup Recognition Certificate and Company Incorporation Certificate",
      "Audited Financial Statements for past 3 years or 12-month certified revenue statements",
      "Detailed Project Report / Business Debt Repayment Plan",
      "Sanction letter and debt facility agreement from Member Lending Institution"
    ],
    "importantConditions": [
      "This is a debt credit guarantee mechanism; it is NOT a direct cash subsidy or personal investment return scheme.",
      "Maximum guarantee-covered debt per startup is capped at ₹10 Crore across all lending institutions.",
      "Startups must not be in default with any financial institution or classified as NPA."
    ],
    "exclusions": [
      "Unrecognized enterprises or entities exceeding the DPIIT 10-year startup ceiling.",
      "Personal loans to founders, consumer retail loans, or pure speculative real estate financing."
    ],
    "faqs": [
      {
        "question": "Is CGSS a government grant or free seed money?",
        "answer": "No. CGSS is a credit guarantee mechanism. It covers institutional risk for banks and venture debt funds so they can provide commercial business loans up to ₹10 Crore to startups without requiring physical real estate collateral."
      },
      {
        "question": "What is the maximum loan guarantee limit under CGSS?",
        "answer": "The maximum credit facility eligible for guarantee coverage is ₹10 Crore per startup borrower."
      }
    ]
  },
  {
    "id": "sch-41",
    "title": "RoDTEP - Remission of Duties and Taxes on Exported Products",
    "slug": "rodtep-export-incentive",
    "description": "WTO-compliant duty remission mechanism that reimburses embedded, un-refunded central, state, and local levies and taxes (electricity duty, mandi taxes, stamp duty, VAT on transportation fuels) incurred in the domestic manufacture and distribution of exported goods.",
    "authority": "Department of Commerce & Department of Revenue, Ministry of Finance",
    "category": "Export Duty Remission",
    "status": "ACTIVE / ONGOING IMPLEMENTATION",
    "sourceUrl": "https://www.dgft.gov.in",
    "sourceAuthority": "Directorate General of Foreign Trade (DGFT) / ICEGATE",
    "verificationStatus": "VERIFIED",
    "eligibility": "Registered exporters with a valid Importer-Exporter Code (IEC) exporting goods covered under the RoDTEP schedule who declare their intent to claim RoDTEP on their electronic shipping bills (code 'RODTEPY').",
    "benefits": "Transferable electronic duty scrips (e-Scrips) credited directly to exporter's ICEGATE ledger; scrips can be used to pay basic customs duties on imported inputs or freely sold/transferred in the market.",
    "applicationProcess": "Claim intent must be declared on the electronic Shipping Bill on the ICEGATE portal during customs filing, followed by e-Scrip generation via the ICEGATE RoDTEP module.",
    "implementingAuthority": "Directorate General of Foreign Trade (DGFT) & Central Board of Indirect Taxes and Customs (CBIC)",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "All manufacturer-exporters and merchant-exporters shipping eligible goods across notified ITC(HS) tariff codes from India (including SEZ and EOU units under notified expansions)",
    "financialParameters": "Rebate issued as transferable electronic duty credit scrips (e-Scrips) calculated as a notified percentage (ranging between 0.3% and 4.3% with specified value caps per unit) of Freight On Board (FOB) export value",
    "objective": "Neutralize domestic tax incidence on outbound export supply chains, enhance international cost-competitiveness of Indian products, and establish a fully automated, WTO-compliant duty neutralization architecture.",
    "coverage": "Pan-India across notified export tariff lines shipped through electronic customs data ports.",
    "incentives": "Automated duty remission credit generated directly upon shipping bill clearance and realization of export proceeds.",
    "howToUnderstand": "This is a tax-refund mechanism (not a direct investment return or cash subsidy) where the government refunds hidden local and state taxes (like electricity and fuel taxes) that exporters paid while making goods in India.",
    "registrationProcess": [
      "File electronic Shipping Bill on ICEGATE marking 'RODTEPY' claim declaration.",
      "Customs processes Export General Manifest (EGM) and transmits scroll to ICEGATE.",
      "Exporter logs into ICEGATE RoDTEP module to generate digital e-Scrips.",
      "Transfer e-Scrips to other registered IEC holders or utilize them to pay Basic Customs Duty on imports."
    ],
    "requiredDocuments": [
      "Importer-Exporter Code (IEC) and active ICEGATE digital portal registration",
      "Electronic Shipping Bill with 'RODTEPY' declaration",
      "Bank Realization Certificate (BRC) / Electronic Bank Realization Certificate (e-BRC) / EDPMS confirmation",
      "GST Return filings and valid commercial export invoices"
    ],
    "importantConditions": [
      "Claim of RoDTEP must be explicitly opted into ('RODTEPY') at the time of filing the initial Shipping Bill; retrospective claims on bills filed as 'N' are generally impermissible.",
      "Export proceeds must be realized within the timeframe stipulated by the Reserve Bank of India."
    ],
    "exclusions": [
      "Goods manufactured in custom-bonded warehouses under Section 65 of the Customs Act (MOOWR) unless specifically notified.",
      "Re-exported imported goods, transshipment products, and items subjected to minimum export price (MEP) or export duty."
    ],
    "faqs": [
      {
        "question": "Is RoDTEP an investment scheme or a tax rebate?",
        "answer": "RoDTEP is an export duty-neutralization scheme that remits embedded domestic central, state, and local taxes (such as fuel VAT and electricity taxes) incurred during production. It is not an investment fund."
      },
      {
        "question": "How is the RoDTEP benefit received and utilized?",
        "answer": "Benefits are credited as electronic duty credit scrips (e-Scrips) in the exporter's ICEGATE account, which can either be used to pay Basic Customs Duty on imports or transferred digitally to other importers."
      }
    ]
  },
  {
    "id": "sch-42",
    "title": "Interest Equalization Scheme for Pre and Post Shipment Export Credit",
    "slug": "interest-equalization-export-credit",
    "description": "Export trade credit support initiative implemented through the Reserve Bank of India, providing interest rate equalization (subvention) on rupee pre-shipment and post-shipment export credit extended by commercial banks to eligible manufacturer-exporters and MSME enterprises.",
    "authority": "Department of Commerce, Ministry of Commerce & Industry / Reserve Bank of India",
    "category": "Export Credit Support",
    "status": "ACTIVE / ONGOING (Periodically Extended by DGFT/RBI)",
    "sourceUrl": "https://www.dgft.gov.in",
    "sourceAuthority": "Directorate General of Foreign Trade (DGFT) / RBI",
    "verificationStatus": "VERIFIED",
    "eligibility": "Exporters with valid IEC and Udyam Registration (for MSMEs) availing pre-shipment or post-shipment export credit in Indian Rupees. Merchant exporters are excluded unless explicitly notified.",
    "benefits": "Immediate interest subvention deducted upfront by lending banks on rupee packing credit and post-shipment export bill discounting, reducing effective lending rates by 2% to 3%.",
    "applicationProcess": "Exporters apply through their lending commercial bank with Udyam registration and submit interest equalization claims via the DGFT portal (dgft.gov.in).",
    "implementingAuthority": "Reserve Bank of India (RBI) & Authorized Dealer (AD Category-I) Commercial Banks",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "Manufacturer Exporters in the MSME sector across all tariff lines and Manufacturer Exporters in non-MSME categories across notified eligible Harmonized System (HS) lines",
    "financialParameters": "Interest equalization rate of 3% per annum for eligible MSME manufacturer-exporters and 2% per annum for non-MSME manufacturer-exporters across notified tariff lines (annual subvention cap of ₹10 Crore per IEC for MSMEs)",
    "objective": "Reduce the cost of working capital finance for Indian exporters, ease liquidity constraints during pre-shipment manufacturing and post-shipment credit cycles, and bridge interest rate differentials with competing global exporters.",
    "coverage": "Pan-India across all Scheduled Commercial Banks extending rupee export credit.",
    "incentives": "Interest equalization amount is credited by RBI directly to the lending bank, passing the net discounted interest rate immediately to the exporter's working capital account.",
    "howToUnderstand": "This is a banking interest-rate discount scheme where the government reduces the loan interest rate by 2% to 3% for Indian manufacturers taking bank loans to produce and ship export goods.",
    "registrationProcess": [
      "Exporter obtains Udyam Registration Certificate and logs into DGFT portal.",
      "Generate Unique Identification Number (UIN) for Interest Equalization Scheme on DGFT portal.",
      "Submit UIN and export credit request to the Authorized Dealer (AD) lending bank.",
      "Bank applies 3% or 2% subvention on rupee pre/post shipment export credit interest rates.",
      "Lending bank claims reimbursement from RBI on behalf of the exporter."
    ],
    "requiredDocuments": [
      "Valid Importer-Exporter Code (IEC) and DGFT UIN acknowledgment",
      "Udyam Registration Certificate (mandatory for MSME manufacturer-exporters)",
      "Sanction letter for Pre-Shipment / Post-Shipment Rupee Export Credit from commercial bank",
      "Export Orders / Letters of Credit (LC) and commercial shipping invoices"
    ],
    "importantConditions": [
      "Applicable strictly to export credit denominated in Indian Rupees (INR); foreign currency export credit (PCFC/EBR) is not eligible.",
      "Total interest subvention is subject to official fiscal caps (₹10 Crore per Financial Year per IEC for MSMEs)."
    ],
    "exclusions": [
      "Merchant exporters (non-manufacturers) unless expressly notified by DGFT.",
      "Export of goods categorized outside the notified eligible HS tariff lines for non-MSME entities."
    ],
    "faqs": [
      {
        "question": "What is the interest rate reduction under the Interest Equalization Scheme?",
        "answer": "Eligible MSME manufacturer-exporters receive a 3% per annum interest equalization rate, while non-MSME manufacturer-exporters on notified lines receive a 2% rate on rupee export credit."
      },
      {
        "question": "Can an individual investor apply for this scheme?",
        "answer": "No. This is a trade credit interest subvention program for active registered manufacturer-exporters holding commercial bank export credit facilities."
      }
    ]
  },
  {
    "id": "sch-43",
    "title": "NIRVIK Scheme (Export Credit Insurance)",
    "slug": "nirvik-export-credit-insurance",
    "description": "Niryat Rin Vikas Yojana (NIRVIK) introduced through ECGC Ltd. to enhance credit risk insurance coverage for lending banks (up to 90% of principal and interest), lower insurance premium costs, and simplify claims to boost export credit flow to Indian exporters.",
    "authority": "Ministry of Commerce and Industry / Department of Commerce",
    "category": "Export Credit Insurance",
    "status": "ACTIVE / IMPLEMENTED THROUGH ECGC SCHEMES",
    "sourceUrl": "https://www.ecgc.in",
    "sourceAuthority": "Export Credit Guarantee Corporation of India (ECGC Ltd.)",
    "verificationStatus": "VERIFIED",
    "eligibility": "Commercial lending banks registered with ECGC extending rupee or foreign currency export credit to Indian exporter enterprises with compliant credit ratings.",
    "benefits": "Banks receive up to 90% credit loss protection covering both principal and interest; faster claim settlement turnaround (interim relief up to 80% on pending claims); reduced insurance premium rates.",
    "applicationProcess": "Lending banks apply directly to ECGC Ltd. for Whole Turnover Export Credit Insurance (WT-ECIB) policies covering their export borrower portfolios.",
    "implementingAuthority": "Export Credit Guarantee Corporation of India (ECGC Ltd.)",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "Commercial lending banks extending pre-shipment and post-shipment export credit, and Indian exporters seeking enhanced credit limits with lower collateral",
    "financialParameters": "Credit guarantee risk insurance coverage of up to 90% of both principal loan amount and interest (up from standard 60%) for banks extending export credit to small and medium exporters",
    "objective": "Enhance export credit disbursement by providing high insurance coverage to lending banks against exporter defaults, reduce bank capital provisioning costs, and lower effective borrowing costs for exporters.",
    "coverage": "Pan-India across all commercial banks financing export credit.",
    "incentives": "High risk-coverage policy issued directly to commercial banks, enabling banks to sanction larger export credit facilities with reduced collateral and lower risk spreads.",
    "howToUnderstand": "This is a government-backed bank insurance scheme where ECGC protects banks against up to 90% of losses if an exporter defaults, making it much easier for exporters to get bank financing.",
    "registrationProcess": [
      "Commercial bank subscribes to ECGC Enhanced Export Credit Insurance Policy.",
      "Bank evaluates exporter's credit requirements and sanctions pre/post shipment export credit.",
      "Bank reports borrower limits and pays concessional insurance premium to ECGC.",
      "In the event of exporter default, bank files claim on ECGC portal for prompt up to 90% loss recovery."
    ],
    "requiredDocuments": [
      "Bank Export Credit Sanction Terms and Exporter IEC Details",
      "Audited Financials and Credit Rating Report of the Exporter",
      "ECGC Policy Documentation and Monthly Turnover Return",
      "Proof of Export Invoices and overdue realization statements (in case of claim filing)"
    ],
    "importantConditions": [
      "This is an institutional credit guarantee/insurance policy for lending banks; it is not a direct cash investment or direct grant to individuals.",
      "Lending banks must adhere to ECGC underwriting covenants and timely premium remittance schedules."
    ],
    "exclusions": [
      "Exporters placed on the ECGC Specific Approval List (SAL) or defaulter databases.",
      "Non-trade financial transactions and speculative credit exposures."
    ],
    "faqs": [
      {
        "question": "Does NIRVIK give cash grants directly to exporters?",
        "answer": "No. NIRVIK operates as an export credit insurance framework through ECGC that covers lending banks against credit risks, allowing banks to extend higher credit limits at lower interest rates to exporters."
      },
      {
        "question": "What is the maximum coverage percentage under NIRVIK / ECGC enhanced policies?",
        "answer": "The enhanced insurance coverage provides up to 90% risk protection on both principal and interest for lending institutions."
      }
    ]
  },
  {
    "id": "sch-44",
    "title": "Champion Services Sector Scheme (CSSS)",
    "slug": "champion-services-sector-scheme",
    "description": "Umbrella national policy initiative formulated with a dedicated outlay of ₹5,000 Crore to develop, modernize, and boost export competitiveness across 12 identified Champion Services Sectors through coordinated sectoral interventions by nodal ministries.",
    "authority": "Department of Commerce, Ministry of Commerce and Industry",
    "category": "Services Sector Policy",
    "status": "ACTIVE / ONGOING IMPLEMENTATION",
    "sourceUrl": "https://commerce.gov.in/trade-promotion/champion-services-sector-scheme",
    "sourceAuthority": "Department of Commerce, Ministry of Commerce and Industry",
    "verificationStatus": "VERIFIED",
    "eligibility": "Varies by specific sectoral sub-scheme; generally encompasses registered service providers, educational institutes, hospital networks, IT companies, media producers, and logistics operators.",
    "benefits": "Sector-specific incentives, infrastructure grants, international marketing support, international accreditation facilitation, and digital platform development managed by individual nodal ministries.",
    "applicationProcess": "Applicants apply to specific sub-schemes and initiatives administered by the respective line ministries (e.g., Ministry of Tourism, Ministry of I&B, Ministry of Health, Ministry of Ayush).",
    "implementingAuthority": "Respective Nodal Ministries and Departments for the 12 Champion Services Sectors",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "Enterprises, institutions, and professionals operating across the 12 designated Champion Services Sectors in India",
    "financialParameters": "Central fund allocations distributed across 12 line ministries to execute sector-specific infrastructure, technology upgradation, international branding, and skill development schemes",
    "objective": "Harness the growth potential of India's services economy, expand global market share of Indian services exports, generate high-skill employment, and build world-class digital, medical, logistics, and tourism infrastructure.",
    "coverage": "Pan-India across the 12 identified sectors: IT & ITeS, Tourism & Hospitality, Medical Value Travel, Transport & Logistics, Accounting & Finance, Audio-Visual, Legal, Communication, Construction & Engineering, Environmental, Financial, and Educational Services.",
    "incentives": "Interventions executed through dedicated sub-schemes (e.g., Audio-Visual Co-production incentives, Medical Tourism portals, Legal tech modernization) by respective administrative ministries.",
    "howToUnderstand": "This is an umbrella government policy where 12 ministries receive dedicated funds to modernize and promote 12 key Indian service industries (like IT, tourism, healthcare, logistics, and animation) globally.",
    "registrationProcess": [
      "Identify the relevant sub-scheme administered by the specific nodal ministry for the services sector.",
      "Review eligibility criteria and sector guidelines published on the respective ministry portal.",
      "Submit project proposal or incentive application through the ministry's designated portal.",
      "Undergo technical appraisal and receive approved sectoral support or incentive benefits."
    ],
    "requiredDocuments": [
      "Entity Incorporation Certificate, GST Registration, and PAN Card",
      "Services Export Promotion Council (SEPC) or relevant sectoral council membership",
      "Detailed Project Proposal / Sectoral Activity Report with audited financial statements",
      "Accreditation or statutory licenses relevant to the specific service domain (e.g., NABH for healthcare)"
    ],
    "importantConditions": [
      "CSSS is an umbrella policy architecture executed through disparate ministry-level sub-schemes; there is no single generic application form.",
      "Funds are utilized strictly in accordance with approved sectoral expenditure guidelines."
    ],
    "exclusions": [
      "General trading entities not involved in providing eligible value-added services.",
      "Unregistered or non-compliant commercial entities."
    ],
    "faqs": [
      {
        "question": "What are the 12 Champion Services Sectors?",
        "answer": "The 12 sectors are IT & ITeS, Tourism & Hospitality, Medical Value Travel, Transport & Logistics, Accounting & Finance, Audio-Visual Services, Legal Services, Communication Services, Construction & Engineering, Environmental Services, Financial Services, and Education Services."
      },
      {
        "question": "Is CSSS a direct cash investment scheme for retail investors?",
        "answer": "No. It is a strategic inter-ministerial policy framework funding industry-specific infrastructure, skill initiatives, and export promotion programs."
      }
    ]
  },
  {
    "id": "sch-45",
    "title": "TIES Scheme - Trade Infrastructure for Export Scheme",
    "slug": "ties-export-infrastructure",
    "description": "Central financial assistance scheme providing grants-in-aid (up to ₹20 Crore per project) to Central and State Government agencies / their Joint Ventures for establishing export-oriented common trade infrastructure such as testing labs, cold chains, border trade facilitation centers, and certification facilities.",
    "authority": "Department of Commerce, Ministry of Commerce and Industry",
    "category": "Export Infrastructure",
    "status": "ACTIVE / CALLS FOR PROPOSALS",
    "sourceUrl": "https://commerce.gov.in/trade-promotion/trade-infrastructure-for-export-scheme-ties",
    "sourceAuthority": "Department of Commerce, Ministry of Commerce and Industry",
    "verificationStatus": "VERIFIED",
    "eligibility": "Central and State Government agencies, statutory bodies, public sector enterprises, Export Promotion Councils (EPCs), and Joint Ventures with majority government equity participation.",
    "benefits": "Financial grant-in-aid bridging capital expenditure for setting up shared export laboratories, irradiation centers, pre-shipment inspection facilities, and marine/agricultural logistics centers.",
    "applicationProcess": "Eligible implementing agencies submit Detailed Project Reports (DPRs) through the Department of Commerce TIES portal during notified proposal submission cycles.",
    "implementingAuthority": "Empowered Committee on TIES / Department of Commerce",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "Central and State Government Agencies, State Industrial Development Corporations, Port Trusts, Export Promotion Councils, and Apex Trade Bodies developing export infrastructure",
    "financialParameters": "Grant-in-aid assistance normally up to 50% of the total infrastructure project cost (capped at ₹20 Crore per project); up to 80% of project cost for North-Eastern and Himalayan States",
    "objective": "Overcome infrastructure bottlenecks for Indian exports, create robust common trade infrastructure (laboratories, cargo terminals, packhouses, border facilitation centers), and ensure high product quality compliance for global trade.",
    "coverage": "Pan-India across designated export zones, major transport corridors, coastal ports, and border trade posts.",
    "incentives": "Phased grant-in-aid installments released against validated construction milestones, tool installation, and physical progress audits.",
    "howToUnderstand": "This program gives government grants (up to ₹20 Crore) to state agencies and public bodies to build shared export infrastructure like food testing labs, cargo terminals, and cold storage at borders and ports.",
    "registrationProcess": [
      "Eligible government agency or EPC prepares Detailed Project Report (DPR) with export viability analysis.",
      "Submission of project proposal to the TIES Secretariat in the Department of Commerce.",
      "Technical evaluation by Project Appraisal Committee (PAC) and final approval by the Empowered Committee (EC).",
      "Execution of Memorandum of Agreement and release of grant installments tied to physical milestones."
    ],
    "requiredDocuments": [
      "Detailed Project Report (DPR) with bill of quantities, technical drawings, and export impact analysis",
      "Land Ownership / Possession Certificate in the name of the implementing agency",
      "State Government / Board Approval and Co-Financing Commitment Letters",
      "Statutory Clearances (environmental, building permits, utility approvals)"
    ],
    "importantConditions": [
      "Grant-in-aid cannot be utilized for land acquisition costs or ongoing administrative/operational expenses.",
      "Infrastructure created must be accessible to all exporters on transparent, non-discriminatory user-fee terms."
    ],
    "exclusions": [
      "Private commercial entities lacking majority government equity participation.",
      "General commercial real estate or non-export related industrial developments."
    ],
    "faqs": [
      {
        "question": "Can a private individual or private company directly receive a TIES grant?",
        "answer": "No. TIES grants are exclusively sanctioned to Central/State Government agencies, statutory bodies, Export Promotion Councils, or government joint ventures creating public export infrastructure."
      },
      {
        "question": "What is the maximum grant ceiling under TIES?",
        "answer": "The maximum financial assistance under TIES is ₹20 Crore per project, subject to a limit of 50% of the project cost (80% for North-Eastern and Himalayan States)."
      }
    ]
  },
  {
    "id": "sch-46",
    "title": "Scheme for Development of Coastal Shipping and Inland Water Transport Logistics",
    "slug": "coastal-shipping-logistics-scheme",
    "description": "Central sector infrastructure initiative under the Ministry of Ports, Shipping and Waterways providing capital grants and viability gap support for developing coastal berths, Ro-Ro/Ro-Pax jetties, river cargo terminals, and fairway infrastructure along National Waterways and coastal shipping routes.",
    "authority": "Ministry of Ports, Shipping and Waterways (MoPSW)",
    "category": "Maritime & Riverine Logistics",
    "status": "ACTIVE / ONGOING IMPLEMENTATION",
    "sourceUrl": "https://shipmin.gov.in",
    "sourceAuthority": "Ministry of Ports, Shipping and Waterways / IWAI",
    "verificationStatus": "VERIFIED",
    "eligibility": "State Maritime Boards, Major Port Authorities, State Transport Departments, and authorized Public-Private Partnership (PPP) concessionaires.",
    "benefits": "Direct capital subsidies for constructing coastal passenger/cargo jetties, capital dredging, navigation aids, and multimodal river ports; reduced fuel consumption and freight carbon intensity.",
    "applicationProcess": "Proposals submitted by State Governments, Port Trusts, and Maritime Boards to MoPSW / IWAI under Sagarmala and National Waterway development guidelines.",
    "implementingAuthority": "Inland Waterways Authority of India (IWAI) / Sagarmala Development Company Limited (SDCL)",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "State Maritime Boards, Port Authorities, Inland Waterway Operators, and Logistics Concessionaires operating coastal and river freight services",
    "financialParameters": "Central financial assistance of up to 50% of project cost for coastal berths/jetties (up to ₹30-50 Crore per project under Sagarmala) and 100% funding for central inland waterways navigation infrastructure",
    "objective": "Shift bulk cargo and passenger transport from congested road/rail networks to energy-efficient coastal and inland waterway modes, lower national logistics costs, and develop multimodal river terminals.",
    "coverage": "Designated coastal states, Major/Non-Major Ports, and operational National Waterways (NW-1 Ganga, NW-2 Brahmaputra, NW-3 West Coast Canal, etc.).",
    "incentives": "Capital grant releases linked to physical engineering milestones under Sagarmala and the Jal Marg Vikas Project.",
    "howToUnderstand": "A major government infrastructure program funding the construction of ferry jetties, river ports, and coastal cargo berths to move heavy cargo and passengers on rivers and coastlines cheaply and cleanly.",
    "registrationProcess": [
      "State Maritime Board or Port Trust prepares DPR for coastal berth or inland terminal.",
      "Submission of proposal to the Sagarmala / MoPSW appraisal committee.",
      "Technical clearance and fund sanction by the Ministry of Ports, Shipping and Waterways.",
      "Implementation of terminal construction, fairway dredging, and installation of navigational aids."
    ],
    "requiredDocuments": [
      "Comprehensive Techno-Economic Feasibility Report (TEFR) and Detailed Project Report (DPR)",
      "Coastal Regulation Zone (CRZ) and Environmental Clearances",
      "Hydrographic and Bathymetric Survey Reports",
      "Co-funding assurance letter from State Government / Port Authority"
    ],
    "importantConditions": [
      "Projects must demonstrate minimum traffic volume projections and freight diversion feasibility.",
      "Terminal facilities must offer open-access navigation and standardized pilotage tariffs."
    ],
    "exclusions": [
      "Standalone pleasure yacht clubs or exclusive private non-cargo developments.",
      "Unapproved modifications to natural coastal ecosystems violating CRZ notifications."
    ],
    "faqs": [
      {
        "question": "What is the primary objective of coastal shipping and inland waterway schemes?",
        "answer": "To promote fuel-efficient, economical, and eco-friendly freight and passenger movement by building river ports, Ro-Ro jetties, and coastal berths across India's waterways and coastlines."
      },
      {
        "question": "Is this a retail investment product for individuals?",
        "answer": "No. It is a national public infrastructure initiative funding public port agencies and river authorities to build transport infrastructure."
      }
    ]
  },
  {
    "id": "sch-47",
    "title": "PM GatiShakti National Master Plan Logistics Infrastructure Support",
    "slug": "pm-gatishakti-logistics",
    "description": "National digital master planning platform and institutional framework integrating 16+ infrastructure ministries on a dynamic GIS platform (developed by BISAG-N) for synchronized multimodal connectivity planning, holistic infrastructure design, and rapid inter-ministerial project clearance.",
    "authority": "Department for Promotion of Industry and Internal Trade (DPIIT), Ministry of Commerce and Industry",
    "category": "Multimodal Logistics Planning",
    "status": "ACTIVE / OPERATIONAL PLATFORM",
    "sourceUrl": "https://dpiit.gov.in/logistics-division",
    "sourceAuthority": "DPIIT / PM GatiShakti National Master Plan Portal (gatishakti.gov.in)",
    "verificationStatus": "VERIFIED",
    "eligibility": "Central Ministries, State Government line departments, Union Territory administrations, and infrastructure planning agencies.",
    "benefits": "Comprehensive geospatial visualization of 1400+ layers of infrastructure data; rapid unified project appraisals via the Network Planning Group (NPG); unified last-mile and first-mile connectivity planning for industrial corridors.",
    "applicationProcess": "Government agencies and infrastructure project developers submit major infrastructure proposals through the Network Planning Group (NPG) institutional mechanism on the GatiShakti portal.",
    "implementingAuthority": "Network Planning Group (NPG) / Logistics Division, DPIIT / BISAG-N",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "Central Ministries, State Governments, Project Implementing Agencies (NHAI, Indian Railways, MoPSW, MoCA), and Infrastructure Developers",
    "financialParameters": "Institutional and GIS-planning framework; financial assistance enabled via the Special Assistance to States for Capital Investment scheme (50-year interest-free capital loans for GatiShakti-aligned projects)",
    "objective": "Eliminate inter-departmental silos in infrastructure execution, optimize logistics networks, synchronize road-rail-port-airway connectivity, cut national logistics costs to GDP, and speed up critical industrial infrastructure delivery.",
    "coverage": "Pan-India across all 28 States and 8 Union Territories with comprehensive multi-layer GIS spatial mapping.",
    "incentives": "States access dedicated 50-year interest-free capital loan allocations from the Central Government for undertaking GatiShakti-synchronized connectivity projects.",
    "howToUnderstand": "PM GatiShakti is an advanced digital satellite-mapping portal used by government departments to plan roads, railway tracks, pipelines, and electricity cables together so roads aren't dug up repeatedly and cargo moves seamlessly.",
    "registrationProcess": [
      "Project sponsoring ministry uploads proposed project alignment on the PM GatiShakti GIS platform.",
      "Spatial analysis conducted against existing ecological layers, forest zones, rail tracks, and utilities.",
      "Evaluation and synchronization by the inter-ministerial Network Planning Group (NPG).",
      "Issuance of NPG alignment clearance for Cabinet / ministry project sanction and execution."
    ],
    "requiredDocuments": [
      "Project Concept Report with spatial coordinates and GIS alignment shapefiles",
      "Multimodal connectivity gap analysis and freight demand assessment",
      "Inter-departmental utility synchronization plan (power lines, gas pipes, optical fiber)",
      "Environmental and Social Impact preliminary evaluation"
    ],
    "importantConditions": [
      "All major central infrastructure projects (>₹500 Crore) must undergo prior review by the Network Planning Group (NPG) on the GatiShakti platform.",
      "State-level projects seeking Special Assistance funding must align strictly with GatiShakti State Master Plan layers."
    ],
    "exclusions": [
      "Direct retail commercial subsidies or individual personal financing.",
      "Projects planned outside the unified national geospatial planning framework."
    ],
    "faqs": [
      {
        "question": "What is PM GatiShakti?",
        "answer": "PM GatiShakti is a GIS-based digital national master plan that unifies infrastructure planning across 16+ ministries to ensure synchronized execution of roads, railways, ports, airports, and utilities."
      },
      {
        "question": "Can private businesses get direct cash subsidies from the PM GatiShakti platform?",
        "answer": "No. PM GatiShakti is a planning and institutional synchronization framework, not a direct cash disbursement scheme for private businesses."
      }
    ]
  },
  {
    "id": "sch-48",
    "title": "National Infrastructure Pipeline (NIP) Project Financing Facilitation",
    "slug": "national-infrastructure-pipeline",
    "description": "Strategic national infrastructure investment roadmap mapping over 9,000 greenfield and brownfield infrastructure projects with an estimated capital outlay exceeding ₹111 Lakh Crore across energy, transport, urban, water, and digital sectors to attract institutional, sovereign, and private investment.",
    "authority": "Department of Economic Affairs (DEA), Ministry of Finance",
    "category": "Infrastructure Investment Pipeline",
    "status": "ACTIVE / STRATEGIC PIPELINE TRACKER",
    "sourceUrl": "https://indiainvestmentgrid.gov.in/national-infrastructure-pipeline",
    "sourceAuthority": "Department of Economic Affairs, Ministry of Finance / India Investment Grid (IIG)",
    "verificationStatus": "VERIFIED",
    "eligibility": "Central ministries, State Governments, municipal bodies, and private concessionaires sponsoring qualifying infrastructure projects with capital outlays typically >₹100 Crore.",
    "benefits": "Direct digital access for global and domestic investors to bankable, shovel-ready infrastructure projects via the India Investment Grid (IIG); coordinated debt financing through NaBFID, NIIF, and multilateral development banks.",
    "applicationProcess": "Project sponsoring public authorities and concessionaires register and update project profiles on the India Investment Grid (indiainvestmentgrid.gov.in).",
    "implementingAuthority": "NIP Task Force / India Investment Grid (IIG) / DPIIT / NIIF",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "Global Sovereign Wealth Funds, Pension Funds, Infrastructure Investment Trusts (InvITs), Commercial Banks, and EPC/PPP Infrastructure Developers",
    "financialParameters": "Aggregate investment pipeline target of ₹111+ Lakh Crore financed through Central Budget (39%), State Budgets (39%), and Private Sector Investments (22%)",
    "objective": "Provide comprehensive project visibility to global and domestic investors, enhance project preparation quality, coordinate infrastructure financing, and build world-class economic and social infrastructure across India.",
    "coverage": "Pan-India across energy (24%), roads (19%), urban development (16%), railways (13%), digital communications, and social infrastructure.",
    "incentives": "Tax exemptions on dividend, interest, and long-term capital gains for notified Sovereign Wealth Funds and Foreign Pension Funds investing in NIP infrastructure assets.",
    "howToUnderstand": "NIP is a national catalog of India's biggest mega-projects (highways, solar parks, metro systems, airports) totaling over ₹111 Lakh Crore, helping banks and global investment funds choose which projects to finance.",
    "registrationProcess": [
      "Sponsoring ministry or state agency registers project on the India Investment Grid (IIG).",
      "Upload Detailed Project Report (DPR), financing structure, and concession terms.",
      "NIP Task Force / DEA reviews project readiness and tracks milestone delivery.",
      "Global and domestic institutional investors connect directly with project promoters via IIG."
    ],
    "requiredDocuments": [
      "Detailed Project Report (DPR) and Concession Agreement (for PPP projects)",
      "Statutory Clearances (Land Acquisition, Environmental Clearance, Forest Clearance)",
      "Financial Model, Debt-Equity Structure, and Revenue Projection Model",
      "Cabinet / Ministry Administrative Approval"
    ],
    "importantConditions": [
      "Projects listed on NIP must possess clear capital expenditure roadmaps and standardized monitoring milestones.",
      "Data must be updated dynamically on the India Investment Grid portal by project authorities."
    ],
    "exclusions": [
      "Micro-scale commercial ventures or non-infrastructure commercial projects.",
      "Unverified projects lacking baseline feasibility studies or land clearance roadmaps."
    ],
    "faqs": [
      {
        "question": "What is the National Infrastructure Pipeline (NIP)?",
        "answer": "NIP is a comprehensive national database of over 9,000 infrastructure projects worth over ₹111 Lakh Crore across energy, transport, water, and urban sectors designed to guide government and private capital expenditure."
      },
      {
        "question": "Can an individual invest in NIP directly like a mutual fund?",
        "answer": "No. NIP is a project pipeline tracker. Individuals participate in infrastructure development through capital market instruments like Infrastructure Investment Trusts (InvITs) or infrastructure bonds."
      }
    ]
  },
  {
    "id": "sch-49",
    "title": "Vivad se Vishwas II - Settlement of Contractual Disputes in Public Procurement",
    "slug": "vivad-se-vishwas-contract-disputes",
    "description": "Voluntary one-time dispute resolution scheme introduced by the Department of Expenditure (Ministry of Finance) to settle pending contractual and procurement disputes with Central Government ministries, departments, CPSEs, and autonomous bodies by offering standardized settlement terms.",
    "authority": "Department of Expenditure, Ministry of Finance",
    "category": "Contractual Dispute Settlement",
    "status": "VOLUNTARY DISPUTE SETTLEMENT SCHEME (Processing & Resolution Active)",
    "sourceUrl": "https://doe.gov.in",
    "sourceAuthority": "Department of Expenditure, Ministry of Finance / GeM Portal",
    "verificationStatus": "VERIFIED",
    "eligibility": "Contractors and suppliers having contractual disputes with central government procuring entities where a Court Award or Arbitral Award was passed on or before the notified cut-off dates.",
    "benefits": "Fast-track resolution of stuck claims without protracted litigation; guaranteed payout of 65% to 85% of arbitral or court awards upon mutual settlement; release of withheld bank guarantees and security deposits.",
    "applicationProcess": "Claims were submitted electronically on the dedicated Vivad se Vishwas II module on the Government e-Marketplace (GeM) portal (gem.gov.in).",
    "implementingAuthority": "Government e-Marketplace (GeM) & Procuring Central Ministries / CPSEs",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "Private and Public Contractors, Vendors, Suppliers, and Concessionaires having unresolved contractual disputes with Central Government organizations",
    "financialParameters": "Settlement offer of up to 85% of net awarded amount for Court Awards passed on or before 30.04.2023, and up to 65% of net awarded amount for Arbitral Awards passed on or before 31.01.2023",
    "objective": "Resolve long-pending commercial and procurement disputes between government entities and private contractors, clear court and arbitral dockets, unlock stuck commercial liquidity, and foster a business-friendly contracting environment.",
    "coverage": "All Central Ministries, Attached Departments, Central Public Sector Enterprises (CPSEs), Public Sector Banks, and Central Autonomous Bodies.",
    "incentives": "Standardized, non-negotiable settlement payouts released directly through the GeM portal by procuring entities upon execution of settlement agreements.",
    "howToUnderstand": "This is a government legal settlement program (not an investment or subsidy) that pays businesses 65% to 85% of their court- or arbitration-awarded money right away if both sides agree to end their pending legal fight.",
    "registrationProcess": [
      "Contractor logs into the GeM portal and accesses the Vivad se Vishwas II module.",
      "Submit dispute details, copy of Court/Arbitral award, and calculation of settlement claim.",
      "Procuring Government Entity verifies claim eligibility and issues formal Settlement Offer.",
      "Contractor accepts settlement offer and executes standard Settlement Agreement and court withdrawal.",
      "Procuring entity releases settlement payment directly to contractor's bank account."
    ],
    "requiredDocuments": [
      "Copy of original Procurement Contract / Agreement with Central Government entity",
      "Certified copy of Court Award or Arbitral Award with proof of date of passing",
      "Computation sheet of awarded principal and eligible interest up to the cut-off date",
      "Affidavit agreeing to unconditionally withdraw all pending appeals and legal claims"
    ],
    "importantConditions": [
      "This is a dispute settlement mechanism strictly for public procurement disputes; it is NOT an investment scheme or subsidy.",
      "Claims must involve Central Government organizations or CPSEs; international commercial arbitrations held overseas were excluded."
    ],
    "exclusions": [
      "Disputes involving ongoing criminal proceedings, economic offences, or CBI/ED investigations.",
      "Disputes where the arbitral or court award was passed after the designated scheme cut-off dates."
    ],
    "faqs": [
      {
        "question": "What is Vivad se Vishwas II?",
        "answer": "It is a government dispute resolution scheme designed to settle pending contractual litigation and arbitration claims in public procurement by offering contractors 65% to 85% of awarded amounts to end court cases."
      },
      {
        "question": "Is Vivad se Vishwas II a business investment subsidy?",
        "answer": "No. It is purely a legal settlement framework for resolving commercial disputes arising from public procurement contracts with government departments."
      }
    ]
  },
  {
    "id": "sch-50",
    "title": "National Single Window System (NSWS) Clearances Facilitation",
    "slug": "national-single-window-system",
    "description": "Unified digital regulatory facilitation platform developed by DPIIT and Invest India serving as a single-window digital gateway for businesses to identify, apply for, track, and obtain pre-establishment and pre-operation regulatory approvals across 30+ Central Ministries and 30+ State/UT governments.",
    "authority": "Department for Promotion of Industry and Internal Trade (DPIIT), Ministry of Commerce and Industry",
    "category": "Regulatory & Investor Facilitation",
    "status": "ACTIVE / OPERATIONAL PLATFORM",
    "sourceUrl": "https://www.nsws.gov.in",
    "sourceAuthority": "DPIIT / Invest India (nsws.gov.in)",
    "verificationStatus": "VERIFIED",
    "eligibility": "Any individual entrepreneur, partnership, LLP, private limited company, or foreign enterprise establishing or operating a commercial enterprise in India.",
    "benefits": "Access to intelligent Know Your Approvals (KYA) tool identifying exact licenses required for a specific business; Common Application Form (CAF) auto-populating recurring company details; digital document repository and centralized dashboard tracking.",
    "applicationProcess": "Direct online registration and application through the National Single Window System portal (nsws.gov.in).",
    "implementingAuthority": "Invest India / DPIIT",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "All domestic and international investors, corporate enterprises, startups, and MSMEs setting up or expanding business operations in India",
    "financialParameters": "Digital facilitation platform; provides smart 'Know Your Approvals' (KYA) engine, single common application forms, and unified payment gateways without charging platform service fees",
    "objective": "Eliminate the need for investors to visit multiple ministry and state government websites, reduce regulatory compliance burdens, provide transparency in license processing times, and streamline ease of doing business in India.",
    "coverage": "Pan-India integration spanning 30+ Central Government Ministries/Departments and 30+ State/UT single window portals.",
    "incentives": "Time-bound clearance processing by line ministries with deemed approval frameworks where notified by state/central regulations.",
    "howToUnderstand": "NSWS is an online government super-portal where businesses can get all their required factory, environment, labor, and company licenses in one place without visiting 30 different government websites.",
    "registrationProcess": [
      "Register on NSWS (nsws.gov.in) using PAN and digital signature / Aadhaar verification.",
      "Run the 'Know Your Approvals' (KYA) module by answering business sector, location, and operational questions.",
      "System generates customized checklist of mandatory central and state licenses.",
      "Fill Common Application Form (CAF) and submit integrated clearance applications.",
      "Track approval status in real time and download issued licenses from the centralized dashboard."
    ],
    "requiredDocuments": [
      "Certificate of Company Incorporation / LLP Agreement / Partnership Deed",
      "PAN Card, Aadhaar / Passport of Directors / Authorized Signatory",
      "Site Layout Plan, Land Possession Documents / Lease Deed",
      "Detailed Project Report (DPR) and manufacturing process flow chart"
    ],
    "importantConditions": [
      "NSWS is a digital licensing and approvals facilitation platform; it does NOT provide direct cash subsidies or investment returns.",
      "Investors must pay the statutory government licensing fees prescribed by respective regulatory authorities."
    ],
    "exclusions": [
      "This is not a financial subsidy or investment fund; it is a regulatory clearance platform.",
      "Illegal or prohibited commercial activities under Indian law."
    ],
    "faqs": [
      {
        "question": "What is the purpose of the National Single Window System (NSWS)?",
        "answer": "NSWS is a digital platform that enables investors and businesses to apply for, track, and obtain all necessary central and state government clearances, licenses, and permits from a single portal."
      },
      {
        "question": "Does NSWS provide financial grants to startups?",
        "answer": "No. NSWS is a regulatory clearance and licensing gateway. It streamlines approvals for businesses but is not a financial cash grant scheme."
      }
    ]
  },
  {
    "id": "sch-51",
    "title": "In-House R&D Unit Recognition and Custom Duty Exemption Scheme",
    "slug": "in-house-rd-unit-recognition",
    "description": "Statutory accreditation programme administered by the Department of Scientific and Industrial Research (DSIR) granting formal recognition to in-house industrial R&D units and providing fiscal benefits including customs duty exemptions on imported research equipment, consumables, and prototyping tools.",
    "authority": "Department of Scientific and Industrial Research (DSIR), Ministry of Science and Technology",
    "category": "Industrial R&D Accreditation",
    "status": "ACTIVE / OPEN",
    "sourceUrl": "https://www.dsir.gov.in",
    "sourceAuthority": "Department of Scientific and Industrial Research (DSIR)",
    "verificationStatus": "VERIFIED",
    "eligibility": "Companies incorporated in India with dedicated, physically segregated R&D laboratory facilities, qualified full-time scientific/technical personnel, separate R&D accounting ledgers, and proven ongoing R&D activities.",
    "benefits": "Concessional customs duty on imported R&D capital goods, scientific instruments, spares, and prototypes; DSIR recognition acts as a benchmark credential for participating in public R&D grants and collaborative technology missions.",
    "applicationProcess": "Online application submitted through the DSIR portal (dsir.gov.in) with detailed technical and financial disclosures.",
    "implementingAuthority": "R&D by Industry Division, DSIR",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "Manufacturing and technology companies in the private and public sectors maintaining dedicated in-house research and development laboratories in India",
    "financialParameters": "Customs duty exemption / concessional basic customs duty on imported equipment, analytical instruments, consumables, and software dedicated to in-house scientific R&D (under Customs Notification No. 51/96-Customs and amendments)",
    "objective": "Encourage corporate and industrial investments in indigenous research and development, promote domestic technology innovation, support high-tech laboratory infrastructure, and enhance industrial competitiveness.",
    "coverage": "Pan-India across all recognized industrial sectors (chemicals, pharmaceuticals, electronics, automotive, biotech, engineering, and materials).",
    "incentives": "Issuance of DSIR In-House R&D Recognition Certificate and Customs Duty Exemption Certificates enabling duty-free or concessional import clearances.",
    "howToUnderstand": "This program gives official government recognition to corporate R&D laboratories so that companies can import expensive scientific testing machines and lab equipment without paying high customs duties.",
    "registrationProcess": [
      "Company sets up dedicated, physically separate in-house R&D laboratory facility.",
      "Submit online application for DSIR Recognition on the DSIR digital portal.",
      "Technical scrutiny of research projects, staff credentials, and capital equipment by DSIR experts.",
      "Physical site inspection of the R&D laboratory by a DSIR expert committee.",
      "Grant of DSIR Recognition Certificate valid for an initial period of 3 to 5 years."
    ],
    "requiredDocuments": [
      "Certificate of Incorporation, MOA & AOA, and audited financial statements for last 3 years",
      "Layout plan of segregated R&D laboratory premises and photograph of equipment",
      "Itemized list of R&D laboratory equipment, testing instruments, and software licenses",
      "CVs and qualification certificates of full-time scientific and research personnel",
      "Detailed write-up on ongoing and completed R&D projects, patents filed, and publications"
    ],
    "importantConditions": [
      "R&D facilities must be physically segregated from commercial manufacturing/production floors.",
      "Imported duty-exempted equipment must be used strictly for scientific research and cannot be diverted to commercial production."
    ],
    "exclusions": [
      "Routine quality control, commercial testing, market research, or trouble-shooting activities lacking scientific novelty.",
      "Trading companies and service shops without in-house manufacturing or engineering development."
    ],
    "faqs": [
      {
        "question": "What fiscal benefit is provided through DSIR R&D recognition?",
        "answer": "Recognized in-house R&D units are eligible for customs duty exemptions and concessions on scientific equipment, instruments, and consumables imported for research purposes under relevant government notifications."
      },
      {
        "question": "Can routine quality control labs apply for DSIR recognition?",
        "answer": "No. DSIR guidelines strictly require dedicated research and development aimed at new product/process innovation; routine quality control or commercial testing labs are not eligible."
      }
    ]
  },
  {
    "id": "sch-52",
    "title": "Deep Tech Innovation Fund & Startup Seed Support Scheme",
    "slug": "deep-tech-innovation-fund",
    "description": "Technology incubation and early-stage seed financing framework (such as DST NIDHI-SSS and TDB initiatives) providing convertible debt, equity, and soft loans of up to ₹1 Crore through accredited Technology Business Incubators (TBIs) to deep-tech hardware, biotech, and engineering startups commercializing innovative IPR.",
    "authority": "Department of Science and Technology (DST) / Technology Development Board (TDB)",
    "category": "Deep Tech Seed Capital",
    "status": "ACTIVE / THROUGH ACCREDITED TBIs",
    "sourceUrl": "https://dst.gov.in",
    "sourceAuthority": "Department of Science & Technology (DST) / NIDHI-SSS",
    "verificationStatus": "VERIFIED",
    "eligibility": "DPIIT-recognized startups incubated at a DST-supported Technology Business Incubator (TBI) with proprietary deep-tech IP, working prototypes, and minimum 51% Indian promoter shareholding.",
    "benefits": "Patient early-stage risk capital; subsidized access to high-end laboratory equipment, cleanrooms, and testing facilities inside institutional TBIs; technical mentorship from domain scientists.",
    "applicationProcess": "Startups apply directly to the Seed Support Management Committee of their respective DST-recognized Technology Business Incubator (TBI).",
    "implementingAuthority": "National Initiative for Developing and Harnessing Innovations (NIDHI) / DST-accredited TBIs",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "Early-stage Deep Tech, Hardware, Clean Energy, Biomedical, and Advanced Engineering Startups incubated at recognized Technology Business Incubators (TBIs)",
    "financialParameters": "Seed capital support ranging from ₹25 Lakh up to ₹1 Crore per startup provided as soft loan, convertible debentures, or direct equity via accredited TBIs",
    "objective": "Bridge the high-risk financing valley of death for deep-technology startups, enable physical prototyping and pilot validation, and foster commercialization of indigenous patents and scientific breakthroughs.",
    "coverage": "Pan-India across recognized academic and institutional Technology Business Incubators (IITs, IISc, NITs, and national research centers).",
    "incentives": "Disbursement of seed funding tranches linked to product prototyping, field validation, and intellectual property filing milestones.",
    "howToUnderstand": "This is early-stage seed funding (up to ₹1 Crore) provided through top university incubators (like IITs) to help deep-tech and hardware startups build and test physical prototypes of their inventions.",
    "registrationProcess": [
      "Startup obtains incubation status at a recognized DST/TBI center.",
      "Submit Seed Support application with business plan, technology readiness level (TRL), and budget.",
      "Pitch proposal before the TBI Seed Support Management Committee (SSMC).",
      "Execution of investment agreement (convertible note, debt agreement, or equity term sheet).",
      "Milestone-linked disbursement of seed capital to company bank account."
    ],
    "requiredDocuments": [
      "Certificate of Incorporation and DPIIT Startup Recognition Certificate",
      "Detailed Pitch Deck, Business Plan, and IP ownership/patent filing proofs",
      "Audited Financials, Cap Table, and Bank Statements",
      "Formal Incubation Agreement with host Technology Business Incubator"
    ],
    "importantConditions": [
      "The startup must be physically or virtually incubated at a qualifying TBI and develop proprietary technology.",
      "Funds must be utilized strictly for product prototyping, testing, clinical trials, certification, and initial market validation."
    ],
    "exclusions": [
      "Pure consumer service aggregators, basic trading, or non-technical e-commerce models lacking proprietary deep-tech IP.",
      "Startups that have already raised substantial late-stage venture capital."
    ],
    "faqs": [
      {
        "question": "What is the funding structure of NIDHI-Seed Support Scheme (SSS)?",
        "answer": "Funding is provided through accredited TBIs up to ₹1 Crore per startup in the form of soft debt, convertible debentures, or minority equity to fund high-risk prototyping and trials."
      },
      {
        "question": "Can any startup apply directly to the central ministry for seed funding?",
        "answer": "No. Applications must be routed through recognized Technology Business Incubators (TBIs) where the startup is formally incubated."
      }
    ]
  },
  {
    "id": "sch-53",
    "title": "BioRIDE - Biotechnology Research Innovation and Entrepreneurship Development",
    "slug": "bioride-biotech-entrepreneurship",
    "description": "Unified central umbrella scheme approved by the Union Cabinet with an outlay of ₹9,197 Crore integrating biotechnology initiatives into three key pillars: Biotechnology Research & Development, Industrial & Entrepreneurship Development (via BIRAC), and Biomanufacturing & Biofoundry development.",
    "authority": "Department of Biotechnology (DBT), Ministry of Science and Technology",
    "category": "Biotechnology & Biomanufacturing",
    "status": "ACTIVE / ONGOING (Cabinet Approved Unified Framework)",
    "sourceUrl": "https://dbtindia.gov.in",
    "sourceAuthority": "Department of Biotechnology (DBT) / BIRAC (birac.nic.in)",
    "verificationStatus": "VERIFIED",
    "eligibility": "Indian biotechnology startups (<5 years old for BIG), individual innovators, registered biotech MSMEs, academic researchers, and industrial biomanufacturers with >51% Indian equity ownership.",
    "benefits": "Grant-in-aid funding across all Technology Readiness Levels; access to 80+ bio-incubators and specialized bioprocess prototyping centers; regulatory navigation support via the Regulatory Information & Facilitation Cell (RIFC).",
    "applicationProcess": "Calls for Proposals (CFP) announced twice a year on the BIRAC portal (birac.nic.in) across schemes like BIG, SBIRI, BIPP, and Biomanufacturing challenges.",
    "implementingAuthority": "Biotechnology Industry Research Assistance Council (BIRAC) & DBT",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "Biotech Startups, Researchers, Academic Institutions, Clinical Investigators, and Industrial Bio-manufacturers developing therapeutics, bio-enzymes, bioplastics, and bio-agriculture products",
    "financialParameters": "Comprehensive grants-in-aid, milestone funding, and equity support across early idea discovery (BIG grant up to ₹50 Lakh), commercial development (SBIRI/BIPP), and biomanufacturing scale-up facilities",
    "objective": "Accelerate indigenous biotechnology innovation, establish national biofoundries and biomanufacturing hubs, foster circular bioeconomy, support clinical trials for biopharmaceuticals, and nurture 10,000+ biotech startups in India.",
    "coverage": "Pan-India across university research labs, biotech incubators, clinical trial networks, and industrial biomanufacturing clusters.",
    "incentives": "Non-repayable milestone-based grant disbursements (e.g., BIG grants up to ₹50 Lakh for proof-of-concept; SBIRI/BIPP for contract research and industrial validation).",
    "howToUnderstand": "BioRIDE is a ₹9,197 Crore national government initiative that funds biotech researchers and startups to invent new medicines, bio-plastics, green agricultural biologicals, and build high-tech bio-factories.",
    "registrationProcess": [
      "Register on the BIRAC portal (birac.nic.in).",
      "Select the appropriate scheme call (e.g., Biotechnology Ignition Grant - BIG).",
      "Submit detailed research proposal with scientific methodology, milestones, and IPR plan.",
      "Technical screening by Technical Expert Committee (TEC) and presentation before the Apex Committee.",
      "Execution of Grant-in-Aid Agreement with BIRAC and release of milestone-based grant installments."
    ],
    "requiredDocuments": [
      "DPIIT Startup Recognition Certificate and Company Incorporation details",
      "Detailed Scientific Proposal with project milestones and Gantt chart",
      "IP Status / Patent Search Report and Technology Readiness Level (TRL) declaration",
      "Institutional Biosafety Committee (IBSC) clearance / Ethical Approvals where applicable"
    ],
    "importantConditions": [
      "Applicant entities must maintain domestic Indian ownership (>51% equity held by Indian citizens).",
      "Biological materials and genetic resources utilized must strictly comply with the National Biodiversity Act."
    ],
    "exclusions": [
      "Routine clinical testing laboratories or pharmaceutical trading without novel R&D.",
      "Proposals lacking biological scientific hypothesis or translational potential."
    ],
    "faqs": [
      {
        "question": "What is BioRIDE?",
        "answer": "BioRIDE is a unified national biotech development scheme approved with a ₹9,197 Crore outlay that integrates DBT's scientific research, BIRAC's startup funding (like BIG and SBIRI), and new national biomanufacturing initiatives."
      },
      {
        "question": "What is the maximum grant under BIRAC's Biotechnology Ignition Grant (BIG)?",
        "answer": "Under the BIG scheme component, biotech startups and individual researchers can receive up to ₹50 Lakh as a grant-in-aid for proof-of-concept validation."
      }
    ]
  },
  {
    "id": "sch-54",
    "title": "National Intellectual Property Awareness Mission (NIPAM) & IP Facilitation for MSMEs",
    "slug": "nipam-ipr-facilitation",
    "description": "Intellectual Property facilitation and awareness framework by the Controller General of Patents, Designs and Trade Marks (CGPDTM) and Ministry of MSME, offering up to 80% statutory fee concessions and financial reimbursements (up to ₹5 Lakh for foreign patents / ₹1 Lakh for domestic patents) for MSMEs and startups.",
    "authority": "Office of the CGPDTM, DPIIT & Ministry of Micro, Small and Medium Enterprises",
    "category": "Intellectual Property Support",
    "status": "ACTIVE / ONGOING",
    "sourceUrl": "https://ipindia.gov.in",
    "sourceAuthority": "Intellectual Property India (ipindia.gov.in) / champions.gov.in",
    "verificationStatus": "VERIFIED",
    "eligibility": "Micro, Small, and Medium Enterprises with valid Udyam Registration, DPIIT-recognized Startups, recognized educational institutions, and individual student innovators.",
    "benefits": "Drastically lower statutory IP filing fees; expedited patent examination under Rule 24C of Patent Rules; direct financial reimbursement of legal and statutory fees for approved patents; pro-bono IP facilitation via IP Facilitation Centres (IPFCs).",
    "applicationProcess": "Concession claimed directly during online filing on the IP India portal (ipindia.gov.in); financial reimbursements claimed on the MSME Champions portal (champions.gov.in).",
    "implementingAuthority": "Office of CGPDTM / MSME Development & Facilitation Offices (MSME-DFOs)",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "MSMEs, DPIIT-recognized Startups, Students, Innovators, and Educational Institutions filing Patents, Trademarks, Designs, and Geographical Indications in India and abroad",
    "financialParameters": "Statutory Patent filing fee reduction of up to 80% for MSMEs and startups + reimbursement under MSME Innovative Scheme of up to ₹1 Lakh for domestic patent, ₹5 Lakh for foreign patent, ₹10,000 for trademark, and ₹2 Lakh for GI registration",
    "objective": "Inculcate IP awareness across India, reduce statutory and legal costs of IP protection for small enterprises, expedite patent examinations, and stimulate domestic technological patenting.",
    "coverage": "Pan-India across all academic institutions, MSME clusters, and startup hubs.",
    "incentives": "Upfront 80% statutory fee concession applied automatically on the IP India e-filing portal; post-grant reimbursement disbursed directly through MSME Champions portal.",
    "howToUnderstand": "This program gives small businesses and startups an 80% discount on government patent filing fees and reimburses up to ₹5 Lakh in costs when they register patents to protect their inventions in India and overseas.",
    "registrationProcess": [
      "File patent/trademark application on IP India e-filing portal submitting Udyam / Startup Recognition certificate for 80% fee discount.",
      "Opt for Expedited Examination (Form 18A) on priority grounds.",
      "Upon grant of Patent / Trademark, log into MSME Champions portal.",
      "Upload grant certificate and invoices for reimbursement of statutory and attorney fees.",
      "Direct DBT reimbursement credited to the MSME bank account."
    ],
    "requiredDocuments": [
      "Udyam Registration Certificate / DPIIT Startup Recognition Certificate",
      "Patent / Trademark Application Filing Receipt and Grant Certificate",
      "Itemized invoices and receipt of fees paid to patent attorney / statutory office",
      "Bank Account Details with cancelled cheque of the applicant enterprise"
    ],
    "importantConditions": [
      "Reimbursement claims must be submitted within the specified time window following official grant/registration.",
      "Statutory fee concessions are applied upfront upon verifying valid Udyam / Startup credentials on the IP India portal."
    ],
    "exclusions": [
      "Large corporate enterprises (exceeding MSME turnover/investment limits).",
      "Routine non-patentable copyright applications or expired/abandoned patents."
    ],
    "faqs": [
      {
        "question": "What is the fee reduction for MSMEs and startups filing patents in India?",
        "answer": "MSMEs and DPIIT-recognized startups receive an 80% reduction in statutory patent filing and prosecution fees on the IP India portal."
      },
      {
        "question": "Can an MSME get financial reimbursement for filing international patents abroad?",
        "answer": "Yes. Under the MSME Innovative (IPR) component, eligible MSMEs can claim reimbursement of up to ₹5 Lakh for granted foreign patents."
      }
    ]
  },
  {
    "id": "sch-55",
    "title": "Electronic System Design and Manufacturing (ESDM) Scholarship and Skill Scheme",
    "slug": "esdm-skill-development",
    "description": "Human resource development and technical skill development programme under MeitY providing financial assistance for NSQF-aligned specialized technical training courses (embedded systems, PCB assembly, IoT hardware, VLSI testing) to enhance skilled manpower in the electronics manufacturing sector.",
    "authority": "Ministry of Electronics and Information Technology (MeitY)",
    "category": "Electronics Skill Development",
    "status": "ACTIVE / ONGOING IMPLEMENTATION",
    "sourceUrl": "https://www.meity.gov.in",
    "sourceAuthority": "Ministry of Electronics and Information Technology (MeitY) / NIELIT",
    "verificationStatus": "VERIFIED",
    "eligibility": "Indian youth, students, and diploma/degree holders meeting the entry qualification criteria for specific NSQF Levels (Level 3 to Level 8) in electronics courses.",
    "benefits": "Free or heavily subsidized NSQF-aligned certified technical courses; hands-on practical training in PCB fabrication, surface-mount technology (SMT), testing, and embedded design; placement facilitation with electronics manufacturing companies.",
    "applicationProcess": "Candidates enroll directly at accredited NIELIT centers or ESSCI/TSSC affiliated training institutes registered under the ESDM skill development scheme.",
    "implementingAuthority": "NIELIT / Electronics Sector Skills Council of India (ESSCI) / Telecom Sector Skill Council (TSSC)",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "Students, ITI/Diploma holders, engineering graduates, and youth seeking specialized employment in electronics hardware manufacturing and embedded systems",
    "financialParameters": "100% course fee assistance / reimbursement for SC/ST and Economically Weaker Section (EWS) candidates; 75% course fee reimbursement for General Category candidates upon successful NSQF certification",
    "objective": "Build a skilled technical workforce to support India's growing electronics manufacturing and semiconductor industry, bridge industry-academia skill gaps, and improve employability in ESDM sectors.",
    "coverage": "Pan-India through accredited NIELIT training centers, polytechnics, and ESSCI/TSSC affiliated training partners.",
    "incentives": "Direct course fee reimbursement paid to the accredited training institute upon the student's successful completion and independent third-party assessment.",
    "howToUnderstand": "This is a government skill-training program (not an investment scheme) that covers 75% to 100% of the course fees for young students learning hands-on electronics hardware, circuit design, and chip-testing skills.",
    "registrationProcess": [
      "Candidate selects an NSQF-aligned ESDM course at an accredited NIELIT / ESSCI training center.",
      "Register profile with Aadhaar, educational certificates, and category credentials.",
      "Undergo classroom theory and practical hardware laboratory training.",
      "Appear for independent third-party assessment and certification examination.",
      "Receive NSQF-recognized certification and placement assistance."
    ],
    "requiredDocuments": [
      "Aadhaar Card and Passport-sized Photographs",
      "Educational Qualification Certificates (10th/12th/ITI/Diploma/B.Tech/B.Sc)",
      "Caste / EWS Certificate (for 100% fee waiver eligibility)",
      "Bank Account details of the candidate for direct stipend/reimbursement (if applicable)"
    ],
    "importantConditions": [
      "Course fee reimbursement is strictly subject to the candidate passing the formal third-party certification assessment.",
      "Training institutes must maintain required SMT/PCB laboratory equipment and qualified trainers."
    ],
    "exclusions": [
      "Unaccredited private coaching institutes or non-NSQF aligned generic software courses.",
      "Candidates who have previously availed government fee waivers for the same course level."
    ],
    "faqs": [
      {
        "question": "What is the ESDM Skill Development Scheme?",
        "answer": "It is a MeitY technical training initiative providing financial assistance (75% to 100% course fee subsidies) to train youth in electronics manufacturing, PCB assembly, and embedded systems."
      },
      {
        "question": "Is this an investment or business subsidy scheme?",
        "answer": "No. This is a workforce education and technical skilling program designed for students, job-seekers, and technicians."
      }
    ]
  },
  {
    "id": "sch-56",
    "title": "Scheme for Integrated Cold Chain and Value Addition Infrastructure (Horticulture)",
    "slug": "horticulture-cold-chain-infrastructure",
    "description": "Flagship capital subsidy scheme under the Pradhan Mantri Kisan SAMPADA Yojana (PMKSY) providing financial assistance (up to ₹10 Crore per project) for establishing integrated farm-to-market cold chain infrastructure covering pre-cooling facilities, packhouses, cold storages, reefer vans, and processing centers.",
    "authority": "Ministry of Food Processing Industries (MoFPI)",
    "category": "Agro-Logistics & Cold Chain",
    "status": "ACTIVE / CALLS FOR PROPOSALS",
    "sourceUrl": "https://mofpi.gov.in/pmksy/cold-chain",
    "sourceAuthority": "Ministry of Food Processing Industries (MoFPI)",
    "verificationStatus": "VERIFIED",
    "eligibility": "Integrated Cold Chain projects must encompass at least two of the three components: (a) Farm-Level Infrastructure (pre-cooling, pack-house), (b) Processing Facility, and (c) Distribution Hub with Reefer Vans. Standalone cold storages without farm infrastructure are ineligible.",
    "benefits": "Capital grants-in-aid up to ₹10 Crore per project bridging debt-equity requirements for high-cost refrigerated logistics, IQF (Individual Quick Freezing) lines, and controlled atmosphere (CA) storages.",
    "applicationProcess": "Expressions of Interest (EoI) are invited periodically on the MoFPI SAMPADA online portal (sampada-mofpi.gov.in).",
    "implementingAuthority": "Project Management Agency (PMA) / Ministry of Food Processing Industries",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "Food Processors, Agro-Entrepreneurs, Farmer Producer Organizations (FPOs), Cooperatives, and Private Logistics Companies setting up integrated cold chains",
    "financialParameters": "Grant-in-aid of 35% of eligible storage/transport machinery and 50% of processing machinery cost for General Areas (up to ₹10 Crore per project); 50% storage and 75% processing cost for North-East, Hilly, and ITDP areas",
    "objective": "Create seamless end-to-end cold chain and preservation infrastructure without break from farm gate to retail consumer, reduce post-harvest agricultural losses in perishable produce, and ensure remunerative prices for farmers.",
    "coverage": "Pan-India across agricultural production clusters, horticultural belts, dairy corridors, and marine landing centers.",
    "incentives": "Phased grant releases in 4 installments (25%, 25%, 25%, 25%) linked to physical construction, machinery installation, bank loan drawdown, and commercial commissioning.",
    "howToUnderstand": "This program gives agro-businesses capital grants of up to ₹10 Crore (35% to 75% of machine costs) to build integrated cold chain systems like packhouses, cold rooms, and refrigerated trucks to keep fruits and vegetables fresh from farm to supermarket.",
    "registrationProcess": [
      "Submit online application against published MoFPI EoI on the SAMPADA portal.",
      "Submit Detailed Project Report (DPR), bank appraisal, and statutory clearances.",
      "Appraisal by Technical Committee and formal approval by Inter-Ministerial Approval Committee (IMAC).",
      "Release of 1st grant installment upon deploying 25% promoter equity and 25% bank loan.",
      "Subsequent installments released based on physical engineering progress and joint site inspections."
    ],
    "requiredDocuments": [
      "Detailed Project Report (DPR) with techno-economic feasibility, cold chain logistics blueprint",
      "In-Principle / Final Bank Loan Sanction Letter with Bank Appraisal Report",
      "Registered Land Ownership / Long-Term Lease Documents (minimum 15 years)",
      "Quotations and technical specifications for cold storage, refrigeration, and reefer equipment"
    ],
    "importantConditions": [
      "Project must be an integrated cold chain facility; standalone cold storages without farm-level pre-cooling or packhouses do not qualify under this component.",
      "Term loan from a formal bank/financial institution must equal at least 20% of the total project cost."
    ],
    "exclusions": [
      "Standalone cold storages lacking farm-gate infrastructure or distribution logistics.",
      "Second-hand or refurbished refrigeration and processing equipment."
    ],
    "faqs": [
      {
        "question": "What is the maximum grant amount for an Integrated Cold Chain project?",
        "answer": "The maximum grant-in-aid is ₹10 Crore per project, calculated as 35% to 50% of eligible cost for general areas (and up to 75% for North-Eastern and Himalayan regions)."
      },
      {
        "question": "Can I get a grant for a standalone cold storage building without packhouses or refrigerated transport?",
        "answer": "No. The MoFPI Cold Chain scheme mandates an integrated supply chain comprising at least two core components (farm-level packhouse/pre-cooling, processing, and refrigerated distribution)."
      }
    ]
  },
  {
    "id": "sch-57",
    "title": "Agriculture Infrastructure Fund (AIF) Financing Facility",
    "slug": "agriculture-infrastructure-fund",
    "description": "Pan-India medium-long term debt financing facility with a ₹1 Lakh Crore corpus launched under the Ministry of Agriculture & Farmers Welfare, providing 3% per annum interest subvention on loans up to ₹2 Crore for up to 7 years along with CGTMSE credit guarantee fee coverage for creating post-harvest management infrastructure and community farming assets.",
    "authority": "Department of Agriculture & Farmers Welfare, Ministry of Agriculture and Farmers Welfare",
    "category": "Agri-Infrastructure Credit",
    "status": "ACTIVE / OPEN",
    "sourceUrl": "https://agriinfra.dac.gov.in",
    "sourceAuthority": "Department of Agriculture and Farmers Welfare (agriinfra.dac.gov.in)",
    "verificationStatus": "VERIFIED",
    "eligibility": "Farmers, PACS, Marketing Cooperative Societies, FPOs, SHGs, JLGs, Agri-entrepreneurs, Startups, and Central/State agencies sponsoring post-harvest infrastructure projects.",
    "benefits": "Significant reduction in borrowing interest rates (effective loan rates reduced by 3%); collateral-free financing enabled through government-paid CGTMSE guarantee for loans up to ₹2 Crore; can be converged with other central capital subsidies (such as PMKSY, AMI, MIDH).",
    "applicationProcess": "Direct online registration and loan application submission through the Agriculture Infrastructure Fund portal (agriinfra.dac.gov.in).",
    "implementingAuthority": "Department of Agriculture & Farmers Welfare / NABARD / Scheduled Commercial Banks",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "Primary Agricultural Credit Societies (PACS), Farmer Producer Organizations (FPOs), Agricultural Entrepreneurs, Startups, SHGs, Joint Liability Groups, and Agri-tech businesses",
    "financialParameters": "3% per annum Interest Subvention on bank loans up to ₹2 Crore for a maximum tenure of 7 years; CGTMSE credit guarantee fee paid by Central Government for loans up to ₹2 Crore",
    "objective": "Mobilize medium to long-term debt financing for post-harvest management infrastructure (warehouses, silos, cold rooms, sorting/grading units, assaying labs) and viable community farming assets to reduce farm-gate crop losses and improve farmers' real incomes.",
    "coverage": "Pan-India across all States and Union Territories with state-wise loan allocations from the ₹1 Lakh Crore fund.",
    "incentives": "Direct interest subvention credited by NABARD/Ministry to the lending bank, passing the discounted interest rate directly to the borrower's loan account.",
    "howToUnderstand": "This is a government loan-subsidy scheme that reduces bank loan interest by 3% for up to 7 years on loans up to ₹2 Crore when building farm warehouses, cold storages, grading units, or grain silos.",
    "registrationProcess": [
      "Register on the AIF Portal (agriinfra.dac.gov.in) with Aadhaar and entity details.",
      "Submit Detailed Project Report (DPR) choosing preferred lending bank and branch.",
      "Ministry Project Monitoring Unit (PMU) verifies online application within 7 days.",
      "Application routed digitally to the chosen lending bank for credit appraisal.",
      "Bank sanctions and disburses loan with automatic 3% interest subvention and CGTMSE tagging."
    ],
    "requiredDocuments": [
      "Aadhaar Card, PAN, and Entity Registration (FPO/Cooperative/LLP/Proprietorship)",
      "Detailed Project Report (DPR) with financial cash flow projections and machinery quotes",
      "Land Ownership Documents (Revenue Record / 7/12 extract) or registered long-term lease deed",
      "Bank Account Statements and KYC documents of promoters"
    ],
    "importantConditions": [
      "Interest subvention of 3% is applicable for a maximum period of 7 years and capped up to a loan limit of ₹2 Crore per project.",
      "A single entity can establish up to 25 infrastructure projects at different locations with separate revenue records."
    ],
    "exclusions": [
      "Crop production loans, routine working capital, or purchase of agricultural land.",
      "Projects unrelated to post-harvest management or community farming assets."
    ],
    "faqs": [
      {
        "question": "What is the interest rate benefit under the Agriculture Infrastructure Fund (AIF)?",
        "answer": "Borrowers receive an interest subvention of 3% per annum on bank loans up to ₹2 Crore for a maximum duration of 7 years."
      },
      {
        "question": "Can AIF benefits be combined with other capital subsidy schemes?",
        "answer": "Yes. AIF interest subvention and credit guarantee can be seamlessly converged with central capital subsidy schemes like PMKSY, Agricultural Marketing Infrastructure (AMI), and Sub-Mission on Agricultural Mechanization (SMAM)."
      }
    ]
  },
  {
    "id": "sch-58",
    "title": "Animal Husbandry Infrastructure Development Fund (AHIDF)",
    "slug": "animal-husbandry-infrastructure-fund",
    "description": "Central sector credit-linked financing facility with a ₹29,610 Crore outlay under the Ministry of Fisheries, Animal Husbandry and Dairying providing 3% per annum interest subvention on commercial bank loans for up to 8 years (including up to 2 years moratorium) and up to 25% credit guarantee coverage for investments in dairy processing, meat processing, animal feed plants, and veterinary vaccine/medicine manufacturing.",
    "authority": "Department of Animal Husbandry and Dairying, Ministry of Fisheries, Animal Husbandry and Dairying",
    "category": "Animal Husbandry Infrastructure",
    "status": "ACTIVE / OPEN",
    "sourceUrl": "https://ahidf.udyamimitra.in",
    "sourceAuthority": "Department of Animal Husbandry and Dairying (dahd.nic.in / ahidf.udyamimitra.in)",
    "verificationStatus": "VERIFIED",
    "eligibility": "Individual entrepreneurs, private companies, Section 8 companies, FPOs, MSMEs, and Cooperatives establishing new units or modernizing existing processing plants in dairy, meat, animal feed, breed multiplication, or veterinary vaccines.",
    "benefits": "Low-cost debt financing with 3% interest relief; minimum promoter equity requirement (as low as 10% for micro/small units, 15% for medium units, 25% for other enterprises); credit guarantee backing under Credit Guarantee Fund Trust for Animal Husbandry (CGFTAHI).",
    "applicationProcess": "Online application submitted through SIDBI's dedicated AHIDF portal (ahidf.udyamimitra.in).",
    "implementingAuthority": "Small Farmers Agri-Business Consortium (SFAC) / NABARD / Scheduled Commercial Banks",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "Farmer Producer Organizations (FPOs), Private Companies, MSMEs, Section 8 Companies, Cooperatives, and Individual Entrepreneurs establishing animal husbandry processing units",
    "financialParameters": "Bank loan up to 90% of total project cost with 3% per annum Interest Subvention for up to 8 years (including up to 2 years moratorium); Credit Guarantee coverage up to 25% of the credit facility for MSME borrowers",
    "objective": "Incentivize private and cooperative investments in dairy processing, value-added meat processing, animal feed manufacturing, breed improvement farms, and veterinary pharmaceuticals/vaccines to enhance processing capacity and export competitiveness.",
    "coverage": "Pan-India across all States and Union Territories.",
    "incentives": "Direct quarterly interest subvention transferred directly to the borrower's loan account through participating lending banks.",
    "howToUnderstand": "This program offers business owners a 3% interest discount on bank loans for up to 8 years to set up milk processing plants, animal feed factories, meat packing units, or veterinary medicine facilities.",
    "registrationProcess": [
      "Register on the AHIDF Udyami Mitra Portal (ahidf.udyamimitra.in).",
      "Fill online application form and upload Detailed Project Report (DPR).",
      "Select preferred Scheduled Commercial Bank or financial institution.",
      "Ministry conducts initial screening within 15 days and routes proposal to the lending bank.",
      "Bank sanctions loan and disburses credit with 3% interest subvention and CGFTAHI guarantee."
    ],
    "requiredDocuments": [
      "Detailed Project Report (DPR) with technical specifications, plant layout, and cash flows",
      "Land Ownership / Lease documents (minimum 10 years lease)",
      "Company Registration, PAN, Udyam MSME Certificate, and promoter KYC",
      "Statutory licenses (FSSAI, State Pollution Control Board CTE, or Drug Controller permissions for vaccines)"
    ],
    "importantConditions": [
      "Interest subvention of 3% is provided for a maximum period of 8 years, inclusive of a maximum 2-year moratorium period on principal repayment.",
      "Minimum promoter equity contribution: 10% for Micro & Small units, 15% for Medium enterprises, and 25% for Large corporate units."
    ],
    "exclusions": [
      "Routine cattle or livestock purchase without processing/breeding infrastructure.",
      "Standalone commercial retail shops without processing or manufacturing facilities."
    ],
    "faqs": [
      {
        "question": "What is the interest subvention rate under AHIDF?",
        "answer": "The scheme provides a 3% per annum interest subvention on commercial bank loans for a tenure of up to 8 years (including up to 2 years moratorium)."
      },
      {
        "question": "Which sectors are eligible for financing under AHIDF?",
        "answer": "Eligible sectors include Dairy Processing & Value Addition, Meat Processing & Value Addition, Animal Feed Plants, Breed Multiplication Farms, Animal Waste to Wealth units, and Veterinary Vaccine/Medicine manufacturing."
      }
    ]
  },
  {
    "id": "sch-59",
    "title": "Fisheries and Aquaculture Infrastructure Development Fund (FIDF)",
    "slug": "fisheries-infrastructure-fund",
    "description": "Dedicated infrastructure financing framework with a ₹7,522 Crore corpus administered under the Department of Fisheries providing concessional debt financing through Nodal Loaning Entities (NABARD, NCDC, Scheduled Commercial Banks) with up to 3% per annum interest subvention for establishing public and private fisheries infrastructure.",
    "authority": "Department of Fisheries, Ministry of Fisheries, Animal Husbandry and Dairying",
    "category": "Fisheries & Marine Infrastructure",
    "status": "ACTIVE / OPEN",
    "sourceUrl": "https://fidf.in",
    "sourceAuthority": "Department of Fisheries (dof.gov.in / fidf.in)",
    "verificationStatus": "VERIFIED",
    "eligibility": "State Governments, State Agencies, Fisheries Cooperatives, Collective Groups, FPOs, Micro and Small Enterprises, and Private Commercial Enterprises investing in recognized fisheries infrastructure categories.",
    "benefits": "Subsidized interest rate loans (effective lending rate starting from ~5% per annum after 3% subvention); long repayment tenure of up to 12 years; enables creation of high-capital fish harbors, modern cage farms, and cold chains.",
    "applicationProcess": "Private and cooperative applicants submit proposals on the FIDF portal (fidf.in) / NFDB portal, while public projects are routed through State Fisheries Departments.",
    "implementingAuthority": "National Fisheries Development Board (NFDB) / NABARD / NCDC / Scheduled Banks",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "State Governments, State Cooperatives, Fisheries Federations, Fisheries SHGs, Farmer Producer Organizations (FPOs), and Private Entrepreneurs/Companies in the fisheries sector",
    "financialParameters": "Concessional loans with up to 3% per annum interest subvention through Nodal Loaning Entities (NLEs), with maximum loan repayment tenure up to 12 years (including up to 2 years moratorium)",
    "objective": "Fill critical infrastructure gaps in marine and inland fisheries, modernize fishing harbors and fish landing centers, establish cold chains, hatcheries, fish processing plants, and mariculture infrastructure to double fishers' incomes and boost marine exports.",
    "coverage": "Pan-India across coastal maritime states, inland river basins, reservoirs, and island territories.",
    "incentives": "Up to 3% interest subvention funded by the Central Government, credited directly to the loan accounts via NLEs (NABARD, NCDC, and commercial banks).",
    "howToUnderstand": "This program provides low-interest bank loans (with a 3% interest discount for up to 12 years) to help businesses and cooperatives build modern fishing ports, hatcheries, fish processing factories, and cold storage units.",
    "registrationProcess": [
      "Applicant registers on the FIDF portal (fidf.in) and fills online project proposal.",
      "Submit Detailed Project Report (DPR) with techno-economic feasibility details.",
      "Appraisal by Central Project Monitoring Unit (CPMU) at National Fisheries Development Board (NFDB).",
      "Approval by Central Implementation and Monitoring Committee (CIMC) headed by Secretary (Fisheries).",
      "Nodal Loaning Entity (NABARD/NCDC/Bank) sanctions and disburses loan with interest subvention."
    ],
    "requiredDocuments": [
      "Detailed Project Report (DPR) with technical drawings, bill of quantities, and financial model",
      "Land Ownership / Registered Lease Deed (minimum 15-year lease for private land)",
      "Coastal Regulation Zone (CRZ) and Environmental Clearance certificates (for coastal projects)",
      "Entity Registration, PAN, Audited Financials, and Promoter KYC documents"
    ],
    "importantConditions": [
      "Interest subvention of up to 3% per annum is available for a maximum tenure of 12 years (including up to 2 years moratorium on principal).",
      "The project must fall under eligible fisheries infrastructure categories (such as fish harbors, hatcheries, processing facilities, deep sea vessels, or cold chains)."
    ],
    "exclusions": [
      "Routine purchase of fishing nets or small traditional non-motorized crafts.",
      "Purely non-fisheries commercial ventures."
    ],
    "faqs": [
      {
        "question": "What is the interest subvention provided under FIDF?",
        "answer": "FIDF provides an interest subvention of up to 3% per annum on term loans channeled through NABARD, NCDC, and Scheduled Banks, with repayment tenures up to 12 years."
      },
      {
        "question": "Can private companies and entrepreneurs apply for FIDF loans?",
        "answer": "Yes. Private entrepreneurs, MSMEs, cooperatives, and FPOs are eligible to apply for commercial fisheries infrastructure financing under FIDF."
      }
    ]
  },
  {
    "id": "sch-60",
    "title": "Pradhan Mantri Formalisation of Micro Food Processing Enterprises (PMFME - Capacity Building)",
    "slug": "pmfme-capacity-building",
    "description": "Dedicated human resource, technical skilling, and capacity building component under the PMFME scheme (MoFPI) providing free structured technical training, FSSAI food safety hygiene compliance, packaging design, and enterprise management training to micro-food entrepreneurs, SHG members, and producer collectives.",
    "authority": "Ministry of Food Processing Industries (MoFPI)",
    "category": "Food Processing Capacity Building",
    "status": "ACTIVE / OPEN",
    "sourceUrl": "https://pmfme.mofpi.gov.in",
    "sourceAuthority": "Ministry of Food Processing Industries (MoFPI)",
    "verificationStatus": "VERIFIED",
    "eligibility": "Existing or aspiring micro-food entrepreneurs, SHG members engaged in food processing, and rural youth operating micro-enterprises in food processing sectors.",
    "benefits": "Completely free 50-hour structured training courses covering product-specific food processing technologies (ODOP lines), hygiene standards (FSSAI/GMP), basic financial bookkeeping, digital marketing, and packaging.",
    "applicationProcess": "Entrepreneurs register for training through the PMFME online portal (pmfme.mofpi.gov.in) or connect with their local District Resource Person (DRP) at District Industries Centres (DIC).",
    "implementingAuthority": "NIFTEM (Kundli/Thanjavur) / State Nodal Agencies (SNAs) / District Resource Persons (DRPs)",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "Individual micro-food processing entrepreneurs, Self Help Group (SHG) members, Farmer Producer Organizations (FPOs), and rural youth running food processing units",
    "financialParameters": "100% centrally funded free training programmes, modules, and handholding support through District Resource Persons (DRPs) and national food institutes (NIFTEM / IIFPT)",
    "objective": "Upgrade the technical capabilities and hygiene standards of unorganized micro-food processors, facilitate formal FSSAI licensing and Udyam registrations, improve packaging and shelf-life, and transition micro-units into formally organized enterprises.",
    "coverage": "Pan-India across all 700+ districts under the One District One Product (ODOP) framework.",
    "incentives": "Free institutional certification from NIFTEM/FICSI upon course completion; free handholding support from District Resource Persons (DRPs) for preparing bankable Detailed Project Reports (DPRs) to secure 35% PMFME credit-linked subsidies.",
    "howToUnderstand": "This is a free government training and mentoring service (not a cash grant) where food experts teach small food business owners how to package, preserve, get FSSAI licenses, and write bank loan proposals.",
    "registrationProcess": [
      "Register profile on the PMFME portal (pmfme.mofpi.gov.in).",
      "Select One District One Product (ODOP) or generic food category for capacity building training.",
      "Attend structured online / classroom training conducted by State Nodal Agencies and NIFTEM/IIFPT master trainers.",
      "Undergo assessment and receive certified micro-food processing qualification.",
      "Receive free DPR assistance from DRPs to apply for capital credit-linked grants."
    ],
    "requiredDocuments": [
      "Aadhaar Card and Passport Photo",
      "Udyam Registration / Basic Enterprise Registration (if existing enterprise)",
      "Bank Account details and educational proof (if available)",
      "Self-declaration of running or establishing a micro-food processing enterprise"
    ],
    "importantConditions": [
      "This record represents the dedicated Capacity Building and Training component of PMFME; it does not constitute a standalone cash grant.",
      "Training modules align with the identified One District One Product (ODOP) focus of the respective district."
    ],
    "exclusions": [
      "Medium and large corporate food processing plants.",
      "Non-food manufacturing or purely non-value-added grain trading."
    ],
    "faqs": [
      {
        "question": "What does the PMFME Capacity Building component offer?",
        "answer": "It provides 100% free technical and business management training, FSSAI hygiene education, packaging guidance, and District Resource Person (DRP) mentoring to micro-food processors across India."
      },
      {
        "question": "Is there any fee to attend PMFME capacity building courses?",
        "answer": "No. The training and handholding support under PMFME Capacity Building is provided completely free of cost to eligible micro-food entrepreneurs and SHGs."
      }
    ]
  },
  {
    "id": "sch-61",
    "title": "Production Linked Incentive Scheme for Specialty Carbon Fibre and Composites",
    "slug": "pli-carbon-fibre-composites",
    "description": "National manufacturing incentive and technology development initiative implemented under the Production Linked Incentive (PLI) for Technical Textiles & MMF and the National Technical Textiles Mission (NTTM) to establish indigenous production capacities for aerospace/defense grade carbon fibers, prepregs, and advanced structural composite materials.",
    "authority": "Ministry of Textiles & Department for Promotion of Industry and Internal Trade (DPIIT)",
    "category": "Advanced Materials & Technical Textiles",
    "status": "ACTIVE / ONGOING IMPLEMENTATION",
    "sourceUrl": "https://texmin.nic.in",
    "sourceAuthority": "Ministry of Textiles / National Technical Textiles Mission (NTTM)",
    "verificationStatus": "VERIFIED",
    "eligibility": "Companies incorporated in India meeting prescribed minimum investment thresholds (₹100 Crore or ₹300 Crore under PLI Textiles categories) and achieving required year-on-year incremental sales turnover in eligible specialty technical textile lines.",
    "benefits": "Direct financial incentives disbursed on audited incremental sales; duty exemptions on specialized capital machinery imports; priority R&D co-funding for technology indigenization.",
    "applicationProcess": "Applications submitted online on the Ministry of Textiles PLI portal during active notification windows, accompanied by detailed project reports and bank guarantees.",
    "implementingAuthority": "Ministry of Textiles / Project Management Agency (IFCI Ltd. / NTTM Directorate)",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "Industrial manufacturers and greenfield/brownfield corporate entities setting up commercial manufacturing facilities for carbon fiber, polyacrylonitrile (PAN) precursor, aramid, and advanced composite materials in India",
    "financialParameters": "Sales-linked financial incentive ranging between 3% and 15% on incremental turnover of eligible technical textile/carbon composite products over base year, alongside capital R&D grants under NTTM (up to ₹50 Crore for deep-tech composite indigenous development)",
    "objective": "Overcome 100% import dependency on strategic high-performance carbon fibers, enable self-reliance in aerospace, defense, renewable wind turbine blades, and hydrogen pressure vessels, and establish India as an advanced composite manufacturing hub.",
    "coverage": "Pan-India for eligible manufacturing units incorporated in India.",
    "incentives": "Annual cash incentive installments disbursed post-commercialization based on verified investment milestones and incremental net sales turnover.",
    "howToUnderstand": "This is a major government manufacturing scheme that pays cash incentives (3% to 15% of extra sales) and technology grants to companies that set up factories in India to produce super-strong carbon fibers and composites for aircraft, defense, and wind turbines.",
    "registrationProcess": [
      "Register corporate entity on the Ministry of Textiles PLI / NTTM web portal.",
      "Submit Detailed Project Report (DPR) detailing planned capital expenditure, technology tie-ups, and production milestones.",
      "Undergo techno-economic evaluation by Project Management Agency (PMA).",
      "Issuance of formal Approval Letter by the Empowered Group of Secretaries (EGoS).",
      "Execute capital investment, commence commercial production, and submit annual audited claims for incentive disbursement."
    ],
    "requiredDocuments": [
      "Certificate of Incorporation, Memorandum and Articles of Association",
      "Detailed Project Report (DPR) with audited capital expenditure schedules and source of financing",
      "Technology Licensing Agreements / Technology Transfer documents (if applicable)",
      "Bank Solvency Certificate and Board Resolution approving planned investment",
      "Statutory industrial and environmental approvals (CTE/CTO)"
    ],
    "importantConditions": [
      "Must achieve mandatory cumulative minimum investment and incremental turnover targets within the specified gestation timeline.",
      "Value addition within India must meet minimum prescribed thresholds to prevent pass-through assembly of imported precursors."
    ],
    "exclusions": [
      "Pure trading or non-value-added distribution of imported composite sheets.",
      "Projects failing to satisfy minimum threshold investment criteria within the notified gestation period."
    ],
    "faqs": [
      {
        "question": "What are the primary applications of specialty carbon fiber promoted under this scheme?",
        "answer": "Carbon fibers and advanced composites are vital for aerospace components, defense equipment, space launch vehicles, wind turbine blades, high-pressure hydrogen storage tanks, and high-speed rail cabins."
      },
      {
        "question": "Can an early-stage startup get R&D funding for carbon composite research?",
        "answer": "Yes. Under the National Technical Textiles Mission (NTTM) R&D component, academic institutions and deep-tech startups can apply for research grants for indigenous development of advanced composite materials."
      }
    ]
  },
  {
    "id": "sch-62",
    "title": "National Mission on Interdisciplinary Cyber-Physical Systems (NM-ICPS) - Technology Innovation Hubs",
    "slug": "nm-icps-tech-hubs",
    "description": "Comprehensive national mission implemented by the Department of Science and Technology (outlay ₹3,660 Crore) establishing 25 Technology Innovation Hubs (TIHs) at premier academic institutions (IITs, IISc, IIITs) to translate fundamental research into commercial cyber-physical technologies, deep-tech startups, and industrial solutions.",
    "authority": "Department of Science and Technology (DST), Ministry of Science and Technology",
    "category": "Deep Tech & Cyber-Physical Innovation",
    "status": "ACTIVE / OPEN FOR PROPOSALS & STARTUP COHORTS",
    "sourceUrl": "https://dst.gov.in",
    "sourceAuthority": "Department of Science and Technology (DST) / NM-ICPS (nmicps.in)",
    "verificationStatus": "VERIFIED",
    "eligibility": "Innovators, researchers, faculty members, post-doctoral fellows, and registered early-stage technology startups developing hardware/software solutions within the thematic focus of the respective TIH.",
    "benefits": "Access to state-of-the-art supercomputing and prototyping testbeds; direct non-dilutive translation grants; seed equity investment; corporate pilot matchmaking and technology licensing support.",
    "applicationProcess": "Innovators and startups apply online directly to specific thematic Technology Innovation Hubs (TIHs) via their respective portals or centralized DST calls for proposals.",
    "implementingAuthority": "Mission Implementation Steering Committee (MISC) / NM-ICPS Division, DST / Section 8 Hub Companies",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "Deep-tech Startups, Researchers, Innovators, Academic Institutions, and Industry Partners developing technologies in Artificial Intelligence, Robotics, Quantum Computing, IoT, Autonomous Systems, and Cybersecurity",
    "financialParameters": "Central grant funding of up to ₹100-125 Crore per TIH over 5 years; TIHs offer startup prototyping grants (₹10-25 Lakhs), seed equity investments (₹25-50 Lakhs), entrepreneurship fellowships (₹25,000-50,000/month), and grand challenge awards",
    "objective": "Translate academic research in Cyber-Physical Systems into deployable technologies, foster high-tech entrepreneurship, create deep-tech intellectual property, upskill human resources, and solve critical national problems in healthcare, agriculture, defense, and urban mobility.",
    "coverage": "Pan-India through 25 specialized TIHs located at institutes including IIT Delhi, IIT Bombay, IIT Madras, IIT Kharagpur, IIT Roorkee, IISc Bangalore, and IIIT Hyderabad.",
    "incentives": "Regular rolling calls for incubation, translational research grants, grand challenges, and deep-tech accelerator cohorts managed by individual Section 8 TIH companies.",
    "howToUnderstand": "This is a ₹3,660 Crore national program that set up 25 dedicated technology hubs at India's top IITs and IISc, giving deep-tech startups and researchers up to ₹50 Lakhs in grants, seed funding, and access to advanced robotics/AI labs.",
    "registrationProcess": [
      "Identify the relevant TIH based on technology vertical (e.g., TiHAN IIT Hyderabad for Autonomous Navigation, I-Hub Quantum IISc, ARTPARK IISc for Robotics/AI).",
      "Submit startup application / research translation proposal during open cohort calls.",
      "Technical screening and presentation before the Hub Project Evaluation Committee.",
      "Execution of Incubation / Grant Agreement with the Section 8 Hub Company.",
      "Disbursement of milestone-based funding and access to lab testbeds."
    ],
    "requiredDocuments": [
      "Detailed Technical Proposal outlining Technology Readiness Level (TRL 3+), methodology, and commercialization plan",
      "Pitch Deck, Business Model Canvas, and Intellectual Property disclosure",
      "Company Registration (DPIIT Startup Recognition certificate, if incorporated)",
      "Curriculum Vitae and background of founders / principal investigators"
    ],
    "importantConditions": [
      "Proposed technology must have genuine deep-tech innovation in cyber-physical domains (pure commercial aggregators without technological IP are ineligible).",
      "Recipients must meet milestone-based technical deliverables to receive subsequent funding tranches."
    ],
    "exclusions": [
      "Purely non-technical commercial trading entities or conventional IT services without core cyber-physical IP.",
      "Proposals lacking measurable technological advancement or proof-of-concept validation."
    ],
    "faqs": [
      {
        "question": "What domains are covered by the 25 Technology Innovation Hubs (TIHs)?",
        "answer": "Domains include Artificial Intelligence, Machine Learning, Robotics, Autonomous Vehicles, Quantum Technologies, IoT, Smart Agriculture, Cyber Security, Assistive Technologies, and Advanced Sensor Networks."
      },
      {
        "question": "Is NM-ICPS funding available to student innovators?",
        "answer": "Yes. TIHs offer Student Innovation Fellowships and Entrepreneur-in-Residence (EIR) monthly stipends alongside prototype grants to student innovators and young graduates."
      }
    ]
  },
  {
    "id": "sch-63",
    "title": "NIDHI PRAYAS - Promoting and Accelerating Young and Aspiring Innovators & Startups",
    "slug": "nidhi-prayas-dst",
    "description": "National Initiative for Developing and Harnessing Innovations (NIDHI) PRomoting and Accelerating Young and Aspiring technology innovators (PRAYAS) grant scheme providing non-dilutive financial assistance of up to ₹10 Lakhs to early-stage hardware and technology innovators to convert ideas into tangible physical prototypes.",
    "authority": "National Science & Technology Entrepreneurship Development Board (NSTEDB), Department of Science and Technology (DST)",
    "category": "Startup Prototyping Grant",
    "status": "ACTIVE / CALLS FOR PROPOSALS (Through PRAYAS Centres)",
    "sourceUrl": "https://dst.gov.in",
    "sourceAuthority": "Department of Science and Technology (DST) / SINE IIT Bombay (nidhi-prayas.org)",
    "verificationStatus": "VERIFIED",
    "eligibility": "Indian citizens with an innovative physical/hardware technology concept. Individuals, teams, or registered startup entities (incorporated for less than 3 years with annual turnover not exceeding ₹1 Crore) not having previously received significant prototype funding.",
    "benefits": "Non-dilutive prototype grant of up to ₹10 Lakhs disbursed in milestone tranches; free physical access to state-of-the-art digital fabrication equipment (3D printers, CNC mills, electronics workbenches); patent advisory and commercial incubation.",
    "applicationProcess": "Innovators submit online applications directly to their chosen host PRAYAS Centre during notified cohort application windows on the NIDHI-PRAYAS network.",
    "implementingAuthority": "Project Management Unit (SINE IIT Bombay) / Host PRAYAS Centres (DST-recognized Incubators)",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "Individual Innovators, Student Teams, Aspiring Entrepreneurs, and Early-Stage Startups (incorporated <3 years) developing physical product prototypes",
    "financialParameters": "100% non-dilutive prototyping grant-in-aid of up to ₹10 Lakhs per innovator/startup (zero equity, zero repayment); plus 18 months of free access to PRAYAS Fab Lab prototyping infrastructure and technical mentorship",
    "objective": "Bridge the critical early-stage financing gap between concept/idea (TRL 3) and working proof-of-concept prototype (TRL 5), prevent early dropouts of hardware tech innovators, and foster an indigenous product design culture.",
    "coverage": "Pan-India through over 40+ DST-recognized PRAYAS Centres situated at major universities, IITs, and technology business incubators.",
    "incentives": "100% grant assistance requiring zero promoter co-contribution for raw materials, fabrication, testing, design consulting, and rapid prototyping.",
    "howToUnderstand": "This is a 100% free government grant (up to ₹10 Lakhs) with zero equity taken, designed to help inventors build a working physical prototype of their hardware, robotics, medical device, or clean-tech invention in a certified lab.",
    "registrationProcess": [
      "Identify an active DST-recognized PRAYAS Centre across India.",
      "Submit online prototype proposal detailing concept, bill of materials, milestone roadmap, and budget.",
      "Shortlisting by the PRAYAS Monitoring Committee (PMC) followed by physical/virtual pitch presentation.",
      "Formal grant sanction and signing of PRAYAS Agreement.",
      "Release of initial grant tranche (typically 40%) into a dedicated project bank account and incubation onboarding."
    ],
    "requiredDocuments": [
      "Aadhaar Card / Indian Passport of the Lead Innovator",
      "Concept Note / Technical Design Drawings / Proof of Concept description",
      "Itemized Budget Breakdown for prototype fabrication (tooling, components, fabrication charges)",
      "Certificate of Incorporation and DPIIT Startup Recognition (if applying as a registered entity)",
      "Declaration of not receiving duplicate prototype grants for the same idea"
    ],
    "importantConditions": [
      "Grant can strictly be utilized for prototype fabrication, raw materials, tooling, testing, and outsourced prototyping services; it CANNOT be used for founder salaries, office rent, or general marketing.",
      "Maximum project duration is 18 months."
    ],
    "exclusions": [
      "Pure software applications, mobile apps, or digital platforms lacking physical hardware/device innovation.",
      "Established companies, non-Indian passport holders, or commercial mass production expenditures."
    ],
    "faqs": [
      {
        "question": "Does DST or the PRAYAS Centre take equity or intellectual property rights?",
        "answer": "No. NIDHI-PRAYAS is a 100% non-dilutive grant-in-aid. Neither DST nor the PRAYAS Centre takes any equity stake or claim on the innovator's intellectual property."
      },
      {
        "question": "Can software-only startups apply for NIDHI-PRAYAS?",
        "answer": "No. NIDHI-PRAYAS is specifically intended for physical hardware, electronics, biotech devices, and engineering prototypes. Pure software applications and websites are ineligible."
      }
    ]
  },
  {
    "id": "sch-64",
    "title": "NIDHI Seed Support Scheme (NIDHI-SSS)",
    "slug": "nidhi-seed-support-scheme",
    "description": "National seed capital financing mechanism administered by the Department of Science & Technology through recognized Technology Business Incubators (TBIs) to provide critical early-stage debt, equity, or convertible financing (up to ₹1 Crore) to incubated science and technology startups.",
    "authority": "National Science & Technology Entrepreneurship Development Board (NSTEDB), Department of Science and Technology (DST)",
    "category": "Startup Seed Investment",
    "status": "ACTIVE / ROLLING CALLS THROUGH TBIs",
    "sourceUrl": "https://dst.gov.in",
    "sourceAuthority": "Department of Science and Technology (DST)",
    "verificationStatus": "VERIFIED",
    "eligibility": "Early-stage technology startup registered as a Private Limited Company or LLP with DPIIT Recognition, having completed a minimum of 3 months of physical/virtual incubation at a DST-supported TBI, with majority shareholding held by Indian promoters.",
    "benefits": "Patient, founder-friendly risk capital structured with flexible moratoriums (for soft loans) or favorable valuation caps (for equity); continuous governance and business mentorship from the host incubator.",
    "applicationProcess": "Incubated startups apply directly to the Seed Support Management Committee (SSMC) of their respective host Technology Business Incubator (TBI).",
    "implementingAuthority": "Host Technology Business Incubators (TBIs) / Seed Support Management Committee (SSMC)",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "Early-stage technology startups incubated at DST-supported Technology Business Incubators (TBIs) across India",
    "financialParameters": "Financial seed funding between ₹25 Lakhs and ₹1 Crore per startup (standard sanction of ₹25-50 Lakhs) structured as direct equity investment, soft loan (concessional interest rate ~3-5%), or Compulsorily Convertible Debentures (CCDs)",
    "objective": "Provide timely seed capital to technology-driven startups emerging from incubators, enable product validation, regulatory testing, initial market traction, and bridge the valuation gap before institutional venture funding.",
    "coverage": "Pan-India across 100+ DST-recognized Technology Business Incubators (TBIs) at institutions such as IITs, IIMs, NITs, and premier research hubs.",
    "incentives": "DST provides up to ₹10 Crore corpus to eligible TBIs to operate dedicated seed support funds for their resident startups.",
    "howToUnderstand": "This is a government-backed startup seed investment fund where accredited university incubators provide ₹25 Lakhs to ₹1 Crore in equity or low-interest soft loans to help young tech startups scale and launch their products.",
    "registrationProcess": [
      "Startup completes minimum residency/incubation requirements at a DST-supported TBI.",
      "Submit Seed Support Application including business plan, financial model, and investment pitch.",
      "Technical, commercial, and financial due diligence by the TBI Investment Team.",
      "Evaluation and sanction by the Seed Support Management Committee (SSMC).",
      "Term sheet signing, investment agreement execution, and milestone-based disbursement."
    ],
    "requiredDocuments": [
      "Certificate of Incorporation and DPIIT Startup Recognition Certificate",
      "Audited Financial Statements (or provisional balance sheets) and Cap Table",
      "Comprehensive Business Plan with 3-year financial projections and fund utilization roadmap",
      "Intellectual Property filings / Patent grant certificates (if applicable)",
      "Incubation Agreement with the host TBI"
    ],
    "importantConditions": [
      "Applicant startup must be an active incubatee in good standing with the host TBI.",
      "Funds must be utilized strictly for commercial product development, regulatory certifications, testing, customer trials, and market launch (not for debt retirement)."
    ],
    "exclusions": [
      "Entities not incubated within a DST-recognized Technology Business Incubator.",
      "Companies with majority foreign shareholding or non-technical conventional trading businesses."
    ],
    "faqs": [
      {
        "question": "How is NIDHI-SSS funding structured for the startup?",
        "answer": "Funding is provided as equity investment, convertible preference shares, convertible debentures (CCDs), or concessional soft loans with a moratorium, based on the recommendation of the TBI's Seed Support Management Committee."
      },
      {
        "question": "What is the maximum investment an individual startup can receive under NIDHI-SSS?",
        "answer": "An individual startup can receive up to ₹1 Crore, with average seed support rounds typically ranging between ₹25 Lakhs and ₹50 Lakhs."
      }
    ]
  },
  {
    "id": "sch-65",
    "title": "BIRAC PACE - Potentiating Accelerating CFM Entrepreneurs",
    "slug": "birac-pace-biotech",
    "description": "Promoting Academic Research Conversion to Enterprise (PACE) flagship scheme of BIRAC (Department of Biotechnology) designed to encourage, support, and accelerate the commercial translation of innovative academic biotechnology research into scalable industrial products through targeted AIR and CRS funding mechanisms.",
    "authority": "Biotechnology Industry Research Assistance Council (BIRAC), Department of Biotechnology (DBT), Ministry of Science and Technology",
    "category": "Biotech Academic Translation & Industrial R&D",
    "status": "ACTIVE / CALLS FOR PROPOSALS (Bi-Annual Cycles)",
    "sourceUrl": "https://birac.nic.in",
    "sourceAuthority": "Biotechnology Industry Research Assistance Council (BIRAC)",
    "verificationStatus": "VERIFIED",
    "eligibility": "AIR Component: Faculty/Researchers from recognized Indian universities/institutes with proof-of-concept data. CRS Component: Joint application by an academic researcher and an eligible Indian industrial entity (incorporated under Companies Act with at least 51% Indian shareholding).",
    "benefits": "Direct grant-in-aid funding covering specialized reagents, equipment, clinical samples, analytical testing, and contractual manpower; IP guidance and commercialization support from BIRAC experts.",
    "applicationProcess": "Applications are submitted online through the BIRAC portal (birac.nic.in) during bi-annual Request for Proposals (RFP) cycles (typically January and July).",
    "implementingAuthority": "BIRAC Investment & Technical Appraisal Team",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "Academic Researchers, Universities, Research Institutes, and Indian Biotech Industry/SMEs undertaking collaborative translational research",
    "financialParameters": "Grant-in-aid of up to ₹50 Lakhs for Academic Innovation Research (AIR) for up to 24 months (100% grant to academia); and up to ₹50 Lakhs for Contract Research Scheme (CRS) for joint academia-industry validation (academia receives 100% grant, industry contributes matching operational funds)",
    "objective": "Transform high-potential academic discovery into commercially viable healthcare, agricultural, industrial, and environmental biotechnology products, fostering structured academia-industry collaboration.",
    "coverage": "Pan-India across recognized public and private academic research institutions and registered biotechnology enterprises.",
    "incentives": "100% non-repayable grant to academic principal investigators with clear milestone-based fund releases.",
    "howToUnderstand": "This is a government research-to-business grant program (up to ₹50 Lakhs) that funds university professors and biotech companies to turn lab discoveries (new medicines, vaccines, bio-fertilizers) into real commercial products.",
    "registrationProcess": [
      "Register primary account on the BIRAC Online Portal.",
      "Select PACE scheme track (Academic Innovation Research - AIR or Contract Research Scheme - CRS).",
      "Submit detailed research proposal, preliminary data, work packages, milestone timelines, and budget.",
      "Undergo peer review and presentation before the Technical Screening Committee (TSC).",
      "Site visit / due diligence followed by Apex Committee approval and fund sanction."
    ],
    "requiredDocuments": [
      "Comprehensive Research Proposal with preliminary proof-of-concept laboratory data",
      "Institutional Endorsement Certificate and Biosafety / Ethical Committee clearances (IBSC / IEC)",
      "Detailed itemized budget for equipment, consumables, and project manpower",
      "Memorandum of Understanding (MoU) / Collaboration Agreement between academia and industry partner (mandatory for CRS)"
    ],
    "importantConditions": [
      "Proposals must demonstrate clear industrial applicability and commercial translation roadmap beyond basic scientific publishing.",
      "The academic institution must hold ownership of foreground IP or have agreed sharing terms with the industrial partner."
    ],
    "exclusions": [
      "Purely exploratory basic academic research without defined commercial translation pathways.",
      "Foreign-owned companies lacking registered Indian corporate incorporation and majority shareholding."
    ],
    "faqs": [
      {
        "question": "What is the difference between the AIR and CRS components of BIRAC PACE?",
        "answer": "AIR (Academic Innovation Research) supports academic researchers establishing proof-of-concept for innovative discoveries, while CRS (Contract Research Scheme) funds joint collaborative validation projects between academic researchers and an industrial biotech company."
      },
      {
        "question": "Is BIRAC PACE funding a loan or a grant?",
        "answer": "PACE funding is provided as a non-repayable grant-in-aid to eligible academic researchers and institutions."
      }
    ]
  },
  {
    "id": "sch-66",
    "title": "BIRAC SBIRI - Small Business Innovation Research Initiative",
    "slug": "birac-sbiri",
    "description": "Pioneering early-stage public-private partnership grant and funding scheme administered by BIRAC (Department of Biotechnology) supporting innovative industrial R&D and high-risk product development in Indian biotechnology MSMEs.",
    "authority": "Biotechnology Industry Research Assistance Council (BIRAC), Department of Biotechnology (DBT), Ministry of Science and Technology",
    "category": "Biotech Industrial R&D Grant",
    "status": "ACTIVE / BI-ANNUAL RFP CYCLES",
    "sourceUrl": "https://birac.nic.in",
    "sourceAuthority": "Biotechnology Industry Research Assistance Council (BIRAC)",
    "verificationStatus": "VERIFIED",
    "eligibility": "Indian biotechnology companies incorporated under the Companies Act with at least 51% shareholding held by Indian citizens, possessing in-house R&D facilities (DSIR-recognized or demonstrated research infrastructure).",
    "benefits": "Direct grant funding for high-risk early-stage R&D; access to BIRAC national biomanufacturing and testing bio-clusters; intellectual property protection advisory and regulatory facilitation.",
    "applicationProcess": "Proposals submitted electronically on the BIRAC online portal during active bi-annual Call for Proposals windows.",
    "implementingAuthority": "BIRAC Technical & Investment Committee",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "Small and Medium Biotechnology Enterprises, Startups, and Consortiums involving biotech industry and academic research partners",
    "financialParameters": "Grant-in-aid assistance covering up to 50% of the total project cost (standard grants up to ₹50 Lakhs to ₹1 Crore for early validation; larger consortium grants evaluated based on project scope), with the industrial partner contributing the remaining matching share",
    "objective": "Foster indigenous innovation in biotechnology, encourage high-risk industrial research, support proof-of-concept development and early pilot scaling, and commercialize innovative affordable healthcare, agritech, and industrial bio-products.",
    "coverage": "Pan-India across all biotechnology domains including biopharma, vaccines, diagnostics, medical devices, bio-agriculture, industrial biotechnology, and bioinformatics.",
    "incentives": "Non-dilutive grant-in-aid released in milestone-based installments upon validation of technical deliverables by BIRAC monitoring committees.",
    "howToUnderstand": "SBIRI is India's premier government biotech grant program where BIRAC funds up to 50% of the research and development costs (up to ₹1 Crore) for Indian biotech companies developing new drugs, medical devices, or agricultural bio-solutions.",
    "registrationProcess": [
      "Company registers corporate profile on the BIRAC portal (birac.nic.in).",
      "Prepare and submit SBIRI proposal including technical background, preliminary data, experimental design, and milestone timelines.",
      "Two-tier technical appraisal by the Technical Screening Committee (TSC) and Sectoral Specialists.",
      "Presentation before the Apex Committee followed by financial due diligence and site verification.",
      "Execution of Grant-in-Aid Letter Agreement (GLA) and release of first milestone installment."
    ],
    "requiredDocuments": [
      "Company Incorporation Certificate, Memorandum and Articles of Association",
      "Audited Financial Statements for past 3 years (or provisional for early startups) and shareholding certificate",
      "DSIR Recognition Certificate of in-house R&D unit (or detailed R&D equipment inventory)",
      "Ethical, biosafety, and statutory regulatory clearances (IBSC / RCGM / CDSCO approvals where relevant)",
      "Project Gantt Chart, work package allocation, and itemized budget justification"
    ],
    "importantConditions": [
      "The applicant company must have dedicated in-house research capabilities and demonstrate matching co-funding capability for their share of the project cost.",
      "Funding cannot be utilized for general commercial expansion, debt servicing, or basic trading."
    ],
    "exclusions": [
      "Companies with less than 51% Indian equity ownership.",
      "Pure clinical trial service providers (CROs) without original proprietary innovation."
    ],
    "faqs": [
      {
        "question": "What is the primary difference between BIRAC SBIRI and BIRAC BIPP?",
        "answer": "SBIRI focuses on early-stage, high-risk proof-of-concept and pre-commercial R&D for small and medium enterprises, whereas BIPP (Biotechnology Industry Partnership Programme) focuses on large-scale, advanced clinical development and high-outlay technology platforms."
      },
      {
        "question": "Can academia collaborate in an SBIRI application?",
        "answer": "Yes. While SBIRI is led by an Indian biotech company, academic researchers and institutes can participate as co-investigators/consortium partners, with the academic share receiving up to 100% grant assistance."
      }
    ]
  },
  {
    "id": "sch-67",
    "title": "Scheme for Facilitating Start-Ups Intellectual Property Protection (SFSTIP / SIPP)",
    "slug": "sfstip-startup-ipr",
    "description": "Scheme for Facilitating Start-Ups Intellectual Property Protection (SIPP) implemented by the Controller General of Patents, Designs and Trade Marks (CGPDTM) and DPIIT, providing registered startups with access to empanelled IP facilitators for free patent, design, and trademark drafting services, alongside statutory fee rebates and expedited patent examinations.",
    "authority": "Department for Promotion of Industry and Internal Trade (DPIIT) & Office of Controller General of Patents, Designs and Trade Marks (CGPDTM)",
    "category": "Intellectual Property & Startup Support",
    "status": "ACTIVE / PERMANENTLY EXTENDED SCHEME",
    "sourceUrl": "https://www.startupindia.gov.in",
    "sourceAuthority": "Startup India / Office of CGPDTM (ipindia.gov.in)",
    "verificationStatus": "VERIFIED",
    "eligibility": "Startups holding a valid DPIIT Startup Recognition Certificate under the Startup India initiative.",
    "benefits": "Free professional IP drafting and filing assistance through empanelled facilitators; 80% statutory fee waiver for patent filing and examination; expedited examination under Rule 24C of the Patent Rules reducing patent grant timelines from years to months.",
    "applicationProcess": "Startups contact any empanelled IP Facilitator listed on the IP India (ipindia.gov.in) or Startup India portal and submit their invention details.",
    "implementingAuthority": "Office of CGPDTM (Intellectual Property India) / Startup India",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "DPIIT-recognized Startups, Micro/Small Enterprises, and Individual Tech Founders filing Patents, Industrial Designs, and Trademarks in India",
    "financialParameters": "Government pays 100% of professional facilitator fees directly to empanelled IP attorneys (₹10,000 per patent application at filing + ₹15,000 at grant; ₹2,000-4,000 for trademarks/designs); startups pay only discounted statutory government fees (80% fee rebate on patents, 50% rebate on trademarks)",
    "objective": "Protect and nurture innovation among young Indian startups, reduce high professional legal and advisory costs of patenting, encourage high-value IP creation, and dramatically accelerate the grant of patent rights through fast-track examination.",
    "coverage": "Pan-India across all Patent and Trademark registry branches (Delhi, Mumbai, Chennai, Kolkata, and online filing portals).",
    "incentives": "Zero professional legal fees for drafting, filing, and defending responses to examination reports for eligible IP filings.",
    "howToUnderstand": "Under this scheme, the government pays the lawyer's fees for writing and filing patent and trademark applications for DPIIT-recognized startups, while also giving an 80% discount on official government patent fees and fast-tracking approvals.",
    "registrationProcess": [
      "Obtain DPIIT Startup Recognition on the Startup India portal (startupindia.gov.in).",
      "Access the published list of Empanelled IP Facilitators on the IP India portal (ipindia.gov.in).",
      "Contact an empanelled patent/trademark facilitator with the invention disclosure.",
      "Facilitator drafts and files the patent/design/trademark application marking startup status.",
      "Facilitator submits fee reimbursement bill directly to the Patent Office; startup only pays concessional statutory fee."
    ],
    "requiredDocuments": [
      "DPIIT Startup Recognition Certificate",
      "Invention Disclosure Form / Technical description of innovation",
      "Power of Attorney / Authorization Form 26 in favor of the empanelled facilitator",
      "Declaration of applicant status (Form 28 for startups)"
    ],
    "importantConditions": [
      "Startup must maintain active DPIIT recognition at the time of filing.",
      "Facilitators are legally prohibited from charging any professional fees directly to the startup for eligible scope of services covered by the scheme."
    ],
    "exclusions": [
      "Unrecognized commercial entities or companies exceeding 10 years from date of incorporation / ₹100 Crore turnover limit.",
      "International patent filings (PCT national phase filings outside India) unless covered under separate international assistance schemes."
    ],
    "faqs": [
      {
        "question": "What fees does a startup actually have to pay under SIPP?",
        "answer": "The startup pays ZERO professional attorney/facilitator fees. The startup only pays the statutory government filing fees to the Patent Office, which are already discounted by up to 80% for recognized startups."
      },
      {
        "question": "How fast can a startup get a patent granted in India under SIPP?",
        "answer": "DPIIT-recognized startups qualify for Fast-Track / Expedited Examination under Rule 24C of the Patent Rules, which frequently allows patents to be examined and granted in under 12 to 18 months, compared to standard 4 to 5 year cycles."
      }
    ]
  },
  {
    "id": "sch-68",
    "title": "Atal Incubation Centres (AIC) Scheme",
    "slug": "atal-incubation-centres",
    "description": "Premier national incubation infrastructure initiative formulated by Atal Innovation Mission (AIM), NITI Aayog, providing grant-in-aid of up to ₹10 Crore over 5 years to establish world-class greenfield startup incubation centers with sector-specific laboratories, prototyping infrastructure, mentorship networks, and seed funding support.",
    "authority": "Atal Innovation Mission (AIM), NITI Aayog",
    "category": "Startup Incubation Infrastructure",
    "status": "ACTIVE / PERIODIC COHORT CALLS",
    "sourceUrl": "https://aim.gov.in",
    "sourceAuthority": "Atal Innovation Mission (AIM), NITI Aayog",
    "verificationStatus": "VERIFIED",
    "eligibility": "Higher educational institutions (UGC/AICTE recognized), R&D institutions, corporate entities, industry associations, or individual/consortiums with minimum 10,000 sq. ft. of dedicated physical space, credible governance, and matching operational resources.",
    "benefits": "Capital grants for setting up advanced sectoral labs, fabrication suites, and high-performance computing centers; operational budget support to hire experienced CEO/incubation managers and offer founder acceleration programs.",
    "applicationProcess": "Proposals submitted online on the Atal Innovation Mission web portal (aim.gov.in) in response to national Request for Applications (RFA) announcements.",
    "implementingAuthority": "Atal Innovation Mission Directorate, NITI Aayog / Host Applicant Institutions",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "Higher Educational Institutions, Research & Development Bodies, Industry Associations, Corporate Foundations, and Independent Non-Profit Organizations establishing startup incubators",
    "financialParameters": "Grant-in-aid of up to ₹10 Crore per AIC released in phases over a maximum period of 5 years (covering capital expenditure for high-end lab machinery and operational expenditure), matched by co-funding / infrastructure commitments from the host applicant",
    "objective": "Build world-class incubation facilities across India to support innovative startups, promote technology commercialization, foster scalable business models, generate high-skill employment, and stimulate regional entrepreneurship ecosystems.",
    "coverage": "Pan-India across Tier-1, Tier-2, and Tier-3 cities with dedicated focus on underserved sectors like healthcare, agriculture, mobility, renewable energy, and space-tech.",
    "incentives": "Phased grant-in-aid installments released based on physical infrastructure setup, number of startups incubated, patent filings, and external seed capital mobilized.",
    "howToUnderstand": "This is a flagship government grant (up to ₹10 Crore) from NITI Aayog that helps top universities, research centers, and corporate foundations build state-of-the-art startup incubator centers equipped with modern labs and funding for young entrepreneurs.",
    "registrationProcess": [
      "Host institution reviews AIM eligibility guidelines and prepares Detailed Project Proposal.",
      "Submit online application on the AIM Portal detailing proposed sector focus, infrastructure plan, and matching fund commitments.",
      "Multi-tier evaluation by Screening Committee and presentation before the Expert Advisory Committee (EAC).",
      "Site inspection of proposed physical facility by AIM officials.",
      "Incorporation of a dedicated Section 8 Non-Profit Company, signing of Memorandum of Agreement (MoA), and release of initial grant tranche."
    ],
    "requiredDocuments": [
      "Institutional Registration Certificate, Society/Trust Deed, or Corporate Incorporation",
      "Detailed Project Report (DPR) with 5-year operational and sustainability roadmap",
      "Proof of unencumbered ownership or long-term lease (minimum 10 years) for 10,000+ sq. ft. of dedicated space",
      "Audited Financial Statements for the last 3 financial years",
      "Board Resolution committing matching fund contribution and operational independence"
    ],
    "importantConditions": [
      "The incubator must be registered as an independent Section 8 Special Purpose Vehicle (SPV) with dedicated full-time management.",
      "The host institution must achieve financial self-sustainability for the AIC beyond the 5-year AIM grant support window."
    ],
    "exclusions": [
      "Pure commercial real estate co-working providers without structured incubation and mentorship frameworks.",
      "Institutions unable to provide 10,000 sq. ft. of unencumbered dedicated physical space."
    ],
    "faqs": [
      {
        "question": "What is the maximum grant amount available for an Atal Incubation Centre?",
        "answer": "AIM provides grant-in-aid of up to ₹10 Crore per AIC, disbursed in tranches over a 5-year period for capital equipment and operational support."
      },
      {
        "question": "Can private corporations apply to set up an AIC?",
        "answer": "Yes. Corporate entities, industry associations, and private research foundations with strong track records are eligible to apply, provided they operate the incubator through an independent Section 8 non-profit structure."
      }
    ]
  },
  {
    "id": "sch-69",
    "title": "Atal Community Innovation Centres (ACIC) Scheme",
    "slug": "atal-community-innovation-centres",
    "description": "Targeted grassroots innovation initiative by Atal Innovation Mission (AIM), NITI Aayog, providing grant-in-aid of up to ₹2.5 Crore to establish community innovation centers in unserved and underserved regions (Tier-2/3 cities, rural areas, tribal belts, Aspirational Districts, and North-Eastern states) to solve local community challenges.",
    "authority": "Atal Innovation Mission (AIM), NITI Aayog",
    "category": "Grassroots & Community Innovation",
    "status": "ACTIVE / IMPLEMENTED NETWORK",
    "sourceUrl": "https://aim.gov.in",
    "sourceAuthority": "Atal Innovation Mission (AIM), NITI Aayog",
    "verificationStatus": "VERIFIED",
    "eligibility": "UGC/AICTE recognized academic institutions, ITIs, polytechnics, NGOs, voluntary organizations, and CSR foundations located in or serving designated underserved regions with at least 3,000–4,000 sq. ft. of dedicated space.",
    "benefits": "Establishment of Community Ideation Spaces, Maker Labs, Prototyping Suites, and Design Thinking Workshops; structured pre-incubation programs translating grassroots ideas into viable enterprises.",
    "applicationProcess": "Eligible institutions apply online through the Atal Innovation Mission ACIC application portal during notified call cycles.",
    "implementingAuthority": "Atal Innovation Mission Directorate, NITI Aayog / Host Partner Institutions",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "Grassroots Innovators, Rural Entrepreneurs, Artisans, Small Farmers, Students, and Local Community Problem Solvers in underserved geographies",
    "financialParameters": "Grant-in-aid of up to ₹2.5 Crore per ACIC over a 5-year period from AIM, matched by an equal minimum contribution of ₹2.5 Crore from the host applicant / CSR partners (total project budget of ₹5 Crore)",
    "objective": "Democratize the innovation ecosystem across tier-2, tier-3 cities, rural and tribal areas, provide local innovators with access to design labs, pre-incubation facilities, and mentorship, and commercialize solutions targeting localized community needs.",
    "coverage": "Specifically targeted across Tier-2/Tier-3 cities, 112 Aspirational Districts, North-Eastern and Himalayan States, Island territories, and rural/semi-urban regions.",
    "incentives": "Up to 50% capital and operational funding from AIM, enabling non-profit institutions and colleges in remote regions to build modern innovation centers.",
    "howToUnderstand": "This is a NITI Aayog grant scheme (giving up to ₹2.5 Crore) that establishes hands-on innovation and prototyping labs in small towns, rural districts, and tribal areas to help local innovators and young people invent solutions for farming, local health, clean water, and handicrafts.",
    "registrationProcess": [
      "Review regional eligibility criteria focusing on Aspirational Districts and Tier-2/3 regions.",
      "Submit online application on the AIM ACIC portal with infrastructure layout, local problem focus, and co-funding commitments.",
      "Shortlisting and proposal presentation before the AIM National Screening Committee.",
      "Physical verification of host site and execution of Tripartite / Grant Agreement.",
      "Setup of Community Maker Space and launch of local grassroots innovation cohorts."
    ],
    "requiredDocuments": [
      "Institutional Registration (Society, Trust, University charter, or Section 8 Company)",
      "Detailed Project Proposal with community impact metrics and local problem statement analysis",
      "Commitment Letter for 50% matching financial contribution (including CSR commitments)",
      "Floor plan and photographs of dedicated 3,000–4,000 sq. ft. space",
      "Audited accounts for the last 3 financial years"
    ],
    "importantConditions": [
      "Host institution must secure at least 50% matching financial contribution (minimum ₹2.5 Crore) over 5 years from its own resources or corporate CSR partners.",
      "Focus must be strictly on community problem-solving, local livelihood generation, and rural/semi-urban technology deployment."
    ],
    "exclusions": [
      "Metropolitan institutions not serving underserved or aspirational regions.",
      "Entities seeking funding purely for theoretical classroom teaching without hands-on community maker spaces."
    ],
    "faqs": [
      {
        "question": "What is the key difference between AIC and ACIC?",
        "answer": "AIC (Atal Incubation Centres) are large-scale commercial startup incubators with up to ₹10 Crore grant support in major hubs, whereas ACIC (Atal Community Innovation Centres) focus on grassroots pre-incubation with up to ₹2.5 Crore support in underserved, rural, tribal, and Aspirational Districts."
      },
      {
        "question": "Can corporate CSR funds be used to match the ACIC grant?",
        "answer": "Yes. Corporate Social Responsibility (CSR) contributions are explicitly recognized and encouraged to meet the mandatory 50% matching fund requirement for ACICs."
      }
    ]
  },
  {
    "id": "sch-70",
    "title": "Scheme for Promotion of Electric Mobility in India (EMPS / PM Electric Drive)",
    "slug": "emps-ev-promotion-scheme",
    "description": "Comprehensive national electric mobility incentive framework implemented by the Ministry of Heavy Industries. Succeeded the transitional Electric Mobility Promotion Scheme 2024 (EMPS 2024) with the landmark PM Electric Drive Revolution in Innovative Vehicle Enhancement (PM E-DRIVE) scheme (total outlay ₹10,900 Crore from October 2024 to March 2026) to subsidize consumer adoption of electric two-wheelers, three-wheelers, e-ambulances, e-trucks, and deploy 72,000+ public fast-chargers across India.",
    "authority": "Ministry of Heavy Industries (MHI), Government of India",
    "category": "Electric Vehicle Manufacturing & Adoption",
    "status": "ACTIVE / OPERATIONAL (PM E-DRIVE SCHEME)",
    "sourceUrl": "https://heavyindustries.gov.in",
    "sourceAuthority": "Ministry of Heavy Industries (MHI) / PM E-DRIVE Portal (pmedrive.heavyindustries.gov.in)",
    "verificationStatus": "VERIFIED",
    "eligibility": "EV Original Equipment Manufacturers (OEMs) whose models are certified by notified automotive testing agencies (ARAI, ICAT, GARC) and compliant with Phased Manufacturing Programme (PMP) domestic localization mandates.",
    "benefits": "Upfront consumer price discounts on eligible electric two-wheelers and three-wheelers via Aadhaar-linked e-vouchers generated on the PM E-DRIVE portal; up to 100% capital subsidies for public EV fast-charging stations deployed by DISCOMs and public oil marketing companies.",
    "applicationProcess": "EV buyers receive upfront discounts at authorized dealerships via digital e-vouchers; EV OEMs apply for model certification and claim reimbursement on the PM E-DRIVE portal (pmedrive.heavyindustries.gov.in).",
    "implementingAuthority": "Ministry of Heavy Industries / Testing Agencies (ARAI, ICAT, GARC) / Energy Efficiency Services Ltd. (EESL)",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "EV Original Equipment Manufacturers (OEMs), Public Transport Operators, EV Fleet Operators, Charging Infrastructure Developers, and Individual EV Buyers",
    "financialParameters": "Total central outlay of ₹10,900 Crore. Subsidies include: ₹3,679 Crore demand incentives for e-2W, e-3W, e-ambulances, and e-trucks; ₹4,391 Crore for procurement of 14,028 e-buses; ₹2,000 Crore for installing 72,300 public EV fast-charging stations; and ₹780 Crore for modernization of MHI test agencies",
    "objective": "Accelerate mass adoption of electric vehicles, incentivize domestic EV manufacturing under the Phased Manufacturing Programme (PMP), reduce vehicular emissions and crude oil import dependency, and establish a robust nationwide public charging network.",
    "coverage": "Pan-India across all States and Union Territories.",
    "incentives": "Demand incentives calculated based on battery capacity (₹5,000/kWh in Year 1 capped at ₹10,000 per e-2W; ₹2,500/kWh in Year 2 capped at ₹5,000 per e-2W) reimbursed directly to verified EV OEMs post vehicle delivery.",
    "howToUnderstand": "This is India's massive ₹10,900 Crore government EV scheme (PM E-DRIVE) that gives direct discounts on electric scooters, auto-rickshaws, e-ambulances, and e-buses, while funding 72,000+ public fast-chargers across highways and cities.",
    "registrationProcess": [
      "OEM registers company and vehicle models on the PM E-DRIVE portal.",
      "Testing agency (ARAI/ICAT) tests vehicle and issues CMVR & PMP compliance certificate.",
      "Buyer visits authorized dealership; dealer generates Aadhaar-authenticated e-voucher on the PM E-DRIVE portal.",
      "Buyer signs e-voucher and receives upfront price discount on vehicle invoice.",
      "OEM aggregates validated e-voucher sales and submits monthly subsidy claims to MHI for direct reimbursement."
    ],
    "requiredDocuments": [
      "CMVR Type Approval Certificate and Phased Manufacturing Programme (PMP) Compliance Certificate from ARAI/ICAT",
      "OEM Manufacturing License and GST Registration",
      "Vehicle Sales Invoice with e-voucher unique identification number",
      "Aadhaar-authenticated digital signed delivery receipt from the buyer"
    ],
    "importantConditions": [
      "Vehicles must be fitted with advanced chemistry batteries and adhere strictly to Phased Manufacturing Programme (PMP) localization rules.",
      "Subsidies are strictly restricted to primary retail buyers; commercial fleets must meet specific registration guidelines."
    ],
    "exclusions": [
      "Electric vehicles fitted with conventional lead-acid batteries.",
      "Imported fully built units (CBU) or semi-knocked down (SKD) kits that do not comply with PMP localization norms."
    ],
    "faqs": [
      {
        "question": "What is the relationship between EMPS and PM E-DRIVE?",
        "answer": "EMPS (Electric Mobility Promotion Scheme 2024) was a temporary 6-month bridging scheme (April–September 2024) that has been fully succeeded and expanded by the comprehensive ₹10,900 Crore PM E-DRIVE scheme, active until March 2026."
      },
      {
        "question": "How do individual customers receive the subsidy benefit under PM E-DRIVE?",
        "answer": "Individual buyers receive the subsidy as an instant, upfront price discount directly on their dealer purchase invoice upon generating an Aadhaar-authenticated digital e-voucher on the PM E-DRIVE portal."
      }
    ]
  },
  {
    "id": "sch-71",
    "title": "National Clean Air Programme (NCAP) - Urban Industrial Emission Reduction Incentive",
    "slug": "ncap-industrial-emission-reduction",
    "description": "National environmental and clean technology framework implemented by the Ministry of Environment, Forest and Climate Change (MoEFCC) across 131 non-attainment and million-plus cities to achieve up to 40% reduction in particulate matter (PM10 and PM2.5) concentrations by 2026 through coordinated municipal, industrial, and transportation abatement interventions.",
    "authority": "Ministry of Environment, Forest and Climate Change (MoEFCC) & Central Pollution Control Board (CPCB)",
    "category": "Clean Technology & Industrial Environmental Quality",
    "status": "ACTIVE / ONGOING IMPLEMENTATION (Target Horizon 2026)",
    "sourceUrl": "https://prana.cpcb.gov.in",
    "sourceAuthority": "MoEFCC / Central Pollution Control Board (CPCB) - PRANA Portal",
    "verificationStatus": "VERIFIED",
    "eligibility": "State Pollution Control Boards, Municipal Corporations, Industrial Area Development Authorities, and industrial units operating within designated non-attainment city boundaries.",
    "benefits": "Subsidized infrastructure for industrial cluster fuel transition (PNG pipelines, biomass pellet supply chains); capital funding for mechanical road sweepers, water sprinklers, and EV public transit fleets; real-time air quality tracking on PRANA.",
    "applicationProcess": "City administrations and SPCBs execute approved City Action Plans; industrial units apply to SPCBs/DISCOMs/Gas Utilities for industrial retrofitting incentives tracked via the PRANA portal (prana.cpcb.gov.in).",
    "implementingAuthority": "State Pollution Control Boards (SPCBs) / Urban Local Bodies (ULBs) / Air Quality Management Commissions",
    "lastVerifiedDate": "2026-03-16",
    "completenessLevel": "COMPLETE",
    "targetBeneficiaries": "Municipal Corporations, Urban Local Bodies (ULBs), Industrial Development Corporations, and Industrial Units in 131 designated non-attainment cities",
    "financialParameters": "Central fiscal allocations exceeding ₹19,000 Crore (under NCAP central funds and XV Finance Commission Air Quality Performance Grants) distributed to 131 cities based on performance in achieving annual PM reduction targets; funding utilized for industrial fuel switching, continuous emission monitoring, and mechanical dust management",
    "objective": "Achieve 40% reduction or attain National Ambient Air Quality Standards (NAAQS) for PM10 and PM2.5 across targeted cities, promote industrial fuel switching to Piped Natural Gas (PNG) and biomass, mandate Continuous Emission Monitoring Systems (CEMS), and incentivize green urban infrastructure.",
    "coverage": "131 designated non-attainment and million-plus cities across 24 States and Union Territories.",
    "incentives": "Performance-linked capital grants released directly to cities and SPCBs achieving validated year-on-year air quality improvement benchmarks.",
    "howToUnderstand": "This is India's national ₹19,000+ Crore clean air program covering 131 major cities to cut industrial and city air pollution by 40% by helping factories switch to clean natural gas/biomass, installing real-time smoke monitors, and funding electric city buses.",
    "registrationProcess": [
      "City administration and SPCB formulate comprehensive Micro-Action Plan for air pollution abatement.",
      "Upload Action Plan and baseline ambient air metrics on the PRANA portal (prana.cpcb.gov.in).",
      "Review and approval by the Central Steering Committee in MoEFCC.",
      "Release of performance grants for industrial cluster emission monitoring, green belts, and clean transit.",
      "Annual performance auditing by CPCB based on Continuous Ambient Air Quality Monitoring Stations (CAAQMS)."
    ],
    "requiredDocuments": [
      "City Clean Air Action Plan with source apportionment and emission inventory studies",
      "Continuous Ambient Air Quality Monitoring Station (CAAQMS) verification data",
      "Consent to Establish (CTE) and Consent to Operate (CTO) compliance filings for industrial clusters",
      "Utilization Certificates and physical milestone progress reports submitted on PRANA"
    ],
    "importantConditions": [
      "This is a national environmental quality mission and municipal/industrial infrastructure facilitation program; it is not a direct retail consumer investment scheme.",
      "Industries located in non-attainment zones must comply with stringent CPCB emission standards and mandatory Continuous Emission Monitoring (CEMS) telemetry."
    ],
    "exclusions": [
      "Direct speculative commercial investments or retail trading activities.",
      "Industrial units operating polluting fuels in violation of notified city zoning and fuel bans."
    ],
    "faqs": [
      {
        "question": "What is the PRANA portal under NCAP?",
        "answer": "PRANA (Portal for Regulation of Air-pollution in Non-Attainment cities) is the official central digital tracking portal developed by MoEFCC and CPCB to monitor air quality metrics, fund utilization, and action plan implementation across all 131 NCAP cities."
      },
      {
        "question": "How does NCAP affect industrial investments and factories?",
        "answer": "NCAP accelerates industrial infrastructure upgrades by driving the adoption of cleaner fuels (PNG, biomass), mandating 24x7 online emission monitoring, and supporting industrial cluster green buffers and common effluent/air treatment infrastructure."
      }
    ]
  }

];

  getAll(): InvestmentScheme[] { return this.items; }
  getById(id: string): InvestmentScheme | undefined { return this.items.find(i => i.id === id); }
  getBySlug(slug: string): InvestmentScheme | undefined { return this.items.find(i => i.slug === slug); }
  search(query: string, category?: string): InvestmentScheme[] {
    const q = query.toLowerCase();
    return this.items.filter(i => (i.title.toLowerCase().includes(q) || i.description.toLowerCase().includes(q)) && (!category || category === 'ALL' || i.category === category));
  }
}

export class OpportunityRepository implements Repository<Opportunity> {
  private items: Opportunity[] = [
    {
      id: 'opp-birac-big-29',
      title: 'BIRAC Biotechnology Ignition Grant (BIG) Call 29',
      slug: 'biotechnology-ignition-grant-big-call-29',
      description: 'Grants up to ₹50 Lakhs for biotech startups and entrepreneurs to translate innovative ideas into proof-of-concept.',
      authority: 'BIRAC, Department of Biotechnology',
      category: 'Startup Grant',
      status: 'OPEN',
      sourceUrl: 'https://birac.nic.in',
      sourceAuthority: 'BIRAC',
      verificationStatus: 'VERIFIED',
      deadline: '2026-10-31',
      fundingAmount: '₹50 Lakhs'
    },
    {
      id: 'opp-meity-tide-2-0',
      title: 'MeitY TIDE 2.0 Incubation Scheme - Cohort Call',
      slug: 'meity-tide-2-0-cohort-call',
      description: 'Financial support and incubation for tech startups utilizing emerging technologies like IoT, AI, and blockchain in governance and societal domains.',
      authority: 'Ministry of Electronics and Information Technology (MeitY)',
      category: 'Tech Startup Incubation',
      status: 'OPEN',
      sourceUrl: 'https://www.meity.gov.in',
      sourceAuthority: 'MeitY',
      verificationStatus: 'VERIFIED',
      deadline: '2026-11-15',
      fundingAmount: '₹7 Lakhs to ₹50 Lakhs'
    },
    {
      id: 'opp-dst-nidhi-prayas',
      title: 'DST NIDHI PRAYAS Program - Prototype Funding Call',
      slug: 'dst-nidhi-prayas-prototype-funding',
      description: 'Translating innovative ideas into prototype models with financial grant support and access to fabrication labs.',
      authority: 'Department of Science and Technology (DST)',
      category: 'Prototype Grant',
      status: 'OPEN',
      sourceUrl: 'https://dst.gov.in',
      sourceAuthority: 'DST',
      verificationStatus: 'VERIFIED',
      deadline: '2026-10-20',
      fundingAmount: 'Up to ₹10 Lakhs'
    },
    {
      id: 'opp-aim-atal-new-india',
      title: 'Atal New India Challenge (ANIC) - Phase III',
      slug: 'atal-new-india-challenge-phase-3',
      description: 'Grant-in-aid funding up to ₹1 Crore for product-market fit and commercialization in critical national sectors.',
      authority: 'Atal Innovation Mission, NITI Aayog',
      category: 'Innovation Challenge',
      status: 'OPEN',
      sourceUrl: 'https://aim.gov.in',
      sourceAuthority: 'AIM NITI Aayog',
      verificationStatus: 'VERIFIED',
      deadline: '2026-11-30',
      fundingAmount: '₹1 Crore'
    },
    {
      id: 'opp-startup-india-seed-fund',
      title: 'Startup India Seed Fund Scheme (SISFS) - Incubator Allocation Call',
      slug: 'startup-india-seed-fund-cohort',
      description: 'Seed financial assistance for early-stage startups for proof of concept, prototype development, and market trials through recognized incubators.',
      authority: 'DPIIT, Ministry of Commerce and Industry',
      category: 'Seed Capital',
      status: 'OPEN',
      sourceUrl: 'https://seedfund.startupindia.gov.in',
      sourceAuthority: 'DPIIT',
      verificationStatus: 'VERIFIED',
      deadline: '2026-12-15',
      fundingAmount: 'Up to ₹50 Lakhs'
    },
    {
      id: 'opp-Anrf-research-grant',
      title: 'ANRF Core Research Grant (CRG) - Autumn Cycle',
      slug: 'anrf-core-research-grant-autumn',
      description: 'Research funding for academic and research institutions in frontier areas of science and engineering.',
      authority: 'Anusandhan National Research Foundation (ANRF)',
      category: 'Academic Research Grant',
      status: 'OPEN',
      sourceUrl: 'https://anrf.gov.in',
      sourceAuthority: 'ANRF',
      verificationStatus: 'VERIFIED',
      deadline: '2026-10-15',
      fundingAmount: 'Up to ₹50 Lakhs per Project'
    },
    {
      id: 'opp-icmr-health-tech',
      title: 'ICMR Translational Research and Medical Device Innovation Grant',
      slug: 'icmr-translational-research-grant',
      description: 'Grants for indigenous development of medical diagnostics, digital health tools, and point-of-care screening devices.',
      authority: 'Indian Council of Medical Research (ICMR)',
      category: 'Medical Research',
      status: 'OPEN',
      sourceUrl: 'https://main.icmr.nic.in',
      sourceAuthority: 'ICMR',
      verificationStatus: 'VERIFIED',
      deadline: '2026-11-10',
      fundingAmount: 'Up to ₹2 Crores'
    },
    {
      id: 'opp-csir-flair',
      title: 'CSIR Technopreneur Promotion Programme (TePP) Call',
      slug: 'csir-tepp-technopreneur-call',
      description: 'Financial support for independent innovators to convert raw innovative ideas into workable prototypes and enterprises.',
      authority: 'Council of Scientific and Industrial Research (CSIR)',
      category: 'Technopreneur Grant',
      status: 'OPEN',
      sourceUrl: 'https://www.csir.res.in',
      sourceAuthority: 'CSIR',
      verificationStatus: 'VERIFIED',
      deadline: '2026-10-25',
      fundingAmount: 'Up to ₹15 Lakhs'
    },
    {
      id: 'opp-ireda-green-startup',
      title: 'IREDA Green Energy Innovation and Incubation Support',
      slug: 'ireda-green-energy-innovation',
      description: 'Venture funding and incubation support for startups in solar recycling, green hydrogen, and battery storage solutions.',
      authority: 'Indian Renewable Energy Development Agency (IREDA)',
      category: 'Clean Energy Grant',
      status: 'OPEN',
      sourceUrl: 'https://www.ireda.in',
      sourceAuthority: 'IREDA',
      verificationStatus: 'VERIFIED',
      deadline: '2026-12-01',
      fundingAmount: '₹25 Lakhs to ₹2 Crores'
    },
    {
      id: 'opp-msme-idea-hackathon',
      title: 'MSME Idea Hackathon - 4.0 Special Call',
      slug: 'msme-idea-hackathon-4-0',
      description: 'Financial assistance up to ₹15 Lakhs per idea to incubatees and innovators through designated MSME Host Institutes.',
      authority: 'Ministry of MSME',
      category: 'MSME Innovation',
      status: 'OPEN',
      sourceUrl: 'https://msme.gov.in',
      sourceAuthority: 'Ministry of MSME',
      verificationStatus: 'VERIFIED',
      deadline: '2026-11-05',
      fundingAmount: '₹15 Lakhs per Idea'
    },
    {
      id: 'opp-ts-incubation-call-01',
      title: 'T-Hub & DST Startup Market Access Challenge 2026',
      slug: 't-hub-dst-market-access-2026',
      description: 'Global market access program and soft-landing grant for early-stage B2B tech startups expanding internationally.',
      authority: 'Department of Science and Technology (DST) / T-Hub',
      category: 'Market Access Grant',
      status: 'OPEN',
      sourceUrl: 'https://dst.gov.in',
      sourceAuthority: 'DST',
      verificationStatus: 'VERIFIED',
      deadline: '2026-11-20',
      fundingAmount: '₹20 Lakhs'
    },
    {
      id: 'opp-nafed-agri-startup',
      title: 'NAFED Agri-Startup Incubation and Equity Support Call',
      slug: 'nafed-agri-startup-support',
      description: 'Seed equity funding and supply chain integration support for agritech startups tackling post-harvest losses and digital mandis.',
      authority: 'NAFED / Ministry of Agriculture',
      category: 'AgriTech Incubation',
      status: 'OPEN',
      sourceUrl: 'https://www.nafed-india.com',
      sourceAuthority: 'NAFED',
      verificationStatus: 'VERIFIED',
      deadline: '2026-12-10',
      fundingAmount: 'Up to ₹50 Lakhs'
    },
    {
      id: 'opp-niti-aayog-women-entrepreneurship',
      title: 'WEP Women Entrepreneurship Platform Scale-Up Grant Call',
      slug: 'wep-women-entrepreneurship-scale-up',
      description: 'Mentorship, corporate buyer matchmaking, and growth capital access for women-led scalable enterprises in India.',
      authority: 'NITI Aayog',
      category: 'Women Entrepreneurship',
      status: 'OPEN',
      sourceUrl: 'https://wep.gov.in',
      sourceAuthority: 'NITI Aayog',
      verificationStatus: 'VERIFIED',
      deadline: '2026-11-25',
      fundingAmount: '₹25 Lakhs'
    },
    {
      id: 'opp-isro-space-incubator',
      title: 'IN-SPACe / ISRO Joint Space Tech Startup Incubation Call',
      slug: 'in-space-isro-startup-call',
      description: 'Grants and technical facility access for space-tech startups building small satellites, launch vehicles, and geospatial payloads.',
      authority: 'IN-SPACe / ISRO',
      category: 'Space Tech',
      status: 'OPEN',
      sourceUrl: 'https://www.inspace.gov.in',
      sourceAuthority: 'IN-SPACe',
      verificationStatus: 'VERIFIED',
      deadline: '2026-12-05',
      fundingAmount: 'Up to ₹1 Crore'
    },
    {
      id: 'opp-nitie-logistics-hackathon',
      title: 'PM GatiShakti Logistics Innovation Challenge 2026',
      slug: 'pm-gatishakti-logistics-challenge-2026',
      description: 'Innovation challenge for algorithmic optimization of multi-modal freight corridors and warehousing networks.',
      authority: 'Ministry of Commerce and Industry',
      category: 'Logistics Innovation',
      status: 'OPEN',
      sourceUrl: 'https://www.dpiit.gov.in',
      sourceAuthority: 'DPIIT',
      verificationStatus: 'VERIFIED',
      deadline: '2026-10-30',
      fundingAmount: '₹25 Lakhs'
    },
    {
      id: 'opp-meity-quantum-mission',
      title: 'National Quantum Mission - Applied R&D Startup Call',
      slug: 'national-quantum-mission-startup-call',
      description: 'Grant funding for building quantum cryptography, sensing devices, and quantum processor building blocks.',
      authority: 'Department of Science and Technology (DST)',
      category: 'Quantum Computing',
      status: 'OPEN',
      sourceUrl: 'https://dst.gov.in',
      sourceAuthority: 'DST',
      verificationStatus: 'VERIFIED',
      deadline: '2026-12-20',
      fundingAmount: 'Up to ₹2 Crores'
    },
    {
      id: 'opp-cbic-customs-tech',
      title: 'CBIC Smart Customs Hackathon & Tech Deployment Grant',
      slug: 'cbic-smart-customs-hackathon',
      description: 'Development of computer vision and AI-based non-intrusive container scanning solutions for ports and borders.',
      authority: 'Central Board of Indirect Taxes and Customs (CBIC)',
      category: 'GovTech & Customs',
      status: 'OPEN',
      sourceUrl: 'https://www.cbic.gov.in',
      sourceAuthority: 'CBIC',
      verificationStatus: 'VERIFIED',
      deadline: '2026-11-12',
      fundingAmount: '₹30 Lakhs'
    },
    {
      id: 'opp-petroleum-green-tech',
      title: 'MoPNG Sustainable Energy and Biofuel Innovation Challenge',
      slug: 'mopng-biofuel-innovation-challenge',
      description: 'Funding for commercializing compressed biogas (CBG), second-generation ethanol, and green petrochemical processes.',
      authority: 'Ministry of Petroleum and Natural Gas',
      category: 'Energy Innovation',
      status: 'OPEN',
      sourceUrl: 'https://mopng.gov.in',
      sourceAuthority: 'MoPNG',
      verificationStatus: 'VERIFIED',
      deadline: '2026-11-28',
      fundingAmount: '₹50 Lakhs'
    },
    {
      id: 'opp-nhb-horticulture-tech',
      title: 'National Horticulture Board Smart Farming Tech Challenge',
      slug: 'nhb-smart-farming-tech-challenge',
      description: 'Deployment grants for IoT-based precision farming, automated greenhouse climate control, and cold-chain monitoring sensors.',
      authority: 'National Horticulture Board (NHB)',
      category: 'AgriTech & IoT',
      status: 'OPEN',
      sourceUrl: 'https://nhb.gov.in',
      sourceAuthority: 'NHB',
      verificationStatus: 'VERIFIED',
      deadline: '2026-12-15',
      fundingAmount: '₹15 Lakhs'
    },
    {
      id: 'opp-ayush-startup-challenge',
      title: 'AYUSH Grid Innovation & Digital Healthcare Challenge',
      slug: 'ayush-grid-innovation-challenge',
      description: 'Grant assistance for digitalizing traditional medicine databases, diagnostic software, and herbal extract standardization tech.',
      authority: 'Ministry of AYUSH',
      category: 'Digital Healthcare',
      status: 'OPEN',
      sourceUrl: 'https://ayush.gov.in',
      sourceAuthority: 'Ministry of AYUSH',
      verificationStatus: 'VERIFIED',
      deadline: '2026-11-18',
      fundingAmount: '₹25 Lakhs'
    },
    {
      id: 'opp-tcil-telecom-hackathon',
      title: 'Telecom Centre of Excellence (TCIL) 5G/6G Use Case Call',
      slug: 'tcil-5g-6g-use-case-call',
      description: 'Developing indigenous 5G private network solutions and rural broadband edge-computing applications.',
      authority: 'Department of Telecommunications (DoT)',
      category: 'Telecom Innovation',
      status: 'OPEN',
      sourceUrl: 'https://dot.gov.in',
      sourceAuthority: 'DoT',
      verificationStatus: 'VERIFIED',
      deadline: '2026-12-10',
      fundingAmount: '₹40 Lakhs'
    },
    {
      id: 'opp-nmdc-mining-tech',
      title: 'Ministry of Mines S&T Mining Automation & Mineral Processing Call',
      slug: 'ministry-of-mines-st-mining-automation',
      description: 'Research and commercialization grants for IoT safety devices, drone surveying, and green mineral beneficiation tech.',
      authority: 'Ministry of Mines',
      category: 'Mining Technology',
      status: 'OPEN',
      sourceUrl: 'https://mines.gov.in',
      sourceAuthority: 'Ministry of Mines',
      verificationStatus: 'VERIFIED',
      deadline: '2026-11-30',
      fundingAmount: '₹50 Lakhs'
    },
    {
      id: 'opp-textiles-smart-wearables',
      title: 'National Technical Textiles Mission - Smart Wearables R&D Call',
      slug: 'nttm-smart-wearables-rd',
      description: 'Funding for R&D in e-textiles, health-monitoring garments, and protective military gear fabrics.',
      authority: 'Ministry of Textiles',
      category: 'Technical Textiles',
      status: 'OPEN',
      sourceUrl: 'https://texmin.nic.in',
      sourceAuthority: 'Ministry of Textiles',
      verificationStatus: 'VERIFIED',
      deadline: '2026-12-08',
      fundingAmount: '₹75 Lakhs'
    },
    {
      id: 'opp-tourism-digital-mission',
      title: 'National Digital Tourism Mission Startup Pitch Call',
      slug: 'national-digital-tourism-mission-pitch',
      description: 'Grant support for building unified tourist registry applications, AR/VR heritage guides, and sustainable hospitality management platforms.',
      authority: 'Ministry of Tourism',
      category: 'TravelTech',
      status: 'OPEN',
      sourceUrl: 'https://tourism.gov.in',
      sourceAuthority: 'Ministry of Tourism',
      verificationStatus: 'VERIFIED',
      deadline: '2026-11-22',
      fundingAmount: '₹20 Lakhs'
    },
    {
      id: 'opp-icar-agritech-incubation',
      title: 'ICAR National Agricultural Innovation Fund (NAIF) Startup Call',
      slug: 'icar-naif-startup-call',
      description: 'Grants for commercializing agricultural machinery, precision farming algorithms, and post-harvest biotech innovations.',
      authority: 'Indian Council of Agricultural Research (ICAR)',
      category: 'AgriTech R&D',
      status: 'OPEN',
      sourceUrl: 'https://icar.org.in',
      sourceAuthority: 'ICAR',
      verificationStatus: 'VERIFIED',
      deadline: '2026-12-15',
      fundingAmount: '₹25 Lakhs'
    },
    {
      id: 'opp-shell-nrdc-innovation',
      title: 'NRDC National Technology Day Innovation Awards & Grant',
      slug: 'nrdc-national-technology-day-grant',
      description: 'Financial recognition and scale-up grant for commercialized indigenous technologies developed by startups and SMEs.',
      authority: 'National Research Development Corporation (NRDC)',
      category: 'Technology Commercialization',
      status: 'OPEN',
      sourceUrl: 'https://nrdcindia.com',
      sourceAuthority: 'NRDC',
      verificationStatus: 'VERIFIED',
      deadline: '2026-11-30',
      fundingAmount: '₹15 Lakhs'
    },
    {
      id: 'opp-skill-india-digital-hub',
      title: 'MSDE Skill India Digital Hackathon & EdTech Innovation Call',
      slug: 'msde-skill-india-digital-hackathon',
      description: 'Funding for developing AI-powered skill assessment tools, immersive VR training modules, and vernacular e-learning solutions.',
      authority: 'Ministry of Skill Development and Entrepreneurship (MSDE)',
      category: 'EdTech & Skills',
      status: 'OPEN',
      sourceUrl: 'https://msde.gov.in',
      sourceAuthority: 'MSDE',
      verificationStatus: 'VERIFIED',
      deadline: '2026-12-10',
      fundingAmount: '₹30 Lakhs'
    },
    {
      id: 'opp-ireda-solar-manufacturing-call',
      title: 'IREDA Advanced Solar PV Module R&D Funding Call',
      slug: 'ireda-advanced-solar-pv-rd-call',
      description: 'Grants supporting perovskite solar cell research, bifacial module efficiency upgrades, and domestic recycling pilot plants.',
      authority: 'Indian Renewable Energy Development Agency (IREDA)',
      category: 'Solar R&D',
      status: 'OPEN',
      sourceUrl: 'https://www.ireda.in',
      sourceAuthority: 'IREDA',
      verificationStatus: 'VERIFIED',
      deadline: '2026-12-20',
      fundingAmount: '₹50 Lakhs'
    },
    {
      id: 'opp-coir-board-modernization',
      title: 'Coir Board Technology Upgradation & Automation Challenge',
      slug: 'coir-board-automation-challenge',
      description: 'Financial assistance for developing automated fiber extraction machinery and eco-friendly coir composite materials.',
      authority: 'Coir Board, Ministry of MSME',
      category: 'Traditional Industry Tech',
      status: 'OPEN',
      sourceUrl: 'https://coirboard.gov.in',
      sourceAuthority: 'Coir Board',
      verificationStatus: 'VERIFIED',
      deadline: '2026-11-15',
      fundingAmount: '₹10 Lakhs'
    },
    {
      id: 'opp-stit-handloom-design',
      title: 'Handloom Export Promotion Council Designer Partnership Grant',
      slug: 'hepc-designer-partnership-grant',
      description: 'Grants connecting digital-first textile designers with handloom weaver clusters for export-ready product lines.',
      authority: 'Office of the Development Commissioner for Handlooms',
      category: 'Handloom Design',
      status: 'OPEN',
      sourceUrl: 'https://handlooms.nic.in',
      sourceAuthority: 'Ministry of Textiles',
      verificationStatus: 'VERIFIED',
      deadline: '2026-11-25',
      fundingAmount: '₹12 Lakhs'
    },
    {
      id: 'opp-ncert-educational-tech',
      title: 'NCERT Digital Pedagogical Tool Innovation Challenge',
      slug: 'ncert-digital-pedagogical-tool-challenge',
      description: 'Grants for developing accessible digital textbooks, gamified STEM learning apps for rural students, and inclusive tools for divyang learners.',
      authority: 'NCERT / Ministry of Education',
      category: 'Educational Tech',
      status: 'OPEN',
      sourceUrl: 'https://ncert.nic.in',
      sourceAuthority: 'Ministry of Education',
      verificationStatus: 'VERIFIED',
      deadline: '2026-12-05',
      fundingAmount: '₹20 Lakhs'
    },
    {
      id: 'opp-Port-authority-smart-shipping',
      title: 'Major Ports Authority Green Shipping & Port Automation Call',
      slug: 'major-ports-green-shipping-call',
      description: 'Innovation funding for automated container tracking, shore-power charging infrastructure, and harbor decarbonization tech.',
      authority: 'Ministry of Ports, Shipping and Waterways',
      category: 'Maritime Innovation',
      status: 'OPEN',
      sourceUrl: 'https://shipmin.gov.in',
      sourceAuthority: 'Ministry of Ports',
      verificationStatus: 'VERIFIED',
      deadline: '2026-12-18',
      fundingAmount: '₹75 Lakhs'
    },
    {
      id: 'opp-fci-grain-storage-tech',
      title: 'Food Corporation of India Silo & Grain Preservation Tech Challenge',
      slug: 'fci-grain-preservation-tech-challenge',
      description: 'Deployment grants for IoT-based silo humidity sensors, pest management drones, and automated grain sorting systems.',
      authority: 'Food Corporation of India (FCI)',
      category: 'AgriLogistics Tech',
      status: 'OPEN',
      sourceUrl: 'https://fci.gov.in',
      sourceAuthority: 'FCI',
      verificationStatus: 'VERIFIED',
      deadline: '2026-11-20',
      fundingAmount: '₹35 Lakhs'
    },
    {
      id: 'opp-rail-tel-station-wifi',
      title: 'RailTel Rural Edge Computing & IoT Station Automation Call',
      slug: 'railtel-edge-computing-automation-call',
      description: 'Grants for utilizing railway station optical fiber backbones for edge computing, rural surveillance, and smart kiosk services.',
      authority: 'RailTel Corporation of India',
      category: 'Telecom & IoT',
      status: 'OPEN',
      sourceUrl: 'https://www.railtelindia.com',
      sourceAuthority: 'RailTel',
      verificationStatus: 'VERIFIED',
      deadline: '2026-12-12',
      fundingAmount: '₹50 Lakhs'
    },
    {
      id: 'opp-c-dac-supercomputing-grant',
      title: 'C-DAC National Supercomputing Mission Startup Compute Grant',
      slug: 'c-dac-supercomputing-startup-grant',
      description: 'Subsidized compute hours and financial grants on Param supercomputers for LLM training and climate modeling startups.',
      authority: 'C-DAC / MeitY',
      category: 'Supercomputing & AI',
      status: 'OPEN',
      sourceUrl: 'https://www.cdac.in',
      sourceAuthority: 'C-DAC',
      verificationStatus: 'VERIFIED',
      deadline: '2026-11-30',
      fundingAmount: '₹25 Lakhs Equivalent Compute Credits'
    },
    {
      id: 'opp-nielit-cybersecurity-hackathon',
      title: 'NIELIT National Cyber Security Defense Hackathon & Grant',
      slug: 'nielit-cybersecurity-defense-hackathon',
      description: 'Innovation challenge for building indigenous critical infrastructure protection tools, cryptography modules, and anti-fraud systems.',
      authority: 'NIELIT / MeitY',
      category: 'Cybersecurity',
      status: 'OPEN',
      sourceUrl: 'https://nielit.gov.in',
      sourceAuthority: 'NIELIT',
      verificationStatus: 'VERIFIED',
      deadline: '2026-11-28',
      fundingAmount: '₹30 Lakhs'
    },
    {
      id: 'opp-central-silk-board-tech',
      title: 'Central Silk Board Mechanization & Mulberry Biotech Call',
      slug: 'central-silk-board-mechanization-call',
      description: 'Grants for developing automated reeling machines, disease-resistant silkworm strains, and eco-friendly dyeing agents.',
      authority: 'Central Silk Board, Ministry of Textiles',
      category: 'Sericulture Tech',
      status: 'OPEN',
      sourceUrl: 'https://csb.gov.in',
      sourceAuthority: 'Central Silk Board',
      verificationStatus: 'VERIFIED',
      deadline: '2026-12-01',
      fundingAmount: '₹15 Lakhs'
    },
    {
      id: 'opp-nhidcl-tunneling-tech',
      title: 'NHIDCL High-Altitude Tunneling & Geological Sensor Challenge',
      slug: 'nhidcl-tunneling-geological-challenge',
      description: 'Funding for advanced ground-penetrating radar, acoustic early-warning sensors, and automated landslide monitoring systems.',
      authority: 'National Highways and Infrastructure Development Corporation (NHIDCL)',
      category: 'Civil Infrastructure Tech',
      status: 'OPEN',
      sourceUrl: 'https://nhidcl.com',
      sourceAuthority: 'NHIDCL',
      verificationStatus: 'VERIFIED',
      deadline: '2026-12-15',
      fundingAmount: '₹60 Lakhs'
    },
    {
      id: 'opp-ccrs-unani-research',
      title: 'Central Council for Research in Unani Medicine Startup Grant',
      slug: 'ccrum-startup-research-grant',
      description: 'Grants for clinical validation, analytical standardization, and digital archiving of traditional Unani formulations.',
      authority: 'CCRUM, Ministry of AYUSH',
      category: 'Traditional Pharma R&D',
      status: 'OPEN',
      sourceUrl: 'https://ccrum.res.in',
      sourceAuthority: 'Ministry of AYUSH',
      verificationStatus: 'VERIFIED',
      deadline: '2026-11-22',
      fundingAmount: '₹25 Lakhs'
    },
    {
      id: 'opp-niti-aayog-aspirational-districts',
      title: 'Aspirational Districts Fellowship & Grassroots Innovation Call',
      slug: 'aspirational-districts-innovation-call',
      description: 'Grants for grassroots innovators deploying low-cost water purification, decentralized solar, and primary health diagnostics.',
      authority: 'NITI Aayog',
      category: 'Social Impact Innovation',
      status: 'OPEN',
      sourceUrl: 'https://niti.gov.in',
      sourceAuthority: 'NITI Aayog',
      verificationStatus: 'VERIFIED',
      deadline: '2026-12-08',
      fundingAmount: '₹20 Lakhs'
    },
    {
      id: 'opp-cci-competition-research',
      title: 'Competition Commission of India Market Research & Tech Policy Grant',
      slug: 'cci-market-research-tech-policy-grant',
      description: 'Research grants for academic institutions and policy think tanks studying antitrust dynamics in digital platform markets.',
      authority: 'Competition Commission of India (CCI)',
      category: 'Economic & Tech Policy',
      status: 'OPEN',
      sourceUrl: 'https://www.cci.gov.in',
      sourceAuthority: 'CCI',
      verificationStatus: 'VERIFIED',
      deadline: '2026-11-15',
      fundingAmount: '₹15 Lakhs'
    },
    {
      id: 'opp-spices-board-export-tech',
      title: 'Spices Board Value Addition & Traceability Tech Challenge',
      slug: 'spices-board-traceability-tech-challenge',
      description: 'Funding for blockchain-based spice origin traceability, automated sorting, and pesticide residue testing kit manufacturing.',
      authority: 'Spices Board India, Ministry of Commerce',
      category: 'AgriExport Tech',
      status: 'OPEN',
      sourceUrl: 'https://www.indianspices.com',
      sourceAuthority: 'Spices Board',
      verificationStatus: 'VERIFIED',
      deadline: '2026-12-10',
      fundingAmount: '₹30 Lakhs'
    },
    {
      id: 'opp-uidai-aadhaar-hackathon',
      title: 'UIDAI Aadhaar Authentication & Privacy-Preserving Hackathon',
      slug: 'uidai-aadhaar-privacy-hackathon',
      description: 'Grants for building zero-knowledge proof authentication wrappers, offline QR verification SDKs, and biometric liveness checks.',
      authority: 'Unique Identification Authority of India (UIDAI)',
      category: 'GovTech & Security',
      status: 'OPEN',
      sourceUrl: 'https://uidai.gov.in',
      sourceAuthority: 'UIDAI',
      verificationStatus: 'VERIFIED',
      deadline: '2026-12-20',
      fundingAmount: '₹40 Lakhs'
    },
    {
      id: 'opp-nift-design-incubation',
      title: 'National Institute of Fashion Technology (NIFT) Craft & Tech Incubation Call',
      slug: 'nift-craft-tech-incubation-call',
      description: 'Grants for startups blending traditional artisan crafts with smart textile tech, IoT wear, and sustainable material science.',
      authority: 'National Institute of Fashion Technology (NIFT)',
      category: 'Design & CraftTech',
      status: 'OPEN',
      sourceUrl: 'https://nift.ac.in',
      sourceAuthority: 'NIFT',
      verificationStatus: 'VERIFIED',
      deadline: '2026-12-15',
      fundingAmount: '₹20 Lakhs'
    },
    {
      id: 'opp-iiser-science-entrepreneurship',
      title: 'IISER Science Entrepreneurship & Deep-Science Incubation Grant',
      slug: 'iiser-deep-science-incubation-grant',
      description: 'Early-stage seed funding and laboratory access for PhD scholars and scientists commercializing deep-science breakthroughs.',
      authority: 'Ministry of Education / IISER',
      category: 'Deep Science',
      status: 'OPEN',
      sourceUrl: 'https://www.iiser.ac.in',
      sourceAuthority: 'IISER',
      verificationStatus: 'VERIFIED',
      deadline: '2026-12-22',
      fundingAmount: '₹25 Lakhs'
    },
    {
      id: 'opp-ni-msme-entrepreneur-call',
      title: 'National Institute for MSME (NI-MSME) Enterprise Booster Call',
      slug: 'ni-msme-enterprise-booster-call',
      description: 'Incubation, market linkage support, and financial advisory grants for manufacturing MSMEs scaling up operations.',
      authority: 'Ministry of MSME / NI-MSME',
      category: 'MSME Growth',
      status: 'OPEN',
      sourceUrl: 'https://www.nimsme.org',
      sourceAuthority: 'NI-MSME',
      verificationStatus: 'VERIFIED',
      deadline: '2026-11-30',
      fundingAmount: '₹15 Lakhs'
    },
    {
      id: 'opp-iift-trade-tech-challenge',
      title: 'Indian Institute of Foreign Trade (IIFT) ExportTech Innovation Call',
      slug: 'iift-exporttech-innovation-call',
      description: 'Grants for startups building cross-border payment compliance, digital customs documentation, and logistics tracking tools.',
      authority: 'IIFT / Ministry of Commerce',
      category: 'ExportTech',
      status: 'OPEN',
      sourceUrl: 'https://www.iift.ac.in',
      sourceAuthority: 'IIFT',
      verificationStatus: 'VERIFIED',
      deadline: '2026-12-10',
      fundingAmount: '₹30 Lakhs'
    },
    {
      id: 'opp-iimb-social-impact-fund',
      title: 'NSRCEL IIM Bangalore Social Enterprise Incubation & Grant Call',
      slug: 'iimb-nsrcel-social-impact-grant',
      description: 'Seed funding and incubator support for tech-enabled social enterprises addressing livelihood, waste management, and financial inclusion.',
      authority: 'IIM Bangalore NSRCEL',
      category: 'Social Enterprise',
      status: 'OPEN',
      sourceUrl: 'https://www.nsrcel.org',
      sourceAuthority: 'IIM Bangalore',
      verificationStatus: 'VERIFIED',
      deadline: '2026-12-18',
      fundingAmount: '₹40 Lakhs'
    },
    {
      id: 'opp-iima-ventures-agri-call',
      title: 'CIIE.CO IIM Ahmedabad Agri-Food Innovation Seed Call',
      slug: 'ciie-iima-agrifood-seed-call',
      description: 'Venture investment and seed grant for agritech and food processing startups scaling post-harvest supply chains.',
      authority: 'CIIE.CO IIM Ahmedabad / DST',
      category: 'AgriTech Venture',
      status: 'OPEN',
      sourceUrl: 'https://ciie.co',
      sourceAuthority: 'IIM Ahmedabad',
      verificationStatus: 'VERIFIED',
      deadline: '2026-12-25',
      fundingAmount: '₹50 Lakhs'
    },
    {
      id: 'opp-iimc-media-tech-incubator',
      title: 'IIMC MediaTech Startup Incubation & Content Innovation Grant',
      slug: 'iimc-mediatech-incubation-grant',
      description: 'Grants for vernacular AI transcription tools, automated fact-checking software, and immersive AR journalism applications.',
      authority: 'Indian Institute of Mass Communication (IIMC)',
      category: 'MediaTech',
      status: 'OPEN',
      sourceUrl: 'https://iimc.gov.in',
      sourceAuthority: 'IIMC',
      verificationStatus: 'VERIFIED',
      deadline: '2026-11-28',
      fundingAmount: '₹20 Lakhs'
    },
    {
      id: 'opp-nitie-supply-chain-challenge',
      title: 'IISc / IIT Delhi Joint Smart Manufacturing & Industry 4.0 Challenge',
      slug: 'iisc-iitd-industry-4-0-challenge',
      description: 'Research and deployment grants for digital twin factory models, predictive maintenance IoT sensors, and robotic assembly.',
      authority: 'Department of Science and Technology (DST)',
      category: 'Industry 4.0',
      status: 'OPEN',
      sourceUrl: 'https://dst.gov.in',
      sourceAuthority: 'DST',
      verificationStatus: 'VERIFIED',
      deadline: '2026-12-30',
      fundingAmount: '₹75 Lakhs'
    },
    {
      id: 'opp-nccl-coal-tech-innovation',
      title: 'Ministry of Coal Clean Coal Technology & Methane Capture Call',
      slug: 'ministry-of-coal-clean-tech-call',
      description: 'Funding for underground coal gasification R&D, abandoned mine methane capture, and automated heavy mining equipment safety.',
      authority: 'Ministry of Coal',
      category: 'Clean Coal Tech',
      status: 'OPEN',
      sourceUrl: 'https://coal.nic.in',
      sourceAuthority: 'Ministry of Coal',
      verificationStatus: 'VERIFIED',
      deadline: '2026-12-12',
      fundingAmount: '₹50 Lakhs'
    },
    {
      id: 'opp-ireda-offshore-wind-call',
      title: 'National Institute of Wind Energy (NIWE) Offshore Wind R&D Grant',
      slug: 'niwe-offshore-wind-rd-grant',
      description: 'Grants supporting offshore wind turbine foundation testing, seabed mapping sensor deployment, and meteorological data analytics.',
      authority: 'Ministry of New and Renewable Energy (MNRE)',
      category: 'Offshore Wind',
      status: 'OPEN',
      sourceUrl: 'https://niwe.res.in',
      sourceAuthority: 'NIWE',
      verificationStatus: 'VERIFIED',
      deadline: '2026-12-28',
      fundingAmount: '₹1 Crore'
    },
    {
      id: 'opp-central-zoo-authority-eco-tech',
      title: 'Central Zoo Authority Wildlife Habitat Monitoring Tech Call',
      slug: 'cza-wildlife-habitat-monitoring-call',
      description: 'Grants for AI-based camera trap image recognition, acoustic animal tracking sensors, and veterinary telehealth software.',
      authority: 'Ministry of Environment, Forest and Climate Change',
      category: 'Conservation Tech',
      status: 'OPEN',
      sourceUrl: 'https://cza.nic.in',
      sourceAuthority: 'MoEFCC',
      verificationStatus: 'VERIFIED',
      deadline: '2026-11-25',
      fundingAmount: '₹15 Lakhs'
    },
    {
      id: 'opp-aim-tinkering-lab-mentorship',
      title: 'Atal Tinkering Lab Hardware Startup Mentorship & Grant Challenge',
      slug: 'aim-tinkering-lab-hardware-challenge',
      description: 'Grants for hardware startup founders developing low-cost STEM laboratory kits and robotics teaching aids for schools.',
      authority: 'Atal Innovation Mission (AIM)',
      category: 'STEM Hardware',
      status: 'OPEN',
      sourceUrl: 'https://aim.gov.in',
      sourceAuthority: 'AIM NITI Aayog',
      verificationStatus: 'VERIFIED',
      deadline: '2026-12-05',
      fundingAmount: '₹20 Lakhs'
    },
    {
      id: 'opp-icar-fisheries-tech',
      title: 'Central Inland Fisheries Research Institute Aquaculture Tech Call',
      slug: 'cifri-aquaculture-tech-call',
      description: 'Funding for automated water quality monitoring IoT probes, precision fish feeding devices, and recirculating aquaculture systems (RAS).',
      authority: 'ICAR-CIFRI',
      category: 'Aquaculture Tech',
      status: 'OPEN',
      sourceUrl: 'https://cifri.icar.gov.in',
      sourceAuthority: 'ICAR',
      verificationStatus: 'VERIFIED',
      deadline: '2026-12-10',
      fundingAmount: '₹25 Lakhs'
    },
    {
      id: 'opp-ncdc-cooperative-startup',
      title: 'National Cooperative Development Corporation (NCDC) Yuva Sahakar Call',
      slug: 'ncdc-yuva-sahakar-startup-call',
      description: 'Concessional financial assistance and equity support for cooperative societies founded by young entrepreneurs.',
      authority: 'NCDC, Ministry of Cooperation',
      category: 'Cooperative Startup',
      status: 'OPEN',
      sourceUrl: 'https://www.ncdc.in',
      sourceAuthority: 'NCDC',
      verificationStatus: 'VERIFIED',
      deadline: '2026-12-20',
      fundingAmount: '₹50 Lakhs'
    },
    {
      id: 'opp-icmr-vector-borne-challenge',
      title: 'ICMR Vector-Borne Disease Diagnostics & Prevention Tech Call',
      slug: 'icmr-vector-borne-diagnostics-call',
      description: 'Grants for rapid point-of-care diagnostic kits, AI mosquito breeding hotspot prediction models, and safe biolarvicides.',
      authority: 'Indian Council of Medical Research (ICMR)',
      category: 'Public Health Tech',
      status: 'OPEN',
      sourceUrl: 'https://main.icmr.nic.in',
      sourceAuthority: 'ICMR',
      verificationStatus: 'VERIFIED',
      deadline: '2026-12-15',
      fundingAmount: '₹40 Lakhs'
    },
    {
      id: 'opp-pfrda-fintech-pension-hackathon',
      title: 'PFRDA Pension Sector FinTech Hackathon & Integration Grant',
      slug: 'pfrda-pension-fintech-hackathon',
      description: 'Grants for developing friction-free digital onboarding, annuity comparison tools, and micro-pension savings apps.',
      authority: 'Pension Fund Regulatory and Development Authority (PFRDA)',
      category: 'FinTech & Pension',
      status: 'OPEN',
      sourceUrl: 'https://pfrda.org.in',
      sourceAuthority: 'PFRDA',
      verificationStatus: 'VERIFIED',
      deadline: '2026-11-30',
      fundingAmount: '₹30 Lakhs'
    },
    {
      id: 'opp-ibbi-insolvency-tech-call',
      title: 'Insolvency and Bankruptcy Board of India (IBBI) LegalTech Challenge',
      slug: 'ibbi-legaltech-challenge',
      description: 'Grants for automated liquidation asset valuation tools, e-voting systems for Committee of Creditors, and claims management portals.',
      authority: 'IBBI',
      category: 'LegalTech',
      status: 'OPEN',
      sourceUrl: 'https://ibbi.gov.in',
      sourceAuthority: 'IBBI',
      verificationStatus: 'VERIFIED',
      deadline: '2026-12-08',
      fundingAmount: '₹20 Lakhs'
    },
    {
      id: 'opp-cci-esg-rating-framework',
      title: 'SEBI / ICSI Sustainable ESG Rating & Analytics Startup Call',
      slug: 'sebi-icsi-esg-analytics-call',
      description: 'Funding for automated carbon footprint accounting software, green bond verification tools, and ESG compliance scorecards.',
      authority: 'SEBI / ICSI',
      category: 'ESG & Compliance',
      status: 'OPEN',
      sourceUrl: 'https://www.sebi.gov.in',
      sourceAuthority: 'SEBI',
      verificationStatus: 'VERIFIED',
      deadline: '2026-12-18',
      fundingAmount: '₹35 Lakhs'
    },
    {
      id: 'opp-trai-telecom-sandbox-call',
      title: 'TRAI Regulatory Sandbox Innovation Call for Telecom & IoT',
      slug: 'trai-regulatory-sandbox-innovation-call',
      description: 'Regulatory testing clearance and grant support for novel machine-to-machine communication, satellite IoT, and spam-prevention AI.',
      authority: 'Telecom Regulatory Authority of India (TRAI)',
      category: 'Telecom Sandbox',
      status: 'OPEN',
      sourceUrl: 'https://www.trai.gov.in',
      sourceAuthority: 'TRAI',
      verificationStatus: 'VERIFIED',
      deadline: '2026-12-22',
      fundingAmount: '₹50 Lakhs'
    }
  ];

  private store: IndexedCatalogStore<Opportunity>;

  constructor() {
    this.store = new IndexedCatalogStore<Opportunity>(this.items);
  }

  getAll(): Opportunity[] { return this.items; }
  getById(id: string): Opportunity | undefined { return this.store.getById(id) || this.items.find(i => i.id === id); }
  getBySlug(slug: string): Opportunity | undefined { return this.store.getBySlug(slug) || this.items.find(i => i.slug === slug); }
  search(query: string, category?: string): Opportunity[] {
    return this.store.search(query, category);
  }
  getPaginated(options: CatalogQueryOptions): PaginatedResult<Opportunity> {
    return this.store.getPaginated(options);
  }
  getFacets(): CatalogFacets {
    return this.store.getFacets();
  }
  getTotalCount(): number {
    return this.store.getTotalCount();
  }
  add(item: Opportunity): boolean {
    if (!this.items.some(i => i.id === item.id || (item.projectId && i.projectId === item.projectId))) {
      this.items.push(item);
      this.store.add(item);
      return true;
    }
    return false;
  }
}

export class TenderRepository implements Repository<Tender> {
  private items: Tender[] = [
    {
      id: 'tender-cppp-01',
      title: 'Procurement of Enterprise Cloud Servers and Storage Area Network (SAN)',
      slug: 'procurement-enterprise-cloud-servers-san',
      description: 'Supply, installation, configuration and 5-year comprehensive maintenance of enterprise blade servers and high-availability SAN storage for National Data Centre.',
      authority: 'National Informatics Centre (NIC) / MeitY',
      category: 'IT Infrastructure & Servers',
      status: 'OPEN',
      sourceUrl: 'https://eprocure.gov.in',
      sourceAuthority: 'CPPP eProcure',
      verificationStatus: 'VERIFIED',
      tenderValue: '₹14.5 Crores',
      submissionDeadline: '2026-10-25',
      location: 'New Delhi'
    },
    {
      id: 'tender-rail-02',
      title: 'Design, Supply and Commissioning of Automatic Train Protection (ATP) Subsystems',
      slug: 'design-supply-commissioning-atp-subsystems',
      description: 'Procurement and trackside integration of signaling and telecommunication safety gear under Indian Railways Modernization Mission.',
      authority: 'Ministry of Railways (Railway Board)',
      category: 'Railway Signalling & Telecommunication',
      status: 'OPEN',
      sourceUrl: 'https://www.ireps.gov.in',
      sourceAuthority: 'IREPS Indian Railways',
      verificationStatus: 'VERIFIED',
      tenderValue: '₹85.0 Crores',
      submissionDeadline: '2026-11-10',
      location: 'New Delhi / Pan-India'
    },
    {
      id: 'tender-nhai-03',
      title: 'Four-Laning of National Highway Section with Rigid Pavement and Elevated Corridors',
      slug: 'four-laning-national-highway-rigid-pavement',
      description: 'Engineering, Procurement, and Construction (EPC) contract for highway expansion, bridging viaducts, and toll plaza automation.',
      authority: 'National Highways Authority of India (NHAI)',
      category: 'Civil Construction & Highways',
      status: 'OPEN',
      sourceUrl: 'https://etenders.gov.in',
      sourceAuthority: 'NHAI E-Procurement',
      verificationStatus: 'VERIFIED',
      tenderValue: '₹340.0 Crores',
      submissionDeadline: '2026-11-18',
      location: 'Maharashtra / Karnataka'
    },
    {
      id: 'tender-bhel-04',
      title: 'Supply of High-Temperature Superconducting Generator Coils and Turbine Castings',
      slug: 'supply-high-temperature-superconducting-generator-coils',
      description: 'Manufacturing and factory testing of turbine rotor forgings and high-efficiency stator coils for 800MW supercritical thermal units.',
      authority: 'Bharat Heavy Electricals Limited (BHEL)',
      category: 'Power Equipment & Heavy Metallurgy',
      status: 'OPEN',
      sourceUrl: 'https://www.bhel.com',
      sourceAuthority: 'BHEL Tender Portal',
      verificationStatus: 'VERIFIED',
      tenderValue: '₹48.2 Crores',
      submissionDeadline: '2026-10-30',
      location: 'Haridwar / Trichy'
    },
    {
      id: 'tender-ongc-05',
      title: 'Offshore Seismic Data Acquisition and 3D Subsurface Imaging Services',
      slug: 'offshore-seismic-data-acquisition-3d-imaging',
      description: 'Acquisition of high-density 3D seismic data across deep-water exploratory blocks in Western Offshore basin.',
      authority: 'Oil and Natural Gas Corporation (ONGC)',
      category: 'Oil & Gas Exploration',
      status: 'OPEN',
      sourceUrl: 'https://etenders.gov.in',
      sourceAuthority: 'ONGC E-Procurement',
      verificationStatus: 'VERIFIED',
      tenderValue: '₹120.0 Crores',
      submissionDeadline: '2026-11-05',
      location: 'Mumbai Offshore'
    },
    {
      id: 'tender-ntpc-06',
      title: 'Design, Engineering and Erection of 100MW Floating Solar PV Power Plant',
      slug: 'design-engineering-erection-100mw-floating-solar',
      description: 'Turnkey EPC contract including mooring systems, floaters, solar PV modules, and invertor stations on reservoir water body.',
      authority: 'NTPC Limited',
      category: 'Renewable Energy EPC',
      status: 'OPEN',
      sourceUrl: 'https://eprocure.gov.in',
      sourceAuthority: 'NTPC Tender Portal',
      verificationStatus: 'VERIFIED',
      tenderValue: '₹450.0 Crores',
      submissionDeadline: '2026-11-22',
      location: 'Ramagundam / Madhya Pradesh'
    },
    {
      id: 'tender-powergrid-07',
      title: 'Supply and Installation of 765kV Gas Insulated Switchgear (GIS) Substation Equipment',
      slug: 'supply-installation-765kv-gis-substation',
      description: 'Design, manufacturing, delivery, erection and commissioning of 765/400kV GIS bays and associated lightning arresters.',
      authority: 'Power Grid Corporation of India Limited (POWERGRID)',
      category: 'Power Transmission',
      status: 'OPEN',
      sourceUrl: 'https://etenders.gov.in',
      sourceAuthority: 'POWERGRID E-Tender',
      verificationStatus: 'VERIFIED',
      tenderValue: '₹115.0 Crores',
      submissionDeadline: '2026-11-15',
      location: 'Gurugram / Regional Substations'
    },
    {
      id: 'tender-isro-08',
      title: 'Procurement of Aerospace-Grade Carbon Fiber Composites and Epoxy Resins',
      slug: 'procurement-aerospace-grade-carbon-fiber-composites',
      description: 'Supply of high-modulus carbon fiber tows, prepregs, and structural adhesive films for rocket motor casing and fairing manufacturing.',
      authority: 'Indian Space Research Organisation (ISRO / VSSC)',
      category: 'Aerospace Materials',
      status: 'OPEN',
      sourceUrl: 'https://www.isro.gov.in',
      sourceAuthority: 'ISRO E-Procurement',
      verificationStatus: 'VERIFIED',
      tenderValue: '₹22.0 Crores',
      submissionDeadline: '2026-10-28',
      location: 'Thiruvananthapuram / Bengaluru'
    },
    {
      id: 'post-aiims-09',
      title: 'Supply of Advanced Robotic Surgical Systems and Navigation Consoles',
      slug: 'supply-advanced-robotic-surgical-systems',
      description: 'Procurement of multi-arm robotic surgical assistants, high-definition 3D vision carts, and specialized sterile instrument kits for surgical departments.',
      authority: 'All India Institute of Medical Sciences (AIIMS)',
      category: 'Medical Equipment & Healthcare',
      status: 'OPEN',
      sourceUrl: 'https://eprocure.gov.in',
      sourceAuthority: 'AIIMS E-Procurement',
      verificationStatus: 'VERIFIED',
      tenderValue: '₹36.5 Crores',
      submissionDeadline: '2026-11-08',
      location: 'New Delhi'
    },
    {
      id: 'tender-sci-10',
      title: 'Dry Docking, Special Survey and Hull Rehabilitation of Coastal Vessels',
      slug: 'dry-docking-special-survey-hull-rehabilitation',
      description: 'Comprehensive shipyard dry docking, sandblasting, anti-corrosive coating, and marine machinery overhauling for dredgers.',
      authority: 'Shipping Corporation of India (SCI)',
      category: 'Maritime & Ship Repair',
      status: 'OPEN',
      sourceUrl: 'https://eprocure.gov.in',
      sourceAuthority: 'SCI Tender Cell',
      verificationStatus: 'VERIFIED',
      tenderValue: '₹18.0 Crores',
      submissionDeadline: '2026-10-20',
      location: 'Mumbai / Kochi Shipyard'
    },
    {
      id: 'tender-iocl-11',
      title: 'Construction of Cryogenic LPG Storage Mounded Bullets and Firefighting Network',
      slug: 'construction-cryogenic-lpg-storage-mounded-bullets',
      description: 'Civil construction, structural steel fabrication, pressure vessel erection, and deluge fire protection ring installation at bulk petroleum depot.',
      authority: 'Indian Oil Corporation Limited (IOCL)',
      category: 'Oil & Gas Infrastructure',
      status: 'OPEN',
      sourceUrl: 'https://etenders.gov.in',
      sourceAuthority: 'IOCL E-Tender',
      verificationStatus: 'VERIFIED',
      tenderValue: '₹64.0 Crores',
      submissionDeadline: '2026-11-12',
      location: 'Gujarat / Odisha'
    },
    {
      id: 'tender-coalindia-12',
      title: 'Deployment of High-Capacity Autonomous Surface Mining Dump Trucks',
      slug: 'deployment-high-capacity-autonomous-surface-mining-trucks',
      description: 'Supply and fleet management contract for 240-ton electric drive rear dumpers equipped with collision avoidance and telematics.',
      authority: 'Coal India Limited (CIL / SECL)',
      category: 'Mining Machinery & Equipment',
      status: 'OPEN',
      sourceUrl: 'https://etenders.gov.in',
      sourceAuthority: 'Coal India E-Procurement',
      verificationStatus: 'VERIFIED',
      tenderValue: '₹195.0 Crores',
      submissionDeadline: '2026-11-25',
      location: 'Chhattisgarh / Jharkhand'
    },
    {
      id: 'tender-bsnl-13',
      title: 'Rollout of FTTH Fiber Optic Cable Access Networks in Rural Blocks',
      slug: 'rollout-ftth-fiber-optic-cable-access-networks',
      description: 'Trenching, ducting, blowing, splicing, and termination of optical fiber cables (OFC) connecting Gram Panchayats under BharatNet phase.',
      authority: 'Bharat Sanchar Nigam Limited (BSNL)',
      category: 'Telecom Infrastructure & Fiber',
      status: 'OPEN',
      sourceUrl: 'https://www.bsnl.co.in',
      sourceAuthority: 'BSNL Tender Portal',
      verificationStatus: 'VERIFIED',
      tenderValue: '₹78.0 Crores',
      submissionDeadline: '2026-11-02',
      location: 'Multiple Circles (Uttar Pradesh / Bihar)'
    },
    {
      id: 'tender-HAL-14',
      title: 'Machining and Heat Treatment of Aero-Engine Turbine Blades and Casings',
      slug: 'machining-heat-treatment-aero-engine-turbine-blades',
      description: 'Precision 5-axis CNC milling, vacuum heat treatment, and non-destructive testing (NDT) for military helicopter engine components.',
      authority: 'Hindustan Aeronautics Limited (HAL)',
      category: 'Aerospace Precision Manufacturing',
      status: 'OPEN',
      sourceUrl: 'https://hal-india.co.in',
      sourceAuthority: 'HAL Tender Portal',
      verificationStatus: 'VERIFIED',
      tenderValue: '₹29.0 Crores',
      submissionDeadline: '2026-10-22',
      location: 'Bengaluru / Koraput'
    },
    {
      id: 'tender-drdo-15',
      title: 'Supply of High-Purity Electronic Grade Silicon Wafers and Gallium Nitride Substrates',
      slug: 'supply-high-purity-silicon-wafers-gan-substrates',
      description: 'Procurement of semiconductor raw materials for fabrication of indigenous radar transmit-receive (TR) modules and MMICs.',
      authority: 'Defence Research and Development Organisation (DRDO / LRDE)',
      category: 'Semiconductors & Defense Electronics',
      status: 'OPEN',
      sourceUrl: 'https://eprocure.gov.in',
      sourceAuthority: 'DRDO E-Procurement',
      verificationStatus: 'VERIFIED',
      tenderValue: '₹12.5 Crores',
      submissionDeadline: '2026-10-31',
      location: 'Bengaluru'
    },
    {
      id: 'tender-ongc-mumbai-16',
      title: 'Refurbishment of Living Quarters and Offshore Platform Safety Helidecks',
      slug: 'refurbishment-living-quarters-offshore-platform-helidecks',
      description: 'Structural retrofitting, fireproofing, HVAC duct replacement, and helideck lighting upgrades on offshore production platforms.',
      authority: 'Oil and Natural Gas Corporation (ONGC)',
      category: 'Offshore Engineering & Safety',
      status: 'OPEN',
      sourceUrl: 'https://etenders.gov.in',
      sourceAuthority: 'ONGC E-Tender',
      verificationStatus: 'VERIFIED',
      tenderValue: '₹41.0 Crores',
      submissionDeadline: '2026-11-14',
      location: 'Mumbai High Field'
    },
    {
      id: 'tender-nmcc-17',
      title: 'Establishment of Common Facility Center (CFC) for Precision Tooling and Die Making',
      slug: 'establishment-common-facility-center-precision-tooling',
      description: 'Procurement of high-precision CNC wire EDM, vertical machining centers, and 3D coordinate measuring machines (CMM) for MSME cluster.',
      authority: 'National Small Industries Corporation (NSIC)',
      category: 'Industrial Tooling & Machinery',
      status: 'OPEN',
      sourceUrl: 'https://www.nsic.co.in',
      sourceAuthority: 'NSIC Portal',
      verificationStatus: 'VERIFIED',
      tenderValue: '₹16.8 Crores',
      submissionDeadline: '2026-11-06',
      location: 'Ludhiana / Rajkot'
    },
    {
      id: 'tender-aimims-patna-18',
      title: 'Procurement of High-Resolution 3T MRI Scanners and PET-CT Imaging Units',
      slug: 'procurement-high-resolution-3t-mri-scanners',
      description: 'Supply, rig-in, radiation shielding construction, and comprehensive AMC for dual 3T MRI and PET-CT diagnostic machines.',
      authority: 'AIIMS Patna / Ministry of Health and Family Welfare',
      category: 'Medical Imaging & Diagnostics',
      status: 'OPEN',
      sourceUrl: 'https://eprocure.gov.in',
      sourceAuthority: 'AIIMS Patna E-Procurement',
      verificationStatus: 'VERIFIED',
      tenderValue: '₹55.0 Crores',
      submissionDeadline: '2026-11-20',
      location: 'Patna, Bihar'
    },
    {
      id: 'tender-dfccil-19',
      title: 'Construction of Road Over Bridges (ROBs) and Road Under Bridges (RUBs) on Dedicated Freight Corridor',
      slug: 'construction-robs-rubs-dedicated-freight-corridor',
      description: 'Structural steel girder fabrication, RCC abutment construction, and approach road paving to eliminate level crossings.',
      authority: 'Dedicated Freight Corridor Corporation of India (DFCCIL)',
      category: 'Railway Civil Infrastructure',
      status: 'OPEN',
      sourceUrl: 'https://etenders.gov.in',
      sourceAuthority: 'DFCCIL Tender Portal',
      verificationStatus: 'VERIFIED',
      tenderValue: '₹165.0 Crores',
      submissionDeadline: '2026-12-02',
      location: 'Western & Eastern DFC Routes'
    },
    {
      id: 'tender-eci-20',
      title: 'Manufacture and Supply of Secure Electronic Voting Machines (EVMs) Control Units and Balloting Units',
      slug: 'manufacture-supply-secure-evms-control-balloting',
      description: 'Strictly audited manufacturing, microcode flashing, tamper-evident sealing, and secure logistical delivery of next-gen EVM units.',
      authority: 'Election Commission of India (ECI / BEL / ECIL)',
      category: 'Secure Electronics Manufacturing',
      status: 'OPEN',
      sourceUrl: 'https://eci.gov.in',
      sourceAuthority: 'Election Commission of India',
      verificationStatus: 'VERIFIED',
      tenderValue: '₹210.0 Crores',
      submissionDeadline: '2026-12-10',
      location: 'Bengaluru / Hyderabad'
    },
    {
      id: 'tender-nainital-jal-21',
      title: 'Design and Build of 50 MLD Tertiary Stage Sewage Treatment Plant (STP) with SCADA',
      slug: 'design-build-50mld-tertiary-stage-stp',
      description: 'Advanced biological nutrient removal, membrane bioreactor (MBR) filtration, and solar sludge drying beds under Namami Gange program.',
      authority: 'National Mission for Clean Ganga (NMCG) / State Jal Nigam',
      category: 'Water & Wastewater Infrastructure',
      status: 'OPEN',
      sourceUrl: 'https://nmcg.nic.in',
      sourceAuthority: 'NMCG E-Procurement',
      verificationStatus: 'VERIFIED',
      tenderValue: '₹92.0 Crores',
      submissionDeadline: '2026-11-19',
      location: 'Uttarakhand / Uttar Pradesh'
    },
    {
      id: 'tender-sec-sol-22',
      title: 'Development of 250MW Solar Park Transmission System and Pooling Substations',
      slug: 'development-250mw-solar-park-transmission-system',
      description: 'Construction of 220/33kV pooling substations, 33kV underground cable networks, and fiber optic communication loops.',
      authority: 'Solar Energy Corporation of India (SECI)',
      category: 'Solar Grid Infrastructure',
      status: 'OPEN',
      sourceUrl: 'https://www.seci.co.in',
      sourceAuthority: 'SECI Tender Portal',
      verificationStatus: 'VERIFIED',
      tenderValue: '₹135.0 Crores',
      submissionDeadline: '2026-11-28',
      location: 'Rajasthan / Gujarat'
    },
    {
      id: 'tender-bpcl-23',
      title: 'Pipeline Integrity Management, ILI Pigging and Cathodic Protection Overhaul',
      slug: 'pipeline-integrity-management-ili-pigging',
      description: 'In-line inspection (ILI) tool runs, magnetic flux leakage testing, defect sizing, and pipeline coating refurbishment across cross-country petroleum pipelines.',
      authority: 'Bharat Petroleum Corporation Limited (BPCL)',
      category: 'Pipeline Maintenance & Safety',
      status: 'OPEN',
      sourceUrl: 'https://etenders.gov.in',
      sourceAuthority: 'BPCL E-Procurement',
      verificationStatus: 'VERIFIED',
      tenderValue: '₹33.0 Crores',
      submissionDeadline: '2026-11-04',
      location: 'Madhya Pradesh / Maharashtra Route'
    },
    {
      id: 'tender-lic-24',
      title: 'Upgrade and Migration of Enterprise Core Insurance Application Suite to Hybrid Cloud',
      slug: 'upgrade-migration-enterprise-core-insurance-cloud',
      description: 'Enterprise software licensing, database partitioning, API gateway integration, and security hardening for 300 million policyholder database.',
      authority: 'Life Insurance Corporation of India (LIC)',
      category: 'Enterprise IT & Cloud Migration',
      status: 'OPEN',
      sourceUrl: 'https://licindia.in',
      sourceAuthority: 'LIC Tender Portal',
      verificationStatus: 'VERIFIED',
      tenderValue: '₹125.0 Crores',
      submissionDeadline: '2026-12-05',
      location: 'Mumbai'
    },
    {
      id: 'tender-gsi-25',
      title: 'Airborne Geophysical Surveying and High-Resolution Radiometric Mapping',
      slug: 'airborne-geophysical-surveying-radiometric-mapping',
      description: 'Fixed-wing aircraft equipped with magnetic, electromagnetic, and radiometric sensors for strategic mineral exploration across cratonic blocks.',
      authority: 'Geological Survey of India (GSI)',
      category: 'Geophysical Surveying',
      status: 'OPEN',
      sourceUrl: 'https://www.gsi.gov.in',
      sourceAuthority: 'GSI Portal',
      verificationStatus: 'VERIFIED',
      tenderValue: '₹47.0 Crores',
      submissionDeadline: '2026-11-16',
      location: 'Central India Mineral Belt'
    },
    {
      id: 'tender-iocl-aviation-26',
      title: 'Construction of Automated Hydrant Fueling System at International Airport',
      slug: 'construction-automated-hydrant-fueling-system',
      description: 'Laying of aviation turbine fuel (ATF) underground hydrant piping, emergency shut-off valves, and pantograph dispenser vehicle bays.',
      authority: 'Indian Oil Corporation Limited (IOCL Aviation)',
      category: 'Aviation Fuel Infrastructure',
      status: 'OPEN',
      sourceUrl: 'https://etenders.gov.in',
      sourceAuthority: 'IOCL E-Procurement',
      verificationStatus: 'VERIFIED',
      tenderValue: '₹58.0 Crores',
      submissionDeadline: '2026-11-26',
      location: 'New International Airport (Jewar / Navi Mumbai)'
    },
    {
      id: 'tender-customs-27',
      title: 'Installation of High-Energy Rail-Mounted Container Scanner Portals',
      slug: 'installation-high-energy-rail-container-scanner',
      description: 'Civil foundation works, radiation safety bunker construction, and high-energy X-ray scanner integration for customs container cargo examination.',
      authority: 'Central Board of Indirect Taxes and Customs (CBIC)',
      category: 'Port & Customs Security',
      status: 'OPEN',
      sourceUrl: 'https://www.cbic.gov.in',
      sourceAuthority: 'CBIC E-Procurement',
      verificationStatus: 'VERIFIED',
      tenderValue: '₹88.0 Crores',
      submissionDeadline: '2026-12-08',
      location: 'JNPT / Mundra / Chennai Port'
    },
    {
      id: 'tender-nhpc-28',
      title: 'Hydro-Turbine Overhaul and Digital Governor Retrofitting for Hydropower Station',
      slug: 'hydro-turbine-overhaul-digital-governor-retrofitting',
      description: 'Dismantling, balancing, runner cavitation repair, and installation of dual-redundant digital electro-hydraulic governors for Francis turbines.',
      authority: 'NHPC Limited',
      category: 'Hydropower Equipment',
      status: 'OPEN',
      sourceUrl: 'https://www.nhpcindia.com',
      sourceAuthority: 'NHPC Tender Portal',
      verificationStatus: 'VERIFIED',
      tenderValue: '₹39.0 Crores',
      submissionDeadline: '2026-11-21',
      location: 'Himachal Pradesh / Jammu & Kashmir'
    },
    {
      id: 'tender-cipet-29',
      title: 'Procurement of Multi-Layer Film Extrusion Lines and Polymer Testing Instruments',
      slug: 'procurement-multilayer-film-extrusion-polymer-testing',
      description: 'Supply of 7-layer blown film extrusion machinery, differential scanning calorimeters, and universal tensile testers for polymer research institute.',
      authority: 'Central Institute of Petrochemicals Engineering and Technology (CIPET)',
      category: 'Polymer Research Machinery',
      status: 'OPEN',
      sourceUrl: 'https://www.cipet.gov.in',
      sourceAuthority: 'CIPET Portal',
      verificationStatus: 'VERIFIED',
      tenderValue: '₹14.2 Crores',
      submissionDeadline: '2026-11-09',
      location: 'Chennai / Bhubaneswar'
    },
    {
      id: 'tender-iocl-green-hydrogen-30',
      title: 'Engineering and Construction of 10MW Green Hydrogen Generation Pilot Plant',
      slug: 'engineering-construction-10mw-green-hydrogen-plant',
      description: 'Turnkey EPC contract for proton exchange membrane (PEM) electrolysers, demineralized water units, hydrogen compression, and cascade storage.',
      authority: 'Indian Oil Corporation Limited (R&D Centre / Refineries)',
      category: 'Green Hydrogen Infrastructure',
      status: 'OPEN',
      sourceUrl: 'https://etenders.gov.in',
      sourceAuthority: 'IOCL E-Procurement',
      verificationStatus: 'VERIFIED',
      tenderValue: '₹110.0 Crores',
      submissionDeadline: '2026-12-15',
      location: 'Mathura / Panipat Refinery'
    }
  ];

  private store: IndexedCatalogStore<Tender>;

  constructor() {
    this.store = new IndexedCatalogStore<Tender>(this.items);
  }

  getAll(): Tender[] { return this.items; }
  getById(id: string): Tender | undefined { return this.store.getById(id) || this.items.find(i => i.id === id); }
  getBySlug(slug: string): Tender | undefined { return this.store.getBySlug(slug) || this.items.find(i => i.slug === slug); }
  search(query: string, category?: string): Tender[] {
    return this.store.search(query, category);
  }
  getPaginated(options: CatalogQueryOptions): PaginatedResult<Tender> {
    return this.store.getPaginated(options);
  }
  getFacets(): CatalogFacets {
    return this.store.getFacets();
  }
  getTotalCount(): number {
    return this.store.getTotalCount();
  }
  add(item: Tender): boolean {
    if (!this.items.some(i => i.id === item.id)) {
      this.items.push(item);
      this.store.add(item);
      return true;
    }
    return false;
  }
}

export class NewsRepository implements Repository<NewsItem> {
  private items: NewsItem[] = [
    {
      id: 'news-pib-01',
      title: 'Union Cabinet Approves National Deep Tech Innovation Strategy and Venture Seed Fund',
      slug: 'union-cabinet-approves-national-deep-tech-strategy',
      description: 'Government unveils a dedicated ₹10,000 Crore fund to boost indigenous quantum computing, semiconductor packaging, and AI research startups.',
      authority: 'Press Information Bureau (PIB)',
      category: 'Policy & Budget',
      status: 'PUBLISHED',
      sourceUrl: 'https://pib.gov.in',
      sourceAuthority: 'PIB',
      verificationStatus: 'VERIFIED',
      publishedDate: '2026-09-11',
      content: 'The Union Cabinet chaired by the Prime Minister has approved the comprehensive National Deep Tech Innovation Strategy (NDTIS). The framework aims to streamline regulatory clearances, provide risk capital, and secure intellectual property rights for high-tech domestic ventures.'
    },
    {
      id: 'news-rbi-02',
      title: 'RBI Announces Guidelines for Cross-Border Fast Payments and Digital Trade Corridors',
      slug: 'rbi-announces-guidelines-cross-border-fast-payments',
      description: 'Reserve Bank of India establishes interoperable payment frameworks connecting UPI with major international clearing networks.',
      authority: 'Reserve Bank of India (RBI)',
      category: 'Banking & Finance',
      status: 'PUBLISHED',
      sourceUrl: 'https://www.rbi.org.in',
      sourceAuthority: 'RBI Official',
      verificationStatus: 'VERIFIED',
      publishedDate: '2026-09-09',
      content: 'In an effort to reduce trade settlement times and transaction costs for Indian exporters, the Reserve Bank of India has issued regulatory guidelines enabling direct real-time account-to-account settlements across participating G20 partner nations.'
    },
    {
      id: 'news-dpiit-03',
      title: 'DPIIT Simplifies Startup Patent Fast-Tracking and Intellectual Property Rebate Rules',
      slug: 'dpiit-simplifies-startup-patent-fast-tracking',
      description: 'Department of Promotion of Industry and Internal Trade extends 80% patent filing fee rebate and expedites examination timelines.',
      authority: 'DPIIT, Ministry of Commerce and Industry',
      category: 'Startups & Innovation',
      status: 'PUBLISHED',
      sourceUrl: 'https://www.dpiit.gov.in',
      sourceAuthority: 'DPIIT',
      verificationStatus: 'VERIFIED',
      publishedDate: '2026-09-08',
      content: 'To foster intellectual property creation among early-stage entrepreneurs, DPIIT has updated its startup recognition portal to allow automated expedited patent examination, cutting average approval duration down to less than four months.'
    },
    {
      id: 'news-mnre-04',
      title: 'Green Hydrogen Corridor Initiative Attracts ₹50,000 Crore in Private Sector Intent',
      slug: 'green-hydrogen-corridor-initiative-attracts-investment',
      description: 'Ministry of New and Renewable Energy signs landmark MoU agreements for establishing electrolyser gigafactories.',
      authority: 'Ministry of New and Renewable Energy (MNRE)',
      category: 'Clean Energy',
      status: 'PUBLISHED',
      sourceUrl: 'https://mnre.gov.in',
      sourceAuthority: 'MNRE',
      verificationStatus: 'VERIFIED',
      publishedDate: '2026-09-06',
      content: 'The National Green Hydrogen Mission has crossed a major milestone as leading industrial conglomerates commit capital toward domestic electrolyser manufacturing plants in Gujarat, Odisha, and Andhra Pradesh.'
    },
    {
      id: 'news-meity-05',
      title: 'MeitY Launches Semiconductor Design Incubation Cohort Across Tier-2 Cities',
      slug: 'meity-launches-semiconductor-design-incubation',
      description: 'Specialized EDA tool licenses and fabrication shuttle runs provided to 100 VLSI design startups.',
      authority: 'Ministry of Electronics and Information Technology (MeitY)',
      category: 'Semiconductors',
      status: 'PUBLISHED',
      sourceUrl: 'https://www.meity.gov.in',
      sourceAuthority: 'MeitY',
      verificationStatus: 'VERIFIED',
      publishedDate: '2026-09-05',
      content: 'Under the Chips to Startup (C2S) program, MeitY has inducted a new batch of semiconductor design ventures focusing on power management ICs, IoT microcontrollers, and 5G baseband silicon.'
    },
    {
      id: 'news-sebi-06',
      title: 'SEBI Introduces Social Stock Exchange Amendments to Ease Zero-Coupon Zero-Principal Instruments',
      slug: 'sebi-introduces-social-stock-exchange-amendments',
      description: 'Regulatory adjustments designed to encourage philanthropic and institutional capital flow into verified social impact projects.',
      authority: 'Securities and Exchange Board of India (SEBI)',
      category: 'Capital Markets',
      status: 'PUBLISHED',
      sourceUrl: 'https://www.sebi.gov.in',
      sourceAuthority: 'SEBI',
      verificationStatus: 'VERIFIED',
      publishedDate: '2026-09-04',
      content: 'SEBI has simplified listing norms on the Social Stock Exchange, permitting social enterprises and non-profit organizations to raise capital through zero-coupon zero-principal instruments with reduced compliance burdens.'
    },
    {
      id: 'news-msme-07',
      title: 'Ministry of MSME Expands Credit Guarantee Scheme Cover to ₹5 Crores per Enterprise',
      slug: 'ministry-msme-expands-credit-guarantee-cover',
      description: 'Collateral-free institutional credit access enhanced to support capital modernization and export scaling for manufacturing units.',
      authority: 'Ministry of MSME',
      category: 'MSME Growth',
      status: 'PUBLISHED',
      sourceUrl: 'https://msme.gov.in',
      sourceAuthority: 'Ministry of MSME',
      verificationStatus: 'VERIFIED',
      publishedDate: '2026-09-02',
      content: 'The Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE) has revised its ceiling, allowing eligible manufacturing units to access collateral-free bank loans backed by sovereign guarantee support.'
    },
    {
      id: 'news-nhai-08',
      title: 'NHAI Monetizes Highway Bundles Worth ₹15,000 Crore via Infrastructure Investment Trusts',
      slug: 'nhai-monetizes-highway-bundles-via-invits',
      description: 'Institutional and retail investors participate in robust toll-operates-transfer (TOT) asset monetization rounds.',
      authority: 'National Highways Authority of India (NHAI)',
      category: 'Infrastructure',
      status: 'PUBLISHED',
      sourceUrl: 'https://nhai.gov.in',
      sourceAuthority: 'NHAI',
      verificationStatus: 'VERIFIED',
      publishedDate: '2026-08-30',
      content: 'Demonstrating strong investor confidence in Indian transport infrastructure, NHAI successfully closed its latest Infrastructure Investment Trust (InvIT) offering, channeling domestic and foreign institutional savings into highway maintenance and expansion.'
    },
    {
      id: 'news-icmr-09',
      title: 'ICMR and BIRAC Partner to Establish National Medical Device Testing and Prototyping Hubs',
      slug: 'icmr-birac-partner-medical-device-hubs',
      description: 'Cutting regulatory hurdles for indigenous diagnostic kit manufacturers and orthopedic implant developers.',
      authority: 'Indian Council of Medical Research (ICMR) / BIRAC',
      category: 'Medical Technology',
      status: 'PUBLISHED',
      sourceUrl: 'https://main.icmr.nic.in',
      sourceAuthority: 'ICMR',
      verificationStatus: 'VERIFIED',
      publishedDate: '2026-08-28',
      content: 'To accelerate domestic medical device commercialization, ICMR and BIRAC have inaugurated accredited testing laboratories offering subsidized biocompatibility testing, electrical safety certification, and clinical trial coordination.'
    },
    {
      id: 'news-railways-10',
      title: 'Dedicated Freight Corridor Completes Final Link, Cutting Freight Transit Time by 40%',
      slug: 'dedicated-freight-corridor-completes-final-link',
      description: 'Heavy haul freight trains achieve average speeds of 75 km/h across Eastern and Western industrial corridors.',
      authority: 'Ministry of Railways',
      category: 'Logistics & Transport',
      status: 'PUBLISHED',
      sourceUrl: 'https://indianrailways.gov.in',
      sourceAuthority: 'Ministry of Railways',
      verificationStatus: 'VERIFIED',
      publishedDate: '2026-08-26',
      content: 'With the successful commissioning of the final connecting link, the Dedicated Freight Corridor Corporation of India (DFCCIL) has officially integrated its multi-thousand-kilometer rail network, dramatically reducing cargo transit times between northern manufacturing hubs and western ports.'
    },
    {
      id: 'news-agri-11',
      title: 'Ministry of Agriculture Deploys AI-Powered Crop Yield Forecasting and Digital Mandi Platform',
      slug: 'ministry-agriculture-deploys-ai-crop-forecasting',
      description: 'Integration of satellite remote sensing data with e-NAM marketplace to provide transparent price discovery for farmers.',
      authority: 'Ministry of Agriculture and Farmers Welfare',
      category: 'AgriTech',
      status: 'PUBLISHED',
      sourceUrl: 'https://agricoop.nic.in',
      sourceAuthority: 'Ministry of Agriculture',
      verificationStatus: 'VERIFIED',
      publishedDate: '2026-08-24',
      content: 'The government has rolled out an advanced geospatial agricultural intelligence platform capable of predicting district-level crop yields weeks in advance, empowering Farmer Producer Organizations (FPOs) with better price negotiation leverage.'
    },
    {
      id: 'news-commerce-12',
      title: 'India-Gulf Economic Corridor Framework Agreement Signed to Boost Non-Oil Bilateral Trade',
      slug: 'india-gulf-economic-corridor-framework-signed',
      description: 'Bilateral trade pact targets USD 150 Billion in investments spanning logistics, ports, clean energy, and digital infrastructure.',
      authority: 'Ministry of Commerce and Industry',
      category: 'Foreign Trade',
      status: 'PUBLISHED',
      sourceUrl: 'https://commerce.gov.in',
      sourceAuthority: 'Ministry of Commerce',
      verificationStatus: 'VERIFIED',
      publishedDate: '2026-08-22',
      content: 'Representing a major leap in international trade integration, India and key Gulf partners have finalized the economic corridor framework, establishing fast-tracked customs clearance protocols and joint venture investment vehicles.'
    },
    {
      id: 'news-dst-13',
      title: 'Anusandhan National Research Foundation (ANRF) Allocates ₹2,000 Crore for University R&D',
      slug: 'anrf-allocates-2000-crore-university-rd',
      description: 'Funding earmarked for state-of-the-art laboratories in materials science, electric vehicle battery chemistry, and photonics.',
      authority: 'Anusandhan National Research Foundation (ANRF)',
      category: 'Research & Science',
      status: 'PUBLISHED',
      sourceUrl: 'https://anrf.gov.in',
      sourceAuthority: 'ANRF',
      verificationStatus: 'VERIFIED',
      publishedDate: '2026-08-20',
      content: 'ANRF has sanctioned research grants to over 150 academic institutions across India under its flagship Translation Research Excellence scheme, bridging the gap between academic publications and commercial prototype development.'
    },
    {
      id: 'news-tourism-14',
      title: 'Ministry of Tourism Unveils Sustainable Eco-Tourism Circuit Development Fund',
      slug: 'ministry-tourism-unveils-eco-tourism-fund',
      description: 'Financial incentives for boutique hospitality operators and green homestay ventures adhering to zero-carbon standards.',
      authority: 'Ministry of Tourism',
      category: 'Hospitality & Tourism',
      status: 'PUBLISHED',
      sourceUrl: 'https://tourism.gov.in',
      sourceAuthority: 'Ministry of Tourism',
      verificationStatus: 'VERIFIED',
      publishedDate: '2026-08-18',
      content: 'The Ministry of Tourism has launched a concessional loan and subsidy scheme to encourage sustainable hospitality infrastructure development in ecologically sensitive heritage zones, emphasizing solar power, rainwater harvesting, and local handicraft integration.'
    },
    {
      id: 'news-cbic-15',
      title: 'Faceless Assessment and 24x7 Customs Clearance Drive Reduces Cargo Dwell Time by 50%',
      slug: 'faceless-assessment-customs-clearance-reduces-dwell-time',
      description: 'Digital paperless processing and automated risk management systems streamline import-export operations at all major ports.',
      authority: 'Central Board of Indirect Taxes and Customs (CBIC)',
      category: 'Customs & Trade Facilitation',
      status: 'PUBLISHED',
      sourceUrl: 'https://www.cbic.gov.in',
      sourceAuthority: 'CBIC',
      verificationStatus: 'VERIFIED',
      publishedDate: '2026-08-16',
      content: 'CBIC reports that nationwide implementation of faceless customs assessment and electronic container tracking has drastically improved Ease of Doing Business metrics, establishing Indian ports among the most efficient in South Asia.'
    },
    {
      id: 'news-niti-16',
      title: 'NITI Aayog Releases State Energy and Climate Index Highlighting Renewable Transition Leaders',
      slug: 'niti-aayog-releases-state-energy-climate-index',
      description: 'Ranking framework rewards states demonstrating aggressive decarbonization, rooftop solar adoption, and electric mobility penetration.',
      authority: 'NITI Aayog',
      category: 'Energy & Climate',
      status: 'PUBLISHED',
      sourceUrl: 'https://niti.gov.in',
      sourceAuthority: 'NITI Aayog',
      verificationStatus: 'VERIFIED',
      publishedDate: '2026-08-14',
      content: 'NITI Aayog published its comprehensive climate governance report, identifying leading states in clean energy transition and outlining targeted financial grants for regional distribution company (discom) financial turnaround.'
    },
    {
      id: 'news-textiles-17',
      title: 'National Technical Textiles Mission Approves 35 New R&D Projects in Smart Wearables',
      slug: 'national-technical-textiles-mission-approves-projects',
      description: 'Support for high-performance protective gear, medical textiles, and geotextiles used in civil engineering projects.',
      authority: 'Ministry of Textiles',
      category: 'Technical Textiles',
      status: 'PUBLISHED',
      sourceUrl: 'https://texmin.nic.in',
      sourceAuthority: 'Ministry of Textiles',
      verificationStatus: 'VERIFIED',
      publishedDate: '2026-08-12',
      content: 'The Mission Steering Group of the National Technical Textiles Mission has cleared projects focusing on carbon fiber composites, firefighter thermal protection suits, and geo-synthetics for landslide stabilization.'
    },
    {
      id: 'news-mines-18',
      title: 'Ministry of Mines Auctions 20 Critical Mineral Blocks for Lithium, Cobalt, and Rare Earth Elements',
      slug: 'ministry-mines-auctions-critical-mineral-blocks',
      description: 'Commercial exploration and mining leases awarded to consortiums specializing in advanced mineral beneficiation.',
      authority: 'Ministry of Mines',
      category: 'Mining & Minerals',
      status: 'PUBLISHED',
      sourceUrl: 'https://mines.gov.in',
      sourceAuthority: 'Ministry of Mines',
      verificationStatus: 'VERIFIED',
      publishedDate: '2026-08-10',
      content: 'In a vital move to secure domestic supply chains for electric vehicles and renewable energy storage, the Ministry of Mines successfully concluded its latest commercial auction of critical mineral exploration blocks.'
    },
    {
      id: 'news-ireda-19',
      title: 'IREDA Secures Green Bond Financing Line Worth USD 500 Million from International Lenders',
      slug: 'ireda-secures-green-bond-financing-line',
      description: 'Low-cost foreign capital earmarked for solar and wind energy project refinancing across Indian states.',
      authority: 'Indian Renewable Energy Development Agency (IREDA)',
      category: 'Green Finance',
      status: 'PUBLISHED',
      sourceUrl: 'https://www.ireda.in',
      sourceAuthority: 'IREDA',
      verificationStatus: 'VERIFIED',
      publishedDate: '2026-08-08',
      content: 'IREDA has finalized institutional green financing agreements with global multilateral development banks, providing competitive interest rate loans for utility-scale renewable energy developers.'
    },
    {
      id: 'news-uidai-20',
      title: 'UIDAI Introduces Next-Gen Biometric Authentication SDK with Liveness Detection for FinTechs',
      slug: 'uidai-introduces-next-gen-biometric-authentication-sdk',
      description: 'Enhanced cryptographic security protects user identity verification while reducing authentication latency.',
      authority: 'Unique Identification Authority of India (UIDAI)',
      category: 'Digital Governance',
      status: 'PUBLISHED',
      sourceUrl: 'https://uidai.gov.in',
      sourceAuthority: 'UIDAI',
      verificationStatus: 'VERIFIED',
      publishedDate: '2026-08-06',
      content: 'UIDAI has released its updated software development kit (SDK) featuring edge-based facial liveness detection, enabling banking and fintech apps to execute secure, instant KYC checks with zero possibility of spoofing.'
    },
    {
      id: 'news-corporate-21',
      title: 'Ministry of Corporate Affairs Simplifies Company Incorporation and MCA-21 Portal V3 Upgrades',
      slug: 'mca-simplifies-company-incorporation-portal-upgrades',
      description: 'Automated approval workflows reduce private limited company registration turnaround time to under 24 hours.',
      authority: 'Ministry of Corporate Affairs (MCA)',
      category: 'Corporate Governance',
      status: 'PUBLISHED',
      sourceUrl: 'https://www.mca.gov.in',
      sourceAuthority: 'MCA',
      verificationStatus: 'VERIFIED',
      publishedDate: '2026-08-04',
      content: 'The Ministry of Corporate Affairs has completed rollout enhancements on the MCA-21 V3 platform, integrating automated PAN, TAN, and EPFO registration directly into the corporate incorporation filing workflow.'
    },
    {
      id: 'news-electronics-22',
      title: 'Electronics Manufacturing Output Crosses USD 120 Billion Milestone with 25% Export Growth',
      slug: 'electronics-manufacturing-output-crosses-milestone',
      description: 'Mobile phone production and component localization drive robust manufacturing sector expansion.',
      authority: 'Ministry of Electronics and Information Technology (MeitY)',
      category: 'Electronics Manufacturing',
      status: 'PUBLISHED',
      sourceUrl: 'https://www.meity.gov.in',
      sourceAuthority: 'MeitY',
      verificationStatus: 'VERIFIED',
      publishedDate: '2026-08-02',
      content: 'Driven by the Production Linked Incentive (PLI) scheme for large-scale electronics manufacturing, India continues to cement its position as a global hub for smartphone assembly and sub-assembly exports.'
    },
    {
      id: 'news-skill-23',
      title: 'MSDE Launches National Apprenticeship Promotion Scheme (NAPS 3.0) with Stipend Support',
      slug: 'msde-launches-national-apprenticeship-promotion-scheme-3',
      description: 'Direct benefit transfer for industrial training participants across automotive, electronics, and aerospace manufacturing sectors.',
      authority: 'Ministry of Skill Development and Entrepreneurship (MSDE)',
      category: 'Skill Development',
      status: 'PUBLISHED',
      sourceUrl: 'https://msde.gov.in',
      sourceAuthority: 'MSDE',
      verificationStatus: 'VERIFIED',
      publishedDate: '2026-07-30',
      content: 'MSDE has initiated NAPS 3.0, partnering with over 10,000 industrial employers to provide structured on-the-job apprenticeship training coupled with direct government stipend co-funding.'
    },
    {
      id: 'news-petroleum-24',
      title: 'Strategic Petroleum Reserve Expansion Project Awarded to Domestic Infrastructure Consortium',
      slug: 'strategic-petroleum-reserve-expansion-project-awarded',
      description: 'Underground rock cavern storage capacity augmented to buffer against global crude oil price volatility.',
      authority: 'Ministry of Petroleum and Natural Gas',
      category: 'Energy Security',
      status: 'PUBLISHED',
      sourceUrl: 'https://mopng.gov.in',
      sourceAuthority: 'MoPNG',
      verificationStatus: 'VERIFIED',
      publishedDate: '2026-07-28',
      content: 'The government has awarded contracts for the second phase of strategic petroleum reserves, constructing underground excavated rock caverns in southern coastal locations to ensure long-term energy security.'
    },
    {
      id: 'news-shipping-25',
      title: 'Maritime India Vision 2030 Milestone Reached: Major Ports Handle Record Cargo Throughput',
      slug: 'maritime-india-vision-2030-milestone-reached',
      description: 'Turnaround time at major ports drops significantly due to container berth automation and direct port delivery (DPD).',
      authority: 'Ministry of Ports, Shipping and Waterways',
      category: 'Ports & Shipping',
      status: 'PUBLISHED',
      sourceUrl: 'https://shipmin.gov.in',
      sourceAuthority: 'Ministry of Ports',
      verificationStatus: 'VERIFIED',
      publishedDate: '2026-07-26',
      content: 'Minister of Ports, Shipping and Waterways announced that major Indian ports have achieved record-breaking operational efficiency metrics, aided by private terminal investments and digital vessel traffic management systems.'
    },
    {
      id: 'news-space-26',
      title: 'IN-SPACe Approves First Commercial Private Launch Complex and Space Park in Sriharikota',
      slug: 'in-space-approves-first-commercial-private-launch-complex',
      description: 'Private aerospace startups gain independent launch pad facilities and ground tracking station integration.',
      authority: 'IN-SPACe / ISRO',
      category: 'Space Commerce',
      status: 'PUBLISHED',
      sourceUrl: 'https://www.inspace.gov.in',
      sourceAuthority: 'IN-SPACe',
      verificationStatus: 'VERIFIED',
      publishedDate: '2026-07-24',
      content: 'IN-SPACe has granted final operational authorization for India’s first dedicated private commercial launch pad and mission control facility, enabling domestic rocket startups to conduct orbital launches seamlessly.'
    },
    {
      id: 'news-housing-27',
      title: 'PMAY-Urban 2.0 Scheme Notified to Provide Interest Subsidy for Affordable Housing Loans',
      slug: 'pmay-urban-2-0-scheme-notified-interest-subsidy',
      description: 'Urban middle-class and economically weaker section families benefit from direct credit-linked subsidy disbursements.',
      authority: 'Ministry of Housing and Urban Affairs (MoHUA)',
      category: 'Urban Development',
      status: 'PUBLISHED',
      sourceUrl: 'https://mohua.gov.in',
      sourceAuthority: 'MoHUA',
      verificationStatus: 'VERIFIED',
      publishedDate: '2026-07-22',
      content: 'MoHUA has officially notified the operational guidelines for Pradhan Mantri Awas Yojana Urban 2.0, extending interest subvention on housing loans through scheduled commercial banks and housing finance companies.'
    },
    {
      id: 'news-defence-28',
      title: 'Defence Acquisition Council Clears Indigenous Procurement Proposals Worth ₹45,000 Crore',
      slug: 'dac-clears-indigenous-procurement-proposals',
      description: 'Approval granted for next-generation attack helicopters, anti-drone systems, and unmanned surface vessels for the armed forces.',
      authority: 'Ministry of Defence',
      category: 'Defence Procurement',
      status: 'PUBLISHED',
      sourceUrl: 'https://mod.gov.in',
      sourceAuthority: 'Ministry of Defence',
      verificationStatus: 'VERIFIED',
      publishedDate: '2026-07-20',
      content: 'Emphasizing Aatmanirbhar Bharat in defense production, the Defence Acquisition Council has cleared capital acquisition cases to be sourced exclusively from Indian defense manufacturers.'
    },
    {
      id: 'news-telecom-29',
      title: 'TRAI Issues Recommendations on Spectrum Pricing for SatCom and Direct-to-Cell Services',
      slug: 'trai-issues-recommendations-spectrum-pricing-satcom',
      description: 'Regulatory framework paves the way for commercial satellite broadband rollout and seamless cellular-satellite roaming.',
      authority: 'Telecom Regulatory Authority of India (TRAI)',
      category: 'Telecom Policy',
      status: 'PUBLISHED',
      sourceUrl: 'https://www.trai.gov.in',
      sourceAuthority: 'TRAI',
      verificationStatus: 'VERIFIED',
      publishedDate: '2026-07-18',
      content: 'TRAI has released its definitive policy recommendations governing satellite communication spectrum allocation, ensuring fair competition and rapid deployment of high-speed broadband to remote rural clusters.'
    },
    {
      id: 'news-food-30',
      title: 'Ministry of Food Processing Industries Approves 50 New Mega Food Parks and Cold Chains',
      slug: 'ministry-food-processing-approves-50-new-mega-food-parks',
      description: 'Capital grants support integrated cold storage, IQF freezing units, and value-addition agricultural processing lines.',
      authority: 'Ministry of Food Processing Industries (MoFPI)',
      category: 'Food Processing',
      status: 'PUBLISHED',
      sourceUrl: 'https://mofpi.gov.in',
      sourceAuthority: 'MoFPI',
      verificationStatus: 'VERIFIED',
      publishedDate: '2026-07-16',
      content: 'MoFPI has sanctioned financial assistance for 50 new agro-processing clusters and cold chain infrastructure projects across major agricultural states, minimizing farm-gate wastage and boosting processed food exports.'
    }
  ];

  getAll(): NewsItem[] { return this.items; }
  getById(id: string): NewsItem | undefined { return this.items.find(i => i.id === id); }
  getBySlug(slug: string): NewsItem | undefined { return this.items.find(i => i.slug === slug); }
  search(query: string, category?: string): NewsItem[] {
    const q = query.toLowerCase();
    return this.items.filter(i => (i.title.toLowerCase().includes(q) || i.description.toLowerCase().includes(q)) && (!category || category === 'ALL' || i.category === category));
  }
}

export const investmentRepository = new InvestmentRepository();
export const investmentSchemeRepository = new InvestmentSchemeRepository();
export const opportunityRepository = new OpportunityRepository();
export const tenderRepository = new TenderRepository();
export const newsRepository = new NewsRepository();
