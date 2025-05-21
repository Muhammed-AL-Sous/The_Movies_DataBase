import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

// استخدم BASE_URL من Vite
const base = import.meta.env.BASE_URL || "/";

i18n
  .use(HttpBackend) // تحميل ملفات الترجمة من السيرفر أو public
  .use(LanguageDetector) // محاولة كشف اللغة من localStorage، أو المتصفح
  .use(initReactI18next) // دمج i18next مع React
  .init({
    fallbackLng: "en",
    debug: false,
    ns: ["common", "navbar", "footer", "homepage"], // أسماء الملفات
    defaultNS: "common", // الافتراضي لو ما حددت namespace
    interpolation: {
      escapeValue: false, // React يقوم بالفعل بالحماية من XSS
    },

    // استخدم base URL تلقائيًا من Vite
    // مسار ملفات الترجمة داخل public
    backend: {
      loadPath: `${
        base.endsWith("/") ? base : base + "/"
      }locales/{{lng}}/{{ns}}.json`,
    },

    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    react: {
      useSuspense: true, // ✅ ضروري
    },
  });

export default i18n;
