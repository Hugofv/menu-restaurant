import {
  fireEvent,
  screen,
  waitForElementToBeRemoved
} from '@testing-library/react'
import { useMenuProvider } from '../../hooks/useMenuProvider'
import { Product } from '~/models/menu'
import DesktopView from '.'
import { render } from '~/testUtils'
import { BrowserRouter } from 'react-router-dom'

jest.mock('../../hooks/useMenuProvider')

describe('DesktopView Component', () => {
  const setQuery = jest.fn()
  const setCurrentSection = jest.fn()
  const addProductOnBasket = jest.fn()
  // @ts-ignore
  const product: Product = {
    id: 1,
    name: 'Product 1',
    price: 10,
    quantity: 1,
    description: 'Description 1',
    images: [{ id: 232, image: 'image1.jpg' }]
  }
  const menuFiltered = { sections: [{ name: 'Section 1', items: [product] }] }
  // @ts-ignore
  const basket = new Map<number, Product>([
    [1, { id: 1, name: 'Product 1', price: 10, quantity: 1 }]
  ])

  beforeEach(() => {
    ;(useMenuProvider as jest.Mock).mockReturnValue({
      menuFiltered,
      basket,
      query: '',
      setQuery,
      currentSection: 0,
      setCurrentSection,
      addProductOnBasket
    })
  })

  test('renders correctly', () => {
    render(
      <BrowserRouter>
        <DesktopView />
      </BrowserRouter>
    )

    expect(screen.getByTestId('HeaderContainer')).toBeInTheDocument()
    expect(
      screen.getByPlaceholderText('menu.searchMenuItems')
    ).toBeInTheDocument()
    expect(screen.getByTestId('CarouseSectionContainer')).toBeInTheDocument()
    expect(screen.getByTestId('ListSectionProducts')).toBeInTheDocument()
    expect(screen.getByTestId('Basket')).toBeInTheDocument()
  })

  test('handles product detail modal open and close', () => {
    render(
      <BrowserRouter>
        <DesktopView />
      </BrowserRouter>
    )

    const productElement = screen.getByTestId(`ItemProduct-${product.id}`)
    fireEvent.click(productElement)

    expect(screen.getByTestId('modal-container')).toBeInTheDocument()
    expect(screen.getByTestId('ProductDetail')).toHaveTextContent('Product 1')

    const closeButton = screen.getByTestId('IconClose')
    fireEvent.click(closeButton)

    waitForElementToBeRemoved(() =>
      expect(screen.queryByTestId('modal-container')).not.toBeInTheDocument()
    )
  })
})
