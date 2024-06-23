import React, { useEffect, useMemo, useState } from 'react'
import { DefaultTheme } from 'styled-components'
import Theme from '~/styles/Theme'
import { defaultTheme } from '~/styles/Theme/defaultTheme'
import companyMock from '~/mocks/company.json'
import { CompanyModel } from '~/models/company'
import useRouterConfig from '~/hooks/useRouterConfig'

type IAppValue = {
  theme: DefaultTheme
  company: CompanyModel
}

export const AppContext = React.createContext<IAppValue>({
  theme: defaultTheme,
  company: companyMock
})

type IAppProvider = {
  children: React.ReactNode
}

const AppProvider: React.FC<IAppProvider> = ({ children }) => {
  const [theme, setTheme] = useState<DefaultTheme>(defaultTheme)
  const [company] = useState<CompanyModel>(companyMock as CompanyModel)

  useEffect(() => {
    initCompanyTheme()
  }, [])

  const initCompanyTheme = () => {
    const companyTheme: DefaultTheme = {
      ...defaultTheme,
      color: {
        primary: companyMock.webSettings.primaryColour,
        navBackground: companyMock.webSettings.navBackgroundColour,
        background: companyMock.webSettings.backgroundColour,
        primaryHover: companyMock.webSettings.primaryColourHover
      }
    }

    setTheme(companyTheme)
  }

  const valueContext = useMemo<IAppValue>(
    () => ({ theme, company, setTheme }),
    [theme, company, setTheme]
  )

  return (
    <AppContext.Provider value={valueContext}>
      <Theme theme={theme}>{children}</Theme>
    </AppContext.Provider>
  )
}

export default AppProvider
