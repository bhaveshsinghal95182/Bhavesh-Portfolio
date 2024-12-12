import { frontendSkills } from "./frontend";
import { backendSkills } from "./backend";
import { aiSkills } from "./ai";
import { toolsSkills } from "./tools";
import { SkillCategory } from "@/types/skill";

export const skillCategories: SkillCategory[] = [
  frontendSkills,
  backendSkills,
  aiSkills,
  toolsSkills,
];
