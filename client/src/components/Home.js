import { useState } from 'react';

function Home() {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');

  const handlePromptChange = (event) => {
    setPrompt(event.target.value);
  };

  // post request submits prompt to server and returns result.
  const handleSubmit = async () => {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });
    const data = await response.json();
    setResult(data);
  };

  return (
    <div>
      <h1>Ask a question:</h1>
      <textarea type="text" value={prompt} onChange={handlePromptChange} />
      <button onClick={handleSubmit}>Submit</button>
      {result && <div id="result">{result}</div>}
    </div>
  );
}

export default Home;
