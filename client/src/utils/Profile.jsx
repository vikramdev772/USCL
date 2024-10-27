
// Profile.jsx
import React from 'react';

const Profile = ({ userData }) => (
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

export default Profile;

