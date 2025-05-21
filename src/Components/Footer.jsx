import { useTranslation } from "react-i18next";
import { useLanguage } from "../Contexts/LanguageContext";

const Footer = () => {
  const { t} = useTranslation();
  const { language, changeLanguage } = useLanguage();

  return (
    <footer key={language}>
      <h1>{t("Welcome to My Website")}</h1>
      <button onClick={() => changeLanguage(language === "en" ? "ar" : "en")}>
        {language === "en" ? "العربية" : "English"}
      </button>
    </footer>
  );
};

export default Footer;
