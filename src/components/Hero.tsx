import React from 'react';
import { motion } from 'motion/react';
import TrustBadges from './TrustBadges';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 bg-[#F9F7F2]">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img src="/hero_background.png" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight animate-fade-in-up italic font-light tracking-[0.05em]">
          Tax prep,<br />
          <span className="text-[#7D8E7E]">calmly</span> handled.
        </h1>
        <div className="w-48 h-px bg-[#3C3633]/20 mx-auto mb-10" />
        <p className="text-lg md:text-xl text-[#5D6D7E] max-w-xl mx-auto mb-8 leading-relaxed">
          All online. All on your schedule. All year round.
        </p>
        <p className="text-md md:text-lg italic serif-font text-[#3C3633] max-w-xl mx-auto mb-16">
          You bring the documents. We bring the calm.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="#pricing" 
            className="px-10 py-4 rounded-full border border-[#3C3633] text-[#3C3633] hover:bg-[#3C3633] hover:text-[#F9F7F2] transition-all duration-500 text-sm uppercase tracking-widest"
          >
            See Pricing
          </a>
          <a 
            href="#contact" 
            className="px-10 py-4 rounded-full bg-[#7D8E7E] text-white hover:bg-[#6c7d6d] transition-all duration-500 text-sm uppercase tracking-widest"
          >
            Get Started
          </a>
        </div>
        <TrustBadges />
      </div>
    </section>
  );
};

export default Hero;
