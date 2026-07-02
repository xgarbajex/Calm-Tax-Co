import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const PhoenixOnlineTax: React.FC = () => {
  useEffect(() => {
    document.title = "Phoenix Online Tax Preparation | Calm Tax Co.";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Arizona-based solo tax practice serving Phoenix-area clients and individuals nationwide. Fully online, secure tax preparation for W-2 employees, freelancers, and the self-employed.");
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
            Phoenix Online Tax Preparation
          </h1>
        </header>

        <div className="space-y-8 text-[#4A4441] leading-relaxed text-lg">
          <p>
            Calm Tax Co. is a solo tax practice based in Arizona, serving clients in the Phoenix area and across all 50 states.
          </p>

          <p>
            This is a fully online practice, by design. No office, no waiting room, no appointment to schedule. Whether you're a W-2 employee who wants a real professional looking at your return, a <Link to="/services/freelance-tax-preparation" className="font-bold underline text-[#A66D5E] hover:text-[#3C3633]">freelancer</Link> navigating 1099s, or a <Link to="/services/self-employed-tax-preparation" className="font-bold underline text-[#A66D5E] hover:text-[#3C3633]">self-employed</Link> person tired of doing it alone, the process is the same: straightforward, private, and handled entirely online through our secure portal and document sharing.
          </p>

          <p>
            The Phoenix area is home to a lot of people doing a lot of different kinds of work. This practice is built to serve all of them.
          </p>

          <h2 className="text-3xl serif-font font-normal text-[#3C3633] mt-16 mb-6 border-b border-[#3C3633]/10 pb-3">Common Client Situations</h2>
          <ul className="list-disc pl-6 space-y-4">
            <li>You're a W-2 employee with a straightforward return, but you've always done it yourself and you'd like someone to actually check it. Maybe your situation got a little more complicated this year. A new job, a home purchase, some investment activity. You want it done right.</li>
            <li>You're a freelancer or contractor who's been filing on your own and suspects you might be missing deductions or miscalculating your quarterly estimates.</li>
            <li>You recently went from W-2 employment to independent work and the tax picture shifted significantly.</li>
            <li>You've had impersonal experiences at big tax chains and you'd like something that actually feels like working with a person who's paying attention.</li>
          </ul>

          <h2 className="text-3xl serif-font font-normal text-[#3C3633] mt-16 mb-6 border-b border-[#3C3633]/10 pb-3">How The Process Works</h2>
          <p>
            Being based in Arizona doesn't mean you need to come to us. We operate <Link to="/services/remote-tax-preparation-services" className="font-bold underline text-[#A66D5E] hover:text-[#3C3633]">entirely online</Link>, by choice.
          </p>
          <p>
            You upload your documents through your private, secure cloud folder. We review everything carefully, prepare your return, and reach out by email if we have questions. We e-file directly with the IRS and your state.
          </p>
          <p>
            It's the same careful, asynchronous process we use for clients across the country.
          </p>

          <h2 className="text-3xl serif-font font-normal text-[#3C3633] mt-16 mb-6 border-b border-[#3C3633]/10 pb-3">The Solo Practice Difference</h2>
          <p>
            Large tax prep chains move fast. They have volume targets. Your return gets handed off, reviewed quickly, and filed.
          </p>
          <p>
            A solo practice works differently. There's one person looking at your documents, and that person is responsible for getting it right. There's no handoff. Your return doesn't get lost in a queue.
          </p>
          <p>
            That's the model here. Careful, personal attention to each client's situation, without the overhead or formality of a larger firm.
          </p>

          <h2 className="text-3xl serif-font font-normal text-[#3C3633] mt-16 mb-6 border-b border-[#3C3633]/10 pb-3">Who This Is For</h2>
          <p>
            This is a good fit for W-2 employees, <Link to="/services/freelance-tax-preparation" className="font-bold underline text-[#A66D5E] hover:text-[#3C3633]">freelancers</Link>, <Link to="/services/gig-worker-tax-filing" className="font-bold underline text-[#A66D5E] hover:text-[#3C3633]">gig workers</Link>, and <Link to="/services/self-employed-tax-preparation" className="font-bold underline text-[#A66D5E] hover:text-[#3C3633]">self-employed</Link> individuals who want a trusted professional handling their return without sacrificing the convenience of a fully online process.
          </p>
          <p>
            It's also well-suited for people who've had frustrating experiences with impersonal tax services and want something that actually feels like working with a real person who's paying attention.
          </p>
          <p>
            We work with clients across all 50 states, so if you're outside the Phoenix area but were drawn here by how this practice works, you're welcome here too.
          </p>

          <h2 className="text-3xl serif-font font-normal text-[#3C3633] mt-16 mb-8 border-b border-[#3C3633]/10 pb-3">Frequently Asked Questions</h2>
          <div className="space-y-8 divide-y divide-[#3C3633]/10">
            <div>
              <h3 className="text-xl md:text-2xl serif-font font-normal text-[#3C3633] mb-3">Can an Arizona tax preparer file out-of-state returns?</h3>
              <p>An Arizona-based tax preparer can file returns for any state. We are an IRS-registered practice and handle federal and state returns for clients in all 50 states.</p>
            </div>
            <div className="pt-6">
              <h3 className="text-xl md:text-2xl serif-font font-normal text-[#3C3633] mb-3">Do online tax preparers accept physical document drop-offs?</h3>
              <p>We do not accept physical drop-offs or in-person meetings. All documents are uploaded to your private, secure cloud folder. This keeps the process efficient and your information handled consistently.</p>
            </div>
            <div className="pt-6">
              <h3 className="text-xl md:text-2xl serif-font font-normal text-[#3C3633] mb-3">How secure is online tax document uploading?</h3>
              <p>Online tax document uploading is secure when using dedicated encryption tools. We provide each client with a private, secure cloud folder. Your documents go there directly and never travel through standard electronic communication.</p>
            </div>
            <div className="pt-6">
              <h3 className="text-xl md:text-2xl serif-font font-normal text-[#3C3633] mb-3">How do I file taxes with both W-2 and freelance income?</h3>
              <p>Filing taxes with both W-2 and freelance income means combining all earnings on one return. We handle the full picture including your W-2s, 1099s, Schedule C, and applicable deductions.</p>
            </div>
          </div>
        </div>

        <footer className="mt-24 pt-12 border-t border-[#3C3633]/10">
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] text-center border border-[#3C3633]/5">
            <h3 className="text-2xl serif-font text-[#3C3633] mb-4">Local roots. Fully remote.</h3>
            <p className="text-[#4A4441] mb-8 font-medium">
              Taxes handled by someone who's actually paying attention.
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

export default PhoenixOnlineTax;
