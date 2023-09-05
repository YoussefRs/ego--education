import { createContext, useState } from "react";
import LightModeTheme from '../Styles/LightModeTheme';
// import DarkModeTheme from '../styles/DarkModeTheme'
import useThemeSwitcher from '../hooks/useThemeSwitcher'


export const ThemeContext = createContext({ error: 'Not permission' })

const ThemeProvider = ({ children }) => {
  const { isNight } = useThemeSwitcher()
  const [isDarkMode, setIsDarkMode] = useState(isNight)
  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
      {isDarkMode ? '' : <LightModeTheme />}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider