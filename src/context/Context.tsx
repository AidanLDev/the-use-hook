import React, { useState } from 'react';
import { ThemeContext } from './ThemeContext';
import { Theme } from '../types';

export default function Context({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme: setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
