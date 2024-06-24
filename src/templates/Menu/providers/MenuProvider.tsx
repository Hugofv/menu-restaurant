import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useMemo,
  useState
} from 'react'
import { useDebounce } from '~/hooks/useDebounce'
import menuMock from '~/mocks/menu.json'
import { MenuModel, Section } from '~/models/menu'

type IMenuContext = {
  menu: MenuModel
  menuFiltered: MenuModel
  query: string
  setQuery: Dispatch<SetStateAction<string>>
  currentSection: Section
  setCurrentSection: Dispatch<SetStateAction<Section>>
}

export const MenuContext = createContext<IMenuContext>({
  menu: menuMock,
  menuFiltered: menuMock,
  currentSection: menuMock.sections[0],
  setCurrentSection: () => null,
  query: '',
  setQuery: () => null
})

interface MenuProviderProps {
  children: ReactNode
}

export const MenuProvider = ({ children }: MenuProviderProps) => {
  const [query, setQuery] = useState('')
  const [currentSection, setCurrentSection] = useState<Section>(
    menuMock.sections[0]
  )

  const searchQuery = useDebounce(query, 300)

  const menuFiltered = useMemo(() => {
    if (searchQuery && searchQuery.length) {
      const filtered = JSON.parse(JSON.stringify(menuMock))

      filtered.sections.forEach((section: Section) => {
        section.items = section.items.filter((item) => {
          const pattern = new RegExp(searchQuery, 'gi')

          return pattern.test(item.name)
        })
      })

      return filtered
    } else {
      return JSON.parse(JSON.stringify(menuMock))
    }
  }, [searchQuery])

  const valueContext = useMemo(
    () => ({
      query,
      setQuery,
      menu: menuMock,
      menuFiltered,
      currentSection: currentSection,
      setCurrentSection: setCurrentSection
    }),
    [currentSection, menuFiltered, query]
  )

  return (
    <MenuContext.Provider value={valueContext}>{children}</MenuContext.Provider>
  )
}
