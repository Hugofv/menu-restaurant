import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Theme from './styles/Theme'
import { useMemo } from 'react'

const App = () => {
  const routesMemo = useMemo(() => {
    return createBrowserRouter([
      {
        element: null,
        errorElement: null,
        path: '/'
      }
    ])
  }, [])

  return (
    <Theme>
      <RouterProvider router={routesMemo} />
    </Theme>
  )
}

export default App
