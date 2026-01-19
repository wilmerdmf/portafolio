import { motion } from "framer-motion";
import type { StaggerContainerProps } from "../../../types";

const StaggerContainer = ({ children, staggerDelay = 0.1, className }: StaggerContainerProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default StaggerContainer;
