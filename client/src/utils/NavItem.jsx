// NavItem.jsx
import React from 'react';

const NavItem = ({ icon: Icon, label, isActive, onClick, showLabel }) => (
  <button
    className={`flex items-center space-x-2 w-full p-2 rounded transition-colors duration-200 ${
      isActive ? 'bg-slate-800 text-white' : 'text-slate-300 hover:bg-slate-800 hover:text-white'
    }`}
    onClick={onClick}
  >
    <Icon className="h-5 w-5" />
    {showLabel && <span>{label}</span>}
  </button>
);

export default NavItem;
