import { ReactNode } from 'react'
import { ThemeColors } from '~/styles/Theme/type'

export interface IButton {
  children: ReactNode
  color?: keyof ThemeColors
}

export interface IStyledButton extends IButton {
   
}