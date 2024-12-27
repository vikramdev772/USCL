import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaBars,
  FaTimes,
  FaUser,
  FaTachometerAlt,
  FaTasks,
  FaBell,
  FaCode,
  FaCog,
  FaSignOutAlt,
  FaGraduationCap,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// Import components
import NavItem from './NavItem';
import UserProfile from './UserProfile';
import ContentSection from './ContentSection';
import Dashboard from './Dashboard';
import Assignments from './Assignments';
import Playground from '../code/Playground';

// Import auth URL
import authUrl from '../api/authURL';

// Floating particles background component
const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
          ease: 'linear',
        }}
      />
    ))}
  </div>
);

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedSection, setSelectedSection] = useState('dashboard');
  const [showNotifications, setShowNotifications] = useState(false);
  const [userData, setUserData] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);
  const [userError, setUserError] = useState('');
  const navigate = useNavigate();

  const navItems = [
    { icon: FaTachometerAlt, label: 'Dashboard', id: 'dashboard', description: 'Overview of your progress' },
    { icon: FaCode, label: 'Playground', id: 'playground', description: 'Practice coding in real-time' },
    { icon: FaTasks, label: 'Assignments', id: 'assignments', description: 'View and submit assignments' },
    { icon: FaUser, label: 'Profile', id: 'profile', description: 'Manage your account' },
  ];

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('No authentication token found');

      const response = await axios.get(`${authUrl}/auth/user`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setUserData(response.data);
      setLoadingUser(false);
    } catch (error) {
      setUserError(error.response?.data?.message || 'Failed to fetch user data.');
      setLoadingUser(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        await axios.post(`${authUrl}/auth/logout`, {}, { headers: { Authorization: `Bearer ${token}` } });
      }
      localStorage.removeItem('token');
      navigate('/login');
    } catch (error) {
      alert(error.response?.data?.message || 'Failed to logout. Please try again.');
    }
  };

  const renderContent = () => {
    switch (selectedSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'profile':
        if (loadingUser) return <div className="text-white">Loading...</div>;
        if (userError) return <div className="text-red-500">{userError}</div>;
        return <UserProfile userData={userData} />;
      case 'assignments':
        return <Assignments />;
      case 'playground':
        return <Playground />;
      default:
        return <div className="text-white">Select a section</div>;
    }
  };

  return (
    <div className="min-h-screen flex bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-blue-900/20 to-black">
      <FloatingParticles />

      {/* Sidebar */}
      <motion.div
        initial={false}
        animate={{ width: sidebarOpen ? '280px' : '80px' }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="relative z-10"
      >
        <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-xl border-r border-white/10" />
        <div className="relative flex flex-col h-full p-4">
          {/* Logo and Toggle */}
          <div className="flex items-center justify-between mb-8">
            {sidebarOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center space-x-2"
              >
                <FaGraduationCap className="text-blue-400 text-2xl" />
                <span className="text-white font-semibold text-lg">USCL</span>
              </motion.div>
            )}
            <motion.button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all duration-300"
            >
              {sidebarOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
            </motion.button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2">
            {navItems.map((item) => (
              <NavItem
                key={item.id}
                icon={item.icon}
                label={item.label}
                description={item.description}
                isActive={selectedSection === item.id}
                onClick={() => setSelectedSection(item.id)}
                showLabel={sidebarOpen}
              />
            ))}
          </nav>

          {/* Logout Button */}
          <motion.button
            onClick={handleLogout}
            className="mt-auto p-3 w-full rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
          >
            <FaSignOutAlt size={16} className="mr-2 inline" />
            Logout
          </motion.button>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-6 lg:p-8">
        <ContentSection
          title={navItems.find((item) => item.id === selectedSection)?.label || 'Dashboard'}
          description={navItems.find((item) => item.id === selectedSection)?.description}
        >
          {renderContent()}
        </ContentSection>
      </div>
    </div>
  );
};

export default Sidebar;
