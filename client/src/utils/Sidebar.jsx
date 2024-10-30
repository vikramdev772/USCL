// src/components/Sidebar.jsx

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
import { useNavigate } from 'react-router-dom'; // For navigation after logout
import axios from 'axios'; // For API calls

import NavItem from './NavItem';
import UserProfile from './UserProfile';
import ContentSection from './ContentSection';
import Dashboard from './Dashboard';
import MyCourses from './MyCourses';
import Profile from './Profile';
import Assignments from './Assignments';
import Playground from '../code/Playground';

// Assuming authUrl is defined to point to your backend API
import authUrl from '../api/authURL'; // Adjust the path as necessary

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedSection, setSelectedSection] = useState('dashboard');
  const [showNotifications, setShowNotifications] = useState(false);
  
  const [userData, setUserData] = useState(null); // Initialize as null
  const [loadingUser, setLoadingUser] = useState(true);
  const [userError, setUserError] = useState('');

  const navigate = useNavigate(); // For redirecting after logout

  const navItems = [
    { 
      icon: FaTachometerAlt, 
      label: 'Dashboard', 
      id: 'dashboard',
      description: 'Overview of your progress'
    },
    { 
      icon: FaBook, 
      label: 'My Courses', 
      id: 'mycourse',
      description: 'Access your enrolled courses'
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
      // Assuming you have a GET /auth/user endpoint that returns user data
      const token = localStorage.getItem('token'); // Or retrieve from your auth state
      if (!token) {
        throw new Error('No authentication token found');
      }

      const response = await axios.get(`${authUrl}/auth/user`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setUserData(response.data); // Adjust based on your API response structure
      setLoadingUser(false);
    } catch (error) {
      console.error('Error fetching user data:', error);
      setUserError(
        error.response?.data?.message || 'Failed to fetch user data.'
      );
      setLoadingUser(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token'); // Or retrieve from your auth state
      if (token) {
        // Optionally, call a logout endpoint on your backend
        await axios.post(`${authUrl}/auth/logout`, {}, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
      }

      // Clear authentication tokens or any auth-related state
      localStorage.removeItem('token');
      // If using context or other state management, reset it here

      // Redirect to login page
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
      // Optionally, display an error message to the user
      alert(
        error.response?.data?.message || 'Failed to logout. Please try again.'
      );
    }
  };

  const renderContent = () => {
    switch (selectedSection) {
      case 'dashboard': return <Dashboard />;
      case 'mycourse': return <MyCourses />;
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
    <div className="min-h-screen flex bg-[#0A0F1C]">
      {/* Sidebar */}
      <motion.div
        initial={false}
        animate={{ width: isSidebarOpen ? '280px' : '80px' }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="bg-gray-900/50 backdrop-blur-xl border-r border-gray-800/50 relative"
      >
        <div className="flex flex-col h-full p-4">
          {/* Logo and Toggle */}
          <div className="flex items-center justify-between mb-6"> {/* Increased margin-bottom */}
            {isSidebarOpen && (
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
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={isSidebarOpen ? 'Close sidebar' : 'Open sidebar'}
            >
              {isSidebarOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
            </button>
          </div>

          {/* User Profile */}
          <div className="mb-6"> {/* Increased margin-bottom for more gap */}
            <UserProfile 
              user={userData} 
              showDetails={isSidebarOpen} 
              loading={loadingUser} 
              error={userError} 
            />
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
                  showLabel={isSidebarOpen}
                />
              </motion.div>
            ))}
          </nav>

          {/* Footer Actions */}
          <div className="border-t border-gray-800/50 pt-4 space-y-2">
            {/* Notifications */}
            <motion.button
              whileHover={{ x: 4 }}
              onClick={() => setShowNotifications(!showNotifications)}
              className={`flex items-center w-full p-3 rounded-lg transition-colors ${
                showNotifications 
                  ? 'bg-blue-500/10 text-blue-400' 
                  : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
              }`}
              aria-label="Toggle Notifications"
            >
              <FaBell size={16} />
              {isSidebarOpen && (
                <span className="ml-3">Notifications</span>
              )}
            </motion.button>

            {/* Settings */}
            <motion.button
              whileHover={{ x: 4 }}
              className="flex items-center w-full p-3 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 transition-colors"
              aria-label="Settings"
            >
              <FaCog size={16} />
              {isSidebarOpen && (
                <span className="ml-3">Settings</span>
              )}
            </motion.button>

            {/* Logout */}
            <motion.button
              whileHover={{ x: 4 }}
              onClick={handleLogout}
              className="flex items-center w-full p-3 rounded-lg text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-colors"
              aria-label="Logout"
            >
              <FaSignOutAlt size={16} />
              {isSidebarOpen && (
                <span className="ml-3">Logout</span>
              )}
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1">
        <div className="p-4 md:p-6 lg:p-8"> {/* Adjusted padding for responsiveness */}
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
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setShowNotifications(false)}
              aria-hidden="true"
            />
            {/* Notifications Panel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="fixed right-0 top-0 h-full w-80 bg-gray-900/95 backdrop-blur-xl border-l border-gray-800/50 p-6 z-50"
              aria-label="Notifications Panel"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-white">Notifications</h2>
                <button 
                  onClick={() => setShowNotifications(false)}
                  className="p-2 rounded-lg hover:bg-gray-800/50 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Close Notifications"
                >
                  <FaTimes size={16} />
                </button>
              </div>
              {/* Notifications Content */}
              <div className="text-white">
                <p>No new notifications.</p>
                {/* Replace with actual notifications */}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Sidebar;
