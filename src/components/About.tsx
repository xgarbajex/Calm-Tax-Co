import React from 'react';
import { motion } from 'motion/react';

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-32 bg-white overflow-hidden border-y border-[#3C3633]/5 scroll-mt-24 md:scroll-mt-32">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0 opacity-[0.06] pointer-events-none">
        <img src="/hero_background.png" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Left Column - Photo */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-[#A66D5E]/20 rounded-full blur-xl transform translate-x-4 translate-y-4"></div>
              <img 
                src="/jenniferlight.png" 
                alt="Jennifer"
                className="relative w-56 h-56 md:w-64 md:h-64 object-cover rounded-full shadow-xl border-8 border-white"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
          </div>
          
          {/* Right Column - Text */}
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl serif-font text-[#3C3633] mb-4">Hi, I'm Jennifer.</h2>
            <div className="w-48 h-px bg-[#3C3633]/20 mb-8" />
            <div className="space-y-6 text-[#5D6D7E] text-lg leading-relaxed font-light">
              <p>
                I started Calm Tax Co. because I genuinely believe taxes can be handled clearly without being a lot to manage. Every return is handled with personal care and precision, wih a focus on keeping the process streamlined and simplified for you. I work with a small number of clients at a time so every return gets real attention. I am an IRS-registered tax preparer with an EFIN, continuing professional education and additional tax certification. I am based in Arizona, and work with clients all across the country.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-[#3C3633]/10 text-[#7D8E7E] text-sm font-medium tracking-wide uppercase">
              IRS-registered tax preparer · EFIN holder · Continuing tax coursework
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
