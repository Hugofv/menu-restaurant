import { useLocation } from 'react-router-dom'
import { useRouteProvider } from '../useRouteProvider'

type Route = {
  path: string
  title: string
}

const useRouterConfig = () => {
  const currentRoute = useLocation()
  const { routes } = useRouteProvider()

  const findRoute = (_routes: Route[], current) =>
    _routes.find(
      (route) =>
        route.path === current.pathname || route.id === current.pathname
    )

  return {
    current: findRoute(routes, currentRoute),
    routes: routes,
    findRoute
  }
}

export default useRouterConfig
