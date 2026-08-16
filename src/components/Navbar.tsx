import { useState, useEffect } from 'react';
import { Menu, X, FileDown, ExternalLink, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export function Navbar({ onOpenResume }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section
      const sections = ['home', 'about', 'projects', 'skills', 'research', 'achievements', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Research', href: '#research' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0A0B]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          id="nav-logo"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1"
        >
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 p-[1.5px] shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full rounded-full bg-[#0A0A0B] flex items-center justify-center font-bold text-xs text-white">
              SR
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-white tracking-tight text-base group-hover:text-blue-400 transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[10px] uppercase font-semibold tracking-wider text-blue-400 -mt-0.5">
              AI Engineer & Researcher
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full shadow-inner shadow-black/40">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                id={`nav-link-${link.name.toLowerCase()}`}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all ${
                  isActive
                    ? 'text-white bg-white/15 border border-white/15 shadow-sm'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right side actions */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Status Indicator */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="hidden md:inline">{PERSONAL_INFO.status}</span>
            <span className="md:hidden">Available</span>
          </div>

          {/* Resume Button */}
          <button
            onClick={onOpenResume}
            id="nav-resume-btn"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-white text-black hover:bg-gray-200 text-xs font-bold transition-all shadow-sm"
          >
            <FileDown className="w-3.5 h-3.5 text-black" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          id="mobile-menu-toggle-btn"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          className="lg:hidden p-2 rounded-lg bg-[#0F0F12] border border-white/10 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="lg:hidden bg-[#0F0F12] border-b border-white/10 px-4 pt-3 pb-6 mt-2 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
            <div className="flex items-center gap-2 text-xs text-green-400 bg-green-500/10 px-2.5 py-1 rounded-full border border-green-500/20">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span>{PERSONAL_INFO.status}</span>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex items-center gap-1.5 text-xs text-black font-bold px-3 py-1 bg-white hover:bg-gray-200 rounded-md"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>View Resume</span>
            </button>
          </div>

          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-md transition-colors font-medium flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-gray-600 font-mono text-xs">→</span>
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
