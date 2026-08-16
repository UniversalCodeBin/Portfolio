import { useState, useRef } from 'react';
import { X, Printer, Download, Loader2, CheckCircle2 } from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const printableAreaRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = async () => {
    if (isGeneratingPdf) return;
    setIsGeneratingPdf(true);
    setDownloadSuccess(false);

    try {
      // Create a dedicated off-screen clean white A4 container to render the crisp ATS-friendly resume
      const printContainer = document.createElement('div');
      printContainer.style.position = 'fixed';
      printContainer.style.left = '-9999px';
      printContainer.style.top = '0';
      printContainer.style.width = '800px';
      printContainer.style.padding = '40px';
      printContainer.style.backgroundColor = '#ffffff';
      printContainer.style.color = '#111827';
      printContainer.style.fontFamily = 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      printContainer.style.lineHeight = '1.5';
      printContainer.style.zIndex = '-9999';

      printContainer.innerHTML = `
        <div style="text-align: center; border-bottom: 2px solid #1e3a8a; padding-bottom: 16px; margin-bottom: 20px;">
          <h1 style="font-size: 26px; font-weight: 800; color: #0f172a; margin: 0 0 6px 0; text-transform: uppercase; letter-spacing: 0.5px;">
            ${PERSONAL_INFO.name}
          </h1>
          <div style="font-size: 11px; color: #475569; margin-bottom: 6px; font-family: monospace;">
            <span>${PERSONAL_INFO.location}</span> | 
            <span>${PERSONAL_INFO.phone}</span> | 
            <span>${PERSONAL_INFO.email}</span>
          </div>
          <div style="font-size: 11px; color: #2563eb; font-family: monospace;">
            <span>linkedin.com/in/shriram2008/</span> | 
            <span>github.com/UniversalCodeBin</span>
          </div>
        </div>

        <!-- EDUCATION -->
        <div style="margin-bottom: 18px;">
          <h2 style="font-size: 13px; font-weight: 700; color: #1e40af; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid #cbd5e1; padding-bottom: 3px; margin: 0 0 8px 0;">
            Education
          </h2>
          <div style="font-size: 11px; margin-bottom: 8px;">
            <div style="display: flex; justify-content: space-between; align-items: baseline;">
              <strong style="font-size: 12px; color: #0f172a;">Francis Xavier Engineering College</strong>
              <span style="color: #64748b; font-family: monospace; font-size: 10px;">Tirunelveli, Tamil Nadu</span>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: baseline; color: #334155; font-style: italic;">
              <span>Bachelor of Technology in Artificial Intelligence and Data Science</span>
              <span style="color: #15803d; font-weight: 700; font-style: normal; font-family: monospace;">Expected May 2029 | CGPA: 8.856/10</span>
            </div>
          </div>
          <div style="font-size: 11px;">
            <div style="display: flex; justify-content: space-between; align-items: baseline;">
              <strong style="font-size: 12px; color: #0f172a;">SBIOA Matriculation & Higher Secondary School</strong>
              <span style="color: #64748b; font-family: monospace; font-size: 10px;">Trichy, Tamil Nadu</span>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: baseline; color: #334155; font-style: italic;">
              <span>Higher Secondary Education</span>
              <span style="color: #15803d; font-weight: 700; font-style: normal; font-family: monospace;">March 2025 | Percentage: 81.8%</span>
            </div>
          </div>
        </div>

        <!-- TECHNICAL SKILLS -->
        <div style="margin-bottom: 18px;">
          <h2 style="font-size: 13px; font-weight: 700; color: #1e40af; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid #cbd5e1; padding-bottom: 3px; margin: 0 0 8px 0;">
            Technical Skills
          </h2>
          <div style="font-size: 11px; color: #334155; line-height: 1.6;">
            <div><strong style="color: #0f172a;">Languages:</strong> <span style="font-family: monospace; color: #1e293b;">Python, C, C++, Java, JavaScript, HTML, CSS</span></div>
            <div><strong style="color: #0f172a;">Libraries & Frameworks:</strong> <span style="font-family: monospace; color: #1e293b;">NumPy, Pandas, FastAPI</span></div>
            <div><strong style="color: #0f172a;">Developer Tools:</strong> <span style="font-family: monospace; color: #1e293b;">Git, GitHub, Docker, Firebase, VS Code</span></div>
          </div>
        </div>

        <!-- PROJECTS -->
        <div style="margin-bottom: 18px;">
          <h2 style="font-size: 13px; font-weight: 700; color: #1e40af; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid #cbd5e1; padding-bottom: 3px; margin: 0 0 8px 0;">
            Projects
          </h2>
          
          <div style="margin-bottom: 10px;">
            <div style="font-size: 12px; font-weight: 700; color: #0f172a;">
              AI Personal Assistant <span style="font-size: 10px; font-weight: normal; color: #64748b; font-family: monospace;">| Python, LLMs, Vector Databases, Git</span>
            </div>
            <ul style="margin: 3px 0 0 0; padding-left: 16px; font-size: 11px; color: #334155;">
              <li>Developing a modular AI assistant with voice interaction, agent workflows, and task execution capabilities.</li>
              <li>Implementing semantic search and memory retrieval.</li>
              <li>Building REST APIs with FastAPI while emphasizing reliability and scalable software design.</li>
            </ul>
          </div>

          <div style="margin-bottom: 10px;">
            <div style="font-size: 12px; font-weight: 700; color: #0f172a;">
              AI Chatbot System <span style="font-size: 10px; font-weight: normal; color: #64748b; font-family: monospace;">| Python, NLP, Text Processing</span>
            </div>
            <ul style="margin: 3px 0 0 0; padding-left: 16px; font-size: 11px; color: #334155;">
              <li>Built a conversational chatbot capable of answering multi-turn user queries efficiently.</li>
              <li>Developed text-processing pipelines and custom conversational logic.</li>
              <li>Performed debugging and optimization to improve response quality and reliability.</li>
            </ul>
          </div>

          <div>
            <div style="font-size: 12px; font-weight: 700; color: #0f172a;">
              URL Shortener Service <span style="font-size: 10px; font-weight: normal; color: #64748b; font-family: monospace;">| Python, FastAPI, Docker</span>
            </div>
            <ul style="margin: 3px 0 0 0; padding-left: 16px; font-size: 11px; color: #334155;">
              <li>Developing a scalable URL shortening service with efficient data retrieval and storage.</li>
              <li>Containerizing the application with Docker and building REST APIs using FastAPI.</li>
            </ul>
          </div>
        </div>

        <!-- ACHIEVEMENTS & ACTIVITIES -->
        <div style="margin-bottom: 16px;">
          <h2 style="font-size: 13px; font-weight: 700; color: #1e40af; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid #cbd5e1; padding-bottom: 3px; margin: 0 0 8px 0;">
            Achievements & Certifications
          </h2>
          <ul style="margin: 0; padding-left: 16px; font-size: 11px; color: #334155; line-height: 1.5;">
            <li><strong style="color: #0f172a;">Google Gemini:</strong> Gemini Certified University Student demonstrating proficiency in prompt engineering and AI tool integration.</li>
            <li><strong style="color: #0f172a;">Smart India Hackathon 2025:</strong> Participated in a national-scale hackathon, collaborating on engineering solutions under strict time constraints.</li>
            <li><strong style="color: #0f172a;">Research Publication (SMART'25):</strong> Co-authored and presented the paper <em>"Deep Sea Meets Deep Learning: Natural Language Processing for Identifying Marine Species"</em> at SMART'25 International Conference.</li>
            <li><strong style="color: #0f172a;">Certifications:</strong> Python 101 for Data Science (IBM), Python for Everybody.</li>
            <li><strong style="color: #0f172a;">IoT Internship:</strong> Completed Smart Innovations with Internet of Things internship.</li>
          </ul>
        </div>

        <!-- EXTRACURRICULARS & DETAILS -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; font-size: 11px; color: #334155; border-top: 1px solid #e2e8f0; pt: 8px;">
          <div>
            <strong style="color: #0f172a;">Extracurriculars:</strong> National Cadet Corps (NCC) — active former cadet with discipline & leadership.
          </div>
          <div>
            <strong style="color: #0f172a;">Languages:</strong> English, Tamil (Native) | <strong style="color: #0f172a;">Hobbies:</strong> AI Projects, Coding Challenges, Chess.
          </div>
        </div>
      `;

      document.body.appendChild(printContainer);

      const canvas = await html2canvas(printContainer, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
      });

      document.body.removeChild(printContainer);

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('Shriram_R_Resume.pdf');

      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
    } catch (error) {
      console.error('Failed to generate PDF:', error);
      // Fallback to window.print if html2canvas/jsPDF encounters any browser restriction
      window.print();
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  return (
    <div
      id="resume-modal"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
    >
      <div
        id="resume-modal-card"
        className="relative w-full max-w-4xl bg-[#0F0F12] border border-white/10 rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
      >
        {/* Modal Top Action Bar */}
        <div id="resume-action-bar" className="flex items-center justify-between px-6 py-4 bg-[#0A0A0B] border-b border-white/10 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-400"></span>
            <span className="font-bold text-white text-sm sm:text-base">
              Shriram R — Curriculum Vitae
            </span>
            <span className="text-xs font-mono text-green-400 bg-green-500/10 px-2 py-0.5 rounded border border-green-500/20 hidden sm:inline">
              Verified
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Download PDF Button */}
            <button
              onClick={handleDownloadPDF}
              disabled={isGeneratingPdf}
              id="resume-download-pdf-btn"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white text-xs font-semibold transition-all shadow-sm cursor-pointer"
              title="Download Shriram_R_Resume.pdf"
            >
              {isGeneratingPdf ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Generating PDF...</span>
                </>
              ) : downloadSuccess ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-300" />
                  <span>Downloaded!</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </>
              )}
            </button>

            {/* Print Button */}
            <button
              onClick={handlePrint}
              id="resume-print-btn"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-gray-200 hover:text-white text-xs font-medium transition-all cursor-pointer"
              title="Print Document"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <button
              onClick={onClose}
              id="resume-close-btn"
              className="p-2 rounded-md bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close resume modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Printable Body */}
        <div
          ref={printableAreaRef}
          className="p-6 sm:p-10 overflow-y-auto bg-[#0A0A0B] space-y-8 font-sans text-gray-200"
          id="printable-resume-area"
        >
          {/* Header */}
          <div className="text-center pb-6 border-b border-white/10 space-y-2">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
              {PERSONAL_INFO.name}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-gray-400 font-mono">
              <span>{PERSONAL_INFO.location}</span>
              <span>|</span>
              <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-blue-400">{PERSONAL_INFO.phone}</a>
              <span>|</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-blue-400">{PERSONAL_INFO.email}</a>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-blue-400 font-mono">
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
                linkedin.com/in/shriram2008/
              </a>
              <span>|</span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
                github.com/UniversalCodeBin
              </a>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold text-blue-400 uppercase tracking-widest border-b border-white/10 pb-1 font-mono">
              Education
            </h2>
            <div className="space-y-4 text-xs">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <strong className="text-sm text-white font-bold">Francis Xavier Engineering College</strong>
                  <div className="text-gray-300 italic">Bachelor of Technology in Artificial Intelligence and Data Science</div>
                </div>
                <div className="text-right sm:text-right font-mono text-gray-400">
                  <div>Tirunelveli, Tamil Nadu</div>
                  <div className="text-green-400 font-semibold">Expected May 2029 — CGPA: 8.856/10</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div>
                  <strong className="text-sm text-white font-bold">SBIOA Matriculation & Higher Secondary School</strong>
                  <div className="text-gray-300 italic">Higher Secondary Education</div>
                </div>
                <div className="text-right sm:text-right font-mono text-gray-400">
                  <div>Trichy, Tamil Nadu</div>
                  <div className="text-green-400 font-semibold">March 2025 — Percentage: 81.8</div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold text-blue-400 uppercase tracking-widest border-b border-white/10 pb-1 font-mono">
              Technical Skills
            </h2>
            <div className="text-xs space-y-1.5">
              <div>
                <strong className="text-white font-semibold">Languages:</strong> <span className="text-gray-300 font-mono">Python, C, C++, Java, JavaScript, HTML, CSS</span>
              </div>
              <div>
                <strong className="text-white font-semibold">Libraries & Framework:</strong> <span className="text-gray-300 font-mono">NumPy, Pandas, FastAPI.</span>
              </div>
              <div>
                <strong className="text-white font-semibold">Developer Tools:</strong> <span className="text-gray-300 font-mono">Git, GitHub, Docker, Firebase, VS Code</span>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold text-blue-400 uppercase tracking-widest border-b border-white/10 pb-1 font-mono">
              Projects
            </h2>
            <div className="space-y-4 text-xs">
              <div>
                <div className="font-bold text-white text-sm">
                  AI Personal Assistant <span className="text-gray-400 font-normal font-mono text-xs">| Python, LLMs, Vector Databases, Git</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-gray-300 mt-1 pl-1">
                  <li>Developing a modular AI assistant with voice interaction, agent workflows, and task execution capabilities.</li>
                  <li>Implementing semantic search and memory retrieval.</li>
                  <li>Building REST APIs with FastAPI while emphasizing reliability and scalable software design.</li>
                </ul>
              </div>

              <div>
                <div className="font-bold text-white text-sm">
                  AI Chatbot System <span className="text-gray-400 font-normal font-mono text-xs">| Python, NLP, Text Processing</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-gray-300 mt-1 pl-1">
                  <li>Built a conversational chatbot capable of answering multi-turn user queries efficiently.</li>
                  <li>Developed text-processing pipelines and custom conversational logic.</li>
                  <li>Performed debugging and optimization to improve response quality and reliability.</li>
                </ul>
              </div>

              <div>
                <div className="font-bold text-white text-sm">
                  URL Shortener Service <span className="text-gray-400 font-normal font-mono text-xs">| Python, FastAPI, Docker</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-gray-300 mt-1 pl-1">
                  <li>Developing a scalable URL shortening service with efficient data retrieval and storage.</li>
                  <li>Containerizing the application with Docker and building REST APIs using FastAPI.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Achievements & Activities */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold text-blue-400 uppercase tracking-widest border-b border-white/10 pb-1 font-mono">
              Achievements & Activities
            </h2>
            <ul className="list-disc list-inside space-y-2 text-xs text-gray-300 pl-1">
              <li>
                <strong className="text-white">Google Gemini:</strong> Gemini Certified University Student demonstrating proficiency in prompt engineering and AI tool integration.
              </li>
              <li>
                <strong className="text-white">Smart India Hackathon 2025:</strong> Participated in a national-scale hackathon, collaborating on engineering solutions under strict time constraints.
              </li>
              <li>
                <strong className="text-white">Research Publication:</strong> Co-authored and presented the paper <em className="text-purple-300">Deep Sea Meets Deep Learning: Natural Language Processing for Identifying Marine Species</em> at SMART'25 International Conference using BERT, Word2Vec, and machine learning techniques.
              </li>
              <li>
                <strong className="text-white">Technical Certifications:</strong> Completed Python 101 for Data Science (IBM) and Python for Everybody.
              </li>
              <li>
                <strong className="text-white">IoT Internship:</strong> Completed Smart Innovations with Internet of Things internship.
              </li>
            </ul>
          </div>

          {/* Extracurricular Activities */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold text-blue-400 uppercase tracking-widest border-b border-white/10 pb-1 font-mono">
              Extracurricular Activities
            </h2>
            <p className="text-xs text-gray-300 pl-1">
              • <strong className="text-white">National Cadet Corps (NCC):</strong> Former active NCC member; developed discipline, teamwork and leadership skills.
            </p>
          </div>

          {/* Hobbies */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold text-blue-400 uppercase tracking-widest border-b border-white/10 pb-1 font-mono">
              Hobbies
            </h2>
            <p className="text-xs text-gray-300 pl-1">
              • Coding Challenges, AI projects, Hackathons, Chess, Drawing.
            </p>
          </div>

          {/* Languages */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold text-blue-400 uppercase tracking-widest border-b border-white/10 pb-1 font-mono">
              Languages
            </h2>
            <p className="text-xs text-gray-300 pl-1">
              • English, Tamil (Native).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
