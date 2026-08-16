import { useState } from 'react';
import { 
  Wrench, 
  Terminal, 
  Cpu, 
  Code2, 
  Coffee, 
  Braces, 
  Layout, 
  Palette, 
  Grid, 
  Table, 
  Zap, 
  GitBranch, 
  Github, 
  Box, 
  Flame, 
  FileCode,
  Search,
  Filter,
  CheckCircle2
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

// Map icon names to Lucide components
const iconMap: Record<string, any> = {
  Terminal,
  Cpu,
  Code2,
  Coffee,
  Braces,
  Layout,
  Palette,
  Grid,
  Table,
  Zap,
  GitBranch,
  Github,
  Box,
  Flame,
  FileCode,
};

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Programming Languages', 'Libraries & Frameworks', 'Developer Tools'];

  const filteredCategories = SKILL_CATEGORIES.map((cat) => {
    if (selectedCategory !== 'All' && cat.category !== selectedCategory) {
      return null;
    }
    const matchingSkills = cat.skills.filter(
      (skill) =>
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (matchingSkills.length === 0) return null;
    return {
      ...cat,
      skills: matchingSkills,
    };
  }).filter(Boolean);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0A0B] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-block px-3 py-1 rounded-sm border border-blue-500/30 bg-blue-500/5 text-[10px] text-blue-400 uppercase tracking-widest font-semibold mb-3">
            Technical Proficiency
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Skills & Tooling Matrix
          </h2>
          <p className="text-gray-400 text-base max-w-2xl mt-2">
            Verified technical toolset from resume across systems programming, machine learning libraries, asynchronous backend frameworks, and DevOps.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-md text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'bg-[#0F0F12] text-gray-400 hover:text-white border border-white/10 hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill or framework..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0F0F12] border border-white/10 rounded-md pl-9 pr-3 py-1.5 text-xs text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        {/* Categories Matrix */}
        <div className="space-y-12">
          {filteredCategories.map((categoryGroup) => {
            if (!categoryGroup) return null;
            return (
              <div key={categoryGroup.category} className="space-y-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <h3>{categoryGroup.category}</h3>
                  <span className="text-xs font-mono text-gray-500 font-normal">
                    ({categoryGroup.skills.length} verified)
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {categoryGroup.skills.map((skill) => {
                    const IconComponent = iconMap[skill.iconName] || Code2;
                    return (
                      <div
                        key={skill.name}
                        className="group p-4 rounded-xl bg-[#0F0F12] border border-white/10 hover:border-blue-500/50 hover:bg-white/5 transition-all duration-200 flex flex-col justify-between"
                      >
                        <div className="flex items-start gap-3 mb-2">
                          <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 group-hover:text-white group-hover:bg-blue-600 transition-colors">
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="font-bold text-white text-sm group-hover:text-blue-300 transition-colors">
                              {skill.name}
                            </h4>
                            <span className="text-[10px] font-mono text-gray-500 block">
                              Core Technology
                            </span>
                          </div>
                        </div>

                        <p className="text-xs text-gray-400 leading-normal pl-0.5">
                          {skill.description}
                        </p>

                        <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-gray-500">
                          <span className="text-green-400 flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3 text-green-400" />
                            Verified Tool
                          </span>
                          <span>Resume Verified</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
