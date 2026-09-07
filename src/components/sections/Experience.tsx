"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { experiences } from "@/data/experience";

export function Experience() {
  const listRef = useScrollReveal<HTMLDivElement>({ stagger: 0.1 });

  return (
    <SectionWrapper id="experience">
      <SectionHeading
        id="experience-heading"
        title="Experience & Leadership"
        subtitle="Roles where I've led teams, organized events, and contributed to technical communities."
      />

      <div className="relative ml-4 border-l border-border pl-8 md:ml-0 md:pl-0 md:border-none md:border-l-0">
        <div ref={listRef} className="flex flex-col gap-12">
          {experiences.map((exp, i) => (
            <div data-reveal key={i} className="relative flex gap-8">
              {/* Timeline dot */}
              <div className="absolute -left-12 top-1 hidden h-3 w-3 rounded-full border-2 border-primary bg-background md:block" aria-hidden="true" />

              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
                  <h3 className="font-semibold text-foreground">{exp.role}</h3>
                  <span className="text-sm text-primary">{exp.organization}</span>
                </div>
                <p className="text-sm text-muted-foreground">{exp.period}</p>
                <p className="max-w-2xl text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
                <ul className="mt-2 flex flex-col gap-2">
                  {exp.highlights.map((highlight, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
