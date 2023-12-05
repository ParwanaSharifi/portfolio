import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    resources: {
      en: {
        translation: {
          // English translations
        }
      },
      fr: {
        translation: {
          // French translations
        }
      },
      es: {
        translation: {
          // Spanish translations
        }
      },
      // Add more language translations as needed
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
