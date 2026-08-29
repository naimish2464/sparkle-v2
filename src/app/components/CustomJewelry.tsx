import { useScroll, useTransform, motion } from "motion/react";
import {
  getRevealAnimate,
  getRevealInitial,
  getRevealTransition,
  REVEAL,
  useReveal,
} from "./useReveal";
import { SectionHeader } from "./SectionHeader";
import { SectionImage } from "./SectionImage";
import jewelryImage from "../../../assests/images/Jewellery.png";

const capabilities = [
  "Made-to-order designs",
  "Precision craftsmanship",
  "Strict quality control",
  "On-time delivery",
  "Zero compromise on finishing",
];

const categories = [
  "Rings",
  "Earrings",
  "Pendants",
  "Tennis Bracelets",
  "Watches",
];

export function CustomJewelry() {
  const { ref: sectionRef, isInView, prefersReducedMotion } = useReveal();
  const initial = getRevealInitial(prefersReducedMotion);
  const animate = getRevealAnimate(isInView, prefersReducedMotion);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    prefersReducedMotion ? [1, 1, 1] : [1.02, 1, 1.02]
  );

  return (
    <section id="custom-jewelry" ref={sectionRef} className="relative bg-white overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 section-padding">
        <div className="jewelry-grid grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center min-w-0">
          <div className="min-w-0">
            <SectionHeader
              title="Custom Jewelry Manufacturing"
              isInView={isInView}
              className="mb-8 lg:mb-10"
            />

            <div className="space-y-0 max-w-md mb-8 lg:mb-10">
              {capabilities.map((line, index) => (
                <motion.p
                  key={line}
                  initial={initial}
                  animate={animate}
                  transition={getRevealTransition(prefersReducedMotion, {
                    delay: 0.1 + index * 0.05,
                    isInView,
                  })}
                  className="capability-item border-brand-subtle"
                >
                  {line}
                </motion.p>
              ))}
            </div>

            <motion.div
              initial={initial}
              animate={animate}
              transition={getRevealTransition(prefersReducedMotion, {
                delay: 0.1 + capabilities.length * 0.05,
                isInView,
              })}
              className="pt-6 border-t border-brand-subtle"
            >
              <p className="type-eyebrow mb-4">Product Categories</p>
              <p className="type-body-lg tracking-wide break-words">
                {categories.join(" · ")}
              </p>
            </motion.div>
          </div>

          <SectionImage
            src={jewelryImage}
            alt="Custom jewelry manufacturing — rings, pendants, and bespoke creations"
            isInView={isInView}
            aspect="landscape"
            imageScale={imageScale}
            objectPosition="center"
            delay={REVEAL.stagger}
          />
        </div>
      </div>
    </section>
  );
}
