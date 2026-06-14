import { useInView } from "motion/react";
import { useRef } from "react";

export const luxuryEase = [0.22, 1, 0.36, 1] as const;

export function useReveal(margin = "-80px") {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin });
  return { ref, isInView };
}
