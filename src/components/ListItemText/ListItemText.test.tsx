import { screen } from '@testing-library/react'
import { render } from '~/testUtils'
import ListItemText from '.'

describe('ListItemText Component', () => {
  test('renders primary text', () => {
    render(<ListItemText primary='Primary Text' info='Info Text' />)

    expect(screen.getByText('Primary Text')).toBeInTheDocument()
  })

  test('renders secondary text when provided', () => {
    render(
      <ListItemText
        primary='Primary Text'
        secondary='Secondary Text'
        info='Info Text'
      />
    )

    expect(screen.getByText('Secondary Text')).toBeInTheDocument()
  })

  test('renders info text', () => {
    render(<ListItemText primary='Primary Text' info='Info Text' />)

    expect(screen.getByText('Info Text')).toBeInTheDocument()
  })
})
