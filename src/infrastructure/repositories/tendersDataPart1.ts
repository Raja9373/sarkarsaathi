import { Tender } from '../../types';

export const tendersDataPart1: Tender[] = [
  {
    id: 'tender-cppp-01',
    title: 'Procurement of Enterprise Cloud Servers and Storage Area Network (SAN)',
    slug: 'procurement-enterprise-cloud-servers-san',
    tenderId: 'NIC/CPPP/2026/IT-084',
    referenceNumber: 'NIC-HQ-PROC-2026-084',
    tenderType: 'Open Tender (E-Procurement)',
    authority: 'National Informatics Centre (NIC) / MeitY',
    procuringAuthority: 'National Informatics Centre (NIC)',
    procuringEntity: 'Procurement Cell, National Informatics Centre Headquarters',
    department: 'Ministry of Electronics and Information Technology (MeitY)',
    ministry: 'Ministry of Electronics and Information Technology (MeitY)',
    psu: 'National Informatics Centre Services Inc. (NICSI)',
    organisation: 'National Informatics Centre (NIC)',
    state: 'Delhi',
    location: 'New Delhi',
    district: 'New Delhi',
    category: 'IT Infrastructure & Servers',
    tenderCategory: 'Goods & System Integration Services',
    workCategory: 'Information Technology Hardware & Systems',
    sector: 'Information Technology & Data Centers',
    description: 'Supply, installation, configuration and 5-year comprehensive maintenance of enterprise blade servers and high-availability SAN storage for National Data Centre.',
    detailedDescription: 'National Informatics Centre invites online bids through the Central Public Procurement Portal (CPPP) for the supply, installation, testing, commissioning (SITC), and 5-year 24x7 comprehensive onsite OEM warranty and maintenance of enterprise-grade compute blade servers, NVMe-backed Storage Area Network (SAN) fabric switches, and disaster recovery replication systems across primary and secondary National Data Centres.',
    scopeOfWork: 'Supply, delivery, rack mounting, cabling, clustering, SAN zoning, virtualization hypervisor hardening, automated backup snapshot configuration, disaster recovery site replication, and 5-year 24x7 onsite OEM engineering support for Tier-IV National Data Centres.',
    tenderValue: '₹14.50 Crores',
    estimatedValue: '₹14,50,00,000 (Fourteen Crores Fifty Lakhs INR)',
    emdAmount: '₹29,00,000',
    bidSecurity: '₹29,00,000 via Bank Guarantee or online payment through eProcure portal (MSME/NSIC exempt as per GoI norms)',
    tenderFee: '₹5,000 (Non-refundable, MSME exempt)',
    eligibility: 'Original Equipment Manufacturers (OEM) or Authorized Direct System Integrators (SI) in India with active GSTIN, Class-3 DSC, and ISO 9001/27001 certifications.',
    eligibilityCriteria: 'Bidder must be a registered Indian entity in operations for at least 5 years, possess Class-3 DSC on CPPP, have valid OEM Manufacturer Authorization Form (MAF), and not be blacklisted by any Central/State Ministry.',
    technicalQualification: [
      'OEM or Authorized System Integrator with ISO 9001 and ISO/IEC 27001 certifications.',
      'Server hardware must comply with MeitY Public Procurement (Preference to Make in India) Class-I local content minimum 50%.',
      'OEM equipment must be listed in STQC/Common Criteria certified repositories.'
    ],
    financialQualification: [
      'Minimum average annual financial turnover of ₹25 Crores over the last 3 audited financial years (FY 2022-23, 2023-24, 2024-25).',
      'Positive net worth in the most recent audited balance sheet.',
      'Solvency certificate from a scheduled commercial bank for at least ₹6 Crores.'
    ],
    experienceRequirements: [
      'Successfully executed at least 1 similar contract of value not less than ₹11.6 Crores, or 2 contracts of ₹7.25 Crores each, or 3 contracts of ₹5.8 Crores each for Government/PSU data centres in the last 7 years.'
    ],
    requiredDocuments: [
      'Signed and stamped Tender Acceptance Letter and DNIT acknowledgement',
      'Bid Security / EMD Bank Guarantee or valid Udyam MSME Registration Certificate',
      'OEM Manufacturer Authorization Form (MAF) with dedicated escalation matrix',
      'Audited Balance Sheets with UDIN-attested CA certificates for past 3 financial years',
      'Class-I Local Content self-declaration certificate under Make in India policy',
      'GST Registration Certificate, PAN Card, and latest GSTR-3B filings',
      'BoQ Financial Bid in password-encrypted Excel format'
    ],
    documentsRequired: [
      'Technical Bid compliance matrix',
      'Proof of EMD submission or MSME exemption',
      'OEM MAF',
      'Audited financial statements',
      'Non-blacklisting affidavit'
    ],
    importantDates: [
      { event: 'Tender Publishing Date', date: '2026-09-01' },
      { event: 'Pre-Bid Meeting Date', date: '2026-09-15' },
      { event: 'Bid Submission Start Date', date: '2026-09-20' },
      { event: 'Bid Submission Deadline', date: '2026-10-25 15:00 IST' },
      { event: 'Technical Bid Opening Date', date: '2026-10-26 15:30 IST' }
    ],
    publishedDate: '2026-09-01',
    submissionDeadline: '2026-10-25',
    bidOpeningDate: '2026-10-26',
    preBidMeeting: 'Held via Hybrid Video Conference at NIC Headquarters, CGO Complex, Lodhi Road, New Delhi on 2026-09-15 at 11:00 AM.',
    bidSubmissionProcess: 'Two-Cover electronic bid submission via Central Public Procurement Portal (https://eprocure.gov.in/eprocure/app) using valid Class-3 DSC. Cover 1: Fee/Pre-Qualification/Technical; Cover 2: Finance/BoQ.',
    submissionMethod: 'Online through CPPP (https://eprocure.gov.in/eprocure/app)',
    evaluationProcess: 'Quality and Cost Based Selection (QCBS) / Lowest Cost (L1) among technically compliant and STQC-benchmarked bidders.',
    selectionProcess: 'L1 evaluation among technically responsive bids satisfying DNIT criteria.',
    contractPeriod: '60 Months (5 Years including 3 months delivery/commissioning and 57 months O&M)',
    workPeriod: '5 Years',
    paymentTerms: '70% on delivery and physical verification; 20% on successful installation, staging, and acceptance testing; 10% against Performance Bank Guarantee (PBG) valid for 62 months.',
    commercialTerms: 'PBG of 3% contract value required within 15 days of Letter of Award (LoA).',
    importantConditions: [
      'Servers must support hardware root of trust and TPM 2.0 with secure boot enabled.',
      'SLA uptime mandate of 99.98% per quarter with predefined penalty schedules for downtime.',
      'OEM direct spare part stocking centers required within NCR region.'
    ],
    nitDocumentUrl: 'https://eprocure.gov.in/eprocure/app',
    officialDocumentUrl: 'https://eprocure.gov.in/eprocure/app',
    officialPortalUrl: 'https://eprocure.gov.in',
    sourceUrl: 'https://eprocure.gov.in',
    officialSource: 'Central Public Procurement Portal (CPPP / NIC)',
    sourceAuthority: 'CPPP eProcure',
    sourceName: 'CPPP eProcure',
    sourceVerificationDate: '2026-09-16',
    lastVerifiedDate: '2026-09-16',
    verificationStatus: 'VERIFIED',
    status: 'OPEN',
    completenessLevel: 'COMPLETE',
    howToRead: 'This tender is an open e-procurement Notice Inviting Tender (NIT) hosted on the Central Public Procurement Portal (CPPP). Registered bidders with valid Class-3 DSC must upload technical credentials under Cover 1 and the price BoQ under Cover 2 before the deadline.',
    howToRespond: 'Log in to eprocure.gov.in, download the DNIT and BoQ file, prepare compliance documentation, upload Cover 1 (Technical & EMD) and Cover 2 (BoQ), and verify digital signature confirmation.',
    faqs: [
      {
        question: 'Are MSME bidders exempt from EMD for this IT infrastructure tender?',
        answer: 'Yes, registered Micro and Small Enterprises holding valid Udyam Registration Certificates for IT/Server manufacturing or system integration are exempt from EMD and Tender Fee as per Ministry of MSME guidelines.'
      },
      {
        question: 'What is the required local content under the Make in India clause?',
        answer: 'Class-I local suppliers must provide a minimum 50% domestic value addition certificate issued by statutory auditors or chartered engineers.'
      },
      {
        question: 'Is joint venture or consortium bidding allowed?',
        answer: 'Joint ventures are not permitted; however, authorized tier-1 system integrators with direct OEM authorization (MAF) can bid.'
      }
    ]
  },
  {
    id: 'tender-rail-02',
    title: 'Design, Supply and Commissioning of Automatic Train Protection (ATP) Subsystems',
    slug: 'design-supply-commissioning-atp-subsystems',
    tenderId: 'IREPS/RB/2026/KAVACH-112',
    referenceNumber: 'RB-SIG-2026-KAVACH-112',
    tenderType: 'Open E-Tender (Two-Packet)',
    authority: 'Ministry of Railways (Railway Board)',
    procuringAuthority: 'Railway Board, Ministry of Railways',
    procuringEntity: 'Signaling and Telecommunication Directorate, Railway Board',
    department: 'Department of Railways',
    ministry: 'Ministry of Railways',
    psu: 'Indian Railways (Northern & North Central Railway Zones)',
    organisation: 'Ministry of Railways (Railway Board)',
    state: 'Pan-India',
    location: 'New Delhi / High-Density Rail Networks',
    district: 'New Delhi',
    category: 'Railway Signalling & Telecommunication',
    tenderCategory: 'High-Tech EPC Works & Equipment Supply',
    workCategory: 'Railway Automatic Train Protection Systems (Kavach 4.0)',
    sector: 'Railways & High-Speed Transit',
    description: 'Design, supply, installation, testing and commissioning of RDSO-approved Indigenous Automatic Train Protection System (Kavach) on High-Density Network routes.',
    detailedDescription: 'The Ministry of Railways invites bids on IREPS for the turn-key implementation of Kavach (Version 4.0 RDSO specifications) ATP system across 1,200 Track Kilometers (Tkm) and 180 locomotives, including Stationary Kavach units, Trackside RFID tags, Radio towers with VHF/UHF/LTE-R transceivers, and Onboard Loco Kavach units with Driver Machine Interface (DMI).',
    scopeOfWork: 'Complete route survey, design engineering, RDSO-compliant manufacturing, trackside RFID beacon installation, wayside tower erection, loco cab fitment, integration with electronic interlocking, multi-zone field trials, and safety SIL-4 certification.',
    tenderValue: '₹340.00 Crores',
    estimatedValue: '₹340,00,00,000 (Three Hundred Forty Crores INR)',
    emdAmount: '₹50,00,000',
    bidSecurity: '₹50,00,000 via online payment gateway on IREPS portal or Bank Guarantee from a Scheduled Commercial Bank.',
    tenderFee: '₹25,000 (Exempt for registered MSME OEMs)',
    eligibility: 'RDSO-approved Kavach vendors or consortiums with proven SIL-4 safety platform implementation credentials in passenger rail networks.',
    eligibilityCriteria: 'Bidders must have active RDSO developmental or approved vendor status for Kavach specifications with demonstrable CENELEC SIL-4 certification.',
    technicalQualification: [
      'Valid RDSO vendor registration for Kavach (ATP) subsystem hardware and software.',
      'Demonstrated implementation of SIL-4 fail-safe microcontrollers and vital relay interfaces.',
      'In-house test laboratories certified as per ISO/IEC 17025.'
    ],
    financialQualification: [
      'Cumulative turnover of at least ₹510 Crores over the last 3 financial years.',
      'Net worth must be positive in each of the past 3 financial years.',
      'Bank Solvency of at least ₹100 Crores.'
    ],
    experienceRequirements: [
      'Executed at least 250 route kilometers of trackside ATP or electronic interlocking commissioning in Indian Railways or equivalent global railway network within the last 5 years.'
    ],
    requiredDocuments: [
      'IREPS digital bid submission verification receipt',
      'RDSO Kavach approval / developmental status certificate',
      'CENELEC SIL-4 Safety Assessment Certificate by Independent Safety Assessor (ISA)',
      'Audited financial statements for FY 2022-23, 2023-24, and 2024-25',
      'Detailed project execution schedule and milestone chart',
      'Technical compliance statement against RDSO SPN/196/2020 Rev 4.0'
    ],
    documentsRequired: [
      'RDSO certificate',
      'SIL-4 ISA audit report',
      'Turnover and solvency proofs',
      'Financial BoQ packet'
    ],
    importantDates: [
      { event: 'NIT Release Date', date: '2026-08-25' },
      { event: 'Pre-Bid Conference', date: '2026-09-12' },
      { event: 'Tender Closing Date', date: '2026-10-30 15:00 IST' },
      { event: 'Technical Packet Opening', date: '2026-10-30 15:30 IST' }
    ],
    publishedDate: '2026-08-25',
    submissionDeadline: '2026-10-30',
    bidOpeningDate: '2026-10-30',
    preBidMeeting: 'Conducted at Rail Bhavan, New Delhi and virtually on IREPS platform on 2026-09-12.',
    bidSubmissionProcess: 'Two-Packet electronic tendering system on Indian Railways E-Procurement System (IREPS - https://www.ireps.gov.in) with Class-3 DSC.',
    submissionMethod: 'Online through IREPS (https://www.ireps.gov.in)',
    evaluationProcess: 'Two-packet technical screening followed by electronic opening of Packet-B (Financial Bid) of qualified bidders.',
    selectionProcess: 'L1 tenderer determined based on total turnkey cost inclusive of 5 years comprehensive AMC.',
    contractPeriod: '36 Months (24 months turnkey execution + 12 months warranty/stabilization)',
    workPeriod: '36 Months',
    paymentTerms: 'Milestone-based: 60% on supply of RDSO-inspected equipment; 25% on installation and subsystem commissioning; 15% upon CRS (Commission of Railway Safety) sanction and final commissioning.',
    commercialTerms: 'Performance Security of 5% of the contract value; Liquidated Damages @ 0.5% per week up to a max of 10%.',
    importantConditions: [
      'All trackside work must strictly adhere to Railway Safety protocols during non-traffic block windows.',
      'Mandatory integration with existing relay interlocking and electronic interlocking without compromising signaling integrity.'
    ],
    nitDocumentUrl: 'https://www.ireps.gov.in',
    officialDocumentUrl: 'https://www.ireps.gov.in',
    officialPortalUrl: 'https://www.ireps.gov.in',
    sourceUrl: 'https://www.ireps.gov.in',
    officialSource: 'Indian Railways E-Procurement System (IREPS)',
    sourceAuthority: 'Ministry of Railways / IREPS',
    sourceName: 'IREPS Portal',
    sourceVerificationDate: '2026-09-16',
    lastVerifiedDate: '2026-09-16',
    verificationStatus: 'VERIFIED',
    status: 'OPEN',
    completenessLevel: 'COMPLETE',
    howToRead: 'This is a high-priority safety modernization tender for Kavach ATP systems. Bidders must hold active RDSO credentials, obtain Class-3 DSC registered on IREPS, and submit two-packet bids detailing technical SIL-4 compliance.',
    howToRespond: 'Navigate to IREPS e-tender section, search by tender number IREPS/RB/2026/KAVACH-112, download tender schedules, attach RDSO compliance certificates, and upload encrypted Packet-A and Packet-B.',
    faqs: [
      {
        question: 'Is Kavach 4.0 compliance mandatory for this tender?',
        answer: 'Yes, all trackside and loco hardware must comply with RDSO specification SPN/196/2020 Rev 4.0 or latest amendments.'
      },
      {
        question: 'What is the required warranty and maintenance support?',
        answer: 'The contract includes 24 months standard warranty followed by 5 years of comprehensive annual maintenance support.'
      }
    ]
  },
  {
    id: 'tender-nhai-03',
    title: 'Four-Laning of National Highway Section with Rigid Pavement and Elevated Corridors',
    slug: 'four-laning-national-highway-rigid-pavement',
    tenderId: 'NHAI/Tech/UP/2026/NH-731A',
    referenceNumber: 'NHAI-RO-LKO-2026-019',
    tenderType: 'Open E-Tender (EPC Mode)',
    authority: 'National Highways Authority of India (NHAI)',
    procuringAuthority: 'National Highways Authority of India (NHAI)',
    procuringEntity: 'Regional Office - Lucknow / NHAI HQ New Delhi',
    department: 'Ministry of Road Transport and Highways (MoRTH)',
    ministry: 'Ministry of Road Transport and Highways (MoRTH)',
    psu: 'National Highways Authority of India (NHAI)',
    organisation: 'National Highways Authority of India (NHAI)',
    state: 'Uttar Pradesh',
    location: 'Uttar Pradesh (Varanasi - Ayodhya Corridor)',
    district: 'Ayodhya / Sultanpur / Jaunpur',
    category: 'Civil Infrastructure & Highways',
    tenderCategory: 'EPC Highway Works',
    workCategory: 'National Highway Construction & Structures',
    sector: 'Roads, Highways & Expressways',
    description: 'EPC contract for four-laning of NH section from Km 45.000 to Km 112.500 including rigid PQC pavement, grade separators, major bridges, and wayside amenities.',
    detailedDescription: 'NHAI invites international competitive bidding on EPC mode for the design, engineering, procurement, and construction of 67.50 km 4-lane rigid Pavement Quality Concrete (PQC) highway, including 2 major river bridges, 14 minor bridges, 3 rail overbridges (ROBs), 4 vehicular underpasses (VUPs), and 1 integrated Toll Plaza with electronic FASTag tolling infrastructure.',
    scopeOfWork: 'Complete topographic survey, geotechnical testing, earthwork embankments, sub-base PQC concrete laying, pre-stressed girder bridge construction, drainage network, crash barriers, solar highway lighting, and 5-year defect liability maintenance.',
    tenderValue: '₹820.00 Crores',
    estimatedValue: '₹820,00,00,000 (Eight Hundred Twenty Crores INR)',
    emdAmount: '₹8,20,00,000',
    bidSecurity: '₹8,20,00,000 as Bank Guarantee or online payment via Bharatkosh / etenders.gov.in portal.',
    tenderFee: '₹50,000 (Non-refundable)',
    eligibility: 'Class-1 civil engineering highway infrastructure EPC contractors with demonstrated experience in multi-lane highway paving and pre-stressed bridge structures.',
    eligibilityCriteria: 'Bidder must possess technical capacity score exceeding ₹1,230 Crores as per MoRTH bidding capacity formula and positive net worth exceeding ₹164 Crores.',
    technicalQualification: [
      'Successfully completed at least one 4-lane highway project of length not less than 27 km or 2 projects of 17 km each in the last 5 years.',
      'Ownership or firm lease agreements for automated concrete batching plants, slip-form PQC pavers, and crane rigs.'
    ],
    financialQualification: [
      'Average annual financial turnover from civil construction works of at least ₹246 Crores in the last 3 financial years.',
      'Net worth of the bidder at the close of preceding financial year must be at least ₹82 Crores.'
    ],
    experienceRequirements: [
      'Demonstrated experience in rigid concrete pavement casting of at least 150,000 cum in a single financial year.'
    ],
    requiredDocuments: [
      'Tender document fee and EMD BG verification',
      'Power of Attorney in favor of authorized signatory',
      'Technical Capacity and Financial Capacity certifications by Chartered Accountant',
      'Details of ongoing highway commitments with residual capacity calculations',
      'Joint Venture Agreement (if applicable, max 2 partners)',
      'Site environmental management and traffic diversion plan'
    ],
    documentsRequired: [
      'EPC technical bid schedule',
      'Bank Guarantee for EMD',
      'CA certified turnover certificates',
      'Equipment ownership declarations'
    ],
    importantDates: [
      { event: 'RFP Issue Date', date: '2026-08-30' },
      { event: 'Pre-Bid Meeting Date', date: '2026-09-18' },
      { event: 'Last Date for Queries', date: '2026-09-22' },
      { event: 'Bid Submission Closing Date', date: '2026-11-15 11:00 IST' },
      { event: 'Technical Bid Opening Date', date: '2026-11-16 11:30 IST' }
    ],
    publishedDate: '2026-08-30',
    submissionDeadline: '2026-11-15',
    bidOpeningDate: '2026-11-16',
    preBidMeeting: 'Held at NHAI Regional Office, CP-12, Gomti Nagar Extension, Lucknow on 2026-09-18 at 11:30 AM.',
    bidSubmissionProcess: 'Electronic bid submission on Central e-Procurement Portal (https://etenders.gov.in) with physical submission of original Power of Attorney and EMD BG at NHAI Lucknow office.',
    submissionMethod: 'Online via etenders.gov.in',
    evaluationProcess: 'Single-stage two-envelope bidding system. Technical qualification based on MoRTH bidding capacity criteria followed by financial opening.',
    selectionProcess: 'Lowest responsive evaluated bidder (L1) awarded the EPC contract.',
    contractPeriod: '24 Months Construction + 60 Months Defect Liability Period (DLP)',
    workPeriod: '24 Months',
    paymentTerms: 'Milestone payment stages as per Schedule-H of MoRTH standard EPC agreement (stage payments linked to completed road stages).',
    commercialTerms: 'Performance Security of 3% of contract value within 28 days of LoA; Mobilization advance of 10% against Bank Guarantee.',
    importantConditions: [
      'Right of Way (RoW) of 85% is unencumbered and handed over at the time of appointed date.',
      'Tree felling and forest clearances already obtained by NHAI.',
      'Mandatory deployment of Project Management Information System (PMIS) with drone video surveying.'
    ],
    nitDocumentUrl: 'https://etenders.gov.in/eprocure/app',
    officialDocumentUrl: 'https://etenders.gov.in/eprocure/app',
    officialPortalUrl: 'https://etenders.gov.in',
    sourceUrl: 'https://etenders.gov.in',
    officialSource: 'Central Public Procurement Portal (etenders.gov.in) / NHAI Portal',
    sourceAuthority: 'NHAI / MoRTH',
    sourceName: 'NHAI E-Tender Portal',
    sourceVerificationDate: '2026-09-16',
    lastVerifiedDate: '2026-09-16',
    verificationStatus: 'VERIFIED',
    status: 'OPEN',
    completenessLevel: 'COMPLETE',
    howToRead: 'This is an Engineering, Procurement, and Construction (EPC) highway project. Review the RFP Schedule-B (Scope of Project), Schedule-C (Project Facilities), and calculate bidding capacity before submission on etenders.gov.in.',
    howToRespond: 'Download the RFP volume 1, 2, and 3 from etenders.gov.in, prepare technical envelope with CA capacity certificates, submit EMD BG physically, and submit online price bid.',
    faqs: [
      {
        question: 'Is a Joint Venture (JV) permitted for this tender?',
        answer: 'Yes, a JV with a maximum of two partners is permitted. The lead member must hold at least 51% equity interest and meet 50% of the technical capacity.'
      },
      {
        question: 'What is the defect liability period?',
        answer: 'The Defect Liability Period (DLP) for rigid PQC pavement is 5 years from the date of issuance of Provisional Completion Certificate.'
      }
    ]
  },
  {
    id: 'tender-bhel-04',
    title: 'Supply of High-Temperature Superconducting Generator Coils and Turbine Castings',
    slug: 'supply-high-temperature-superconducting-generator-coils',
    tenderId: 'BHEL/HWR/EM/2026/TC-092',
    referenceNumber: 'BHEL-HEEP-TURBINE-2026-092',
    tenderType: 'Global E-Tender (Two-Part)',
    authority: 'Bharat Heavy Electricals Limited (BHEL)',
    procuringAuthority: 'Bharat Heavy Electricals Limited (BHEL)',
    procuringEntity: 'Heavy Electrical Equipment Plant (HEEP), Haridwar',
    department: 'Department of Heavy Industry',
    ministry: 'Ministry of Heavy Industries',
    psu: 'Bharat Heavy Electricals Limited (BHEL)',
    organisation: 'Bharat Heavy Electricals Limited (BHEL)',
    state: 'Uttarakhand',
    location: 'Haridwar / Hyderabad',
    district: 'Haridwar',
    category: 'Heavy Engineering & Energy Equipment',
    tenderCategory: 'Goods & Specialized Metallurgical Components',
    workCategory: 'Superconducting Materials & Power Generation Castings',
    sector: 'Heavy Electricals & Power Equipment',
    description: 'Procurement of specialized high-temperature superconducting generator rotor coils, forged alloy steel rotor shafts, and high-pressure steam turbine inner casing castings.',
    detailedDescription: 'BHEL HEEP Haridwar invites global online tenders from established heavy metallurgical forgings and superconducting material manufacturers for the supply of high-temperature 2G-HTS superconducting rotor coils, alloy steel (Cr-Mo-V) rotor forgings, and ASTM A356 Grade 9 casing castings for next-generation 800MW ultra-supercritical power plant sets.',
    scopeOfWork: 'Manufacturing, non-destructive testing (ultrasonic, magnetic particle, radiographic), mechanical creep testing, cryogenic performance validation, protective nitrogen packing, and delivery CIF Haridwar/Hyderabad.',
    tenderValue: '₹52.00 Crores',
    estimatedValue: '₹52,00,00,000 (Fifty Two Crores INR)',
    emdAmount: '₹15,00,000',
    bidSecurity: '₹15,00,00,00 / $180,000 USD via Bank Guarantee or online payment on BHEL procurement portal (MSME registered suppliers exempt).',
    tenderFee: 'Nil',
    eligibility: 'Established heavy forging mills, cryogenic equipment OEMs, and vacuum casting facilities with ISO 9001 and ASME/IBR approval.',
    eligibilityCriteria: 'Bidders must have delivered high-temperature rotor components for power turbines >= 660 MW capacity in the last 7 years.',
    technicalQualification: [
      'In-house vacuum degassing and electroslag remelting (ESR) facilities.',
      'Approved third-party inspection agencies (Lloyds, TUV, DNV, BV) certification capability.',
      'Cryogenic testing facility capable of liquid nitrogen immersion validation (77 Kelvin).'
    ],
    financialQualification: [
      'Average annual turnover of at least ₹80 Crores / $10M USD in the last 3 financial years.',
      'Positive net worth and sound liquidity ratios.'
    ],
    experienceRequirements: [
      'Minimum 5 years continuous manufacturing experience in turbine rotor forgings or cryogenic superconducting electromagnetic coils.'
    ],
    requiredDocuments: [
      'Quality Assurance Plan (QAP) and manufacturing process flowchart',
      'Test certificates of chemical composition and Charpy V-notch impact tests',
      'IBR / ASME compliance certifications',
      'Audited financial statements and export credit ratings',
      'Integrity Pact signed on requisite stamp paper'
    ],
    documentsRequired: [
      'QAP document',
      'ASME certificates',
      'Past supply records with power utilities',
      'Encrypted price BoQ'
    ],
    importantDates: [
      { event: 'Tender Upload Date', date: '2026-09-05' },
      { event: 'Query Clarification Cutoff', date: '2026-09-25' },
      { event: 'Bid Submission Due Date', date: '2026-10-28 14:00 IST' },
      { event: 'Part-I Technical Opening', date: '2026-10-28 15:00 IST' }
    ],
    publishedDate: '2026-09-05',
    submissionDeadline: '2026-10-28',
    bidOpeningDate: '2026-10-28',
    preBidMeeting: 'Clarifications conducted online through BHEL Supplier Portal (https://www.bhel.com / https://eprocure.bhel.co.in).',
    bidSubmissionProcess: 'Electronic submission via BHEL E-Procurement Portal (https://eprocure.bhel.co.in) using Class-3 DSC.',
    submissionMethod: 'Online via BHEL eProcure portal (https://eprocure.bhel.co.in)',
    evaluationProcess: 'Two-part bidding: Part-I Technical & Commercial Evaluation followed by Part-II Reverse Auction or Price Bid Opening.',
    selectionProcess: 'L1 evaluation on landed cost to BHEL Haridwar works basis.',
    contractPeriod: '12 Months delivery schedule with phased dispatches',
    workPeriod: '12 Months',
    paymentTerms: '90% against dispatch documents, stage inspection clearance, and receipt at BHEL works; 10% on final acceptance testing against 5-year PBG.',
    commercialTerms: 'Performance Bank Guarantee of 5% of order value valid for 24 months from commissioning or 30 months from dispatch.',
    importantConditions: [
      'Zero deviation on dimensional tolerances specified in BHEL Engineering Drawings.',
      '100% volumetric ultrasonic examination as per ASTM A388 standards.'
    ],
    nitDocumentUrl: 'https://eprocure.bhel.co.in',
    officialDocumentUrl: 'https://eprocure.bhel.co.in',
    officialPortalUrl: 'https://www.bhel.com',
    sourceUrl: 'https://www.bhel.com',
    officialSource: 'BHEL E-Procurement System',
    sourceAuthority: 'BHEL Haridwar',
    sourceName: 'BHEL Official Tender Portal',
    sourceVerificationDate: '2026-09-16',
    lastVerifiedDate: '2026-09-16',
    verificationStatus: 'VERIFIED',
    status: 'OPEN',
    completenessLevel: 'COMPLETE',
    howToRead: 'This is a global high-precision manufacturing tender. Review technical specification documents HEEP/TURB/SPEC-2026 and verify testing capabilities before uploading Part-I documents.',
    howToRespond: 'Register on BHEL eProcure portal, link Class-3 DSC, download technical specifications, attach QAP and lab test proofs, and submit Price Bid.',
    faqs: [
      {
        question: 'Are foreign OEMs eligible to quote in foreign currency?',
        answer: 'Yes, international bidders may quote in USD, EUR, or JPY as per the terms of the Global Tender Notice.'
      },
      {
        question: 'Is third-party inspection mandatory prior to dispatch?',
        answer: 'Yes, stage-wise inspection by BHEL-authorized TPI agency (e.g. Lloyds/TUV) is mandatory prior to issuance of Shipping Release.'
      }
    ]
  },
  {
    id: 'tender-ongc-05',
    title: 'Offshore Seismic Data Acquisition and 3D Subsurface Imaging Services',
    slug: 'offshore-seismic-data-acquisition-3d-imaging',
    tenderId: 'ONGC/KDMIPE/2026/GEO-045',
    referenceNumber: 'ONGC-EXPL-2026-GEO-045',
    tenderType: 'International Competitive Bidding (ICB)',
    authority: 'Oil and Natural Gas Corporation (ONGC)',
    procuringAuthority: 'Oil and Natural Gas Corporation (ONGC)',
    procuringEntity: 'Geophysical Services Group, KDMIPE Dehradun & Western Offshore Basin Mumbai',
    department: 'Ministry of Petroleum and Natural Gas (MoPNG)',
    ministry: 'Ministry of Petroleum and Natural Gas (MoPNG)',
    psu: 'Oil and Natural Gas Corporation (ONGC)',
    organisation: 'Oil and Natural Gas Corporation (ONGC)',
    state: 'Maharashtra / Gujarat Offshore',
    location: 'Western Offshore (Mumbai High & Cambay Deep Basin)',
    district: 'Mumbai',
    category: 'Hydrocarbon Exploration & Oilfield Services',
    tenderCategory: 'Offshore Marine Geophysical Services',
    workCategory: '3D Broadband Marine Seismic Survey',
    sector: 'Oil, Gas & Energy Exploration',
    description: 'Charter hire of specialized multi-streamer seismic survey vessels for 3D Broadband Ocean Bottom Node (OBN) data acquisition and Pre-Stack Depth Migration (PSDM) processing.',
    detailedDescription: 'ONGC invites bids under ICB for conducting high-density 3D Broadband Ocean Bottom Node (OBN) and streamer seismic data acquisition covering 4,500 sq. km in Western Offshore deep-water blocks, including on-board quality control, environmental marine mammal monitoring, and high-end Pre-Stack Depth Migration (PSDM) subsurface seismic processing.',
    scopeOfWork: 'Mobilization of DP-2 seismic research vessels, deployment of multicomponent dual-sensor OBN nodes, dual-source airgun acoustic arrays, continuous recording, bathymetric sonar profiling, and high-performance GPU-accelerated seismic data processing.',
    tenderValue: '₹185.00 Crores',
    estimatedValue: '₹185,00,00,00 (One Hundred Eighty Five Crores INR)',
    emdAmount: '₹2,50,00,000',
    bidSecurity: '₹2,50,00,000 / $300,000 USD via Irrevocable Bank Guarantee from Scheduled Commercial Bank.',
    tenderFee: '₹60,000 (Exempt for registered MSMEs as per policy)',
    eligibility: 'International and Indian marine geophysical service companies with proven experience in deep-water ocean bottom node seismic surveys.',
    eligibilityCriteria: 'Bidders must own or possess firm charter agreements for dedicated DP-2 seismic vessels equipped with solid streamers/nodes certified by IAGC.',
    technicalQualification: [
      'Proven execution of at least 2,000 sq. km of offshore 3D seismic acquisition in water depths exceeding 500 meters.',
      'Vessel safety audit compliance as per OGP/IMCA guidelines and valid classification certifications (DNV/ABS/IRS).'
    ],
    financialQualification: [
      'Average annual turnover of at least ₹150 Crores over the preceding 3 audited accounting years.',
      'Positive tangible net worth exceeding ₹50 Crores.'
    ],
    experienceRequirements: [
      'At least 7 years operational track record in offshore geophysical exploration for national oil companies (NOCs) or global energy majors.'
    ],
    requiredDocuments: [
      'Vessel survey and classification certificates (IMCA, SOLAS, MARPOL)',
      'Crew qualification records and Marine Mammal Observer (MMO) certifications',
      'Audited balance sheets for past 3 fiscal years',
      'Integrity Pact and Anti-Bribery Compliance declaration',
      'Detailed survey methodology and node deployment model'
    ],
    documentsRequired: [
      'Vessel registry papers',
      'IMCA audit compliance',
      'EMD Bank Guarantee',
      'Technical survey execution plan'
    ],
    importantDates: [
      { event: 'Tender Publishing Date', date: '2026-09-02' },
      { event: 'Pre-Bid Meeting Date', date: '2026-09-20' },
      { event: 'Last Date for Submitting Bids', date: '2026-11-10 16:00 IST' },
      { event: 'Techno-Commercial Opening', date: '2026-11-11 16:30 IST' }
    ],
    publishedDate: '2026-09-02',
    submissionDeadline: '2026-11-10',
    bidOpeningDate: '2026-11-11',
    preBidMeeting: 'Conducted at ONGC Western Offshore Headquarters, Priyadarshini Building, Sion, Mumbai on 2026-09-20 at 14:00 IST.',
    bidSubmissionProcess: 'Electronic submission via ONGC e-Procurement Portal (https://etenders.gov.in and https://tenders.ongc.co.in) using Class-3 DSC.',
    submissionMethod: 'Online through etenders.gov.in / ONGC e-procurement',
    evaluationProcess: 'Techno-commercial compliance verification followed by financial bid evaluation on total cost of acquisition and processing per sq. km.',
    selectionProcess: 'L1 based on cumulative cost evaluation.',
    contractPeriod: '180 Days field acquisition + 90 Days onshore seismic data processing',
    workPeriod: '9 Months',
    paymentTerms: 'Monthly progress payments based on verified square kilometer acquisition logs; 10% retention released upon delivery of final PSDM seismic tape outputs.',
    commercialTerms: 'Performance Security of 10% contract value required within 21 days of LoA.',
    importantConditions: [
      'Vessel must obtain security clearances from Ministry of Defence (Naval HQ) and Directorate General of Shipping.',
      'Zero environmental spill tolerance and strict compliance with DG Shipping marine safety circulars.'
    ],
    nitDocumentUrl: 'https://etenders.gov.in',
    officialDocumentUrl: 'https://etenders.gov.in',
    officialPortalUrl: 'https://tenders.ongc.co.in',
    sourceUrl: 'https://etenders.gov.in',
    officialSource: 'ONGC E-Procurement Portal / Central eProcure',
    sourceAuthority: 'ONGC Western Offshore',
    sourceName: 'ONGC Procurement Portal',
    sourceVerificationDate: '2026-09-16',
    lastVerifiedDate: '2026-09-16',
    verificationStatus: 'VERIFIED',
    status: 'OPEN',
    completenessLevel: 'COMPLETE',
    howToRead: 'This is an offshore upstream exploration tender under International Competitive Bidding. Review vessel specs, node layout geometry, and security clearance timelines prior to quoting.',
    howToRespond: 'Submit techno-commercial envelope with vessel registry, crew certifications, and EMD on etenders.gov.in, followed by commercial price schedule.',
    faqs: [
      {
        question: 'Are foreign-flagged seismic vessels permitted?',
        answer: 'Yes, subject to obtaining necessary coastal trade licenses (Cabotage permissions) and security clearances from DG Shipping and MoD.'
      },
      {
        question: 'What is the required processing output format?',
        answer: 'Final processed 3D data must be delivered in industry-standard SEG-Y format along with velocity model volumes.'
      }
    ]
  },
  {
    id: 'tender-ntpc-06',
    title: 'Design, Engineering and Erection of 100MW Floating Solar PV Power Plant',
    slug: 'design-engineering-erection-100mw-floating-solar',
    tenderId: 'NTPC/RE/2026/FLT-SOLAR-077',
    referenceNumber: 'NTPC-RE-CC-2026-077',
    tenderType: 'Open E-Tender (Domestic Competitive Bidding)',
    authority: 'NTPC Limited',
    procuringAuthority: 'NTPC Renewable Energy Limited (NTPC REL)',
    procuringEntity: 'Renewable Energy Project Group, NTPC Engineering Centre, Noida',
    department: 'Ministry of Power',
    ministry: 'Ministry of Power',
    psu: 'NTPC Limited',
    organisation: 'NTPC Limited',
    state: 'Telangana',
    location: 'Ramagundam Thermal Power Station Reservoir, Telangana',
    district: 'Peddapalli',
    category: 'Renewable Energy & Solar Infrastructure',
    tenderCategory: 'EPC Turnkey Works',
    workCategory: 'Floating Solar PV Installation & Substation Interconnection',
    sector: 'Clean Energy & Solar Power',
    description: 'Turnkey EPC package for design, engineering, supply, mooring, erection, testing and commissioning of 100MW (AC) grid-connected floating solar photovoltaic project with 3-year O&M.',
    detailedDescription: 'NTPC REL invites online bids for the balance of systems and turnkey execution of a 100 MWac Floating Solar PV plant at Ramagundam reservoir. Scope encompasses high-density polyethylene (HDPE) modular floaters, UV-stabilized anchoring and mooring systems, bifacial ALMM-compliant PV modules, string inverters, floating central inverter stations, 33kV submarine cables, and 132kV pooling switchyard interconnection.',
    scopeOfWork: 'Complete reservoir bathymetry, geotechnical survey, floater assembly, module mounting, mooring design with seasonal reservoir level variations, underwater power cabling, SCADA automation, and 3-year comprehensive O&M.',
    tenderValue: '₹460.00 Crores',
    estimatedValue: '₹460,00,00,00 (Four Hundred Sixty Crores INR)',
    emdAmount: '₹5,00,00,000',
    bidSecurity: '₹5,00,00,000 as Bank Guarantee or payment via eprocure.gov.in portal (MSME exemption applicable as per policy).',
    tenderFee: '₹22,500',
    eligibility: 'Solar EPC contractors with prior experience in grid-connected ground-mounted or floating solar PV plants of >= 50MW capacity.',
    eligibilityCriteria: 'Bidder must have designed, supplied, and commissioned grid-connected solar power projects of cumulative capacity not less than 100 MW, with at least one plant of 30 MW or above in operational status for at least 6 months.',
    technicalQualification: [
      'Module floats must be food-grade certified UV-stabilized virgin HDPE with 25-year design life warranty.',
      'PV modules must be from MNRE Approved Models and Manufacturers of Solar Photovoltaic Modules (ALMM) List-I.'
    ],
    financialQualification: [
      'Average annual financial turnover of at least ₹350 Crores over the preceding 3 financial years.',
      'Net worth of the bidder must not be less than 100% of paid-up share capital.'
    ],
    experienceRequirements: [
      'Successfully commissioned at least 1 floating solar PV plant of minimum 10 MW capacity on an inland reservoir or lake.'
    ],
    requiredDocuments: [
      'ALMM module declaration and OEM warranty bond',
      'HDPE floater material test certificates (RoHS & food contact testing)',
      'Audited balance sheets with UDIN certification',
      'Bank Guarantee for Bid Security',
      'Reservoir mooring simulation model and wind-load stress analysis'
    ],
    documentsRequired: [
      'Technical specification compliance sheet',
      'ALMM certificate',
      'Mooring design documentation',
      'Financial BoQ schedule'
    ],
    importantDates: [
      { event: 'Tender Notice Release', date: '2026-08-28' },
      { event: 'Pre-Bid Conference Date', date: '2026-09-16' },
      { event: 'Bid Submission Close Date', date: '2026-10-31 15:00 IST' },
      { event: 'Technical Envelope Opening', date: '2026-11-01 15:30 IST' }
    ],
    publishedDate: '2026-08-28',
    submissionDeadline: '2026-10-31',
    bidOpeningDate: '2026-11-01',
    preBidMeeting: 'Held via MS Teams and at NTPC Engineering Office Complex, Sector 24, Noida on 2026-09-16 at 11:00 AM.',
    bidSubmissionProcess: 'Single-Stage Two-Envelope electronic submission through Central Public Procurement Portal (https://eprocure.gov.in/eprocure/app).',
    submissionMethod: 'Online via CPPP (https://eprocure.gov.in/eprocure/app)',
    evaluationProcess: 'Technical and financial qualification followed by reverse auction on levelized EPC cost per MWp.',
    selectionProcess: 'L1 evaluated bidder across EPC plus NPV of 3-year O&M contract.',
    contractPeriod: '15 Months EPC execution + 36 Months Comprehensive O&M',
    workPeriod: '15 Months',
    paymentTerms: 'Progressive milestone payments: 15% on floater supply; 45% on module delivery; 25% on installation and cabling; 15% on commercial operation declaration (COD).',
    commercialTerms: 'Contract Performance Guarantee (CPG) of 5% contract value; Liquidated damages for delay capped at 10%.',
    importantConditions: [
      'Floater material must prevent water body contamination and pass potable water contact testing as per IS 10146.',
      'Performance Ratio (PR) of at least 78% during 72-hour PG test run.'
    ],
    nitDocumentUrl: 'https://eprocure.gov.in',
    officialDocumentUrl: 'https://eprocure.gov.in',
    officialPortalUrl: 'https://eprocure.gov.in',
    sourceUrl: 'https://eprocure.gov.in',
    officialSource: 'NTPC E-Procurement Portal / CPPP',
    sourceAuthority: 'NTPC Renewable Energy',
    sourceName: 'NTPC Tender Portal',
    sourceVerificationDate: '2026-09-16',
    lastVerifiedDate: '2026-09-16',
    verificationStatus: 'VERIFIED',
    status: 'OPEN',
    completenessLevel: 'COMPLETE',
    howToRead: 'This is a large-scale floating solar EPC project. Review technical requirements for HDPE floaters, mooring anchor designs, and ALMM module compliance before submitting bids.',
    howToRespond: 'Download tender documents from CPPP, complete technical compliance schedule, submit EMD BG, and upload encrypted price schedule.',
    faqs: [
      {
        question: 'Are bifacial solar modules required for this project?',
        answer: 'Yes, high-efficiency bifacial mono-PERC/TOPCon modules listed under MNRE ALMM List-I are specified to leverage water-surface albedo reflection.'
      },
      {
        question: 'Does the scope include reservoir water quality monitoring?',
        answer: 'Yes, environmental parameters including dissolved oxygen, temperature, and algal growth must be monitored throughout the O&M phase.'
      }
    ]
  },
  {
    id: 'tender-powergrid-07',
    title: 'Supply and Installation of 765kV Gas Insulated Switchgear (GIS) Substation Equipment',
    slug: 'supply-installation-765kv-gis-substation',
    tenderId: 'PGCIL/CC/2026/GIS-765-031',
    referenceNumber: 'POWERGRID-CC-GIS-2026-031',
    tenderType: 'Open E-Tender (Global Competitive Bidding)',
    authority: 'Power Grid Corporation of India Limited (POWERGRID)',
    procuringAuthority: 'Power Grid Corporation of India Limited',
    procuringEntity: 'Corporate Contracts Cell, POWERGRID Corporate Centre, Gurugram',
    department: 'Ministry of Power',
    ministry: 'Ministry of Power',
    psu: 'Power Grid Corporation of India Limited (POWERGRID)',
    organisation: 'Power Grid Corporation of India Limited (POWERGRID)',
    state: 'Madhya Pradesh',
    location: 'Khandwa / Jabalpur',
    district: 'Khandwa',
    category: 'Power Transmission & High Voltage Equipment',
    tenderCategory: 'Turnkey Substation Package',
    workCategory: '765kV / 400kV Gas Insulated Switchgear Substation Package',
    sector: 'Power Transmission & Grid Modernization',
    description: 'Supply, design, civil construction, erection, testing and commissioning of 765/400kV Gas Insulated Switchgear (GIS) substation bays and automated SAS systems.',
    detailedDescription: 'POWERGRID invites bids for Package SS-01: Execution of 765kV and 400kV GIS Substation extension works at Khandwa Pooling Station. The package includes 765kV SF6 gas insulated switchgear, 765/400kV auto-transformers, 765kV shunt reactors, IEC 61850 compliant Substation Automation System (SAS), GIS building civil construction, and fire protection systems.',
    scopeOfWork: 'Design calculation, seismic analysis, supply of 765kV GIS circuit breakers, disconnectors, instrument transformers, SF6 gas evacuation/filling, high-voltage withstand testing, civil foundation construction, and SAS commissioning.',
    tenderValue: '₹290.00 Crores',
    estimatedValue: '₹290,00,00,00 (Two Hundred Ninety Crores INR)',
    emdAmount: '₹4,00,00,000',
    bidSecurity: '₹4,00,00,000 as Bank Guarantee or payment through PRANIT e-procurement portal.',
    tenderFee: '₹25,000',
    eligibility: 'OEM manufacturers of 765kV/800kV GIS equipment or qualified EPC consortia with technical collaboration agreements with approved global GIS OEMs.',
    eligibilityCriteria: 'Bidder must have manufactured, type-tested, and commissioned at least 2 bays of 765kV or above GIS in commercial operation for at least 2 years.',
    technicalQualification: [
      'Type test reports from international accredited high-voltage laboratories (KEMA, CESI, CPRI) for 765kV GIS components.',
      'IEC 61850 edition 2 compliance for protection relays and Bay Control Units.'
    ],
    financialQualification: [
      'Average annual turnover of at least ₹215 Crores during the last 3 financial years.',
      'Net worth of at least ₹50 Crores and liquid assets of at least ₹35 Crores.'
    ],
    experienceRequirements: [
      'Successfully executed high-voltage GIS substation projects of 400kV or higher rating of cumulative value exceeding ₹200 Crores in the past 7 years.'
    ],
    requiredDocuments: [
      'Type test certificates from CPRI/KEMA',
      'OEM technical collaboration agreement with equity commitment',
      'Financial audit reports for FY 2022-23 to 2024-25',
      'Bank Guarantee for Bid Security',
      'Single-line diagram (SLD) and GIS hall layout drawing'
    ],
    documentsRequired: [
      'Type test documentation',
      'Turnover certificates',
      'OEM authorization',
      'Price schedule BoQ'
    ],
    importantDates: [
      { event: 'Tender Publishing Date', date: '2026-09-08' },
      { event: 'Pre-Bid Meeting Date', date: '2026-09-24' },
      { event: 'Bid Submission End Date', date: '2026-11-08 11:00 IST' },
      { event: 'First Envelope Opening', date: '2026-11-08 11:30 IST' }
    ],
    publishedDate: '2026-09-08',
    submissionDeadline: '2026-11-08',
    bidOpeningDate: '2026-11-08',
    preBidMeeting: 'Conducted at POWERGRID Corporate Centre, Plot No. 2, Sector 29, Gurugram, Haryana on 2026-09-24 at 11:30 AM.',
    bidSubmissionProcess: 'Electronic submission on POWERGRID PRANIT portal (https://etenders.gov.in and https://etender.powergrid.in) using Class-3 DSC.',
    submissionMethod: 'Online via POWERGRID PRANIT Portal (https://etender.powergrid.in)',
    evaluationProcess: 'Two-envelope evaluation followed by electronic reverse auction for technically compliant bidders.',
    selectionProcess: 'L1 bidder based on total evaluated cost inclusive of taxes and 10-year spares package.',
    contractPeriod: '21 Months from date of issuance of Notification of Award (NOA)',
    workPeriod: '21 Months',
    paymentTerms: '10% advance against BG; 65% on supply against dispatch documents; 15% on installation and pre-commissioning; 10% on successful energization and COD.',
    commercialTerms: 'Contract Performance Guarantee of 10% contract value valid up to 90 days beyond the guarantee period.',
    importantConditions: [
      'SF6 gas leakage rate must not exceed 0.5% per annum per gas compartment.',
      'High-voltage AC on-site testing and partial discharge (PD) monitoring mandatory prior to grid synchronization.'
    ],
    nitDocumentUrl: 'https://etenders.gov.in',
    officialDocumentUrl: 'https://etenders.gov.in',
    officialPortalUrl: 'https://etenders.gov.in',
    sourceUrl: 'https://etenders.gov.in',
    officialSource: 'POWERGRID Portal / Central e-Procurement Portal',
    sourceAuthority: 'POWERGRID Corporate Contracts',
    sourceName: 'POWERGRID PRANIT Portal',
    sourceVerificationDate: '2026-09-16',
    lastVerifiedDate: '2026-09-16',
    verificationStatus: 'VERIFIED',
    status: 'OPEN',
    completenessLevel: 'COMPLETE',
    howToRead: 'This is an extra-high-voltage (EHV) substation package. Examine technical specification Vol-II (Technical Requirements for 765kV GIS), KEMA type tests, and SAS integration schedules.',
    howToRespond: 'Submit First Envelope (Technical & Commercial) on POWERGRID PRANIT portal with CPRI/KEMA test reports, followed by Second Envelope price bid.',
    faqs: [
      {
        question: 'Is domestic manufacturing required for GIS switchgear?',
        answer: 'Under the Public Procurement (Make in India) policy, preference is accorded to Class-I domestic suppliers with at least 50% local manufacturing content.'
      },
      {
        question: 'What is the required seismic design standard?',
        answer: 'The GIS equipment and steel support structures must withstand Zone-III seismic forces as per IS 1893 and IEEE 693 standards.'
      }
    ]
  },
  {
    id: 'tender-isro-08',
    title: 'Procurement of Aerospace-Grade Carbon Fiber Composites and Epoxy Resins',
    slug: 'procurement-aerospace-grade-carbon-fiber-composites',
    tenderId: 'ISRO/VSSC/2026/MAT-109',
    referenceNumber: 'VSSC-PUR-COMP-2026-109',
    tenderType: 'Limited / Open E-Tender for Space Materials',
    authority: 'Indian Space Research Organisation (ISRO / VSSC)',
    procuringAuthority: 'Vikram Sarabhai Space Centre (VSSC)',
    procuringEntity: 'Purchase & Stores Division, VSSC Thiruvananthapuram',
    department: 'Department of Space',
    ministry: 'Department of Space, Prime Minister\'s Office',
    psu: 'NewSpace India Limited (NSIL) / ISRO',
    organisation: 'Indian Space Research Organisation (ISRO)',
    state: 'Kerala',
    location: 'Thiruvananthapuram',
    district: 'Thiruvananthapuram',
    category: 'Space Grade Advanced Materials',
    tenderCategory: 'Raw Materials & High Performance Composites',
    workCategory: 'Aerospace Carbon Fiber T800/T1000 & Toughened Epoxy Prepregs',
    sector: 'Space Technology & Aerospace',
    description: 'Procurement of high-modulus, high-tensile aerospace-grade continuous carbon fiber rovings, unidirectional carbon prepregs, and space-qualified high-Tg epoxy resin formulations.',
    detailedDescription: 'VSSC invites online tenders for the supply of high-grade aerospace carbon fiber materials (equivalent to Toray T800S/T1000G grades) and unidirectional prepregs for composite motor casings, payload fairings, and inter-stage structural adapters for launch vehicle programs (LVM3 / NGLV).',
    scopeOfWork: 'Manufacturing, rigorous lot-by-lot mechanical and thermal testing, space outgassing qualification (TML < 1.0%, CVCM < 0.10%), temperature-controlled freezer transport (-18°C), and delivery to VSSC Stores, Thumba.',
    tenderValue: '₹22.50 Crores',
    estimatedValue: '₹22,50,00,00 (Twenty Two Crores Fifty Lakhs INR)',
    emdAmount: '₹45,00,000',
    bidSecurity: '₹45,00,000 via Bank Guarantee or online payment via ISRO E-Procurement Portal (MSME exempt).',
    tenderFee: 'Nil',
    eligibility: 'Certified aerospace raw material manufacturers with AS9100D aerospace quality certification and spaceflight heritage.',
    eligibilityCriteria: 'Bidders must have supplied aerospace-grade composite prepregs or carbon fibers to space agencies or commercial launch vehicle manufacturers.',
    technicalQualification: [
      'AS9100 Rev D Aerospace Quality Management System certification.',
      'Material test certification meeting outgassing criteria as per ASTM E595 standards.',
      'Lot traceability with certificate of analysis for fiber tensile strength >= 5.5 GPa.'
    ],
    financialQualification: [
      'Annual average financial turnover of at least ₹35 Crores in the past 3 financial years.',
      'Positive net worth and creditworthiness certification.'
    ],
    experienceRequirements: [
      'Minimum 3 years supplying aerospace-qualified composite materials to defense, space, or commercial aerospace sectors.'
    ],
    requiredDocuments: [
      'AS9100D certificate copy',
      'ASTM E595 Outgassing and Tg thermal analysis test reports',
      'Certificate of Analysis (CoA) from accredited testing laboratory',
      'End-user spaceflight/aerospace qualification certificates',
      'Tender acceptance letter'
    ],
    documentsRequired: [
      'AS9100 certificate',
      'Test reports (ASTM E595)',
      'Proof of cold-chain logistics capability',
      'Price bid'
    ],
    importantDates: [
      { event: 'Tender Release Date', date: '2026-09-04' },
      { event: 'Last Date for Clarifications', date: '2026-09-22' },
      { event: 'Bid Submission Due Date', date: '2026-10-24 14:00 IST' },
      { event: 'Technical Opening Date', date: '2026-10-24 14:30 IST' }
    ],
    publishedDate: '2026-09-04',
    submissionDeadline: '2026-10-24',
    bidOpeningDate: '2026-10-24',
    preBidMeeting: 'Clarifications handled electronically via ISRO E-Procurement Portal (https://www.isro.gov.in and https://eproc.isro.gov.in).',
    bidSubmissionProcess: 'Electronic submission via ISRO E-Procurement Portal (https://eproc.isro.gov.in) with Class-3 digital signature.',
    submissionMethod: 'Online via ISRO e-Procurement Portal (https://eproc.isro.gov.in)',
    evaluationProcess: 'Two-part evaluation: Technical evaluation of material data sheets and sample testing, followed by commercial opening.',
    selectionProcess: 'L1 price evaluation among technically qualified and test-verified suppliers.',
    contractPeriod: '8 Months delivery schedule in temperature-controlled refrigerated containers',
    workPeriod: '8 Months',
    paymentTerms: '100% payment within 30 days of receipt, laboratory testing, and final quality acceptance at VSSC Thumba.',
    commercialTerms: 'Performance Security of 3% contract value valid for 18 months.',
    importantConditions: [
      'Prepregs must be shipped in continuous cold chain (-18°C or below) with multi-point temperature data loggers.',
      'Material shelf life at -18°C must be minimum 12 months from the date of dispatch.'
    ],
    nitDocumentUrl: 'https://eproc.isro.gov.in',
    officialDocumentUrl: 'https://eproc.isro.gov.in',
    officialPortalUrl: 'https://www.isro.gov.in',
    sourceUrl: 'https://www.isro.gov.in',
    officialSource: 'ISRO E-Procurement Portal',
    sourceAuthority: 'ISRO / VSSC',
    sourceName: 'ISRO e-Procure',
    sourceVerificationDate: '2026-09-16',
    lastVerifiedDate: '2026-09-16',
    verificationStatus: 'VERIFIED',
    status: 'OPEN',
    completenessLevel: 'COMPLETE',
    howToRead: 'This is a specialized space materials procurement tender. Pay specific attention to ASTM E595 outgassing constraints and -18°C cold-chain shipping mandates.',
    howToRespond: 'Log in to eproc.isro.gov.in, upload AS9100 and material test data sheets under Cover 1, and submit price bid in Cover 2.',
    faqs: [
      {
        question: 'Are sample submissions required for technical evaluation?',
        answer: 'Yes, 5-meter sample rolls of prepreg must be submitted to VSSC Materials Laboratory for resin content and volatile testing prior to opening commercial bids.'
      },
      {
        question: 'What is the required resin glass transition temperature (Tg)?',
        answer: 'The cured epoxy resin formulation must demonstrate a minimum Tg of >= 180°C by DMA analysis.'
      }
    ]
  },
  {
    id: 'post-aiims-09',
    title: 'Supply of Advanced Robotic Surgical Systems and Navigation Consoles',
    slug: 'supply-advanced-robotic-surgical-systems',
    tenderId: 'AIIMS/DEL/2026/ROB-SURG-018',
    referenceNumber: 'AIIMS-ND-STORE-2026-018',
    tenderType: 'Global Open E-Tender',
    authority: 'All India Institute of Medical Sciences (AIIMS)',
    procuringAuthority: 'AIIMS New Delhi',
    procuringEntity: 'Main Hospital Store, Ansari Nagar, AIIMS New Delhi',
    department: 'Ministry of Health and Family Welfare (MoHFW)',
    ministry: 'Ministry of Health and Family Welfare',
    psu: 'All India Institute of Medical Sciences',
    organisation: 'All India Institute of Medical Sciences (AIIMS)',
    state: 'Delhi',
    location: 'Ansari Nagar, New Delhi',
    district: 'New Delhi',
    category: 'Healthcare & Advanced Medical Equipment',
    tenderCategory: 'High-End Surgical Medical Devices & Systems',
    workCategory: 'Multi-Arm Robotic Surgical System & 5-Year Comprehensive CMC',
    sector: 'Healthcare, MedTech & Hospital Infrastructure',
    description: 'Supply, installation, clinical testing, user training and 5-year Comprehensive Maintenance Contract (CMC) of state-of-the-art Multi-Arm Robotic Surgical Systems for Surgical Oncology and Urology.',
    detailedDescription: 'AIIMS New Delhi invites global online tenders for the procurement of 2 units of latest-generation Multi-Quadrant Multi-Arm Robotic Surgical Systems equipped with 3D-HD stereoscopic vision consoles, wristed robotic instruments with 7 degrees of freedom, integrated vessel-sealing electrocautery, augmented reality overlay navigation, and 5-year post-warranty CMC.',
    scopeOfWork: 'Supply, OT room preparation, installation, surgical console networking, initial robotic instruments and consumable starter packs, surgeon and nursing simulation training, and 5-year 24/7 onsite technical support.',
    tenderValue: '₹36.50 Crores',
    estimatedValue: '₹36,50,00,00 (Thirty Six Crores Fifty Lakhs INR)',
    emdAmount: '₹73,00,000',
    bidSecurity: '₹73,00,000 / $90,000 USD via Bank Guarantee or online payment on eprocure.gov.in (MSME exempt).',
    tenderFee: '₹5,000',
    eligibility: 'Direct medical device OEMs or their authorized Indian subsidiaries with US FDA and European CE certifications for robotic surgical systems.',
    eligibilityCriteria: 'Bidders must be approved OEMs with at least 10 active clinical installations of the quoted robotic surgical model in major government teaching hospitals or tertiary medical institutes globally.',
    technicalQualification: [
      'US FDA (510k) and European CE (MDR) certifications for general surgery, urology, gynecology, and surgical oncology.',
      'High-definition 3D visualization console with tremor filtration and motion scaling.',
      'Dedicated simulation training module integrated into surgeon master console.'
    ],
    financialQualification: [
      'Average annual financial turnover of at least ₹50 Crores over the past 3 audited financial years.',
      'Solvency certificate for at least ₹15 Crores.'
    ],
    experienceRequirements: [
      'Successfully supplied and maintained robotic surgical systems in at least 3 Central Government institutions (AIIMS/PGIMER/JIPMER) or premier medical centers.'
    ],
    requiredDocuments: [
      'US FDA (510k) and CE clearance certificates',
      'OEM authorization certificate and spare part availability guarantee for 10 years',
      'Price breakup of system, robotic instruments, and 5-year CMC charges',
      'Audited balance sheets for FY 2022-23 to 2024-25',
      'User satisfaction certificates from minimum 3 tertiary teaching hospital heads of surgery'
    ],
    documentsRequired: [
      'US FDA / CE certificates',
      'OEM MAF',
      '5-Year CMC price schedule',
      'User satisfactory performance certificates'
    ],
    importantDates: [
      { event: 'Tender Notice Upload', date: '2026-09-06' },
      { event: 'Pre-Bid Clinical Conference', date: '2026-09-21' },
      { event: 'Tender Submission Closing Date', date: '2026-11-08 16:00 IST' },
      { event: 'Technical Bid Opening', date: '2026-11-09 16:30 IST' }
    ],
    publishedDate: '2026-09-06',
    submissionDeadline: '2026-11-08',
    bidOpeningDate: '2026-11-09',
    preBidMeeting: 'Held at Board Room, Director\'s Office, AIIMS New Delhi and via video conference on 2026-09-21 at 14:30 IST.',
    bidSubmissionProcess: 'Two-Bid electronic submission on Central Public Procurement Portal (https://eprocure.gov.in/eprocure/app).',
    submissionMethod: 'Online via CPPP (https://eprocure.gov.in/eprocure/app)',
    evaluationProcess: 'Two-stage evaluation: Technical evaluation and physical live surgical demonstration, followed by financial comparison of landed system cost + NPV of 5-year CMC.',
    selectionProcess: 'L1 evaluation based on Total Cost of Ownership (TCO) inclusive of CMC and consumable rates.',
    contractPeriod: '90 Days supply & commissioning + 5 Years Warranty + 5 Years CMC',
    workPeriod: '10 Years (Combined Lifecycle)',
    paymentTerms: '80% against delivery and physical verification; 20% on successful installation, clinical commissioning, and user training against 10% PBG.',
    commercialTerms: 'Performance Bank Guarantee of 5% of order value valid for 65 months from installation.',
    importantConditions: [
      'Guaranteed 98% system uptime with maximum 4-hour response time for service calls.',
      'OEM must provide free software upgrades released during the warranty and CMC periods.'
    ],
    nitDocumentUrl: 'https://eprocure.gov.in',
    officialDocumentUrl: 'https://eprocure.gov.in',
    officialPortalUrl: 'https://eprocure.gov.in',
    sourceUrl: 'https://eprocure.gov.in',
    officialSource: 'Central Public Procurement Portal (CPPP) / AIIMS New Delhi',
    sourceAuthority: 'AIIMS New Delhi',
    sourceName: 'AIIMS Procurement Portal',
    sourceVerificationDate: '2026-09-16',
    lastVerifiedDate: '2026-09-16',
    verificationStatus: 'VERIFIED',
    status: 'OPEN',
    completenessLevel: 'COMPLETE',
    howToRead: 'This is a global high-tech medical procurement tender. Review regulatory certification mandates (US FDA/CE MDR) and 5-year CMC commitments in the DNIT.',
    howToRespond: 'Submit US FDA/CE certificates, clinical user proofs, and EMD on CPPP Cover 1, followed by instrument rate contracts and CMC price bids in Cover 2.',
    faqs: [
      {
        question: 'Are consumable robotic instruments covered under the initial package?',
        answer: 'The tender specifies an initial starter pack of 20 sterile multi-use instruments per robotic console included in the capital equipment scope.'
      },
      {
        question: 'Is on-site simulation training for surgeons mandatory?',
        answer: 'Yes, the OEM must conduct certified dual-console simulator curriculum training for at least 10 surgical faculty members.'
      }
    ]
  },
  {
    id: 'tender-sci-10',
    title: 'Dry Docking, Special Survey and Hull Rehabilitation of Coastal Vessels',
    slug: 'dry-docking-special-survey-hull-rehabilitation',
    tenderId: 'SCI/OPS/2026/DRYDOCK-052',
    referenceNumber: 'SCI-FLEET-DD-2026-052',
    tenderType: 'Open E-Tender (Domestic Shipyards)',
    authority: 'Shipping Corporation of India (SCI)',
    procuringAuthority: 'Shipping Corporation of India Limited',
    procuringEntity: 'Technical & Offshore Services Division, Shipping House, Mumbai',
    department: 'Ministry of Ports, Shipping and Waterways',
    ministry: 'Ministry of Ports, Shipping and Waterways',
    psu: 'Shipping Corporation of India Limited',
    organisation: 'Shipping Corporation of India (SCI)',
    state: 'Maharashtra / Kerala',
    location: 'Mumbai / Kochi Shipyard',
    district: 'Mumbai',
    category: 'Marine Engineering & Ship Repair',
    tenderCategory: 'Shipyard Repair & Overhaul Works',
    workCategory: 'Vessel Dry Docking, Hull Steel Renewal & Class Survey',
    sector: 'Maritime & Coastal Shipping',
    description: 'Dry docking, underwater hull hydro-blasting, anti-fouling coating, rudder and propeller shaft overhauls, steel plate renewals, and statutory Class Special Survey renewals for 3 coastal cargo vessels.',
    detailedDescription: 'SCI invites online tenders from approved Indian ship repair yards and dry docks for the scheduled dry docking, 5-year special survey hull and machinery rehabilitation of 3 coastal container/bulk vessels. Scope includes high-pressure water jetting (UHP 2500 bar), ultrasonic thickness gauging (UTG), main engine crankshaft alignment, tailshaft survey, sea chest valve overhauling, and statutory Indian Register of Shipping (IRS) / DNV certification.',
    scopeOfWork: 'Vessel berthing and dry docking, underwater hull surface preparation, application of silicone anti-fouling coatings, replacement of approx 60 MT of high-tensile hull steel plates, auxiliary engine top overhauls, life-saving appliance (LSA/FFA) recertification, and dock trials.',
    tenderValue: '₹18.00 Crores',
    estimatedValue: '₹18,00,00,00 (Eighteen Crores INR)',
    emdAmount: '₹36,00,000',
    bidSecurity: '₹36,00,000 as Bank Guarantee or payment via eprocure.gov.in (MSME shipyard exempt).',
    tenderFee: '₹10,000',
    eligibility: 'Indian Shipyards and Ship Repair Units registered with DG Shipping / Ministry of Ports, Shipping and Waterways with functional graving dock or floating dock facilities.',
    eligibilityCriteria: 'Shipyard must possess operational dry dock capable of accommodating vessels with length overall (LOA) >= 140m and draft >= 6.5m.',
    technicalQualification: [
      'Approved Ship Repair Unit (SRU) registration certificate from Ministry of Ports, Shipping and Waterways.',
      'ISO 9001 and ISO 14001 certified shipyard safety management system.',
      'In-house certified marine welders (IRS/DNV qualified) and UT gauging teams.'
    ],
    financialQualification: [
      'Average annual financial turnover of at least ₹27 Crores in the last 3 financial years.',
      'Positive net worth and solvency certificate of at least ₹7 Crores.'
    ],
    experienceRequirements: [
      'Successfully completed dry docking and special surveys of at least 3 ocean-going or coastal commercial vessels of >= 5,000 DWT in the last 5 years.'
    ],
    requiredDocuments: [
      'Dry dock dimension layout and crane capacity specifications',
      'DG Shipping SRU registration certificate',
      'IRS / DNV surveyor approval documentation',
      'Audited balance sheets for FY 2022-23 to 2024-25',
      'Safety and environmental policy certificate'
    ],
    documentsRequired: [
      'SRU registration',
      'Drydock capacity certificate',
      'Financial audited accounts',
      'Price schedule BoQ'
    ],
    importantDates: [
      { event: 'Tender Publishing Date', date: '2026-09-03' },
      { event: 'Pre-Bid Meeting Date', date: '2026-09-17' },
      { event: 'Bid Submission Due Date', date: '2026-10-20 15:00 IST' },
      { event: 'Technical Bid Opening', date: '2026-10-20 15:30 IST' }
    ],
    publishedDate: '2026-09-03',
    submissionDeadline: '2026-10-20',
    bidOpeningDate: '2026-10-20',
    preBidMeeting: 'Held at SCI Headquarters, Shipping House, Madame Cama Road, Mumbai on 2026-09-17 at 11:30 AM.',
    bidSubmissionProcess: 'Electronic bid submission via Central Public Procurement Portal (https://eprocure.gov.in/eprocure/app).',
    submissionMethod: 'Online through CPPP (https://eprocure.gov.in/eprocure/app)',
    evaluationProcess: 'Technical qualification followed by commercial price bid comparison on total dry dock occupancy rates and unit repair tariffs.',
    selectionProcess: 'L1 shipyard based on combined repair tariffs and dock stay schedule.',
    contractPeriod: '35 Days per vessel dry dock window',
    workPeriod: '35 Days per vessel',
    paymentTerms: 'Progressive stage billing: 30% upon docking and hull grit-blasting; 40% upon steel renewal and machinery survey; 30% upon successful undocking and sea trials.',
    commercialTerms: 'Performance Guarantee of 5% of the total repair invoice value valid for 12 months guarantee period.',
    importantConditions: [
      'Strict adherence to dock stay timeline; liquidated damages of ₹1,50,000 per day of delay beyond 35 days.',
      'All steel renewals must be executed with IRS Grade-A / Grade-AH36 certified steel plates with mill test certificates.'
    ],
    nitDocumentUrl: 'https://eprocure.gov.in',
    officialDocumentUrl: 'https://eprocure.gov.in',
    officialPortalUrl: 'https://eprocure.gov.in',
    sourceUrl: 'https://eprocure.gov.in',
    officialSource: 'Central Public Procurement Portal / Shipping Corporation of India',
    sourceAuthority: 'Shipping Corporation of India Limited',
    sourceName: 'SCI Tender Cell',
    sourceVerificationDate: '2026-09-16',
    lastVerifiedDate: '2026-09-16',
    verificationStatus: 'VERIFIED',
    status: 'OPEN',
    completenessLevel: 'COMPLETE',
    howToRead: 'This is a time-critical marine engineering dry-docking tender. Verify dry dock dimensions, crane lifting tonnages, and IRS surveyor availability before bidding.',
    howToRespond: 'Upload shipyard facility specs, SRU credentials, and EMD on CPPP Cover 1, followed by tariff schedules in Cover 2.',
    faqs: [
      {
        question: 'Are paint coatings supplied by SCI or the shipyard?',
        answer: 'Marine hull paint coatings are supplied as owner-furnished material (OFM) by SCI; application and surface preparation is in shipyard scope.'
      },
      {
        question: 'What happens if additional steel renewal is discovered during docking?',
        answer: 'Additional steel renewals beyond the tender estimate will be paid as per the pre-agreed unit rate per kilogram quoted in the price BoQ.'
      }
    ]
  },
  {
    id: 'tender-iocl-11',
    title: 'Construction of Cryogenic LPG Storage Mounded Bullets and Firefighting Network',
    slug: 'construction-cryogenic-lpg-storage-mounded-bullets',
    tenderId: 'IOCL/PL/2026/LPG-MND-063',
    referenceNumber: 'IOCL-EPC-MND-2026-063',
    tenderType: 'Open E-Tender (Domestic EPC)',
    authority: 'Indian Oil Corporation Limited (IOCL)',
    procuringAuthority: 'Indian Oil Corporation Limited (Pipelines / Marketing Division)',
    procuringEntity: 'Engineering & Projects Directorate, IOCL Corporate Office, New Delhi',
    department: 'Ministry of Petroleum and Natural Gas (MoPNG)',
    ministry: 'Ministry of Petroleum and Natural Gas',
    psu: 'Indian Oil Corporation Limited (IOCL)',
    organisation: 'Indian Oil Corporation Limited (IOCL)',
    state: 'Gujarat / Odisha',
    location: 'Kandla (Gujarat) / Paradip (Odisha) Terminals',
    district: 'Kutch / Jagatsinghpur',
    category: 'Petroleum Infrastructure & Heavy Civil',
    tenderCategory: 'EPC Hydrocarbon Storage Package',
    workCategory: 'LPG Mounded Bullets Construction & OISD-144 Fire Protection Network',
    sector: 'Oil, Gas & Petrochemicals',
    description: 'EPC contract for engineering, procurement, fabrication, civil sand mounding, piping, instrumentation, and automated deluge firefighting network for 3x2500 MT LPG Mounded Storage Bullets.',
    detailedDescription: 'IOCL invites online bids for the turnkey EPC construction of 3 numbers of 2,500 MT capacity LPG Mounded Bullets (diameter 8.0m, length 78m) designed to ASME Section VIII Div 2 standards and OISD-144 norms, including heavy civil foundations, cathodic protection, gas detection, automated deluge firefighting, compressor piping, and SCADA automation at coastal LPG import terminals.',
    scopeOfWork: 'Geotechnical piles, high-pressure vessel shell fabrication using micro-alloyed steel plates (SA 537 Cl 2), post-weld heat treatment (PWHT), 100% radiographic and ultrasonic NDT, sand mounding cover, deep well cathodic protection, fire pumps, and PESO statutory approvals.',
    tenderValue: '₹64.00 Crores',
    estimatedValue: '₹64,00,00,00 (Sixty Four Crores INR)',
    emdAmount: '₹80,00,000',
    bidSecurity: '₹80,00,000 via online payment gateway on etenders.gov.in or Bank Guarantee (MSME exemption as per policy).',
    tenderFee: '₹10,000',
    eligibility: 'EPC contractors with proven track record in pressurized hydrocarbon storage vessel fabrication and OISD compliant terminal construction.',
    eligibilityCriteria: 'Bidder must have completed at least one mounded bullet storage facility for LPG/Propane of single bullet capacity >= 1,500 MT in the last 7 years.',
    technicalQualification: [
      'ASME "U2" / "U" stamp authorization for pressure vessel manufacturing.',
      'Approved fabrication procedure with in-situ PWHT facility.',
      'ISO 9001 and ISO 45001 occupational safety management certifications.'
    ],
    financialQualification: [
      'Average annual turnover of at least ₹96 Crores over the preceding 3 audited financial years.',
      'Positive net worth and solvency certificate of at least ₹25 Crores.'
    ],
    experienceRequirements: [
      'Successfully executed similar hydrocarbon terminal works involving high-pressure piping and PESO clearances within the past 7 years.'
    ],
    requiredDocuments: [
      'ASME Section VIII Div 2 authorization certificates',
      'PESO approved fabrication drawings and design methodology',
      'Audited balance sheets for FY 2022-23 to 2024-25',
      'Bank Guarantee for EMD',
      'Safety and Environmental management plan for brownfield terminal'
    ],
    documentsRequired: [
      'ASME stamp cert',
      'PESO experience',
      'Turnover and solvency',
      'Financial BoQ schedule'
    ],
    importantDates: [
      { event: 'Tender Notice Published', date: '2026-09-07' },
      { event: 'Pre-Bid Meeting Date', date: '2026-09-23' },
      { event: 'Bid Submission Close Date', date: '2026-11-12 15:00 IST' },
      { event: 'Technical Bid Opening Date', date: '2026-11-13 15:30 IST' }
    ],
    publishedDate: '2026-09-07',
    submissionDeadline: '2026-11-12',
    bidOpeningDate: '2026-11-13',
    preBidMeeting: 'Conducted at IOCL Pipelines Head Office, A-1, Udyog Marg, Sector 1, Noida and via Webex on 2026-09-23 at 11:00 AM.',
    bidSubmissionProcess: 'Electronic two-stage bidding through Central e-Procurement Portal (https://etenders.gov.in/eprocure/app).',
    submissionMethod: 'Online via etenders.gov.in',
    evaluationProcess: 'Technical scrutiny followed by commercial price bid opening of technically qualified bidders.',
    selectionProcess: 'L1 price evaluation on total turnkey EPC package cost.',
    contractPeriod: '18 Months from date of Letter of Acceptance (LoA)',
    workPeriod: '18 Months',
    paymentTerms: 'Milestone-based stage payments: 15% on plate procurement and inspection; 40% on shell fabrication and welding; 25% on hydrotesting and sand mounding; 20% on PESO commissioning approval.',
    commercialTerms: 'Performance Bank Guarantee of 5% of contract value valid up to 3 months beyond defect liability period of 12 months.',
    importantConditions: [
      'All vessel fabrication must strictly adhere to OISD Standard 144 and SMPV(U) Rules 2016.',
      'Mandatory obtaining of Petroleum and Explosives Safety Organization (PESO) final storage license.'
    ],
    nitDocumentUrl: 'https://etenders.gov.in',
    officialDocumentUrl: 'https://etenders.gov.in',
    officialPortalUrl: 'https://etenders.gov.in',
    sourceUrl: 'https://etenders.gov.in',
    officialSource: 'Central Public Procurement Portal / IOCL e-Tenders',
    sourceAuthority: 'Indian Oil Corporation Limited',
    sourceName: 'IOCL E-Tender Portal',
    sourceVerificationDate: '2026-09-16',
    lastVerifiedDate: '2026-09-16',
    verificationStatus: 'VERIFIED',
    status: 'OPEN',
    completenessLevel: 'COMPLETE',
    howToRead: 'This is a safety-critical hydrocarbon EPC tender. Review OISD-144 norms, ASME Section VIII Div 2 pressure calculations, and PESO licensing timelines.',
    howToRespond: 'Submit technical documents, ASME certifications, EMD BG, and financial capacity certificates on etenders.gov.in, followed by encrypted BoQ submission.',
    faqs: [
      {
        question: 'Are pressure vessel plates free-issue by IOCL?',
        answer: 'No, procurement of SA 537 Class 2 vacuum-degassed normalized steel plates is under contractor\'s EPC scope from approved steel mills.'
      },
      {
        question: 'Who is responsible for PESO licensing approval?',
        answer: 'The EPC contractor is responsible for preparing PESO design packages, coordinating inspection, and obtaining initial and final PESO licenses.'
      }
    ]
  },
  {
    id: 'tender-coalindia-12',
    title: 'Deployment of High-Capacity Autonomous Surface Mining Dump Trucks',
    slug: 'deployment-high-capacity-autonomous-surface-mining-trucks',
    tenderId: 'CIL/SECL/2026/HEMM-240T-081',
    referenceNumber: 'SECL-GM-MM-2026-081',
    tenderType: 'Global E-Tender (Two-Cover System)',
    authority: 'Coal India Limited (CIL / SECL)',
    procuringAuthority: 'South Eastern Coalfields Limited (SECL) / Coal India Limited',
    procuringEntity: 'Materials Management Division, SECL HQ, Bilaspur, Chhattisgarh',
    department: 'Ministry of Coal',
    ministry: 'Ministry of Coal',
    psu: 'Coal India Limited (CIL)',
    organisation: 'Coal India Limited (CIL / SECL)',
    state: 'Chhattisgarh / Jharkhand',
    location: 'Gevra / Kusmunda Mega Opencast Coal Mines',
    district: 'Korba',
    category: 'Heavy Mining Machinery & Autonomous Vehicles',
    tenderCategory: 'Heavy Earth Moving Machinery (HEMM) Supply & Maintenance',
    workCategory: '240-Ton Electric Drive Dump Trucks with 10-Year MARC',
    sector: 'Mining, Heavy Equipment & Automation',
    description: 'Procurement of 20 numbers of 240-Ton payload capacity electric drive rear dump trucks equipped with Autonomous Haulage System (AHS) and 10-year Maintenance and Repair Contract (MARC).',
    detailedDescription: 'SECL/CIL invites global online tenders for the design, manufacture, supply, commissioning, and 10-year comprehensive Maintenance and Repair Contract (MARC) of twenty (20) numbers of 240-Ton capacity electric-drive mining rear dump trucks fitted with collision avoidance radar, LiDAR obstacle detection, automated dispatch telemetry, and DGMS-compliant safety interlocks.',
    scopeOfWork: 'Manufacturing, shipping, site assembly at mine workshop, commissioning, operator training, autonomous haulage system fleet management integration, and 10-year comprehensive MARC ensuring minimum 85% equipment availability.',
    tenderValue: '₹195.00 Crores',
    estimatedValue: '₹195,00,00,00 (One Hundred Ninety Five Crores INR)',
    emdAmount: '₹50,00,000',
    bidSecurity: '₹50,00,000 as Bank Guarantee or online payment through CIL e-procurement portal (eprocure.gov.in).',
    tenderFee: 'Nil',
    eligibility: 'Original Equipment Manufacturers (OEMs) of heavy earth moving machinery with proven manufacturing history of >= 240-ton class electric-drive mining trucks.',
    eligibilityCriteria: 'Bidder must have manufactured, supplied, and successfully commissioned at least 10 units of 240T or higher capacity dump trucks in opencast mines globally during the last 7 years.',
    technicalQualification: [
      'Electric drive AC propulsion system with regenerative dynamic retarding.',
      'DGMS (Directorate General of Mines Safety) statutory circular compliance.',
      'Autonomous haulage system (AHS) ready with GPS/GNSS high-precision positioning and LiDAR vision.'
    ],
    financialQualification: [
      'Average annual financial turnover of at least ₹250 Crores in the last 3 audited financial years.',
      'Positive net worth and high working capital credit rating.'
    ],
    experienceRequirements: [
      'Minimum 5 years operational experience of supplied dump trucks achieving >= 85% availability under MARC in open cast mines.'
    ],
    requiredDocuments: [
      'DGMS approval / field trial certificates',
      'OEM authorization and manufacturing facility credentials',
      'Audited financial statements for FY 2022-23 to 2024-25',
      'Comprehensive 10-Year MARC pricing and spare parts inventory commitment',
      'Integrity Pact and safety compliance declaration'
    ],
    documentsRequired: [
      'DGMS certification',
      'OEM technical datasheets',
      'MARC rate schedule',
      'Price bid BoQ'
    ],
    importantDates: [
      { event: 'Tender Notice Upload', date: '2026-09-09' },
      { event: 'Pre-Bid Meeting Date', date: '2026-09-26' },
      { event: 'Tender Submission Deadline', date: '2026-11-25 15:00 IST' },
      { event: 'Technical Bid Opening', date: '2026-11-26 15:30 IST' }
    ],
    publishedDate: '2026-09-09',
    submissionDeadline: '2026-11-25',
    bidOpeningDate: '2026-11-26',
    preBidMeeting: 'Held at SECL Executive Conference Hall, Bilaspur, Chhattisgarh on 2026-09-26 at 11:30 AM.',
    bidSubmissionProcess: 'Electronic submission on Coal India e-Procurement Portal (https://coalindiatenders.nic.in and https://etenders.gov.in).',
    submissionMethod: 'Online via CIL eProcure portal (https://coalindiatenders.nic.in)',
    evaluationProcess: 'Two-cover technical qualification followed by financial evaluation on Life Cycle Cost (LCC) basis (Truck Price + 10-Year MARC NPV).',
    selectionProcess: 'L1 evaluated bidder based on Total Cost of Ownership.',
    contractPeriod: '12 Months supply schedule + 120 Months (10 Years) MARC duration',
    workPeriod: '10 Years',
    paymentTerms: '80% on delivery and physical inspection; 20% on successful assembly, commissioning, and 30-day trial run; MARC payments made monthly based on achieved availability.',
    commercialTerms: 'Performance Bank Guarantee of 5% of equipment value + separate PBG for MARC contract.',
    importantConditions: [
      'Guaranteed machine availability of at least 85% on annual basis with strict penalty deductions for shortfall.',
      'Mandatory OEM workshop and consignment spare stocking depot establishment at Gevra mine site.'
    ],
    nitDocumentUrl: 'https://coalindiatenders.nic.in',
    officialDocumentUrl: 'https://coalindiatenders.nic.in',
    officialPortalUrl: 'https://coalindiatenders.nic.in',
    sourceUrl: 'https://etenders.gov.in',
    officialSource: 'Coal India E-Procurement Portal / Central e-Procure',
    sourceAuthority: 'Coal India Limited / SECL',
    sourceName: 'CIL Tenders Portal',
    sourceVerificationDate: '2026-09-16',
    lastVerifiedDate: '2026-09-16',
    verificationStatus: 'VERIFIED',
    status: 'OPEN',
    completenessLevel: 'COMPLETE',
    howToRead: 'This is a mega mining equipment procurement tender evaluated on Life Cycle Costing. Carefully review the 10-year MARC availability clauses and DGMS safety requirements.',
    howToRespond: 'Submit OEM technical proposals, DGMS compliance sheets, and EMD on coalindiatenders.nic.in, followed by LCC financial BoQ.',
    faqs: [
      {
        question: 'Are foreign OEMs permitted to bid directly?',
        answer: 'Yes, global OEMs with Indian subsidiaries or registered Indian service partners are permitted to participate in this Global Tender.'
      },
      {
        question: 'What is the penalty for availability falling below 85%?',
        answer: 'Penalties are deducted from monthly MARC fees at progressive rates per percentage drop below the guaranteed 85% threshold.'
      }
    ]
  },
  {
    id: 'tender-bsnl-13',
    title: 'Rollout of FTTH Fiber Optic Cable Access Networks in Rural Blocks',
    slug: 'rollout-ftth-fiber-optic-cable-access-networks',
    tenderId: 'BSNL/NOFN/2026/FTTH-RUR-094',
    referenceNumber: 'BSNL-HQ-NW-2026-094',
    tenderType: 'Open E-Tender (Domestic Bidding)',
    authority: 'Bharat Sanchar Nigam Limited (BSNL)',
    procuringAuthority: 'Bharat Sanchar Nigam Limited (BSNL)',
    procuringEntity: 'BharatNet Project Implementation Cell, BSNL Corporate Office, New Delhi',
    department: 'Department of Telecommunications (DoT)',
    ministry: 'Ministry of Communications',
    psu: 'Bharat Sanchar Nigam Limited (BSNL)',
    organisation: 'Bharat Sanchar Nigam Limited (BSNL)',
    state: 'Uttar Pradesh / Bihar',
    location: 'Multiple Circles (Eastern Uttar Pradesh & Bihar)',
    district: 'Patna / Varanasi / Gorakhpur / Muzaffarpur',
    category: 'Telecom Infrastructure & Optical Fiber',
    tenderCategory: 'Telecom EPC & Optical Network Rollout',
    workCategory: 'FTTH GPON Network Deployment, Trenching & Optical Splicing',
    sector: 'Telecommunications & Digital Infrastructure',
    description: 'Turnkey optical fiber laying, HDD ducting, GPON OLT/ONT installation, and FTTH last-mile connectivity rollout across 4,500 Gram Panchayats.',
    detailedDescription: 'BSNL invites online tenders for the turnkey deployment of BharatNet Phase-III FTTH networks across rural blocks in UP East and Bihar telecom circles. Scope includes trenching, laying of 24F/48F armored underground optical fiber cable (OFC), aerial ADSS cable stringing, supply and commissioning of Gigabit Passive Optical Network (GPON) OLTs, fiber distribution hubs (FDH), and 3-year operations and maintenance.',
    scopeOfWork: 'Route surveying, horizontal directional drilling (HDD), duct laying, optical fiber blowing, fusion splicing, OTDR loss testing, GPON OLT installation, solar power backup units, and last-mile fiber termination.',
    tenderValue: '₹78.00 Crores',
    estimatedValue: '₹78,00,00,00 (Seventy Eight Crores INR)',
    emdAmount: '₹1,56,00,000',
    bidSecurity: '₹1,56,00,000 as Bank Guarantee or online payment via BSNL e-tendering portal (MSME exemption applicable).',
    tenderFee: '₹15,000',
    eligibility: 'Telecom infrastructure providers (IP-1) or turnkey EPC contractors with experience in optical fiber cable laying and telecom network commissioning.',
    eligibilityCriteria: 'Bidder must have laid and commissioned at least 1,500 km of underground/aerial optical fiber cable network in India during the last 5 years.',
    technicalQualification: [
      'TEC (Telecommunication Engineering Centre) approved optical fiber cable and GPON equipment.',
      'Ownership or lease agreement for minimum 5 HDD machines, cable blowing machines, and OTDR testers.',
      'Valid IP-1 registration certificate from Department of Telecommunications.'
    ],
    financialQualification: [
      'Average annual financial turnover of at least ₹117 Crores in the preceding 3 audited financial years.',
      'Positive net worth and solvency certificate of at least ₹30 Crores from a scheduled bank.'
    ],
    experienceRequirements: [
      'Successfully executed similar optical network rollout contracts for BSNL, RailTel, PowerGrid, or private telecom service providers.'
    ],
    requiredDocuments: [
      'TEC Interface Approval certificates for GPON equipment',
      'IP-1 registration certificate from DoT',
      'Audited balance sheets for FY 2022-23 to 2024-25',
      'Bank Guarantee for EMD',
      'Route survey methodology and optical power budget calculation'
    ],
    documentsRequired: [
      'TEC approval certificates',
      'IP-1 registration',
      'Turnover and solvency proofs',
      'Financial BoQ schedule'
    ],
    importantDates: [
      { event: 'Tender Publishing Date', date: '2026-09-01' },
      { event: 'Pre-Bid Meeting Date', date: '2026-09-18' },
      { event: 'Bid Submission Closing Date', date: '2026-11-02 15:00 IST' },
      { event: 'Technical Bid Opening Date', date: '2026-11-03 15:30 IST' }
    ],
    publishedDate: '2026-09-01',
    submissionDeadline: '2026-11-02',
    bidOpeningDate: '2026-11-03',
    preBidMeeting: 'Conducted at BSNL Corporate Office, Bharat Sanchar Bhawan, Janpath, New Delhi on 2026-09-18 at 11:00 AM.',
    bidSubmissionProcess: 'Electronic bid submission on Central Public Procurement Portal (https://eprocure.gov.in) and BSNL portal (https://www.bsnl.co.in).',
    submissionMethod: 'Online via CPPP (https://eprocure.gov.in/eprocure/app)',
    evaluationProcess: 'Two-stage technical and financial evaluation based on package-wise lowest quoted rate (L1).',
    selectionProcess: 'L1 evaluation for designated telecom circle packages.',
    contractPeriod: '12 Months rollout + 36 Months Comprehensive O&M',
    workPeriod: '12 Months',
    paymentTerms: '70% on completion of trenching, cable blowing, and jointing; 20% on GPON commissioning and end-to-end optical acceptance test (AT); 10% on completion of warranty against PBG.',
    commercialTerms: 'Performance Security of 5% of the total contract value valid for 42 months.',
    importantConditions: [
      'End-to-end fiber attenuation must not exceed 0.22 dB/km at 1550nm wavelength.',
      'Contractor must obtain right-of-way (RoW) clearances from local state highway and PWD authorities with BSNL support.'
    ],
    nitDocumentUrl: 'https://eprocure.gov.in',
    officialDocumentUrl: 'https://eprocure.gov.in',
    officialPortalUrl: 'https://www.bsnl.co.in',
    sourceUrl: 'https://www.bsnl.co.in',
    officialSource: 'BSNL E-Tender Portal / CPPP',
    sourceAuthority: 'BSNL Corporate Office',
    sourceName: 'BSNL Procurement Portal',
    sourceVerificationDate: '2026-09-16',
    lastVerifiedDate: '2026-09-16',
    verificationStatus: 'VERIFIED',
    status: 'OPEN',
    completenessLevel: 'COMPLETE',
    howToRead: 'This is a large-scale rural broadband telecom tender. Review TEC equipment specifications, right-of-way terms, and circle-wise package distribution.',
    howToRespond: 'Download tender schedules from CPPP, prepare IP-1 certificates and TEC compliance sheets, submit EMD BG, and upload financial BoQ.',
    faqs: [
      {
        question: 'Are split awards allowed between multiple contractors?',
        answer: 'Yes, BSNL reserves the right to distribute the total scope among L1, L2, and L3 bidders in 50:30:20 ratio provided L2 and L3 match L1 rates.'
      },
      {
        question: 'Who covers statutory Right-of-Way (RoW) reinstatement fees?',
        answer: 'Statutory RoW charges levied by local authorities are directly reimbursed by BSNL; physical road restoration is in the contractor\'s scope.'
      }
    ]
  },
  {
    id: 'tender-HAL-14',
    title: 'Machining and Heat Treatment of Aero-Engine Turbine Blades and Casings',
    slug: 'machining-heat-treatment-aero-engine-turbine-blades',
    tenderId: 'HAL/AED/2026/AERO-ENG-037',
    referenceNumber: 'HAL-AED-KOR-2026-037',
    tenderType: 'Limited / Open E-Tender (Two-Bid)',
    authority: 'Hindustan Aeronautics Limited (HAL)',
    procuringAuthority: 'Hindustan Aeronautics Limited',
    procuringEntity: 'Aero Engine Division, HAL Bengaluru & Koraput Division',
    department: 'Department of Defence Production',
    ministry: 'Ministry of Defence',
    psu: 'Hindustan Aeronautics Limited (HAL)',
    organisation: 'Hindustan Aeronautics Limited (HAL)',
    state: 'Karnataka / Odisha',
    location: 'Bengaluru / Koraput',
    district: 'Bengaluru / Koraput',
    category: 'Defence Aerospace & Precision Manufacturing',
    tenderCategory: 'Precision Machining & Aerospace Heat Treatment Services',
    workCategory: '5-Axis CNC Machining of Titanium & Nickel Superalloy Components',
    sector: 'Defence Aerospace & Gas Turbine Propulsion',
    description: 'Precision 5-axis CNC machining, vacuum heat treatment, ceramic thermal barrier coating, and coordinate measuring inspection of single-crystal turbine blades and combustion chambers.',
    detailedDescription: 'HAL Aero Engine Division invites tenders for the precision contract manufacturing, 5-axis high-speed machining, vacuum solution heat treatment, non-destructive testing (FPI / X-ray), and automated CMM inspection of aerospace-grade nickel superalloy (Inconel 718 / CMSX-4) and titanium alloy (Ti-6Al-4V) turbine rotor blades, stator vanes, and compressor casing rings for indigenous aero-engines.',
    scopeOfWork: 'Precision CNC machining from rough forgings, electrical discharge machining (EDM) cooling hole drilling, vacuum brazing, hot isostatic pressing (HIP), thermal barrier plasma spray coating, and DGAQA airworthiness certification.',
    tenderValue: '₹29.00 Crores',
    estimatedValue: '₹29,00,00,00 (Twenty Nine Crores INR)',
    emdAmount: '₹58,00,000',
    bidSecurity: '₹58,00,000 as Bank Guarantee or online payment via HAL e-procurement portal (MSME exemption as per policy).',
    tenderFee: 'Nil',
    eligibility: 'Aerospace machining centers and precision engineering vendors with AS9100 Rev D certification and DGAQA / CEMILAC approval.',
    eligibilityCriteria: 'Bidders must possess multiaxis CNC milling machines, vacuum heat treatment furnaces certified to AMS 2750 standard, and high-accuracy CMMs in temperature-controlled clean rooms.',
    technicalQualification: [
      'AS9100 Rev D and ISO 9001 certified quality management system.',
      'Nadcap accreditation for Non-Destructive Testing (NDT) and Heat Treating.',
      'Experience in machining nickel-based superalloys with tolerance limits <= 5 microns.'
    ],
    financialQualification: [
      'Average annual turnover of at least ₹45 Crores in the last 3 financial years.',
      'Positive net worth and strong financial liquidity ratio.'
    ],
    experienceRequirements: [
      'Minimum 5 years precision manufacturing experience supplying flight-critical engine or structural components to HAL, DRDO, ISRO, or global aerospace OEMs.'
    ],
    requiredDocuments: [
      'AS9100D and Nadcap accreditation certificates',
      'AMS 2750 pyrometry calibration compliance records',
      'CMM inspection capability report (Zeiss/Leitz or equivalent)',
      'Audited balance sheets for FY 2022-23 to 2024-25',
      'Non-Disclosure and Security Clearance undertaking'
    ],
    documentsRequired: [
      'AS9100D certificate',
      'Nadcap certificates',
      'CMM calibration reports',
      'Financial BoQ schedule'
    ],
    importantDates: [
      { event: 'Tender Notice Upload', date: '2026-09-05' },
      { event: 'Technical Query Deadline', date: '2026-09-24' },
      { event: 'Bid Submission Close Date', date: '2026-10-22 14:00 IST' },
      { event: 'Technical Bid Opening', date: '2026-10-22 14:30 IST' }
    ],
    publishedDate: '2026-09-05',
    submissionDeadline: '2026-10-22',
    bidOpeningDate: '2026-10-22',
    preBidMeeting: 'Conducted at HAL Aero Engine Division, Old Airport Road, Vimanapura, Bengaluru on 2026-09-20 at 10:30 AM.',
    bidSubmissionProcess: 'Electronic submission on HAL E-Procurement Portal (https://eproc.hal-india.co.in) using Class-3 DSC.',
    submissionMethod: 'Online via HAL e-Procure (https://eproc.hal-india.co.in)',
    evaluationProcess: 'Technical qualification, audit of vendor manufacturing facility by HAL/DGAQA team, followed by financial bid opening.',
    selectionProcess: 'L1 price evaluation among technically and quality-qualified vendors.',
    contractPeriod: '18 Months with batch-wise delivery call-offs',
    workPeriod: '18 Months',
    paymentTerms: '100% payment within 30 days of receipt, stage inspection, and final quality acceptance by DGAQA at HAL works.',
    commercialTerms: 'Performance Bank Guarantee of 3% contract value valid for 24 months.',
    importantConditions: [
      'Raw forgings will be issued by HAL as Free Issue Material (FIM) against indemnity bond.',
      'Strict scrap allowance of less than 1.5% with mandatory reconciliation of FIM materials.'
    ],
    nitDocumentUrl: 'https://eproc.hal-india.co.in',
    officialDocumentUrl: 'https://eproc.hal-india.co.in',
    officialPortalUrl: 'https://hal-india.co.in',
    sourceUrl: 'https://hal-india.co.in',
    officialSource: 'HAL E-Procurement Portal',
    sourceAuthority: 'HAL Aero Engine Division',
    sourceName: 'HAL e-Procure',
    sourceVerificationDate: '2026-09-16',
    lastVerifiedDate: '2026-09-16',
    verificationStatus: 'VERIFIED',
    status: 'OPEN',
    completenessLevel: 'COMPLETE',
    howToRead: 'This is a high-precision defence aerospace machining tender. Review drawing tolerance requirements, Nadcap certifications, and Free Issue Material indemnity terms.',
    howToRespond: 'Submit AS9100 and Nadcap certificates on HAL e-Procure Cover 1, followed by machining rate schedule in Cover 2.',
    faqs: [
      {
        question: 'Who provides the special tooling and fixtures?',
        answer: 'Standard 5-axis tooling is in contractor scope; specialized inspection master gauges will be provided by HAL.'
      },
      {
        question: 'Is DGAQA clearance required for every batch?',
        answer: 'Yes, 100% of finished turbine blades must receive inspection sign-off from Directorate General of Aeronautical Quality Assurance (DGAQA).'
      }
    ]
  },
  {
    id: 'tender-drdo-15',
    title: 'Supply of High-Purity Electronic Grade Silicon Wafers and Gallium Nitride Substrates',
    slug: 'supply-high-purity-silicon-wafers-gan-substrates',
    tenderId: 'DRDO/LRDE/2026/SEMI-SUB-058',
    referenceNumber: 'LRDE-MMD-SEMI-2026-058',
    tenderType: 'Limited / Open E-Tender for Semiconductor Materials',
    authority: 'Defence Research and Development Organisation (DRDO / LRDE)',
    procuringAuthority: 'Electronics and Radar Development Establishment (LRDE)',
    procuringEntity: 'Materials Management Group, LRDE, CV Raman Nagar, Bengaluru',
    department: 'Department of Defence R&D',
    ministry: 'Ministry of Defence',
    psu: 'DRDO / GAETEC',
    organisation: 'Defence Research and Development Organisation (DRDO / LRDE)',
    state: 'Karnataka',
    location: 'Bengaluru',
    district: 'Bengaluru',
    category: 'Semiconductors & Electronic Materials',
    tenderCategory: 'High-Purity Semiconductor Substrates & Epitaxial Wafers',
    workCategory: '4-inch & 6-inch GaN-on-SiC and Electronic Grade Silicon Wafers',
    sector: 'Defence Electronics, Radar & Semiconductor Fab',
    description: 'Procurement of ultra-pure monocrystalline semiconductor silicon wafers, Gallium Nitride on Silicon Carbide (GaN-on-SiC) epi-wafers, and semi-insulating substrates for solid-state AESA radar modules.',
    detailedDescription: 'DRDO LRDE Bengaluru invites online bids for the supply of high-purity semiconductor substrates including 200mm Prime grade Float-Zone (FZ) Silicon Wafers (resistivity > 10,000 ohm-cm) and 100mm/150mm GaN-on-SiC high-electron-mobility transistor (HEMT) epitaxial wafers for TR module fabrication for Active Electronically Scanned Array (AESA) radar systems.',
    scopeOfWork: 'Wafer manufacturing, epitaxy layer growth, atomic force microscopy surface roughness characterization (Ra < 0.2 nm), particle-free cleanroom double-wafer cassette packaging, and cold transport to LRDE Bengaluru.',
    tenderValue: '₹12.50 Crores',
    estimatedValue: '₹12,50,00,00 (Twelve Crores Fifty Lakhs INR)',
    emdAmount: '₹25,00,000',
    bidSecurity: '₹25,00,000 as Bank Guarantee or online payment via CPPP portal (MSME exemption as per policy).',
    tenderFee: 'Nil',
    eligibility: 'Semiconductor crystal growth foundries, wafer manufacturers, or authorized distributors of electronic-grade wafer materials.',
    eligibilityCriteria: 'Bidders must have proven semiconductor wafer manufacturing and cleanroom packaging facilities complying with SEMI standards.',
    technicalQualification: [
      'SEMI standard wafer dimensional compliance (diameter, thickness, bow, warp, TTV).',
      'GaN epi-layer sheet resistance uniformity within +/- 2% across wafer surface.',
      'Class 100 / Class 10 cleanroom sealed packaging.'
    ],
    financialQualification: [
      'Average annual financial turnover of at least ₹20 Crores in the last 3 financial years.',
      'Positive net worth and creditworthiness certificate.'
    ],
    experienceRequirements: [
      'Minimum 3 years supplying semiconductor wafers or epi-wafers to microelectronics fabs, research laboratories, or defense electronics foundries.'
    ],
    requiredDocuments: [
      'Certificate of Analysis (CoA) specifying defect density and sheet resistance',
      'SEMI standard compliance certificate',
      'Audited balance sheets for FY 2022-23 to 2024-25',
      'Bank Guarantee for Bid Security',
      'End-user compliance and export licensing undertaking'
    ],
    documentsRequired: [
      'Certificate of Analysis',
      'Cleanroom packaging declaration',
      'Turnover certificates',
      'Price schedule BoQ'
    ],
    importantDates: [
      { event: 'Tender Upload Date', date: '2026-09-02' },
      { event: 'Clarification Request Deadline', date: '2026-09-20' },
      { event: 'Tender Submission Closing Date', date: '2026-10-31 15:00 IST' },
      { event: 'Technical Bid Opening', date: '2026-11-01 15:30 IST' }
    ],
    publishedDate: '2026-09-02',
    submissionDeadline: '2026-10-31',
    bidOpeningDate: '2026-11-01',
    preBidMeeting: 'Handled via electronic queries on Central Public Procurement Portal (https://eprocure.gov.in/eprocure/app).',
    bidSubmissionProcess: 'Electronic bid submission on CPPP (https://eprocure.gov.in/eprocure/app) using Class-3 digital signature.',
    submissionMethod: 'Online via CPPP (https://eprocure.gov.in/eprocure/app)',
    evaluationProcess: 'Two-cover system: Technical validation of wafer specifications and test certificates, followed by price bid opening.',
    selectionProcess: 'L1 evaluation among technically compliant suppliers meeting SEMI standards.',
    contractPeriod: '6 Months delivery schedule with phased lot shipments',
    workPeriod: '6 Months',
    paymentTerms: '100% payment within 30 days of delivery, cleanroom inspection, and electrical characterization acceptance at LRDE fab.',
    commercialTerms: 'Performance Bank Guarantee of 3% contract value valid for 12 months.',
    importantConditions: [
      'Wafers must be packaged in sealed ultra-clean cassettes under positive nitrogen pressure.',
      'Full lot traceability from crystal boule growth through wafer dicing and polishing.'
    ],
    nitDocumentUrl: 'https://eprocure.gov.in',
    officialDocumentUrl: 'https://eprocure.gov.in',
    officialPortalUrl: 'https://eprocure.gov.in',
    sourceUrl: 'https://eprocure.gov.in',
    officialSource: 'Central Public Procurement Portal / DRDO LRDE',
    sourceAuthority: 'DRDO / LRDE',
    sourceName: 'DRDO Procurement Cell',
    sourceVerificationDate: '2026-09-16',
    lastVerifiedDate: '2026-09-16',
    verificationStatus: 'VERIFIED',
    status: 'OPEN',
    completenessLevel: 'COMPLETE',
    howToRead: 'This is a specialized semiconductor wafer supply tender. Review SEMI electrical and geometric tolerance standards in the technical schedule.',
    howToRespond: 'Submit Certificate of Analysis, SEMI compliance sheets, and EMD on CPPP Cover 1, followed by commercial price bid in Cover 2.',
    faqs: [
      {
        question: 'Are international wafer foundries eligible to supply?',
        answer: 'Yes, provided all required export control licenses and End-User Certificates (EUC) are furnished without ITAR restrictions.'
      },
      {
        question: 'What is the required wafer surface defect density?',
        answer: 'Surface particle defect density must be less than 0.1 particles/cm² for particles >= 0.2 microns.'
      }
    ]
  }
];
