import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPen, FaCamera } from 'react-icons/fa';

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [bio, setBio] = useState('I am a passionate developer who loves to create amazing web applications.');

  const recentActivities = [
    { id: 1, activity: 'Updated profile picture' },
    { id: 2, activity: 'Completed a new project' },
    { id: 3, activity: 'Joined a new community' },
    { id: 4, activity: 'Shared a blog post' },
    { id: 5, activity: 'Attended a tech conference' },
  ];

  const handleEditBio = () => {
    if (isEditing) {
      // Save the bio when switching from editing to view mode
      // Here you might also want to add logic to save the updated bio to a backend or local storage
    }
    setIsEditing(!isEditing);
  };

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <main className="container mx-auto mt-8 px-4">
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center mb-6">
            <div className="relative mb-4 md:mb-0 md:mr-6">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="User avatar"
                className="w-32 h-32 rounded-full object-cover"
              />
              <button
                className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-2 hover:bg-blue-600 transition duration-300"
                aria-label="Update profile picture"
              >
                <FaCamera className="text-white" />
              </button>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold mb-2">John Doe</h2>
              <div className="flex items-center justify-center md:justify-start mb-2">
                <FaEnvelope className="mr-2" />
                <span>johndoe@example.com</span>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 flex items-center">
              <FaUser className="mr-2" /> Bio
              <button
                onClick={handleEditBio}
                className="ml-2 text-sm text-blue-400 hover:text-blue-300 transition duration-300"
                aria-label={isEditing ? 'Save bio' : 'Edit bio'}
              >
                <FaPen />
              </button>
            </h3>
            {isEditing ? (
              <div>
                <textarea
                  value={bio}
                  onChange={handleBioChange}
                  className="w-full bg-gray-700 text-white rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="4"
                />
                <button
                  onClick={handleEditBio}
                  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                >
                  Save
                </button>
              </div>
            ) : (
              <p>{bio}</p>
            )}
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Recent Activities</h3>
            <ul className="space-y-2">
              {recentActivities.map((activity) => (
                <li
                  key={activity.id}
                  className="bg-gray-700 rounded p-3 hover:bg-gray-600 transition duration-300"
                >
                  {activity.activity}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserProfile;
