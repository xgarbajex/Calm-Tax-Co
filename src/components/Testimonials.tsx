import React from 'react';
import { motion } from 'motion/react';

const Testimonials: React.FC = () => {
  return (
    <section className="relative py-32 bg-[#F9F7F2] overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img src="/hero_background.png" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-4xl md:text-5xl serif-font text-[#3C3633]">Client Experience</p>
          <div className="w-48 h-px bg-[#3C3633]/20 mx-auto mt-8" />
        </div>
        
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#FCFBFA] p-8 md:p-16 rounded-[2.5rem] border border-[#3C3633]/5 flex flex-col items-center justify-between shadow-sm text-center"
          >
            <div className="mb-6 flex items-center justify-center gap-1.5">
              <span className="text-[#D4AF37] text-lg">★★★★★</span>
              <span className="text-xs uppercase tracking-[0.2em] text-[#7D8E7E] font-medium ml-1">Google Review</span>
            </div>
            
            <div className="mb-8">
              <p className="text-xl md:text-2xl text-[#3C3633] italic leading-relaxed cormorant-font">
                “Had a wonderful experience working with Jennifer. She made the tax filing process easy and stress free for me, and got it done super quick! She broke everything down and walked me through any questions I had! I highly recommend her services and will continue to work with her in the future!”
              </p>
            </div>
            
            <div>
              <p className="font-medium text-[#3C3633]">— Jason S.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
