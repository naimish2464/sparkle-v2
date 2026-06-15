import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import logoFile from "../../../logo.png";
import {
  ensurePageScrollable,
  lockPageScroll,
  unlockPageScroll,
} from "../../utils/ensurePageScrollable";
import { preloadCriticalAsset } from "../../utils/preloadCriticalAsset";

preloadCriticalAsset(logoFile, "image");

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Track active section via Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.2, rootMargin: "-80px 0px -50% 0px" }
    );

    const sections = ["home", "about", "services", "manufacturing", "custom-jewelry", "consultancy", "contact"];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  // Lock body scroll only while mobile menu is open; always restore on close/unmount/reload
  useEffect(() => {
    if (mobileMenuOpen) {
      lockPageScroll();
    } else {
      unlockPageScroll();
    }
    return () => {
      unlockPageScroll();
    };
  }, [mobileMenuOpen]);

  // Reset menu + scroll state on mount and when restored from bfcache
  useEffect(() => {
    const resetScrollState = () => {
      setMobileMenuOpen(false);
      ensurePageScrollable();
    };

    resetScrollState();
    window.addEventListener("pageshow", resetScrollState);
    return () => {
      window.removeEventListener("pageshow", resetScrollState);
      ensurePageScrollable();
    };
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Manufacturing", href: "#manufacturing" },
    { name: "Jewelry", href: "#custom-jewelry" },
    { name: "Consultancy", href: "#consultancy" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`site-header fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-brand-subtle transition-shadow duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <nav className="relative w-full max-w-[1600px] mx-auto px-3 sm:px-4 lg:px-5 xl:px-6">
        <div className="grid grid-cols-[1fr_auto] lg:grid-cols-[auto_1fr_auto] items-center h-[70px] sm:h-[80px] gap-2 sm:gap-4 min-w-0">
          {/* Logo — flush left */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="justify-self-start flex items-center shrink-0"
          >
            <a href="#home" className="header-logo-link flex items-center h-full py-1.5 sm:py-2" aria-label="Sparkle Solitaires — Home">
              <img
                src={logoFile}
                alt="Sparkle Solitaires logo — luxury diamond manufacturer"
                width={160}
                height={62}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="site-logo"
              />
            </a>
          </motion.div>

          {/* Center: Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center space-x-6 xl:space-x-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-[11px] xl:text-[12px] tracking-[0.16em] uppercase font-medium transition-colors duration-300 relative group py-2 ${
                    isActive ? "text-brand" : "text-muted-default hover:text-brand"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-[1.5px] bg-brand transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </a>
              );
            })}
          </div>

          {/* Right: CTA + mobile menu */}
          <div className="justify-self-end flex items-center gap-3">
            <div className="hidden lg:flex items-center">
              <Button
                className="cta-primary bg-brand hover:bg-[#080058] text-white px-6 py-3 rounded-full text-[10px] xl:text-[11px] font-semibold uppercase tracking-[0.16em] h-auto shadow-none"
                onClick={() => {
                  const contactSec = document.getElementById("contact");
                  if (contactSec) {
                    contactSec.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Contact Us
              </Button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 -mr-1 text-muted-default hover:text-brand transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mobile-nav-drawer lg:hidden absolute top-[70px] sm:top-[80px] left-0 right-0 bg-white border-b border-brand-subtle shadow-lg px-4 sm:px-6 py-5 sm:py-6 overflow-y-auto max-h-[calc(100dvh-70px)] sm:max-h-[calc(100dvh-80px)]"
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-sm tracking-[0.14em] uppercase font-medium transition-colors py-2 block ${
                        isActive ? "text-brand" : "text-body-default hover:text-brand"
                      }`}
                    >
                      {item.name}
                    </a>
                  );
                })}
                <div className="pt-4 border-t border-brand-subtle">
                  <Button 
                    className="cta-primary bg-brand hover:bg-[#080058] text-white w-full py-3.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.16em] h-auto shadow-none"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      const contactSec = document.getElementById("contact");
                      if (contactSec) {
                        contactSec.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
