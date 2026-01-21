import { motion } from "framer-motion";
import type { SlideInProps } from "@/types";

const SlideIn = ({ children, delay = 0, duration = 0.6, direction = "left", className }: SlideInProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: direction === "left" ? -100 : 100,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SlideIn;
