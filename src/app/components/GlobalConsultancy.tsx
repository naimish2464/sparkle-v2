import { motion, useScroll, useTransform } from "motion/react";
import { luxuryEase, useReveal } from "./useReveal";
import ConsultancyGlobe from "./ConsultancyGlobe";

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

const hubLocations = ["India", "New York", "Hong Kong", "China"];

function AnimatedRoutesMap() {
  const routes = [
    { d: "M 180 220 Q 320 180 480 200 T 720 190", delay: 0 },
    { d: "M 200 280 Q 400 260 580 270 T 820 255", delay: 0.4 },
    { d: "M 160 340 Q 350 320 520 335 T 780 345", delay: 0.8 },
  ];

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.06]"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1000 500"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="500" cy="250" rx="460" ry="220" stroke="white" strokeWidth="0.8" />
        {routes.map((route, i) => (
          <motion.path
            key={i}
            d={route.d}
            stroke="white"
            strokeWidth="0.7"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{
              duration: 4,
              delay: route.delay,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
        {[
          { cx: 620, cy: 240, label: "India" },
          { cx: 220, cy: 210, label: "New York" },
          { cx: 720, cy: 260, label: "Hong Kong" },
          { cx: 680, cy: 220, label: "China" },
        ].map((point) => (
          <g key={point.label}>
            <circle cx={point.cx} cy={point.cy} r="3" fill="white" opacity="0.5" />
            <motion.circle
              cx={point.cx}
              cy={point.cy}
              r="3"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
              initial={{ r: 3, opacity: 0.5 }}
              animate={{ r: 12, opacity: 0 }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}

export function GlobalConsultancy() {
  const { ref: sectionRef, isInView } = useReveal();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const globeY = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["2%", "-2%"]);

  return (
    <section
      id="consultancy"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-[#060b14]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#060b14] to-[#020408] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#060b14] via-[#060b14]/85 to-transparent pointer-events-none z-[1]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none z-[2]" />

      <AnimatedRoutesMap />

      {/* Interactive globe */}
      <motion.div
        style={{ y: globeY }}
        className="consultancy-globe-wrap absolute inset-y-0 right-0 w-full lg:w-[62%] xl:w-[58%] pointer-events-none z-0"
        aria-hidden="true"
      >
        <div className="relative w-full h-full min-h-[420px] lg:min-h-0">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#060b14]/20 to-[#060b14]/90 z-[1]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060b14] via-transparent to-[#060b14]/40 z-[1] lg:hidden" />
          <ConsultancyGlobe className="absolute inset-0 lg:translate-x-[8%]" />
        </div>
      </motion.div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
        <motion.div
          style={{ y: contentY }}
          className="consultancy-content py-16 sm:py-20 lg:py-28 xl:py-32 lg:min-h-screen lg:flex lg:flex-col lg:justify-center lg:max-w-[720px] xl:max-w-[760px] max-lg:pb-8"
        >
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.1, ease: luxuryEase }}
            className="type-eyebrow text-white/50 mb-5 lg:mb-6 tracking-[0.2em]"
          >
            Global Presence
          </motion.p>

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

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 1.4, delay: 0.22, ease: luxuryEase }}
            className="w-14 h-px bg-white/25 origin-left mb-7 lg:mb-8"
          />

          {/* Hub locations — elegant inline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.28, ease: luxuryEase }}
            className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-8 lg:mb-10 pb-8 border-b border-white/[0.07]"
          >
            {hubLocations.map((location, index) => (
              <span key={location} className="flex items-center">
                {index > 0 && (
                  <span className="hidden sm:inline w-px h-3 bg-white/20 mr-5" aria-hidden="true" />
                )}
                <span className="type-body text-white/80 font-medium tracking-wide">
                  {location}
                </span>
              </span>
            ))}
          </motion.div>

          <div className="space-y-0">
            {capabilities.map((line, index) => (
              <motion.p
                key={line}
                initial={{ opacity: 0, y: 22 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 1.05,
                  delay: 0.35 + index * 0.06,
                  ease: luxuryEase,
                }}
                className={`type-body py-3.5 lg:py-4 border-b border-white/[0.07] last:border-b-0 ${
                  index === 0 ? "text-white/90" : "text-white/60"
                }`}
              >
                {line}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#020408] to-transparent pointer-events-none z-[2]" />
    </section>
  );
}
