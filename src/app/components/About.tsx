import { motion } from "motion/react";
import { Globe } from "lucide-react";
import { luxuryEase, useReveal } from "./useReveal";
import { SectionHeader } from "./SectionHeader";

const description = [
  "Sparkle Solitaires is a global luxury diamond manufacturing and consultancy firm — your trusted partner for natural and lab-grown diamonds, from rough scanning through polished stones to international distribution.",
  "With more than 20 years of hands-on industry expertise, we deliver precision, security, and tailored solutions across the entire diamond value chain.",
  "Our advanced Galaxy™ scanning technology and master craftsmanship ensure rigorous quality control, fully insured handling, and consistent results at every stage.",
];

const GLOBAL_HUBS = ["India", "Botswana", "New York", "Hong Kong", "China"];

function GlobalPresenceStatement({ isInView }: { isInView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.05, delay: 0.48, ease: luxuryEase }}
      className="about-global-statement mt-10 lg:mt-12 pt-8 lg:pt-10 relative max-w-2xl"
    >
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.1, delay: 0.52, ease: luxuryEase }}
        className="absolute top-0 left-0 w-16 h-px bg-brand/30 origin-left"
        aria-hidden="true"
      />

      <div className="flex items-center gap-2.5 mb-5">
        <Globe
          size={14}
          strokeWidth={1.5}
          className="text-brand/50 shrink-0"
          aria-hidden="true"
        />
        <span className="type-eyebrow text-brand/55 tracking-[0.22em]">
          Global presence:
        </span>
      </div>

      <p className="leading-relaxed">
        <span className="sr-only">
          Global presence: India, Botswana, New York, Hong Kong, China — serving
          the world&apos;s top diamond markets.
        </span>

        <span className="flex flex-wrap items-baseline gap-x-1.5 gap-y-2 mb-4" aria-hidden="true">
          {GLOBAL_HUBS.map((hub, index) => (
            <span key={hub} className="inline-flex items-baseline">
              <motion.span
                initial={{ opacity: 0, y: 8 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.85,
                  delay: 0.58 + index * 0.07,
                  ease: luxuryEase,
                }}
                className="text-brand font-medium text-[clamp(0.9375rem,1.35vw,1.1875rem)] tracking-[0.14em] uppercase"
              >
                {hub}
              </motion.span>
              {index < GLOBAL_HUBS.length - 1 && (
                <span className="text-brand/20 mx-1.5 sm:mx-2 font-light select-none">
                  ·
                </span>
              )}
            </span>
          ))}
        </span>

        <span className="type-body-lg text-muted-default block">
          Serving the world&apos;s leading diamond markets.
        </span>
      </p>
    </motion.div>
  );
}

const trustItems = [
  { label: "20+", sub: "Years Experience" },
  { label: "5", sub: "Global Markets" },
  { label: "100%", sub: "Quality Commitment" },
  { label: "24/7", sub: "Partner Support" },
];

export function About() {
  const { ref: sectionRef, isInView } = useReveal();

  return (
    <section id="about" ref={sectionRef} className="relative bg-white overflow-hidden">
      <div className="site-container-xl w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 section-padding">
        <div className="about-grid grid lg:grid-cols-[1.15fr_1fr] gap-8 sm:gap-10 lg:gap-14 xl:gap-16 items-start min-w-0">
          <div className="min-w-0 order-1">
            <SectionHeader
              title="About Sparkle Solitaires"
              subtitle="Your Complete Partner Across the Diamond Value Chain"
              isInView={isInView}
              singleLine={false}
              className="mb-8 lg:mb-10"
            />

            <div className="space-y-5 sm:space-y-6 max-w-2xl section-flow">
              {description.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.95,
                    delay: 0.25 + index * 0.08,
                    ease: luxuryEase,
                  }}
                  className="type-body-lg"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <GlobalPresenceStatement isInView={isInView} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.15, ease: luxuryEase }}
            className="about-trust-grid grid grid-cols-2 gap-4 sm:gap-5 order-2 min-w-0 mt-2 lg:mt-0"
          >
            {trustItems.map((item, index) => (
              <motion.div
                key={item.sub}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.9,
                  delay: 0.3 + index * 0.06,
                  ease: luxuryEase,
                }}
                className="trust-item group bg-brand-surface rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-brand-subtle shadow-[0_2px_20px_rgba(10,0,111,0.04)] min-w-0"
              >
                <p className="text-2xl sm:text-3xl font-light text-brand tracking-[0.02em] mb-1.5 break-words">
                  {item.label}
                </p>
                <p className="type-eyebrow text-[10px] sm:text-[11px]">{item.sub}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
