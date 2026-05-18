import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      title: "A short intake form",
      desc: "A few questions about your year. Usually takes about five minutes via email."
    },
    {
      title: "Secure document upload",
      desc: "Upload your documents to your personal encrypted folder whenever you're ready. We discuss questions in writing so nothing gets lost or forgotten."
    },
    {
      title: "Quote & upfront payment",
      desc: "We will provide you with a finalized quote. Once payment is received, we proceed with preparing your return."
    },
    {
      title: "We prepare your return",
      desc: "We review everything carefully, research any questions, and reach out via email for any clarification we may need."
    },
    {
      title: "E-file",
      desc: "You'll receive a copy of your return and any other documentation through your secure upload folder."
    }
  ];

  return (
    <section id="how-it-works" className="py-32 px-6 bg-[#F9F7F2]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl serif-font text-[#3C3633] mb-4">How it works</h2>
          <p className="text-[#5D6D7E] text-xl max-w-2xl mx-auto">Most returns are completed within 10 to 14 days from the day we have your documents.</p>
        </div>

        <div className="relative">
          {/* Desktop Wave Line */}
          <div className="hidden md:block absolute top-0 left-8 right-8 z-0 pointer-events-none">
            <svg width="100%" height="192" viewBox="0 0 1000 192" preserveAspectRatio="none" className="overflow-visible">
              <path
                d="M 0,32 C 125,32 125,160 250,160 C 375,160 375,32 500,32 C 625,32 625,160 750,160 C 875,160 875,32 1000,32"
                fill="none"
                stroke="#7D8E7E"
                strokeOpacity="0.2"
                strokeWidth="2"
                strokeDasharray="6 6"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>

          {/* Mobile Vertical Wave Line */}
          <div className="md:hidden absolute top-0 left-[31px] w-[2px] h-[calc(100%-80px)] z-0 pointer-events-none">
             <div className="w-full h-full border-l-2 border-dashed border-[#7D8E7E]/20" />
          </div>

          <div className="flex flex-col md:flex-row justify-between relative z-10 gap-12 md:gap-4">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`flex flex-row md:flex-col items-start md:items-center w-full md:w-[17%] transition-all duration-500 hover:-translate-y-1 ${isEven ? 'md:mt-0' : 'md:mt-32'}`}>
                  {/* Node Circle */}
                  <div className="flex-none w-16 h-16 rounded-full bg-white shadow-sm border border-[#7D8E7E]/15 flex items-center justify-center relative z-20 md:mb-6 mr-6 md:mr-0 group hover:border-[#7D8E7E]/40 transition-colors duration-300">
                    <span className="text-2xl font-medium serif-font text-[#7D8E7E]">0{index + 1}</span>
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-full bg-[#7D8E7E]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 md:text-center mt-1 md:mt-0">
                    <h3 className="text-2xl serif-font text-[#3C3633] mb-3 leading-snug">{step.title}</h3>
                    <p className="text-[#5D6D7E] text-base leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
