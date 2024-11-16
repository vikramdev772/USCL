import React, { useState, useEffect } from "react";
import { 
  FaHome, 
  FaBook, 
  FaUser, 
  FaBars, 
  FaTimes, 
  FaUserFriends,
  FaCode,
  FaGraduationCap,
  FaSignInAlt,
  FaUserCircle
} from "react-icons/fa";
import { 
  HiOutlineAcademicCap,
  HiOutlineUserGroup,
  HiOutlineBookOpen 
} from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const GlassButton = ({ children, className = "", ...props }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`relative overflow-hidden group ${className}`}
    {...props}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
    <div className="relative">{children}</div>
  </motion.button>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { 
      path: "/about", 
      icon: HiOutlineUserGroup, 
      label: "About",
      description: "Learn about our mission" 
    },
    { 
      path: "/courses", 
      icon: HiOutlineAcademicCap, 
      label: "Courses",
      description: "Explore our programs" 
    },
    { 
      path: "/resources", 
      icon: HiOutlineBookOpen, 
      label: "Resources",
      description: "Learning materials" 
    },
    { 
      path: "/login", 
      icon: FaSignInAlt, 
      label: "Login",
      description: "Access your account" 
    },
  ];

  const menuVariants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeOut",
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  const itemVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3
      }
    },
    closed: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-gray-900/70 backdrop-blur-xl border-b border-white/5"
          : "bg-gradient-to-b from-gray-900/80 to-transparent backdrop-blur-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <Link 
              to="/" 
              className="flex items-center space-x-3 group"
            >
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/50 to-purple-600/50 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative p-2 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/5">
                  <FaCode className="text-blue-400 text-2xl" />
                </div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                USCL
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="flex items-center space-x-1 bg-white/[0.02] backdrop-blur-xl rounded-2xl p-1 border border-white/5">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = location.pathname === link.path;
                
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative group flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 
                      ${isActive 
                        ? "text-white bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-white/5" 
                        : "text-gray-300 hover:text-white hover:bg-white/[0.05]"
                      }`}
                  >
                    <Icon className={`text-xl ${isActive ? "text-blue-400" : "text-gray-400 group-hover:text-blue-400"}`} />
                    <span>{link.label}</span>
                    
                    {/* Enhanced Tooltip */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="absolute hidden group-hover:block bottom-full left-1/2 transform -translate-x-1/2 px-4 py-2 bg-gray-900/90 backdrop-blur-xl border border-white/5 text-white text-xs rounded-xl whitespace-nowrap mb-2"
                    >
                      {link.description}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 border-4 border-transparent border-t-gray-900/90"></div>
                    </motion.div>

                    {isActive && (
                      <motion.div
                        layoutId="navbar-active"
                        className="absolute bottom-0 left-0 right-0 mx-2 h-0.5 bg-gradient-to-r from-blue-500/50 to-purple-500/50 blur-sm"
                        animate
                      />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <GlassButton
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-xl bg-gradient-to-br from-blue-600/10 to-purple-600/10 text-blue-400 border border-white/5 backdrop-blur-sm"
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </GlassButton>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden overflow-hidden"
          >
            <div className="bg-gray-900/70 backdrop-blur-xl border-t border-white/5">
              <div className="px-4 py-4 space-y-2">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive = location.pathname === link.path;
                  
                  return (
                    <motion.div
                      key={link.path}
                      variants={itemVariants}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={`flex items-center space-x-3 w-full p-3 rounded-xl transition-all duration-300 backdrop-blur-sm border border-white/5
                          ${isActive 
                            ? "bg-gradient-to-br from-blue-600/20 to-purple-600/20 text-white" 
                            : "text-gray-300 hover:bg-white/[0.05] hover:text-white"
                          }`}
                      >
                        <div className={`p-2 rounded-lg ${isActive ? 'bg-blue-500/10' : 'bg-white/5'}`}>
                          <Icon className={`text-xl ${isActive ? "text-blue-400" : "text-gray-400"}`} />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-medium">{link.label}</span>
                          <span className="text-xs text-gray-500">{link.description}</span>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;