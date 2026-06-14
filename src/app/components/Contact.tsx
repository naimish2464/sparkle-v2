import { motion } from "motion/react";
import { MapPin, Mail, Phone, Globe, Instagram, Linkedin, ExternalLink } from "lucide-react";
import { luxuryEase, useReveal } from "./useReveal";

const globalLocations = ["India", "Botswana", "New York", "Hong Kong", "China"];

const addressLines = [
  "2nd Floor, Wing A, Om Siya House",
  "Behind Ghodiya-Pir Dargah",
  "Opposite Katargam Police Station",
  "Katargam Road",
  "Surat, Gujarat – 395004",
];

const emails = ["sparklessolitaire@gmail.com", "sparkle.solitaires@gmail.com"];

const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.0!2d72.831!3d21.228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDEzJzQwLjgiTiA3MsKwNDknNTEuNiJF!5e0!3m2!1sen!2sin!4v1";

export function Contact() {
  const { ref: sectionRef, isInView } = useReveal();

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f6f5f2]"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#eef1f6] via-[#f6f5f2] to-[#f0efe9]" />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0a1628]/10 to-transparent" />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="py-20 sm:py-24 lg:py-28 xl:py-32">
          {/* Header */}
          <div className="max-w-2xl mb-14 lg:mb-20">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: luxuryEase }}
              className="type-eyebrow text-[#0a1628]/45 mb-5 tracking-[0.2em]"
            >
              Contact Us
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 36 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, delay: 0.1, ease: luxuryEase }}
              className="type-slide-title-bold text-[#0a1628] mb-6"
            >
              Connect With Our Team
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.2, ease: luxuryEase }}
              className="w-14 h-px bg-[#0a1628]/20 origin-left mb-6"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.28, ease: luxuryEase }}
              className="type-body-lg text-[#0a1628]/60 leading-relaxed"
            >
              Whether you're looking for diamond scanning services, contract manufacturing,
              custom jewelry production, or global market consultancy, our team is ready to help.
            </motion.p>
          </div>

          {/* Editorial contact grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24">
            {/* Contact details */}
            <div className="space-y-10 lg:space-y-12">
              {/* Address */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.32, ease: luxuryEase }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <MapPin size={15} className="text-[#0a1628]/40 shrink-0" strokeWidth={1.5} />
                  <span className="type-eyebrow text-[#0a1628]/45 tracking-[0.18em]">Address</span>
                </div>
                <p className="type-body text-[#0a1628]/80 font-medium mb-2">Sparkle Solitaires</p>
                {addressLines.map((line) => (
                  <p key={line} className="type-body text-[#0a1628]/55 leading-relaxed">
                    {line}
                  </p>
                ))}
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.4, ease: luxuryEase }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Mail size={15} className="text-[#0a1628]/40 shrink-0" strokeWidth={1.5} />
                  <span className="type-eyebrow text-[#0a1628]/45 tracking-[0.18em]">Email</span>
                </div>
                <div className="space-y-2">
                  {emails.map((email) => (
                    <a
                      key={email}
                      href={`mailto:${email}`}
                      className="block type-body text-[#0a1628]/70 hover:text-[#0a1628] transition-colors duration-300"
                    >
                      {email}
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.48, ease: luxuryEase }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Phone size={15} className="text-[#0a1628]/40 shrink-0" strokeWidth={1.5} />
                  <span className="type-eyebrow text-[#0a1628]/45 tracking-[0.18em]">Phone</span>
                </div>
                <a
                  href="tel:+15513591202"
                  className="type-body text-[#0a1628]/70 hover:text-[#0a1628] transition-colors duration-300"
                >
                  +1 551 359 1202
                </a>
              </motion.div>

              {/* International Presence */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.56, ease: luxuryEase }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Globe size={15} className="text-[#0a1628]/40 shrink-0" strokeWidth={1.5} />
                  <span className="type-eyebrow text-[#0a1628]/45 tracking-[0.18em]">
                    International Presence
                  </span>
                </div>
                <p className="type-body-lg text-[#0a1628]/60 tracking-wide">
                  {globalLocations.join(" · ")}
                </p>
              </motion.div>

              {/* Social */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.64, ease: luxuryEase }}
                className="pt-6 border-t border-[#0a1628]/10"
              >
                <p className="type-eyebrow text-[#0a1628]/45 mb-5 tracking-[0.18em]">Follow Us</p>
                <div className="flex items-center gap-6">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2.5 type-body text-[#0a1628]/65 hover:text-[#0a1628] transition-colors duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram size={18} strokeWidth={1.5} className="text-[#0a1628]/40 group-hover:text-[#0a1628] transition-colors" />
                    Instagram
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2.5 type-body text-[#0a1628]/65 hover:text-[#0a1628] transition-colors duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} strokeWidth={1.5} className="text-[#0a1628]/40 group-hover:text-[#0a1628] transition-colors" />
                    LinkedIn
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Google Maps */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.1, delay: 0.35, ease: luxuryEase }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[20px] md:rounded-[24px] aspect-[4/3] lg:aspect-auto lg:min-h-[520px] bg-[#0a1628]/5">
                <iframe
                  title="Sparkle Solitaires location on Google Maps"
                  src={MAP_EMBED_URL}
                  className="absolute inset-0 w-full h-full border-0 grayscale-[30%] contrast-[1.05]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-[#0a1628]/10 rounded-[20px] md:rounded-[24px]" />
              </div>
              <a
                href="https://maps.google.com/?q=Katargam+Road+Surat+Gujarat+395004"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-5 type-eyebrow text-[#0a1628]/50 hover:text-[#0a1628] transition-colors duration-300 tracking-[0.15em]"
              >
                Open in Google Maps
                <ExternalLink size={14} strokeWidth={1.5} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0a1628]/8 to-transparent" />
    </section>
  );
}
