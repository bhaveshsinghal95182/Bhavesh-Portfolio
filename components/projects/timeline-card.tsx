"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { CalendarIcon } from "lucide-react";
import { TimelineEvent } from "@/types/timeline";

interface TimelineCardProps {
  event: TimelineEvent;
  isEven: boolean;
  onClick: () => void;
}

export function TimelineCard({ event, isEven, onClick }: TimelineCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={`flex justify-center w-full ${
        isEven ? "lg:justify-end lg:pl-20" : "lg:justify-start lg:pr-20"
      }`}
    >
      <Card
        className="relative w-full lg:w-[calc(50%-2rem)] p-6 hover:shadow-lg transition-shadow cursor-pointer group"
        onClick={onClick}
      >
        {/* Timeline dot */}
        <div
          className={`absolute top-1/2 -translate-y-1/2 hidden lg:block
          w-4 h-4 rounded-full bg-primary border-4 border-background
          group-hover:scale-125 transition-transform
          ${isEven ? "-right-[3.5rem]" : "-left-[3.5rem]"}`}
        />

        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <CalendarIcon className="h-4 w-4" />
          <span>{event.date}</span>
        </div>

        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {event.title}
        </h3>

        <p className="text-muted-foreground">{event.description}</p>
      </Card>
    </motion.div>
  );
}
