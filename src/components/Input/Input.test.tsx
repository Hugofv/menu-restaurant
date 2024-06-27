import { fireEvent, screen } from '@testing-library/react'
import Input from '.'
import { render } from '~/testUtils'

describe('Input Component', () => {
  test('renders input element', () => {
    render(<Input data-testid='test-input' />)
    const inputElement = screen.getByTestId('test-input')
    expect(inputElement).toBeInTheDocument()
  })

  test('renders input with start icon', () => {
    const { container } = render(
      <Input data-testid='test-input' startIcon={<span>Icon</span>} />
    )
    const iconElement = container.querySelector('span')
    expect(iconElement).toBeInTheDocument()
  })

  test('passes attributes to input element', () => {
    render(<Input data-testid='test-input' placeholder='Enter text' />)
    const inputElement = screen.getByTestId('test-input') as HTMLInputElement
    expect(inputElement.placeholder).toBe('Enter text')
  })

  test('handles input change', () => {
    render(<Input data-testid='test-input' />)
    const inputElement = screen.getByTestId('test-input') as HTMLInputElement
    fireEvent.change(inputElement, { target: { value: 'new value' } });
    expect(inputElement.value).toBe('new value')
  })
})
