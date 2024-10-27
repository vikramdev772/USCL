// services/codeExecutionService.js
const executeCode = async (code, language) => {
    try {
      const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any required API keys or authentication headers
        },
        body: JSON.stringify({
          source_code: code,
          language,
          // Add any other required parameters based on your API
        }),
      });
  
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to execute code');
      }
  
      return data.output || data.stdout || 'Program executed successfully!';
    } catch (error) {
      console.error('Code execution error:', error);
      throw error;
    }
  };
  
  export default executeCode;