import { motion, type MotionValue } from "motion/react";
import { luxuryEase } from "./useReveal";

type SectionImageProps = {
  src: string;
  alt: string;
  isInView: boolean;
  aspect?: "portrait" | "landscape" | "square";
  variant?: "light" | "dark";
  className?: string;
  imageY?: MotionValue<string>;
  imageScale?: MotionValue<number>;
  delay?: number;
  objectPosition?: string;
  loading?: "lazy" | "eager";
};

export function SectionImage({
  src,
  alt,
  isInView,
  aspect = "landscape",
  variant = "light",
  className = "",
  imageY,
  imageScale,
  delay = 0.12,
  objectPosition = "center",
  loading = "lazy",
}: SectionImageProps) {
  const aspectClass =
    aspect === "portrait"
      ? "aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5]"
      : aspect === "square"
        ? "aspect-square"
        : "aspect-[4/3] lg:aspect-[5/4]";

  const overlayClass =
    variant === "dark"
      ? "bg-gradient-to-r from-[rgba(10,0,111,0.3)] via-transparent to-transparent"
      : "bg-gradient-to-t from-[rgba(10,0,111,0.08)] via-transparent to-transparent";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay, ease: luxuryEase }}
      className={`group relative min-w-0 ${className}`}
    >
      <div
        className={`section-image-frame relative overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl ${aspectClass}`}
      >
        <motion.img
          style={{
            y: imageY,
            scale: imageScale,
            objectPosition,
          }}
          src={src}
          alt={alt}
          loading={loading}
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.015]"
        />
        <div className={`absolute inset-0 pointer-events-none ${overlayClass}`} />
        <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-[rgba(10,0,111,0.06)] rounded-2xl md:rounded-3xl" />
      </div>
    </motion.div>
  );
}
