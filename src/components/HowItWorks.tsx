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
          <div className="w-px h-12 bg-[#7D8E7E]/30 mx-auto my-8" />
          <p className="text-[#3C3633] serif-font text-xl max-w-2xl mx-auto">Most returns are completed within 10 to 14 days from the day we have your documents.</p>
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
          {/* Note: In this version, we use dynamic step-by-step wavy paths embedded inside the loop for mobile view */}

          <div className="flex flex-col md:flex-row justify-between relative z-10 md:gap-4 max-w-3xl md:max-w-none mx-auto">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              const isLast = index === steps.length - 1;
              return (
                <div 
                  key={index} 
                  className={`relative w-full md:w-[17%] transition-all duration-500 hover:-translate-y-1 ${
                    isEven ? 'md:mt-0' : 'md:mt-32'
                  } pb-16 md:pb-0`}
                >
                  {/* Mobile/Tablet Connecting S-Curve Line */}
                  {!isLast && (
                    <div className="absolute top-[44px] bottom-[-44px] sm:top-[48px] sm:bottom-[-48px] left-0 right-0 pointer-events-none md:hidden z-0">
                      <svg className="w-full h-full overflow-visible animate-pulse" preserveAspectRatio="none" viewBox="0 0 100 100">
                        <path
                          d={isEven 
                            ? "M 58,0 C 58,50 42,50 42,100" 
                            : "M 42,0 C 42,50 58,50 58,100"
                          }
                          fill="none"
                          stroke="#7D8E7E"
                          strokeOpacity="0.3"
                          strokeWidth="2"
                          strokeDasharray="6 6"
                          vectorEffect="non-scaling-stroke"
                        />
                      </svg>
                    </div>
                  )}

                  {/* ---- MOBILE / TABLET VIEW (md:hidden) ---- */}
                  <div className="md:hidden grid grid-cols-2 gap-6 items-center w-full">
                    
                    {/* Even Steps: Text on Left (aligned right), Circle on Right (centered) */}
                    {isEven ? (
                       <>
                        <div className="text-right py-2 max-w-[200px] sm:max-w-[260px] ml-auto relative z-10 pr-4 sm:pr-6">
                           <h3 className="text-xl sm:text-2xl serif-font text-[#3C3633] mb-2 leading-snug">{step.title}</h3>
                           <p className="text-[#5D6D7E] text-xs sm:text-sm leading-relaxed">{step.desc}</p>
                         </div>
                         <div className="w-full flex justify-start pl-4 sm:pl-6 relative py-2">
                           {/* Circle */}
                           <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white shadow-sm border border-[#7D8E7E]/15 flex items-center justify-center relative z-20 group hover:border-[#7D8E7E]/40 transition-colors duration-300">
                             <span className="text-xl sm:text-2xl font-medium serif-font text-[#7D8E7E]">0{index + 1}</span>
                           </div>
                         </div>
                       </>
                     ) : (
                       <>
                         {/* Odd Steps: Circle on Left (centered), Text on Right (aligned left) */}
                         <div className="w-full flex justify-end pr-4 sm:pr-6 relative py-2">
                           {/* Circle */}
                           <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white shadow-sm border border-[#7D8E7E]/15 flex items-center justify-center relative z-20 group hover:border-[#7D8E7E]/40 transition-colors duration-300">
                             <span className="text-xl sm:text-2xl font-medium serif-font text-[#7D8E7E]">0{index + 1}</span>
                           </div>
                         </div>
                         <div className="text-left py-2 max-w-[200px] sm:max-w-[260px] mr-auto relative z-10 pl-4 sm:pl-6">
                           <h3 className="text-xl sm:text-2xl serif-font text-[#3C3633] mb-2 leading-snug">{step.title}</h3>
                           <p className="text-[#5D6D7E] text-xs sm:text-sm leading-relaxed">{step.desc}</p>
                         </div>
                       </>
                     )}
                  </div>

                  {/* ---- DESKTOP VIEW (hidden md:flex) ---- */}
                  <div className="hidden md:flex md:flex-col md:items-center w-full">
                    {/* Node Circle */}
                    <div className="flex-none w-16 h-16 rounded-full bg-white shadow-sm border border-[#7D8E7E]/15 flex items-center justify-center relative z-20 md:mb-6 group hover:border-[#7D8E7E]/40 transition-colors duration-300">
                      <span className="text-2xl font-medium serif-font text-[#7D8E7E]">0{index + 1}</span>
                      {/* Glow effect */}
                      <div className="absolute inset-0 rounded-full bg-[#7D8E7E]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                    </div>

                    {/* Content */}
                    <div className="text-center mt-1 md:mt-0 relative z-10">
                      <h3 className="text-2xl serif-font text-[#3C3633] mb-3 leading-snug">{step.title}</h3>
                      <p className="text-[#5D6D7E] text-base leading-relaxed">{step.desc}</p>
                    </div>
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
