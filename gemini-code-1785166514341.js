import React from 'react';
import { BANKING_HUB_DATA } from '../data/bankingData';
import { SchemaOrg } from '../components/common/SchemaOrg';
import { ExternalLink, Landmark, Check } from 'lucide-react';

export const BankingHub = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <SchemaOrg
        title="Official Banking Hub India | Accounts, Schemes & KYC - SarkarSaathi"
        description="Complete guide to SBI, HDFC, PNB, ICICI Accounts, Zero Balance Accounts, PPF, NPS, and official direct links."
        canonicalUrl="https://sarkarsaathi.org/delhi/banking"
      />

      <div className="mb-8 text-center max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-white mb-3">Official Indian Banking Directory</h1>
        <p className="text-sm text-sarkar-textMuted">
          Compare public and private sector bank account requirements, minimum balance rules, charges, and direct official application portals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {BANKING_HUB_DATA.map((bank, idx) => (
          <div key={idx} className="bg-sarkar-card border border-sarkar-border rounded-xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-3">
                <div>
                  <span className="text-[10px] text-sarkar-orange font-bold uppercase tracking-wider">{bank.category}</span>
                  <h2 className="text-xl font-bold text-white">{bank.bankName}</h2>
                </div>
                <Landmark className="w-6 h-6 text-sarkar-orange" />
              </div>

              <div className="space-y-2 text-xs mb-6">
                <div className="p-2.5 bg-sarkar-dark rounded-lg">
                  <span className="text-sarkar-textMuted block">Account Type:</span>
                  <span className="font-semibold text-white">{bank.accountType}</span>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2.5 bg-sarkar-dark rounded-lg">
                    <span className="text-sarkar-textMuted block">Min. Balance:</span>
                    <span className="font-semibold text-white">{bank.minBalance}</span>
                  </div>
                  <div className="p-2.5 bg-sarkar-dark rounded-lg">
                    <span className="text-sarkar-textMuted block">Processing Time:</span>
                    <span className="font-semibold text-white">{bank.processingTime}</span>
                  </div>
                </div>

                <div className="p-2.5 bg-sarkar-dark rounded-lg">
                  <span className="text-sarkar-textMuted block">Official Charges:</span>
                  <span className="font-semibold text-white">{bank.charges}</span>
                </div>
              </div>

              <div className="mb-6">
                <span className="text-xs font-semibold text-white block mb-2">Key Benefits:</span>
                <ul className="space-y-1">
                  {bank.benefits.map((b, i) => (
                    <li key={i} className="text-xs text-sarkar-textMuted flex items-center">
                      <Check className="w-3.5 h-3.5 text-sarkar-orange mr-1.5" /> {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <a
              href={bank.officialApplyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-sarkar-orange hover:bg-sarkar-orangeHover text-white font-bold text-xs py-3 rounded-lg flex items-center justify-center transition-colors"
            >
              Open Account Online (Official Bank Link) <ExternalLink className="w-3.5 h-3.5 ml-2" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};