import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  Search, 
  Copy, 
  Check, 
  MapPin, 
  PhoneCall, 
  CheckCircle2, 
  Sparkles, 
  ExternalLink, 
  Info, 
  Globe, 
  HelpCircle,
  CreditCard,
  ArrowRight,
  RefreshCw,
  Landmark
} from 'lucide-react';
import { 
  POPULAR_BANKS_LIST, 
  STATES_LIST, 
  CITIES_BY_STATE, 
  MOCK_IFSC_DATABASE, 
  lookupIfscOnline,
  getMatchingBranches
} from '../data/ifscData';
import { IfscBranch } from '../types';

export const IfscFinder: React.FC = () => {
  // Input search states
  const [directIfscInput, setDirectIfscInput] = useState<string>('');
  const [selectedBankId, setSelectedBankId] = useState<string>('');
  const [selectedState, setSelectedState] = useState<string>('Delhi');
  const [selectedCity, setSelectedCity] = useState<string>('New Delhi');
  const [selectedBranchIfsc, setSelectedBranchIfsc] = useState<string>('');

  // General text search filter
  const [generalSearchQuery, setGeneralSearchQuery] = useState<string>('');

  // Active result state
  const [currentBranch, setCurrentBranch] = useState<IfscBranch | null>(MOCK_IFSC_DATABASE[0]);
  const [isSearchingOnline, setIsSearchingOnline] = useState<boolean>(false);
  const [onlineSearchError, setOnlineSearchError] = useState<string | null>(null);

  // Copy feedback states
  const [copiedIfsc, setCopiedIfsc] = useState<boolean>(false);
  const [copiedMicr, setCopiedMicr] = useState<boolean>(false);
  const [copiedFull, setCopiedFull] = useState<boolean>(false);

  // Available cities based on selected state
  const availableCities = selectedState 
    ? (CITIES_BY_STATE[selectedState] || []) 
    : Array.from(new Set(Object.values(CITIES_BY_STATE).flat()));

  // Dynamically computed matching branches using database + fallback generator
  const matchingDropdownBranches = getMatchingBranches(selectedBankId, selectedState, selectedCity);

  // Keep active branch synchronized with dropdown selection
  useEffect(() => {
    if (matchingDropdownBranches.length > 0) {
      // If current branch is not in the list of matching branches, select the first one
      const exists = matchingDropdownBranches.find(b => b.ifsc === selectedBranchIfsc);
      if (!exists) {
        setSelectedBranchIfsc(matchingDropdownBranches[0].ifsc);
        setCurrentBranch(matchingDropdownBranches[0]);
      }
    }
  }, [selectedBankId, selectedState, selectedCity]);

  // Filter branches based on general search query
  const filteredDatabase = MOCK_IFSC_DATABASE.filter(b => {
    const q = generalSearchQuery.trim().toLowerCase();
    if (!q) return true;
    return b.ifsc.toLowerCase().includes(q) ||
           b.bankName.toLowerCase().includes(q) ||
           b.branchName.toLowerCase().includes(q) ||
           b.address.toLowerCase().includes(q) ||
           b.city.toLowerCase().includes(q) ||
           b.district.toLowerCase().includes(q) ||
           b.micrCode.includes(q);
  });

  // Handle direct 11-character IFSC lookup
  const handleLookupDirectIfsc = async (codeToSearch?: string) => {
    const code = (codeToSearch || directIfscInput).trim().toUpperCase();
    if (!code) return;

    setOnlineSearchError(null);

    // First check local mock database
    const localMatch = MOCK_IFSC_DATABASE.find(b => b.ifsc.toUpperCase() === code);
    if (localMatch) {
      setCurrentBranch(localMatch);
      setSelectedBranchIfsc(localMatch.ifsc);
      return;
    }

    // If 11-char IFSC code format (e.g. SBIN0000691)
    if (code.length === 11) {
      setIsSearchingOnline(true);
      const onlineBranch = await lookupIfscOnline(code);
      setIsSearchingOnline(false);

      if (onlineBranch) {
        setCurrentBranch(onlineBranch);
        setSelectedBranchIfsc(onlineBranch.ifsc);
      } else {
        setOnlineSearchError(`IFSC Code "${code}" not found in RBI database. Please verify the code on your cheque leaf or bank passbook.`);
      }
    } else {
      // Filter local list by partial match
      const partialMatch = MOCK_IFSC_DATABASE.find(b => b.ifsc.toUpperCase().includes(code) || b.branchName.toLowerCase().includes(code.toLowerCase()));
      if (partialMatch) {
        setCurrentBranch(partialMatch);
        setSelectedBranchIfsc(partialMatch.ifsc);
      } else {
        setOnlineSearchError(`Please enter a valid 11-digit IFSC code (e.g., SBIN0000691, HDFC0000240, PUNB0013800).`);
      }
    }
  };

  // Handle Branch selection from dropdown
  const handleSelectBranch = (ifscCode: string) => {
    setSelectedBranchIfsc(ifscCode);
    const match = matchingDropdownBranches.find(b => b.ifsc === ifscCode) || MOCK_IFSC_DATABASE.find(b => b.ifsc === ifscCode);
    if (match) {
      setCurrentBranch(match);
    } else {
      handleLookupDirectIfsc(ifscCode);
    }
  };

  // Copy helper functions
  const handleCopyText = (text: string, type: 'ifsc' | 'micr' | 'full') => {
    navigator.clipboard.writeText(text);
    if (type === 'ifsc') {
      setCopiedIfsc(true);
      setTimeout(() => setCopiedIfsc(false), 2000);
    } else if (type === 'micr') {
      setCopiedMicr(true);
      setTimeout(() => setCopiedMicr(false), 2000);
    } else {
      setCopiedFull(true);
      setTimeout(() => setCopiedFull(false), 2000);
    }
  };

  return (
    <div className="space-y-6 text-zinc-100">
      {/* Search Header Banner */}
      <div className="p-6 rounded-2xl bg-[#121824] border border-zinc-800 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-800 pb-4">
          <div>
            <span className="text-xs font-bold text-[#FF6B00] uppercase tracking-wider flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-[#FF6B00]" /> RBI Verified Bank Directory
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-0.5">
              Find Bank IFSC, MICR & Branch Details
            </h3>
            <p className="text-xs text-zinc-400 mt-1">
              Find 11-character IFSC codes for NEFT, RTGS, IMPS & UPI transfers across all public and private Indian banks.
            </p>
          </div>

          <a
            href="https://www.rbi.org.in/scripts/IFSCMICRDetails.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-[#FF6B00] text-zinc-300 hover:text-white text-xs font-bold transition flex-shrink-0"
          >
            <span>RBI IFSC Portal</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#FF6B00]" />
          </a>
        </div>

        {/* Popular Quick Bank Tags */}
        <div className="space-y-2">
          <span className="text-[11px] text-zinc-400 font-bold uppercase tracking-wider block">Popular Banks:</span>
          <div className="flex flex-wrap items-center gap-1.5">
            {POPULAR_BANKS_LIST.slice(0, 10).map((b) => (
              <button
                key={b.id}
                onClick={() => {
                  setSelectedBankId(b.id);
                  const branches = getMatchingBranches(b.id, selectedState, selectedCity);
                  if (branches.length > 0) {
                    setSelectedBranchIfsc(branches[0].ifsc);
                    setCurrentBranch(branches[0]);
                  }
                }}
                className={`px-3 py-1 rounded-lg text-xs font-bold border transition ${
                  selectedBankId === b.id 
                    ? 'bg-[#FF6B00] text-white border-[#FF6B00]' 
                    : 'bg-zinc-900 text-zinc-300 border-zinc-800 hover:border-zinc-700 hover:text-white'
                }`}
              >
                {b.shortName}
              </button>
            ))}
            {selectedBankId && (
              <button
                onClick={() => { 
                  setSelectedBankId(''); 
                  const branches = getMatchingBranches('', selectedState, selectedCity);
                  if (branches.length > 0) {
                    setSelectedBranchIfsc(branches[0].ifsc);
                    setCurrentBranch(branches[0]);
                  }
                }}
                className="px-2.5 py-1 rounded-lg bg-zinc-800 text-amber-400 text-[10px] font-bold hover:bg-zinc-700"
              >
                Show All Banks
              </button>
            )}
          </div>
        </div>

        {/* 2 Methods Tab: Direct IFSC Search OR Select Step-by-Step */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pt-2">
          {/* Method 1: Direct 11-digit IFSC Search */}
          <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-3">
            <label className="block text-xs font-bold text-white uppercase tracking-wider">
              Option A: Search Directly by 11-Digit IFSC Code
            </label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={directIfscInput}
                  onChange={(e) => setDirectIfscInput(e.target.value.toUpperCase())}
                  onKeyDown={(e) => e.key === 'Enter' && handleLookupDirectIfsc()}
                  placeholder="e.g. SBIN0000691 or HDFC0000240"
                  maxLength={11}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white font-mono uppercase font-bold placeholder-zinc-500 focus:outline-none focus:border-[#FF6B00]"
                />
              </div>
              <button
                onClick={() => handleLookupDirectIfsc()}
                disabled={isSearchingOnline}
                className="px-4 py-2.5 rounded-xl bg-[#FF6B00] hover:brightness-110 text-white font-bold text-xs transition flex items-center gap-1.5 flex-shrink-0 disabled:opacity-50"
              >
                {isSearchingOnline ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Searching...</span>
                  </>
                ) : (
                  <>
                    <Search className="w-3.5 h-3.5" />
                    <span>Find IFSC</span>
                  </>
                )}
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-1.5 text-[10px] text-zinc-400">
              <span className="font-semibold text-zinc-300">Try Sample IFSCs:</span>
              {['SBIN0000691', 'HDFC0000240', 'PUNB0013800', 'ICIC0000007', 'BARB0VALSAD'].map((sample) => (
                <button
                  key={sample}
                  onClick={() => {
                    setDirectIfscInput(sample);
                    handleLookupDirectIfsc(sample);
                  }}
                  className="px-2 py-0.5 rounded bg-zinc-800 hover:bg-zinc-700 text-amber-400 font-mono font-semibold transition"
                >
                  {sample}
                </button>
              ))}
            </div>
          </div>

          {/* Method 2: Dropdown Cascade Selector (Bank -> State -> City -> Branch) */}
          <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-3">
            <label className="block text-xs font-bold text-white uppercase tracking-wider">
              Option B: Select Bank, State, City & Branch
            </label>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {/* Select Bank */}
              <div>
                <span className="text-[10px] text-zinc-400 font-medium block mb-1">1. Bank Name</span>
                <select
                  value={selectedBankId}
                  onChange={(e) => {
                    const newBank = e.target.value;
                    setSelectedBankId(newBank);
                    const branches = getMatchingBranches(newBank, selectedState, selectedCity);
                    if (branches.length > 0) {
                      setSelectedBranchIfsc(branches[0].ifsc);
                      setCurrentBranch(branches[0]);
                    }
                  }}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-2.5 py-2 text-xs text-white focus:outline-none focus:border-[#FF6B00]"
                >
                  <option value="">-- All Banks --</option>
                  {POPULAR_BANKS_LIST.map((b) => (
                    <option key={b.id} value={b.id}>{b.name}</option>
                  ))}
                </select>
              </div>

              {/* Select State */}
              <div>
                <span className="text-[10px] text-zinc-400 font-medium block mb-1">2. State</span>
                <select
                  value={selectedState}
                  onChange={(e) => {
                    const newSt = e.target.value;
                    setSelectedState(newSt);
                    const cities = newSt ? (CITIES_BY_STATE[newSt] || []) : [];
                    const firstCity = cities[0] || '';
                    setSelectedCity(firstCity);
                    const branches = getMatchingBranches(selectedBankId, newSt, firstCity);
                    if (branches.length > 0) {
                      setSelectedBranchIfsc(branches[0].ifsc);
                      setCurrentBranch(branches[0]);
                    }
                  }}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-2.5 py-2 text-xs text-white focus:outline-none focus:border-[#FF6B00]"
                >
                  <option value="">-- All States --</option>
                  {STATES_LIST.map((st) => (
                    <option key={st} value={st}>{st}</option>
                  ))}
                </select>
              </div>

              {/* Select City / District */}
              <div>
                <span className="text-[10px] text-zinc-400 font-medium block mb-1">3. City / District</span>
                <select
                  value={selectedCity}
                  onChange={(e) => {
                    const newCt = e.target.value;
                    setSelectedCity(newCt);
                    const branches = getMatchingBranches(selectedBankId, selectedState, newCt);
                    if (branches.length > 0) {
                      setSelectedBranchIfsc(branches[0].ifsc);
                      setCurrentBranch(branches[0]);
                    }
                  }}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-2.5 py-2 text-xs text-white focus:outline-none focus:border-[#FF6B00]"
                >
                  <option value="">-- All Cities / Districts --</option>
                  {availableCities.map((ct) => (
                    <option key={ct} value={ct}>{ct}</option>
                  ))}
                </select>
              </div>

              {/* Select Branch */}
              <div>
                <span className="text-[10px] text-zinc-400 font-medium block mb-1">
                  4. Select Branch ({matchingDropdownBranches.length})
                </span>
                <select
                  value={selectedBranchIfsc}
                  onChange={(e) => handleSelectBranch(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-2.5 py-2 text-xs text-white focus:outline-none focus:border-[#FF6B00]"
                >
                  <option value="">-- Choose Branch --</option>
                  {matchingDropdownBranches.map((br) => (
                    <option key={br.ifsc} value={br.ifsc}>
                      {br.branchName} ({br.ifsc})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Error notification if online search fails */}
        {onlineSearchError && (
          <div className="p-3.5 rounded-xl bg-red-950/80 border border-red-800 text-red-200 text-xs flex items-start gap-2">
            <Info className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold">{onlineSearchError}</p>
              <p className="text-[11px] text-red-300/80 mt-0.5">
                Tip: Standard IFSC codes have 11 characters, where the 5th character is always the digit '0' (zero).
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Selected Branch Detail Hero Card */}
      {currentBranch && (
        <div className="p-6 rounded-2xl bg-gradient-to-br from-[#121824] to-[#1A2234] border border-[#FF6B00]/40 shadow-2xl space-y-6 relative overflow-hidden">
          {/* Top Decorative Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-800/80 pb-5">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs px-2.5 py-0.5 rounded-md bg-[#FF6B00]/20 text-[#FF6B00] border border-[#FF6B00]/40 font-bold uppercase">
                  {currentBranch.bankName}
                </span>
                <span className="text-xs px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 font-semibold">
                  {currentBranch.district}, {currentBranch.state}
                </span>
              </div>
              <h3 className="text-2xl font-black text-white flex items-center gap-2">
                <span>{currentBranch.branchName}</span>
              </h3>
              <p className="text-xs text-zinc-400 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#FF6B00]" />
                <span>{currentBranch.address}</span>
              </p>
            </div>

            {/* Big IFSC Display Box */}
            <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 flex flex-col items-start sm:items-end gap-2 flex-shrink-0">
              <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider block">11-Digit IFSC Code</span>
              <div className="flex items-center gap-3">
                <span className="text-2xl sm:text-3xl font-black text-[#FF6B00] font-mono tracking-wider">
                  {currentBranch.ifsc}
                </span>
                <button
                  onClick={() => handleCopyText(currentBranch.ifsc, 'ifsc')}
                  className="px-3 py-1.5 rounded-lg bg-[#FF6B00] hover:brightness-110 text-white font-bold text-xs transition flex items-center gap-1 shadow-md"
                >
                  {copiedIfsc ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-white" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Grid of Key Branch Codes & Contact Info */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800/80">
              <span className="text-zinc-500 font-bold block text-[10px] uppercase">9-Digit MICR Code</span>
              <div className="flex items-center justify-between gap-1 mt-1">
                <span className="text-white font-mono font-bold text-sm">{currentBranch.micrCode || 'N/A'}</span>
                {currentBranch.micrCode && currentBranch.micrCode !== 'N/A' && (
                  <button
                    onClick={() => handleCopyText(currentBranch.micrCode, 'micr')}
                    className="p-1 text-zinc-400 hover:text-white"
                    title="Copy MICR Code"
                  >
                    {copiedMicr ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                )}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800/80">
              <span className="text-zinc-500 font-bold block text-[10px] uppercase">Branch Code</span>
              <span className="text-white font-mono font-bold text-sm block mt-1">{currentBranch.branchCode}</span>
            </div>

            <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800/80">
              <span className="text-zinc-500 font-bold block text-[10px] uppercase">Contact Helpline</span>
              <span className="text-amber-400 font-mono font-bold text-xs block mt-1">{currentBranch.phone}</span>
            </div>

            <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800/80">
              <span className="text-zinc-500 font-bold block text-[10px] uppercase">Postal PIN Code</span>
              <span className="text-emerald-400 font-mono font-bold text-sm block mt-1">{currentBranch.pincode || 'N/A'}</span>
            </div>
          </div>

          {/* Supported Fund Transfer Modes */}
          <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 space-y-2">
            <span className="text-xs font-bold text-zinc-300 uppercase tracking-wider block">
              Supported Fund Transfer Facilities at this Branch:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              <div className={`p-2.5 rounded-lg border flex items-center gap-2 ${currentBranch.neft ? 'bg-emerald-950/40 border-emerald-800/60 text-emerald-300' : 'bg-zinc-900 border-zinc-800 text-zinc-500'}`}>
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <div>
                  <span className="font-bold block">NEFT Available</span>
                  <span className="text-[10px] opacity-80">24x7 Round-the-clock</span>
                </div>
              </div>

              <div className={`p-2.5 rounded-lg border flex items-center gap-2 ${currentBranch.rtgs ? 'bg-emerald-950/40 border-emerald-800/60 text-emerald-300' : 'bg-zinc-900 border-zinc-800 text-zinc-500'}`}>
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <div>
                  <span className="font-bold block">RTGS Available</span>
                  <span className="text-[10px] opacity-80">Real-time Gross Settlement</span>
                </div>
              </div>

              <div className={`p-2.5 rounded-lg border flex items-center gap-2 ${currentBranch.imps ? 'bg-emerald-950/40 border-emerald-800/60 text-emerald-300' : 'bg-zinc-900 border-zinc-800 text-zinc-500'}`}>
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <div>
                  <span className="font-bold block">IMPS Supported</span>
                  <span className="text-[10px] opacity-80">Instant Mobile Transfer</span>
                </div>
              </div>

              <div className={`p-2.5 rounded-lg border flex items-center gap-2 ${currentBranch.upi ? 'bg-emerald-950/40 border-emerald-800/60 text-emerald-300' : 'bg-zinc-900 border-zinc-800 text-zinc-500'}`}>
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <div>
                  <span className="font-bold block">UPI Enabled</span>
                  <span className="text-[10px] opacity-80">Google Pay, PhonePe, BHIM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Copy Full Details & Quick Action Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
            <button
              onClick={() => {
                const fullText = `Bank: ${currentBranch.bankName}\nBranch: ${currentBranch.branchName}\nIFSC: ${currentBranch.ifsc}\nMICR: ${currentBranch.micrCode}\nAddress: ${currentBranch.address}\nDistrict: ${currentBranch.district}, ${currentBranch.state}`;
                handleCopyText(fullText, 'full');
              }}
              className="px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 text-xs font-bold transition flex items-center justify-center gap-1.5"
            >
              {copiedFull ? (
                <>
                  <Check className="w-4 h-4 text-green-400" />
                  <span className="text-green-400">Branch Details Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-zinc-400" />
                  <span>Copy Complete Branch Info</span>
                </>
              )}
            </button>

            <a
              href="https://www.rbi.org.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#FF6B00] hover:brightness-110 text-white text-xs font-bold transition"
            >
              <span>Verified on RBI Official Network</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}

      {/* Directory Table / Grid of Popular Bank Branches */}
      <div className="p-6 rounded-2xl bg-[#121824] border border-zinc-800 shadow-xl space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-zinc-800 pb-3">
          <div>
            <h4 className="text-lg font-bold text-white flex items-center gap-2">
              <span>Popular Bank Branches Directory</span>
              <span className="text-xs px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 font-semibold">
                {filteredDatabase.length} Branches
              </span>
            </h4>
            <p className="text-xs text-zinc-400">Quickly select any major bank branch below to view its full IFSC and MICR codes.</p>
          </div>

          <div className="relative w-full md:w-64">
            <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={generalSearchQuery}
              onChange={(e) => setGeneralSearchQuery(e.target.value)}
              placeholder="Search branch, place, IFSC..."
              className="w-full bg-zinc-900 border border-zinc-800 rounded-xl pl-8 pr-3 py-1.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#FF6B00]"
            />
          </div>
        </div>

        {/* Grid of Branch Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredDatabase.map((br) => {
            const isSelected = currentBranch?.ifsc === br.ifsc;
            return (
              <div
                key={br.ifsc}
                onClick={() => setCurrentBranch(br)}
                className={`p-4 rounded-xl border cursor-pointer transition space-y-2 relative group ${
                  isSelected 
                    ? 'bg-[#FF6B00]/15 border-[#FF6B00] shadow-lg' 
                    : 'bg-zinc-900 border-zinc-800 hover:border-zinc-700'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-xs font-bold text-white block">{br.bankName}</span>
                    <span className="text-[11px] font-semibold text-amber-400">{br.branchName}</span>
                  </div>
                  <span className="text-xs font-mono font-black text-[#FF6B00] bg-zinc-950 px-2 py-0.5 rounded border border-zinc-800">
                    {br.ifsc}
                  </span>
                </div>

                <p className="text-[11px] text-zinc-400 line-clamp-2 leading-relaxed">{br.address}</p>

                <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-between text-[10px] text-zinc-400">
                  <span>MICR: <strong className="text-zinc-300 font-mono">{br.micrCode}</strong></span>
                  <span className="text-[#FF6B00] font-bold group-hover:translate-x-1 transition inline-flex items-center gap-1">
                    Select Branch <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Educational Guide: How IFSC Code Works (BankBazaar style) */}
      <div className="p-6 rounded-2xl bg-[#121824] border border-zinc-800 space-y-4">
        <h4 className="text-base font-bold text-white flex items-center gap-2">
          <HelpCircle className="w-4 h-4 text-[#FF6B00]" /> Understanding Indian Financial System Code (IFSC)
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1.5">
            <span className="text-xs font-bold text-[#FF6B00] block">First 4 Characters (Bank Name)</span>
            <p className="text-zinc-300">
              The first 4 alphabetic characters represent the bank. For example, <strong>SBIN</strong> stands for State Bank of India, <strong>HDFC</strong> for HDFC Bank, and <strong>PUNB</strong> for PNB.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1.5">
            <span className="text-xs font-bold text-amber-400 block">5th Character (Control Digit)</span>
            <p className="text-zinc-300">
              The 5th character is always <strong>0 (Zero)</strong>. It is reserved by the Reserve Bank of India (RBI) for future system expansions.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1.5">
            <span className="text-xs font-bold text-emerald-400 block">Last 6 Characters (Branch Code)</span>
            <p className="text-zinc-300">
              The remaining 6 alphanumeric characters identify the specific bank branch uniquely across India (e.g., <strong>000691</strong> for SBI Parliament Street).
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs text-zinc-400 space-y-2">
          <p className="font-bold text-zinc-200">Where can you find your Bank IFSC Code?</p>
          <ul className="list-disc list-inside space-y-1 text-zinc-300">
            <li>Printed on top of your bank account <strong>Cheque Leaf</strong></li>
            <li>First page of your bank account <strong>Passbook</strong> or e-Statement</li>
            <li>In your Bank's <strong>Mobile Banking App</strong> under Account Details</li>
            <li>On the official RBI or individual bank website directory</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
