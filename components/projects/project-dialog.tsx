"use client";

import { Project } from "@/types/project";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { ScrollContainer } from "@/components/ui/scroll-container";

interface ProjectDialogProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectDialog({
  project,
  isOpen,
  onClose,
}: ProjectDialogProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh]">
        <ScrollContainer className="h-full">
          <DialogHeader>
            <DialogTitle>{project.title}</DialogTitle>
            <DialogDescription>
              <div className="mt-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold">Project Overview</h4>
              <p className="text-muted-foreground whitespace-pre-line">
                {project.longDescription}
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              <Button asChild>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="h-4 w-4" />
                  View Code
                </a>
              </Button>
              {project.liveUrl && (
                <Button variant="outline" asChild>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              )}
            </div>
          </div>
        </ScrollContainer>
      </DialogContent>
    </Dialog>
  );
}
