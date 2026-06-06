import { motion } from "motion/react";
import { ChevronDown, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import videoFile from "../../imports/file__1_.mp4";
import logoFile from "../../../assests/Sparkle Solitaire LOGO.png";

export function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={videoFile} type="video/mp4" />
        </video>
        {/* Navy-blue transparent overlay */}
        <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              y: [null, Math.random() * -200 - 100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            className="absolute w-1 h-1 bg-white rounded-full"
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 w-full">
        <div className="w-full max-w-[1400px] mx-auto flex flex-col items-center">
          {/* Logo — primary focal point */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 120, damping: 14 }}
            className="mb-6 md:mb-8"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative flex items-center justify-center"
            >
              <img
                src={logoFile}
                alt="Sparkle Solitaires"
                className="drop-shadow-[0_8px_32px_rgba(96,165,250,0.45)]"
                style={{ width: "clamp(160px, 20vw, 280px)", height: "auto" }}
              />
            </motion.div>
          </motion.div>

          {/* Category / service label (H5-style, not main title) */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="type-subtitle text-white mb-4 md:mb-5 w-full"
          >
            Scanning | Contract Manufacturing | Global Trade Consultancy
          </motion.p>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8 }}
            className="type-body-lg text-gray-100 font-medium mb-4 md:mb-5 w-full max-w-[1200px]"
          >
            Your complete partner for Natural &amp; Lab-Grown Diamonds — from Rough Scanning to Polished Stones and Global Sales.
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="type-body text-gray-300 mb-6 md:mb-7 w-full max-w-[1300px]"
          >
            We are your complete partner for natural and lab-grown diamonds. With over 20 years of hands-on diamond industry experience, we deliver precise, secure, and tailored solutions across the full value chain. We combine cutting-edge technology with expert craftsmanship to ensure accuracy, strict quality control, secure handling, and reliable performance at every step.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
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

          {/* Global Presence */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
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
          className="absolute bottom-12"
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

      {/* Light Reflection Effect */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <motion.div
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
        ></motion.div>
      </div>
    </section>
  );
}
