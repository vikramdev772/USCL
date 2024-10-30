// src/components/Profile.jsx

import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({ userData }) => {
  if (!userData) {
    return (
      <div className="text-red-500">
        <p>User data is unavailable.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm text-slate-400">Name</label>
          <p className="text-white">{userData.name}</p>
        </div>
        <div className="space-y-2">
          <label className="text-sm text-slate-400">Email</label>
          <p className="text-white">{userData.email}</p>
        </div>
      </div>
      <div className="border-t border-slate-700 my-4" />
      <div className="space-y-2">
        <label className="text-sm text-slate-400">Role</label>
        <p className="text-white">{userData.role}</p>
      </div>
    </div>
  );
};

Profile.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    role: PropTypes.string,
    avatar: PropTypes.string,
  }),
};

Profile.defaultProps = {
  userData: null,
};

export default Profile;
