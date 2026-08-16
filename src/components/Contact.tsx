import React, { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle2, Copy, Check, Sparkles, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    // Direct mailto generation for immediate delivery option + client validation acknowledgement
    setSubmitted(true);
  };

  const handleOpenMailto = () => {
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0A0A0B] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-block px-3 py-1 rounded-sm border border-blue-500/30 bg-blue-500/5 text-[10px] text-blue-400 uppercase tracking-widest font-semibold mb-3">
            Get in Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Contact & Collaboration
          </h2>
          <p className="text-gray-400 text-base max-w-2xl mt-2">
            Interested in discussing AI engineering, research collaborations, software development, or internship opportunities? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Col: Contact Information Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="p-5 rounded-xl bg-[#0F0F12] border border-white/10 hover:border-blue-500/40 transition-all flex items-center justify-between group">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-gray-400">Institutional & Personal Email</div>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors break-all"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-xl bg-[#0F0F12] border border-white/10 hover:border-blue-500/40 transition-all flex items-center justify-between group">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-green-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-gray-400">Phone Number</div>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="text-sm font-bold text-white group-hover:text-green-400 transition-colors"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyPhone}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                title="Copy Phone"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-xl bg-[#0F0F12] border border-white/10 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-purple-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-gray-400">Location</div>
                <div className="text-sm font-bold text-white">
                  {PERSONAL_INFO.location}
                </div>
              </div>
            </div>

            {/* LinkedIn & GitHub Links */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#0F0F12] border border-white/10 hover:border-blue-500/40 hover:bg-white/5 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="w-5 h-5 text-blue-400" />
                  <span className="text-sm font-semibold text-white group-hover:text-blue-300">LinkedIn</span>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-gray-300" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#0F0F12] border border-white/10 hover:border-blue-500/40 hover:bg-white/5 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-2.5">
                  <Github className="w-5 h-5 text-gray-200" />
                  <span className="text-sm font-semibold text-white group-hover:text-gray-300">GitHub</span>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-gray-300" />
              </a>
            </div>
          </div>

          {/* Right Col: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-xl bg-[#0F0F12] border border-white/10 shadow-xl">
              <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs text-gray-400 mb-6">
                Fill out the form below. Client validation is enabled with direct email dispatch options.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-green-950/40 border border-green-500/30 text-center space-y-4 animate-in fade-in duration-200">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Thank you, {name}!</h4>
                    <p className="text-xs text-gray-300 mt-1">
                      Your message has been formatted. You can also trigger your local email client directly:
                    </p>
                  </div>
                  <div className="flex flex-wrap justify-center gap-3 pt-2">
                    <button
                      onClick={handleOpenMailto}
                      className="px-4 py-2 rounded-md bg-green-600 hover:bg-green-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send via Default Email App</span>
                    </button>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setName('');
                        setEmail('');
                        setMessage('');
                      }}
                      className="px-4 py-2 rounded-md bg-white/5 hover:bg-white/10 text-gray-300 text-xs font-medium border border-white/10 transition-colors"
                    >
                      Reset Form
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="text-xs font-mono text-gray-400 block mb-1.5">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Alex Morgan"
                        className="w-full bg-[#0A0A0B] border border-white/10 rounded-md px-3.5 py-2.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="text-xs font-mono text-gray-400 block mb-1.5">
                        Your Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. alex@example.com"
                        className="w-full bg-[#0A0A0B] border border-white/10 rounded-md px-3.5 py-2.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="text-xs font-mono text-gray-400 block mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Hi Shriram, I saw your portfolio and would like to discuss..."
                      className="w-full bg-[#0A0A0B] border border-white/10 rounded-md px-3.5 py-2.5 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 resize-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    id="contact-submit-btn"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-md shadow-blue-600/30 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
