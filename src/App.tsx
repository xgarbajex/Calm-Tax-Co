import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPostPage from './pages/BlogPostPage';
import LegalNotice from './components/LegalNotice';

// Service Pages
import FreelanceTax from './pages/services/FreelanceTax';
import GigWorkerTax from './pages/services/GigWorkerTax';
import SelfEmployedTax from './pages/services/SelfEmployedTax';
import RemoteTax from './pages/services/RemoteTax';
import PhoenixOnlineTax from './pages/services/PhoenixOnlineTax';
import { Logo } from './components/Logo';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeLegal, setActiveLegal] = useState<'privacy' | 'terms' | 'accessibility' | null>(null);
  const location = useLocation();

  // Scroll logic with pathname tracking to eliminate jerky scrolls
  const prevPathnameRef = React.useRef(location.pathname);

  React.useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      const hostPathChanged = prevPathnameRef.current !== location.pathname;

      if (element) {
        if (hostPathChanged) {
          // If path changed (different page), wait briefly for render before scroll
          setTimeout(() => {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        } else {
          // Same page routing is a gentle smooth glide
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else if (hostPathChanged) {
        // Fallback for async layouts when path changes
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
    prevPathnameRef.current = location.pathname;
  }, [location.pathname, location.hash]);

  return (
    <main className="relative bg-[#F9F7F2]">
      <Navbar />
      
      {children}

      <footer className="relative py-8 px-6 border-t border-[#3C3633]/5 bg-[#FCFBFA] overflow-hidden">
        {/* Background Graphic */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <img src="/hero_background.png" alt="" className="w-full h-full object-cover" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="max-w-xs">
              <Link to="/" onClick={() => window.scrollTo(0, 0)} className="block hover:opacity-80 transition-opacity mb-4">
                <Logo className="h-16 sm:h-20 md:h-24 w-auto" />
              </Link>
              <p className="text-xs text-[#3C3633]/50 leading-relaxed">A small, careful tax practice. Conducted entirely by correspondence. Arizona-based. Serving clients remotely in all 50 states, year-round.</p>
              <div className="mt-4 flex flex-col gap-1">
                <span className="text-xs text-[#3C3633]/40 uppercase tracking-widest">Credentials</span>
                <span className="text-xs text-[#3C3633]/60">IRS PTIN holder</span>
                <span className="text-xs text-[#3C3633]/60">IRS Authorized E-File Provider</span>
                <span className="text-xs text-[#3C3633]/60">Secure, encrypted cloud storage</span>
              </div>
            </div>

            <div className="flex max-w-lg flex-wrap gap-x-12 gap-y-6">
              <div className="flex flex-col gap-3">
                <span className="text-xs text-[#3C3633]/40 uppercase tracking-widest mb-1">Services</span>
                <Link to="/services/remote-tax-preparation-services" className="text-xs text-[#3C3633]/70 hover:text-[#7D8E7E] transition-colors">Remote Tax Services</Link>
                <Link to="/services/phoenix-online-tax-preparation" className="text-xs text-[#3C3633]/70 hover:text-[#7D8E7E] transition-colors">Phoenix Online Tax Prep</Link>
                <Link to="/services/freelance-tax-preparation" className="text-xs text-[#3C3633]/70 hover:text-[#7D8E7E] transition-colors">Freelance Tax Preparation</Link>
                <Link to="/services/gig-worker-tax-filing" className="text-xs text-[#3C3633]/70 hover:text-[#7D8E7E] transition-colors">Gig Worker Tax Filing</Link>
                <Link to="/services/self-employed-tax-preparation" className="text-xs text-[#3C3633]/70 hover:text-[#7D8E7E] transition-colors">Self-Employed Tax Prep</Link>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-xs text-[#3C3633]/40 uppercase tracking-widest mb-1">Legal</span>
                <button 
                  onClick={() => setActiveLegal('privacy')}
                  className="text-left text-xs text-[#3C3633]/70 hover:text-[#7D8E7E] transition-colors cursor-pointer"
                >
                  Privacy Policy
                </button>
                <button 
                  onClick={() => setActiveLegal('terms')}
                  className="text-left text-xs text-[#3C3633]/70 hover:text-[#7D8E7E] transition-colors cursor-pointer"
                >
                  Terms of Service
                </button>
                <button 
                  onClick={() => setActiveLegal('accessibility')}
                  className="text-left text-xs text-[#3C3633]/70 hover:text-[#7D8E7E] transition-colors cursor-pointer"
                >
                  Accessibility
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-[#3C3633]/5">
            <p className="text-xs text-[#3C3633]/30 text-center">© 2026 Calm Tax Co. All rights reserved.</p>
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

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/services/freelance-tax-preparation" element={<FreelanceTax />} />
          <Route path="/services/gig-worker-tax-filing" element={<GigWorkerTax />} />
          <Route path="/services/self-employed-tax-preparation" element={<SelfEmployedTax />} />
          <Route path="/services/remote-tax-preparation-services" element={<RemoteTax />} />
          <Route path="/services/phoenix-online-tax-preparation" element={<PhoenixOnlineTax />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
