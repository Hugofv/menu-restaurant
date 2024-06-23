import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { useMemo } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import AppProvider from './providers/AppProvider'
import { queryClient } from './lib'

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
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <RouterProvider router={routesMemo} />
      </AppProvider>
    </QueryClientProvider>
  )
}

export default App
