import { render } from '~/testUtils'
import Basket from '.'

describe('Basket Component', () => {
  test('renders correctly', () => {
    const { getByText, getByTestId } = render(<Basket />)

    expect(getByText(/menu.basket/i)).toBeInTheDocument()
    expect(getByTestId(/DetailBasket/i)).toBeInTheDocument()
    expect(getByText(/menu.checkoutNow/i)).toBeInTheDocument()
  })
})
