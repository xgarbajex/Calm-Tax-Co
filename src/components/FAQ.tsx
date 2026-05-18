import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "What documents do I need to file my taxes as a freelancer or self-employed worker?",
      answer: "The exact documents depend on your situation, but most freelancers and self-employed filers need: all 1099-NEC or 1099-MISC forms from clients, categorized records of business expenses, a mileage log, any 1099-K forms from payment platforms like PayPal or Stripe, and your prior year return if you have it. If you also have W-2 income, bring that too. When you reach out, we will send you a short checklist based on your specific situation."
    },
    {
      question: "How long does the tax preparation process take from start to finish?",
      answer: "Most returns are completed within 10 to 14 days from the day we have your complete documents."
    },
    {
      question: "Do I need to come in for an appointment or get on a phone call?",
      answer: "No. Everything happens by email and secure document upload. There are no office visits, no phone calls, and no scheduled meetings. Having time to research and respond carefully in writing is part of how we deliver accurate work."
    },
    {
      question: "How do I send my documents securely?",
      answer: "Documents are uploaded through an encrypted folder, not emailed as attachments. We use Proton Drive to share your documents: a privacy-first platform with end-to-end encryption, meaning no third parties can access your files, not even Proton. Only you and our office can view them. You will receive upload instructions when you reach out."
    },
    {
      question: "Do you handle back taxes or unfiled returns from prior years?",
      answer: "Yes, with some limits. We can help you catch up on prior-year filings and work through them systematically."
    },
    {
      question: "What happens if I get an IRS letter after you file?",
      answer: "Most letters are routine: payment reminders, verification requests, matching notices, or simple corrections. If you have a question, we will review the notice with you and help you understand what is being asked. For anything requiring formal representation, we refer you to a specialist."
    },
    {
      question: "What if I am running late getting my documents together?",
      answer: "No worries. We can file extensions for clients who need them."
    },
    {
      question: "What is your pricing, and are there hidden fees?",
      answer: "Personal returns start at $175. Self-employed and freelance returns start at $375. Both include federal and one state return. If your situation has additional complexity, we quote the full price before any work begins."
    },
    {
      question: "When do I pay?",
      answer: "Payment is due in full before work begins. Once you reach out and we confirm your situation is a good fit, we will send a quote and a secure payment link. We start on your return as soon as payment is received. We do not bill hourly or add fees after the fact. The price you are quoted is the price you pay."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-[#F9F7F2]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl serif-font text-[#3C3633]">Common Questions</h2>
          <div className="w-16 h-px bg-[#3C3633]/20 mx-auto mt-8" />
        </div>

        <div className="space-y-2">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="border-b border-[#3C3633]/5"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between py-5 text-left hover:text-[#7D8E7E] transition-colors group"
                >
                  <span className="text-lg md:text-xl font-medium text-[#3C3633] group-hover:text-[#7D8E7E] pr-8">{faq.question}</span>
                  <div className={`flex-none transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    {isOpen ? (
                      <Minus className="w-5 h-5 text-[#7D8E7E]" />
                    ) : (
                      <Plus className="w-5 h-5 text-[#3C3633]/30" />
                    )}
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 mb-5' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-[#5D6D7E] text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
