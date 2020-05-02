import React, { useContext, useState } from 'react'
import { LANGUAGES, LanguageType } from './languages'
import { en_UK, pt_BR } from './lang'
import { get } from 'lodash'

const DEFAULT_LANGUAGE = LANGUAGES.ptBr

const LanguageContext = React.createContext({
  language: DEFAULT_LANGUAGE,
  setLanguage: (language: LanguageType) => {},
})
LanguageContext.displayName = 'LanguageContext'

type Props = {
  children: React.ReactNode
}

const LanguageProvider = ({ children }: Props) => {
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE)
  const providerValue = {
    language,
    setLanguage,
  }

  return (
    <LanguageContext.Provider value={providerValue}>
      {children}
    </LanguageContext.Provider>
  )
}

const useLanguage = () => {
  return useContext(LanguageContext)
}

const useTranslation: (path: string) => string = (path: string) => {
  const { language } = useContext(LanguageContext)
  switch (language) {
  case LANGUAGES.enUk:
    return get(en_UK, path, 'Translation not found')
  case LANGUAGES.ptBr:
    return get(pt_BR, path, 'Translation not found')
  default:
    throw Error(`Language ${language} not found.`)
  }
}

export { LanguageProvider, useLanguage, useTranslation }
