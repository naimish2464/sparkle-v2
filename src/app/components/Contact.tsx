import { motion, useInView } from "motion/react";
import { useRef, useState, useCallback, type FormEvent, type ChangeEvent } from "react";
import { ArrowRight, Check, MapPin, Mail, Phone, Globe } from "lucide-react";

const luxuryEase = [0.22, 1, 0.36, 1] as const;

const globalLocations = ["India", "Botswana", "New York", "Hong Kong", "China"];

type FormFields = {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormFields, string>>;

function WorldMapOutline() {
  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.04]"
      aria-hidden="true"
    >
      <motion.div
        animate={{ x: ["0%", "-2%"], y: ["0%", "1%"] }}
        transition={{ duration: 32, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        className="absolute inset-[-6%] w-[112%] h-[112%]"
      >
        <svg viewBox="0 0 1000 500" className="w-full h-full" fill="none">
          <ellipse cx="500" cy="250" rx="470" ry="220" stroke="#0f1a2e" strokeWidth="0.6" />
          <path
            d="M100 170 Q200 110 340 125 T580 145 T860 165"
            stroke="#0f1a2e"
            strokeWidth="0.5"
            opacity="0.7"
          />
          <path
            d="M70 255 Q220 235 380 250 T620 245 T930 238"
            stroke="#0f1a2e"
            strokeWidth="0.5"
            opacity="0.7"
          />
          <path
            d="M120 340 Q300 318 500 332 T820 348"
            stroke="#0f1a2e"
            strokeWidth="0.5"
            opacity="0.7"
          />
          {[...Array(36)].map((_, i) => (
            <circle
              key={i}
              cx={80 + (i % 9) * 100}
              cy={90 + Math.floor(i / 9) * 100}
              r="1"
              fill="#0f1a2e"
              opacity={0.4 + (i % 3) * 0.15}
            />
          ))}
        </svg>
      </motion.div>
    </div>
  );
}

function DiamondGeometry() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[20%] -right-[10%] w-[55%] h-[55%] opacity-[0.025]"
      >
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <polygon
            points="200,20 380,200 200,380 20,200"
            fill="none"
            stroke="#1e3a5f"
            strokeWidth="0.5"
          />
          <polygon
            points="200,80 320,200 200,320 80,200"
            fill="none"
            stroke="#1e3a5f"
            strokeWidth="0.5"
          />
          <line x1="200" y1="20" x2="200" y2="380" stroke="#1e3a5f" strokeWidth="0.3" />
          <line x1="20" y1="200" x2="380" y2="200" stroke="#1e3a5f" strokeWidth="0.3" />
        </svg>
      </motion.div>
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[18%] left-[6%] w-2 h-2 rotate-45 border border-[#1e3a5f]/10"
      />
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[28%] left-[38%] w-1.5 h-1.5 rotate-45 border border-[#1e3a5f]/8"
      />
    </div>
  );
}

function FloatingField({
  id,
  label,
  type = "text",
  value,
  error,
  multiline = false,
  delay = 0,
  isInView,
  onChange,
}: {
  id: keyof FormFields;
  label: string;
  type?: string;
  value: string;
  error?: string;
  multiline?: boolean;
  delay?: number;
  isInView: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}) {
  const hasValue = value.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay, ease: luxuryEase }}
      className="relative group"
    >
      <div className="relative">
        {multiline ? (
          <textarea
            id={id}
            name={id}
            value={value}
            onChange={onChange}
            rows={5}
            placeholder=" "
            className={`peer w-full bg-transparent border-b pt-6 pb-3 text-[#0f1a2e] type-body resize-none transition-all duration-500 outline-none
              ${error ? "border-red-400/70" : "border-[#0f1a2e]/15 focus:border-[#1e3a5f]/50"}
              focus:shadow-[0_4px_24px_-8px_rgba(30,58,95,0.2)]`}
          />
        ) : (
          <input
            id={id}
            name={id}
            type={type}
            value={value}
            onChange={onChange}
            placeholder=" "
            className={`peer w-full bg-transparent border-b h-14 pt-5 pb-2 text-[#0f1a2e] type-body transition-all duration-500 outline-none
              ${error ? "border-red-400/70" : "border-[#0f1a2e]/15 focus:border-[#1e3a5f]/50"}
              focus:shadow-[0_4px_24px_-8px_rgba(30,58,95,0.2)]`}
          />
        )}

        <label
          htmlFor={id}
          className={`absolute left-0 top-4 transition-all duration-400 pointer-events-none type-eyebrow tracking-[0.12em]
            peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-[#1e3a5f]/70
            peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-[#1e3a5f]/70
            ${hasValue ? "top-0 !text-[10px] !text-[#1e3a5f]/70" : "text-[#0f1a2e]/40 text-[11px]"}
            ${error ? "text-red-500/80" : ""}`}
        >
          {label}
        </label>

        <div
          className={`absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 peer-focus:scale-x-100 transition-transform duration-500 ease-out ${
            error ? "bg-red-400/60" : "bg-[#1e3a5f]/40"
          }`}
        />
      </div>

      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 text-xs text-red-500/90 tracking-wide"
        >
          {error}
        </motion.p>
      )}
    </motion.div>
  );
}

