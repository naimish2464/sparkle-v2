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
    "Hello Sparkle Solitaires,\n\nI would like to inquire about your diamond manufacturing services.\n\n"
  );

export function Footer() {
  return (
    <footer
      id="contact"
      className="site-footer relative bg-brand text-white overflow-hidden"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-12 sm:py-14 lg:py-16">
        <div className="footer-main-grid">
          {/* Contact Us — top left */}
          <div className="footer-col footer-contact-col">
            <h2 className="footer-col-title">Contact Us</h2>

            <div className="footer-contact-blocks">
              <div className="footer-contact-block">
                <p className="footer-meta-label">
                  <MapPin size={12} strokeWidth={1.5} aria-hidden="true" />
                  Address
                </p>
                <p className="footer-contact-company">Sparkle Solitaires</p>
                <div className="footer-contact-address">
                  {addressLines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>

              <div className="footer-contact-block">
                <p className="footer-meta-label">
                  <Mail size={12} strokeWidth={1.5} aria-hidden="true" />
                  Email
                </p>
                <div className="footer-contact-links">
                  {emails.map((email) => (
                    <a key={email} href={`mailto:${email}`}>
                      {email}
                    </a>
                  ))}
                </div>
              </div>

              <div className="footer-contact-block">
                <p className="footer-meta-label">
                  <Phone size={12} strokeWidth={1.5} aria-hidden="true" />
                  Phone
                </p>
                <a href="tel:+15513591202" className="footer-contact-phone">
                  +1 551 359 1202
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="footer-col footer-nav-col">
            <h3 className="footer-col-title">Navigation</h3>
            <ul className="footer-nav-list">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a href={item.href}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Presence + Social */}
          <div className="footer-col footer-connect-col">
            <h3 className="footer-col-title">Global Presence</h3>
            <p className="footer-presence">{globalLocations.join(" · ")}</p>

            <h3 className="footer-col-title footer-col-title--sub">Follow Us</h3>
            <div className="footer-social-list">
              <a
                href="https://www.instagram.com/sparklesolitaire/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={14} strokeWidth={1.5} aria-hidden="true" />
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/sparklesolitaire/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={14} strokeWidth={1.5} aria-hidden="true" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Brand — right */}
          <div className="footer-col footer-brand-col">
            <img
              src={logoFile}
              alt="Sparkle Solitaires"
              className="footer-brand-logo"
            />
            <p className="footer-brand-copy">
              Your trusted partner for natural and lab-grown diamonds — from
              Galaxy™ rough scanning to polished stones and global sales.
            </p>
            <a href={INQUIRE_MAILTO} className="footer-inquire">
              Send an Inquiry
            </a>
          </div>
        </div>

        <div className="footer-legal">
          <p>
            © {new Date().getFullYear()} Sparkle Solitaires. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
