import { useRef, useEffect, useCallback, useState } from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import heroDesktopMp4 from "../../imports/hero/hero-desktop.mp4";
import heroMobileMp4 from "../../imports/hero/hero-mobile.mp4";
import logoFile from "../../../assests/Sparkle Solitaire LOGO.webp";
import { preloadCriticalAsset } from "../../utils/preloadCriticalAsset";

const MOBILE_MQ = "(max-width: 768px)";

preloadCriticalAsset(logoFile, "image");

// Framer motion animation variants for the luxury fade-up sequence
const fadeInUpVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
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
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

function useIsMobileHero() {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(MOBILE_MQ).matches;
  });

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_MQ);
    const onChange = () => setIsMobile(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return isMobile;
}

function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const isMobile = useIsMobileHero();

  // Responsive MP4 only — desktop ~2.3MB / mobile ~1.1MB (source was 10.5MB).
  // WebM encodes were larger than MP4 at current settings; reintroduce when smaller.
  const mp4Src = isMobile ? heroMobileMp4 : heroDesktopMp4;

  useEffect(() => {
    // Preload only the active (viewport-appropriate) file — never both.
    preloadCriticalAsset(mp4Src, "video", { type: "video/mp4" });
  }, [mp4Src]);

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
    setIsPlaying(false);

    // Force source switch when crossing mobile/desktop breakpoint.
    video.load();

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
  }, [ensurePlayback, mp4Src]);

  return (
    <div className="hero-video-container absolute inset-0 z-0 overflow-hidden rounded-[12px] md:rounded-[16px] lg:rounded-[20px] bg-[#0a006f]">
      {/* Instant poster — paints before React/video; removed once playback starts */}
      <picture>
        <source srcSet="/hero-poster.webp" type="image/webp" />
        <img
          src="/hero-poster.jpg"
          alt=""
          aria-hidden="true"
          loading="eager"
          fetchPriority="high"
          decoding="sync"
          className={`hero-media hero-poster absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out rounded-[12px] md:rounded-[16px] lg:rounded-[20px] ${
            isPlaying ? "opacity-0" : "opacity-100"
          }`}
        />
      </picture>
      <video
        ref={videoRef}
        key={isMobile ? "mobile" : "desktop"}
        src={mp4Src}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/hero-poster.jpg"
        disablePictureInPicture
        aria-hidden="true"
        className={`hero-media hero-video absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out rounded-[12px] md:rounded-[16px] lg:rounded-[20px] ${
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
      className="relative w-full mt-[70px] sm:mt-[80px] min-h-[calc(100svh-70px)] sm:min-h-[calc(100svh-80px)] px-2 sm:px-3 lg:px-4 xl:px-5 bg-white flex items-stretch"
    >
      <div className="relative w-full min-h-[calc(100svh-70px)] sm:min-h-[calc(100svh-80px)] rounded-[12px] md:rounded-[16px] lg:rounded-[20px] overflow-hidden bg-[#0a006f] flex flex-col">
        <HeroVideo />

        {/* Permanent brand overlay — always above video, below content */}
        <div
          className="hero-overlay absolute inset-0 z-[1] rounded-[12px] md:rounded-[16px] lg:rounded-[20px] pointer-events-none"
          aria-hidden="true"
        />

        <div className="hero-inner relative z-10 flex flex-col justify-between min-h-[calc(100svh-70px)] sm:min-h-[calc(100svh-80px)] flex-1 py-5 sm:py-8 lg:py-10 px-3 sm:px-6 lg:px-8">
          {/* Top spacer to balance vertical height */}
          <div className="w-full shrink-0 h-2 sm:h-4 hidden sm:block" />

          {/* Center content container */}
          <div className="hero-content relative flex flex-col items-center justify-center text-center w-full max-w-[1200px] mx-auto my-auto min-w-0 px-1 sm:px-0">
            {/* Logo */}
            <motion.div
              variants={fadeInUpVariants}
              initial="hidden"
              animate="visible"
              custom={0.2}
              className="hero-logo-block mb-4 sm:mb-7 shrink-0"
            >
              <img
                src={logoFile}
                alt="Sparkle Solitaires brand logo"
                width={120}
                height={120}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="hero-logo w-[clamp(72px,18vw,120px)] h-auto object-contain mx-auto"
              />
            </motion.div>

            {/* Company Name */}
            <motion.h1
              variants={fadeInUpVariants}
              initial="hidden"
              animate="visible"
              custom={0.35}
              className="type-hero-title text-white mb-4 sm:mb-5 max-w-full px-1"
            >
              SPARKLE SOLITAIRES
            </motion.h1>

            {/* Service pipes */}
            <motion.p
              variants={fadeInUpVariants}
              initial="hidden"
              animate="visible"
              custom={0.5}
              className="hero-subtitle-pipes text-[10px] sm:text-[11px] md:text-xs tracking-[0.14em] sm:tracking-[0.18em] uppercase mb-5 sm:mb-6 max-w-[90%] sm:max-w-[95%] mx-auto leading-relaxed"
            >
              Diamond Manufacturing | Global Trading
            </motion.p>

            {/* Supporting copy */}
            <motion.div
              variants={fadeInUpVariants}
              initial="hidden"
              animate="visible"
              custom={0.65}
              className="hero-body-text w-full max-w-[640px] mx-auto mb-5 sm:mb-8 px-1 space-y-2.5 sm:space-y-3 text-center"
            >
              <p className="hero-body-lead text-[13px] sm:text-sm md:text-[15px] leading-[1.55] font-medium text-white/90">
                Fancy Color Lab-Grown Diamonds. Manufactured with Precision.
              </p>
              <p className="hero-body-detail text-[12px] sm:text-[13px] md:text-sm leading-[1.65] font-light text-white/75">
                We specialize in Fancy Color Lab-Grown Diamonds, and manufacture CVD and HPHT diamonds to exact client specifications — from size and shape to color and layout. Every stone we produce is backed by consistent quality standards and reliable delivery, with deep expertise in custom layouts, CVD &amp; HPHT production, and made-to-order jewelry — built for wholesalers, manufacturers, and international buyers who expect consistent quality.
              </p>
            </motion.div>

            {/* Pill CTA buttons with premium hover effects */}
            <motion.div
              variants={fadeInUpVariants}
              initial="hidden"
              animate="visible"
              custom={0.8}
              className="hero-cta-group flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center w-full max-w-sm sm:max-w-none sm:w-auto px-2 sm:px-4"
            >
              <Button
                className="cta-primary hero-cta-btn w-full sm:w-auto px-8 py-[1.125rem] sm:py-5 rounded-full text-[11px] font-medium uppercase tracking-[0.18em] bg-[#0a006f] text-white border border-[#0a006f] hover:bg-[#080058] hover:border-[#080058] h-auto"
                onClick={() => {
                  const manufacturingSec = document.getElementById("manufacturing");
                  if (manufacturingSec) {
                    manufacturingSec.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Explore Our Services
              </Button>
              <Button
                variant="outline"
                className="cta-secondary hero-cta-btn w-full sm:w-auto px-8 py-[1.125rem] sm:py-5 rounded-full text-[11px] font-medium uppercase tracking-[0.18em] bg-white/5 text-white border border-white/80 hover:bg-white hover:text-[#0a006f] hover:border-white h-auto"
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

          {/* Bottom — Global Presence + Scroll */}
          <motion.div
            variants={bottomVariants}
            initial="hidden"
            animate="visible"
            className="hero-bottom shrink-0 flex flex-col items-center justify-center w-full max-w-[1400px] mx-auto gap-2.5 sm:gap-3 pt-4 sm:pt-2"
          >
            <div className="hero-presence-line text-white/70 text-center px-2">
              <span className="hero-presence-label text-[10px] sm:text-[11px] lg:text-xs font-medium tracking-[0.14em] sm:tracking-[0.18em] uppercase">
                Global Presence
              </span>
              <ul className="hero-presence-locs list-none m-0 p-0" aria-label="Global locations">
                <li>India</li>
                <li>New York</li>
                <li>Hong Kong</li>
                <li>China</li>
              </ul>
            </div>
            <button
              type="button"
              className="hero-scroll-indicator flex flex-col items-center text-white/80 cursor-pointer pointer-events-auto bg-transparent border-0 p-1"
              onClick={() => {
                const nextSection = document.getElementById("expertise");
                if (nextSection) {
                  nextSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              aria-label="Scroll to Expertise section"
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
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
