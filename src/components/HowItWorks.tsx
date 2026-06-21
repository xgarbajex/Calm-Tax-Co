import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      title: "Short Intake Walkthrough",
      desc: "Do it anytime, no tax knowledge needed, then we'll send your personalized document checklist. Takes about 10 minutes."
    },
    {
      title: "Gather & Upload",
      desc: "Securely submit your tax documents."
    },
    {
      title: "Quote & Pay",
      desc: "Review your fixed-price quote and pay online."
    },
    {
      title: "Prepare & E-file",
      desc: "We prepare and e-file your return."
    }
  ];

  return (
    <section id="how-it-works" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl serif-font text-[#3C3633] mb-4">How it works</h2>
          <div className="w-px h-12 bg-[#7D8E7E]/30 mx-auto my-8" />
          <p className="text-[#3C3633] serif-font text-xl max-w-2xl mx-auto">Most returns are completed within 10 to 14 days from the day we have your documents.</p>
        </div>

        <div className="relative">
          {/* Mobile Vertical Wave Line */}
          {/* Note: In this version, we use dynamic step-by-step wavy paths embedded inside the loop for mobile view */}

          <div className="flex flex-col md:flex-row justify-between relative z-10 md:gap-4 max-w-3xl md:max-w-none mx-auto">
            {/* Desktop Wave Line */}
            <div className="hidden md:block absolute top-[32px] left-[8.5%] right-[8.5%] z-0 pointer-events-none">
              <svg width="100%" height="128" viewBox="0 0 1000 128" preserveAspectRatio="none" className="overflow-visible">
                <path
                  d="M 0,0 C 166,0 166,128 333,128 C 500,128 500,0 666,0 C 833,0 833,128 1000,128"
                  fill="none"
                  stroke="#7D8E7E"
                  strokeOpacity="0.4"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </div>
            
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
                    <div className="absolute top-[36px] sm:top-[40px] h-full left-[calc(50%-44px)] right-[calc(50%-44px)] sm:left-[calc(50%-56px)] sm:right-[calc(50%-56px)] pointer-events-none md:hidden z-0">
                      <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                        <path
                          d={isEven 
                            ? "M 100,0 C 100,50 0,50 0,100" 
                            : "M 0,0 C 0,50 100,50 100,100"
                          }
                          fill="none"
                          stroke="#7D8E7E"
                          strokeOpacity="0.4"
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
        <div className="text-center mt-16">
          <a
            href="/intake.html"
            className="inline-block bg-[#3C3633] text-white px-8 py-4 rounded-full text-lg hover:bg-[#5D6D7E] transition-colors duration-300"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
