import { ReactNode } from "react"
import { TextColors } from "~/styles/Theme/type"

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span'
  | 'body1'
  | 'body2'

export type ComponentVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span'

export const VariantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  p: 'p',
  span: 'span',
  body1: 'span',
  body2: 'span'
}

export interface IStyledTypography extends TypographyProps {
  variant: TypographyVariant
  as: ComponentVariant
}

export type TypographyProps = {
  variant?: TypographyVariant
  children: ReactNode
  color?: keyof TextColors
}