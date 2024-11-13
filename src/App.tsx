'use client';

import React, { use, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeContext } from './context/ThemeContext';
import ContextExample from './components/ContextExample';
import { fetchMessage } from './lib';
import MessageContainer from './components/MessageContainer';

function App() {
  const { theme } = use(ThemeContext);

  const [messagePromise, setMessagePromise] = useState<Promise<string> | null>(
    null
  );

  const handleFetchMessage = () => {
    setMessagePromise(fetchMessage());
  };
  return (
    <div className={`App ${theme}`}>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <ContextExample />
        <button onClick={() => handleFetchMessage()}>Send Message</button>
        {messagePromise && <MessageContainer messagePromise={messagePromise} />}
      </header>
    </div>
  );
}

export default App;
