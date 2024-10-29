import React from 'react';
import { motion } from "framer-motion";

const FloatingIconsBackground = () => {
  const icons = [
    "/api/placeholder/128/128", // Icon 1 placeholder
    "/api/placeholder/128/128", // Icon 2 placeholder
    "/api/placeholder/128/128", // Icon 3 placeholder
    "/api/placeholder/128/128", // Icon 4 placeholder
    "/api/placeholder/128/128", // Icon 5 placeholder
    "/api/placeholder/128/128", // Icon 6 placeholder
    "/api/placeholder/128/128", // Icon 7 placeholder
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          className="absolute"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0.3,
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
            rotate: [0, 180, 360],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <img
            src={icon}
            alt={`Tech Icon ${index + 1}`}
            className="w-16 h-16 opacity-20 blur-[1px]"
          />
        </motion.div>
      ))}
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-black opacity-90" />
    </div>
  );
};

export default FloatingIconsBackground;