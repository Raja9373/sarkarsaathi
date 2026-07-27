
import React, { useState, useMemo } from 'react'
import { Search, MapPin, Building, FileText, CreditCard, Users, Heart, GraduationCap, Scale, Banknote, Globe, Shield, Check, ExternalLink, Phone, Clock, Zap, Home, Car, Droplets, Lightbulb, AlertTriangle } from 'lucide-react'

type Service = { id:string, name:string, cat:string, dept?:string, url:string, desc:string, docs?:string[], fees?:string, time?:string }

const CATEGORIES = [
  "Identity & Documents","Certificates","Licences","Vehicles & Transport","Property & Housing","Utilities","Family Services","Education","Employment","Business","Health","Police & Legal","Government Schemes","Taxes & Finance","Complaints","Government Departments","Government Offices","Banking","Government Finders","Government Calculators","Downloads","Status Check","Online Apply","Renewal","Corrections","RTI","Acts & Rules","Emergency","Helplines","Official Websites Directory","Life Events"
]

const SERVICES: Service[] = [
  {id:'aadhaar', name:'Aadhaar Services', cat:'Identity & Documents', dept:'UIDAI', url:'https://myaadhaar.uidai.gov.in/', desc:'Download, update, check status', docs:['Aadhaar Number','Mobile'], fees:'Free / Rs 50', time:'Instant'},
  {id:'pan', name:'PAN Card', cat:'Identity & Documents', dept:'NSDL', url:'https://www.tin-nsdl.com/services/pan/', desc:'New PAN, correction, reprint', docs:['Aadhaar','Photo'], fees:'Rs 107', time:'7 days'},
  {id:'voter', name:'Voter ID', cat:'Identity & Documents', dept:'Election Commission', url:'https://voters.eci.gov.in/', desc:'New voter registration, correction', docs:['Aadhaar','Address Proof'], fees:'Free', time:'15 days'},
  {id:'passport', name:'Passport', cat:'Identity & Documents', dept:'MEA', url:'https://www.passportindia.gov.in/', desc:'New passport, renewal', docs:['Aadhaar','DOB Proof'], fees:'Rs 1500', time:'15-30 days'},
  {id:'dl', name:'Driving Licence', cat:'Vehicles & Transport', dept:'Parivahan', url:'https://parivahan.gov.in/parivahan/', desc:'DL apply, renewal, status', docs:['Aadhaar','LL'], fees:'Rs 200-500', time:'7 days'},
  {id:'rc', name:'Vehicle RC', cat:'Vehicles & Transport', dept:'Parivahan', url:'https://vahan.parivahan.gov.in/nrservices/faces/user/citizen/citizenlogin.xhtml', desc:'RC status, transfer, hypothecation', docs:['RC Copy','Insurance'], fees:'Rs 300', time:'7 days'},
  {id:'birth', name:'Birth Certificate', cat:'Certificates', dept:'MCD', url:'https://mcdonline.nic.in/', desc:'Delhi birth certificate apply', docs:['Hospital Proof','Parents ID'], fees:'Rs 20', time:'7 days'},
  {id:'income', name:'Income Certificate', cat:'Certificates', dept:'Revenue Dept Delhi', url:'https://edistrict.delhigovt.nic.in/', desc:'Income certificate Delhi', docs:['Aadhaar','Affidavit'], fees:'Rs 0', time:'14 days'},
  {id:'property-tax', name:'Property Tax', cat:'Property & Housing', dept:'MCD', url:'https://mcdonline.nic.in/', desc:'Pay MCD property tax online', docs:['Property ID'], fees:'As per bill', time:'Instant'},
  {id:'electricity', name:'Electricity Bill', cat:'Utilities', dept:'BSES / TPDDL', url:'https://www.bsesdelhi.com/web/bses/', desc:'BSES Yamuna/Rajdhani bill payment', docs:['CA Number'], fees:'As per bill', time:'Instant'},
  {id:'water', name:'Delhi Jal Board', cat:'Utilities', dept:'DJB', url:'https://djb.gov.in/', desc:'Water bill, new connection', docs:['KNO'], fees:'As per bill', time:'Instant'},
  {id:'ration', name:'Ration Card', cat:'Family Services', dept:'Food & Supplies Delhi', url:'https://nfs.delhi.gov.in/', desc:'Ration card apply, status', docs:['Aadhaar of family'], fees:'Free', time:'21 days'},
  {id:'epfo', name:'EPFO / PF Balance', cat:'Employment', dept:'EPFO', url:'https://www.epfindia.gov.in/site_en/index.php', desc:'PF balance, claim, transfer', docs:['UAN','Aadhaar'], fees:'Free', time:'Instant'},
  {id:'esi', name:'ESIC', cat:'Employment', dept:'ESIC', url:'https://www.esic.gov.in/', desc:'ESIC card, benefits', docs:['IP Number'], fees:'Free', time:'Instant'},
  {id:'gst', name:'GST Registration', cat:'Business', dept:'GST', url:'https://www.gst.gov.in/', desc:'New GST, return filing', docs:['PAN','Aadhaar'], fees:'Free', time:'3 days'},
  {id:'udyam', name:'Udyam / MSME', cat:'Business', dept:'MSME', url:'https://udyamregistration.gov.in/', desc:'MSME registration', docs:['Aadhaar','PAN'], fees:'Free', time:'Instant'},
  {id:'scholarship', name:'Scholarship', cat:'Education', dept:'National Scholarship Portal', url:'https://scholarships.gov.in/', desc:'All scholarships', docs:['Aadhaar','Income Certificate'], fees:'Free', time:'As per scheme'},
  {id:'rti', name:'RTI Online', cat:'RTI', dept:'DoPT', url:'https://rtionline.gov.in/', desc:'File RTI online', docs:['Application'], fees:'Rs 10', time:'30 days'},
]

