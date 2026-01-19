import type { NavItem, SectionId } from "../types";

export const navItems: NavItem[] = ["Proyectos", "Sobre mí", "Skills", "Contacto"];

export const sectionMap: Record<NavItem, SectionId> = {
  Proyectos: "projects",
  "Sobre mí": "about",
  Skills: "skills",
  Contacto: "contact",
};

export const sections = {
  home: "home",
  projects: "projects",
  about: "about",
  skills: "skills",
  contact: "contact",
} as const;