function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: luxuryEase }}
      className="flex flex-col items-center justify-center text-center py-16 lg:py-24"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, delay: 0.15, type: "spring", stiffness: 200, damping: 18 }}
        className="w-20 h-20 rounded-full border border-[#1e3a5f]/20 flex items-center justify-center mb-8 relative"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.45 }}
          className="w-14 h-14 rounded-full bg-[#0f1a2e] flex items-center justify-center"
        >
          <Check className="text-white" size={28} strokeWidth={1.5} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: [0, 0.4, 0], scale: [0.8, 1.4, 1.6] }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="absolute inset-0 rounded-full border border-[#1e3a5f]/30"
        />
      </motion.div>

      <motion.h3
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.35, ease: luxuryEase }}
        className="type-subtitle text-[#0f1a2e] mb-4"
      >
        Inquiry Received
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45, ease: luxuryEase }}
        className="type-body text-[#0f1a2e]/60 max-w-md mb-10"
      >
        Thank you for reaching out. Our team will review your message and respond within one business day.
      </motion.p>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        onClick={onReset}
        className="type-eyebrow text-[#1e3a5f]/70 hover:text-[#0f1a2e] transition-colors duration-400 tracking-[0.15em] border-b border-[#1e3a5f]/20 hover:border-[#0f1a2e]/40 pb-0.5"
      >
        Send Another Inquiry
      </motion.button>
    </motion.div>
  );
}

