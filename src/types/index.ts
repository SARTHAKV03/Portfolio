export interface Project {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  category: string;
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  highlights?: string[];
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  description: string;
  usage: string;
  icon?: string;
  proficiency?: number;
}

export interface Achievement {
  id: string;
  label: string;
  value: string;
  description: string;
  icon?: string;
}

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'email';
  url: string;
  label: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface TechNode {
  id: string;
  name: string;
  category: string;
  description: string;
  usedIn: string[];
  x: number;
  y: number;
  connectsTo?: string[];
}
