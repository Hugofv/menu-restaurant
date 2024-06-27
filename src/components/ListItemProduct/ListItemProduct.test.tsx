import { screen, fireEvent } from '@testing-library/react'
import { Product } from '~/models/menu'
import { render } from '~/testUtils'
import ListItemProduct from '.'

// @ts-ignore
const mockProduct: Product = {
  id: 1,
  name: 'Test Product',
  description: 'Test description',
  price: 9.99,
  images: [{ id: 1, image: 'http://example.com/image.jpg' }]
}

describe('ListItemProduct Component', () => {
  test('renders product name, description, and price', () => {
    render(<ListItemProduct product={mockProduct} onSelectProduct={() => {}} />)

    expect(screen.getByText('Test Product')).toBeInTheDocument()
    expect(screen.getByText('Test description')).toBeInTheDocument()
    expect(screen.getByText('R$ 9,99')).toBeInTheDocument()
  })

  test('renders product quantity badge when quantity is provided', () => {
    render(
      <ListItemProduct
        product={mockProduct}
        quantity={2}
        onSelectProduct={() => {}}
      />
    )

    expect(screen.getByText('2')).toBeInTheDocument()
  })

  test('calls onSelectProduct when clicked', () => {
    const handleSelectProduct = jest.fn()
    render(
      <ListItemProduct
        product={mockProduct}
        onSelectProduct={handleSelectProduct}
      />
    )

    const productWrapper = screen.getByTestId('WrapperListItemProduct')
    fireEvent.click(productWrapper)

    expect(handleSelectProduct).toHaveBeenCalled()
  })

  test('renders product image when available', () => {
    render(<ListItemProduct product={mockProduct} onSelectProduct={() => {}} />)

    const productImage = screen.getByRole('img')
    expect(productImage).toBeInTheDocument()
    expect(productImage).toHaveAttribute('src', 'http://example.com/image.jpg')
  })
})
