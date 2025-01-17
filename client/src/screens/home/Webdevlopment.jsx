import React from "react";
import { motion } from "framer-motion";
import { 
  FaCode,
  FaServer,
  FaDatabase,
  FaCheckCircle,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaRocket,
  FaLaptopCode,
  FaCertificate,
  FaUsers,
  FaArrowRight
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Fs from "../../images/FS.png";

const WebDevelopment = () => {
  const features = [
    {
      icon: FaCode,
      title: "Frontend Development",
      description: "Master HTML, CSS, JavaScript, and React",
      gradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: FaServer,
      title: "Backend Development",
      description: "Build robust servers with Node.js and Express",
      gradient: "from-cyan-500/10 to-blue-500/10"
    },
    {
      icon: FaDatabase,
      title: "Database Management",
      description: "Work with SQL and NoSQL databases",
      gradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: FaGithub,
      title: "Version Control",
      description: "Master Git and collaborative development",
      gradient: "from-cyan-500/10 to-blue-500/10"
    },
    {
      icon: FaReact,
      title: "Modern Frameworks",
      description: "Build dynamic apps with latest technologies",
      gradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: FaNodeJs,
      title: "API Development",
      description: "Create and integrate RESTful APIs",
      gradient: "from-cyan-500/10 to-blue-500/10"
    }
  ];

  const benefits = [
    "Industry-relevant curriculum updated regularly",
    "Build real-world projects for your portfolio",
    "One-on-one mentorship from industry experts",
    "Flexible learning schedule",
    "Job placement assistance",
    "Certificate upon completion"
  ];

  return (
    <div className="min-h-screen bg-[#0A0F1C] text-white relative">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-black to-cyan-500/10" />

      <div className="relative">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-7xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-semibold mb-6">
              PROFESSIONAL WEB DEVELOPMENT COURSE
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 text-transparent bg-clip-text">
              Become a Full-Stack Developer
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
              Master both frontend and backend development with our comprehensive course
            </p>

            {/* Course Stats */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {[
                { icon: FaLaptopCode, text: "50+ Projects", label: "Hands-on Practice" },
                { icon: FaCertificate, text: "Industry Ready", label: "Certification" },
                { icon: FaUsers, text: "24/7 Support", label: "Expert Mentorship" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3 bg-blue-900/20 px-6 py-3 rounded-full border border-blue-500/20"
                >
                  <div className="p-2 rounded-full bg-blue-500/10">
                    <stat.icon className="text-blue-400 w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-white">{stat.text}</div>
                    <div className="text-xs text-blue-400">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link to="/courses/web2.0">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center gap-2 mx-auto">
                  Begin Your Journey
                  <FaArrowRight />
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* Course Image */}
        <section className="py-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-6xl mx-auto px-4"
          >
            <div className="relative rounded-2xl overflow-hidden border border-blue-500/20">
              <img
                src="https://miro.medium.com/v2/resize:fit:1400/0*bkOlmogReOpRiw4A"
                alt="Web Development"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </motion.div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Course Modules</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Comprehensive curriculum covering all aspects of modern web development
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
                  <div className="relative h-full bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800/50 hover:border-blue-500/30 transition-all duration-300">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="text-2xl" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4">Course Benefits</h2>
              <p className="text-gray-400">Everything you need to become a professional developer</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 bg-blue-900/20 p-4 rounded-xl border border-blue-500/20"
                >
                  <FaCheckCircle className="text-blue-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold">Ready to Start Your Journey?</h2>
              <p className="text-gray-400">
                Join thousands of successful developers who have transformed their careers with our course
              </p>
              <Link to="/courses/web2.0">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full text-lg font-semibold text-white hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center gap-2 mx-auto"
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
          <div className="container mx-auto px-4 text-center text-gray-400">
            <p>&copy; 2024 USCL Web Development. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default WebDevelopment;