// src/pages/VerifyOtpPage.jsx

import React, { useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { FaLock } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import authUrl from '../../api/authURL';

const VerifyOtpPage = () => {
  const [otp, setOtp] = useState('');
  const [errors, setErrors] = useState({});
  const [apiMessage, setApiMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  // Redirect to signup if email is not available
  useEffect(() => {
    if (!email) {
      navigate('/signup');
    }
  }, [email, navigate]);

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
          // Handle successful verification
          setApiMessage('Account verified successfully. Redirecting to login...');
          setTimeout(() => {
            navigate('/login');
          }, 2000);
        } catch (error) {
          console.error('OTP Verification Error:', error);
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
      console.error('Resend OTP Error:', error);
      const errorMessage = error.response?.data?.message || 'Failed to resend OTP. Please try again later.';
      setApiMessage(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, [email]);

  return (
    <div className="min-h-screen relative bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-black via-gray-900 to-gray-800 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        {/* ... Add any animated background elements if desired ... */}
      </div>

      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

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
              transition={{ type: 'spring', duration: 0.8 }}
              className="inline-block mb-4"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg blur opacity-75"></div>
                <div className="relative px-4 sm:px-6 py-2 sm:py-3 bg-black rounded-lg">
                  <span className="text-green-200 text-xs sm:text-sm font-medium">Verify Your Account</span>
                </div>
              </div>
            </motion.div>
            <h1 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-400 to-green-400 mb-2">
              Enter OTP
            </h1>
            <p className="text-gray-400 text-sm sm:text-base">
              We've sent a 6-digit OTP to your email: <span className="text-white">{email}</span>
            </p>
          </div>

          {/* Main Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="backdrop-blur-xl bg-white/10 rounded-2xl shadow-2xl border border-white/10 p-6 sm:p-8"
          >
            {/* OTP Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1.5">
                <div className="relative group">
                  <FaLock className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400 text-base sm:text-lg group-hover:text-green-400 transition-colors duration-300" />
                  <input
                    type="text"
                    name="otp"
                    value={otp}
                    onChange={handleChange}
                    placeholder="Enter 6-digit OTP"
                    className="w-full px-4 py-2.5 sm:py-3 pl-10 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-white transition-all duration-300 placeholder-gray-400 text-sm sm:text-base hover:bg-white/10"
                  />
                </div>
                {errors.otp && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs text-red-400 pl-2"
                  >
                    {errors.otp}
                  </motion.p>
                )}
              </div>

              {apiMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-3 rounded-lg ${
                    apiMessage.includes('successfully')
                      ? 'bg-green-500/10 border border-green-500/20 text-green-400'
                      : 'bg-red-500/10 border border-red-500/20 text-red-400'
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
                className={`w-full py-2.5 sm:py-3 px-4 flex items-center justify-center space-x-2 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white rounded-lg transition-all duration-300 text-sm sm:text-base ${
                  isLoading ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                <span>Verify Account</span>
                {isLoading ? (
                  <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <FaLock className="text-sm sm:text-base" />
                )}
              </motion.button>
            </form>

            <div className="mt-4 text-center text-sm sm:text-base text-gray-300">
              Didn't receive the OTP?{' '}
              <button
                onClick={handleResendOtp}
                disabled={isLoading}
                className="text-green-400 hover:text-green-300 transition-colors duration-300 font-medium"
              >
                Resend OTP
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default VerifyOtpPage;
