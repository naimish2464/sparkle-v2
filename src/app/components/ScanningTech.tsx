import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Zap, Eye, Shield, BarChart3, Cpu, Radio } from "lucide-react";

export function ScanningTech() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Cpu,
      title: "Wide Range Scanning",
      description: "0.01 ct – 100 ct rough scanning capabilities",
      stat: "100ct",
      label: "Max Size",
    },
    {
      icon: Eye,
      title: "Precision Marking",
      description: "Accurate planning and marking for optimal yield",
      stat: "99.9%",
      label: "Accuracy",
    },
    {
      icon: Zap,
      title: "In-House Processing",
      description: "Complete in-house processing from start to finish",
      stat: "100%",
      label: "Control",
    },
    {
      icon: Shield,
      title: "Secure Operations",
      description: "Secure & fully insured premises for peace of mind",
      stat: "24/7",
      label: "Security",
    },
    {
      icon: Radio,
      title: "On-Time Delivery",
      description: "Strict adherence to timelines and commitments",
      stat: "100%",
      label: "On-Time",
    },
    {
      icon: BarChart3,
      title: "Consistent Results",
      description: "Accurate & consistent results across all batches",
      stat: "Top",
      label: "Quality",
    },
  ];

  return (
    <section id="technology" className="relative py-32 bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px bg-blue-500/20"
              style={{
                left: `${Math.random() * 100}%`,
                height: `${Math.random() * 100 + 50}px`,
              }}
              animate={{
                y: [0, -1000],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(to right, #3b82f6 1px, transparent 1px),
                             linear-gradient(to bottom, #3b82f6 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>

        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10" ref={ref}>
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-block mb-4"
          >
            <span className="type-eyebrow text-blue-400 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20 backdrop-blur-sm">
              Worldwide Leader & Authorized Service Center
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="type-slide-title-light mb-6"
          >
            Galaxy™ Inclusion
            <br />
            <span className="type-slide-title-bold bg-gradient-to-r from-blue-400 via-blue-300 to-white bg-clip-text text-transparent">
              Scanning
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="type-body-lg text-gray-400 max-w-3xl mx-auto"
          >
            Complete in-house rough planning and scanning services with accurate & consistent results, powered by industry-leading technology.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Image with Overlay */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1602052577122-f73b9710adba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWJvcmF0b3J5JTIwdGVjaG5vbG9neSUyMHNjYW5uaW5nJTIwZXF1aXBtZW50fGVufDF8fHx8MTc4MDY4ODc0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Scanning Technology"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-purple-900/50"></div>

              {/* Scanning Animation Overlay */}
              <motion.div
                animate={{
                  y: [0, 600],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent shadow-[0_0_20px_rgba(59,130,246,0.8)]"
              ></motion.div>

              {/* Data Points */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="absolute w-3 h-3 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                  style={{
                    top: `${20 + Math.random() * 60}%`,
                    left: `${20 + Math.random() * 60}%`,
                  }}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [1, 0, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                    className="absolute inset-0 bg-blue-400 rounded-full"
                  ></motion.div>
                </motion.div>
              ))}
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-8 -right-8 bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20"
            >
              <div className="text-4xl text-blue-400 mb-2">100%</div>
              <div className="text-sm text-gray-300">In-House Processing</div>
            </motion.div>
          </motion.div>

          {/* Right: Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon size={24} />
                </div>

                <div className="text-3xl text-blue-400 mb-1">{feature.stat}</div>
                <div className="text-xs text-gray-400 mb-3">{feature.label}</div>

                <h4 className="type-eyebrow mb-2">{feature.title}</h4>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
