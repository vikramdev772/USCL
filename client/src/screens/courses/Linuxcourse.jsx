import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaPlay, 
  FaShoppingCart, 
  FaCheckCircle, 
  FaTerminal,
  FaBook,
  FaUsers,
  FaLaptopCode,
  FaCertificate,
  FaRocket
} from "react-icons/fa";
import linux from "../../assets/Linux.mp4";

const LinuxCourse = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const features = [
    {
      icon: <FaTerminal className="w-6 h-6" />,
      title: "Command Line Mastery",
      description: "Learn essential Linux commands and terminal operations"
    },
    {
      icon: <FaLaptopCode className="w-6 h-6" />,
      title: "Hands-on Practice",
      description: "Real-world scenarios and practical exercises"
    },
    {
      icon: <FaUsers className="w-6 h-6" />,
      title: "Community Support",
      description: "Join our active Linux learners community"
    },
    {
      icon: <FaCertificate className="w-6 h-6" />,
      title: "Certification Ready",
      description: "Prepare for Linux certification exams"
    }
  ];

  const syllabus = [
    "Linux System Architecture",
    "File System Navigation",
    "User Management",
    "Package Management",
    "Network Configuration",
    "Shell Scripting",
    "System Security",
    "Server Administration"
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-b from-gray-900 via-[#0c1322] to-black text-white"
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-20 pb-32">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-blue-500/10" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-green-500/10 text-green-400 text-sm font-semibold mb-6">
              PROFESSIONAL CERTIFICATION COURSE
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Master Linux Essentials
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From beginner to system administrator - master the power of Linux with our comprehensive course
            </p>
          </motion.div>

          {/* Video Section */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-green-500/20"
          >
            <div className="aspect-video relative group">
              <video
                className="w-full h-full object-cover"
                src={linux}
                poster="https://wallup.net/wp-content/uploads/2017/11/17/210653-Kali_Linux-Kali_Linux_NetHunter-Linux.jpg"
                controls={isVideoPlaying}
                onClick={() => setIsVideoPlaying(true)}
              >
                <source src={linux} type="video/mp4" />
              </video>
              
              {!isVideoPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 group-hover:bg-black/40 transition-colors">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    onClick={() => setIsVideoPlaying(true)}
                    className="bg-green-500 hover:bg-green-600 text-white rounded-full p-6"
                  >
                    <FaPlay className="w-8 h-8" />
                  </motion.button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-green-500/10 hover:border-green-500/30 transition-all"
              >
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center text-green-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Syllabus Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Course Syllabus</h2>
            <p className="text-gray-400">Comprehensive curriculum covering all essential aspects</p>
          </motion.div>

          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {syllabus.map((topic, index) => (
              <motion.div
                key={index}
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-3 bg-gray-800/50 p-4 rounded-lg border border-green-500/10"
              >
                <FaCheckCircle className="text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{topic}</span>
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
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-green-500/20">
              <div className="p-8">
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-green-400">Premium Access</h3>
                    <p className="text-gray-400">Lifetime course access</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-400 line-through">₹19999</p>
                    <p className="text-4xl font-bold text-white">₹14999</p>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {[
                    "Complete course access",
                    "Practical exercises & projects",
                    "Community support",
                    "Certification preparation",
                    "24/7 Technical support",
                    "Regular course updates"
                  ].map((benefit, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center text-gray-300"
                      whileHover={{ x: 5 }}
                    >
                      <FaCheckCircle className="w-5 h-5 mr-3 text-green-500" />
                      {benefit}
                    </motion.li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowModal(true)}
                  className="w-full py-4 bg-gradient-to-r from-green-500 to-green-600 rounded-xl text-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all flex items-center justify-center gap-3"
                >
                  <FaRocket />
                  Enroll Now
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Payment Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="bg-gray-800 rounded-2xl p-8 max-w-md w-full mx-4"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Complete Your Enrollment</h3>
              <p className="text-gray-300 mb-6">You will be redirected to our secure payment gateway</p>
              <div className="flex gap-4">
                <button
                  onClick={() => setShowModal(false)}
                  className="flex-1 py-3 bg-gray-700 rounded-xl hover:bg-gray-600 transition-colors"
                >
                  Cancel
                </button>
                <button
                  className="flex-1 py-3 bg-green-600 rounded-xl hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                >
                  <FaShoppingCart /> Pay Now
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">&copy; 2024 USCL Linux Essentials. All rights reserved.</p>
        </div>
      </footer>
    </motion.div>
  );
};

export default LinuxCourse;