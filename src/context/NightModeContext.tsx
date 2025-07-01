import { ReactNode, createContext, useContext, useState } from 'react';

type ToggleNightMode = () => void;

interface NightModeContext {
  isNightMode: boolean;
  toggleNightMode: ToggleNightMode;
}

interface ProviderProps {
  children: ReactNode;
}

const NightModeContext = createContext<NightModeContext | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useNightModeContext = () => {
  return useContext(NightModeContext);
};

export const NightModeContextProvider: React.FC<ProviderProps> = ({ children }) => {
  const [isNightMode, setIsNightMode] = useState<boolean>(false);

  const toggleNightMode = () => {
    setIsNightMode((prevMode) => !prevMode);
  };

  return (
    <NightModeContext.Provider value={{ isNightMode, toggleNightMode }}>
      {children}
    </NightModeContext.Provider>
  );
};
