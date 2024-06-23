import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { useMemo } from 'react'
import AppProvider from './providers/AppProvider'
import GlobalStyle from './styles/GlobalStyle'
import { useRouteProvider } from './hooks/useRouteProvider'

const App = () => {
  const { routes } = useRouteProvider()

  const routesMemo = useMemo(() => {
    return createBrowserRouter(routes)
  }, [routes])

  return (
    <AppProvider>
      <GlobalStyle />
      <RouterProvider router={routesMemo}></RouterProvider>
    </AppProvider>
  )
}

export default App
