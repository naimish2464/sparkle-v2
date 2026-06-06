import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { MapPin, Users, Building2, TrendingUp } from "lucide-react";
import GlobeMap from "./GlobeMap";

export function GlobalPresence() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedRegion, setSelectedRegion] = useState(0);

  const regions = [
    {
      name: "North America",
      offices: 12,
      clients: 500,
      growth: "+25%",
      description: "Leading diamond technology hub with advanced R&D facilities",
    },
    {
      name: "Europe",
      offices: 18,
      clients: 750,
      growth: "+32%",
      description: "Heritage craftsmanship meets cutting-edge innovation",
    },
    {
      name: "Asia Pacific",
      offices: 25,
      clients: 1200,
      growth: "+45%",
      description: "Largest manufacturing and distribution network",
    },
    {
      name: "Africa & Middle East",
      offices: 8,
      clients: 350,
      growth: "+28%",
      description: "Premium diamond sourcing and trading services",
    },
  ];

  const globalStats = [
    { icon: Building2, value: "63+", label: "Global Offices" },
    { icon: Users, value: "2,800+", label: "Active Clients" },
    { icon: MapPin, value: "75+", label: "Countries" },
    { icon: TrendingUp, value: "35%", label: "Annual Growth" },
  ];

  const mapLocations = [
    { name: "India", lat: 20.5937, lng: 78.9629 },
    { name: "Botswana", lat: -22.3285, lng: 24.6849 },
    { name: "New York", lat: 40.7128, lng: -74.0060 },
    { name: "Hong Kong", lat: 22.3193, lng: 114.1694 },
    { name: "China", lat: 35.8617, lng: 104.1954 }
  ];

  return (
    <section id="global" className="relative py-32 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #1e40af 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
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
              Global Presence
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="type-section-title text-gray-900 mb-6"
          >
            Worldwide Excellence
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="type-body-lg text-gray-600 max-w-3xl mx-auto"
          >
            With facilities across 6 continents, we deliver premium diamond
            services to clients worldwide, combining local expertise with global
            standards.
          </motion.p>
        </div>

        {/* Global Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {globalStats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="text-white" size={28} />
              </div>
              <div className="text-3xl lg:text-4xl text-gray-900 mb-2 font-semibold">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Interactive Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-900 to-blue-700 p-4 shadow-2xl min-h-[500px]">
              <GlobeMap locations={mapLocations} />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-blue-900/50 to-transparent"></div>
            </div>
          </motion.div>

          {/* Right: Regional Information */}
          <div className="space-y-6">
            {regions.map((region, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                onClick={() => setSelectedRegion(index)}
                className={`cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300 ${
                  selectedRegion === index
                    ? "bg-gradient-to-br from-blue-50 to-white border-blue-500 shadow-xl scale-105"
                    : "bg-white border-gray-200 hover:border-blue-300 hover:shadow-lg"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="type-subtitle text-gray-900 mb-1">
                      {region.name}
                    </h3>
                    <p className="text-sm text-gray-600">{region.description}</p>
                  </div>
                  <div
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      selectedRegion === index
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {region.growth}
                  </div>
                </div>

                {selectedRegion === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200"
                  >
                    <div>
                      <div className="text-2xl text-blue-600 font-semibold">
                        {region.offices}
                      </div>
                      <div className="text-xs text-gray-600 font-medium">Offices</div>
                    </div>
                    <div>
                      <div className="text-2xl text-blue-600 font-semibold">
                        {region.clients}+
                      </div>
                      <div className="text-xs text-gray-600 font-medium">Clients</div>
                    </div>
                    <div>
                      <div className="text-2xl text-blue-600 font-semibold">
                        {region.growth}
                      </div>
                      <div className="text-xs text-gray-600 font-medium">Growth</div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
