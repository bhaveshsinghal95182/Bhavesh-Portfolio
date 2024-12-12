import { SkillCategory } from "@/types/skill";

export const backendSkills: SkillCategory = {
  name: "Backend Development",
  description: "Creating scalable server-side applications",
  skills: [
    {
      name: "Node.js",
      level: 90,
      description: "Server-side JavaScript and microservices",
    },
    {
      name: "Express.js",
      level: 95,
      description: "RESTful APIs and middleware development",
    },
    {
      name: "Django",
      level: 85,
      description: "CRUD operations and middleware development"
    },
    {
      name: "MongoDB",
      level: 90,
      description: "Database design and optimization",
    },
    {
      name: "PostgreSQL",
      level: 75,
      description: "Relational database management",
    },
    {
      name: "Rust",
      level : 80,
      description: "Basics of rust with CLI projects"
    }
  ],
};
