import React, { use } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function ContextExample() {
  const { setTheme, theme } = use(ThemeContext);

  const handleThemeToggle = () => {
    if (theme === 'dark') {
      console.log('setting theme to light');
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
    <div>
      <button onClick={() => handleThemeToggle()}>Switch Theme</button>
    </div>
  );
}
