import React from 'react';
import { motion } from 'motion/react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-[#F9F7F2]">
      <div className="max-w-3xl mx-auto px-6 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Jennifer's Portrait */}
          <div className="mb-12">
            <div className="w-48 h-48 rounded-full flex items-center justify-center overflow-hidden">
              <img 
                src="/jenniferlight.png" 
                alt="Jennifer" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.innerHTML = '<span class="text-[10px] uppercase tracking-widest text-[#3C3633]/30 px-4">photo coming soon</span>';
                }}
              />
            </div>
          </div>

          <p className="text-4xl serif-font text-[#3C3633] mb-10">Hi, I'm Jennifer.</p>
          <p className="text-lg text-[#5D6D7E] leading-relaxed italic max-w-2xl px-4">
            I started Calm Tax Co. because I genuinely believe taxes don't have to feel overwhelming. Every return is handled with personal care and precision, with your peace of mind at the center of everything we do.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
