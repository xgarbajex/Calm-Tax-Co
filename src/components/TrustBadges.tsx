import React from 'react';
import { ShieldCheck, Lock, FileCheck, UserCheck } from 'lucide-react';

const TrustBadges: React.FC = () => {
  const badges = [
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      text: "Secure & Confidential"
    },
    {
      icon: <UserCheck className="w-5 h-5" />,
      text: "IRS Registered Tax Preparer"
    },
    {
      icon: <FileCheck className="w-5 h-5" />,
      text: "IRS Authorized E\u2011File\u00a0Provider"
    },
    {
      icon: <Lock className="w-5 h-5" />,
      text: "Encrypted Communications"
    }
  ];

  return (
    <div className="pt-12 flex flex-wrap items-center justify-center gap-8 md:gap-12">
      {badges.map((badge, index) => (
        <div key={index} className="flex items-center gap-3 text-[#7D8E7E]">
          <div className="p-2 bg-[#F9F7F2] rounded-full border border-[#3C3633]/5 flex items-center justify-center">
            {badge.icon}
          </div>
          <span className="text-[12px] uppercase tracking-[0.15em] font-medium leading-tight text-left max-w-[130px]">
            {badge.text}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TrustBadges;
