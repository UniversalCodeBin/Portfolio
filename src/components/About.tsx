import { BookOpen, Code2, Sparkles, GraduationCap, Cpu, Layers } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0A0B] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-block px-3 py-1 rounded-sm border border-blue-500/30 bg-blue-500/5 text-[10px] text-blue-400 uppercase tracking-widest font-semibold mb-3">
            Profile & Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            About Me
          </h2>
          <p className="text-gray-400 text-base max-w-2xl mt-2">
            What I build, the problems I care about, and where I’m heading.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Narrative - Left Column */}
          <div className="lg:col-span-7 space-y-6 text-gray-300 text-base leading-relaxed">
            <div className="p-6 sm:p-8 rounded-xl bg-[#0F0F12] border border-white/10 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Cpu className="w-5 h-5 text-blue-400" />
                <span>B.Tech in Artificial Intelligence & Data Science</span>
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                I am an Artificial Intelligence and Data Science undergraduate at <strong className="text-white font-medium">Francis Xavier Engineering College</strong> (Tirunelveli, Tamil Nadu). I build AI systems that turn predictions into decisions people can trust: machine learning models, optimization under real constraints, and backend services designed with guardrails and an audit trail.
              </p>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                My projects range from a payment-recovery system that allocates limited resources across a whole portfolio, to an agent tool server that keeps an AI assistant within safe limits, to a team-built voice-spoofing detector. Long term, I want to build meaningful technology products and a company around trustworthy AI automation.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-[#0F0F12] border border-white/10 hover:border-blue-500/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-3">
                  <Code2 className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-white text-sm mb-1.5">Practical Software Engineering</h4>
                <p className="text-xs text-gray-400 leading-normal">
                  Building complete systems in Python — FastAPI services, PostgreSQL and Redis, React dashboards and Docker — with automated testing and continuous integration.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#0F0F12] border border-white/10 hover:border-purple-500/40 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-3">
                  <BookOpen className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-white text-sm mb-1.5">Applied AI & NLP Research</h4>
                <p className="text-xs text-gray-400 leading-normal">
                  Machine learning, optimization and agent tooling in practice, plus co-authored NLP research (BERT, Word2Vec) presented at the SMART'25 International Conference.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Verified Resume Statistics Panel */}
          <div className="lg:col-span-5">
            <div className="rounded-xl bg-[#0F0F12] border border-white/10 p-6 sm:p-7 shadow-xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-mono text-gray-300 uppercase tracking-wider">Academic & Technical Metrics</span>
                </div>
                <span className="text-[10px] font-mono text-green-400 bg-green-500/10 px-2.5 py-0.5 rounded-full border border-green-500/20 font-medium">
                  Verified Data
                </span>
              </div>

              {/* Verified Metrics Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="p-3.5 rounded-lg bg-white/5 border border-white/5">
                  <span className="text-[10px] font-mono text-gray-500 uppercase block mb-1">PROGRAM DEGREE</span>
                  <div className="text-base font-bold text-white tracking-tight">B.Tech AI & DS</div>
                  <p className="text-[11px] text-gray-400 mt-1 leading-tight">Artificial Intelligence & Data Science</p>
                </div>

                <div className="p-3.5 rounded-lg bg-white/5 border border-white/5">
                  <span className="text-[10px] font-mono text-gray-500 uppercase block mb-1">ACADEMIC STANDING</span>
                  <div className="text-xl font-bold text-green-400 tracking-tight font-mono">8.667 <span className="text-xs text-gray-400 font-normal">/ 10</span></div>
                  <p className="text-[11px] text-gray-400 mt-1 leading-tight">Current CGPA Score</p>
                </div>

                <div className="p-3.5 rounded-lg bg-white/5 border border-white/5">
                  <span className="text-[10px] font-mono text-gray-500 uppercase block mb-1">GRADUATION TIMELINE</span>
                  <div className="text-base font-bold text-blue-400 tracking-tight font-mono">May 2029</div>
                  <p className="text-[11px] text-gray-400 mt-1 leading-tight">Expected Degree Completion</p>
                </div>

                <div className="p-3.5 rounded-lg bg-white/5 border border-white/5">
                  <span className="text-[10px] font-mono text-gray-500 uppercase block mb-1">PROGRAMMING</span>
                  <div className="text-xl font-bold text-indigo-300 tracking-tight">Python <span className="text-xs text-gray-400 font-normal">first</span></div>
                  <p className="text-[11px] text-gray-400 mt-1 leading-tight">Python, TypeScript, JavaScript, SQL, C</p>
                </div>
              </div>

              {/* Institution badge */}
              <div className="pt-4 border-t border-white/10 text-xs text-gray-400 flex items-center justify-between">
                <span>Institution: <strong className="text-gray-200">Francis Xavier Engg College</strong></span>
                <span className="text-gray-500">Tirunelveli, TN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
