import { Project, SkillCategory, Publication, Achievement, EducationItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Shriram R',
  role: 'AI Engineer • Software Developer • AI Researcher',
  tagline: 'Building modular AI systems, high-performance software, and deep-learning research solutions.',
  bio: 'Artificial Intelligence and Data Science undergraduate at Francis Xavier Engineering College with a focus on designing practical AI systems, robust software applications, and research-oriented machine learning architectures.',
  email: 'shriramr.ug.25.ad@francisxavier.ac.in',
  phone: '+91 8098539764',
  location: 'Tiruchirappalli, Tamil Nadu, India',
  linkedin: 'https://linkedin.com/in/shriram2008/',
  github: 'https://github.com/UniversalCodeBin',
  status: 'Available for opportunities',
  stats: [
    { label: 'Degree', value: 'B.Tech AI & DS', detail: 'Artificial Intelligence & Data Science' },
    { label: 'Academic Standing', value: '8.856 / 10', detail: 'Cumulative Grade Point Average (CGPA)' },
    { label: 'Expected Graduation', value: 'May 2029', detail: 'Francis Xavier Engineering College' },
    { label: 'Core Languages', value: '7 Languages', detail: 'Python, C, C++, Java, JS, HTML, CSS' },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: 'ai-personal-assistant',
    number: '01',
    title: 'AI Personal Assistant',
    technologies: ['Python', 'LLMs', 'Vector Databases', 'Git', 'FastAPI'],
    description: 'A modular AI personal assistant with voice interaction, agent workflows, task execution capabilities, semantic search, and memory retrieval.',
    highlights: [
      'Voice interaction & audio synthesis pipelines',
      'Agent workflows and automated task execution',
      'Semantic search and memory retrieval via vector databases',
      'REST APIs with FastAPI emphasizing reliability and scalable software design',
      'Modular micro-service architecture for extensibility'
    ],
    architectureType: 'assistant',
    githubUrl: 'https://github.com/UniversalCodeBin',
  },
  {
    id: 'ai-chatbot-system',
    number: '02',
    title: 'AI Chatbot System',
    technologies: ['Python', 'NLP', 'Text Processing'],
    description: 'A conversational chatbot capable of handling multi-turn user queries efficiently with custom conversational logic and text-processing pipelines.',
    highlights: [
      'Multi-turn conversational state tracking',
      'Custom text-processing pipelines and token normalization',
      'Context-aware response generation logic',
      'System debugging and optimization for low-latency response reliability',
      'Intent classification and fallback handling'
    ],
    architectureType: 'chatbot',
    githubUrl: 'https://github.com/UniversalCodeBin',
  },
  {
    id: 'url-shortener-service',
    number: '03',
    title: 'URL Shortener Service',
    technologies: ['Python', 'FastAPI', 'Docker'],
    description: 'A scalable URL shortening service with efficient data retrieval and storage, fully containerized using Docker and powered by FastAPI REST endpoints.',
    highlights: [
      'High-throughput REST API built with FastAPI',
      'Efficient data retrieval algorithms and compact key generation',
      'Containerized deployment setup with Docker',
      'Structured request validation and error boundary handling',
      'Low-overhead persistence layer for rapid redirection'
    ],
    architectureType: 'url_shortener',
    githubUrl: 'https://github.com/UniversalCodeBin',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'Python', description: 'Primary language for AI systems, backend microservices, and NLP', iconName: 'Terminal' },
      { name: 'C', description: 'Low-level systems programming and memory management', iconName: 'Cpu' },
      { name: 'C++', description: 'High-performance computing and algorithmic data structures', iconName: 'Code2' },
      { name: 'Java', description: 'Object-oriented application development and enterprise patterns', iconName: 'Coffee' },
      { name: 'JavaScript', description: 'Interactive frontend development and dynamic web scripting', iconName: 'Braces' },
      { name: 'HTML', description: 'Semantic document structure and web accessibility standards', iconName: 'Layout' },
      { name: 'CSS', description: 'Responsive layout systems, flexbox, grid, and modern styling', iconName: 'Palette' },
    ],
  },
  {
    category: 'Libraries & Frameworks',
    skills: [
      { name: 'NumPy', description: 'Numerical computing, multi-dimensional array operations, and linear algebra', iconName: 'Grid' },
      { name: 'Pandas', description: 'Data structures, exploratory data analysis, and tabular data transformation', iconName: 'Table' },
      { name: 'FastAPI', description: 'High-performance asynchronous Python REST APIs and OpenAPI schemas', iconName: 'Zap' },
    ],
  },
  {
    category: 'Developer Tools',
    skills: [
      { name: 'Git', description: 'Distributed version control, branching strategies, and codebase maintenance', iconName: 'GitBranch' },
      { name: 'GitHub', description: 'Remote code repository management and collaboration workflow', iconName: 'Github' },
      { name: 'Docker', description: 'Application containerization and reproducible runtime environments', iconName: 'Box' },
      { name: 'Firebase', description: 'Cloud data storage, user authentication, and backend services', iconName: 'Flame' },
      { name: 'VS Code', description: 'Extensible integrated development environment and debugging workflows', iconName: 'FileCode' },
    ],
  },
];

