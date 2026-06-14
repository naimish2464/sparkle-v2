import { motion, useScroll, useTransform } from "motion/react";
import { luxuryEase, useReveal } from "./useReveal";
import jewelryImage from "../../../assests/services/custom-jwellary.jpg";

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
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.06, 1, 1.06]);

  return (
    <section
      id="custom-jewelry"
      ref={sectionRef}
      className="relative overflow-hidden"
    >
      {/* Full-bleed immersive image */}
      <div className="relative min-h-[70vh] lg:min-h-[85vh] flex items-end">
        <motion.div
          style={{ scale: imageScale }}
          className="absolute inset-0"
        >
          <img
            src={jewelryImage}
            alt="Custom jewelry manufacturing"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/60 to-[#0a1628]/20 pointer-events-none" />

        {/* Content overlay */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 pb-16 sm:pb-20 lg:pb-24 pt-32 sm:pt-40">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-end">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.1, ease: luxuryEase }}
                className="type-eyebrow text-white/45 mb-5 tracking-[0.2em]"
              >
                Bespoke Creations
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 36 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.3, delay: 0.08, ease: luxuryEase }}
                className="mb-6 lg:mb-8"
              >
                <span className="type-slide-title-light text-white block">
                  Custom Jewelry
                </span>
                <span className="type-slide-title-bold text-white block mt-1">
                  Manufacturing
                </span>
              </motion.h2>

              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
                transition={{ duration: 1.2, delay: 0.18, ease: luxuryEase }}
                className="w-14 h-px bg-white/25 origin-left mb-8"
              />

              <div className="space-y-0 max-w-md">
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
                    className="type-body py-3 border-b border-white/[0.08] last:border-b-0 text-white/70"
                  >
                    {line}
                  </motion.p>
                ))}
              </div>
            </div>

            {/* Categories — elegant inline presentation */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.1, delay: 0.5, ease: luxuryEase }}
              className="lg:text-right lg:pb-2"
            >
              <p className="type-eyebrow text-white/40 mb-5 tracking-[0.18em]">
                Product Categories
              </p>
              <p className="type-body-lg text-white/60 leading-loose tracking-wide">
                {categories.join(" · ")}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
