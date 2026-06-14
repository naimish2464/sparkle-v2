import { motion, useScroll, useTransform } from "motion/react";
import { luxuryEase, useReveal } from "./useReveal";
import manufacturingImage from "../../../assests/services/contract_manufacturing.jpg";

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
  const imageY = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <section
      id="manufacturing"
      ref={sectionRef}
      className="relative bg-[#0a1628] overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0d1c35] to-[#071020] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-16 xl:gap-20 items-center py-20 sm:py-24 lg:py-32 xl:py-36">
          {/* Immersive image — left on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.3, ease: luxuryEase }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative overflow-hidden rounded-[20px] md:rounded-[28px] aspect-[4/3] lg:aspect-[5/4]">
              <motion.img
                style={{ y: imageY }}
                src={manufacturingImage}
                alt="Diamond contract manufacturing"
                className="absolute inset-0 w-full h-[110%] -top-[5%] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/30 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Editorial content */}
          <div className="order-1 lg:order-2">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.1, ease: luxuryEase }}
              className="type-eyebrow text-white/45 mb-5 tracking-[0.2em]"
            >
              End-to-End Rough to Polished Solutions
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 36 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.3, delay: 0.08, ease: luxuryEase }}
              className="mb-6 lg:mb-8"
            >
              <span className="type-slide-title-light text-white block">Contract</span>
              <span className="type-slide-title-bold text-white block mt-1">
                Manufacturing
              </span>
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.18, ease: luxuryEase }}
              className="w-14 h-px bg-white/25 origin-left mb-8 lg:mb-10"
            />

            <div className="space-y-0 max-w-lg">
              {capabilities.map((line, index) => (
                <motion.p
                  key={line}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 1,
                    delay: 0.26 + index * 0.07,
                    ease: luxuryEase,
                  }}
                  className="type-body py-3.5 border-b border-white/[0.07] last:border-b-0 text-white/65"
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
