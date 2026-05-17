import React from 'react';
import { motion } from 'motion/react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Marcus T.",
      text: "The asynchronous workflow is exactly what I needed. No stressful meetings, just clear communication and a job well done.",
      role: "E-commerce Founder"
    },
    {
      name: "Elena G.",
      text: "I used to dread tax season. Calm Tax Co. actually made the process feel... peaceful? I highly recommend their services.",
      role: "Creative Director"
    },
    {
      name: "Sarah J.",
      text: "Professional, straightforward, and secure. They handled my complex filing with zero friction. Truly a breath of fresh air.",
      role: "Independent Consultant"
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-4xl md:text-5xl serif-font text-[#3C3633]">Client Experiences</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#F9F7F2] p-12 rounded-[2.5rem] border border-[#3C3633]/5 flex flex-col justify-between"
            >
              <div className="mb-8">
                <p className="text-lg text-[#3C3633] italic leading-relaxed">"{t.text}"</p>
              </div>
              <div>
                <p className="font-medium text-[#3C3633]">{t.name}</p>
                <p className="text-xs uppercase tracking-widest text-[#7D8E7E] mt-1">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
