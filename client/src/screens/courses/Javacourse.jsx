import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  FaPlay, 
  FaShoppingCart, 
  FaCertificate, 
  FaUserGraduate,
  FaClock,
  FaBook,
  FaCode,
  FaLaptopCode
} from "react-icons/fa";
import java from "../../assets/java.mp4";

const JavaCourse = () => {
  const navigate = useNavigate();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const courseFeatures = [
    {
      icon: <FaBook className="w-6 h-6 text-blue-400" />,
      title: "Comprehensive Curriculum",
      description: "Complete Java programming from basics to advanced concepts"
    },
    {
      icon: <FaLaptopCode className="w-6 h-6 text-blue-400" />,
      title: "Hands-on Projects",
      description: "Build real-world applications throughout the course"
    },
    {
      icon: <FaClock className="w-6 h-6 text-blue-400" />,
      title: "Lifetime Access",
      description: "Learn at your own pace with unlimited access"
    },
    {
      icon: <FaUserGraduate className="w-6 h-6 text-blue-400" />,
      title: "Expert Instruction",
      description: "Learn from industry professionals"
    }
  ];

  const handlePayment = () => {
    setShowModal(true);
    // Add your payment logic here
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="min-h-screen bg-gradient-to-b from-gray-900 via-[#0c1322] to-black"
    >
      {/* Header Section */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Master Java Programming
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A comprehensive course to take you from beginner to professional Java developer
            </p>
          </motion.div>

          {/* Video Section */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-blue-500/20"
          >
            <div className="aspect-video relative group">
              <video
                className="w-full h-full object-cover"
                src={java}
                poster="https://img.freepik.com/premium-photo/java-programming-language-text_272306-133.jpg"
                controls={isVideoPlaying}
                onClick={() => setIsVideoPlaying(true)}
              >
                <source src={java} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {!isVideoPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 group-hover:bg-black/40 transition-colors">
                  <button
                    onClick={() => setIsVideoPlaying(true)}
                    className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-6 transform hover:scale-110 transition-transform"
                  >
                    <FaPlay className="w-8 h-8" />
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Course Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courseFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/10 hover:border-blue-500/30 transition-all"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="py-16"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-blue-500/20 hover:border-blue-500/40 transition-all">
              <div className="p-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-3xl font-bold text-blue-400">Premium Access</h2>
                  <span className="text-5xl font-bold text-white">₹4999</span>
                </div>
                
                <ul className="space-y-4 mb-8">
                  <motion.li 
                    className="flex items-center text-gray-300"
                    whileHover={{ x: 5 }}
                  >
                    <FaCode className="w-5 h-5 mr-3 text-blue-400" />
                    Complete Course Access
                  </motion.li>
                  <motion.li 
                    className="flex items-center text-gray-300"
                    whileHover={{ x: 5 }}
                  >
                    <FaCertificate className="w-5 h-5 mr-3 text-blue-400" />
                    Certification Upon Completion
                  </motion.li>
                  <motion.li 
                    className="flex items-center text-gray-300"
                    whileHover={{ x: 5 }}
                  >
                    <FaUserGraduate className="w-5 h-5 mr-3 text-blue-400" />
                    Personal Mentor Support
                  </motion.li>
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handlePayment}
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl text-xl font-semibold text-white hover:from-blue-700 hover:to-blue-900 transition-all flex items-center justify-center gap-3"
                >
                  <FaShoppingCart />
                  Enroll Now
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Payment Modal */}
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setShowModal(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gray-800 rounded-2xl p-8 max-w-md w-full mx-4"
            onClick={e => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Complete Your Purchase</h3>
            {/* Add your payment form/gateway integration here */}
            <p className="text-gray-300 mb-6">You will be redirected to our secure payment gateway.</p>
            <div className="flex gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 py-3 bg-gray-700 rounded-xl hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // Add payment processing logic
                  console.log("Processing payment...");
                }}
                className="flex-1 py-3 bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors"
              >
                Pay Now
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2024 USCL. All rights reserved.</p>
        </div>
      </footer>
    </motion.div>
  );
};

export default JavaCourse;