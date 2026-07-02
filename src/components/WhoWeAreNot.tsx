import React from 'react';
import { ArrowRight } from 'lucide-react';

const WhoWeAreNot: React.FC = () => {
  const items = [
    "S-corporations and other complex business entities",
    "Significant cryptocurrency or NFT activity",
    "International filings including FBAR, FATCA, or foreign income",
    "Audit representation",
    "Tax planning or strategy beyond return preparation",
    "Real estate professional status or other specialized areas"
  ];

  return (
    <section className="py-32 px-6 bg-[#F9F7F2]">
      <div className="max-w-5xl mx-auto text-center bg-white p-6 md:py-8 md:px-12 rounded-[2.5rem] border border-[#3C3633]/20 shadow-md">
        <h2 className="text-3xl serif-font text-[#3C3633] mb-4">A few situations we refer out</h2>
        <div className="w-16 h-px bg-[#3C3633]/20 mx-auto mb-5" />
        <p className="text-[#4A4542] text-base max-w-3xl mb-6 leading-relaxed mx-auto">
          Honesty saves everyone time. Some tax situations are better served by a preparer with specialized experience. As Calm Tax grows, we expect this list to become smaller.
        </p>
        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-1 mb-6 text-left">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-3 text-[#3C3633] py-1.5 border-b border-[#3C3633]/15 group">
              <ArrowRight className="w-4 h-4 text-[#7D8E7E] transition-transform group-hover:translate-x-1" />
              <span className="text-sm md:text-base font-medium">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-[#4A4542]/80 italic text-sm mx-auto">
          If you're unsure whether your situation is covered, feel free to reach out.
        </p>
      </div>
    </section>
  );
};

export default WhoWeAreNot;
