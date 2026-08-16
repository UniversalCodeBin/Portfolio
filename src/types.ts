export interface Project {
  id: string;
  number: string;
  title: string;
  technologies: string[];
  description: string;
  highlights: string[];
  architectureType: 'assistant' | 'chatbot' | 'url_shortener';
  githubUrl?: string;
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    description: string;
    iconName: string;
  }[];
}

export interface Publication {
  title: string;
  conference: string;
  presentationType: string;
  authorship: string;
  methodologies: string[];
  description: string;
  focusArea: string;
}

export interface Achievement {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'Certification' | 'Hackathon' | 'Internship' | 'Recognition';
  badge: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  location: string;
  timeline: string;
  scoreLabel: string;
  scoreValue: string;
  highlights: string[];
}
