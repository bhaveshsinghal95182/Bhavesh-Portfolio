"use client";

import { useState } from "react";
import { ProjectCard } from "./project-card";
import { ProjectDialog } from "./project-dialog";
import { ViewAllButton } from "./view-all-button";
import { projects } from "@/config/projects";
import { Project } from "@/types/project";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const featuredProjects = projects.slice(0, 3); // Show only first 5 projects

  return (
    <section id="projects" className="py-20 bg-accent/50">
      <div className="container px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <ViewAllButton />
        </div>
      </div>

      <ProjectDialog
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
