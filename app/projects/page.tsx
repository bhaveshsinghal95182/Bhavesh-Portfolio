"use client";

import { useState } from "react";
import { ProjectDialog } from "@/components/projects/project-dialog";
import { BentoGrid } from "@/components/projects/bento-grid";
import { ProjectTimeline } from "@/components/projects/project-timeline";
import { BackButton } from "@/components/ui/back-button";
import { projects } from "@/config/projects";
import { timelineEvents } from "@/config/timeline";
import { Project } from "@/types/project";
import { TimelineEvent } from "@/types/timeline";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleTimelineEventClick = (event: TimelineEvent) => {
    if (event.type === "project" && event.projectId) {
      const project = projects.find((p) => p.id === event.projectId);
      if (project) {
        setSelectedProject(project);
      }
    }
  };

  return (
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
          <ProjectTimeline
            events={timelineEvents}
            onEventClick={handleTimelineEventClick}
          />
        </section>

        <ProjectDialog
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </main>
  );
}
