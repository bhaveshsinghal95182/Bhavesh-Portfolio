import { TimelineEvent } from "@/types/timeline";
import { projects } from "./projects";

export const timelineEvents: TimelineEvent[] = [
  // Project events
  ...projects.map((project) => ({
    id: `project-${project.id}`,
    type: "project" as const,
    title: project.title,
    description: project.description,
    date: "2023", // You might want to add actual dates to your projects
    projectId: project.id,
  })),

  // Other events
  {
    id: "education-1",
    type: "education",
    title: "Computer Science Degree",
    description: "Graduated with honors in Computer Science",
    date: "2022",
  },
  {
    id: "work-1",
    type: "work",
    title: "Senior Developer",
    description: "Led development of multiple enterprise applications",
    date: "2023",
  },
  {
    id: "achievement-1",
    type: "achievement",
    title: "Open Source Contribution",
    description: "Major contribution to popular open-source project",
    date: "2023",
  },
];
