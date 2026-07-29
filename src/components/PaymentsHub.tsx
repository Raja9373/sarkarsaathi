import React from 'react';
import { CreditCard, ExternalLink, ShieldCheck, Zap, Building2, Car, Landmark } from 'lucide-react';

export const PaymentsHub: React.FC = () => {
  const paymentPortals = [
    { title: 'MCD Property Tax Delhi', icon: <Building2 className="w-5 h-5 text-cyan-400" />, dept: 'Municipal Corporation of Delhi', url: 'https://mcdonline.nic.in', desc: 'Pay annual residential & commercial property tax, UPIC tax calculation & download G-8 receipt.' },
    { title: 'Delhi Jal Board Water Bill', icon: <Zap className="w-5 h-5 text-blue-400" />, dept: 'Delhi Jal Board (DJB)', url: 'https://djb.gov.in/DJBRMSPortal/', desc: 'Pay water bill by 10-digit KNO account number, view meter history & receipt.' },
    { title: 'Electricity Bill (BSES / TPDDL)', icon: <Zap className="w-5 h-5 text-amber-400" />, dept: 'BSES Rajdhani / Yamuna / Tata Power', url: 'https://www.bsesdelhi.com', desc: 'Pay Delhi electricity bills, apply power subsidy opt-in registration.' },
    { title: 'Delhi Traffic Police Challan', icon: <Car className="w-5 h-5 text-rose-400" />, dept: 'Delhi Traffic Police & Virtual Courts', url: 'https://echallan.parivahan.gov.in', desc: 'Pay speed camera e-challan or contest in Delhi Virtual Court online.' },
    { title: 'e-Stamp Duty & Registration Fee', icon: <Landmark className="w-5 h-5 text-emerald-400" />, dept: 'Stock Holding Corp / Revenue Dept', url: 'https://www.stockholding.com', desc: 'Pay Delhi property sale deed e-stamp duty and book Sub-Registrar slot.' },
    { title: 'Court Fees & Legal Stamps', icon: <CreditCard className="w-5 h-5 text-purple-400" />, dept: 'Delhi High Court / e-Courts', url: 'https://www.e-courts.gov.in', desc: 'Pay e-Court fee and advocate stamp duty online for Delhi courts.' }
  ];

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto bg-[#0B0F17] text-zinc-100">
      <div className="mb-8 border-b border-zinc-800 pb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-800/60 text-xs font-bold uppercase mb-2">
          <CreditCard className="w-3.5 h-3.5" /> Official Payments Directory
        </div>
        <h2 className="text-3xl font-black text-white">Government Bill & Tax Payments</h2>
        <p className="text-sm text-zinc-400 mt-1 max-w-2xl">
          Direct official portals to pay MCD Property Tax, Delhi Jal Board Water Bill, BSES Electricity Bill, Traffic Challan, and e-Stamp Duty safely.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {paymentPortals.map((item, idx) => (
          <div key={idx} className="p-6 rounded-2xl bg-[#121824] border border-zinc-800 hover:border-[#FF6B00]/50 transition space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800">
                  {item.icon}
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800 font-semibold">
                  {item.dept}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
            </div>

            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-[#FF6B00]/15 hover:bg-[#FF6B00]/25 border border-[#FF6B00]/40 text-[#FF6B00] text-xs font-bold transition flex items-center justify-center gap-2"
            >
              <span>Pay On Official Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
