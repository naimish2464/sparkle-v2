import { motion } from "motion/react";
import {
  getRevealAnimate,
  getRevealInitial,
  getRevealTransition,
  REVEAL,
  useReveal,
} from "./useReveal";
import expertiseImage from "../../../assests/experties.png";

const matchedParcels = [
  "Calibrated sizing",
  "Smaller size layouts",
  "Calibrated sizes",
  "Matching pairs",
  "Consistent cuts",
];

export function Expertise() {
  const { ref: sectionRef, isInView, prefersReducedMotion } = useReveal();
  const initial = getRevealInitial(prefersReducedMotion);
  const animate = getRevealAnimate(isInView, prefersReducedMotion);

  return (
    <section id="expertise" ref={sectionRef} className="relative bg-white overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 section-padding">
        <div className="expertise-compose flex flex-col items-center justify-center text-center gap-8 sm:gap-10 lg:gap-12 min-h-0">
          <div className="expertise-heading">
            <motion.h2
              initial={initial}
              animate={animate}
              transition={getRevealTransition(prefersReducedMotion, {
                isInView,
              })}
              className="type-section-heading text-brand"
              style={{ willChange: isInView ? "auto" : "opacity, transform" }}
            >
              Our Expertise
            </motion.h2>
            <motion.p
              initial={initial}
              animate={animate}
              transition={getRevealTransition(prefersReducedMotion, {
                delay: 0.1,
                isInView,
              })}
              className="type-section-subtitle mt-3 sm:mt-4"
            >
              All Shapes
            </motion.p>
          </div>

          <div className="expertise-body w-full flex flex-col items-center gap-7 sm:gap-8 lg:gap-10">
            <motion.img
              initial={initial}
              animate={animate}
              transition={getRevealTransition(prefersReducedMotion, {
                delay: REVEAL.stagger,
                image: true,
                isInView,
              })}
              src={expertiseImage}
              alt="Fancy color lab-grown diamonds in all shapes — pear, princess, emerald, radiant, heart, and round"
              loading="eager"
              decoding="async"
              className="expertise-image block w-full max-w-[1100px] h-auto max-h-[160px] sm:max-h-[200px] md:max-h-[240px] lg:max-h-[280px] object-contain object-center mx-auto"
              style={{ willChange: isInView ? "auto" : "opacity, transform" }}
            />

            <motion.div
              initial={initial}
              animate={animate}
              transition={getRevealTransition(prefersReducedMotion, {
                delay: REVEAL.stagger + 0.1,
                isInView,
              })}
              className="expertise-options w-full max-w-[900px]"
            >
              <p className="type-eyebrow text-brand mb-4 sm:mb-5 tracking-[0.2em]">
                Matched Parcels
              </p>

              <ul
                className="expertise-options-list flex flex-wrap items-center justify-center gap-x-0 gap-y-2.5 sm:gap-y-3 list-none m-0 p-0"
                role="list"
              >
                {matchedParcels.map((line, index) => (
                  <li key={line} className="inline-flex items-center">
                    <span className="type-body-lg text-body-default tracking-[0.02em] px-2 sm:px-3">
                      {line}
                    </span>
                    {index < matchedParcels.length - 1 && (
                      <span
                        className="text-brand/25 select-none font-light"
                        aria-hidden="true"
                      >
                        ·
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
