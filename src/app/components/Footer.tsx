import { Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import logoFile from "../../../assests/Sparkle Solitaire LOGO.png";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Expertise", href: "#expertise" },
  { name: "Manufacturing", href: "#manufacturing" },
  { name: "Jewelry", href: "#custom-jewelry" },
  { name: "Contact", href: "#contact" },
];

const addressLines = [
  "2nd Floor, Wing A, Om Siya House",
  "Behind Ghodiya-Pir Dargah",
  "Opposite Katargam Police Station",
  "Katargam Road",
  "Surat, Gujarat – 395004",
];

const emails = ["sparklessolitaire@gmail.com", "sparkle.solitaires@gmail.com"];

const globalLocations = ["India", "Botswana", "New York", "Hong Kong", "China"];

const INQUIRE_MAILTO =
  "mailto:sparklessolitaire@gmail.com?subject=" +
  encodeURIComponent("Inquiry — Sparkle Solitaires") +
  "&body=" +
  encodeURIComponent(
    "Hello Sparkle Solitaires,\n\nI would like to inquire about your diamond manufacturing and consultancy services.\n\n"
  );

export function Footer() {
  return (
    <footer
      id="contact"
      className="site-footer relative bg-brand text-white overflow-hidden"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-12 sm:py-14 lg:py-16">
        {/* One unified footer grid */}
        <div className="footer-main-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-10 lg:gap-8 xl:gap-10">
          {/* Brand */}
          <div className="footer-brand-col sm:col-span-2 lg:col-span-3 min-w-0">
            <img
              src={logoFile}
              alt="Sparkle Solitaires"
              className="h-9 w-auto object-contain brightness-0 invert mb-5"
            />
            <p className="type-body text-sm text-white/50 max-w-[240px] leading-relaxed mb-6">
              Your trusted partner for natural and lab-grown diamonds — from Galaxy™
              rough scanning to polished stones and global sales.
            </p>
            <a
              href={INQUIRE_MAILTO}
              className="inline-flex items-center text-[11px] font-medium uppercase tracking-[0.16em] text-white/85 hover:text-white transition-colors duration-300 border-b border-white/30 hover:border-white pb-0.5"
            >
              Send an Inquiry
            </a>
          </div>

          {/* Contact Us — same column language as Navigation */}
          <div className="footer-contact-col sm:col-span-1 lg:col-span-4 min-w-0">
            <h2 className="type-eyebrow text-white/45 mb-5 tracking-[0.18em]">
              Contact Us
            </h2>
            <p className="type-body text-sm text-white/50 leading-relaxed mb-6 max-w-sm">
              Whether you require Galaxy™ diamond scanning, contract manufacturing,
              bespoke jewelry, or global consultancy — our team is ready to assist.
            </p>

            <div className="space-y-5">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin size={13} className="text-white/35 shrink-0" strokeWidth={1.5} />
                  <span className="text-[10px] uppercase tracking-[0.16em] text-white/40 font-medium">
                    Address
                  </span>
                </div>
                <p className="type-body text-sm text-white/80 font-medium mb-1">
                  Sparkle Solitaires
                </p>
                {addressLines.map((line) => (
                  <p
                    key={line}
                    className="type-body text-sm text-white/50 leading-relaxed"
                  >
                    {line}
                  </p>
                ))}
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Mail size={13} className="text-white/35 shrink-0" strokeWidth={1.5} />
                  <span className="text-[10px] uppercase tracking-[0.16em] text-white/40 font-medium">
                    Email
                  </span>
                </div>
                <div className="space-y-1.5">
                  {emails.map((email) => (
                    <a
                      key={email}
                      href={`mailto:${email}`}
                      className="block type-body text-sm text-white/55 hover:text-white transition-colors duration-300 break-all"
                    >
                      {email}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Phone size={13} className="text-white/35 shrink-0" strokeWidth={1.5} />
                  <span className="text-[10px] uppercase tracking-[0.16em] text-white/40 font-medium">
                    Phone
                  </span>
                </div>
                <a
                  href="tel:+15513591202"
                  className="type-body text-sm text-white/55 hover:text-white transition-colors duration-300"
                >
                  +1 551 359 1202
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="footer-nav-col lg:col-span-2 min-w-0">
            <h3 className="type-eyebrow text-white/45 mb-5 tracking-[0.18em]">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="type-body text-sm text-white/55 hover:text-white transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Presence + Social */}
          <div className="footer-connect-col lg:col-span-3 min-w-0">
            <h3 className="type-eyebrow text-white/45 mb-5 tracking-[0.18em]">
              Global Presence
            </h3>
            <p className="type-body text-sm text-white/55 leading-relaxed tracking-wide mb-8">
              {globalLocations.join(" · ")}
            </p>

            <h3 className="type-eyebrow text-white/45 mb-4 tracking-[0.18em]">
              Follow Us
            </h3>
            <div className="flex flex-col gap-2.5">
              <a
                href="https://www.instagram.com/sparklesolitaire/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 type-body text-sm text-white/55 hover:text-white transition-colors duration-300"
              >
                <Instagram size={15} strokeWidth={1.5} className="text-white/35" />
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/sparklesolitaire/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 type-body text-sm text-white/55 hover:text-white transition-colors duration-300"
              >
                <Linkedin size={15} strokeWidth={1.5} className="text-white/35" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Legal — single quiet line, no duplicated presence */}
        <div className="footer-legal mt-12 sm:mt-14 pt-6 border-t border-white/[0.08]">
          <p className="type-body text-xs text-white/35 tracking-wide text-center sm:text-left">
            © {new Date().getFullYear()} Sparkle Solitaires. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
