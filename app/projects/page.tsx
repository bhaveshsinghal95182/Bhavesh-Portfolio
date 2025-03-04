"use client";

import { useState } from "react";
import { ProjectDialog } from "@/components/projects/project-dialog";
import { BentoGrid } from "@/components/projects/bento-grid";
import { BackButton } from "@/components/ui/back-button";
import { projects } from "@/config/projects";
import { Project } from "@/types/project";
import CustomizedTimeline from "@/components/projects/timeline";
import { ThemeProvider } from "@/components/theme-provider";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <ThemeProvider>
      <main className="min-h-screen bg-background pt-24 pb-16">
        <div className="container px-4">
          <BackButton />
          <h1 className="text-4xl font-bold mb-12">Projects</h1>

          <section>
            <h2 className="text-2xl font-semibold mb-8">All Projects</h2>
            <BentoGrid projects={projects} onProjectClick={setSelectedProject} />
          </section>

          <section className="mt-20">
            <h2 className="text-2xl font-semibold mb-8">Journey Timeline</h2>
            <CustomizedTimeline />
          </section>

          <ProjectDialog
            project={selectedProject}
            isOpen={!!selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        </div>
      </main>
    </ThemeProvider>
  );
}
