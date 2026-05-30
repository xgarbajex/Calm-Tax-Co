import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const GigWorkerTax: React.FC = () => {
  useEffect(() => {
    document.title = "Gig Worker Tax Filing | Calm Tax Co.";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Tax filing for Uber, DoorDash, Instacart, Etsy, and other app-based workers. We sort through your 1099s, mileage, and self-employment tax. Fully online, all 50 states.");
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
            Gig Worker Tax Filing
          </h1>
        </header>

        <div className="space-y-8 text-[#4A4441] leading-relaxed text-lg">
          <p>
            A pile of 1099s from four different apps. Mileage you may or may not have tracked. Platform fees that cut into your actual income but nobody explained how to handle. A self-employment tax you didn't see coming last year.
          </p>

          <p>
            Gig work is real work. The tax side of it is real too, and it's genuinely more complicated than what standard W-2 employees deal with. You're not imagining that.
          </p>
          <p>
            Calm Tax Co. helps gig workers, drivers, delivery workers, and app-based sellers file accurately. Fully remote, fully online, serving clients across all 50 states.
          </p>

          <h2 className="text-3xl serif-font font-normal text-[#3C3633] mt-16 mb-6 border-b border-[#3C3633]/10 pb-3">Common Client Situations</h2>
          <ul className="list-disc pl-6 space-y-4">
            <li>You drive for Uber or Lyft and you want to make sure your mileage deduction is applied correctly.</li>
            <li>You deliver for DoorDash or Instacart, sometimes both, and you have multiple 1099-Ks to sort through.</li>
            <li>You sell on Etsy or another platform and want to make sure your income is reported correctly.</li>
            <li>You do a mix of gig work alongside a <Link to="/blog/w2-vs-1099-tax-differences" className="font-bold underline text-[#A66D5E] hover:text-[#3C3633]">regular job</Link>, and you're not sure how they interact on your return.</li>
            <li>You owe more than you expected last year, and you want someone to explain why and how to avoid it next time.</li>
          </ul>

          <h2 className="text-3xl serif-font font-normal text-[#3C3633] mt-16 mb-6 border-b border-[#3C3633]/10 pb-3">How The Process Works</h2>
          <p>
            We'll send you a clear checklist of what to pull together before you upload. Once your 1099s, mileage logs, and expense records are in your Proton folder, we get to work.
          </p>

          <ul className="list-disc pl-6 space-y-4">
            <li>We review your platform income and apply the deductions you're legitimately entitled to. Mileage, phone, supplies, platform fees. We prepare your return accurately.</li>
            <li>If we have questions, we'll send a short, clear email. No phone calls.</li>
            <li>We e-file with the IRS and your state. Done.</li>
          </ul>

          <h2 className="text-3xl serif-font font-normal text-[#3C3633] mt-16 mb-6 border-b border-[#3C3633]/10 pb-3">Common Concerns</h2>
          <p>
            <strong>"I want to make sure my mileage deduction is applied correctly."</strong><br />
            To claim the mileage deduction, the IRS requires a written log kept as you go, showing dates, destinations, and business purpose. If you have that, we apply it. If you don't have documentation, the deduction can't be claimed. We'll let you know what to track going forward so you're set for next year.
          </p>
          <p>
            <strong>"I have 1099s from three different apps and I'm not sure how to add it all up."</strong><br />
            That's exactly what we do. Multiple 1099s from multiple platforms get consolidated properly on your return. It's not as complicated as it looks once someone who knows what they're doing handles it.
          </p>
          <p>
            <strong>"I didn't set aside money for taxes."</strong><br />
            You're not alone. We'll figure out what you owe and help you understand what to set aside going forward so next year isn't a repeat.
          </p>

          <h2 className="text-3xl serif-font font-normal text-[#3C3633] mt-16 mb-6 border-b border-[#3C3633]/10 pb-3">Who This Is For</h2>
          <p>
            This service works well for anyone earning income through app-based platforms. Driving, delivery, selling, or any combination. If you want your taxes handled accurately by a real professional without the formality of a traditional tax office, this is a good fit.
          </p>
          <p>
            If you're also earning W-2 income alongside your gig work, we handle that too. Everything in one return.
          </p>

          <h2 className="text-3xl serif-font font-normal text-[#3C3633] mt-16 mb-8 border-b border-[#3C3633]/10 pb-3">Frequently Asked Questions</h2>
          <div className="space-y-8 divide-y divide-[#3C3633]/10">
            <div>
              <h3 className="text-xl md:text-2xl serif-font font-normal text-[#3C3633] mb-3">How do gig workers deduct mileage on taxes?</h3>
              <p>Gig workers can deduct mileage by maintaining a written log kept as you go, showing dates, destinations, and business purpose. The IRS requires this documentation to claim the deduction. Without a log, the deduction cannot be applied to your return.</p>
            </div>
            <div className="pt-6">
              <h3 className="text-xl md:text-2xl serif-font font-normal text-[#3C3633] mb-3">Why is the self-employment tax for gig workers so high?</h3>
              <p>The self-employment tax for gig workers is high because individuals pay both the employee and employer shares of Social Security and Medicare taxes. It catches a lot of people off guard the first year. The good news is that half of it is deductible on your federal return.</p>
            </div>
            <div className="pt-6">
              <h3 className="text-xl md:text-2xl serif-font font-normal text-[#3C3633] mb-3">How do you file taxes with both W-2 and 1099 gig income?</h3>
              <p>Filing taxes with both W-2 and 1099 gig income means reporting all income on the same federal return. We handle the full picture, combining your employment earnings and app-based income to produce one accurate return.</p>
            </div>
            <div className="pt-6">
              <h3 className="text-xl md:text-2xl serif-font font-normal text-[#3C3633] mb-3">How do I send tax documents securely?</h3>
              <p>You can send tax documents securely by uploading them to your own private encrypted Proton folder. We provide a link to access it directly. Your files go there and never travel through standard email.</p>
            </div>
          </div>
        </div>

        <footer className="mt-24 pt-12 border-t border-[#3C3633]/10">
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] text-center border border-[#3C3633]/5">
            <h3 className="text-2xl serif-font text-[#3C3633] mb-4">You worked for it.</h3>
            <p className="text-[#4A4441] mb-8 font-medium">
              Let's make sure you're not overpaying taxes on it, or underpaying and getting surprised.
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

export default GigWorkerTax;
