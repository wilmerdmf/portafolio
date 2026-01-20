import type { NavKey, SectionId } from "../types";

export const navKeys: NavKey[] = ["projects", "about", "skills", "contact"];

export const sectionMap: Record<NavKey, SectionId> = {
  projects: "projects",
  about: "about",
  skills: "skills",
  contact: "contact",
};

export const sections = {
  home: "home",
  projects: "projects",
  about: "about",
  skills: "skills",
  contact: "contact",
} as const;
