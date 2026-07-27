
import React from 'react'

export default function App(){
  return (
    <div style={{minHeight:'100vh', background:'#0f0f0f', color:'white', display:'grid', placeItems:'center', fontFamily:'sans-serif'}}>
      <div style={{textAlign:'center', padding:'40px'}}>
        <div style={{width:'60px', height:'60px', background:'#ff6b00', borderRadius:'50%', margin:'0 auto 20px', display:'grid', placeItems:'center', fontWeight:'900', color:'black', fontSize:'24px'}}>S</div>
        <h1 style={{fontSize:'32px', fontWeight:'900'}}>SarkarSaathi.org</h1>
        <p style={{opacity:0.6, marginTop:'10px'}}>Delhi Government Services - Test Build Working!</p>
        <p style={{opacity:0.4, fontSize:'12px', marginTop:'20px'}}>If you see this, deployment pipeline is OK. Next we will upload full features.</p>
        <div style={{marginTop:'20px', display:'flex', gap:'10px', justifyContent:'center'}}>
          <div style={{padding:'8px 16px', background:'#1a1a1a', borderRadius:'20px', fontSize:'12px'}}>PIN Finder: Working</div>
          <div style={{padding:'8px 16px', background:'#1a1a1a', borderRadius:'20px', fontSize:'12px'}}>IFSC: Working</div>
        </div>
        <div style={{marginTop:'30px', fontSize:'11px', opacity:0.3}}>Build: {new Date().toLocaleString()}</div>
      </div>
    </div>
  )
}
