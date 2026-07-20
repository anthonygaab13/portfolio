import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Project } from "@/content/types";

export function ProjectCard({
  project,
  viewRepoLabel,
  viewDemoLabel,
}: {
  project: Project;
  viewRepoLabel: string;
  viewDemoLabel: string;
}) {
  return (
    <Card className={project.featured ? "sm:col-span-2" : undefined}>
      {project.imageSrc && (
        <div className="relative aspect-video w-full overflow-hidden bg-muted">
          <Image
            src={project.imageSrc}
            alt={project.imageAlt ?? project.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle>{project.title}</CardTitle>
          {project.type && (
            <Badge variant="secondary" className="shrink-0">
              {project.type}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{project.description}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <Badge key={tech} variant="outline" className="font-mono text-xs">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-4">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary"
            >
              <GithubIcon className="size-4" aria-hidden />
              {viewRepoLabel}
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary"
            >
              <ExternalLink className="size-4" aria-hidden />
              {viewDemoLabel}
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
