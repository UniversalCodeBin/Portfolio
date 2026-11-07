import { Project, SkillCategory, Publication, Achievement, EducationItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Shriram R',
  role: 'Applied AI • Optimization • Python Backend',
  tagline: 'Building AI systems that make safe, auditable decisions.',
  bio: 'Artificial Intelligence and Data Science undergraduate at Francis Xavier Engineering College. I build AI systems that turn predictions into decisions people can trust, combining machine learning, optimization and backend engineering.',
  email: 'shriramr.ug.25.ad@francisxavier.ac.in',
  phone: '+91 8098539764',
  location: 'Tiruchirappalli, Tamil Nadu, India',
  linkedin: 'https://linkedin.com/in/shriram2008/',
  github: 'https://github.com/UniversalCodeBin',
  status: 'Open to AI/ML & backend internships',
  stats: [
    { label: 'Degree', value: 'B.Tech AI & DS', detail: 'Artificial Intelligence & Data Science' },
    { label: 'Academic Standing', value: '8.667 / 10', detail: 'Cumulative Grade Point Average (CGPA)' },
    { label: 'Expected Graduation', value: 'May 2029', detail: 'Francis Xavier Engineering College' },
    { label: 'Core Languages', value: 'Python first', detail: 'Python, TypeScript, JavaScript, SQL, C' },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: 'revenue-recovery-portfolio-allocator',
    number: '01',
    title: 'Revenue Recovery Portfolio Allocator',
    technologies: ['Python', 'scikit-learn', 'OR-Tools', 'FastAPI', 'React', 'PostgreSQL'],
    description:
      'When online payments fail, businesses try to win them back with retries, reminders, incentives or a support call, but each of those resources is limited. RPA treats recovery as a portfolio decision: it predicts which actions are likely to work, weighs their value against their cost, blocks unsafe actions, and distributes the shared budget across the whole batch. Evaluated on synthetic payment data.',
    highlights: [
      'Machine learning model estimates how likely each recovery action is to succeed',
      'Expected-value layer weighs the gain of each action against its cost',
      'Policy rules block actions that would be unsafe or non-compliant',
      'Optimizer allocates limited retries, messages, incentives and agent time across the whole portfolio',
      'Dashboard with a plain-language reason per transaction, outcome simulation and a full audit trail',
    ],
    architectureType: 'url_shortener',
    pipeline: [
      { stage: 'PREDICT', title: 'Recovery Model', note: 'Chance of success per action' },
      { stage: 'DECIDE', title: 'Value + Policy', note: 'Gain vs cost, unsafe actions blocked' },
      { stage: 'ALLOCATE', title: 'Portfolio Optimizer', note: 'Shared budget across the batch' },
      { stage: 'EXPLAIN', title: 'Plan & Audit', note: 'Reasons, simulation, audit trail' },
    ],
    githubUrl: 'https://github.com/UniversalCodeBin/Recovery-Portfolio-Allocator-RPA-',
  },
  {
    id: 'homecare-copilot',
    number: '02',
    title: 'HomeCare Copilot',
    technologies: ['Python', 'MCP', 'FastAPI', 'SQLite'],
    description:
      'An AI assistant that can change device settings or order parts needs limits it cannot talk its way around. HomeCare Copilot is a Model Context Protocol (MCP) server that gives a voice-assistant-style agent tools for simulated home appliances, with the safety rules enforced on the server rather than in the prompt.',
    highlights: [
      'Tools to diagnose appliance problems and recommend maintenance',
      'Safe settings changes and previews of device actions before they run',
      'Replacement-part ordering with explicit confirmation and spending limits',
      'Duplicate orders prevented and every action written to an audit log',
      'Host app that plans each request and shows the tool calls step by step (rule-based planner; simulated appliances)',
    ],
    architectureType: 'url_shortener',
    pipeline: [
      { stage: 'HOST', title: 'Assistant & Planner', note: 'Plans the request' },
      { stage: 'PROTOCOL', title: 'MCP Server', note: 'Typed appliance tools' },
      { stage: 'SAFETY', title: 'Server-Side Policy', note: 'Confirmation, limits, audit' },
    ],
    githubUrl: 'https://github.com/UniversalCodeBin/HomeCare-Copilot',
  },
  {
    id: 'voxsentra',
    number: '03',
    title: 'VoxSentra',
    technologies: ['Python', 'PyTorch', 'FastAPI', 'librosa'],
    description:
      'Team project built at HACKITON’26 to help people spot AI-generated voice impersonation. The service analyses a voice sample with a deep-learning audio classifier, combines it with contextual fraud signals and returns a 0–100 risk score with a recommendation to verify independently. Model evaluation on the ASVspoof 2019 benchmark is in progress.',
    highlights: [
      'Speech converted into spectrogram features and scored by a CNN classifier',
      'Contextual fraud signals combined into a single 0–100 risk score',
      'Privacy-first: raw audio is deleted as soon as it has been analysed',
      'Clearly reports demo mode until the trained model has been evaluated',
    ],
    architectureType: 'url_shortener',
    pipeline: [
      { stage: 'LISTEN', title: 'Audio Pipeline', note: 'Spectrogram features' },
      { stage: 'DETECT', title: 'CNN Classifier', note: 'Evaluation in progress' },
      { stage: 'SCORE', title: 'Risk Engine', note: '0–100 risk + advice' },
    ],
    githubUrl: 'https://github.com/UniversalCodeBin/VoxSentra',
  },
  {
    id: 'url-shortener-service',
    number: '04',
    title: 'URL Shortener Service',
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker'],
    description:
      'A backend service built to practise clean, production-style architecture: create short links, redirect quickly through a cache in front of the database, track clicks and run the whole stack in containers.',
    highlights: [
      'Layered API, service and data-access design',
      'Fast redirects through a Redis cache in front of PostgreSQL',
      'Click analytics for every short link',
      'Containerized with Docker Compose',
    ],
    architectureType: 'url_shortener',
    pipeline: [
      { stage: 'API', title: 'FastAPI Service', note: 'Create & resolve links' },
      { stage: 'CACHE', title: 'Redis', note: 'Fast redirects' },
      { stage: 'STORE', title: 'PostgreSQL', note: 'Links & click analytics' },
    ],
    githubUrl: 'https://github.com/UniversalCodeBin/Url_Shortener',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'Python', description: 'Primary language for machine learning, optimization and backend services', iconName: 'Terminal' },
      { name: 'TypeScript', description: 'Typed frontend code for project dashboards', iconName: 'Braces' },
      { name: 'JavaScript', description: 'Interactive web interfaces', iconName: 'Braces' },
      { name: 'SQL', description: 'Querying and modelling relational data', iconName: 'Table' },
      { name: 'C', description: 'Programming fundamentals and problem solving', iconName: 'Cpu' },
      { name: 'HTML & CSS', description: 'Page structure and responsive styling', iconName: 'Layout' },
    ],
  },
  {
    category: 'AI, ML & Optimization',
    skills: [
      { name: 'scikit-learn', description: 'Classical machine learning models and evaluation', iconName: 'Cpu' },
      { name: 'PyTorch', description: 'Deep learning for audio classification', iconName: 'Zap' },
      { name: 'NumPy & Pandas', description: 'Numerical computing and data preparation', iconName: 'Grid' },
      { name: 'OR-Tools', description: 'Integer linear programming for resource allocation', iconName: 'Code2' },
    ],
  },
  {
    category: 'Backend & Infrastructure',
    skills: [
      { name: 'FastAPI', description: 'REST services for ML and data workflows', iconName: 'Zap' },
      { name: 'Model Context Protocol', description: 'Tool servers that let AI agents act safely', iconName: 'Box' },
      { name: 'PostgreSQL & Redis', description: 'Relational storage and caching', iconName: 'Table' },
      { name: 'Docker', description: 'Containerized, reproducible environments', iconName: 'Box' },
      { name: 'Git & GitHub Actions', description: 'Version control and continuous integration', iconName: 'GitBranch' },
      { name: 'React', description: 'Dashboards for project results', iconName: 'Layout' },
    ],
  },
];

