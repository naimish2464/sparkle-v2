import { motion } from "motion/react";
import {
  getRevealAnimate,
  getRevealInitial,
  getRevealTransition,
  REVEAL,
  useReveal,
} from "./useReveal";
import { JewelryHorizontalCarousel } from "./JewelryHorizontalCarousel";

import vector1 from "../../../assests/jwellery/vector1.png";
import vector2 from "../../../assests/jwellery/vector2.png";
import vector3 from "../../../assests/jwellery/vector3.png";
import vector4 from "../../../assests/jwellery/vector4.png";
import vector5 from "../../../assests/jwellery/vector5.png";
import vector6 from "../../../assests/jwellery/vector6.png";
import vector7 from "../../../assests/jwellery/vector7.png";
import vector8 from "../../../assests/jwellery/vector8.png";
import vector9 from "../../../assests/jwellery/vector9.png";
import vector10 from "../../../assests/jwellery/vector10.png";
import vector11 from "../../../assests/jwellery/vector11.png";
import vector12 from "../../../assests/jwellery/vector12.png";
import vector13 from "../../../assests/jwellery/vector13.png";
import vector14 from "../../../assests/jwellery/vector14.png";
import vector15 from "../../../assests/jwellery/vector15.png";
import vector16 from "../../../assests/jwellery/vector16.png";
import vector17 from "../../../assests/jwellery/vector17.png";
import vector18 from "../../../assests/jwellery/vector18.png";
import vector19 from "../../../assests/jwellery/vector19.png";
import vector20 from "../../../assests/jwellery/vector20.png";
import vector21 from "../../../assests/jwellery/vector21.png";
import vector23 from "../../../assests/jwellery/vector23.png";
import vector24 from "../../../assests/jwellery/vector24.png";
import vector25 from "../../../assests/jwellery/vector25.png";
import vector26 from "../../../assests/jwellery/vector26.png";
import vector27 from "../../../assests/jwellery/vector27.png";
import vector28 from "../../../assests/jwellery/vector28.png";
import vector29 from "../../../assests/jwellery/vector29.png";
import vector30 from "../../../assests/jwellery/vector30.png";

const jewelleryPieces = [
  { src: vector1, alt: "Custom diamond jewellery piece 1" },
  { src: vector2, alt: "Custom diamond jewellery piece 2" },
  { src: vector3, alt: "Custom diamond jewellery piece 3" },
  { src: vector4, alt: "Custom diamond jewellery piece 4" },
  { src: vector5, alt: "Custom diamond jewellery piece 5" },
  { src: vector6, alt: "Custom diamond jewellery piece 6" },
  { src: vector7, alt: "Custom diamond jewellery piece 7" },
  { src: vector8, alt: "Custom diamond jewellery piece 8" },
  { src: vector9, alt: "Custom diamond jewellery piece 9" },
  { src: vector10, alt: "Custom diamond jewellery piece 10" },
  { src: vector11, alt: "Custom diamond jewellery piece 11" },
  { src: vector12, alt: "Custom diamond jewellery piece 12" },
  { src: vector13, alt: "Custom diamond jewellery piece 13" },
  { src: vector14, alt: "Custom diamond jewellery piece 14" },
  { src: vector15, alt: "Custom diamond jewellery piece 15" },
  { src: vector16, alt: "Custom diamond jewellery piece 16" },
  { src: vector17, alt: "Custom diamond jewellery piece 17" },
  { src: vector18, alt: "Custom diamond jewellery piece 18" },
  { src: vector19, alt: "Custom diamond jewellery piece 19" },
  { src: vector20, alt: "Custom diamond jewellery piece 20" },
  { src: vector21, alt: "Custom diamond jewellery piece 21" },
  { src: vector23, alt: "Custom diamond jewellery piece 23" },
  { src: vector24, alt: "Custom diamond jewellery piece 24" },
  { src: vector25, alt: "Custom diamond jewellery piece 25" },
  { src: vector26, alt: "Custom diamond jewellery piece 26" },
  { src: vector27, alt: "Custom diamond jewellery piece 27" },
  { src: vector28, alt: "Custom diamond jewellery piece 28" },
  { src: vector29, alt: "Custom diamond jewellery piece 29" },
  { src: vector30, alt: "Custom diamond jewellery piece 30" },
];

export function CustomJewelry() {
  const { ref: sectionRef, isInView, prefersReducedMotion } = useReveal();
  const initial = getRevealInitial(prefersReducedMotion);
  const animate = getRevealAnimate(isInView, prefersReducedMotion);

  return (
    <section
      id="custom-jewelry"
      ref={sectionRef}
      className="jewelry-section relative overflow-x-clip"
    >
      <div className="jewelry-section-glow" aria-hidden="true" />

      {/* Centered section header */}
      <div className="jewelry-header-wrap relative z-10">
        <div className="jewelry-copy jewelry-copy--center">

          <motion.h2
            initial={initial}
            animate={animate}
            transition={getRevealTransition(prefersReducedMotion, {
              delay: 0.06,
              isInView,
            })}
            className="jewelry-title"
            style={{ willChange: isInView ? "auto" : "opacity, transform" }}
          >
            <span className="jewelry-title-line">Custom Jewellery</span>
            <span className="jewelry-title-sub">
              Manufacturing &amp; Orders
            </span>
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
              delay: 0.12,
              isInView,
            })}
            className="jewelry-rule"
            aria-hidden="true"
          />

          <motion.p
            initial={initial}
            animate={animate}
            transition={getRevealTransition(prefersReducedMotion, {
              delay: 0.16,
              isInView,
            })}
            className="jewelry-lead"
          >
            From concept to creation, we craft bespoke jewellery designed around
            your vision.
          </motion.p>
        </div>
      </div>

      {/* Full-bleed jewellery marquee — 100vw edge to edge */}
      <motion.div
        initial={initial}
        animate={animate}
        transition={getRevealTransition(prefersReducedMotion, {
          delay: REVEAL.stagger,
          image: true,
          isInView,
        })}
        className="jewelry-marquee-bleed"
        style={{ willChange: isInView ? "auto" : "opacity, transform" }}
      >
        <JewelryHorizontalCarousel items={jewelleryPieces} />
      </motion.div>
    </section>
  );
}
