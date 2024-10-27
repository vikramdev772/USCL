// UserProfile.jsx
import React from 'react';

const UserProfile = ({ user, showDetails }) => (
  <div className="flex flex-col items-center space-y-3 py-4">
    <div className="h-12 w-12 rounded-full bg-slate-700 flex items-center justify-center">
      <span className="text-white text-lg">{user.name[0]}</span>
    </div>
    {showDetails && (
      <div className="text-center">
        <h3 className="font-semibold text-sm text-white">{user.name}</h3>
        <p className="text-xs text-slate-400">{user.role}</p>
      </div>
    )}
  </div>
);

export default UserProfile;