import { Navbar, Container, Button, NavDropdown } from "react-bootstrap";
import { useTheme } from "../Contexts/ThemeContext";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../Contexts/LanguageContext";

const ThemedNavbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();
  const {changeLanguage } = useLanguage();

  return (
    <Navbar bg={theme} variant={theme} expand="lg">
      <Container>
        <Navbar.Brand href="#">MyApp</Navbar.Brand>

        {/* Switch Light & Dark Mode Button */}
        <Button
          onClick={toggleTheme}
          variant={theme === "light" ? "dark" : "light"}
        >
          {t("switch_theme", {
            theme: t(theme === "light" ? "dark" : "light"),
          })}
        </Button>
        {/*==== Switch Light & Dark Mode Button ====*/}

        {/* DropDown Language */}
        <NavDropdown title={t("language")} id="basic-nav-dropdown">
          <NavDropdown.Item onClick={() => changeLanguage("ar")}>
            {t("arabic")}
          </NavDropdown.Item>
          <NavDropdown.Item onClick={() => changeLanguage("en")}>
            {t("english")}
          </NavDropdown.Item>
        </NavDropdown>
        {/*==== DropDown Language ====*/}
      </Container>
    </Navbar>
  );
};

export default ThemedNavbar;
