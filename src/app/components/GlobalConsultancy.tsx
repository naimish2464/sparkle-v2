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
import consultancyImage from "../../../assests/images/Consultancy.png";

const capabilities = [
  "Direct presence in India · Botswana · New York · Hong Kong · China",
  "Access to an active international buyer network",
  "Fast and reliable import–export facilitation",
  "Strong support in trading, sales, and global distribution",
  "Commission-based stone selling — fully transparent and ethical",
  "Strategic pricing, sourcing, and market positioning guidance",
  "Online diamond sales platform connectivity",
  "Deep expertise across the complete diamond value chain",
  "Customized solutions built around your business goals",
  "Integrity-driven approach with full transparency",
  "Long-term partnership mindset — we grow together",
];

const hubLocations = ["India", "Botswana", "New York", "Hong Kong", "China"];

export function GlobalConsultancy() {
  const { ref: sectionRef, isInView, prefersReducedMotion } = useReveal();
  const initial = getRevealInitial(prefersReducedMotion);
  const animate = getRevealAnimate(isInView, prefersReducedMotion);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? ["0%", "0%"] : ["-2%", "2%"]
  );

  return (
    <section id="consultancy" ref={sectionRef} className="relative overflow-hidden bg-brand">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a006f] via-[#080058] to-[#050040] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 section-padding">
        <div className="consultancy-grid grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start min-w-0">
          <div className="order-1 lg:order-none min-w-0">
            <SectionHeader
              title="Global Presence"
              isInView={isInView}
              variant="dark"
              className="mb-7 lg:mb-9"
            />

            <motion.div
              initial={initial}
              animate={animate}
              transition={getRevealTransition(prefersReducedMotion, {
                delay: 0.1,
                isInView,
              })}
              className="flex flex-wrap items-center gap-x-5 gap-y-3 mb-7 lg:mb-8 pb-6 border-b border-white/[0.08]"
            >
              {hubLocations.map((location, index) => (
                <span key={location} className="flex items-center">
                  {index > 0 && (
                    <span
                      className="hidden sm:inline w-px h-3 bg-white/20 mr-5"
                      aria-hidden="true"
                    />
                  )}
                  <span className="type-body text-white/85 font-medium tracking-wide">
                    {location}
                  </span>
                </span>
              ))}
            </motion.div>

            <div className="space-y-0">
              {capabilities.map((line, index) => (
                <motion.p
                  key={line}
                  initial={initial}
                  animate={animate}
                  transition={getRevealTransition(prefersReducedMotion, {
                    delay: 0.12 + index * 0.04,
                    isInView,
                  })}
                  className={`capability-item capability-item--dark ${
                    index === 0 ? "!text-white/90" : ""
                  }`}
                >
                  {line}
                </motion.p>
              ))}
            </div>
          </div>

          <SectionImage
            src={consultancyImage}
            alt="Global diamond consultancy — international trade routes and certified expertise"
            isInView={isInView}
            aspect="landscape"
            variant="dark"
            imageY={imageY}
            delay={REVEAL.stagger}
            objectPosition="center"
            className="consultancy-sticky-image lg:sticky lg:top-28 order-2 lg:order-none"
          />
        </div>
      </div>
    </section>
  );
}
