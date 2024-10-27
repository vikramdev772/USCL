// src/components/playground/SaveModal.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const SaveModal = ({ show, onClose, snippetName, onSnippetNameChange, onSave }) => {
  if (!show) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="bg-gray-900/90 backdrop-blur-sm rounded-xl border border-gray-800/50 p-6 w-full max-w-md"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold">Save Code Snippet</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaTimes size={14} />
            </button>
          </div>

          <input
            type="text"
            value={snippetName}
            onChange={(e) => onSnippetNameChange(e.target.value)}
            placeholder="Enter snippet name"
            className="w-full bg-gray-800/50 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 border border-gray-700/50 mb-6"
          />

          <div className="flex justify-end space-x-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white transition-colors"
            >
              Cancel
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onSave}
              className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              Save Snippet
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SaveModal;
