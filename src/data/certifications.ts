export interface Certification {
  name: string;
  issuer: string;
  description: string;
}

export const certifications: Certification[] = [
  {
    name: "CCNA (Cisco Certified Network Associate)",
    issuer: "Cisco",
    description:
      "Foundational networking certification covering network fundamentals, IP connectivity, security fundamentals, and automation.",
  },
  {
    name: "CCNP Training",
    issuer: "Cisco",
    description:
      "Advanced networking training covering enterprise infrastructure, routing, switching, and network security.",
  },
  {
    name: "NGFW Training",
    issuer: "[Training Provider]",
    description:
      "Hands-on training in Next-Generation Firewall configuration, threat detection, and security policy management.",
  },
];
