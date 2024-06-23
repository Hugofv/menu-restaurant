export interface ThemeColors {
  primary: string
  navBackground: string
  primaryHover: string
  background: string
  light: string
}

export interface TextColors {
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
