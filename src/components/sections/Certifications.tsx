"use client";

import { Award } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { certifications } from "@/data/certifications";

export function Certifications() {
  const gridRef = useScrollReveal<HTMLDivElement>({ stagger: 0.08 });

  return (
    <SectionWrapper id="certifications">
      <SectionHeading
        id="certifications-heading"
        title="Certifications"
        subtitle="Industry certifications validating my networking and security knowledge."
      />

      <div ref={gridRef} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert) => (
          <Card key={cert.name} data-reveal>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Award className="h-5 w-5 text-primary" />
              </div>
              <CardTitle className="text-base">{cert.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {cert.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
