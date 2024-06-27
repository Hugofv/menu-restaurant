import '@testing-library/jest-dom'
import { render as rtlRender } from '@testing-library/react'
import { ReactElement } from 'react'
import AppProvider from '~/providers/AppProvider'
import RouteProvider from '~/providers/RouteProvider'

function render(ui: ReactElement, { ...renderOptions } = {}) {
  function Wrapper({ children }: { children: ReactElement }) {
    return (
      <RouteProvider>
        <AppProvider>{children}</AppProvider>
      </RouteProvider>
    )
  }

  // @ts-ignore
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

export { screen } from '@testing-library/react'

export { render }
