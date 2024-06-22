import { ReactNode, createElement } from 'react'

import styled, { CSSProperties } from 'styled-components'
import { ComponentVariant } from './type'

interface IStyledTypography {
  variant: ComponentVariant
  children: ReactNode
  style: CSSProperties
}

export const StyledTypography = styled(
  ({ variant, children, ...props }: IStyledTypography) =>
    createElement(variant, props, children)
)``
