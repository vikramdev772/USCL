import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  FaCode, 
  FaDatabase, 
  FaLightbulb, 
  FaPuzzlePiece,
  FaRocket,
  FaChartLine,
  FaBrain,
  FaBook,
  FaClock,
  FaUsers,
  FaCertificate,
  FaGraduationCap
} from "react-icons/fa";

const Cpp = () => {
  const features = [
    {
      icon: <FaCode />,
      title: "C++ Core Concepts",
      description: "Master modern C++ features and best practices",
      gradient: "from-red-500/10 to-orange-500/10"
    },
    {
      icon: <FaDatabase />,
      title: "Data Structures",
      description: "Implement and optimize essential data structures",
      gradient: "from-orange-500/10 to-red-500/10"
    },
    {
      icon: <FaLightbulb />,
      title: "Algorithms",
      description: "Learn efficient algorithmic techniques and patterns",
      gradient: "from-red-500/10 to-pink-500/10"
    },
    {
      icon: <FaPuzzlePiece />,
      title: "Problem Solving",
      description: "Tackle complex coding challenges and interviews",
      gradient: "from-pink-500/10 to-red-500/10"
    },
    {
      icon: <FaBrain />,
      title: "System Design",
      description: "Design scalable and efficient applications",
      gradient: "from-red-500/10 to-rose-500/10"
    },
    {
      icon: <FaChartLine />,
      title: "Performance",
      description: "Optimize code for maximum efficiency",
      gradient: "from-rose-500/10 to-red-500/10"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0F1C] text-white relative">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-black to-rose-500/10" />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-red-500/10 text-red-400 text-sm font-semibold mb-6">
              PROFESSIONAL DSA CERTIFICATION
            </span>
            <h1 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-red-400 via-red-300 to-rose-400 text-transparent bg-clip-text">
              Master C++ & DSA
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
              From fundamentals to advanced algorithms - become a C++ expert and ace coding interviews
            </p>

            {/* Course Stats */}
            <div className="flex flex-wrap gap-6 justify-center mb-12">
              {[
                { icon: FaBook, text: "100+ Coding Challenges" },
                { icon: FaClock, text: "60 Hours of Content" },
                { icon: FaUsers, text: "1-on-1 Mentorship" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3 bg-red-900/20 px-6 py-3 rounded-full border border-red-500/20"
                >
                  <stat.icon className="text-red-400" />
                  <span className="text-gray-300">{stat.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Hero Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Link to="/courses/dsa-cpp">
                <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-rose-600 rounded-full text-lg font-semibold hover:from-red-600 hover:to-rose-700 transition-all duration-300 flex items-center gap-2">
                  Start Learning
                  <FaRocket className="text-sm" />
                </button>
              </Link>
              <button className="px-8 py-4 bg-red-500/10 border border-red-500/20 rounded-full text-lg font-semibold hover:bg-red-500/20 transition-all duration-300">
                View Syllabus
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Course Highlights</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive curriculum designed for both interview preparation and real-world application development
            </p>
          </motion.div>

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
                <div className="relative h-full bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-red-500/30 transition-colors duration-300">
                  <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center text-red-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-red-300">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-20 relative bg-gradient-to-b from-transparent via-red-900/10 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-center mb-12">Your Learning Journey</h2>
            <div className="space-y-8">
              {[
                "C++ Modern Features & STL",
                "Memory Management & Pointers",
                "Object-Oriented Programming",
                "Data Structures Implementation",
                "Algorithm Analysis & Design",
                "Dynamic Programming",
                "Graph Algorithms",
                "System Design & Architecture"
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 bg-red-900/20 p-4 rounded-xl border border-red-500/20"
                >
                  <span className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center text-red-400 font-semibold">
                    {index + 1}
                  </span>
                  <span className="text-gray-300">{step}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Master C++?</h2>
            <p className="text-gray-400 mb-8">
              Join thousands of developers who have transformed their careers with our course
            </p>
            <Link to="/courses/dsa-cpp">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-red-500 to-rose-600 rounded-full text-lg font-semibold text-white hover:from-red-600 hover:to-rose-700 transition-all duration-300 flex items-center gap-2 mx-auto"
              >
                <FaGraduationCap className="text-xl" />
                Enroll Now
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">&copy; 2024 USCL C++ & DSA. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="#" className="text-gray-400 hover:text-red-400 transition-colors">Terms</Link>
              <Link to="#" className="text-gray-400 hover:text-red-400 transition-colors">Privacy</Link>
              <Link to="#" className="text-gray-400 hover:text-red-400 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Cpp;