import { useRef, useEffect, useCallback, useState } from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import videoFile from "../../imports/file__1_.mp4";
import logoFile from "../../../assests/Sparkle Solitaire LOGO.png";

function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const ensurePlayback = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().catch(() => {
        /* Autoplay may be blocked until user gesture — muted inline video usually succeeds */
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
    <div className="hero-video-container absolute inset-0 z-0 overflow-hidden bg-[#0a1628]">
      {/* Instant poster — paints before React/video; removed once playback starts */}
      <img
        src="/hero-poster.jpg"
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        decoding="sync"
        className={`hero-poster absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out ${
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
        className={`hero-video absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out ${
          isPlaying ? "opacity-100" : "opacity-0"
        }`}
      />
      {/* Static overlays — no mix-blend-mode (avoids full-frame GPU compositing cost) */}
      <div className="absolute inset-0 bg-blue-950/65 pointer-events-none" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 pointer-events-none"
        aria-hidden="true"
      />
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-[#0a1628]">
      <HeroVideo />

      {/* Main Content — logo layer is isolated from animated siblings */}
      <div className="relative z-20 h-full w-full px-4 sm:px-6 lg:px-8">
        {/* Logo: fixed center anchor, no transforms or floating */}
        <div className="hero-logo-anchor pointer-events-none absolute inset-x-0 top-[22%] sm:top-[20%] md:top-[18%] flex justify-center">
          <img
            src={logoFile}
            alt="Sparkle Solitaires"
            width={280}
            height={120}
            decoding="async"
            fetchPriority="high"
            className="hero-logo drop-shadow-[0_8px_32px_rgba(96,165,250,0.45)] w-[clamp(160px,20vw,280px)] h-auto"
          />
        </div>

        {/* Text & CTAs — animate independently below the logo anchor */}
        <div className="relative h-full flex flex-col items-center justify-center text-center w-full max-w-[1400px] mx-auto pt-[clamp(120px,18vh,200px)]">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
            className="type-subtitle text-white mb-4 md:mb-5 w-full"
          >
            Scanning | Contract Manufacturing | Global Trade Consultancy
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7, ease: "easeOut" }}
            className="type-body-lg text-gray-100 font-medium mb-4 md:mb-5 w-full max-w-[1200px]"
          >
            Your complete partner for Natural &amp; Lab-Grown Diamonds — from Rough Scanning to Polished Stones and Global Sales.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
            className="type-body text-gray-300 mb-6 md:mb-7 w-full max-w-[1300px]"
          >
            We are your complete partner for natural and lab-grown diamonds. With over 20 years of hands-on diamond industry experience, we deliver precise, secure, and tailored solutions across the full value chain. We combine cutting-edge technology with expert craftsmanship to ensure accuracy, strict quality control, secure handling, and reliable performance at every step.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-10"
          >
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 group">
              Explore Our Services
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white/80 text-white hover:bg-white hover:text-blue-900 px-8 py-6 text-lg rounded-full backdrop-blur-sm bg-white/10 transition-all duration-300 group"
            >
              Contact Us
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.7, ease: "easeOut" }}
            className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 type-body font-medium text-gray-300"
          >
            {["India", "Botswana", "New York", "Hong Kong", "China"].map((country) => (
              <span key={country} className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white/70 shrink-0" aria-hidden="true" />
                {country}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center text-white/80"
          >
            <span className="text-sm tracking-widest mb-2">SCROLL</span>
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
