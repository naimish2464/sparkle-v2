import { motion } from "motion/react";
import { luxuryEase, useReveal } from "./useReveal";
import { SectionHeader } from "./SectionHeader";
import galaxyImage from "../../../assests/images/Galaxy.png";

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

  return (
    <section
      id="services"
      ref={sectionRef}
      className="galaxy-services relative bg-brand-surface overflow-hidden"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 section-padding">
        <div className="galaxy-grid grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-14 xl:gap-16 items-center min-w-0">
          {/* Content — authoritative editorial column */}
          <div className="galaxy-services-content flex flex-col justify-center lg:py-6 xl:py-8 lg:max-w-[34rem] min-w-0 order-1">
            <SectionHeader
              title="Worldwide Leader & Authorized Service Center"
              subtitle="Galaxy™ Inclusion Scanning"
              isInView={isInView}
              singleLine={false}
              className="galaxy-services-header mb-10 lg:mb-14"
            />

            <ul className="galaxy-capabilities list-none m-0 p-0" role="list">
              {capabilities.map((line, index) => (
                <motion.li
                  key={line}
                  initial={{ opacity: 0, x: -12 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.9,
                    delay: 0.28 + index * 0.07,
                    ease: luxuryEase,
                  }}
                  className="galaxy-capability-item group flex items-baseline gap-4 sm:gap-5 py-4 sm:py-[1.125rem]"
                >
                  <span
                    className="galaxy-capability-mark shrink-0 w-5 h-px bg-brand/35 group-hover:w-7 group-hover:bg-brand/55 transition-all duration-400"
                    aria-hidden="true"
                  />
                  <span className="type-body-lg text-body-default leading-relaxed tracking-[0.01em]">
                    {line}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Image — editorial integration, not boxed */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.15, delay: 0.18, ease: luxuryEase }}
            className="galaxy-services-visual relative lg:flex lg:justify-end lg:pl-4 xl:pl-8 min-w-0 order-2 overflow-hidden"
          >
            <div
              className="absolute -left-6 top-1/2 -translate-y-1/2 w-px h-[55%] bg-gradient-to-b from-transparent via-brand/15 to-transparent hidden lg:block"
              aria-hidden="true"
            />

            <div className="relative w-full lg:max-w-[94%] xl:max-w-[90%] mx-auto lg:mx-0">
              <div className="galaxy-editorial-image relative overflow-hidden rounded-xl lg:rounded-2xl aspect-[4/3] bg-white">
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 1.15, delay: 0.18, ease: luxuryEase }}
                  src={galaxyImage}
                  alt="Galaxy inclusion scanning system for rough diamond planning and marking"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-contain object-center"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-brand-surface/20 pointer-events-none lg:to-brand-surface/30"
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-brand/[0.04] via-transparent to-transparent pointer-events-none"
                  aria-hidden="true"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
