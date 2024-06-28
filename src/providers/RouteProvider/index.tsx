import { ReactNode, createContext, useMemo } from 'react'
import Menu from '~/templates/Menu'
import { useTranslation } from 'react-i18next'
import NotImplemented from '~/templates/NotImplemented'
import NotFound from '~/templates/NotFound'

type Route = {
  path: string
  title: string
  element: ReactNode
  showMenu: boolean
}

type IRouteValue = {
  routes: Route[]
  current: Route | undefined | null
  findRoute: (_routes: Route[], path: string) => Route | undefined | null
}

export const RouteContext = createContext<IRouteValue>({
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
        path: '/',
        title: t('common.menu'),
        showMenu: true,
      },
      {
        element: <NotImplemented />,
        path: '/signin',
        title: t('common.signin'),
        showMenu: true,
      },
      {
        element: <NotImplemented />,
        path: '/contact',
        title: t('common.contact'),
        showMenu: true,
      },
      {
        element: <NotFound />,
        path: '*',
        title: t('common.notFound'),
        showMenu: false,
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
