import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPostPage from './pages/BlogPostPage';
import LegalNotice from './components/LegalNotice';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeLegal, setActiveLegal] = useState<'privacy' | 'terms' | 'accessibility' | null>(null);
  const location = useLocation();

  // Scroll logic
  React.useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  return (
    <main className="relative bg-[#F9F7F2]">
      <Navbar />
      
      {children}

      <footer className="py-20 px-6 border-t border-[#3C3633]/5 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="max-w-xs">
              <h2 className="text-2xl serif-font mb-2 text-[#3C3633]">Calm Tax Co.</h2>
              <p className="text-xs text-[#3C3633]/50 leading-relaxed">A small, careful tax practice. Conducted entirely by correspondence. Arizona, U.S. — serving all 50 states, year-round.</p>
              <div className="mt-4 flex flex-col gap-1">
                <span className="text-xs text-[#3C3633]/40 uppercase tracking-widest">Credentials</span>
                <span className="text-xs text-[#3C3633]/60">IRS PTIN holder</span>
                <span className="text-xs text-[#3C3633]/60">IRS Authorized E-File Provider</span>
                <span className="text-xs text-[#3C3633]/60">Proton-secured communications</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-8 text-xs uppercase tracking-[0.2em] text-[#3C3633]">
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
            </div>
          </div>
          <div className="mt-12 pt-6 border-t border-[#3C3633]/5">
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
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
