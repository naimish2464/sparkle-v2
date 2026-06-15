import { motion } from "motion/react";
import { luxuryEase } from "./useReveal";

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
  const isDark = variant === "dark";
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const dividerAlign = align === "center" ? "origin-center mx-auto" : "origin-left";

  return (
    <div className={`${alignClass} ${className}`}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, delay, ease: luxuryEase }}
        className={`type-section-heading ${singleLine ? "type-section-heading--single" : ""} ${
          isDark ? "text-white" : "text-brand"
        } text-balance break-words`}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.95, delay: delay + 0.06, ease: luxuryEase }}
          className={`type-section-subtitle mt-4 sm:mt-5 font-normal ${
            isDark ? "text-white/75" : ""
          }`}
        >
          {subtitle}
        </motion.h3>
      )}

      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 1, delay: delay + 0.1, ease: luxuryEase }}
        className={`section-divider w-12 h-px mt-6 sm:mt-7 ${dividerAlign} ${
          isDark ? "bg-white/20" : ""
        }`}
        style={{
          backgroundColor: isDark ? undefined : "rgba(10, 0, 111, 0.18)",
        }}
      />

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.95, delay: delay + 0.14, ease: luxuryEase }}
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
