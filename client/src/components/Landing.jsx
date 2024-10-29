import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCode,
  FaRocket,
  FaLock,
  FaArrowRight,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaChevronDown,
} from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import Footer from "./Footer";

// FloatingIconsBackground Component with enhanced animations
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
        backgroundSize: '110px 110px', // Increased grid size
        backgroundColor: 'rgba(0, 0, 0, 0.92)',
        backgroundBlendMode: 'overlay'
      }}
    >
      {icons.map((icon, index) => {
        // Generate smoother random positions
        const initialX = Math.random() * (window.innerWidth - 150);
        const initialY = Math.random() * (window.innerHeight - 150);
        const moveRange = 300; // Increased movement range
        
        return (
          <motion.div
            key={index}
            className="absolute"
            initial={{
              x: initialX,
              y: initialY,
              opacity: 0,
              scale: 0.5,
            }}
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
              opacity: [0.5, 0.7, 0.5],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.33, 0.66, 1],
            }}
            style={{
              filter: 'brightness(1.3) contrast(1.2) drop-shadow(0 0 10px rgba(255,255,255,0.1))',
            }}
          >
            <motion.img
              src={icon}
              alt={`Tech Icon ${index + 1}`}
              className="w-32 h-32 opacity-50 object-contain" // Increased size significantly
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
              whileHover={{
                scale: 1.2,
                opacity: 0.8,
                transition: { duration: 0.3 }
              }}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </motion.div>
        );
      })}
      
      {/* Enhanced Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-black/90 via-transparent to-black/90 opacity-80"
        style={{
          backgroundBlendMode: 'multiply',
        }}
      />
    </div>
  );
};

const Landing = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Animations and Variants
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  // Components
  const ServiceCard = ({ title, description, icon }) => (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
      className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm shadow-xl border border-gray-700/50"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="p-8">
        <div className="flex items-center space-x-4 mb-4">
          <div className="p-3 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-lg">
            {icon}
          </div>
          <h4 className="text-xl font-bold text-white">{title}</h4>
        </div>
        <p className="text-gray-300">{description}</p>
        <div className="mt-6 flex justify-end">
          <motion.button
            whileHover={{ x: 5 }}
            className="text-blue-400 hover:text-blue-300 flex items-center gap-2"
          >
            Learn more <FaArrowRight />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );

  const FeatureCard = ({ title, description, icon }) => (
    <motion.div
      variants={fadeInUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="p-6 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50"
    >
      <div className="flex items-center space-x-4 mb-4">
        <div className="p-3 bg-blue-500/20 rounded-lg">{icon}</div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );

  return (
    <>
      <div className="min-h-screen bg-black text-white">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
          {/* Add FloatingIconsBackground */}
          <FloatingIconsBackground />

          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <div className="inline-block p-2 bg-blue-500/10 rounded-lg mb-6">
                <FaCode className="text-blue-400 text-3xl" />
              </div>

              {/* Main Title */}
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 animate-gradient">
                Crack the Code to Success
              </h1>

              {/* Slogan */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mb-8"
              >
                <span className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-400">
                  Learn. Advance. Evolve.
                </span>
                <span className="block text-lg md:text-xl text-blue-400 mt-2 font-medium">
                  Welcome to the New Era of Coding Excellence
                </span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
              >
                Elevate your programming skills, solve challenges, and unlock the world of coding possibilities.
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col md:flex-row gap-4 justify-center items-center"
            >
              <a
                href="#services"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start Your Evolution
                <FaArrowRight className="ml-2" />
              </a>
              <a
                href="#learn"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-blue-400 border-2 border-blue-400/50 rounded-full hover:bg-blue-400/10 transform hover:scale-105 transition-all duration-300"
              >
                Explore the Future
              </a>
            </motion.div>

            {/* Feature Tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-12 flex flex-wrap justify-center gap-4"
            >
              {["Advanced Learning", "Modern Technologies", "Expert Guidance", "Future-Ready Skills"].map((tag, index) => (
                <div
                  key={tag}
                  className="px-4 py-2 bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-full text-sm font-medium text-blue-300 border border-blue-800/50"
                >
                  {tag}
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <FaChevronDown className="text-white text-3xl animate-bounce" />
          </motion.div>
        </motion.section>

        {/* Services Section */}
        <section id="services" className="py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
          <div className="max-w-7xl mx-auto px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  Our Services
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
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

        {/* Features Section */}
        <section className="py-32 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
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

        {/* Scroll to Top Button */}
        <AnimatePresence>
          {isVisible && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
            >
              <FaArrowRight className="transform -rotate-90" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
      <Footer />
    </>
  );
};

export default Landing;