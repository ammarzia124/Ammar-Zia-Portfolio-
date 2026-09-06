export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Cybersecurity",
    skills: [
      "Network Security",
      "Firewall Configuration",
      "NGFW (Next-Generation Firewall)",
      "Vulnerability Assessment",
      "Security Hardening",
      "Incident Response Basics",
    ],
  },
  {
    name: "Networking",
    skills: [
      "TCP/IP & OSI Model",
      "Routing & Switching",
      "VPN Configuration",
      "Network Monitoring",
      "Cisco IOS",
      "Packet Analysis",
    ],
  },
  {
    name: "Development",
    skills: [
      "React & Next.js",
      "TypeScript",
      "Node.js & Express",
      "PostgreSQL & MongoDB",
      "REST APIs & GraphQL",
      "Git & CI/CD",
    ],
  },
  {
    name: "AI & Automation",
    skills: [
      "Agentic AI Systems",
      "Prompt Engineering",
      "LangChain & LLMs",
      "Workflow Automation",
      "Python Scripting",
      "AI Agent Orchestration",
    ],
  },
  {
    name: "Tools & Platforms",
    skills: [
      "Linux Administration",
      "Docker & Containers",
      "AWS ( Basics)",
      "VS Code & JetBrains",
      "Figma",
      "Notion & Project Management",
    ],
  },
];
