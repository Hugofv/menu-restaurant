import { screen } from '@testing-library/react'
import { render } from '~/testUtils'
import Typography from '.'

describe('Typography Component', () => {
  test('renders default variant and color', () => {
    render(<Typography>Hello, World!</Typography>)

    expect(screen.getByText('Hello, World!')).toBeInTheDocument()
    expect(screen.getByText('Hello, World!')).toHaveStyle('font-size: .9rem;')

    expect(screen.getByText('Hello, World!')).toHaveStyle(
      'color: rgb(18, 18, 18);'
    )
  })

  test('renders specified variant and color', () => {
    render(
      <Typography variant='h1' color='secondary'>
        Heading Text
      </Typography>
    )

    expect(screen.getByText('Heading Text')).toBeInTheDocument()
    expect(screen.getByText('Heading Text')).toHaveStyle('font-size: 24px;')

    expect(screen.getByText('Heading Text')).toHaveStyle(
      'color: rgb(70, 70, 70);'
    )
  })

  test('applies additional styles', () => {
    render(<Typography fontWeight='bold'>Bold Text</Typography>)

    expect(screen.getByText('Bold Text')).toHaveStyle('font-weight: bold;')
  })
})
