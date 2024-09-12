import React, { useState } from 'react';
import { FaUser, FaBell, FaCog, FaGlobe, FaLock, FaPlug, FaChartBar, FaExclamationTriangle } from 'react-icons/fa';

const Dashboard = () => {
  const [userProfile, setUserProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Security Analyst'
  });

  const [recentActivities] = useState([
    { id: 1, event: 'Malware Detected', timestamp: '2023-06-15 14:30' },
    { id: 2, event: 'Firewall Updated', timestamp: '2023-06-15 13:45' },
    { id: 3, event: 'User Access Revoked', timestamp: '2023-06-15 11:20' },
  ]);

  const [securityRecommendations] = useState([
    'Update your password',
    'Enable two-factor authentication',
    'Review recent login activity'
  ]);

  const [connectedTools] = useState([
    { id: 1, name: 'Firewall Pro', status: 'Connected' },
    { id: 2, name: 'Antivirus Plus', status: 'Updating' },
    { id: 3, name: 'Network Monitor', status: 'Disconnected' },
  ]);

  const handleProfileEdit = () => {
    // Implement profile edit logic
    console.log('Edit profile');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-violet-400">Cybersecurity Management Platform</h1>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
              <FaBell className="text-xl" />
            </button>
            <button className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
              <FaCog className="text-xl" />
            </button>
          </div>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <section className="md:col-span-2 space-y-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Key Metrics</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-700 p-4 rounded-lg text-center">
                  <FaExclamationTriangle className="text-3xl text-yellow-400 mx-auto mb-2" />
                  <p className="text-sm">Active Threats</p>
                  <p className="text-2xl font-bold">12</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg text-center">
                  <FaLock className="text-3xl text-green-400 mx-auto mb-2" />
                  <p className="text-sm">Secured Systems</p>
                  <p className="text-2xl font-bold">98%</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg text-center">
                  <FaChartBar className="text-3xl text-blue-400 mx-auto mb-2" />
                  <p className="text-sm">Network Traffic</p>
                  <p className="text-2xl font-bold">1.2 TB</p>
                </div>
                <div className="bg-gray-700 p-4 rounded-lg text-center">
                  <FaUser className="text-3xl text-purple-400 mx-auto mb-2" />
                  <p className="text-sm">Active Users</p>
                  <p className="text-2xl font-bold">3,457</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Threat Map</h2>
              <div className="aspect-w-16 aspect-h-9 bg-gray-700 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551808525-51a94da548ce?auto=format&fit=crop&w=1470&q=80"
                  alt="Global Threat Map"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </section>

          <aside className="space-y-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">User Profile</h2>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-violet-500 rounded-full flex items-center justify-center">
                  <FaUser className="text-3xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{userProfile.name}</h3>
                  <p className="text-gray-400">{userProfile.role}</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">{userProfile.email}</p>
              <button
                onClick={handleProfileEdit}
                className="w-full bg-violet-600 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded transition-colors"
              >
                Edit Profile
              </button>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Recent Activities</h2>
              <ul className="space-y-4">
                {recentActivities.map((activity) => (
                  <li key={activity.id} className="flex justify-between items-center">
                    <span>{activity.event}</span>
                    <span className="text-sm text-gray-400">{activity.timestamp}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Security Recommendations</h2>
              <ul className="list-disc list-inside space-y-2">
                {securityRecommendations.map((recommendation, index) => (
                  <li key={index}>{recommendation}</li>
                ))}
              </ul>
            </div>
          </aside>
        </main>

        <section className="mt-8 bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Connected Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {connectedTools.map((tool) => (
              <div key={tool.id} className="bg-gray-700 p-4 rounded-lg flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{tool.name}</h3>
                  <p className="text-sm text-gray-400">{tool.status}</p>
                </div>
                <FaPlug className={`text-2xl ${tool.status === 'Connected' ? 'text-green-400' : 'text-red-400'}`} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;