// ThemeContext.js
import React, { createContext, useState } from 'react';
import { createTheme } from '@mui/material';

export const ThemeContext = createContext();

export const ThemeProvide = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const muiTheme = createTheme({
    palette: {
      type: theme,
    },
  });

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, muiTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
