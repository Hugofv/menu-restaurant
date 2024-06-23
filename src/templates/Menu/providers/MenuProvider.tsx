import { ReactNode, createContext, useMemo } from 'react'

export const MenuContext = createContext({})

interface MenuProviderProps {
  children: ReactNode
}

export const MenuProvider = ({ children }: MenuProviderProps) => {
  const valueContext = useMemo(() => ({}), [])

  return (
    <MenuContext.Provider value={valueContext}>{children}</MenuContext.Provider>
  )
}
