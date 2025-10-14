import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

export const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
};

export const pageTransition = {
  type: "tween" as const,
  ease: "easeOut" as const,
  duration: 0.35,
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

type FadeInProps = Omit<HTMLMotionProps<"div">, "initial" | "animate" | "variants"> & {
  delay?: number;
  y?: number;
};

export function FadeIn({ children, delay = 0, y = 8, ...rest }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4, ease: "easeOut", delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export type MotionDivProps = HTMLMotionProps<"div">;

export const MotionDiv = motion.div;
export const MotionSection = motion.section;
export const MotionSpan = motion.span;


