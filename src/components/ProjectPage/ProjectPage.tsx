import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { useProjects } from "../../hooks";
import { projectsConfig, sections } from "../../config";
import { FadeIn } from "../common";

const ProjectPage = () => {
  const { filters, filtered, selectedFilter, setSelectedFilter } = useProjects();

  return (
    <section className="projects-container" id={sections.projects}>
      <div className="projects-content-container max-width-container">
        <FadeIn>
          <p className="projects-label">{projectsConfig.sectionLabel}</p>
          <h2 className="projects-title">{projectsConfig.sectionTitle}</h2>
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
                {f}
              </motion.button>
            ))}
          </div>
        </FadeIn>

        <motion.div
          className="projects-list"
          layout
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.id}
                layout
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
                exit={{
                  opacity: 0,
                  scale: 0.8,
                  y: -20,
                  transition: {
                    duration: 0.3,
                  },
                }}
              >
                <ProjectCard project={p} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectPage;
