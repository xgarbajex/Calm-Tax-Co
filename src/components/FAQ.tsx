import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "What documents will I need to pull together?",
      answer: "It depends on your situation. We send every client a customized checklist before they upload anything, so you know exactly what to gather and how to organize it. You won't have to guess."
    },
    {
      question: "How long does tax preparation take?",
      answer: "Tax preparation at Calm Tax Co. typically takes 10 to 14 days from the time we receive your complete document set. We review your materials carefully and will reach out via email if anything specific is missing during that time."
    },
    {
      question: "Do I need to come into an office or get on a phone call?",
      answer: "No office visit, no phone call, no scheduled appointment of any kind. Everything happens online via secure email and secure document upload, on your schedule. Most clients complete the entire process without a single real-time interaction."
    },
    {
      question: "How do I send you my documents?",
      answer: "When you come on as a client, we set up a private, secure cloud storage folder just for you and send you a link to access it. You upload your documents there at your own pace. Nothing sensitive goes through standard email."
    },
    {
      question: "What if I get an IRS letter after my return is filed?",
      answer: "Reach out and we will review the notice with you to help clarify what the IRS is asking. Most letters are routine and do not require formal action. If yours does require representation, we will refer you to a qualified specialist."
    },
    {
      question: "Can you file an extension if I am not ready by the deadline?",
      answer: "Yes. If you need more time, we file the extension on your behalf. An extension gives you additional time to file but not additional time to pay, so if you expect to owe, it helps to know that early."
    },
    {
      question: "Can you help with back taxes from prior years?",
      answer: "In many cases, yes. We help clients catch up on unfiled returns and submit delayed federal and state returns. We will let you know upfront if a situation is outside our scope."
    },
    {
      question: "How much does professional tax preparation cost?",
      answer: "Professional tax preparation at Calm Tax Co. starts at $175 for personal returns and $375 for self-employed or freelance filing. Both prices include your federal return and one state return, and we provide a full quote before any work begins so there are no surprises."
    },
    {
      question: "When do I pay?",
      answer: "Payment is due in full before we begin work on your return. We send a secure payment link after confirming we are a good fit. The price we quote is the price you pay. We do not bill hourly."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const firstCol = [faqs[0], faqs[1], faqs[2], faqs[8]];
  const secondCol = [faqs[4], faqs[5], faqs[6], faqs[7], faqs[3]];
  const half = firstCol.length;

  const renderFaqItem = (faq: typeof faqs[0], index: number) => {
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
          <span className="text-xl font-bold text-[#3C3633] group-hover:text-[#7D8E7E] pr-8">{faq.question}</span>
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
  };

  return (
    <section id="faq" className="py-24 bg-[#F9F7F2]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl serif-font text-[#3C3633]">Common Questions</h2>
          <div className="w-48 h-px bg-[#3C3633]/20 mx-auto mt-8" />
        </div>

        <div className="grid md:grid-cols-2 gap-x-12">
          <div className="space-y-2">
            {firstCol.map((faq, index) => renderFaqItem(faq, index))}
          </div>
          <div className="space-y-2">
            {secondCol.map((faq, index) => renderFaqItem(faq, index + half))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
