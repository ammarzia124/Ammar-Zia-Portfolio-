import { GraduationCap, Shield, Network, Bot, Lock, Server } from "lucide-react";
import type { ComponentType } from "react";

export interface TrustBadge {
  label: string;
  icon: ComponentType<{ className?: string }>;
}

export const trustBadges: TrustBadge[] = [
  { label: "BSCS Student", icon: GraduationCap },
  { label: "CCNA Certified", icon: Network },
  { label: "CCNP Training", icon: Server },
  { label: "NGFW Training", icon: Shield },
  { label: "Cybersecurity Focus", icon: Lock },
  { label: "AI & Automation", icon: Bot },
];
