import { createInstance } from 'i18next'
import { initReactI18next } from 'react-i18next'
import ptBR from './pt-BR'

const i18n = createInstance({
  fallbackLng: 'pt-BR',
  debug: true,

  interpolation: {
    escapeValue: false // not needed for react as it escapes by default
  },
  resources: {
    ptBR
  }
})

i18n.use(initReactI18next).init({
  react: {
    transWrapTextNodes: '',
    transSupportBasicHtmlNodes: true, // allow <br/> and simple html elements in translations
    transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'] // don't convert to <1></1> if simple react elements
  }
})

export default i18n
