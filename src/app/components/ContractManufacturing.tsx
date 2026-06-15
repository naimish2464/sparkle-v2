import { useScroll, useTransform } from "motion/react";
import { motion } from "motion/react";
import { luxuryEase, useReveal } from "./useReveal";
import { SectionHeader } from "./SectionHeader";
import { SectionImage } from "./SectionImage";
import manufacturingImage from "../../../assests/images/Diamond Manufactering.png";

const capabilities = [
  "Client-supplied lab-grown rough processing",
  "Complete job work as per client specifications",
  "Planning, polishing & certification",
  "GIA & IGI solutions",
  "Calibrated sizes",
  "Fancy Yellow expertise",
  "Strict quality control",
  "Timely delivery",
];

export function ContractManufacturing() {
  const { ref: sectionRef, isInView } = useReveal();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-3%", "3%"]);

  return (
    <section id="manufacturing" ref={sectionRef} className="relative bg-brand overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a006f] via-[#080058] to-[#050040] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 section-padding">
        <div className="manufacturing-grid grid lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-12 xl:gap-16 items-center min-w-0">
          <SectionImage
            src={manufacturingImage}
            alt="Diamond contract manufacturing and polishing"
            isInView={isInView}
            aspect="landscape"
            variant="dark"
            imageY={imageY}
            className="manufacturing-image-col order-2 lg:order-1"
            objectPosition="center"
          />

          <div className="manufacturing-content-col order-1 lg:order-2 min-w-0">
            <SectionHeader
              title="End-to-End Rough-to-Polished Solutions"
              subtitle="Contract Manufacturing"
              isInView={isInView}
              variant="dark"
              singleLine={false}
              className="mb-8 lg:mb-10"
            />

            <div className="space-y-0 max-w-lg">
              {capabilities.map((line, index) => (
                <motion.p
                  key={line}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.9,
                    delay: 0.22 + index * 0.05,
                    ease: luxuryEase,
                  }}
                  className="capability-item capability-item--dark"
                >
                  {line}
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
