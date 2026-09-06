"use client";

import { ExternalLink, ArrowRight } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { projects } from "@/data/projects";
import type { Project } from "@/types/project";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function StatusBadge({ status }: { status: Project["status"] }) {
  const labels: Record<Project["status"], string> = {
    live: "Live",
    "in-progress": "In Progress",
    archived: "Archived",
    private: "Private",
  };

  const variants: Record<Project["status"], "default" | "secondary" | "outline"> = {
    live: "default",
    "in-progress": "secondary",
    archived: "outline",
    private: "outline",
  };

  return (
    <Badge variant={variants[status]} className="text-xs">
      {labels[status]}
    </Badge>
  );
}

function CaseStudyModal({ project }: { project: Project }) {
  return (
    <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-2xl">
      <DialogHeader>
        <DialogTitle>{project.title}</DialogTitle>
        <DialogDescription className="text-balance">
          {project.tagline}
        </DialogDescription>
      </DialogHeader>

      <div className="flex flex-col gap-6 py-4">
        <div>
          <h4 className="mb-2 font-semibold text-foreground">Problem</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {project.caseStudy.problem}
          </p>
        </div>

        <div>
          <h4 className="mb-2 font-semibold text-foreground">Approach</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {project.caseStudy.approach}
          </p>
        </div>

        <div>
          <h4 className="mb-2 font-semibold text-foreground">Solution</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {project.caseStudy.solution}
          </p>
        </div>

        <div>
          <h4 className="mb-2 font-semibold text-foreground">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech.name} variant="outline">
                {tech.name}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-2 font-semibold text-foreground">Challenges</h4>
          <ul className="flex flex-col gap-2">
            {project.caseStudy.challenges.map((challenge, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                {challenge}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-2 font-semibold text-foreground">Outcome</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {project.caseStudy.outcome}
          </p>
        </div>
      </div>

      <div className="flex gap-3 border-t border-border pt-4">
        {project.links.demo && (
          <Button asChild size="sm">
            <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </a>
          </Button>
        )}
        {project.links.github && (
          <Button asChild variant="outline" size="sm">
            <a href={project.links.github} target="_blank" rel="noopener noreferrer">
              <GithubIcon className="mr-2 h-4 w-4" />
              Code
            </a>
          </Button>
        )}
      </div>
    </DialogContent>
  );
}

export function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionHeading
        id="projects-heading"
        title="Projects"
        subtitle="Selected work showcasing my approach to building secure, intelligent systems."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Dialog key={project.id}>
            <Card className="group flex flex-col transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex flex-col gap-1">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{project.tagline}</p>
                  </div>
                  <StatusBadge status={project.status} />
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech.name} variant="secondary" className="text-xs">
                      {tech.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex items-center justify-between">
                <div className="flex gap-2">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground transition-colors hover:text-foreground"
                      aria-label={`${project.title} source code`}
                    >
                      <GithubIcon className="h-5 w-5" />
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground transition-colors hover:text-foreground"
                      aria-label={`${project.title} live demo`}
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
                <DialogTrigger asChild>
                  <Button variant="ghost" className="group/btn">
                    View Case Study
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </DialogTrigger>
              </CardFooter>
            </Card>
            <CaseStudyModal project={project} />
          </Dialog>
        ))}
      </div>
    </SectionWrapper>
  );
}
