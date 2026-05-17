import React from 'react';
import { motion } from 'motion/react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-36">
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="text-xs uppercase tracking-[0.4em] text-[#7D8E7E] mb-8 animate-fade-in opacity-80">
          Serving All 50 States, year-round
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight animate-fade-in-up italic font-light tracking-[0.05em]">
          Breathe in
          <span className="inline-flex gap-0.5">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut",
                }}
              >
                .
              </motion.span>
            ))}
          </span>
        </h1>
        <p className="text-lg md:text-xl text-[#5D6D7E] max-w-xl mx-auto mb-14 font-light leading-relaxed">
          We handle your taxes with calm and precision so you can <span className="inline-flex">
            {"exhale.".split("").map((char, index) => (
              <motion.span
                key={index}
                animate={{ 
                  opacity: [0.5, 1, 0.5],
                  scale: [0.98, 1.02, 0.98],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: "easeInOut"
                }}
                className="serif-font italic tracking-[0.05em] text-[#3C3633] text-2xl md:text-3xl"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </span>
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
      </div>
    </section>
  );
};

export default Hero;
