import { Github, ExternalLink, GitBranch, GitCommit, GitPullRequest, Code, Terminal, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';

export function BuildingInPublic() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0A0A0B] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-xl bg-[#0F0F12] border border-white/10 p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Col: Info & Link */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-block px-3 py-1 rounded-sm border border-blue-500/30 bg-blue-500/5 text-[10px] text-blue-400 uppercase tracking-widest font-semibold">
                Open Source & Code Repositories
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Building in Public on GitHub
              </h2>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                My projects are developed in the open, with code, documentation and project write-ups published under the handle <strong className="text-white font-mono">UniversalCodeBin</strong>.
              </p>

              <div className="pt-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-sm transition-all hover:border-blue-500/40 shadow-md"
                >
                  <Github className="w-4 h-4" />
                  <span>Visit github.com/UniversalCodeBin</span>
                  <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
                </a>
              </div>
            </div>

            {/* Right Col: Verified Projects Tree Preview */}
            <div className="lg:col-span-5">
              <div className="p-4 rounded-xl bg-[#0A0A0B] border border-white/10 font-mono text-xs space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-white/10 text-gray-400">
                  <span className="flex items-center gap-1.5 text-blue-400">
                    <Terminal className="w-3.5 h-3.5" />
                    UniversalCodeBin / repositories
                  </span>
                  <span className="text-[10px] text-green-400">Public</span>
                </div>

                <div className="space-y-2.5">
                  {PROJECTS.map((proj) => (
                    <div
                      key={proj.id}
                      className="p-2.5 rounded-md bg-white/5 border border-white/5 hover:border-blue-500/40 transition-colors flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2 text-gray-200">
                        <GitBranch className="w-3.5 h-3.5 text-blue-400" />
                        <span className="font-semibold">{(proj.githubUrl ?? proj.title).split('/').pop()}</span>
                      </div>
                      <span className="text-[10px] text-gray-400 bg-white/5 border border-white/5 px-2 py-0.5 rounded">
                        {proj.technologies[0]}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 border-t border-white/10 text-[11px] text-gray-500 flex items-center justify-between">
                  <span>Branch: main</span>
                  <span>Owner: UniversalCodeBin</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
