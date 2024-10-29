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
    <div className="min-h-screen bg-[#0A0F1C] text-white">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-blue-500/10" />

      <div className="relative container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-semibold mb-6">
            LEARNING RESOURCES
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 text-transparent bg-clip-text">
            Resources & Learning Materials
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Access comprehensive learning materials, practice resources, and downloadable content to enhance your programming journey
          </p>
        </motion.div>

        {/* Resource Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400">
                  <category.icon size={24} />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">{category.title}</h2>
                  <p className="text-gray-400 text-sm">{category.description}</p>
                </div>
              </div>

              <div className="space-y-4">
                {category.resources.map((resource, idx) => (
                  <motion.a
                    key={idx}
                    href={resource.link}
                    whileHover={{ x: 5 }}
                    className="block p-4 bg-gray-900/50 rounded-xl hover:bg-gray-900/80 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400">
                        <resource.icon size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-1">{resource.title}</h3>
                        <p className="text-sm text-gray-400">{resource.description}</p>
                        <span className="inline-block mt-2 text-xs text-blue-400">
                          {resource.type} <FaExternalLinkAlt className="inline ml-1" />
                        </span>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Downloadable Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50"
        >
          <h2 className="text-2xl font-semibold mb-6">Downloadable Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {downloadableResources.map((resource, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="p-4 bg-gray-900/50 rounded-xl hover:bg-gray-900/80 transition-colors text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400">
                    <resource.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{resource.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-gray-400">{resource.format}</span>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-400">{resource.size}</span>
                    </div>
                  </div>
                  <FaDownload className="ml-auto text-blue-400" />
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Resources;