export function Contact() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const [formData, setFormData] = useState<FormFields>({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (errors[name as keyof FormFields]) {
        setErrors((prev) => ({ ...prev, [name]: undefined }));
      }
    },
    [errors]
  );

  const validate = useCallback((): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message";
    }

    return newErrors;
  }, [formData]);

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      const validationErrors = validate();
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }

      setIsSubmitting(true);
      await new Promise((resolve) => setTimeout(resolve, 1400));
      setIsSubmitting(false);
      setIsSuccess(true);
    },
    [validate]
  );

  const handleReset = useCallback(() => {
    setFormData({ fullName: "", email: "", phone: "", company: "", message: "" });
    setErrors({});
    setIsSuccess(false);
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f6f5f2]"
    >
      {/* Gradient mesh backdrop */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#eef1f6] via-[#f6f5f2] to-[#f0efe9]" />
        <div className="absolute top-0 right-0 w-[70%] h-[60%] bg-gradient-to-bl from-[#1e3a5f]/[0.04] via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-gradient-to-tr from-[#c9a96e]/[0.03] via-transparent to-transparent" />
      </div>

      <WorldMapOutline />
      <DiamondGeometry />

      {/* Light particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30 - i * 5, 0],
              opacity: [0.15, 0.35, 0.15],
            }}
            transition={{
              duration: 6 + i * 1.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
            className="absolute w-1 h-1 rounded-full bg-[#1e3a5f]/20"
            style={{
              left: `${12 + i * 11}%`,
              top: `${20 + (i % 4) * 18}%`,
            }}
          />
        ))}
      </div>

      {/* Top edge line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0f1a2e]/10 to-transparent" />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="py-20 sm:py-24 lg:py-28 xl:py-32">
          {/* Asymmetrical editorial grid: 40% / 60% */}
          <div className="grid lg:grid-cols-[2fr_3fr] gap-14 lg:gap-16 xl:gap-24 items-start">
            {/* ── Left: Editorial content ── */}
            <div className="lg:max-w-[480px] xl:max-w-[520px]">
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: luxuryEase }}
                className="type-eyebrow text-[#1e3a5f]/60 mb-5 lg:mb-6 tracking-[0.2em]"
              >
                Contact Us
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 36 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.2, delay: 0.1, ease: luxuryEase }}
                className="font-['Poppins'] font-semibold text-[#0f1a2e] leading-[1.08] tracking-[-0.01em] mb-6 lg:mb-8"
                style={{ fontSize: "clamp(32px, 4.2vw, 56px)" }}
              >
                Let's Build Something{" "}
                <span className="block mt-1">Valuable Together</span>
              </motion.h2>

              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
                transition={{ duration: 1.2, delay: 0.22, ease: luxuryEase }}
                className="w-16 h-px bg-[#0f1a2e]/20 origin-left mb-6 lg:mb-8"
              />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.3, ease: luxuryEase }}
                className="type-body-lg text-[#0f1a2e]/65 leading-relaxed"
              >
                Whether you're looking for diamond scanning services, contract manufacturing,
                custom jewelry production, or global market consultancy, our team is ready to help.
                Reach out to discuss your requirements and discover how Sparkle Solitaires can
                support your business goals.
              </motion.p>
            </div>

            {/* ── Right: Premium form ── */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.1, delay: 0.25, ease: luxuryEase }}
              className="relative lg:pt-4"
            >
              {/* Subtle form backdrop — not a card */}
              <div className="absolute -inset-6 sm:-inset-8 lg:-inset-10 bg-gradient-to-br from-white/60 via-white/30 to-transparent rounded-none pointer-events-none" />
              <div className="absolute top-0 left-0 w-px h-24 bg-gradient-to-b from-[#0f1a2e]/15 to-transparent hidden lg:block" />

              <div className="relative">
                {isSuccess ? (
                  <SuccessState onReset={handleReset} />
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8 lg:space-y-10" noValidate>
                    <div className="grid sm:grid-cols-2 gap-8 lg:gap-10">
                      <FloatingField
                        id="fullName"
                        label="Full Name"
                        value={formData.fullName}
                        error={errors.fullName}
                        delay={0.35}
                        isInView={isInView}
                        onChange={handleChange}
                      />
                      <FloatingField
                        id="email"
                        label="Email Address"
                        type="email"
                        value={formData.email}
                        error={errors.email}
                        delay={0.42}
                        isInView={isInView}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-8 lg:gap-10">
                      <FloatingField
                        id="phone"
                        label="Phone Number"
                        type="tel"
                        value={formData.phone}
                        error={errors.phone}
                        delay={0.49}
                        isInView={isInView}
                        onChange={handleChange}
                      />
                      <FloatingField
                        id="company"
                        label="Company Name"
                        value={formData.company}
                        delay={0.56}
                        isInView={isInView}
                        onChange={handleChange}
                      />
                    </div>

                    <FloatingField
                      id="message"
                      label="Message"
                      value={formData.message}
                      error={errors.message}
                      multiline
                      delay={0.63}
                      isInView={isInView}
                      onChange={handleChange}
                    />

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.9, delay: 0.72, ease: luxuryEase }}
                    >
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group relative w-full h-[60px] lg:h-[64px] bg-[#0f1a2e] text-white overflow-hidden transition-all duration-500 hover:bg-[#152238] disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                        <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[inset_0_0_40px_rgba(255,255,255,0.04)]" />
                        <span className="relative flex items-center justify-center gap-3 type-eyebrow tracking-[0.2em]">
                          {isSubmitting ? (
                            <motion.span
                              animate={{ opacity: [0.5, 1, 0.5] }}
                              transition={{ duration: 1.2, repeat: Infinity }}
                            >
                              Sending...
                            </motion.span>
                          ) : (
                            <>
                              Send Inquiry
                              <ArrowRight
                                size={18}
                                className="transition-transform duration-400 group-hover:translate-x-1"
                                strokeWidth={1.5}
                              />
                            </>
                          )}
                        </span>
                      </button>
                    </motion.div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>

          {/* Contact details — single row, no cards */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5, ease: luxuryEase }}
            className="mt-16 lg:mt-20 xl:mt-24 pt-10 lg:pt-12 border-t border-[#0f1a2e]/[0.08]"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 sm:gap-8 xl:gap-0">
              {/* Location */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.55, ease: luxuryEase }}
                className="xl:pr-8 xl:border-r xl:border-[#0f1a2e]/[0.08]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <MapPin size={15} className="text-[#1e3a5f]/50 shrink-0" strokeWidth={1.5} />
                  <span className="type-eyebrow text-[#0f1a2e]/45 tracking-[0.18em]">Location</span>
                </div>
                <div className="space-y-0.5">
                  <p className="type-body text-[#0f1a2e]/80 font-medium">Sparkle Solitaires</p>
                  {[
                    "2nd Floor, Wing A, Om Siya House",
                    "Behind Ghodiya-Pir Dargah",
                    "Opposite Katargam Police Station",
                    "Katargam Road",
                    "Surat, Gujarat – 395004",
                  ].map((line, i) => (
                    <p key={i} className="type-body text-[#0f1a2e]/55 text-sm leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.62, ease: luxuryEase }}
                className="xl:px-8 xl:border-r xl:border-[#0f1a2e]/[0.08]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Mail size={15} className="text-[#1e3a5f]/50 shrink-0" strokeWidth={1.5} />
                  <span className="type-eyebrow text-[#0f1a2e]/45 tracking-[0.18em]">Email</span>
                </div>
                <div className="space-y-2">
                  {["sparklessolitaire@gmail.com", "sparkle.solitaires@gmail.com"].map((email) => (
                    <a
                      key={email}
                      href={`mailto:${email}`}
                      className="block type-body text-sm text-[#0f1a2e]/70 hover:text-[#1e3a5f] transition-colors duration-400 break-all sm:break-normal"
                    >
                      {email}
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.69, ease: luxuryEase }}
                className="xl:px-8 xl:border-r xl:border-[#0f1a2e]/[0.08]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Phone size={15} className="text-[#1e3a5f]/50 shrink-0" strokeWidth={1.5} />
                  <span className="type-eyebrow text-[#0f1a2e]/45 tracking-[0.18em]">Phone</span>
                </div>
                <a
                  href="tel:+15513591202"
                  className="block type-body text-sm text-[#0f1a2e]/70 hover:text-[#1e3a5f] transition-colors duration-400"
                >
                  +1 551 359 1202
                </a>
              </motion.div>

              {/* Global Presence */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.76, ease: luxuryEase }}
                className="xl:pl-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Globe size={15} className="text-[#1e3a5f]/50 shrink-0" strokeWidth={1.5} />
                  <span className="type-eyebrow text-[#0f1a2e]/45 tracking-[0.18em]">
                    Global Presence
                  </span>
                </div>
                <div className="flex flex-wrap xl:flex-col gap-x-4 gap-y-2 xl:gap-y-0">
                  {globalLocations.map((location, index) => (
                    <span
                      key={location}
                      className={`type-body text-sm text-[#0f1a2e]/65 tracking-wide xl:py-2.5 ${
                        index < globalLocations.length - 1
                          ? "xl:border-b xl:border-[#0f1a2e]/[0.07]"
                          : ""
                      }`}
                    >
                      {location}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom transition to footer */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0f1a2e]/8 to-transparent" />
    </section>
  );
}
