import { useRef, useEffect, useCallback, useState } from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import videoFile from "../../imports/file__1_.mp4";
import logoFile from "../../../assests/Sparkle Solitaire LOGO.png";

// Framer motion animation variants for the luxury fade-up sequence
const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.9,
      ease: [0.215, 0.610, 0.355, 1.000], // smooth cubic-bezier
    },
  }),
};

const bottomVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.1,
      duration: 0.9,
      ease: [0.215, 0.610, 0.355, 1.000],
    },
  },
};

function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const ensurePlayback = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().catch(() => {
        /* Autoplay might be blocked by browser — muted inline video usually succeeds */
      });
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.defaultPlaybackRate = 1;
    video.playbackRate = 1;

    const markPlaying = () => setIsPlaying(true);

    if (!video.paused && video.readyState >= 2) {
      markPlaying();
    }

    ensurePlayback();

    const handleCanPlay = () => ensurePlayback();
    const handlePlaying = () => markPlaying();
    const handleEnded = () => {
      video.currentTime = 0;
      ensurePlayback();
    };

    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("playing", handlePlaying);
    video.addEventListener("ended", handleEnded);

    const handleVisibility = () => {
      if (document.visibilityState === "visible") ensurePlayback();
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("playing", handlePlaying);
      video.removeEventListener("ended", handleEnded);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [ensurePlayback]);

  return (
    <div className="hero-video-container absolute inset-0 z-0 overflow-hidden rounded-[12px] md:rounded-[16px] lg:rounded-[20px] bg-[#0a006f]">
      {/* Instant poster — paints before React/video; removed once playback starts */}
      <img
        src="/hero-poster.jpg"
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        decoding="sync"
        className={`hero-poster absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out rounded-[12px] md:rounded-[16px] lg:rounded-[20px] ${
          isPlaying ? "opacity-0" : "opacity-100"
        }`}
      />
      <video
        ref={videoRef}
        src={videoFile}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/hero-poster.jpg"
        disablePictureInPicture
        aria-hidden="true"
        className={`hero-video absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out rounded-[12px] md:rounded-[16px] lg:rounded-[20px] ${
          isPlaying ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative w-full mt-[70px] sm:mt-[80px] h-[calc(100svh-70px)] sm:h-[calc(100svh-80px)] px-2 sm:px-3 lg:px-4 xl:px-5 bg-white flex items-stretch"
    >
      <div className="relative w-full h-full rounded-[12px] md:rounded-[16px] lg:rounded-[20px] overflow-hidden bg-[#0a006f] flex flex-col justify-between py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8">
        <HeroVideo />

        {/* Permanent brand overlay — always above video, below content */}
        <div
          className="hero-overlay absolute inset-0 z-[1] rounded-[12px] md:rounded-[16px] lg:rounded-[20px] pointer-events-none"
          aria-hidden="true"
        />

        {/* Top spacer to balance vertical height */}
        <div className="w-full shrink-0 h-4 hidden sm:block" />

        {/* Center content container */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center w-full max-w-[1200px] mx-auto my-auto">
          {/* Logo */}
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="mb-4 sm:mb-6"
          >
            <img
              src={logoFile}
              alt="Sparkle Solitaires Logo"
              className="w-[clamp(80px,10vw,120px)] h-auto object-contain mx-auto"
            />
          </motion.div>

          {/* Company Name */}
          <motion.h1
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
            custom={0.35}
            className="text-3xl sm:text-5xl lg:text-7xl font-extralight tracking-[0.25em] text-white uppercase mb-4 leading-none"
          >
            SPARKLE SOLITAIRES
          </motion.h1>

          {/* Service pipes */}
          <motion.p
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
            custom={0.5}
            className="text-[10px] sm:text-xs md:text-sm tracking-[0.2em] text-white/90 uppercase font-medium mb-4 max-w-[95%] mx-auto"
          >
            Scanning | Contract Manufacturing | Global Trade Consultancy
          </motion.p>

          {/* Short supporting sentence */}
          <motion.p
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
            custom={0.65}
            className="text-xs sm:text-sm md:text-base text-white/70 max-w-[620px] mx-auto mb-8 leading-relaxed font-light"
          >
            Your complete partner for Natural &amp; Lab-Grown Diamonds — from Rough Scanning to Polished Stones and Global Sales.
          </motion.p>

          {/* Pill CTA buttons with premium hover effects */}
          <motion.div
            variants={fadeInUpVariants}
            initial="hidden"
            animate="visible"
            custom={0.8}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto px-4"
          >
            <Button 
              className="hero-cta-btn w-full sm:w-auto px-8 py-6 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#0a006f] text-white border border-[#0a006f] hover:bg-[#080058] hover:border-[#080058] transition-all duration-300 shadow-none h-auto"
              onClick={() => {
                const servicesSec = document.getElementById("services");
                if (servicesSec) {
                  servicesSec.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Explore Our Services
            </Button>
            <Button
              variant="outline"
              className="hero-cta-btn w-full sm:w-auto px-8 py-6 rounded-full text-xs font-semibold uppercase tracking-widest bg-transparent text-white border border-white hover:bg-white hover:text-[#0a006f] transition-all duration-300 h-auto"
              onClick={() => {
                const contactSec = document.getElementById("contact");
                if (contactSec) {
                  contactSec.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Contact Us
            </Button>
          </motion.div>
        </div>

        {/* Bottom Area (Symmetrical side statements + Scroll indicator) */}
        <motion.div
          variants={bottomVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 grid grid-cols-1 md:grid-cols-3 items-end w-full max-w-[1400px] mx-auto gap-4"
        >
          {/* Bottom Left Area */}
          <div className="text-left hidden md:block">
            <span className="text-[10px] lg:text-xs font-semibold tracking-[0.2em] uppercase text-white/60 block max-w-[240px] leading-relaxed">
              Natural &amp; Lab-Grown Diamond Solutions
            </span>
          </div>

          {/* Bottom Center Scroll Indicator */}
          <div className="flex flex-col items-center justify-center">
            <div
              className="flex flex-col items-center text-white/80 cursor-pointer pointer-events-auto"
              onClick={() => {
                const nextSection = document.getElementById("about");
                if (nextSection) {
                  nextSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <span className="text-[10px] tracking-[0.25em] font-medium mb-1.5 uppercase text-white/50">
                SCROLL
              </span>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="text-white/50 flex items-center justify-center"
              >
                <ChevronDown size={14} />
              </motion.div>
            </div>
          </div>

          {/* Bottom Right Area */}
          <div className="text-right hidden md:block">
            <span className="text-[10px] lg:text-xs font-semibold tracking-[0.2em] uppercase text-white/60 block ml-auto max-w-[240px] leading-relaxed">
              Global Presence Across Leading Diamond Markets
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

