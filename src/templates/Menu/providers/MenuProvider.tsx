import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useCallback,
  useMemo,
  useState
} from 'react'
import { useDebounce } from '~/hooks/useDebounce'
import menuMock from '~/mocks/menu.json'
import { MenuModel, Product, Section } from '~/models/menu'

type IMenuContext = {
  menu: MenuModel
  menuFiltered: MenuModel
  query: string
  setQuery: Dispatch<SetStateAction<string>>
  currentSection: Section
  setCurrentSection: Dispatch<SetStateAction<Section>>
  basket: Map<number, Product>
  setBasket: Dispatch<SetStateAction<Map<number, Product>>>
  addProductOnBasket: (product: Product) => void
}

export const MenuContext = createContext<IMenuContext>({
  menu: menuMock,
  menuFiltered: menuMock,
  currentSection: menuMock?.sections?.[0],
  setCurrentSection: () => null,
  query: '',
  setQuery: () => null,
  basket: new Map<number, Product>(),
  setBasket: () => null,
  addProductOnBasket: () => null
})

interface MenuProviderProps {
  children: ReactNode
}

export const MenuProvider = ({ children }: MenuProviderProps) => {
  const [query, setQuery] = useState('')
  const [currentSection, setCurrentSection] = useState<Section>(
    menuMock.sections[0]
  )

  const [basket, setBasket] = useState<Map<number, Product>>(
    new Map<number, Product>()
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

  const addProductOnBasket = useCallback(
    (product: Product) => {
      const newBasket = new Map(basket)

      newBasket.set(product.id, product)
      setBasket(newBasket)
    },
    [basket]
  )

  const valueContext = useMemo(
    () => ({
      query,
      basket,
      setBasket,
      setQuery,
      addProductOnBasket,
      menu: menuMock,
      menuFiltered,
      currentSection: currentSection,
      setCurrentSection: setCurrentSection
    }),
    [addProductOnBasket, basket, currentSection, menuFiltered, query]
  )

  return (
    <MenuContext.Provider value={valueContext}>{children}</MenuContext.Provider>
  )
}
