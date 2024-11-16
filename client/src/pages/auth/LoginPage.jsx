import React, { useState } from 'react';
import {
  FaEnvelope,
  FaLock,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaArrowRight,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import authUrl from '../../api/authURL';

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

const InputField = ({ icon: Icon, type, value, onChange, placeholder, error }) => (
  <div className="space-y-1.5">
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 blur-lg" />
      <GlassCard className="relative">
        <div className="flex items-center">
          <Icon className="absolute left-3 text-gray-400 text-lg group-hover:text-blue-400 transition-colors duration-300" />
          <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full px-4 py-3.5 pl-10 bg-transparent border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white placeholder-gray-400/75 text-base"
          />
        </div>
      </GlassCard>
    </div>
    {error && (
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xs text-red-400/90 pl-2"
      >
        {error}
      </motion.p>
    )}
  </div>
);

const FloatingParticles = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none">
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 bg-white/5 rounded-full"
        initial={{
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        }}
        animate={{
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.3, 0.1],
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
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError('');

    if (validateForm()) {
      setIsLoading(true);
      try {
        const response = await axios.post(`${authUrl}/login`, {
          email,
          password,
        });
        localStorage.setItem('token', response.data.token);
        navigate('/main');
      } catch (error) {
        setApiError(
          error.response?.data?.message || 'Login failed. Please try again.'
        );
      } finally {
        setIsLoading(false);
      }
    }
  };

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
      
      <FloatingParticles />

      <div className="relative min-h-screen flex flex-col justify-center items-center px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md space-y-8"
        >
          {/* Enhanced Header */}
          <div className="text-center">
            <GlassCard className="inline-block px-6 py-2 mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text text-sm font-semibold">
                Welcome Back to USCL
              </span>
            </GlassCard>
            
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 mb-3">
              Sign In
            </h1>
            <p className="text-gray-400/90 text-base">
              Access your coding sanctuary
            </p>
          </div>

          {/* Enhanced Main Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <GlassCard className="p-8 sm:p-10">
              {/* Login Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <InputField
                  icon={FaEnvelope}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  error={errors.email}
                />

                <InputField
                  icon={FaLock}
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  error={errors.password}
                />

                {apiError && (
                  <GlassCard className="p-4 border-red-500/20">
                    <p className="text-red-400/90 text-sm">{apiError}</p>
                  </GlassCard>
                )}

                <div className="flex items-center justify-between text-sm">
                  <Link
                    to="/forgot-password"
                    className="text-blue-400/90 hover:text-blue-400 transition-colors duration-300 hover:underline"
                  >
                    Forgot password?
                  </Link>
                  <Link
                    to="/signup"
                    className="text-purple-400/90 hover:text-purple-400 transition-colors duration-300 hover:underline"
                  >
                    Create account
                  </Link>
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 px-4 flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600/90 to-purple-600/90 hover:from-blue-600 hover:to-purple-600 text-white rounded-xl transition-all duration-300 text-base font-medium backdrop-blur-xl border border-white/5 disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  <span>Sign In</span>
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  )}
                </motion.button>
              </form>
            </GlassCard>
          </motion.div>

          {/* Enhanced Footer */}
          {/* <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <p className="text-gray-400/90 text-base mb-4">Connect with us</p>
            <div className="flex justify-center space-x-6">
              {[
                { icon: FaGithub, href: '#', color: 'hover:text-purple-400' },
                { icon: FaLinkedin, href: '#', color: 'hover:text-blue-400' },
                { icon: FaTwitter, href: '#', color: 'hover:text-blue-400' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <IconWrapper>
                    <social.icon className={`text-xl text-gray-400 ${social.color}`} />
                  </IconWrapper>
                </motion.a>
              ))}
            </div>
            <p className="mt-8 text-gray-500/90 text-sm">
              &copy; 2024 USCL. All rights reserved.
            </p>
          </motion.footer> */}
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;