import type { Project } from "../types";
import { images } from "../assets";

export const initialProjects: Project[] = [
  {
    id: 1,
    category: "Frontend",
    title: "Calculadora de Comisiones",
    description:
      "Aplicación web para calcular comisiones, diferencias y conversiones entre múltiples monedas. Soporta tasas escalonadas, persistencia de datos y cálculos en tiempo real.",
    stacks: ["Frontend"],
    techs: ["React", "Redux Toolkit", "Redux Persist", "React Router"],
    image: images.projects.calculadora,
    github: "https://github.com/wilmerdmf/calculadora",
  },
];
