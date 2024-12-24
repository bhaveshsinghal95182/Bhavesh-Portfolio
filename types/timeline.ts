export type TimelineEventType =
  | "project"
  | "work"
  | "education"
  | "achievement";

export interface TimelineEvent {
  id: string;
  type: TimelineEventType;
  title: string;
  description: string;
  date: string;
  icon?: string;
  projectId?: string; // Reference to project if type is 'project'
}
