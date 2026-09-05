import { motion } from "motion/react";
import {
  getRevealAnimate,
  getRevealInitial,
  getRevealTransition,
  REVEAL,
  useReveal,
} from "./useReveal";
import diamondProcess from "../../../assests/images/Diamond_Process.webp";

export function ContractManufacturing() {
  const { ref: sectionRef, isInView, prefersReducedMotion } = useReveal();
  const initial = getRevealInitial(prefersReducedMotion);
  const animate = getRevealAnimate(isInView, prefersReducedMotion);

  return (
    <section
      id="manufacturing"
      ref={sectionRef}
      className="mfg-process-section relative bg-white overflow-hidden"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 section-padding">
        <div className="mfg-process-intro text-center max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-12">
          <motion.h2
            initial={initial}
            animate={animate}
            transition={getRevealTransition(prefersReducedMotion, {
              isInView,
            })}
            className="type-section-heading text-brand"
            style={{ willChange: isInView ? "auto" : "opacity, transform" }}
          >
            Diamond Manufacturing
          </motion.h2>

          <motion.div
            initial={
              prefersReducedMotion
                ? { opacity: 1 }
                : { opacity: REVEAL.opacityFrom }
            }
            animate={
              prefersReducedMotion || isInView
                ? { opacity: 1 }
                : { opacity: REVEAL.opacityFrom }
            }
            transition={getRevealTransition(prefersReducedMotion, {
              delay: 0.1,
              isInView,
            })}
            className="section-divider w-12 h-px mt-6 sm:mt-7 mx-auto origin-center"
            style={{ backgroundColor: "rgba(10, 0, 111, 0.18)" }}
            aria-hidden="true"
          />
        </div>

        <motion.div
          initial={initial}
          animate={animate}
          transition={getRevealTransition(prefersReducedMotion, {
            delay: REVEAL.stagger,
            image: true,
            isInView,
          })}
          className="mfg-process-visual"
          style={{ willChange: isInView ? "auto" : "opacity, transform" }}
        >
          <img
            src={diamondProcess}
            alt="Diamond manufacturing process — inclusion mapping, planning, sawing and shaping, polishing and finishing, laser inscribing, grading and imaging, and diamond reports"
            loading="lazy"
            decoding="async"
            className="mfg-process-img"
          />
        </motion.div>
      </div>
    </section>
  );
}
