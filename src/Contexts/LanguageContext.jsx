import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    () => localStorage.getItem("app-language") || "en"
  );

  useEffect(() => {
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    localStorage.setItem("app-language", language);

    // تأخير تغيير لغة i18next هنا إلى داخل المكونات باستخدام useEffect
    import("i18next").then((i18nInstance) => {
      i18nInstance.default.changeLanguage(language);
    });
  }, [language]);

  const changeLanguage = useCallback((lang) => {
    setLanguage(lang);
  }, []);

  const contextValue = useMemo(
    () => ({ language, changeLanguage }),
    [language, changeLanguage]
  );

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
