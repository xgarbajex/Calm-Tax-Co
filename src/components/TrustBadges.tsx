import React from 'react';
import { ShieldCheck, Lock, FileCheck, UserCheck, Globe } from 'lucide-react';

const TrustBadges: React.FC = () => {
  const badges = [
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      text: "Secure & Confidential"
    },
    {
      icon: <Globe className="w-5 h-5" />,
      text: "Serving all 50 states"
    },
    {
      icon: <UserCheck className="w-5 h-5" />,
      text: "IRS PTIN Holder"
    },
    {
      icon: <FileCheck className="w-5 h-5" />,
      text: "IRS Authorized E\u2011File\u00a0Provider"
    },
    {
      icon: <Lock className="w-5 h-5" />,
      text: "Secure File Uploads"
    }
  ];

  return (
    <div className="pt-16 flex flex-col md:flex-row md:flex-nowrap items-center justify-center gap-y-4 md:gap-x-6 lg:gap-x-8 max-w-full px-4 pb-2">
      {badges.map((badge, index) => (
        <div 
          key={index} 
          className="flex items-center gap-2 text-[#7D8E7E] whitespace-nowrap opacity-90 hover:opacity-100 transition-opacity duration-300"
        >
          <div className="flex-none text-[#7D8E7E]">
            {badge.icon}
          </div>
          <span className="text-[10px] sm:text-[11px] md:text-xs uppercase tracking-[0.15em] font-medium text-[#59524F]">
            {badge.text}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TrustBadges;
