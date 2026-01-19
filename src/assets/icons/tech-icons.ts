import { SiJavascript, SiTypescript, SiHtml5, SiCss3, SiReact, SiVuedotjs, SiGit, SiNextdotjs } from "react-icons/si";
import type { TechIcon } from "../../types";

export const techIcons: TechIcon[] = [
  { name: "JavaScript", Icon: SiJavascript, color: "#f7de1ea8" },
  { name: "TypeScript", Icon: SiTypescript, color: "#589ee9bd" },
  { name: "HTML", Icon: SiHtml5, color: "#e34f26b2" },
  { name: "CSS", Icon: SiCss3, color: "#2d95dfab" },
  { name: "React", Icon: SiReact, color: "#61dafbb2" },
  { name: "Vue", Icon: SiVuedotjs, color: "#41b883a4" },
  { name: "Git", Icon: SiGit, color: "#f04e32a1" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#ffffff9c" },
];

export const getTechIcon = (name: string): TechIcon | undefined => {
  return techIcons.find((icon) => icon.name === name);
};
