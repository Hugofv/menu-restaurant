import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useMemo, useState } from 'react'
import { DefaultTheme } from 'styled-components'
import { getCompany } from '~/services/company'
import Theme from '~/styles/Theme'
import { defaultTheme } from '~/styles/Theme/defaultTheme'

type IAppValue = {
  theme: DefaultTheme
}

export const AppContext = React.createContext<IAppValue>({
  theme: defaultTheme
})

type IAppProvider = {
  children: React.ReactNode
}

const AppProvider: React.FC<IAppProvider> = ({ children }) => {
  const [theme, setTheme] = useState<DefaultTheme>(defaultTheme)
  const { isPending, error, data } = useQuery({
    queryKey: ['getCompany'],
    queryFn: getCompany
  })

  const valueContext = useMemo<IAppValue>(
    () => ({ theme, setTheme }),
    [theme, setTheme]
  )

  console.log(data)
  return (
    <AppContext.Provider value={valueContext}>
      <Theme theme={theme}>{children}</Theme>
    </AppContext.Provider>
  )
}

export default AppProvider
