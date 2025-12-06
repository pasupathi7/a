import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${isScrolled ? 'bg-dark/80 backdrop-blur-md border-slate-800/50 py-4' : 'bg-transparent border-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-white to-slate-500 flex items-center justify-center">
            <span className="font-serif font-bold text-dark text-lg">C</span>
          </div>
          <span className="font-serif font-bold text-xl text-white tracking-tight">ChronicGPT</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">How it works</a>
          <a href="#safeguards" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Safeguards</a>
          <a href="#outcomes" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Outcomes</a>
          <a href="#pricing" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Pricing</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="text-sm font-medium text-white hover:text-slate-300">Login</a>
          <Button size="sm">Join Waitlist</Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-dark border-b border-slate-800 p-6 flex flex-col gap-4 shadow-xl">
           <a href="#how-it-works" className="text-sm font-medium text-slate-400" onClick={() => setMobileMenuOpen(false)}>How it works</a>
          <a href="#safeguards" className="text-sm font-medium text-slate-400" onClick={() => setMobileMenuOpen(false)}>Safeguards</a>
          <a href="#outcomes" className="text-sm font-medium text-slate-400" onClick={() => setMobileMenuOpen(false)}>Outcomes</a>
          <Button className="w-full">Join Waitlist</Button>
        </div>
      )}
    </nav>
  );
};