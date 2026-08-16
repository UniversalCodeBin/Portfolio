import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Research } from './components/Research';
import { Achievements } from './components/Achievements';
import { Education } from './components/Education';
import { Extracurricular } from './components/Extracurricular';
import { BuildingInPublic } from './components/BuildingInPublic';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-gray-200 selection:bg-blue-600/40 selection:text-white antialiased">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <About />
        <Projects />
        <Skills />
        <Research />
        <Achievements />
        <Education />
        <Extracurricular />
        <BuildingInPublic />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setResumeOpen(true)} />

      {/* Full Resume View / Print Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}
