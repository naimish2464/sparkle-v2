import { motion, useScroll, useTransform } from "motion/react";
import { luxuryEase, useReveal } from "./useReveal";
import galaxyImage from "../../../assests/services/galaxy_inclusion_scanning.png";

const capabilities = [
  "0.01 ct – 100 ct rough scanning",
  "Accurate planning and marking",
  "Complete in-house processing",
  "Secure & fully insured premises",
  "On-time delivery",
  "Accurate & consistent results",
];

export function GalaxyScanning() {
  const { ref: sectionRef, isInView } = useReveal();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1, 1.05]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["-3%", "3%"]);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative bg-white overflow-hidden"
    >
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-16 xl:gap-20 items-center py-20 sm:py-24 lg:py-32 xl:py-36">
          {/* Editorial text */}
          <div className="lg:pr-4 xl:pr-8">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.1, ease: luxuryEase }}
              className="type-eyebrow text-[#0a1628]/45 mb-5 tracking-[0.2em]"
            >
              Worldwide Leader & Authorized Service Center
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 36 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.3, delay: 0.08, ease: luxuryEase }}
              className="mb-6 lg:mb-8"
            >
              <span className="type-slide-title-light text-[#0a1628] block">
                Galaxy™ Inclusion
              </span>
              <span className="type-slide-title-bold text-[#0a1628] block mt-1">
                Scanning
              </span>
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.18, ease: luxuryEase }}
              className="w-14 h-px bg-[#0a1628]/20 origin-left mb-8 lg:mb-10"
            />

            <div className="space-y-0 max-w-lg">
              {capabilities.map((line, index) => (
                <motion.p
                  key={line}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 1,
                    delay: 0.26 + index * 0.08,
                    ease: luxuryEase,
                  }}
                  className="type-body py-3.5 border-b border-[#0a1628]/[0.07] last:border-b-0 text-[#0a1628]/70"
                >
                  {line}
                </motion.p>
              ))}
            </div>
          </div>

          {/* Large image presentation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.3, delay: 0.15, ease: luxuryEase }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[20px] md:rounded-[28px] aspect-[4/3] lg:aspect-[5/4]">
              <motion.img
                style={{ scale: imageScale, y: imageY }}
                src={galaxyImage}
                alt="Galaxy inclusion scanning technology"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/5 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
