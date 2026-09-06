export type ProjectCategory =
  | "cybersecurity"
  | "networking"
  | "web-development"
  | "ai-automation"
  | "tools-infrastructure";

export type ProjectStatus = "live" | "in-progress" | "archived" | "private";

export type ProficiencyLevel = "core" | "strong" | "familiar" | "learning";

export interface ProjectTechnology {
  name: string;
  category: ProjectCategory;
}

export interface ProjectCaseStudy {
  problem: string;
  approach: string;
  solution: string;
  challenges: string[];
  outcome: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: ProjectCategory;
  status: ProjectStatus;
  featured: boolean;
  technologies: ProjectTechnology[];
  highlights: string[];
  role: string;
  caseStudy: ProjectCaseStudy;
  links: {
    github?: string;
    demo?: string;
    writeup?: string;
  };
  thumbnail?: string;
  year: number;
}
