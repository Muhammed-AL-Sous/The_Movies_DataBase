import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <h1>{t("Welcome to My Website")}</h1>
    </footer>
  );
};

export default Footer;
