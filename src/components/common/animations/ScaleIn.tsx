import { motion } from "framer-motion";
import type { ScaleInProps } from "../../../types";

const ScaleIn = ({ children, delay = 0, duration = 0.4, className }: ScaleInProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScaleIn;
