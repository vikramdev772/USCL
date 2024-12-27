import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaBook, 
  FaVideo, 
  FaCode, 
  FaDownload, 
  FaExternalLinkAlt,
  FaGithub,
  FaYoutube,
  FaFile,
  FaLightbulb,
  FaRocket
} from 'react-icons/fa';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const GlassCard = ({ children, className = "" }) => (
  <div className={`relative backdrop-blur-xl bg-white/[0.02] border border-white/[0.05] rounded-2xl ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-50 rounded-2xl" />
    <div className="relative">{children}</div>
  </div>
);

const IconWrapper = ({ children, className = "" }) => (
  <div className={`relative group ${className}`}>
    <div className="absolute inset-0 bg-blue-400/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-all duration-300" />
    <div className="relative bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/5 rounded-xl p-3">
      {children}
    </div>
  </div>
);

const Resources = () => {
  const categories = [
    {
      title: "Learning Paths",
      description: "Structured learning paths for different skill levels",
      icon: FaRocket,
      resources: [
        {
          title: "Web Development Fundamentals",
          type: "Course Material",
          description: "Complete guide to HTML, CSS, and JavaScript basics",
          link: "#",
          icon: FaBook
        },
        {
          title: "Advanced Programming Concepts",
          type: "Video Series",
          description: "Deep dive into data structures and algorithms",
          link: "#",
          icon: FaVideo
        }
      ]
    },
    {
      title: "Practice Materials",
      description: "Hands-on exercises and coding challenges",
      icon: FaCode,
      resources: [
        {
          title: "Coding Challenges Collection",
          type: "Practice Set",
          description: "100+ programming challenges with solutions",
          link: "#",
          icon: FaGithub
        },
        {
          title: "Project-based Learning",
          type: "Projects",
          description: "Real-world project tutorials and guides",
          link: "#",
          icon: FaLightbulb
        }
      ]
    }
  ];

  const downloadableResources = [
    {
      title: "Data Structures Cheat Sheet",
      format: "PDF",
      size: "2.5 MB",
      icon: FaFile
    },
    {
      title: "Algorithm Complexity Guide",
      format: "PDF",
      size: "1.8 MB",
      icon: FaFile
    },
    {
      title: "Design Patterns Reference",
      format: "PDF",
      size: "3.2 MB",
      icon: FaFile
    }
  ];

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Enhanced Background Elements */}
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-repeat opacity-20" />
      <div className="fixed inset-0 bg-gradient-to-br from-blue-950/50 via-transparent to-purple-950/50" />
      <div className="fixed inset-0 backdrop-blur-[120px]" />

      <div className="relative container mx-auto px-4 py-24">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <GlassCard className="inline-block px-6 py-2 mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text text-sm font-semibold">
              LEARNING RESOURCES
            </span>
          </GlassCard>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 text-transparent bg-clip-text">
            Resources & Learning Materials
          </h1>
          <p className="text-lg text-gray-400/90 max-w-2xl mx-auto">
            Access comprehensive learning materials, practice resources, and downloadable content to enhance your programming journey
          </p>
        </motion.div>

        {/* Enhanced Resource Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="h-full p-6 hover:bg-white/[0.03] transition-colors duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <IconWrapper>
                    <category.icon size={24} className="text-blue-400" />
                  </IconWrapper>
                  <div>
                    <h2 className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                      {category.title}
                    </h2>
                    <p className="text-gray-400/90 text-sm">{category.description}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {category.resources.map((resource, idx) => (
                    <motion.a
                      key={idx}
                      href={resource.link}
                      whileHover={{ x: 5 }}
                      className="block group"
                    >
                      <GlassCard className="p-4 hover:bg-white/[0.03] transition-all duration-300">
                        <div className="flex items-start gap-4">
                          <IconWrapper className="shrink-0">
                            <resource.icon size={20} className="text-blue-400" />
                          </IconWrapper>
                          <div>
                            <h3 className="font-semibold text-white/90 group-hover:text-white transition-colors duration-300 mb-1">
                              {resource.title}
                            </h3>
                            <p className="text-sm text-gray-400/90">{resource.description}</p>
                            <span className="inline-flex items-center mt-2 text-xs text-blue-400">
                              {resource.type}
                              <FaExternalLinkAlt className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </span>
                          </div>
                        </div>
                      </GlassCard>
                    </motion.a>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Downloadable Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <GlassCard className="p-6">
            <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              Downloadable Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {downloadableResources.map((resource, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full group"
                >
                  <GlassCard className="p-4 hover:bg-white/[0.03] transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <IconWrapper className="shrink-0">
                        <resource.icon size={20} className="text-blue-400" />
                      </IconWrapper>
                      <div className="flex-grow text-left">
                        <h3 className="font-semibold text-white/90 group-hover:text-white transition-colors duration-300">
                          {resource.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-gray-400/90">{resource.format}</span>
                          <span className="text-xs text-gray-400/90">•</span>
                          <span className="text-xs text-gray-400/90">{resource.size}</span>
                        </div>
                      </div>
                      <IconWrapper className="shrink-0">
                        <FaDownload className="text-blue-400 transform group-hover:scale-110 transition-transform duration-300" />
                      </IconWrapper>
                    </div>
                  </GlassCard>
                </motion.button>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Resources;