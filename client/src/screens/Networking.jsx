import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNetworkWired,
  faCogs,
  faChartLine,
  faServer,
  faShieldAlt,
  faCloud,
  faLaptop,
  faGlobe,
  faArrowRight,
  faCertificate,
  faUserGraduate,
  faCode
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Networking = () => {
  // Keep your existing canvas-related code
  const canvasRef = useRef(null);
  const pointsRef = useRef([]);
  const mousePosRef = useRef(null);
  const maxDist = 200;
  const colour = "135,206,250";
  const [pointCount, setPointCount] = useState(260);

  // ... (keep all your canvas animation functions)

  const features = [
    {
      icon: faNetworkWired,
      title: "Network Architecture",
      description: "Learn advanced network design principles and implementation strategies",
      gradient: "from-cyan-500/20 via-blue-500/20 to-cyan-500/20"
    },
    {
      icon: faCogs,
      title: "System Configuration",
      description: "Master network device setup and advanced configurations",
      gradient: "from-blue-500/20 via-cyan-500/20 to-blue-500/20"
    },
    {
      icon: faShieldAlt,
      title: "Network Security",
      description: "Implement robust security measures and protocols",
      gradient: "from-cyan-500/20 via-teal-500/20 to-cyan-500/20"
    },
    {
      icon: faCloud,
      title: "Cloud Networking",
      description: "Deploy and manage cloud-based network solutions",
      gradient: "from-teal-500/20 via-cyan-500/20 to-teal-500/20"
    },
    {
      icon: faChartLine,
      title: "Performance Analysis",
      description: "Monitor and optimize network performance metrics",
      gradient: "from-cyan-500/20 via-blue-500/20 to-cyan-500/20"
    },
    {
      icon: faServer,
      title: "Infrastructure Design",
      description: "Design scalable network infrastructure solutions",
      gradient: "from-blue-500/20 via-cyan-500/20 to-blue-500/20"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0F1C] relative overflow-hidden">
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-semibold mb-6">
                PROFESSIONAL CERTIFICATION COURSE
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 text-transparent bg-clip-text">
                Master Network Engineering
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
                From network fundamentals to advanced infrastructure - become an expert in modern networking
              </p>

              {/* Course Stats */}
              <div className="flex flex-wrap justify-center gap-6 mb-12">
                {[
                  { icon: faLaptop, text: "Hands-on Labs", count: "50+" },
                  { icon: faCertificate, text: "Certification", count: "Industry Recognized" },
                  { icon: faUserGraduate, text: "Expert Mentors", count: "24/7 Support" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-3 bg-cyan-900/20 px-6 py-3 rounded-full border border-cyan-500/20"
                  >
                    <FontAwesomeIcon icon={stat.icon} className="text-cyan-400" />
                    <div className="text-left">
                      <span className="block text-gray-300">{stat.text}</span>
                      <span className="text-xs text-cyan-400">{stat.count}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Main Content Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800/50 overflow-hidden max-w-5xl mx-auto"
            >
              <div className="grid md:grid-cols-2 gap-8 p-8">
                {/* Image Section */}
                <div className="relative">
                  <div className="aspect-video rounded-xl overflow-hidden">
                    <img
                      src="https://e0.pxfuel.com/wallpapers/679/344/desktop-wallpaper-network-connection-platform-world-global-gis-tavos.jpg"
                      alt="Networking"
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/30 to-transparent" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="space-y-6">
                  <div className="space-y-4">
                    {[
                      { icon: faNetworkWired, text: "Network Design and Architecture" },
                      { icon: faCogs, text: "Configuration and Troubleshooting" },
                      { icon: faChartLine, text: "Performance Optimization" },
                      { icon: faCloud, text: "Cloud Integration" }
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="flex items-center space-x-3 text-gray-300"
                      >
                        <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                          <FontAwesomeIcon icon={item.icon} className="text-cyan-400" />
                        </div>
                        <span>{item.text}</span>
                      </motion.div>
                    ))}
                  </div>

                  <Link
                    to="/courses/networkingcourse"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                  >
                    <span>Start Learning</span>
                    <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative h-full bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300">
                    <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                      <FontAwesomeIcon icon={feature.icon} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-800 py-8">
          <div className="container mx-auto px-4 text-center text-gray-400">
            <p>&copy; 2024 USCL Network Engineering. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Networking;