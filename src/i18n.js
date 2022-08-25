import i18n from "i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";

i18n.use(HttpApi)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        backend: {
            //tranlation file path
            loadPath: "/assets/i18n/{{ns}}/{{lng}}.json",
        },
        fallbackLng: "en",
        // disable in production
        debug: true,
        // can have huge namspaces in case you want to divide huge translation in smaller pices and loading on demand
        ns: ["common", "home"],
        interpolation: {
            escapeValue: false,
            formatSeparator: ",",
        },
        react: {
            wait: true,
        },
    })

export default i18n;