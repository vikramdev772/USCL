import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail,
  ChevronRight,
  MapPin,
  Phone,
  Send
} from "lucide-react";
import { Link } from 'react-router-dom';

const GlassCard = ({ children, className = "" }) => (
  <div className={`relative backdrop-blur-xl bg-white/[0.02] border border-white/[0.05] rounded-xl ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-50 rounded-xl" />
    <div className="relative">{children}</div>
  </div>
);

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900/95 via-gray-900/95 to-black/95 text-gray-300 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_-20%,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px] backdrop-blur-3xl"></div>

      <div className="relative">
        {/* Newsletter Section */}
        <div className="border-b border-white/5">
          <div className="container mx-auto px-6 py-12">
            <div className="relative max-w-2xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <GlassCard className="inline-block px-6 py-2 mb-4">
                  <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                    Stay Updated
                  </h3>
                </GlassCard>
                <p className="text-gray-400/90">
                  Subscribe to our newsletter for the latest updates and exclusive offers
                </p>
                <form onSubmit={handleSubscribe} className="mt-6 flex max-w-md mx-auto">
                  <div className="relative flex-grow">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent placeholder-gray-500 backdrop-blur-xl"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600/90 to-purple-600/90 text-white rounded-r-lg hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 flex items-center backdrop-blur-xl"
                  >
                    <Send size={18} className="mr-2" />
                    Subscribe
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <GlassCard className="inline-block px-4 py-2">
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  BilvaLabs
                </h3>
              </GlassCard>
              <p className="text-gray-400/90 leading-relaxed">
                Empowering the future through innovative technology solutions and exceptional service since 2020.
              </p>
              <div className="flex space-x-4 pt-4">
                <motion.a 
                  href="https://www.facebook.com/profile.php?id=61567854182486" 
                  whileHover={{ scale: 1.1, rotate: 5 }} 
                  className="p-2 rounded-lg bg-white/5 hover:bg-blue-400/10 text-gray-400 hover:text-blue-400 transition-all duration-300 backdrop-blur-xl"
                >
                  <Facebook size={20} />
                </motion.a>
                <motion.a 
                  href="https://x.com/uscl_tech" 
                  whileHover={{ scale: 1.1, rotate: 5 }} 
                  className="p-2 rounded-lg bg-white/5 hover:bg-blue-400/10 text-gray-400 hover:text-blue-400 transition-all duration-300 backdrop-blur-xl"
                >
                  <Twitter size={20} />
                </motion.a>
                <motion.a 
                  href="https://www.instagram.com/uscl.tech/" 
                  whileHover={{ scale: 1.1, rotate: 5 }} 
                  className="p-2 rounded-lg bg-white/5 hover:bg-pink-400/10 text-gray-400 hover:text-pink-400 transition-all duration-300 backdrop-blur-xl"
                >
                  <Instagram size={20} />
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/in/bilva-uscl-725694337/" 
                  whileHover={{ scale: 1.1, rotate: 5 }} 
                  className="p-2 rounded-lg bg-white/5 hover:bg-blue-400/10 text-gray-400 hover:text-blue-400 transition-all duration-300 backdrop-blur-xl"
                >
                  <Linkedin size={20} />
                </motion.a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <GlassCard className="inline-block px-4 py-2">
                <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              </GlassCard>
              <ul className="space-y-2">
                {[
                  "About Us",
                  "Services",
                  "Projects",
                  "Blog",
                  "Careers",
                  "Contact"
                ].map((link, index) => (
                  <li key={index}>
                    <a href="#" className="group flex items-center text-gray-400/90 hover:text-white transition-all duration-200">
                      <ChevronRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-1" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <GlassCard className="inline-block px-4 py-2">
                <h4 className="text-lg font-semibold text-white">Contact</h4>
              </GlassCard>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3 group">
                  <div className="p-2 rounded-lg bg-white/5 text-blue-400 mt-1">
                    <MapPin size={20} />
                  </div>
                  <span className="text-gray-400/90 group-hover:text-white transition-colors duration-200">
                    Second Floor, BHUVANA TOWERS,<br />
                    Sarojini Devi Rd, Secunderabad, Telangana 500003.
                  </span>
                </li>
                <li className="flex items-center space-x-3 group">
                  <div className="p-2 rounded-lg bg-white/5 text-blue-400">
                    <Phone size={20} />
                  </div>
                  <span className="text-gray-400/90 group-hover:text-white transition-colors duration-200">8801886108</span>
                </li>
                <li className="flex items-center space-x-3 group">
                  <div className="p-2 rounded-lg bg-white/5 text-blue-400">
                    <Mail size={20} />
                  </div>
                  <span className="text-gray-400/90 group-hover:text-white transition-colors duration-200">info@uscl.tech</span>
                </li>
              </ul>
            </motion.div>

            {/* Latest Updates */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <GlassCard className="inline-block px-4 py-2">
                <h4 className="text-lg font-semibold text-white">Latest Updates</h4>
              </GlassCard>
              <div className="space-y-4">
                <GlassCard className="p-4 group cursor-pointer hover:bg-white/[0.04] transition-all duration-300">
                  <h5 className="text-white group-hover:text-blue-400 transition-colors duration-200">
                    Launching Courses Soon
                  </h5>
                </GlassCard>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/5 backdrop-blur-xl">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400/90 text-sm">
                &copy; 2024 BilvaLabs. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, index) => (
                  <Link
                    key={index}
                    to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-sm text-gray-400/90 hover:text-white transition-all duration-200 hover:underline decoration-blue-400/50"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;