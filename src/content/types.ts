export interface ContactInfo {
  email: string;
  phone?: string;
  linkedin: string;
  github: string;
  location: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  startDate: string; // "2026-03"
  endDate: string | "present";
  bullets: string[];
  stack?: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  startDate: string;
  endDate: string | "present";
  description?: string;
}

export interface SkillCategory {
  id: string;
  label: string;
  items: string[];
}

export interface LanguageProficiency {
  language: string;
  level: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  stack: string[];
  repoUrl?: string;
  demoUrl?: string;
  imageSrc?: string;
  imageAlt?: string;
  featured?: boolean;
  type?: string; // "Pipeline de Dados", "Dashboard", "Web App"...
  date: string;
}

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  location: string;
  summary: string;
  avatarSrc: string;
  cvUrl: string;
}

export interface Dictionary {
  profile: Profile;
  contact: ContactInfo;
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: SkillCategory[];
  languages: LanguageProficiency[];
  projects: Project[];
}
