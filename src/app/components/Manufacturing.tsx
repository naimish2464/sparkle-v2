import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Check } from "lucide-react";

export function Manufacturing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      title: "Raw Diamond Selection",
      description:
        "Expert assessment and selection of premium raw diamonds using advanced scanning technology.",
      details: [
        "3D mapping and analysis",
        "Quality grading",
        "Potential evaluation",
      ],
    },
    {
      number: "02",
      title: "Precision Planning",
      description:
        "Computer-aided design and planning to maximize value and brilliance from each stone.",
      details: [
        "AI-powered optimization",
        "Cut planning",
        "Yield maximization",
      ],
    },
    {
      number: "03",
      title: "Advanced Manufacturing",
      description:
        "State-of-the-art cutting and shaping using laser technology and precision machinery.",
      details: [
        "Laser cutting",
        "Precision shaping",
        "Quality control",
      ],
    },
    {
      number: "04",
      title: "Master Polishing",
      description:
        "Expert polishing by master craftsmen to achieve perfect clarity and brilliance.",
      details: [
        "Multi-stage polishing",
        "Surface perfection",
        "Final inspection",
      ],
    },
    {
      number: "05",
      title: "Certification & Delivery",
      description:
        "Final quality assessment, certification, and secure global delivery.",
      details: [
        "Professional certification",
        "Secure packaging",
        "Global logistics",
      ],
    },
  ];

  return (
    <section id="manufacturing" className="relative py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12" ref={ref}>
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-block mb-4"
          >
            <span className="type-eyebrow text-blue-600 px-4 py-2 bg-blue-50 rounded-full">
              Manufacturing Process
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="type-section-title text-gray-900 mb-6"
          >
            From Raw Stone to Perfection
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="type-body-lg text-gray-600 max-w-3xl mx-auto"
          >
            Our five-stage manufacturing process combines traditional expertise
            with cutting-edge technology to transform raw diamonds into
            masterpieces.
          </motion.p>
        </div>

        {/* Interactive Timeline */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Timeline Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveStep(index)}
                className={`relative cursor-pointer group transition-all duration-300 ${activeStep === index ? "scale-105" : ""
                  }`}
              >
                <div
                  className={`p-6 lg:p-8 rounded-2xl border-2 transition-all duration-300 ${activeStep === index
                      ? "bg-gradient-to-br from-blue-50 to-white border-blue-500 shadow-xl"
                      : "bg-white border-gray-200 hover:border-blue-300 hover:shadow-lg"
                    }`}
                >
                  <div className="flex items-start space-x-6">
                    {/* Step Number */}
                    <div
                      className={`flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center text-2xl transition-all duration-300 ${activeStep === index
                          ? "bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-lg"
                          : "bg-gray-100 text-gray-400 group-hover:bg-blue-100 group-hover:text-blue-600"
                        }`}
                    >
                      {step.number}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="type-subtitle text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{step.description}</p>

                      {/* Details */}
                      {activeStep === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="space-y-2"
                        >
                          {step.details.map((detail, i) => (
                            <div key={i} className="flex items-center space-x-2">
                              <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <Check size={12} className="text-blue-600" />
                              </div>
                              <span className="text-sm text-gray-700">
                                {detail}
                              </span>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-full h-6 w-0.5 bg-gradient-to-b from-blue-300 to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Visual Display */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="sticky top-32"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1717386255773-1e3037c81788?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwbWFudWZhY3R1cmluZyUyMHRlY2hub2xvZ3klMjBjbGVhbnxlbnwxfHx8fDE3ODA2ODg3NDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Manufacturing Process"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

              {/* Active Step Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-white/10 backdrop-blur-xl border-t border-white/20">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="text-6xl text-white/30 mb-2">
                    {steps[activeStep].number}
                  </div>
                  <div className="text-2xl text-white">
                    {steps[activeStep].title}
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-8 bg-gray-200 h-2 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-600 to-blue-800"
                initial={{ width: "0%" }}
                animate={{
                  width: `${((activeStep + 1) / steps.length) * 100}%`,
                }}
                transition={{ duration: 0.5 }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
