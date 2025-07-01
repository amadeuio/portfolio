import { ReactNode, createContext, useContext, useState } from 'react';

type ToggleLang = () => void;

interface LangContext {
  lang: string;
  toggleLang: ToggleLang;
}

interface LangContextProviderProps {
  children: ReactNode;
}

const LangContext = createContext<LangContext | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useLangContext = () => {
  return useContext(LangContext);
};

export const LangContextProvider: React.FC<LangContextProviderProps> = ({ children }) => {
  const [lang, setLang] = useState<string>('en');

  const toggleLang = () => {
    setLang(lang === 'en' ? 'es' : 'en');
  };

  return <LangContext.Provider value={{ lang, toggleLang }}>{children}</LangContext.Provider>;
};
