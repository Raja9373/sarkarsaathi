import React from 'react';
import { ShieldCheck, CircleDollarSign, UserX, DatabaseZap, Clock, FileCheck } from 'lucide-react';

export const TrustBadges = () => {
  const badges = [
    { icon: ShieldCheck, text: "100% Official Links" },
    { icon: CircleDollarSign, text: "No Fees" },
    { icon: UserX, text: "No Login Required" },
    { icon: DatabaseZap, text: "No Data Stored" },
    { icon: Clock, text: "Free Forever" },
    { icon: FileCheck, text: "Step-by-Step Guides" },
  ];

  return (
    <div className="w-full bg-sarkar-card border-y border-sarkar-border py-4 my-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
        {badges.map((b, idx) => {
          const Icon = b.icon;
          return (
            <div key={idx} className="flex items-center justify-center space-x-2 text-sarkar-textLight text-xs sm:text-sm font-medium">
              <Icon className="w-5 h-5 text-sarkar-orange flex-shrink-0" />
              <span>{b.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};