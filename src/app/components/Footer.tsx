import { motion } from "motion/react";
import { Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import logoFile from "../../../assests/Sparkle Solitaire LOGO.png";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Manufacturing", href: "#manufacturing" },
  { name: "Jewelry", href: "#custom-jewelry" },
  { name: "Consultancy", href: "#consultancy" },
  { name: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="site-footer relative bg-brand text-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-10 sm:py-12 lg:py-14">
        <div className="footer-links-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8 mb-10 lg:mb-12">
          {/* Logo & brand */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="footer-brand-col lg:col-span-1"
          >
            <img
              src={logoFile}
              alt="Sparkle Solitaires logo — luxury diamond manufacturer"
              className="h-9 w-auto object-contain brightness-0 invert mb-5"
            />
            <p className="type-body text-white/50 max-w-xs leading-relaxed">
              Your trusted partner for natural and lab-grown diamonds — from Galaxy™ rough scanning to polished stones and global sales.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.08 }}
          >
            <h3 className="type-eyebrow text-white/40 mb-5 tracking-[0.18em]">Navigation</h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="type-body text-sm text-white/60 hover:text-white transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.16 }}
          >
            <h3 className="type-eyebrow text-white/40 mb-5 tracking-[0.18em]">Contact</h3>
            <div className="space-y-3">
              <a
                href="mailto:sparklessolitaire@gmail.com"
                className="flex items-start gap-2.5 type-body text-sm text-white/60 hover:text-white transition-colors duration-300 break-all"
              >
                <Mail size={14} className="mt-0.5 shrink-0 text-white/35" strokeWidth={1.5} />
                sparklessolitaire@gmail.com
              </a>
              <a
                href="tel:+15513591202"
                className="flex items-center gap-2.5 type-body text-sm text-white/60 hover:text-white transition-colors duration-300"
              >
                <Phone size={14} className="shrink-0 text-white/35" strokeWidth={1.5} />
                +1 551 359 1202
              </a>
              <div className="flex items-start gap-2.5 type-body text-sm text-white/60">
                <MapPin size={14} className="mt-0.5 shrink-0 text-white/35" strokeWidth={1.5} />
                <span>Surat, Gujarat – 395004</span>
              </div>
            </div>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.24 }}
          >
            <h3 className="type-eyebrow text-white/40 mb-5 tracking-[0.18em]">Connect</h3>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/sparklesolitaire/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center border border-white/15 rounded-full text-white/60 hover:text-white hover:border-white/30 transition-all duration-300"
              >
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a
                href="https://www.linkedin.com/in/sparklesolitaire/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 flex items-center justify-center border border-white/15 rounded-full text-white/60 hover:text-white hover:border-white/30 transition-all duration-300"
              >
                <Linkedin size={18} strokeWidth={1.5} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="footer-legal pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="type-body text-xs text-white/35 tracking-wide">
            © {new Date().getFullYear()} Sparkle Solitaires. All rights reserved.
          </p>
          <p className="type-body text-xs text-white/35 tracking-wide">
            <span>India</span>
            <span className="separator-dot mx-2 hidden sm:inline" aria-hidden="true">·</span>
            <span className="block sm:inline">Botswana</span>
            <span className="separator-dot mx-2 hidden sm:inline" aria-hidden="true">·</span>
            <span className="block sm:inline">New York</span>
            <span className="separator-dot mx-2 hidden sm:inline" aria-hidden="true">·</span>
            <span className="block sm:inline">Hong Kong</span>
            <span className="separator-dot mx-2 hidden sm:inline" aria-hidden="true">·</span>
            <span className="block sm:inline">China</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
