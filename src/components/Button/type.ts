import { ReactNode } from 'react'
import { ThemeColors } from '~/styles/Theme/type'

export interface IButton {
  children: ReactNode
  disabled?: boolean
  onClick?: () => void
  color?: keyof ThemeColors
}

export interface IStyledButton {
  color?: keyof ThemeColors
}
