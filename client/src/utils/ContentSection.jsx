// ContentSection.jsx
import React from 'react';

const ContentSection = ({ title, children }) => (
  <div className="bg-slate-900 rounded-lg shadow-lg p-6">
    <h2 className="text-2xl font-semibold  text-white">{title}</h2>
    {children}
  </div>
);

export default ContentSection;
