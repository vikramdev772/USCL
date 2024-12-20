import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  FaCode, 
  FaLaptopCode, 
  FaGraduationCap, 
  FaArrowRight, 
  FaBook, 
  FaClock, 
  FaUsers,
  FaCertificate,
  FaBrain,
  FaRocket
} from "react-icons/fa";

const Java = () => {
  const features = [
    {
      icon: <FaCode />,
      title: "Core Java Concepts",
      description: "Master OOP, collections, threading, and more",
      gradient: "from-blue-500/10 to-indigo-500/10"
    },
    {
      icon: <FaLaptopCode />,
      title: "Real Projects",
      description: "Build enterprise applications and APIs",
      gradient: "from-indigo-500/10 to-purple-500/10"
    },
    {
      icon: <FaBrain />,
      title: "Problem Solving",
      description: "Data structures and algorithms deep dive",
      gradient: "from-purple-500/10 to-blue-500/10"
    },
    {
      icon: <FaCertificate />,
      title: "Certification Ready",
      description: "Prepare for Oracle Java certification",
      gradient: "from-blue-500/10 to-purple-500/10"
    },
    {
      icon: <FaGraduationCap />,
      title: "Expert Guidance",
      description: "Learn from industry professionals",
      gradient: "from-purple-500/10 to-indigo-500/10"
    },
    {
      icon: <FaRocket />,
      title: "Career Support",
      description: "Job placement and interview preparation",
      gradient: "from-indigo-500/10 to-blue-500/10"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0F1C] text-white relative">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-indigo-500/10" />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-semibold mb-6">
              PROFESSIONAL JAVA CERTIFICATION
            </span>
            <h1 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 text-transparent bg-clip-text">
              Master Java Development
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
              From core concepts to enterprise applications - become a professional Java developer
            </p>

            {/* Course Stats */}
            <div className="flex flex-wrap gap-6 justify-center mb-12">
              {[
                { icon: FaBook, text: "12 Comprehensive Modules" },
                { icon: FaClock, text: "48 Hours of Content" },
                { icon: FaUsers, text: "24/7 Expert Support" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3 bg-blue-900/20 px-6 py-3 rounded-full border border-blue-500/20"
                >
                  <stat.icon className="text-blue-400" />
                  <span className="text-gray-300">{stat.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Link to="/courses/core-java">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 flex items-center gap-2">
                  Start Learning
                  <FaArrowRight className="text-sm" />
                </button>
              </Link>
              <button className="px-8 py-4 bg-blue-500/10 border border-blue-500/20 rounded-full text-lg font-semibold hover:bg-blue-500/20 transition-all duration-300">
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
              Comprehensive curriculum designed to take you from basics to advanced Java development
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
                <div className="relative h-full bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/30 transition-colors duration-300">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-300">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-20 relative bg-gradient-to-b from-transparent via-blue-900/10 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-center mb-12">Your Learning Path</h2>
            <div className="space-y-8">
              {[
                "Java Fundamentals & OOP",
                "Data Structures & Algorithms",
                "Java Collections Framework",
                "Exception Handling & I/O",
                "Multithreading & Concurrency",
                "Database Connectivity (JDBC)",
                "Spring Framework Basics",
                "Enterprise Applications"
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 bg-blue-900/20 p-4 rounded-xl border border-blue-500/20"
                >
                  <span className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 font-semibold">
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
            <h2 className="text-3xl font-bold mb-6">Start Your Java Journey Today</h2>
            <p className="text-gray-400 mb-8">
              Join thousands of successful developers who have mastered Java with our course
            </p>
            <Link to="/courses/core-java">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full text-lg font-semibold text-white hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 flex items-center gap-2 mx-auto"
              >
                <FaRocket className="text-xl" />
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
            <p className="text-gray-400">&copy; 2024 USCL Java Programming. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="#" className="text-gray-400 hover:text-blue-400 transition-colors">Terms</Link>
              <Link to="#" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy</Link>
              <Link to="#" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Java;