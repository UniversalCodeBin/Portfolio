import { useState } from 'react';
import { ArrowDown, FileDown, Github, ChevronRight, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export function Hero({ onOpenResume }: HeroProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-grid-pattern"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[300px] bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Core Positioning & Actions */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Subtle Identity Pill */}
          <div className="inline-block px-3 py-1 rounded-sm border border-blue-500/30 bg-blue-500/5 text-[10px] text-blue-400 uppercase tracking-widest font-semibold mb-6">
            B.Tech Artificial Intelligence & Data Science • Francis Xavier Engg.
          </div>

          {/* Primary Name Heading */}
          <h1
            id="hero-name-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-3"
          >
            {PERSONAL_INFO.name}
          </h1>

          {/* Supporting Headline */}
          <div
            id="hero-role-headline"
            className="text-xl sm:text-2xl lg:text-3xl font-black text-white leading-tight tracking-tight mb-4"
          >
            Building AI that makes{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-500">
              trustworthy decisions.
            </span>
          </div>

          {/* Short Verified Resume Description */}
          <p
            id="hero-description"
            className="text-base sm:text-lg text-gray-400 max-w-2xl leading-relaxed mb-8 font-normal"
          >
            AI & Data Science undergraduate who builds systems that turn predictions into safe, auditable decisions — combining machine learning, optimization and backend engineering. Open to AI/ML and Python backend internships.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-8">
            <a
              href="#projects"
              id="hero-view-projects-btn"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shadow-lg shadow-blue-600/20 hover:-translate-y-0.5 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            >
              <span>View Selected Projects</span>
              <ChevronRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenResume}
              id="hero-download-resume-btn"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-md border border-white/10 text-white font-bold text-sm bg-white/5 hover:bg-white/10 transition-all hover:border-white/20 hover:-translate-y-0.5 focus:ring-2 focus:ring-white/20 focus:outline-none shadow-sm"
            >
              <FileDown className="w-4 h-4 text-blue-400" />
              <span>Download Resume</span>
            </button>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-github-link"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md border border-white/10 text-white font-bold text-sm bg-white/5 hover:bg-white/10 transition-all hover:border-white/20"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>

          {/* Direct Verified Contact Quick Strip */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-gray-500 border-t border-white/10 pt-4 w-full">
            <div className="flex items-center gap-1.5">
              <span className="text-gray-500 font-mono">Email:</span>
              <button
                onClick={handleCopyEmail}
                className="hover:text-blue-400 transition-colors font-mono underline underline-offset-2 flex items-center gap-1 text-gray-300"
                title="Click to copy email"
              >
                {PERSONAL_INFO.email}
                {copiedEmail ? <Check className="w-3 h-3 text-green-400 inline" /> : null}
              </button>
            </div>
            <span className="text-gray-700 hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5">
              <span className="text-gray-500 font-mono">Location:</span>
              <span className="text-gray-300">{PERSONAL_INFO.location}</span>
            </div>
          </div>
        </div>

        {/* Right Column: AI / Software Engineering Terminal Widget from Screenshot */}
        <div className="lg:col-span-5 w-full">
          <div className="relative rounded-2xl bg-[#0b0f19] border border-white/10 shadow-2xl shadow-black/90 overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center gap-3 px-5 py-4 bg-[#080b12] border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ef4444]"></div>
                <div className="w-3 h-3 rounded-full bg-[#475569]"></div>
                <div className="w-3 h-3 rounded-full bg-[#3b82f6]"></div>
              </div>
              <span className="text-xs sm:text-sm font-mono text-gray-400 font-normal pl-2">
                shriram@portfolio ~ zsh
              </span>
            </div>

            {/* Terminal Body */}
            <div className="p-6 sm:p-7 space-y-6 font-mono text-xs sm:text-sm leading-relaxed bg-[#0b0f19]">
              {/* Command 1 */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-sky-400 font-bold">$</span>
                  <span className="text-white font-medium">whoami</span>
                </div>
                <div className="text-gray-400 pl-4 text-xs sm:text-sm">
                  shriram-r · ai & data science student
                </div>
              </div>

              {/* Command 2 */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-sky-400 font-bold">$</span>
                  <span className="text-white font-medium">cat focus.txt</span>
                </div>
                <div className="text-gray-400 pl-4 text-xs sm:text-sm">
                  applied ml · optimization · agent tooling · backend
                </div>
              </div>

              {/* Command 3 */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-sky-400 font-bold">$</span>
                  <span className="text-white font-medium">stack --list</span>
                </div>
                <div className="text-gray-400 pl-4 text-xs sm:text-sm">
                  python · scikit-learn · or-tools · fastapi · postgresql
                </div>
              </div>

              {/* Active Prompt with Blinking Cursor */}
              <div className="flex items-center gap-2 pt-1">
                <span className="text-sky-400 font-bold">$</span>
                <span className="inline-block w-2.5 h-4.5 bg-gray-200 animate-pulse ml-0.5 align-middle"></span>
              </div>
            </div>

            {/* Bottom 3-Column Metrics Bar */}
            <div className="border-t border-white/10 px-6 sm:px-7 py-5 grid grid-cols-3 divide-x divide-white/10 bg-[#080b12]">
              <div className="pr-2">
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-gray-400 font-medium block mb-1">
                  CGPA
                </span>
                <span className="text-xl sm:text-2xl font-bold text-white font-mono tracking-tight">
                  8.856
                </span>
              </div>
              <div className="pl-4 sm:pl-6 pr-2">
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-gray-400 font-medium block mb-1">
                  PAPERS
                </span>
                <span className="text-xl sm:text-2xl font-bold text-white font-mono tracking-tight">
                  01
                </span>
              </div>
              <div className="pl-4 sm:pl-6">
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-gray-400 font-medium block mb-1">
                  PROJECTS
                </span>
                <span className="text-xl sm:text-2xl font-bold text-white font-mono tracking-tight">
                  04
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Hint */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-500 hover:text-gray-300 transition-colors"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest">Explore</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
}
