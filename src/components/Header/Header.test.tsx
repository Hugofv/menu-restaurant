import { screen } from '@testing-library/react'
import { useAppProvider } from '~/hooks/useAppProvider'
import Header from '.'
import { render } from '~/testUtils'
import { BrowserRouter } from 'react-router-dom'

jest.mock('~/hooks/useAppProvider', () => ({
  useAppProvider: jest.fn()
}))

const mockCompany = {
  webSettings: {
    bannerImage: 'http://example.com/banner.jpg'
  }
}

describe('Header Component', () => {
  beforeEach(() => {
    ;(useAppProvider as jest.Mock).mockReturnValue({
      company: mockCompany
    })
  })

  test('renders NavBar', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )

    expect(screen.getByTestId('WrapperDesktopMenu')).toBeInTheDocument()
  })

  test('renders Container with correct banner image', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )

    const container = screen.getByTestId('HeaderContainer')
    expect(container).toHaveStyle(
      `background-image: url(${mockCompany.webSettings.bannerImage})`
    )
  })
})
