import { Trophy, Award, Sparkles, CheckCircle2, Briefcase, Code, Flame } from 'lucide-react';
import { ACHIEVEMENTS } from '../data/portfolioData';

export function Achievements() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Recognition':
        return Sparkles;
      case 'Hackathon':
        return Flame;
      case 'Certification':
        return Award;
      case 'Internship':
        return Briefcase;
      default:
        return Trophy;
    }
  };

  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case 'Recognition':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'Hackathon':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      case 'Certification':
        return 'bg-green-500/10 text-green-400 border-green-500/20';
      case 'Internship':
        return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
      default:
        return 'bg-white/5 text-gray-300 border-white/10';
    }
  };

  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0A0B] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-block px-3 py-1 rounded-sm border border-blue-500/30 bg-blue-500/5 text-[10px] text-blue-400 uppercase tracking-widest font-semibold mb-3">
            Milestones & Recognition
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Achievements & Certifications
          </h2>
          <p className="text-gray-400 text-base max-w-2xl mt-2">
            Verified technical certifications, competitive national hackathon participation, AI certification, and IoT industry internship experience.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((item) => {
            const IconComp = getCategoryIcon(item.category);
            const badgeClass = getCategoryBadgeClass(item.category);

            return (
              <div
                key={item.id}
                className="p-6 rounded-xl bg-[#0F0F12] border border-white/10 hover:border-blue-500/40 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-mono border ${badgeClass}`}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight mb-1 group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>

                  <div className="text-xs font-medium text-gray-400 mb-3">
                    {item.subtitle}
                  </div>

                  <p className="text-xs text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-green-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Resume Verified</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
