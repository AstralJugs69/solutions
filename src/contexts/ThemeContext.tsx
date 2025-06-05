import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { themeOptionsData, type ThemeOption } from '../data/themes';

interface ThemeContextProps {
  currentTheme: ThemeOption;
  setCurrentTheme: (theme: ThemeOption) => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const defaultTheme = themeOptionsData.find(theme => theme.id === 'design-system') || themeOptionsData[0];

const ThemeContext = createContext<ThemeContextProps>({
  currentTheme: defaultTheme,
  setCurrentTheme: () => {},
  darkMode: false,
  toggleDarkMode: () => {},
});

export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Initialize theme from localStorage or default
  const [currentTheme, setCurrentTheme] = useState<ThemeOption>(() => {
    if (typeof window !== 'undefined') {
      const savedThemeId = localStorage.getItem('appTheme');
      if (savedThemeId) {
        const theme = themeOptionsData.find((t) => t.id === savedThemeId);
        return theme || defaultTheme;
      }
    }
    return defaultTheme;
  });

  // Initialize dark mode from localStorage or system preference
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.theme === 'dark' || 
        (!('theme' in localStorage) && 
        window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  // Update theme in localStorage and apply CSS variables
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('appTheme', currentTheme.id);
      
      // Apply theme colors as CSS variables
      Object.entries(currentTheme.colors).forEach(([key, value]) => {
        document.documentElement.style.setProperty(`--color-theme-${key}`, value);
      });
    }
  }, [currentTheme]);

  // Apply dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [darkMode]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Handle theme change
  const handleSetCurrentTheme = (theme: ThemeOption) => {
    setCurrentTheme(theme);
  };

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        setCurrentTheme: handleSetCurrentTheme,
        darkMode,
        toggleDarkMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}; 