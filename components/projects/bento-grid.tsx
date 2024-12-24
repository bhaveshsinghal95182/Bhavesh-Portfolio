"use client";

import { motion } from "framer-motion";
import { Project } from "@/types/project";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface BentoGridProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

export function BentoGrid({ projects, onProjectClick }: BentoGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
      {projects.map((project, i) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          viewport={{ once: true }}
          className={cn(
            "group cursor-pointer rounded-xl border bg-card p-4 transition-all hover:shadow-lg",
            project.size === "large" && "md:col-span-2 md:row-span-2",
            project.size === "medium" && "md:col-span-2 md:row-span-1"
          )}
          onClick={() => onProjectClick(project)}
        >
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-background/90" />
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 z-20 p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <ExternalLink className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-background/50"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
