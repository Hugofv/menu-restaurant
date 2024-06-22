import React from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import { defaultTheme } from './defaultTheme'

interface ITheme {
  children: React.ReactNode
  theme?: DefaultTheme
}

const Theme = ({ children, theme = defaultTheme }: ITheme) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme
