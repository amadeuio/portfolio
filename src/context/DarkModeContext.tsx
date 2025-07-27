import type { ReactNode } from 'react';
import { createContext, useContext, useState } from 'react';

type ToggleDarkMode = () => void;

interface DarkModeContextType {
  isDarkMode: boolean;
  toggleDarkMode: ToggleDarkMode;
}

interface ProviderProps {
  children: ReactNode;
}

const DarkModeContext = createContext<DarkModeContextType | null>(null);

export const useDarkModeContext = () => {
  return useContext(DarkModeContext);
};

export const DarkModeContextProvider = ({ children }: ProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
