import { screen } from '@testing-library/react'
import { useRouteProvider } from '~/hooks/useRouteProvider'
import DesktopMenu from '.'
import { render } from '~/testUtils'
import { BrowserRouter } from 'react-router-dom'

jest.mock('~/hooks/useRouteProvider', () => ({
  useRouteProvider: jest.fn()
}))

const mockRoutes = [
  { path: '/home', title: 'Home' },
  { path: '/about', title: 'About' },
  { path: '/contact', title: 'Contact' }
]

describe('DesktopMenu Component', () => {
  beforeEach(() => {
    ;(useRouteProvider as jest.Mock).mockReturnValue({
      current: { path: '/home' },
      routes: mockRoutes
    })
  })

  test('renders menu items correctly', () => {
    render(
      <BrowserRouter>
        <DesktopMenu />
      </BrowserRouter>
    )

    mockRoutes.forEach((route) => {
      expect(screen.getByText(route.title)).toBeInTheDocument()
      expect(screen.getByText(route.title).closest('a')).toHaveAttribute(
        'href',
        route.path
      )
    })
  })

  test('highlights the active route', () => {
    render(
      <BrowserRouter>
        <DesktopMenu />
      </BrowserRouter>
    )

    const activeMenuItem = screen.getByTestId('Menu-Home')
    expect(activeMenuItem).toHaveStyle('border-bottom: 5px solid #FFFFFF;')
  })
})
