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
      whileHover={{ scale: 1.01 }}
      className={`group ${className}`}
    >
      <GlassCard className="p-8 hover:bg-white/[0.03] transition-all duration-300">
        <div className="flex items-center space-x-4 mb-6">
          <IconWrapper>
            <Icon className="text-2xl text-blue-400" />
          </IconWrapper>
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            {title}
          </h2>
        </div>
        {children}
      </GlassCard>
    </motion.section>
  );

  return (
    <div className="min-h-screen relative bg-gray-950 text-white">
      {/* Enhanced Background Elements */}
      <div className="fixed inset-0">
        <div className="absolute w-[800px] h-[800px] -top-96 -left-96 bg-blue-500/20 rounded-full mix-blend-normal filter blur-3xl animate-blob"></div>
        <div className="absolute w-[800px] h-[800px] -top-96 -right-96 bg-purple-500/20 rounded-full mix-blend-normal filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute w-[600px] h-[600px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500/10 rounded-full mix-blend-normal filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-repeat opacity-20" />
      <div className="fixed inset-0 backdrop-blur-[120px]" />

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
          <GlassCard className="inline-block px-6 py-2 mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text text-sm font-semibold">
              Welcome to USCL
            </span>
          </GlassCard>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 animate-gradient">
              About Us
            </span>
          </h1>
          <p className="text-xl text-gray-300/90 max-w-2xl mx-auto leading-relaxed">
            Empowering the next generation through innovative education in programming and technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Section icon={FaCode} title="Who We Are">
            <p className="text-gray-300/90 leading-relaxed">
              We are a passionate team of educators and developers, dedicated to providing quality education in programming, 
              ethical hacking, and web development. Our goal is to create a space for students to learn and grow through 
              real-world projects and problem-solving.
            </p>
            <motion.button
              whileHover={{ x: 5 }}
              className="mt-6 flex items-center text-blue-400 hover:text-blue-300 transition-colors group"
            >
              Learn more about our team 
              <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Section>

          <Section icon={FaLightbulb} title="Our Mission">
            <p className="text-gray-300/90 leading-relaxed">
              To empower the next generation of tech leaders by providing them with the tools and knowledge they need 
              to succeed in the ever-evolving field of technology.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {['Innovation', 'Education', 'Growth'].map((tag) => (
                <GlassCard key={tag} className="px-4 py-1">
                  <span className="text-blue-400/90 text-sm">
                    {tag}
                  </span>
                </GlassCard>
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
                <GlassCard key={index} className="p-6 hover:bg-white/[0.03] transition-all duration-300">
                  <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-300/90">{value.description}</p>
                </GlassCard>
              ))}
            </div>
          </Section>

          <Section icon={FaEnvelope} title="Contact Us" className="md:col-span-2">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <p className="text-gray-300/90">
                  Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
                <motion.a 
                  href="mailto:info@uscl.com" 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600/90 to-purple-600/90 text-white rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 backdrop-blur-sm border border-white/5"
                >
                  <FaEnvelope className="mr-2" />
                  Contact Us
                </motion.a>
              </div>
              <GlassCard className="p-6">
                <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
                  Contact Information
                </h3>
                <div className="space-y-2 text-gray-300/90">
                  <p>Email: info@uscl.com</p>
                  <p>Phone: +91 8801886108</p>
                  <p>Location: Second Floor, BHUVANA TOWERS,
                  Sarojini Devi Rd, Secunderabad, Telangana 500003.</p>
                </div>
              </GlassCard>
            </div>
          </Section>
        </div>

        <motion.footer 
          variants={itemVariants}
          className="text-center"
        >
          <p className="text-gray-400/90 mb-6 text-lg">Connect with us</p>
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
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <IconWrapper>
                  <social.icon className={`text-2xl text-gray-400 ${social.color}`} />
                </IconWrapper>
              </motion.a>
            ))}
          </div>
        </motion.footer>
      </motion.div>
    </div>
  );
};

export default About;