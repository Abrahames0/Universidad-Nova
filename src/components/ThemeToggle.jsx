import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import Fab from '@mui/material/Fab';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';


const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Fab 
      color="primary" 
      aria-label="toggle theme" 
      onClick={toggleTheme}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
      }}
    >
      {theme === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
    </Fab>
  );
};

export default ThemeToggle;
