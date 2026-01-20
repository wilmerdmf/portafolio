import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import ProjectCard from "./ProjectCard";
import { useProjects } from "../../hooks";
import { sections } from "../../config";
import { FadeIn } from "../common";
import { getFilterTranslationKey } from "../../utils";

const ProjectPage = () => {
  const { filters, filtered, selectedFilter, setSelectedFilter } = useProjects();
  const { t } = useTranslation("projects");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="projects-container" id={sections.projects}>
      <div className="projects-content-container max-width-container">
        <FadeIn>
          <p className="projects-label">{t("label")}</p>
          <h2 className="projects-title">{t("title")}</h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="projects-filters">
            {filters.map((f) => (
              <motion.button
                key={f}
                className={selectedFilter === f ? "active" : ""}
                onClick={() => setSelectedFilter(f)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                {t(getFilterTranslationKey(f))}
              </motion.button>
            ))}
          </div>
        </FadeIn>

        <motion.div
          ref={ref}
          className="projects-list"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          key={selectedFilter}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
              },
            },
          }}
        >
          {filtered.map((p) => (
            <motion.div
              key={p.id}
              variants={{
                hidden: { opacity: 0, scale: 0.8, y: 30 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    ease: "easeOut",
                  },
                },
              }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}

          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                textAlign: "center",
                padding: "3rem",
                color: "#c1c6d9",
                gridColumn: "1 / -1",
              }}
            >
              <p>{t("noProjects")}</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectPage;
