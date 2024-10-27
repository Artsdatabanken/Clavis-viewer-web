import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpApi from 'i18next-http-backend'
import nbTranslations from './locales/nb.json'
import enTranslations from './locales/en.json'


const i18n = i18next.createInstance()

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations.translation },
      nb: { translation: nbTranslations.translation }
    },
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    },
    detection: {
      order: ['navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage', 'cookie'],
    }
  })
  .catch((err) => {
    console.error('i18n initialization error:', err)
  })

i18n.on('failedLoading', (lng, ns, msg) => {
  console.error(`Failed loading ${ns} for ${lng}: ${msg}`)
})

export default i18n
