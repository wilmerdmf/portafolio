import { ArrowRight } from "lucide-react";
import { techIcons } from "@/assets";
import { personalInfo, contactInfo, sections, uiConfig } from "../../config";
import { FadeIn, SlideIn } from "../common";

const HeroPage = () => {
  return (
    <section className="landing-container" id={sections.home}>
      <div className="landing-content-container max-width-container">
        <FadeIn delay={0.2} direction="down">
          <div className="landing-text-container">
            <h1>{personalInfo.title}</h1>
            <h2>{personalInfo.name}</h2>
            <p>{personalInfo.subtitle}</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="landing-buttons-container">
            <a
              href={contactInfo.linkedin}
              target={uiConfig.targets.blank}
              rel={uiConfig.rel.noopener}
              className="landing-button"
            >
              LinkedIn
              <ArrowRight size={uiConfig.icons.sizes.small} color={uiConfig.colors.primary} />
            </a>
            <a
              href={contactInfo.github}
              target={uiConfig.targets.blank}
              rel={uiConfig.rel.noopener}
              className="landing-button"
            >
              Github
              <ArrowRight size={uiConfig.icons.sizes.small} color={uiConfig.colors.primary} />
            </a>
          </div>
        </FadeIn>

        <SlideIn delay={0.6} direction="left">
          <div className="landing-icons-container">
            {techIcons.map(({ name, Icon, color }) => (
              <Icon key={name} size={uiConfig.icons.sizes.large} color={color} />
            ))}
          </div>
        </SlideIn>
      </div>
    </section>
  );
};

export default HeroPage;
