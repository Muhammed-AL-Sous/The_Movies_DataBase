import { StrictMode, Suspense } from "react"; // ← أضف Suspense
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { LanguageProvider } from "./Contexts/LanguageContext.jsx";
import { BrowserRouter } from "react-router-dom";

// Import BootStrap Css File
import "bootstrap/dist/css/bootstrap.min.css";

// import i18n Library
import "./i18n";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageProvider>
      <Suspense fallback={<div>Loading translations...</div>}>
        <BrowserRouter basename="/The_Movies_DataBase">
          <App />
        </BrowserRouter>
      </Suspense>
    </LanguageProvider>
  </StrictMode>
);
