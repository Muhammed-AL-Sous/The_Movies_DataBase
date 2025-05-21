import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { LanguageProvider } from "./Contexts/LanguageContext.jsx";
import { BrowserRouter } from "react-router-dom";

// Import BootStrap Css File
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageProvider>
      <BrowserRouter basename="/The_Movies_DataBase">
        <App />
      </BrowserRouter>
    </LanguageProvider>
  </StrictMode>
);
