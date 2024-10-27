// src/components/playground/Toolbar.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaPlay, 
  FaCog, 
  FaDownload, 
  FaSave, 
  FaSync,
  FaCode 
} from 'react-icons/fa';

const Toolbar = ({ 
  selectedLanguage,
  onLanguageChange,
  onThemeToggle,
  onReset,
  onSave,
  onDownload,
  onRun,
  isRunning,
  theme 
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-900/50 backdrop-blur-sm border-b border-gray-800/50"
    >
      {/* Tabs Bar */}
      <div className="flex items-center px-4 h-10 space-x-4 border-b border-gray-800/50">
        <div className="flex items-center space-x-2 text-blue-400">
          <FaCode size={14} />
          <span className="text-sm font-medium">Code Editor</span>
        </div>
      </div>

      {/* Main Toolbar */}
      <div className="p-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {/* Language Selector */}
          <select
            value={selectedLanguage}
            onChange={(e) => onLanguageChange(e.target.value)}
            className="bg-gray-800/50 text-gray-300 px-3 py-1.5 rounded-lg border border-gray-700/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 hover:border-gray-600 transition-colors"
          >
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="cpp">C++</option>
            <option value="bash">Bash</option>
          </select>

          {/* Theme Toggle */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onThemeToggle}
            className="p-2 text-gray-400 hover:text-white bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-colors"
            title="Toggle Theme"
          >
            <FaCog size={14} />
          </motion.button>

          {/* Reset Code */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onReset}
            className="p-2 text-gray-400 hover:text-white bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-colors"
            title="Reset Code"
          >
            <FaSync size={14} />
          </motion.button>
        </div>

        <div className="flex items-center space-x-3">
          {/* Save Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onSave}
            className="flex items-center space-x-2 px-3 py-1.5 bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-white rounded-lg transition-colors"
          >
            <FaSave size={14} />
            <span className="text-sm">Save</span>
          </motion.button>

          {/* Download Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onDownload}
            className="flex items-center space-x-2 px-3 py-1.5 bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-white rounded-lg transition-colors"
          >
            <FaDownload size={14} />
            <span className="text-sm">Download</span>
          </motion.button>

          {/* Run Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onRun}
            disabled={isRunning}
            className={`
              flex items-center space-x-2 px-4 py-1.5 rounded-lg font-medium
              ${isRunning 
                ? 'bg-gray-700/50 cursor-not-allowed text-gray-400' 
                : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white'
              } transition-all duration-200
            `}
          >
            {isRunning ? <FaClock className="animate-spin" size={14} /> : <FaPlay size={14} />}
            <span className="text-sm">{isRunning ? 'Running...' : 'Run Code'}</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default Toolbar;