import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Is Calm Tax Co. a DIY software tool (like TurboTax) or a professional service?",
      answer: "Calm Tax is a human-powered, professional tax preparation service, NOT software where you file your own taxes. Our click-through, self-guided intake is simply a peaceful, smart way to organize and share documents with us on your own schedule. Once uploaded, a real, qualified, human tax preparer reviews your situation, prepares your federal and state returns with diligence, and files them for you. You get the peace of mind of a professional filing without the stress of an office visit or phone calls."
    },
    {
      question: "How does online tax preparation work?",
      answer: "It's a simple, guided process. You start with our short intake walkthrough, answering one question at a time on your own schedule. Your answers automatically create a personalized document checklist. Once you upload those documents securely, we'll review them and email your personalized quote. After payment, we prepare your return, have you review and e-sign it, and e-file it for you."
    },
    {
      question: "Why do you use a personalized document checklist instead of a traditional tax organizer?",
      answer: "Traditional tax organizers ask everyone the same questions, and the forms can be long, confusing, and often ask questions that don't apply to your situation. Calm Tax uses a short, easy-to-follow walkthrough to gather your information, then creates a personalized document checklist based on your situation, so you only gather the documents that apply to you."
    },
    {
      question: "What documents will I need to pull together?",
      answer: "It depends on your situation. We create a personalized document checklist before you upload anything, so you know exactly what to gather and how to organize it. You won't have to guess."
    },
    {
      question: "How long does tax preparation take?",
      answer: "Most returns are completed within 10 to 14 days after we receive all required documents and payment. We review everything carefully and will reach out by email if anything specific is missing."
    },
    {
      question: "Do I need to come into an office or get on a phone call?",
      answer: "No office visit, phone call, or scheduled appointment is required. Everything happens online through the guided walkthrough, secure file uploads, and email communication, on your schedule."
    },
    {
      question: "How do I send you my documents?",
      answer: "After the intake walkthrough, you'll receive a link to your personalized checklist and secure upload page. You can upload documents there at your own pace. This is much more secure than sending sensitive documents through email."
    },
    {
      question: "Do you work with clients outside Arizona?",
      answer: "Yes. Calm Tax Co. is based in Arizona and provides online tax preparation for clients in all 50 states."
    },
    {
      question: "What if I forget to upload something?",
      answer: "That's okay. If you realize you've forgotten something before we begin preparing your return, simply upload the additional document to your checklist page. If we've already started work, upload the document and send us a quick email so we know to review it."
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
      answer: "Professional tax preparation at Calm Tax Co. starts at $175 for personal returns and $375 for self-employed or freelance filing. Both prices include your federal return and one state return. After reviewing your uploaded documents, we'll email your personalized quote."
    },
    {
      question: "When and How do I pay?",
      answer: "Payment is due before work begins. After reviewing your uploaded documents, we'll email your personalized quote and secure payment link. We use Stripe to process payments securely, with options that may include credit or debit card, Apple Pay, Klarna, Cash App Pay, Amazon Pay, Link, and bank payment."
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

  const half = Math.ceil(faqs.length / 2);
  const firstCol = faqs.slice(0, half);
  const secondCol = faqs.slice(half);

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
          <p className="text-[#59524F] text-base leading-relaxed">
            {faq.answer}
          </p>
        </div>
      </div>
    );
  };

  return (
    <section id="faq" className="py-32 bg-[#F9F7F2]">
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
