// Dashboard.jsx
import React from 'react';

const Dashboard = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {[1, 2, 3, 4].map((i) => (
      <div key={i} className="bg-slate-800 p-4 rounded-lg">
        <div className="text-sm font-medium text-slate-400">Metric {i}</div>
        <div className="text-2xl font-bold text-white mt-2">Value {i}</div>
      </div>
    ))}
  </div>
);

export default Dashboard;
