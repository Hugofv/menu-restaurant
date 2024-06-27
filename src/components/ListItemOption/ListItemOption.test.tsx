import { screen, fireEvent } from '@testing-library/react'
import { render } from '~/testUtils'
import ListItemOption from '.'

describe('ListItemOption Component', () => {
  test('renders primary and secondary text', () => {
    render(
      <ListItemOption
        primary='Primary Text'
        secondary='Secondary Text'
        onChange={() => {}}
      />
    )

    expect(screen.getByText('Primary Text')).toBeInTheDocument()
    expect(screen.getByText('Secondary Text')).toBeInTheDocument()
  })

  test('renders unchecked radio by default', () => {
    render(<ListItemOption primary='Unchecked' onChange={() => {}} />)

    const radioElement = screen.getByTestId('StyledRadio-Unchecked')
    expect(radioElement).toBeInTheDocument()
    expect(radioElement).not.toBeChecked()
  })

  test('renders checked radio when checked prop is true', () => {
    render(
      <ListItemOption primary='Checked' checked={true} onChange={() => {}} />
    )

    const radioElement = screen.getByTestId('StyledRadio-Checked')
    expect(radioElement).toBeInTheDocument()
    expect(radioElement).toBeChecked()
  })

  test('calls onChange when radio is clicked', () => {
    const handleChange = jest.fn()
    render(<ListItemOption primary='Click me' onChange={handleChange} />)

    const radioElement = screen.getByTestId('StyledRadio-Click me')
    fireEvent.click(radioElement)

    expect(handleChange).toHaveBeenCalled()
  })
})
