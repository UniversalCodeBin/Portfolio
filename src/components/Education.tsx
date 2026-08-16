import { GraduationCap, Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export function Education() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0A0B] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-block px-3 py-1 rounded-sm border border-blue-500/30 bg-blue-500/5 text-[10px] text-blue-400 uppercase tracking-widest font-semibold mb-3">
            Academic Qualifications
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Education History
          </h2>
          <p className="text-gray-400 text-base max-w-2xl mt-2">
            Academic milestones and high-standing scholastic records from higher secondary schooling to specialized undergraduate AI & Data Science engineering.
          </p>
        </div>

        {/* Timeline Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {EDUCATION_DATA.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-xl bg-[#0F0F12] border border-white/10 hover:border-blue-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-blue-500/10 border border-blue-500/20 text-blue-400">
                    {edu.timeline}
                  </span>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-mono font-bold">
                    <span>{edu.scoreLabel}:</span>
                    <span>{edu.scoreValue}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight mb-1">
                  {edu.institution}
                </h3>

                <div className="text-sm font-medium text-gray-300 mb-3">
                  {edu.degree}
                </div>

                <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-5 font-mono">
                  <MapPin className="w-3.5 h-3.5 text-gray-500" />
                  <span>{edu.location}</span>
                </div>

                <ul className="space-y-2 border-t border-white/10 pt-4">
                  {edu.highlights.map((h, i) => (
                    <li key={i} className="text-xs text-gray-300 flex items-start gap-2">
                      <span className="text-blue-400 font-mono font-bold mt-0.5">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-gray-500">
                <span className="flex items-center gap-1 text-green-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Official Transcript Verified
                </span>
                <span>Institution Verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
