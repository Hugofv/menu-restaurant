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
  current: Route | undefined | null
  findRoute: (_routes: Route[], path: string) => Route | undefined | null
}

export const RouteContext = React.createContext<IRouteValue>({
  routes: [],
  current: null,
  findRoute: () => null
})

type IRouteProvider = {
  children: React.ReactNode
}

const RouteProvider: React.FC<IRouteProvider> = ({ children }) => {
  const { t } = useTranslation()
  const pathname = window.location.pathname

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

  const findRoute = (_routes: Route[], path: string) =>
    _routes.find((route) => route.path === path)

  const valueContext = useMemo<IRouteValue>(
    () => ({
      routes,
      current: findRoute(routes, pathname),
      findRoute
    }),
    [pathname, routes]
  )

  return (
    <RouteContext.Provider value={valueContext}>
      {children}
    </RouteContext.Provider>
  )
}

export default RouteProvider
