
import React, { useState, useMemo } from 'react'
import { Search, MapPin, Building, FileText, CreditCard, Users, Heart, GraduationCap, Scale, Banknote, Globe, Mail, Phone, Clock, Shield, Check, Copy, ExternalLink, X, Menu } from 'lucide-react'

// --- DATA ---
const SERVICES = [
  {id:'ration', name:'Ration Card', cat:'Food & Civil Supplies', icon: FileText, url:'https://nfs.delhi.gov.in', desc:'Apply for ration card, check status'},
  {id:'electricity', name:'Electricity Bill', cat:'BSES / TPDDL', icon: Building, url:'https://www.bsesdelhi.com', desc:'Pay electricity bill'},
  {id:'water', name:'Delhi Jal Board', cat:'Water', icon: Building, url:'https://djb.gov.in', desc:'Water bill payment'},
  {id:'mcd', name:'MCD Property Tax', cat:'Municipal', icon: Building, url:'https://mcdonline.nic.in', desc:'Pay property tax'},
  {id:'dtc', name:'DTC Bus Pass', cat:'Transport', icon: Building, url:'https://dtc.delhi.gov.in', desc:'Bus pass services'},
  {id:'driving', name:'Driving License', cat:'Vehicles', icon: CreditCard, url:'https://parivahan.gov.in', desc:'DL services'},
  {id:'rc', name:'Vehicle RC', cat:'Vehicles', icon: CreditCard, url:'https://parivahan.gov.in', desc:'RC status, transfer'},
  {id:'aadhaar', name:'Aadhaar Services', cat:'Identity', icon: CreditCard, url:'https://myaadhaar.uidai.gov.in', desc:'Update Aadhaar'},
  {id:'pan', name:'PAN Card', cat:'Identity', icon: CreditCard, url:'https://www.tin-nsdl.com', desc:'PAN apply / correction'},
  {id:'voter', name:'Voter ID', cat:'Identity', icon: Users, url:'https://voters.eci.gov.in', desc:'Voter registration'},
  {id:'epfo', name:'EPFO / PF', cat:'Employment', icon: Banknote, url:'https://www.epfindia.gov.in', desc:'PF balance, claim'},
  {id:'esic', name:'ESIC', cat:'Employment', icon: Heart, url:'https://www.esic.in', desc:'ESIC services'},
  {id:'scholarship', name:'Scholarship', cat:'Education', icon: GraduationCap, url:'https://scholarships.gov.in', desc:'Scholarship schemes'},
  {id:'court', name:'Court Case Status', cat:'Legal', icon: Scale, url:'https://ecourts.gov.in', desc:'Case status'},
]

const PIN_DATA: any = {
  '110001': {area:'Connaught Place, New Delhi', district:'Central Delhi'},
  '110025': {area:'Lajpat Nagar', district:'South Delhi'},
  '110092': {area:'Laxmi Nagar', district:'East Delhi'},
  '110075': {area:'Dwarka', district:'South West Delhi'},
  '110085': {area:'Rohini', district:'North West Delhi'},
}
const AREA_TO_PIN: any = {'connaught place':'110001','lajpat nagar':'110025','laxmi nagar':'110092','dwarka':'110075','rohini':'110085'}

const IFSC_DATA: any = {
  'SBIN0000691': {bank:'State Bank of India', branch:'Connaught Place'},
  'HDFC0000003': {bank:'HDFC Bank', branch:'K G Marg'},
  'ICIC0000007': {bank:'ICICI Bank', branch:'Connaught Place'},
}
const BANK_TO_IFSC: any = {'state bank of india':'SBIN0000691','sbi':'SBIN0000691','hdfc':'HDFC0000003','icici':'ICIC0000007'}

