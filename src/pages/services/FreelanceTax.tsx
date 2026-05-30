import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const FreelanceTax: React.FC = () => {
  useEffect(() => {
    document.title = "Freelance Tax Preparation | Calm Tax Co.";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Remote tax preparation for freelancers, consultants, and independent contractors. Schedule C, quarterly estimates, and deductions handled calmly online. Serving clients in all 50 states.");
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
          <h1 className="text-4xl md:text-5xl serif-font text-[#3C3633] leading-tight mb-8">
            Freelance Tax Preparation
          </h1>
        </header>

        <div className="space-y-8 text-[#5D6D7E] leading-relaxed text-lg">
          <p>
            You did the work. You invoiced the clients. Now it's tax time, and you want someone competent handling the filing side so you can stay focused on the work itself.
          </p>

          <p>
            Calm Tax Co. is a solo remote tax practice based in Arizona, serving freelancers, consultants, creatives, and independent contractors across all 50 states. No office. No phone tag. No pressure to move faster than makes sense for you.
          </p>

          <h2 className="text-2xl serif-font text-[#3C3633] mt-12 mb-6">Common Client Situations</h2>
          <p>
            The freelancers we work with tend to fall into a few familiar patterns:
          </p>
          <ul className="list-disc pl-6 space-y-4">
            <li>You've been filing on your own but you're not confident you're doing it right. You have a mix of 1099-NEC forms, a few direct clients who never sent paperwork, and a growing list of deductions you're not sure you can claim.</li>
            <li>You started a side practice that became your main income, and suddenly "doing your own taxes" feels like a different proposition than it used to.</li>
            <li>You set up a single-member LLC and now you're not sure how that changes anything, or whether it does.</li>
            <li>You got hit with a surprise tax bill last year and you want someone who actually knows what they're doing to look at the numbers this time.</li>
          </ul>
          <p>Any of these sound familiar? You're in the right place.</p>

          <h2 className="text-2xl serif-font text-[#3C3633] mt-12 mb-6">How The Process Works</h2>
          <p>
            Everything happens online, on your schedule. There's no appointment to book, no office to visit, no call you have to be mentally prepared for.
          </p>
          <p>Here's how it works:</p>

          <ul className="list-disc pl-6 space-y-4">
            <li>You upload your documents through your own private Proton folder. We'll send you a checklist of what to gather so nothing gets missed. Once we have everything, we get to work.</li>
            <li>We review everything carefully and prepare your return. If something's unclear or missing, we'll send a short email. Specific, easy to answer, no technical language.</li>
            <li>We e-file directly with the IRS and your state. For returns that can't be filed electronically, we'll handle the mailing process.</li>
            <li>We'll also include your quarterly estimated payment amounts for the year ahead with your completed return.</li>
          </ul>
          <p>
            That's it. Most clients hear from us within a few business days of submitting their documents.
          </p>

          <h2 className="text-2xl serif-font text-[#3C3633] mt-12 mb-6">Common Concerns</h2>
          <p>
            <strong>"I'm not sure what I can deduct."</strong><br />
            Common deductions for freelancers include home office, equipment, software, and mileage. As long as expenses are documented and business-related, we'll apply them correctly on your return. The documentation is on your end; the filing is on ours.
          </p>
          <p>
            <strong>"I've been underpaying quarterly taxes."</strong><br />
            It happens. Your completed return will include your estimated payment amounts for the coming year based on your current figures.
          </p>

          <h2 className="text-2xl serif-font text-[#3C3633] mt-12 mb-6">Who This Is For</h2>
          <p>
            This service is a good fit if you earn income on 1099s, operate as a sole proprietor or single-member LLC, and want a calm, competent professional handling your return. No large firm overhead, no anxiety of doing it yourself.
          </p>
          <p>
            If you're comfortable with email and can take a few photos of your documents, the rest is straightforward.
          </p>

          <h2 className="text-2xl serif-font text-[#3C3633] mt-12 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl text-[#3C3633] font-bold mb-2">How do I calculate quarterly estimated taxes for freelance work?</h3>
              <p>Quarterly estimated payment amounts are included with every completed return. We calculate these figures based on your current year's income and deductions so you know what to pay and when.</p>
            </div>
            <div>
              <h3 className="text-xl text-[#3C3633] font-bold mb-2">How do I file taxes with no 1099 form from clients?</h3>
              <p>Filing freelance taxes without a 1099 form is normal and fully legitimate. We report self-reported freelance income correctly using your own income records, so all earnings are documented regardless of whether clients sent formal paperwork.</p>
            </div>
            <div>
              <h3 className="text-xl text-[#3C3633] font-bold mb-2">Is it safe to send tax documents online?</h3>
              <p>Sending tax documents online is secure when using the right tools. We set up a private encrypted Proton folder for each client so your files go directly to us and never travel through standard email.</p>
            </div>
            <div>
              <h3 className="text-xl text-[#3C3633] font-bold mb-2">Can an out-of-state tax preparer file my taxes?</h3>
              <p>An out-of-state tax preparer can file both your federal and state returns. We prepare returns for clients in all 50 states and handle each state's filing requirements as part of the standard process.</p>
            </div>
          </div>
        </div>

        <footer className="mt-24 pt-12 border-t border-[#3C3633]/10">
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] text-center border border-[#3C3633]/5">
            <h3 className="text-2xl serif-font text-[#3C3633] mb-4">When you're ready, the checklist makes it simple.</h3>
            <p className="text-[#5D6D7E] mb-8">
              We take it from there.
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

export default FreelanceTax;
