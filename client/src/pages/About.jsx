import React from 'react';
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaCode, 
  FaLightbulb, 
  FaUsers, 
  FaEnvelope,
  FaArrowRight 
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        duration: 0.8, 
        staggerChildren: 0.2 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const Section = ({ icon: Icon, title, children, className = "" }) => (
    <motion.section
      variants={itemVariants}
      whileHover={{ scale: 1.02 }}
      className={`relative overflow-hidden p-8 rounded-2xl backdrop-blur-lg bg-gradient-to-br from-gray-900/90 to-gray-800/90 border border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-500 ${className}`}
    >
      {/* Decorative gradient blob */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
      
      <div className="relative">
        <div className="flex items-center space-x-4 mb-6">
          <div className="p-3 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-lg">
            <Icon className="text-2xl text-white" />
          </div>
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </motion.section>
  );

  return (
    <div className="min-h-screen relative overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-blue-900 to-black">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] -top-48 -left-48 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute w-[500px] h-[500px] -top-48 -right-48 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute w-[500px] h-[500px] bottom-48 left-48 bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]"></div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10 container mx-auto px-4 py-24 max-w-5xl"
      >
        <motion.div 
          variants={itemVariants}
          className="text-center mb-20"
        >
          <div className="inline-block mb-4">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-75"></div>
              <div className="relative px-6 py-3 bg-black rounded-lg leading-none">
                <span className="text-blue-200 text-sm font-medium">Welcome to USCL</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 animate-gradient">
              About Us
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Empowering the next generation through innovative education in programming and technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Section icon={FaCode} title="Who We Are">
            <p className="text-gray-300 leading-relaxed">
              We are a passionate team of educators and developers, dedicated to providing quality education in programming, 
              ethical hacking, and web development. Our goal is to create a space for students to learn and grow through 
              real-world projects and problem-solving.
            </p>
            <motion.button
              whileHover={{ x: 5 }}
              className="mt-6 flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              Learn more about our team <FaArrowRight className="ml-2" />
            </motion.button>
          </Section>

          <Section icon={FaLightbulb} title="Our Mission">
            <p className="text-gray-300 leading-relaxed">
              To empower the next generation of tech leaders by providing them with the tools and knowledge they need 
              to succeed in the ever-evolving field of technology.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {['Innovation', 'Education', 'Growth'].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm border border-blue-500/20">
                  {tag}
                </span>
              ))}
            </div>
          </Section>

          <Section icon={FaUsers} title="Our Values" className="md:col-span-2">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Innovation',
                  description: 'Constantly evolving our methods to stay ahead in the tech world.'
                },
                {
                  title: 'Accessibility',
                  description: 'Ensuring education is available to everyone, everywhere.'
                },
                {
                  title: 'Community',
                  description: 'Fostering a supportive environment for learners to collaborate and grow.'
                }
              ].map((value, index) => (
                <div key={index} className="p-6 bg-gradient-to-br from-blue-900/40 to-purple-900/40 rounded-xl border border-gray-700/50">
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section icon={FaEnvelope} title="Contact Us" className="md:col-span-2">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <p className="text-gray-300">
                  Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
                <a 
                  href="mailto:info@uscl.com" 
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <FaEnvelope className="mr-2" />
                  Contact Us
                </a>
              </div>
              <div className="p-6 bg-gradient-to-br from-blue-900/40 to-purple-900/40 rounded-xl border border-gray-700/50">
                <p className="text-lg font-semibold text-white mb-2">Contact Information</p>
                <p className="text-gray-300">Email: info@uscl.com</p>
                <p className="text-gray-300">Phone: +1 (555) 123-4567</p>
                <p className="text-gray-300">Location: New York, NY</p>
              </div>
            </div>
          </Section>
        </div>

        <motion.footer 
          variants={itemVariants}
          className="text-center"
        >
          <p className="text-gray-400 mb-6 text-lg">Connect with us</p>
          <div className="flex justify-center space-x-6">
            {[
              { icon: FaGithub, href: '#', label: 'GitHub', color: 'hover:text-purple-400' },
              { icon: FaLinkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-400' },
              { icon: FaTwitter, href: '#', label: 'Twitter', color: 'hover:text-blue-400' }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                aria-label={social.label}
                whileHover={{ scale: 1.2, rotate: 5 }}
                className={`transform transition-colors duration-300`}
              >
                <social.icon className={`text-3xl text-gray-400 ${social.color}`} />
              </motion.a>
            ))}
          </div>
        </motion.footer>
      </motion.div>
    </div>
  );
};

export default About;