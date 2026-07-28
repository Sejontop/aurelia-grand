import type { Variants } from "framer-motion";

/**
 * Shared Framer Motion variants used across sections to keep
 * scroll-reveal animations consistent throughout the site.
 */

// Fade + rise, supports a numeric "custom" prop for staggered delays
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: custom * 0.15,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

// Wraps children and staggers their entrance animations
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// Simple opacity fade, used for backgrounds/overlays
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.2, ease: "easeOut" } },
};

// Scale + fade, used for cards and image reveals
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};
