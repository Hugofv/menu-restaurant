import { Dispatch, ReactNode, createContext, useMemo, useReducer } from 'react'
import menuMock from '~/mocks/menu.json'
import { MenuAction, MenuState } from './types'

type IMenuContext = {
  state: MenuState
  dispatch: Dispatch<MenuAction>
}

export const MenuContext = createContext<IMenuContext>({
  state: { menu: menuMock },
  dispatch: () => null
})

interface MenuProviderProps {
  children: ReactNode
}

function reducer(state: MenuState, action: MenuAction) {
  const { type, payload } = action
  switch (type) {
    default:
      return state
  }
}

export const MenuProvider = ({ children }: MenuProviderProps) => {
  const [state, dispatch] = useReducer(reducer, {
    menu: menuMock
  })

  const valueContext = useMemo(
    () => ({
      state,
      dispatch
    }),
    [state]
  )

  return (
    <MenuContext.Provider value={valueContext}>{children}</MenuContext.Provider>
  )
}
