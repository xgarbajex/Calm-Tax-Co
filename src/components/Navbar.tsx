import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';
import DeadlineBanner from './DeadlineBanner';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
      <DeadlineBanner />
      <nav className={`transition-all duration-500 ${isScrolled ? 'bg-[#F9F7F2]/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="h-10 md:h-12 hover:opacity-80 transition-opacity">
            <img src="/logo.png" alt="Calm Tax Co." className="h-full w-auto" />
          </Link>
          
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

          <div className="md:hidden">
              <span className="text-xs uppercase tracking-widest text-[#3C3633]">Menu</span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
