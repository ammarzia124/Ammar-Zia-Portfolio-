import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { about } from "@/data/about";
import { CheckCircle } from "lucide-react";

export function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeading
        id="about-heading"
        title={about.heading}
        subtitle="A bit about my background, what drives me, and where I'm headed."
      />

      <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
        {/* Photo Placeholder */}
        <div className="lg:col-span-2">
          <div className="aspect-[4/5] w-full max-w-sm rounded-lg bg-muted/50 border border-border flex items-center justify-center">
            <span className="text-sm text-muted-foreground">[Photo]</span>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          {about.paragraphs.map((paragraph, i) => (
            <p key={i} className="text-muted-foreground leading-relaxed text-max-w">
              {paragraph}
            </p>
          ))}

          <div className="mt-4">
            <h3 className="heading-sm mb-4">{about.journeyHeading}</h3>
            <ul className="flex flex-col gap-3">
              {about.journey.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
