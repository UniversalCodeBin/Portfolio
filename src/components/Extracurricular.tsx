import { Shield, Heart, Globe2, Award, CheckCircle2, Gamepad2, Palette, Sparkles, Terminal, Flame } from 'lucide-react';
import { EXTRACURRICULAR_DATA } from '../data/portfolioData';

export function Extracurricular() {
  const getHobbyIcon = (name: string) => {
    switch (name) {
      case 'Coding Challenges':
        return Terminal;
      case 'AI Projects':
        return Sparkles;
      case 'Hackathons':
        return Flame;
      case 'Chess':
        return Shield;
      case 'Drawing':
        return Palette;
      default:
        return Heart;
    }
  };

  return (
    <section id="extracurricular" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0A0B] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-block px-3 py-1 rounded-sm border border-blue-500/30 bg-blue-500/5 text-[10px] text-blue-400 uppercase tracking-widest font-semibold mb-3">
            Extracurriculars & Personality
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Leadership, Hobbies & Languages
          </h2>
          <p className="text-gray-400 text-base max-w-2xl mt-2">
            Discipline cultivated through the National Cadet Corps (NCC), cognitive pursuits, creative hobbies, and bilingual proficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* NCC Leadership Section - Left Col */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-xl bg-[#0F0F12] border border-white/10 flex flex-col justify-between shadow-lg">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-blue-400">
                  <Shield className="w-5 h-5" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-blue-500/10 border border-blue-500/20 text-blue-400">
                  Cadet Heritage
                </span>
              </div>

              <h3 className="text-xl font-bold text-white tracking-tight mb-1">
                {EXTRACURRICULAR_DATA.ncc.title}
              </h3>
              <div className="text-xs font-mono text-gray-400 mb-4">
                {EXTRACURRICULAR_DATA.ncc.role}
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {EXTRACURRICULAR_DATA.ncc.description}
              </p>

              <div>
                <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block mb-2">
                  Core Attributes Developed:
                </span>
                <div className="grid grid-cols-2 gap-2.5">
                  {EXTRACURRICULAR_DATA.ncc.pillars.map((pillar) => (
                    <div
                      key={pillar}
                      className="p-2.5 rounded-lg bg-[#0A0A0B] border border-white/5 text-xs text-gray-200 font-medium flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                      <span>{pillar}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-1.5 text-xs text-green-400 font-mono">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Resume Verified Activity</span>
            </div>
          </div>

          {/* Right Col: Hobbies & Languages */}
          <div className="lg:col-span-6 space-y-6">
            {/* Hobbies Card */}
            <div className="p-6 rounded-xl bg-[#0F0F12] border border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-4 h-4 text-rose-400" />
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Hobbies & Intellectual Interests
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {EXTRACURRICULAR_DATA.hobbies.map((hobby) => {
                  const HobbyIcon = getHobbyIcon(hobby.name);
                  return (
                    <div
                      key={hobby.name}
                      className="p-3 rounded-lg bg-[#0A0A0B] border border-white/5 flex items-start gap-3"
                    >
                      <div className="w-7 h-7 rounded bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                        <HobbyIcon className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">
                          {hobby.name}
                        </div>
                        <div className="text-[11px] text-gray-400 leading-tight mt-0.5">
                          {hobby.detail}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Languages Card */}
            <div className="p-6 rounded-xl bg-[#0F0F12] border border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <Globe2 className="w-4 h-4 text-green-400" />
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Languages
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {EXTRACURRICULAR_DATA.languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="p-3.5 rounded-lg bg-[#0A0A0B] border border-white/5 flex items-center justify-between"
                  >
                    <div>
                      <div className="text-sm font-bold text-white">
                        {lang.name}
                      </div>
                      <div className="text-xs text-gray-400 font-mono">
                        {lang.proficiency}
                      </div>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-green-400"></span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