export const PUBLICATION: Publication = {
  title: 'Deep Sea Meets Deep Learning: Natural Language Processing for Identifying Marine Species',
  conference: "SMART'25 International Conference",
  presentationType: 'Presented at International Conference',
  authorship: 'Co-authored Paper',
  focusArea: 'Marine Biodiversity & Applied NLP',
  methodologies: [
    'BERT (Bidirectional Encoder Representations from Transformers)',
    'Word2Vec Embeddings',
    'Natural Language Processing',
    'Machine Learning Classifiers',
    'Taxonomic Text Feature Extraction'
  ],
  description: 'Co-authored and presented research exploring natural language processing techniques to classify and identify marine species from scientific taxonomies and biological literature, utilizing transformer models (BERT) and vector space semantics (Word2Vec).'
};

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'google-gemini',
    title: 'Google Gemini Certified',
    subtitle: 'Gemini Certified University Student',
    description: 'Demonstrated proficiency in prompt engineering, advanced multimodal AI integration, and LLM orchestration tools.',
    category: 'Recognition',
    badge: 'AI Certification',
  },
  {
    id: 'sih-2025',
    title: 'Smart India Hackathon 2025',
    subtitle: 'National-Scale Hackathon Participant',
    description: 'Participated in a premier national-scale hackathon, collaborating on engineering solutions and software implementations under intense time constraints.',
    category: 'Hackathon',
    badge: 'National Hackathon',
  },
  {
    id: 'cert-python-ds',
    title: 'Python 101 for Data Science',
    subtitle: 'IBM Technical Certification',
    description: 'Completed comprehensive course covering foundational Python programming, data structures, and data science methodologies.',
    category: 'Certification',
    badge: 'IBM Certified',
  },
  {
    id: 'cert-py4e',
    title: 'Python for Everybody',
    subtitle: 'Technical Certification',
    description: 'Mastered programming concepts, web data extraction, database interaction, and algorithmic thinking.',
    category: 'Certification',
    badge: 'Course Completion',
  },
  {
    id: 'iot-internship',
    title: 'Smart Innovations with Internet of Things',
    subtitle: 'IoT Internship',
    description: 'Completed hands-on internship exploring connected sensor systems, hardware-software interfacing, and embedded IoT architectures.',
    category: 'Internship',
    badge: 'Internship Completed',
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    institution: 'Francis Xavier Engineering College',
    degree: 'Bachelor of Technology in Artificial Intelligence and Data Science',
    location: 'Tirunelveli, Tamil Nadu',
    timeline: 'Expected May 2029',
    scoreLabel: 'CGPA',
    scoreValue: '8.856 / 10',
    highlights: [
      'Core focus on Machine Learning, Neural Networks, Data Structures, and Algorithm Design',
      'Active researcher in applied NLP & deep learning solutions',
      'Maintained consistent top academic performance (8.856 CGPA)'
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
      'Rigorous foundation in Mathematics, Physics, and Computer Science',
      'Active participation in student leadership and academic competitions'
    ],
  },
];

export const EXTRACURRICULAR_DATA = {
  ncc: {
    title: 'National Cadet Corps (NCC)',
    role: 'Former Active NCC Member',
    description: 'Developed rigorous discipline, team-first leadership, and crisis management skills through regimented drills, community service, and team exercises.',
    pillars: ['Discipline', 'Teamwork', 'Leadership', 'Resilience'],
  },
  hobbies: [
    { name: 'Coding Challenges', detail: 'Algorithmic problem solving and data structures' },
    { name: 'AI Projects', detail: 'Prototyping agent workflows and experimenting with models' },
    { name: 'Hackathons', detail: 'Rapid collaborative prototyping under strict deadlines' },
    { name: 'Chess', detail: 'Strategic planning, pattern recognition, and tactical calculation' },
    { name: 'Drawing', detail: 'Visual composition, creative sketching, and aesthetic balance' },
  ],
  languages: [
    { name: 'English', proficiency: 'Professional Working Proficiency' },
    { name: 'Tamil', proficiency: 'Native / Mother Tongue' },
  ],
};
