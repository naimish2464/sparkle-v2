import { useScroll, useTransform } from "motion/react";
import { motion } from "motion/react";
import { luxuryEase, useReveal } from "./useReveal";
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
  const { ref: sectionRef, isInView } = useReveal();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.04, 1, 1.04]);

  return (
    <section id="custom-jewelry" ref={sectionRef} className="relative bg-white overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 section-padding">
        <div className="jewelry-grid grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center min-w-0">
          <div className="min-w-0">
            <SectionHeader
              title="Bespoke Creations"
              subtitle="Custom Jewelry Manufacturing"
              isInView={isInView}
              className="mb-8 lg:mb-10"
            />

            <div className="space-y-0 max-w-md mb-8 lg:mb-10">
              {capabilities.map((line, index) => (
                <motion.p
                  key={line}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.9,
                    delay: 0.22 + index * 0.06,
                    ease: luxuryEase,
                  }}
                  className="capability-item border-brand-subtle"
                >
                  {line}
                </motion.p>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.95, delay: 0.45, ease: luxuryEase }}
              className="pt-6 border-t border-brand-subtle"
            >
              <p className="type-eyebrow mb-4">Product Categories</p>
              <p className="type-body-lg tracking-wide break-words">{categories.join(" · ")}</p>
            </motion.div>
          </div>

          <SectionImage
            src={jewelryImage}
            alt="Custom jewelry manufacturing — rings, pendants, and bespoke creations"
            isInView={isInView}
            aspect="landscape"
            imageScale={imageScale}
            objectPosition="center"
            delay={0.12}
          />
        </div>
      </div>
    </section>
  );
}
