import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaBars, 
  FaTimes, 
  FaUser, 
  FaBook, 
  FaTachometerAlt, 
  FaTasks, 
  FaBell,
  FaCode,
  FaCog,
  FaSignOutAlt,
  FaGraduationCap
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// Import components
import NavItem from './NavItem';
import UserProfile from './UserProfile';
import ContentSection from './ContentSection';
import Dashboard from './Dashboard';
// import MyCourses from './MyCourses';
import Profile from './Profile';
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
          ease: "linear",
        }}
      />
    ))}
  </div>
);

const Sidebar = () => {
  // Initialize state with a default value
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedSection, setSelectedSection] = useState('dashboard');
  const [showNotifications, setShowNotifications] = useState(false);
  const [userData, setUserData] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);
  const [userError, setUserError] = useState('');
  const navigate = useNavigate();

  const navItems = [
    { 
      icon: FaTachometerAlt, 
      label: 'Dashboard', 
      id: 'dashboard',
      description: 'Overview of your progress'
    },

    { 
      icon: FaCode, 
      label: 'Playground', 
      id: 'playground',
      description: 'Practice coding in real-time'
    },
    { 
      icon: FaTasks, 
      label: 'Assignments', 
      id: 'assignments',
      description: 'View and submit assignments'
    },
    { 
      icon: FaUser, 
      label: 'Profile', 
      id: 'profile',
      description: 'Manage your account'
    }
  ];

  // Function to fetch user data
  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No authentication token found');
      }

      const response = await axios.get(`${authUrl}/auth/user`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setUserData(response.data);
      setLoadingUser(false);
    } catch (error) {
      console.error('Error fetching user data:', error);
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
        await axios.post(`${authUrl}/auth/logout`, {}, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
      }
      localStorage.removeItem('token');
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
      alert(error.response?.data?.message || 'Failed to logout. Please try again.');
    }
  };

  const renderContent = () => {
    switch (selectedSection) {
      case 'dashboard': return <Dashboard />;
      // case 'mycourse': return <MyCourses />;
      case 'profile': 
        if (loadingUser) return <div className="text-white">Loading...</div>;
        if (userError) return <div className="text-red-500">{userError}</div>;
        return <Profile userData={userData} />;
      case 'assignments': return <Assignments />;
      case 'playground': return <Playground />;
      default: return <div className="text-white">Select a section</div>;
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
        {/* Glassmorphism effect */}
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
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-75 animate-pulse" />
                  <div className="relative">
                    <FaGraduationCap className="text-blue-400 text-2xl" />
                  </div>
                </div>
                <span className="text-white font-semibold text-lg">USCL</span>
              </motion.div>
            )}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all duration-300"
            >
              {sidebarOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
            </motion.button>
          </div>

          {/* User Profile */}
          <div className="mb-8">
            <motion.div
              className="p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10"
              whileHover={{ scale: 1.02 }}
            >
              <UserProfile 
                user={userData} 
                showDetails={sidebarOpen} 
                loading={loadingUser} 
                error={userError}
              />
            </motion.div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2">
            {navItems.map((item) => (
              <motion.div
                key={item.id}
                initial={false}
                animate={{ x: 0 }}
                whileHover={{ x: 4 }}
              >
                <NavItem
                  icon={item.icon}
                  label={item.label}
                  description={item.description}
                  isActive={selectedSection === item.id}
                  onClick={() => setSelectedSection(item.id)}
                  showLabel={sidebarOpen}
                />
              </motion.div>
            ))}
          </nav>

          {/* Footer Actions */}
          <div className="border-t border-white/10 pt-4 space-y-2">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowNotifications(!showNotifications)}
              className={`w-full relative group ${
                showNotifications ? 'bg-blue-500/20 text-blue-400' : 'text-gray-400 hover:text-white'
              }`}
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center p-3 rounded-xl transition-colors duration-300">
                <FaBell size={16} />
                {sidebarOpen && <span className="ml-3">Notifications</span>}
              </div>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full relative group text-gray-400 hover:text-white"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center p-3 rounded-xl transition-colors duration-300">
                <FaCog size={16} />
                {sidebarOpen && <span className="ml-3">Settings</span>}
              </div>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleLogout}
              className="w-full relative group text-gray-400 hover:text-red-400"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-red-600/20 to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center p-3 rounded-xl transition-colors duration-300">
                <FaSignOutAlt size={16} />
                {sidebarOpen && <span className="ml-3">Logout</span>}
              </div>
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black opacity-50" />
        <div className="relative z-10 p-4 md:p-6 lg:p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ContentSection 
              title={navItems.find(item => item.id === selectedSection)?.label || 'Dashboard'}
              description={navItems.find(item => item.id === selectedSection)?.description}
            >
              {renderContent()}
            </ContentSection>
          </motion.div>
        </div>
      </div>

      {/* Notifications Panel */}
      <AnimatePresence>
        {showNotifications && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
              onClick={() => setShowNotifications(false)}
            />
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="fixed right-0 top-0 h-full w-80 bg-gray-900/95 backdrop-blur-xl border-l border-white/10 p-6 z-50"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-white">Notifications</h2>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setShowNotifications(false)}
                  className="p-2 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-all duration-300"
                >
                  <FaTimes size={16} />
                </motion.button>
              </div>
              <div className="text-white">
                <p>No new notifications</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Sidebar;