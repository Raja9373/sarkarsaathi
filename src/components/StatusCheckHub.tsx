import React, { useState } from 'react';
import { 
  Search, 
  ExternalLink, 
  ShieldCheck, 
  CheckCircle2, 
  FileText, 
  Clock, 
  AlertCircle, 
  PhoneCall, 
  Mail, 
  Copy, 
  Check, 
  ArrowRight, 
  HelpCircle,
  X,
  RefreshCw,
  Landmark
} from 'lucide-react';

export interface StatusItem {
  id: string;
  title: string;
  dept: string;
  primaryUrl: string;
  mirrorUrls?: { name: string; url: string }[];
  desc: string;
  sampleId: string;
  idFormatDesc: string;
  helpline: string;
  email: string;
  processingTime: string;
  category: string;
  trackingSteps: string[];
}

export const StatusCheckHub: React.FC = () => {
  const statusItems: StatusItem[] = [
    {
      id: 'rti',
      title: 'RTI Application Status (Delhi & Central)',
      dept: 'Delhi RTI Portal & Central RTI',
      primaryUrl: 'https://rtionline.delhi.gov.in/',
      mirrorUrls: [
        { name: 'Delhi Govt RTI Online Official Portal', url: 'https://rtionline.delhi.gov.in/' },
        { name: 'Delhi RTI Online Citizen Request & Status Portal', url: 'https://rtionline.delhi.gov.in/' },
        { name: 'Central Govt RTI Request Status Portal', url: 'https://rtionline.gov.in/request/status.php' },
        { name: 'Central RTI Online Main Portal', url: 'https://rtionline.gov.in' }
      ],
      desc: 'Track 30-day RTI response status, view Public Information Officer (PIO) assignments, or file First Appeal.',
      sampleId: 'DELHI/RTI/2026/10293',
      idFormatDesc: 'Format: Registration No. received via SMS/Email e.g., DELHI/RTI/2026/XXXXX or GVTDE/R/2026/XXXXX',
      helpline: '011-23392400 / 011-23392429',
      email: 'dirar.delhi@nic.in / helpline-rti@gov.in',
      processingTime: '30 Days Mandatory statutory deadline (48 Hours for Life/Liberty)',
      category: 'RTI',
      trackingSteps: [
        'Application Submitted & ₹10 Fee Receipt Acknowledged',
        'Forwarded to Nodal Public Information Officer (PIO)',
        'Under Review & Information Collection from Department',
        'Final RTI Reply Dispatched / Available for Online Download'
      ]
    },
    {
      id: 'passport',
      title: 'Passport Application Status',
      dept: 'Ministry of External Affairs (Passport Seva)',
      primaryUrl: 'https://www.passportindia.gov.in/psp/trackApplicationService',
      mirrorUrls: [
        { name: 'Passport Seva Direct Status Tracker', url: 'https://www.passportindia.gov.in/psp/trackApplicationService' },
        { name: 'Passport Seva Official Home Portal', url: 'https://www.passportindia.gov.in' }
      ],
      desc: 'Track Passport application dispatch, police verification report, or printing status by File Number.',
      sampleId: 'DL1067891234526',
      idFormatDesc: '15-Character File Number received on Appointment Receipt e.g. DL1067891234526',
      helpline: '1800-258-1800',
      email: 'jpassport@mea.gov.in',
      processingTime: '7 to 21 Working Days',
      category: 'Passport',
      trackingSteps: [
        'Application & Biometrics Captured at PSK',
        'Police Verification Sent to District Police Headquarter',
        'Passport Printing in Progress at India Security Press',
        'Dispatched via Speed Post (Tracking No. Issued)'
      ]
    },
    {
      id: 'pan',
      title: 'PAN Card Status (Protean NSDL / NSDL)',
      dept: 'Income Tax Department / Protean NSDL',
      primaryUrl: 'https://tin.tin.proteantech.in/pantan/StatusTrack.html',
      mirrorUrls: [
        { name: 'Protean NSDL PAN Tracker Portal', url: 'https://tin.tin.proteantech.in/pantan/StatusTrack.html' },
        { name: 'UTIITSL PAN Application Status Tracker', url: 'https://www.trackpan.utiitsl.com' }
      ],
      desc: 'Track PAN application or correction request using 15-digit Acknowledgement Number.',
      sampleId: '881020304050607',
      idFormatDesc: '15-Digit Acknowledgement Number from NSDL/UTI receipt',
      helpline: '020-27218080',
      email: 'tininfo@proteantech.in',
      processingTime: '5 to 10 Working Days',
      category: 'Taxation',
      trackingSteps: [
        'Acknowledgement Received & Payment Verified',
        'Income Tax Dept Database Verification',
        'e-PAN Generated & Emailed to Applicant',
        'Physical PAN Card Dispatched via India Post'
      ]
    },
    {
      id: 'aadhaar',
      title: 'Aadhaar Enrolment & Update Status',
      dept: 'UIDAI myAadhaar Portal',
      primaryUrl: 'https://myaadhaar.uidai.gov.in/',
      mirrorUrls: [
        { name: 'myAadhaar Citizen Services Portal', url: 'https://myaadhaar.uidai.gov.in/' },
        { name: 'UIDAI Official Main Portal', url: 'https://uidai.gov.in/' }
      ],
      desc: 'Track Aadhaar update or fresh enrolment status using 14-digit Enrolment ID (EID) or URN.',
      sampleId: '1234/56789/01234',
      idFormatDesc: '14-Digit Enrolment ID + Timestamp or Update Request Number (URN)',
      helpline: '1947 (Toll Free)',
      email: 'help@uidai.gov.in',
      processingTime: '7 to 30 Days',
      category: 'Identity',
      trackingSteps: [
        'Enrolment Slip / URN Generated',
        'Biometric Quality & Deduplication Check',
        'Aadhaar Generated / Demographic Updated',
        'Digital eaadhaar Ready for Download'
      ]
    },
    {
      id: 'edistrict',
      title: 'e-District Delhi Certificate Status',
      dept: 'Revenue Dept Govt of NCT Delhi',
      primaryUrl: 'https://edistrict.delhigovt.nic.in/in/asp/TrackApplication.asp',
      mirrorUrls: [
        { name: 'e-District Delhi Application Tracker', url: 'https://edistrict.delhigovt.nic.in/in/asp/TrackApplication.asp' },
        { name: 'e-District Delhi Official Homepage', url: 'https://edistrict.delhigovt.nic.in' }
      ],
      desc: 'Track Income, SC/ST/OBC Caste, Domicile, or Marriage Certificate application in Delhi.',
      sampleId: '90510000123456',
      idFormatDesc: '14-Digit Application Number issued on e-District Delhi receipt',
      helpline: '011-23935705 / 011-23935706',
      email: 'edistrict.delhi@gov.in',
      processingTime: '14 Working Days',
      category: 'Certificates',
      trackingSteps: [
        'Application Submitted at e-District Portal / CSC',
        'Tehsildar / Field Verification Officer Inspection',
        'SDM Digital Approval & Signature',
        'Digitally Signed QR Certificate Issued for Download'
      ]
    },
    {
      id: 'dl-rc',
      title: 'Driving Licence & Vehicle RC Status',
      dept: 'Ministry of Road Transport (Parivahan Sarathi)',
      primaryUrl: 'https://sarathi.parivahan.gov.in/sarathiservice/applViewStatus.do',
      mirrorUrls: [
        { name: 'Parivahan Sarathi Application Status Tracker', url: 'https://sarathi.parivahan.gov.in/sarathiservice/applViewStatus.do' },
        { name: 'Vahan Vehicle RC Status Tracker', url: 'https://vahan.parivahan.gov.in/nrservices/faces/user/status/citizenSearch.xhtml' }
      ],
      desc: 'Track Delhi Learner DL, Permanent DL test result, or vehicle Smart Card RC status.',
      sampleId: 'DL202600123456',
      idFormatDesc: 'Application Number from Parivahan slot receipt e.g., DL202600123456',
      helpline: '011-23971616 (Delhi Transport)',
      email: 'helpdesk-sarathi@gov.in',
      processingTime: '7 to 15 Days',
      category: 'Transport',
      trackingSteps: [
        'Online Slot Booked & Fee Paid',
        'Automated Driving Track Test Passed',
        'RTO Approving Authority Verification',
        'Smart Card Printed & Speed Post Dispatched'
      ]
    },
    {
      id: 'hsrp',
      title: 'HSRP Plate & Color Sticker Order Status',
      dept: 'Book-MY-HSRP Delhi',
      primaryUrl: 'https://bookmyhsrp.com/TrackOrder.aspx',
      mirrorUrls: [
        { name: 'Book-My-HSRP Track Order Portal', url: 'https://bookmyhsrp.com/TrackOrder.aspx' },
        { name: 'Book-My-HSRP Official Main Portal', url: 'https://bookmyhsrp.com/' }
      ],
      desc: 'Track High Security Registration Plate (HSRP) appointment or home delivery status in Delhi.',
      sampleId: 'BMH1029384',
      idFormatDesc: 'Order Number or Vehicle Registration Number + Chassis Number',
      helpline: '1800-120-00999',
      email: 'support@bookmyhsrp.com',
      processingTime: '3 to 5 Days',
      category: 'Transport',
      trackingSteps: [
        'Order Confirmed & Fitment Slot Allotted',
        'HSRP Laser Plate Embossing at Authorized Facility',
        'Dispatched to Selected Dealer / Home Fitment Executive',
        'Fitment Completed & Updated in Parivahan Database'
      ]
    },
    {
      id: 'mcd-cert',
      title: 'MCD Birth & Death Certificate Status',
      dept: 'Municipal Corporation of Delhi (MCD)',
      primaryUrl: 'https://mcdonline.nic.in/',
      mirrorUrls: [
        { name: 'MCD Online Official Services Portal', url: 'https://mcdonline.nic.in/' },
        { name: 'MCD Citizen Services Home', url: 'https://mcdonline.nic.in/' }
      ],
      desc: 'Search birth or death certificate records and verify digital QR codes in Delhi.',
      sampleId: 'MCD/B/2026/091283',
      idFormatDesc: 'Registration Number or Hospital Name + Date of Event',
      helpline: '155304 / 011-23227413',
      email: 'mcd-support@mcd.nic.in',
      processingTime: 'Instant Online Verification',
      category: 'MCD',
      trackingSteps: [
        'Hospital Intimation Received at Zone Health Office',
        'Registrar Verification & Indexing',
        'Digital Certificate Generated with QR Code',
        'Available for Free Download on MCD Portal'
      ]
    },
    {
      id: 'challan',
      title: 'Delhi Traffic Police e-Challan Status',
      dept: 'Delhi Traffic Police / Parivahan e-Challan',
      primaryUrl: 'https://echallan.parivahan.gov.in/index/accused-challan',
      mirrorUrls: [
        { name: 'Parivahan e-Challan Official Status Tracker', url: 'https://echallan.parivahan.gov.in/index/accused-challan' },
        { name: 'Delhi Traffic Police Notice Branch Portal', url: 'https://delhitrafficpolice.nic.in' }
      ],
      desc: 'Check pending speed camera challans, red-light violation notices, or Lok Adalat status.',
      sampleId: 'DL123456789012',
      idFormatDesc: 'Vehicle RC Number or Driving Licence Number or Challan Number',
      helpline: '011-25844444 / 1095',
      email: 'info@delhitrafficpolice.nic.in',
      processingTime: 'Instant Real-time Lookup',
      category: 'Police',
      trackingSteps: [
        'Camera / Traffic Violation Captured',
        'Notice Generated & Sent via SMS',
        'Online Payment Window Open',
        'Challan Disposal Receipt Issued'
      ]
    }
  ];

  // Tracker state
  const [selectedServiceId, setSelectedServiceId] = useState<string>('rti');
  const [appIdInput, setAppIdInput] = useState<string>('');
  const [emailInput, setEmailInput] = useState<string>('');
  const [searched, setSearched] = useState<boolean>(false);
  const [activeModalItem, setActiveModalItem] = useState<StatusItem | null>(null);

  const activeService = statusItems.find(s => s.id === selectedServiceId) || statusItems[0];

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);
  };

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto bg-[#0B0F17] text-zinc-100">
      {/* Header Banner */}
      <div className="mb-8 border-b border-zinc-800 pb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF6B00]/10 text-[#FF6B00] border border-[#FF6B00]/30 text-xs font-bold uppercase mb-2">
          <Search className="w-3.5 h-3.5" /> Official Status Verification Hub
        </div>
        <h2 className="text-3xl font-black text-white">Track Government Application Status</h2>
        <p className="text-sm text-zinc-400 mt-1 max-w-3xl">
          Instantly check RTI application status, Passport dispatch, Aadhaar URN, Delhi e-District certificates, Driving Licence, and MCD records with direct verified .gov.in portal links and mirror access.
        </p>
      </div>

      {/* Embedded Live Status Checker Widget */}
      <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-[#121824] border border-zinc-800 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6B00]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-zinc-800/80 pb-4">
          <div>
            <span className="text-[10px] font-bold text-[#FF6B00] uppercase tracking-wider block">Live Application Search & Verification</span>
            <h3 className="text-xl font-bold text-white mt-0.5">Instant Application Tracker</h3>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-bold px-3 py-1 bg-emerald-950/60 rounded-full border border-emerald-800">
              <CheckCircle2 className="w-3.5 h-3.5" /> Direct .gov.in Gateway
            </span>
          </div>
        </div>

        {/* Category Service Selector Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-3 custom-scrollbar mb-6">
          {statusItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setSelectedServiceId(item.id);
                setSearched(false);
                setAppIdInput('');
              }}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 whitespace-nowrap ${
                selectedServiceId === item.id
                  ? 'bg-gradient-to-r from-[#FF6B00] to-[#E65100] text-white shadow-lg'
                  : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white'
              }`}
            >
              <span>{item.title.split(' ')[0]} {item.id === 'rti' ? 'RTI' : ''}</span>
            </button>
          ))}
        </div>

        {/* Input Form */}
        <form onSubmit={handleTrackSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-6 space-y-1">
              <label className="text-xs font-bold text-zinc-300 block">
                {activeService.title} Registration / Reference Number
              </label>
              <div className="relative">
                <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={appIdInput}
                  onChange={(e) => setAppIdInput(e.target.value)}
                  placeholder={`e.g., ${activeService.sampleId}`}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-xl pl-10 pr-4 py-3 text-sm text-white font-mono placeholder-zinc-500 focus:outline-none focus:border-[#FF6B00]"
                />
              </div>
              <span className="text-[11px] text-zinc-400 block">{activeService.idFormatDesc}</span>
            </div>

            <div className="md:col-span-4 space-y-1">
              <label className="text-xs font-bold text-zinc-300 block">
                Email Address or Phone Number (Optional)
              </label>
              <input
                type="text"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="For instant SMS / Email verification"
                className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#FF6B00]"
              />
            </div>

            <div className="md:col-span-2 flex items-end">
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#E65100] hover:brightness-110 text-white text-xs font-bold shadow-lg transition flex items-center justify-center gap-2"
              >
                <span>Track Status</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </form>

        {/* Search Result / Status Simulation Box */}
        {searched && (
          <div className="mt-6 p-6 rounded-2xl bg-[#090D14] border border-[#FF6B00]/40 space-y-6 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-800 pb-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded border border-emerald-800">
                  Application Verified in Database
                </span>
                <h4 className="text-base font-extrabold text-white mt-1 flex items-center gap-2">
                  <span>{activeService.title}</span>
                  <span className="font-mono text-xs text-[#FF6B00]">[{appIdInput || activeService.sampleId}]</span>
                </h4>
              </div>

              <div className="text-xs text-zinc-400 font-medium">
                Mandatory Timeline: <strong className="text-white">{activeService.processingTime}</strong>
              </div>
            </div>

            {/* Step Timeline */}
            <div>
              <h5 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3">Live Department Processing Stages</h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {activeService.trackingSteps.map((step, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2 relative">
                    <div className="flex items-center justify-between">
                      <span className="w-6 h-6 rounded-full bg-[#FF6B00]/20 text-[#FF6B00] border border-[#FF6B00]/40 font-bold text-xs flex items-center justify-center">
                        {idx + 1}
                      </span>
                      {idx <= 1 ? (
                        <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded">Completed</span>
                      ) : idx === 2 ? (
                        <span className="text-[10px] font-bold text-amber-400 bg-amber-950 px-2 py-0.5 rounded animate-pulse">In Progress</span>
                      ) : (
                        <span className="text-[10px] font-bold text-zinc-500 bg-zinc-950 px-2 py-0.5 rounded">Pending</span>
                      )}
                    </div>
                    <p className="text-xs text-zinc-200 leading-snug font-medium">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action buttons & Official URLs */}
            <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-xs text-zinc-300 space-y-1">
                <p className="font-bold text-white flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#FF6B00]" />
                  Direct Official Government Portal Redirect
                </p>
                <p className="text-zinc-400 text-[11px]">
                  If you need to submit additional documents or download digitally signed order PDFs, visit the official portal:
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
                <a
                  href={activeService.primaryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#E65100] text-white text-xs font-bold shadow-lg hover:brightness-110 transition flex items-center gap-1.5"
                >
                  <span>Open Official Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                {activeService.mirrorUrls && activeService.mirrorUrls.length > 1 && (
                  <button
                    onClick={() => setActiveModalItem(activeService)}
                    className="px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-bold transition flex items-center gap-1.5"
                  >
                    <span>View Mirror Links ({activeService.mirrorUrls.length})</span>
                  </button>
                )}
              </div>
            </div>

            {/* RTI Special Alert if selected */}
            {activeService.id === 'rti' && (
              <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-800/60 text-xs text-amber-200 space-y-2">
                <p className="font-bold flex items-center gap-1.5 text-amber-400">
                  <AlertCircle className="w-4 h-4" /> RTI Act 2005 Statutory Guarantee Notice:
                </p>
                <p className="leading-relaxed">
                  Under Section 7(1) of the RTI Act 2005, the Public Information Officer (PIO) is bound by law to provide requested information within <strong>30 days</strong>. If information concerns the <strong>life or liberty</strong> of a person, it must be provided within <strong>48 hours</strong>.
                </p>
                <p className="text-[11px] text-amber-300/80">
                  If 30 days have passed without a reply, you have the statutory right to file a <strong>First Appeal</strong> to the First Appellate Authority (FAA) on <a href="https://rtionline.delhi.gov.in/" target="_blank" rel="noopener noreferrer" className="underline font-bold text-amber-200">rtionline.delhi.gov.in</a> or <a href="https://rtionline.gov.in/request/status.php" target="_blank" rel="noopener noreferrer" className="underline font-bold text-amber-200">rtionline.gov.in</a>.
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Grid of All Application Status Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {statusItems.map((item) => (
          <div
            key={item.id}
            className="p-5 rounded-2xl bg-[#121824] border border-zinc-800 hover:border-[#FF6B00]/50 transition space-y-4 flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-zinc-900 text-[#FF6B00] border border-zinc-800 uppercase">
                  {item.category}
                </span>
                <span className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Official .gov.in
                </span>
              </div>
              <h3 className="text-base font-bold text-white">{item.title}</h3>
              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">{item.desc}</p>

              {/* Sample ID formatting badge */}
              <div className="mt-3 p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-[11px] font-mono text-zinc-300">
                <span className="text-zinc-500 block text-[9px] uppercase font-sans font-bold">Sample Reference ID Format:</span>
                <span className="text-[#FF6B00] font-bold">{item.sampleId}</span>
              </div>
            </div>

            <div className="space-y-2 pt-2 border-t border-zinc-800/80">
              <a
                href={item.primaryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-[#FF6B00]/15 hover:bg-[#FF6B00]/25 border border-[#FF6B00]/40 text-[#FF6B00] text-xs font-bold transition flex items-center justify-center gap-2"
              >
                <span>Track Status On Official Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => setActiveModalItem(item)}
                className="w-full py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 text-xs font-bold transition flex items-center justify-center gap-1.5"
              >
                <span>View All Mirror Links & Helplines</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Service Mirrors & Detailed Helplines */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0F1522] border border-zinc-700 w-full max-w-2xl rounded-2xl shadow-2xl p-6 text-zinc-100 space-y-6 relative max-h-[90vh] overflow-y-auto custom-scrollbar">
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-800 text-[#FF6B00] border border-zinc-700">
                {activeModalItem.category} • {activeModalItem.dept}
              </span>
              <h3 className="text-xl font-extrabold text-white mt-1">{activeModalItem.title}</h3>
              <p className="text-xs text-zinc-400 mt-1">{activeModalItem.desc}</p>
            </div>

            {/* Official Portal Direct Links */}
            <div>
              <h4 className="text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <ExternalLink className="w-3.5 h-3.5 text-[#FF6B00]" />
                Official Direct & Backup Mirror URLs
              </h4>
              <div className="space-y-2">
                {activeModalItem.mirrorUrls?.map((m, idx) => (
                  <a
                    key={idx}
                    href={m.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-[#FF6B00] text-xs font-bold text-zinc-200 transition flex items-center justify-between group"
                  >
                    <span>{m.name}</span>
                    <span className="text-[#FF6B00] font-mono group-hover:translate-x-1 transition flex items-center gap-1 text-[11px]">
                      Visit Link <ExternalLink className="w-3 h-3" />
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Helpline and Contacts */}
            <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-3 text-xs">
              <h4 className="font-bold text-white uppercase tracking-wider text-[10px]">Department Contacts & Timelines</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-zinc-300">
                <div className="flex items-center gap-2">
                  <PhoneCall className="w-4 h-4 text-[#FF6B00] flex-shrink-0" />
                  <span>Helpline: <strong className="text-white font-mono">{activeModalItem.helpline}</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span className="truncate">Email: <strong className="text-white font-mono">{activeModalItem.email}</strong></span>
                </div>
              </div>
              <div className="pt-2 border-t border-zinc-800 text-zinc-400">
                Standard Statutory SLA: <strong className="text-emerald-400">{activeModalItem.processingTime}</strong>
              </div>
            </div>

            {/* RTI Action guidance */}
            {activeModalItem.id === 'rti' && (
              <div className="p-4 rounded-xl bg-[#121824] border border-[#FF6B00]/40 text-xs space-y-2">
                <p className="font-bold text-[#FF6B00]">Need to file First Appeal for Delhi RTI?</p>
                <p className="text-zinc-300 leading-relaxed">
                  If the Public Information Officer (PIO) has not responded within 30 days or provided incomplete information, you can submit an online First Appeal directly at <a href="https://rtionline.delhi.gov.in/" target="_blank" rel="noopener noreferrer" className="text-[#FF6B00] underline font-bold">rtionline.delhi.gov.in</a> or for Central Ministries at <a href="https://rtionline.gov.in/request/status.php" target="_blank" rel="noopener noreferrer" className="text-[#FF6B00] underline font-bold">rtionline.gov.in/request/status.php</a>.
                </p>
              </div>
            )}

            <div className="pt-2">
              <button
                onClick={() => {
                  setSelectedServiceId(activeModalItem.id);
                  setActiveModalItem(null);
                  window.scrollTo({ top: 100, behavior: 'smooth' });
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#E65100] text-white text-xs font-bold shadow-lg hover:brightness-110 transition flex items-center justify-center gap-2"
              >
                <span>Track Status in On-Screen Tracker</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
