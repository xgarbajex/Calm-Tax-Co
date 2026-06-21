import React, { useState } from 'react';
import { Mail, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/hello@calmtax.co", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(formData))
      });

      if (response.ok) {
        setStatus('sent');
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error(error);
      setStatus('idle');
      alert("There was an error sending your message. Please try again or contact us directly at hello@calmtax.co.");
    }
  };

  return (
    <section id="contact" className="relative py-32 bg-white overflow-hidden scroll-mt-24 md:scroll-mt-32">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <img src="/hero_background.png" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <h2 className="text-5xl md:text-6xl mb-4 leading-tight">Let's <br /><span className="italic">connect.</span></h2>
            <div className="w-48 h-px bg-[#3C3633]/20 mb-8" />
            <p className="text-[#5D6D7E] mb-12 max-w-md leading-relaxed">
              We handle the filing so you don't have to. Drop us a message and we'll be in touch. No phone calls, no scheduling. Just write when you're ready.
            </p>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-xs uppercase tracking-widest text-[#7D8E7E] mb-2">Service Area</h4>
                <p className="text-[#3C3633]">Serving all 50 states with our modern, online-only workflow.</p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest text-[#7D8E7E] mb-4">Connect</h4>
                <div className="space-y-3">
                  <a href="mailto:hello@calmtax.co" className="flex items-center gap-3 text-[#3C3633] hover:text-[#A66D5E] transition-colors">
                    <Mail className="w-5 h-5 text-[#A66D5E]" />
                    <span>hello@calmtax.co</span>
                  </a>
                  <a href="tel:+15203692256" className="flex items-center gap-3 text-[#3C3633] hover:text-[#A66D5E] transition-colors">
                    <Phone className="w-5 h-5 text-[#A66D5E]" />
                    <span>(520) 369-CALM <span className="text-sm">(2256)</span></span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#F9F7F2] p-8 md:p-12 rounded-[2.5rem] border border-[#3C3633]/20 shadow-md">
            {status === 'sent' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-fade-in">
                <div className="w-16 h-16 bg-[#7D8E7E] rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl mb-2">Thank you.</h3>
                <p className="text-[#5D6D7E]">We've received your message and will reach out shortly.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-xs uppercase tracking-widest border-b border-[#3C3633] pb-1"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field for spam prevention */}
                <input type="text" name="_honey" style={{ display: 'none' }} />
                {/* Disable captcha since we're using AJAX */}
                <input type="hidden" name="_captcha" value="false" />

                <div>
                  <label className="text-xs uppercase tracking-widest text-[#3C3633] block mb-2">Full Name</label>
                  <input 
                    name="name"
                    required
                    type="text" 
                    className="w-full bg-transparent border-b border-[#3C3633]/20 py-3 focus:border-[#7D8E7E] outline-none transition-all duration-300 placeholder:text-[#3C3633]/30"
                    placeholder="E.g., Julian Thorne"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-[#3C3633] block mb-2">Email Address</label>
                  <input 
                    name="email"
                    required
                    type="email" 
                    className="w-full bg-transparent border-b border-[#3C3633]/20 py-3 focus:border-[#7D8E7E] outline-none transition-all duration-300 placeholder:text-[#3C3633]/30"
                    placeholder="julian@example.com"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-[#3C3633] block mb-2">Service of Interest</label>
                  <select name="service" className="w-full bg-transparent border-b border-[#3C3633]/20 py-3 focus:border-[#7D8E7E] outline-none transition-all duration-300">
                    <option>Personal Filing</option>
                    <option>Self-Employed & Gig</option>
                    <option>Other / General Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-widest text-[#3C3633] block mb-2">Message</label>
                  <textarea 
                    name="message"
                    required
                    rows={4}
                    className="w-full bg-transparent border-b border-[#3C3633]/20 py-3 focus:border-[#7D8E7E] outline-none transition-all duration-300 placeholder:text-[#3C3633]/30 resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <button 
                  disabled={status === 'sending'}
                  type="submit"
                  className="w-full py-5 rounded-full bg-[#3C3633] text-white text-xs uppercase tracking-[0.2em] hover:bg-[#4d4642] transition-all duration-500 disabled:opacity-50"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
