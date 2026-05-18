import React from 'react';
import { ArrowRight } from 'lucide-react';

const WhoWeAreNot: React.FC = () => {
  const items = [
    "S-corp returns or complex business entity structures",
    "Significant cryptocurrency or NFT activity",
    "International filings including FBAR, FATCA, or foreign income",
    "Audit representation",
    "Tax planning or strategy beyond return preparation",
    "Real estate professional status or other specialized areas"
  ];

  return (
    <section className="py-16 px-6 bg-[#F9F7F2]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl serif-font text-[#3C3633] mb-4">A few situations we refer out</h2>
        <p className="text-[#5D6D7E] text-base max-w-2xl mb-8 leading-relaxed">
          Honesty saves everyone time. There are situations we don't currently take on because they are better served by someone with different specialization. We expect this list to shrink as the practice grows.
        </p>
        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-2 mb-8">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-3 text-[#3C3633] py-3 border-b border-[#3C3633]/5 group">
              <ArrowRight className="w-4 h-4 text-[#7D8E7E]/50 transition-transform group-hover:translate-x-1" />
              <span className="text-sm md:text-base">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-[#5D6D7E]/70 italic text-sm">
          If you're unsure if you situation is covered, feel free to reach out.
        </p>
      </div>
    </section>
  );
};

export default WhoWeAreNot;
