import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Check, Gem } from "lucide-react";

export function CustomJewelry() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    "Made-to-order designs",
    "Precision craftsmanship",
    "Strict quality control",
    "On-time delivery",
    "Zero compromise on quality and finishing"
  ];

  const categories = [
    "Rings", "Earrings", "Pendants", "Tennis Bracelets", "Watches"
  ];

  return (
    <section id="custom-jewelry" className="relative py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
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
              Bespoke Creations
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="type-slide-title-light text-gray-900 mb-6"
          >
            Custom Jewelry <br />
            <span className="type-slide-title-bold text-blue-600">Manufacturing</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="sticky top-32 order-2 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1599643478524-fb524fa0a8f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZXdlbHJ5JTIwbWFudWZhY3R1cmluZ3xlbnwxfHx8fDE3ODA2ODg3NDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Custom Jewelry Manufacturing process"
                className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                  <div className="text-white text-xl font-semibold mb-2">Master Craftsmanship</div>
                  <div className="text-gray-200 text-sm">Every piece is meticulously crafted to perfection with zero compromise on quality.</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Features & Categories */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="space-y-12 order-1 lg:order-2"
          >
            {/* Features */}
            <div>
              <h3 className="type-subtitle text-gray-900 mb-6">Our Guarantee</h3>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={14} className="text-blue-600" />
                    </div>
                    <p className="text-gray-700 font-medium">{feature}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div>
              <h3 className="type-subtitle text-gray-900 mb-6">Categories</h3>
              <div className="flex flex-wrap gap-3">
                {categories.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.05 }}
                    className="flex items-center space-x-2 px-5 py-3 rounded-full bg-white border border-blue-100 text-blue-700 text-sm font-medium hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors cursor-pointer shadow-sm hover:shadow-md"
                  >
                    <Gem size={16} />
                    <span>{category}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
