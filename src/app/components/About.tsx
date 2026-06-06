import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const luxuryEase = [0.22, 1, 0.36, 1] as const;

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
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1.12, 1.08]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative h-auto lg:h-screen lg:max-h-screen bg-[#1a2744] overflow-hidden"
    >
      {/* Soft ambient gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a2744] via-[#152038] to-[#0f172a] pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#2a3f6b]/30 to-transparent pointer-events-none" />

      {/* Decorative thin lines */}
      <div className="absolute top-20 left-[45%] hidden lg:block w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      <div className="absolute bottom-24 right-[12%] hidden lg:block w-12 h-px bg-gradient-to-r from-white/25 to-transparent" />

      {/* ── Layered image column (45%) ── */}
      <div
        ref={imageRef}
        className="about-image-col relative lg:absolute lg:inset-y-0 lg:left-0 lg:w-[45%] h-[34vh] sm:h-[38vh] lg:h-full overflow-hidden"
      >
        <motion.div
          style={{ y: imageY, scale: imageScale }}
          className="absolute inset-0 w-full h-[115%] -top-[7%]"
        >
          <img
            src="https://images.unsplash.com/photo-1631561381360-75e4b03ef9b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600"
            alt="Diamond manufacturing and precision craftsmanship"
            className="w-full h-full object-cover object-center"
          />
        </motion.div>

        {/* Layered edge blend — image dissolves into navy content */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-[#1a2744] lg:to-[#1a2744]/95 hidden lg:block" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a2744] via-transparent to-transparent lg:hidden" />
      </div>

      {/* ── Editorial content ── */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-0 lg:h-full">
        <div className="lg:ml-[45%] lg:w-[55%] w-full lg:pl-10 xl:pl-14 py-10 sm:py-12 lg:py-0 lg:h-full lg:flex lg:flex-col lg:justify-center lg:pr-6 xl:pr-10">
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.1, ease: luxuryEase }}
            className="type-eyebrow text-white/60 mb-4 lg:mb-5"
          >
            About Sparkle Solitaires
          </motion.p>

          {/* Statement headline — hero of the section */}
          <motion.h2
            initial={{ opacity: 0, y: 36 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.3, delay: 0.12, ease: luxuryEase }}
            className="type-slide-title-bold text-white w-full max-w-3xl xl:max-w-4xl mb-5 lg:mb-6"
          >
            Your Complete Partner Across the{" "}
            <span className="block sm:inline">Diamond Value Chain</span>
          </motion.h2>

          {/* Thin premium divider */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 1.4, delay: 0.28, ease: luxuryEase }}
            className="w-12 h-px bg-white/30 origin-left mb-5 lg:mb-6"
          />

          {/* Staggered narrative paragraphs */}
          <div className="w-full max-w-3xl xl:max-w-4xl space-y-3 lg:space-y-3.5 mb-6 lg:mb-8">
            {description.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 1.1,
                  delay: 0.38 + index * 0.14,
                  ease: luxuryEase,
                }}
                className="type-body-lg text-white/75"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* Trust row — no cards, elegant dividers only */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.1, delay: 0.95, ease: luxuryEase }}
            className="w-full max-w-3xl xl:max-w-4xl pt-5 lg:pt-6 border-t border-white/15"
          >
            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-y-3 sm:gap-y-0">
              {trustItems.map((item, index) => (
                <div key={item} className="flex items-center">
                  {index > 0 && (
                    <span
                      className="hidden sm:block w-px h-3.5 bg-white/25 mx-4 lg:mx-5 shrink-0"
                      aria-hidden="true"
                    />
                  )}
                  <span className="trust-item type-body text-white/85 font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
