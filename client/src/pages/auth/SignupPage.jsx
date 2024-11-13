import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import {
  FaEnvelope,
  FaLock,
  FaPhone,
  FaUser,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaArrowRight
} from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import authUrl from '../../api/authURL';

// Enhanced Input Field Component
const InputField = React.memo(({ icon: Icon, name, value, onChange, placeholder, type, error }) => (
  <div className="space-y-1.5">
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur"></div>
      <div className="relative">
        <Icon className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400 text-base sm:text-lg group-hover:text-blue-400 transition-colors duration-300" />
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={type === 'password' ? 'new-password' : 'on'}
          className="w-full px-4 py-3 sm:py-3.5 pl-10 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white transition-all duration-300 placeholder-gray-400 text-sm sm:text-base hover:bg-white/10"
        />
      </div>
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

// Floating particles background component
const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 bg-white/10 rounded-full"
        initial={{
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        }}
        animate={{
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: Math.random() * 10 + 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    ))}
  </div>
);

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
      {/* Animated background */}
      <FloatingParticles />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>

      <div className="relative min-h-screen flex flex-col justify-center items-center px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md space-y-8"
        >
          {/* Enhanced Header */}
          <div className="text-center relative">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.8 }}
              className="inline-block mb-6"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-75 animate-pulse"></div>
                <div className="relative px-6 sm:px-8 py-3 sm:py-4 bg-black rounded-lg">
                  <span className="text-blue-200 text-sm sm:text-base font-medium">Join USCL Community</span>
                </div>
              </div>
            </motion.div>
            <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 mb-3">
              Create Account
            </h1>
            <p className="text-gray-400 text-sm sm:text-base">Start your journey with us today</p>
          </div>

          {/* Enhanced Main Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            {/* Glowing border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-md opacity-25"></div>
            
            <div className="relative backdrop-blur-xl bg-black/40 rounded-2xl shadow-2xl border border-white/10 p-8 sm:p-10">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 rounded-full blur-2xl"></div>

              {/* Decorative Divider */}
              <div className="relative mb-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10"></div>
                </div>
                <div className="relative flex justify-center">
                  <div className="px-4 bg-gradient-to-r from-transparent via-white/10 to-transparent">
                    <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Signup Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
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
                    className={`p-4 rounded-lg ${
                      apiMessage.includes('successful') 
                        ? 'bg-green-500/10 border border-green-500/20 text-green-400' 
                        : 'bg-red-500/10 border border-red-500/20 text-red-400'
                    } text-sm`}
                  >
                    {apiMessage}
                  </motion.div>
                )}

                <motion.button
                  whileHover={{ scale: 1.01, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-3 sm:py-4 px-4 flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all duration-300 text-sm sm:text-base font-medium ${
                    isLoading ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  <span>Create Account</span>
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <FaArrowRight className="text-sm sm:text-base" />
                  )}
                </motion.button>
              </form>

              <div className="mt-6 text-center text-sm sm:text-base text-gray-300">
                Already have an account?{' '}
                <Link
                  to="/login"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-300 font-medium hover:underline"
                >
                  Sign in
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Footer */}
          <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-400 text-sm sm:text-base mb-4">Connect with us</p>
            <div className="flex justify-center space-x-8">
              {[
                { icon: FaGithub, href: '#', color: 'hover:text-purple-400' },
                { icon: FaLinkedin, href: '#', color: 'hover:text-blue-400' },
                { icon: FaTwitter, href: '#', color: 'hover:text-blue-400' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`text-gray-400 ${social.color} transition-colors duration-300`}
                >
                  <social.icon className="text-xl sm:text-2xl" />
                </motion.a>
              ))}
            </div>
            <p className="mt-8 text-gray-500 text-xs sm:text-sm">
              &copy; 2024 USCL. All rights reserved.
            </p>
          </motion.footer>
        </motion.div>
      </div>
    </div>
  );
};

export default SignupPage;