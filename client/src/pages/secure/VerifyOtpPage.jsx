import React, { useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { FaGithub, FaLinkedin, FaTwitter, FaKey, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import authUrl from '../../api/authURL';

// Enhanced Input Field Component
const InputField = ({ icon: Icon, type, value, onChange, placeholder, error }) => (
  <div className="space-y-1.5">
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur"></div>
      <div className="relative">
        <Icon className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400 text-base sm:text-lg group-hover:text-blue-400 transition-colors duration-300" />
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
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
);

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

const VerifyOtpPage = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [errors, setErrors] = useState({});
  const [apiMessage, setApiMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Fetch email from localStorage or navigate to signup if not present
  useEffect(() => {
    const storedEmail = localStorage.getItem('emailForVerification');
    if (storedEmail) {
      setEmail(storedEmail);
    } else {
      navigate('/signup');
    }
  }, [navigate]);

  const handleChange = useCallback((e) => {
    setOtp(e.target.value);
    setErrors({});
    setApiMessage('');
  }, []);

  const validateForm = useCallback(() => {
    const newErrors = {};
    if (!otp.trim()) newErrors.otp = 'OTP is required';
    else if (!/^\d{6}$/.test(otp.trim())) newErrors.otp = 'OTP must be 6 digits';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [otp]);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setApiMessage('');

      if (validateForm()) {
        setIsLoading(true);
        try {
          const response = await axios.post(`${authUrl}/verify-otp`, { email, otp });
          setApiMessage('Account verified successfully. Redirecting to login...');
          setTimeout(() => {
            localStorage.removeItem('emailForVerification');
            navigate('/login');
          }, 2000);
        } catch (error) {
          setApiMessage(error.response?.data?.message || 'OTP verification failed. Please try again.');
        } finally {
          setIsLoading(false);
        }
      }
    },
    [email, otp, navigate, validateForm]
  );

  const handleResendOtp = useCallback(async () => {
    setApiMessage('Resending OTP...');
    setIsLoading(true);
    try {
      const response = await axios.post(`${authUrl}/resend-otp`, { email });
      setApiMessage(response.data.message || 'OTP resent successfully.');
    } catch (error) {
      setApiMessage(error.response?.data?.message || 'Failed to resend OTP. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  }, [email]);

  return (
    <div className="min-h-screen relative bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-blue-900 to-black overflow-hidden">
      <FloatingParticles />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>

      <div className="relative min-h-screen flex flex-col justify-center items-center px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md space-y-8"
        >
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
                  <span className="text-blue-200 text-sm sm:text-base font-medium">Verify Your Account</span>
                </div>
              </div>
            </motion.div>
            <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 mb-3">
              Enter OTP
            </h1>
            <p className="text-gray-400 text-sm sm:text-base">
              We've sent a 6-digit OTP to your email:<br/>
              <span className="text-white font-medium">{email}</span>
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-md opacity-25"></div>
            
            <div className="relative backdrop-blur-xl bg-black/40 rounded-2xl shadow-2xl border border-white/10 p-8 sm:p-10">
              <form onSubmit={handleSubmit} className="space-y-5">
                <InputField
                  icon={FaKey}
                  type="text"
                  value={otp}
                  onChange={handleChange}
                  placeholder="Enter 6-digit OTP"
                  error={errors.otp}
                />

                {apiMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg ${
                      apiMessage.includes('successfully')
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
                  <span>Verify Account</span>
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <FaArrowRight className="text-sm sm:text-base" />
                  )}
                </motion.button>
              </form>

              <div className="mt-6 text-center text-sm sm:text-base text-gray-300">
                Didn't receive the OTP?{' '}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleResendOtp}
                  disabled={isLoading}
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-300 font-medium hover:underline"
                >
                  Resend OTP
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default VerifyOtpPage;
