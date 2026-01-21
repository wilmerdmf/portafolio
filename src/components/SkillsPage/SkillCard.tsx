import { memo } from "react";
import type { SkillCardProps } from "@/types";

const SkillCard = ({ skill }: SkillCardProps) => {
  return (
    <div className="skill-card">
      {skill.icon}
      <span>{skill.name}</span>
    </div>
  );
};

export default memo(SkillCard);
