import { useState } from 'react';
import { Layers, CheckCircle2 } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  key?: string;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [activeView, setActiveView] = useState<'architecture' | 'capabilities'>('architecture');

  return (
    <div
      id={`project-card-${project.id}`}
      className="rounded-xl bg-[#0F0F12] border border-white/10 shadow-xl overflow-hidden hover:border-blue-500/40 transition-all duration-300 flex flex-col"
    >
      {/* Header bar */}
      <div className="px-6 py-5 bg-[#0F0F12] border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono font-bold text-xs flex items-center justify-center">
            {project.number}
          </span>
          <div>
            <h3 className="text-xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
            <span className="text-xs font-mono text-gray-400">
              Architecture & System Implementation
            </span>
          </div>
        </div>

        {/* View mode switcher (Architecture & Capabilities only) */}
        <div className="flex items-center gap-1 bg-white/5 p-1 rounded-lg border border-white/10 text-xs font-medium">
          <button
            onClick={() => setActiveView('architecture')}
            className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
              activeView === 'architecture'
                ? 'bg-blue-600 text-white font-semibold shadow-sm'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Architecture
          </button>
          <button
            onClick={() => setActiveView('capabilities')}
            className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
              activeView === 'capabilities'
                ? 'bg-blue-600 text-white font-semibold shadow-sm'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Capabilities
          </button>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
        {/* Short description */}
        <p className="text-gray-300 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 border border-white/10 text-blue-400 flex items-center gap-1"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
              {tech}
            </span>
          ))}
        </div>

        {/* Dynamic View Panels */}
        <div className="rounded-xl bg-[#0A0A0B] border border-white/10 p-4 min-h-[190px] flex flex-col justify-center">
          {/* 1. ARCHITECTURE DIAGRAM VIEW */}
          {activeView === 'architecture' && (
            <div className="space-y-4 font-mono text-xs">
              <div className="text-gray-400 flex items-center justify-between pb-2 border-b border-white/10">
                <span className="flex items-center gap-1.5 text-blue-400">
                  <Layers className="w-4 h-4" />
                  System Pipeline Flowchart
                </span>
                <span className="text-[11px] text-gray-500">Modular Design</span>
              </div>

              {project.architectureType === 'assistant' && (
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-center">
                  <div className="p-2.5 rounded bg-white/5 border border-white/5">
                    <div className="text-[10px] text-gray-400">INPUT LAYER</div>
                    <div className="text-white font-bold mt-1">Voice / Query</div>
                    <div className="text-[10px] text-blue-400 mt-1">Audio Synthesis</div>
                  </div>
                  <div className="p-2.5 rounded bg-white/5 border border-white/5">
                    <div className="text-[10px] text-gray-400">AGENT CORE</div>
                    <div className="text-indigo-300 font-bold mt-1">Task Orchestrator</div>
                    <div className="text-[10px] text-gray-400 mt-1">LLM Workflows</div>
                  </div>
                  <div className="p-2.5 rounded bg-white/5 border border-white/5">
                    <div className="text-[10px] text-gray-400">MEMORY RETRIEVAL</div>
                    <div className="text-purple-300 font-bold mt-1">Vector Database</div>
                    <div className="text-[10px] text-green-400 mt-1">Semantic Search</div>
                  </div>
                  <div className="p-2.5 rounded bg-white/5 border border-white/5">
                    <div className="text-[10px] text-gray-400">API SERVING</div>
                    <div className="text-green-300 font-bold mt-1">FastAPI REST</div>
                    <div className="text-[10px] text-gray-400 mt-1">Reliable Execution</div>
                  </div>
                </div>
              )}

              {project.architectureType === 'chatbot' && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-center">
                  <div className="p-2.5 rounded bg-white/5 border border-white/5">
                    <div className="text-[10px] text-gray-400">STAGE 1: INGEST</div>
                    <div className="text-white font-bold mt-1">Text Processing</div>
                    <div className="text-[10px] text-blue-400 mt-1">Tokenization & Clean</div>
                  </div>
                  <div className="p-2.5 rounded bg-white/5 border border-white/5">
                    <div className="text-[10px] text-gray-400">STAGE 2: MEMORY</div>
                    <div className="text-indigo-300 font-bold mt-1">Multi-Turn State</div>
                    <div className="text-[10px] text-indigo-400 mt-1">Context Preservation</div>
                  </div>
                  <div className="p-2.5 rounded bg-white/5 border border-white/5">
                    <div className="text-[10px] text-gray-400">STAGE 3: DISPATCH</div>
                    <div className="text-green-300 font-bold mt-1">Conversational Logic</div>
                    <div className="text-[10px] text-green-400 mt-1">Optimized Response</div>
                  </div>
                </div>
              )}

              {project.architectureType === 'url_shortener' && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-center">
                  <div className="p-2.5 rounded bg-white/5 border border-white/5">
                    <div className="text-[10px] text-gray-400">CLIENT INGRESS</div>
                    <div className="text-white font-bold mt-1">FastAPI Endpoint</div>
                    <div className="text-[10px] text-blue-400 mt-1">POST /api/shorten</div>
                  </div>
                  <div className="p-2.5 rounded bg-white/5 border border-white/5">
                    <div className="text-[10px] text-gray-400">STORAGE & RETRIEVAL</div>
                    <div className="text-purple-300 font-bold mt-1">Hash Encoding</div>
                    <div className="text-[10px] text-purple-400 mt-1">O(1) Lookup Index</div>
                  </div>
                  <div className="p-2.5 rounded bg-white/5 border border-white/5">
                    <div className="text-[10px] text-gray-400">RUNTIME INFRA</div>
                    <div className="text-green-300 font-bold mt-1">Docker Container</div>
                    <div className="text-[10px] text-green-400 mt-1">Scalable Deployment</div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* 2. CAPABILITIES LIST VIEW */}
          {activeView === 'capabilities' && (
            <div className="space-y-2.5 py-1">
              <div className="text-xs font-mono text-gray-400 pb-1 border-b border-white/10 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                <span>Engineered Capabilities & Highlights:</span>
              </div>
              <ul className="space-y-2">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="text-xs text-gray-300 flex items-start gap-2">
                    <span className="text-blue-400 font-mono font-bold mt-0.5">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Card Footer info */}
        <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-gray-500">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
            <span>Core Engineering Project</span>
          </div>
          <div>Python • AI/ML • Microservices</div>
        </div>
      </div>
    </div>
  );
}
