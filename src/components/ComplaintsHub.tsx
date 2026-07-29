import React, { useState } from 'react';
import { 
  MessageSquare, 
  Search, 
  Building2, 
  Landmark, 
  Building, 
  Zap, 
  ShieldAlert, 
  PhoneCall, 
  Globe, 
  Mail, 
  MapPin, 
  Copy, 
  Check, 
  ExternalLink, 
  AlertTriangle, 
  CheckCircle2, 
  HelpCircle, 
  Layers, 
  ArrowRight,
  Send,
  FileText,
  Clock,
  Sparkles,
  UserCheck,
  ShieldCheck
} from 'lucide-react';
import { DEPT_COMPLAINTS_DATA, DeptComplaintInfo } from '../data/complaintsData';

export const ComplaintsHub: React.FC = () => {
  const [selectedJurisdiction, setSelectedJurisdiction] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeTabMode, setActiveTabMode] = useState<'directory' | 'matrix'>('directory');

  const jurisdictions = [
    { id: 'all', label: 'All Depts & Portals', icon: Layers },
    { id: 'Delhi Govt (PGMS)', label: 'Delhi Govt (PGMS 1031)', icon: Building2 },
    { id: 'Central Govt (CPGRAMS)', label: 'Central Govt (CPGRAMS)', icon: Landmark },
    { id: 'MCD Municipal', label: 'MCD Civic (MCD 311)', icon: Building },
    { id: 'Utility Discom / DJB', label: 'Water & Electricity (1916 / 1912)', icon: Zap },
    { id: 'Police & Crime', label: 'Police, Cyber & ACB (112 / 1930)', icon: ShieldAlert },
    { id: 'Consumer & Banking', label: 'Consumer & Banking (1915 / 14448)', icon: MessageSquare }
  ];

  const filteredComplaints = DEPT_COMPLAINTS_DATA.filter((item) => {
    const matchesJurisdiction = selectedJurisdiction === 'all' || item.jurisdiction === selectedJurisdiction;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q || 
      item.deptName.toLowerCase().includes(q) ||
      item.hindiDeptName.toLowerCase().includes(q) ||
      item.shortDesc.toLowerCase().includes(q) ||
      item.whereToComplain.portalName.toLowerCase().includes(q) ||
      item.whereToComplain.helpline.toLowerCase().includes(q) ||
      item.commonIssues.some(issue => issue.toLowerCase().includes(q));
    return matchesJurisdiction && matchesSearch;
  });

  const parseWebsites = (urlStr: string) => {
    const urlMatches = urlStr.match(/https?:\/\/[^\s]+/g);
    if (!urlMatches || urlMatches.length === 0) {
      const cleanUrl = urlStr.trim().startsWith('http') ? urlStr.trim() : `https://${urlStr.trim()}`;
      return [{ url: cleanUrl, label: 'Lodge Complaint Online' }];
    }

    return urlMatches.map(rawUrl => {
      let cleanUrl = rawUrl.trim().replace(/[\s]+$/, '');
      let label = 'Lodge Complaint Online';

      if (cleanUrl.includes('lokayukta')) {
        label = 'Lokayukta Delhi Portal';
        cleanUrl = 'https://lokayukta.delhi.gov.in/';
      } else if (cleanUrl.includes('acb') || cleanUrl.includes('dvigil')) {
        label = 'Anti-Corruption (ACB / 1031)';
        cleanUrl = 'https://pgms.delhi.gov.in/';
      } else if (cleanUrl.includes('djb') || cleanUrl.includes('delhijalboard') || cleanUrl.includes('delhijalbboard')) {
        label = 'Delhi Jal Board (DJB)';
        cleanUrl = 'https://djb.gov.in/';
      } else if (cleanUrl.includes('pgms.delhi')) {
        label = 'Delhi PGMS (1031)';
        cleanUrl = 'https://pgms.delhi.gov.in/';
      } else if (cleanUrl.includes('consumerhelpline')) {
        label = 'National Consumer Helpline (1915)';
        cleanUrl = 'https://consumerhelpline.gov.in/';
      } else if (cleanUrl.includes('edaakhil')) {
        label = 'e-Daakhil Consumer Forum';
        cleanUrl = 'https://edaakhil.nic.in/';
      } else if (cleanUrl.includes('bsesdelhi')) {
        label = 'BSES Delhi Portal';
      } else if (cleanUrl.includes('tatapower')) {
        label = 'Tata Power DDL Portal';
      } else if (cleanUrl.includes('cybercrime')) {
        label = 'Cyber Crime Portal';
      } else if (cleanUrl.includes('delhipolice')) {
        label = 'Delhi Police Portal';
      } else if (urlMatches.length > 1) {
        try {
          const domain = new URL(cleanUrl).hostname.replace('www.', '');
          label = domain;
        } catch {
          label = 'Official Portal';
        }
      }
      return { url: cleanUrl, label };
    });
  };

  const handleCopy = (item: DeptComplaintInfo) => {
    const textToCopy = `🏛️ ${item.deptName} (${item.hindiDeptName})\n` +
      `📌 Jurisdiction: ${item.jurisdiction}\n` +
      `🌐 Portal: ${item.whereToComplain.portalName} (${item.whereToComplain.officialWebsite})\n` +
      `📞 Helpline: ${item.whereToComplain.helpline}\n` +
      `💬 WhatsApp: ${item.whereToComplain.whatsappNumber || 'N/A'}\n` +
      `📧 Email: ${item.whereToComplain.email || 'N/A'}\n` +
      `🏢 Office: ${item.whereToComplain.physicalOffice}\n\n` +
      `👤 TO WHOM TO COMPLAIN (Escalation Matrix):\n` +
      `1️⃣ Level 1: ${item.toWhom.level1}\n` +
      `2️⃣ Level 2: ${item.toWhom.level2}\n` +
      `3️⃣ Level 3: ${item.toWhom.level3}\n\n` +
      `📝 Resolution Timeline: ${item.resolutionTimeline}\n` +
      `💡 Key Tip: ${item.escalationTip}`;

    navigator.clipboard.writeText(textToCopy);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const QUICK_SEARCHES = [
    { label: 'SDM Office Delay', q: 'SDM' },
    { label: 'Garbage & Potholes', q: 'Garbage' },
    { label: 'Water Shortage / DJB', q: 'Water' },
    { label: 'Power Cut / Electricity', q: 'Power' },
    { label: 'Police Corruption / ACB', q: 'ACB' },
    { label: 'Cyber Fraud 1930', q: 'Cyber' },
    { label: 'E-commerce / Amazon Refund', q: 'Refund' },
    { label: 'Bank ATM & Loan Fraud', q: 'ATM' },
    { label: 'Passport & Railways', q: 'CPGRAMS' }
  ];

  return (
    <div className="space-y-6 text-zinc-100 max-w-7xl mx-auto py-6 px-4">
      {/* Top Banner Header */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-amber-950/90 via-slate-900 to-zinc-900 border border-amber-800/60 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-60 h-60 bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="flex items-start gap-4">
            <div className="p-3.5 rounded-2xl bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-[#FF6B00] flex-shrink-0">
              <MessageSquare className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-xl md:text-2xl font-black text-white">Public Grievance & Complaint Redressal Hub</h2>
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#FF6B00]/20 text-[#FF6B00] border border-[#FF6B00]/40 font-bold uppercase tracking-wider">
                  Official Government Dept Directory
                </span>
              </div>
              <p className="text-xs md:text-sm text-zinc-300 max-w-3xl leading-relaxed">
                Complete guide on <strong className="text-white">How to Complaint</strong>, <strong className="text-white">Where to Complaint</strong>, and <strong className="text-white">To Whom to Complaint</strong> across all Delhi Government Departments, Central Ministries, MCD, Utilities, Police, Consumer Forum, and Banking.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => setActiveTabMode('directory')}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs transition flex items-center gap-2 ${
                activeTabMode === 'directory' 
                  ? 'bg-[#FF6B00] text-white shadow-lg' 
                  : 'bg-zinc-900/90 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>Department Directory</span>
            </button>

            <button
              onClick={() => setActiveTabMode('matrix')}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs transition flex items-center gap-2 ${
                activeTabMode === 'matrix' 
                  ? 'bg-[#FF6B00] text-white shadow-lg' 
                  : 'bg-zinc-900/90 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              <UserCheck className="w-4 h-4" />
              <span>Escalation Matrix Guide</span>
            </button>
          </div>
        </div>
      </div>

      {activeTabMode === 'matrix' ? (
        /* Escalation Matrix Explanation View */
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-[#121824] border border-zinc-800 space-y-4">
            <h3 className="text-lg font-black text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#FF6B00]" />
              Government Grievance Redressal Mechanism & Hierarchy Guide
            </h3>
            <p className="text-xs text-zinc-300 leading-relaxed">
              Every government department in India follows a mandatory 3-Tier Public Grievance Escalation Hierarchy. If your initial application or complaint is delayed or rejected unfairly, follow this step-by-step escalation path to get instant resolution.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              {/* Level 1 */}
              <div className="p-4 rounded-xl bg-zinc-900 border border-blue-900/50 space-y-2">
                <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-blue-950 text-blue-400 border border-blue-800">
                  Level 1 • First Point of Contact
                </span>
                <h4 className="text-sm font-bold text-white">Designated Nodal Officer / PGO</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Lodge your initial complaint with the designated Public Grievance Officer (PGO), SDM, Executive Engineer, or Customer Care of the specific department.
                </p>
                <p className="text-[11px] text-amber-400 font-medium">Expected Time: 7 to 15 Days</p>
              </div>

              {/* Level 2 */}
              <div className="p-4 rounded-xl bg-zinc-900 border border-amber-900/50 space-y-2">
                <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-amber-950 text-amber-400 border border-amber-800">
                  Level 2 • First Appellate Authority
                </span>
                <h4 className="text-sm font-bold text-white">Head of Department (HOD) / Secretary</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  If unresolved after Level 1 timeline, file a formal Appeal with the Department Secretary, HOD, or Zonal Deputy Commissioner.
                </p>
                <p className="text-[11px] text-amber-400 font-medium">Expected Time: 15 to 30 Days</p>
              </div>

              {/* Level 3 */}
              <div className="p-4 rounded-xl bg-zinc-900 border border-emerald-900/50 space-y-2">
                <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                  Level 3 • Apex Authority
                </span>
                <h4 className="text-sm font-bold text-white">PGMS / CPGRAMS / Lokayukta</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Apex oversight body. Delhi Govt PGMS Portal (1031), Central Govt CPGRAMS (pgportal.gov.in), Public Grievances Commission (PGC), or Lokayukta.
                </p>
                <p className="text-[11px] text-emerald-400 font-medium">Final Binding Resolution & Inquiry</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-[#121824] border border-zinc-800 space-y-3">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Building2 className="w-4 h-4 text-blue-400" />
                Delhi Government Departments (PGMS)
              </h4>
              <p className="text-xs text-zinc-300 leading-relaxed">
                For Revenue (SDM), Transport (RTO), Delhi Jal Board, PWD, Delhi Govt Hospitals, Ration, and Education, use the Delhi PGMS portal (<strong className="text-white">pgms.delhi.gov.in</strong>) or call <strong className="text-amber-400">1031</strong>.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#121824] border border-zinc-800 space-y-3">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Landmark className="w-4 h-4 text-emerald-400" />
                Central Government Ministries (CPGRAMS)
              </h4>
              <p className="text-xs text-zinc-300 leading-relaxed">
                For Railways, Passports, Income Tax, EPFO, India Post, National Highways, and Central PSUs, use CPGRAMS portal (<strong className="text-white">pgportal.gov.in</strong>) monitored by DARPG.
              </p>
            </div>
          </div>
        </div>
      ) : (
        /* Directory View */
        <div className="space-y-4">
          {/* Filter Bar */}
          <div className="space-y-3">
            <div className="flex flex-wrap gap-1.5 p-1.5 rounded-2xl bg-zinc-900/90 border border-zinc-800">
              {jurisdictions.map((j) => {
                const IconComp = j.icon;
                return (
                  <button
                    key={j.id}
                    onClick={() => setSelectedJurisdiction(j.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                      selectedJurisdiction === j.id 
                        ? 'bg-[#FF6B00] text-white shadow-md' 
                        : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                    }`}
                  >
                    <IconComp className="w-3.5 h-3.5" />
                    <span>{j.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Quick Keyword Filters */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="font-semibold text-zinc-400 text-[11px]">Quick Issue Filter:</span>
              {QUICK_SEARCHES.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setSearchQuery(item.q)}
                  className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-[#FF6B00] text-zinc-300 hover:text-white transition text-[11px]"
                >
                  {item.label}
                </button>
              ))}
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="px-2 py-1 rounded bg-zinc-800 text-amber-400 text-[10px] font-bold hover:bg-zinc-700"
                >
                  Clear Search
                </button>
              )}
            </div>

            {/* Search Input Box */}
            <div className="relative">
              <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by department name, issue (e.g. water, streetlight, SDM, refund, bribe, helpline)..."
                className="w-full bg-zinc-900/90 border border-zinc-800 rounded-2xl pl-10 pr-4 py-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#FF6B00] transition"
              />
            </div>
          </div>

          {/* Results Count Header */}
          <div className="flex items-center justify-between text-xs text-zinc-400 px-1 border-b border-zinc-800 pb-2">
            <span>
              Showing <strong className="text-white">{filteredComplaints.length}</strong> Government Department Complaint Guides
            </span>
            <span className="text-[11px] font-mono text-zinc-500">Official Grievance Portals Verified</span>
          </div>

          {/* Department Complaint Cards */}
          {filteredComplaints.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {filteredComplaints.map((item) => (
                <div 
                  key={item.id}
                  className="p-5 rounded-2xl bg-[#121824] border border-zinc-800 hover:border-[#FF6B00]/50 transition shadow-xl space-y-4 flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-blue-950 text-blue-400 border border-blue-800 uppercase tracking-wide">
                          {item.jurisdiction}
                        </span>
                        <h3 className="text-base font-black text-white group-hover:text-[#FF6B00] transition leading-snug mt-1.5">
                          {item.deptName}
                        </h3>
                        <p className="text-xs text-amber-400 font-medium">{item.hindiDeptName}</p>
                      </div>

                      <button
                        onClick={() => handleCopy(item)}
                        className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition flex-shrink-0"
                        title="Copy Complaint Info & Escalation Contacts"
                      >
                        {copiedId === item.id ? (
                          <Check className="w-4 h-4 text-emerald-400" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>

                    <p className="text-xs text-zinc-300 leading-relaxed bg-zinc-900/60 p-2.5 rounded-xl border border-zinc-800/60">
                      {item.shortDesc}
                    </p>

                    {/* Common Complaint Issues Box */}
                    <div className="space-y-1.5">
                      <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider block">
                        Common Issues You Can Complain About:
                      </span>
                      <ul className="grid grid-cols-1 gap-1 text-xs text-zinc-300">
                        {item.commonIssues.map((issue, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <AlertTriangle className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                            <span>{issue}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* TO WHOM TO COMPLAIN (Escalation Matrix Box) */}
                    <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                      <span className="text-[11px] font-black text-[#FF6B00] uppercase tracking-wider flex items-center gap-1.5">
                        <UserCheck className="w-3.5 h-3.5 text-[#FF6B00]" /> TO WHOM TO COMPLAIN (Escalation Hierarchy)
                      </span>

                      <div className="space-y-1.5 text-xs">
                        <div className="flex items-start gap-2">
                          <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded bg-blue-950 text-blue-400 border border-blue-800 flex-shrink-0 mt-0.5">L1</span>
                          <div>
                            <span className="text-zinc-400 text-[10px] font-bold uppercase">First Contact: </span>
                            <span className="text-zinc-200 font-medium">{item.toWhom.level1}</span>
                          </div>
                        </div>

                        <div className="flex items-start gap-2">
                          <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded bg-amber-950 text-amber-400 border border-amber-800 flex-shrink-0 mt-0.5">L2</span>
                          <div>
                            <span className="text-zinc-400 text-[10px] font-bold uppercase">Appellate Authority: </span>
                            <span className="text-zinc-200 font-medium">{item.toWhom.level2}</span>
                          </div>
                        </div>

                        <div className="flex items-start gap-2">
                          <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800 flex-shrink-0 mt-0.5">L3</span>
                          <div>
                            <span className="text-zinc-400 text-[10px] font-bold uppercase">Apex Oversight: </span>
                            <span className="text-zinc-200 font-medium">{item.toWhom.level3}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* HOW & WHERE TO COMPLAIN (Channels Box) */}
                    <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 space-y-2 text-xs">
                      <span className="text-[11px] font-black text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                        <Send className="w-3.5 h-3.5 text-emerald-400" /> WHERE & HOW TO LODGE COMPLAIN
                      </span>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
                        <div className="flex items-center gap-2 text-zinc-300">
                          <PhoneCall className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                          <span className="font-mono font-bold text-white">{item.whereToComplain.helpline}</span>
                        </div>

                        {item.whereToComplain.whatsappNumber && (
                          <div className="flex items-center gap-2 text-zinc-300">
                            <Send className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                            <span className="font-mono text-zinc-200">WhatsApp: {item.whereToComplain.whatsappNumber}</span>
                          </div>
                        )}

                        {item.whereToComplain.email && (
                          <div className="flex items-center gap-2 text-zinc-300 sm:col-span-2">
                            <Mail className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                            <span className="font-mono text-zinc-300 truncate">{item.whereToComplain.email}</span>
                          </div>
                        )}

                        <div className="flex items-start gap-2 text-zinc-400 sm:col-span-2 pt-1 border-t border-zinc-800">
                          <MapPin className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                          <span className="text-[11px] text-zinc-300">{item.whereToComplain.physicalOffice}</span>
                        </div>
                      </div>
                    </div>

                    {/* Step by Step Filing Procedure */}
                    <div className="space-y-1.5">
                      <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider block">
                        Step-by-Step Filing Procedure:
                      </span>
                      <ol className="space-y-1 text-xs text-zinc-300">
                        {item.stepByStepProcess.map((step, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-2">
                            <span className="w-4 h-4 rounded-full bg-zinc-800 text-zinc-300 text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                              {sIdx + 1}
                            </span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    {/* Key Tip & Timeline */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 border-t border-zinc-800/80 text-[11px]">
                      <span className="text-zinc-400 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-amber-400" /> Resolution Target: <strong className="text-white">{item.resolutionTimeline}</strong>
                      </span>
                      <span className="text-amber-400 font-medium truncate">
                        💡 {item.escalationTip}
                      </span>
                    </div>
                  </div>

                  {/* Footer Action Buttons */}
                  <div className="pt-3 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[10px] font-mono text-zinc-500">
                      Official Government Portal
                    </span>

                    <div className="flex flex-wrap items-center gap-2">
                      {parseWebsites(item.whereToComplain.officialWebsite).map((link, lIdx) => (
                        <a
                          key={lIdx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3.5 py-2 rounded-xl bg-[#FF6B00] hover:bg-[#e05e00] text-white text-xs font-bold transition inline-flex items-center gap-1.5 shadow-md"
                        >
                          <span>{link.label}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center bg-zinc-900/50 rounded-2xl border border-zinc-800 space-y-3">
              <p className="text-sm text-zinc-300 font-semibold">No complaint department found for "{searchQuery}"</p>
              <p className="text-xs text-zinc-500 max-w-md mx-auto">
                Try searching for SDM, PWD, Water, Electricity, Police, Passport, Refund, Bribe, or Garbage.
              </p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedJurisdiction('all'); }}
                className="px-4 py-2 rounded-lg bg-[#FF6B00] text-white font-bold text-xs hover:brightness-110 transition"
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </div>
      )}

      {/* Verification Footer */}
      <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
          <span className="text-zinc-400">
            Public Grievance Mechanisms & Portals updated as per <strong className="text-zinc-200">Delhi PGMS (pgms.delhi.gov.in) & DARPG CPGRAMS (pgportal.gov.in)</strong>.
          </span>
        </div>
        <a
          href="https://pgms.delhi.gov.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[#FF6B00] hover:underline font-bold text-[11px] flex-shrink-0"
        >
          <span>Delhi PGMS Official Portal</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
