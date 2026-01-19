import type { AboutCardData } from "../types";

export const aboutData = {
  title: "Sobre mí",
  name: "Wilmer Medina",
  description: [
    "Desarrollador con capacidad para adaptarme a distintos entornos y tecnologías. Me motiva aprender nuevas herramientas y aportar en proyectos variados, desde aplicaciones web hasta soluciones más técnicas orientadas a procesos o datos.",
    "Actualmente sigo perfeccionando mis habilidades en arquitectura web, diseño de interacción y buenas prácticas de UI/UX.",
    "Nacido en Venezuela, pero actualmente resido en Bogotá, Colombia.",
  ],
} as const;

export const education: AboutCardData[] = [
  {
    title: "TSU Informática",
    description: "Técnico Superior en Ingeniería Informática, graduado en UNERMB, Venezuela.",
    date: "Finalizado en 2021",
  },
  {
    title: "Idioma Inglés",
    description: "Curso de Inglés avanzado, graduado en CEVAZ, Venezuela.",
    date: "Finalizado en 2020",
  },
];
