import React from 'react';
import { Calendar } from 'lucide-react';

const DeadlineBanner: React.FC = () => {
  const deadlines = [
    { date: "June 15", event: "Q2 Estimated Tax Payments Due" },
    { date: "Sept 15", event: "Q3 Estimated Tax Payments Due" },
    { date: "Oct 15", event: "Extended Returns Due" }
  ];

  return (
    <div className="bg-[#F9F7F2] py-4 border-y border-[#A66D5E]/10">
      <div className="max-w-7xl mx-auto px-6 overflow-hidden relative">
        <div className="flex flex-wrap items-center justify-center gap-6 whitespace-normal md:whitespace-nowrap md:gap-12 md:animate-marquee">
          {deadlines.map((d, i) => (
            <div key={i} className="flex items-center gap-3 text-[#A66D5E]">
              <Calendar className="w-4 h-4 opacity-60" />
              <span className="text-xs uppercase tracking-[0.2em] font-medium">
                <span className="font-bold">{d.date}:</span> {d.event}
              </span>
            </div>
          ))}
          {/* Duplicate for seamless loop if needed, but for a fixed width it might just center */}
        </div>
      </div>
      <style>{`
        @media (min-width: 768px) {
          .animate-marquee {
            animation: marquee 20s linear infinite alternate;
          }
        }
        @keyframes marquee {
          0% { transform: translateX(10%); }
          100% { transform: translateX(-10%); }
        }
      `}</style>
    </div>
  );
};

export default DeadlineBanner;
