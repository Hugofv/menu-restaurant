import { fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from '.'
import { render } from '~/testUtils'

describe('Button Component', () => {
  test('renders Button with children', () => {
    render(<Button>Test</Button>)

    const buttonElement = screen.getByTestId('Button')
    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveTextContent('Test')
  })

  test('applies disabled attribute correctly', () => {
    render(<Button disabled>Disabled Button</Button>)

    const buttonElement = screen.getByTestId('Button')
    expect(buttonElement).toBeDisabled()
  })

  test('triggers onClick handler when clicked', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Test</Button>)

    const buttonElement = screen.getByTestId('Button')
    fireEvent.click(buttonElement)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
