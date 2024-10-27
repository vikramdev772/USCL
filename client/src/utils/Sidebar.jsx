import React, { useState } from 'react';
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

import NavItem from './NavItem';
import UserProfile from './UserProfile';
import ContentSection from './ContentSection';
import Dashboard from './Dashboard';
import MyCourses from './MyCourses';
import Profile from './Profile';
import Assignments from './Assignments';
import Playground from '../code/Playground';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedSection, setSelectedSection] = useState('dashboard');
  const [showNotifications, setShowNotifications] = useState(false);

  const userData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Student',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John'
  };

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

  const renderContent = () => {
    switch (selectedSection) {
      case 'dashboard': return <Dashboard />;
      case 'mycourse': return <MyCourses />;
      case 'profile': return <Profile userData={userData} />;
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
        className="bg-gray-900/50 backdrop-blur-xl border-r border-gray-800/50 relative"
      >
        <div className="flex flex-col h-full p-4">
          {/* Logo and Toggle */}
          <div className="flex items-center justify-between mb-8">
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
              className="p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 text-gray-400 hover:text-white transition-colors"
            >
              {isSidebarOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
            </button>
          </div>

          {/* User Profile */}
          <div className="mb-8">
            <UserProfile user={userData} showDetails={isSidebarOpen} />
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
            >
              <FaCog size={16} />
              {isSidebarOpen && (
                <span className="ml-3">Settings</span>
              )}
            </motion.button>

            {/* Logout */}
            <motion.button
              whileHover={{ x: 4 }}
              className="flex items-center w-full p-3 rounded-lg text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-colors"
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
        <div className="p-8">
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
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="fixed right-0 top-0 h-full w-80 bg-gray-900/95 backdrop-blur-xl border-l border-gray-800/50 p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-white">Notifications</h2>
              <button 
                onClick={() => setShowNotifications(false)}
                className="p-2 rounded-lg hover:bg-gray-800/50 text-gray-400 hover:text-white"
              >
                <FaTimes size={16} />
              </button>
            </div>
            {/* Add your notifications content here */}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Sidebar;