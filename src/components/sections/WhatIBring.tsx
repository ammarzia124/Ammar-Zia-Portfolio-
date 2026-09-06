"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { valueCards } from "@/data/what-i-bring";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function WhatIBring() {
  const ref = useScrollReveal<HTMLDivElement>({ stagger: 0.1 });

  return (
    <SectionWrapper id="value">
      <SectionHeading
        id="value-heading"
        title="What I Bring"
        subtitle="Core strengths I contribute to every project and team."
      />

      <div ref={ref} className="grid gap-6 sm:grid-cols-2">
        {valueCards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.title}
              data-reveal
              className="flex flex-col gap-4 rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-lg"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {card.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {card.description}
              </p>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
