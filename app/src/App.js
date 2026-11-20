import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>во дела</h1>
        <p>приложение.</p>
        <button 
          style={{ padding: '15px 30px', fontSize: '20px', cursor: 'pointer', borderRadius: '8px', border: 'none', marginTop: '20px', backgroundColor: '#61dafb', color: '#282c34', fontWeight: 'bold' }}
          onClick={() => setCount(count + 1)}
        >
          Кликов: {count}
        </button>
      </header>
    </div>
  );
}

export default App;