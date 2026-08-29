import { motion } from "motion/react";
import {
  getRevealAnimate,
  getRevealInitial,
  getRevealTransition,
  REVEAL,
  useReveal,
} from "./useReveal";
import chartYellow from "../../../assests/images/c_and_i1.png";
import chartPink from "../../../assests/images/c_and_i2.png";
import chartBlue from "../../../assests/images/c_and_i3.png";

const intensityScale = [
  "Intense",
  "Light",
  "Very Light",
  "Canary",
  "Fancy",
  "Fancy Vivid",
  "Fancy Deep",
];

const colorCharts = [
  {
    src: chartYellow,
    alt: "Yellow diamond color scale and intensity classification chart",
    label: "Yellow",
  },
  {
    src: chartPink,
    alt: "Pink diamond color scale and intensity classification chart",
    label: "Pink",
  },
  {
    src: chartBlue,
    alt: "Blue diamond color scale and intensity classification chart",
    label: "Blue",
  },
];

export function ColorScaleIntensity() {
  const { ref: sectionRef, isInView, prefersReducedMotion } = useReveal();
  const initial = getRevealInitial(prefersReducedMotion);
  const animate = getRevealAnimate(isInView, prefersReducedMotion);

  return (
    <section
      id="color-scale"
      ref={sectionRef}
      className="csi-section relative bg-white overflow-hidden"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 section-padding">
        <div className="csi-header text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-14">
          <motion.h2
            initial={initial}
            animate={animate}
            transition={getRevealTransition(prefersReducedMotion, {
              isInView,
            })}
            className="type-section-heading text-brand"
            style={{ willChange: isInView ? "auto" : "opacity, transform" }}
          >
            Color, Scale &amp; Intensity
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
            className="csi-gold-rule mx-auto mt-5 sm:mt-6 origin-center"
            aria-hidden="true"
          />
        </div>

        <motion.div
          initial={initial}
          animate={animate}
          transition={getRevealTransition(prefersReducedMotion, {
            delay: 0.1,
            isInView,
          })}
          className="csi-scale mb-10 sm:mb-12 lg:mb-14"
        >
          <ol className="csi-scale-list list-none m-0 p-0 flex flex-wrap items-center justify-center gap-y-3">
            {intensityScale.map((grade, index) => (
              <li key={grade} className="csi-scale-item inline-flex items-center">
                <span className="csi-scale-label">{grade}</span>
                {index < intensityScale.length - 1 && (
                  <span className="csi-scale-connector" aria-hidden="true" />
                )}
              </li>
            ))}
          </ol>
        </motion.div>

        <div className="csi-gallery" role="list">
          {colorCharts.map((chart, index) => (
            <motion.figure
              key={chart.label}
              role="listitem"
              initial={initial}
              animate={animate}
              transition={getRevealTransition(prefersReducedMotion, {
                delay: REVEAL.stagger + index * 0.1,
                image: true,
                isInView,
              })}
              className="csi-chart"
              style={{ willChange: isInView ? "auto" : "opacity, transform" }}
            >
              <figcaption className="csi-chart-caption">{chart.label}</figcaption>
              <img
                src={chart.src}
                alt={chart.alt}
                loading="lazy"
                decoding="async"
                className="csi-chart-img"
              />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
