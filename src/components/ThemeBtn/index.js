import React from 'react';
import './styles.css';
import {useTheme, themes} from '../../context/Theme';
import sunIcon from '../../assets/sun-lg.png'
import moonIcon from '../../assets/moon-s.png'

const ThemeBtn = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button className="theme-switch" onClick={() => setTheme(theme === themes[1] ? themes[0] : themes[1])}>
      <img className="theme-icon" src={theme === themes[1] ? sunIcon : moonIcon} alt="Theme Icon" />
    </button>
  )
}

export default ThemeBtn;