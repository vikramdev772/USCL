// src/components/UserProfile.jsx

import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';

const UserProfile = ({ user, showDetails, loading, error }) => {
  if (loading) {
    return (
      <div className="flex items-center space-x-3">
        {/* Placeholder for Avatar */}
        <div className="w-10 h-10 rounded-full bg-gray-700 animate-pulse"></div>
        {showDetails && <span className="text-gray-400">Loading...</span>}
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center space-x-3">
        <FaUserCircle className="text-red-400 text-2xl" />
        {showDetails && <span className="text-red-400">Error loading user</span>}
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex items-center space-x-3">
        <FaUserCircle className="text-gray-400 text-2xl" />
        {showDetails && <span className="text-gray-400">No user data</span>}
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-3">
      <img
        src={user.avatar}
        alt={`${user.name}'s avatar`}
        className="w-10 h-10 rounded-full"
      />
      {showDetails && (
        <div>
          <p className="text-white font-medium">{user.name}</p>
          <p className="text-gray-400 text-sm">{user.role}</p>
        </div>
      )}
    </div>
  );
};

UserProfile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    role: PropTypes.string,
    avatar: PropTypes.string,
  }),
  showDetails: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

UserProfile.defaultProps = {
  user: null,
  error: '',
};

export default UserProfile;
