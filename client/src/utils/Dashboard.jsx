// Dashboard.jsx
import React from 'react';

const Dashboard = () => {
  return (
    <div className="bg-slate-900 min-h-screen text-white p-6">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Welcome Back!</h1>
        <p className="text-slate-400">Track your progress and continue learning</p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-slate-800 p-6 rounded-lg text-center">
          <h2 className="text-slate-400 text-sm font-medium">Course Progress</h2>
          <p className="text-4xl font-bold text-purple-400">75%</p>
          <p className="text-slate-400">Across all courses</p>
        </div>
        <div className="bg-slate-800 p-6 rounded-lg text-center">
          <h2 className="text-slate-400 text-sm font-medium">Assignments</h2>
          <p className="text-4xl font-bold text-blue-400">12</p>
          <p className="text-slate-400">Due this week</p>
        </div>
        <div className="bg-slate-800 p-6 rounded-lg text-center">
          <h2 className="text-slate-400 text-sm font-medium">Assessment Score</h2>
          <p className="text-4xl font-bold text-green-400">92%</p>
          <p className="text-slate-400">Average score</p>
        </div>
      </div>

      {/* Recent Activity Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
        <div className="bg-slate-800 p-4 rounded-lg space-y-4">
          {[
            { title: 'Completed Python Basics', subtitle: 'Course progress updated', time: '2h ago' },
            { title: 'Submitted Final Project', subtitle: 'Web Development Course', time: '4h ago' },
            { title: 'Earned Certificate', subtitle: 'JavaScript Fundamentals', time: '1d ago' },
          ].map((activity, index) => (
            <div key={index} className="flex justify-between items-center">
              <div>
                <h3 className="font-medium">{activity.title}</h3>
                <p className="text-slate-400 text-sm">{activity.subtitle}</p>
              </div>
              <p className="text-slate-500 text-sm">{activity.time}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Continue Learning & Upcoming Deadlines Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-800 p-6 rounded-lg">
          <h2 className="text-lg font-medium">Continue Learning</h2>
          <p className="text-slate-400">Python Advanced Concepts</p>
          <p className="text-slate-500 text-sm mb-4">Next: Data Structures</p>
          <button className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-lg">
            Resume
          </button>
        </div>
        <div className="bg-slate-800 p-6 rounded-lg">
          <h2 className="text-lg font-medium">Upcoming Deadlines</h2>
          <p className="text-slate-400">JavaScript Project</p>
          <p className="text-slate-500 text-sm mb-4">Due in 2 days</p>
          <button className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-lg">
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
