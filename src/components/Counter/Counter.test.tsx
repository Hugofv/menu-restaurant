import { screen, fireEvent } from '@testing-library/react'
import Counter from '.'
import { render } from '~/testUtils'

describe('Counter Component', () => {
  test('renders Counter with default value', () => {
    render(<Counter />)

    expect(screen.getByText('1')).toBeInTheDocument()
  })

  test('handles increment and decrement correctly', () => {
    const setValueMock = jest.fn()
    render(<Counter value={5} setValue={setValueMock} />)

    const plusButton = screen.getByTestId('ButtonPlus')
    const minusButton = screen.getByTestId('ButtonMinus')

    fireEvent.click(plusButton)
    expect(setValueMock).toHaveBeenCalledWith(6)

    fireEvent.click(minusButton)
    expect(setValueMock).toHaveBeenCalledWith(5)
  })

  test('does not decrement below minValue', () => {
    const setValueMock = jest.fn()
    render(<Counter value={1} minValue={1} setValue={setValueMock} />)

    const minusButton = screen.getByTestId('ButtonMinus')

    expect(minusButton).toBeDisabled()

    fireEvent.click(minusButton)
    expect(setValueMock).not.toHaveBeenCalled()
  })

  test('renders with correct sizes for medium and small', () => {
    render(
      <>
        <Counter size='small' />
        <Counter value={2} size='medium' />
      </>
    )

    expect(screen.getByText('1')).toHaveStyle('font-size: 16px')
    expect(screen.getByText('2')).toHaveStyle('font-size: 24px')
  })
})
