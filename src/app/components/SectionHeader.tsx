import { motion, useReducedMotion } from "motion/react";
import {
  getRevealAnimate,
  getRevealInitial,
  getRevealTransition,
  REVEAL,
} from "./useReveal";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  description?: string;
  isInView: boolean;
  variant?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
  delay?: number;
  singleLine?: boolean;
};

export function SectionHeader({
  title,
  subtitle,
  description,
  isInView,
  variant = "light",
  align = "left",
  className = "",
  delay = 0,
  singleLine = true,
}: SectionHeaderProps) {
  const prefersReducedMotion = !!useReducedMotion();
  const isDark = variant === "dark";
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const dividerAlign = align === "center" ? "origin-center mx-auto" : "origin-left";

  const initial = getRevealInitial(prefersReducedMotion);
  const animate = getRevealAnimate(isInView, prefersReducedMotion);

  return (
    <div className={`${alignClass} ${className}`}>
      <motion.h2
        initial={initial}
        animate={animate}
        transition={getRevealTransition(prefersReducedMotion, {
          delay,
          isInView,
        })}
        className={`type-section-heading ${singleLine ? "type-section-heading--single" : ""} ${
          isDark ? "text-white" : "text-brand"
        } text-balance break-words`}
        style={{ willChange: isInView ? "auto" : "opacity, transform" }}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.h3
          initial={initial}
          animate={animate}
          transition={getRevealTransition(prefersReducedMotion, {
            delay: delay + 0.1,
            isInView,
          })}
          className={`type-section-subtitle mt-4 sm:mt-5 font-normal ${
            isDark ? "text-white/75" : ""
          }`}
        >
          {subtitle}
        </motion.h3>
      )}

      <motion.div
        initial={
          prefersReducedMotion ? { opacity: 1 } : { opacity: REVEAL.opacityFrom }
        }
        animate={
          prefersReducedMotion || isInView
            ? { opacity: 1 }
            : { opacity: REVEAL.opacityFrom }
        }
        transition={getRevealTransition(prefersReducedMotion, {
          delay: delay + 0.12,
          isInView,
        })}
        className={`section-divider w-12 h-px mt-6 sm:mt-7 ${dividerAlign} ${
          isDark ? "bg-white/20" : ""
        }`}
        style={{
          backgroundColor: isDark ? undefined : "rgba(10, 0, 111, 0.18)",
        }}
        aria-hidden="true"
      />

      {description && (
        <motion.p
          initial={initial}
          animate={animate}
          transition={getRevealTransition(prefersReducedMotion, {
            delay: delay + REVEAL.stagger,
            isInView,
          })}
          className={`type-body-lg mt-5 sm:mt-6 max-w-2xl ${
            align === "center" ? "mx-auto" : ""
          } ${isDark ? "text-white/60" : ""}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
