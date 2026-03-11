
export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  technologies: string[];
  category: "Projet académique" | "Projet de stage" | "Projet personnel";
  images: string[];
  link?: string;
}

export interface Experience {
  company: string;
  location: string;
  role: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface Education {
  institution: string;
  location: string;
  degree: string;
  period: string;
  specialty?: string;
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface Message {
  role: 'user' | 'bot';
  text: string;
}
