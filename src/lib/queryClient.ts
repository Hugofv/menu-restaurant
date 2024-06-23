import { QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: false,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      retryDelay: false,
      retry: false
    }
  }
})

export default queryClient
