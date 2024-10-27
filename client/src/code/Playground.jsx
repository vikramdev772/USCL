// Playground.jsx
import React, { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import { 
  FaPlay, 
  FaCog, 
  FaDownload, 
  FaSave, 
  FaSync, 
  FaFolder,
  FaTrash 
} from 'react-icons/fa';

// Judge0 API Configuration
const JUDGE0_API = 'https://judge0-ce.p.rapidapi.com/submissions';
const RAPIDAPI_KEY = '9a82818ff9msh4a4c19df9c680eep141ff7jsne0d1e9fa6889';
const RAPIDAPI_HOST = 'judge0-ce.p.rapidapi.com';

const languageTemplates = {
  javascript: `// JavaScript Code
console.log("Hello World!");`,
  python: `# Python Code
print("Hello World!")`,
  java: `// Java Code
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}`,
  cpp: `// C++ Code
#include <iostream>
using namespace std;

int main() {
    cout << "Hello World!" << endl;
    return 0;
}`,
  bash: `#!/bin/bash
echo "Hello World!"`,
};

// Language IDs for Judge0
const LANGUAGE_IDS = {
  javascript: 63,  // Node.js
  python: 71,      // Python 3
  java: 62,        // Java
  cpp: 54,         // C++
  bash: 46         // Bash
};

const Playground = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [code, setCode] = useState(languageTemplates[selectedLanguage]);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [theme, setTheme] = useState('vs-dark');
  const [error, setError] = useState(null);
  const [savedSnippets, setSavedSnippets] = useState([]);
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [snippetName, setSnippetName] = useState('');

  // Load saved snippets on mount
  useEffect(() => {
    const saved = localStorage.getItem('codeSnippets');
    if (saved) {
      setSavedSnippets(JSON.parse(saved));
    }
  }, []);

  const handleLanguageChange = (newLang) => {
    setSelectedLanguage(newLang);
    setCode(languageTemplates[newLang]);
    setOutput('');
    setError(null);
  };

  const handleEditorChange = (value) => {
    setCode(value);
  };

  const handleRun = async () => {
    setIsRunning(true);
    setOutput('Compiling and executing code...');
    setError(null);

    try {
      // Create submission
      const response = await fetch(JUDGE0_API, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': RAPIDAPI_KEY,
          'X-RapidAPI-Host': RAPIDAPI_HOST
        },
        body: JSON.stringify({
          source_code: code,
          language_id: LANGUAGE_IDS[selectedLanguage],
          stdin: ''
        })
      });

      const result = await response.json();
      
      if (!result.token) {
        throw new Error('Failed to create submission');
      }

      // Poll for results
      let attempts = 10;
      while (attempts > 0) {
        const resultResponse = await fetch(`${JUDGE0_API}/${result.token}`, {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': RAPIDAPI_KEY,
            'X-RapidAPI-Host': RAPIDAPI_HOST
          }
        });
        
        const data = await resultResponse.json();
        
        if (data.status?.id > 2) {  // Status > 2 means finished
          if (data.compile_output) {
            setError(data.compile_output);
            setOutput('');
          } else if (data.stderr) {
            setError(data.stderr);
            setOutput('');
          } else {
            setOutput(data.stdout || 'Program executed successfully with no output');
            setError(null);
          }
          break;
        }
        
        await new Promise(resolve => setTimeout(resolve, 1000));
        attempts--;
      }

      if (attempts === 0) {
        throw new Error('Execution timed out');
      }

    } catch (err) {
      setError(`Error: ${err.message}`);
      setOutput('');
    } finally {
      setIsRunning(false);
    }
  };

  const handleSave = () => {
    if (!snippetName.trim()) return;
    
    const newSnippet = {
      id: Date.now(),
      name: snippetName,
      code,
      language: selectedLanguage,
      createdAt: new Date().toISOString()
    };

    const updatedSnippets = [...savedSnippets, newSnippet];
    setSavedSnippets(updatedSnippets);
    localStorage.setItem('codeSnippets', JSON.stringify(updatedSnippets));
    setShowSaveModal(false);
    setSnippetName('');
  };

  const handleDownload = () => {
    const fileExtensions = {
      javascript: 'js',
      python: 'py',
      java: 'java',
      cpp: 'cpp',
      bash: 'sh'
    };

    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `code_${selectedLanguage}_${timestamp}.${fileExtensions[selectedLanguage]}`;

    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col h-screen bg-slate-900">
      {/* Header */}
      <div className="bg-slate-800 p-4 border-b border-slate-700">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <select
              value={selectedLanguage}
              onChange={(e) => handleLanguageChange(e.target.value)}
              className="bg-slate-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 border border-slate-600"
            >
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="java">Java</option>
              <option value="cpp">C++</option>
              <option value="bash">Bash</option>
            </select>

            <button
              onClick={() => setTheme(theme === 'vs-dark' ? 'light' : 'vs-dark')}
              className="p-2 text-white hover:bg-slate-700 rounded-md transition-colors"
              title="Toggle Theme"
            >
              <FaCog className="h-5 w-5" />
            </button>

            <button
              onClick={() => setCode(languageTemplates[selectedLanguage])}
              className="p-2 text-white hover:bg-slate-700 rounded-md transition-colors"
              title="Reset Code"
            >
              <FaSync className="h-5 w-5" />
            </button>

            <button
              onClick={() => setShowSaveModal(true)}
              className="p-2 text-white hover:bg-slate-700 rounded-md transition-colors"
              title="Save Code"
            >
              <FaSave className="h-5 w-5" />
            </button>

            <button
              onClick={handleDownload}
              className="p-2 text-white hover:bg-slate-700 rounded-md transition-colors"
              title="Download Code"
            >
              <FaDownload className="h-5 w-5" />
            </button>
          </div>

          <button
            onClick={handleRun}
            disabled={isRunning}
            className={`px-6 py-2 rounded-md flex items-center space-x-2 ${
              isRunning
                ? 'bg-slate-600 cursor-not-allowed'
                : 'bg-green-600 hover:bg-green-700'
            } text-white transition-colors`}
          >
            <FaPlay className="h-4 w-4" />
            <span>{isRunning ? 'Running...' : 'Run'}</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 min-h-0">
        {/* Editor Section */}
        <div className="flex-1 overflow-hidden">
          <Editor
            height="100%"
            defaultLanguage={selectedLanguage}
            language={selectedLanguage}
            value={code}
            theme={theme}
            onChange={handleEditorChange}
            options={{
              fontSize: 16,
              lineHeight: 1.6,
              minimap: { enabled: true },
              scrollBeyondLastLine: false,
              automaticLayout: true,
              lineNumbers: 'on',
              roundedSelection: true,
              padding: { top: 16, bottom: 16 },
              fontFamily: 'JetBrains Mono, Menlo, Monaco, Consolas, monospace',
              wordWrap: 'on',
              renderLineHighlight: 'all',
              suggestOnTriggerCharacters: true,
              acceptSuggestionOnEnter: 'on',
              cursorBlinking: 'smooth',
              smoothScrolling: true,
              contextmenu: true,
              rulers: [],
              renderWhitespace: 'selection',
              bracketPairColorization: { enabled: true },
            }}
            className="w-full h-full"
          />
        </div>

        {/* Output Console */}
        <div className="w-96 bg-slate-800 border-l border-slate-700 flex flex-col">
          <div className="p-4 border-b border-slate-700">
            <h2 className="text-white font-semibold">Output</h2>
          </div>
          <div className="flex-1 p-4 overflow-auto">
            {error ? (
              <div className="text-red-400 font-mono text-sm whitespace-pre-wrap">
                {error}
              </div>
            ) : (
              <pre className="text-white font-mono text-sm whitespace-pre-wrap">
                {output || 'Run your code to see the output...'}
              </pre>
            )}
          </div>
        </div>
      </div>

      {/* Save Modal */}
      {showSaveModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-slate-800 rounded-lg p-6 w-full max-w-md">
            <h3 className="text-white font-semibold text-lg mb-4">Save Code Snippet</h3>
            <input
              type="text"
              value={snippetName}
              onChange={(e) => setSnippetName(e.target.value)}
              placeholder="Enter snippet name"
              className="w-full bg-slate-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            />
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowSaveModal(false)}
                className="px-4 py-2 rounded-md bg-slate-700 text-white hover:bg-slate-600"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Playground;