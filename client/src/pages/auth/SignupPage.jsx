// src/pages/SignupPage.jsx

import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import {
  FaEnvelope,
  FaLock,
  FaPhone,
  FaUser,
  FaGithub,
  FaGoogle,
  FaLinkedin,
  FaTwitter,
  FaArrowRight
} from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import authUrl from '../../api/authURL';

// Optimized input field with React.memo
const InputField = React.memo(({ icon: Icon, name, value, onChange, placeholder, type, error }) => (
  <div className="space-y-1.5">
    <div className="relative group">
      <Icon className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400 text-base sm:text-lg group-hover:text-blue-400 transition-colors duration-300" />
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={type === 'password' ? 'new-password' : 'on'}
        className="w-full px-4 py-2.5 sm:py-3 pl-10 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white transition-all duration-300 placeholder-gray-400 text-sm sm:text-base hover:bg-white/10"
      />
    </div>
    {error && (
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xs text-red-400 pl-2"
      >
        {error}
      </motion.p>
    )}
  </div>
));

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [apiMessage, setApiMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear errors when user starts typing
    setErrors(prev => ({ ...prev, [name]: '' }));
    setApiMessage('');
  }, []);

  const validateForm = useCallback(() => {
    const newErrors = {};
    const { name, email, phone, password } = formData;

    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid';
    if (!phone) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(phone.replace(/\D/g, ''))) newErrors.phone = 'Phone number must be 10 digits';
    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 8) newErrors.password = 'Password must be at least 8 characters';
    else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
      newErrors.password = 'Password must contain uppercase, lowercase, and numbers';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setApiMessage('');

    if (validateForm()) {
      setIsLoading(true);
      try {
        const response = await axios.post(`${authUrl}/register`, formData);
        // Show success message before redirecting
        setApiMessage(response.data.message || 'Registration successful. Check your email for OTP.');
        setTimeout(() => {
          navigate('/verify-otp', { state: { email: formData.email } });
        }, 2000);
      } catch (error) {
        setApiMessage(error.response?.data?.message || 'Registration failed. Please try again.');
      } finally {
        setIsLoading(false);
      }
    }
  }, [formData, validateForm, navigate]);

  const inputFields = [
    { icon: FaUser, type: 'text', name: 'name', placeholder: 'Full Name' },
    { icon: FaEnvelope, type: 'email', name: 'email', placeholder: 'Email Address' },
    { icon: FaPhone, type: 'tel', name: 'phone', placeholder: 'Phone Number' },
    { icon: FaLock, type: 'password', name: 'password', placeholder: 'Password' }
  ];

  return (
    <div className="min-h-screen relative bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-blue-900 to-black overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* ... background animations ... */}
      </div>

      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      <div className="relative min-h-screen flex flex-col justify-center items-center px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md space-y-8"
        >
          {/* Header */}
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.8 }}
              className="inline-block mb-4"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-75"></div>
                <div className="relative px-4 sm:px-6 py-2 sm:py-3 bg-black rounded-lg">
                  <span className="text-blue-200 text-xs sm:text-sm font-medium">Join USCL Community</span>
                </div>
              </div>
            </motion.div>
            <h1 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 mb-2">
              Create Account
            </h1>
            <p className="text-gray-400 text-sm sm:text-base">Start your journey with us today</p>
          </div>

          {/* Main Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="backdrop-blur-xl bg-white/10 rounded-2xl shadow-2xl border border-white/10 p-6 sm:p-8"
          >
            {/* Social Login */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
              <motion.a
                href={`${authUrl}/google`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center px-3 sm:px-4 py-2 sm:py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white text-sm sm:text-base transition-all duration-300"
              >
                <FaGoogle className="mr-2" />
                Google
              </motion.a>
              <motion.a
                href={`${authUrl}/github`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center px-3 sm:px-4 py-2 sm:py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white text-sm sm:text-base transition-all duration-300"
              >
                <FaGithub className="mr-2" />
                GitHub
              </motion.a>
            </div>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-xs sm:text-sm">
                <span className="px-2 bg-transparent text-gray-400">or continue with</span>
              </div>
            </div>

            {/* Signup Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {inputFields.map(field => (
                <InputField
                  key={field.name}
                  icon={field.icon}
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  error={errors[field.name]}
                />
              ))}

              {apiMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-3 rounded-lg ${
                    apiMessage.includes('successful') ? 'bg-green-500/10 border border-green-500/20 text-green-400' : 'bg-red-500/10 border border-red-500/20 text-red-400'
                  } text-xs sm:text-sm`}
                >
                  {apiMessage}
                </motion.div>
              )}

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                disabled={isLoading}
                className={`w-full py-2.5 sm:py-3 px-4 flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all duration-300 text-sm sm:text-base ${
                  isLoading ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                <span>Create Account</span>
                {isLoading ? (
                  <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <FaArrowRight className="text-sm sm:text-base" />
                )}
              </motion.button>
            </form>

            <div className="mt-4 text-center text-sm sm:text-base text-gray-300">
              Already have an account?{' '}
              <Link
                to="/login"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-300 font-medium"
              >
                Sign in
              </Link>
            </div>
          </motion.div>

          {/* Footer */}
          <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 text-center"
          >
            <p className="text-gray-400 text-sm sm:text-base mb-4">Connect with us</p>
            <div className="flex justify-center space-x-6">
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
                  <social.icon className="text-lg sm:text-xl" />
                </motion.a>
              ))}
            </div>
            <p className="mt-6 sm:mt-8 text-gray-500 text-xs sm:text-sm">
              &copy; 2024 USCL. All rights reserved.
            </p>
          </motion.footer>
        </motion.div>
      </div>
    </div>
  );
};

export default SignupPage;
