import { ArrowUp, Github, Linkedin, Mail, Heart, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
}

export function Footer({ onOpenResume }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0A0B] border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8 text-xs text-gray-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Identity */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center text-white font-mono font-bold text-xs">
              SR
            </div>
            <span className="font-bold text-white text-sm">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-gray-600">•</span>
            <span className="text-gray-400">Portfolio</span>
          </div>
          <p className="text-[11px] text-gray-500 font-mono">
            B.Tech AI & Data Science • Francis Xavier Engineering College
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#research" className="hover:text-white transition-colors">Research</a>
          <a href="#achievements" className="hover:text-white transition-colors">Achievements</a>
          <button onClick={onOpenResume} className="hover:text-blue-400 transition-colors cursor-pointer">
            Resume
          </button>
        </div>

        {/* Socials & Back to top */}
        <div className="flex items-center gap-3">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md bg-[#0F0F12] border border-white/10 hover:text-white hover:border-blue-500/40 transition-colors"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md bg-[#0F0F12] border border-white/10 hover:text-blue-400 hover:border-blue-500/40 transition-colors"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="p-2 rounded-md bg-[#0F0F12] border border-white/10 hover:text-blue-400 hover:border-blue-500/40 transition-colors"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <button
            onClick={scrollToTop}
            id="footer-scroll-top-btn"
            className="p-2 rounded-md bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 transition-colors ml-2 cursor-pointer"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/5 text-center text-[11px] text-gray-500 font-mono">
        © {new Date().getFullYear()} Shriram R. Built with modern TypeScript & Tailwind CSS. Source of truth: verified curriculum vitae.
      </div>
    </footer>
  );
}
