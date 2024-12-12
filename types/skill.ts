export interface Skill {
  name: string;
  level: number;
  description?: string;
  icon?: string;
}

export interface SkillCategory {
  name: string;
  description: string;
  skills: Skill[];
}
