import { Code2, Sparkles, Layers } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0A0B] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-block px-3 py-1 rounded-sm border border-blue-500/30 bg-blue-500/5 text-[10px] text-blue-400 uppercase tracking-widest font-semibold mb-3">
            Featured Software & Systems
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Engineering Projects
          </h2>
          <p className="text-gray-400 text-base max-w-2xl mt-2">
            The problems I have worked on, how each system approaches them, and what it does today.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
