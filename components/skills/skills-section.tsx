"use client";

import { Card, CardContent } from "@/components/ui/card";
import { SkillCard } from "./skill-card";
import { skillCategories } from "@/config/skills";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6">
              <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
              <p className="text-muted-foreground text-sm mb-6">
                {category.description}
              </p>
              <CardContent className="p-0 space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard key={skillIndex} skill={skill} />
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
