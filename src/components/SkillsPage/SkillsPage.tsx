import { useTranslation } from "react-i18next";
import SkillCard from "./SkillCard";
import { skills } from "../../data";
import { sections } from "../../config";
import { FadeIn, StaggerContainer, StaggerItem } from "../common";

const SkillsPage = () => {
  const { t } = useTranslation("skills");

  return (
    <section id={sections.skills} className="skills-container">
      <div className="skills-content-container max-width-container">
        <FadeIn>
          <h2 className="skills-title">{t("title")}</h2>
          <p className="skills-text">{t("description")}</p>
        </FadeIn>

        <StaggerContainer staggerDelay={0.08} className="skills-grid">
          {skills.map((skill) => (
            <StaggerItem key={skill.name}>
              <SkillCard skill={skill} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default SkillsPage;
