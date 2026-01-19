export type StackType = "Frontend" | "Backend" | "Fullstack";

export interface Project {
  id: number;
  category: StackType;
  title: string;
  description: string;
  stacks: StackType[];
  techs: string[];
  image: string;
  github: string;
}

export const filters = ["Todos", "Fullstack", "Frontend", "Backend"] as const;

export type FilterType = (typeof filters)[number];
