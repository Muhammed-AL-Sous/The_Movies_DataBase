// React BootStrap
import { Navbar, Container, Button, NavDropdown, Nav } from "react-bootstrap";
import Form from "react-bootstrap/Form";

// Theme Dark & Light Mode
import { useTheme } from "../Contexts/ThemeContext";

// Loader
import { useLoading } from "../Contexts/LoadingContext";

// Translation
import { useTranslation } from "react-i18next";
import { useLanguage } from "../Contexts/LanguageContext";

// Import IMG For Logo
import Logo from "../assets/images/Logo_01.png";

const NavBar = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation(["navbar", "common"]);
  const { i18n } = useTranslation();
  const { changeLanguage } = useLanguage();
  const { setIsLoading } = useLoading();

  return (
    <>
      <Navbar
        bg={theme}
        variant={theme}
        expand="lg"
        className="navBar"
        style={{ maxHeight: "85px" }}
      >
        <Container>
          <Navbar.Brand
            href="/"
            className="d-flex align-items-center"
            style={{ flexGrow: "2" }}
          >
            <img
              src={Logo}
              width="100"
              height="100"
              className="d-inline-block align-top"
              alt="logo"
            />
            <span className="fs-4 fw-bold">{t("The Move DataBase")}</span>
          </Navbar.Brand>

          <Form className="flex-grow-1 d-flex align-items-center">
            <Form.Control
              type="search"
              placeholder={t("navbar:Search")}
              className="me-2 "
              aria-label="Search"
            />

            {/* Switch Light & Dark Mode Button */}
            <div
              style={{
                padding: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                margin: "0 3px",
              }}
              onClick={toggleTheme}
              variant={theme === "light" ? "dark" : "light"}
            >
              {/* {t("switch_theme", {
            theme: t(theme === "light" ? "dark" : "light"),
          })} */}
              {theme === "light" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-moon"
                  viewBox="0 0 16 16"
                >
                  <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-brightness-high-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
                </svg>
              )}
            </div>
            {/*==== Switch Light & Dark Mode Button ====*/}

            {/* DropDown Language */}
            <NavDropdown
              title={t("common:language")}
              id="basic-nav-dropdown"
              style={{ margin: "0 2px", top: "-2px" }}
            >
              <NavDropdown.Item
                onClick={() => {
                  if (i18n.language !== "ar") {
                    setIsLoading(true);
                    changeLanguage("ar");
                    setTimeout(() => {
                      setIsLoading(false);
                    }, 2000);
                  }
                }}
              >
                {t("common:arabic")}
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  if (i18n.language !== "en") {
                    setIsLoading(true);
                    changeLanguage("en");
                    setTimeout(() => {
                      setIsLoading(false);
                    }, 2000);
                  }
                }}
              >
                {t("common:english")}
              </NavDropdown.Item>
            </NavDropdown>
            {/*==== DropDown Language ====*/}
          </Form>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
