import React from 'react';
import { Calendar } from 'lucide-react';

const DeadlineBanner: React.FC = () => {
  const deadlines = [
    { date: "June 15", event: "Q2 Estimated Tax Payments Due" },
    { date: "Sept 15", event: "Q3 Estimated Tax Payments Due" },
    { date: "Oct 15", event: "Extended Returns Due" }
  ];

  return (
    <div className="bg-[#F9F7F2] py-3 border-y border-[#A66D5E]/10 flex overflow-hidden whitespace-nowrap">
      <div className="flex items-center gap-8 md:gap-12 animate-marquee min-w-full justify-around px-4 shrink-0">
        {deadlines.map((d, i) => (
          <div key={i} className="flex items-center gap-2 text-[#A66D5E]">
            <Calendar className="w-3.5 h-3.5 opacity-60 shrink-0" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium">
              <span className="font-bold">{d.date}:</span> {d.event}
            </span>
          </div>
        ))}
      </div>
      <div aria-hidden="true" className="flex items-center gap-8 md:gap-12 animate-marquee min-w-full justify-around px-4 shrink-0">
        {deadlines.map((d, i) => (
          <div key={i} className="flex items-center gap-2 text-[#A66D5E]">
            <Calendar className="w-3.5 h-3.5 opacity-60 shrink-0" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium">
              <span className="font-bold">{d.date}:</span> {d.event}
            </span>
          </div>
        ))}
      </div>
      <style>{`
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
};

export default DeadlineBanner;
