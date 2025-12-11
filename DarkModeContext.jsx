import { createContext, useContext, useState, useEffect } from "react";

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    document.body.classList.toggle("dark-mode", dark);
    localStorage.setItem("darkMode", dark);
  }, [dark]);

  return (
    <DarkModeContext.Provider value={{ dark, setDark }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  return useContext(DarkModeContext);
}
