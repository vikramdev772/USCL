import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  FaTerminal, 
  FaServer, 
  FaNetworkWired, 
  FaUserShield,
  FaRocket,
  FaBrain,
  FaBook,
  FaClock,
  FaUsers,
  FaCertificate,
  FaGraduationCap,
  FaTools,
  FaDatabase
} from "react-icons/fa";

const Linux = () => {
  const features = [
    {
      icon: <FaTerminal />,
      title: "Command Line Mastery",
      description: "Master essential terminal commands and shell scripting fundamentals.",
      gradient: "from-green-500/10 to-emerald-500/10"
    },
    {
      icon: <FaServer />,
      title: "System Administration",
      description: "Learn to manage and configure Linux systems effectively.",
      gradient: "from-emerald-500/10 to-green-500/10"
    },
    {
      icon: <FaNetworkWired />,
      title: "Networking Fundamentals",
      description: "Configure and manage network services and protocols.",
      gradient: "from-green-500/10 to-teal-500/10"
    },
    {
      icon: <FaUserShield />,
      title: "Security Essentials",
      description: "Implement robust security measures and best practices.",
      gradient: "from-teal-500/10 to-green-500/10"
    },
    {
      icon: <FaTools />,
      title: "System Tools",
      description: "Master essential Linux utilities and diagnostics.",
      gradient: "from-green-500/10 to-emerald-500/10"
    },
    {
      icon: <FaDatabase />,
      title: "Storage Management",
      description: "Handle file systems and storage configurations.",
      gradient: "from-emerald-500/10 to-green-500/10"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0F1C] text-white relative">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-black to-emerald-500/10" />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-green-500/10 text-green-400 text-sm font-semibold mb-6">
              PROFESSIONAL LINUX CERTIFICATION
            </span>
            <h1 className="text-6xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-green-400 via-emerald-300 to-teal-400 text-transparent bg-clip-text">
              Master Linux Administration
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
              From basic commands to advanced system administration - become a Linux expert
            </p>

            {/* Course Stats */}
            <div className="flex flex-wrap gap-6 justify-center mb-12">
              {[
                { icon: FaBook, text: "15+ Hands-on Projects" },
                { icon: FaClock, text: "40+ Hours Content" },
                { icon: FaUsers, text: "Expert Support" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3 bg-green-900/20 px-6 py-3 rounded-full border border-green-500/20"
                >
                  <stat.icon className="text-green-400" />
                  <span className="text-gray-300">{stat.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Hero Image */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative max-w-4xl mx-auto mb-16"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-green-500/20">
                <img 
                  src="https://images.unsplash.com/photo-1629654297299-c8506221ca97"
                  alt="Linux Administration"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Link to="/courses/linux-essentials">
                <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full text-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center gap-2">
                  Start Learning
                  <FaRocket className="text-sm" />
                </button>
              </Link>
              <button className="px-8 py-4 bg-green-500/10 border border-green-500/20 rounded-full text-lg font-semibold hover:bg-green-500/20 transition-all duration-300">
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What You'll Learn</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive Linux training designed for both beginners and experienced administrators
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
                <div className="relative h-full bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-green-500/30 transition-colors duration-300">
                  <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center text-green-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-green-300">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-20 relative bg-gradient-to-b from-transparent via-green-900/10 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-center mb-12">Course Curriculum</h2>
            <div className="space-y-8">
              {[
                "Linux System Architecture",
                "Command Line Fundamentals",
                "User & Group Management",
                "File System Administration",
                "Package Management",
                "Network Configuration",
                "Security Implementation",
                "Service Management",
                "Shell Scripting",
                "System Monitoring"
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 bg-green-900/20 p-4 rounded-xl border border-green-500/20"
                >
                  <span className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 font-semibold">
                    {index + 1}
                  </span>
                  <span className="text-gray-300">{step}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Master Linux?</h2>
            <p className="text-gray-400 mb-8">
              Join thousands of system administrators who have accelerated their careers with our course
            </p>
            <Link to="/courses/linux-essentials">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full text-lg font-semibold text-white hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center gap-2 mx-auto"
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
            <p className="text-gray-400">&copy; 2024 USCL Linux Essentials. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="#" className="text-gray-400 hover:text-green-400 transition-colors">Terms</Link>
              <Link to="#" className="text-gray-400 hover:text-green-400 transition-colors">Privacy</Link>
              <Link to="#" className="text-gray-400 hover:text-green-400 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Linux;