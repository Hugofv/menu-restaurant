import React, { ReactNode, useMemo } from 'react'
import Menu from '~/templates/Menu'
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
        element: <Menu />,
        errorElement: null,
        path: '/',
        title: t('common.menu')
      },
      {
        element: null,
        errorElement: null,
        path: '/signin',
        title: t('common.signin')
      },
      {
        element: null,
        errorElement: null,
        path: '/contact',
        title: t('common.contact')
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
