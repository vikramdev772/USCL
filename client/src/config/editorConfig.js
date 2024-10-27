// src/config/editorConfig.js
export const JUDGE0_API = 'https://judge0-ce.p.rapidapi.com/submissions';

export const LANGUAGE_TEMPLATES = {
  javascript: `// JavaScript Code\nconsole.log("Hello World!");`,
  python: `# Python Code\nprint("Hello World!")`,
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
  bash: `#!/bin/bash\necho "Hello World!"`,
};

export const LANGUAGE_IDS = {
  javascript: 63,
  python: 71,
  java: 62,
  cpp: 54,
  bash: 46,
};

export const EDITOR_OPTIONS = {
  fontSize: 14,
  lineHeight: 1.6,
  minimap: { enabled: true },
  scrollBeyondLastLine: false,
  automaticLayout: true,
  lineNumbers: 'on',
  roundedSelection: true,
  padding: { top: 16, bottom: 16 },
  fontFamily: 'JetBrains Mono, Menlo, Monaco, Consolas, monospace',
  wordWrap: 'on',
};
