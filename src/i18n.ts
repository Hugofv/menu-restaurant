import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enUS from './languages/en-US'

i18n.use(initReactI18next).init({
  fallbackLng: 'en-US',
  debug: false,
  contextSeparator: '-',
  interpolation: {
    escapeValue: false
  },
  resources: {
    'en-US': {
      translation: enUS
    }
  }
})

export default i18n
