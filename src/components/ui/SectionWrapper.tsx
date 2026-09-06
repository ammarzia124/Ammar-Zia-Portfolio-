import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function SectionWrapper({
  children,
  className,
  id,
}: SectionWrapperProps) {
  return (
    <section
      className={cn("section-padding", className)}
      id={id}
      aria-labelledby={id ? `${id}-heading` : undefined}
    >
      <div className="container-custom">{children}</div>
    </section>
  );
}
