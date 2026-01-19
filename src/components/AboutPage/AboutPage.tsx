import AboutCard from "./AboutCard";
import { aboutData, education, sections } from "../../config";
import { FadeIn, SlideIn, StaggerContainer, StaggerItem } from "../common";

const AboutPage = () => {
  return (
    <section id={sections.about} className="about-container">
      <div className="about-content-container max-width-container">
        <SlideIn direction="left">
          <div className="about-left">
            <h2 className="about-title">{aboutData.title}</h2>
            <h3 className="about-name">{aboutData.name}</h3>

            {aboutData.description.map((paragraph, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <p className="about-text">{paragraph}</p>
              </FadeIn>
            ))}
          </div>
        </SlideIn>

        <StaggerContainer staggerDelay={0.2} className="about-cards-container">
          {education.map((item, index) => (
            <StaggerItem key={index}>
              <AboutCard {...item} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default AboutPage;
