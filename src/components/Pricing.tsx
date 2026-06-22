import React from 'react';
import { SERVICES } from '../constants';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="relative py-32 bg-white overflow-hidden scroll-mt-24 md:scroll-mt-32">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img src="/hero_background.png" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl serif-font text-[#3C3633]">Pricing</h2>
          <div className="w-48 h-px bg-[#3C3633]/20 mx-auto mt-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {SERVICES.map((service) => (
            <div key={service.id} className="bg-[#F2F0ED] p-12 rounded-[2.5rem] border border-[#3C3633]/20 shadow-md hover:shadow-xl hover:shadow-[#3C3633]/10 transition-all duration-700 flex flex-col items-center text-center">
              <div className="mb-12 text-center flex flex-col items-center">
                <h3 className="text-3xl md:text-4xl serif-font italic text-[#3C3633] mb-6">{service.title}</h3>
                <div className="flex items-center justify-center gap-2 mb-6">
                  <span className="text-sm font-light text-[#7D8E7E] italic translate-y-0.5">Starting at</span>
                  <div className="text-4xl serif-font text-[#7D8E7E]">
                    ${service.price.split('$')[1]}
                  </div>
                </div>
                <div className="w-60 h-px bg-[#3C3633]"></div>
              </div>
              
              <p className="text-[#5D6D7E] leading-relaxed mb-10 w-full max-w-sm">
                {service.description}
              </p>
              
              <ul className="space-y-4 mb-12 flex-grow text-left">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-[#3C3633]/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7D8E7E]/40 mr-4"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a 
                href="/intake.html" 
                className="w-full py-4 rounded-full border border-[#3C3633] text-[#3C3633] text-xs uppercase tracking-[0.2em] hover:bg-[#3C3633] hover:text-[#F9F7F2] hover:-translate-y-1 hover:shadow-lg hover:shadow-[#3C3633]/15 active:translate-y-0 transition-all duration-300 text-center block"
              >
                Get started
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-24 text-center">
          <p className="text-sm italic text-[#7D8E7E]">
            * Payment is due in full before work begins. You will always receive a clear quote first.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
