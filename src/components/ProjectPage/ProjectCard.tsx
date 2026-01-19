import { memo } from "react";
import { Github } from "lucide-react";
import type { ProjectCardProps } from "../../types";
import { uiConfig } from "../../config";
import { useImageModal } from "../../hooks";
import { ImageModal } from "../../components/common";

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { isOpen, openModal, closeModal } = useImageModal();

  return (
    <>
      <article className="project-card">
        <div>
          <p className="project-category">{project.category}</p>
          <h3 className="project-title" onClick={() => window.open(project.github, uiConfig.targets.blank)}>
            {project.title}
            <span>
              <Github size={uiConfig.icons.sizes.medium} aria-hidden="true" />
            </span>
          </h3>

          <p className="project-description">{project.description}</p>

          <div className="project-stacks">
            {project.stacks.map((s) => (
              <span key={s} className="stack-chip">
                {s}
              </span>
            ))}
          </div>

          <div className="project-techs">
            {project.techs.map((t) => (
              <span key={t} className="tech-chip">
                {t}
              </span>
            ))}
          </div>
        </div>

        <img
          className="project-image"
          src={project.image}
          alt={`Screenshot of ${project.title} project`}
          loading="lazy"
          decoding="async"
          onClick={openModal}
          style={{ cursor: uiConfig.cursor.zoomIn }}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              openModal();
            }
          }}
        />
      </article>

      <ImageModal isOpen={isOpen} imageUrl={project.image} alt={project.title} onClose={closeModal} />
    </>
  );
};

export default memo(ProjectCard);
