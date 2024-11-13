'use client';

import React, { use } from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const { theme, setTheme } = use(ThemeContext);
  console.log(theme);
  const handleThemeToggle = () => {
    console.log('Toggle clicked: ', theme);
    if (theme === 'dark') {
      console.log("setting theme to light")
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };
  return (
    <div className={`App ${theme}`}>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={() => handleThemeToggle()}>Switch Theme</button>
      </header>
    </div>
  );
}

export default App;
