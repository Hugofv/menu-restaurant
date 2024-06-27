import { fireEvent, screen } from '@testing-library/react'
import { Product } from '~/models/menu'
import { render } from '~/testUtils'
import ListSectionProducts from '.'
import menu from '~/mocks/menu.json'

const mockSections = menu.sections

// @ts-ignore
const mockBasket = new Map<number, Product>([
  [
    101,
    {
      id: 101,
      name: 'Caipirinha',
      description: 'Description 1',
      price: 10.0,
      quantity: 2
    }
  ],
  [
    201,
    {
      id: 201,
      name: 'Ogro Burger',
      description: 'Description 3',
      price: 20.0,
      quantity: 1
    }
  ]
])

describe('ListSectionProducts Component', () => {
  test('renders sections with their products', () => {
    render(
      <ListSectionProducts
        sections={mockSections}
        basket={mockBasket}
        handleDetailProduct={() => {}}
      />
    )

    expect(screen.getByText('Burgers')).toBeInTheDocument()
    expect(screen.getByText('Drinks')).toBeInTheDocument()
    expect(screen.getByText('Caipirinha')).toBeInTheDocument()
    expect(screen.getByText('Smash Brooks')).toBeInTheDocument()
    expect(screen.getByText('Ogro Burger')).toBeInTheDocument()
  })

  test('handles click on product to detail product', () => {
    const handleDetailProduct = jest.fn()
    render(
      <ListSectionProducts
        sections={mockSections}
        basket={mockBasket}
        handleDetailProduct={handleDetailProduct}
      />
    )

    const product1Element = screen.getByText('Hard Core')
    fireEvent.click(product1Element)

    expect(handleDetailProduct).toHaveBeenCalledWith(mockSections[0].items[0])
  })
})
