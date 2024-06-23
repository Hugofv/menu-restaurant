import React, { ReactNode, useMemo } from 'react'
import Home from '~/templates/Home'
import { useTranslation } from 'react-i18next'

type Route = {
  path: string
  title: string
  element: ReactNode
  errorElement: ReactNode
}

type IRouteValue = {
  routes: Route[]
}

export const RouteContext = React.createContext<IRouteValue>({
  routes: []
})

type IRouteProvider = {
  children: React.ReactNode
}

const RouteProvider: React.FC<IRouteProvider> = ({ children }) => {
  const { t } = useTranslation()

  const routes = useMemo<Route[]>(() => {
    return [
      {
        element: <Home />,
        errorElement: null,
        path: '/',
        title: t('common.menu')
      }
    ]
  }, [t])

  const valueContext = useMemo<IRouteValue>(
    () => ({
      routes
    }),
    [routes]
  )

  return (
    <RouteContext.Provider value={valueContext}>
      {children}
    </RouteContext.Provider>
  )
}

export default RouteProvider
