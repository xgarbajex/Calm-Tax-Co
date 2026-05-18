import React from 'react';
import { SERVICES } from '../constants';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl serif-font text-[#3C3633]">Pricing</h2>
          <div className="w-16 h-px bg-[#3C3633]/20 mx-auto mt-8" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {SERVICES.map((service) => (
            <div key={service.id} className="bg-[#F9F7F2] p-12 rounded-[2.5rem] border border-[#3C3633]/5 hover:shadow-xl hover:shadow-[#3C3633]/5 transition-all duration-700 flex flex-col items-center text-center">
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

              <button className="w-full py-4 rounded-full border border-[#3C3633] text-[#3C3633] text-xs uppercase tracking-[0.2em] hover:bg-[#3C3633] hover:text-[#F9F7F2] transition-all duration-500">
                Get started
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-24 text-center">
          <p className="text-sm italic text-[#7D8E7E]">
            Payment is due in full before work begins. You will always receive a clear quote first.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
