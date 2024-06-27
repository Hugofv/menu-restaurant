import { screen, fireEvent } from '@testing-library/react'
import { render } from '~/testUtils'
import ProductDetail from '.'

describe('ProductDetail Component', () => {
  const mockProduct = {
    id: 1625705,
    name: 'Test Product',
    description: 'Test description',
    alcoholic: 0,
    price: 13.0,
    position: 0,
    visible: 1,
    availabilityType: 'AVAILABLE_NOW',
    sku: 'I1625705',
    available: true,
    modifiers: [
      {
        id: 1101202,
        name: 'Size',
        minChoices: 1,
        maxChoices: 1,
        items: [
          {
            id: 101,
            name: 'Small',
            price: 0,
            maxChoices: 1,
            position: 0,
            visible: 1,
            availabilityType: 'AVAILABLE_NOW',
            available: true
          },
          {
            id: 102,
            name: 'Medium',
            price: 1,
            maxChoices: 1,
            position: 1000,
            visible: 1,
            availabilityType: 'AVAILABLE_NOW',
            qty: 1,
            available: true
          }
        ]
      }
    ]
  }

  test('renders product details correctly', () => {
    render(
      <ProductDetail
        product={mockProduct}
        onClose={() => {}}
        onAddProduct={() => {}}
      />
    )

    expect(screen.getByText('Test Product')).toBeInTheDocument()
    expect(screen.getByText('Test description')).toBeInTheDocument()

    expect(screen.getByText('Size')).toBeInTheDocument()
    expect(screen.getByText('Small')).toBeInTheDocument()
    expect(screen.getByText('Medium')).toBeInTheDocument()

    expect(screen.getByTestId('WrapperCounter')).toBeInTheDocument()

    expect(screen.getByText(/menu.addToOrder/i)).toBeInTheDocument()
  })

  test('adds product to basket on button click', () => {
    const mockOnAddProduct = jest.fn()

    render(
      <ProductDetail
        product={mockProduct}
        onClose={() => {}}
        onAddProduct={mockOnAddProduct}
      />
    )

    fireEvent.click(screen.getByTestId('StyledRadio-Small'))

    fireEvent.click(screen.getByText(/menu.addToOrder/i))

    expect(mockOnAddProduct).toHaveBeenCalled()
    expect(mockOnAddProduct).toHaveBeenCalledWith(
      expect.objectContaining({
        ...mockProduct,
        quantity: 1,
        modifiersSelected: [
          {
            availabilityType: 'AVAILABLE_NOW',
            available: true,
            id: 101,
            maxChoices: 1,
            name: 'Small',
            position: 0,
            price: 0,
            visible: 1
          }
        ]
      })
    )
  })

  test('selects modifiers correctly', () => {
    render(
      <ProductDetail
        product={mockProduct}
        onClose={() => {}}
        onAddProduct={() => {}}
      />
    )

    fireEvent.click(screen.getByTestId('StyledRadio-Small'))

    expect(screen.getByTestId('StyledRadio-Small')).toBeChecked()

    fireEvent.click(screen.getByTestId('StyledRadio-Medium'))

    expect(screen.getByTestId('StyledRadio-Medium')).toBeChecked()

    expect(screen.getByTestId('StyledRadio-Small')).not.toBeChecked()
  })
})
