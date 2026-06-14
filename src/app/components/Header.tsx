import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import logoFile from "../../../logo.png";

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

    const sections = ["home", "about", "services", "manufacturing", "consultancy", "contact"];
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

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Manufacturing", href: "#manufacturing" },
    { name: "Consultancy", href: "#consultancy" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`site-header fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#0a1628]/[0.06] transition-shadow duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <nav className="w-full max-w-[1600px] mx-auto px-2 sm:px-3 lg:px-4 xl:px-5">
        <div className="grid grid-cols-[1fr_auto] lg:grid-cols-[auto_1fr_auto] items-center h-[70px] sm:h-[80px] gap-4">
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
                alt="Sparkle Solitaires"
                className="site-logo"
              />
            </a>
          </motion.div>

          {/* Center: Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center space-x-8 xl:space-x-10">
            {navItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-[12px] xl:text-[13px] tracking-[0.2em] uppercase font-medium transition-colors duration-300 relative group py-2 ${
                    isActive ? "text-[#0a1628]" : "text-[#0a1628]/45 hover:text-[#0a1628]"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-[1.5px] bg-[#0a1628] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </a>
              );
            })}
          </div>

          {/* Right: CTA buttons + mobile menu */}
          <div className="justify-self-end flex items-center gap-3">
            <div className="hidden lg:flex items-center space-x-3">
              <Button
                variant="outline"
                className="border-slate-200 text-slate-700 hover:border-[#0a006f] hover:text-[#0a006f] px-5 py-3.5 rounded-full text-[10px] xl:text-xs font-semibold uppercase tracking-wider h-auto transition-all duration-300 bg-transparent shadow-none"
                onClick={() => window.open("https://wa.me/yourphonenumber", "_blank")}
              >
                WhatsApp
              </Button>
              <Button
                className="bg-[#0a006f] hover:bg-[#080058] text-white px-6 py-3.5 rounded-full text-[10px] xl:text-xs font-semibold uppercase tracking-wider h-auto transition-all duration-300 shadow-none"
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
              className="lg:hidden p-2 text-slate-600 hover:text-[#0a1628] transition-colors"
              aria-label="Toggle navigation menu"
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
              className="lg:hidden absolute top-[70px] sm:top-[80px] left-0 right-0 bg-white border-b border-slate-100 shadow-lg px-6 py-6 overflow-hidden"
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-sm tracking-widest uppercase font-medium transition-colors py-2 block ${
                        isActive ? "text-[#0a1628]" : "text-slate-600 hover:text-[#0a1628]"
                      }`}
                    >
                      {item.name}
                    </a>
                  );
                })}
                <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                  <Button 
                    variant="outline" 
                    className="border-slate-200 text-slate-700 w-full py-4 rounded-full text-xs font-semibold uppercase tracking-wider h-auto bg-transparent shadow-none"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      window.open("https://wa.me/yourphonenumber", "_blank");
                    }}
                  >
                    WhatsApp
                  </Button>
                  <Button 
                    className="bg-[#0a006f] hover:bg-[#080058] text-white w-full py-4 rounded-full text-xs font-semibold uppercase tracking-wider h-auto shadow-none"
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
