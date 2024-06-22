export interface ThemeColors {
  primary: string
  secondary: string
  primaryHover: string
  background: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    color: ThemeColors
    font: string
  }
}
