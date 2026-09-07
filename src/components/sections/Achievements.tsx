"use client";

import { Trophy } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { achievements } from "@/data/achievements";

export function Achievements() {
  const gridRef = useScrollReveal<HTMLDivElement>({ stagger: 0.08 });

  return (
    <SectionWrapper id="achievements">
      <SectionHeading
        id="achievements-heading"
        title="Achievements"
        subtitle="Key milestones and recognition along my journey."
      />

      <div ref={gridRef} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {achievements.map((achievement) => (
          <div
            key={achievement.title}
            data-reveal
            className="flex flex-col gap-3 rounded-lg border border-border bg-card p-6 transition-all duration-200 hover:shadow-md"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10">
              <Trophy className="h-4 w-4 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground">{achievement.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {achievement.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
