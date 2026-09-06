import { Lightbulb } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { exploring } from "@/data/exploring";

export function CurrentlyExploring() {
  return (
    <SectionWrapper id="exploring">
      <SectionHeading
        id="exploring-heading"
        title="Currently Exploring"
        subtitle="Areas I'm actively learning and growing in right now."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {exploring.map((item) => (
          <div
            key={item.area}
            className="flex items-start gap-4 rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-md"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10">
              <Lightbulb className="h-4 w-4 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{item.area}</h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