const BANKS = [
  {name:'State Bank of India', code:'SBI', url:'https://www.onlinesbi.sbi/', ifsc:'SBIN0000691', swift:'SBININBB'},
  {name:'Punjab National Bank', code:'PNB', url:'https://www.pnbindia.in/', ifsc:'PUNB0000001', swift:'PUNBINBB'},
  {name:'Bank of Baroda', code:'BOB', url:'https://www.bankofbaroda.in/', ifsc:'BARB0000001', swift:'BARBINBB'},
  {name:'Canara Bank', code:'Canara', url:'https://canarabank.com/', ifsc:'CNRB0000001', swift:'CNRBINBB'},
  {name:'HDFC Bank', code:'HDFC', url:'https://www.hdfcbank.com/', ifsc:'HDFC0000003', swift:'HDFCINBB'},
  {name:'ICICI Bank', code:'ICICI', url:'https://www.icicibank.com/', ifsc:'ICIC0000007', swift:'ICICINBB'},
  {name:'Axis Bank', code:'Axis', url:'https://www.axisbank.com/', ifsc:'UTIB0000001', swift:'AXISINBB'},
  {name:'Kotak Mahindra Bank', code:'Kotak', url:'https://www.kotak.com/', ifsc:'KKBK0000001', swift:'KKBKINBB'},
]

const FINDERS = [
  {id:'pincode', name:'PIN Code Finder', desc:'PIN ↔ Area bidirectional', icon: MapPin, route:'/finder/pin-code'},
  {id:'ifsc', name:'IFSC Finder', desc:'IFSC ↔ Bank Branch', icon: Building, route:'/finder/ifsc'},
  {id:'micr', name:'MICR Finder', desc:'MICR Code Finder', icon: FileText, route:'/finder/micr'},
  {id:'swift', name:'SWIFT/BIC Finder', desc:'SWIFT ↔ Bank', icon: Globe, route:'/finder/swift'},
  {id:'police', name:'Police Station Finder', desc:'Nearest police station Delhi', icon: Shield, route:'https://delhipolice.gov.in/'},
  {id:'hospital', name:'Hospital Finder', desc:'Govt hospitals Delhi', icon: Heart, route:'https://delhi.gov.in/'},
  {id:'rto', name:'RTO Finder', desc:'RTO Delhi codes', icon: Car, route:'https://vahan.parivahan.gov.in/'},
  {id:'aadhaar-center', name:'Aadhaar Centre Finder', desc:'Aadhaar Seva Kendra', icon: CreditCard, route:'https://appointments.uidai.gov.in/'},
]

