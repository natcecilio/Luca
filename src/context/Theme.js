import React, { createContext, useEffect, useState } from 'react';
import { useContext } from 'react';

const ThemeContext = createContext();

export const themes = [
  "light-theme",
  "dark-theme"
]

export default function ThemeProvider({children}) {

  const storageTheme = () => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      return theme;
    } else {
      return themes[1];
    }
  }

  const [theme, setTheme] = useState(storageTheme());

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return(
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  const {theme, setTheme} = context;
  return {theme, setTheme};
}