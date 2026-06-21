import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';
import DeadlineBanner from './DeadlineBanner';
import { Logo } from './Logo';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page transitions
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname, location.hash]);

  const isSolid = !isHomePage || isScrolled || isMenuOpen;
  const navBackgroundClass = isSolid 
    ? 'bg-[#F9F7F2] md:bg-[#F9F7F2]/95 md:backdrop-blur-md py-4' 
    : 'bg-transparent py-4';

  return (
    <header className="fixed top-0 left-0 right-0 z-[100]">
      <DeadlineBanner />
      
      <nav className={`transition-all duration-300 relative z-50 ${navBackgroundClass}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative z-50">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="block hover:opacity-80 transition-opacity">
            <Logo className="h-20 sm:h-24 md:h-28 w-auto" />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-12">
            {NAV_ITEMS.map((item) => (
              item.href.includes('#') ? (
                <a 
                  key={item.href} 
                  href={item.href}
                  className="text-sm uppercase tracking-widest text-[#3C3633] hover:text-[#7D8E7E] transition-colors duration-300"
                >
                  {item.label}
                </a>
              ) : (
                <Link 
                  key={item.href} 
                  to={item.href}
                  className="text-sm uppercase tracking-widest text-[#3C3633] hover:text-[#7D8E7E] transition-colors duration-300"
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>

          {/* Mobile Trigger */}
          <button 
            className="md:hidden text-xs uppercase tracking-widest text-[#3C3633] hover:text-[#A66D5E] transition-colors focus:outline-none focus:ring-0 select-none cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[#F9F7F2] z-40 transition-all duration-500 ease-in-out flex flex-col items-center justify-center p-6 ${
          isMenuOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center text-center">
          <div className="flex flex-col items-center space-y-6">
            {NAV_ITEMS.map((item) => {
              const isAnchor = item.href.includes('#');
              const linkClasses = "font-sans font-light text-2xl uppercase tracking-[0.2em] text-[#3C3633] hover:text-[#A66D5E] transition-colors duration-300 py-1";

              return isAnchor ? (
                <a 
                  key={item.href} 
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={linkClasses}
                >
                  {item.label}
                </a>
              ) : (
                <Link 
                  key={item.href} 
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={linkClasses}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Thin, elegant horizontal rule */}
          <div className="w-16 h-px bg-[#3C3633]/15 my-8" />

          {/* Minimalist Footer / Firm Details */}
          <div className="flex flex-col items-center space-y-2">
            <span className="font-sans font-light text-[10px] tracking-[0.25em] text-[#3C3633]/50 uppercase">
              Calm Tax Co. • Solo Remote Practice
            </span>
            <span className="font-sans font-light text-[9px] tracking-[0.15em] text-[#3C3633]/40 uppercase">
              Arizona & Nationwide
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
