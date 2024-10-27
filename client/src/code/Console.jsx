// src/components/playground/Console.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaTerminal, FaClock } from 'react-icons/fa';

const Console = ({ output, error, isRunning }) => {
  return (
    <motion.div 
      initial={{ width: 0 }}
      animate={{ width: '400px' }}
      className="bg-gray-900/50 backdrop-blur-sm border-l border-gray-800/50 flex flex-col"
    >
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-800/50">
        <div className="flex items-center space-x-2">
          <FaTerminal className="text-gray-400" size={14} />
          <span className="text-sm font-medium">Output Console</span>
        </div>
        {isRunning && (
          <div className="flex items-center space-x-2 text-gray-400">
            <FaClock className="animate-spin" size={14} />
            <span className="text-xs">Executing...</span>
          </div>
        )}
      </div>
      <div className="flex-1 p-4 overflow-auto font-mono text-sm">
        {error ? (
          <div className="text-red-400 whitespace-pre-wrap">{error}</div>
        ) : (
          <div className="text-gray-300 whitespace-pre-wrap">
            {output || 'Run your code to see the output...'}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Console;
