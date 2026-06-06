import { motion } from "motion/react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export function Footer() {
  const footerLinks = {
    Company: ["About Us", "Our Team", "Careers", "Press & Media", "Investors"],
    Services: [
      "Diamond Polishing",
      "3D Scanning",
      "Manufacturing",
      "Consulting",
      "Certification",
    ],
    Resources: [
      "Knowledge Base",
      "Case Studies",
      "White Papers",
      "Industry News",
      "FAQs",
    ],
    Support: [
      "Contact Us",
      "Customer Portal",
      "Technical Support",
      "Training",
      "Documentation",
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Top Accent Line */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600"></div>

      <div className="container mx-auto px-6 lg:px-12 py-20 relative z-10">
        {/* Top Section */}
        <div className="grid lg:grid-cols-6 gap-12 mb-16">
          {/* Brand Column - Spans 2 columns */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                  <div className="w-6 h-6 border-2 border-white rotate-45"></div>
                </div>
                <div>
                  <div className="type-slide-title-bold tracking-tight">DIAMOND</div>
                  <div className="type-eyebrow text-blue-400 -mt-1">
                    PRECISION TECH
                  </div>
                </div>
              </div>

              <p className="type-body-lg text-gray-400 mb-6">
                Leading the global diamond industry with innovative technology,
                unmatched expertise, and commitment to excellence for over 50
                years.
              </p>

              {/* Contact Quick Links */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-colors">
                  <Mail size={18} />
                  <span className="text-sm">info@diamondtech.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-colors">
                  <Phone size={18} />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <MapPin size={18} />
                  <span className="text-sm">New York, NY 10001</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="type-eyebrow mb-6">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-colors text-sm inline-block group"
                    >
                      <span className="relative">
                        {link}
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/20 backdrop-blur-sm mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="type-subtitle mb-3">
                Stay Updated with Industry Insights
              </h3>
              <p className="text-gray-400">
                Subscribe to our newsletter for the latest in diamond technology,
                market trends, and exclusive offers.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 h-14 px-6 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 backdrop-blur-sm"
              />
              <button className="h-14 px-8 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-500 text-sm"
            >
              © {new Date().getFullYear()} Diamond Precision Tech. All rights
              reserved.
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-white/5 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-blue-500"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </motion.div>

            {/* Legal Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-6 text-sm"
            >
              <a
                href="#"
                className="text-gray-500 hover:text-blue-400 transition-colors"
              >
                Privacy Policy
              </a>
              <span className="text-gray-700">•</span>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-400 transition-colors"
              >
                Terms of Service
              </a>
              <span className="text-gray-700">•</span>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-400 transition-colors"
              >
                Cookie Policy
              </a>
            </motion.div>
          </div>
        </div>

        {/* Certifications Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center gap-6 pt-8 border-t border-gray-800"
        >
          {["ISO 9001:2015", "RJC Certified", "Kimberley Process", "GIA Partner"].map(
            (cert, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 text-xs text-gray-400"
              >
                {cert}
              </div>
            )
          )}
        </motion.div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-blue-600/10 blur-3xl"></div>
    </footer>
  );
}
