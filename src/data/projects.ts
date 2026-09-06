import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "cisco-network-security-lab",
    title: "Cisco Network Security Lab",
    tagline: "Enterprise networking and security concepts in a controlled lab environment.",
    description:
      "A hands-on lab environment built in Cisco Packet Tracer, demonstrating enterprise-grade network design with VLAN segmentation, OSPF routing, ACL-based access control, NAT translation, and SSH remote management. Designed to validate networking fundamentals and security hardening practices.",
    category: "networking",
    status: "private",
    featured: false,
    technologies: [
      { name: "Cisco Packet Tracer", category: "networking" },
      { name: "DHCP", category: "networking" },
      { name: "DNS", category: "networking" },
      { name: "VLANs", category: "networking" },
      { name: "OSPF", category: "networking" },
      { name: "ACL", category: "cybersecurity" },
      { name: "NAT", category: "networking" },
      { name: "SSH", category: "cybersecurity" },
    ],
    highlights: [
      "Designed multi-VLAN network topology with inter-VLAN routing",
      "Configured OSPF dynamic routing across multiple router hops",
      "Implemented ACLs to filter traffic between network segments",
      "Applied NAT overload for internal hosts to access external networks",
      "Secured device access with SSH and encrypted passwords",
    ],
    role: "Designed and configured end-to-end",
    caseStudy: {
      problem:
        "Enterprise networks require careful segmentation, routing, and access control to remain secure and performant. Without hands-on practice, these concepts remain theoretical.",
      approach:
        "Built a multi-device lab in Cisco Packet Tracer simulating a small enterprise network with multiple VLANs, routing protocols, and security controls.",
      solution:
        "A fully configured network lab with VLAN segmentation, OSPF routing, ACL traffic filtering, NAT translation, and SSH remote access — demonstrating real-world enterprise networking practices.",
      challenges: [
        "Routing packets correctly across multiple OSPF areas with different network segments",
        "Writing ACL rules that block unauthorized traffic without disrupting legitimate flows",
        "Debugging NAT translation rules when internal and external address spaces overlap",
      ],
      outcome:
        "A working lab environment that demonstrates enterprise networking and security concepts, serving as a practical reference for network design and hardening.",
    },
    links: {},
    year: 2024,
  },
  {
    id: "ai-lead-generation-agent",
    title: "AI Lead Generation Agent",
    tagline: "Automated pipeline that finds and extracts business contact information from the web.",
    description:
      "An automation pipeline that accepts a business search query, discovers local businesses, visits their websites, identifies publicly available contact emails, and outputs organized results. Built with Python and orchestrated through n8n for repeatable, hands-off execution.",
    category: "ai-automation",
    status: "live",
    featured: true,
    technologies: [
      { name: "Python", category: "tools-infrastructure" },
      { name: "Web Scraping", category: "ai-automation" },
      { name: "AI/LLM", category: "ai-automation" },
      { name: "n8n", category: "ai-automation" },
    ],
    highlights: [
      "Accepts a search query and discovers matching local businesses",
      "Automatically visits each business website to extract contact emails",
      "Processes and deduplicates results into a clean, organized output",
      "Runs hands-off through n8n workflow orchestration",
      "Respects robots.txt and applies rate limiting to avoid abuse",
    ],
    role: "Built end-to-end",
    caseStudy: {
      problem:
        "Manually searching for business contact information across dozens of websites is time-consuming, repetitive, and scales poorly.",
      approach:
        "Designed a multi-step automation pipeline: search → discover → scrape → extract → organize. Each step is modular and can be swapped or extended independently.",
      solution:
        "A Python-based pipeline orchestrated through n8n that takes a search query, finds relevant businesses, scrapes their websites for publicly available email addresses, and outputs a structured list — all without manual intervention.",
      challenges: [
        "Handling diverse website structures when extracting contact information reliably",
        "Avoiding rate limits and IP blocks while scraping multiple sites in sequence",
        "Deduplicating and validating extracted emails to ensure output quality",
      ],
      outcome:
        "A working automation pipeline that reduces manual lead research from hours to minutes, producing organized contact lists from a single search query.",
    },
    links: {
      github: "https://github.com/ammarzia/ai-lead-gen",
    },
    year: 2024,
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    tagline: "This website — a modern, accessible portfolio built with contemporary web technologies.",
    description:
      "A single-page portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a custom design system with semantic tokens, GSAP-powered animations, dark mode support, and full accessibility compliance. Designed to be fast, maintainable, and representative of modern frontend practices.",
    category: "web-development",
    status: "live",
    featured: true,
    technologies: [
      { name: "Next.js", category: "web-development" },
      { name: "TypeScript", category: "web-development" },
      { name: "Tailwind CSS", category: "web-development" },
      { name: "GSAP", category: "web-development" },
      { name: "shadcn/ui", category: "web-development" },
    ],
    highlights: [
      "Custom two-layer token system with light/dark mode support",
      "GSAP-powered scroll animations with reduced-motion respect",
      "Fully accessible — semantic HTML, ARIA labels, keyboard navigation",
      "Static generation for fast load times and SEO optimization",
      "Component-based architecture with clean separation of data and UI",
    ],
    role: "Built end-to-end",
    caseStudy: {
      problem:
        "A portfolio website needs to quickly communicate who you are, what you do, and why someone should care — while also demonstrating technical competence through its own implementation.",
      approach:
        "Designed a token-based design system first, then built components on top of it. Every section is powered by a separate data file, making content updates possible without touching component code.",
      solution:
        "A single-page Next.js application with 13 sections, a custom design system, GSAP animations, dark mode, and full accessibility. All content lives in typed data files.",
      challenges: [
        "Building a design token system that works across light and dark modes without duplication",
        "Implementing GSAP animations that gracefully degrade for users who prefer reduced motion",
        "Structuring data files so content can be edited without understanding component code",
      ],
      outcome:
        "A fast, accessible, maintainable portfolio website that serves as both a showcase of work and a demonstration of frontend engineering practices.",
    },
    links: {
      github: "https://github.com/ammarzia/portfolio",
      demo: "https://ammarzia.dev",
    },
    year: 2024,
  },
];
