import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useMemo,
  useState
} from 'react'
import menuMock from '~/mocks/menu.json'
import { MenuModel, Section } from '~/models/menu'

type IMenuContext = {
  menu: MenuModel
  currentSection: Section
  setCurrentSection: Dispatch<SetStateAction<Section>>
}

export const MenuContext = createContext<IMenuContext>({
  menu: menuMock,
  currentSection: menuMock.sections[0],
  setCurrentSection: () => null
})

interface MenuProviderProps {
  children: ReactNode
}

export const MenuProvider = ({ children }: MenuProviderProps) => {
  const [currentSection, setCurrentSection] = useState<Section>(
    menuMock.sections[0]
  )

  const valueContext = useMemo(
    () => ({
      menu: menuMock,
      currentSection: currentSection,
      setCurrentSection: setCurrentSection
    }),
    [currentSection, setCurrentSection]
  )

  return (
    <MenuContext.Provider value={valueContext}>{children}</MenuContext.Provider>
  )
}
