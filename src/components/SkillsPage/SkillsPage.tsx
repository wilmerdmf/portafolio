import SkillCard from "./SkillCard";
import { skills } from "../../data/skills.data";
import { skillsConfig, sections } from "../../config";
import { FadeIn, StaggerContainer, StaggerItem } from "../common";

const SkillsPage = () => {
  return (
    <section id={sections.skills} className="skills-container">
      <div className="skills-content-container max-width-container">
        <FadeIn>
          <h2 className="skills-title">{skillsConfig.sectionTitle}</h2>
          <p className="skills-text">{skillsConfig.sectionDescription}</p>
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
