import { Mail, Phone, MapPin } from "lucide-react";
import logoFile from "../../../assests/Sparkle Solitaire LOGO.png";
import exhibitHkBharat from "../../../assests/Exibition/HK bharat.png";
import exhibitHkShow from "../../../assests/Exibition/HK SHOW.png";
import exhibitJaDl from "../../../assests/Exibition/JA DL.png";
import exhibitJaNy from "../../../assests/Exibition/JA NY.png";
import exhibitJckShowAlt from "../../../assests/Exibition/JCK SHOW (1).png";
import exhibitJckShow from "../../../assests/Exibition/JCK SHOW.png";
import exhibitJisFall from "../../../assests/Exibition/JIS FALL.png";

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

const globalLocations = ["India", "New York", "Hong Kong", "China"];

const exhibitionStickers = [
  { src: exhibitHkBharat, alt: "HK Bharat exhibition" },
  { src: exhibitHkShow, alt: "Hong Kong International Diamond, Gem & Pearl Show" },
  { src: exhibitJaDl, alt: "JA Delhi exhibition" },
  { src: exhibitJaNy, alt: "JA New York exhibition" },
  { src: exhibitJckShow, alt: "JCK Show exhibition" },
  { src: exhibitJckShowAlt, alt: "JGW Hong Kong exhibition" },
  { src: exhibitJisFall, alt: "JIS Fall exhibition" },
];

const INQUIRE_MAILTO =
  "mailto:sparklessolitaire@gmail.com?subject=" +
  encodeURIComponent("Inquiry — Sparkle Solitaires") +
  "&body=" +
  encodeURIComponent(
    "Hello Sparkle Solitaires,\n\nI would like to inquire about your diamond manufacturing services.\n\n"
  );

export function Footer() {
  const marqueeStickers = [...exhibitionStickers, ...exhibitionStickers];

  return (
    <footer
      id="contact"
      className="site-footer relative bg-brand text-white overflow-x-clip"
    >
      {/* Full-width exhibition showcase strip */}
      <div className="footer-exhibit-bleed" aria-label="Exhibitions & events">
        <p className="footer-exhibit-label">Exhibitions &amp; Events</p>
        <div className="footer-exhibit-viewport">
          <ul className="footer-exhibit-track">
            {marqueeStickers.map((sticker, index) => {
              const isDuplicate = index >= exhibitionStickers.length;
              return (
                <li
                  key={`${sticker.alt}-${index}`}
                  className={`footer-exhibit-item${isDuplicate ? " is-dup" : ""}`}
                  aria-hidden={isDuplicate}
                >
                  <img
                    src={sticker.src}
                    alt={isDuplicate ? "" : sticker.alt}
                    className="footer-exhibit-sticker"
                    loading={index < 4 ? "eager" : "lazy"}
                    decoding="async"
                    draggable={false}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>

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

          {/* Navigation + Presence + Social */}
          <div className="footer-col footer-nav-col">
            <h3 className="footer-col-title">Navigation</h3>
            <ul className="footer-nav-list">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a href={item.href}>{item.name}</a>
                </li>
              ))}
            </ul>

            <h3 className="footer-col-title footer-col-title--sub">
              Global Presence
            </h3>
            <p className="footer-presence">{globalLocations.join(" · ")}</p>

            <h3 className="footer-col-title footer-col-title--sub">Follow Us</h3>
            <div className="footer-social-list">
              <a
                href="https://www.instagram.com/sparklesolitaire/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link footer-social-link--instagram"
              >
                <span className="footer-social-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                    <defs>
                      <linearGradient
                        id="ig-footer-grad"
                        x1="0%"
                        y1="100%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#F58529" />
                        <stop offset="30%" stopColor="#FEDA77" />
                        <stop offset="50%" stopColor="#DD2A7B" />
                        <stop offset="70%" stopColor="#8134AF" />
                        <stop offset="100%" stopColor="#515BD4" />
                      </linearGradient>
                    </defs>
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5.5"
                      fill="url(#ig-footer-grad)"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="4.2"
                      stroke="#fff"
                      strokeWidth="1.8"
                      fill="none"
                    />
                    <circle cx="17.35" cy="6.65" r="1.15" fill="#fff" />
                  </svg>
                </span>
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/sparklesolitaire/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link footer-social-link--linkedin"
              >
                <span className="footer-social-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="3"
                      fill="#0A66C2"
                    />
                    <path
                      fill="#fff"
                      d="M7.1 9.45h2.2v7.35H7.1V9.45zm1.1-3.5a1.28 1.28 0 1 1 0 2.56 1.28 1.28 0 0 1 0-2.56zM10.9 9.45h2.11v1.01h.03c.29-.55 1.01-1.14 2.08-1.14 2.22 0 2.63 1.46 2.63 3.36v4.12h-2.2v-3.65c0-.87-.02-1.99-1.21-1.99-1.21 0-1.4.95-1.4 1.93v3.71h-2.2V9.45z"
                    />
                  </svg>
                </span>
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
