import { screen } from '@testing-library/react'
import { render } from '~/testUtils'
import Paper from '.'

describe('Paper Component', () => {
  test('renders children correctly', () => {
    render(
      <Paper>
        <div>Hello World</div>
      </Paper>
    )

    expect(screen.getByText('Hello World')).toBeInTheDocument()
  })

  test('passes additional props to wrapper element', () => {
    render(
      <Paper data-test-prop='test-value'>
        <div>Hello World</div>
      </Paper>
    )

    expect(screen.getByTestId('WrapperPaper')).toHaveAttribute(
      'data-test-prop',
      'test-value'
    )
  })
})
