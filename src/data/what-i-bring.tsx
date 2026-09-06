import { Shield, Code, Brain, Users } from "lucide-react";
import type { ComponentType } from "react";

export interface ValueCard {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
}

export const valueCards: ValueCard[] = [
  {
    title: "Security-First Mindset",
    description:
      "I approach every project with security as a core consideration, not an afterthought. From network hardening to secure coding practices, protection is built in from day one.",
    icon: Shield,
  },
  {
    title: "Full-Stack Capability",
    description:
      "I build complete systems end-to-end — from database design and API architecture to responsive frontends and deployment pipelines.",
    icon: Code,
  },
  {
    title: "AI & Automation Fluency",
    description:
      "I leverage AI agents and automation workflows to multiply productivity, reduce manual effort, and build intelligent systems that adapt and learn.",
    icon: Brain,
  },
  {
    title: "Community Leadership",
    description:
      "I lead technical communities, mentor developers, and organize events — because the best technology is built by teams that grow together.",
    icon: Users,
  },
];
