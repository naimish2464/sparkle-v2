import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  getRevealAnimate,
  getRevealInitial,
  getRevealTransition,
  REVEAL,
  useReveal,
} from "./useReveal";
import roughAssortment from "../../../assests/images/rough_assortment.png";
import roughPlanning from "../../../assests/images/Rough_planning.png";
import cuttingShaping from "../../../assests/images/cuting_shaping.png";
import polishing from "../../../assests/images/polishing-diamond.png";

const panels = [
  {
    id: "assortment",
    number: "01",
    title: "Rough Assortment",
    short: "The foundation of every exceptional stone.",
    detail:
      "Every stone begins here — carefully sorted and selected before planning begins.",
    src: roughAssortment,
    alt: "Rough diamonds being sorted by hand on a professional work surface",
  },
  {
    id: "planning",
    number: "02",
    title: "Rough Planning",
    short: "Advanced mapping to unlock maximum yield.",
    detail:
      "Precision engineering transforms every rough stone into a diamond designed for maximum brilliance.",
    src: roughPlanning,
    alt: "Galaxy rough planning station with 3D diamond scan on monitor",
  },
  {
    id: "cutting",
    number: "03",
    title: "Cutting & Shaping",
    short: "Precision cutting engineered to unlock brilliance.",
    detail:
      "Each rough stone is cut and shaped with exacting care to define its final form.",
    src: cuttingShaping,
    alt: "Diamond cutting and shaping — split and faceted rough stones",
  },
  {
    id: "polishing",
    number: "04",
    title: "Polishing",
    short: "Every facet refined for exceptional light performance.",
    detail:
      "Every facet is refined on the polishing wheel for exceptional light performance and finish.",
    src: polishing,
    alt: "Artisan polishing a diamond on a precision scaife wheel",
  },
];

export function ContractManufacturing() {
  const { ref: sectionRef, isInView, prefersReducedMotion } = useReveal();
  const systemReduced = !!useReducedMotion();
  const reduceMotion = prefersReducedMotion || systemReduced;
  const initial = getRevealInitial(reduceMotion);
  const animate = getRevealAnimate(isInView, reduceMotion);

  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section
      id="manufacturing"
      ref={sectionRef}
      className="mfg-cinematic relative bg-[#050040] overflow-hidden"
    >
      {/* Intro */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 pt-16 sm:pt-20 lg:pt-24 pb-10 sm:pb-12 lg:pb-14">
        <div className="mfg-cinematic-intro text-center max-w-3xl mx-auto">
          <motion.p
            initial={initial}
            animate={animate}
            transition={getRevealTransition(reduceMotion, { isInView })}
            className="type-eyebrow text-white/45 tracking-[0.22em] mb-4 sm:mb-5"
          >
            Diamond Manufacturing
          </motion.p>

          <motion.h2
            initial={initial}
            animate={animate}
            transition={getRevealTransition(reduceMotion, {
              delay: 0.08,
              isInView,
            })}
            className="type-section-heading text-white"
            style={{ willChange: isInView ? "auto" : "opacity, transform" }}
          >
            Precision Crafted Into Every Facet
          </motion.h2>

          <motion.div
            initial={
              reduceMotion ? { opacity: 1 } : { opacity: REVEAL.opacityFrom }
            }
            animate={
              reduceMotion || isInView
                ? { opacity: 1 }
                : { opacity: REVEAL.opacityFrom }
            }
            transition={getRevealTransition(reduceMotion, {
              delay: 0.12,
              isInView,
            })}
            className="section-divider w-12 h-px mt-6 sm:mt-7 mx-auto bg-white/20 origin-center"
            aria-hidden="true"
          />

          <motion.p
            initial={initial}
            animate={animate}
            transition={getRevealTransition(reduceMotion, {
              delay: 0.16,
              isInView,
            })}
            className="type-body-lg mt-5 sm:mt-6 text-white/65 max-w-2xl mx-auto"
          >
            From rough stone to refined brilliance, every diamond is shaped
            through precision, technology and craftsmanship.
          </motion.p>
        </div>
      </div>

      {/* Four vertical cinematic panels */}
      <motion.div
        initial={initial}
        animate={animate}
        transition={getRevealTransition(reduceMotion, {
          delay: REVEAL.stagger,
          image: true,
          isInView,
        })}
        className="mfg-panels"
        role="list"
        aria-label="Diamond manufacturing process stages"
        onMouseLeave={() => setActiveId(null)}
      >
        {panels.map((panel) => {
          const isActive = activeId === panel.id;
          const hasActive = activeId !== null;

          return (
            <article
              key={panel.id}
              role="listitem"
              className={`mfg-panel${isActive ? " is-active" : ""}${
                hasActive && !isActive ? " is-dimmed" : ""
              }`}
              style={{
                flexGrow: reduceMotion
                  ? 1
                  : isActive
                    ? 2.2
                    : hasActive
                      ? 0.85
                      : 1,
              }}
              onMouseEnter={() => setActiveId(panel.id)}
              onFocus={() => setActiveId(panel.id)}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                  setActiveId(null);
                }
              }}
              tabIndex={0}
              aria-label={`${panel.number}. ${panel.title}`}
            >
              <div className="mfg-panel-media" aria-hidden="true">
                <img
                  src={panel.src}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="mfg-panel-img"
                />
                <div className="mfg-panel-scrim" />
              </div>

              {/* Visually hidden full alt for a11y */}
              <span className="sr-only">{panel.alt}</span>

              <div className="mfg-panel-content">
                <span className="mfg-panel-number" aria-hidden="true">
                  {panel.number}
                </span>
                <h3 className="mfg-panel-title">{panel.title}</h3>
                <p className="mfg-panel-short">{panel.short}</p>
                <div className="mfg-panel-expand">
                  <p className="mfg-panel-detail">{panel.detail}</p>
                  <a href="#contact" className="mfg-panel-cta">
                    Explore Process
                    <span aria-hidden="true"> →</span>
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </motion.div>
    </section>
  );
}
