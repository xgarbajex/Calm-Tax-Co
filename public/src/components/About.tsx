import React from 'react';
import { motion } from 'motion/react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-[#F2F0E9]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Left Column - Photo */}
          <div className="flex-shrink-0">
            <img 
              src="/jenniferlight.png" 
              alt="Jennifer"
              className="w-56 h-56 md:w-64 md:h-64 object-cover rounded-full shadow-lg"
              referrerPolicy="no-referrer"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </div>
          
          {/* Right Column - Text */}
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl serif-font text-[#3C3633] mb-4">Hi, I'm Jennifer.</h2>
            <div className="w-48 h-px bg-[#3C3633]/20 mb-8" />
            <div className="space-y-6 text-[#5D6D7E] text-lg leading-relaxed">
              <p>
                I started Calm Tax Co. because I genuinely believe taxes can be handled clearly without being a lot to manage. Every return is handled with personal care and precision, with your peace of mind at the center of everything. I run this as a solo practice from Arizona. I am an IRS-registered tax preparer with an EFIN, currently completing additional certification, and I work with clients across the country.
              </p>
              <p>
                I work with a small number of clients at a time so every return gets real attention. Everything happens by email, on your schedule, with no pressure to move faster than makes sense for you.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-[#3C3633]/10 text-[#7D8E7E] text-sm font-medium">
              IRS-registered tax preparer · EFIN holder · Additional certification in progress
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
