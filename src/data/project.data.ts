import type { StackType } from "@/types";
import { images } from "@/assets";

export interface ProjectBase {
  id: number;
  category: StackType;
  key: string;
  stacks: StackType[];
  techs: string[];
  image: string;
  github: string;
}

export const projectsBase: ProjectBase[] = [
  {
    id: 1,
    category: "Frontend",
    key: "calculadora",
    stacks: ["Frontend"],
    techs: ["React", "Redux Toolkit", "Redux Persist", "React Router"],
    image: images.projects.calculadora,
    github: "https://github.com/wilmerdmf/calculadora",
  },
];
