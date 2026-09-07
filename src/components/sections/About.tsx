"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { about } from "@/data/about";
import { CheckCircle } from "lucide-react";

export function About() {
  const gridRef = useScrollReveal<HTMLDivElement>();
  const listRef = useScrollReveal<HTMLDivElement>({ stagger: 0.08 });

  return (
    <SectionWrapper id="about">
      <SectionHeading
        id="about-heading"
        title={about.heading}
        subtitle="A bit about my background, what drives me, and where I'm headed."
      />

      <div ref={gridRef} className="grid gap-12 lg:grid-cols-5 lg:gap-16">
        {/* Photo Placeholder */}
        <div data-reveal className="lg:col-span-2">
          <div className="aspect-[4/5] w-full max-w-sm rounded-lg bg-muted/50 border border-border flex items-center justify-center">
            <span className="text-sm text-muted-foreground">[Photo]</span>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          {about.paragraphs.map((paragraph, i) => (
            <p data-reveal key={i} className="text-muted-foreground leading-relaxed text-max-w">
              {paragraph}
            </p>
          ))}

          <div className="mt-4">
            <h3 data-reveal className="heading-sm mb-4">{about.journeyHeading}</h3>
            <div ref={listRef}>
              <ul className="flex flex-col gap-3">
                {about.journey.map((item, i) => (
                  <li data-reveal key={i} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
