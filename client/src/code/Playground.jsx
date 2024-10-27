// src/components/playground/Playground.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CodeEditor from './CodeEditor';
import Toolbar from './Toolbar';
import Console from './Console';
import SaveModal from './SaveModal';
import {
  JUDGE0_API,
  LANGUAGE_TEMPLATES,
  LANGUAGE_IDS,
} from '../config/editorConfig';

const Playground = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [code, setCode] = useState(LANGUAGE_TEMPLATES[selectedLanguage]);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [theme, setTheme] = useState('vs-dark');
  const [error, setError] = useState(null);
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [snippetName, setSnippetName] = useState('');

  const handleLanguageChange = (newLang) => {
    setSelectedLanguage(newLang);
    setCode(LANGUAGE_TEMPLATES[newLang]);
    setOutput('');
    setError(null);
  };

  const handleRun = async () => {
    setIsRunning(true);
    setOutput('Compiling and executing code...');
    setError(null);

    try {
      const response = await fetch(JUDGE0_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
          'X-RapidAPI-Host': process.env.REACT_APP_RAPIDAPI_HOST,
        },
        body: JSON.stringify({
          source_code: code,
          language_id: LANGUAGE_IDS[selectedLanguage],
          stdin: '',
        }),
      });

      const result = await response.json();

      if (!result.token) {
        throw new Error('Failed to create submission');
      }

      let attempts = 10;
      while (attempts > 0) {
        const resultResponse = await fetch(`${JUDGE0_API}/${result.token}`, {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
            'X-RapidAPI-Host': process.env.REACT_APP_RAPIDAPI_HOST,
          },
        });

        const data = await resultResponse.json();

        if (data.status?.id > 2) {
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

        await new Promise((resolve) => setTimeout(resolve, 1000));
        attempts--;
      }

      if (attempts === 0) {
        setError('Execution timed out. Please try again.');
        setOutput('');
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

    const savedSnippets = JSON.parse(localStorage.getItem('codeSnippets') || '[]');
    const newSnippet = {
      id: Date.now(),
      name: snippetName,
      code,
      language: selectedLanguage,
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem('codeSnippets', JSON.stringify([...savedSnippets, newSnippet]));
    setShowSaveModal(false);
    setSnippetName('');
  };

  const handleDownload = () => {
    const fileExtensions = {
      javascript: 'js',
      python: 'py',
      java: 'java',
      cpp: 'cpp',
      bash: 'sh',
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

  const handleThemeToggle = () => {
    setTheme((prevTheme) => (prevTheme === 'vs-dark' ? 'light' : 'vs-dark'));
  };

  const handleReset = () => {
    setCode(LANGUAGE_TEMPLATES[selectedLanguage]);
    setOutput('');
    setError(null);
  };

  return (
    <div className="flex flex-col h-screen bg-[#0A0F1C] text-white">
      <Toolbar
        selectedLanguage={selectedLanguage}
        onLanguageChange={handleLanguageChange}
        onThemeToggle={handleThemeToggle}
        onReset={handleReset}
        onSave={() => setShowSaveModal(true)}
        onDownload={handleDownload}
        onRun={handleRun}
        isRunning={isRunning}
        theme={theme}
      />

      <div className="flex-1 flex">
        <div className="flex-1">
          <CodeEditor
            language={selectedLanguage}
            value={code}
            onChange={setCode}
            theme={theme}
          />
        </div>

        <Console output={output} error={error} isRunning={isRunning} />
      </div>

      <SaveModal
        show={showSaveModal}
        onClose={() => setShowSaveModal(false)}
        snippetName={snippetName}
        onSnippetNameChange={setSnippetName}
        onSave={handleSave}
      />
    </div>
  );
};

export default Playground;
