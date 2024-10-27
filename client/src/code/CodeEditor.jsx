// src/components/playground/CodeEditor.jsx
import React from 'react';
import Editor from '@monaco-editor/react';
import { EDITOR_OPTIONS } from '../config/editorConfig';

const CodeEditor = ({ language, value, onChange, theme }) => {
  return (
    <div className="h-full w-full">
      <Editor
        height="100%"
        language={language}
        value={value}
        theme={theme}
        onChange={(newValue) => onChange(newValue)}
        options={EDITOR_OPTIONS}
      />
    </div>
  );
};

export default CodeEditor;