export const PUBLICATION: Publication = {
  title: 'Deep Sea Meets Deep Learning: Natural Language Processing for Identifying Marine Species',
  conference: "SMART'25 International Conference",
  presentationType: 'Presented at International Conference',
  authorship: 'Co-authored Paper',
  focusArea: 'Applied NLP for Marine Biodiversity',
  methodologies: [
    'BERT',
    'Word2Vec Embeddings',
    'Natural Language Processing',
    'Machine Learning Classifiers',
  ],
  description: 'Co-authored and presented research applying natural language processing to marine species identification, using BERT and Word2Vec representations with machine learning classifiers.',
};

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'ryhathon-2026',
    title: '2nd Place, RYHATHON 2026',
    subtitle: '36-hour hackathon by Ryha Technologies',
    description: 'Placed second with team ASTRIX and won INR 10,000 at a 36-hour hackathon held at Francis Xavier Engineering College.',
    category: 'Hackathon',
    badge: 'Winner – 2nd Place',
  },
  {
    id: 'hackathons',
    title: 'National Hackathons',
    subtitle: 'SIH 2025 · HACKITON’26 · Bharatiya Antariksh Hackathon 2026 · AI in Healthcare 2026 · United Hacks V7',
    description: 'Built and pitched prototypes under tight deadlines, including VoxSentra at HACKITON’26.',
    category: 'Hackathon',
    badge: 'Participant',
  },
  {
    id: 'nptel-python',
    title: 'The Joy of Computing using Python',
    subtitle: 'NPTEL',
    description: 'Completed with a score of 84/100.',
    category: 'Certification',
    badge: 'NPTEL',
  },
  {
    id: 'google-gemini',
    title: 'Gemini Certified University Student',
    subtitle: 'Google for Education',
    description: 'Google for Education certification in using Gemini.',
    category: 'Certification',
    badge: 'Google',
  },
  {
    id: 'cert-python-ds',
    title: 'Python for Data Science',
    subtitle: 'IBM',
    description: 'Foundations of Python programming for data science.',
    category: 'Certification',
    badge: 'IBM',
  },
  {
    id: 'cert-more',
    title: 'Python for Everybody · Deloitte Data Analytics Job Simulation',
    subtitle: 'Course and job simulation (Forage)',
    description: 'Python fundamentals and a practical data analytics simulation.',
    category: 'Certification',
    badge: 'Completed',
  },
  {
    id: 'iot-internship',
    title: 'Smart Innovations with Internet of Things',
    subtitle: 'Internship program',
    description: 'Introductory program on connected sensor systems and IoT applications.',
    category: 'Internship',
    badge: 'Completed',
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: 'Francis Xavier Engineering College',
    degree: 'Bachelor of Technology in Artificial Intelligence and Data Science',
    location: 'Tirunelveli, Tamil Nadu',
    timeline: 'Aug 2025 – May 2029 (Expected)',
    scoreLabel: 'CGPA',
    scoreValue: '8.667 / 10',
    highlights: [
      'Coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Machine Learning, Operating Systems, Computer Networks',
      'Co-authored NLP research presented at the SMART’25 International Conference',
      '2nd place at RYHATHON 2026',
    ],
  },
  {
    institution: 'SBIOA Matriculation & Higher Secondary School',
    degree: 'Higher Secondary Education',
    location: 'Trichy, Tamil Nadu',
    timeline: 'March 2025',
    scoreLabel: 'Percentage',
    scoreValue: '81.8%',
    highlights: [
      'Mathematics, Physics and Computer Science',
    ],
  },
];

export const EXTRACURRICULAR_DATA = {
  ncc: {
    title: 'National Cadet Corps (NCC)',
    role: 'Former NCC Cadet',
    description: 'Built discipline, teamwork and leadership through drills, camps and community service.',
    pillars: ['Discipline', 'Teamwork', 'Leadership', 'Resilience'],
  },
  hobbies: [
    { name: 'Volunteer Teaching', detail: 'Taught 9th–12th standard students with Talent Quest for India (Oct 2026)' },
    { name: 'Hackathons', detail: 'Rapid prototyping with a team under strict deadlines' },
    { name: 'Coding Challenges', detail: 'Algorithmic problem solving and data structures' },
    { name: 'Chess', detail: 'Strategic planning and pattern recognition' },
    { name: 'Drawing', detail: 'Creative sketching and visual composition' },
  ],
  languages: [
    { name: 'English', proficiency: 'Professional Working Proficiency' },
    { name: 'Tamil', proficiency: 'Native / Mother Tongue' },
  ],
};
