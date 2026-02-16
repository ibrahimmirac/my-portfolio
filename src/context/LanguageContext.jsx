import { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { siteData } from '../data/data';

const LanguageContext = createContext();
export function LanguageProvider({ children }) {
  
  const [language, setLanguage] = useLocalStorage('language', 'tr');


  const toggleLanguage = () => {
    setLanguage(language === 'tr' ? 'en' : 'tr');
  };


  const currentData = siteData[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, currentData }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}