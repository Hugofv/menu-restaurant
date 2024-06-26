export interface ThemeColors {
  primary: string
  secondary: string
  navBackground: string
  primaryHover: string
  background: string
  backgroundBase: string
  backgroundPage: string
  light: string
  border: string
}

export interface TextColors {
  main: string
  primary: string
  secondary: string
  light: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    color: ThemeColors
    textColor: TextColors
    font: string
  }
}
