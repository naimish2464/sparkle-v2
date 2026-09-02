import { motion } from "motion/react";
import {
  getRevealAnimate,
  getRevealInitial,
  getRevealTransition,
  REVEAL,
  useReveal,
} from "./useReveal";
import { JewelryRingCarousel } from "./JewelryRingCarousel";

import imgJR2P96GH from "../../../assests/jwellery/JR2P96GH.png";
import imgJRCM134A from "../../../assests/jwellery/JRCM134A.png";
import imgJRP0250H from "../../../assests/jwellery/JRP0250H.png";
import imgJRP0332H from "../../../assests/jwellery/JRP0332H.png";
import imgJRP0351H from "../../../assests/jwellery/JRP0351H.png";
import imgJRQ004GH from "../../../assests/jwellery/JRQ004GH.png";
import imgJRW035GR from "../../../assests/jwellery/JRW035GR.png";
import imgMarquise from "../../../assests/jwellery/marquise.png";
import imgSR0121GP from "../../../assests/jwellery/SR0121GP.png";
import imgJBM0020N from "../../../assests/jwellery/JBM0020N.png";
import imgJR0M49GK from "../../../assests/jwellery/JR0M49GK.png";
import imgRing from "../../../assests/jwellery/Ring.png";

const jewelleryPieces = [
  {
    src: imgJRP0250H,
    alt: "Pink diamond halo engagement ring",
  },
  {
    src: imgSR0121GP,
    alt: "Yellow diamond floral cocktail ring",
  },
  {
    src: imgJBM0020N,
    alt: "Two-tone yellow and white diamond tennis bracelet",
  },
  {
    src: imgJR0M49GK,
    alt: "Blue diamond double-halo engagement ring",
  },
  {
    src: imgRing,
    alt: "Yellow emerald-cut diamond eternity band",
  },
  {
    src: imgJR2P96GH,
    alt: "Diamond pavé band ring",
  },
  {
    src: imgJRCM134A,
    alt: "Diamond cocktail ring",
  },
  {
    src: imgJRP0332H,
    alt: "Diamond halo engagement ring",
  },
  {
    src: imgJRP0351H,
    alt: "Three-stone diamond ring",
  },
  {
    src: imgJRQ004GH,
    alt: "Diamond fashion ring",
  },
  {
    src: imgJRW035GR,
    alt: "Diamond wedding band",
  },
  {
    src: imgMarquise,
    alt: "Marquise-cut diamond ring",
  },
];

export function CustomJewelry() {
  const { ref: sectionRef, isInView, prefersReducedMotion } = useReveal();
  const initial = getRevealInitial(prefersReducedMotion);
  const animate = getRevealAnimate(isInView, prefersReducedMotion);

  return (
    <section
      id="custom-jewelry"
      ref={sectionRef}
      className="jewelry-section relative bg-white overflow-hidden"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 section-padding">
        <div className="jewelry-compose grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.25fr)] gap-10 lg:gap-8 xl:gap-12 items-center min-w-0">
          {/* Editorial copy */}
          <div className="jewelry-copy min-w-0 text-center lg:text-left">
            <motion.h2
              initial={initial}
              animate={animate}
              transition={getRevealTransition(prefersReducedMotion, {
                isInView,
              })}
              className="type-section-heading text-brand"
              style={{ willChange: isInView ? "auto" : "opacity, transform" }}
            >
              Custom Jewellery Manufacturing &amp; Engagement
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
              className="section-divider w-12 h-px mt-6 sm:mt-7 mx-auto lg:mx-0 lg:origin-left"
              style={{ backgroundColor: "rgba(10, 0, 111, 0.18)" }}
              aria-hidden="true"
            />

            <motion.p
              initial={initial}
              animate={animate}
              transition={getRevealTransition(prefersReducedMotion, {
                delay: 0.14,
                isInView,
              })}
              className="type-body-lg mt-5 sm:mt-6 max-w-md mx-auto lg:mx-0 text-body-default"
            >
              From concept to creation, we craft bespoke jewellery designed
              around your vision.
            </motion.p>

            <motion.div
              initial={initial}
              animate={animate}
              transition={getRevealTransition(prefersReducedMotion, {
                delay: 0.22,
                isInView,
              })}
              className="mt-8 sm:mt-10"
            >
              <a
                href="#contact"
                className="cta-primary inline-flex items-center justify-center bg-brand hover:bg-[#080058] text-white px-7 py-3.5 rounded-full text-[11px] font-medium uppercase tracking-[0.16em] transition-colors duration-300"
              >
                Start Your Custom Design
              </a>
            </motion.div>
          </div>

          {/* 3D ring carousel */}
          <motion.div
            initial={initial}
            animate={animate}
            transition={getRevealTransition(prefersReducedMotion, {
              delay: REVEAL.stagger,
              image: true,
              isInView,
            })}
            className="jewelry-carousel-wrap min-w-0"
            style={{ willChange: isInView ? "auto" : "opacity, transform" }}
          >
            <JewelryRingCarousel items={jewelleryPieces} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
