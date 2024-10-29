import React, { useState } from 'react';
import {
  FaEnvelope,
  FaLock,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaGoogle,
  FaArrowRight
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import authUrl from '../api/authURL';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [apiError, setApiError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: '', password: '' };

    if (!email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      try {
        const response = await axios.post(`${authUrl}/login`, {
          email,
          password,
        });
        console.log('Login successful:', response.data);
        navigate('/main');
      } catch (error) {
        console.error('Login error:', error.response?.data?.msg || error.message);
        setApiError(error.response?.data?.msg || 'Login failed. Please try again.');
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen relative bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-blue-900 to-black overflow-hidden">
      {/* Animated background elements - Adjusted for better mobile appearance */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[300px] md:w-[500px] h-[300px] md:h-[500px] -top-24 md:-top-48 -left-24 md:-left-48 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute w-[300px] md:w-[500px] h-[300px] md:h-[500px] -top-24 md:-top-48 -right-24 md:-right-48 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute w-[300px] md:w-[500px] h-[300px] md:h-[500px] bottom-24 md:bottom-48 left-24 md:left-48 bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      <div className="relative min-h-screen flex flex-col justify-center items-center px-4 py-8 md:p-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          {/* Logo and Title - Enhanced for mobile */}
          <div className="text-center mb-6 md:mb-8">
            <div className="inline-block mb-4">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-75"></div>
                <div className="relative px-4 md:px-6 py-2 md:py-3 bg-black rounded-lg leading-none">
                  <span className="text-blue-200 text-xs md:text-sm font-medium">Welcome Back to USCL</span>
                </div>
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 animate-gradient">
              Sign In
            </h1>
            <p className="mt-2 text-sm md:text-base text-gray-300">Access your coding sanctuary</p>
          </div>

          {/* Main Card - Improved padding for mobile */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="backdrop-blur-xl bg-white/10 rounded-2xl shadow-2xl border border-white/10 p-6 md:p-8"
          >
            {/* Social Login Buttons - Enhanced for mobile */}
            <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6">
              <button className="flex items-center justify-center px-3 md:px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white transition-all duration-300 text-sm md:text-base">
                <FaGoogle className="mr-2 text-sm md:text-base" />
                Google
              </button>
              <button className="flex items-center justify-center px-3 md:px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white transition-all duration-300 text-sm md:text-base">
                <FaGithub className="mr-2 text-sm md:text-base" />
                GitHub
              </button>
            </div>

            {/* Divider - Adjusted spacing */}
            <div className="relative my-5 md:my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-xs md:text-sm">
                <span className="px-2 bg-transparent text-gray-400">or continue with</span>
              </div>
            </div>

            {/* Form - Enhanced input fields and spacing */}
            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
              <div>
                <div className="relative group">
                  <FaEnvelope className="absolute top-3 left-3 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 text-sm md:text-base hover:bg-white/10"
                    placeholder="Email address"
                  />
                </div>
                {errors.email && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 text-xs md:text-sm text-red-400"
                  >
                    {errors.email}
                  </motion.p>
                )}
              </div>

              <div>
                <div className="relative group">
                  <FaLock className="absolute top-3 left-3 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 text-sm md:text-base hover:bg-white/10"
                    placeholder="Password"
                  />
                </div>
                {errors.password && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 text-xs md:text-sm text-red-400"
                  >
                    {errors.password}
                  </motion.p>
                )}
              </div>

              {apiError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs md:text-sm"
                >
                  {apiError}
                </motion.div>
              )}

              {/* Links - Improved spacing and hover effects */}
              <div className="flex items-center justify-between text-xs md:text-sm">
                <Link to="/forgot-password" className="text-blue-400 hover:text-blue-300 transition-colors hover:underline">
                  Forgot password?
                </Link>
                <Link to="/signup" className="text-purple-400 hover:text-purple-300 transition-colors hover:underline">
                  Create account
                </Link>
              </div>

              {/* Submit Button - Enhanced animation and states */}
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                disabled={isLoading}
                className={`w-full py-2.5 md:py-3 px-4 flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all duration-300 text-sm md:text-base ${
                  isLoading ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                <span>Sign In</span>
                {isLoading ? (
                  <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <FaArrowRight className="ml-2 text-sm md:text-base" />
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Footer - Adjusted for mobile */}
          <motion.footer 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 md:mt-8 text-center"
          >
            <p className="text-gray-400 mb-3 md:mb-4 text-sm">Connect with us</p>
            <div className="flex justify-center space-x-4 md:space-x-6">
              {[
                { icon: FaGithub, href: '#', color: 'hover:text-purple-400' },
                { icon: FaLinkedin, href: '#', color: 'hover:text-blue-400' },
                { icon: FaTwitter, href: '#', color: 'hover:text-blue-400' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className={`text-gray-400 ${social.color} transition-colors duration-300`}
                >
                  <social.icon className="text-lg md:text-xl" />
                </motion.a>
              ))}
            </div>
            <p className="mt-6 md:mt-8 text-gray-500 text-xs md:text-sm">
              &copy; 2024 USCL. All rights reserved.
            </p>
          </motion.footer>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;