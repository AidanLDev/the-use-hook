import { createContext, Dispatch, SetStateAction } from 'react';
import { Theme } from '../types';

interface IThemeContext {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
}

export const ThemeContext = createContext<IThemeContext>({
  theme: 'dark',
  setTheme: () => {},
});
