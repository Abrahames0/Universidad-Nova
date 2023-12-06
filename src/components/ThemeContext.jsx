import React, { createContext, useState } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const muiTheme = createTheme({
    palette: {
      mode: theme,
      background: {
        default: theme === 'light' ? '#fff' : '#121212',
        paper: theme === 'light' ? '#fff' : '#0D1B2A',
      },
      text: {
        primary: theme === 'light' ? '#000' : '#fff',
      },
    },
    components: {
    },
  });  

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MuiThemeProvider theme={muiTheme}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};