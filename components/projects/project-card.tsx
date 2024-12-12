"use client";

import { Project } from "@/types/project";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <Card
      className={`group overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer ${
        project.size === "large"
          ? "md:col-span-2 md:row-span-2"
          : project.size === "medium"
          ? "md:col-span-1 md:row-span-2"
          : "md:col-span-1 md:row-span-1"
      }`}
      onClick={onClick}
    >
      <div className="relative h-full">
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-background/90"></div>
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 h-full flex flex-col justify-end p-6">
          <div className="p-0 mb-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl md:text-2xl font-semibold">
                {project.title}
              </h3>
              <ExternalLink className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-sm md:text-base mt-2 text-muted-foreground">
              {project.description}
            </p>
          </div>
          <div className="p-0">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-background/50 hover:bg-background/70"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
