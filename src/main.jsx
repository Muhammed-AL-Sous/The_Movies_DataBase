// React
import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// Main Component
import App from "./App.jsx";

// Loader
import MainLoader from "./Loaders/MainLoader.jsx";

// Theme Dark & Light Mode
import { ThemeProvider } from "./Contexts/ThemeContext";

// Css Files
// Import BootStrap Css File
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// import i18n Translation Library
import "./i18n";
import { LanguageProvider } from "./Contexts/LanguageContext.jsx";

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
