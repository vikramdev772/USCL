import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCode,
  FaRocket,
  FaLock,
  FaArrowRight,
  FaChevronDown,
} from "react-icons/fa";
import Footer from "./Footer.jsx";

// Enhanced FloatingIconsBackground with more professional animations
const FloatingIconsBackground = () => {
  const icons = [
    "https://cdn-icons-png.flaticon.com/128/6038/6038678.png",
    "https://cdn-icons-png.flaticon.com/128/5968/5968866.png",
    "https://cdn-icons-png.flaticon.com/128/226/226777.png",
    "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
    "https://cdn-icons-png.flaticon.com/128/15379/15379746.png",
    "https://res.cloudinary.com/datowd0cc/image/upload/v1730172365/icons/j8dhylyyvup7d0q6yo0s.png",
    "https://cdn-icons-png.flaticon.com/128/15466/15466163.png"
  ];

  return (
    <div 
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      style={{
        backgroundImage: `url('/grid.svg')`,
        backgroundRepeat: 'repeat',
        backgroundSize: '100px 100px',
        backgroundColor: 'rgba(2, 6, 23, 0.97)',
        backgroundBlendMode: 'soft-light'
      }}
    >
      {icons.map((icon, index) => {
        const initialX = Math.random() * (window.innerWidth - 100);
        const initialY = Math.random() * (window.innerHeight - 100);
        const moveRange = 200;
        
        return (
          <motion.div
            key={index}
            className="absolute"
            initial={{ x: initialX, y: initialY, opacity: 0, scale: 0.5 }}
            animate={{
              x: [
                initialX,
                initialX + Math.sin(index) * moveRange,
                initialX - Math.cos(index) * moveRange,
                initialX,
              ],
              y: [
                initialY,
                initialY - Math.cos(index) * moveRange,
                initialY + Math.sin(index) * moveRange,
                initialY,
              ],
              rotate: [0, 360],
              opacity: [0.3, 0.5, 0.3],
              scale: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 25 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.img
              src={icon}
              alt={`Tech Icon ${index + 1}`}
              className="w-24 h-24 opacity-30 object-contain filter blur-[1px]"
              whileHover={{ scale: 1.2, opacity: 0.6, filter: "blur(0px)" }}
            />
          </motion.div>
        );
      })}
      
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-transparent to-purple-950/90 opacity-70" />
    </div>
  );
};

// Enhanced Service Card Component
const ServiceCard = ({ title, description, icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    className="group relative rounded-2xl p-1 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-blue-500/20"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative h-full bg-gray-900 rounded-xl p-8">
      <div className="flex items-center space-x-4 mb-6">
        <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg">
          {icon}
        </div>
        <h4 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          {title}
        </h4>
      </div>
      <p className="text-gray-300 leading-relaxed mb-6">{description}</p>
      <motion.button
        whileHover={{ x: 5 }}
        className="text-blue-400 hover:text-blue-300 flex items-center gap-2 font-medium"
      >
        Learn more <FaArrowRight className="text-sm" />
      </motion.button>
    </div>
  </motion.div>
);

// Enhanced Feature Card Component
const FeatureCard = ({ title, description, icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/30 backdrop-blur-sm"
  >
    <div className="flex items-center space-x-4 mb-6">
      <div className="p-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg">
        {icon}
      </div>
      <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
        {title}
      </h3>
    </div>
    <p className="text-gray-300 leading-relaxed">{description}</p>
  </motion.div>
);

const Landing = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <FloatingIconsBackground />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="inline-block p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl mb-8">
              <FaCode className="text-blue-400 text-4xl" />
            </div>

            <h1 className="text-6xl md:text-7xl font-extrabold mb-8 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 animate-gradient">
                United Students
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                Computer Laboratory
              </span>
            </h1>

            <div className="mb-8">
              <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-400">
                Learn. Advance. Evolve.
              </span>
              <span className="block text-xl text-blue-400 mt-4 font-medium">
                Welcome to the New Era of Coding Excellence
              </span>
            </div>

            <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Elevate your programming skills, solve challenges, and unlock the world of coding possibilities.
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                Start Your Evolution
                <FaArrowRight className="inline-block ml-2" />
              </motion.a>
              <motion.a
                href="#learn"
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 text-lg font-semibold text-blue-400 border-2 border-blue-400/30 rounded-xl hover:bg-blue-400/10 transition-all duration-300"
              >
                Explore the Future
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {["Advanced Learning", "Modern Technologies", "Expert Guidance", "Future-Ready Skills"].map((tag) => (
              <div
                key={tag}
                className="px-6 py-3 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl text-sm font-medium text-blue-300 border border-blue-800/30"
              >
                {tag}
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <FaChevronDown className="text-white text-3xl animate-bounce" />
        </motion.div>
      </motion.section>

      <section id="services" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Our Services
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive range of services designed to help you master the art of coding.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Programming Challenges"
              description="Enhance your skills with our curated collection of coding challenges, ranging from beginner to advanced levels."
              icon={<FaCode className="text-blue-400 text-2xl" />}
            />
            <ServiceCard
              title="Expert Tutorials"
              description="Access comprehensive tutorials and guides created by industry experts to accelerate your learning journey."
              icon={<FaRocket className="text-purple-400 text-2xl" />}
            />
            <ServiceCard
              title="Secure Coding"
              description="Learn industry-standard security practices and build robust, secure applications from day one."
              icon={<FaLock className="text-pink-400 text-2xl" />}
            />
          </div>
        </div>
      </section>

      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Why Choose Us
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FeatureCard
              title="Modern Curriculum"
              description="Stay ahead with cutting-edge technologies and industry-relevant skills"
              icon={<FaRocket className="text-blue-400 text-2xl" />}
            />
            <FeatureCard
              title="Expert Mentorship"
              description="Learn from experienced developers who know the industry inside out"
              icon={<FaCode className="text-purple-400 text-2xl" />}
            />
          </div>
        </div>
      </section>

      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all z-50"
          >
            <FaArrowRight className="transform -rotate-90" />
          </motion.button>
        )}
      </AnimatePresence>
      <Footer/>
    </div>
  );
};

export default Landing;