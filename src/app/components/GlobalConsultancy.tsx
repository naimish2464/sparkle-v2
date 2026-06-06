import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import ConsultancyGlobe from "./ConsultancyGlobe";

const luxuryEase = [0.22, 1, 0.36, 1] as const;

const capabilities = [
  "Direct presence in New York | Hong Kong | China | India",
  "Access to an active international buyer network",
  "Fast & reliable import–export facilitation",
  "Strong support in trading, sales & global distribution",
  "Commission-based stone selling - fully transparent & ethical",
  "Strategic pricing, sourcing & market positioning guidance",
  "Online diamond sales platform connectivity",
  "Deep expertise across the complete diamond value chain",
  "Customized solutions built around your business goals",
  "Integrity-driven approach with full transparency",
  "Long-term partnership mindset - we grow together",
];

function WorldMapBackground() {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.045]"
      aria-hidden="true"
    >
      <motion.div
        animate={{ x: ["0%", "-3%"], y: ["0%", "1.5%"] }}
        transition={{ duration: 28, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        className="absolute inset-[-8%] w-[116%] h-[116%]"
      >
        <svg
          viewBox="0 0 1000 500"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="500" cy="250" rx="480" ry="230" stroke="white" strokeWidth="0.5" opacity="0.4" />
          <path
            d="M120 180 Q180 120 260 140 T420 130 T580 150 T740 135 T880 170"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <path
            d="M80 260 Q200 240 320 255 T520 248 T720 262 T920 250"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          <path
            d="M140 340 Q280 320 420 335 T680 328 T860 345"
            stroke="white"
            strokeWidth="0.6"
            opacity="0.35"
          />
          {[...Array(48)].map((_, i) => (
            <circle
              key={i}
              cx={60 + (i % 12) * 78 + (Math.floor(i / 12) % 2) * 20}
              cy={100 + Math.floor(i / 12) * 95}
              r="1.2"
              fill="white"
              opacity={0.25 + (i % 3) * 0.1}
            />
          ))}
        </svg>
      </motion.div>
    </div>
  );
}

export function GlobalConsultancy() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const globeY = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);
  const globeOpacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.55, 1, 1, 0.55]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["3%", "-3%"]);

  return (
    <section
      id="consultancy"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-[#060b14]"
    >
      {/* Luxury gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#060b14] to-[#020408] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#060b14] via-[#060b14]/80 to-transparent pointer-events-none z-[1]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none z-[2]" />

      <WorldMapBackground />

      {/* Interactive globe — right visual anchor */}
      <motion.div
        style={{ y: globeY, opacity: globeOpacity }}
        className="absolute inset-y-0 right-0 w-full lg:w-[62%] xl:w-[58%] pointer-events-none z-0"
        aria-hidden="true"
      >
        <div className="relative w-full h-full min-h-[420px] lg:min-h-0">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#060b14]/20 to-[#060b14]/90 z-[1]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060b14] via-transparent to-[#060b14]/40 z-[1] lg:hidden" />
          <ConsultancyGlobe className="absolute inset-0 lg:translate-x-[8%]" />
        </div>
      </motion.div>

      {/* Editorial content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
        <motion.div
          style={{ y: contentY }}
          className="py-16 sm:py-20 lg:py-28 xl:py-32 lg:min-h-screen lg:flex lg:flex-col lg:justify-center lg:max-w-[720px] xl:max-w-[760px]"
        >
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.1, ease: luxuryEase }}
            className="type-eyebrow text-white/50 mb-5 lg:mb-6"
          >
            Global Presence
          </motion.p>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.3, delay: 0.1, ease: luxuryEase }}
            className="type-slide-title-light text-white mb-6 lg:mb-8"
          >
            Global Diamond
            <br />
            <span className="type-slide-title-bold">Market Consultancy</span>
          </motion.h2>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 1.4, delay: 0.22, ease: luxuryEase }}
            className="w-14 h-px bg-white/25 origin-left mb-7 lg:mb-8"
          />

          {/* Capabilities — editorial list, no bullets or cards */}
          <div className="space-y-0">
            {capabilities.map((line, index) => (
              <motion.p
                key={line}
                initial={{ opacity: 0, y: 22 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 1.05,
                  delay: 0.32 + index * 0.07,
                  ease: luxuryEase,
                }}
                className={`type-body py-3.5 lg:py-4 border-b border-white/[0.07] last:border-b-0 ${
                  index === 0 ? "text-white/90" : "text-white/65"
                }`}
              >
                {line}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom edge fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#020408] to-transparent pointer-events-none z-[2]" />
    </section>
  );
}
