import { motion } from "framer-motion";
import type { StaggerItemProps } from "../../../types";

const StaggerItem = ({ children, className }: StaggerItemProps) => {
  return (
    <motion.div
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
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default StaggerItem;
