import { memo } from "react";
import type { AboutCardData } from "../../types";

const AboutCard = ({ title, description, date }: AboutCardData) => {
  return (
    <div className="about-card">
      <h4 className="about-card-title">{title}</h4>
      <p className="about-card-description">{description}</p>
      <span className="about-card-date">{date}</span>
    </div>
  );
};

export default memo(AboutCard);
