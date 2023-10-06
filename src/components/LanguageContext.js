// LanguageContext.js

import React, { createContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    // Load translations dynamically based on the selected language
    import(`../translations/${language}.json`)
      .then((module) => {
        console.log(`Translations loaded for ${language}:`, module.default);
        setTranslations(module.default);
      })
      .catch((error) => {
        console.error(`Error loading translations for ${language}:`, error);
        // Set default translations to French or handle the error as needed
        setTranslations(require('../translations/fr.json')); // Assuming fr.json is your default/fallback translation
      });
  }, [language]);
  
  
  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'fr' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext, LanguageProvider };
