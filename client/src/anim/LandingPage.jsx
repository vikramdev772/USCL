import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaBrain, FaRobot, FaDatabase } from 'react-icons/fa';

const BackgroundIcon = ({ Icon, initialX, initialY }) => (
  <motion.div
    className="absolute text-blue-300 opacity-10"
    initial={{ x: initialX, y: initialY }}
    animate={{
      x: [initialX - 20, initialX + 20, initialX],
      y: [initialY - 20, initialY + 20, initialY],
    }}
    transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
  >
    <Icon size={40} />
  </motion.div>
);

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-slate-900 flex items-center justify-center relative overflow-hidden">
      {/* Background Icons */}
      <BackgroundIcon Icon={FaCode} initialX={100} initialY={100} />
      <BackgroundIcon Icon={FaLaptopCode} initialX={300} initialY={200} />
      <BackgroundIcon Icon={FaBrain} initialX={500} initialY={300} />
      <BackgroundIcon Icon={FaRobot} initialX={700} initialY={100} />
      <BackgroundIcon Icon={FaDatabase} initialX={200} initialY={400} />

      {/* Hero Section */}
      <motion.div
        className="text-center z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Empower Your Coding Journey
        </h1>
        <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
          Unlock your potential with our cutting-edge programming courses. Learn, build, and innovate with industry experts.
        </p>
        <motion.button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition duration-300 ease-in-out"
          whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)' }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Courses
        </motion.button>
      </motion.div>
    </div>
  );
};

export default LandingPage;