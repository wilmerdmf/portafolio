import { techIcons } from "../assets";
import type { Skill } from "../types";

export const skills: Skill[] = techIcons.map((tech) => ({
  name: tech.name,
  icon: <tech.Icon size={16} />,
}));
