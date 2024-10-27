// Sidebar.jsx
import React, { useState } from 'react';
import { 
  FaBars, 
  FaTimes, 
  FaUser, 
  FaBook, 
  FaTachometerAlt, 
  FaTasks, 
  FaBell,
  FaCode  // Added for Playground icon
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

  const userData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Student',
  };

  // Updated navItems to include Playground
  const navItems = [
    { icon: FaTachometerAlt, label: 'Dashboard', id: 'dashboard' },
    { icon: FaBook, label: 'My Courses', id: 'mycourse' },
    { icon: FaUser, label: 'Profile', id: 'profile' },
    { icon: FaTasks, label: 'Assignments', id: 'assignments' },
    { icon: FaCode, label: 'Playground', id: 'playground' }  // Added Playground nav item
  ];

  // Updated renderContent to include Playground
  const renderContent = () => {
    switch (selectedSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'mycourse':
        return <MyCourses />;
      case 'profile':
        return <Profile userData={userData} />;
      case 'assignments':
        return <Assignments />;
      case 'playground':
        return <Playground />;
      default:
        return <div className="text-white">Select a section</div>;
    }
  };

  return (
    <div className="min-h-screen flex bg-slate-950">
      {/* Sidebar */}
      <div
        className={`bg-slate-900 border-r border-slate-800 p-4 transition-all duration-300 ease-in-out ${
          isSidebarOpen ? 'w-64' : 'w-20'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="text-slate-300 hover:text-white"
            >
              {isSidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>

          <UserProfile user={userData} showDetails={isSidebarOpen} />
          <div className="border-t border-slate-800 my-4" />

          <nav className="space-y-2">
            {navItems.map((item) => (
              <NavItem
                key={item.id}
                icon={item.icon}
                label={item.label}
                isActive={selectedSection === item.id}
                onClick={() => setSelectedSection(item.id)}
                showLabel={isSidebarOpen}
              />
            ))}
          </nav>

          <div className="mt-auto">
            <div className="border-t border-slate-800 my-4" />
            <button className="flex items-center space-x-2 text-slate-300 hover:text-white w-full p-2 rounded hover:bg-slate-800">
              <FaBell className="h-5 w-5" />
              {isSidebarOpen && <span>Notifications</span>}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <ContentSection 
          title={navItems.find(item => item.id === selectedSection)?.label || 'Dashboard'}
        >
          {renderContent()}
        </ContentSection>
      </div>
    </div>
  );
};

export default Sidebar;