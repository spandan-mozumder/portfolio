
export interface Skill {
  category: string;
  technologies: string[];
}

export interface Education {
  institution: string;
  degree: string;
  location: string;
  period: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  images: string[];
  liveUrl: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  x: string;
  portfolio: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  about: string[];
  socials: SocialLinks;
  contact: ContactInfo;
  education: Education;
  skills: Skill[];
  experiences: Experience[];
  projects: Project[];
}