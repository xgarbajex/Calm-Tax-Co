import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import DeadlineBanner from './components/DeadlineBanner';
import TrustBadges from './components/TrustBadges';
import BreathingExercise from './components/BreathingExercise';
import LegalNotice from './components/LegalNotice';

const App: React.FC = () => {
  const [activeLegal, setActiveLegal] = useState<'privacy' | 'terms' | 'accessibility' | null>(null);

  return (
    <main className="relative bg-[#F9F7F2]">
      <Navbar />
      
      <div className="space-y-0">
        <Hero />
        <Pricing />
        <About />
        <Testimonials />
        <BreathingExercise />
        <FAQ />
        <Contact />
      </div>

      <footer className="py-20 px-6 border-t border-[#3C3633]/5 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl serif-font mb-2 text-[#3C3633]">Calm Tax Co.</h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-xs uppercase tracking-[0.2em] text-[#3C3633]">
            <button 
              onClick={() => setActiveLegal('privacy')}
              className="hover:text-[#7D8E7E] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => setActiveLegal('terms')}
              className="hover:text-[#7D8E7E] transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <button 
              onClick={() => setActiveLegal('accessibility')}
              className="hover:text-[#7D8E7E] transition-colors cursor-pointer"
            >
              Accessibility
            </button>
            <p className="opacity-40">© 2026 Calm Tax Co. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <LegalNotice 
        isOpen={activeLegal !== null} 
        onClose={() => setActiveLegal(null)} 
        type={activeLegal || 'privacy'} 
      />

      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-scale-in {
          animation: scale-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fade-in {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </main>
  );
};

export default App;
