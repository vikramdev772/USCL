import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaPlay, 
  FaShoppingCart, 
  FaUserGraduate, 
  FaCertificate,
  FaLaptop,
  FaCode,
  FaBook,
  FaNetworkWired,
  FaClock,
  FaUsers,
  FaRocket,
  FaCheckCircle
} from "react-icons/fa";

const NetworkingCourse = () => {
  const [showModal, setShowModal] = useState(false);

  const courseFeatures = [
    {
      icon: <FaLaptop />,
      title: "Practical Labs",
      description: "Hands-on experience with real networking scenarios"
    },
    {
      icon: <FaUserGraduate />,
      title: "Expert Instruction",
      description: "Learn from industry professionals"
    },
    {
      icon: <FaCertificate />,
      title: "Certification",
      description: "Industry-recognized networking certification"
    },
    {
      icon: <FaBook />,
      title: "Comprehensive Content",
      description: "In-depth coverage of networking concepts"
    }
  ];

  const moduleList = [
    "Network Fundamentals",
    "TCP/IP Protocols",
    "Network Security",
    "Routing & Switching",
    "Cloud Networking",
    "Network Troubleshooting",
    "Network Design",
    "Performance Optimization"
  ];

  return (
    <div className="min-h-screen bg-[#0A0F1C] text-white">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-black to-blue-500/10" />

      <div className="relative">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-7xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-semibold mb-6">
              PROFESSIONAL CERTIFICATION COURSE
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 text-transparent bg-clip-text">
              Master Network Engineering
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
              Comprehensive training in networking fundamentals, protocols, and advanced techniques
            </p>

            {/* Course Stats */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {[
                { icon: FaClock, text: "40+ Hours", label: "Course Duration" },
                { icon: FaLaptop, text: "25+ Labs", label: "Hands-on Practice" },
                { icon: FaUsers, text: "24/7", label: "Expert Support" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3 bg-cyan-900/20 px-6 py-3 rounded-full border border-cyan-500/20"
                >
                  <div className="p-2 rounded-full bg-cyan-500/10">
                    <stat.icon className="text-cyan-400 w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-white">{stat.text}</div>
                    <div className="text-xs text-cyan-400">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-4xl mx-auto mb-20"
          >
            <div className="relative rounded-2xl overflow-hidden border border-cyan-500/20">
              <div className="aspect-video relative group">
                <video
                  poster="https://images.unsplash.com/photo-1506748686214e9df14b3c9e4f0a?auto=format&fit=crop&w=1920&q=80"
                  className="w-full h-full object-cover"
                >
                  <source src="demo-video.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <button className="absolute inset-0 flex items-center justify-center group">
                  <div className="w-20 h-20 bg-cyan-500/90 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <FaPlay className="w-8 h-8 text-white ml-2" />
                  </div>
                </button>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Course Modules */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Module List */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold mb-8">Course Modules</h2>
                <div className="space-y-4">
                  {moduleList.map((module, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-4 bg-cyan-900/20 p-4 rounded-xl border border-cyan-500/20"
                    >
                      <div className="w-8 h-8 bg-cyan-500/10 rounded-full flex items-center justify-center text-cyan-400">
                        {index + 1}
                      </div>
                      <span className="text-gray-300">{module}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Course Features */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold mb-8">What You'll Get</h2>
                <div className="grid gap-6">
                  {courseFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-cyan-900/20 p-6 rounded-xl border border-cyan-500/20"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center text-cyan-400">
                          {feature.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">{feature.title}</h3>
                          <p className="text-gray-400">{feature.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gradient-to-b from-transparent via-cyan-900/10 to-transparent">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 rounded-2xl overflow-hidden border border-cyan-500/20 p-8"
            >
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-cyan-400">Premium Access</h2>
                  <p className="text-gray-400">Complete networking course bundle</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-400 line-through">₹19999</p>
                  <p className="text-4xl font-bold text-white">₹16999</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {[
                  "Lifetime course access",
                  "Certification preparation",
                  "24/7 expert support",
                  "Hands-on projects",
                  "Industry case studies",
                  "Premium resources"
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3 text-gray-300"
                  >
                    <FaCheckCircle className="text-cyan-400 flex-shrink-0" />
                    <span>{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowModal(true)}
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-xl text-xl font-semibold hover:from-cyan-600 hover:to-cyan-700 transition-all flex items-center justify-center gap-3"
              >
                <FaRocket />
                Enroll Now
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-gray-800">
          <div className="container mx-auto px-4 text-center text-gray-400">
            <p>&copy; 2024 USCL Networking Course. All rights reserved.</p>
          </div>
        </footer>
      </div>

      {/* Payment Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-gray-900/90 rounded-xl border border-cyan-500/20 p-6 w-full max-w-md"
            >
              {/* Add your payment form here */}
              <h3 className="text-2xl font-bold mb-4">Complete Your Purchase</h3>
              <p className="text-gray-400 mb-6">You will be redirected to our secure payment gateway.</p>
              <div className="flex gap-4">
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 py-2 bg-gray-800 rounded-lg hover:bg-gray-700"
                >
                  Cancel
                </button>
                <button className="flex-1 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-700">
                  Pay Now
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NetworkingCourse;