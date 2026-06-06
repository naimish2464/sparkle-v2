import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Shield, Award, Zap, HeartHandshake, Leaf, Lock, Globe, Clock, Users } from "lucide-react";

export function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Award,
      title: "20+ Years Industry Experience",
      description:
        "Over two decades of hands-on expertise delivering premium diamond solutions across the complete value chain.",
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: Zap,
      title: "Advanced Scanning Technology",
      description:
        "State-of-the-art Galaxy™ inclusion scanning and cutting-edge equipment for superior precision and results.",
      color: "from-purple-500 to-purple-700",
    },
    {
      icon: Globe,
      title: "Global Presence",
      description:
        "Direct presence in major diamond markets including India, Botswana, New York, Hong Kong, and China.",
      color: "from-orange-500 to-orange-700",
    },
    {
      icon: Leaf,
      title: "Ethical Business Practices",
      description:
        "Committed to responsible sourcing, transparency, and the highest ethical standards in all our operations.",
      color: "from-green-500 to-green-700",
    },
    {
      icon: Lock,
      title: "Secure Operations",
      description:
        "Fully insured and secure premises ensuring the utmost safety for your precious stones at every step.",
      color: "from-teal-500 to-teal-700",
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description:
        "Strict adherence to timelines and commitments without compromising on the quality of our output.",
      color: "from-red-500 to-red-700",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description:
        "Rigorous in-house quality control ensuring every diamond meets the highest international standards.",
      color: "from-indigo-500 to-indigo-700",
    },
    {
      icon: Users,
      title: "Expert Diamond Specialists",
      description:
        "A dedicated team of master craftsmen and industry experts passionate about delivering excellence.",
      color: "from-pink-500 to-pink-700",
    },
  ];

  const certifications = [
    "ISO 9001:2015",
    "RJC Certified",
    "Kimberley Process",
    "GIA Partner",
  ];

  return (
    <section id="why-choose" className="relative py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(30deg, #3b82f6 12%, transparent 12.5%, transparent 87%, #3b82f6 87.5%, #3b82f6),
            linear-gradient(150deg, #3b82f6 12%, transparent 12.5%, transparent 87%, #3b82f6 87.5%, #3b82f6),
            linear-gradient(30deg, #3b82f6 12%, transparent 12.5%, transparent 87%, #3b82f6 87.5%, #3b82f6),
            linear-gradient(150deg, #3b82f6 12%, transparent 12.5%, transparent 87%, #3b82f6 87.5%, #3b82f6)`,
            backgroundSize: "80px 140px",
            backgroundPosition: "0 0, 0 0, 40px 70px, 40px 70px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10" ref={ref}>
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-block mb-4"
          >
            <span className="type-eyebrow text-blue-600 px-4 py-2 bg-blue-50 rounded-full">
              Why Choose Us
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="type-slide-title-light text-gray-900 mb-6"
          >
            The Preferred Choice for
            <br />
            <span className="type-slide-title-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Diamond Excellence
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="type-body-lg text-gray-600 max-w-3xl mx-auto"
          >
            Join thousands of satisfied clients who trust us with their most
            precious diamonds. Here's why we stand out.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="group relative"
            >
              <div className="relative p-8 rounded-3xl bg-white border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-500 h-full">
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <feature.icon className="text-white" size={32} />
                </div>

                {/* Content */}
                <h3 className="type-subtitle text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Gradient Border */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}
                ></div>

                {/* Animated Corner Accent */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  className={`absolute top-6 right-6 w-2 h-2 rounded-full bg-gradient-to-br ${feature.color} opacity-50`}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 p-12 lg:p-16 text-white">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Content */}
              <div>
                <h3 className="type-section-title mb-6">
                  Certified Excellence
                </h3>
                <p className="text-blue-100 text-lg mb-8">
                  Our commitment to quality is recognized by leading industry
                  organizations worldwide. We maintain the highest standards
                  through rigorous certification processes.
                </p>

                {/* Certifications */}
                <div className="grid grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                    >
                      <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                      <span className="text-sm">{cert}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right: Stats */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "99.8%", label: "Client Retention" },
                  { value: "4.9/5", label: "Average Rating" },
                  { value: "50K+", label: "Projects Completed" },
                  { value: "24/7", label: "Support Available" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20"
                  >
                    <div className="text-4xl lg:text-5xl mb-2 text-blue-300">
                      {stat.value}
                    </div>
                    <div className="text-sm text-blue-100">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
