import { BookOpen, Sparkles, Award, FileText, CheckCircle, Network, Layers, Share2 } from 'lucide-react';
import { PUBLICATION, PERSONAL_INFO } from '../data/portfolioData';

export function Research() {
  return (
    <section id="research" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0A0B] border-t border-white/5 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[300px] bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-block px-3 py-1 rounded-sm border border-purple-500/30 bg-purple-500/5 text-[10px] text-purple-400 uppercase tracking-widest font-semibold mb-3">
            Academic Research & Publications
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Research & Publications
          </h2>
          <p className="text-gray-400 text-base max-w-2xl mt-2">
            Peer-reviewed and presented academic paper applying state-of-the-art Natural Language Processing transformers and semantic vector models to biological species identification.
          </p>
        </div>

        {/* Paper Layout Card */}
        <div className="rounded-xl bg-gradient-to-br from-indigo-950/20 via-[#0F0F12] to-black border border-white/10 shadow-2xl p-6 sm:p-8 lg:p-10 relative overflow-hidden">
          {/* Subtle watermarked badge */}
          <div className="absolute top-0 right-0 translate-x-10 -translate-y-10 w-44 h-44 bg-purple-500/5 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Col: Paper Metadata & Details */}
            <div className="lg:col-span-8 space-y-6">
              {/* Conference tag & Authorship */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-600/20 border border-purple-500/30 text-purple-300 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-purple-400" />
                  {PUBLICATION.conference}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-gray-300">
                  {PUBLICATION.presentationType}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 border border-blue-500/20 text-blue-300">
                  {PUBLICATION.authorship}
                </span>
              </div>

              {/* Publication Title */}
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                "{PUBLICATION.title}"
              </h3>

              {/* Research Scope & Summary */}
              <div className="space-y-3 text-gray-300 text-sm sm:text-base leading-relaxed bg-[#0A0A0B] p-5 rounded-xl border border-white/10">
                <div className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-purple-400" />
                  Abstract & Research Overview
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {PUBLICATION.description}
                </p>
              </div>

              {/* Methodologies */}
              <div>
                <div className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <Network className="w-3.5 h-3.5 text-purple-400" />
                  Core Methodologies & Architecture Models
                </div>
                <div className="flex flex-wrap gap-2">
                  {PUBLICATION.methodologies.map((method, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-md text-xs font-mono bg-purple-950/30 border border-purple-800/40 text-purple-200"
                    >
                      {method}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Col: Interactive Visual Pipeline & Metadata */}
            <div className="lg:col-span-4 space-y-4">
              <div className="p-5 rounded-xl bg-[#0A0A0B] border border-white/10 space-y-4">
                <div className="text-xs font-mono text-gray-400 pb-2 border-b border-white/10 flex items-center justify-between">
                  <span>RESEARCH TAXONOMY</span>
                  <span className="text-purple-400 font-bold">SMART'25</span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="p-2.5 rounded bg-white/5 border border-white/5">
                    <span className="text-gray-500 text-[10px] block">DOMAIN</span>
                    <span className="text-white font-medium">{PUBLICATION.focusArea}</span>
                  </div>

                  <div className="p-2.5 rounded bg-white/5 border border-white/5">
                    <span className="text-gray-500 text-[10px] block">LANGUAGE MODELS</span>
                    <span className="text-purple-300 font-medium">BERT & Word2Vec Vector Spaces</span>
                  </div>

                  <div className="p-2.5 rounded bg-white/5 border border-white/5">
                    <span className="text-gray-500 text-[10px] block">AUTHOR</span>
                    <span className="text-green-400 font-medium">{PERSONAL_INFO.name} (Co-Author)</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10">
                  <div className="flex items-center gap-2 text-xs text-green-400 font-medium">
                    <CheckCircle className="w-4 h-4" />
                    <span>Presented at SMART'25 International Conference</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
