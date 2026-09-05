import { motion } from "motion/react";
import type { CSSProperties } from "react";
import {
  getRevealAnimate,
  getRevealInitial,
  getRevealTransition,
  REVEAL,
  useReveal,
} from "./useReveal";
import diamondBlueRound from "../../../assests/diamond_shapes/round.webp";
import diamondGreen from "../../../assests/diamond_shapes/green.webp";
import diamondPink from "../../../assests/diamond_shapes/pink.webp";
import diamondPurple from "../../../assests/diamond_shapes/purple.webp";
import diamondWhite from "../../../assests/diamond_shapes/white.webp";
import diamondYellow from "../../../assests/diamond_shapes/yellow.webp";

const matchedParcels = [
  "Calibrated sizing",
  "Smaller size layouts",
  "Calibrated sizes",
  "Matching pairs",
  "Consistent cuts",
];

const diamondShapes = [
  {
    id: "blue",
    src: diamondBlueRound,
    alt: "Blue round fancy color diamond",
    /* Fills more of its frame → scale down to match peers */
    fit: 0.72,
  },
  {
    id: "white",
    src: diamondWhite,
    alt: "White radiant-cut diamond",
    /* More canvas padding → scale up inside the equal box */
    fit: 1.08,
  },
  {
    id: "yellow",
    src: diamondYellow,
    alt: "Yellow oval fancy color diamond",
    fit: 1.06,
  },
  {
    id: "pink",
    src: diamondPink,
    alt: "Pink fancy color diamond",
    fit: 1.06,
  },
  {
    id: "purple",
    src: diamondPurple,
    alt: "Purple fancy color diamond",
    fit: 1.06,
  },
  {
    id: "green",
    src: diamondGreen,
    alt: "Green fancy color diamond",
    fit: 1.06,
  },
];

export function Expertise() {
  const { ref: sectionRef, isInView, prefersReducedMotion } = useReveal();
  const initial = getRevealInitial(prefersReducedMotion);
  const animate = getRevealAnimate(isInView, prefersReducedMotion);

  return (
    <section id="expertise" ref={sectionRef} className="relative overflow-hidden">
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
              All Colours · All Shapes
            </motion.p>
          </div>

          <div className="expertise-body relative w-full flex flex-col items-center">
            <motion.div
              initial={initial}
              animate={animate}
              transition={getRevealTransition(prefersReducedMotion, {
                delay: REVEAL.stagger,
                image: true,
                isInView,
              })}
              className="expertise-diamonds"
              role="list"
              aria-label="Diamond shapes and colours"
              style={{ willChange: isInView ? "auto" : "opacity, transform" }}
            >
              <div className="expertise-diamonds-glow" aria-hidden="true" />
              <ul className="expertise-diamonds-row" role="list">
                {diamondShapes.map((diamond) => (
                  <li
                    key={diamond.id}
                    className={`expertise-diamond expertise-diamond--${diamond.id}`}
                    role="listitem"
                  >
                    <span className="expertise-diamond-slot">
                      <img
                        src={diamond.src}
                        alt={diamond.alt}
                        loading="lazy"
                        decoding="async"
                        width={160}
                        height={160}
                        className="expertise-diamond-img"
                        draggable={false}
                        style={
                          {
                            "--diamond-fit": String(diamond.fit),
                          } as CSSProperties
                        }
                      />
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={initial}
              animate={animate}
              transition={getRevealTransition(prefersReducedMotion, {
                delay: REVEAL.stagger + 0.1,
                isInView,
              })}
              className="expertise-options relative z-10 w-full max-w-[900px] mt-8 sm:mt-10"
            >
              <p className="type-eyebrow text-brand mb-2 sm:mb-3 tracking-[0.2em]">
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