const LIFE_EVENTS = [
  {id:'baby', name:'Baby Born', desc:'Birth certificate, Aadhaar, vaccination', services:['birth','aadhaar']},
  {id:'school', name:'School Admission', desc:'Income, caste, EWS certificate', services:['income']},
  {id:'buy-vehicle', name:'Buying Vehicle', desc:'RC, insurance, fastag', services:['rc']},
  {id:'start-business', name:'Starting Business', desc:'GST, Udyam, Shop licence, Current account', services:['gst','udyam']},
  {id:'change-address', name:'Changing Address', desc:'Aadhaar, Voter, DL update', services:['aadhaar','voter','dl']},
  {id:'first-job', name:'Getting First Job', desc:'PAN, EPF, Bank account', services:['pan','epfo']},
]

const PIN_DB: any = {
  '110001':{area:'Connaught Place', dist:'Central Delhi, Delhi'},
  '110025':{area:'Lajpat Nagar', dist:'South Delhi, Delhi'},
  '110092':{area:'Laxmi Nagar', dist:'East Delhi, Delhi'},
  '110075':{area:'Dwarka Sector 10', dist:'South West Delhi, Delhi'},
  '110085':{area:'Rohini Sector 15', dist:'North West Delhi, Delhi'},
  '110002':{area:'Daryaganj', dist:'Central Delhi'},
}
const AREA_DB: any = {'connaught place':'110001','lajpat nagar':'110025','laxmi nagar':'110092','dwarka':'110075','rohini':'110085','daryaganj':'110002'}

const IFSC_DB: any = {
  'SBIN0000691':{bank:'State Bank of India', branch:'Connaught Place, New Delhi'},
  'HDFC0000003':{bank:'HDFC Bank', branch:'K G Marg, Delhi'},
  'ICIC0000007':{bank:'ICICI Bank', branch:'Connaught Place, Delhi'},
  'PUNB0000001':{bank:'Punjab National Bank', branch:'Parliament Street'},
}

