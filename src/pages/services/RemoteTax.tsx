import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const RemoteTax: React.FC = () => {
  useEffect(() => {
    document.title = "Remote Tax Preparation Services | Calm Tax Co.";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Fully online tax preparation with secure document upload and encrypted communication. No office visits, no phone calls required. Serving clients in all 50 states.");
    }
  }, []);

  return (
    <motion.article 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-32 px-6 bg-[#F9F7F2] min-h-screen"
    >
      <div className="max-w-3xl mx-auto">
        <header className="mb-16">
          <p className="text-xs uppercase tracking-widest text-[#7D8E7E] mb-4">Tax Preparation Services</p>
          <h1 className="text-4xl md:text-6xl serif-font font-normal text-[#3C3633] leading-tight mb-8">
            Remote Tax Preparation Services
          </h1>
        </header>

        <div className="space-y-8 text-[#4A4441] leading-relaxed text-lg">
          <p>
            Tax preparation has a traditional shape: you gather your documents, you drive somewhere, you sit across from someone while they click through a form. You might wait a week to hear back. You might never fully understand what they filed on your behalf.
          </p>

          <p>
            That model made sense before everything else in your financial life moved online. It doesn't make as much sense now.
          </p>

          <p>
            Calm Tax Co. is a fully remote practice. There's no office, no waiting room, no appointment to schedule. Everything happens digitally, on your timeline, through secure channels built specifically for handling sensitive financial documents.
          </p>

          <p>
            We serve clients in all 50 states. Each client gets their own private encrypted Proton folder. We'll send you a link to access yours.
          </p>

          <h2 className="text-3xl serif-font font-normal text-[#3C3633] mt-16 mb-6 border-b border-[#3C3633]/10 pb-3">How The Process Works</h2>
          <p>
            The process is designed to be quiet and straightforward. Here's what it looks like:
          </p>

          <ul className="list-disc pl-6 space-y-4">
            <li>You receive a link to your own private Proton folder. You upload your documents there. PDFs from your payroll provider, photos of paper forms, exports from accounting software. Whatever format you have is fine.</li>
            <li>We review your documents carefully, outside of a live appointment, which means we're not rushing. We prepare your return with full attention on the details.</li>
            <li>If we have questions, we send them by email. Specific, easy to answer, no phone tag involved. You respond when you have a few minutes.</li>
            <li>We <Link to="/blog/how-to-file-taxes-remotely" className="font-bold underline text-[#A66D5E] hover:text-[#3C3633]">e-file directly</Link> with the IRS and your state. For returns that can't be filed electronically, we handle the mailing process.</li>
          </ul>

          <p>
            From start to finish, most clients complete the process without a single phone call.
          </p>

          <h2 className="text-3xl serif-font font-normal text-[#3C3633] mt-16 mb-6 border-b border-[#3C3633]/10 pb-3">On Privacy and Security</h2>
          <p>
            The most common concern about remote tax preparation is a reasonable one: is it safe to send financial documents online?
          </p>
          <p>
            We don't use standard email for document collection. Each client has their own private encrypted Proton folder. Files go there directly. Your Social Security number, income data, and personal documents are handled with the same care you'd expect from any professional handling sensitive financial information.
          </p>
          <p>
            We don't store documents beyond what's required for your return. We don't share your information with third parties. Your data stays between you and us.
          </p>

          <h2 className="text-3xl serif-font font-normal text-[#3C3633] mt-16 mb-6 border-b border-[#3C3633]/10 pb-3">Who This Is For</h2>
          <p>
            Remote tax preparation is a good fit if you're comfortable handling things digitally, you value your time, and you'd rather not rearrange your schedule for an in-person appointment.
          </p>

          <p>
            It's especially well-suited for people who've moved between states, work remotely themselves, or simply prefer a low-pressure, private way to handle their taxes. If you're a <Link to="/services/freelance-tax-preparation" className="font-bold underline text-[#A66D5E] hover:text-[#3C3633]">freelancer</Link>, <Link to="/services/self-employed-tax-preparation" className="font-bold underline text-[#A66D5E] hover:text-[#3C3633]">self-employed</Link>, a W-2 employee, or some combination, we handle all of it.
          </p>

          <p>
            You don't need to be technically sophisticated. If you can follow a link and upload a file, you can <Link to="/#contact" className="font-bold underline text-[#A66D5E] hover:text-[#3C3633]">work with us</Link>.
          </p>

          <h2 className="text-3xl serif-font font-normal text-[#3C3633] mt-16 mb-8 border-b border-[#3C3633]/10 pb-3">Frequently Asked Questions</h2>
          <div className="space-y-8 divide-y divide-[#3C3633]/10">
            <div>
              <h3 className="text-xl md:text-2xl serif-font font-normal text-[#3C3633] mb-3">How do I send tax documents to a remote tax preparer?</h3>
              <p>You can send tax documents to us by uploading them to your own private Proton folder. We send you a link to access it. You submit PDFs, photos of paper forms, or spreadsheet exports there at your own pace.</p>
            </div>
            <div className="pt-6">
              <h3 className="text-xl md:text-2xl serif-font font-normal text-[#3C3633] mb-3">Can I take a picture of my tax forms instead of scanning them?</h3>
              <p>Taking a clear photo of your tax forms with a smartphone works fine in place of scanning. Legible photos and PDFs from your payroll provider are both acceptable for remote tax preparation.</p>
            </div>
            <div className="pt-6">
              <h3 className="text-xl md:text-2xl serif-font font-normal text-[#3C3633] mb-3">How do I know if my tax situation is too complicated?</h3>
              <p>Send us a brief description of your situation and we will let you know whether it fits our scope. If it does not, we will tell you clearly and point you toward the right type of professional.</p>
            </div>
            <div className="pt-6">
              <h3 className="text-xl md:text-2xl serif-font font-normal text-[#3C3633] mb-3">Can an online tax preparer file for any state?</h3>
              <p>An online tax preparer can file state returns for any state. We handle federal returns and state returns for all 50 U.S. states as part of the standard preparation process.</p>
            </div>
          </div>
        </div>

        <footer className="mt-24 pt-12 border-t border-[#3C3633]/10">
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] text-center border border-[#3C3633]/5">
            <h3 className="text-2xl serif-font text-[#3C3633] mb-4">Handle your taxes without rearranging your week.</h3>
            <p className="text-[#4A4441] mb-8 font-medium">
              Secure, careful, fully remote.
            </p>
            <Link 
              to="/#contact" 
              className="inline-block py-4 px-10 rounded-full bg-[#3C3633] text-white text-xs uppercase tracking-[0.2em] hover:bg-[#4d4642] transition-all duration-500"
            >
              Get Started
            </Link>
          </div>
        </footer>
      </div>
    </motion.article>
  );
};

export default RemoteTax;
