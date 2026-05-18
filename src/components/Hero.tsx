import React from 'react';
import { motion } from 'motion/react';
import TrustBadges from './TrustBadges';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 bg-[#F9F7F2]">
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight animate-fade-in-up italic font-light tracking-[0.05em]">
          Tax prep without the dread.
        </h1>
        <p className="text-lg md:text-xl text-[#5D6D7E] max-w-xl mx-auto mb-6 leading-relaxed">
          We handle simple returns with unusual care: by email, on your timeline, year-round.
        </p>
        <p className="text-md md:text-lg italic serif-font text-[#3C3633] max-w-xl mx-auto mb-14">
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
