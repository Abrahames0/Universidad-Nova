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
        default: theme === 'light' ? '#fff' : '#121212', // Change from black to dark blue
        paper: theme === 'light' ? '#fff' : '#0D1B2A', // Change from dark gray to dark blue
      },
      text: {
        primary: theme === 'light' ? '#000' : '#fff', // Texto principal
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
