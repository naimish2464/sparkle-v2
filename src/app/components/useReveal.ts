import { useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

/** Luxury ease-out — cinematic, refined */
export const luxuryEase = [0.22, 1, 0.36, 1] as const;

export const REVEAL = {
  opacityFrom: 0.25,
  y: 15,
  contentDuration: 0.8,
  imageDuration: 0.9,
  /** Midpoint of 100–150ms stagger between content and image */
  stagger: 0.12,
  /** ~18% of section visible before reveal */
  amount: 0.18,
} as const;

type RevealOptions = {
  /** Extra delay in seconds */
  delay?: number;
  /** Use slower image timing (900ms) */
  image?: boolean;
  /**
   * Viewport state. When `false`, transition is instant (reset for replay).
   * When `true` or omitted, uses enter timing.
   */
  isInView?: boolean;
};

/**
 * Section scroll-reveal: replays every time ~15–20% of the section enters view.
 * Resets when the section leaves so the next enter can animate again.
 * Respects prefers-reduced-motion.
 */
export function useReveal() {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const isInView = useInView(ref, {
    once: false,
    amount: REVEAL.amount,
  });

  return { ref, isInView, prefersReducedMotion: !!prefersReducedMotion };
}

/**
 * Motion props for fade-up reveal (opacity 0.25→1, y 15→0).
 * Content: 800ms · Images: 900ms · GPU-friendly transform + opacity only.
 * Exit/reset is instant so re-entry can replay cleanly.
 */
export function useRevealMotion(
  isInView: boolean,
  options: RevealOptions = {}
) {
  const prefersReducedMotion = useReducedMotion();
  const { delay = 0, image = false } = options;
  const duration = image ? REVEAL.imageDuration : REVEAL.contentDuration;

  if (prefersReducedMotion) {
    return {
      initial: false as const,
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0 },
    };
  }

  return {
    initial: { opacity: REVEAL.opacityFrom, y: REVEAL.y },
    animate: isInView
      ? { opacity: 1, y: 0 }
      : { opacity: REVEAL.opacityFrom, y: REVEAL.y },
    transition: isInView
      ? {
          duration,
          delay,
          ease: luxuryEase,
        }
      : { duration: 0 },
  };
}

/** Static helpers when reduced-motion is already known from parent */
export function getRevealTransition(
  prefersReducedMotion: boolean,
  options: RevealOptions = {}
) {
  if (prefersReducedMotion) {
    return { duration: 0 };
  }
  // Leaving viewport: instant reset so the next enter can replay
  if (options.isInView === false) {
    return { duration: 0 };
  }
  const { delay = 0, image = false } = options;
  return {
    duration: image ? REVEAL.imageDuration : REVEAL.contentDuration,
    delay,
    ease: luxuryEase,
  };
}

export function getRevealInitial(prefersReducedMotion: boolean) {
  if (prefersReducedMotion) return { opacity: 1, y: 0 };
  return { opacity: REVEAL.opacityFrom, y: REVEAL.y };
}

export function getRevealAnimate(
  isInView: boolean,
  prefersReducedMotion: boolean
) {
  if (prefersReducedMotion || isInView) return { opacity: 1, y: 0 };
  return { opacity: REVEAL.opacityFrom, y: REVEAL.y };
}
