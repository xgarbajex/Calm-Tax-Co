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
    <div className="pt-12 flex flex-row flex-wrap md:flex-nowrap items-center justify-center gap-4 md:gap-6 lg:gap-8 max-w-full overflow-x-auto md:overflow-visible no-scrollbar">
      {badges.map((badge, index) => (
        <div key={index} className="flex items-center gap-2 text-[#7D8E7E] whitespace-nowrap">
          <div className="flex-none">
            {badge.icon}
          </div>
          <span className="text-[10px] lg:text-[11px] uppercase tracking-[0.12em] md:tracking-[0.15em] font-medium">
            {badge.text}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TrustBadges;
