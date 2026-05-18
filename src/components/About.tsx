import React from 'react';
import { motion } from 'motion/react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-white">
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
          <p className="text-lg text-[#5D6D7E] leading-relaxed max-w-2xl px-4 whitespace-pre-line">
            I started Calm Tax Co. because I genuinely believe taxes can be handled clearly without being a lot to manage. Every return is handled with personal care and precision, with your peace of mind at the center of everything.

            I run this as a solo practice from Arizona. I am an IRS-registered tax preparer with an EFIN, currently completing additional certification, and I work with clients across the country.

            My approach is methodical and unhurried. Every return gets careful attention. Questions get researched rather than guessed at. Situations outside my current scope get referred to specialists. I would rather take fewer returns and do them well than build a volume practice.

            The calm in Calm Tax Co. is not a marketing pose. It is a longstanding personal practice around nervous system regulation that became the operating principle of the firm. That is why everything happens in writing, on your schedule, with as much room to think as either of us needs.
          </p>
          <div className="mt-12 text-sm text-[#5D6D7E]/50 tracking-wider">
            IRS-registered tax preparer &nbsp;·&nbsp; EFIN holder &nbsp;·&nbsp; Additional certification in progress
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
