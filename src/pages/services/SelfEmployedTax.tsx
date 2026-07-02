import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const SelfEmployedTax: React.FC = () => {
  useEffect(() => {
    document.title = "Self-Employed Tax Preparation | Calm Tax Co.";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Tax preparation for sole proprietors, independent workers, and small solo businesses. Schedule C, quarterly estimates, and deductions handled remotely. All 50 states.");
    }
  }, []);

  return (
    <motion.article 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="pt-40 md:pt-48 pb-32 px-6 bg-[#F9F7F2] min-h-screen"
    >
      <div className="max-w-3xl mx-auto">
        <header className="mb-16">
          <p className="text-xs uppercase tracking-widest text-[#7D8E7E] mb-4">Tax Preparation Services</p>
          <h1 className="text-4xl md:text-6xl serif-font font-normal text-[#3C3633] leading-tight mb-8">
            Self-Employed Tax Preparation
          </h1>
        </header>

        <div className="space-y-8 text-[#4A4441] leading-relaxed text-lg">
          <p>
            You've been doing this long enough to know that taxes don't get simpler the longer you're self-employed. If anything, they get more layered. More income sources, more expenses to track, more questions about whether you're doing it right.
          </p>

          <p>
            Most self-employed people reach a point where they want a professional in their corner. Not because their situation is impossibly complicated, but because having someone competent and steady review the numbers is worth more than the time and energy it takes to do it alone.
          </p>

          <p>
            That's what Calm Tax Co. is here for. We're a <Link to="/services/remote-tax-preparation-services" className="font-bold underline text-[#A66D5E] hover:text-[#3C3633]">remote</Link> solo practice based in Arizona, handling tax preparation for independent workers, sole proprietors, and small service businesses across all 50 states.
          </p>

          <h2 className="text-3xl serif-font font-normal text-[#3C3633] mt-16 mb-6 border-b border-[#3C3633]/10 pb-3">Common Client Situations</h2>
          <ul className="list-disc pl-6 space-y-4">
            <li>You've been self-employed for a few years and you've managed your own taxes, but something changed. Income grew, you hired a contractor, you have questions about your home office situation. You want a second set of eyes.</li>
            <li>You run a service business and the revenue is relatively consistent, but the administrative side is taking time you'd rather spend on client work.</li>
            <li>You know you should be making quarterly payments but you're never quite sure what the right amounts are.</li>
            <li>You've been filing on your own and you're reasonably sure it's correct, but "reasonably sure" is starting to feel like not enough.</li>
          </ul>

          <h2 className="text-3xl serif-font font-normal text-[#3C3633] mt-16 mb-6 border-b border-[#3C3633]/10 pb-3">How The Process Works</h2>
          <p>
            Our workflow is built around the reality that self-employed people are busy. There's no appointment to schedule, no office to drive to, no time blocked off in the middle of your workday.
          </p>
          <p>
            You upload your income records and expense documentation through your own private, secure cloud folder. We'll send you a checklist so you know exactly what to prepare before you upload. If you use accounting software, an export works perfectly. A categorized spreadsheet works too.
          </p>

          <ul className="list-disc pl-6 space-y-4">
            <li>We review your Schedule C carefully, check your quarterly payment history, and build an accurate return from the records you provide.</li>
            <li>If we have questions, we reach out via email. Specific, short, easy to respond to when you have a moment.</li>
            <li>We e-file your federal and state returns. Your completed return will also include your <Link to="/blog/quarterly-estimated-taxes-explained" className="font-bold underline text-[#A66D5E] hover:text-[#3C3633]">estimated payment</Link> amounts for each quarter of the coming year.</li>
          </ul>

          <h2 className="text-3xl serif-font font-normal text-[#3C3633] mt-16 mb-6 border-b border-[#3C3633]/10 pb-3">Common Concerns</h2>
          <p>
            <strong>"I'm not sure if I've been categorizing my expenses correctly."</strong><br />
            The checklist we provide includes guidance on how to organize and categorize your expenses before you upload. We work from what you provide. If something looks like it may be categorized in a way that changes your tax treatment, we'll flag it and ask.
          </p>
          <p>
            <strong>"I haven't been making quarterly payments consistently."</strong><br />
            We'll look at where things stand and calculate what you actually owe. Going forward, we'll give you accurate quarterly amounts based on your real income so you can stay current.
          </p>
          <p>
            <strong>"I use accounting software. Do you work with that?"</strong><br />
            Yes. Exports from QuickBooks, FreshBooks, Wave, or a simple spreadsheet all work fine. No special format required.
          </p>

          <h2 className="text-3xl serif-font font-normal text-[#3C3633] mt-16 mb-6 border-b border-[#3C3633]/10 pb-3">Who This Is For</h2>
          <p>
            This service is built for independent workers and sole proprietors who want steady, professional handling of their taxes without the overhead of a full accounting firm. If you value clear communication, a calm process, and the confidence that comes from knowing a real person reviewed your return, this is a good fit.
          </p>
          <p>
            We work with service businesses, consultants, creatives, tradespeople, and anyone else running a solo operation that files on Schedule C.
          </p>

          <h2 className="text-3xl serif-font font-normal text-[#3C3633] mt-16 mb-8 border-b border-[#3C3633]/10 pb-3">Frequently Asked Questions</h2>
          <div className="space-y-8 divide-y divide-[#3C3633]/10">
            <div>
              <h3 className="text-xl md:text-2xl serif-font font-normal text-[#3C3633] mb-3">How do I file a Schedule C for a solo business?</h3>
              <p>Filing a Schedule C for a solo business means reporting your business income, applying allowable expenses, and calculating self-employment tax on your federal return. That is exactly what we handle as the core of self-employed tax preparation.</p>
            </div>
            <div className="pt-6">
              <h3 className="text-xl md:text-2xl serif-font font-normal text-[#3C3633] mb-3">How do I calculate quarterly estimated tax payments?</h3>
              <p>Quarterly estimated payment amounts are calculated from your actual income and deductions and included with your completed return. You will know what to pay for each quarter of the coming year based on your real figures.</p>
            </div>
            <div className="pt-6">
              <h3 className="text-xl md:text-2xl serif-font font-normal text-[#3C3633] mb-3">How do taxes work with irregular self-employment income?</h3>
              <p>Irregular self-employment income does not complicate the filing itself. Your return is based on your total annual income regardless of how it came in month to month. Quarterly payment amounts are calculated from your actual figures once the return is complete.</p>
            </div>
            <div className="pt-6">
              <h3 className="text-xl md:text-2xl serif-font font-normal text-[#3C3633] mb-3">Do I need to get on a phone call with my tax preparer?</h3>
              <p>You do not need a phone call at any point. Everything happens online through our secure portal and document upload. We ask questions in writing through our secure system when we need something and you respond when it works for you.</p>
            </div>
          </div>
        </div>

        <footer className="mt-24 pt-12 border-t border-[#3C3633]/10">
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] text-center border border-[#3C3633]/5">
            <h3 className="text-2xl serif-font text-[#3C3633] mb-4">Taxes are one part of running a business that's genuinely worth outsourcing.</h3>
            <p className="text-[#4A4441] mb-8 font-medium">
              We'll handle it carefully.
            </p>
            <a 
              href="/intake.html" 
              className="inline-block py-4 px-10 rounded-full bg-[#3C3633] text-white text-xs uppercase tracking-[0.2em] hover:bg-[#4d4642] transition-all duration-500"
            >
              Begin Walkthrough
            </a>
          </div>
        </footer>
      </div>
    </motion.article>
  );
};

export default SelfEmployedTax;
