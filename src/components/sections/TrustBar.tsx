"use client";

import { trustBadges } from "@/data/trust-bar";
import { Badge } from "@/components/ui/badge";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function TrustBar() {
  const ref = useScrollReveal<HTMLDivElement>({ stagger: 0.05, y: 16 });

  return (
    <SectionWrapper className="py-8 md:py-12">
      <div
        ref={ref}
        className="flex flex-wrap items-center justify-center gap-3"
      >
        {trustBadges.map((badge) => {
          const Icon = badge.icon;
          return (
            <Badge
              key={badge.label}
              variant="secondary"
              data-reveal
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium"
            >
              <Icon className="h-4 w-4 text-primary" />
              {badge.label}
            </Badge>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
