import { motion } from "motion/react";
import { MapPin, Mail, Phone, Globe, Instagram, Linkedin } from "lucide-react";
import { luxuryEase, useReveal } from "./useReveal";
import { SectionHeader } from "./SectionHeader";
import { SectionImage } from "./SectionImage";
import contactImage from "../../../assests/images/Contact Us.png";

const globalLocations = ["India", "Botswana", "New York", "Hong Kong", "China"];

const addressLines = [
  "2nd Floor, Wing A, Om Siya House",
  "Behind Ghodiya-Pir Dargah",
  "Opposite Katargam Police Station",
  "Katargam Road",
  "Surat, Gujarat – 395004",
];

const emails = ["sparklessolitaire@gmail.com", "sparkle.solitaires@gmail.com"];

export function Contact() {
  const { ref: sectionRef, isInView } = useReveal();

  return (
    <section id="contact" ref={sectionRef} className="relative overflow-hidden bg-white">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(10,0,111,0.1)] to-transparent" />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 section-padding">
        <SectionHeader
          title="Contact Us"
          subtitle="Connect With Our Team"
          description="Whether you require Galaxy™ diamond scanning, contract manufacturing, bespoke jewelry production, or global market consultancy, our team is ready to assist."
          isInView={isInView}
          className="mb-10 lg:mb-12 max-w-3xl"
        />

        <div className="contact-grid grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-12 xl:gap-16 min-w-0">
          <div className="contact-image-col min-w-0">
            <SectionImage
              src={contactImage}
              alt="Reach out to Sparkle Solitaires — partnership and trust"
              isInView={isInView}
              aspect="portrait"
              delay={0.12}
              objectPosition="center"
            />
          </div>

          <div className="space-y-8 lg:space-y-9 min-w-0">
            <motion.div
              className="contact-detail-block"
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.95, delay: 0.2, ease: luxuryEase }}
            >
              <div className="flex items-center gap-3 mb-3">
                <MapPin size={15} className="text-brand/50 shrink-0" strokeWidth={1.5} />
                <span className="type-eyebrow">Address</span>
              </div>
              <p className="type-body font-medium text-brand mb-1.5">Sparkle Solitaires</p>
              {addressLines.map((line) => (
                <p key={line} className="type-body leading-relaxed">
                  {line}
                </p>
              ))}
            </motion.div>

            <motion.div
              className="contact-detail-block"
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.95, delay: 0.26, ease: luxuryEase }}
            >
              <div className="flex items-center gap-3 mb-3">
                <Mail size={15} className="text-brand/50 shrink-0" strokeWidth={1.5} />
                <span className="type-eyebrow">Email</span>
              </div>
              <div className="space-y-1.5">
                {emails.map((email) => (
                  <a
                    key={email}
                    href={`mailto:${email}`}
                    className="block type-body hover:text-brand transition-colors duration-300 break-all"
                  >
                    {email}
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="contact-detail-block"
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.95, delay: 0.32, ease: luxuryEase }}
            >
              <div className="flex items-center gap-3 mb-3">
                <Phone size={15} className="text-brand/50 shrink-0" strokeWidth={1.5} />
                <span className="type-eyebrow">Phone</span>
              </div>
              <a
                href="tel:+15513591202"
                className="type-body hover:text-brand transition-colors duration-300"
              >
                +1 551 359 1202
              </a>
            </motion.div>

            <motion.div
              className="contact-detail-block"
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.95, delay: 0.38, ease: luxuryEase }}
            >
              <div className="flex items-center gap-3 mb-3">
                <Globe size={15} className="text-brand/50 shrink-0" strokeWidth={1.5} />
                <span className="type-eyebrow">International Presence</span>
              </div>
              <p className="type-body-lg tracking-wide break-words">{globalLocations.join(" · ")}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.95, delay: 0.44, ease: luxuryEase }}
              className="pt-6 border-t border-brand-subtle"
            >
              <p className="type-eyebrow mb-4">Follow Us</p>
              <div className="contact-social-row flex flex-wrap items-center gap-4 sm:gap-6">
                <a
                  href="https://www.instagram.com/sparklesolitaire/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 type-body hover:text-brand transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram
                    size={18}
                    strokeWidth={1.5}
                    className="text-brand/45 group-hover:text-brand transition-colors"
                  />
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/in/sparklesolitaire/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 type-body hover:text-brand transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin
                    size={18}
                    strokeWidth={1.5}
                    className="text-brand/45 group-hover:text-brand transition-colors"
                  />
                  LinkedIn
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
