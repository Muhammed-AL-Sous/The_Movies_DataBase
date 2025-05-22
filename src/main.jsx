import { StrictMode, Suspense } from "react"; // ← أضف Suspense
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { LanguageProvider } from "./Contexts/LanguageContext.jsx";
import { BrowserRouter } from "react-router-dom";
import MainLoader from "./Loaders/MainLoader.jsx";

// Theme Dark & Light Mode
import { ThemeProvider } from "./Contexts/ThemeContext";

// Import BootStrap Css File
import "bootstrap/dist/css/bootstrap.min.css";

// import i18n Library
import "./i18n";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <Suspense fallback={<MainLoader />}>
          <BrowserRouter basename="/The_Movies_DataBase">
            <App />
          </BrowserRouter>
        </Suspense>
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>
);
