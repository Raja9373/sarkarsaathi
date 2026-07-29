import React from 'react';
import { Zap, ExternalLink, CheckCircle2, ShieldCheck } from 'lucide-react';

export const OnlineApplyHub: React.FC = () => {
  const applyServices = [
    { title: 'Fresh Passport & Renewal', dept: 'Passport Seva MEA', url: 'https://www.passportindia.gov.in', fee: '₹1,500', time: '7 to 21 Days' },
    { title: 'Instant e-PAN Card (Free)', dept: 'Income Tax e-Filing', url: 'https://www.incometax.gov.in', fee: 'Free (₹0)', time: '10 Minutes' },
    { title: 'Delhi Learner Driving Licence', dept: 'Delhi Transport Dept', url: 'https://sarathi.parivahan.gov.in', fee: '₹500', time: 'Same Day' },
    { title: 'Income Certificate Delhi', dept: 'e-District Delhi Revenue', url: 'https://edistrict.delhigovt.nic.in', fee: 'Free (₹0)', time: '14 Days' },
    { title: 'RTI Online Application & Appeal', dept: 'Delhi RTI Portal', url: 'https://rtionline.delhi.gov.in/', fee: '₹10', time: '30 Days Statutory' },
    { title: 'Delhi Marriage Registration', dept: 'SDM Revenue Dept Delhi', url: 'https://edistrict.delhigovt.nic.in', fee: '₹100 (Normal)', time: '15 Days' },
    { title: 'Book HSRP & Color Sticker', dept: 'Book-MY-HSRP Delhi / UP', url: 'https://bookmyhsrp.com', fee: '₹300 - ₹800', time: '3 to 5 Days (Home Fitment)' },
    { title: 'Udyam MSME Registration', dept: 'Ministry of MSME', url: 'https://udyamregistration.gov.in', fee: 'Free (₹0)', time: 'Instant' },
    { title: 'FSSAI Food Licence (FoSCoS)', dept: 'FSSAI Govt of India', url: 'https://foscos.fssai.gov.in/', fee: '₹100 - ₹5,000', time: '7 to 15 Days' },
    { title: 'GST New Business Registration', dept: 'GST Council India', url: 'https://www.gst.gov.in', fee: 'Free (₹0)', time: '3 to 7 Days' },
    { title: 'MCD Trade Health Licence', dept: 'Municipal Corp of Delhi', url: 'https://mcdonline.nic.in', fee: 'As per trade', time: '7 Days' },
    { title: 'Retail & Wholesale Drug License', dept: 'Delhi Drugs Control', url: 'https://drugs.delhi.gov.in/', fee: '₹3,000', time: '30 Days' }
  ];

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto bg-[#0B0F17] text-zinc-100">
      <div className="mb-8 border-b border-zinc-800 pb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF6B00]/10 text-[#FF6B00] border border-[#FF6B00]/30 text-xs font-bold uppercase mb-2">
          <Zap className="w-3.5 h-3.5" /> Direct Official Router
        </div>
        <h2 className="text-3xl font-black text-white">Online Application Hub</h2>
        <p className="text-sm text-zinc-400 mt-1 max-w-2xl">
          Apply online directly on official .gov.in portals for Passport, PAN, Driving Licence, Delhi Income Certificate, Marriage Registration, and GST.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {applyServices.map((item, idx) => (
          <div key={idx} className="p-5 rounded-2xl bg-[#121824] border border-zinc-800 hover:border-[#FF6B00]/50 transition space-y-3 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800 block w-fit mb-2">
                {item.dept}
              </span>
              <h3 className="text-base font-bold text-white">{item.title}</h3>
              <div className="mt-3 space-y-1 text-xs text-zinc-400">
                <p>Govt Fee: <strong className="text-emerald-400">{item.fee}</strong></p>
                <p>Processing Time: <strong className="text-zinc-200">{item.time}</strong></p>
              </div>
            </div>

            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#E65100] text-white text-xs font-bold shadow-lg hover:brightness-110 transition flex items-center justify-center gap-2"
            >
              <span>Apply On Official .gov.in</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
