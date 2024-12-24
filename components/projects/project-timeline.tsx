"use client";

import { TimelineEvent } from "@/types/timeline";
import { TimelineCard } from "./timeline-card";

interface ProjectTimelineProps {
  events: TimelineEvent[];
  onEventClick: (event: TimelineEvent) => void;
}

export function ProjectTimeline({
  events,
  onEventClick,
}: ProjectTimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden lg:block" />

      {/* Timeline events */}
      <div className="space-y-12">
        {events.map((event, index) => (
          <TimelineCard
            key={event.id}
            event={event}
            isEven={index % 2 === 0}
            onClick={() => onEventClick(event)}
          />
        ))}
      </div>
    </div>
  );
}
