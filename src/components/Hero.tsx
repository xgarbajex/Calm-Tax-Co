import React from 'react';
import { motion } from 'motion/react';
import TrustBadges from './TrustBadges';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-48 pb-28 md:pt-40 md:pb-32 lg:pt-48 bg-[#F9F7F2] scroll-mt-24 md:scroll-mt-32">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img src="/hero_background.png" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="cormorant-font text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight font-light tracking-[0.015em] px-4 text-[#3C3633]">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="block"
          >
            You bring the documents.
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
            className="block mt-2"
          >
            We bring the <span className="italic font-normal text-[#7D8E7E]">calm.</span>
          </motion.div>
        </h1>
        <div className="w-48 h-px bg-[#3C3633]/20 mx-auto mb-10" />
        <div className="flex flex-col gap-6 mb-12">
          <p className="text-sm md:text-base text-[#5D6D7E] max-w-xl mx-auto leading-relaxed font-sans font-light">
            A simple, self-guided online walkthrough creates your <strong className="font-medium text-[#3C3633]">personalized document checklist</strong>, where you can gather and upload everything in one place.
          </p>
          <p className="text-2xl md:text-3xl text-[#3C3633] max-w-4xl mx-auto leading-relaxed serif-font italic">
            We handle the rest and prepare your return with care.
          </p>
        </div>
        
        <div className="flex justify-center mb-6">
          <span className="inline-block px-5 py-2 rounded-full border border-[#A66D5E]/30 bg-[#A66D5E]/5 text-[11px] md:text-[13px] text-[#A66D5E] uppercase tracking-[0.2em] font-medium">
            No scheduling · No office visits · No phone tag
          </span>
        </div>
        
        <p className="text-[#7D8E7E] text-sm md:text-base tracking-widest uppercase font-medium mb-16 px-4">
          All online. All on your schedule. All year round.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="#pricing" 
            className="px-10 py-4 rounded-full border border-[#3C3633] text-[#3C3633] hover:bg-[#3C3633] hover:text-[#F9F7F2] hover:-translate-y-1 hover:shadow-lg hover:shadow-[#3C3633]/10 active:translate-y-0 transition-all duration-300 text-sm uppercase tracking-widest block"
          >
            See Pricing
          </a>
          <a 
            href="/intake.html" 
            className="px-10 py-4 rounded-full bg-[#3C3633] text-white hover:bg-[#4d4642] hover:-translate-y-1 hover:shadow-lg hover:shadow-[#3C3633]/25 active:translate-y-0 transition-all duration-300 text-sm uppercase tracking-widest block"
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