export default function App(){
  const [search, setSearch] = useState('')
  const [view, setView] = useState('home')
  const [selectedCat, setSelectedCat] = useState('')
  const [selectedService, setSelectedService] = useState<Service|null>(null)
  const [selectedBank, setSelectedBank] = useState<any>(null)
  const [pinQ, setPinQ] = useState('')
  const [ifscQ, setIfscQ] = useState('')
  const [selectedLife, setSelectedLife] = useState<any>(null)

  const filteredServices = useMemo(()=>{
    if(!search) return SERVICES
    const s = search.toLowerCase()
    return SERVICES.filter(x=> x.name.toLowerCase().includes(s) || x.cat.toLowerCase().includes(s) || x.dept?.toLowerCase().includes(s) || x.desc.toLowerCase().includes(s))
  },[search])

  const catServices = useMemo(()=> selectedCat ? SERVICES.filter(s=> s.cat===selectedCat) : [], [selectedCat])

  const pinRes = useMemo(()=>{
    const v = pinQ.trim()
    if(!v) return null
    const up = v.toUpperCase()
    const lo = v.toLowerCase()
    if(PIN_DB[up]) return {pin:up, ...PIN_DB[up]}
    if(AREA_DB[lo]) { const pin=AREA_DB[lo]; return {pin, ...PIN_DB[pin]} }
    for(const [area,pin] of Object.entries(AREA_DB)){ if(lo.includes(area) || area.includes(lo)) return {pin, ...PIN_DB[pin as string]} }
    return null
  },[pinQ])

  const ifscRes = useMemo(()=>{
    const v = ifscQ.trim().toUpperCase()
    const lo = ifscQ.trim().toLowerCase()
    if(!v) return null
    if(IFSC_DB[v]) return {ifsc:v, ...IFSC_DB[v]}
    for(const b of BANKS){ if(lo.includes(b.name.toLowerCase()) || lo===b.code.toLowerCase()) return {ifsc:b.ifsc, bank:b.name, branch:'Head Office'} }
    return null
  },[ifscQ])

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white selection:bg-orange-500/30">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0f0f0f]/90 border-b border-[#222]">
        <div className="max-w-[1280px] mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={()=>{setView('home'); setSelectedService(null)}}>
            <div className="w-9 h-9 rounded-full bg-[#ff6b00] grid place-items-center font-black text-black">S</div>
            <div>
              <div className="font-black tracking-tight leading-none">SarkarSaathi.org</div>
              <div className="text-[10px] opacity-50 -mt-1">Delhi • Free Forever</div>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 text-[13px] opacity-70">
            <a href="#" onClick={e=>{e.preventDefault(); setView('home')}}>Services</a>
            <a href="#" onClick={e=>{e.preventDefault(); setView('banking')}}>Banking</a>
            <a href="#" onClick={e=>{e.preventDefault(); setView('finders')}}>Finders</a>
            <a href="#" onClick={e=>{e.preventDefault(); setView('life')}}>Life Events</a>
          </nav>
          <div className="flex gap-2">
            <button onClick={()=>setView('finders')} className="px-3 py-1.5 rounded-full bg-[#1a1a1a] border border-[#333] text-xs">Finders</button>
          </div>
        </div>
      </header>

      {/* HOME */}
      {view==='home' && !selectedService && (
        <div className="max-w-[1280px] mx-auto px-4">
          {/* Hero */}
          <div className="py-12 md:py-20 text-center">
            <div className="inline-flex gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-[11px] mb-4">✔ Official .gov.in Links Only • No Login • No Fees</div>
            <h1 className="text-[32px] md:text-[56px] font-black leading-[0.95] tracking-tight">सभी सरकारी काम एक जगह,<br/><span className="text-[#ff6b00]">बिल्कुल फ्री</span></h1>
            <p className="mt-4 text-[14px] md:text-[16px] opacity-60 max-w-[720px] mx-auto">Delhi Government Services, Government Guides, Banking Guides, Official Links, Government Tools, Finders, Calculators and Step-by-Step Help.</p>
            
            <div className="mt-8 max-w-[720px] mx-auto relative">
              <Search className="absolute left-4 top-[14px] opacity-40" size={18}/>
              <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search Aadhaar, PAN, Passport, Driving Licence, Birth Certificate, IFSC, Property Tax..." className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-[#1a1a1a] border border-[#2a2a2a] outline-none focus:border-orange-500/50 text-[14px]"/>
              <div className="mt-2 flex flex-wrap gap-1.5 justify-center text-[11px] opacity-50">
                {['Aadhaar','PAN','Passport','Driving Licence','Birth Certificate','IFSC Code','Property Tax','Electricity Bill'].map(t=> <span key={t} onClick={()=>setSearch(t)} className="px-2.5 py-1 rounded-full bg-[#1e1e1e] border border-[#2a2a2a] cursor-pointer hover:border-orange-500/30">{t}</span>)}
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 md:grid-cols-6 gap-2 max-w-[900px] mx-auto">
              {[
                ['100% Official Links','Shield'],['No Fees','Check'],['No Login','Users'],['No Data Stored','Shield'],['Free Forever','Heart'],['Step-by-Step Guides','FileText']
              ].map(([label])=> (
                <div key={label} className="px-3 py-2 rounded-xl bg-[#151515] border border-[#222] text-[11px] flex items-center gap-1.5"><Check size={12} className="text-green-400"/>{label}</div>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="pb-4">
            <h2 className="text-[18px] font-bold mb-3">Main Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
              {CATEGORIES.map(cat=> (
                <button key={cat} onClick={()=>{setSelectedCat(cat); setView('category')}} className="text-left p-3 rounded-xl bg-[#161616] border border-[#222] hover:border-[#ff6b00]/30 text-[12px] font-medium">{cat}</button>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className="mt-10">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-[18px] font-bold">Delhi Government Services • {filteredServices.length} Services</h2>
              <span className="text-[11px] opacity-50">Phase 1: Delhi Only</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {filteredServices.map(s=>{
                return (
                  <div key={s.id} onClick={()=>{setSelectedService(s); setView('service')}} className="cursor-pointer p-4 rounded-2xl bg-[#161616] border border-[#222] hover:border-[#333] transition">
                    <div className="flex gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#222] grid place-items-center shrink-0"><FileText size={18} className="text-[#ff6b00]"/></div>
                      <div className="min-w-0">
                        <div className="font-semibold text-[13px] truncate">{s.name}</div>
                        <div className="text-[11px] opacity-50">{s.cat} • {s.dept}</div>
                        <div className="text-[11px] opacity-60 mt-1 line-clamp-2">{s.desc}</div>
                      </div>
                    </div>
                    <div className="mt-3 flex gap-2">
                      <a href={s.url} target="_blank" rel="noopener" onClick={e=>e.stopPropagation()} className="text-[11px] px-2.5 py-1 rounded-full bg-[#ff6b00] text-black font-bold flex items-center gap-1">Official Link <ExternalLink size={10}/></a>
                      <span className="text-[10px] px-2 py-1 rounded-full bg-[#1e1e1e] border border-[#2a2a2a] opacity-60">{s.fees}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Banking Preview */}
          <div className="mt-12 p-5 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#151515] border border-[#222]">
            <h3 className="font-bold">Banking Hub • 20+ Banks • Complete Guides</h3>
            <p className="text-[12px] opacity-60 mt-1">Saving, Current, Salary, Zero Balance, PPF, NPS, Sukanya, Locker, Cards, UPI — eligibility, docs, charges, official apply links.</p>
            <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-2">
              {BANKS.slice(0,8).map(b=> (
                <button key={b.code} onClick={()=>{setSelectedBank(b); setView('banking')}} className="p-2.5 rounded-xl bg-[#1e1e1e] border border-[#2a2a2a] text-left text-[12px]">{b.name}<div className="text-[10px] opacity-50">{b.code} • {b.ifsc}</div></button>
              ))}
            </div>
            <button onClick={()=>setView('banking')} className="mt-3 text-xs px-3 py-1.5 rounded-full bg-white text-black font-bold">View All Banking →</button>
          </div>

          {/* Finders Preview */}
          <div className="mt-8">
            <h3 className="font-bold mb-3">Government Finders • 28 Tools</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {FINDERS.map(f=>{
                const Icon = f.icon
                return (
                  <button key={f.id} onClick={()=>{if(f.route.startsWith('/')) setView('finders'); else window.open(f.route,'_blank')}} className="p-3 rounded-xl bg-[#161616] border border-[#222] text-left flex gap-2 items-center">
                    <Icon size={16} className="text-[#ff6b00] shrink-0"/><div><div className="text-[12px] font-medium">{f.name}</div><div className="text-[10px] opacity-50">{f.desc}</div></div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Life Events */}
          <div className="mt-10">
            <h3 className="font-bold mb-3">Life Events • Most Important Feature</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {LIFE_EVENTS.map(ev=> (
                <button key={ev.id} onClick={()=>{setSelectedLife(ev); setView('life')}} className="p-4 rounded-2xl bg-[#161616] border border-[#222] text-left">
                  <div className="font-semibold text-[13px]">{ev.name}</div>
                  <div className="text-[11px] opacity-60 mt-1">{ev.desc}</div>
                  <div className="text-[10px] mt-2 opacity-50">Services: {ev.services.join(', ')}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="h-20"/>
        </div>
      )}

      {/* CATEGORY VIEW */}
      {view==='category' && (
        <div className="max-w-[1280px] mx-auto px-4 py-8">
          <button onClick={()=>setView('home')} className="px-3 py-1.5 rounded-full bg-[#1a1a1a] border border-[#333] text-xs mb-4">← All Categories</button>
          <h1 className="text-2xl font-black">{selectedCat}</h1>
          <p className="opacity-60 text-sm mt-1">Official {selectedCat} services for Delhi • Phase 1</p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
            {catServices.length? catServices.map(s=> (
              <div key={s.id} onClick={()=>{setSelectedService(s); setView('service')}} className="cursor-pointer p-4 rounded-2xl bg-[#161616] border border-[#222]"><div className="font-semibold text-[13px]">{s.name}</div><div className="text-[11px] opacity-60">{s.desc}</div><a href={s.url} target="_blank" className="inline-flex mt-2 text-[11px] text-orange-400">Official Link ↗</a></div>
            )) : <div className="col-span-3 opacity-50 text-sm">No direct services yet — will be added. Explore all services on homepage.</div>}
          </div>
        </div>
      )}

      {/* SERVICE DETAIL */}
      {view==='service' && selectedService && (
        <div className="max-w-[900px] mx-auto px-4 py-8">
          <button onClick={()=>{setView('home'); setSelectedService(null)}} className="px-3 py-1.5 rounded-full bg-[#1a1a1a] border border-[#333] text-xs mb-4">← Back</button>
          <div className="p-6 rounded-2xl bg-[#161616] border border-[#222]">
            <h1 className="text-2xl font-black">{selectedService.name}</h1>
            <div className="text-xs opacity-60 mt-1">{selectedService.cat} • {selectedService.dept}</div>
            <div className="mt-6 grid md:grid-cols-2 gap-6 text-[13px]">
              <div><b>Overview</b><p className="opacity-70 mt-1">{selectedService.desc}. This page provides official Delhi government link, step-by-step guide, documents, fees, time.</p></div>
              <div><b>Official Link</b><div className="mt-2"><a href={selectedService.url} target="_blank" className="inline-flex px-4 py-2 rounded-full bg-[#ff6b00] text-black font-bold text-sm">Go to Official Website <ExternalLink size={14} className="ml-1"/></a><div className="text-[11px] opacity-50 mt-2">Only .gov.in / official bank website</div></div></div>
              <div><b>Documents Required</b><ul className="list-disc ml-4 opacity-70 mt-1">{(selectedService.docs||['Aadhaar','Address Proof']).map(d=> <li key={d}>{d}</li>)}</ul></div>
              <div><b>Fees & Time</b><p className="opacity-70 mt-1">Fees: {selectedService.fees}<br/>Time: {selectedService.time}</p></div>
              <div><b>Online Process</b><ol className="list-decimal ml-4 opacity-70 mt-1"><li>Open official link</li><li>Login with Mobile/Aadhaar</li><li>Fill form, upload docs</li><li>Pay fee, get acknowledgment</li></ol></div>
              <div><b>Important Notes</b><p className="opacity-70 mt-1">No agents needed. Free forever on SarkarSaathi. Last Updated: 27 July 2026</p></div>
            </div>
          </div>
        </div>
      )}

      {/* BANKING HUB */}
      {view==='banking' && (
        <div className="max-w-[1280px] mx-auto px-4 py-8">
          <button onClick={()=>setView('home')} className="px-3 py-1.5 rounded-full bg-[#1a1a1a] border border-[#333] text-xs mb-4">← Home</button>
          <h1 className="text-3xl font-black">Banking Hub • Complete Guides</h1>
          <p className="opacity-60 text-sm mt-2">Eligibility, documents, min balance, charges, time, benefits, official apply links — for all accounts.</p>

          <div className="mt-6 grid md:grid-cols-4 gap-3">
            {['Saving Account','Current Account','Salary Account','Zero Balance','NRE/NRO','Fixed Deposit','Recurring Deposit','PPF','NPS','Sukanya Samriddhi','Locker','Debit/Credit Card','UPI','Internet Banking','Nomination','KYC'].map(t=> (
              <div key={t} className="p-3 rounded-xl bg-[#161616] border border-[#222] text-[12px] font-medium">{t}<div className="text-[10px] opacity-50 mt-1">Guide + Official Link</div></div>
            ))}
          </div>

          <h2 className="font-bold mt-8 mb-3">Major Banks • Official Websites</h2>
          <div className="grid md:grid-cols-3 gap-3">
            {BANKS.map(b=> (
              <div key={b.code} className="p-4 rounded-2xl bg-[#161616] border border-[#222]">
                <div className="font-bold text-[14px]">{b.name}</div>
                <div className="text-[11px] opacity-60">{b.code} • IFSC {b.ifsc} • SWIFT {b.swift}</div>
                <div className="mt-3 flex gap-2">
                  <a href={b.url} target="_blank" className="text-[11px] px-3 py-1.5 rounded-full bg-white text-black font-bold">Official Website ↗</a>
                  <span className="text-[10px] px-2 py-1 rounded-full bg-[#222]">IFSC: {b.ifsc}</span>
                </div>
              </div>
            ))}
          </div>

          {selectedBank && (
            <div className="mt-8 p-6 rounded-2xl bg-[#1a1a1a] border border-[#333]">
              <h3 className="font-bold text-lg">{selectedBank.name} - Complete Details</h3>
              <div className="grid md:grid-cols-2 gap-4 mt-4 text-[13px]">
                <div>Eligibility: Indian resident, 18+<br/>Docs: Aadhaar, PAN, Photo<br/>Min Balance: Rs 0-1000<br/>Charges: As per bank<br/>Time: Instant-1 day</div>
                <div>Benefits: UPI, Netbanking, Debit Card<br/>Official: <a href={selectedBank.url} target="_blank" className="text-orange-400 underline">{selectedBank.url}</a><br/>IFSC: {selectedBank.ifsc}<br/>SWIFT: {selectedBank.swift}</div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* FINDERS HUB */}
      {view==='finders' && (
        <div className="max-w-[900px] mx-auto px-4 py-8">
          <button onClick={()=>setView('home')} className="px-3 py-1.5 rounded-full bg-[#1a1a1a] border border-[#333] text-xs mb-4">← Home</button>
          <h1 className="text-3xl font-black">Government Finders • 28 Tools</h1>
          
          <div className="mt-6 grid gap-6">
            <div className="p-5 rounded-2xl bg-[#161616] border border-[#222]">
              <h3 className="font-bold flex gap-2"><MapPin size={16} className="text-orange-500"/>PIN Code Finder - Bidirectional</h3>
              <p className="text-[12px] opacity-60 mt-1">Enter 110001 OR Lajpat Nagar - both work</p>
              <input value={pinQ} onChange={e=>setPinQ(e.target.value)} placeholder="110001 or Lajpat Nagar, Dwarka, Rohini..." className="mt-3 w-full p-3 rounded-xl bg-[#0f0f0f] border border-[#333] outline-none"/>
              {pinRes && <div className="mt-3 p-3 rounded-xl bg-[#0f0f0f] border border-orange-500/30"><div className="text-xl font-black text-orange-500">{pinRes.pin}</div><div className="text-sm">{pinRes.area}</div><div className="text-xs opacity-60">{pinRes.dist}</div></div>}
            </div>

            <div className="p-5 rounded-2xl bg-[#161616] border border-[#222]">
              <h3 className="font-bold flex gap-2"><Building size={16} className="text-blue-400"/>IFSC / SWIFT / MICR Finder - Bidirectional</h3>
              <p className="text-[12px] opacity-60 mt-1">Enter SBIN0000691 OR SBI/HDFC - both work</p>
              <input value={ifscQ} onChange={e=>setIfscQ(e.target.value)} placeholder="SBIN0000691 or SBI, HDFC, PNB..." className="mt-3 w-full p-3 rounded-xl bg-[#0f0f0f] border border-[#333] outline-none"/>
              {ifscRes && <div className="mt-3 p-3 rounded-xl bg-[#0f0f0f] border border-blue-500/30"><div className="font-bold text-blue-400">{ifscRes.ifsc || ifscRes.code}</div><div className="text-sm">{ifscRes.bank} - {ifscRes.branch}</div></div>}
              <div className="mt-3 text-[11px] opacity-50">MICR and SWIFT use same search. Official source: RBI - https://www.rbi.org.in/</div>
            </div>

            <div className="grid md:grid-cols-2 gap-3">
              {FINDERS.filter(f=> !['pincode','ifsc'].includes(f.id)).map(f=> (
                <a key={f.id} href={typeof f.route==='string' && f.route.startsWith('http') ? f.route : '#'} target="_blank" className="p-4 rounded-xl bg-[#161616] border border-[#222] text-sm hover:border-[#333] flex justify-between"><span>{f.name}</span><ExternalLink size={12} className="opacity-50"/></a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* LIFE EVENTS */}
      {view==='life' && (
        <div className="max-w-[900px] mx-auto px-4 py-8">
          <button onClick={()=>setView('home')} className="px-3 py-1.5 rounded-full bg-[#1a1a1a] border border-[#333] text-xs mb-4">← Home</button>
          <h1 className="text-3xl font-black">Life Events • Most Important Feature</h1>
          <p className="opacity-60 text-sm mt-2">Select your life situation - we auto-show required govt services, docs, fees, links, timeline.</p>
          <div className="mt-6 grid gap-3">
            {LIFE_EVENTS.map(ev=> (
              <div key={ev.id} onClick={()=>setSelectedLife(ev)} className="p-5 rounded-2xl bg-[#161616] border border-[#222] cursor-pointer hover:border-orange-500/30">
                <div className="font-bold">{ev.name}</div>
                <div className="text-[12px] opacity-60 mt-1">{ev.desc}</div>
                {selectedLife?.id===ev.id && (
                  <div className="mt-4 p-3 rounded-xl bg-[#0f0f0f] border border-[#333] text-[12px]">
                    <div className="font-semibold">Required Services:</div>
                    <ul className="list-disc ml-4 mt-2 opacity-80">
                      {ev.services.map(sid=> { const s=SERVICES.find(x=>x.id===sid); return <li key={sid}><a href={s?.url} target="_blank" className="text-orange-400 underline">{s?.name}</a> - {s?.desc}</li>})}
                    </ul>
                    <div className="mt-3">Documents: Aadhaar, Address Proof, Photos<br/>Fees: As per service<br/>Timeline: 7-21 days<br/>Official Links: All .gov.in only</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="mt-16 border-t border-[#222] bg-[#0a0a0a]">
        <div className="max-w-[1280px] mx-auto px-4 py-10 grid md:grid-cols-5 gap-8 text-[12px]">
          <div><div className="font-black">SarkarSaathi.org</div><div className="opacity-60 mt-2">सभी सरकारी काम एक जगह, बिल्कुल फ्री<br/>India's Most Trusted Govt Life Assistant<br/>Free Forever • No Login • No Data Stored</div></div>
          <div><div className="font-bold">Services</div><div className="opacity-60 mt-2 space-y-1"><div>Identity & Documents</div><div>Certificates</div><div>Vehicles</div><div>Property</div><div>Utilities</div><div>Banking</div></div></div>
          <div><div className="font-bold">Finders & Tools</div><div className="opacity-60 mt-2 space-y-1"><div>PIN Code Finder</div><div>IFSC Finder</div><div>SWIFT Finder</div><div>Police Station Finder</div><div>Calculators</div></div></div>
          <div><div className="font-bold">Company</div><div className="opacity-60 mt-2 space-y-1"><div>About Us</div><div>Contact Us</div><div>Privacy Policy</div><div>Disclaimer</div><div>Terms</div><div>Sitemap</div></div></div>
          <div><div className="font-bold">Delhi Govt</div><div className="opacity-60 mt-2 space-y-1"><div>MCD</div><div>DJB</div><div>DDA</div><div>Delhi Police</div><div>Transport Dept</div><div>Revenue Dept</div></div></div>
        </div>
        <div className="text-center py-4 border-t border-[#1a1a1a] text-[11px] opacity-40">© 2026 SarkarSaathi.org • Only Official .gov.in Links • Last Updated: 27 July 2026 • Built for next 20 years • Phase 1: Delhi • Future: All India States</div>
      </footer>
    </div>
  )
}
