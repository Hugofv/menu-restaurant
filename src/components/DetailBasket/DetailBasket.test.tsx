import { screen, fireEvent } from '@testing-library/react'
import { Product } from '~/models/menu'
import DetailBasket from '.'
import { render } from '~/testUtils'

jest.mock(
  '~/utils/formatMoney',
  () => (value: number) => `$${value.toFixed(2)}`
)

// @ts-ignore
const mockProducts: Map<number, Product> = new Map([
  [
    1,
    {
      id: 1,
      name: 'Product 1',
      price: 10,
      quantity: 2,
      modifiersSelected: [{ name: 'Modifier 1', price: 1 }]
    }
  ],
  [
    2,
    {
      id: 2,
      name: 'Product 2',
      price: 20,
      quantity: 1,
      modifiersSelected: [{ name: 'Modifier 2', price: 2 }]
    }
  ]
])

describe('DetailBasket Component', () => {
  test('renders basket items correctly', () => {
    const setBasketMock = jest.fn()
    render(<DetailBasket basket={mockProducts} setBasket={setBasketMock} />)

    expect(screen.getByText('Product 1')).toBeInTheDocument()
    expect(screen.getByText('Product 2')).toBeInTheDocument()

    expect(screen.getAllByText('$22.00')[0]).toBeInTheDocument()
    expect(screen.getAllByText('$22.00')[0]).toBeInTheDocument()

    expect(screen.getByText('Modifier 1(+$1.00)')).toBeInTheDocument()
    expect(screen.getByText('Modifier 2(+$2.00)')).toBeInTheDocument()
  })

  test('handles quantity changes correctly', () => {
    const setBasketMock = jest.fn()
    render(<DetailBasket basket={mockProducts} setBasket={setBasketMock} />)

    const plusButton = screen.getAllByTestId('ButtonPlus')
    const minusButton = screen.getAllByTestId('ButtonMinus')

    fireEvent.click(minusButton[0])
    fireEvent.click(plusButton[1])

    expect(setBasketMock).toHaveBeenCalledTimes(2)
  })

  test('calculates total price correctly', () => {
    render(<DetailBasket basket={mockProducts} setBasket={jest.fn()} />)

    expect(screen.getAllByText('$44.00')[0]).toBeInTheDocument()
  })
})
