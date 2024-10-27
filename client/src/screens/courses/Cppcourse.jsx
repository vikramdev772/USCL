import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaPlay, 
  FaShoppingCart, 
  FaCheckCircle, 
  FaCode,
  FaBook,
  FaClock,
  FaUsers,
  FaRocket,
  FaBrain,
  FaDatabase,
  FaLaptopCode
} from "react-icons/fa";
import cpp from "../../images/CPP.jpg";

const CppCourse = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const courseFeatures = [
    {
      icon: <FaCode />,
      title: "Advanced C++",
      description: "Modern C++ features and best practices"
    },
    {
      icon: <FaDatabase />,
      title: "Data Structures",
      description: "Implementation and optimization techniques"
    },
    {
      icon: <FaBrain />,
      title: "Algorithms",
      description: "Problem-solving and optimization"
    },
    {
      icon: <FaLaptopCode />,
      title: "Practical Projects",
      description: "Real-world programming challenges"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0F1C] text-white">
      {/* Background Elements */}
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20" />
      <div className="fixed inset-0 bg-gradient-to-br from-red-500/10 via-black to-red-800/10" />

      {/* Main Content */}
      <div className="relative">
        {/* Hero Section */}
        <section className="pt-20 pb-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-red-500/10 text-red-400 text-sm font-semibold mb-6">
                PROFESSIONAL DSA COURSE
              </span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 via-red-300 to-red-500 text-transparent bg-clip-text">
                Master C++ & Data Structures
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive training in modern C++, data structures, and algorithms
              </p>
            </motion.div>

            {/* Course Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center gap-6 mb-16"
            >
              {[
                { icon: FaBook, text: "200+ Coding Problems" },
                { icon: FaClock, text: "50+ Hours Content" },
                { icon: FaUsers, text: "1-on-1 Mentorship" }
              ].map((stat, index) => (
                <div key={index} className="flex items-center gap-3 bg-red-900/20 px-6 py-3 rounded-full border border-red-500/20">
                  <stat.icon className="text-red-400" />
                  <span className="text-gray-300">{stat.text}</span>
                </div>
              ))}
            </motion.div>

            {/* Video Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="max-w-4xl mx-auto relative rounded-2xl overflow-hidden shadow-2xl border border-red-500/20"
            >
              <div className="relative aspect-video group">
                <video
                  src="https://res.cloudinary.com/datowd0cc/video/upload/v1726635504/USCL/djtqrxxtdumkjpddeuq5.mp4"
                  poster={cpp}
                  controls={isVideoPlaying}
                  onClick={() => setIsVideoPlaying(true)}
                  className="w-full h-full object-cover"
                />
                {!isVideoPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/50 group-hover:bg-black/40 transition-colors">
                    <button
                      onClick={() => setIsVideoPlaying(true)}
                      className="bg-red-500 hover:bg-red-600 text-white rounded-full p-6 transform hover:scale-110 transition-transform"
                    >
                      <FaPlay className="w-8 h-8" />
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-b from-transparent via-red-900/10 to-transparent">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4">Course Highlights</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Comprehensive curriculum designed for both interview preparation and practical development
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {courseFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-red-500/20 hover:border-red-500/40 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center text-red-400 mb-6 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-red-300">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="max-w-lg mx-auto"
            >
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-red-500/20">
                <div className="p-8">
                  <div className="flex justify-between items-center mb-8">
                    <div>
                      <h3 className="text-2xl font-bold text-red-400">Premium Access</h3>
                      <p className="text-gray-400">Lifetime course access</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-400 line-through">₹9999</p>
                      <p className="text-4xl font-bold text-white">₹6999</p>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {[
                      "Complete course access",
                      "200+ coding challenges",
                      "Interview preparation",
                      "Personal mentorship",
                      "Certificate of completion",
                      "Lifetime updates"
                    ].map((benefit, index) => (
                      <motion.li
                        key={index}
                        className="flex items-center text-gray-300"
                        whileHover={{ x: 5 }}
                      >
                        <FaCheckCircle className="w-5 h-5 mr-3 text-red-500" />
                        {benefit}
                      </motion.li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setShowModal(true)}
                    className="w-full py-4 bg-gradient-to-r from-red-500 to-red-600 rounded-xl text-xl font-semibold hover:from-red-600 hover:to-red-700 transition-all flex items-center justify-center gap-3"
                  >
                    <FaShoppingCart />
                    Enroll Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-gray-800">
          <div className="container mx-auto px-4 text-center text-gray-400">
            <p>&copy; 2024 USCL C++ Course. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default CppCourse;