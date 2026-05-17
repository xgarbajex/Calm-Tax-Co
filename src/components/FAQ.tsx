import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "What documents do I need?",
      answer: "Don't worry about having everything perfect right away. Generally, we'll start with your W-2s, 1099s, health insurance, and any investment or retirement docs. During onboarding, we'll give you a simple, custom checklist to make your document gathering easier."
    },
    {
      question: "How long does filing take?",
      answer: "Once we have all your documents, we typically complete your return within 7-10 business days. Complex filings or missing information can extend this timeframe."
    },
    {
      question: "Do you handle back taxes?",
      answer: "Yes! No judgement here. We can help you catch up on prior year filings. We'll work through them systematically to bring your records up to date."
    },
    {
      question: "How do I send my documents securely?",
      answer: "We use encrypted file sharing for all document transfers. You'll receive a secure Proton link to upload your files, ensuring your sensitive data is protected end-to-end and never sits in an unsecured inbox."
    },
    {
      question: "Do I need to come in for an appointment?",
      answer: "Never. Our practice is entirely remote and asynchronous, meaning there are no calls, no meetings, and no scheduling headaches. Simply upload your documents and message us when it's convenient for you, and we'll take it from there."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-4xl serif-font text-[#3C3633]">Common Questions</p>
          <div className="w-96 h-px bg-[#3C3633] mx-auto mt-6" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border-b border-[#3C3633]/5 pb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between py-4 text-left hover:text-[#7D8E7E] transition-colors group"
              >
                <span className="text-xl font-medium text-[#3C3633] group-hover:text-[#7D8E7E]">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-[#7D8E7E]" />
                ) : (
                  <Plus className="w-5 h-5 text-[#3C3633]/30" />
                )}
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="py-4 text-[#5D6D7E] leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
