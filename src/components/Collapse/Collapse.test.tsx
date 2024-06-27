import { screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { render } from '~/testUtils'
import Collapse from '.'

describe('Collapse Component', () => {
  test('renders Collapse with title and children', () => {
    render(
      <Collapse title='Test Title'>
        <div>Test Content</div>
      </Collapse>
    )

    expect(screen.getByText('Test Title')).toBeInTheDocument()
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })

  test('defaultOpen prop works correctly', () => {
    render(
      <Collapse title='Test Title' defaultOpen={false}>
        <div>Test Content</div>
      </Collapse>
    )

    const contentElement = screen.getByTestId('WrapperContent')

    expect(contentElement).toHaveStyle('max-height: 0')
  })

  test('toggles content visibility when header is clicked', () => {
    render(
      <Collapse title='Test Title'>
        <div>Test Content</div>
      </Collapse>
    )

    const headerElement = screen.getByText('Test Title').parentElement
    const contentElement = screen.getByTestId('WrapperContent')

    expect(contentElement).toHaveStyle('max-height: 0rem')

    fireEvent.click(headerElement!)
    expect(contentElement).toHaveStyle('max-height: 0rem')

    fireEvent.click(headerElement!)
    expect(contentElement).toHaveStyle('max-height: 0rem')
  })
})
