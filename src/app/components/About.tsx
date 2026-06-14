import { motion, useScroll, useTransform } from "motion/react";
import { luxuryEase, useReveal } from "./useReveal";
import aboutImage from "../../../assests/services/diamond_manufacturing.png";

const description = [
  "We are your complete partner for natural and lab-grown diamonds — from rough scanning to polished stones and global sales.",
  "With over 20 years of hands-on diamond industry experience, we deliver precise, secure, and tailored solutions across the full value chain.",
  "We combine cutting-edge technology with expert craftsmanship to ensure accuracy, strict quality control, secure handling, and reliable performance at every step.",
  "Global presence: India, Botswana, New York, Hong Kong, China — serving the world's top diamond markets.",
];

const trustItems = [
  "20+ Years Experience",
  "Global Presence",
  "Advanced Technology",
  "Worldwide Network",
];

export function About() {
  const { ref: sectionRef, isInView } = useReveal();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative bg-[#fafafa] overflow-hidden"
    >
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-24 items-center pb-20 sm:pb-24 lg:pb-32 xl:pb-36 pt-0">
          {/* Large manufacturing image */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, ease: luxuryEase }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative overflow-hidden rounded-[20px] md:rounded-[28px] aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5]">
              <motion.img
                style={{ y: imageY }}
                src={aboutImage}
                alt="Diamond manufacturing and precision craftsmanship"
                className="absolute inset-0 w-full h-[110%] -top-[5%] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Editorial content */}
          <div className="order-1 lg:order-2 lg:py-8">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.1, ease: luxuryEase }}
              className="type-eyebrow text-[#0a1628]/45 mb-5 lg:mb-6 tracking-[0.2em]"
            >
              About Sparkle Solitaires
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 36 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.3, delay: 0.1, ease: luxuryEase }}
              className="type-slide-title-bold text-[#0a1628] max-w-xl mb-6 lg:mb-8"
            >
              Your Complete Partner Across the Diamond Value Chain
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.2, ease: luxuryEase }}
              className="w-14 h-px bg-[#0a1628]/20 origin-left mb-7 lg:mb-8"
            />

            <div className="space-y-4 lg:space-y-5 mb-8 lg:mb-10 max-w-xl">
              {description.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 1.05,
                    delay: 0.28 + index * 0.12,
                    ease: luxuryEase,
                  }}
                  className="type-body-lg text-[#0a1628]/65"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.1, delay: 0.75, ease: luxuryEase }}
              className="pt-6 lg:pt-8 border-t border-[#0a1628]/10 max-w-xl"
            >
              <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-y-3">
                {trustItems.map((item, index) => (
                  <div key={item} className="flex items-center">
                    {index > 0 && (
                      <span
                        className="hidden sm:block w-px h-3.5 bg-[#0a1628]/15 mx-4 lg:mx-5 shrink-0"
                        aria-hidden="true"
                      />
                    )}
                    <span className="type-body text-[#0a1628]/80 font-medium tracking-wide">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
