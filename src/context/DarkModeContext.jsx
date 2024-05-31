/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext()

export function useDarkMode(){
  return useContext(DarkModeContext)
} 

export default function DarkModeProvider({children}) {

  const [isDarkMode, setDarkMode] = useState(false)

  useEffect(
    function () {
      if (isDarkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
    [isDarkMode]
  );

  return (
    <DarkModeContext.Provider value={{ isDarkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}
