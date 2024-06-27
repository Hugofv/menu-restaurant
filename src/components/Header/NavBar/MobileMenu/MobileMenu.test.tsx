import { screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { useRouteProvider } from '~/hooks/useRouteProvider'
import MobileMenu from '.'
import { render } from '~/testUtils'

jest.mock('~/hooks/useRouteProvider', () => ({
  useRouteProvider: jest.fn()
}))

const mockRoutes = [
  { path: '/home', title: 'Home' },
  { path: '/about', title: 'About' },
  { path: '/contact', title: 'Contact' }
]

describe('MobileMenu Component', () => {
  beforeEach(() => {
    ;(useRouteProvider as jest.Mock).mockReturnValue({
      current: { title: 'Home', path: '/home' },
      routes: mockRoutes
    })
  })

  test('renders current route title correctly', () => {
    render(
      <BrowserRouter>
        <MobileMenu />
      </BrowserRouter>
    )

    expect(screen.getByText('Home')).toBeInTheDocument()
  })

  test('toggles menu visibility on icon click', () => {
    render(
      <BrowserRouter>
        <MobileMenu />
      </BrowserRouter>
    )

    const menuIcon = screen.getByTestId('MenuIcon')

    expect(screen.queryByText('About')).not.toBeInTheDocument()

    fireEvent.click(menuIcon)

    expect(screen.getByText('About')).toBeInTheDocument()

    fireEvent.click(menuIcon)

    expect(screen.queryByText('About')).not.toBeInTheDocument()
  })
})