export default function App(){
  const [q, setQ] = useState('')
  const [page, setPage] = useState('home')
  const [pinInput, setPinInput] = useState('')
  const [ifscInput, setIfscInput] = useState('')
  const [swiftInput, setSwiftInput] = useState('')

  const filtered = useMemo(()=> SERVICES.filter(s=> s.name.toLowerCase().includes(q.toLowerCase()) || s.cat.toLowerCase().includes(q.toLowerCase())), [q])

  const pinResult = useMemo(()=>{
    const v = pinInput.trim().toLowerCase()
    if(!v) return null
    if(PIN_DATA[v.toUpperCase()]) return {pin:v.toUpperCase(), ...PIN_DATA[v.toUpperCase()]}
    if(AREA_TO_PIN[v]) { const pin=AREA_TO_PIN[v]; return {pin, ...PIN_DATA[pin], area:v} }
    for(const [area,pin] of Object.entries(AREA_TO_PIN)){ if(v.includes(area) || area.includes(v)) return {pin, ...PIN_DATA[pin as string]} }
    return null
  },[pinInput])

  const ifscResult = useMemo(()=>{
    const v = ifscInput.trim().toUpperCase()
    const vl = ifscInput.trim().toLowerCase()
    if(!v) return null
    if(IFSC_DATA[v]) return {ifsc:v, ...IFSC_DATA[v]}
    if(BANK_TO_IFSC[vl]) { const code=BANK_TO_IFSC[vl]; return {ifsc:code, ...IFSC_DATA[code]} }
    for(const [bank,code] of Object.entries(BANK_TO_IFSC)){ if(vl.includes(bank) || bank.includes(vl)) return {ifsc:code, ...IFSC_DATA[code as string]} }
    return null
  },[ifscInput])

  return (
    <div style={{minHeight:'100vh', background:'#0f0f0f', color:'#fff', fontFamily:'system-ui'}}>
      <header style={{position:'sticky', top:0, zIndex:50, background:'#0f0f0f', borderBottom:'1px solid #222', padding:'12px 20px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <div style={{display:'flex', alignItems:'center', gap:'10px', cursor:'pointer'}} onClick={()=>setPage('home')}>
          <div style={{width:'36px', height:'36px', background:'#ff6b00', borderRadius:'50%', display:'grid', placeItems:'center', fontWeight:900, color:'#000'}}>S</div>
          <b>SarkarSaathi.org</b>
        </div>
        <div style={{display:'flex', gap:'8px'}}>
          <button onClick={()=>setPage('pin')} style={{padding:'6px 12px', borderRadius:'20px', background:'#1a1a1a', border:'1px solid #333', color:'#fff', cursor:'pointer'}}>PIN Finder</button>
          <button onClick={()=>setPage('ifsc')} style={{padding:'6px 12px', borderRadius:'20px', background:'#1a1a1a', border:'1px solid #333', color:'#fff', cursor:'pointer'}}>IFSC</button>
        </div>
      </header>

      {page==='home' && (
        <div style={{maxWidth:'1100px', margin:'0 auto', padding:'30px 20px'}}>
          <h1 style={{fontSize:'42px', fontWeight:900, lineHeight:1.1}}>Delhi Government<br/><span style={{color:'#ff6b00'}}>Services Made Easy</span></h1>
          <p style={{opacity:0.6, marginTop:'12px', maxWidth:'600px'}}>All Delhi Govt services, bill payments, certificates, PIN/IFSC/SWIFT finders at one place. Fast, simple, mobile friendly.</p>

          <div style={{marginTop:'24px', position:'relative', maxWidth:'600px'}}>
            <Search style={{position:'absolute', left:'12px', top:'12px', opacity:0.4}} size={18}/>
            <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search Ration, Electricity, Aadhaar, PAN..." style={{width:'100%', padding:'12px 12px 12px 40px', borderRadius:'12px', background:'#1a1a1a', border:'1px solid #333', color:'#fff', outline:'none'}}/>
          </div>

          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(250px,1fr))', gap:'16px', marginTop:'30px'}}>
            {filtered.map(s=>{
              const Icon = s.icon
              return (
                <a key={s.id} href={s.url} target="_blank" style={{textDecoration:'none', background:'#1a1a1a', border:'1px solid #222', borderRadius:'16px', padding:'16px', color:'#fff'}}>
                  <div style={{display:'flex', gap:'12px', alignItems:'center'}}>
                    <div style={{width:'40px', height:'40px', background:'#222', borderRadius:'10px', display:'grid', placeItems:'center'}}><Icon size={20} color="#ff6b00"/></div>
                    <div><div style={{fontWeight:700}}>{s.name}</div><div style={{fontSize:'11px', opacity:0.5}}>{s.cat}</div></div>
                  </div>
                  <div style={{fontSize:'12px', opacity:0.6, marginTop:'10px'}}>{s.desc}</div>
                </a>
              )
            })}
          </div>

          <div style={{marginTop:'40px', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'16px'}}>
            <div onClick={()=>setPage('pin')} style={{background:'linear-gradient(135deg,#ff6b00,#ff9a00)', borderRadius:'16px', padding:'20px', cursor:'pointer', color:'#000'}}>
              <MapPin/><b style={{display:'block', marginTop:'8px'}}>PIN Code Finder</b><div style={{fontSize:'12px'}}>PIN ↔ Area bidirectional</div>
            </div>
            <div onClick={()=>setPage('ifsc')} style={{background:'linear-gradient(135deg,#1e90ff,#00c6ff)', borderRadius:'16px', padding:'20px', cursor:'pointer', color:'#000'}}>
              <Building/><b style={{display:'block', marginTop:'8px'}}>IFSC Finder</b><div style={{fontSize:'12px'}}>IFSC ↔ Bank bidirectional</div>
            </div>
          </div>
        </div>
      )}

      {page==='pin' && (
        <div style={{maxWidth:'700px', margin:'0 auto', padding:'30px 20px'}}>
          <button onClick={()=>setPage('home')} style={{background:'#1a1a1a', border:'1px solid #333', color:'#fff', padding:'6px 12px', borderRadius:'20px'}}>← Home</button>
          <h2 style={{fontSize:'28px', fontWeight:800, marginTop:'20px'}}>PIN Code Finder - Bidirectional</h2>
          <p style={{opacity:0.6, fontSize:'13px'}}>Enter 110001 OR Lajpat Nagar - both work</p>
          <input value={pinInput} onChange={e=>setPinInput(e.target.value)} placeholder="Enter PIN (110001) or Area (Lajpat Nagar)" style={{width:'100%', marginTop:'16px', padding:'14px', borderRadius:'12px', background:'#1a1a1a', border:'1px solid #333', color:'#fff'}}/>
          {pinResult && <div style={{marginTop:'16px', background:'#1a1a1a', border:'1px solid #222', borderRadius:'12px', padding:'16px'}}><div style={{fontSize:'24px', fontWeight:800, color:'#ff6b00'}}>{pinResult.pin}</div><div>{pinResult.area}</div><div style={{opacity:0.5, fontSize:'12px'}}>{pinResult.district}</div></div>}
          {!pinResult && pinInput && <div style={{marginTop:'16px', opacity:0.5, fontSize:'13px'}}>Not found. Try 110001, Lajpat Nagar, Dwarka, Rohini</div>}
        </div>
      )}

      {page==='ifsc' && (
        <div style={{maxWidth:'700px', margin:'0 auto', padding:'30px 20px'}}>
          <button onClick={()=>setPage('home')} style={{background:'#1a1a1a', border:'1px solid #333', color:'#fff', padding:'6px 12px', borderRadius:'20px'}}>← Home</button>
          <h2 style={{fontSize:'28px', fontWeight:800, marginTop:'20px'}}>IFSC / SWIFT Finder - Bidirectional</h2>
          <p style={{opacity:0.6, fontSize:'13px'}}>Enter SBIN0000691 OR SBI - both work</p>
          <input value={ifscInput} onChange={e=>setIfscInput(e.target.value)} placeholder="Enter IFSC (SBIN0000691) or Bank (SBI, HDFC)" style={{width:'100%', marginTop:'16px', padding:'14px', borderRadius:'12px', background:'#1a1a1a', border:'1px solid #333', color:'#fff'}}/>
          {ifscResult && <div style={{marginTop:'16px', background:'#1a1a1a', border:'1px solid #222', borderRadius:'12px', padding:'16px'}}><div style={{fontSize:'18px', fontWeight:800, color:'#1e90ff'}}>{ifscResult.ifsc}</div><div>{ifscResult.bank} - {ifscResult.branch}</div></div>}
          {!ifscResult && ifscInput && <div style={{marginTop:'16px', opacity:0.5, fontSize:'13px'}}>Not found. Try SBIN0000691 or SBI, HDFC, ICICI</div>}

          <h3 style={{marginTop:'30px', fontWeight:700}}>SWIFT Code</h3>
          <input value={swiftInput} onChange={e=>setSwiftInput(e.target.value)} placeholder="Enter SWIFT like SBININBB" style={{width:'100%', marginTop:'10px', padding:'14px', borderRadius:'12px', background:'#1a1a1a', border:'1px solid #333', color:'#fff'}}/>
          {swiftInput && <div style={{marginTop:'10px', background:'#1a1a1a', padding:'12px', borderRadius:'12px', fontSize:'13px', opacity:0.7}}>Demo: {swiftInput.toUpperCase()} - State Bank of India, Mumbai</div>}
        </div>
      )}

      <footer style={{textAlign:'center', padding:'40px 20px', opacity:0.3, fontSize:'12px', borderTop:'1px solid #222', marginTop:'50px'}}>SarkarSaathi.org - Delhi Govt Services | Build v9 Guaranteed | No Blank</footer>
    </div>
  )
}
